import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { RatingBadge } from '@/components/RatingBadge'
import { ProviderLogo } from '@/components/ProviderLogo'
import { providers } from '@/lib/providers'

export const metadata = buildMetadata({
  title: 'Best Field Service Management Software 2026 — Compared',
  description:
    'Independent comparison of the best FSM software — Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft — by rating, published price, and best use case.',
  slug: 'compare',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
]

const faqs = [
  {
    question: 'Which FSM software is best?',
    answer:
      'There is no single best FSM tool. Jobber (from $29/mo billed annually) and Housecall Pro (from $59/mo billed annually) suit small home-service teams; ServiceTitan fits larger commercial trades; Workiz and FieldPulse are strong mid-market picks. The right choice depends on your industry and team size.',
  },
  {
    question: 'How much does FSM software cost?',
    answer:
      'Published plans start at $29/month (Jobber) and $59/month (Housecall Pro) for a single user billed annually — month-to-month is $49 and $79 — scaling with technicians. ServiceTitan, Workiz, FieldPulse, and Commusoft are custom-quoted, so you request pricing based on your business.',
  },
  {
    question: 'How is this comparison kept independent?',
    answer:
      'Ratings are aggregated from G2 and Capterra, and prices come from each vendor’s own pricing page. Some links are affiliate links and we may earn a commission, but that never changes the rankings or scores.',
  },
  {
    question: 'Does FSM software work with QuickBooks?',
    answer:
      'Most major tools — Jobber, Housecall Pro, ServiceTitan, Workiz — integrate with QuickBooks so invoices and payments sync automatically. Confirm QuickBooks Online vs Desktop support for your setup.',
  },
]

const order = ['jobber', 'housecall-pro', 'servicetitan', 'workiz', 'fieldpulse', 'commusoft']

export default function ComparePage() {
  const list = order.map((s) => providers[s]).filter(Boolean)
  const fee = (n: number | null) => (n != null ? `from $${n}/mo (annual)` : 'Custom pricing')
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            The best field service management software in 2026
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            An independent look at the major FSM platforms — rated on reviews, published pricing,
            and where each one fits best. We earn commission, never on ranking.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock>
          <p>
            The best field service management (FSM) software in 2026 are Jobber, Housecall Pro,
            ServiceTitan, Workiz, FieldPulse, and Commusoft — the tools that combine solid customer
            reviews with strong scheduling, dispatch, invoicing, and mobile field apps. There is no
            universal winner: Jobber (from $29/month billed annually) is the most affordable
            published option and Housecall Pro (from $59/month billed annually) is a favorite of
            small home-service teams, while
            ServiceTitan is the enterprise standard for larger commercial trades and is
            custom-quoted. Workiz, FieldPulse, and Commusoft round out the mid-market, also on
            custom pricing. The comparison below is independent — ranked on G2 and Capterra ratings,
            published pricing, and fit, not commission. For the right pick in your trade, open your
            industry’s guide.
          </p>
        </AnswerBlock>

        <div className="mt-10 space-y-4">
          {list.map((p, i) => (
            <div
              key={p.slug}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start gap-4">
                <ProviderLogo name={p.name} logo={p.logo} mono={p.mono} size={48} radius={12} />
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white">{p.name}</span>
                    <RatingBadge score={p.rating} />
                    <span className="tnum text-sm font-bold text-slate-700 dark:text-slate-200">{fee(p.publishedFromUsd)}</span>
                    {i === 0 && (
                      <span className="rounded-full bg-orange-200 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.05em] text-orange-800">
                        ★ Most affordable
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 max-w-[520px] text-sm text-slate-600 dark:text-slate-300">{p.blurb}</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="inline-flex h-10 items-center rounded-[9px] bg-orange-500 px-4 text-sm font-bold text-white hover:bg-orange-600"
                >
                  Visit {p.name}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[12.5px] text-slate-400">
          Ratings aggregated from G2 and Capterra. Prices are each vendor’s lowest published plan
          with annual billing (checked Jul 2026) — month-to-month rates run higher; “Custom
          pricing” means the vendor quotes per business. Some links are
          affiliate links — this never affects our scoring. For the best tool in your trade, see the{' '}
          <Link href="/by-industry" className="font-semibold text-orange-600 dark:text-orange-400">industry guides</Link>.
        </p>

        <section className="mt-14">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Frequently asked questions
          </h2>
          <FAQSection items={faqs} />
        </section>
      </div>
    </>
  )
}
