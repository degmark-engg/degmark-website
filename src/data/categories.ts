// Product categories and their sub-types (PROJECT_BRIEF.md §3), in two divisions:
// radiation instruments (the core business) and precision mechanical components.
export type Division = 'radiation' | 'precision';
export const divisions: { slug: Division; name: string; short: string; href: string; tagLabel: string }[] = [
  { slug: 'radiation', name: 'Radiation Detection & Measurement', short: 'Detectors, survey meters, monitoring systems, air samplers and dosimeters.', href: '/products/', tagLabel: 'Radiation' },
  { slug: 'precision', name: 'Precision Mechanical Components', short: 'Precision gears, speed reducers, linear motion, couplings and bearings.', href: '/precision-components/', tagLabel: 'Standard' },
];
export const divisionOf = (catSlug: string) => divisions.find((d) => d.slug === (categoryBySlug(catSlug)?.division ?? 'radiation'))!;

export type Category = {
  slug: string;
  division: Division;
  name: string;
  short: string;
  intro: string;
  icon: string;
  subtypes: string[];
};

export const categories: Category[] = [
  {
    slug: 'radiation-detectors',
    division: 'radiation',
    name: 'Radiation Detectors',
    short: 'GM tubes, proportional counters, neutron and scintillation detectors.',
    intro:
      'Detector elements and assemblies for alpha, beta, gamma, X-ray and neutron measurement, used in survey instruments, area monitors, laboratory counting systems and OEM equipment.',
    icon: 'detector',
    subtypes: ['GM tubes', 'Proportional counters', 'Neutron detectors', 'Scintillation detectors', 'Ionisation chambers', 'Probes & assemblies'],
  },
  {
    slug: 'radiation-survey-meters',
    division: 'radiation',
    name: 'Radiation Survey Meters',
    short: 'Portable instruments for dose-rate, neutron and multipurpose surveys.',
    intro:
      'Hand-held and portable instruments for measuring ambient dose rate, neutron fields and surface activity, and for identifying radionuclides in the field.',
    icon: 'meter',
    subtypes: ['Gamma dose-rate meters', 'Neutron survey meters', 'Multipurpose instruments', 'Spectrometers', 'Personal Geiger counters'],
  },
  {
    slug: 'radiation-monitoring-systems',
    division: 'radiation',
    name: 'Radiation Monitoring Systems',
    short: 'Area monitors, fixed and continuous systems, environmental monitors.',
    intro:
      'Installed monitors that measure radiation levels continuously at a location, raise local and remote alarms, and log data for review.',
    icon: 'system',
    subtypes: ['Area monitors', 'Fixed and continuous systems', 'Environmental monitors'],
  },
  {
    slug: 'air-sampling-equipment',
    division: 'radiation',
    name: 'Air Sampling Equipment',
    short: 'High-volume and particulate samplers, sampling heads, filter holders.',
    intro:
      'Samplers that draw a measured volume of air through filter media so that airborne particulates, aerosols and radioiodine can be collected and counted.',
    icon: 'air',
    subtypes: ['High-volume samplers', 'Particulate and aerosol samplers', 'Sampling heads and filter holders', 'Accessories'],
  },
  {
    slug: 'personal-dosimeters',
    division: 'radiation',
    name: 'Personal Dosimeters',
    short: 'Electronic, direct-reading, pocket and digital dosimeters.',
    intro:
      'Dosimeters worn by individuals to measure accumulated dose and dose rate, with immediate readout and alarm thresholds where required.',
    icon: 'dosimeter',
    subtypes: ['Electronic', 'Direct-reading', 'Pocket', 'Digital', 'Gamma dosimeters'],
  },
  {
    slug: 'contamination-monitors',
    division: 'radiation',
    name: 'Contamination Monitors',
    short: 'Surface, alpha/beta and personnel contamination monitors.',
    intro:
      'Instruments for detecting radioactive contamination on surfaces, equipment and people, from hand-held probes to walk-through personnel monitors.',
    icon: 'contamination',
    subtypes: ['Surface', 'Alpha/beta', 'Personnel contamination monitors'],
  },
  {
    slug: 'detector-components',
    division: 'radiation',
    name: 'Detector Components',
    short: 'High-voltage supplies, detector electronics, accessories.',
    intro:
      'Supporting electronics and parts for building, maintaining and integrating detector systems, including high-voltage supplies, preamplifiers and accessories.',
    icon: 'component',
    subtypes: ['High-voltage power supplies', 'Detector electronics', 'Accessories', 'Replacement components'],
  },
  // Precision mechanical components (PIC Design and other makers)
  {
    slug: 'precision-gears',
    division: 'precision',
    name: 'Precision Gears',
    short: 'Fine-pitch spur, helical, bevel, worm and anti-backlash gears, racks.',
    intro:
      'Fine-pitch precision gears in inch and metric sizes for instrument drives, positioning mechanisms, optical systems and laboratory equipment, including anti-backlash designs for accurate motion.',
    icon: 'gear',
    subtypes: ['Spur & helical gears', 'Bevel & worm gears', 'Anti-backlash gears & racks'],
  },
  {
    slug: 'speed-reducers',
    division: 'precision',
    name: 'Speed Reducers & Gearheads',
    short: 'Compact helical and worm speed reducers, gearheads and gear assemblies.',
    intro:
      'Compact, self-contained speed reducers and gear assemblies that deliver high torque in a small package, for instrument drives, positioners and test equipment.',
    icon: 'reducer',
    subtypes: ['Speed reducers & gearheads'],
  },
  {
    slug: 'belts-pulleys',
    division: 'precision',
    name: 'Belts & Pulleys',
    short: 'Timing and positioning belts, round belts, pulleys and precision chain.',
    intro:
      'Belt drives for precise, quiet power transmission and positioning, from timing and positive-engagement positioning belts to machined pulleys and fine-pitch stainless steel chain.',
    icon: 'belt',
    subtypes: ['Belts, pulleys & chain'],
  },
  {
    slug: 'linear-motion',
    division: 'precision',
    name: 'Linear Motion',
    short: 'Ball and crossed-roller slides, stages, rails, lead screws and ball screws.',
    intro:
      'Components and assemblies for accurate straight-line motion: slides, stages and positioners, rails and guides, and lead screws, anti-backlash nuts and ball screws.',
    icon: 'linear',
    subtypes: ['Slides, stages & rails', 'Lead screws & ball screws'],
  },
  {
    slug: 'couplings-shafts-hardware',
    division: 'precision',
    name: 'Couplings, Shafts & Hardware',
    short: 'Shaft couplings, precision shafting, dowel pins and shoulder screws.',
    intro:
      'The precision hardware that ties a mechanism together: shaft couplings, ground shafting, dowel pins, shoulder screws and set screws, in inch and metric sizes.',
    icon: 'coupling',
    subtypes: ['Couplings, shafts & hardware'],
  },
  {
    slug: 'precision-bearings',
    division: 'precision',
    name: 'Precision Bearings',
    short: 'Precision ball, sleeve, thrust, linear and plastic bearings, rod ends.',
    intro:
      'Miniature and instrument bearings for low-friction, accurate rotation and linear travel, including precision ball, bronze sleeve, thrust, linear and plastic bearings and rod ends.',
    icon: 'bearing',
    subtypes: ['Bearings & rod ends'],
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const categoriesIn = (d: Division) => categories.filter((c) => c.division === d);
