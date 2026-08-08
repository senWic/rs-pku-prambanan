"use client";

import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Beranda", href: "#" },
  { label: "Profil", href: "#profil" },
  { label: "Layanan", href: "#layanan" },
  { label: "Jadwal Dokter", href: "#jadwal-dokter" },
  { label: "Kontak", href: "#kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-navy-900 text-cream/90">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-5 px-6 py-1.5 text-xs">
          <a href="tel:0274496111" className="flex items-center gap-1.5 hover:text-white">
            <Phone size={13} /> IGD 24 Jam: (0274) 496111
          </a>
          <a
            href="https://wa.me/6281200000000"
            className="hidden items-center gap-1.5 hover:text-white sm:flex"
          >
            <MessageCircle size={13} /> WhatsApp
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="border-b border-navy-100 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo-web.png"
              alt="RS PKU Prambanan"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-navy-700/80 transition hover:text-maroon-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#jadwal-dokter"
              className="rounded-xl bg-maroon-600 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-maroon-700"
            >
              Cek Jadwal Dokter
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Buka menu"
          >
            {open ? <X className="text-navy-700" /> : <Menu className="text-navy-700" />}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-navy-100 bg-cream px-6 py-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-sm font-medium text-navy-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}
