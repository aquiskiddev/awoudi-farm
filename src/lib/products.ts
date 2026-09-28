export type ProductTone = "forest" | "clay" | "sand";

export interface Product {
  slug: string;
  nom: string;
  unite: string;
  description: string;
  tone: ProductTone;
  /** Prix en FCFA. `null` tant que non fixé — affiche "Prix sur demande". */
  prix: number | null;
  /** Vraies photos (public/images/produits/<slug>/...). */
  images: string[];
}

export const produits: Product[] = [
  {
    slug: "poules",
    nom: "Poules fermières",
    unite: "unité",
    description: "Poules élevées en plein air, nourries naturellement.",
    tone: "forest",
    prix: null,
    images: ["/images/produits/poules/1.jpg", "/images/produits/poules/2.jpg", "/images/produits/poules/3.jpg"],
  },
  {
    slug: "dindons",
    nom: "Dindons",
    unite: "unité",
    description: "Dindons fermiers élevés avec soin sur la ferme.",
    tone: "clay",
    prix: null,
    // 1 seule photo réelle pour l'instant — envoie-en une 2e dès que possible.
    images: ["/images/produits/dindons/1.jpg"],
  },
  {
    slug: "chevres",
    nom: "Chèvres",
    unite: "unité",
    description: "Chèvres robustes, élevées en pâturage naturel.",
    tone: "sand",
    prix: null,
    images: ["/images/produits/chevres/1.jpg", "/images/produits/chevres/2.jpg"],
  },
  {
    slug: "oeufs",
    nom: "Œufs — plateau",
    unite: "plateau",
    description: "Œufs frais pondus à la ferme, vendus par plateau.",
    tone: "clay",
    prix: null,
    // Aucune vraie photo reçue pour les œufs — dégradé de secours en attendant.
    images: [],
  },
  {
    slug: "pintades",
    nom: "Pintades",
    unite: "unité",
    description: "Pintades fermières, élevées en liberté.",
    tone: "forest",
    prix: null,
    // 1 seule photo réelle pour l'instant — envoie-en une 2e dès que possible.
    images: ["/images/produits/pintades/1.jpg"],
  },
];
