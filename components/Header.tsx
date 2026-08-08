"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Layanan", href: "#layanan" },
  { label: "Jadwal Dokter", href: "#jadwal-dokter" },
  { label: "Kontak", href: "#kontak" },
];

const PROFIL_LINKS = [
  { label: "Sejarah", href: "#sejarah" },
  { label: "Visi & Misi", href: "#visi-misi" },
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
          <a href="#" className="flex items-center">
            <Image
              src="/logo-web.png"
              alt="RSU PKU Muhammadiyah Prambanan"
              width={220}
              height={60}
              className="h-11 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            
              href="#"
              className="text-sm font-medium text-navy-700/80 transition hover:text-maroon-600"
            >
              Beranda
            </a>

            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-navy-700/80 transition hover:text-maroon-600">
                Profil
                <ChevronDown size={14} className="transition group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-48 rounded-xl border border-navy-100 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                {PROFIL_LINKS.map((link) => (
                  
                    key={link.label}
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm text-navy-700/80 transition hover:bg-cream hover:text-maroon-600"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-navy-700/80 transition hover:text-maroon-600"
              >
                {link.label}
              </a>
            ))}

            
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
            
              href="#"
              className="py-2 text-sm font-medium text-navy-700"
              onClick={() => setOpen(false)}
            >
              Beranda
            </a>

            <p className="pt-2 text-sm font-medium text-navy-700">Profil</p>
            {PROFIL_LINKS.map((link) => (
              
                key={link.label}
                href={link.href}
                className="py-1.5 pl-3 text-sm text-navy-700/70"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {NAV_LINKS.map((link) => (
              
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
