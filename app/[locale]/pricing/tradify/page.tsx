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
 * /pricing/tradify: targets "tradify pricing" and "tradify cost". No GSC data for this topic yet.
 *
 * Every figure was checked on 2026-11-25 on Tradify's own pricing page (prices in $, US address in
 * the footer, no region selector content), its Product-Specific Terms (Tradify Limited, New
 * Zealand, changes effective December 27, 2025), its Stripe payments page and its home page.
 * Tradify's help center articles on billing terms, annual billing and cancellation returned 403
 * and were not retried, so pro-rating, billing dates and annual billing details are left out
 * rather than taken from search snippets. No conflicts between the pages read; the terms mention
 * "yearly charges" while the pricing page shows no annual option, and both are stated. Governing
 * law sits in the Access Group terms the Tradify terms point to, which were not read, so it is not
 * stated. Tradify's pages comparing itself with competitors were deliberately not used. Team cost
 * figures are arithmetic on published per-user prices. Nothing tested hands-on.
 */

const PATH = '/pricing/tradify'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Tradify Pricing (2026): Per-User Plans, Fees & Terms'
const DESCRIPTION =
  'Tradify pricing for 2026: Lite $47, Pro $51 and Plus $61 per user a month, a Custom plan, the $12 website add-on, Stripe card fees and cancellation terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/tradify',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Tradify Pricing', href: PATH },
]

const plans: { plan: string; price: string; three: string; five: string; adds: string; highlight?: boolean }[] = [
  { plan: 'Lite', price: '$47', three: '$141', five: '$235', adds: 'Job management, scheduling with Google Calendar sync, quoting and invoicing, pricing and markups, online payments, email tracking, Xero and QuickBooks sync' },
  { plan: 'Pro', price: '$51', three: '$153', five: '$255', adds: 'Custom branding, inquiry form and email inbox, recurring jobs, progress invoicing, costing and bill tracking, timesheets, subcontractor scheduling', highlight: true },
  { plan: 'Plus', price: '$61', three: '$183', five: '$305', adds: 'SmartTools (SmartRead for Bills, SmartWrite), service reminders, job tasks, purchase orders, bulk invoicing, kit bundles, staff activity history, job service reports' },
  { plan: 'Custom', price: 'On request', three: 'Not published', five: 'Not published', adds: 'Everything in Plus, for large teams with specific needs' },
]

const faqs = [
  {
    question: 'How much does Tradify cost?',
    answer:
      'Tradify’s pricing page lists three plans priced per user per month: Lite $47, Pro $51 and Plus $61. A Custom plan for large teams is priced on request. An Instant Website add-on costs $12 a month on any plan.',
  },
  {
    question: 'Is Tradify priced per user?',
    answer:
      'Yes. Every listed plan is a price per user per month, so cost grows with headcount. Three users on Pro is $153 a month and five users on Plus is $305 a month, by simple multiplication of the published prices.',
  },
  {
    question: 'Does Tradify have a free trial or free plan?',
    answer:
      'Tradify offers a 14-day free trial with all features, and its home page says no credit card is required. Its pricing page does not list a permanent free plan. Its terms say a free version may be available for evaluation and that free accounts unused for more than 90 days may be closed without notice.',
  },
  {
    question: 'Does Tradify have a contract?',
    answer:
      'Its terms (section 5.1.2) say you may cancel at any time by following the cancellation process within the service. Section 5.1.3 says monthly or yearly charges are not refunded when you cancel. The pages we could read do not state a minimum term or setup fee.',
  },
  {
    question: 'What are Tradify’s card payment fees?',
    answer:
      'Tradify takes card payments through Stripe. Its payments page lists 3.1% of the invoice total plus $0.30 per successful card charge, with the first payout 7 days after payment and later payouts 2 days after payment. You can choose to pass the fee on to your customer.',
  },
  {
    question: 'Does Tradify offer annual billing?',
    answer:
      'The pricing page does not show an annual option or discount. Its terms refer to “monthly or yearly charges”, and its help center has an annual billing FAQ that we could not open, so ask Tradify about annual terms before you sign up.',
  },
]

const sources = [
  { name: 'Tradify pricing (plans, per-user prices, Instant Website add-on, trial)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify home (audience, 14-day trial, training and phone support)', url: 'https://www.tradifyhq.com/', checked: '2026-11-25' },
  { name: 'Tradify payments with Stripe (card fees, payouts, surcharging)', url: 'https://www.tradifyhq.com/credit-card-payments-with-stripe', checked: '2026-11-25' },
  { name: 'Tradify Product-Specific Terms of Service', url: 'https://www.tradifyhq.com/terms', checked: '2026-11-25' },
  { name: 'ServiceM8 pricing (US plans, job limits)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function TradifyPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/tradify"
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
            Tradify pricing (2026): <span className="text-orange-400">per-user plans, fees &amp; terms</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every plan, add-on, card fee and cancellation term, taken from Tradify&rsquo;s own pricing page,
            payments page and terms on November 25, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Tradify charges <strong>per user, per month</strong>. Its pricing page lists <strong>Lite</strong> at
            $47, <strong>Pro</strong> at $51 and <strong>Plus</strong> at $61 per user, plus a{' '}
            <strong>Custom</strong> plan for large teams priced on request. An Instant Website add-on is $12 a
            month. There is a 14-day free trial with no credit card, card payments through Stripe cost 3.1% +
            $0.30, and its terms let you cancel at any time but give no refunds for charges already billed.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>Tradify plans and prices</h2>
          <p className={SUB}>
            Per-user monthly prices in dollars from Tradify&rsquo;s pricing page on November 25, 2026. The page
            shows a US address and no region selector, and prints no currency code, so confirm the currency on
            your quote. Team totals are the per-user price multiplied by headcount.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Per user a month', '3 users', '5 users', 'Adds'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((r) => (
                  <tr key={r.plan} className={r.highlight ? 'bg-orange-50 dark:bg-orange-500/10' : ROW}>
                    <td className={`py-[14px] pl-[22px] pr-4 text-[14.5px] font-bold text-slate-900 dark:text-white ${r.highlight ? 'border-l-[3px] border-orange-500' : ''}`}>
                      {r.plan}
                    </td>
                    <td className={TD}>{r.price}</td>
                    <td className={TD}>{r.three}</td>
                    <td className={TD}>{r.five}</td>
                    <td className={TD}>{r.adds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Pro is highlighted because it adds recurring jobs, progress invoicing, job costing and timesheets for
            $4 more per user than Lite. Each plan includes everything in the plan before it. The pricing page does
            not show an annual billing option, a setup fee or a minimum number of users.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>What a team pays: worked examples</h2>
          <p>
            These are plain arithmetic on the published per-user prices, before the optional website add-on and
            card fees. A sole trader on Lite pays $47 a month. A crew of three on Pro pays 3 &times; $51 = $153 a
            month. A team of five on Plus pays 5 &times; $61 = $305 a month, or $317 with the $12 Instant Website.
            Because every seat costs the same, the gap between plans widens as you hire: at five users, Plus costs
            $70 a month more than Lite.
          </p>
          <p>
            The pricing page does not say whether office staff and field staff are charged the same, or whether
            any user type is free. Ask Tradify how it counts users before you add admin or part-time accounts.
          </p>

          <h2>Add-ons and extra costs</h2>
          <ul>
            <li><strong>Instant Website</strong>: $12 a month, optional on every plan.</li>
            <li><strong>SmartTools</strong> (SmartRead for Bills and SmartWrite): included on Plus only, with no separate price listed for other plans.</li>
            <li><strong>Training and support</strong>: Tradify says it offers free one-on-one training and phone support.</li>
            <li><strong>Custom plan</strong>: price not published; you contact Tradify for a quote.</li>
          </ul>

          <h2>Payment processing fees</h2>
          <p>
            Tradify takes card payments through Stripe. Its payments page lists 3.1% of the invoice total plus
            $0.30 per successful card charge, and says connecting Tradify and Stripe is free if you subscribe to
            both. On a $1,000 invoice paid by card, that is $31.30. Your first payout arrives 7 days after
            payment and later payouts 2 days after payment. You can choose to pass the card fee on to your
            customer. The page also mentions accepting bank transfer and cash on invoices, but does not describe
            ACH processing.
          </p>

          <h2>Trial, contract and cancellation</h2>
          <p>
            Tradify offers a 14-day free trial with all features, and its home page says no credit card is
            required. Its Product-Specific Terms, from Tradify Limited (incorporated in New Zealand) with changes
            effective December 27, 2025, say in section 5.1.2 that you may cancel at any time through the
            cancellation process in the app, and in section 5.1.3 that monthly or yearly charges are not refunded
            when you cancel. Section 5.1.1 lets Tradify suspend or end the service at any time, and section 3.2
            says use may be subject to limits such as monthly transaction volumes.
          </p>
          <p>
            The terms page does not state a minimum term, auto-renewal, notice of price changes or what happens to
            your data after you cancel; it says it should be read with the Access Group terms. Tradify&rsquo;s help
            center articles on billing, annual billing and cancellation were not available to us, so export your
            customers, jobs and invoices before you cancel and ask about annual pricing in writing.
          </p>

          <h2>Who Tradify is priced for</h2>
          <p>
            Tradify describes itself as job management software for electricians, plumbers, gas engineers, HVAC
            techs, property maintenance services and other trades, from sole traders to larger teams. It syncs
            with Xero and QuickBooks; the pages we read do not say whether that means QuickBooks Online,
            QuickBooks Desktop or both, so check our <Link href="/quickbooks">QuickBooks guide</Link> and confirm
            with Tradify if you run Desktop.
          </p>

          <h2>Tradify vs ServiceM8 and Kickserv on price</h2>
          <p>
            Tradify&rsquo;s per-seat model suits small crews that want a full feature set per person. Other
            vendors price differently: ServiceM8 charges by jobs a month with unlimited users on paid plans
            (Growing is $79 for 150 jobs), and Kickserv bundles users into tiers. For a crew of five, that
            difference can outweigh the plan features, so price your real headcount on each. See{' '}
            <Link href="/pricing/servicem8">ServiceM8 pricing</Link>,{' '}
            <Link href="/pricing/kickserv">Kickserv pricing</Link> and{' '}
            <Link href="/pricing/jobber">Jobber pricing</Link>.
          </p>

          <h2>Which Tradify plan should you choose?</h2>
          <ul>
            <li><strong>Lite</strong> if you need quotes, jobs, scheduling, invoicing and accounting sync, and nothing more.</li>
            <li><strong>Pro</strong> if you run recurring work, bill in stages, track job costs or need timesheets and subcontractor scheduling.</li>
            <li><strong>Plus</strong> if you want purchase orders, service reminders, bulk invoicing, kit bundles or the SmartTools.</li>
            <li><strong>Custom</strong> if you are a large team with requirements the listed plans do not cover.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Tradify pricing">
            Tradify publishes simple per-user prices: $47, $51 or $61 a month per person, with Pro only $4 more
            than Lite. Multiply by your full headcount, add 3.1% + $0.30 per card payment, and remember that
            charges already billed are not refunded when you cancel.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/servicem8" className="text-orange-600 hover:text-orange-800">ServiceM8 pricing →</Link>
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
