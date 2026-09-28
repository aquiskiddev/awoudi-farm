import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { ProductTone } from "@/lib/products";

interface ProductImageProps {
  images: string[];
  alt: string;
  className?: string;
  tone?: ProductTone;
}

const tones: Record<ProductTone, string> = {
  forest: "from-forest-800 to-forest-950",
  clay: "from-clay-700 to-forest-950",
  sand: "from-sand-100 to-clay-600/40",
};

/**
 * Affiche les vraies photos produit. Si 2+ photos existent, un léger
 * crossfade au survol révèle la seconde. Sans photo, dégradé de
 * secours discret (jamais de stock générique).
 */
export function ProductImage({ images, alt, className, tone = "forest" }: ProductImageProps) {
  if (images.length === 0) {
    return (
      <div
        className={cn(
          "relative flex items-end overflow-hidden rounded-2xl bg-gradient-to-br p-6 text-sand-50/80",
          tones[tone],
          className
        )}
      >
        <span className="text-xs tracking-wide">{alt}</span>
      </div>
    );
  }

  return (
    <div className={cn("group relative overflow-hidden rounded-2xl", className)}>
      <Image
        src={images[0]}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
      />
      {images[1] && (
        <Image
          src={images[1]}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="absolute inset-0 object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
        />
      )}
    </div>
  );
}
