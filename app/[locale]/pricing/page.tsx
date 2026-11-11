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
 * /pricing — Week 2 pricing hub. Target "field service software pricing" and close
 * variants ("field service management software pricing", "how much does field service
 * software cost", "fsm software cost", "field service software cost per user"). Research and
 * keyword map: Pricing_Hub_Research_2026-11-07.md (no volume data; Semrush not connected).
 *
 * Scope vs other pages: this page answers "what does it cost". It does not pick a best tool
 * (that is /compare) and keeps full plan and feature breakdowns on /pricing/jobber and
 * /pricing/housecall-pro, linking to them instead of repeating them.
 *
 * Every vendor fact was checked on the vendor's own site on 2026-11-10 (pricing pages, plus
 * the Jobber and Housecall Pro help articles in `sources`). ServiceTitan, Workiz, FieldPulse
 * and Commusoft publish no prices, so none are shown: no third-party estimates, per the
 * site's pricing policy (lib/providers.ts, /how-we-review). Team-size, annual and per-user
 * figures and the $1,000 invoice examples are arithmetic on the published rates.
 */

// Dates live in content/articles.ts (shared with the sitemap). firstPublished stays unset
// until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates['/pricing']

export const metadata = buildMetadata({
  title: 'Field Service Software Pricing (2026): Plans & Costs Compared',
  description:
    'Field service software pricing for 2026: Jobber from $29/mo, Housecall Pro from $59/mo (annual), costs for 1 to 15 users, add-ons and payment fees.',
  slug: 'pricing',
  type: 'article',
  modifiedTime: contentUpdated,
  // 61-char keyword title; the template suffix would push it past Bing's 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
]

const vendors: { name: string; published: string; entry: string; model: string; trial: string; href?: string }[] = [
  {
    name: 'Jobber',
    published: 'Yes',
    entry: '$29/mo (Core, 1 user) billed annually; $49/mo with no commitment',
    model: 'Plans sold for 1, 5, 10 or 15 users; extra seats $29/mo',
    trial: '14 days on Grow, no credit card',
    href: '/pricing/jobber',
  },
  {
    name: 'Housecall Pro',
    published: 'Yes',
    entry: '$59/mo (Basic, 1 user) billed annually; $79/mo month-to-month',
    model: 'Three plans for 1, up to 5 and up to 8 users; $35/mo per extra user on MAX',
    trial: '14 days with MAX features, no credit card',
    href: '/pricing/housecall-pro',
  },
  {
    name: 'ServiceTitan',
    published: 'No (“Request Pricing”)',
    entry: 'Not published',
    model: 'Per-technician pricing; plans named Starter, Essentials and The Works',
    trial: 'Demo only; no trial listed',
  },
  {
    name: 'Workiz',
    published: 'No (“Request pricing”)',
    entry: 'Not published',
    model: 'Standard, Pro and Ultimate plans; an annual plan “can save $400+”',
    trial: '7 days, no credit card',
  },
  {
    name: 'FieldPulse',
    published: 'No (custom quote)',
    entry: 'Not published',
    model: 'Seat-based, plus optional premium products',
    trial: 'Free demo; current trial terms not confirmed',
  },
  {
    name: 'Commusoft',
    published: 'No',
    entry: 'Not published',
    model: 'Per licence on a 12-month contract; built for businesses with 6 or more staff',
    trial: 'Free trial advertised; signup, length and eligibility not stated',
  },
]

/** Cheapest published plan by headcount, per month: annual billing / no commitment (Jobber) or month-to-month (HCP). */
const teamSize: { users: string; jobber: string; hcp: string }[] = [
  { users: '1 user', jobber: 'Core: $29 / $49', hcp: 'Basic: $59 / $79' },
  { users: '1 user with QuickBooks Online sync', jobber: 'Connect: $99 / $139', hcp: 'Essentials: $149 / $189' },
  { users: '5 users', jobber: 'Connect (5-user plan): $149 / $199', hcp: 'Essentials (up to 5): $149 / $189' },
  { users: '10 users', jobber: 'Connect (10-user plan): $229 / $299', hcp: 'MAX + 2 extra users: $369 / $399 (estimate*)' },
  { users: '15 users', jobber: 'Connect (15-user plan): $299 / $399', hcp: 'MAX + 7 extra users: $544 / $574 (estimate*)' },
]

/** Twelve months of subscription only: annual billing vs no commitment / month-to-month. */
const firstYear: { users: string; jobber: string; hcp: string }[] = [
  { users: '1 user', jobber: '$348 vs $588 (Core)', hcp: '$708 vs $948 (Basic)' },
  { users: '5 users', jobber: '$1,788 vs $2,388 (Connect)', hcp: '$1,788 vs $2,268 (Essentials)' },
  { users: '10 users', jobber: '$2,748 vs $3,588 (Connect)', hcp: '$4,428 vs $4,788 (MAX + 2, estimate*)' },
  { users: '15 users', jobber: '$3,588 vs $4,788 (Connect)', hcp: '$6,528 vs $6,888 (MAX + 7, estimate*)' },
]

/** Fee on one $1,000 card or bank payment at the published standard rate. */
const invoice: { method: string; jobber: string; hcp: string }[] = [
  { method: 'Card tapped on a phone in the field (Tap to Pay)', jobber: '$27.30 (2.7% + 30¢)', hcp: '$25.90 (2.59%)' },
  { method: 'Card entered by the customer on an online invoice', jobber: '$29.30 (2.9% + 30¢)', hcp: '$29.90 (2.99%)' },
  { method: 'Card keyed in by staff or saved on file', jobber: 'Not listed separately', hcp: '$34.90 (3.49%)' },
  { method: 'American Express or commercial card', jobber: 'Not listed separately', hcp: '$34.90 (3.49%)' },
  { method: 'Bank payment (ACH)', jobber: '$10.00 (1%, US only)', hcp: '$10.00 (1%)' },
  { method: 'Instant payout (added to the fee above)', jobber: '+$10.00 (+1%)', hcp: '+$10.00 (+1%)' },
]

const faqs = [
  {
    question: 'How much does field service management software cost?',
    answer:
      'Of the six major platforms we track, only Jobber and Housecall Pro publish prices. Jobber starts at $29/month (Core, 1 user) and Housecall Pro at $59/month (Basic, 1 user), both billed annually; month-to-month they cost $49 and $79. For a five-person team, Jobber Connect and Housecall Pro Essentials both cost $149/month billed annually. ServiceTitan, Workiz, FieldPulse and Commusoft quote on request. Payment processing fees come on top of the subscription.',
  },
  {
    question: 'How much does field service software cost per user?',
    answer:
      'Jobber and Housecall Pro price by plan and team size rather than a flat per-user rate, so the cost per user falls as the team grows. On annual billing, a 10-user team works out to about $22.90 per user per month on Jobber Connect ($229) and an estimated $36.90 on Housecall Pro MAX with two extra users ($369, assuming its listed $35 extra-user rate applies to annual billing). Extra users cost $29/month each at Jobber and $35/month each on Housecall Pro MAX. ServiceTitan says its pricing is per technician but does not publish the rate.',
  },
  {
    question: 'Why doesn’t ServiceTitan publish its prices?',
    answer:
      'ServiceTitan’s pricing page names three plans (Starter, Essentials and The Works) and says its per-technician pricing is designed to fit each business, so every plan is “Request Pricing”. Third-party sites publish estimates, but they disagree and cannot be checked against an official source, so we do not repeat them. Ask for a written quote that includes onboarding, contract length and payment processing.',
  },
  {
    question: 'Is annual billing cheaper than monthly billing?',
    answer:
      'Yes, for both tools that publish prices. Over a year, Jobber Core costs $348 billed annually versus $588 with no commitment, and Housecall Pro Basic costs $708 versus $948. The trade-off is flexibility: Jobber bills the annual term upfront and the initial payment is non-refundable, while Housecall Pro does not require a long-term contract on either billing option.',
  },
  {
    question: 'Are payment processing fees included in the subscription?',
    answer:
      'No. They are charged on each payment you collect. On a $1,000 invoice paid by card online, the fee is $29.30 at Jobber and $29.90 at Housecall Pro; a bank (ACH) payment costs $10 at both. ServiceTitan, FieldPulse, Workiz and Commusoft do not publish their processing rates on their pricing pages, so ask for them in the quote.',
  },
  {
    question: 'Is there free field service management software?',
    answer:
      'None of these six platforms publishes a free plan. Jobber and Housecall Pro offer 14-day free trials and Workiz a 7-day trial, all without a credit card. Our guide to free field service management software covers what you can run for free and where the limits are.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, team sizes, billing options, add-ons, payment fees, terms)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-10' },
  { name: 'Jobber help: Manage Team (Core allows one additional seat)', url: 'https://help.getjobber.com/en/articles/manage-teamhow-to-add-manage-and-deactivate-team-members/', checked: '2026-11-10' },
  { name: 'Jobber help: route optimization (Connect, Grow and Plus)', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-10' },
  { name: 'Jobber help: Receptionist (30 conversations, $0.79 each after)', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-07' },
  { name: 'Housecall Pro pricing (plans, users, features, intro offers, FAQ)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-10' },
  { name: 'Housecall Pro help: payment processing options', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-10' },
  { name: 'ServiceTitan pricing (plans, per-technician model)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-10' },
  { name: 'ServiceTitan Payments (processing fees vary by agreement)', url: 'https://www.servicetitan.com/features/payments', checked: '2026-11-07' },
  { name: 'Workiz pricing (plans, trial, annual saving, add-ons)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-10' },
  { name: 'FieldPulse pricing (seat-based, premium products)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-10' },
  { name: 'FieldPulse help: FieldPulse Payments (processing fee and monthly cost)', url: 'https://help.fieldpulse.com/using-fieldpulse/payments/start-here/fieldpulse-payments', checked: '2026-11-07' },
  { name: 'Commusoft plans (licence types, 12-month contract, 6+ staff, modules)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-10' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const ROW = 'border-t border-slate-100 dark:border-slate-800'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'

function Table({ head, rows, minWidth }: { head: string[]; rows: React.ReactNode[][]; minWidth?: string }) {
  return (
    <div className={TABLE_WRAP}>
      <table className={`tnum w-full border-collapse text-left ${minWidth ?? ''}`}>
        <thead>
          <tr className="bg-slate-900">
            {head.map((h) => (
              <th key={h} className={TH}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, i) => (
            <tr key={i} className={ROW}>
              {cells.map((c, j) => (
                <td key={j} className={j === 0 ? TD1 : TD}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function PricingHubPage() {
  return (
    <>
      <ArticleJsonLd
        headline="Field Service Software Pricing (2026): Plans & Costs Compared"
        description="Official 2026 prices, team-size costs, billing terms, add-ons and payment processing fees for Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse and Commusoft, from each vendor's own site."
        slug="pricing"
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
            Field service software pricing (2026): <span className="text-orange-400">plans &amp; costs compared</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Official prices, team-size costs, billing terms, add-ons, and payment fees for six field
            service platforms, checked on each vendor&rsquo;s own site in November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Of the six major field service platforms we track, only <strong>Jobber</strong> and{' '}
            <strong>Housecall Pro</strong> publish prices. Jobber starts at $29/month for one user
            (Core) and Housecall Pro at $59/month for one user (Basic), both billed annually;
            month-to-month they cost $49 and $79. For a five-person team, Jobber Connect and Housecall
            Pro Essentials both cost $149/month billed annually. <strong>ServiceTitan</strong>,{' '}
            <strong>Workiz</strong>, <strong>FieldPulse</strong>, and <strong>Commusoft</strong> do
            not publish prices and quote on request. Payment processing comes on top of any
            subscription: a $1,000 card payment made online costs $29.30 in fees at Jobber and $29.90
            at Housecall Pro, and a $1,000 bank payment costs $10 at both.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="prices-at-a-glance">
          <h2 className={H2}>Field service software prices at a glance</h2>
          <p className={SUB}>
            USD, excluding sales tax. Regular prices only; short introductory offers are covered
            below. Sources and check dates are listed at the end of this page.
          </p>
          <Table
            minWidth="min-w-[760px]"
            head={['Software', 'Publishes prices?', 'Entry price', 'Pricing model', 'Free trial']}
            rows={vendors.map((v) => [
              v.href ? <Link href={v.href} className="text-orange-600 hover:text-orange-800 dark:text-orange-400">{v.name}</Link> : v.name,
              v.published,
              v.entry,
              v.model,
              v.trial,
            ])}
          />
        </section>

        <div className="prose-body mt-12">
          <h2>Which tools publish prices, and which quote only</h2>
          <p>
            Jobber and Housecall Pro list every plan and price on their pricing pages, which is why
            this page can work out costs for them at different team sizes. Our{' '}
            <Link href="/pricing/jobber">Jobber pricing</Link> and{' '}
            <Link href="/pricing/housecall-pro">Housecall Pro pricing</Link> guides break down what
            each plan includes. The other four platforms ask you to contact sales. This is what each
            one says about how it prices.
          </p>

          <h3 id="servicetitan-pricing">ServiceTitan pricing</h3>
          <p>
            ServiceTitan names three plans, Starter, Essentials, and The Works, and shows
            &ldquo;Request Pricing&rdquo; on each. It says its &ldquo;per-technician pricing is
            designed to fit your business and goals, at any size,&rdquo; so the cost depends on how
            many technicians you run. It offers demos rather than a free trial. ServiceTitan does not
            publish onboarding fees, contract terms, or payment processing rates; its payments page
            says fees vary with the payment method, transaction type, and your agreement.
          </p>

          <h3 id="workiz-pricing">Workiz pricing</h3>
          <p>
            Workiz lists three plans, Standard, Pro, and Ultimate, each marked &ldquo;Request
            pricing&rdquo;. Its FAQ says choosing an annual plan can save &ldquo;$400+&rdquo; and that
            subscription prices exclude sales tax. Genius Phone, Genius Answering, and Genius
            Marketing are sold separately, as are card readers. Workiz has a 7-day free trial with no
            credit card.
          </p>

          <h3 id="fieldpulse-pricing">FieldPulse pricing</h3>
          <p>
            FieldPulse says it &ldquo;is seat-based and pricing is built around what your team
            needs,&rdquo; and asks you to get a custom quote. Optional premium products include
            Engage, Operator AI, Chat AI, Pricebook, FieldPulse Payments, FieldPulse Financing, Fleet
            Tracking, and Custom Forms. Its help center says FieldPulse Payments carries a processing
            fee on card and ACH payments plus a monthly cost, without stating the amounts.
          </p>

          <h3 id="commusoft-pricing">Commusoft pricing</h3>
          <p>
            Commusoft sells licences rather than flat plans. Every office user, manager, and engineer
            who uses the software needs one. Its standard plans run on a 12-month contract that
            renews annually. Monthly rolling licences can be added on top for extra staff, and daily
            licences for subcontractors are billed by the number of days used. Add-on modules include
            Fleet+ and Sales+. Commusoft says it is designed for businesses with six or more staff and
            publishes no prices.
          </p>
        </div>

        <section className="mt-12" id="cost-by-team-size">
          <h2 className={H2}>What it costs by team size: 1, 5, 10 and 15 users</h2>
          <p className={SUB}>
            Monthly price of the cheapest published plan that covers each headcount. Each cell shows
            the annual-billing rate first, then the month-to-month rate (Jobber&rsquo;s
            no-commitment option).
          </p>
          <Table
            head={['Team size', 'Jobber', 'Housecall Pro']}
            rows={teamSize.map((r) => [r.users, r.jobber, r.hcp])}
          />
          <div className="prose-body mt-4">
            <p>
              * Illustrative estimate. Housecall Pro lists $35/month for each user over eight on
              MAX but does not say whether that rate differs between annual and monthly billing.
              The Housecall Pro 10- and 15-user figures here and in the first-year table below
              assume it applies to both, so treat them as estimates and confirm the rate with
              Housecall Pro before you buy.
            </p>
            <p>
              <strong>The same headcount does not buy the same features.</strong> Jobber Connect
              includes QuickBooks Online sync, automated quote and invoice follow-ups, and route
              optimization (run on Jobber.com, not in the app); job costing starts on Grow, which
              costs $229, $299, and $399 a month for 5, 10, and 15 users on annual billing. Housecall
              Pro Essentials includes QuickBooks Online sync and flat-rate pricing, while route
              optimization and Recurring Service Plans start on MAX. So at five users both cost $149,
              but they are not interchangeable: check which plan has the features you need, not just
              the price for your team size.
            </p>
            <p>
              Two limits shape the small-team numbers. Jobber Core is a one-user plan that allows
              one additional seat; beyond that, Jobber points you to Connect. Housecall Pro lists an
              extra-user price only for MAX, so ask what a sixth user on Essentials would cost before
              you plan around it. Jobber also sells extra seats at $29/month each, but at 5, 10, and
              15 users its team plans cost less than adding seats to a one-user plan; the{' '}
              <Link href="/pricing/jobber">Jobber pricing</Link> guide shows the arithmetic.
            </p>
          </div>

          <h3 className="mt-8 text-[19px] font-bold text-slate-900 dark:text-white">First-year subscription cost</h3>
          <p className={SUB}>Twelve months on the plans above, annual billing vs month-to-month. Excludes add-ons, payment fees and tax. Housecall Pro 10- and 15-user totals are illustrative estimates (see the note above).</p>
          <Table
            head={['Team size', 'Jobber', 'Housecall Pro']}
            rows={firstYear.map((r) => [r.users, r.jobber, r.hcp])}
          />
        </section>

        <div className="prose-body mt-12">
          <h2 id="annual-vs-monthly">Annual vs monthly billing</h2>
          <p>
            <strong>Jobber</strong> has three billing options. Annual prepaid is the cheapest
            (Core $29/month) and is charged for the full year upfront; if you cancel early you keep
            access until the term ends, but the initial payment is non-refundable. A one-year
            commitment billed monthly sits in the middle (Core $39) and keeps billing until the 12
            months are up. No commitment is the most expensive (Core $49) and stops at the end of the
            current billing period. All Jobber subscriptions renew automatically unless you set them
            not to.
          </p>
          <p>
            <strong>Housecall Pro</strong> offers annual or monthly billing and says it does not
            require long-term contracts. Annual billing saves $240 a year on Basic, $480 on
            Essentials, and $360 on MAX. Its pricing page also shows introductory offers: Basic and
            Essentials at $26 for the first month, and MAX at $99/month for three months. Those are
            short promotions, so the cost examples on this page use the regular rates.
          </p>
          <p>
            Among the quote-only tools, <strong>Workiz</strong> says an annual plan can save $400 or
            more, and <strong>Commusoft</strong> builds its standard plans on a 12-month contract.
            ServiceTitan and FieldPulse do not publish their billing terms.
          </p>

          <h2 id="add-ons">Add-ons and extra users</h2>
          <p>
            <strong>Jobber</strong> publishes its add-on prices: Marketing Suite at $99/month
            (included on Plus), Receptionist at $29/month for 30 conversations and then $0.79 per
            conversation (unlimited on Plus), and Pipeline at $49/month. Extra users cost $29/month
            each, and a website is included on every plan.
          </p>
          <p>
            <strong>Housecall Pro</strong> lists add-ons such as CSR AI, Pipeline, Payroll, Voice,
            Campaigns, and Websites without prices, so get those in writing. Extra users on MAX cost
            $35/month each, Tap to Pay costs $5 per active device per month, and MAX includes the
            Sales Proposal Tool, which Housecall Pro values at $40/month.
          </p>
          <p>
            <strong>Workiz</strong> sells its Genius Phone, Answering, and Marketing products and its
            card readers separately. <strong>FieldPulse</strong> sells premium products such as
            Pricebook, Fleet Tracking, and Custom Forms on top of seats. <strong>Commusoft</strong>{' '}
            adds Fleet+ and Sales+ modules and calculates storage from your licence count.
            ServiceTitan does not publish add-on prices.
          </p>

          <h2 id="setup-costs">Setup, onboarding and data import</h2>
          <p>
            Neither Jobber nor Housecall Pro lists a setup fee on its pricing page. Jobber lists
            onboarding help, such as guided sessions and data import, with a stated
            &ldquo;value&rdquo; rather than a price, and the page does not say which plan gets which
            level of help. Housecall Pro MAX includes a dedicated
            onboarding specialist. Commusoft treats onboarding as part of the package and commits to
            training your team on the system. ServiceTitan, Workiz, and FieldPulse do not publish
            onboarding or implementation costs, so ask each for a written figure covering setup,
            training, and moving your customer and job data.
          </p>
        </div>

        <section className="mt-12" id="payment-processing-fees">
          <h2 className={H2}>Payment processing fees on a $1,000 invoice</h2>
          <p className={SUB}>
            Fee on a single $1,000 payment at each tool&rsquo;s published standard rate, US
            payments, with no surcharge passed to the customer.
          </p>
          <Table
            head={['How the customer pays', 'Jobber', 'Housecall Pro']}
            rows={invoice.map((r) => [r.method, r.jobber, r.hcp])}
          />
          <div className="prose-body mt-4">
            <p>
              Neither tool varies these rates by plan. Jobber&rsquo;s pricing page lists one
              card rate for online payments and a lower one for Tap to Pay, and does not list
              separate rates for keyed-in, saved, or American Express cards, so check those in your
              Jobber Payments settings. Housecall Pro charges 3.49% for keyed-in, saved, American
              Express, and commercial cards whichever way they are taken. Instant payouts add 1% at
              both.
            </p>
            <p>
              The quote-only tools do not publish rates on their pricing pages. ServiceTitan says
              fees depend on your agreement, FieldPulse says there is a per-transaction fee plus a
              monthly cost, and Workiz and Commusoft do not state them. Ask for processing rates as
              part of any quote, because on a busy month they can cost more than the subscription.
            </p>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="contracts-trials">Contracts, trials and cancellation</h2>
          <ul>
            <li><strong>Jobber:</strong> 14-day free trial on Grow, no credit card. Annual prepaid is non-refundable; a one-year commitment bills to the end of 12 months; no commitment ends with the billing period. Upgrades apply any time, downgrades at the end of the cycle.</li>
            <li><strong>Housecall Pro:</strong> 14-day free trial with MAX features, no credit card. No long-term contract; downgrades apply at the end of the billing period.</li>
            <li><strong>ServiceTitan:</strong> demo only. Contract terms not published.</li>
            <li><strong>Workiz:</strong> 7-day free trial, no credit card. Contract terms not stated on the pricing page.</li>
            <li><strong>FieldPulse:</strong> free demo; current trial terms not confirmed. Contract terms not stated on the pricing page.</li>
            <li><strong>Commusoft:</strong> 12-month contract that renews annually, for businesses with six or more staff. Its plans page advertises a free trial but does not say how to sign up, how long it lasts, or who is eligible.</li>
          </ul>

          <h2 id="quote-checklist">How to get a comparable quote</h2>
          <p>
            When a vendor quotes instead of publishing prices, ask for the same items from each so
            the numbers line up with Jobber and Housecall Pro:
          </p>
          <ul>
            <li>Price per technician or seat, and whether office staff need a paid seat.</li>
            <li>Which plan includes the features you named, and which are paid add-ons.</li>
            <li>Onboarding, training, and data import fees, as separate line items.</li>
            <li>Contract length, auto-renewal, the cancellation notice period, and any price increase at renewal.</li>
            <li>Card, ACH, and instant payout rates, and any monthly payments fee.</li>
            <li>The total for your first 12 months at your current team size, and at the size you expect next year.</li>
          </ul>

          <h2 id="which-fits">Which pricing fits your business</h2>
          <p>
            <strong>Solo operators</strong> pay least on Jobber Core ($29/month billed annually), but
            if you need QuickBooks Online sync the comparison becomes Jobber Connect at $99 versus
            Housecall Pro Essentials at $149. Our{' '}
            <Link href="/quickbooks">FSM software for QuickBooks</Link> guide shows which plan each
            tool requires, and <Link href="/free">free field service software</Link> covers what you
            can run without paying.
          </p>
          <p>
            <strong>Teams of two to fifteen</strong> can estimate both published tools from the tables
            above. The{' '}
            <Link href="/compare/jobber-vs-housecall-pro">Jobber vs Housecall Pro</Link> comparison
            covers the feature differences behind those prices, and{' '}
            <Link href="/for-small-business">field service software for small business</Link> has
            verified picks for small crews.
          </p>
          <p>
            <strong>Larger or more specialised operations</strong> usually end up getting quotes
            from ServiceTitan, FieldPulse, Workiz, or Commusoft. To decide which tool to shortlist,
            rather than what it costs, use our{' '}
            <Link href="/compare">comparison of the best field service management software</Link>,{' '}
            <Link href="/by-size">software by business size</Link>, or a trade guide such as{' '}
            <Link href="/by-industry/hvac">HVAC</Link>,{' '}
            <Link href="/by-industry/plumbing">plumbing</Link>, or{' '}
            <Link href="/by-industry/oil-gas">oil and gas</Link>. Our{' '}
            <Link href="/how-we-review">review method</Link> explains why we never estimate prices a
            vendor has not published.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on field service software pricing">
            Only Jobber and Housecall Pro publish prices: from $29 and $59 a month for one user,
            $149 for five users on either, and $229 for ten on Jobber, all billed annually. For ten
            users on Housecall Pro, an estimated $369 assumes its listed $35 extra-user rate applies. For
            ServiceTitan, Workiz, FieldPulse, and Commusoft, get a written quote covering seats,
            onboarding, contract terms, and payment processing, then compare the first-year total
            rather than the monthly headline.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
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
