import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

const links = [
  { href: "/produits", label: "Produits" },
  { href: "/a-propos", label: "La ferme" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-line bg-sand-50/90 backdrop-blur supports-[backdrop-filter]:bg-sand-50/70 sticky top-0 z-40">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-forest-950"
        >
          Awoudi Farm
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-forest-800 transition-colors hover:text-clay-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/panier"
            className="text-sm text-forest-800 transition-colors hover:text-clay-600"
          >
            Panier
          </Link>
          <ButtonLink href="/produits" className="hidden sm:inline-flex">
            Commander
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
