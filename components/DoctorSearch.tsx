"use client";

import { useMemo, useState } from "react";
import { Search, Clock3 } from "lucide-react";
import { RAW_SCHEDULE, groupByDoctor } from "@/lib/doctors";

const DAY_LABEL: Record<string, string> = {
  SENIN: "Sen",
  SELASA: "Sel",
  RABU: "Rab",
  KAMIS: "Kam",
  JUMAT: "Jum",
  SABTU: "Sab",
  AKHAD: "Min",
};

export default function DoctorSearch() {
  const [query, setQuery] = useState("");
  const groups = useMemo(() => groupByDoctor(RAW_SCHEDULE), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups.filter(
      (g) =>
        g.doctor.toLowerCase().includes(q) || g.poli.toLowerCase().includes(q)
    );
  }, [groups, query]);

  return (
    <section id="jadwal-dokter" className="border-y border-navy-100 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-maroon-600">
              Jadwal Dokter
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
              Temukan dokter yang kamu butuhkan
            </h2>
          </div>
          <p className="text-sm text-navy-700/50">{filtered.length} dokter/poli ditemukan</p>
        </div>

        <div className="relative mb-10 max-w-xl">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-700/40"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama dokter atau poliklinik..."
            className="w-full rounded-2xl border border-navy-100 bg-cream py-3.5 pl-11 pr-4 text-sm text-navy-700 outline-none transition focus:border-maroon-400 focus:ring-4 focus:ring-maroon-100"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((g) => (
            <div
              key={`${g.doctor}-${g.poli}`}
              className="group rounded-2xl border border-navy-100 p-5 transition hover:border-maroon-200 hover:shadow-[0_8px_30px_rgba(0,17,100,0.06)]"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug text-navy-700">
                    {g.doctor}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-maroon-600">
                    {g.poli}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {g.schedule.map((s, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-700"
                  >
                    <Clock3 size={11} className="text-navy-700/40" />
                    {DAY_LABEL[s.day]} {s.start}-{s.end}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-2 py-10 text-center text-sm text-navy-700/50">
              Tidak ada dokter/poli yang cocok dengan pencarian.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
