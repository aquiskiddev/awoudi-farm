import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { ProductImage } from "@/components/ui/product-image";

export function Hero() {
  return (
    <section className="overflow-hidden bg-forest-800 text-sand-50">
      <Container className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-sm text-sand-50/60">Ferme familiale — Kpélé Agavé, Togo</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-[2.75rem] sm:leading-[1.05] lg:text-6xl">
            La ferme d&apos;Awoudi Kodzo Mawufe.
          </h1>
          <p className="mt-5 max-w-md text-base text-sand-50/75 sm:mt-6">
            Poules, dindons, chèvres, œufs et pintades élevés à Kpélé Agavé,
            vendus en direct — sans intermédiaire, sans compromis sur la
            qualité.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <ButtonLink href="#produits">Découvrir nos produits</ButtonLink>
            <ButtonLink
              href="https://wa.me/22870357124"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="border-sand-50/30 text-sand-50 hover:border-sand-50/70"
            >
              Écrire sur WhatsApp
            </ButtonLink>
          </div>
        </div>

        <ProductImage
          images={["/images/ferme/hero.jpg", "/images/ferme/paysage.jpg"]}
          alt="La ferme Awoudi à Kpélé Agavé"
          className="min-h-[240px] sm:min-h-[320px] lg:min-h-[480px]"
        />
      </Container>
    </section>
  );
}
