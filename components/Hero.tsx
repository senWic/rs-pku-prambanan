import { ArrowRight, CalendarSearch } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-700">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Candi silhouette signature — nods to Prambanan without being literal */}
      <svg
        className="pointer-events-none absolute bottom-0 right-0 h-[70%] w-auto opacity-[0.14] sm:opacity-20"
        viewBox="0 0 600 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M420 400V300L440 260V200L460 170V120L480 90V60L500 20L520 60V120L540 170V200L560 260V300L580 400H420Z"
          fill="#F7F5F1"
        />
        <path
          d="M280 400V320L300 280V220L320 190V150L340 110V80L360 40L380 80V150L400 190V220L420 280V320L440 400H280Z"
          fill="#F7F5F1"
        />
        <path
          d="M140 400V340L160 300V250L180 220V180L200 150L220 180V220L240 250V300L260 340V400H140Z"
          fill="#F7F5F1"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-maroon-400">
            RS PKU Prambanan
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-5xl">
            Kesehatan yang dijaga dengan amanah.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-cream/75">
            Melayani rawat jalan, rawat inap, dan gawat darurat 24 jam untuk
            masyarakat Prambanan dan sekitarnya — dengan tenaga medis yang
            profesional dan pelayanan yang menenangkan.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#jadwal-dokter"
              className="inline-flex items-center gap-2 rounded-xl bg-maroon-600 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-maroon-700"
            >
              <CalendarSearch size={16} /> Lihat Jadwal Dokter
            </a>
            <a
              href="#profil"
              className="inline-flex items-center gap-2 rounded-xl border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              Tentang Kami <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
