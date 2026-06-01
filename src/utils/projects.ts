const MONTH_MAP: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12
};

export function parsePeriod(period?: string): number {
  if (!period) return 0;
  // For ranges (e.g. "Jan 2025 – Apr 2025"), use the last segment
  const segments = period.split(/\s*[–\-]\s*/);
  const last = segments[segments.length - 1].trim().split(/\s+/);
  if (last.length >= 2) {
    const month = MONTH_MAP[last[0].toLowerCase().slice(0, 3)];
    const year = parseInt(last[last.length - 1]);
    if (month && !isNaN(year)) return year * 100 + month;
  }
  const year = parseInt(last[0]);
  return isNaN(year) ? 0 : year * 100;
}
