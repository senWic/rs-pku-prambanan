export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="candi-divider flex flex-col items-start justify-between gap-6 rounded-xl bg-maroon-600 px-8 py-12 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
              Jangan tunggu sakit bertambah parah.
            </h2>
            <p className="mt-2 text-sm text-cream/80">
              Cek jadwal dokter dan pastikan poli yang kamu tuju sedang praktik.
            </p>
          </div>
          <a
            href="#jadwal-dokter"
            className="whitespace-nowrap rounded-xl bg-cream px-6 py-3 text-sm font-semibold text-maroon-700 transition hover:bg-cream/90"
          >
            Lihat Jadwal Dokter
          </a>
        </div>
      </div>
    </section>
  );
}
