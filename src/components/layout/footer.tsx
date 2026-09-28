import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-forest-800 pb-24 text-sand-50 sm:pb-0">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl">Awoudi Farm</p>
          <p className="mt-4 max-w-sm text-sm text-sand-50/70">
            Ferme familiale fondée par Awoudi Kodzo Mawufe à Kpélé Agavé — poules,
            dindons, chèvres, œufs et pintades élevés avec soin et vendus en
            direct.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-sand-50/90">Naviguer</p>
          <ul className="mt-4 space-y-3 text-sm text-sand-50/70">
            <li><Link href="#produits" className="hover:text-sand-50">Produits</Link></li>
            <li><Link href="#ferme" className="hover:text-sand-50">La ferme</Link></li>
            <li><Link href="#contact" className="hover:text-sand-50">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-sand-50/90">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-sand-50/70">
            <li>Kpélé Agavé, Togo</li>
            <li><a href="https://wa.me/22870357124" className="hover:text-sand-50">WhatsApp : +228 70 35 71 24</a></li>
            <li><a href="mailto:awoudiwin@hotmail.com" className="hover:text-sand-50">awoudiwin@hotmail.com</a></li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-sand-50/10 py-6 text-xs text-sand-50/50 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Awoudi Farm. Tous droits réservés.</p>
        <p>Kpélé Agavé, Togo</p>
      </Container>
    </footer>
  );
}
