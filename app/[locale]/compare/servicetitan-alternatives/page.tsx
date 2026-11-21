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
 * /compare/servicetitan-alternatives: targets "servicetitan alternatives" and "servicetitan
 * competitors". No GSC data for this topic yet.
 *
 * 2026-11-21: ServiceTitan's pricing page now lists packages Core, Demand AI, Field AI and MAX
 * with a "Get Pricing" button and no per-technician wording (older pages on this site, checked
 * 2026-11-17 to 11-19, describe Starter, Essentials and The Works). This page uses the
 * 2026-11-21 wording only. Terms of Use (last updated 2026-09-16) read in full on 2026-11-21.
 * 10-K facts reuse the 2026-11-17/19 checks (403 on 2026-11-21, not retried). Housecall Pro
 * facts reuse the site's verified pages; www.housecallpro.com was not refetched. Nothing tested
 * hands-on. We do not claim why customers leave ServiceTitan.
 */

const PATH = '/compare/servicetitan-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTitan Alternatives (2026): Prices, Contracts and QuickBooks'
const DESCRIPTION =
  'ServiceTitan publishes no prices and its terms charge the remaining payments if you leave early. Compare 8 alternatives on price, contracts and data export.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicetitan-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceTitan alternatives', href: PATH },
]

type Row = {
  name: string
  price: string
  contract: string
  dispatch: string
  agreements: string
  quickbooks: string
}

const rows: Row[] = [
  {
    name: 'ServiceTitan (for reference)',
    price: 'Not published (“Get Pricing”); packages Core, Demand AI, Field AI, MAX',
    contract: 'Order Form sets the term; leaving early costs all remaining payments',
    dispatch: 'Dispatch board, capacity planning; Dispatch Pro add-on',
    agreements: 'Customizable memberships in Core',
    quickbooks: 'Online, Desktop (Pro, Premier, Enterprise), Sage Intacct, Xero',
  },
  {
    name: 'Housecall Pro',
    price: '$59, $149, $299 per month billed annually (1, 5, 8 users)',
    contract: 'No long-term contract required; 14-day trial',
    dispatch: 'Drag-and-drop dispatch; route optimization on MAX',
    agreements: 'Recurring Service Plans on MAX',
    quickbooks: 'Online and Desktop listed on Essentials',
  },
  {
    name: 'Jobber',
    price: 'From $29 per month billed annually; 15 users up to $529 on Plus',
    contract: 'No commitment, 1-year or annual billing; renews automatically unless set to non-renew',
    dispatch: 'Drag-and-drop schedule; route optimization from Connect',
    agreements: 'Recurring jobs with automatic payments',
    quickbooks: 'Online only (and Xero)',
  },
  {
    name: 'FieldEdge',
    price: 'Not published (“Request Pricing”); no free trial',
    contract: 'Published terms renew yearly with 60 days’ notice',
    dispatch: 'Advanced dispatching on Premier and Elite',
    agreements: 'Basic on Select; advanced on Premier and Elite',
    quickbooks: 'Online and Desktop on every plan',
  },
  {
    name: 'Service Fusion',
    price: '$220, $339, $552 per month billed annually; unlimited users',
    contract: 'Month to month; 15% off annual',
    dispatch: 'Scheduling and dispatching on every plan',
    agreements: 'Recurring invoicing on Pro, add-on below',
    quickbooks: 'Online and Desktop',
  },
  {
    name: 'FieldPulse',
    price: 'Not published; seat-based',
    contract: 'Not stated on the pages we read',
    dispatch: 'Drag-and-drop dispatch by team, service type or priority',
    agreements: 'Maintenance agreements on the same dispatch board',
    quickbooks: 'Online and Desktop 2024 or newer',
  },
  {
    name: 'Workiz',
    price: 'Not published (“Request pricing”); 7-day trial',
    contract: 'Annual plans save “$400+”',
    dispatch: 'Drag-and-drop calendar on every plan',
    agreements: 'Service plans on Ultimate only',
    quickbooks: 'Online on every plan; its QuickBooks page says Desktop is supported',
  },
  {
    name: 'BuildOps (commercial)',
    price: 'Not published; by field and office users',
    contract: 'Not stated; most go live in 8 to 12 weeks',
    dispatch: 'Commercial dispatch and projects',
    agreements: 'Recurring PM visits generated from agreements',
    quickbooks: 'QuickBooks plus Viewpoint, Sage Intacct, NetSuite',
  },
  {
    name: 'ServiceTrade (commercial)',
    price: 'Not published; by technicians, office users free',
    contract: 'Not stated on the pages we read',
    dispatch: 'Commercial service scheduling',
    agreements: 'Planned maintenance and contract work',
    quickbooks: 'QuickBooks on Select',
  },
]

const cols: { key: keyof Omit<Row, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price' },
  { key: 'contract', label: 'Contract and trial' },
  { key: 'dispatch', label: 'Dispatch' },
  { key: 'agreements', label: 'Memberships / agreements' },
  { key: 'quickbooks', label: 'Accounting' },
]

const faqs = [
  {
    question: 'How much does ServiceTitan cost?',
    answer:
      'ServiceTitan does not publish prices. Its pricing page lists four packages, Core, Demand AI, Field AI and MAX, behind a Get Pricing button, and says pricing is built around your business. Its annual report says onboarding and training fees are generally invoiced separately.',
  },
  {
    question: 'Can I cancel ServiceTitan early?',
    answer:
      'ServiceTitan’s Terms of Use say your Order Form sets the term, and that ending the agreement before the term is over means a termination fee equal to all the remaining payments, with an exception if ServiceTitan materially breaches. Without an Order Form, subscriptions run month to month and renew unless either side gives at least 30 days’ written notice.',
  },
  {
    question: 'What is the cheapest ServiceTitan alternative?',
    answer:
      'Jobber Core is $29 a month billed annually for one user and Housecall Pro Basic is $59. For a larger team on one price, Service Fusion lists unlimited users from $220 a month billed annually, on month-to-month terms.',
  },
  {
    question: 'Which ServiceTitan alternatives support QuickBooks Desktop?',
    answer:
      'FieldEdge includes QuickBooks Online and Desktop on every plan, Service Fusion and FieldPulse (Desktop 2024 or newer) document Desktop sync, Housecall Pro lists it on Essentials, and Workiz’s QuickBooks page says it supports Desktop. Jobber is QuickBooks Online only.',
  },
  {
    question: 'How do I export my data from ServiceTitan?',
    answer:
      'ServiceTitan’s help center documents exporting your full customer list to Excel and exporting reports to XLSX or PDF. Its Terms of Use say it will make commercially reasonable efforts to export your data on request, that service fees may apply, and that it is not obligated to keep the data more than 60 days after termination.',
  },
  {
    question: 'Which alternatives help migrate from ServiceTitan?',
    answer:
      'FieldPulse publishes a ServiceTitan migration guide for importing customers and the pricebook, with a map of matching terms. Housecall Pro says MAX customers can work with its data import team and that its basic transfer option is free. Service Fusion offers import templates and data extraction services.',
  },
]

const sources = [
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX; Get Pricing; Pro add-ons)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-21' },
  { name: 'ServiceTitan 10-K (contract terms, onboarding fees)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-19' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-21' },
  { name: 'ServiceTitan help: export customers to Excel', url: 'https://help.servicetitan.com/v1/docs/what-is-the-process-for-exporting-a-list-of-customers-to-exc', checked: '2026-11-21' },
  { name: 'ServiceTitan help: run, filter and export reports', url: 'https://help.servicetitan.com/commercial/docs/run-filter-and-export-reports', checked: '2026-11-21' },
  { name: 'ServiceTitan dispatch software', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-19' },
  { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: importing customers (data import team, free basic transfer)', url: 'https://help.housecallpro.com/en/articles/136068-what-are-the-options-for-importing-my-customers-into-housecall-pro', checked: '2026-11-21' },
  { name: 'Jobber pricing (plans, renewal, trial)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'FieldEdge pricing', url: 'https://fieldedge.com/pricing/', checked: '2026-11-20' },
  { name: 'Xplor US SaaS terms (FieldEdge service agreement)', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-20' },
  { name: 'Service Fusion pricing', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-20' },
  { name: 'Service Fusion blog: implementation and data import', url: 'https://www.servicefusion.com/blog/overview-of-implementation', checked: '2026-11-20' },
  { name: 'FieldPulse pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-20' },
  { name: 'FieldPulse help: ServiceTitan to FieldPulse migration guide', url: 'https://help.fieldpulse.com/en/articles/15170775-servicetitan-to-fieldpulse-migration-guide', checked: '2026-11-21' },
  { name: 'FieldPulse help: QuickBooks Desktop pre-sync', url: 'https://help.fieldpulse.com/en/articles/8292219-pre-sync-quickbooks-desktop', checked: '2026-11-20' },
  { name: 'Workiz pricing plans', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-20' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-20' },
  { name: 'BuildOps pricing', url: 'https://buildops.com/pricing', checked: '2026-11-19' },
  { name: 'ServiceTrade pricing', url: 'https://servicetrade.com/pricing/', checked: '2026-11-19' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceTitanAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicetitan-alternatives"
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
            ServiceTitan alternatives: <span className="text-orange-400">prices, contracts and data export</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Eight alternatives compared on published pricing, contract terms, dispatch, memberships
            and accounting, from each vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            ServiceTitan publishes no prices, and its Terms of Use charge all remaining payments if
            you end an agreement early. If you want published prices and no long-term contract, look
            at <strong>Housecall Pro</strong> (from $59/month billed annually) or{' '}
            <strong>Service Fusion</strong> (unlimited users from $220/month, month to month). For
            small teams, <strong>Jobber</strong> starts at $29/month but syncs with QuickBooks Online
            only. <strong>FieldEdge</strong> is the closest match for dispatch, agreements and
            QuickBooks Desktop, though it is also quote-only with yearly renewals. For commercial work,{' '}
            <strong>BuildOps</strong> and <strong>ServiceTrade</strong> price by quote. Before you
            switch, check your Order Form’s end date and export your data.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="servicetitan">What ServiceTitan offers and how it sells</h2>
          <p>
            ServiceTitan’s pricing page lists four packages: Core (scheduling, dispatching, call
            booking, invoicing, pricebook, reporting, mobile estimates, payroll, commission tracking and
            customizable memberships), Demand AI (marketing automation, online scheduling, voice and
            SMS agents and smart dispatching), Field AI (AI sales coaching, equipment intelligence and
            AI estimates) and MAX (office automation and advanced analytics). It says all packages are
            available to in-home residential customers, with MAX pilots launching for other business
            types. Prices are behind a Get Pricing button. Pro add-ons such as Dispatch Pro,
            Scheduling Pro, Fleet Pro and Pricebook Pro are sold separately. Its annual report says
            onboarding and training fees are generally invoiced separately.
          </p>

          <h2 id="contract">ServiceTitan contract terms to check before you switch</h2>
          <p>Its Terms of Use, last updated September 16, 2026, say:</p>
          <ul>
            <li>Your <strong>Order Form</strong> sets the term. Without one, subscriptions run month to month and renew unless either side gives at least <strong>30 days’</strong> written notice.</li>
            <li>Ending the agreement before the term is over means a <strong>termination fee equal to all the remaining payments</strong>, unless ServiceTitan materially breaches and does not cure it.</li>
            <li>All fees are <strong>non-refundable</strong>, and if you agreed to a minimum number of subscriptions, you pay for at least that many for the term.</li>
            <li>On request, ServiceTitan will make commercially reasonable efforts to <strong>export your data</strong> (service fees may apply) and does not have to keep it more than <strong>60 days</strong> after termination.</li>
          </ul>
          <p>
            Its annual report says new customers mostly sign annual or multi-year agreements, typically
            12 to 36 months. Put your term end date in the calendar and export before you give notice.
          </p>

          <h2 id="when-to-stay">When ServiceTitan may still be the better fit</h2>
          <p>
            ServiceTitan documents capacity planning by arrival window, memberships with member
            pricing, auto-renewing service agreements, deferred revenue and accounting integrations
            with QuickBooks Desktop and Online, Sage Intacct and Xero. If you run a call center and
            several dispatchers, few alternatives document as much, and switching mid-contract costs
            the remaining payments.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceTitan alternatives compared</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Prices
            are USD standard rates. Sources and check dates are at the end of this page.
          </p>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 lg:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3">Software</th>
                  {cols.map((c) => <th key={c.key} scope="col" className="p-3">{c.label}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((t) => (
                  <tr key={t.name} className="align-top">
                    <th scope="row" className="p-3 font-semibold text-slate-900 dark:text-white">{t.name}</th>
                    {cols.map((c) => <td key={c.key} className="p-3">{t[c.key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3.5 lg:hidden">
            {rows.map((t) => (
              <article key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{t.name}</h3>
                <dl className="mt-2 space-y-2 text-[14px] leading-[1.55]">
                  {cols.map((c) => (
                    <div key={c.key}>
                      <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">{c.label}</dt>
                      <dd className="text-slate-700 dark:text-slate-300">{t[c.key]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="alternatives">The alternatives</h2>

          <h3>Housecall Pro</h3>
          <p>
            <strong>Best fit:</strong> residential shops that want published prices and no long-term
            contract. Basic is $59 a month billed annually, Essentials $149 for five users and MAX $299
            for eight, with a 14-day trial. Its plan data lists QuickBooks Online and Desktop and
            customer equipment tracking on Essentials, and Recurring Service Plans and route
            optimization are on MAX. It says MAX customers can work with its data import team and that
            its basic transfer option is free. <strong>Limitation:</strong> offline mode is view-only,
            and it does not document capacity planning. See{' '}
            <Link href="/compare/housecall-pro-vs-servicetitan" className={A}>Housecall Pro vs ServiceTitan</Link>.
          </p>

          <h3>Jobber</h3>
          <p>
            <strong>Best fit:</strong> smaller crews. Plans start at $29 a month billed annually for one
            user and reach $529 for 15 users on Plus, with a 14-day trial and route optimization from
            Connect. <strong>Limitation:</strong> QuickBooks Online only, no membership module and no
            flat-rate price book documented, so it covers less than a ServiceTitan shop is used to. See{' '}
            <Link href="/compare/servicetitan-vs-jobber" className={A}>ServiceTitan vs Jobber</Link>.
          </p>

          <h3>FieldEdge</h3>
          <p>
            <strong>Best fit:</strong> residential HVAC, plumbing and electrical shops that want
            dispatch, agreements, flat rate and QuickBooks Desktop on every plan.{' '}
            <strong>Limitation:</strong> no published prices or free trial, and its published terms
            renew for 12 months unless you give 60 days’ notice. See{' '}
            <Link href="/compare/fieldedge-alternatives" className={A}>FieldEdge alternatives</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>Best fit:</strong> growing teams that want unlimited users on a published price and
            month-to-month terms. Plans are $220, $339 and $552 a month billed annually, with
            QuickBooks Online and Desktop, import templates and data extraction services.{' '}
            <strong>Limitation:</strong> recurring invoicing for agreements is included only on Pro,
            and offline use is not documented on the pages we read.
          </p>

          <h3>FieldPulse</h3>
          <p>
            <strong>Best fit:</strong> teams that want offline mobile work and QuickBooks Desktop.
            FieldPulse publishes a ServiceTitan migration guide covering customers and the pricebook,
            with a map of terms (a ServiceTitan membership becomes a FieldPulse maintenance agreement).{' '}
            <strong>Limitation:</strong> no published prices or trial, the Pricebook is a paid add-on,
            and the guide does not cover jobs, invoices or equipment.
          </p>

          <h3>Workiz</h3>
          <p>
            <strong>Best fit:</strong> smaller residential teams that want a quick trial. Workiz offers 7
            days with no credit card and a drag-and-drop calendar on every plan.{' '}
            <strong>Limitation:</strong> no published prices, and flat rate, service plans and equipment
            tracking are on Ultimate only.
          </p>

          <h3>For commercial work: BuildOps and ServiceTrade</h3>
          <p>
            BuildOps prices by field and office users, generates PM visits from agreements and integrates
            with QuickBooks, Viewpoint, Sage Intacct and NetSuite; it says most businesses go live in 8 to
            12 weeks. ServiceTrade prices by technician with office users free and positions itself for
            commercial service teams only. Both price by quote. See our{' '}
            <Link href="/guides/commercial-hvac-software" className={A}>commercial HVAC software</Link> guide.
          </p>

          <h2 id="migration">Moving your data out of ServiceTitan</h2>
          <p>
            ServiceTitan’s help center documents exporting your full customer list to Excel (with no
            filters applied) and exporting any report to XLSX or PDF, and its General CSV export covers
            accounting data. Its terms add an on-request export, with possible service fees, within 60
            days of termination. We found no ServiceTitan document on exporting memberships, the
            pricebook or attachments, so ask before you give notice. On the receiving side, FieldPulse
            and Housecall Pro document imports from ServiceTitan, and Service Fusion offers import
            templates.
          </p>

          <h2 id="switching-checklist">Before you switch: a checklist</h2>
          <ol>
            <li>Find your Order Form’s term end date and the notice it requires.</li>
            <li>Run the customer export and the reports you need while you still have access.</li>
            <li>Request any other data in writing and ask what fees apply.</li>
            <li>Confirm the new tool’s plan covers memberships, dispatch needs and your QuickBooks version.</li>
            <li>Get the new vendor’s price, contract length and renewal terms in writing.</li>
          </ol>
          <p>
            For list prices across tools, see our{' '}
            <Link href="/pricing" className={A}>field service software pricing</Link> guide, and for
            dispatch features by plan, our{' '}
            <Link href="/guides/hvac-dispatch-software" className={A}>HVAC dispatch software</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on ServiceTitan alternatives">
            Housecall Pro and Service Fusion are the published-price options without long contracts,
            Jobber is the cheapest for small crews, and FieldEdge is the closest match in features, on
            yearly terms. Time any switch to your ServiceTitan term end, since leaving early costs the
            remaining payments. Our <Link href="/how-we-review" className={A}>review method</Link>{' '}
            explains why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
            <Link href="/quickbooks" className="text-orange-600 hover:text-orange-800">QuickBooks compatibility →</Link>
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
