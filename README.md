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
- `content/industries/*.ts` — one file per industry. All 7 are verified + sourced
  (researched 2026-07-08): vendor pricing from each vendor's own pricing page, and
  vertical-fit / offline / GPS / asset-tracking claims checked against vendor docs.
- `lib/providers.ts` — the FSM software registry (Jobber, Housecall Pro, ServiceTitan,
  Workiz, FieldPulse, Commusoft) with vendor-published pricing + affiliate/partner URLs.
- `app/[locale]/by-industry/[industry]/page.tsx` — the programmatic industry page
  (was countries/[country]). GEO-first: answer block, structured data card, comparison
  table, features, pricing, FAQ + FAQPage schema.
- Legal/trust pages: /about, /privacy, /contact, /terms, /how-we-review, /author/usama-latif.
- Design retheme: charcoal + safety-orange (see app/globals.css).

## Data-confidence policy
Every price comes from the vendor's own pricing page with a `checked` date, and is
the ANNUAL-BILLING rate (the "from $X/mo" basis vendors advertise) — month-to-month
rates are stated alongside (Jobber $49, Housecall Pro $79). Tools with no public
price are `monthlyFromUsd: null` ("Custom") — never guessed. Only industries with
`dataVerified: true` are indexed and in the sitemap. Vertical claims are honest:
where no vendor markets an industry (oil & gas, telecom, transportation, healthcare,
equipment rental), the page says so and frames picks as capability-based.

## Before launch (TODO)
- Set `adsenseClient` and `gaMeasurementId` in `lib/site.ts` once approved.
- Replace affiliate/partner URLs in `lib/providers.ts` with your tracked links.
- Add `public/logos/<slug>.svg` for each tool (mono-letter tiles show until then).
- Point the domain and deploy to Vercel.
