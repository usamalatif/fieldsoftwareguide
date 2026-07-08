'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, defaultLocale, localizePath, type Locale } from '@/lib/i18n/config'

/**
 * Primary nav links with active state derived from the current path (not a hardcoded
 * index). Strips the locale prefix before matching so /es/compare highlights correctly.
 */
export function NavLinks({
  items,
  locale,
}: {
  items: { label: string; href: string }[]
  locale: Locale
}) {
  const raw = usePathname() || '/'

  // Remove a non-default locale prefix to get the clean path.
  // Typed as string[] so this stays valid while only one locale is active (es disabled).
  let path = raw
  for (const l of locales as readonly string[]) {
    if (l === defaultLocale) continue
    if (path === `/${l}` || path.startsWith(`/${l}/`)) {
      path = path.slice(l.length + 1) || '/'
      break
    }
  }

  const isActive = (href: string) =>
    href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`)

  return (
    <>
      {items.map((item) => {
        const active = isActive(item.href)
        return (
          <Link
            key={item.href}
            href={localizePath(locale, item.href)}
            aria-current={active ? 'page' : undefined}
            className={
              active
                ? 'text-[14.5px] font-semibold text-indigo-600 dark:text-indigo-300'
                : 'text-[14.5px] font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300'
            }
          >
            {item.label}
          </Link>
        )
      })}
    </>
  )
}
