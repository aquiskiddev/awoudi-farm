import { Container } from "@/components/ui/container";
import { PhotoSlot } from "@/components/ui/photo-slot";

export function PresentationFerme() {
  return (
    <section className="bg-sand-100 py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <PhotoSlot
          label="Photo reelle — vue de la ferme"
          tone="sand"
          className="min-h-[360px] order-2 lg:order-1"
        />

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-3xl text-forest-950 sm:text-4xl">
            Une ferme familiale, geree avec exigence.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-forest-800/80">
            Chaque recolte est suivie de pres, du semis a la livraison. Nous
            travaillons nos terres avec des methodes respectueuses du sol et
            de nos clients, pour proposer des produits qui ont vraiment le
            gout de ce qu'ils sont.
          </p>
        </div>
      </Container>
    </section>
  );
}
