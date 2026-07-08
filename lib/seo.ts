import type { Metadata } from 'next'
import { site } from './site'
import { locales, defaultLocale, localizePath, type Locale } from './i18n/config'

interface BuildMetadataArgs {
  title: string
  description: string
  /** Path without leading slash, e.g. "countries/singapore". Omit for homepage. */
  slug?: string
  /** Active locale, drives canonical + hreflang alternates. */
  locale?: Locale
  /** Override the OpenGraph image (absolute or root-relative path). */
  image?: string
  /** ISO date string for article freshness signals. */
  modifiedTime?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

/**
 * Centralized metadata builder. Emits a locale-correct canonical plus hreflang
 * alternates for every locale (default locale = clean URL, others prefixed).
 */
export function buildMetadata({
  title,
  description,
  slug = '',
  locale = defaultLocale,
  image = '/og-default.png',
  modifiedTime,
  type = 'website',
  noindex = false,
}: BuildMetadataArgs): Metadata {
  const path = slug ? `/${slug}` : '/'
  const canonical = `${site.url}${localizePath(locale, path)}`.replace(/\/$/, '') || site.url
  const ogImage = image.startsWith('http') ? image : `${site.url}${image}`

  const languages: Record<string, string> = {}
  for (const l of locales) {
    languages[l] = `${site.url}${localizePath(l, path)}`.replace(/\/$/, '') || site.url
  }
  languages['x-default'] = `${site.url}${localizePath(defaultLocale, path)}`.replace(/\/$/, '') || site.url

  return {
    title,
    description,
    alternates: { canonical, languages },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      // Cast to string so the es mapping stays for when es is re-enabled (only 'en' active now).
      locale: (locale as string) === 'es' ? 'es_ES' : 'en_US',
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
  }
}
