"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { groupByPoli, DAY_ORDER, DAY_DISPLAY, PoliGroup, ScheduleEntry } from "@/lib/doctors";

// Poliklinik yang tampil duluan (sebelum diklik "Tampilkan Semua")
const PRIORITY_POLI = [
  "POLI PENYAKIT DALAM",
  "POLI ORTOPEDI",
  "POLI SARAF",
  "POLI ANAK",
  "POLI REHABILITASI MEDIK",
];

type Props = {
  schedule: ScheduleEntry[];
  isLive: boolean;
};

function PoliTable({ group }: { group: PoliGroup }) {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-navy-100">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] table-fixed border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-[260px] bg-gradient-to-r from-navy-800 to-navy-600 px-5 py-3.5 text-left font-display text-sm font-semibold text-cream">
                {group.poli}
              </th>
              {DAY_ORDER.map((d) => (
                <th
                  key={d}
                  className="w-[110px] bg-maroon-600 px-2 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-white"
                >
                  {DAY_DISPLAY[d]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {group.doctors.map((row, i) => (
              <tr
                key={row.doctor}
                className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-50 text-xs font-semibold text-navy-700">
                      {row.doctor
                        .replace(/^dr\.?g?\.?\s*/i, "")
                        .charAt(0)
                        .toUpperCase()}
                    </div>
                    <span className="font-medium text-navy-700">{row.doctor}</span>
                  </div>
                </td>
                {DAY_ORDER.map((d) => (
                  <td
                    key={d}
                    className="whitespace-nowrap px-2 py-3.5 text-center text-xs text-navy-700/70"
                  >
                    {row.byDay[d] ?? (
                      <span className="text-navy-700/25">-</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function DoctorSearch({ schedule, isLive }: Props) {
  const [showAll, setShowAll] = useState(false);
  const allGroups = useMemo(() => groupByPoli(schedule), [schedule]);

  const priorityGroups = useMemo(
    () =>
      PRIORITY_POLI.map((p) => allGroups.find((g) => g.poli === p)).filter(
        (g): g is PoliGroup => Boolean(g)
      ),
    [allGroups]
  );

  const restGroups = useMemo(
    () => allGroups.filter((g) => !PRIORITY_POLI.includes(g.poli)),
    [allGroups]
  );

  const visibleGroups = showAll ? [...priorityGroups, ...restGroups] : priorityGroups;

  return (
    <section id="jadwal-dokter" className="border-y border-navy-100 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-maroon-600">
              Jadwal Dokter
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
              Jadwal Praktik Dokter
            </h2>
          </div>
        </div>

        {visibleGroups.map((group) => (
          <PoliTable key={group.poli} group={group} />
        ))}

        {!showAll && restGroups.length > 0 && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-navy-100 px-6 py-3 text-sm font-semibold text-navy-700 transition hover:border-maroon-300 hover:text-maroon-600"
            >
              Tampilkan Semua Poliklinik <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
