import Link from 'next/link'
import { getAllIndustries, priceShort, isPricePublishable } from '@/lib/industries'
import { getProvider } from '@/lib/providers'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { FAQJsonLd } from '@/components/JsonLd'
import { localizePath, isLocale, defaultLocale, type Locale } from '@/lib/i18n/config'
import { buildMetadata } from '@/lib/seo'

/** Homepage FAQ — visible Q&A + FAQPage JSON-LD (text must match). */
const homeFaqs = [
  {
    question: 'What is field service management (FSM) software?',
    answer:
      'FSM software helps field service businesses schedule jobs, dispatch technicians, manage work orders, invoice customers, and take payments — usually with a mobile app for techs in the field. It replaces paper, spreadsheets, and phone tag for trades like HVAC, plumbing, and electrical.',
  },
  {
    question: 'How much does field service management software cost?',
    answer:
      'Published plans start at $29/month for Jobber and $59/month for Housecall Pro (single user, billed annually; month-to-month is $49 and $79), scaling with technicians. Enterprise tools like ServiceTitan are custom-quoted and typically cost more. Many tools offer free trials.',
  },
  {
    question: 'What is the best FSM software?',
    answer:
      'There is no single best FSM tool — it depends on your industry and team size. Jobber and Housecall Pro are popular with small home-service teams, ServiceTitan suits larger commercial trades, and specialized fields need specific features. Pick your industry for a focused comparison.',
  },
  {
    question: 'Does FSM software integrate with QuickBooks?',
    answer:
      'Yes. Jobber, Housecall Pro, ServiceTitan, and Workiz all integrate with QuickBooks so invoices and payments sync to your accounting. Check whether each supports QuickBooks Online or Desktop for your setup.',
  },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc = (isLocale(locale) ? locale : defaultLocale) as Locale
  return buildMetadata({
    title: 'Field Service Management Software Comparison by Industry | FieldSoftwareGuide',
    description:
      'Independent field service management (FSM) software comparison by industry and business size. Real, vendor-published pricing for HVAC, plumbing, electrical and more.',
    locale: loc,
  })
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc = (isLocale(locale) ? locale : defaultLocale) as Locale
  const L = (p: string) => localizePath(loc, p)
  const industries = getAllIndustries()

  const valueProps = [
    { t: 'Real, vendor-checked pricing', d: 'Every price comes from the vendor’s own pricing page, with the date we checked it. Custom-priced tools say so — no invented numbers.' },
    { t: 'Built by industry', d: 'HVAC needs aren’t plumbing needs. Each guide compares the tools that actually fit your trade, not a generic top-10 list.' },
    { t: 'Independent & specific', d: 'We’re not a software vendor. Affiliate links never change our picks, and every page names specific tools, prices, and trade-offs.' },
  ]

  return (
    <div>
      <FAQJsonLd items={homeFaqs} />
      <section className="hero-band-home relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-32 h-[420px] w-[420px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,.35), transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-[1120px] px-5 py-16 md:px-10 md:py-[76px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5">
            <span className="h-[7px] w-[7px] rounded-full bg-orange-400" />
            <span className="text-xs font-semibold text-slate-200">Independent FSM software guides · 2026</span>
          </div>
          <h1 className="max-w-[820px] text-[40px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white md:text-[54px]">
            The right field service software for <span className="text-orange-400">your trade</span>
          </h1>
          <p className="mt-5 max-w-[600px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Field service management software compared by industry and business size — with real,
            vendor-published pricing. Start with your trade.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={L('/by-industry/hvac')}
              className="inline-flex h-[52px] items-center gap-2 rounded-[12px] bg-orange-500 px-6 text-base font-bold text-white hover:bg-orange-600"
            >
              ❄️ HVAC software →
            </Link>
            <Link
              href={L('/by-industry')}
              className="inline-flex h-[52px] items-center rounded-[12px] border border-white/20 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10"
            >
              All industries
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-5 text-[13px] text-slate-400">
            {['Vendor-checked pricing', 'Independent', 'Updated 2026'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2" aria-hidden>
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[820px] px-5 pt-14 md:px-10">
        <AnswerBlock>
          <p>
            <strong>Field service management (FSM) software</strong> helps trades and service
            businesses schedule jobs, dispatch technicians, manage work orders, invoice, and take
            payment — usually from a single mobile app. The best tool depends on your industry and
            team size. Small HVAC, plumbing, and electrical shops most often choose{' '}
            <strong>Jobber</strong> (from $29/month billed annually) or{' '}
            <strong>Housecall Pro</strong> (from $59/month billed annually), both with transparent
            published pricing. Larger commercial operations tend
            to run <strong>ServiceTitan</strong>, which is custom-quoted. This site compares FSM
            software by industry and by business size, with every price checked against the
            vendor’s own pricing page and dated, so you can pick — and defend — the right tool fast.
          </p>
        </AnswerBlock>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 pt-14 md:px-10">
        <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
          Browse by industry
        </h2>
        <p className="mb-6 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
          {industries.length} industry guides · each with real pricing
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const top = getProvider(ind.providers[0]?.slug ?? '')
            return (
              <Link
                key={ind.slug}
                href={L(`/by-industry/${ind.slug}`)}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-orange-300 dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl dark:bg-slate-800">
                  {ind.icon}
                </span>
                <div>
                  <div className="text-[15.5px] font-extrabold text-slate-900 group-hover:text-orange-600 dark:text-white">
                    {ind.name}
                  </div>
                  <div className="text-[13px] text-slate-500 dark:text-slate-400">
                    {top?.name ?? '—'}
                    {isPricePublishable(ind.priceRange) ? ` · ${priceShort(ind)}/tech/mo` : ''}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-16 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map((f, i) => (
            <div key={f.t} className="rounded-[18px] border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
              <span className={`mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-xl ${i === 1 ? 'bg-slate-100 dark:bg-slate-800' : 'bg-orange-50 dark:bg-orange-500/15'}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={i === 1 ? '#334155' : '#EA580C'} strokeWidth="2">
                  <path d="M9 11l3 3 8-8" />
                  <path d="M21 12a9 9 0 1 1-6.2-8.5" />
                </svg>
              </span>
              <div className="text-lg font-extrabold tracking-[-0.01em] text-slate-900 dark:text-white">{f.t}</div>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-slate-500 dark:text-slate-400">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[820px] px-5 pb-4 md:px-10">
        <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
          Frequently asked questions
        </h2>
        <p className="mb-5 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
          The basics of field service management software, answered.
        </p>
        <FAQSection items={homeFaqs} />
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-16 md:px-10">
        <div className="cta-band flex flex-col items-start justify-between gap-6 rounded-[22px] p-10 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-white md:text-[30px]">Compare every FSM tool side by side</h2>
            <p className="mt-2.5 max-w-[460px] text-base text-slate-300">Ratings, published prices, and best-fit use case for the major field service platforms.</p>
          </div>
          <Link
            href={L('/compare')}
            className="inline-flex h-[54px] shrink-0 items-center gap-2 rounded-[13px] bg-orange-500 px-7 text-base font-bold text-white hover:bg-orange-600"
          >
            Compare software →
          </Link>
        </div>
      </section>
    </div>
  )
}
