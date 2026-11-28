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
 * /pricing/zuper: targets "zuper pricing", "zuper cost" and "zuper plans". No GSC data for this
 * topic yet.
 *
 * Zuper publishes no subscription prices, so this page shows none. Checked 2026-11-28: zuper.co/pricing
 * returned 404 and was not retried; the home page offers a demo only. Also read: the August 8, 2025
 * dispatch software cost blog (plan names Starter, Core, Premium and their dispatch features), the
 * Hover integration doc (Core and Premium only), the Zuper Pay fee structure (effective January 2025,
 * USD), the Support and Availability policy (effective April 2026) and two versions of the Zuper
 * Standard Terms. Conflict: info.zuper.co/en/standard-terms (effective April 2024) has no renewal
 * price clause and no export window, while zuper.co/terms-conditions (effective April 2026) allows fee
 * changes at renewal on 30 days' notice and gives a 30-day export window; both are stated. The blog
 * says providers "like Zuper typically" charge per user, which is reported as written, not as
 * Zuper's confirmed billing basis. Deliberately not used: the G2 page on s.zuper.co, third-party
 * starting prices and trial claims, an "unlimited employees" line seen only in a search snippet, and
 * Zuper's blog claims about competitors. Nothing tested hands-on.
 */

const PATH = '/pricing/zuper'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Zuper Pricing (2026): Plans, Payment Fees & Contract Terms'
const DESCRIPTION =
  'Zuper does not publish prices. See what Starter, Core and Premium include, Zuper Pay card and ACH fees, support plans, auto-renewal and what to ask in a quote.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/zuper',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Zuper Pricing', href: PATH },
]

const plans: { plan: string; includes: string }[] = [
  { plan: 'Starter', includes: 'Mobile and desktop apps, live technician tracking, travel time between jobs, routes' },
  { plan: 'Core', includes: 'Adds route optimization, recurring routes and service territories; required for the Hover integration' },
  { plan: 'Premium', includes: 'Adds rules-based dispatch board configurability (custom board colors and icons based on rules); also includes Hover' },
]

const payFees: { item: string; fee: string }[] = [
  { item: 'Card present', fee: '2.9% of the transaction amount' },
  { item: 'Card not present', fee: '3.2% of the transaction amount' },
  { item: 'International cards', fee: '2% on top of the card rate' },
  { item: 'ACH', fee: '1%, capped at $5' },
  { item: 'Disputes (card or ACH)', fee: '$15' },
  { item: 'Tap to Pay on iPhone or Android', fee: '$4 a month per user' },
  { item: 'M2 terminal', fee: '$4 a month per device' },
  { item: 'Stripe terminal', fee: '$59, then the recurring device charge' },
  { item: 'Check deposit / blurry image / bounced check', fee: '$1 / $0.25 / $20' },
  { item: 'Card record migration', fee: '$2,000 up to 10,000 records; $4,000 for 10,001 to 20,000; custom above' },
]

const terms: { topic: string; rule: string }[] = [
  { topic: 'Initial term', rule: 'Set in your Order Form; the terms do not state a length' },
  { topic: 'Renewal', rule: 'Renews automatically for periods equal to the initial term unless either side gives notice at least 30 days before it ends (13.1)' },
  { topic: 'Price changes', rule: 'Fees can change for a renewal term on at least 30 days’ written notice; you can decline by not renewing (7.4)' },
  { topic: 'Billing', rule: 'Invoiced in advance, payable in US dollars within 15 days; 1.5% a month interest on late amounts (7.2)' },
  { topic: 'Refunds', rule: 'Fees are non-cancellable and non-refundable (7.2, 13.3)' },
  { topic: 'Extra users', rule: 'Going over the user or usage limits on your Order Form brings overage charges (7.3)' },
  { topic: 'Your data', rule: 'Export window of 30 days after the agreement ends, then deletion; export help billed at standard rates (13.4)' },
  { topic: 'Governing law', rule: 'Washington State law, courts in King County, Washington; the contracting party is Zuper, Inc. (17)' },
]

const faqs = [
  {
    question: 'How much does Zuper cost?',
    answer:
      'Zuper does not publish subscription prices. Its pricing URL returned a 404 when we checked, its home page offers a demo instead, and its own cost article tells readers to contact Zuper or book a demo for pricing. You need a quote to know the cost.',
  },
  {
    question: 'What plans does Zuper have?',
    answer:
      'Zuper’s own blog names three plans: Starter, Core and Premium. Starter covers the mobile and desktop apps, live technician tracking and routes; Core adds route optimization, recurring routes and service territories; Premium adds rules-based dispatch board configuration. Its help docs say the Hover integration needs Core or Premium.',
  },
  {
    question: 'Does Zuper charge per user?',
    answer:
      'Zuper does not say so outright. Its cost article says providers like Zuper typically charge per user, its terms refer to user limits set in your Order Form with overage charges above them, and Tap to Pay is $4 a month per user. Ask for the per-user price and any minimum in your quote.',
  },
  {
    question: 'What are Zuper Pay fees?',
    answer:
      'Zuper’s fee page, effective January 2025, lists 2.9% for card-present payments, 3.2% for card-not-present, 2% extra for international cards, ACH at 1% capped at $5 and a $15 dispute fee. Tap to Pay costs $4 a month per user.',
  },
  {
    question: 'Is Zuper an annual contract?',
    answer:
      'Zuper’s Standard Terms set the first term in your Order Form, then renew automatically for periods of the same length unless either side gives notice at least 30 days before the term ends. Fees are invoiced in advance and are non-refundable.',
  },
  {
    question: 'Does Zuper offer 24/7 support?',
    answer:
      'Only on Premium Support. Its Support and Availability policy gives Core Support 24 hours a day, Monday through Friday, and Premium Support 24 hours a day, 7 days a week, if your Order Form includes it. Zuper describes 24/7 support as an add-on but does not publish its price.',
  },
]

const sources = [
  { name: 'Zuper pricing URL (returned 404)', url: 'https://www.zuper.co/pricing', checked: '2026-11-28' },
  { name: 'Zuper home (demo, no published prices)', url: 'https://www.zuper.co/', checked: '2026-11-28' },
  { name: 'Zuper blog: dispatch software cost (Starter, Core, Premium features)', url: 'https://www.zuper.co/blog/dispatch-software-cost', checked: '2026-11-28' },
  { name: 'Zuper docs: Hover integration (Core and Premium only)', url: 'https://docs.zuper.co/Integrations/Measurements_and_estimations/Zuper_Hover', checked: '2026-11-28' },
  { name: 'Zuper Pay fee structure (effective January 2025)', url: 'https://info.zuper.co/en/zuperpay-fee', checked: '2026-11-28' },
  { name: 'Zuper Support and Availability (effective April 2026)', url: 'https://info.zuper.co/-support-and-availability', checked: '2026-11-28' },
  { name: 'Zuper Standard Terms on zuper.co (effective April 2026)', url: 'https://www.zuper.co/terms-conditions', checked: '2026-11-28' },
  { name: 'Zuper Standard Terms on info.zuper.co (effective April 2024)', url: 'https://info.zuper.co/en/standard-terms', checked: '2026-11-28' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function ZuperPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/zuper"
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
            Zuper pricing (2026): <span className="text-orange-400">plans, payment fees &amp; terms</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How Zuper charges, what its three plans include, what Zuper Pay costs and what its contract commits
            you to, from its own pages on November 28, 2026. Zuper publishes no subscription prices, so we show
            none.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Zuper does not publish subscription prices. Its own pages name three plans,{' '}
            <strong>Starter</strong>, <strong>Core</strong> and <strong>Premium</strong>, and send you to a demo
            for pricing. Zuper Pay card fees are published: <strong>2.9%</strong> card present,{' '}
            <strong>3.2%</strong> card not present and <strong>ACH at 1% capped at $5</strong>, with Tap to Pay at
            $4 a month per user. Its Standard Terms renew automatically for the same length as your first term,
            need 30 days&rsquo; notice, bill in advance and make fees non-refundable.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>What each Zuper plan includes</h2>
          <p className={SUB}>
            From Zuper&rsquo;s dispatch software cost article (August 8, 2025) and its Hover integration doc,
            checked November 28, 2026. No plan shows a price.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'What Zuper lists'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((r) => (
                  <tr key={r.plan} className={ROW}>
                    <td className={TD1}>{r.plan}</td>
                    <td className={TD}>{r.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            The article lists dispatch features only. It also names work orders, timekeeping, invoicing and
            inventory as features that affect cost, without saying which plan includes them.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>How Zuper pricing works</h2>
          <p>
            Zuper&rsquo;s pricing URL returned a 404 when we checked, and its home page offers &ldquo;Schedule
            Demo&rdquo; instead of a price list. Its cost article says &ldquo;platform providers like Zuper
            typically charge for dispatch software on a per-user basis&rdquo; and that higher plans add features,
            but it stops short of saying exactly how Zuper bills. Its Standard Terms refer to &ldquo;any user or
            usage limitations set forth on an Order Form&rdquo; and charge overages above them, without defining a
            user. Ask how users are counted, whether office and field staff cost the same, and whether there is a
            minimum.
          </p>
          <p>
            Zuper markets itself to service, roofing and exteriors businesses. If you are pricing tools for roofing
            work, see our <Link href="/by-industry/roofing">roofing software</Link> page.
          </p>

          <h2>Support plans and uptime</h2>
          <p>
            Zuper&rsquo;s Support and Availability policy (effective April 2026) gives every customer Core Support,
            available 24 hours a day, Monday through Friday, excluding holidays, in your primary time zone.
            Premium Support, 24 hours a day, 7 days a week, applies only if your Order Form includes it, and its
            price is not published. Both aim to respond to Severity 1 issues within 30 minutes, and up to five
            named contacts can raise tickets. Zuper targets 99.9% availability, with service credits on the affected
            month&rsquo;s fees of 5% for availability between 97.5% and 99.8%, 10% between 95% and 97.5%, and 20%
            below 95%, if you report downtime within 72 hours.
          </p>

          <h2>Implementation and data migration</h2>
          <p>
            Zuper&rsquo;s April 2024 Standard Terms say implementation help is provided only if your Order Form
            includes it, and extra hours are billed at its then-current hourly consultation rates. No setup fee or
            hourly rate is published. Help exporting your data when you leave is also billed at standard rates.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Zuper Pay fees</h2>
          <p className={SUB}>
            From Zuper&rsquo;s fee structure page (effective January 2025), checked November 28, 2026. Amounts are
            in US dollars; the page does not name a region.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Item', 'Fee'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {payFees.map((r) => (
                  <tr key={r.item} className={ROW}>
                    <td className={TD1}>{r.item}</td>
                    <td className={TD}>{r.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Arithmetic on the published rates: a $1,000 invoice costs $29 by card in person, $32 by card online and
            $5 by ACH. The page does not list payout timing or a separate American Express rate.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={H2}>Contract terms</h2>
          <p className={SUB}>
            From the Zuper Standard Terms on zuper.co (effective April 2026), checked November 28, 2026.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Topic', 'What the terms say'].map((h) => (
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
            Neither version allows you to end the agreement early for convenience; termination is for an uncured
            material breach after 30 days&rsquo; notice.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Two versions of the terms disagree</h2>
          <p>
            Zuper hosts a second copy of its Standard Terms on info.zuper.co, marked effective April 2024. It
            shares the 30-day non-renewal notice, advance billing, 15-day payment and non-refundable fees, but
            differs in three places:
          </p>
          <ul>
            <li>It has no clause on fee changes at renewal, and instead asks for at least 14 days&rsquo; written notice of changes to billing terms.</li>
            <li>It gives no export window after termination.</li>
            <li>It says access can be suspended if your account is more than 60 days past due, and data may be deleted at 90 days delinquent.</li>
          </ul>
          <p>
            The zuper.co version is newer, but your Order Form decides which terms apply, so ask which version it
            references. Our <Link href="/guides/field-service-software-contract-terms">contract terms guide</Link>{' '}
            explains what to look for.
          </p>

          <h2>How to get a comparable Zuper quote</h2>
          <ul>
            <li>Ask for the price of Starter, Core and Premium, and how each user is counted.</li>
            <li>Ask for the length of the first term and when the 30-day notice window falls.</li>
            <li>Get any implementation fee and the hourly consultation rate in writing.</li>
            <li>Ask whether Premium Support is included or extra, and its price.</li>
            <li>Count field staff who will use Tap to Pay, at $4 a month each.</li>
            <li>Confirm which plan includes the integrations you need, such as Hover on Core and Premium.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Compare with other tools</h2>
          <p className={SUB}>From each vendor&rsquo;s own pricing page, as covered on our pricing pages.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { tool: 'FieldPulse', price: 'Quote only; seat-based pricing with 1-year auto-renewing terms', href: '/pricing/fieldpulse' },
              { tool: 'ServiceTitan', price: 'Quote only; Core, Demand AI, Field AI and MAX packages', href: '/pricing/servicetitan' },
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
          <h2>Pros and cons of Zuper&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>Payment fees are published in full, including ACH capped at $5.</li>
            <li>A written uptime target with service credits.</li>
            <li>Core Support runs 24 hours a day on weekdays for every customer.</li>
            <li>The newer terms give a 30-day window to export your data.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>No published subscription prices, and no free trial on the pages we checked.</li>
            <li>Automatic renewal for the full first-term length, with fees in advance and no refunds.</li>
            <li>Fees can change at renewal on 30 days&rsquo; notice.</li>
            <li>Tap to Pay, Premium Support, implementation and data export help all cost extra.</li>
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
          <CalloutBox tone="verdict" title="Bottom line on Zuper pricing">
            Zuper is quote-only, with three plans named Starter, Core and Premium and no published subscription
            price. Its Zuper Pay fees are public: 2.9% in person, 3.2% online and ACH at 1% up to $5. Expect
            automatic renewal, payment in advance and paid extras, and get the first-term length, user count and
            every fee in writing.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/by-industry/roofing" className="text-orange-600 hover:text-orange-800">Roofing software →</Link>
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
