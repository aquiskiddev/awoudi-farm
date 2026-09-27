create extension if not exists "pgcrypto";


create type user_role as enum ('super_admin', 'owner', 'manager', 'customer');

create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  phone text,
  role user_role not null default 'customer',
  created_at timestamptz not null default now()
);


create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create type product_unit as enum ('kg', 'sac', 'carton', 'panier', 'unite');

create table products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories (id) on delete set null,
  name text not null,
  slug text not null unique,
  description text,
  unit product_unit not null default 'unite',
  price numeric(12, 2) not null check (price >= 0),
  stock_quantity integer not null default 0 check (stock_quantity >= 0),
  is_available boolean not null default true,
  is_featured boolean not null default false,
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products (id) on delete cascade,
  url text not null,
  position integer not null default 0
);


create type order_status as enum (
  'pending', 'confirmed', 'processing', 'ready', 'delivered', 'cancelled'
);

create type payment_status as enum (
  'pending', 'processing', 'paid', 'failed', 'cancelled', 'refunded'
);

create type payment_provider as enum ('t_money', 'flooz');

create table orders (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  customer_id uuid not null references profiles (id) on delete restrict,
  status order_status not null default 'pending',
  subtotal numeric(12, 2) not null check (subtotal >= 0),
  delivery_fee numeric(12, 2) not null default 0,
  total numeric(12, 2) not null check (total >= 0),
  payment_status payment_status not null default 'pending',
  payment_provider payment_provider,
  payment_reference text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders (id) on delete cascade,
  product_id uuid not null references products (id) on delete restrict,
  product_name text not null,      -- snapshot au moment de la commande
  unit_price numeric(12, 2) not null,
  quantity integer not null check (quantity > 0),
  line_total numeric(12, 2) not null
);

-- Journal des evenements de paiement (webhooks / confirmations)
create table payment_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders (id) on delete cascade,
  provider payment_provider not null,
  provider_event_id text,          -- idempotence : empeche le double traitement
  raw_payload jsonb not null,
  received_at timestamptz not null default now(),
  unique (provider, provider_event_id)
);

create index idx_products_category on products (category_id);
create index idx_orders_customer on orders (customer_id);
create index idx_order_items_order on order_items (order_id);


alter table profiles enable row level security;
alter table products enable row level security;
alter table categories enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table payment_events enable row level security;

-- Fonction utilitaire : role de l'utilisateur courant
create function current_user_role() returns user_role
language sql stable security definer as $$
  select role from profiles where id = auth.uid();
$$;

-- PROFILES : chacun voit/modifie le sien ; le staff voit tout
create policy "profiles_select_own_or_staff" on profiles
  for select using (
    id = auth.uid() or current_user_role() in ('owner', 'manager', 'super_admin')
  );

create policy "profiles_update_own" on profiles
  for update using (id = auth.uid());

-- CATALOGUE : lecture publique, ecriture reservee au staff
create policy "categories_public_read" on categories for select using (true);
create policy "categories_staff_write" on categories
  for all using (current_user_role() in ('owner', 'manager', 'super_admin'));

create policy "products_public_read" on products
  for select using (is_available or current_user_role() in ('owner', 'manager', 'super_admin'));
create policy "products_staff_write" on products
  for all using (current_user_role() in ('owner', 'manager', 'super_admin'));

-- COMMANDES : le client ne voit/modifie que les siennes ; le staff voit tout
create policy "orders_customer_read_own" on orders
  for select using (
    customer_id = auth.uid() or current_user_role() in ('owner', 'manager', 'super_admin')
  );
create policy "orders_customer_insert_own" on orders
  for insert with check (customer_id = auth.uid());
create policy "orders_staff_update" on orders
  for update using (current_user_role() in ('owner', 'manager', 'super_admin'));

create policy "order_items_follow_order" on order_items
  for select using (
    exists (
      select 1 from orders o
      where o.id = order_items.order_id
        and (o.customer_id = auth.uid() or current_user_role() in ('owner', 'manager', 'super_admin'))
    )
  );

create policy "payment_events_staff_only" on payment_events
  for select using (current_user_role() in ('owner', 'manager', 'super_admin'));
