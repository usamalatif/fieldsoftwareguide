/**
 * Publication dates for standalone articles. Single source for the page's Article
 * schema and its sitemap lastmod, so the two cannot drift.
 *
 * firstPublished: the day the article first went live. Leave undefined until it is
 * actually deployed (no datePublished is emitted until then), set it once on first
 * publish, and never change it afterwards.
 * contentUpdated: the date the article's content last genuinely changed. Do not bump it
 * for a redeploy.
 */
export const articleDates: Record<string, { firstPublished?: string; contentUpdated: string }> = {
  '/pricing': { firstPublished: '2026-11-10', contentUpdated: '2026-11-10' },
  '/pricing/housecall-pro': { firstPublished: '2026-10-26', contentUpdated: '2026-11-19' },
  '/pricing/jobber': { firstPublished: '2026-11-03', contentUpdated: '2026-11-03' },
  '/compare/fieldpulse-alternatives': { firstPublished: '2026-11-11', contentUpdated: '2026-11-21' },
  '/guides/refrigerant-tracking-software': { firstPublished: '2026-11-18', contentUpdated: '2026-11-18' },
  '/compare/housecall-pro-vs-servicetitan': { firstPublished: '2026-11-18', contentUpdated: '2026-11-18' },
  '/guides/hvac-dispatch-software': { firstPublished: '2026-11-19', contentUpdated: '2026-11-20' },
  '/guides/commercial-hvac-software': { firstPublished: '2026-11-19', contentUpdated: '2026-11-19' },
  '/compare/servicetitan-vs-jobber': { firstPublished: '2026-11-19', contentUpdated: '2026-11-19' },
  '/guides/field-service-invoicing-software': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/guides/field-service-quoting-software': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/guides/hvac-maintenance-agreement-software': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/guides/open-source-field-service-software': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/compare/fieldedge-alternatives': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  // Batch 2 drafts: set firstPublished and contentUpdated to the merge day when published.
  '/compare/servicetitan-alternatives': { contentUpdated: '2026-11-21' },
  '/compare/jobber-alternatives': { contentUpdated: '2026-11-21' },
  '/compare/housecall-pro-alternatives': { contentUpdated: '2026-11-21' },
  '/compare/workiz-alternatives': { contentUpdated: '2026-11-21' },
  '/compare/jobber-vs-workiz': { contentUpdated: '2026-11-21' },
}
