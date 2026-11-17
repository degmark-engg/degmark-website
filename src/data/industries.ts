// Industries answer "what does my sector use?". No customer names unless approved.
export type Industry = {
  slug: string;
  name: string;
  oneLine: string;
  needs: string[];
  categories: string[]; // category slugs
  applications: string[]; // application slugs
};

export const industries: Industry[] = [
  {
    slug: 'nuclear-power',
    name: 'Nuclear power',
    oneLine: 'Radiation protection and process monitoring at power stations.',
    needs: [
      'Health physics teams need survey instruments, contamination monitors and personal dosimeters for routine work and outages.',
      'Installed area monitors and air samplers provide continuous monitoring of working areas and releases.',
      'Maintenance of installed systems relies on replacement detectors and electronics that match the original design.',
    ],
    categories: ['radiation-survey-meters', 'radiation-monitoring-systems', 'contamination-monitors', 'personal-dosimeters', 'air-sampling-equipment', 'radiation-detectors'],
    applications: ['dose-measurement', 'contamination-monitoring', 'personnel-monitoring', 'air-sampling'],
  },
  {
    slug: 'atomic-energy-research',
    name: 'Atomic energy and research',
    oneLine: 'Instruments for research reactors, accelerators and fuel-cycle facilities.',
    needs: [
      'Research facilities work with mixed fields and a wide range of nuclides, so they need detectors for gamma, neutron and alpha/beta measurement.',
      'Laboratories need detector elements, electronics and high-voltage supplies to build and maintain their own systems.',
    ],
    categories: ['radiation-detectors', 'detector-components', 'radiation-survey-meters', 'air-sampling-equipment'],
    applications: ['neutron-detection', 'gamma-detection', 'alpha-beta-detection'],
  },
  {
    slug: 'healthcare-nuclear-medicine',
    name: 'Healthcare and nuclear medicine',
    oneLine: 'Radiation safety in nuclear medicine, radiotherapy and radiology.',
    needs: [
      'Nuclear medicine departments check work areas and waste for contamination and monitor staff dose.',
      'Radiotherapy and radiology need survey meters for shielding checks and area monitors in treatment rooms.',
    ],
    categories: ['contamination-monitors', 'radiation-survey-meters', 'personal-dosimeters', 'radiation-monitoring-systems'],
    applications: ['contamination-monitoring', 'dose-measurement', 'personnel-monitoring'],
  },
  {
    slug: 'industrial-radiography-ndt',
    name: 'Industrial radiography and NDT',
    oneLine: 'Survey meters and alarming dosimeters for radiography crews.',
    needs: [
      'Radiographers need rugged survey meters to confirm source position and set up controlled areas.',
      'Each crew member needs a personal dosimeter, often with an audible alarm.',
    ],
    categories: ['radiation-survey-meters', 'personal-dosimeters'],
    applications: ['gamma-detection', 'dose-measurement', 'personnel-monitoring'],
  },
  {
    slug: 'environmental-monitoring',
    name: 'Environmental monitoring',
    oneLine: 'Long-term monitoring of air, ground and ambient radiation.',
    needs: [
      'Monitoring networks use sensitive dose-rate stations with data logging.',
      'Air sampling programmes collect particulates for laboratory analysis.',
    ],
    categories: ['radiation-monitoring-systems', 'air-sampling-equipment', 'radiation-survey-meters'],
    applications: ['environmental-monitoring', 'air-sampling'],
  },
  {
    slug: 'defence-security',
    name: 'Defence and security',
    oneLine: 'Detection and identification for field and emergency response.',
    needs: [
      'Response teams need portable instruments to detect, locate and identify radioactive material.',
      'Personnel need dosimeters that work without infrastructure.',
    ],
    categories: ['radiation-survey-meters', 'personal-dosimeters', 'contamination-monitors'],
    applications: ['gamma-detection', 'neutron-detection', 'personnel-monitoring'],
  },
  {
    slug: 'laboratories',
    name: 'Laboratories',
    oneLine: 'Counting, calibration and contamination control in labs.',
    needs: [
      'Labs handling open sources need contamination monitors and bench surveys.',
      'Counting and calibration work needs detectors, electronics and check sources.',
    ],
    categories: ['radiation-detectors', 'detector-components', 'contamination-monitors'],
    applications: ['alpha-beta-detection', 'contamination-monitoring'],
  },
];
