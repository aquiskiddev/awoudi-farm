import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#12200f",
};

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Awoudi Farm — Poules, dindons, chèvres, œufs, pintades à Lomé",
  description:
    "Ferme familiale à Lomé dirigée par Awoudi Kodzo Mawufe. Poules, dindons, chèvres, œufs et pintades vendus en direct, commande sur WhatsApp.",
  openGraph: {
    title: "Awoudi Farm",
    description:
      "Poules, dindons, chèvres, œufs et pintades élevés à Lomé, vendus en direct.",
    locale: "fr_TG",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-50 text-forest-950">
        {children}
      </body>
    </html>
  );
}
