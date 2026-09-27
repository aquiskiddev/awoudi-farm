import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Awoudi Farm — Du champ a votre table",
  description:
    "Awoudi Farm cultive et livre des produits agricoles frais a Lome. Decouvrez notre catalogue et commandez en ligne.",
  openGraph: {
    title: "Awoudi Farm",
    description:
      "Produits agricoles frais, cultives avec soin, livres a Lome et ses environs.",
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
