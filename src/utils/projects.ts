import type { CollectionEntry } from 'astro:content';

type ProjectEntry = CollectionEntry<'projects'>;

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

export interface ProjectGroups {
  /** Projects flagged `selected: true`, newest first. */
  selected: ProjectEntry[];
  /** Projects not flagged as selected, newest first. */
  other: ProjectEntry[];
  /** Every project, newest first (selected + other). */
  all: ProjectEntry[];
}

/**
 * Single source of truth for how projects are grouped across the site.
 *
 * The EN entry is authoritative for ordering and the `selected` flag; each
 * group is localized to `lang` when a translated entry with real content
 * exists, otherwise it falls back to the EN entry. Both the homepage résumé
 * and the Projects page consume this so they always stay in sync.
 */
export function getProjectGroups(allProjects: ProjectEntry[], lang: string): ProjectGroups {
  const enProjects = allProjects
    .filter(e => e.id.startsWith('en/'))
    .sort((a, b) => {
      const byPeriod = parsePeriod(b.data.period) - parsePeriod(a.data.period);
      if (byPeriod !== 0) return byPeriod;
      return (a.data.order ?? 99) - (b.data.order ?? 99);
    });

  const toLangEntry = (enEntry: ProjectEntry): ProjectEntry => {
    const projectId = enEntry.id.replace('en/', '');
    const langEntry = allProjects.find(e => e.id === `${lang}/${projectId}` && e.body?.trim());
    return langEntry ?? enEntry;
  };

  return {
    selected: enProjects.filter(e => e.data.selected).map(toLangEntry),
    other: enProjects.filter(e => !e.data.selected).map(toLangEntry),
    all: enProjects.map(toLangEntry),
  };
}
