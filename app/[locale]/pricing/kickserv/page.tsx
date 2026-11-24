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
 * /pricing/kickserv: targets "kickserv pricing", "kickserv cost" and "kickserv plans". No GSC data
 * for this topic yet. Alternatives intent stays on /compare/kickserv-alternatives.
 *
 * Every figure was checked on 2026-11-24 on Kickserv's pricing page, help center, integrations and
 * payments pages, and Terms of Service (last modified 2024-08-21). The pricing page shows $60/$119/
 * $199 a month with "Save 20% with annual subscription" and does not label which billing option the
 * shown price is; the page says so. A free plan and Flex appear only in help articles and old pages,
 * and Flex's $19 price only in a 2022 blog, so no price is given for them. Premium has no published
 * price. Per-user figures are arithmetic on published prices. Nothing tested hands-on.
 */

const PATH = '/pricing/kickserv'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Kickserv Pricing (2026): Plans, Users, Fees & Terms'
const DESCRIPTION =
  'Kickserv pricing for 2026: Start $60 for 5 users, Run $119 for 10 and Scale $199 for 20 a month, plus the QuickBooks Desktop add-on, payment fees and terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/kickserv',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Kickserv Pricing', href: PATH },
]

const plans: { plan: string; price: string; users: string; perUser: string; adds: string; highlight?: boolean }[] = [
  { plan: 'Start', price: '$60', users: '5', perUser: '$12.00', adds: 'Automated email and text reminders, contact form, over 20 reports, time and expense tracking, QuickBooks Online' },
  { plan: 'Run', price: '$119', users: '10', perUser: '$11.90', adds: 'Dispatch mapping, GPS check-ins, custom fields, custom reports, QuickBooks Desktop for $50 a month extra', highlight: true },
  { plan: 'Scale', price: '$199', users: '20', perUser: '$9.95', adds: 'Custom templates' },
]

const fees: { item: string; rate: string }[] = [
  { item: 'Card with Tap to Pay', rate: '2.9%' },
  { item: 'Card not present (online or keyed)', rate: '3.9%' },
  { item: 'ACH bank payment', rate: '1% + $0.30' },
  { item: 'Instant payout', rate: 'Extra 1%, within 30 minutes' },
  { item: 'Passing fees to customers', rate: 'Up to 4%, or a flat fee from $1' },
]

const faqs = [
  {
    question: 'How much does Kickserv cost?',
    answer:
      'Kickserv’s pricing page lists Start at $60 a month for 5 users, Run at $119 for 10 users and Scale at $199 for 20 users, and says you save 20% with an annual subscription. It does not label whether the listed prices are the monthly or the annual rate, so confirm at checkout.',
  },
  {
    question: 'Does Kickserv have a free plan?',
    answer:
      'Not on its current pricing page. Its help center mentions switching to a free plan to keep your data after cancelling, and an older page says pricing starts with a $0 plan, but no limits are published. Every paid plan has a 30-day free trial.',
  },
  {
    question: 'How much is QuickBooks Desktop with Kickserv?',
    answer:
      'QuickBooks Online is included from Start. QuickBooks Desktop sync costs $50 a month or $480 a year, listed on the Run plan, and Kickserv says it works with every version including Mac.',
  },
  {
    question: 'What are Kickserv’s payment fees?',
    answer:
      'Kickserv lists 2.9% for Tap to Pay and 3.9% for card-not-present payments, the same on every plan. ACH costs 1% + $0.30, and instant payouts cost an extra 1%. You can pass fees on to customers, up to 4% or as a flat fee from $1.',
  },
  {
    question: 'What is Kickserv Kickback?',
    answer:
      'An ongoing 5% discount on monthly fees when you process a monthly minimum in online payments through Kickserv: $1,000 on Start, $2,000 on Run and $3,000 on Scale, multiplied by 12 on annual plans.',
  },
  {
    question: 'Can I cancel Kickserv?',
    answer:
      'Yes, with written notice, effective at the end of the current monthly or annual term. Fees are non-refundable, and cancelling permanently deletes your customer and job records, so export your data first or switch to the free plan to keep it.',
  },
]

const sources = [
  { name: 'Kickserv pricing (plans, users, annual saving, trial, Kickback)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv help: online payment fees', url: 'https://help.kickserv.com/article/92-online-payment-fees', checked: '2026-11-24' },
  { name: 'Kickserv help: ACH payments (1% + $0.30)', url: 'https://help.kickserv.com/article/94-ach-payments', checked: '2026-11-24' },
  { name: 'Kickserv payments integration (Tap to Pay, card not present, instant payout)', url: 'https://www.kickserv.com/integrations/payments', checked: '2026-11-24' },
  { name: 'Kickserv help: Kickserv Kickback and Flex', url: 'https://help.kickserv.com/article/95-kickserv-kickback', checked: '2026-11-24' },
  { name: 'Kickserv help: connect to QuickBooks Desktop ($50 a month or $480 a year)', url: 'https://help.kickserv.com/article/8-connect-to-quickbooks-desktop', checked: '2026-11-24' },
  { name: 'Kickserv integrations', url: 'https://www.kickserv.com/integrations', checked: '2026-11-24' },
  { name: 'Kickserv help: how to cancel (free plan, data deletion)', url: 'https://help.kickserv.com/article/61-how-do-i-cancel-my-account', checked: '2026-11-24' },
  { name: 'Kickserv help: settings (data export)', url: 'https://help.kickserv.com/article/38-settings', checked: '2026-11-24' },
  { name: 'Kickserv Terms of Service (last modified August 21, 2024)', url: 'https://www.kickserv.com/terms', checked: '2026-11-24' },
  { name: 'Kickserv small business page ($0 plan mention)', url: 'https://www.kickserv.com/small-business', checked: '2026-11-24' },
  { name: 'Kickserv partnerships (Nexa answering service)', url: 'https://www.kickserv.com/partnerships', checked: '2026-11-24' },
  { name: 'Jobber pricing (plans, team-size bands)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Housecall Pro pricing (plans, users)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function KickservPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/kickserv"
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
            Kickserv pricing (2026): <span className="text-orange-400">plans, users, fees &amp; terms</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every plan, user limit, add-on, payment fee and term, taken from Kickserv&rsquo;s own pricing page,
            help center and terms on November 24, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Kickserv sells three plans by team size: <strong>Start</strong> at $60 a month for 5 users,{' '}
            <strong>Run</strong> at $119 for 10 users and <strong>Scale</strong> at $199 for 20 users. Its pricing
            page says you save 20% with an annual subscription, and every plan has a 30-day free trial.
            QuickBooks Online is on every plan, and QuickBooks Desktop costs $50 a month extra. Card payments
            cost 2.9% with Tap to Pay and 3.9% when the card is not present, ACH is 1% + $0.30, and cancelling
            deletes your records, so export first.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>Kickserv plans and prices</h2>
          <p className={SUB}>
            Monthly price in USD from Kickserv&rsquo;s pricing page on November 24, 2026. Cost per user is the plan
            price divided by the users included.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Per month', 'Users', 'Per user', 'Adds'].map((h) => (
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
                    <td className={TD}>{r.users}</td>
                    <td className={TD}>{r.perUser}</td>
                    <td className={TD}>{r.adds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Run is highlighted because it adds dispatch mapping, GPS check-ins and the QuickBooks Desktop option.
            The pricing page shows one price per plan next to &ldquo;Save 20% with annual subscription&rdquo; and
            does not say whether that price is the monthly or the annual rate, so check the total at checkout.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Other plans: free, Flex and Premium</h2>
          <p>
            Kickserv&rsquo;s help center and older pages mention plans that are not on the current pricing page. Its
            cancellation article offers a switch to a free plan that keeps your data, and an older page says
            pricing starts with a $0 plan, but no limits are published. A help article updated July 29, 2026 says
            Flex users who process at least $2,500 a month in online payments have that month&rsquo;s fee waived.
            Its ACH article also names a Premium plan, with no published price. Ask Kickserv which of these are
            open to new customers.
          </p>

          <h2>Add-ons and discounts</h2>
          <ul>
            <li><strong>QuickBooks Desktop</strong>: $50 a month or $480 a year, listed on Run. Kickserv says it works with every version, including Mac.</li>
            <li><strong>Annual subscription</strong>: the pricing page says it saves 20%.</li>
            <li><strong>Kickserv Kickback</strong>: an ongoing 5% discount on monthly fees if you process at least $1,000 a month in online payments on Start, $2,000 on Run or $3,000 on Scale (multiplied by 12 on annual plans).</li>
            <li><strong>Live answering</strong>: Kickserv lists the Nexa 24/7 answering service as a partner, with 10% off for Kickserv customers.</li>
          </ul>
          <p>
            Kickserv does not publish a price for extra users above a plan&rsquo;s limit or for teams above 20.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Payment processing fees</h2>
          <p className={SUB}>
            From Kickserv&rsquo;s payments page and help center. Payments run through Stripe, and Kickserv says the
            rates are the same on every plan.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Item', 'Fee'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fees.map((r) => (
                  <tr key={r.item} className={ROW}>
                    <td className={TD1}>{r.item}</td>
                    <td className={TD}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            On a $1,000 invoice, that is $29 with Tap to Pay, $39 for a card paid online and $10.30 by ACH, as
            published. Kickserv does not list a fixed per-transaction card fee.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Contract, renewal and cancellation</h2>
          <p>Kickserv&rsquo;s Terms of Service, last modified August 21, 2024, say:</p>
          <ul>
            <li>Your term is one month or one year and renews automatically for the same length.</li>
            <li>An annual term cannot be switched to monthly before it renews.</li>
            <li>Either side can cancel with written notice, effective at the end of the current term, and payment authorization must be cancelled at least 15 days before the next billing date.</li>
            <li>Fees are non-refundable, and Kickserv can change fees with notice, which can come on an invoice.</li>
          </ul>
          <p>
            Its help center warns that cancelling permanently deletes your account information, including
            customer and job records. You can export data from the Account and Billing settings, or switch to
            the free plan to keep your records.
          </p>

          <h2>Kickserv vs Jobber and Housecall Pro on price</h2>
          <p>
            For five users, Kickserv Start at $60 a month is cheaper than Jobber Connect ($149 for 5 users billed
            annually) or Housecall Pro Essentials ($149 for up to 5 users billed annually), though each includes
            different features. Kickserv does not list route optimization, inventory or AI call answering. See{' '}
            <Link href="/pricing/jobber">Jobber pricing</Link>, <Link href="/pricing/housecall-pro">Housecall Pro pricing</Link>{' '}
            and our <Link href="/compare/kickserv-alternatives">Kickserv alternatives</Link>.
          </p>

          <h2>Which Kickserv plan should you choose?</h2>
          <ul>
            <li><strong>Start</strong> for up to 5 users who need reminders, reports, time tracking and QuickBooks Online.</li>
            <li><strong>Run</strong> for up to 10 users, or if you need dispatch mapping, GPS check-ins or QuickBooks Desktop.</li>
            <li><strong>Scale</strong> for up to 20 users or custom templates.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Kickserv pricing">
            Kickserv is one of the cheapest ways to put a small team on field service software: $60 a month for 5
            users, $119 for 10 and $199 for 20. Add $50 a month for QuickBooks Desktop, check whether the price
            shown is monthly or annual, and export your data before you ever cancel.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/kickserv-alternatives" className="text-orange-600 hover:text-orange-800">Kickserv alternatives →</Link>
            <Link href="/pricing/servicem8" className="text-orange-600 hover:text-orange-800">ServiceM8 pricing →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
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
