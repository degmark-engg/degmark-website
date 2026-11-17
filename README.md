# Degmark Engineering website

Source for www.degmarkeng.com, built with [Astro](https://astro.build).

## Editing content
- **Contact details, brands, product categories:** `src/data/site.ts`
- **Page text:** `src/pages/*.astro`
- **Colours and fonts:** `src/styles/global.css`
- **Enquiry email address:** `public/contact.php` (`$to`)

## Publishing
Every change pushed to `main` is built and uploaded to Hostinger by
`.github/workflows/deploy.yml`. One-time setup: add `FTP_SERVER`,
`FTP_USERNAME` and `FTP_PASSWORD` under **Settings → Secrets and variables → Actions**.

## Running locally
    npm install
    npm run dev
