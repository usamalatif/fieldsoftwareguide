import Link from 'next/link'
import { localizePath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/dictionaries'

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const L = (p: string) => localizePath(locale, p)
  return (
    <footer className="mt-16 bg-[#141210]">
      <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800" aria-hidden>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                  <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4l-5 5a1.5 1.5 0 0 0 2 2l5-5a5 5 0 0 0 6.4-6.4l-2.8 2.8-2-2 2.8-2.8Z" />
                </svg>
              </span>
              <span className="text-[15px] font-extrabold text-white">
                field<span className="text-orange-400">software</span>guide
              </span>
            </span>
            <p className="mt-3 text-sm text-slate-400">{dict.footer.tagline}</p>
          </div>
          <FooterCol
            title={dict.footer.learn}
            links={[
              [dict.nav.compare, L('/compare')],
              [dict.nav.free, L('/free')],
              ['QuickBooks sync', L('/quickbooks')],
              ['For small business', L('/for-small-business')],
              [dict.nav.guides, L('/guides')],
            ]}
          />
          <FooterCol
            title={dict.footer.browse}
            links={[
              ['HVAC software', L('/by-industry/hvac')],
              ['All industries', L('/by-industry')],
              ['By business size', L('/by-size')],
            ]}
          />
          <FooterCol
            title={dict.footer.site}
            links={[
              ['About', L('/about')],
              ['How we review', L('/how-we-review')],
              ['Contact', L('/contact')],
              ['Privacy', L('/privacy')],
              ['Terms', L('/terms')],
            ]}
          />
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>{dict.footer.rights} · © {new Date().getFullYear()}</p>
          <p>{dict.footer.affiliate}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-400">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="transition-colors hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
