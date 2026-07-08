/**
 * Single source of truth for static, indexable routes.
 *
 * The sitemap derives from this list, so a new top-level page is added to the sitemap
 * by adding it HERE once. Industry pages are NOT listed here — they are generated
 * dynamically from getPublishedIndustries() in app/sitemap.ts.
 *
 * When you add a new top-level page under app/[locale]/, add its path here too.
 */
export const staticRoutes: readonly string[] = [
  '/',
  '/by-industry',
  '/by-size',
  '/compare',
  '/free',
  '/guides',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/how-we-review',
  '/author/usama-latif',
]
