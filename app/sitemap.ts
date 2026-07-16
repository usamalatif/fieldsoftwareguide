import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { getPublishedIndustries } from '@/lib/industries'
import { locales, localizePath, defaultLocale } from '@/lib/i18n/config'
import { staticRoutes, staticRouteLastmod } from '@/lib/routes'

/**
 * Locale-aware sitemap. Static routes come from lib/routes.ts; industry pages are
 * generated dynamically from getPublishedIndustries() (verified pages only — drafts
 * stay out of the sitemap and are noindex).
 *
 * lastmod = real content-change dates from lib/routes.ts / industry lastUpdated,
 * never the build timestamp (a fresh lastmod on every deploy trains crawlers to
 * ignore the field).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = staticRoutes
  const industryPaths = getPublishedIndustries().map((i) => ({
    path: `/by-industry/${i.slug}`,
    last: new Date(i.lastUpdated),
  }))

  const abs = (loc: (typeof locales)[number], path: string) =>
    `${site.url}${localizePath(loc, path)}`.replace(/\/$/, '') || site.url

  const languagesFor = (path: string) => {
    const languages: Record<string, string> = {}
    for (const l of locales) languages[l] = abs(l, path)
    return languages
  }

  const entries: MetadataRoute.Sitemap = []
  for (const path of staticPaths) {
    for (const loc of locales) {
      entries.push({
        url: abs(loc, path),
        lastModified: new Date(staticRouteLastmod[path]),
        changeFrequency: 'weekly',
        priority: path === '/' ? 1 : 0.7,
        alternates: { languages: languagesFor(path) },
      })
    }
  }
  for (const { path, last } of industryPaths) {
    for (const loc of locales) {
      entries.push({
        url: abs(loc, path),
        lastModified: last,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: { languages: languagesFor(path) },
      })
    }
  }
  void defaultLocale
  return entries
}
