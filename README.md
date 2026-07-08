# FieldSoftwareGuide

Independent field service management (FSM) software comparison by industry and
business size. Next.js 15 + Tailwind 4 + MDX, cloned and adapted from the
globalemployguide (EOR) codebase.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Architecture (what changed vs the EOR codebase)
- `lib/industries.ts` — the Industry data model (was lib/countries.ts). One typed
  object per industry drives the page, sitemap, schema, comparison table.
- `content/industries/*.ts` — one file per industry. HVAC is verified + sourced;
  the six Wave-1 industries are drafts (`dataVerified: false`, noindex) until researched.
- `lib/providers.ts` — the FSM software registry (Jobber, Housecall Pro, ServiceTitan,
  Workiz, FieldPulse, Commusoft) with vendor-published pricing + affiliate/partner URLs.
- `app/[locale]/by-industry/[industry]/page.tsx` — the programmatic industry page
  (was countries/[country]). GEO-first: answer block, structured data card, comparison
  table, features, pricing, FAQ + FAQPage schema.
- Legal/trust pages: /about, /privacy, /contact, /terms, /how-we-review, /author/usama-latif.
- Design retheme: charcoal + safety-orange (see app/globals.css).

## Data-confidence policy
Every price comes from the vendor's own pricing page with a `checked` date. Tools
with no public price are `monthlyFromUsd: null` ("Custom") — never guessed. Only
industries with `dataVerified: true` are indexed and in the sitemap.

## Before launch (TODO)
- Set `adsenseClient` and `gaMeasurementId` in `lib/site.ts` once approved.
- Replace affiliate/partner URLs in `lib/providers.ts` with your tracked links.
- Research + verify the 6 draft industries, then flip `dataVerified: true`.
- Add `public/logos/<slug>.svg` for each tool (mono-letter tiles show until then).
- Point the domain and deploy to Vercel.
