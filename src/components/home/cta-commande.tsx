import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export function CtaCommande() {
  return (
    <section className="py-24">
      <Container className="flex flex-col items-start gap-6 rounded-3xl bg-clay-600 px-8 py-14 text-sand-50 sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">
            Pret a commander ?
          </h2>
          <p className="mt-3 max-w-md text-sand-50/85">
            Parcourez le catalogue et recevez vos produits frais directement
            chez vous.
          </p>
        </div>
        <ButtonLink
          href="/produits"
          variant="secondary"
          className="border-sand-50/40 bg-sand-50 text-clay-700 hover:border-sand-50"
        >
          Voir le catalogue
        </ButtonLink>
      </Container>
    </section>
  );
}
