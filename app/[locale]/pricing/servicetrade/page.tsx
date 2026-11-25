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
 * /pricing/servicetrade: targets "servicetrade pricing" and "servicetrade cost". No GSC data for
 * this topic yet.
 *
 * ServiceTrade publishes no prices (each suite has "Request pricing"), so this page shows none and
 * no currency. Checked 2026-11-25: pricing page, request-pricing page, terms index, Master
 * Services Agreement (last updated August 10, 2026), Professional Services Schedule, integrations
 * page and the July 21, 2026 Tap to Pay announcement. The support article on invoices returned 403
 * and was not retried, so nothing from the help center is used (a search snippet about invoice
 * payments through STAX was deliberately not used). No conflicts found between vendor pages: the
 * pricing page says price follows team size and technicians, the request-pricing page says you pay
 * for technicians, and the MSA says fees follow what was purchased, not usage. Third-party review
 * sites (including free trial claims) were deliberately not used. Nothing tested hands-on.
 */

const PATH = '/pricing/servicetrade'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTrade Pricing (2026): Suites, Contract Terms & Costs'
const DESCRIPTION =
  'ServiceTrade does not publish prices. See what Select, Premium and Enterprise include, how technicians drive cost, auto-renewal, the 7% cap and extra fees.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/servicetrade',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'ServiceTrade Pricing', href: PATH },
]

const suites: { suite: string; commercial: string; fire: string }[] = [
  {
    suite: 'Select (marked most popular)',
    commercial:
      'Unlimited office users, technician mobile app, dispatch board and map scheduler, service and job tracking, equipment history, deficiency capture, online quotes, live support, certification program, QuickBooks integration',
    fire: 'The same list as Commercial Select',
  },
  {
    suite: 'Premium',
    commercial:
      'Adds AI features, in-app business insights, technician job tasking and service timecards, subcontract work management, project management and budgets, advanced quoting and invoicing, customer service portal, support for custom integrations',
    fire: 'Adds AI features, digital inspection and compliance workflows, compliance reporting, Brycer integration, business insights, project management and budgets, advanced quoting and invoicing, subcontracting, service timecards, customer portal, project performance reporting, API access',
  },
  {
    suite: 'Enterprise',
    commercial:
      'Adds AI business insights, a tech capacity planner on the dispatch board, multi-brand and multi-region operations, advanced pipeline and sales workflows, recurring contract pricing and proposal management, parts and inventory management',
    fire: 'Adds AI business insights, the tech capacity planner, recurring contract invoices, multi-brand and multi-region operations, inventory management',
  },
]

const terms: { topic: string; rule: string }[] = [
  { topic: 'Initial term', rule: 'Whatever period your order sets as the Initial Term (section 11.a)' },
  { topic: 'Renewal', rule: 'Renews automatically for one-year terms unless notice is given at least 30 days before the term ends (11.a)' },
  { topic: 'Price increases', rule: 'At renewal, by not more than 7%, with exceptions for promotional or discounted pricing and reduced quantities (9.a)' },
  { topic: 'Billing', rule: 'Subscription fees payable in advance, in full, as a lump sum; invoices due on receipt unless the invoice says otherwise (9.a, 9.d)' },
  { topic: 'Refunds and quantities', rule: 'Fees are non-cancelable and non-refundable, and quantities cannot decrease during the subscription term (9.a)' },
  { topic: 'Late payment', rule: 'Interest of 1.5% a month (or the maximum legal rate) on overdue amounts (9.d)' },
  { topic: 'Your data', rule: 'Available to download for 30 days after the agreement ends, then may be permanently deleted (11.c)' },
  { topic: 'Governing law', rule: 'North Carolina law, courts in Wake County; the contracting party is ServiceTrade, Inc. (15.c)' },
]

const faqs = [
  {
    question: 'How much does ServiceTrade cost?',
    answer:
      'ServiceTrade does not publish prices. Its pricing page shows three suites, Select, Premium and Enterprise, each behind a Request pricing button, and says the price is based on the size of your team, mainly the number of technicians, plus the suite you choose. You need a quote to know the cost.',
  },
  {
    question: 'Does ServiceTrade charge per user?',
    answer:
      'It charges by technician. Its request-pricing page says you only pay for your technicians, and Select includes an unlimited number of office users. The per-technician price is not published.',
  },
  {
    question: 'Is ServiceTrade an annual contract?',
    answer:
      'Its Master Services Agreement sets the first term in your order, then renews automatically for one-year terms unless you give notice at least 30 days before the term ends. Subscription fees are paid in advance as a lump sum and are non-refundable.',
  },
  {
    question: 'Can ServiceTrade raise its price at renewal?',
    answer:
      'Yes, by not more than 7% at renewal under section 9.a of its Master Services Agreement. The cap does not cover promotional or discounted pricing or a renewal where you reduce quantities.',
  },
  {
    question: 'Does ServiceTrade charge for onboarding?',
    answer:
      'Its Professional Services Schedule mentions a standard setup fee and time-and-materials work billed at the rate on your Professional Services Order Form, but publishes neither amount. Extra charges can apply if your data does not meet its requirements or new integration needs come up after the first two weeks.',
  },
  {
    question: 'Does ServiceTrade have a free trial?',
    answer:
      'None of the ServiceTrade pages we checked mention a free trial. They offer a demo and a pricing request instead.',
  },
]

const sources = [
  { name: 'ServiceTrade pricing: Select, Premium and Enterprise suites', url: 'https://servicetrade.com/pricing/', checked: '2026-11-25' },
  { name: 'ServiceTrade request pricing: pay for your technicians', url: 'https://servicetrade.com/request-pricing/', checked: '2026-11-25' },
  { name: 'ServiceTrade Master Services Agreement (updated August 10, 2026)', url: 'https://servicetrade.com/company/terms/msa-aug2026/', checked: '2026-11-25' },
  { name: 'ServiceTrade Professional Services Schedule', url: 'https://servicetrade.com/company/terms/sps/', checked: '2026-11-25' },
  { name: 'ServiceTrade integrations (accounting and ERP)', url: 'https://servicetrade.com/integrations/', checked: '2026-11-25' },
  { name: 'ServiceTrade Tap to Pay announcement (July 21, 2026)', url: 'https://servicetrade.com/company-news/servicetrade-launches-tap-to-pay-for-commercial-service-contractors-powered-by-stripe/', checked: '2026-11-25' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function ServiceTradePricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/servicetrade"
        datePublished={firstPublished}
        dateModified={contentUpdated}
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />

      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            ServiceTrade pricing (2026): <span className="text-orange-400">suites, terms &amp; costs</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How ServiceTrade charges, what its three suites include, and what its contract commits you to, from
            its own pages on November 25, 2026. ServiceTrade publishes no prices, so we show none.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            ServiceTrade does not publish prices. Its three suites, <strong>Select</strong>,{' '}
            <strong>Premium</strong> and <strong>Enterprise</strong>, each sit behind &ldquo;Request
            pricing&rdquo;, and it says the price is based on the size of your team, mainly{' '}
            <strong>the number of technicians</strong>, plus the suite. Select includes unlimited office users.
            Its Master Services Agreement renews automatically for one-year terms, needs 30 days&rsquo; notice,
            caps renewal increases at 7%, and takes fees in advance as a non-refundable lump sum. Setup and
            professional services are billed separately at unpublished rates.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>What each ServiceTrade suite includes</h2>
          <p className={SUB}>
            From ServiceTrade&rsquo;s pricing page on November 25, 2026. It shows separate lists for commercial and
            mechanical service and for fire protection. No suite shows a price.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Suite', 'Commercial & mechanical', 'Fire protection'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {suites.map((r) => (
                  <tr key={r.suite} className={ROW}>
                    <td className={TD1}>{r.suite}</td>
                    <td className={TD}>{r.commercial}</td>
                    <td className={TD}>{r.fire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Premium and Enterprise each include everything in the suite below. The pricing page lists no separate
            add-ons.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>How ServiceTrade pricing works</h2>
          <p>
            ServiceTrade&rsquo;s pricing page says the price is driven mainly by the number of technicians you
            support and the suite you choose, and its request-pricing page says you only pay for your technicians.
            Office users are unlimited on Select. It does not say how a technician is counted, whether there is a
            minimum, or what a technician costs, so ask for all three in your quote.
          </p>
          <p>
            Its Master Services Agreement says fees are based on what you buy, not actual usage, and that quantities
            cannot decrease during the subscription term. If you add technicians mid-term you pay for them, but you
            can only reduce them at renewal, when the price is set by its pricing guidelines at that time.
          </p>
          <p>
            ServiceTrade is built for commercial work. If you are weighing it for commercial HVAC or fire
            inspections, see our <Link href="/guides/commercial-hvac-software">commercial HVAC software guide</Link>{' '}
            and <Link href="/by-industry/fire-protection">fire protection software</Link> page.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Contract terms</h2>
          <p className={SUB}>
            From ServiceTrade&rsquo;s Master Services Agreement (last updated August 10, 2026), checked November 25,
            2026.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Topic', 'What the agreement says'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {terms.map((r) => (
                  <tr key={r.topic} className={ROW}>
                    <td className={TD1}>{r.topic}</td>
                    <td className={TD}>{r.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            The agreement leaves the length of the first term to your order, so check it before you sign.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Setup and professional services</h2>
          <p>
            ServiceTrade&rsquo;s Professional Services Schedule covers onboarding and implementation work. It
            refers to a standard setup fee and bills time-and-materials work at the rate on your Professional
            Services Order Form, and the Master Services Agreement says that work is invoiced monthly in arrears.
            Neither amount is published. The schedule also says:
          </p>
          <ul>
            <li>Additional charges apply if your data does not meet its requirements, and extra revisions may cost more.</li>
            <li>Integration requirements identified after the first two weeks require fees.</li>
            <li>New scope needs a new order form.</li>
            <li>Reasonable travel, lodging and meals within the continental United States are included for onsite work.</li>
            <li>Cancelling or moving an onsite date within two weeks may bring penalties or fees.</li>
          </ul>

          <h2>Payments and accounting</h2>
          <p>
            ServiceTrade announced Tap to Pay, powered by Stripe, on July 21, 2026, at no additional cost through its
            Technician Mobile App on iPhone and Android. It lets you set minimum and maximum card amounts to manage
            processing fees, but does not publish processing rates. Select includes a QuickBooks integration, and its
            integrations page also lists Sage, NetSuite, Acumatica, Viewpoint Vista, Trimble Spectrum, Foundation and
            Microsoft Dynamics 365. That page says additional setup, subscription, implementation or third-party fees
            may apply and vary by integration. It does not say whether QuickBooks means Online or Desktop.
          </p>

          <h2>How to get a comparable ServiceTrade quote</h2>
          <ul>
            <li>Count your technicians, and ask how ServiceTrade counts them and whether there is a minimum.</li>
            <li>Ask for the price of all three suites, for the commercial or fire protection track you need.</li>
            <li>Ask for the length of the first term on the order and when the 30-day notice window falls.</li>
            <li>Get the setup fee and the time-and-materials rate for professional services in writing.</li>
            <li>List every accounting or ERP integration you need and ask about its setup and subscription fees.</li>
            <li>Ask about card processing rates if you plan to take payments in the field.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Compare with other tools</h2>
          <p className={SUB}>From each vendor&rsquo;s own pricing page, as covered on our pricing pages.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { tool: 'ServiceTitan', price: 'Quote only; four packages, contracts generally based on users', href: '/pricing/servicetitan' },
              { tool: 'FieldEdge', price: 'Quote only; Select, Premier and Elite with 2, 4 and 6 mobile licenses', href: '/pricing/fieldedge' },
              { tool: 'Service Fusion', price: 'From $220 a month billed annually, with unlimited users', href: '/pricing/service-fusion' },
            ].map((p) => (
              <article key={p.tool} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold">
                  <Link href={p.href} className="text-orange-600 hover:text-orange-800 dark:text-orange-400">{p.tool}</Link>
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-slate-600 dark:text-slate-400">{p.price}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Pros and cons of ServiceTrade&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>Priced by technician, with unlimited office users on Select.</li>
            <li>Renewal increases are capped at 7% in its Master Services Agreement.</li>
            <li>Separate suite contents for commercial and mechanical service and for fire protection.</li>
            <li>Tap to Pay in the technician app at no additional cost.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>No published prices, and no free trial on the pages we checked.</li>
            <li>Fees are paid in advance as a non-refundable lump sum, and technician counts cannot drop mid-term.</li>
            <li>Automatic one-year renewals with a 30-day notice window.</li>
            <li>Setup, professional services, some integrations and card processing are priced separately and not published.</li>
          </ul>
          <p>
            Compare it with other tools in our <Link href="/compare">field service software comparisons</Link> and
            the <Link href="/pricing">field service software pricing</Link> overview.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on ServiceTrade pricing">
            ServiceTrade is quote-only and priced mainly by technician, with unlimited office users on Select. It is
            aimed at commercial service and fire protection contractors. Expect annual renewals, payment in advance,
            and setup and integration fees on top, and get the first-term length and every fee in writing.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/guides/commercial-hvac-software" className="text-orange-600 hover:text-orange-800">Commercial HVAC software →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">All FSM software pricing →</Link>
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
