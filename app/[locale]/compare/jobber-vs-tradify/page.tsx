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
 * /compare/jobber-vs-tradify: targets "jobber vs tradify". No GSC data for this topic yet.
 *
 * Tradify facts reuse /pricing/tradify and the b16 research notes: pricing page, home page, Stripe
 * payments page and Product-Specific Terms, all checked 2026-11-25. The pricing page prints prices
 * in $ with no currency code and shows no annual option, while the terms mention "monthly or
 * yearly charges"; both are stated. Tradify's help center returned 403 and was not refetched, so
 * how Tradify counts users, pro-rating and annual billing are left out. Governing law sits in
 * Access Group terms that were not read, so it is not stated. Jobber facts reuse the site's
 * verified pages (/pricing/jobber, /compare/jobber-vs-servicem8, /compare/jobber-alternatives:
 * pricing 2026-11-03 to 2026-11-21, Terms of Service 2026-11-21, help center 2026-11-03 to
 * 2026-11-20); getjobber.com was not refetched. Jobber's own help articles disagree on the AI
 * Receptionist allowance (30 vs 100 conversations); both are stated. Not used: Tradify's pages
 * comparing itself with competitors, any vendor's claims about the other, Tradify help center
 * search snippets, Jobber's ended introductory offer. Feature names differ between vendors, so
 * rows compare named features only, not equivalence. Cost examples are arithmetic on published
 * prices. No new URLs fetched. Nothing tested hands-on.
 */

const PATH = '/compare/jobber-vs-tradify'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Jobber vs Tradify (2026): Team Bands vs Per-User Pricing'
const DESCRIPTION =
  'Jobber prices by team band from $29/month; Tradify charges $47 to $61 per user. Compare team costs, accounting sync, job costing, card fees and terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/jobber-vs-tradify',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber vs Tradify', href: PATH },
]

const rows: { feature: string; jobber: string; tradify: string }[] = [
  { feature: 'What you pay for', jobber: 'Plan plus team band (1, 5, 10 or 15 users); price steps up by band, not by person', tradify: 'Plan price per user per month; every seat costs the same' },
  { feature: 'One user', jobber: 'Core $29 a month billed annually ($49 with no commitment); Connect $99 ($139); Grow $149 ($199)', tradify: 'Lite $47, Pro $51, Plus $61 a month; no free plan listed' },
  { feature: 'Five users', jobber: 'Connect $149, Grow $229, Plus $399 billed annually ($199, $299, $499 with no commitment)', tradify: 'Lite $235, Pro $255, Plus $305 a month (5 × the per-user price)' },
  { feature: 'Larger teams', jobber: 'Published bands to 15 users (Grow $399 billed annually); extra users $29 each; 16+ contact sales', tradify: 'Same per-user price at any size; Custom plan for large teams, price on request' },
  { feature: 'Billing options', jobber: 'Annual prepaid, 1-year commitment billed monthly, or no commitment', tradify: 'Monthly prices only on the pricing page; terms mention “monthly or yearly charges”' },
  { feature: 'Trial', jobber: '14 days of Grow, no credit card; no free plan', tradify: '14 days with all features, no credit card' },
  { feature: 'Cancellation and refunds', jobber: 'Cancel any time on no commitment; annual prepaid non-refundable; plans renew unless cancelled 30 days before renewal', tradify: 'Cancel any time in the app; monthly or yearly charges not refunded; Tradify Limited (New Zealand) is the contracting party' },
  { feature: 'Accounting sync', jobber: 'QuickBooks Online and Xero from Connect; no QuickBooks Desktop listed', tradify: 'Xero and QuickBooks on every plan, from Lite; Online or Desktop not specified' },
  { feature: 'Job costing and time', jobber: 'Time and expense tracking from Connect; job costing from Grow', tradify: 'Costing, bill tracking and timesheets from Pro' },
  { feature: 'Recurring and progress billing', jobber: 'Progress invoicing on every plan, including Core', tradify: 'Recurring jobs and progress invoicing from Pro; bulk invoicing on Plus' },
  { feature: 'Bills, purchasing and subcontractors', jobber: 'Receipt capture and supplier invoice scanning on Plus; purchase orders and subcontractor scheduling not documented', tradify: 'Subcontractor scheduling from Pro; purchase orders, kit bundles and SmartRead for Bills on Plus' },
  { feature: 'Booking, website and AI answering', jobber: 'Online booking, request forms and a website on Core; AI Receptionist $29 a month add-on, included on Plus', tradify: 'Inquiry form and email inbox from Pro; Instant Website $12 a month add-on; no AI call answering documented' },
  { feature: 'Routing and GPS', jobber: 'Routing and GPS tracking from Connect', tradify: 'Not documented on the pages we read' },
  { feature: 'Card fees and payouts', jobber: '2.9% + 30¢ online, 2.7% + 30¢ Tap to Pay, ACH 1% (US only); 2-business-day payouts after the first', tradify: 'Stripe 3.1% + $0.30; first payout 7 days after payment, then 2 days; can pass the fee to the customer; ACH not described' },
]

const faqs = [
  {
    question: 'Is Tradify cheaper than Jobber?',
    answer:
      'For one to three users who need accounting sync, usually yes: Tradify Lite includes Xero and QuickBooks sync at $47 a user, while Jobber starts that sync on Connect at $99 billed annually for one user. From five users, Jobber’s team bands tend to win: Grow for 5 users is $229 billed annually against $255 for five users on Tradify Pro, and at 10 users the gap is $299 against $510. On Jobber’s no-commitment rates the 5-user comparison flips ($299 against $255). Price your real headcount and billing choice on both.',
  },
  {
    question: 'Does Jobber charge per user like Tradify?',
    answer:
      'Not in the same way. Tradify charges the same price for every user on a plan. Jobber prices each plan by team band (1, 5, 10 or 15 users), so a 5-user band costs much less than five single seats, and lists extra users at $29 a month on top of a band.',
  },
  {
    question: 'Which works with QuickBooks or Xero on the cheapest plan?',
    answer:
      'Tradify. Its pricing page lists Xero and QuickBooks sync on Lite, its cheapest plan. Jobber’s Core plan has no accounting sync; QuickBooks Online and Xero start on Connect. Jobber does not list QuickBooks Desktop, and Tradify’s pages do not say whether its QuickBooks sync covers Online, Desktop or both, so confirm if you run Desktop.',
  },
  {
    question: 'Is Tradify built for electricians and plumbers?',
    answer:
      'Tradify describes itself as job management software for electricians, plumbers, gas engineers, HVAC techs, property maintenance services and other trade businesses, from sole traders to larger teams. Its Pro and Plus features (progress invoicing, bill tracking, purchase orders, kit bundles, subcontractor scheduling) are aimed at project and install work. The Jobber pages we rely on do not name a target trade.',
  },
  {
    question: 'Can I cancel Jobber or Tradify at any time?',
    answer:
      'Tradify’s terms say you can cancel at any time through the app, but monthly or yearly charges already billed are not refunded. Jobber’s no-commitment monthly option can be cancelled at any time; a 1-year commitment keeps billing until the term ends, and annual prepaid is non-refundable. Jobber plans renew automatically unless cancelled 30 days before renewal.',
  },
  {
    question: 'Which has lower card payment fees?',
    answer:
      'Jobber publishes 2.9% + 30¢ for cards paid online and 2.7% + 30¢ for Tap to Pay, plus 1% for US bank (ACH) payments. Tradify’s Stripe integration costs 3.1% + $0.30 per card charge, and its page does not describe ACH. On a $1,000 card payment that is $29.30 with Jobber online and $31.30 with Tradify. Tradify lets you pass the card fee on to your customer.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, bands, billing options, trial, renewal, add-ons, fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber Terms of Service (last updated September 22, 2026)', url: 'https://www.getjobber.com/terms-of-service/', checked: '2026-11-21' },
  { name: 'Jobber help: Manage Team (extra seats)', url: 'https://help.getjobber.com/en/articles/manage-teamhow-to-add-manage-and-deactivate-team-members/', checked: '2026-11-03' },
  { name: 'Jobber help: AI Receptionist', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-03' },
  { name: 'Jobber help: add-on features', url: 'https://help.getjobber.com/en/articles/add-on-features-to-your-jobber-plan-subscription/', checked: '2026-11-03' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: Jobber Payments payout window', url: 'https://help.getjobber.com/en/articles/jobber-payments-payout-window/', checked: '2026-11-03' },
  { name: 'Jobber help: bank payments (ACH)', url: 'https://help.getjobber.com/hc/en-us/articles/1500004781762-Bank-Payments-ACH', checked: '2026-11-03' },
  { name: 'Jobber help: Tap to Pay', url: 'https://help.getjobber.com/hc/en-us/articles/34647042014615-Tap-to-Pay', checked: '2026-11-03' },
  { name: 'Tradify pricing (plans, per-user prices, features by plan, Instant Website add-on, trial)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify home (trades served, team sizes, 14-day trial, training and phone support)', url: 'https://www.tradifyhq.com/', checked: '2026-11-25' },
  { name: 'Tradify payments with Stripe (card fees, payouts, passing on fees)', url: 'https://www.tradifyhq.com/credit-card-payments-with-stripe', checked: '2026-11-25' },
  { name: 'Tradify Product-Specific Terms of Service (Tradify Limited, cancellation, refunds)', url: 'https://www.tradifyhq.com/terms', checked: '2026-11-25' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function JobberVsTradifyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/jobber-vs-tradify"
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
            Jobber vs Tradify: <span className="text-orange-400">team bands or a price per user</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Team costs, plan features, accounting sync, payments and cancellation terms, from each
            vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Jobber</strong> prices each plan by team band: $29 a month billed annually for one user
            on Core, then bands of 5, 10 and 15 users, such as Grow at $229 for five. <strong>Tradify</strong>{' '}
            charges a flat price per user: Lite $47, Pro $51 and Plus $61 a month, so five users on Pro cost
            $255. Tradify is usually cheaper for a solo trade or a crew of two or three that needs Xero or
            QuickBooks sync, which it includes from Lite. Jobber’s bands get cheaper per person as the team
            grows, and it adds annual billing, ACH at 1% and lower card fees. Tradify lets you cancel at any
            time but does not refund charges already billed.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Jobber vs Tradify at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Monthly
            prices; Tradify’s pricing page prints prices in $ with no currency code, so confirm the currency
            on your quote. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Jobber</th>
                  <th scope="col" className="p-3.5">Tradify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.jobber}</td>
                    <td className="p-3.5">{r.tradify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: team bands vs a flat price per seat</h2>
          <p>
            Jobber sets the price by plan and team band. Billed annually, Core is $29 for one user (with one
            extra seat at most), Connect $99 and Grow $149 for one user, and Plus $399 for five users. At 5
            users Connect is $149 and Grow $229; at 10 users, $229 and $299; at 15 users, $299 and $399. Extra
            users are listed at $29 a month, and teams of 16 or more contact sales. The same plans cost more on
            a 1-year commitment billed monthly or with no commitment, for example $49 for Core and $299 for the
            5-user Grow band. Every band is in our{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> guide.
          </p>
          <p>
            Tradify charges per user, per month: Lite $47, Pro $51 and Plus $61, with a Custom plan for large
            teams priced on request. Each plan includes everything in the one before it. Its pricing page shows
            no annual option, setup fee or minimum number of users, and does not say whether office and field
            staff are counted the same way, so ask before you add admin or part-time accounts. See{' '}
            <Link href="/pricing/tradify" className={A}>Tradify pricing</Link>.
          </p>

          <h2 id="cost-examples">What a team pays on each</h2>
          <p>
            Arithmetic on published prices, using the cheapest plan that covers each need. Jobber is shown as
            annual prepaid / no commitment; Tradify’s page lists only monthly per-user prices. Feature names
            differ between the two, so check that the named feature does what you need.
          </p>
          <ul>
            <li><strong>Solo, no accounting sync:</strong> Jobber Core at $29 / $49, against Tradify Lite at $47.</li>
            <li><strong>Solo, needs Xero or QuickBooks sync:</strong> Tradify Lite at $47, against Jobber Connect at $99 / $139 (Core has no sync).</li>
            <li><strong>Three users, needs accounting sync:</strong> Tradify Lite at 3 × $47 = $141, against the Jobber Connect 5-user band at $149 / $199.</li>
            <li><strong>Five users, needs job costing:</strong> Tradify Pro at 5 × $51 = $255, against the Jobber Grow 5-user band at $229 / $299.</li>
            <li><strong>Ten users, needs job costing:</strong> Tradify Pro at 10 × $51 = $510, against the Jobber Grow 10-user band at $299 / $399.</li>
            <li><strong>Fifteen users, needs job costing:</strong> Tradify Pro at 15 × $51 = $765, against the Jobber Grow 15-user band at $399 / $499.</li>
          </ul>
          <p>
            The pattern: Tradify’s cost grows in a straight line with headcount, while Jobber’s bands spread
            the cost as the team grows. Tradify wins for solo trades and crews of two or three that need
            accounting sync. In these examples, from five users Jobber’s bands are cheaper on annual billing,
            and from ten users on any billing option.
          </p>

          <h2 id="trades">Trade focus and plan features</h2>
          <p>
            Tradify describes itself as job management software for electricians, plumbers, gas engineers,
            HVAC techs, property maintenance services and other trades, from sole traders to larger teams, and
            says it offers free one-on-one training and phone support. Its plan features lean toward project
            and install work: progress invoicing, costing and bill tracking, timesheets and subcontractor
            scheduling on Pro, then purchase orders, kit bundles, job tasks, service reminders, bulk invoicing,
            job service reports and the SmartTools (SmartRead for Bills and SmartWrite) on Plus. See our{' '}
            <Link href="/by-industry/electrical" className={A}>electrical</Link> and{' '}
            <Link href="/by-industry/plumbing" className={A}>plumbing</Link> software pages.
          </p>
          <p>
            Jobber puts online booking, request forms, a website and progress invoicing on every plan, adds
            routing, GPS tracking, checklists, time and expense tracking and automated quote and invoice
            follow-ups on Connect, then two-way texting, job costing and optional line items on Grow. Plus
            adds crew scheduling, receipt capture and supplier invoice scanning and API access. Our Jobber
            sources do not document purchase orders or subcontractor scheduling, and the Tradify pages we read
            do not document routing or GPS.
          </p>

          <h2 id="accounting">Accounting: QuickBooks and Xero</h2>
          <p>
            Tradify lists Xero and QuickBooks sync on Lite, its cheapest plan. Its pages do not say whether
            that means QuickBooks Online, Desktop or both. Jobber syncs with QuickBooks Online and Xero from
            Connect, $99 a month billed annually for one user, and does not list QuickBooks Desktop. If you run
            Desktop, our <Link href="/quickbooks" className={A}>QuickBooks guide</Link> covers tools that
            support it.
          </p>

          <h2 id="contracts">Trials, contracts and cancellation</h2>
          <p>
            Both offer a 14-day trial without a credit card: Jobber’s runs on Grow, Tradify’s includes all
            features. Neither lists a permanent free plan on its pricing page. Jobber sells each plan three
            ways: annual prepaid (paid upfront and non-refundable), a one-year commitment billed monthly, or no
            commitment at a higher rate that you can cancel at any time. All renew automatically unless
            cancelled 30 days before renewal. Jobber’s Terms of Service were last updated September 22, 2026.
          </p>
          <p>
            Tradify’s Product-Specific Terms name Tradify Limited, a New Zealand company, as the contracting
            party. They say you can cancel at any time through the app and that monthly or yearly charges are
            not refunded when you cancel. The pricing page shows no annual option even though the terms mention
            yearly charges, so ask Tradify about annual billing in writing. The terms we read do not state a
            minimum term, auto-renewal, price-change notice or what happens to your data after you cancel, so
            export your records before you leave either tool.
          </p>

          <h2 id="payments">Payments, booking and AI answering</h2>
          <p>
            Jobber publishes 2.9% + 30¢ for cards paid online, 2.7% + 30¢ for Tap to Pay, 1% for US bank (ACH)
            payments and an extra 1% for instant payouts; after the first payout, card payments arrive on a
            2-business-day schedule. Tradify takes cards through Stripe at 3.1% of the invoice plus $0.30, with
            the first payout 7 days after payment and later payouts 2 days after. Tradify lets you pass the card
            fee on to your customer and mentions bank transfer and cash on invoices, but does not describe ACH.
          </p>
          <p>
            Jobber includes a website on Core and sells an AI Receptionist that answers calls and texts for $29
            a month, included on Plus. Its Receptionist article says 30 conversations per billing cycle, then
            $0.79 each, while its add-ons article says 100 a month. Tradify sells an Instant Website for $12 a
            month and documents no AI call answering. Our{' '}
            <Link href="/guides/ai-answering-service-for-contractors" className={A}>AI answering guide</Link>{' '}
            compares answering options across vendors.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo trade that needs Xero or QuickBooks sync:</strong> Tradify Lite.</li>
            <li><strong>Solo operator who does not need accounting sync:</strong> Jobber Core, especially on annual billing.</li>
            <li><strong>Crew of two or three:</strong> Tradify is usually cheaper; at four users run your numbers on both.</li>
            <li><strong>Team of five or more:</strong> Jobber’s bands, especially on annual billing.</li>
            <li><strong>Purchase orders, kit bundles or subcontractor scheduling:</strong> Tradify Pro or Plus.</li>
            <li><strong>Routing, GPS, ACH payments or AI call answering:</strong> Jobber.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link>{' '}
            and <Link href="/compare/jobber-vs-servicem8" className={A}>Jobber vs ServiceM8</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Jobber vs Tradify">
            The deciding number is headcount. Tradify charges the same price for every user and includes
            accounting sync from its cheapest plan, so it suits solo trades and small crews. Jobber’s team
            bands get cheaper per person from five users, and it adds annual billing, ACH at 1%, routing and
            AI answering. Our <Link href="/how-we-review" className={A}>review method</Link> explains why we
            show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
            <Link href="/pricing/tradify" className="text-orange-600 hover:text-orange-800">Tradify pricing →</Link>
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
