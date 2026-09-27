import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-forest-800 text-sand-50">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl">Awoudi Farm</p>
          <p className="mt-4 max-w-sm text-sm text-sand-50/70">
            Une ferme familiale a Lome qui cultive, recolte et livre des
            produits frais directement a nos clients.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-sand-50/90">Naviguer</p>
          <ul className="mt-4 space-y-3 text-sm text-sand-50/70">
            <li><Link href="/produits" className="hover:text-sand-50">Produits</Link></li>
            <li><Link href="/a-propos" className="hover:text-sand-50">La ferme</Link></li>
            <li><Link href="/contact" className="hover:text-sand-50">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-sand-50/90">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-sand-50/70">
            <li>Lome, Togo</li>
            <li>contact@awoudifarm.tg</li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-sand-50/10 py-6 text-xs text-sand-50/50 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Awoudi Farm. Tous droits reserves.</p>
        <p>Lome, Togo</p>
      </Container>
    </footer>
  );
}
