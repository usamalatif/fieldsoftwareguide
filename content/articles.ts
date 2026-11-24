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
  '/compare/housecall-pro-vs-servicetitan': { firstPublished: '2026-11-18', contentUpdated: '2026-11-25' },
  '/guides/hvac-dispatch-software': { firstPublished: '2026-11-19', contentUpdated: '2026-11-25' },
  '/guides/commercial-hvac-software': { firstPublished: '2026-11-19', contentUpdated: '2026-11-19' },
  '/compare/servicetitan-vs-jobber': { firstPublished: '2026-11-19', contentUpdated: '2026-11-19' },
  '/guides/field-service-invoicing-software': { firstPublished: '2026-11-21', contentUpdated: '2026-11-25' },
  '/guides/field-service-quoting-software': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/guides/hvac-maintenance-agreement-software': { firstPublished: '2026-11-21', contentUpdated: '2026-11-25' },
  '/guides/open-source-field-service-software': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/compare/fieldedge-alternatives': { firstPublished: '2026-11-21', contentUpdated: '2026-11-25' },
  '/compare/servicetitan-alternatives': { firstPublished: '2026-11-21', contentUpdated: '2026-11-25' },
  '/compare/jobber-alternatives': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/compare/housecall-pro-alternatives': { firstPublished: '2026-11-21', contentUpdated: '2026-11-25' },
  '/compare/workiz-alternatives': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/compare/jobber-vs-workiz': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/compare/housecall-pro-vs-workiz': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/compare/servicetitan-vs-fieldedge': { firstPublished: '2026-11-21', contentUpdated: '2026-11-21' },
  '/compare/servicetitan-vs-workiz': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/jobber-vs-fieldpulse': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/housecall-pro-vs-fieldpulse': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/fieldpulse-vs-workiz': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/commusoft-alternatives': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/servicetitan-vs-fieldpulse': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/jobber-vs-fieldedge': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/housecall-pro-vs-fieldedge': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/fieldedge-vs-fieldpulse': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/service-fusion-alternatives': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/pricing/servicetitan': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/pricing/workiz': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/pricing/fieldpulse': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/pricing/fieldedge': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/pricing/service-fusion': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/guides/field-service-scheduling-software': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/guides/route-optimization-software': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/guides/offline-field-service-app': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/guides/ai-answering-service-for-contractors': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/guides/field-service-inventory-management-software': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/pricing/servicem8': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/pricing/kickserv': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/pricing/commusoft': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/servicem8-alternatives': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/kickserv-alternatives': { firstPublished: '2026-11-24', contentUpdated: '2026-11-24' },
  '/compare/jobber-vs-service-fusion': { firstPublished: '2026-11-25', contentUpdated: '2026-11-25' },
  '/compare/housecall-pro-vs-service-fusion': { firstPublished: '2026-11-25', contentUpdated: '2026-11-25' },
  '/compare/jobber-vs-servicem8': { firstPublished: '2026-11-25', contentUpdated: '2026-11-25' },
  '/compare/jobber-vs-kickserv': { firstPublished: '2026-11-25', contentUpdated: '2026-11-25' },
  '/compare/housecall-pro-vs-kickserv': { firstPublished: '2026-11-25', contentUpdated: '2026-11-25' },
}
