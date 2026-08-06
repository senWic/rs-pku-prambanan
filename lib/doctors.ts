export type ScheduleEntry = {
  day: string;
  doctor: string;
  poli: string;
  start: string;
  end: string;
};

// Sumber: sistem internal RS (listjadwaldokter). Update berkala sesuai jadwal aktif.
export const RAW_SCHEDULE: ScheduleEntry[] = [
  { day: "SENIN", doctor: "Dokter Umum", poli: "POLI UMUM", start: "00:00", end: "23:59" },
  { day: "SENIN", doctor: "dr. Rifatul Maftuhah, Sp.PK", poli: "LABORAT", start: "13:00", end: "15:00" },
  { day: "SENIN", doctor: "dr. Djoko Tjahyo Nugroho, Sp.An", poli: "ANESTESI DAN TERAPI INTENSIF", start: "21:00", end: "23:00" },
  { day: "SENIN", doctor: "dr. Migi Pradysta Kurniawan, Sp.PD", poli: "POLI PENYAKIT DALAM", start: "15:00", end: "18:00" },
  { day: "SENIN", doctor: "dr. Lilik Eko Pranantyo, Sp.PD", poli: "POLI PENYAKIT DALAM", start: "08:00", end: "14:00" },
  { day: "SENIN", doctor: "dr. Taufik Rahman, Sp.OG", poli: "POLI OBSGYN", start: "14:30", end: "15:55" },
  { day: "SENIN", doctor: "dr. Adhika Restanto Purnomo, Sp.U", poli: "POLI UROLOGI", start: "16:00", end: "18:00" },
  { day: "SENIN", doctor: "dr. Wikan Pambudi Nuroso, Sp.N", poli: "POLI SARAF", start: "15:45", end: "17:45" },
  { day: "SENIN", doctor: "dr. Djoko Windoyo, Sp.KFR", poli: "POLI REHABILITASI MEDIK", start: "15:00", end: "17:00" },
  { day: "SENIN", doctor: "dr. Varla Septrinindya Gharatri, M.Med.Sc, Sp.A", poli: "POLI ANAK", start: "08:00", end: "14:00" },
  { day: "SENIN", doctor: "drg. Yonanda Az Zikra", poli: "POLI GIGI", start: "13:00", end: "18:00" },
  { day: "SENIN", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI DIALYSIS", start: "08:30", end: "17:30" },
  { day: "SENIN", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI PENYAKIT DALAM", start: "17:30", end: "19:00" },
  { day: "SENIN", doctor: "dr. Adina Silviasari, Sp.KJ", poli: "POLI KEDOKTERAN JIWA", start: "09:00", end: "12:00" },
  { day: "SENIN", doctor: "dr. Zaka Susetyawan Dharmawhardhana, Sp.B", poli: "POLI BEDAH", start: "15:45", end: "17:15" },
  { day: "SENIN", doctor: "dr. Pratama Widi Permana, Sp.Rad", poli: "RADIOLOGI", start: "12:00", end: "14:00" },

  { day: "SELASA", doctor: "Dokter Umum", poli: "POLI UMUM", start: "00:00", end: "23:59" },
  { day: "SELASA", doctor: "dr. Djoko Tjahyo Nugroho, Sp.An", poli: "ANESTESI DAN TERAPI INTENSIF", start: "21:00", end: "23:00" },
  { day: "SELASA", doctor: "dr. Migi Pradysta Kurniawan, Sp.PD", poli: "POLI PENYAKIT DALAM", start: "15:00", end: "18:00" },
  { day: "SELASA", doctor: "dr. Doni Saputera, Sp.Rad", poli: "RADIOLOGI", start: "10:00", end: "12:00" },
  { day: "SELASA", doctor: "dr. Sudaryanto, Sp.OT", poli: "POLI ORTOPEDI", start: "16:15", end: "20:15" },
  { day: "SELASA", doctor: "dr. Lilik Eko Pranantyo, Sp.PD", poli: "POLI PENYAKIT DALAM", start: "08:00", end: "14:00" },
  { day: "SELASA", doctor: "dr. Maryam Fadilla, Sp.N", poli: "POLI SARAF", start: "15:45", end: "16:45" },
  { day: "SELASA", doctor: "dr. Taufik Rahman, Sp.OG", poli: "POLI OBSGYN", start: "14:30", end: "16:00" },
  { day: "SELASA", doctor: "dr. Varla Septrinindya Gharatri, M.Med.Sc, Sp.A", poli: "POLI ANAK", start: "08:00", end: "14:00" },
  { day: "SELASA", doctor: "drg. Yonanda Az Zikra", poli: "POLI GIGI", start: "13:00", end: "18:00" },
  { day: "SELASA", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI DIALYSIS", start: "08:30", end: "19:00" },
  { day: "SELASA", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI PENYAKIT DALAM", start: "07:00", end: "08:15" },
  { day: "SELASA", doctor: "dr. Zaka Susetyawan Dharmawhardhana, Sp.B", poli: "POLI BEDAH", start: "15:45", end: "17:15" },
  { day: "SELASA", doctor: "dr. Gandhi Anandika Febryanto, Sp.M", poli: "POLI MATA", start: "16:30", end: "18:30" },
  { day: "SELASA", doctor: "dr. Pratama Widi Permana, Sp.Rad", poli: "RADIOLOGI", start: "08:00", end: "10:00" },
  { day: "SELASA", doctor: "dr. Faiz Alam Rasyid, Sp.OT", poli: "POLI ORTOPEDI", start: "16:15", end: "18:15" },

  { day: "RABU", doctor: "Dokter Umum", poli: "POLI UMUM", start: "00:00", end: "23:59" },
  { day: "RABU", doctor: "dr. Rifatul Maftuhah, Sp.PK", poli: "LABORAT", start: "13:00", end: "15:00" },
  { day: "RABU", doctor: "dr. Djoko Tjahyo Nugroho, Sp.An", poli: "ANESTESI DAN TERAPI INTENSIF", start: "21:00", end: "23:00" },
  { day: "RABU", doctor: "dr. Doni Saputera, Sp.Rad", poli: "RADIOLOGI", start: "15:00", end: "17:00" },
  { day: "RABU", doctor: "dr. Lilik Eko Pranantyo, Sp.PD", poli: "POLI PENYAKIT DALAM", start: "08:00", end: "14:00" },
  { day: "RABU", doctor: "dr. Taufik Rahman, Sp.OG", poli: "POLI OBSGYN", start: "14:30", end: "15:55" },
  { day: "RABU", doctor: "dr. Adhika Restanto Purnomo, Sp.U", poli: "POLI UROLOGI", start: "16:00", end: "18:00" },
  { day: "RABU", doctor: "dr. Wikan Pambudi Nuroso, Sp.N", poli: "POLI SARAF", start: "15:35", end: "17:35" },
  { day: "RABU", doctor: "dr. Varla Septrinindya Gharatri, M.Med.Sc, Sp.A", poli: "POLI ANAK", start: "08:00", end: "14:00" },
  { day: "RABU", doctor: "drg. Yonanda Az Zikra", poli: "POLI GIGI", start: "13:00", end: "18:00" },
  { day: "RABU", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI DIALYSIS", start: "08:30", end: "19:00" },
  { day: "RABU", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI PENYAKIT DALAM", start: "17:30", end: "19:00" },
  { day: "RABU", doctor: "dr. Adina Silviasari, Sp.KJ", poli: "POLI KEDOKTERAN JIWA", start: "09:00", end: "12:00" },
  { day: "RABU", doctor: "dr. Zaka Susetyawan Dharmawhardhana, Sp.B", poli: "POLI BEDAH", start: "15:45", end: "17:15" },
  { day: "RABU", doctor: "dr. Pratama Widi Permana, Sp.Rad", poli: "RADIOLOGI", start: "12:00", end: "14:00" },
  { day: "RABU", doctor: "dr. Faiz Alam Rasyid, Sp.OT", poli: "POLI ORTOPEDI", start: "16:15", end: "18:15" },

  { day: "KAMIS", doctor: "Dokter Umum", poli: "POLI UMUM", start: "00:00", end: "23:59" },
  { day: "KAMIS", doctor: "dr. Djoko Tjahyo Nugroho, Sp.An", poli: "ANESTESI DAN TERAPI INTENSIF", start: "21:00", end: "23:00" },
  { day: "KAMIS", doctor: "dr. Migi Pradysta Kurniawan, Sp.PD", poli: "POLI PENYAKIT DALAM", start: "15:00", end: "18:00" },
  { day: "KAMIS", doctor: "dr. Sudaryanto, Sp.OT", poli: "POLI ORTOPEDI", start: "15:45", end: "21:00" },
  { day: "KAMIS", doctor: "dr. Lilik Eko Pranantyo, Sp.PD", poli: "POLI PENYAKIT DALAM", start: "08:00", end: "14:00" },
  { day: "KAMIS", doctor: "dr. Taufik Rahman, Sp.OG", poli: "POLI OBSGYN", start: "14:30", end: "16:00" },
  { day: "KAMIS", doctor: "dr. Adhika Restanto Purnomo, Sp.U", poli: "POLI UROLOGI", start: "06:00", end: "07:15" },
  { day: "KAMIS", doctor: "dr. Wikan Pambudi Nuroso, Sp.N", poli: "POLI SARAF", start: "15:35", end: "17:35" },
  { day: "KAMIS", doctor: "dr. Varla Septrinindya Gharatri, M.Med.Sc, Sp.A", poli: "POLI ANAK", start: "08:00", end: "14:00" },
  { day: "KAMIS", doctor: "drg. Yonanda Az Zikra", poli: "POLI GIGI", start: "13:00", end: "18:00" },
  { day: "KAMIS", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI PENYAKIT DALAM", start: "07:15", end: "08:15" },
  { day: "KAMIS", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI DIALYSIS", start: "08:30", end: "19:00" },
  { day: "KAMIS", doctor: "dr. Zaka Susetyawan Dharmawhardhana, Sp.B", poli: "POLI BEDAH", start: "15:45", end: "17:15" },
  { day: "KAMIS", doctor: "dr. Pratama Widi Permana, Sp.Rad", poli: "RADIOLOGI", start: "08:00", end: "10:00" },

  { day: "JUMAT", doctor: "Dokter Umum", poli: "POLI UMUM", start: "00:00", end: "23:59" },
  { day: "JUMAT", doctor: "dr. Rifatul Maftuhah, Sp.PK", poli: "LABORAT", start: "13:00", end: "15:00" },
  { day: "JUMAT", doctor: "dr. Djoko Tjahyo Nugroho, Sp.An", poli: "ANESTESI DAN TERAPI INTENSIF", start: "21:00", end: "23:00" },
  { day: "JUMAT", doctor: "dr. Doni Saputera, Sp.Rad", poli: "RADIOLOGI", start: "15:00", end: "17:00" },
  { day: "JUMAT", doctor: "dr. Lilik Eko Pranantyo, Sp.PD", poli: "POLI PENYAKIT DALAM", start: "08:00", end: "14:00" },
  { day: "JUMAT", doctor: "dr. Maryam Fadilla, Sp.N", poli: "POLI SARAF", start: "14:15", end: "16:15" },
  { day: "JUMAT", doctor: "dr. Taufik Rahman, Sp.OG", poli: "POLI OBSGYN", start: "13:00", end: "15:55" },
  { day: "JUMAT", doctor: "dr. Djoko Windoyo, Sp.KFR", poli: "POLI REHABILITASI MEDIK", start: "15:00", end: "17:00" },
  { day: "JUMAT", doctor: "dr. Varla Septrinindya Gharatri, M.Med.Sc, Sp.A", poli: "POLI ANAK", start: "08:00", end: "14:00" },
  { day: "JUMAT", doctor: "drg. Yonanda Az Zikra", poli: "POLI GIGI", start: "13:00", end: "18:00" },
  { day: "JUMAT", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI DIALYSIS", start: "08:30", end: "18:30" },
  { day: "JUMAT", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI PENYAKIT DALAM", start: "17:30", end: "18:30" },
  { day: "JUMAT", doctor: "dr. Adina Silviasari, Sp.KJ", poli: "POLI KEDOKTERAN JIWA", start: "09:00", end: "12:00" },
  { day: "JUMAT", doctor: "dr. Zaka Susetyawan Dharmawhardhana, Sp.B", poli: "POLI BEDAH", start: "14:30", end: "16:00" },
  { day: "JUMAT", doctor: "dr. Gandhi Anandika Febryanto, Sp.M", poli: "POLI MATA", start: "16:30", end: "18:30" },
  { day: "JUMAT", doctor: "dr. Pratama Widi Permana, Sp.Rad", poli: "RADIOLOGI", start: "12:00", end: "14:00" },

  { day: "SABTU", doctor: "Dokter Umum", poli: "POLI UMUM", start: "00:00", end: "23:59" },
  { day: "SABTU", doctor: "dr. Djoko Tjahyo Nugroho, Sp.An", poli: "ANESTESI DAN TERAPI INTENSIF", start: "21:00", end: "23:00" },
  { day: "SABTU", doctor: "dr. Sudaryanto, Sp.OT", poli: "POLI ORTOPEDI", start: "12:00", end: "18:00" },
  { day: "SABTU", doctor: "dr. Lilik Eko Pranantyo, Sp.PD", poli: "POLI PENYAKIT DALAM", start: "07:00", end: "12:00" },
  { day: "SABTU", doctor: "dr. Taufik Rahman, Sp.OG", poli: "POLI OBSGYN", start: "14:00", end: "16:00" },
  { day: "SABTU", doctor: "dr. Wikan Pambudi Nuroso, Sp.N", poli: "POLI SARAF", start: "10:00", end: "12:00" },
  { day: "SABTU", doctor: "dr. Varla Septrinindya Gharatri, M.Med.Sc, Sp.A", poli: "POLI ANAK", start: "08:00", end: "11:00" },
  { day: "SABTU", doctor: "drg. Yonanda Az Zikra", poli: "POLI GIGI", start: "13:00", end: "18:00" },
  { day: "SABTU", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI PENYAKIT DALAM", start: "16:30", end: "17:30" },
  { day: "SABTU", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI DIALYSIS", start: "08:30", end: "17:30" },
  { day: "SABTU", doctor: "dr. Zaka Susetyawan Dharmawhardhana, Sp.B", poli: "POLI BEDAH", start: "10:30", end: "12:30" },
  { day: "SABTU", doctor: "dr. Pratama Widi Permana, Sp.Rad", poli: "RADIOLOGI", start: "08:00", end: "10:00" },

  { day: "AKHAD", doctor: "Dokter Umum", poli: "POLI UMUM", start: "00:00", end: "23:59" },
  { day: "AKHAD", doctor: "dr. Djoko Tjahyo Nugroho, Sp.An", poli: "ANESTESI DAN TERAPI INTENSIF", start: "16:00", end: "18:00" },
  { day: "AKHAD", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI DIALYSIS", start: "08:30", end: "17:30" },
  { day: "AKHAD", doctor: "dr. Nafiuddin Mahfudz, Sp.PD., M.Kes., FINASIM", poli: "POLI PENYAKIT DALAM", start: "07:30", end: "09:00" },
];

export const DAY_ORDER = ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU", "AKHAD"];

export type DoctorGroup = {
  doctor: string;
  poli: string;
  schedule: { day: string; start: string; end: string }[];
};

export function groupByDoctor(entries: ScheduleEntry[]): DoctorGroup[] {
  const map = new Map<string, DoctorGroup>();

  for (const e of entries) {
    const key = `${e.doctor}__${e.poli}`;
    if (!map.has(key)) {
      map.set(key, { doctor: e.doctor, poli: e.poli, schedule: [] });
    }
    map.get(key)!.schedule.push({ day: e.day, start: e.start, end: e.end });
  }

  return Array.from(map.values())
    .map((g) => ({
      ...g,
      schedule: g.schedule.sort(
        (a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day)
      ),
    }))
    .sort((a, b) => a.doctor.localeCompare(b.doctor));
}
