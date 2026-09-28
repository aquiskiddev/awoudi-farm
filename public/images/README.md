# Comment ajouter les vraies photos/vidéos

## Photos produits (2 minimum par produit)
- images/produits/poules/1.jpg, 2.jpg
- images/produits/dindons/1.jpg, 2.jpg
- images/produits/chevres/1.jpg, 2.jpg
- images/produits/oeufs/1.jpg, 2.jpg
- images/produits/pintades/1.jpg, 2.jpg

## Photos de la ferme
- images/ferme/hero.jpg      → grande photo d'ambiance (haut de page)
- images/ferme/portrait.jpg  → Awoudi Kodzo Mawufe sur la ferme

## Ensuite dans le code
Dans src/lib/products.ts, remplace `images: []` par les chemins :
images: ["/images/produits/poules/1.jpg", "/images/produits/poules/2.jpg"]

Dans hero.tsx et presentation-ferme.tsx, remplace `images={[]}` par
`images={["/images/ferme/hero.jpg"]}` (et portrait.jpg pour l'autre).

## Format recommandé
JPG ou WebP, largeur 1200-1600px, poids < 500 Ko (compresse sur
squoosh.app avant d'uploader).
