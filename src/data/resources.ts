// Downloads, articles and FAQs. Add entries here as documents are approved for publishing.
export type Download = {
  title: string;
  brand: string;
  category?: string;
  type: 'catalogue' | 'datasheet' | 'manual';
  file?: string; // path under /public; omit for "available on request"
  format: string; // e.g. 'PDF'
  size?: string; // e.g. '1.2 MB'
};

export const downloads: Download[] = [];

export type Article = {
  slug: string;
  title: string;
  topic: string;
  date: string;
  summary: string;
};

// Articles will live in src/pages/resources/technical-articles/ once written.
export const articles: Article[] = [];

export const faqs: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: 'Ordering',
    items: [
      { q: 'How do I request a quotation?', a: 'Use the Request a Quote form with the model numbers and quantities, or upload your tender, specification or indent and we will reply with a quotation.' },
      { q: 'Can you supply models that are not listed on the website?', a: 'Yes. The website lists key models only. Other models from our principals, and from other manufacturers, are available on request.' },
      { q: 'Do you respond to tenders?', a: 'Yes. Upload the tender document with any technical specification and we will review it and respond.' },
    ],
  },
  {
    group: 'Delivery',
    items: [
      { q: 'What are typical delivery times?', a: '[PLACEHOLDER: typical lead times]' },
      { q: 'Do you handle import and customs?', a: '[PLACEHOLDER: import / customs handling]' },
    ],
  },
  {
    group: 'Documentation',
    items: [
      { q: 'Can you provide datasheets and manuals?', a: 'Datasheets are available on the product pages where the manufacturer permits. Manuals and other documents are available on request.' },
      { q: 'Are calibration and conformity certificates supplied?', a: '[PLACEHOLDER: certificates supplied]' },
    ],
  },
  {
    group: 'Technical',
    items: [
      { q: 'Can you help choose the right instrument?', a: 'Yes. Tell us what you need to measure, the radiation type, the expected range and where it will be used, and we will suggest suitable models.' },
      { q: 'Can you supply a replacement detector for an existing instrument?', a: 'Yes. Send us the instrument make and model, or the detector type and part number, and we will identify a suitable detector.' },
    ],
  },
];
