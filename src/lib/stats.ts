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

// Image paths now live in src/data/images.ts (SEO names + alt text).
export { categoryPhoto as categoryImage } from '../data/images';
import { industryPhoto } from '../data/images';
export const industryImage = (slug: string) => industryPhoto[slug];
