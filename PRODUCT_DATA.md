# DEGMARK Website: Product Data Guide

How product models are chosen, stored and shown on the website.
Read together with `PROJECT_BRIEF.md` and `DESIGN_SYSTEM.md`.

---

## 1. The approach in one paragraph

The site shows **key models only**, grouped into **series pages**. A series is one product family
from one brand (for example, "LND end-window GM tubes" or "ATOMTEX neutron survey meters").
Each series page has a table of its key models with 3–6 key specs and a datasheet link.
Every series page and category page says **"Other models available on request."**
There are no individual model pages, and the site must never reproduce a manufacturer's full catalogue.

---

## 2. Structure

```
Category (7 fixed)            /products/radiation-detectors/
 └─ Series (one per family)   /products/radiation-detectors/lnd-end-window-gm-tubes/
     └─ Models (table rows)   .../lnd-end-window-gm-tubes/#lnd-7xxx   (anchor, not a page)
```

- A series belongs to **one brand** and **one category**, and has **one sub-type**
  (e.g. GM tubes). Sub-types are filters on the category page.
- Typical size: 2–6 series per brand per category, 3–10 key models per series.
- Brand pages list that brand's series. Application pages link to relevant series.

---

## 3. Data format

One JSON file per series in `src/data/series/`, named `{brand}-{series-slug}.json`.

```json
{
  "slug": "lnd-end-window-gm-tubes",
  "status": "approved",
  "brand": "LND",
  "category": "radiation-detectors",
  "subtype": "GM tubes",
  "name": "LND End-Window GM Tubes",
  "summary": "One or two sentences in our own words describing the series and what it is used for.",
  "radiationTypes": ["Alpha", "Beta", "Gamma"],
  "applications": ["alpha-beta-detection", "contamination-monitoring"],
  "image": "/images/products/lnd-712-end-window-geiger-mueller-tube.webp",
  "catalogue": "/datasheets/lnd-gm-tube-catalogue.pdf",
  "specColumns": ["Window density", "Effective diameter", "Operating voltage", "Connector"],
  "models": [
    {
      "model": "[MODEL NUMBER]",
      "anchor": "lnd-model-number",
      "specs": {
        "Window density": "[value + unit]",
        "Effective diameter": "[value + unit]",
        "Operating voltage": "[value + unit]",
        "Connector": "[type]"
      },
      "datasheet": "/datasheets/lnd-model-number.pdf",
      "note": "",
      "verified": true
    }
  ],
  "moreOnRequest": true,
  "sources": ["Owner-supplied datasheet", "Manufacturer website page URL"],
  "internalNotes": "Never published."
}
```

### Field rules

| Field | Rule |
| --- | --- |
| `status` | `draft` (research, not reviewed), `review` (sent to owner), `approved` (live). **Only `approved` series are built into the site.** |
| `category` | One of: `radiation-detectors`, `radiation-survey-meters`, `radiation-monitoring-systems`, `air-sampling-equipment`, `personal-dosimeters`, `contamination-monitors`, `detector-components` |
| `subtype` | One of the sub-types listed for that category in `PROJECT_BRIEF.md` |
| `summary` | Written in our own words. Never copied from the manufacturer's website or datasheet |
| `specColumns` | 3–6 columns, the same for every model in the series, chosen so models can be compared |
| `specs` values | Facts with units. Unknown → `"[to confirm]"`. Never guessed |
| `verified` | `true` only when checked against a datasheet or confirmed by the owner |
| `applications` | Slugs from the Applications section of the sitemap |
| `sources` | Where the data came from (for internal review; not published) |
| `internalNotes` | Never published |

---

## 4. Workflow

### Step 1: Research a starting list (Claude)
For one brand at a time, research the manufacturer's public website and propose:
- the series that fit DEGMARK's seven categories,
- the key models in each series (the most common, current models, not the full range),
- the key spec columns for each series.

Output: draft JSON files (`"status": "draft"`) **and** a review table for the owner
(brand · category · series · model · key specs · source link).

### Step 2: Owner review
The owner marks each model: **keep / remove / add**, and adds models DEGMARK actually supplies
that the research missed. Discontinued or unsuitable models are removed.

### Step 3: Fill and verify from the owner's documents
The owner sends datasheets, catalogues or price lists. Claude fills and corrects the specs from them,
sets `"verified": true` on checked models, and adds the datasheet PDFs to `public/datasheets/`.

### Step 4: Approve and publish
After the owner's final OK, set `"status": "approved"`. The next build publishes the series page.

### Adding models later
Send the model number(s) and datasheet(s). Claude adds them to the right series file
(or creates a new series), marks them for review, and publishes after approval.

---

## 5. Ready-to-use prompts

**Research one brand (Step 1)**
> Read PRODUCT_DATA.md. Research [BRAND]'s current product range from its official website.
> Propose series and key models for each DEGMARK category that fits, with 3–6 key spec columns
> per series. Keep it to key models, not the full catalogue. Write summaries in our own words.
> Create draft JSON files in src/data/series/ and give me a review table with source links.

**Apply my review (Step 2)**
> Here is my review of [BRAND]: keep / remove / add as marked. Update the draft series files
> and show me the final list.

**Fill from datasheets (Step 3)**
> Here are the datasheets for [BRAND / SERIES]. Fill and verify the key specs in the series
> files, add the PDFs to public/datasheets/, and flag anything you could not confirm.

**Publish (Step 4)**
> [BRAND / SERIES] is approved. Set status to approved and publish.

**Add new models**
> Add these models: [MODEL NUMBERS], datasheets attached. Put them in the right series,
> mark them for my review, and tell me what you changed.

---

## 6. Content rules

- **Key models only.** No full catalogues. Every listing ends with "Other models available on request."
- **Own words.** Summaries and descriptions are original. Specs are stated as facts with units.
- **No guessing.** Unconfirmed values show `[to confirm]` and are never published until resolved.
- **Datasheets.** Publish manufacturer datasheets only where the principal allows it;
  otherwise show "Datasheet on request".
- **Images.** Use images supplied by the principal or the owner, with permission.
- **Image names (SEO).** Save as WebP in `public/images/products/`, named `brand-model-product-type.webp` in lowercase with hyphens (e.g. `lnd-7311-pancake-geiger-mueller-tube.webp`). Add the file's alt text to `src/data/images.ts`: brand, model and what the product is, in plain words.
- **Model numbers exactly as the manufacturer writes them** (spacing, hyphens and letters).

---

## 7. Suggested research order

1. LND (radiation detectors)
2. ATOMTEX (survey meters, dosimeters, contamination monitors)
3. STAPLEX (air sampling equipment)
4. Arrow-Tech (personal dosimeters)
5. Gamma-Scout (survey meters / personal instruments)
6. Other manufacturers (as needed)
