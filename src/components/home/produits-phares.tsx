import { Container } from "@/components/ui/container";
import { ProductImage } from "@/components/ui/product-image";
import { produits } from "@/lib/products";

function formatPrix(prix: number | null, unite: string) {
  if (prix === null) return "Prix sur demande";
  return `${prix.toLocaleString("fr-FR")} FCFA / ${unite}`;
}

export function ProduitsPhares() {
  return (
    <section className="py-16 sm:py-24" id="produits">
      <Container>
        <div>
          <h2 className="font-display text-3xl text-forest-950 sm:text-4xl">
            Nos produits
          </h2>
          <p className="mt-3 max-w-md text-sm text-forest-800/70">
            Élevés à la ferme familiale, disponibles à la vente directe.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {produits.map((produit) => (
            <div key={produit.slug}>
              <ProductImage
                images={produit.images}
                alt={produit.nom}
                tone={produit.tone}
                className="h-40 w-full sm:h-64"
              />
              <p className="mt-3 font-display text-base text-forest-950 sm:mt-4 sm:text-lg">
                {produit.nom}
              </p>
              <p className="hidden text-sm text-forest-800/60 sm:block">
                {produit.description}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-clay-600">
                {formatPrix(produit.prix, produit.unite)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="text-sm font-medium text-clay-600 hover:text-clay-700"
          >
            Comment commander →
          </a>
        </div>
      </Container>
    </section>
  );
}
