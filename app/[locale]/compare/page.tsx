import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { ProviderLogo } from '@/components/ProviderLogo'
import { providers } from '@/lib/providers'

export const metadata = buildMetadata({
  title: 'Best Field Service Management Software (2026)',
  description:
    'Independent comparison of the best FSM software: Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, and Commusoft by price, features, and best use case.',
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
      'Prices come from each vendor’s own pricing page and are dated. Some links are affiliate links and we may earn a commission, but that never changes the order or recommendations.',
  },
  {
    question: 'Does FSM software work with QuickBooks?',
    answer:
      'Most major tools — Jobber, Housecall Pro, ServiceTitan, Workiz — integrate with QuickBooks so invoices and payments sync automatically. Confirm QuickBooks Online vs Desktop support for your setup.',
  },
]

const order = ['jobber', 'housecall-pro', 'servicetitan', 'workiz', 'fieldpulse', 'commusoft']

/** Which tool to start with, by situation. Each row links to the guide that backs it. */
const byNeed: { need: string; start: string; href: string; guide: string }[] = [
  { need: 'Solo operator or small crew', start: 'Jobber or Housecall Pro', href: '/for-small-business', guide: 'Small business guide' },
  { need: 'Accounting runs on QuickBooks Desktop', start: 'Housecall Pro, ServiceTitan, Workiz, or FieldPulse', href: '/quickbooks', guide: 'QuickBooks guide' },
  { need: 'Crews work at sites with no signal', start: 'FieldPulse or Workiz', href: '/by-industry/oil-gas', guide: 'Oil & gas guide' },
  { need: 'Flat-rate pricing on every job', start: 'ServiceTitan, Housecall Pro, FieldPulse, or Workiz', href: '/by-industry/plumbing', guide: 'Plumbing guide' },
  { need: 'Large commercial HVAC or trades operation', start: 'ServiceTitan', href: '/by-industry/hvac', guide: 'HVAC guide' },
  { need: 'Maintaining a rental equipment fleet', start: 'A rental platform, plus FieldPulse for service work', href: '/by-industry/equipment-rental', guide: 'Equipment rental guide' },
  { need: 'Paying nothing to start', start: 'Odoo One App Free, or a 14-day Jobber / Housecall Pro trial', href: '/free', guide: 'Free FSM software guide' },
]

/** Sourced strengths and limitations (see Sources below for check dates). */
const prosCons: { name: string; pros: string[]; cons: string[] }[] = [
  {
    name: 'Jobber',
    pros: ['Lowest published entry plan: Core at $29/month billed annually', '14-day free trial with no credit card'],
    cons: ['No QuickBooks sync on Core, and QuickBooks Online only (no Desktop)', 'No documented offline mode and no dedicated flat-rate pricebook'],
  },
  {
    name: 'Housecall Pro',
    pros: ['Published plans: Basic $59, Essentials $149 (up to 5 users), MAX $299 (up to 8 users), billed annually', 'QuickBooks Online sync from Essentials; Desktop also supported (confirm the plan)'],
    cons: ['No QuickBooks sync on Basic', 'Mobile app documents offline viewing only, not editing'],
  },
  {
    name: 'ServiceTitan',
    pros: ['Documented QuickBooks Online and Desktop integrations', 'Native flat-rate pricebook and installed-equipment records'],
    cons: ['Custom quote only', 'No self-serve trial; demo only'],
  },
  {
    name: 'Workiz',
    pros: ['7-day free trial with no credit card', 'Crews can update jobs offline; QuickBooks Online and Desktop documented'],
    cons: ['No published price on any plan; every tier is “Request pricing”'],
  },
  {
    name: 'FieldPulse',
    pros: ['Switches to offline mode automatically out of cell range', 'Asset Management with serials, warranties, and barcode scanning'],
    cons: ['Custom quote only', 'No self-serve trial; demo only, per its own pricing FAQ'],
  },
  {
    name: 'Commusoft',
    pros: ['Asset maintenance records and digital forms', 'Dedicated commercial refrigeration product'],
    cons: ['Lists a QuickBooks Online integration only', '12-month licenses built for 6+ staff; no self-serve trial'],
  },
]

const sources = [
  { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-24' },
  { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
  { name: 'Housecall Pro mobile app (offline viewing)', url: 'https://www.housecallpro.com/features/mobile-app/', checked: '2026-07-08' },
  { name: 'Workiz pricing (7-day trial, request pricing)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-10-24' },
  { name: 'Workiz mobile app (offline access)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-07-08' },
  { name: 'ServiceTitan pricing (demo only)', url: 'https://www.servicetitan.com/pricing', checked: '2026-07-08' },
  { name: 'ServiceTitan QuickBooks Desktop docs', url: 'https://help.servicetitan.com/docs/quickbooks-desktop-1', checked: '2026-07-16' },
  { name: 'ServiceTitan installed equipment', url: 'https://help.servicetitan.com/docs/installed-equipment-landing-page', checked: '2026-07-08' },
  { name: 'FieldPulse offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-07-08' },
  { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-10-22' },
  { name: 'FieldPulse pricing (no-trial FAQ)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-07-08' },
  { name: 'Commusoft plans (license model)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-07-08' },
  { name: 'Commusoft QuickBooks Online integration', url: 'https://www.commusoft.com/en-us/integrations/quickbook-online/', checked: '2026-07-16' },
  { name: 'Commusoft commercial refrigeration', url: 'https://www.commusoft.com/en-us/industries/refrigeration-software/', checked: '2026-07-08' },
  { name: 'Commusoft digital forms', url: 'https://www.commusoft.com/en-gb/features/digital-forms-software/', checked: '2026-07-08' },
  { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-07-08' },
  { name: 'Jobber plumbing software (line items, no flat-rate pricebook)', url: 'https://www.getjobber.com/industries/plumbing-software/', checked: '2026-07-08' },
]

export default function ComparePage() {
  const list = order.map((s) => providers[s]).filter(Boolean)
  const fee = (n: number | null) => (n != null ? `from $${n}/mo (annual)` : 'Custom pricing')
  return (
    <>
      <ArticleJsonLd
        headline="Best Field Service Management Software (2026)"
        description="Independent comparison of the major FSM platforms by published price, features, and best use case, with sourced strengths and limitations."
        slug="compare"
        dateModified="2026-10-24"
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            The best field service management software in 2026
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            An independent look at the major FSM platforms — compared on published pricing,
            features, and where each one fits best. We earn commission, never on ranking.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock>
          <p>
            The best field service management (FSM) software in 2026 are Jobber, Housecall Pro,
            ServiceTitan, Workiz, FieldPulse, and Commusoft — the major platforms that combine
            scheduling, dispatch, invoicing, and mobile field apps. There is no
            universal winner: Jobber (from $29/month billed annually) is the most affordable
            published option and Housecall Pro (from $59/month billed annually) is built for
            small home-service teams, while
            ServiceTitan is the enterprise standard for larger commercial trades and is
            custom-quoted. Workiz, FieldPulse, and Commusoft round out the mid-market, also on
            custom pricing. The comparison below is independent — listed by published price, then
            custom-quoted tools, never by commission. For the right pick in your trade, open your
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
          Prices are each vendor’s lowest published plan
          with annual billing (check dates are in the sources below) — month-to-month rates run higher; “Custom
          pricing” means the vendor quotes per business. Some links are
          affiliate links — this never affects the order. For the best tool in your trade, see the{' '}
          <Link href="/by-industry" className="font-semibold text-orange-600 dark:text-orange-400">industry guides</Link>.
        </p>

        <section className="mt-14" aria-labelledby="by-need-heading">
          <h2 id="by-need-heading" className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Which field service software should you choose?
          </h2>
          <p className="mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            Start from the constraint that rules tools out fastest. Each guide has the sourced details.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-4">Your situation</th>
                  <th scope="col" className="p-4">Start with</th>
                  <th scope="col" className="p-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {byNeed.map((r) => (
                  <tr key={r.need}>
                    <th scope="row" className="p-4 font-semibold text-slate-900 dark:text-white">{r.need}</th>
                    <td className="p-4">{r.start}</td>
                    <td className="p-4">
                      <Link href={r.href} className="font-semibold text-orange-600 hover:underline dark:text-orange-400">{r.guide}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="pros-cons-heading">
          <h2 id="pros-cons-heading" className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Pros and cons of each FSM platform
          </h2>
          <p className="mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            Taken from vendor pricing pages and help documentation; check dates are in the sources below.
          </p>
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            {prosCons.map((t) => (
              <article key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{t.name}</h3>
                <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">Pros</p>
                <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[14px] leading-[1.55] text-slate-700 dark:text-slate-300">
                  {t.pros.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">Cons</p>
                <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[14px] leading-[1.55] text-slate-700 dark:text-slate-300">
                  {t.cons.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[14px] leading-[1.7] text-slate-600 dark:text-slate-300">
            The list above is ordered by published price, then custom-quoted tools; it is not a
            score. We do not publish star ratings. See{' '}
            <Link href="/how-we-review" className="font-semibold text-orange-600 dark:text-orange-400">how we review</Link>{' '}
            for the full method, our{' '}
            <Link href="/pricing/housecall-pro" className="font-semibold text-orange-600 dark:text-orange-400">Housecall Pro pricing</Link>{' '}
            breakdown, or the head-to-head{' '}
            <Link href="/compare/jobber-vs-housecall-pro" className="font-semibold text-orange-600 dark:text-orange-400">Jobber vs Housecall Pro</Link>{' '}
            comparison.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Frequently asked questions
          </h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Sources</p>
          <ul className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="nofollow noopener" className="hover:text-orange-600">
                  {s.name}
                </a>{' '}
                <span className="text-slate-400">· checked {s.checked}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
