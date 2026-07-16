# SEO / GEO Changelog

Append one entry per change, every cycle. Format: date, file, change, reason, expected effect.

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

Verification for this cycle: robots.txt, /llms.txt 404, and live titles were checked against production on 2026-07-16 before changes. After deploy, verify https://fieldsoftwareguide.com/llms.txt returns 200, sitemap lastmod shows 2026-07-08 dates, and an industry page's Article JSON-LD shows author @type Person via the Rich Results Test.
