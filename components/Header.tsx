"use client";

import { useState } from "react";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Beranda", href: "#" },
  { 
    label: "Profil", 
    href: "#profil",
    dropdown: [
      { label: "Sejarah", href: "#sejarah" },
      { label: "Visi & Misi", href: "#visi-misi" },
      { label: "Struktur Organisasi", href: "#struktur" },
      { label: "Fasilitas", href: "#fasilitas" },
    ]
  },
  { label: "Layanan", href: "#layanan" },
  { label: "Jadwal Dokter", href: "#jadwal-dokter" },
  { label: "Kontak", href: "#kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Top utility bar - tetap sama */}
      <div className="bg-navy-900 text-cream/90">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-5 px-6 py-1.5 text-xs">
          <a href="tel:0274496111" className="flex items-center gap-1.5 hover:text-white">
            <Phone size={13} /> IGD 24 Jam: (0274)7374509
          </a>
          <a
            href="https://wa.me/6289505699944"
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
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-navy-700/80 transition hover:text-maroon-600"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={16} />}
                </a>
                
                {/* Dropdown Menu */}
                {link.dropdown && dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-navy-100">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-navy-700 transition hover:bg-maroon-50 hover:text-maroon-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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

        {/* Mobile menu */}
        {open && (
          <nav className="flex flex-col gap-1 border-t border-navy-100 bg-cream px-6 py-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="py-2 text-sm font-medium text-navy-700"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
                {/* Dropdown items for mobile */}
                {link.dropdown && (
                  <div className="ml-4 flex flex-col gap-1 border-l-2 border-maroon-200 pl-4">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="py-1.5 text-sm text-navy-600 hover:text-maroon-600"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}
