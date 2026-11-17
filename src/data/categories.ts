// The seven fixed product categories and their sub-types (PROJECT_BRIEF.md §3).
export type Category = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  icon: string;
  subtypes: string[];
};

export const categories: Category[] = [
  {
    slug: 'radiation-detectors',
    name: 'Radiation Detectors',
    short: 'GM tubes, proportional counters, neutron and scintillation detectors.',
    intro:
      'Detector elements and assemblies for alpha, beta, gamma, X-ray and neutron measurement, used in survey instruments, area monitors, laboratory counting systems and OEM equipment.',
    icon: 'detector',
    subtypes: ['GM tubes', 'Proportional counters', 'Neutron detectors', 'Scintillation detectors', 'Ionisation chambers', 'Probes & assemblies'],
  },
  {
    slug: 'radiation-survey-meters',
    name: 'Radiation Survey Meters',
    short: 'Portable instruments for dose-rate, neutron and multipurpose surveys.',
    intro:
      'Hand-held and portable instruments for measuring ambient dose rate, neutron fields and surface activity, and for identifying radionuclides in the field.',
    icon: 'meter',
    subtypes: ['Gamma dose-rate meters', 'Neutron survey meters', 'Multipurpose instruments', 'Spectrometers', 'Personal Geiger counters'],
  },
  {
    slug: 'radiation-monitoring-systems',
    name: 'Radiation Monitoring Systems',
    short: 'Area monitors, fixed and continuous systems, environmental monitors.',
    intro:
      'Installed monitors that measure radiation levels continuously at a location, raise local and remote alarms, and log data for review.',
    icon: 'system',
    subtypes: ['Area monitors', 'Fixed and continuous systems', 'Environmental monitors'],
  },
  {
    slug: 'air-sampling-equipment',
    name: 'Air Sampling Equipment',
    short: 'High-volume and particulate samplers, sampling heads, filter holders.',
    intro:
      'Samplers that draw a measured volume of air through filter media so that airborne particulates, aerosols and radioiodine can be collected and counted.',
    icon: 'air',
    subtypes: ['High-volume samplers', 'Particulate and aerosol samplers', 'Sampling heads and filter holders', 'Accessories'],
  },
  {
    slug: 'personal-dosimeters',
    name: 'Personal Dosimeters',
    short: 'Electronic, direct-reading, pocket and digital dosimeters.',
    intro:
      'Dosimeters worn by individuals to measure accumulated dose and dose rate, with immediate readout and alarm thresholds where required.',
    icon: 'dosimeter',
    subtypes: ['Electronic', 'Direct-reading', 'Pocket', 'Digital', 'Gamma dosimeters'],
  },
  {
    slug: 'contamination-monitors',
    name: 'Contamination Monitors',
    short: 'Surface, alpha/beta and personnel contamination monitors.',
    intro:
      'Instruments for detecting radioactive contamination on surfaces, equipment and people, from hand-held probes to walk-through personnel monitors.',
    icon: 'contamination',
    subtypes: ['Surface', 'Alpha/beta', 'Personnel contamination monitors'],
  },
  {
    slug: 'detector-components',
    name: 'Detector Components',
    short: 'High-voltage supplies, detector electronics, accessories.',
    intro:
      'Supporting electronics and parts for building, maintaining and integrating detector systems, including high-voltage supplies, preamplifiers and accessories.',
    icon: 'component',
    subtypes: ['High-voltage power supplies', 'Detector electronics', 'Accessories', 'Replacement components'],
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
