'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { locales, defaultLocale, localeNames, type Locale } from '@/lib/i18n/config'

/** Switches locale while preserving the current path. Default locale = no prefix. */
export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || '/'

  // Hide entirely while only one locale is active (es is temporarily disabled).
  if (locales.length < 2) return null

  // Strip any existing non-default locale prefix to get the "clean" path.
  // Typed as string[] so this stays valid while only one locale is active (es disabled).
  let clean = pathname
  for (const l of locales as readonly string[]) {
    if (l === defaultLocale) continue
    if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) {
      clean = pathname.slice(l.length + 1) || '/'
      break
    }
  }

  const hrefFor = (l: Locale) =>
    l === defaultLocale ? clean || '/' : `/${l}${clean === '/' ? '' : clean}`

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-slate-200 p-0.5 dark:border-slate-700">
      {locales.map((l) => {
        const active = l === current
        return (
          <Link
            key={l}
            href={hrefFor(l)}
            aria-label={localeNames[l]}
            aria-current={active ? 'true' : undefined}
            className={`rounded-md px-2 py-1 text-xs font-bold uppercase transition-colors ${
              active
                ? 'bg-indigo-600 text-white'
                : 'text-slate-500 hover:text-indigo-600 dark:text-slate-400'
            }`}
          >
            {l}
          </Link>
        )
      })}
    </div>
  )
}
