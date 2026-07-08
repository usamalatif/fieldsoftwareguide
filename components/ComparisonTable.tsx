import { getProvider } from '@/lib/providers'
import type { IndustryProviderRef } from '@/lib/industries'
import { site } from '@/lib/site'
import { RatingBadge } from './RatingBadge'
import { ProviderLogo } from './ProviderLogo'

/**
 * FSM software comparison — the visual centerpiece. Desktop = table with charcoal
 * header + highlighted "Best overall" row (orange left border). Mobile = stacked cards.
 * Affiliate links rel="sponsored nofollow"; resolved from the central registry.
 * Price = the lowest plan the vendor publishes, or "Custom" when they only quote.
 */
export function ComparisonTable({
  refs,
  industryName,
}: {
  refs: IndustryProviderRef[]
  industryName: string
}) {
  const rows = refs
    .map((r) => ({ ref: r, p: getProvider(r.slug) }))
    .filter((x): x is { ref: IndustryProviderRef; p: NonNullable<ReturnType<typeof getProvider>> } => !!x.p)

  const fee = (n: number | null) => (n ? `$${n}` : 'Custom')

  return (
    <div className="my-6">
      {/* Desktop */}
      <div className="hidden overflow-hidden rounded-[18px] border border-slate-200 dark:border-slate-800 shadow-[0_1px_2px_rgba(15,23,42,.04),0_18px_44px_-30px_rgba(15,23,42,.25)] sm:block">
        <table className="tnum w-full border-collapse">
          <thead>
            <tr className="bg-slate-900 text-left">
              {['Software', 'From / mo', 'Rating', 'Best for', ''].map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-[15px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px] last:pr-[22px]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ ref, p }, i) => {
              const best = i === 0
              return (
                <tr
                  key={ref.slug}
                  className={best ? 'bg-orange-50 dark:bg-orange-500/10' : 'border-t border-slate-100 dark:border-slate-800'}
                >
                  <td className={`py-[18px] pl-[22px] pr-4 ${best ? 'border-l-[3px] border-orange-500' : ''}`}>
                    <div className="flex items-center gap-3">
                      <ProviderLogo name={p.name} logo={p.logo} mono={p.mono} />
                      <div>
                        <div className="text-[15.5px] font-bold text-slate-900 dark:text-white">{p.name}</div>
                        {best && (
                          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-orange-200 px-[7px] py-0.5 text-[10.5px] font-bold uppercase tracking-[0.05em] text-orange-800">
                            ★ Best overall
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-[18px] text-[15px] font-bold text-slate-900 dark:text-white">{fee(ref.monthlyFromUsd)}</td>
                  <td className="px-4 py-[18px]"><RatingBadge score={p.rating} /></td>
                  <td className="px-4 py-[18px] text-sm text-slate-600 dark:text-slate-300">{ref.positioning}</td>
                  <td className="py-[18px] pl-4 pr-[22px] text-right">
                    <a
                      href={p.affiliateUrl}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      className={
                        best
                          ? 'inline-flex h-[38px] items-center gap-1.5 rounded-[9px] bg-orange-500 px-4 text-[13.5px] font-bold text-white hover:bg-orange-600'
                          : 'inline-flex h-[38px] items-center rounded-[9px] border border-slate-300 bg-white dark:bg-slate-900 px-4 text-[13.5px] font-bold text-slate-800 dark:text-slate-200 hover:border-orange-300'
                      }
                    >
                      {best ? `Visit ${p.name} →` : 'Visit'}
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 sm:hidden">
        {rows.map(({ ref, p }, i) => {
          const best = i === 0
          return (
            <div
              key={ref.slug}
              className={`relative rounded-2xl border p-4 ${
                best ? 'border-[1.5px] border-orange-300 bg-orange-50 dark:border-orange-500/40 dark:bg-orange-500/10' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              {best && (
                <span className="absolute right-3.5 top-3.5 rounded-full bg-orange-200 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.05em] text-orange-800">
                  ★ Best overall
                </span>
              )}
              <div className="flex items-center gap-3">
                <ProviderLogo name={p.name} logo={p.logo} mono={p.mono} />
                <div>
                  <div className="text-[15.5px] font-bold text-slate-900 dark:text-white">{p.name}</div>
                  <RatingBadge score={p.rating} />
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{ref.positioning}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="tnum text-[15px] font-bold text-slate-900 dark:text-white">
                  {fee(ref.monthlyFromUsd)}<span className="text-xs font-medium text-slate-400">{ref.monthlyFromUsd ? '/mo' : ''}</span>
                </span>
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className={
                    best
                      ? 'inline-flex h-9 items-center rounded-[9px] bg-orange-500 px-4 text-[13px] font-bold text-white'
                      : 'inline-flex h-9 items-center rounded-[9px] border border-slate-300 bg-white dark:bg-slate-900 px-4 text-[13px] font-bold text-slate-800 dark:text-slate-200'
                  }
                >
                  Visit {p.name}
                </a>
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-3 px-1 text-[12.5px] text-slate-400">
        Ratings aggregated from G2 and Capterra. Prices are each vendor’s lowest published plan
        (checked Jul 2026); “Custom” means the vendor quotes per business. {site.name} may earn a
        commission from software links — this never affects our scoring. Verify current pricing for
        your {industryName} business before deciding.
      </p>
    </div>
  )
}
