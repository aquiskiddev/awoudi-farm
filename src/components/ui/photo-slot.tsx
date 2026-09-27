import { cn } from "@/lib/utils/cn";

interface PhotoSlotProps {
  label: string;
  className?: string;
  tone?: "forest" | "clay" | "sand";
}

const tones = {
  forest: "from-forest-800 to-forest-950",
  clay: "from-clay-700 to-forest-950",
  sand: "from-sand-100 to-clay-600/40",
};

/**
 * Emplacement pour une vraie photo (ferme / produit).
 * A remplacer par <Image> une fois les photos reelles fournies —
 * ne jamais le remplacer par une image de stock generique.
 */
export function PhotoSlot({ label, className, tone = "forest" }: PhotoSlotProps) {
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden rounded-2xl bg-gradient-to-br p-6 text-sand-50/80",
        tones[tone],
        className
      )}
    >
      <span className="text-xs tracking-wide">{label}</span>
    </div>
  );
}
