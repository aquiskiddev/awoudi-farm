import Image from "next/image";
import { Container } from "@/components/ui/container";

const photos = [
  { src: "/images/ferme/poussins.jpg", alt: "Poussins de la ferme Awoudi" },
  { src: "/images/produits/poules/3.jpg", alt: "Poulailler vue d'ensemble" },
  { src: "/images/ferme/paysage.jpg", alt: "Cultures vivrières de la ferme" },
  { src: "/images/ferme/hero.jpg", alt: "Verdure de la ferme à Kpélé Agavé" },
];

export function CoulissesFerme() {
  return (
    <section className="bg-forest-950 py-16 sm:py-20">
      <Container>
        <p className="text-sm text-sand-50/50">Coulisses</p>
        <h2 className="mt-2 font-display text-2xl text-sand-50 sm:text-3xl">
          La ferme, au quotidien.
        </h2>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:overflow-visible">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative h-48 w-40 flex-shrink-0 overflow-hidden rounded-xl sm:h-56 sm:w-full"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 40vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
