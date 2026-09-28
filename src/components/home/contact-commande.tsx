import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

const WHATSAPP_NUMBER = "22870357124";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour, je souhaite passer une commande sur Awoudi Farm."
);

export function ContactCommande() {
  return (
    <section id="contact" className="bg-forest-950 py-16 text-sand-50 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-12">
        <div>
          <p className="text-sm text-sand-50/60">Passer commande</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl">
            Écrivez-nous, on s&apos;occupe du reste.
          </h2>
          <p className="mt-5 max-w-md text-sand-50/75 sm:mt-6">
            Pas de panier compliqué : contactez-nous directement sur WhatsApp
            avec ce que vous souhaitez, on confirme la disponibilité et la
            livraison avec vous.
          </p>

          <div className="mt-8">
            <ButtonLink
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center bg-[#25D366] text-forest-950 hover:bg-[#1ebe5a] sm:w-auto"
            >
              Commander sur WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-2xl border border-sand-50/15 bg-sand-50/5 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-sand-50/60">
            Paiement mobile
          </p>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-sand-50/70">Flooz</dt>
              <dd className="font-medium">+228 98 75 27 29</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-sand-50/70">T-Money</dt>
              <dd className="font-medium">+228 90 14 43 70</dd>
            </div>
          </dl>

          <div className="mt-6 border-t border-sand-50/10 pt-6 text-sm">
            <p className="text-sand-50/70">Email</p>
            <a href="mailto:awoudiwin@hotmail.com" className="font-medium hover:text-clay-600">
              awoudiwin@hotmail.com
            </a>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-sand-50/50">
            Confirmez toujours le paiement directement avec nous avant tout
            envoi d&apos;argent. Awoudi Kodzo Mawufe, fondateur de la ferme.
          </p>
        </div>
      </Container>
    </section>
  );
}
