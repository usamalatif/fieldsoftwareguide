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
  /**
   * false = emit the title as-is (no "| FieldSoftwareGuide" template suffix).
   * Use for pages whose keyword-rich title would exceed 70 chars with the suffix
   * (Bing flags titles over 70).
   */
  brandSuffix?: boolean
}

/**
 * House-style guard, enforced at build time (buildMetadata runs during `next build`
 * for every static page): titles must be <= 70 chars INCLUDING the layout's
 * "| FieldSoftwareGuide" template suffix (Bing flags over 70), descriptions <= 160,
 * and neither may contain an em (—) or en (–) dash. A violating page fails the
 * build with a named error instead of shipping, so new pages cannot reintroduce
 * the bugs fixed in the 2026-07-16 and 2026-07-31 cycles.
 */
const TITLE_SUFFIX_LEN = ` | ${site.name}`.length
function assertSeoHouseStyle(title: string, description: string, brandSuffix: boolean, slug: string) {
  const dashes = /[—–]/
  const fullTitleLen = title.length + (brandSuffix ? TITLE_SUFFIX_LEN : 0)
  const problems: string[] = []
  if (fullTitleLen > 70)
    problems.push(`title is ${fullTitleLen} chars incl. suffix (max 70): "${title}"`)
  if (description.length > 160)
    problems.push(`description is ${description.length} chars (max 160)`)
  if (dashes.test(title)) problems.push('title contains an em/en dash (house style: use comma, colon, or "and")')
  if (dashes.test(description)) problems.push('description contains an em/en dash')
  if (problems.length)
    throw new Error(`SEO house-style violation on "/${slug}":\n- ${problems.join('\n- ')}`)
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
  brandSuffix = true,
}: BuildMetadataArgs): Metadata {
  assertSeoHouseStyle(title, description, brandSuffix, slug)
  const path = slug ? `/${slug}` : '/'
  const canonical = `${site.url}${localizePath(locale, path)}`.replace(/\/$/, '') || site.url
  const ogImage = image.startsWith('http') ? image : `${site.url}${image}`

  const languages: Record<string, string> = {}
  for (const l of locales) {
    languages[l] = `${site.url}${localizePath(l, path)}`.replace(/\/$/, '') || site.url
  }
  languages['x-default'] = `${site.url}${localizePath(defaultLocale, path)}`.replace(/\/$/, '') || site.url

  return {
    title: brandSuffix ? title : { absolute: title },
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
