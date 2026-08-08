import { ArrowRight, CalendarSearch } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
  <section className="relative overflow-hidden bg-navy">
  {/* Tekstur pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-70"
        style={{ backgroundImage: "url('/footer-web1.png')" }}
      />
      {/* Navy menyatu ke pattern (multiply), solid di kiri fade transparan mulai 20% */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage:
            "linear-gradient(to right, #001164 0%, #001164 20%, transparent 100%)",
        }}
      />
      {/* Foto Direktur */}
     <div className="pointer-events-none absolute bottom-0 right-4 h-[55%] w-auto sm:right-12 sm:h-[85%]">
        <Image
          src="/direktur.png"
          alt="Direktur RS PKU Prambanan"
          width={1080}
          height={566}
          quality={100}
          className="h-full w-auto object-contain object-bottom"
          priority
          />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-64 pt-24 sm:pb-32 sm:pt-32">
        <div className="max-w-xl">
          <p className="mb-4 text-s font-semibold uppercase tracking-[0.2em] text-maroon-400">
            RS PKU Prambanan
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-5xl">
            Melayani dengan profesional, sepenuh hati, dan penuh kepedulian.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-cream/75">
           Dengan dedikasi dan nilai amanah, kami hadir menghadirkan pelayanan kesehatan yang profesional, ikhlas, dan ramah untuk Anda.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#jadwal-dokter"
              className="inline-flex items-center gap-2 rounded-xl bg-maroon-600 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-maroon-700"
            >
              <CalendarSearch size={16} /> Lihat Jadwal Dokter
            </a>
            <a
              href="https://wa.me/6289505699944"
              className="inline-flex items-center gap-2 rounded-xl border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              Hubungi Kami <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
