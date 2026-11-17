// ─────────────────────────────────────────────────────────────
//  All site text that changes often lives here.
//  Edit this file to update contact details, brands or products.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'Degmark Engineering Co.',
  short: 'Degmark',
  tagline: 'Radiation detection & nuclear instrumentation',
  city: 'Mumbai, India',
  // TODO: fill in real contact details
  address: 'Address — to be added',
  phone: '+91 00000 00000',
  email: 'info@degmarkeng.com',
  domain: 'https://www.degmarkeng.com',
};

export const sectors = [
  { name: 'Nuclear power', note: 'NPCIL stations and projects' },
  { name: 'Research', note: 'BARC, DAE units, IGCAR, universities' },
  { name: 'Industrial', note: 'NDT, process plants, scrap & steel' },
  { name: 'Healthcare', note: 'Nuclear medicine and radiotherapy' },
  { name: 'Defence & security', note: 'Field survey and emergency response' },
];

export type Brand = {
  slug: string;
  name: string;
  origin: string;
  summary: string;
  lines: string[];
  site?: string;
};

export const brands: Brand[] = [
  {
    slug: 'lnd',
    name: 'LND',
    origin: 'USA',
    summary:
      'Manufacturer of nuclear radiation detectors — Geiger-Müller tubes, proportional counters and neutron detectors used inside survey meters, area monitors and laboratory systems.',
    lines: ['Geiger-Müller tubes', 'Proportional counters', 'He-3 and BF3 neutron detectors', 'Ionization chambers'],
    site: 'https://www.lndinc.com',
  },
  {
    slug: 'atomtex',
    name: 'ATOMTEX',
    origin: 'Belarus',
    summary:
      'Radiation measuring instruments for survey, dosimetry and spectrometry — from handheld dosimeters to laboratory gamma and beta spectrometers.',
    lines: ['Dosimeters and dose-rate meters', 'Survey meters and search instruments', 'Gamma and beta spectrometers', 'Contamination monitors'],
    site: 'https://atomtex.com',
  },
  {
    slug: 'staplex',
    name: 'STAPLEX',
    origin: 'USA',
    summary:
      'Air sampling equipment for airborne radioactivity and particulate monitoring, including high-volume and low-volume samplers and filter media.',
    lines: ['High-volume air samplers', 'Low-volume / personal samplers', 'Filter holders and filter paper', 'Calibrators and spares'],
    site: 'https://www.staplex.com',
  },
  {
    slug: 'gamma-scout',
    name: 'Gamma-Scout',
    origin: 'Germany',
    summary:
      'Compact Geiger counters that measure alpha, beta, gamma and X-ray radiation, with data logging for continuous monitoring.',
    lines: ['Handheld Geiger counters', 'Data-logging dosimeters', 'Software and accessories'],
    site: 'https://www.gamma-scout.com',
  },
  {
    slug: 'arrow-tech',
    name: 'Arrow-Tech',
    origin: 'USA',
    summary:
      'Direct-reading dosimeters and chargers for personal radiation monitoring in plants, laboratories and emergency response.',
    lines: ['Direct-reading pocket dosimeters', 'Dosimeter chargers', 'Calibration and check sources'],
    site: 'https://www.dosimeter.com',
  },
];

export const categories = [
  { name: 'Detectors & GM tubes', text: 'Replacement and new detectors for installed survey meters, area monitors and lab systems.', brands: ['lnd'] },
  { name: 'Survey & dose-rate meters', text: 'Handheld and portable instruments for field and plant surveys.', brands: ['atomtex', 'gamma-scout'] },
  { name: 'Spectrometry', text: 'Gamma and beta spectrometers for identification and lab analysis.', brands: ['atomtex'] },
  { name: 'Air samplers', text: 'High- and low-volume samplers for airborne activity monitoring.', brands: ['staplex'] },
  { name: 'Personal dosimetry', text: 'Direct-reading dosimeters, chargers and electronic dosimeters.', brands: ['arrow-tech', 'atomtex'] },
  { name: 'Spares & consumables', text: 'Filters, probes, cables, check sources and compatible components.', brands: [] },
];
