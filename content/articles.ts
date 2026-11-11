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
  '/pricing/housecall-pro': { firstPublished: '2026-10-26', contentUpdated: '2026-10-26' },
  '/pricing/jobber': { firstPublished: '2026-11-03', contentUpdated: '2026-11-03' },
  // Draft: firstPublished is set on the day it first goes live.
  '/compare/fieldpulse-alternatives': { contentUpdated: '2026-11-11' },
}
