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
 * /compare/servicetitan-vs-servicetrade: targets "servicetitan vs servicetrade" (and the reversed
 * word order). No GSC data for this topic yet.
 *
 * Sources: ServiceTitan facts from /pricing/servicetitan (pricing page with Core, Demand AI, Field AI
 * and MAX, Form 10-K, Terms of Use last updated 2026-09-16, help center accounting integrations; all
 * checked 2026-11-24), its fire and life safety page as cited on /by-industry/fire-protection
 * (2026-11-21), and its commercial page and help articles as cited on /guides/commercial-hvac-software
 * (2026-11-19). ServiceTrade facts from /pricing/servicetrade and b16 research notes (pricing,
 * request-pricing, Master Services Agreement updated 2026-08-10, Professional Services Schedule,
 * integrations; checked 2026-11-25), its fire page (2026-11-21) and commercial HVAC page (2026-11-19).
 * No new fetches. Neither vendor publishes prices, so none are shown and there is no cost example.
 *
 * Conflicts: the commercial HVAC guide (2026-11-19) calls ServiceTitan a per-technician quote; the
 * newer pricing page (2026-11-24) follows the 10-K ("generally based on the number of users"), so this
 * page says users. ServiceTrade pricing basis is technicians per its own pricing and request-pricing
 * pages.
 *
 * Deliberately not used: either vendor's comparison or marketing pages about the other, ServiceTrade
 * help center (support.servicetrade.com returned 403 in batch 16), third-party prices, ratings and
 * free trial claims, ServiceTitan limited-time demo offers, and anything on offline mobile use for
 * ServiceTrade (not documented in our sources). Nothing tested hands-on.
 */

const PATH = '/compare/servicetitan-vs-servicetrade'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTitan vs ServiceTrade (2026): Users, Technicians, Contracts'
const DESCRIPTION =
  'Both are quote only. Compare what each counts (users or technicians), contract length, renewal caps, fire inspections and commercial features.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicetitan-vs-servicetrade',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceTitan vs ServiceTrade', href: PATH },
]

const rows: { feature: string; st: string; tr: string }[] = [
  { feature: 'Price', st: 'Not published: Core, Demand AI, Field AI and MAX all say “Get Pricing”', tr: 'Not published: Select, Premium and Enterprise all say “Request pricing”' },
  { feature: 'What is counted', st: 'Users: the 10-K says contracts are “generally based on the number of users”', tr: 'Technicians: “you only pay for your technicians”; unlimited office users on Select' },
  { feature: 'Who it targets', st: 'Residential and commercial trades, from four trucks in one shop to thousands across locations', tr: 'Commercial only: “built for commercial service teams, not residential contractors”' },
  { feature: 'Free trial', st: 'No; demo only', tr: 'Not mentioned on the pages we checked; demo and pricing request' },
  { feature: 'Contract term', st: 'Order Form sets it; the 10-K says new customers typically sign 12 to 36 months, renewing automatically', tr: 'Order sets the first term, then automatic one-year renewals unless notice 30 days before the end' },
  { feature: 'Price increases', st: 'May change fees for features of the service; no cap stated', tr: 'Not more than 7% at renewal (exceptions for discounted pricing and reduced quantities)' },
  { feature: 'Leaving early', st: 'Termination fee equal to all remaining payments; fees non-refundable', tr: 'Fees non-cancelable and non-refundable; quantities cannot decrease mid-term' },
  { feature: 'Billing', st: 'Generally monthly, in advance (10-K)', tr: 'In advance, in full, as a lump sum' },
  { feature: 'Onboarding', st: 'Generally invoiced separately; amount not published', tr: 'Standard setup fee and time-and-materials rate on your order form; neither published' },
  { feature: 'Fire inspections', st: 'NFPA 25 and 72 forms, deficiencies turned into quotes, AHJ-ready reports, customer portal', tr: 'NFPA forms (no numbers named) and deficiency quotes; Fire Premium adds digital inspections, compliance reporting and Brycer' },
  { feature: 'Multi-site accounts', st: 'One customer account with multiple locations, each with its own jobs, equipment and history', tr: 'Equipment history from Select; multi-brand and multi-region operations on Enterprise' },
  { feature: 'Project billing', st: 'Application for Payment with a continuation sheet (schedule of values); needs configuration', tr: 'Project management and budgets on Premium; progress billing not confirmed on its pages' },
  { feature: 'Accounting', st: 'QuickBooks Desktop and Online, Sage Intacct, Xero and CSV export, for all customers', tr: 'QuickBooks on Select (edition not stated), plus Sage Intacct, NetSuite, Acumatica, Viewpoint Vista and others; extra fees may apply' },
  { feature: 'Data on exit', st: 'Not kept more than 60 days after termination; retrieval fees may apply', tr: 'Available to download for 30 days after the agreement ends, then may be deleted' },
]

const faqs = [
  {
    question: 'Is ServiceTitan more expensive than ServiceTrade?',
    answer:
      'We cannot say, because neither publishes prices. They also count different things: ServiceTitan’s 10-K says contracts are generally based on the number of users, while ServiceTrade says you only pay for your technicians and includes unlimited office users on Select. Get written quotes for the same team, and ask each vendor exactly who is counted.',
  },
  {
    question: 'Do ServiceTitan and ServiceTrade count users the same way?',
    answer:
      'No. ServiceTitan’s pricing page shows no unit, and its Form 10-K says contracts are “generally based on the number of users”. ServiceTrade’s pricing is based mainly on the number of technicians you support. If you have a large office team, ask ServiceTitan which office roles count as users.',
  },
  {
    question: 'Which has the shorter contract?',
    answer:
      'ServiceTrade’s agreement leaves the first term to your order, then renews for one year at a time unless you give notice at least 30 days before the term ends. ServiceTitan’s 10-K says new customers typically sign 12 to 36 month agreements that renew automatically. Compare the term written on each order before you sign.',
  },
  {
    question: 'Can either raise prices at renewal?',
    answer:
      'ServiceTrade caps renewal increases at 7%, except for promotional or discounted pricing and renewals with reduced quantities. ServiceTitan’s Terms of Use say it may change fees for features of the service and state no cap, so ask for renewal pricing in writing.',
  },
  {
    question: 'Which is better for fire inspections?',
    answer:
      'ServiceTitan’s fire page names NFPA 25 and NFPA 72 forms, deficiency quotes and AHJ-ready reports, but not NFPA 10 or a compliance portal. ServiceTrade refers to NFPA forms without naming numbers, sends deficiency repair quotes customers approve with a click, and adds digital inspections and the Brycer (The Compliance Engine) integration on Fire Premium.',
  },
  {
    question: 'Can I use ServiceTrade for residential jobs?',
    answer:
      'ServiceTrade says it is built for commercial service teams, not residential contractors. ServiceTitan covers both residential and commercial work, and its pricing page says all packages are available for in-home residential customers.',
  },
]

const sources = [
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI and MAX packages; Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-24' },
  { name: 'ServiceTitan Form 10-K, fiscal year ended January 31, 2026 (users, contract length, billing, onboarding)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-24' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-24' },
  { name: 'ServiceTitan demo', url: 'https://www.servicetitan.com/demo', checked: '2026-11-24' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-24' },
  { name: 'ServiceTitan fire and life safety software', url: 'https://www.servicetitan.com/industries/fire-life-safety-software', checked: '2026-11-21' },
  { name: 'ServiceTitan commercial contractor software', url: 'https://www.servicetitan.com/market/commercial-contractor-software', checked: '2026-11-19' },
  { name: 'ServiceTitan help: customer record and locations', url: 'https://help.servicetitan.com/docs/how-do-you-separate-locations-under-the-same-billing-profile', checked: '2026-11-19' },
  { name: 'ServiceTitan help: customer portal (Contracts for commercial customers)', url: 'https://help.servicetitan.com/docs/customer-portal-overview', checked: '2026-11-19' },
  { name: 'ServiceTitan help: application for payment and continuation sheet', url: 'https://help.servicetitan.com/docs/complete-application-for-payment-and-continuation-sheet', checked: '2026-11-19' },
  { name: 'ServiceTitan help: ServiceChannel integration (NTE)', url: 'https://help.servicetitan.com/docs/set-up-servicechannel-integration', checked: '2026-11-19' },
  { name: 'ServiceTrade pricing: Select, Premium and Enterprise suites', url: 'https://servicetrade.com/pricing/', checked: '2026-11-25' },
  { name: 'ServiceTrade request pricing: pay for your technicians', url: 'https://servicetrade.com/request-pricing/', checked: '2026-11-25' },
  { name: 'ServiceTrade Master Services Agreement (updated August 10, 2026)', url: 'https://servicetrade.com/company/terms/msa-aug2026/', checked: '2026-11-25' },
  { name: 'ServiceTrade Professional Services Schedule', url: 'https://servicetrade.com/company/terms/sps/', checked: '2026-11-25' },
  { name: 'ServiceTrade integrations (accounting and ERP)', url: 'https://servicetrade.com/integrations/', checked: '2026-11-25' },
  { name: 'ServiceTrade fire protection software', url: 'https://servicetrade.com/industries/fire-protection/', checked: '2026-11-21' },
  { name: 'ServiceTrade commercial HVAC (not residential contractors)', url: 'https://servicetrade.com/industries/mechanical-commercial-hvac/', checked: '2026-11-19' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceTitanVsServiceTradePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicetitan-vs-servicetrade"
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
            ServiceTitan vs ServiceTrade: <span className="text-orange-400">users or technicians, long terms or capped renewals</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What each one counts, what the contract commits you to, and what each documents for
            commercial service and fire inspections, from each vendor’s own pages and terms, checked
            November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Both are quote only, so the real differences are what you pay for and how long you are tied
            in. <strong>ServiceTrade</strong> counts technicians, includes unlimited office users on
            Select, renews one year at a time with 30 days’ notice and caps renewal increases at 7%. It
            is built only for commercial service and fire protection. <strong>ServiceTitan</strong>{' '}
            counts users, typically signs new customers for 12 to 36 months, states no cap on increases
            and charges all remaining payments if you leave early. It also covers residential and
            commercial work in one platform, with NFPA 25 and 72 forms, multi-location accounts and
            progress billing.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceTitan vs ServiceTrade at a glance</h2>
          <p className={SUB}>
            Documented capabilities and contract terms only, not a hands-on test or a score. Neither
            vendor publishes prices. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">ServiceTitan</th>
                  <th scope="col" className="p-3.5">ServiceTrade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.st}</td>
                    <td className="p-3.5">{r.tr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing-basis">What each one counts: users or technicians</h2>
          <p>
            This is the difference most likely to move your quote. ServiceTitan’s Form 10-K for the year
            ended January 31, 2026 says pricing is driven by the features in the package and that
            customer contracts are “generally based on the number of users”, which customers often add as
            they hire. Its pricing page lists four packages, <strong>Core</strong>,{' '}
            <strong>Demand AI</strong>, <strong>Field AI</strong> and <strong>MAX</strong>, all behind
            “Get Pricing”, and does not name the unit.
          </p>
          <p>
            ServiceTrade’s pricing page says its price is based on the size of your team, mainly the
            number of technicians you support, plus the suite, and its request-pricing page says you only
            pay for your technicians. Select, the entry suite, includes unlimited office users. Neither
            vendor says how a user or technician is counted or whether there is a minimum. A shop with a
            large office team relative to its field crew should ask ServiceTitan which roles count as
            users before comparing totals. See{' '}
            <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link> and{' '}
            <Link href="/pricing/servicetrade" className={A}>ServiceTrade pricing</Link> for the full
            package and suite lists.
          </p>

          <h2 id="contracts">Contract terms, renewals and price increases</h2>
          <p>
            ServiceTitan’s Terms of Use (last updated September 16, 2026) let your Order Form set the
            term; its 10-K says new customers typically sign 12 to 36 month agreements that renew
            automatically, generally billed monthly in advance. Without an Order Form, subscriptions run
            month to month and renew unless you give 30 days’ written notice. Ending a subscription early
            means a termination fee equal to all the remaining payments, fees are non-refundable, and
            ServiceTitan may change fees for features of the service, with no cap stated.
          </p>
          <p>
            ServiceTrade’s Master Services Agreement (updated August 10, 2026) also leaves the first term
            to your order, then renews automatically for one-year terms unless notice is given at
            least 30 days before the term ends. Renewal increases are capped at 7%, except for promotional
            or discounted pricing and renewals with fewer quantities. Fees are paid in advance as a lump
            sum, are non-cancelable and non-refundable, and you cannot reduce technician counts mid-term,
            only at renewal.
          </p>
          <p>
            Both bill setup separately at unpublished rates: ServiceTitan’s 10-K says onboarding and
            training are generally invoiced separately, and ServiceTrade’s Professional Services Schedule
            refers to a standard setup fee plus time-and-materials work at the rate on your order form.
          </p>

          <h2 id="fire">Fire protection and inspections</h2>
          <p>
            ServiceTitan’s fire and life safety page names NFPA 25 and NFPA 72 inspection forms, turns
            deficiencies into quotes, and offers equipment scanning, AHJ-ready reports and a customer
            portal. It does not name NFPA 10 or a compliance portal such as The Compliance Engine.
          </p>
          <p>
            ServiceTrade shows separate suite contents for fire protection. Fire Select covers the
            technician app, dispatch board, equipment history, deficiency capture and online quotes. Fire
            Premium adds digital inspection and compliance workflows, compliance reporting, the Brycer
            integration (Brycer runs The Compliance Engine), a customer portal and API access, and Fire
            Enterprise adds recurring contract invoices and multi-region operations. Its fire page refers
            to NFPA forms without naming numbers. Our{' '}
            <Link href="/by-industry/fire-protection" className={A}>fire protection software</Link> page
            compares both with fire-specific platforms.
          </p>

          <h2 id="commercial">Commercial service features</h2>
          <p>
            ServiceTrade says it is “built for commercial service teams, not residential contractors.”
            Equipment history, deficiency capture, online quotes and QuickBooks come with Select; Premium
            adds subcontract work management, project management and budgets, and a customer service
            portal; Enterprise adds a tech capacity planner, multi-brand and multi-region operations,
            recurring contract pricing and parts and inventory. We could not confirm progress billing on
            its current pages.
          </p>
          <p>
            ServiceTitan sells separate commercial and residential solutions. A customer record holds
            multiple locations, each with its own jobs, equipment and history; commercial customers see
            their contracts in the customer portal; and applications for payment with a continuation sheet
            (schedule of values) handle progress billing once configured. It also documents a
            ServiceChannel integration that can pass not-to-exceed values to the job; we did not find one
            documented for ServiceTrade. Our{' '}
            <Link href="/guides/commercial-hvac-software" className={A}>commercial HVAC software</Link>{' '}
            guide covers both alongside other commercial tools.
          </p>

          <h2 id="accounting-data">Accounting and your data</h2>
          <p>
            ServiceTitan’s help center lists QuickBooks Desktop (Pro, Premier or Enterprise), QuickBooks
            Online, Sage Intacct, Xero and CSV export as available to all customers. ServiceTrade includes
            a QuickBooks integration on Select without saying whether that means Online or Desktop, and
            lists Sage Intacct, NetSuite, Acumatica, Viewpoint Vista, Trimble Spectrum, Foundation and
            Microsoft Dynamics 365, noting that additional fees may apply by integration. When you leave,
            ServiceTrade keeps your data available to download for 30 days; ServiceTitan does not have to
            keep it more than 60 days and may charge to retrieve it.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Commercial-only service or fire inspection company with a big office team:</strong> ServiceTrade, which counts technicians and includes unlimited office users on Select.</li>
            <li><strong>Want a cap on renewal increases and one-year renewals:</strong> ServiceTrade, with its 7% cap and 30 days’ notice.</li>
            <li><strong>Mix of residential and commercial work:</strong> ServiceTitan, since ServiceTrade says it is not for residential contractors.</li>
            <li><strong>Fire alongside HVAC, plumbing or other trades, with progress billing:</strong> ServiceTitan, if you can commit to a longer term.</li>
            <li><strong>Want other options:</strong> see <Link href="/compare/servicetrade-alternatives" className={A}>ServiceTrade alternatives</Link> and <Link href="/compare/servicetitan-alternatives" className={A}>ServiceTitan alternatives</Link>.</li>
          </ul>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: ServiceTitan vs ServiceTrade">
            ServiceTrade is the narrower, commercial-only choice with friendlier documented terms:
            technician-based pricing, free office users on Select, one-year renewals and a 7% renewal cap.
            ServiceTitan covers residential and commercial work with NFPA 25 and 72 forms and progress
            billing, but counts users, typically signs 12 to 36 months and charges the remaining payments if
            you leave early. Neither publishes prices, so compare written quotes for the same team. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/compare/servicetitan-vs-fieldedge" className="text-orange-600 hover:text-orange-800">ServiceTitan vs FieldEdge →</Link>
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
