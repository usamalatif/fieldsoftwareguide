# SEO / GEO Changelog

Append one entry per change, every cycle. Format: date, file, change, reason, expected effect.

## Cycle: 2026-07-31 (branch apex/llms-txt-seo-fixes, PR only, not deployed)

| Date | File | Change | Reason | Expected effect |
|---|---|---|---|---|
| 2026-07-31 | lib/llms.ts (NEW), app/llms.txt/route.ts (NEW), public/llms.txt (REMOVED) | /llms.txt is now generated at build time from lib/providers.ts, lib/industries.ts, and content/free-data.ts instead of a hand-maintained static file | Hand-maintained duplicate copy is how pricing facts drift; the handoff brief's own draft mislabelled $49/$79 as "higher tiers" (they are month-to-month rates of the entry plans), proving the point | llms.txt pricing can never disagree with /compare; adds links to the two new pages (/quickbooks, /for-small-business) |
| 2026-07-31 | app/llms-full.txt/route.ts (NEW) | Added /llms-full.txt (was 404): inlines the pricing reference, full compare table content, free-plan/trial findings, and every industry page's answer plus ranked picks, generated from the same data modules | llms.txt convention: the -full companion carries inline content so AI engines get complete facts without rendering JS; direct GEO play, equipment-rental section included for the position-15 breakout page | AI answer engines can cite exact verified pricing and rankings |
| 2026-07-31 | content/free-data.ts (NEW), app/[locale]/free/page.tsx | Moved the /free page's plans/trials table data into a shared module imported by both the page and the llms generators | Single source of truth for the free-tier facts | /free and llms files cannot drift |
| 2026-07-31 | app/[locale]/author/usama-latif/page.tsx | Title "Usama Latif — Author & FSM Software Researcher" (71 with suffix, em dash) to "Usama Latif, Author and FSM Software Researcher" (69, no dash) | Full-site title/meta audit: only page over 70 chars; house style bans em dashes | No Bing title flag |
| 2026-07-31 | app/[locale]/how-we-review/page.tsx | Title em dash to colon ("How We Review FSM Software: Our Methodology") | House style | Compliant title |
| 2026-07-31 | app/[locale]/compare/jobber-vs-housecall-pro/page.tsx | Title + ArticleJsonLd headline em dash to colon ("Jobber vs Housecall Pro: Honest 2026 Comparison") | House style; headline kept in sync with title | Compliant title and schema headline |
| 2026-07-31 | (audit only, no change) | Full sweep of all 25 routes: titles 35-69 chars, metas 111-159 chars, no em/en dashes remain in any title or meta | Handoff Task 3 asked for a sweep; the 2026-07-16 cycle had already fixed home, compare, industry template, by-size, free | Verified compliant |
| 2026-07-31 | (audit only, no change) | sitemap.xml verified live: HTTP 200, Content-Type application/xml, opens with <?xml | Handoff Task 4 flagged it as possibly binary; that was the checker's fetch tool, not a site bug | No action needed |

## Cycle: 2026-07-16 (first APEX cycle; GSC/Bing exports not yet provided, so Phase 1 delta skipped)

| Date | File | Change | Reason | Expected effect |
|---|---|---|---|---|
| 2026-07-16 | lib/routes.ts | Replaced flat route list with a route-to-lastmod map (staticRouteLastmod); all routes dated 2026-07-08 (real content date) | Sitemap emitted lastModified = build time for all static routes; a fresh lastmod on every deploy trains Google/Bing to ignore the field | Crawlers trust lastmod again; recrawl happens when content actually changes |
| 2026-07-16 | app/sitemap.ts | Static routes now read lastmod from staticRouteLastmod instead of new Date() | Same as above | Same as above |
| 2026-07-16 | public/llms.txt | Added llms.txt at the standard path (site previously only had /llm.txt, and /llms.txt returned 404, verified live 2026-07-16) | llms.txt is the emerging standard filename AI crawlers request; /llm.txt is nonstandard | AI engines discover the site summary, pricing policy, and key pages; /llm.txt kept for anyone already using it |
| 2026-07-16 | components/JsonLd.tsx | ArticleJsonLd: author now emitted as @type Person (with /author/usama-latif URL) when a person name is passed; removed wrong-brand default "GlobalEmployGuide Editorial Team" (template leftover); fallback is now the FieldSoftwareGuide Organization | Both article pages pass "Usama Latif" but the schema typed him as an Organization; the stale default risked leaking another brand name into schema | Correct Person entity for E-E-A-T; author entity links to the author page; zero risk of wrong-brand schema |
| 2026-07-16 | components/JsonLd.tsx | Organization and Article publisher now include logo (ImageObject, /icon.png); WebSite now includes publisher | Publisher logo is required for article rich results; entity graph was thin | Eligibility for article rich results; stronger brand entity |
| 2026-07-16 | app/robots.ts | Added explicit Bingbot allow rule | GEO checklist requires explicit allowance for Bingbot (Copilot grounding) | No functional change (wildcard already allowed) but explicit signal for Bing/Copilot |

| 2026-07-16 | next.config.mjs | Added permanent (308) redirect from www.fieldsoftwareguide.com to the apex host | www served the full site as a 200 duplicate (verified live 2026-07-16); Bing flagged the site "Discovered but not crawled" citing webmaster guidelines, and host-level duplication is a known Bing indexation blocker | Single canonical host; removes the duplicate-content signal holding Bing indexation |
| 2026-07-16 | public/b07db2fa9810c3c5c379ba3217944e38.txt | Added IndexNow key file | Enables IndexNow submissions to Bing (fires only on owner go, per operating rules) | Bing gets instant change notifications instead of waiting on crawl scheduling for a low-trust new domain |

| 2026-07-16 | lib/seo.ts | Added brandSuffix option to buildMetadata; false emits the title without the "| FieldSoftwareGuide" template suffix | Bing Live URL test flagged "Title too long" (>70 chars); audit found home 78, all industry pages 74-86, compare 76, by-size 78, free 71 | All titles under 70 chars; industry pages keep their exact keyword title text (impression-earning pages get additive-only changes) |
| 2026-07-16 | app/[locale]/page.tsx | Home title: "Field Service Management Software Comparison by Industry \| FieldSoftwareGuide" (78) to "Field Service Management Software by Industry \| FieldSoftwareGuide" (66) | Bing 70-char flag | No SERP truncation; keyword intact |
| 2026-07-16 | app/[locale]/by-industry/[industry]/page.tsx | brandSuffix: false (titles now max 66 chars, text unchanged) | Bing 70-char flag | Same |
| 2026-07-16 | app/[locale]/compare/page.tsx | Title to "Best Field Service Management Software (2026)" (66 with suffix); em dash removed | Bing 70-char flag + house style | Same |
| 2026-07-16 | app/[locale]/free/page.tsx | brandSuffix: false (50 chars, text unchanged) | Was 71 with suffix | Same |
| 2026-07-16 | app/[locale]/by-size/page.tsx | Title to "Field Service Software by Business Size (2026)" (67 with suffix); em dash removed | Bing 70-char flag + house style | Same |

| 2026-07-16 | 6 pages (home, by-industry, compare, free, jobber-vs-hcp, about) | Meta description pass: all trimmed to 144-158 chars (were 165-185); /by-industry title 88 to 62 chars | Bing Live URL flagged descriptions over 160 on /free, /jobber-vs-hcp, /by-industry (plus title over 70 on /by-industry); full audit found home, compare, about also over | No SERP truncation in Google or Bing; keywords preserved, em dashes removed from rewritten lines |

| 2026-07-16 | app/[locale]/quickbooks/page.tsx (NEW) | New page: FSM software that works with QuickBooks. Support matrix (Online vs Desktop vs minimum plan) verified 2026-07-16 against vendor docs; 9 sources cited | Semrush gap: QuickBooks cluster ~670 vol (KD 15-21) with no page owning it; QuickBooks mentioned in every site FAQ but never answered fully | Rank for the QuickBooks cluster; unique plan-gating table is strong AI-citation material |
| 2026-07-16 | app/[locale]/for-small-business/page.tsx (NEW) | New page: best field service software for small business. Verified 1-user and 5-user pricing, plan-gating traps, when to skip to mid-market | Semrush gap: small-business cluster ~1,730 vol (KD 13-34); /by-size too thin to win it | Rank for the highest-volume cluster on the target list |
| 2026-07-16 | lib/routes.ts, guides/page.tsx, Footer.tsx | Registered both new routes (sitemap lastmod 2026-07-16), added guide cards and footer links | New pages must not be orphans; sitemap needs real lastmod | Both pages crawlable from footer (every page) and guides hub |

Verification for this cycle: robots.txt, /llms.txt 404, and live titles were checked against production on 2026-07-16 before changes. After deploy, verify https://fieldsoftwareguide.com/llms.txt returns 200, sitemap lastmod shows 2026-07-08 dates, and an industry page's Article JSON-LD shows author @type Person via the Rich Results Test.
