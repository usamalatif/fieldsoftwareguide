import { type Industry, isPricePublishable, priceShort } from '@/lib/industries'
import { getProvider } from '@/lib/providers'
import type { Dictionary } from '@/lib/i18n/dictionaries'

/** Industry page hero — charcoal band, trade icon chip, H1, meta row, 4-cell KPI strip. */
export function IndustryHero({ industry: ind, dict }: { industry: Industry; dict: Dictionary }) {
  const topPick = getProvider(ind.providers[0]?.slug ?? '')
  const cheapest = ind.providers
    .map((r) => r.monthlyFromUsd)
    .filter((n): n is number => n != null)
    .sort((a, b) => a - b)[0]

  const startPrice = cheapest != null ? `$${cheapest}/mo` : isPricePublishable(ind.priceRange) ? priceShort(ind) : 'Varies'

  const kpis: { label: string; value: string; accent?: boolean }[] = [
    { label: 'Top pick', value: topPick?.name ?? '—' },
    { label: 'Starts at', value: startPrice, accent: true },
    { label: 'Tools compared', value: String(ind.providers.length) },
    { label: 'Category', value: ind.category },
  ]

  return (
    <section className="hero-band relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-20 h-[360px] w-[360px] rounded-full blur-[10px]"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,.35), transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-[1100px] px-5 pt-12 md:px-10 md:pt-14">
        <div className="mb-5 flex items-center gap-3.5">
          <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] bg-white/10 text-xl">
            {ind.icon}
          </span>
          <span className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-orange-300">
            {ind.name} · Field Service Software
          </span>
        </div>
        <h1 className="max-w-[820px] text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[50px] md:leading-[1.04]">
          Best Field Service Management Software for {ind.name}
        </h1>
        <p className="mt-5 max-w-[700px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
          {dict.industry.heroSub(ind.name)}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-5 text-[13.5px] font-medium text-slate-400">
          <Meta>{dict.industry.updated} {monthYear(ind.lastUpdated)}</Meta>
          <Meta accent>{dict.industry.reviewed}</Meta>
        </div>
        {/* KPI strip */}
        <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-t-[14px] border border-b-0 border-white/10 bg-white/10 md:grid-cols-4">
          {kpis.map((k) => (
            <div
              key={k.label}
              className={k.accent ? 'bg-orange-500/[0.14] px-5 py-[18px]' : 'bg-white/[0.03] px-5 py-[18px]'}
            >
              <div
                className={`text-xs font-semibold uppercase tracking-[0.04em] ${
                  k.accent ? 'text-orange-300' : 'text-slate-400'
                }`}
              >
                {k.label}
              </div>
              <div
                className={`tnum mt-1.5 text-[18px] font-bold md:text-xl ${
                  k.accent ? 'text-orange-400' : 'text-white'
                }`}
              >
                {k.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Meta({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent ? '#FB923C' : 'currentColor'}
        strokeWidth="2"
        aria-hidden
      >
        {accent ? <path d="M20 6 9 17l-5-5" /> : <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>}
      </svg>
      {children}
    </span>
  )
}

function monthYear(iso: string): string {
  const d = new Date(iso)
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}
