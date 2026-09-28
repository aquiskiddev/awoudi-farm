"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

const links = [
  { href: "#produits", label: "Produits" },
  { href: "#ferme", label: "La ferme" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-sand-50/90 backdrop-blur supports-[backdrop-filter]:bg-sand-50/70 sticky top-0 z-40">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="font-display text-lg tracking-tight text-forest-950 sm:text-xl">
          Awoudi Farm
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-forest-800 transition-colors hover:text-clay-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="https://wa.me/22870357124"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-[#25D366] text-forest-950 hover:bg-[#1ebe5a] sm:inline-flex"
          >
            Commander
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Ouvrir le menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-950/15 text-forest-950 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-line bg-sand-50 md:hidden">
          <Container className="flex flex-col py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-forest-800 transition-colors hover:text-clay-600"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
