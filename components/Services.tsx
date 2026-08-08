import { HeartPulse, Stethoscope, Baby, Syringe, Bed, Ambulance } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  { icon: Ambulance, name: "IGD 24 Jam", desc: "Penanganan darurat setiap saat, siap siaga tanpa henti." },
  { icon: Syringe, name: "Vaksinasi", desc: "Melayani berbagai kebutuhan vaksinasi, termasuk vaksin internasional untuk perjalanan luar negeri, haji, dan umrah." },
  { icon: Bed, name: "Rawat Inap", desc: "Ruang perawatan nyaman dengan berbagai kelas kamar." },
  { icon: HeartPulse, name: "Hemodialisa", desc: "Layanan cuci darah dengan tenaga profesional dan fasilitas yang mendukung kenyamanan serta keamanan pasien." },
  { icon: Baby, name: "Kebidanan & Anak", desc: "Pendampingan kehamilan, persalinan, hingga tumbuh kembang anak." },
  { icon: Stethoscope, name: "Laboratorium & Radiologi", desc: "Penunjang diagnostik lengkap dan hasil yang akurat." },
];

export default function Services() {
  return (
    <section id="layanan" className="relative overflow-hidden py-20">
        {/* Tekstur pattern, ukuran asli sama kayak Hero */}
        <div
          className="absolute inset-0 bg-repeat opacity-20"
          style={{ backgroundImage: "url('/footer-web1.png')" }}
        />
        {/* Radial: tepi lebih jelas, makin ke tengah makin transparan */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, #F7F5F1 0%, #F7F5F1 40%, transparent 100%)",
          }}
        />

  <div className="relative mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-maroon-600">
          Layanan Unggulan
        </p>
        <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-navy-700">
          Layanan kesehatan yang lengkap, dekat dengan warga Prambanan
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-navy-100 bg-white p-7 transition hover:-translate-y-0.5 hover:border-maroon-200 hover:shadow-[0_12px_32px_rgba(0,17,100,0.08)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-maroon-50">
                <s.icon className="text-maroon-600" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mb-1.5 font-display text-lg font-semibold tracking-tight text-navy-700">
                {s.name}
              </h3>
              <p className="text-sm leading-relaxed text-navy-700/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
