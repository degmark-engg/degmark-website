// Every image on the site, with SEO file names and descriptive alt text.
// Product photos: manufacturers' own images (see public/images/CREDITS.md). Photos: Unsplash licence.
const P = '/images/products/';
const F = '/images/photos/';

export const alt: Record<string, string> = {
  // Product photos
  [`${P}atomtex-at1117m-multipurpose-radiation-monitor-kit.webp`]: 'ATOMTEX AT1117M multipurpose radiation monitor with interchangeable detection units',
  [`${P}atomtex-at6130-handheld-x-ray-gamma-dosimeter-radiometer.webp`]: 'ATOMTEX AT6130 handheld X-ray and gamma dosimeter-radiometer',
  [`${P}atomtex-at1123-x-ray-gamma-dosimeter.webp`]: 'ATOMTEX AT1123 X-ray and gamma radiation dosimeter',
  [`${P}atomtex-at1125a-x-ray-gamma-dose-rate-meter.webp`]: 'ATOMTEX AT1125A X-ray and gamma dose-rate meter',
  [`${P}atomtex-at2503b-electronic-personal-dosimeter.webp`]: 'ATOMTEX AT2503B electronic personal dosimeter',
  [`${P}atomtex-at2522-alpha-beta-surface-contamination-monitor.webp`]: 'ATOMTEX AT2522 alpha and beta surface contamination monitor',
  [`${P}atomtex-at1117m-alpha-beta-contamination-monitor.webp`]: 'ATOMTEX AT1117M alpha and beta contamination monitor with surface probe',
  [`${P}atomtex-at1117m-bdps-02-alpha-beta-contamination-probe.webp`]: 'ATOMTEX AT1117M with BDPS-02 alpha-beta contamination probe',
  [`${P}atomtex-at2327-area-gamma-radiation-monitoring-system.webp`]: 'ATOMTEX AT2327 area gamma radiation monitoring system',
  [`${P}atomtex-area-radiation-monitors-x-ray-gamma.webp`]: 'ATOMTEX fixed area radiation monitors for X-ray and gamma radiation',
  [`${P}atomtex-at1315-gamma-beta-spectrometer-environmental-samples.webp`]: 'ATOMTEX AT1315 gamma-beta spectrometer for environmental samples',
  [`${P}atomtex-at6101c-handheld-gamma-spectrometer-radionuclide-identifier.webp`]: 'ATOMTEX AT6101C gamma spectrometer and radionuclide identifier',
  [`${P}atomtex-at1316-whole-body-counter.webp`]: 'ATOMTEX AT1316 whole-body counter',
  [`${P}atomtex-bdkg-spectrometric-gamma-detection-units.webp`]: 'ATOMTEX BDKG scintillation gamma radiation detection units',
  [`${P}atomtex-bdkg-05s-scintillation-gamma-detection-unit.webp`]: 'ATOMTEX BDKG-05S scintillation gamma detection unit',
  [`${P}atomtex-bdkn-neutron-radiation-detection-unit.webp`]: 'ATOMTEX BDKN neutron radiation detection units',
  [`${P}lnd-7311-pancake-geiger-mueller-tube.webp`]: 'LND 7311 pancake Geiger-Mueller tube with mica window',
  [`${P}lnd-712-end-window-geiger-mueller-tube.webp`]: 'LND 712 end-window Geiger-Mueller tube',
  [`${P}lnd-7149-energy-compensated-geiger-mueller-tube.webp`]: 'LND 7149 energy-compensated Geiger-Mueller tube',
  [`${P}lnd-726-gamma-geiger-mueller-tube.webp`]: 'LND 726 gamma Geiger-Mueller tube',
  [`${P}lnd-713-thin-wall-beta-gamma-geiger-mueller-tube.webp`]: 'LND 713 thin-wall beta-gamma Geiger-Mueller tube',
  [`${P}gamma-scout-standard-geiger-counter.webp`]: 'GAMMA-SCOUT Standard pocket Geiger counter',
  [`${P}arrow-tech-w138-direct-reading-pocket-dosimeter.webp`]: 'Arrow-Tech W138 direct-reading pocket dosimeter',
  [`${P}arrow-tech-909b-dosimeter-charger.webp`]: 'Arrow-Tech 909B dosimeter charger',
  [`${P}staplex-high-volume-air-samplers.webp`]: 'STAPLEX TFIA-2 high-volume air sampler with filter screen',
  [`${P}staplex-calibration-kits.webp`]: 'STAPLEX CKHV810 calibration kit fitted to a high-volume air sampler',
  [`${P}staplex-holders-field-accessories.webp`]: 'STAPLEX air sampler field kit in carry case with filter holder and tripod',
  [`${P}staplex-filters-consumables.webp`]: 'STAPLEX TFAGF41 4-inch glass fibre filters, box of 100',
  [`${P}staplex-personal-air-samplers.webp`]: 'STAPLEX personal air sampler pump with tubing and charger',
  [`${P}staplex-pm10-sampling-systems.webp`]: 'STAPLEX PM10 / PM2.5 high-volume sampling head',
  // Photos
  [`${F}nuclear-power-plant-cooling-towers-at-night.webp`]: 'Nuclear power plant cooling towers at night',
  [`${F}nuclear-power-station-cooling-towers.webp`]: 'Nuclear power station cooling towers',
  [`${F}atomic-energy-research-facility-instrumentation.webp`]: 'Research facility instrumentation for atomic energy',
  [`${F}nuclear-medicine-ct-scanner-hospital.webp`]: 'CT scanner in a hospital nuclear medicine department',
  [`${F}industrial-radiography-ndt-pipeline-welding.webp`]: 'Pipeline welding for industrial radiography and NDT inspection',
  [`${F}environmental-radiation-monitoring-station.webp`]: 'Environmental radiation monitoring station in open country',
  [`${F}port-container-terminal-radiation-security.webp`]: 'Container terminal where radiation portal monitoring is used for security',
  [`${F}radiation-laboratory-scientist.webp`]: 'Scientist working in a radiation laboratory',
  [`${F}tender-specification-engineering-drawings.webp`]: 'Engineer reviewing technical drawings for a tender specification',
};
export const altFor = (src?: string) => (src && alt[src]) || '';

export const photos = {
  banner: `${F}nuclear-power-plant-cooling-towers-at-night.webp`,
  tender: `${F}tender-specification-engineering-drawings.webp`,
  about: `${F}atomic-energy-research-facility-instrumentation.webp`,
  industriesBanner: `${F}nuclear-power-station-cooling-towers.webp`,
};

export const industryPhoto: Record<string, string> = {
  'nuclear-power': `${F}nuclear-power-station-cooling-towers.webp`,
  'atomic-energy-research': `${F}atomic-energy-research-facility-instrumentation.webp`,
  'healthcare-nuclear-medicine': `${F}nuclear-medicine-ct-scanner-hospital.webp`,
  'industrial-radiography-ndt': `${F}industrial-radiography-ndt-pipeline-welding.webp`,
  'environmental-monitoring': `${F}environmental-radiation-monitoring-station.webp`,
  'defence-security': `${F}port-container-terminal-radiation-security.webp`,
  laboratories: `${F}radiation-laboratory-scientist.webp`,
};

export const categoryPhoto: Record<string, string | undefined> = {
  'radiation-detectors': `${P}atomtex-bdkg-spectrometric-gamma-detection-units.webp`,
  'radiation-survey-meters': `${P}atomtex-at1117m-multipurpose-radiation-monitor-kit.webp`,
  'radiation-monitoring-systems': `${P}atomtex-area-radiation-monitors-x-ray-gamma.webp`,
  'air-sampling-equipment': `${P}staplex-high-volume-air-samplers.webp`,
  'personal-dosimeters': `${P}atomtex-at2503b-electronic-personal-dosimeter.webp`,
  'contamination-monitors': `${P}atomtex-at1117m-alpha-beta-contamination-monitor.webp`,
  'detector-components': `${P}atomtex-bdkg-05s-scintillation-gamma-detection-unit.webp`,
  'gm-tubes': `${P}lnd-7311-pancake-geiger-mueller-tube.webp`,
};

export const applicationPhoto: Record<string, string | undefined> = {
  'gamma-detection': `${P}atomtex-at6130-handheld-x-ray-gamma-dosimeter-radiometer.webp`,
  'alpha-beta-detection': `${P}atomtex-at2522-alpha-beta-surface-contamination-monitor.webp`,
  'neutron-detection': `${P}atomtex-bdkn-neutron-radiation-detection-unit.webp`,
  'dose-measurement': `${P}atomtex-at1125a-x-ray-gamma-dose-rate-meter.webp`,
  'personnel-monitoring': `${P}atomtex-at2503b-electronic-personal-dosimeter.webp`,
  'air-sampling': `${P}staplex-high-volume-air-samplers.webp`,
  'contamination-monitoring': `${P}atomtex-at1117m-bdps-02-alpha-beta-contamination-probe.webp`,
  'environmental-monitoring': `${P}atomtex-at1315-gamma-beta-spectrometer-environmental-samples.webp`,
};
