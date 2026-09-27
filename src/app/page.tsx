import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ProduitsPhares } from "@/components/home/produits-phares";
import { PresentationFerme } from "@/components/home/presentation-ferme";
import { CtaCommande } from "@/components/home/cta-commande";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProduitsPhares />
        <PresentationFerme />
        <CtaCommande />
      </main>
      <Footer />
    </>
  );
}
