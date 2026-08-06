export default function About() {
  return (
    <section id="profil" className="bg-navy-700 py-20 text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-maroon-400">
            Profil Rumah Sakit
          </p>
          <h2 className="font-display text-3xl font-semibold">
            Berakar dari amanah masyarakat Prambanan
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            RS PKU Prambanan hadir sebagai bagian dari amal usaha kesehatan yang
            mengutamakan pelayanan yang ramah, profesional, dan terjangkau bagi
            masyarakat. Kami percaya bahwa kesehatan adalah amanah yang harus
            dijaga bersama, dengan tenaga medis yang kompeten dan fasilitas
            yang terus berkembang.
          </p>

          <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-cream/15 pt-6">
            {[
              ["24", "Jam Layanan IGD"],
              ["20+", "Dokter Spesialis"],
              ["10+", "Tahun Melayani"],
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

        <div className="aspect-[4/3] rounded-xl border border-cream/15 bg-navy-800/60" />
      </div>
    </section>
  );
}
