/**
 * Single source of truth for static, indexable routes.
 *
 * The sitemap derives from this list, so a new top-level page is added to the sitemap
 * by adding it HERE once. Industry pages are NOT listed here — they are generated
 * dynamically from getPublishedIndustries() in app/sitemap.ts.
 *
 * When you add a new top-level page under app/[locale]/, add its path here too,
 * with the date its CONTENT last genuinely changed (not the build date). Bump a
 * route's date only when you actually change that page's content.
 */
export const staticRouteLastmod: Record<string, string> = {
  '/': '2026-10-24',
  '/by-industry': '2026-10-24',
  '/by-size': '2026-07-08',
  '/compare': '2026-10-24',
  '/compare/jobber-vs-housecall-pro': '2026-07-08',
  '/free': '2026-10-24',
  '/quickbooks': '2026-10-24',
  '/pricing/housecall-pro': '2026-10-24',
  '/for-small-business': '2026-10-24',
  '/guides': '2026-10-22',
  '/about': '2026-10-22',
  '/contact': '2026-07-08',
  '/privacy': '2026-07-08',
  '/terms': '2026-07-08',
  '/how-we-review': '2026-10-22',
  '/author/usama-latif': '2026-10-22',
}

export const staticRoutes: readonly string[] = Object.keys(staticRouteLastmod)
