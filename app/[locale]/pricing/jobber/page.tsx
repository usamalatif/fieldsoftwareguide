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
 * /pricing/jobber — Week 2 article. Target "jobber pricing" (4,400 US/mo; "jobber price" and
 * "jobber prices" are overlapping variants of the same demand, not extra volume), plus "jobber
 * cost", "jobber pricing plans", "how much does jobber cost", "jobber plans", "jobber free
 * trial". Keep "jobber vs housecall pro" on /compare/jobber-vs-housecall-pro, QuickBooks
 * intent on /quickbooks, and cross-vendor team-size intent on /by-size.
 *
 * Every figure verified 2026-11-03 on Jobber's own pages: the pricing page (plans x team
 * size x billing option, feature table, add-ons, payment fees, FAQ) and the help center
 * (Receptionist, add-ons, Manage Team, Jobber AI, Tap to Pay, bank payments, payout window).
 * The introductory offer that ended 2026-10-30 is gone; the pricing page now shows only
 * "Save up to 25% with annual billing". Card-reader rates are NOT published on these pages,
 * so the article does not state them. Cost examples are arithmetic on the published rates.
 */

// Dates live in content/articles.ts (shared with the sitemap). firstPublished is the
// first production publish date and must not change afterwards.
const { firstPublished, contentUpdated } = articleDates['/pricing/jobber']

export const metadata = buildMetadata({
  title: 'Jobber Pricing (2026): Plans, Costs & Features',
  description:
    'Jobber pricing for 2026: Core $29, Connect $99, Grow $149 and Plus $399 per month billed annually, with team-size prices, add-ons and payment fees.',
  slug: 'pricing/jobber',
  type: 'article',
  modifiedTime: contentUpdated,
  // Same keyword title pattern as /pricing/housecall-pro; no template suffix.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Jobber Pricing', href: '/pricing/jobber' },
]

/** Standard monthly rates per billing option, checked 2026-11-03. */
const plans: { plan: string; annual: string; commit: string; monthly: string; users: string; highlight?: boolean }[] = [
  { plan: 'Core', annual: '$29', commit: '$39', monthly: '$49', users: '1 user (one extra seat allowed)' },
  { plan: 'Connect', annual: '$99', commit: '$119', monthly: '$139', users: '1 user (5, 10, 15 user bands)' },
  { plan: 'Grow', annual: '$149', commit: '$169', monthly: '$199', users: '1 user (5, 10, 15 user bands)', highlight: true },
  { plan: 'Plus', annual: '$399', commit: '$439', monthly: '$499', users: 'From 5 users (5, 10, 15 user bands)' },
]

/**
 * Annual prepaid / no commitment, per month. Core: 1 user plus at most one extra seat (help
 * center: "you can add one additional seat. To add more, upgrade to Connect"). Plus has no
 * public 1-user price (configurator shows "Let's chat"); 16+ is contact sales on every plan.
 */
const bands: { users: string; core: string; connect: string; grow: string; plus: string }[] = [
  { users: '1 user', core: '$29 / $49', connect: '$99 / $139', grow: '$149 / $199', plus: 'Not publicly offered' },
  { users: '5 users', core: 'Not available (2-user max)', connect: '$149 / $199', grow: '$229 / $299', plus: '$399 / $499' },
  { users: '10 users', core: 'Not available', connect: '$229 / $299', grow: '$299 / $399', plus: '$449 / $599' },
  { users: '15 users', core: 'Not available', connect: '$299 / $399', grow: '$399 / $499', plus: '$529 / $699' },
  { users: '16+ users', core: 'Not available', connect: 'Contact sales', grow: 'Contact sales', plus: 'Contact sales' },
]

const addOns: { name: string; price: string; detail: string }[] = [
  { name: 'Marketing Suite', price: '$99/mo', detail: 'Campaigns, reviews, referrals, job showcase, social posting, and a marketing plan. Included on Plus.' },
  { name: 'AI Receptionist', price: '$29/mo', detail: 'Jobber’s Receptionist help article says 30 conversations per billing cycle, then $0.79 per conversation, or pause at the limit; its general add-ons article says 100 a month (see note). Included on Plus with unlimited usage.' },
  { name: 'Sales Pipeline', price: '$49/mo', detail: 'One view of every request and quote moving toward a booked job. Included on Plus.' },
  { name: 'Extra user (seat)', price: '$29/mo', detail: 'Listed on every plan card. Bought in bulk under Manage Seats; Core allows only one extra seat.' },
]

const fees: { method: string; rate: string }[] = [
  { method: 'Card paid online (invoice or client hub)', rate: '2.9% + 30¢' },
  { method: 'Tap to Pay in the Jobber app (US and Canada)', rate: '2.7% + 30¢' },
  { method: 'Bank payment / ACH (US only)', rate: '1%' },
  { method: 'Instant payout', rate: '+1%' },
]

/** Arithmetic on standard annual-prepaid rates (per month). */
const seatMath: { plan: string; users: string; extras: string; band: string; saving: string }[] = [
  { plan: 'Connect', users: '5', extras: '$99 + 4 × $29 = $215', band: '$149', saving: '$66/mo' },
  { plan: 'Connect', users: '10', extras: '$99 + 9 × $29 = $360', band: '$229', saving: '$131/mo' },
  { plan: 'Connect', users: '15', extras: '$99 + 14 × $29 = $505', band: '$299', saving: '$206/mo' },
  { plan: 'Grow', users: '5', extras: '$149 + 4 × $29 = $265', band: '$229', saving: '$36/mo' },
  { plan: 'Grow', users: '10', extras: '$149 + 9 × $29 = $410', band: '$299', saving: '$111/mo' },
  { plan: 'Grow', users: '15', extras: '$149 + 14 × $29 = $555', band: '$399', saving: '$156/mo' },
]

const growVsPlus: { users: string; grow: string; plus: string; diff: string }[] = [
  { users: '5 users', grow: '$229 + $177 = $406', plus: '$399', diff: 'Plus $7/mo less' },
  { users: '10 users', grow: '$299 + $177 = $476', plus: '$449', diff: 'Plus $27/mo less' },
  { users: '15 users', grow: '$399 + $177 = $576', plus: '$529', diff: 'Plus $47/mo less' },
]

const faqs = [
  {
    question: 'How much does Jobber cost per month?',
    answer:
      'At standard annual-prepaid rates, Jobber costs $29/month for Core (1 user), $99/month for Connect, $149/month for Grow (1 user each), and $399/month for Plus (5 users). With no commitment, the same plans are $49, $139, $199, and $499 per month. Larger teams pay by band: Grow is $229 for 5 users, $299 for 10, and $399 for 15 on annual billing.',
  },
  {
    question: 'Do I have to pay for a whole year upfront?',
    answer:
      'Only on annual prepaid billing. Jobber bills the full annual term at the start, so Core at $29/month is a $348 payment upfront. If you would rather pay monthly, choose a 1-year commitment billed monthly (Core $39) or no commitment (Core $49).',
  },
  {
    question: 'Does Jobber have a free plan or free trial?',
    answer:
      'There is no free plan. Jobber offers a 14-day free trial with full access to the Grow plan and no credit card required, and its FAQ says nothing is deleted if the trial expires before you add billing details. Add-ons are not available during the trial.',
  },
  {
    question: 'Can I cancel Jobber and get a refund?',
    answer:
      'On monthly billing with no commitment, you can cancel anytime and the subscription ends after the current billing period. On a 1-year commitment billed monthly, billing continues until the 12-month term ends. On annual prepaid, you keep access until the term ends but the payment is non-refundable. All subscriptions renew automatically unless set to non-renew.',
  },
  {
    question: 'How much does Jobber charge for extra users?',
    answer:
      'Jobber lists extra users at $29/month each, bought as seats in your account. Core allows only one extra seat; for more users you need Connect or higher. Because Connect, Grow, and Plus are also sold in 5, 10, and 15 user bands, a band is usually cheaper than adding many seats. Based on published prices, 5 users on Connect cost $149/month as a band versus $215 for one user plus four extra seats; confirm seat pricing for your billing option at checkout.',
  },
  {
    question: 'What are Jobber’s payment processing fees?',
    answer:
      'Jobber’s pricing page lists 2.9% + 30¢ for cards paid online, 2.7% + 30¢ for Tap to Pay in the mobile app, 1% for bank (ACH) payments in the US, and an extra 1% for instant payouts. The same rates are shown for every plan.',
  },
  {
    question: 'Which Jobber plan includes QuickBooks?',
    answer:
      'QuickBooks Online and Xero sync start on Connect ($99/month billed annually for 1 user), so Core does not include accounting sync. Jobber’s FAQ says it syncs with QuickBooks Online; it does not list QuickBooks Desktop.',
  },
  {
    question: 'Is the Jobber AI Receptionist included?',
    answer:
      'Only on Plus, where it is included with unlimited usage. On other plans it is a $29/month add-on. Jobber’s Receptionist help article says that covers 30 conversations per billing cycle, then $0.79 per extra conversation or a pause at the limit, while its general add-ons article says 100 a month, so confirm the allowance in your account. Jobber AI Voice and Chat are different features, available on all plans with access set by user role.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, team-size bands, billing options, current offers, feature table, add-ons, payment fees, FAQ)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-03' },
  { name: 'Receptionist powered by Jobber AI (help center)', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-03' },
  { name: 'Add-on features to your Jobber plan (help center)', url: 'https://help.getjobber.com/en/articles/add-on-features-to-your-jobber-plan-subscription/', checked: '2026-11-03' },
  { name: 'Manage Team: buying extra seats, Core one-seat limit (help center)', url: 'https://help.getjobber.com/en/articles/manage-teamhow-to-add-manage-and-deactivate-team-members/', checked: '2026-11-03' },
  { name: 'Jobber AI Voice and Chat (help center)', url: 'https://help.getjobber.com/en/articles/jobber-ai-voice-and-chat-beta/', checked: '2026-11-03' },
  { name: 'Jobber Payments payout window (help center)', url: 'https://help.getjobber.com/en/articles/jobber-payments-payout-window/', checked: '2026-11-03' },
  { name: 'Bank payments (ACH) (help center)', url: 'https://help.getjobber.com/hc/en-us/articles/1500004781762-Bank-Payments-ACH', checked: '2026-11-03' },
  { name: 'Tap to Pay (help center)', url: 'https://help.getjobber.com/hc/en-us/articles/34647042014615-Tap-to-Pay', checked: '2026-11-03' },
  { name: 'Housecall Pro pricing (for the short price comparison)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-03' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function JobberPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline="Jobber Pricing (2026): Plans, Costs & Features"
        description="Jobber's 2026 plans and standard prices by team size and billing option, add-ons, payment processing fees, and worked cost examples, from Jobber's own pages."
        slug="pricing/jobber"
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
            Jobber pricing (2026): <span className="text-orange-400">plans, costs &amp; features</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every plan, team-size price, billing option, add-on, and payment fee, taken from
            Jobber&rsquo;s own pricing page and help center on November 3, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Jobber has four plans, and the price depends on the plan, your team size, and how you
            pay. At standard annual-prepaid rates, <strong>Core</strong> costs $29/month for one
            user, <strong>Connect</strong> $99/month, <strong>Grow</strong> $149/month, and{' '}
            <strong>Plus</strong> $399/month for five users. Teams buy bands of 5, 10, or 15 users:
            Grow is $229 for 5 users, $299 for 10, and $399 for 15. Monthly billing costs more, at
            $49 for Core with no commitment. Annual prices are paid upfront for the full year.
            Jobber&rsquo;s introductory offer ended on October 30, 2026, so these are the prices
            new customers pay. QuickBooks Online sync starts on Connect, job costing on Grow, and
            card payments cost 2.9% + 30¢ online.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>Jobber plans and standard prices</h2>
          <p className={SUB}>
            Monthly price in USD, excluding sales tax, from Jobber&rsquo;s pricing page on November
            3, 2026. No introductory offer was running; promotions are covered below.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Annual prepaid', '1-year, billed monthly', 'No commitment', 'Starting team size'].map((h) => (
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
                    <td className={TD}>{r.annual}</td>
                    <td className={TD}>{r.commit}</td>
                    <td className={TD}>{r.monthly}</td>
                    <td className={TD}>{r.users}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Grow is highlighted because it is the plan Jobber&rsquo;s 14-day free trial runs on.
            Core is a one-user plan; Jobber&rsquo;s help center says Core accounts can add one
            extra seat and must upgrade to Connect for more. Plus has no public one-user price
            and starts at 5 users.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Standard prices vs promotional prices</h2>
          <p>
            When we checked on November 3, 2026, Jobber&rsquo;s pricing page showed no
            introductory offer. The only saving it advertised was &ldquo;Save up to 25% with annual
            billing&rdquo;, which is the gap between the annual-prepaid and monthly columns above,
            not a temporary discount.
          </p>
          <p>
            Jobber does run limited-time offers for new customers. The most recent one, which
            ended on October 30, 2026 at 11:59 p.m. PT, lowered the first 12 months of
            annual-prepaid plans (Core $21/month, then $29) and the first 3 months of monthly
            plans. If a new offer is running when you sign up, the &ldquo;then&rdquo; price is the
            standard rate shown in this article, so budget for it after the introductory period.
          </p>

          <h2>Annual prepaid vs monthly billing</h2>
          <p>Jobber sells each plan three ways, and the cancellation rules differ:</p>
          <ul>
            <li>
              <strong>Annual prepaid</strong> is the lowest monthly rate, but Jobber bills the full
              annual term at the start. Core at $29/month means paying $348 upfront. If you cancel
              during the year, you keep access until the term ends, but the payment is
              non-refundable.
            </li>
            <li>
              <strong>Monthly, 1-year commitment</strong> spreads payments monthly at a middle
              rate (Core $39). It has a 12-month minimum term: if you cancel during the year, you
              are still billed monthly until the term ends.
            </li>
            <li>
              <strong>Monthly, no commitment</strong> is the highest rate (Core $49). You can
              cancel anytime, and the subscription ends after the current billing period.
            </li>
          </ul>
          <p>
            All three renew automatically unless set to non-renew. You can upgrade at any time and
            downgrade at the end of a billing cycle. Over a year, annual prepaid saves $240 on Core
            ($348 vs $588 with no commitment), $480 on Connect for one user ($1,188 vs $1,668),
            $600 on Grow for one user ($1,788 vs $2,388), and $1,200 on Plus for five users ($4,788
            vs $5,988).
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Jobber price by team size</h2>
          <p className={SUB}>
            Monthly price as annual prepaid / no commitment. Extra users are listed at $29/month
            each on top of any band (Core: one extra seat at most).
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Team size', 'Core', 'Connect', 'Grow', 'Plus'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bands.map((r) => (
                  <tr key={r.users} className={ROW}>
                    <td className={TD1}>{r.users}</td>
                    <td className={TD}>{r.core}</td>
                    <td className={TD}>{r.connect}</td>
                    <td className={TD}>{r.grow}</td>
                    <td className={TD}>{r.plus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>What each Jobber plan includes</h2>
          <p>
            <strong>Core ($29/month billed annually)</strong> covers the basics for one person:
            client manager, client hub, online booking and request forms, scheduling, quotes,
            invoices, online payments, progress invoicing, a website, built-in reports, and the
            app marketplace.
          </p>
          <p>
            <strong>Connect ($99/month for 1 user)</strong> adds automated client reminders,
            routing, GPS tracking, checklists, time and expense tracking, automatic payments,
            automated quote and invoice follow-ups, custom fields, and QuickBooks Online and Xero
            sync, plus Zapier and Gusto integrations.
          </p>
          <p>
            <strong>Grow ($149/month for 1 user)</strong> adds two-way text messaging, job costing,
            a custom automation builder, quotes with images and optional line items, automatic
            location-based time tracking, and Find a Time scheduling suggestions.
          </p>
          <p>
            <strong>Plus ($399/month for 5 users)</strong> adds crew scheduling, job profit alerts,
            a photo and video library, receipt capture and supplier invoice scanning, a custom
            report builder, revenue goals, Premium Support, and API access. It also includes
            Marketing Suite, Sales Pipeline, and AI Receptionist, which are paid add-ons on the
            other plans.
          </p>
          <p>
            <strong>Jobber AI is not the same as AI Receptionist.</strong> Jobber AI Voice and
            Chat are available on all plans: admins can ask business questions and take actions
            (voice works in the mobile app only), while non-admin users can use it for Jobber
            product support. On Plus, non-admin team members can also use voice for product
            support. AI Receptionist, which answers your customers&rsquo; calls and texts, is a
            separate paid add-on below Plus.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Add-ons and extra costs</h2>
          <p className={SUB}>
            Prices from Jobber&rsquo;s pricing page; Receptionist usage terms from its help center.
            Add-ons are not available during the free trial, only admins can add them, and charges
            are prorated for the current billing period.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Add-on', 'Price', 'What you get'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {addOns.map((r) => (
                  <tr key={r.name} className={ROW}>
                    <td className={TD1}>{r.name}</td>
                    <td className={`${TD} whitespace-nowrap`}>{r.price}</td>
                    <td className={TD}>{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Jobber&rsquo;s own help articles disagree on the Receptionist allowance: the dedicated{' '}
            <a href="https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/" target="_blank" rel="nofollow noopener" className="underline hover:text-orange-600">
              Receptionist article
            </a>{' '}
            says 30 conversations per billing cycle for the $29 add-on, and the general{' '}
            <a href="https://help.getjobber.com/en/articles/add-on-features-to-your-jobber-plan-subscription/" target="_blank" rel="nofollow noopener" className="underline hover:text-orange-600">
              add-ons article
            </a>{' '}
            says 100 a month. Until Jobber resolves it, our cost examples assume 30, the lower
            figure; confirm the allowance on your billing page before you rely on it.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={H2}>Payment processing fees</h2>
          <p className={SUB}>
            From Jobber&rsquo;s pricing page, which shows the same rates on every plan, and its
            help center. Card-reader rates are not listed there; check them in your Jobber
            Payments settings.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Payment method', 'Fee'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fees.map((r) => (
                  <tr key={r.method} className={ROW}>
                    <td className={TD1}>{r.method}</td>
                    <td className={TD}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="prose-body mt-4">
            <p>
              On a $1,000 invoice, a card paid online costs $29.30, the same card tapped in the
              app costs $27.30, and a bank payment costs $10. Payout timing also differs. Your
              first card payout takes 5 business days while Jobber authorizes the account, and
              your bank can add 1 to 2 business days, so expect 5 to 7. After that, card payments
              follow a 2-business-day payout schedule, or 2 to 4 business days once your bank
              posts them. Bank (ACH) payments are separate: they typically take 4 business days
              to reach your account from when the payment is pending. Instant payouts cost an
              extra 1%.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className={H2}>Real-world cost examples</h2>
          <p className={SUB}>
            Calculations based on Jobber&rsquo;s published standard annual-prepaid prices (per
            month), not quotes. Jobber lists extra users at $29/month on each Connect, Grow, and
            Plus card, and its help center says admins buy extra seats in bulk under Manage Seats.
            Jobber does not say whether extra seats are billed on the same terms for annual
            prepaid and monthly subscriptions, so confirm seat pricing at checkout before relying
            on these totals.
          </p>

          <h3 className="mt-6 text-[18px] font-bold text-slate-900 dark:text-white">
            One user plus extra seats vs a team-size band (calculated)
          </h3>
          <div className={`${TABLE_WRAP} mt-3`}>
            <table className="tnum w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Users', '1-user plan + extra seats', 'Band price', 'Band saves'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seatMath.map((r) => (
                  <tr key={r.plan + r.users} className={ROW}>
                    <td className={TD1}>{r.plan}</td>
                    <td className={TD}>{r.users}</td>
                    <td className={TD}>{r.extras}</td>
                    <td className={TD}>{r.band}</td>
                    <td className={TD}>{r.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="prose-body mt-4">
            <p>
              Extra seats only win for very small teams. On Connect, one user plus one extra seat
              ($128) beats the 5-user band ($149), but at three users ($157) the band is cheaper.
              On Grow, one user plus two extra seats ($207) still beats the 5-user band ($229);
              from four users ($236) the band wins. The same logic applies between bands: 8 users
              on Grow cost $316 as the 5-user band plus three seats, versus $299 for the 10-user
              band.
            </p>
          </div>

          <h3 className="mt-8 text-[18px] font-bold text-slate-900 dark:text-white">
            Grow plus three add-ons vs Plus (calculated)
          </h3>
          <div className={`${TABLE_WRAP} mt-3`}>
            <table className="tnum w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Team size', 'Grow + Marketing Suite, Receptionist, Pipeline', 'Plus', 'Difference'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {growVsPlus.map((r) => (
                  <tr key={r.users} className={ROW}>
                    <td className={TD1}>{r.users}</td>
                    <td className={TD}>{r.grow}</td>
                    <td className={TD}>{r.plus}</td>
                    <td className={TD}>{r.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="prose-body mt-4">
            <p>
              The three add-ons cost $177/month together ($99 + $29 + $49). If you want all three,
              Plus is cheaper at every band and also includes unlimited Receptionist usage instead
              of a capped allowance, plus crew scheduling, profit alerts, and Premium Support. If you
              only want one add-on, Grow plus that add-on is far cheaper: Grow for 5 users with
              Receptionist is $258/month.
            </p>

            <h3>Four typical setups</h3>
            <ul>
              <li>
                <strong>Solo operator, no accounting sync:</strong> Core at $29/month, paid as $348
                upfront for the year, or $588 a year on no-commitment monthly billing.
              </li>
              <li>
                <strong>Three-person crew that needs QuickBooks Online:</strong> the Connect 5-user
                band at $149/month ($1,788 a year) beats one user plus two seats ($157/month).
              </li>
              <li>
                <strong>Eight-tech shop that needs job costing:</strong> the Grow 10-user band at
                $299/month ($3,588 a year) beats the 5-user band plus three seats ($316/month).
              </li>
              <li>
                <strong>Twelve-person team that wants Receptionist, Pipeline, and Marketing
                Suite:</strong> Plus 10-user band plus two seats is $507/month ($6,084 a year),
                less than the Plus 15-user band ($529) or Grow 10-user plus two seats and all three
                add-ons ($534).
              </li>
            </ul>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Jobber and QuickBooks</h2>
          <p>
            QuickBooks Online and Xero sync start on Connect, so a solo operator who needs
            accounting sync pays $99/month billed annually, not $29. Jobber&rsquo;s pricing FAQ
            says it syncs with QuickBooks Online and does not list QuickBooks Desktop. If you run
            Desktop, see which tools support it in our{' '}
            <Link href="/quickbooks">FSM software for QuickBooks</Link> guide.
          </p>

          <h2>Pros and cons of Jobber&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>Every plan has published prices for its standard team sizes up to 15 users, unlike quote-only platforms.</li>
            <li>Core is the lowest published entry price among the major FSM tools we track, at $29/month billed annually.</li>
            <li>Team-size bands cost far less than adding seats one at a time.</li>
            <li>No-commitment monthly billing lets you cancel after any billing period.</li>
            <li>Online booking, a website, progress invoicing, and Jobber AI are on every plan.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>QuickBooks sync starts on Connect, and job costing on Grow.</li>
            <li>Annual prepaid is paid upfront and non-refundable.</li>
            <li>Limited-time introductory prices can make the standard rate easy to miss.</li>
            <li>Marketing Suite, Receptionist, and Pipeline cost extra below Plus.</li>
            <li>No QuickBooks Desktop sync is listed, and teams of 16 or more must contact sales.</li>
          </ul>

          <h2>Jobber vs Housecall Pro on price</h2>
          <p>
            For one user, Jobber Core ($29/month billed annually) costs less than Housecall Pro
            Basic ($59). At five users the entry price for QuickBooks Online sync is the same:
            $149/month for Jobber Connect or Housecall Pro Essentials. Feature and fee differences
            matter more than the sticker price, so read our{' '}
            <Link href="/compare/jobber-vs-housecall-pro">Jobber vs Housecall Pro</Link>{' '}
            comparison and the full <Link href="/pricing/housecall-pro">Housecall Pro pricing</Link>{' '}
            breakdown before you choose.
          </p>

          <h2>Which Jobber plan should you choose?</h2>
          <ul>
            <li><strong>Core</strong> if you work alone (or with one helper on its single extra seat) and do not need accounting sync or automated reminders.</li>
            <li><strong>Connect</strong> if you need QuickBooks Online, checklists, routing, or automatic payments.</li>
            <li><strong>Grow</strong> if you need job costing, two-way texting, or quotes with optional add-on items.</li>
            <li><strong>Plus</strong> if you run crews and want Marketing Suite, Pipeline, and Receptionist anyway.</li>
          </ul>
          <p>
            To compare Jobber with other tools at your team size, see{' '}
            <Link href="/by-size">field service software by business size</Link> and{' '}
            <Link href="/for-small-business">field service software for small business</Link>. For
            what you can run without paying, see <Link href="/free">free field service
            software</Link>, and for trade-specific picks, our guides to{' '}
            <Link href="/by-industry/hvac">HVAC</Link>,{' '}
            <Link href="/by-industry/plumbing">plumbing</Link>,{' '}
            <Link href="/by-industry/electrical">electrical</Link>, and{' '}
            <Link href="/by-industry/pest-control">pest control</Link> software.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Jobber pricing">
            Budget $29/month for a solo operator on Core, $99 for one user who needs QuickBooks
            Online, $149 for one user who needs job costing, and the 5, 10, or 15 user bands for
            teams, all at standard annual-prepaid rates paid upfront. Ignore any introductory
            prices when you compare, add 2.9% + 30¢ for online card payments, and price Plus
            against Grow if you want more than one add-on.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/jobber-vs-housecall-pro" className="text-orange-600 hover:text-orange-800">Jobber vs Housecall Pro →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">All FSM software pricing →</Link>
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
