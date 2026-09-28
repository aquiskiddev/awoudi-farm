import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ProduitsPhares } from "@/components/home/produits-phares";
import { PresentationFerme } from "@/components/home/presentation-ferme";
import { CoulissesFerme } from "@/components/home/coulisses-ferme";
import { ContactCommande } from "@/components/home/contact-commande";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProduitsPhares />
        <PresentationFerme />
        <CoulissesFerme />
        <ContactCommande />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
