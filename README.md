# DEGMARK Engineering website

Source for www.degmarkeng.com, built with Astro + Tailwind CSS, Pagefind search and a small PHP form handler.

**Read first:** `PROJECT_BRIEF.md` (scope and sitemap), `DESIGN_SYSTEM.md` (look and components),
`PRODUCT_DATA.md` (how product series and models are added).

## Where things live
| What | File |
| --- | --- |
| Company details, menus | `src/data/site.ts` |
| Product categories and sub-types | `src/data/categories.ts` |
| Brands | `src/data/brands.ts` |
| Applications / Industries | `src/data/applications.ts`, `src/data/industries.ts` |
| Downloads, articles, FAQs | `src/data/resources.ts` |
| Product series and models | `src/data/series/*.json` (only `"status": "approved"` is published) |
| Datasheets / product images | `public/datasheets/`, `public/images/products/` |
| Design tokens | `tailwind.config.mjs`, `src/styles/global.css` |
| Components / pages | `src/components/`, `src/pages/` |
| Enquiry form handler | `public/forms/send.php` (+ server config, below) |

Placeholders to fill are marked `[PLACEHOLDER: ...]`; unconfirmed specs are `[to confirm]`.

## Commands
    npm install
    npm run dev            # local dev server
    npm run build          # live build (approved series only) + search index
    npm run build:preview  # also includes draft/review series, for checking

## Deployment (Hostinger)
Every push to `main` runs `.github/workflows/deploy.yml`: build, then upload `dist/` to `public_html/` by FTP.
One-time setup in GitHub → Settings → Secrets and variables → Actions: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

## Forms (one-time server setup)
Copy `server/degmark-config.example.php` to the Hostinger account **one level above `public_html`** as
`degmark-config.php` and set the enquiry address. Enquiries are emailed and also logged (with uploaded
files) in `degmark-enquiries/` next to it, outside the public web folder.
