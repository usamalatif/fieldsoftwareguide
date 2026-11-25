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
 * /pricing/fergus: targets "fergus pricing" and "fergus software cost". No GSC data for this topic yet.
 *
 * Every figure was checked on 2026-11-25 on Fergus's US pricing page, global pricing page, Fergus Pay
 * page, LLM info page, help center (changing plans, cancelling, contractors, timesheet users) and Terms
 * of Service. Conflicts, all stated on the page: (1) the US pricing page names the plans Essentials and
 * Professional (Pro), while the help center says Basic and Professional; (2) the pricing page says
 * "per month" without saying per user, while the terms say fees are charged "on a per user basis with a
 * plan type base"; (3) the US pricing page lists card payments at 2.95% + $0.30, while the Fergus Pay
 * page gives 1.95% + $0.30 for Australia; (4) contractor users are $2.50 a day on the US page and $4 on
 * the global page. US figures are used; the global page shows different prices and is not used for them.
 * Deliberately not used: the feature rows whose icons mapped differently between the US and global pages
 * (GPS tracking, job phases, tasks, enquiry management, estimating and takeoff), and any review site or
 * third-party estimate. No worked team-cost example because the per-user basis is not labelled on the
 * pricing page. Nothing tested hands-on.
 */

const PATH = '/pricing/fergus'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Fergus Pricing (2026): Plans, User Types, Fees & Terms'
const DESCRIPTION =
  'Fergus pricing for 2026: US Essentials from $31 and Professional from $44 a month, timesheet and contractor users, add-ons, card fees and cancellation terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/fergus',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Fergus Pricing', href: PATH },
]

const plans: { plan: string; price: string; support: string; adds: string; highlight?: boolean }[] = [
  { plan: 'Essentials', price: 'From $31', support: 'Email and chat', adds: 'Quoting and estimating, price books, job cards, timesheets, calendar, materials, recurring jobs, mobile app, invoicing, payments, Xero, QuickBooks and MYOB; supplier integrations run manually' },
  { plan: 'Professional (Pro)', price: 'From $44', support: 'Phone, email and chat', adds: 'Checklists, forms, files and photos, tiered pricing, purchase orders, hazards and SWMS, business, staff and financial reporting; supplier integrations run automatically', highlight: true },
  { plan: 'Enterprise', price: 'Not published', support: 'Not published', adds: 'Custom plan for businesses with more than 10 staff; contact sales' },
]

const extras: { item: string; price: string; detail: string }[] = [
  { item: 'Timesheet users', price: 'From $26 a month', detail: 'Track hours and breaks in the Fergus Go app; view job cards but cannot upload photos or files' },
  { item: 'Contractor users', price: '$2.50 per user a day', detail: 'Charged only on days they are scheduled or log time, at most once a day; no certificates, sign offs or invoicing' },
  { item: 'Certificates', price: '$30 (1 to 9 staff), $80 (10+ staff)', detail: 'Billing period not labelled on the pricing page' },
  { item: 'SMS alerts and reminders', price: '$15 for 100 texts', detail: 'Listed for both plans' },
  { item: 'Credit card payments', price: '2.95% + $0.30 per transaction', detail: 'US pricing page rate' },
  { item: 'Setup and training', price: 'From $0', detail: 'Free 1-hour onboarding session' },
]

const faqs = [
  {
    question: 'How much does Fergus cost?',
    answer:
      'Fergus’s US pricing page lists Essentials from $31 a month and Professional from $44 a month. Enterprise, for businesses with more than 10 staff, is a custom quote. Timesheet users start at $26 a month and contractor users cost $2.50 a day. There is no annual plan.',
  },
  {
    question: 'Is Fergus priced per user?',
    answer:
      'The pricing page says “per month” without saying per user. Fergus’s Terms of Service say fees are charged “on a per user basis with a plan type base”, and its help center says a full user is billed at a flat monthly rate. Ask Fergus to quote the total for your exact number of office, field, timesheet and contractor users.',
  },
  {
    question: 'Does Fergus have a free trial or setup fee?',
    answer:
      'Yes, a 14-day free trial with no credit card required. The pricing FAQ says the trial is of the Essentials plan. Setup and training is listed from $0, a free 1-hour onboarding session is included, and the FAQ says there are no setup fees.',
  },
  {
    question: 'Does Fergus have a contract?',
    answer:
      'No fixed term. The pricing page says “no lock-in contracts” and billing is monthly in arrears. You cancel in Settings, Billing, Manage Plans; cancellation takes effect at the end of that month and the final invoice comes on the 1st of the next month. The terms say no fees are refunded on termination.',
  },
  {
    question: 'What happens to my data if I cancel Fergus?',
    answer:
      'The help center says your account is locked at the end of the month you cancel, and advises exporting what you need first. The Terms of Service say Fergus may remove all your material on termination and that you are responsible for keeping your own copy.',
  },
  {
    question: 'What are Fergus Pay card fees?',
    answer:
      'The US pricing page lists credit card payments at 2.95% + $0.30 per transaction. The Fergus Pay page quotes 1.95% + $0.30 and 2-business-day payouts for Australia, and says there are no setup or monthly fees. It runs on Stripe and supports Tap to Pay in the Fergus Go app.',
  },
]

const sources = [
  { name: 'Fergus US pricing (plans, add-ons, user types, FAQ)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
  { name: 'Fergus global pricing (non-US prices, for comparison only)', url: 'https://fergus.com/pricing/', checked: '2026-11-25' },
  { name: 'Fergus Terms of Service', url: 'https://fergus.com/terms-of-service/', checked: '2026-11-25' },
  { name: 'Fergus help: changing your Fergus plan', url: 'https://help.fergus.com/en/articles/2292283-changing-your-fergus-plan', checked: '2026-11-25' },
  { name: 'Fergus help: cancelling your account', url: 'https://help.fergus.com/en/articles/5068313-cancelling-your-account', checked: '2026-11-25' },
  { name: 'Fergus help: contractors in Fergus', url: 'https://help.fergus.com/en/articles/3617164-contractors-in-fergus', checked: '2026-11-25' },
  { name: 'Fergus help: timesheet user', url: 'https://help.fergus.com/en/articles/11387079-timesheet-user', checked: '2026-11-25' },
  { name: 'Fergus Pay (fees, payouts, Tap to Pay)', url: 'https://fergus.com/features/fergus-pay/', checked: '2026-11-25' },
  { name: 'Fergus official information (markets, trades, integrations)', url: 'https://fergus.com/llm-info/', checked: '2026-11-25' },
  { name: 'ServiceM8 pricing (US plans)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'Jobber pricing (plans, billing options)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function FergusPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/fergus"
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
            Fergus pricing (2026): <span className="text-orange-400">plans, user types, fees &amp; terms</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every US plan, user type, add-on, payment fee and term, taken from Fergus&rsquo;s own pricing page,
            help center and terms on November 25, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Fergus&rsquo;s US pricing page lists <strong>Essentials from $31 a month</strong> and{' '}
            <strong>Professional from $44 a month</strong>, with a custom <strong>Enterprise</strong> plan for
            businesses with more than 10 staff. Its terms say fees are charged per user on top of a plan type.
            Timesheet-only users start at <strong>$26 a month</strong> and contractor users cost{' '}
            <strong>$2.50 a day</strong> they work. Billing is monthly in arrears with no annual plan, no lock-in
            contract and no setup fee, and card payments cost 2.95% + $0.30.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>Fergus plans and prices</h2>
          <p className={SUB}>
            US monthly prices from Fergus&rsquo;s US pricing page on November 25, 2026. The page shows prices in
            &ldquo;$&rdquo; and labels them &ldquo;from&rdquo; and &ldquo;per month&rdquo;, without saying per user.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Per month', 'Support', 'Adds'].map((h) => (
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
                    <td className={TD}>{r.support}</td>
                    <td className={TD}>{r.adds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Professional is highlighted because Fergus labels it &ldquo;most popular&rdquo;. Its comparison table
            uses icons rather than text, so confirm any single feature in a demo. Fergus&rsquo;s help center calls
            the entry plan Basic rather than Essentials, and its global pricing page shows different prices, so
            make sure you are on the page for your country.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>How Fergus charges for users</h2>
          <p>
            The pricing page shows a &ldquo;from&rdquo; price per month but does not say whether that is per user.
            Fergus&rsquo;s Terms of Service say fees are charged &ldquo;on a per user basis with a plan type
            base&rdquo;, and its help center says a full user is billed at a flat monthly rate regardless of
            activity. Because the per-user amount is not spelled out, we have not worked out a cost for a sample
            team: ask Fergus to quote the monthly total for your exact headcount.
          </p>
          <p>
            Fergus has two cheaper user types for people who do not need everything. A <strong>timesheet user</strong>{' '}
            (from $26 a month) tracks hours and breaks in the Fergus Go app and can view job cards, but cannot
            upload photos or files. A <strong>contractor user</strong> ($2.50 a day) is charged only on days they
            are scheduled or log time, at most once a day, and cannot use certificates, sign offs or invoicing.
            Switching a contractor to a full user takes effect immediately at the full user rate.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Add-ons, user types and extra costs</h2>
          <p className={SUB}>From Fergus&rsquo;s US pricing page. Listed the same for Essentials and Professional.</p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Item', 'Price', 'Detail'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {extras.map((r) => (
                  <tr key={r.item} className={ROW}>
                    <td className={TD1}>{r.item}</td>
                    <td className={TD}>{r.price}</td>
                    <td className={TD}>{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Fergus&rsquo;s global pricing page lists contractor users at $4 a day; the US page lists $2.50.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Payment processing fees</h2>
          <p>
            Fergus Pay runs on Stripe and has no setup or monthly fee. The US pricing page lists credit card
            payments at 2.95% + $0.30 per transaction, which is $29.80 on a $1,000 invoice. The Fergus Pay page
            quotes a lower 1.95% + $0.30 and payouts within 2 business days, but both are stated for Australia;
            it gives no US payout time and does not mention ACH. Tap to Pay works in the Fergus Go app without
            extra hardware, and you can choose whether to pass the card fee on.
          </p>

          <h2>Trial, contract and cancellation</h2>
          <p>
            Fergus offers a 14-day free trial with no credit card required. If you add a card during the trial,
            the pricing FAQ says you are not charged until the end of the first calendar month after the trial.
            There is no annual plan and no lock-in contract. The help center says Fergus bills monthly in arrears:
            upgrades start immediately and are charged from that day, while downgrades start on the 1st of the
            next month.
          </p>
          <p>
            To cancel, go to Settings, Billing, Manage Plans, Cancel Subscription in the web app. Cancellation
            takes effect at the end of the month you ask, the final invoice arrives on the 1st of the next month,
            and the account is then locked. The Terms of Service (Term and Termination) say no fees are refunded
            on termination and that Fergus may remove all your material, and the User Materials section says you
            are solely responsible for keeping a copy, so export your records first. Unpaid invoices can lead to
            suspension after 14 days. Fees may change with advance notice, but the terms do not say how much. For
            customers outside Australia and the UK, the contract is with Fergus Software Limited under New Zealand
            law.
          </p>

          <h2>Who Fergus is priced for</h2>
          <p>
            Fergus says it serves trade businesses from sole traders to 30 or more staff, including plumbers and
            gasfitters, electricians, builders, HVAC and refrigeration, drainage, fire protection and security
            installers, across Australia, New Zealand, the UK, Ireland, the US and Canada. It integrates with Xero,
            QuickBooks and MYOB, Groundplan for estimating and takeoff, and Zapier. See our{' '}
            <Link href="/by-industry/plumbing">plumbing software guide</Link> and{' '}
            <Link href="/by-industry/electrical">electrical software guide</Link> for US-focused options.
          </p>

          <h2>Fergus vs ServiceM8 and Jobber on price</h2>
          <p>
            The three price on different bases. ServiceM8 charges by jobs a month with unlimited users from $29.
            Jobber charges by plan and user band, with lower prices if you pay annually. Fergus is monthly only and
            charges per user on top of a plan, with cheaper timesheet and contractor seats for staff who only log time. If you have many
            part-time or subcontracted workers, the contractor day rate can matter more than the plan price. See{' '}
            <Link href="/pricing/servicem8">ServiceM8 pricing</Link>,{' '}
            <Link href="/pricing/jobber">Jobber pricing</Link> and{' '}
            <Link href="/pricing/commusoft">Commusoft pricing</Link>.
          </p>

          <h2>Which Fergus plan should you choose?</h2>
          <ul>
            <li><strong>Essentials</strong> if you need quoting, job cards, scheduling, timesheets and invoicing, and email or chat support is enough.</li>
            <li><strong>Professional</strong> if you need forms, checklists, purchase orders, safety documents, automatic supplier integrations, reporting or phone support.</li>
            <li><strong>Enterprise</strong> if you have more than 10 staff and want a custom plan.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Fergus pricing">
            Fergus is month to month with no setup fee, starting from $31 for Essentials or $44 for Professional
            in the US. Its terms charge per user, so get a quote for your full team, and price timesheet and
            contractor users separately. Export your data before you cancel, because the account locks at the end
            of that month.
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
