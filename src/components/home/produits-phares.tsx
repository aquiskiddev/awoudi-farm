import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PhotoSlot } from "@/components/ui/photo-slot";

// Donnees temporaires — a remplacer par une requete Supabase
// (table `products`, filtre `featured = true`) en Phase 3.
const produitsTemporaires = [
  { nom: "Legumes de saison", unite: "kg", tone: "forest" as const },
  { nom: "Fruits frais", unite: "panier", tone: "clay" as const },
  { nom: "Volaille fermiere", unite: "unite", tone: "sand" as const },
];

export function ProduitsPhares() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl text-forest-950 sm:text-4xl">
              Nos produits du moment
            </h2>
            <p className="mt-3 max-w-md text-sm text-forest-800/70">
              Une selection de ce que la ferme recolte cette semaine.
            </p>
          </div>
          <Link
            href="/produits"
            className="hidden shrink-0 text-sm font-medium text-clay-600 hover:text-clay-700 sm:block"
          >
            Voir tout le catalogue
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {produitsTemporaires.map((produit) => (
            <div key={produit.nom}>
              <PhotoSlot label={produit.nom} tone={produit.tone} className="h-64" />
              <p className="mt-4 font-display text-lg text-forest-950">
                {produit.nom}
              </p>
              <p className="text-sm text-forest-800/60">Vendu au {produit.unite}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
