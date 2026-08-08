import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const COLUMNS = [
  {
    title: "Profil",
    links: ["Sejarah", "Visi & Misi", "Akreditasi"],
  },
  {
    title: "Layanan",
    links: ["Rawat Jalan", "Rawat Inap", "IGD 24 Jam"],
  },
  {
    title: "Informasi",
    links: ["Jadwal Dokter", "Jam Besuk Pasien", "Alur Pelayanan"],
  },
];

export default function Footer() {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-navy-900 py-16 text-cream">
        <div
          className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.06]"
          style={{ backgroundImage: "url('/footer-web1.png')", backgroundSize: "280px" }}
        />
        <div className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-semibold">RS PKU Prambanan</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
              Melayani dengan amanah — rawat jalan, rawat inap, dan gawat
              darurat 24 jam untuk masyarakat Prambanan.
            </p>
            <div className="mt-5 flex gap-3 text-cream/70">
              <Instagram size={18} />
              <Facebook size={18} />
              <Youtube size={18} />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold text-cream">{col.title}</h3>
              <ul className="space-y-2 text-sm text-cream/60">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-cream">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-3 text-sm font-semibold text-cream">Kontak</h3>
            <ul className="space-y-2.5 text-sm text-cream/60">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" /> Jl. Raya
                Prambanan, Sleman, Yogyakarta
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} /> (0274) 496111
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} /> info@rspkuprambanan.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} RS PKU Prambanan. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </div>
    </footer>
  );
}
