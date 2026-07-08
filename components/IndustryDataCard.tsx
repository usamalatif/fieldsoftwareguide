import { type Industry, isPricePublishable, priceShort } from '@/lib/industries'
import { getProvider } from '@/lib/providers'

/**
 * "At a glance" — the structured, AI-extractable data card. Grid of label/value pairs
 * with an orange-tinted "most affordable" cell. Per the confidence policy, only
 * vendor-published prices appear as figures; custom-priced tools show "Custom".
 */
export function IndustryDataCard({ industry: ind }: { industry: Industry }) {
  const topPick = getProvider(ind.providers[0]?.slug ?? '')
  const withPrice = ind.providers
    .map((r) => ({ p: getProvider(r.slug), from: r.monthlyFromUsd }))
    .filter((x) => x.p && x.from != null)
    .sort((a, b) => (a.from as number) - (b.from as number))
  const cheapest = withPrice[0]

  const cells: { label: string; value: string; accent?: boolean }[] = [
    { label: 'Industry', value: ind.name },
    { label: 'Category', value: ind.category },
    { label: 'Top pick', value: topPick?.name ?? '—' },
    { label: 'Tools compared', value: String(ind.providers.length) },
  ]
  if (isPricePublishable(ind.priceRange)) {
    cells.push({ label: 'Typical price', value: `${priceShort(ind)} / tech / mo` })
  }
  cells.push({
    label: 'Most affordable',
    value: cheapest?.p ? `${cheapest.p.name} — $${cheapest.from}/mo` : 'Varies by quote',
    accent: true,
  })

  return (
    <section>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            {ind.name} FSM software at a glance
          </h2>
          <p className="mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            The structured facts owners and AI assistants extract most.
          </p>
        </div>
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-orange-50 px-[11px] py-1.5 text-xs font-semibold text-orange-600 sm:inline-flex dark:bg-orange-500/15 dark:text-orange-300">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7V4h16v3M9 20h6M12 4v16" />
          </svg>
          Structured data
        </span>
      </div>
      <div className="overflow-hidden rounded-[18px] border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,.04),0_16px_40px_-28px_rgba(15,23,42,.22)] dark:border-slate-800 dark:bg-slate-900">
        <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {cells.map((cell) => (
            <div
              key={cell.label}
              className={`border-b border-slate-100 px-6 py-5 dark:border-slate-800 ${cell.accent ? 'bg-orange-50 dark:bg-orange-500/10' : ''}`}
            >
              <dt
                className={`text-[12.5px] font-semibold uppercase tracking-[0.04em] ${
                  cell.accent ? 'text-orange-700 dark:text-orange-300' : 'text-slate-400'
                }`}
              >
                {cell.label}
              </dt>
              <dd
                className={`mt-1.5 text-[17px] font-bold ${
                  cell.accent ? 'text-orange-900 dark:text-orange-200' : 'text-slate-900 dark:text-slate-100'
                }`}
              >
                {cell.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
