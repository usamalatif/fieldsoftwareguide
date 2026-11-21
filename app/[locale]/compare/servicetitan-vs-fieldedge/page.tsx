import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { CalloutBox } from '@/components/CalloutBox'
import { AuthorBio } from '@/components/AuthorBio'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { articleDates } from '@/content/articles'

/**
 * /compare/servicetitan-vs-fieldedge: targets "servicetitan vs fieldedge" (and the reversed word
 * order). No GSC data for this topic yet.
 *
 * Sources: ServiceTitan pricing page (Core, Demand AI, Field AI, MAX; checked 2026-11-21), Terms of
 * Use (last updated 2026-09-16, checked 2026-11-21), 10-K, help center and dispatch page. FieldEdge
 * pricing, Premier, scheduling and roadmap pages and the Xplor US SaaS terms it links as its Service
 * Agreement (October 2023), checked 2026-11-19/20. Neither publishes prices, so none are shown.
 * Nothing tested hands-on; no ratings.
 */

const PATH = '/compare/servicetitan-vs-fieldedge'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTitan vs FieldEdge (2026): Pricing, Contracts and Dispatch'
const DESCRIPTION =
  'Neither ServiceTitan nor FieldEdge publishes prices. Compare packages, contract and renewal terms, dispatch, flat rate, agreements, offline use and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicetitan-vs-fieldedge',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceTitan vs FieldEdge', href: PATH },
]

const rows: { feature: string; st: string; fe: string }[] = [
  { feature: 'Price', st: 'Not published: Core, Demand AI, Field AI and MAX share one “Get Pricing” button', fe: 'Not published: Select, Premier and Elite all say “Request Pricing”; varies by team size and add-ons' },
  { feature: 'Who it targets', st: 'Residential and commercial trades, “four trucks in a single shop, to thousands across multiple locations”', fe: 'Multi-truck HVAC, plumbing and electrical companies' },
  { feature: 'Free trial', st: 'Demo only', fe: 'No free trial; guided onboarding instead' },
  { feature: 'Contract term', st: 'Order Form sets the term; 10-K says new customers typically sign 12 to 36 months', fe: 'Order Form sets the initial term; standard terms renew for 12 months unless notice 60 days ahead' },
  { feature: 'Leaving early', st: 'Termination fee equal to all remaining payments', fe: 'Early termination fee equal to the monthly fees for the remaining months' },
  { feature: 'Dispatch', st: 'Dispatch board with capacity planning; Dispatch Pro add-on assigns techs by skill, location and performance', fe: 'Dispatching on Select; Advanced Dispatching on Premier and Elite; boards by team, specialty or service area' },
  { feature: 'GPS', st: 'Technician locations on the dispatch map; Fleet Pro add-on for live vehicle tracking', fe: 'Real-time fleet updates (plan not stated)' },
  { feature: 'Price book', st: 'Pricebook in Core; Pricebook Pro add-on', fe: 'Price book and flat-rate pricing on every plan' },
  { feature: 'Quotes', st: 'Mobile estimates in Core; AI estimates and presentations on Field AI and MAX; Good, Better, Best proposals', fe: 'Single-option quotes on Select; up to 5 options on Premier and Elite' },
  { feature: 'Agreements', st: 'Customizable memberships in Core; agreements can auto-renew 90 days before the end date', fe: 'Basic agreements on Select; advanced (multiple per customer) on Premier and Elite' },
  { feature: 'Offline mobile', st: 'Most job work offline (status, time, signatures, notes, photos, estimates)', fe: 'Offline mode for Mobile 2.0 listed as in rolling development' },
  { feature: 'Mobile licenses', st: 'Not published', fe: '2, 4 and 6 included by plan' },
  { feature: 'QuickBooks', st: 'QuickBooks Online and Desktop, plus Sage Intacct and Xero, for all customers', fe: 'QuickBooks Online and Desktop on every plan' },
  { feature: 'Data on exit', st: 'Export on request (service fees may apply); data not kept more than 60 days after termination', fe: 'Data returned or deleted on request “to the extent reasonably practical”' },
]

const faqs = [
  {
    question: 'Is ServiceTitan more expensive than FieldEdge?',
    answer:
      'We cannot say, because neither publishes prices. ServiceTitan shows “Get Pricing” on all four packages and FieldEdge shows “Request Pricing” on all three plans. Get written quotes for the same number of technicians, office users, add-ons, onboarding and contract length, then compare the totals.',
  },
  {
    question: 'Do ServiceTitan and FieldEdge require contracts?',
    answer:
      'Both start from an Order Form that sets the term. ServiceTitan’s 10-K says new customers typically sign 12 to 36 month agreements. FieldEdge’s standard Xplor terms renew for 12 months at a time unless either side gives written notice at least 60 days before the term ends.',
  },
  {
    question: 'What happens if I cancel early?',
    answer:
      'ServiceTitan’s Terms of Use set a termination fee equal to all the remaining payments, unless ServiceTitan materially breaches and does not cure it within 30 days. FieldEdge’s standard terms set an early termination fee equal to the monthly fees times the months remaining.',
  },
  {
    question: 'Which is better for flat-rate pricing?',
    answer:
      'Both include a price book. FieldEdge includes flat-rate pricing on every plan. ServiceTitan includes its pricebook in Core and sells Pricebook Pro, with prebuilt content, as an add-on.',
  },
  {
    question: 'Which works better offline?',
    answer:
      'ServiceTitan documents most job work offline, including status, time, signatures, notes, photos and estimates; purchase orders, financing and dynamic pricing need a connection. FieldEdge lists offline mode for its Mobile 2.0 app as in rolling development, so ask what works offline today.',
  },
  {
    question: 'Can I move from FieldEdge to ServiceTitan?',
    answer:
      'Yes. ServiceTitan’s help center lists five FieldEdge exports: Customers, Dispatching, Invoices, Quotes and the Equipment List. Set invoice filters to All, or you only get the last 6 months, and check your FieldEdge renewal date first, since notice is due 60 days before the term ends.',
  },
]

const sources = [
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI and MAX packages; Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-21' },
  { name: 'ServiceTitan 10-K (contract terms, onboarding fees)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-19' },
  { name: 'ServiceTitan dispatch software (Dispatch Pro, capacity planning)', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-19' },
  { name: 'ServiceTitan help: dispatch and track technicians (Fleet Pro)', url: 'https://help.servicetitan.com/docs/dispatch-and-track-your-technicians', checked: '2026-11-17' },
  { name: 'ServiceTitan help: field mobile app offline capabilities', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-17' },
  { name: 'ServiceTitan help: auto-renew a service agreement', url: 'https://help.servicetitan.com/docs/auto-renew-a-service-agreement', checked: '2026-11-20' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-21' },
  { name: 'ServiceTitan help: export your FieldEdge data', url: 'https://help.servicetitan.com/v1/docs/export-your-fieldedge-data', checked: '2026-11-20' },
  { name: 'FieldEdge pricing (plans, feature table, FAQ)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-20' },
  { name: 'FieldEdge Premier (advanced dispatch, multiple agreements, multi-option quotes)', url: 'https://fieldedge.com/premier/', checked: '2026-11-20' },
  { name: 'FieldEdge scheduling and dispatching', url: 'https://fieldedge.com/field-service-software/scheduling-and-dispatching/', checked: '2026-11-20' },
  { name: 'FieldEdge future features (Mobile 2.0 offline mode)', url: 'https://fieldedge.com/future-features/', checked: '2026-11-20' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement (October 2023)', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-20' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceTitanVsFieldEdgePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicetitan-vs-fieldedge"
        datePublished={firstPublished}
        dateModified={contentUpdated}
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />

      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[860px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            ServiceTitan vs FieldEdge: <span className="text-orange-400">two quote-only platforms, side by side</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Packages, contract and renewal terms, dispatch, flat rate, agreements, offline use and
            QuickBooks, from each vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Neither publishes prices, so the choice comes down to scope and terms.{' '}
            <strong>ServiceTitan</strong> covers more ground: four packages with AI add-ons, Pro
            products for dispatch, fleet and price books, documented offline job work, and accounting
            integrations beyond QuickBooks. <strong>FieldEdge</strong> is simpler and includes
            flat-rate pricing and QuickBooks Online and Desktop on every plan, with advanced dispatch
            and agreements on Premier and Elite, but its offline mode is still in development. Both
            set the term in an Order Form and can charge fees for the rest of the term if you leave
            early, so read the renewal terms before you sign.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceTitan vs FieldEdge at a glance</h2>
          <p className={SUB}>
            Documented capabilities only, not a hands-on test or a score. Neither vendor publishes
            prices. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">ServiceTitan</th>
                  <th scope="col" className="p-3.5">FieldEdge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.st}</td>
                    <td className="p-3.5">{r.fe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="packages">Packages and plans</h2>
          <p>
            ServiceTitan’s pricing page, checked November 21, 2026, lists four packages behind one “Get
            Pricing” button. <strong>Core</strong> covers scheduling, dispatching, call booking,
            invoicing, pricebook, reporting, mobile estimates, configurable payroll, commission tracking
            and customizable memberships. <strong>Demand AI</strong> adds marketing and booking
            automation, <strong>Field AI</strong> adds field automation such as AI sales coaching and AI
            estimates, and <strong>MAX</strong> includes both plus office automation. Pro products such
            as Dispatch Pro, Scheduling Pro, Fleet Pro and Pricebook Pro are sold on top.
          </p>
          <p>
            FieldEdge, owned by Xplor, has three plans, Select, Premier and Elite, all marked “Request
            Pricing”. Every plan includes a price book with flat-rate pricing, QuickBooks Online and
            Desktop, integrated payments, texting and reminders. Premier and Elite add advanced
            dispatching, multiple agreements per customer and quotes with up to five options. The plans
            include 2, 4 and 6 mobile licenses, and Elite adds a dedicated customer success
            representative.
          </p>

          <h2 id="contracts">Contracts, renewals and leaving early</h2>
          <p>
            This is where the two need the closest reading. ServiceTitan’s Terms of Use (September 2026)
            say your Order Form sets the term; without one, subscriptions run month to month and renew
            unless either side gives 30 days’ written notice. Ending before the term is over means a
            termination fee equal to all the remaining payments, unless ServiceTitan materially breaches
            and does not cure it within 30 days. Fees are non-refundable, and its 10-K says new
            customers typically sign 12 to 36 month agreements, with onboarding fees invoiced
            separately.
          </p>
          <p>
            FieldEdge links Xplor’s US terms (October 2023) as its Service Agreement. Your Order Form
            sets the initial term; after that, the agreement renews for 12 months at a time unless either
            side gives written notice at least 60 days before the term ends. Ending early can trigger a
            fee equal to the monthly fees times the remaining months. Xplor can raise fees with two
            months’ notice, and if an increase is above CPI you can terminate without penalty by giving
            notice within 10 days.
          </p>

          <h2 id="dispatch">Dispatch and scheduling</h2>
          <p>
            ServiceTitan’s dispatch board includes capacity planning that books against technician hours
            per arrival window, and its Dispatch Pro add-on assigns techs by skill, location and
            performance. Fleet Pro adds live vehicle tracking. FieldEdge includes call booking,
            scheduling and dispatching on every plan, with advanced dispatching on Premier and Elite; its
            scheduling page describes assigning techs by skill set, location and workload and dispatch
            boards by team, specialty or service area, without naming the plan. Our{' '}
            <Link href="/guides/hvac-dispatch-software" className={A}>HVAC dispatch software</Link> guide
            compares both with other tools.
          </p>

          <h2 id="pricebook-agreements">Price book, quotes and agreements</h2>
          <p>
            FieldEdge includes flat-rate pricing on every plan and multi-option quotes from Premier.
            ServiceTitan includes its pricebook and mobile estimates in Core, AI estimates and
            presentations on Field AI and MAX, and sells Pricebook Pro as an add-on. For maintenance
            agreements, ServiceTitan lists customizable memberships in Core and can auto-renew agreements
            90 days before the end date once configured; FieldEdge offers basic agreements on Select and
            multiple agreements per customer on Premier and Elite. See our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide.
          </p>

          <h2 id="offline-accounting">Offline mobile and accounting</h2>
          <p>
            ServiceTitan’s field app handles most job work offline, including status, time, signatures,
            notes, photos and estimates, while purchase orders, financing, contracts, inventory
            availability and dynamic pricing need a connection. FieldEdge’s roadmap lists offline mode
            for its Mobile 2.0 app as in rolling development, so ask what works offline today. Both
            support QuickBooks Online and Desktop; ServiceTitan also integrates with Sage Intacct and
            Xero. Our <Link href="/quickbooks" className={A}>QuickBooks guide</Link> covers more tools.
          </p>

          <h2 id="data">Getting your data out</h2>
          <p>
            ServiceTitan’s terms say it will export your data on request, that service fees may apply, and
            that it does not have to keep the data more than 60 days after termination. Xplor’s terms say
            it returns or deletes personal data on request “to the extent reasonably practical”.
            ServiceTitan’s help center lists five FieldEdge exports (Customers, Dispatching, Invoices,
            Quotes and the Equipment List); set invoice filters to All, or you only get the last 6 months.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Multi-location or fast-growing shop with dispatchers and a call center:</strong> ServiceTitan, for capacity planning, Pro add-ons and broader accounting integrations.</li>
            <li><strong>Shop on QuickBooks Desktop that prices by flat rate:</strong> FieldEdge, which includes both on every plan.</li>
            <li><strong>Techs who often work without signal:</strong> ServiceTitan, which documents offline job work today.</li>
            <li><strong>Want a published price and month-to-month terms:</strong> compare <Link href="/compare/servicetitan-alternatives" className={A}>ServiceTitan alternatives</Link> and <Link href="/compare/fieldedge-alternatives" className={A}>FieldEdge alternatives</Link> with published prices.</li>
          </ul>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: ServiceTitan vs FieldEdge">
            ServiceTitan is the broader platform, with AI packages, Pro add-ons and documented offline
            work. FieldEdge is simpler and includes flat rate and QuickBooks Desktop on every plan. Both
            are quote only and bind you to an Order Form term, so compare written quotes and the renewal
            notice periods (30 days for ServiceTitan month-to-month, 60 days for FieldEdge) before you
            sign. Our <Link href="/how-we-review" className={A}>review method</Link> explains why we show
            only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/compare/housecall-pro-vs-servicetitan" className="text-orange-600 hover:text-orange-800">Housecall Pro vs ServiceTitan →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
          </div>
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
      </div>
    </>
  )
}
