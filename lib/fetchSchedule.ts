import { ScheduleEntry, RAW_SCHEDULE } from "@/lib/doctors";

const SOURCE_URL = "http://121.101.134.159/epasien/pages/listjadwaldokter.php";

function stripTags(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
}

function toHHMM(time: string): string {
  // "08:00:00" -> "08:00"
  const parts = time.split(":");
  return parts.length >= 2 ? `${parts[0]}:${parts[1]}` : time;
}

function parseSchedule(html: string): ScheduleEntry[] {
  const entries: ScheduleEntry[] = [];
  const rowMatches = html.matchAll(/<tr>([\s\S]*?)<\/tr>/gi);

  for (const row of rowMatches) {
    const cellMatches = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)];
    if (cellMatches.length !== 5) continue;

    const [day, doctor, poli, start, end] = cellMatches.map((m) =>
      stripTags(m[1])
    );

    if (!day || day.toUpperCase() === "HARI KERJA") continue;

    entries.push({
      day: day.toUpperCase(),
      doctor,
      poli,
      start: toHHMM(start),
      end: toHHMM(end),
    });
  }

  return entries;
}

// Fetches the live schedule from the hospital's internal system.
// Falls back to the last known static snapshot if the source is unreachable.
export async function fetchSchedule(): Promise<{
  entries: ScheduleEntry[];
  isLive: boolean;
}> {
  try {
    const res = await fetch(SOURCE_URL, {
      // Refresh at most once per hour (ISR-style caching for this fetch)
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) throw new Error(`Status ${res.status}`);

    const html = await res.text();
    const entries = parseSchedule(html);

    if (entries.length === 0) throw new Error("Parsed 0 entries");

    return { entries, isLive: true };
  } catch (err) {
    console.error("Gagal fetch jadwal live, pakai data cadangan:", err);
    return { entries: RAW_SCHEDULE, isLive: false };
  }
}
