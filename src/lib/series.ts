// Loads product series from src/data/series/*.json (see PRODUCT_DATA.md).
// Only "approved" series are built, unless SHOW_DRAFTS=1 (preview builds).
export type Model = {
  model: string;
  anchor: string;
  specs: Record<string, string>;
  datasheet?: string;
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
  image?: string;
  catalogue?: string;
  specColumns: string[];
  models: Model[];
  moreOnRequest?: boolean;
};

const files = import.meta.glob<{ default: Series }>('../data/series/*.json', { eager: true });
const showDrafts = process.env.SHOW_DRAFTS === '1';

export const allSeries: Series[] = Object.values(files)
  .map((m) => m.default)
  .filter((s) => s && (showDrafts || s.status === 'approved'))
  .sort((a, b) => a.name.localeCompare(b.name));

export const seriesInCategory = (cat: string) => allSeries.filter((s) => s.category === cat);
export const seriesForBrand = (brand: string) => allSeries.filter((s) => s.brand.toLowerCase() === brand.toLowerCase());
export const seriesForApplication = (app: string) => allSeries.filter((s) => s.applications.includes(app));
export const seriesUrl = (s: Series) => `/products/${s.category}/${s.slug}/`;
export const isPlaceholder = (v?: string) => !v || /^\[.*\]$/.test(v.trim());
