import { HeartPulse, Stethoscope, Baby, Syringe, Bed, Ambulance } from "lucide-react";

const SERVICES = [
  { icon: Ambulance, name: "IGD 24 Jam", desc: "Penanganan darurat setiap saat, siap siaga tanpa henti." },
  { icon: Stethoscope, name: "Rawat Jalan", desc: "Poliklinik spesialis dengan jadwal dokter yang fleksibel." },
  { icon: Bed, name: "Rawat Inap", desc: "Ruang perawatan nyaman dengan berbagai kelas kamar." },
  { icon: HeartPulse, name: "Jantung & Pembuluh Darah", desc: "Pemeriksaan dan konsultasi kardiologi terpadu." },
  { icon: Baby, name: "Kebidanan & Anak", desc: "Pendampingan kehamilan, persalinan, hingga tumbuh kembang anak." },
  { icon: Syringe, name: "Laboratorium & Radiologi", desc: "Penunjang diagnostik lengkap dan hasil yang akurat." },
];

export default function Services() {
  return (
    <section id="layanan" className="py-20">
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
    </section>
  );
}
