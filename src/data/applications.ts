// Applications answer "what do I need to measure?". Industries (industries.ts) answer "what does my sector use?".
export type Application = {
  slug: string;
  name: string;
  question: string;
  intro: string;
  body: string[];
  categories: string[]; // category slugs
};

export const applications: Application[] = [
  {
    slug: 'gamma-detection',
    name: 'Gamma detection',
    question: 'Locating and measuring gamma and X-ray radiation.',
    intro: 'Choosing an instrument for gamma and X-ray fields depends on the energy range, dose-rate range and whether you need to find a source, measure a field or identify a nuclide.',
    body: [
      'GM-based instruments are robust and cover a wide dose-rate range at low cost. Energy-compensated GM tubes give a flatter response across photon energies.',
      'Scintillation detectors are far more sensitive, which makes them suited to searching for weak sources and to spectrometry, where the energy of each photon is used to identify the radionuclide.',
      'Ionisation chambers give the most accurate dose-rate readings in high or pulsed fields.',
    ],
    categories: ['radiation-detectors', 'radiation-survey-meters', 'radiation-monitoring-systems'],
  },
  {
    slug: 'alpha-beta-detection',
    name: 'Alpha and beta detection',
    question: 'Detecting short-range alpha and beta particles.',
    intro: 'Alpha particles travel only a few centimetres in air and beta particles a few metres, so the detector must have a thin entrance window and be used close to the surface being checked.',
    body: [
      'End-window and pancake GM tubes with thin mica windows are the usual choice for hand-held alpha/beta work.',
      'Gas-flow and sealed proportional counters can separate alpha from beta counts and offer larger sensitive areas for surface monitoring and laboratory counting.',
    ],
    categories: ['radiation-detectors', 'contamination-monitors'],
  },
  {
    slug: 'neutron-detection',
    name: 'Neutron detection',
    question: 'Measuring neutron fields and neutron dose.',
    intro: 'Neutrons carry no charge, so they are detected indirectly through nuclear reactions in materials such as helium-3 or boron.',
    body: [
      'Thermal neutron detectors (He-3 and BF3 proportional counters) are used bare for flux measurement and inside a moderator for dose-equivalent survey meters.',
      'Survey meters for neutron dose use a moderator designed to give a response close to the dose-equivalent curve across a wide energy range.',
    ],
    categories: ['radiation-detectors', 'radiation-survey-meters'],
  },
  {
    slug: 'dose-measurement',
    name: 'Dose and dose-rate measurement',
    question: 'Measuring ambient dose rate and accumulated dose.',
    intro: 'Area surveys measure ambient dose-equivalent rate at a point; the right instrument depends on the radiation type, energy range and the dose-rate range expected.',
    body: [
      'Check that the instrument is calibrated in the operational quantity you need (for example ambient dose equivalent) and that its energy response covers your sources.',
      'For high or rapidly changing fields, look at the upper limit of the measuring range and the response time.',
    ],
    categories: ['radiation-survey-meters', 'radiation-monitoring-systems', 'personal-dosimeters'],
  },
  {
    slug: 'personnel-monitoring',
    name: 'Personnel monitoring',
    question: 'Monitoring the dose received by people at work.',
    intro: 'Personal monitoring tracks the dose each worker receives, either for record-keeping or for immediate warning while work is in progress.',
    body: [
      'Electronic personal dosimeters show dose and dose rate in real time and alarm at set thresholds.',
      'Direct-reading (quartz-fibre) dosimeters need no batteries and give an immediate visual reading, which suits emergency response and visitors.',
    ],
    categories: ['personal-dosimeters', 'contamination-monitors'],
  },
  {
    slug: 'air-sampling',
    name: 'Air sampling',
    question: 'Measuring radioactivity in the air.',
    intro: 'Airborne activity is measured by drawing a known volume of air through a filter and counting what the filter collects.',
    body: [
      'High-volume samplers collect enough material quickly for low-level and environmental work. Low-volume and personal samplers suit continuous or breathing-zone sampling.',
      'Filter media and sampling heads are chosen for the target: particulates, aerosols or radioiodine (which needs charcoal cartridges).',
    ],
    categories: ['air-sampling-equipment', 'radiation-monitoring-systems'],
  },
  {
    slug: 'contamination-monitoring',
    name: 'Contamination monitoring',
    question: 'Checking surfaces, equipment and people for contamination.',
    intro: 'Contamination monitoring finds radioactive material where it should not be: on benches, tools, floors, clothing and skin.',
    body: [
      'Hand-held monitors with large-area alpha/beta probes are used for surveys and release checks.',
      'Fixed hand-and-foot and whole-body monitors check people leaving controlled areas.',
    ],
    categories: ['contamination-monitors', 'radiation-detectors'],
  },
  {
    slug: 'environmental-monitoring',
    name: 'Environmental monitoring',
    question: 'Measuring background and environmental radiation over time.',
    intro: 'Environmental programmes measure low levels of radiation in air, soil, water and ambient dose over long periods.',
    body: [
      'Sensitive dose-rate monitors with data logging track ambient levels and trends at fixed stations.',
      'Air samplers and laboratory spectrometers measure activity in collected samples.',
    ],
    categories: ['radiation-monitoring-systems', 'air-sampling-equipment', 'radiation-survey-meters'],
  },
];
