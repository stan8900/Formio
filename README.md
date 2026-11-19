# Formio — The Architecture of Samarkand

An editorial Next.js portfolio project about three Samarkand landmarks. It starts from typed local seed content, so it runs without a CMS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production validation is `npm run build`.

## Content and Sanity

The local fallback lives in `lib/content.ts`; it is the single map for image filenames, captions, alt text, photographer, source and licence. The optional Sanity landmark schema is in `sanity/schemaTypes/landmark.ts` and supports editable covers, captions, story text and the “What to look for” list.

To read published landmark records from Sanity, create `.env.local` with:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Then use `sanity.config.ts` in a Sanity Studio workspace (add `defineConfig()` and `structureTool()` there) to manage the content model. The front end reads the public Sanity Content API directly and falls back to seed content without failing. `sanity.config.ts` carries the schema for editable covers, captions and story fields without adding Studio’s large build-time dependency to the site.

## Image register

All supplied originals are preserved in `Formio - Images/`. Display copies live in `public/images/`, retaining their original portrait dimensions (no upscaling). `Samarkand.jpeg` is the home cover; `Registan Square in Samarkand Uzbekistan Travel Guide.jpeg` and `Samarkand, Uzbekistan.jpeg` form the Registan gallery. `Golden Muqarnas of Samarkand.jpeg` and `_ (1).jpeg` are explicitly labelled provisional for Gur-e-Amir and Bibi-Khanym. The Dreamslight file is mood-only; `_.jpeg` is reserved for Khiva and is not published.

The supplied files have no embedded attribution metadata. The published image register on `/about` records each source filename, neutral caption, alt text and a “Rights to be confirmed” licence state. Replace provisional or unlicensed imagery before commercial publication.

## Research

Copy is original and grounded in UNESCO’s [Samarkand listing](https://whc.unesco.org/en/list/603/) and [Urban Heritage Atlas](https://whc.unesco.org/en/urban-heritage-atlas/samarkand/). Formio is independent and is not an official UNESCO or travel service.
-
