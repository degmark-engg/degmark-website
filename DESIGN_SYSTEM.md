# DEGMARK Website: Design System & Page Templates

Use this file with `PROJECT_BRIEF.md`. It defines the look of every page.
The approved reference is `design-reference/category-page.html`. Open it in a browser
to see the style; match its colours, spacing, cards and buttons on every page.

---

## 1. Design principles

- **Technical and trustworthy.** The audience is engineers and scientists. Clarity beats decoration.
- **International.** Nothing should read as local or India-only.
- **Scannable.** Card grids, short paragraphs, clear headings, specs in tables.
- **Two actions everywhere.** "Request a quote" and "Upload requirement" are always one click away.
- **No clutter.** No gradients, no stock-photo banners, no carousels, no emoji, no pop-ups.
- **No invented content.** Unknown facts stay as `[PLACEHOLDER]`.

---

## 2. Colours

| Token | Hex | Use |
| --- | --- | --- |
| `navy` | `#0F2A3D` | Utility bar, footer, dark panels, headings, brand badges |
| `teal` | `#0B6670` | Links, primary buttons, active nav, icons |
| `teal-dark` | `#084E56` | Link and button hover |
| `teal-tint` | `#E6F0F1` | Chips / tag background |
| `teal-tint-text` | `#0B4F56` | Chip text |
| `amber` | `#F2B33D` | Small highlights and buttons **on navy only**. Never amber text on white |
| `page` | `#F4F6F7` | Page background |
| `surface` | `#FFFFFF` | Cards, header, hero band |
| `surface-muted` | `#EEF2F4` | Image placeholders, table header rows |
| `border` | `#DDE3E7` | Card and section borders |
| `border-input` | `#C6D0D7` | Form field borders |
| `ink` | `#14202B` | Body text |
| `ink-soft` | `#3A4752` | Lead paragraphs |
| `muted` | `#55626E` | Secondary text, labels, breadcrumbs |
| `on-navy` | `#D7E1E8` | Body text on navy |
| `on-navy-muted` | `#C3D0DA` | Small text on navy |

All text/background pairs above meet WCAG AA contrast (4.5:1).

### Tailwind config

```js
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2A3D',
        teal: { DEFAULT: '#0B6670', dark: '#084E56', tint: '#E6F0F1', 'tint-text': '#0B4F56' },
        amber: '#F2B33D',
        page: '#F4F6F7',
        surface: { DEFAULT: '#FFFFFF', muted: '#EEF2F4' },
        line: { DEFAULT: '#DDE3E7', input: '#C6D0D7' },
        ink: { DEFAULT: '#14202B', soft: '#3A4752' },
        muted: '#55626E',
        'on-navy': { DEFAULT: '#D7E1E8', muted: '#C3D0DA' },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { container: '1200px' },
      borderRadius: { card: '10px', btn: '6px' },
    },
  },
};
```

---

## 3. Typography

**Fonts:** IBM Plex Sans (400, 500, 600, 700) for all text. IBM Plex Mono (500, 600) for
model numbers only. Self-host via `@fontsource/ibm-plex-sans` and `@fontsource/ibm-plex-mono`.

| Style | Size / line-height | Weight | Colour |
| --- | --- | --- | --- |
| H1 (page title) | 40px / 1.15 (mobile 30px) | 700 | navy |
| H2 (section) | 24px / 1.25 (mobile 22px) | 700 | navy |
| H3 (card / sub-section) | 18–20px / 1.3 | 600 | ink or navy |
| Lead paragraph | 18px / 1.55 | 400 | ink-soft, max 640px wide |
| Body | 15–16px / 1.55 | 400 | ink |
| Small / meta | 13–14px / 1.5 | 400 | muted |
| Eyebrow label | 13px, uppercase, letter-spacing 0.08em | 600 | amber on navy, teal on white |
| Model number | 18px mono | 600 | navy |
| Nav links | 15px | 500 | ink; active = teal with 2px teal underline |

---

## 4. Layout and spacing

- **Container:** max-width 1200px, centred, side padding 24px (16px on phones).
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px.
- **Section padding:** 40px top/bottom (48px for the last section before footer).
- **Grids:** `repeat(auto-fill, minmax(260px, 1fr))` with 16px gap for card grids.
- **Two-column (filters + list):** sidebar `flex: 1 1 220px`, content `flex: 999 1 560px`; stacks on phones.
- **Radius:** cards and panels 10px, buttons and inputs 6px, chips fully rounded.
- **Borders:** 1px `border`. No shadows except a subtle hover shadow on cards (optional).
- **Breakpoints:** phone < 640px, tablet 640–1024px, desktop > 1024px.

---

## 5. Components

Build each as an Astro component in `src/components/`.

| Component | Spec |
| --- | --- |
| `UtilityBar` | Navy bar, 13px on-navy text. Left: tagline. Right: phone · email |
| `Header` | White, bottom border. Logo (text wordmark "DEGMARK" 22px/700, letter-spacing 0.06em, plus line icon) · main nav · "Request a Quote" primary button. On phones: hamburger menu |
| `Breadcrumb` | 14px muted, `/` separators, current page in ink. On every page except Home |
| `PageHero` | White band with bottom border. Breadcrumb, H1, lead paragraph, optional chips. Optional right-side navy panel (eyebrow + one line + amber button) |
| `Button` primary | Teal background, white text, 600, 12px 20px padding, 6px radius. Hover teal-dark |
| `Button` secondary | White background, 1px teal border, teal text |
| `Button` accent | Amber background, ink text. Use only on navy panels |
| `Chip` | teal-tint background, teal-tint-text, 13px/600, padding 6px 12px, pill |
| `LinkCard` | White card, border, 20px padding. Line icon (40px, teal stroke 2px) · title 18px/600 · description 14px muted · "View range →" 14px/600 teal |
| `SeriesCard` | White card. Image area 120px tall (surface-muted placeholder). Brand badge (navy, white 12px) + "N models" label (muted). Series name 16px/600. One-line description 14px muted. Radiation-type chips. Link "View models →" (teal, 600) |
| `ModelTable` | Full-width white table in a bordered card. Header row surface-muted, 13px/600 muted uppercase. Columns: Model (mono, 600, navy, with `id` anchor) · 3–6 key spec columns · Datasheet (icon link) · Request quote (small teal link). Row lines in `border`; highlight row on hover and when targeted by URL anchor (`:target` → teal-tint background). On phones the table scrolls sideways inside its card; Model column stays sticky on the left |
| `OnRequestNote` | Teal-tint box under a ModelTable or product grid: "Other models in this series are available on request." + "Request a model" link |
| `BrandBadge` | Navy pill, 12px/600 white text. "Other" brands use muted grey |
| `FilterSidebar` | White card. Fieldsets with uppercase 13px muted legends, checkbox labels 15px |
| `SpecTable` | Two columns, label muted / value ink, row lines in `border`, header row surface-muted |
| `CTAPanel` light | White card, H2 20px, paragraph, primary button |
| `CTAPanel` dark | Navy card, white H2, on-navy paragraph, amber button |
| `EnquiryStrip` | Light CTAPanel ("Request a quote") + dark CTAPanel ("Upload requirement") side by side; stacks on phones. Appears above the footer on most pages |
| `DownloadRow` | File icon · document title · brand · file type and size · Download link |
| `ArticleCard` | White card: category label, title 18px/600, 2-line summary, "Read →" |
| `FAQItem` | Native `<details>`/`<summary>`; question 16px/600; answer body text |
| `FormField` | Label above (14px/600), input 16px, 12px 14px padding, 1px border-input, 6px radius; focus ring teal |
| `Footer` | Navy. Company name (white, 700, letter-spacing), footer links, address · phone · email, Privacy · Terms, copyright |
| Icons | Simple inline SVG line icons, 2px teal stroke, `aria-hidden="true"`. No icon fonts, no emoji |

---

## 6. Page templates

Every page uses: UtilityBar → Header → (page content) → Footer.
"Enquiry strip" = the `EnquiryStrip` component.

### Home `/`
1. Hero: H1 stating what DEGMARK supplies, lead paragraph, two buttons (Explore products, Request a quote). Right: navy panel with "Upload requirement".
2. Product categories: 7 LinkCards.
3. Brands: logo strip linking to brand pages.
4. Applications: 8 compact LinkCards.
5. Industries: 7 compact LinkCards.
6. Short "Why DEGMARK" block: 3–4 factual points (no invented numbers).
7. Latest technical articles: 3 ArticleCards.
8. Enquiry strip.

### Products overview `/products/`
PageHero → 7 category LinkCards (with sub-type list under each) → Enquiry strip.

### Category page `/products/{category}/`
Follow `design-reference/category-page.html` for layout and style, with one change: the grid shows
**SeriesCards**, not individual model cards.
PageHero (chips for radiation types, navy "Upload requirement" panel) → sub-type tiles (act as filters) →
FilterSidebar + SeriesCard grid with count → OnRequestNote ("Looking for a model not listed?") →
Enquiry strip → related technical articles.

### Series page `/products/{category}/{series}/`
1. Breadcrumb (Home / Products / Category / Series).
2. Two columns: left product image; right brand badge, series name (H1), short description,
   radiation-type chips, typical applications (chips linking to application pages), buttons:
   "Request a quote" (primary) and "Download catalogue" (secondary, if available).
3. **ModelTable** with the key models and their key specs. Each row links to its datasheet and to
   `/request-a-quote/?model=...`.
4. OnRequestNote: "Other models in this series are available on request."
5. Related series: 3 SeriesCards from the same sub-type or brand.
6. Enquiry strip.

There are no individual model pages.

### Brands index `/brands/`
PageHero → grid of brand cards (logo, name, country, one-line description, "View products →") → Enquiry strip.

### Brand page `/brands/{brand}/`
PageHero with brand logo → about the manufacturer (2–3 short paragraphs) → DEGMARK's relationship → product categories from this brand (LinkCards) → SeriesCard grid filtered to the brand → datasheets/catalogues for the brand (DownloadRows) → Enquiry strip.

### Applications index `/applications/`
PageHero → 8 LinkCards, each answering "what do you need to measure?" → Enquiry strip.

### Application page `/applications/{application}/`
PageHero → what this measurement involves (short, factual) → recommended product types (LinkCards to categories with filters applied) → featured series (SeriesCards) → related technical articles → Enquiry strip.

### Industries index `/industries/`
PageHero → 7 LinkCards → Enquiry strip.

### Industry page `/industries/{industry}/`
PageHero → typical radiation-safety needs in this sector → instruments typically used (LinkCards to categories) → relevant applications (chips) → Enquiry strip. No customer names unless approved.

### Resources hub `/resources/`
PageHero → 5 LinkCards (Catalogues, Datasheets, Manuals, Technical articles, FAQs) → latest articles.

### Catalogues / Datasheets / Manuals
PageHero → filter bar (brand, category, search) → list of DownloadRows → note for manuals: "Not listed? Request it" → Enquiry strip.

### Technical articles `/resources/technical-articles/`
PageHero → ArticleCard grid (filter by topic). Article page: narrow column (max 720px), H1, date, body with H2s, inline diagrams/tables, related series at the end.

### FAQs `/resources/faqs/`
PageHero → grouped FAQItems (Ordering, Delivery, Documentation, Technical) → "Still have a question?" CTAPanel.

### About `/about/`
PageHero → company story → principals (brand logo strip) → what DEGMARK does (3–4 points) → quality → Enquiry strip.

### Contact `/contact/`
PageHero → two columns: contact details (address, phone, email, hours) and a short contact form → map embed (optional).

### Request a quote `/request-a-quote/`
PageHero (short) → two columns: form (left, wider) and "What happens next" steps + direct contact (right). Pre-fill model from `?model=` URL parameter (set by the Request quote links in ModelTables).

### Upload requirement `/upload-requirement/`
Same layout as Request a quote. Form includes file upload (PDF, XLSX, DOCX, JPG, PNG, up to ~10 MB) and a short note on accepted documents (tender, specification, indent).

### Thank you `/thank-you/`
Centred card: confirmation message, expected response time `[PLACEHOLDER]`, links back to Products and Home.

### 404
Centred card: "Page not found", search box, links to Products, Brands, Contact.

### Privacy policy, Terms
Narrow text column (max 720px), H1, H2 sections, body text.

---

## 7. Content and imagery

- **Product images:** clean product shots on white or light grey. No lifestyle stock photos.
- **Placeholders:** grey `surface-muted` box with "[Product photo]" until real images arrive.
- **Brand logos:** use only official logo files supplied by principals.
- **Copy:** short sentences, technical terms used correctly, British/International English spelling
  (e.g. "ionisation", "catalogue").
- **SEO:** each page has a unique title (`{Page} – DEGMARK`) and meta description; series pages
  include the brand and series in title, H1 and URL, and list model numbers in the page text so they are searchable.

---

## 8. Accessibility checklist

- Real `<a>` and `<button>` elements; never clickable `<div>`s.
- Every form field has a visible `<label>`.
- Icon-only buttons have `aria-label`; decorative SVGs have `aria-hidden="true"`.
- Visible focus states (teal outline).
- Touch targets at least 44px tall.
- Text contrast at least 4.5:1 (all colour pairs in section 2 pass).
