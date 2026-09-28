const WHATSAPP_NUMBER = "22870357124";
const MESSAGE = encodeURIComponent(
  "Bonjour, je souhaite passer une commande sur Awoudi Farm."
);

/**
 * Bouton WhatsApp fixe, visible sur toutes les pages et toutes les
 * tailles d'écran — c'est le canal de commande principal du site.
 * Respecte les zones sûres (encoche / barre de gestes) sur mobile.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commander sur WhatsApp"
      className="fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-forest-950/30 transition-transform hover:scale-105 active:scale-95"
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M16.004 3C9.373 3 4 8.373 4 15.004c0 2.418.7 4.673 1.906 6.573L4 29l7.62-1.867a11.94 11.94 0 0 0 4.384.832h.005C22.64 27.965 28 22.594 28 15.963 28 9.332 22.635 3 16.004 3Zm0 21.6h-.004a9.9 9.9 0 0 1-5.05-1.386l-.362-.215-3.79.985 1.012-3.694-.235-.379a9.87 9.87 0 0 1-1.517-5.277c0-5.46 4.445-9.906 9.95-9.906 2.658 0 5.155 1.036 7.03 2.916a9.87 9.87 0 0 1 2.916 7.02c0 5.46-4.446 9.936-9.95 9.936Zm5.457-7.43c-.298-.15-1.767-.872-2.04-.972-.274-.1-.474-.15-.673.15-.198.298-.77.972-.944 1.172-.174.199-.348.224-.646.075-.298-.15-1.257-.463-2.394-1.475-.885-.789-1.483-1.763-1.657-2.061-.174-.298-.019-.46.13-.609.134-.133.298-.348.447-.522.15-.174.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.15-.673-1.62-.922-2.219-.243-.583-.49-.504-.673-.513l-.573-.01c-.199 0-.522.075-.796.373-.273.298-1.044 1.02-1.044 2.489s1.069 2.886 1.218 3.085c.15.199 2.104 3.212 5.096 4.503.712.307 1.268.49 1.701.627.715.227 1.365.195 1.879.118.573-.086 1.767-.723 2.017-1.421.249-.697.249-1.296.174-1.421-.074-.124-.273-.199-.571-.348Z" />
      </svg>
    </a>
  );
}
