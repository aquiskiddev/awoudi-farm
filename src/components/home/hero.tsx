import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { PhotoSlot } from "@/components/ui/photo-slot";

export function Hero() {
  return (
    <section className="overflow-hidden bg-forest-800 text-sand-50">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-sm text-sand-50/60">Ferme familiale — Lome, Togo</p>
          <h1 className="mt-4 font-display text-[2.75rem] leading-[1.05] sm:text-6xl">
            Du champ a votre table.
          </h1>
          <p className="mt-6 max-w-md text-base text-sand-50/75">
            Nous cultivons et recoltons nos produits avec soin, puis les
            livrons frais a Lome et ses environs — sans intermediaire, sans
            compromis sur la qualite.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/produits">Decouvrir nos produits</ButtonLink>
            <ButtonLink
              href="/a-propos"
              variant="secondary"
              className="border-sand-50/30 text-sand-50 hover:border-sand-50/70"
            >
              Notre ferme
            </ButtonLink>
          </div>
        </div>

        <PhotoSlot
          label="Photo reelle de la ferme ou d'une recolte"
          className="min-h-[320px] lg:min-h-[480px]"
        />
      </Container>
    </section>
  );
}
