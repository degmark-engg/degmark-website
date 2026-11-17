// Counts shown on cards, menus and the home page. Derived from the series data, so they update automatically.
import { allSeries } from './series';
import { categories } from '../data/categories';
import { brands } from '../data/brands';

const sum = (list: typeof allSeries) => list.reduce((n, s) => n + s.models.length, 0);

export const modelsInCategory = (slug: string) => sum(allSeries.filter((s) => s.category === slug));
export const modelsInSubtype = (slug: string, subtype: string) => sum(allSeries.filter((s) => s.category === slug && s.subtype === subtype));
export const modelsForBrand = (name: string) => sum(allSeries.filter((s) => s.brand.toLowerCase() === name.toLowerCase()));
export const gmTubeModels = modelsInSubtype('radiation-detectors', 'GM tubes');
export const totalModels = sum(allSeries);
export const totalSeries = allSeries.length;
export const totalCategories = categories.length;
export const totalPrincipals = brands.filter((b) => b.slug !== 'other-manufacturers').length;
export const countLabel = (n: number) => (n > 0 ? `${n} ${n === 1 ? 'model' : 'models'}` : 'On request');

// Icons for applications and industries (names from Icon.astro).
export const applicationIcon: Record<string, string> = {
  'gamma-detection': 'gamma', 'alpha-beta-detection': 'alphabeta', 'neutron-detection': 'neutron', 'dose-measurement': 'dose',
  'personnel-monitoring': 'person', 'air-sampling': 'air', 'contamination-monitoring': 'contamination', 'environmental-monitoring': 'leaf',
};
export const industryIcon: Record<string, string> = {
  'nuclear-power': 'reactor', 'atomic-energy-research': 'atom', 'healthcare-nuclear-medicine': 'medical', 'industrial-radiography-ndt': 'ndt',
  'environmental-monitoring': 'leaf', 'defence-security': 'shield', laboratories: 'flask',
};

// Photos (public/images). Product photos are the manufacturers' own images; industry and banner photos are Unsplash (free licence).
export const categoryImage: Record<string, string | undefined> = {
  'radiation-detectors': '/images/products-hero/radiation-detectors.webp',
  'radiation-survey-meters': '/images/products-hero/radiation-survey-meters.webp',
  'radiation-monitoring-systems': '/images/products-hero/radiation-monitoring-systems.webp',
  'air-sampling-equipment': undefined, // STAPLEX photo to follow
  'personal-dosimeters': '/images/products-hero/personal-dosimeters.webp',
  'contamination-monitors': '/images/products-hero/contamination-monitors.webp',
  'detector-components': '/images/products-hero/detector-components.webp',
  'gm-tubes': '/images/products-hero/gm-tubes.webp',
};
export const industryImage = (slug: string) => `/images/home/ind-${slug}.webp`;
