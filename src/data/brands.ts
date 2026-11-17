// Principals. Profiles are short summaries in our own words; edit "relationship" once confirmed.
export type Brand = {
  slug: string;
  name: string;
  country: string;
  oneLine: string;
  about: string[];
  relationship: string;
  logo?: string; // official logo file supplied by the principal, e.g. /images/brands/lnd.svg
  website?: string;
};

// Degmark buys from these manufacturers and supplies their products. Where a customer or tender
// requires it, Degmark obtains the manufacturer's authorisation for that supply.
const rel = (b: string) =>
  `Degmark sources ${b} products from the manufacturer and supplies them to customers. Where a tender or customer requires it, we arrange ${b}'s authorisation for the supply.`;

export const brands: Brand[] = [
  {
    slug: 'lnd',
    name: 'LND',
    country: 'USA',
    oneLine: 'Geiger-Müller tubes, proportional counters and neutron detectors.',
    about: [
      'LND designs and manufactures nuclear radiation detectors. Its range covers Geiger-Müller tubes, proportional counters, neutron detectors and ionisation chambers.',
      'Its detectors are built into survey meters, area monitors, laboratory instruments and OEM systems across many industries.',
    ],
    relationship: rel('LND'),
    website: 'https://www.lndinc.com',
  },
  {
    slug: 'atomtex',
    name: 'ATOMTEX',
    country: 'Belarus',
    oneLine: 'Dosimeters, survey meters, spectrometers and monitoring systems.',
    about: [
      'ATOMTEX develops and manufactures instruments for measuring ionising radiation, from personal dosimeters and survey meters to spectrometers and monitoring systems.',
      'Its instruments are used for radiation protection, environmental monitoring, laboratory analysis and border security.',
    ],
    relationship: rel('ATOMTEX'),
    website: 'https://atomtex.com',
  },
  {
    slug: 'staplex',
    name: 'STAPLEX',
    country: 'USA',
    oneLine: 'Air samplers, sampling heads and filter media.',
    about: [
      'STAPLEX manufactures air sampling equipment for collecting airborne particulates and radioactive aerosols, including high-volume and low-volume samplers.',
      'Its samplers are used in nuclear facilities, laboratories and environmental monitoring programmes.',
    ],
    relationship: rel('STAPLEX'),
    website: 'https://www.staplex.com',
  },
  {
    slug: 'gamma-scout',
    name: 'Gamma-Scout',
    country: '[PLACEHOLDER: country]',
    oneLine: 'Compact Geiger counters with data logging.',
    about: [
      'Gamma-Scout makes compact Geiger counters that detect alpha, beta, gamma and X-ray radiation and log readings for long-term monitoring.',
    ],
    relationship: rel('Gamma-Scout'),
    website: 'https://www.gamma-scout.com',
  },
  {
    slug: 'arrow-tech',
    name: 'Arrow-Tech',
    country: 'USA',
    oneLine: 'Direct-reading dosimeters and chargers.',
    about: [
      'Arrow-Tech manufactures direct-reading dosimeters, chargers and related products for personal radiation monitoring.',
      'Its dosimeters are used in nuclear facilities, emergency response, industrial radiography and training.',
    ],
    relationship: rel('Arrow-Tech'),
    website: 'https://www.dosimeter.com',
  },
  {
    slug: 'other-manufacturers',
    name: 'Other manufacturers',
    country: 'International',
    oneLine: 'Instruments and components from other international makers, on request.',
    about: [
      'Beyond our principal lines, we source radiation instruments and detector components from other established international manufacturers to meet specific requirements.',
    ],
    relationship: 'Send us the make and model, or your specification, and we will confirm availability.',
  },
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
export const brandByName = (name: string) => brands.find((b) => b.name.toLowerCase() === name.toLowerCase());
