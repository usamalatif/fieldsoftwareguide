// 'es' is temporarily DISABLED for indexing: only UI chrome was translated, so ES
// routes were thin/duplicate content. The dictionary scaffolding (dictionaries.ts,
// localeNames below) is intentionally KEPT so Spanish can be re-enabled as fully
// translated content later — just add 'es' back to this array.
export const locales = ['en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

// Kept for future re-enablement (typed loosely so disabled-locale labels survive).
export const localeNames: Record<string, string> = {
  en: 'English',
  es: 'Español',
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/**
 * Build an href for a given locale. The default locale is "hidden" (no prefix),
 * middleware rewrites clean URLs to the /en tree, so English links stay prefix-free.
 */
export function localizePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path
  return locale === defaultLocale ? `/${clean}`.replace(/\/+/g, '/') || '/' : `/${locale}${clean}`
}
