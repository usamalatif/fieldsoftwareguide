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
 * /compare/servicetitan-vs-service-fusion: targets "servicetitan vs service fusion" (and the
 * reversed word order). No GSC data for this topic yet.
 *
 * ServiceTitan facts reuse the site's verified pages only: /pricing/servicetitan (pricing page with
 * Core, Demand AI, Field AI and MAX, Terms of Use last updated 2026-09-16, Payments, financing and
 * accounting integrations, all checked 2026-11-24; Form 10-K checked 2026-11-24) and
 * /compare/servicetitan-vs-fieldedge (dispatch page 2026-11-19, help center 2026-11-17 to 11-20).
 * The 10-K says contracts are "generally based on the number of users", so this page never says
 * per technician. No servicetitan.com page was fetched. Service Fusion facts: pricing page,
 * Subscription Agreement (last modified 2026-03-23), help center, offline mode post, scheduling and
 * flat rate pages, all checked 2026-11-24 (from /pricing/service-fusion, the Housecall Pro and
 * Jobber vs Service Fusion pages and the b11 research notes). Conflict: Service Fusion's pricing
 * page says month to month with no contract requirements, while its Subscription Agreement renews
 * the ordered term automatically unless 30 days' written notice; the page states both. Not used:
 * either vendor's comparison pages about the other (including Service Fusion's "3 to 30
 * technicians" and "$0 early termination" lines), ServiceTitan's older per-technician wording,
 * demo gifts and any third-party price estimate. ServiceTitan publishes no price, so no cost
 * comparison is made. Nothing tested hands-on.
 */

const PATH = '/compare/servicetitan-vs-service-fusion'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTitan vs Service Fusion (2026): Quote-Only vs Unlimited Users'
const DESCRIPTION =
  'ServiceTitan is quote-only, priced by users, on 12 to 36 month terms. Service Fusion lists $220 to $552/month with unlimited users. Compare terms and features.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicetitan-vs-service-fusion',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceTitan vs Service Fusion', href: PATH },
]

const rows: { feature: string; st: string; sf: string }[] = [
  { feature: 'Price', st: 'Not published: Core, Demand AI, Field AI and MAX all sit behind “Get Pricing”', sf: 'Starter $220, Plus $339, Pro $552 a month billed annually as one upfront payment; $259, $399 and $649 billed monthly' },
  { feature: 'What sets the price', st: 'Package features and, per its 10-K, contracts “generally based on the number of users”', sf: 'Plan only: unlimited users on every plan; ServiceCall.ai add-on is billed per user (price not published)' },
  { feature: 'Free trial', st: 'No free trial; personalized and interactive demos', sf: 'Free demo; no trial mentioned' },
  { feature: 'Contract term', st: 'Set in the Order Form; 10-K says new customers typically sign 12 to 36 months', sf: 'Pricing page says month to month, no contract requirements; the Subscription Agreement uses the term on your online order' },
  { feature: 'Renewal and notice', st: 'Contracts renew automatically unless cancelled in advance; without an Order Form, month to month with 30 days’ written notice', sf: 'Renews automatically for the same length unless either side gives 30 days’ written notice before the term ends' },
  { feature: 'Leaving early', st: 'Termination fee equal to all remaining payments; fees non-refundable', sf: 'No early termination fee mentioned; unpaid amounts fall due; fees non-refundable' },
  { feature: 'Onboarding', st: 'Onboarding and training generally invoiced separately (10-K); no amount published', sf: 'Personalized onboarding listed; no setup fee shown, but none is ruled out' },
  { feature: 'Payment fees', st: 'Not published; vary by payment method and transaction type', sf: '2.90% + $0.30 per card; extra 1% when keyed in; ACH 1% capped at $15; $0.75 daily batch fee' },
  { feature: 'Dispatch and GPS', st: 'Dispatch board with capacity planning; Dispatch Pro add-on assigns by skill, location and performance; Fleet Pro add-on for live vehicle tracking', sf: 'Drag-and-drop dispatch grid and GPS map on the schedule; route optimization not documented; GPS fleet tracking add-on on every plan, price not published' },
  { feature: 'Price book', st: 'Pricebook in Core; Pricebook Pro add-on', sf: 'Flat-rate content through partner Profit Rhino; price and plan not stated' },
  { feature: 'Agreements', st: 'Customizable memberships in Core; agreements can auto-renew 90 days before the end date', sf: 'Service agreement tracking with member pricing; recurring invoicing on Pro, add-on on Starter and Plus' },
  { feature: 'Offline mobile', st: 'Most job work offline, including status, time, signatures, notes, photos and estimates', sf: 'Since June 22, 2026: view schedules and jobs, edit notes, photos, tasks and checklists; no new jobs or estimates, status changes or payments yet' },
  { feature: 'Accounting', st: 'QuickBooks Online and Desktop (Pro, Premier, Enterprise), Sage Intacct, Xero and CSV export, for all customers', sf: 'QuickBooks Online and Desktop on every plan; Desktop tool is Windows only' },
  { feature: 'Data on exit', st: 'Export on request, fees may apply; data not kept more than 60 days after termination', sf: 'Export is a paid professional service; account and data may be deleted after termination' },
]

const faqs = [
  {
    question: 'Is ServiceTitan more expensive than Service Fusion?',
    answer:
      'We cannot say, because ServiceTitan publishes no prices. Service Fusion lists Starter at $220, Plus at $339 and Pro at $552 a month billed annually, with unlimited users. ServiceTitan prices its Core, Demand AI, Field AI and MAX packages by quote, and its 10-K says onboarding and training are generally invoiced separately. Ask ServiceTitan for a written total for your team, add-ons, onboarding and term, then set it against the Service Fusion plan you need.',
  },
  {
    question: 'Does either charge per user?',
    answer:
      'Service Fusion does not: every plan includes unlimited users, though its ServiceCall.ai add-on is billed per user. ServiceTitan’s 10-K says its contracts are “generally based on the number of users”, so adding office staff or technicians can raise the price. Ask ServiceTitan which users it counts.',
  },
  {
    question: 'Is Service Fusion really month to month?',
    answer:
      'Its pricing page says all plans are month to month with no contract requirements. Its Subscription Agreement (last modified March 23, 2026) says the term on your online order renews automatically for the same length unless either side gives 30 days’ written notice before it ends. So a monthly order should renew monthly and an annual order yearly. ServiceTitan’s 10-K says new customers typically sign for 12 to 36 months.',
  },
  {
    question: 'What happens if I cancel early?',
    answer:
      'ServiceTitan’s Terms of Use set a termination fee equal to all the remaining payments if a subscription ends early. Service Fusion’s Subscription Agreement mentions no early termination fee, but fees are non-refundable and any unpaid amounts fall due when the agreement ends. With both, give notice before the renewal date.',
  },
  {
    question: 'Which works better offline?',
    answer:
      'ServiceTitan documents more: its field app handles job status, time, signatures, notes, photos and estimates offline, while purchase orders, financing, contracts, inventory availability and dynamic pricing need a connection. Service Fusion’s offline mode, launched June 22, 2026, lets technicians view schedules and jobs and edit notes, photos, tasks and checklists, but not create jobs or estimates, change job status or take payments yet.',
  },
  {
    question: 'Does either have a free trial?',
    answer:
      'Neither mentions one. ServiceTitan offers a personalized demo and an interactive demo, and Service Fusion offers a free demo.',
  },
  {
    question: 'Do both work with QuickBooks Desktop?',
    answer:
      'Yes. Service Fusion includes QuickBooks Online and Desktop on every plan, and its help center says the Desktop tool works only on Windows. ServiceTitan’s help center lists QuickBooks Desktop (Pro, Premier or Enterprise), QuickBooks Online, Sage Intacct and Xero as available to all customers.',
  },
]

const sources = [
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI and MAX; Get Pricing; Pro products)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-24' },
  { name: 'ServiceTitan Form 10-K, fiscal year ended January 31, 2026 (users, contract length, renewal, onboarding)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-24' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-24' },
  { name: 'ServiceTitan Payments (processing fees not published)', url: 'https://www.servicetitan.com/features/payments', checked: '2026-11-24' },
  { name: 'ServiceTitan demo', url: 'https://www.servicetitan.com/demo', checked: '2026-11-24' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-24' },
  { name: 'ServiceTitan dispatch software (Dispatch Pro, capacity planning)', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-19' },
  { name: 'ServiceTitan help: dispatch and track technicians (Fleet Pro)', url: 'https://help.servicetitan.com/docs/dispatch-and-track-your-technicians', checked: '2026-11-17' },
  { name: 'ServiceTitan help: field mobile app offline capabilities', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-17' },
  { name: 'ServiceTitan help: auto-renew a service agreement', url: 'https://help.servicetitan.com/docs/auto-renew-a-service-agreement', checked: '2026-11-20' },
  { name: 'Service Fusion pricing (plans, unlimited users, add-ons, onboarding, month-to-month FAQ)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
  { name: 'Service Fusion help: upgrading and adding add-ons (ServiceCall.ai per user)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/38056443351053-Upgrading-your-Service-Fusion-Subscription-and-Adding-Add-ons', checked: '2026-11-24' },
  { name: 'Service Fusion help: Service Fusion Payments fees', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360058547171-Service-Fusion-Payments-Introduction', checked: '2026-11-24' },
  { name: 'Service Fusion help: QuickBooks Desktop setup (Windows only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001111652-QuickBooks-Desktop-Setup-Instructions', checked: '2026-11-24' },
  { name: 'Service Fusion blog: introducing offline mode (June 22, 2026)', url: 'https://www.servicefusion.com/blog/introducing-offline-mode', checked: '2026-11-24' },
  { name: 'Service Fusion scheduling software (dispatch grid, routing, GPS map)', url: 'https://www.servicefusion.com/field-service-scheduling-software', checked: '2026-11-24' },
  { name: 'Service Fusion flat rate (Profit Rhino)', url: 'https://www.servicefusion.com/flat-rate', checked: '2026-11-24' },
  { name: 'Service Fusion help: customer service agreement tracking', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001110832-Customer-Service-Agreement-Tracking', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceTitanVsServiceFusionPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicetitan-vs-service-fusion"
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
            ServiceTitan vs Service Fusion: <span className="text-orange-400">a quote by users, or a flat price for everyone</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How each one prices, what the contract commits you to, and how dispatch, price books,
            agreements, offline use and QuickBooks compare, from each vendor’s own pages and terms,
            checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            The biggest difference is how you pay. <strong>ServiceTitan</strong> is quote-only: its
            Core, Demand AI, Field AI and MAX packages have no public price, its annual report says
            contracts are generally based on the number of users, and new customers typically sign
            for 12 to 36 months. <strong>Service Fusion</strong> publishes $220, $339 and $552 a month
            billed annually, with unlimited users on every plan. Its pricing page says month to month,
            but its Subscription Agreement renews your ordered term automatically unless you give 30
            days’ notice. ServiceTitan documents more offline job work and more add-on depth for
            dispatch and fleet; Service Fusion is easier to budget for a growing team.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceTitan vs Service Fusion at a glance</h2>
          <p className={SUB}>
            Documented capabilities only, not a hands-on test or a score. Service Fusion prices are in
            USD; ServiceTitan publishes none. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">ServiceTitan</th>
                  <th scope="col" className="p-3.5">Service Fusion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.st}</td>
                    <td className="p-3.5">{r.sf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing-model">How each one prices</h2>
          <p>
            ServiceTitan’s pricing page lists four packages behind one “Get Pricing” button.{' '}
            <strong>Core</strong> covers scheduling, dispatching, call booking, invoicing, pricebook,
            reporting, mobile estimates, payroll, commission tracking and memberships.{' '}
            <strong>Demand AI</strong> adds marketing and booking automation, <strong>Field AI</strong>{' '}
            adds field automation such as AI estimates and sales coaching, and <strong>MAX</strong>{' '}
            includes both plus office automation. Its Form 10-K says the price is driven by the
            package’s features and that contracts are “generally based on the number of users”, so
            the bill can rise as you hire. Onboarding and training are generally invoiced separately,
            and Pro products such as Dispatch Pro, Fleet Pro and Pricebook Pro are sold on top. Full
            detail is on our <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link> page.
          </p>
          <p>
            Service Fusion publishes three plans with <strong>unlimited users</strong>: Starter $220,
            Plus $339 and Pro $552 a month billed annually, charged as one payment at sign-up ($2,640
            a year for Starter), or $259, $399 and $649 billed monthly. Plus adds job costing,
            inventory and built-in voice and text; Pro adds the open API, eSign, a customer portal and
            recurring invoicing. Add-ons such as GPS fleet tracking and ServiceCall.ai have no
            published price. See our <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>{' '}
            page for every plan and fee.
          </p>
          <p>
            Because ServiceTitan publishes no figure, we cannot say which costs less for a given
            team. What the published numbers do show is that Service Fusion’s plan price stays the same
            whether you have five users or fifty, while a ServiceTitan quote is tied to user count.
          </p>

          <h2 id="contracts">Contracts, renewal and leaving early</h2>
          <p>
            ServiceTitan’s Order Form sets the term, and its 10-K says new customers typically sign for
            12 to 36 months, renewing automatically unless cancelled in advance. Its Terms of Use
            (September 2026) say that without an Order Form, subscriptions run month to month with 30
            days’ written notice. Ending early means a termination fee equal to all the remaining
            payments, and fees paid are non-refundable.
          </p>
          <p>
            Service Fusion’s pricing page says it offers every plan month to month with no contract
            requirements. Its Subscription Agreement, last modified March 23, 2026, adds the detail:
            the term on your online order renews automatically for the same length unless either side
            gives 30 days’ written notice before it ends, fees are non-refundable, and Service Fusion
            can change fees on notice. No early termination fee is mentioned. In practice an annual
            order renews yearly, so put the notice date in your calendar either way.
          </p>

          <h2 id="dispatch">Dispatch, GPS and price book</h2>
          <p>
            ServiceTitan’s dispatch board includes capacity planning, its Dispatch Pro add-on assigns
            technicians by skill, location and performance, and Fleet Pro adds live vehicle tracking.
            Service Fusion has a drag-and-drop dispatch grid and a GPS map on the schedule; its
            scheduling page names routing without describing route optimization, and GPS fleet
            tracking is an add-on on every plan. For flat rate, ServiceTitan includes its pricebook in
            Core and sells Pricebook Pro; Service Fusion points to Profit Rhino as its flat rate
            partner, without stating a price or plan.
          </p>

          <h2 id="agreements">Memberships and agreements</h2>
          <p>
            ServiceTitan includes customizable memberships in Core, and its help center shows
            agreements set to auto-renew 90 days before the end date. Service Fusion’s help center
            documents service agreement tracking with member pricing, and recurring invoicing is
            included on Pro and an add-on on Starter and Plus. Our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide covers more tools.
          </p>

          <h2 id="offline-accounting">Offline mobile and accounting</h2>
          <p>
            ServiceTitan’s field app handles most job work offline, including status, time,
            signatures, notes, photos and estimates; purchase orders, financing, contracts, inventory
            availability and dynamic pricing need a connection. Service Fusion launched offline mode
            on June 22, 2026: technicians can view schedules and job details and edit notes, photos,
            tasks and checklists, but cannot create jobs or estimates, change job status or take
            payments offline yet. See our{' '}
            <Link href="/guides/offline-field-service-app" className={A}>offline field service app</Link> guide.
          </p>
          <p>
            Both support QuickBooks Online and Desktop. Service Fusion includes them on Starter, and
            its Desktop tool runs only on Windows. ServiceTitan lists QuickBooks Desktop Pro, Premier
            and Enterprise, QuickBooks Online, Sage Intacct and Xero as available to all customers.
            Our <Link href="/quickbooks" className={A}>QuickBooks guide</Link> compares more options.
          </p>

          <h2 id="data">Payments and getting your data out</h2>
          <p>
            Service Fusion publishes its processing rates through PaySimple: 2.90% + $0.30 per card,
            an extra 1% when the card is keyed in, and ACH at 1% capped at $15. ServiceTitan says its
            fees vary by payment method and transaction type and publishes no rates. On exit,
            ServiceTitan exports data on request (fees may apply) and need not keep it more than 60
            days after termination; Service Fusion treats exporting your data as a paid professional
            service and may delete the account after termination. Export before you give notice.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Growing team that wants a fixed, published price:</strong> Service Fusion, since adding users does not change the plan price.</li>
            <li><strong>Want to avoid a multi-year commitment:</strong> Service Fusion on a monthly order, after checking the term on the order form.</li>
            <li><strong>Technicians who build estimates or close jobs without signal:</strong> ServiceTitan, which documents more offline job work today.</li>
            <li><strong>Dispatch center, capacity planning or AI add-ons:</strong> ServiceTitan, with Demand AI, Field AI or MAX and Pro products quoted in writing.</li>
            <li><strong>Neither fits:</strong> compare <Link href="/compare/servicetitan-alternatives" className={A}>ServiceTitan alternatives</Link> and <Link href="/compare/service-fusion-alternatives" className={A}>Service Fusion alternatives</Link>.</li>
          </ul>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: ServiceTitan vs Service Fusion">
            Service Fusion publishes flat plan prices with unlimited users, so it is easier to budget,
            but its agreement still renews automatically unless you give 30 days’ notice. ServiceTitan
            is quote-only, tied to user count and typically signed for 12 to 36 months, in exchange
            for broader packages, Pro add-ons and more documented offline work. Get ServiceTitan’s
            total in writing before you compare. Our <Link href="/how-we-review" className={A}>review method</Link>{' '}
            explains why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/compare/housecall-pro-vs-service-fusion" className="text-orange-600 hover:text-orange-800">Housecall Pro vs Service Fusion →</Link>
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
