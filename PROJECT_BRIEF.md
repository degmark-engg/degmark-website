# DEGMARK Website: Project Brief

This file is the reference for building and maintaining the DEGMARK Engineering Co. website.
Read it fully before making changes. Keep it up to date when decisions change.

---

## 1. About the company

DEGMARK Engineering Co. is an India-based supplier of radiation detection, monitoring and
measurement equipment. It represents international manufacturers and supplies nuclear power
plants, atomic energy and research establishments, hospitals, NDT firms, laboratories,
environmental monitoring and defence organisations.

**Current principals:** LND (USA), ATOMTEX (Belarus), STAPLEX (USA), Gamma-Scout, Arrow-Tech (USA),
plus other international manufacturers.

**Typical visitors:** Radiation Protection Officers, Health Physics departments, Radiation Safety
Officers, instrumentation engineers, scientific officers, purchase departments and technical
evaluation committees.

**Tone:** technical, precise, international. The site should not read as a local or India-only
business. No marketing fluff, no invented statistics, no customer names unless approved.

---

## 2. Tech stack

| Component | Choice | Notes |
| --- | --- | --- |
| Framework | Astro (static output) | Clean starter, no third-party theme |
| Styling | Tailwind CSS | |
| Product data | JSON files in `src/data/series/` | One file per product series with its key models; see `PRODUCT_DATA.md` |
| Search | Pagefind | Built at deploy time; supports model-number search |
| Forms | Small PHP script on the hosting server | Sends enquiry by email only (no CRM). Keeps a server-side log as backup |
| Code storage | GitHub (private repo, `degmark-website`) | |
| Hosting | Hostinger (owner's existing account) | |
| Deployment | GitHub Actions: build Astro, upload `dist/` to Hostinger via FTP/SFTP | Credentials stored as GitHub Secrets, never in code |

**Not in scope:** Cloudflare, Zoho or any CRM, WordPress, online payments or cart, customer logins.

---

## 3. Sitemap

Use these URLs exactly. All URLs end with a trailing slash.

### Home
- `/`

### Products
- `/products/`
- `/products/radiation-detectors/`
- `/products/radiation-survey-meters/`
- `/products/radiation-monitoring-systems/`
- `/products/air-sampling-equipment/`
- `/products/personal-dosimeters/`
- `/products/contamination-monitors/`
- `/products/detector-components/`
- `/products/{category}/{series}/`: one page per **product series** (e.g. `/products/radiation-detectors/lnd-end-window-gm-tubes/`),
  auto-generated from product data. Each series page lists its key models in a table.
  There are **no separate pages per model**. Each model has an anchor on its series page
  (e.g. `.../lnd-end-window-gm-tubes/#lnd-7311`) so it can be linked, searched and quoted.

Sub-types within each category are **filters on the category page**, not separate URLs:

| Category | Sub-types (filters) |
| --- | --- |
| radiation-detectors | GM tubes, Proportional counters, Neutron detectors, Scintillation detectors, Ionisation chambers, Probes & assemblies |
| radiation-survey-meters | Gamma dose-rate meters, Neutron survey meters, Multipurpose instruments, Spectrometers, Personal Geiger counters |
| radiation-monitoring-systems | Area monitors, Fixed and continuous systems, Environmental monitors |
| air-sampling-equipment | High-volume samplers, Particulate and aerosol samplers, Sampling heads and filter holders, Accessories |
| personal-dosimeters | Electronic, Direct-reading, Pocket, Digital, Gamma dosimeters |
| contamination-monitors | Surface, Alpha/beta, Personnel contamination monitors |
| detector-components | High-voltage power supplies, Detector electronics, Accessories, Replacement components |

### Brands
- `/brands/`
- `/brands/lnd/`
- `/brands/atomtex/`
- `/brands/staplex/`
- `/brands/gamma-scout/`
- `/brands/arrow-tech/`
- `/brands/other-manufacturers/`

### Applications (by measurement task)
- `/applications/`
- `/applications/gamma-detection/`
- `/applications/alpha-beta-detection/`
- `/applications/neutron-detection/`
- `/applications/dose-measurement/`
- `/applications/personnel-monitoring/`
- `/applications/air-sampling/`
- `/applications/contamination-monitoring/`
- `/applications/environmental-monitoring/`

### Industries (by sector)
- `/industries/`
- `/industries/nuclear-power/`
- `/industries/atomic-energy-research/`
- `/industries/healthcare-nuclear-medicine/`
- `/industries/industrial-radiography-ndt/`
- `/industries/environmental-monitoring/`
- `/industries/defence-security/`
- `/industries/laboratories/`

### Resources
- `/resources/`
- `/resources/catalogues/`
- `/resources/datasheets/`
- `/resources/manuals/`
- `/resources/technical-articles/`
- `/resources/faqs/`

### Company and enquiries
- `/about/`
- `/contact/`
- `/request-a-quote/`: RFQ form; pre-fills the model when opened from a model table row
- `/upload-requirement/`: upload a tender, specification or indent (PDF, Excel, image)

### Standard pages (outside the main menu)
- `/privacy-policy/`, `/terms/`, `/thank-you/`, `404`, `sitemap.xml`, `robots.txt`

**Main menu:** Products · Brands · Applications · Industries · Resources · About · Contact · Request a Quote (button)

**Footer:** Products · Brands · Applications · Industries · Resources · About · Contact · Privacy · Terms

**Explicitly excluded:** spares/replacements section, cross-reference pages, procurement desk.

---

## 4. Page rules

- **Series page:** series name (brand + product family), brand, short description in our own words,
  radiation types, typical applications, product image, **model table** (model number, 3–6 key specs,
  datasheet link, "Request quote" link per row going to `/request-a-quote/?model=...`), and a
  line: "Other models in this series are available on request." Model numbers appear in the page
  title/meta description where practical, and every model number is searchable.
- **Category page:** intro, sub-type filters, filters by radiation type and brand, **series cards**
  (series name, brand, number of listed models, short description, "View models" link).
  Ends with "Looking for a model not listed? Request it" linking to the quote form.
- **Application vs industry pages:** application pages answer "what do I need to measure?";
  industry pages answer "what does my sector use?". Write them differently to avoid duplicate
  content. Both link to the relevant categories.
- **Brand pages:** short manufacturer profile, DEGMARK's relationship, product range linked
  into categories.
- **Manuals:** only publish where the manufacturer permits; otherwise "available on request".
- **Never invent specs.** Unknown values stay as `[placeholder]` and are flagged for review.

---

## 5. Product data workflow

Full details, data format and prompts are in **`PRODUCT_DATA.md`**. In short:

- **Scope:** key models only per brand and category, plus "other models on request". The site must
  not copy any manufacturer's full catalogue.
- **Source:** a starting list researched from manufacturers' public websites, then corrected and
  completed by the owner from datasheets, catalogues and price lists.
- **Detail:** 3–6 key specs per model, in our own words, plus the manufacturer datasheet as a download.
- **Approval:** nothing goes live until the owner has approved it (`"status": "approved"`).
- Data lives in `src/data/series/` (one JSON file per series). Datasheets go in `public/datasheets/`,
  images in `public/images/products/`. File names: brand-model in lowercase with hyphens,
  e.g. `lnd-7311.pdf`.

---

## 6. Design direction

Based on the approved category-page mockup:

- **Colours:** navy `#0F2A3D` (header bars, footer), teal `#0B6670` (links, primary buttons),
  amber `#F2B33D` (small highlights on navy only), page background `#F4F6F7`, cards white
  with `#DDE3E7` borders, body text `#14202B`, muted text `#55626E`.
- **Fonts:** IBM Plex Sans for text; IBM Plex Mono for model numbers.
- **Feel:** clean, technical, generous white space, card grids, no gradients, no stock-photo clutter.
- **Responsive:** must work on phones; menus collapse, grids stack.
- **Accessibility:** real buttons and links, labelled form fields, text contrast at least 4.5:1.

---

## 7. Forms

- Request a Quote fields: name, organisation, email, phone, model number(s), quantity,
  tender/indent reference (optional), message.
- Upload Requirement fields: name, organisation, email, phone, file upload (PDF, XLSX, DOCX,
  JPG, PNG; size limit about 10 MB), message.
- Both send an email to the DEGMARK enquiry address (stored as a server-side config value,
  not in the repo) and write a backup log entry on the server.
- Spam protection: honeypot field plus simple rate limiting.

---

## 8. Build order

1. Astro project setup, layout, header, footer, design tokens.
2. Home, product category pages, series page template with model table.
3. Brands, Applications, Industries pages.
4. Resources, About, Contact.
5. Forms (PHP) and thank-you page.
6. Pagefind search.
7. GitHub Actions deployment to Hostinger.
8. Load product data in batches (approved series only), starting with the main lines.
9. Launch on the chosen domain.

---

## 9. Open decisions

- Domain: shortlist is `degmarkeng.com` (preferred) or `degmarkglobal.com`, with
  `degmarkengineering.com` as a redirect.
- Hostinger plan type (shared or VPS) affects the deployment method.
- Logo files and brand logos from principals.
