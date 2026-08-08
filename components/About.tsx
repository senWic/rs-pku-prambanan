import Image from "next/image";

export default function About() {
  return (
    <section id="profil" className="bg-navy-700 py-20 text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-maroon-400">
            Profil Rumah Sakit
          </p>
          <h2 className="font-display text-3xl font-semibold">
            Melayani dengan nilai, berkembang bersama masyarakat.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
          Rumah Sakit PKU Muhammadiyah Prambanan
          adalah suatu amal usaha Muhammadiyah
          Sebagai perwujudan dari iman dan amal sholeh
          kepada Allah SWT serta menjadikannya
          sebagai sarana ibadah. Berlandaskan semangat TAJDID, 
          kami terus berkomitmen menghadirkan layanan kesehatan yang berkualitas, inovatif, dan mudah dijangkau melalui tenaga medis terpercaya serta fasilitas yang terus berkembang.
          </p>

          <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-cream/15 pt-6">
            {[
              ["24", "Jam Layanan IGD"],
              ["18+", "Dokter Spesialis"],
              ["6+", "Tahun Melayani"],
            ].map(([num, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-semibold text-maroon-400">
                  {num}
                </dt>
                <dd className="mt-1 text-xs text-cream/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-cream/15">
          <Image
            src="/profil.png"
            alt="RS PKU Prambanan"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
