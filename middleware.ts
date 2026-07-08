import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, locales } from '@/lib/i18n/config'

/**
 * Locale routing with a HIDDEN default locale:
 *  - "/countries/canada"      → internally rewritten to "/en/countries/canada"
 *  - "/es/countries/canada"   → served as-is (Spanish)
 *  - "/en/..."                → redirected to the clean (prefix-less) path (canonical)
 * All pages live under app/[locale]; English URLs stay prefix-free.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Redirect explicit /en/* to the clean URL (avoid duplicate canonicals).
  // 308 (permanent) so search engines consolidate signals on the clean URL.
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const stripped = pathname.replace(`/${defaultLocale}`, '') || '/'
    const url = req.nextUrl.clone()
    url.pathname = stripped
    return NextResponse.redirect(url, 308)
  }

  // Already a supported non-default locale → pass through.
  const hasLocalePrefix = locales.some(
    (l) => l !== defaultLocale && (pathname === `/${l}` || pathname.startsWith(`/${l}/`)),
  )
  if (hasLocalePrefix) return NextResponse.next()

  // No locale prefix → rewrite to the default-locale tree.
  const url = req.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip Next internals, API, and any path with a file extension (assets).
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
