import Link from 'next/link'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { NavLinks } from './NavLinks'
import { localizePath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/dictionaries'

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const nav = [
    { label: dict.nav.industries, href: '/by-industry' },
    { label: dict.nav.sizes, href: '/by-size' },
    { label: dict.nav.compare, href: '/compare' },
    { label: dict.nav.free, href: '/free' },
    { label: dict.nav.guides, href: '/guides' },
  ]
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0B1020]/90">
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-10">
          <Link href={localizePath(locale, '/')} aria-label="FieldSoftwareGuide home">
            <Logo />
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-[26px] lg:flex">
            <NavLinks items={nav} locale={locale} />
          </nav>
        </div>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            href={localizePath(locale, '/compare')}
            className="hidden h-10 items-center rounded-[9px] bg-amber-500 px-[18px] text-sm font-bold text-slate-900 transition-colors hover:bg-amber-600 sm:inline-flex"
          >
            {dict.cta.compare}
          </Link>
        </div>
      </div>
    </header>
  )
}
