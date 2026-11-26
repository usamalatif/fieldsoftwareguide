import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Field Service Management Software Guides (2026)',
  description:
    'Plain-English guides to choosing field service management software: what FSM software is, how to choose it, pricing, QuickBooks integration, and free options.',
  slug: 'guides',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
]

const guides = [
  { title: 'FSM software by industry', desc: 'Find the best tool for your trade — HVAC, plumbing, and more.', href: '/by-industry', tag: 'Start here' },
  { title: 'Best FSM software 2026', desc: 'The major platforms compared on published price and best fit.', href: '/compare', tag: 'Compare' },
  { title: 'FSM software by business size', desc: 'Solo operator to enterprise — the right fit for your team size.', href: '/by-size', tag: 'By size' },
  { title: 'Free FSM software', desc: 'What you can actually run for free, and where the limits are.', href: '/free', tag: 'Free' },
  { title: 'Field service software pricing (2026)', desc: 'Published prices, 1 to 15 user costs, add-ons, and payment fees for six platforms.', href: '/pricing', tag: 'Pricing' },
  { title: 'Housecall Pro pricing (2026)', desc: 'Every Housecall Pro plan, user limit, add-on, and payment fee, from its own pages.', href: '/pricing/housecall-pro', tag: 'Pricing' },
  { title: 'Jobber pricing (2026)', desc: 'Every Jobber plan by team size and billing option, plus add-ons and payment fees.', href: '/pricing/jobber', tag: 'Pricing' },
  { title: 'Refrigerant tracking software (2026)', desc: 'Seven refrigerant compliance tools compared on leak-rate math, EPA and CARB reports, and pricing.', href: '/guides/refrigerant-tracking-software', tag: 'Compliance' },
  { title: 'FSM software for QuickBooks', desc: 'Which tools sync with QuickBooks Online and Desktop, and the plan you need.', href: '/quickbooks', tag: 'QuickBooks' },
  { title: 'FSM software for small business', desc: 'What a solo operator or small crew should buy, with verified entry pricing.', href: '/for-small-business', tag: 'Small business' },
  { title: 'How we review', desc: 'Our pricing-confidence standard and how rankings are decided.', href: '/how-we-review', tag: 'Methodology' },
  { title: 'HVAC dispatch software (2026)', desc: 'Seven HVAC dispatch and scheduling tools compared on which plan includes routing, GPS and maintenance visits.', href: '/guides/hvac-dispatch-software', tag: 'Dispatch' },
  { title: 'Commercial HVAC software (2026)', desc: 'Seven tools for commercial HVAC contractors compared on multi-site accounts, PM agreements and progress billing.', href: '/guides/commercial-hvac-software', tag: 'Commercial' },
  { title: 'HVAC maintenance agreement software (2026)', desc: 'Eight tools compared on which plan includes memberships, how visits get scheduled, autopay and renewals.', href: '/guides/hvac-maintenance-agreement-software', tag: 'Agreements' },
  { title: 'Field service quoting software (2026)', desc: 'Which plan unlocks quote options, e-signature, deposits, follow-ups and financing in eight tools.', href: '/guides/field-service-quoting-software', tag: 'Quoting' },
  { title: 'Field service invoicing software (2026)', desc: 'Card and ACH fees, payment reminders, progress billing and QuickBooks sync compared by plan.', href: '/guides/field-service-invoicing-software', tag: 'Invoicing' },
  { title: 'Open source field service software', desc: 'OCA Field Service, Dolibarr, ERPNext, Axelor and newer projects, checked against their licenses.', href: '/guides/open-source-field-service-software', tag: 'Open source' },
  { title: 'Field service scheduling software (2026)', desc: 'Ten tools compared by plan on dispatch boards, online booking, recurring jobs, on-my-way texts and GPS.', href: '/guides/field-service-scheduling-software', tag: 'Scheduling' },
  { title: 'Route optimization software (2026)', desc: 'Which tools document automatic routing, on which plan, and how vehicle GPS is sold.', href: '/guides/route-optimization-software', tag: 'Routing' },
  { title: 'Offline field service apps (2026)', desc: 'What ten apps let technicians do with no signal, from each vendor’s help center.', href: '/guides/offline-field-service-app', tag: 'Mobile' },
  { title: 'AI answering service for contractors (2026)', desc: 'AI phone agents from field service vendors: booking, languages and published prices.', href: '/guides/ai-answering-service-for-contractors', tag: 'Phones' },
  { title: 'Field service inventory management software (2026)', desc: 'Truck and warehouse stock, parts deduction, reorders and purchase orders by plan.', href: '/guides/field-service-inventory-management-software', tag: 'Inventory' },
  { title: 'Field service software contracts (2026)', desc: 'Term length, auto-renewal, notice to cancel, price caps, refunds and data on exit for 13 tools.', href: '/guides/field-service-software-contract-terms', tag: 'Contracts' },
  { title: 'Subcontractor management software (2026)', desc: 'How nine tools charge for, schedule and restrict subcontractors, from day-rate seats to free connections.', href: '/guides/subcontractor-management-software', tag: 'Subcontractors' },
  { title: 'Job costing software for contractors (2026)', desc: 'Which plan unlocks job costing in 11 tools and what each tracks: labor, materials, bills and markup.', href: '/guides/job-costing-software-for-contractors', tag: 'Job costing' },
  { title: 'Contractor time tracking software (2026)', desc: 'Clock in, job timers, GPS on time entries, payroll export and timesheet-only users in 10 tools.', href: '/guides/contractor-time-tracking-software', tag: 'Timesheets' },
  { title: 'HVAC software guide', desc: 'The highest-demand trade guide — real pricing and top picks.', href: '/by-industry/hvac', tag: 'Popular' },
]

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[760px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Field service software guides
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Everything you need to choose the right FSM tool, explained simply — with real pricing
            and sources.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <div className="mb-10 max-w-3xl">
          <AnswerBlock>
            <p>
              These guides explain how to choose field service management (FSM) software — the tools
              that run scheduling, dispatch, work orders, invoicing, and payments for service
              businesses. Start with your industry, since the best tool for HVAC is not the best for
              a rental yard or a telecom crew. From there, compare the major platforms on real
              published pricing and fit, size the choice to your team, and check what free options can
              actually do. Every guide names specific tools and prices, checks figures against each
              vendor’s own pricing page, and stays independent so you can decide quickly.
            </p>
          </AnswerBlock>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-[0_8px_24px_-14px_rgba(249,115,22,.45)] dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-orange-600 dark:text-orange-400">{g.tag}</span>
              <h2 className="mt-1.5 text-lg font-extrabold tracking-[-0.01em] text-slate-900 group-hover:text-orange-600 dark:text-white">{g.title}</h2>
              <p className="mt-1.5 text-sm leading-[1.55] text-slate-500 dark:text-slate-400">{g.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
