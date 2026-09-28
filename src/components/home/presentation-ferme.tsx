import { Container } from "@/components/ui/container";
import { ProductImage } from "@/components/ui/product-image";

export function PresentationFerme() {
  return (
    <section id="ferme" className="bg-sand-100 py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <ProductImage
          images={["/images/produits/poules/3.jpg", "/images/ferme/poussins.jpg"]}
          alt="Élevage de la ferme Awoudi à Kpélé Agavé"
          tone="sand"
          className="order-2 min-h-[260px] sm:min-h-[360px] lg:order-1"
        />

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-2xl text-forest-950 sm:text-3xl lg:text-4xl">
            Une ferme familiale, gérée avec exigence.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest-800/80 sm:mt-6">
            Fondée et dirigée par Awoudi Kodzo Mawufe à Kpélé Agavé, la ferme
            élève poules, dindons, chèvres et pintades, et produit des œufs
            frais chaque semaine. Chaque animal est suivi de près, dans le
            respect des méthodes traditionnelles d&apos;élevage.
          </p>
        </div>
      </Container>
    </section>
  );
}
