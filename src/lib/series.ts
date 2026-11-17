// Loads product series from src/data/series/*.json (see PRODUCT_DATA.md).
// Only "approved" series are built, unless SHOW_DRAFTS=1 (preview builds).
export type Model = {
  model: string;
  anchor: string;
  specs: Record<string, string | number>;
  datasheet?: string | null;
  note?: string;
  verified?: boolean;
};
export type Series = {
  slug: string;
  status: 'draft' | 'review' | 'approved';
  brand: string;
  category: string;
  subtype: string;
  name: string;
  summary: string;
  radiationTypes: string[];
  applications: string[];
  image?: string | null;
  catalogue?: string | null;
  specColumns: string[];
  models: Model[];
  moreOnRequest?: boolean;
};

import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Images and files that are not yet in /public are dropped, so pages show a placeholder instead of a broken image.
const inPublic = (p?: string | null) => (p && existsSync(join(process.cwd(), 'public', p)) ? p : undefined);

const files = import.meta.glob<{ default: Series }>('../data/series/*.json', { eager: true });
const showDrafts = process.env.SHOW_DRAFTS === '1';

export const allSeries: Series[] = Object.values(files)
  .map((m) => m.default)
  .filter((s) => s && (showDrafts || s.status === 'approved'))
  .map((s) => ({
    ...s,
    image: inPublic(s.image),
    catalogue: inPublic(s.catalogue),
    models: s.models.map((m) => ({ ...m, datasheet: inPublic(m.datasheet) })),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const seriesInCategory = (cat: string) => allSeries.filter((s) => s.category === cat);
export const seriesForBrand = (brand: string) => allSeries.filter((s) => s.brand.toLowerCase() === brand.toLowerCase());
export const seriesForApplication = (app: string) => allSeries.filter((s) => s.applications.includes(app));
export const seriesUrl = (s: Series) => `/products/${s.category}/${s.slug}/`;
export const isPlaceholder = (v?: string) => !v || /^\[.*\]$/.test(v.trim());
