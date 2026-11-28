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
 * /pricing/synchroteam: targets "synchroteam pricing", "synchroteam cost" and "synchroteam plans".
 * No GSC data for this topic yet.
 *
 * Every figure was checked on 2026-11-28 on Synchroteam's pricing page (USD view, the default),
 * payment processing page, notifications page, feature list and Terms and Conditions (marked last
 * updated June 28, 2018). The pricing page shows annual prices by default ($39 Standard, $64 Premium)
 * and monthly prices on its toggle ($49, $79), all labelled "per user, per month". Conflicts stated
 * on the page: the pricing FAQ calls it "a month-to-month agreement" and says "we collect each month
 * upfront" while the same FAQ and the terms offer annual billing; the terms say data is deleted "in
 * our normal course of business operations" (6.1) and "immediately after the termination" (14.2).
 * The help center returned 403 and was not used. Euro prices were not used. Auto-renewal and taxes
 * are not addressed in the terms. Worked costs are arithmetic on published per-user prices.
 * Nothing tested hands-on.
 */

const PATH = '/pricing/synchroteam'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Synchroteam Pricing (2026): Per-User Plans, Fees & Terms'
const DESCRIPTION =
  'Synchroteam pricing for 2026: Standard $39 and Premium $64 per user a month billed annually, or $49 and $79 monthly, plus SMS, card fees and terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/synchroteam',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Synchroteam Pricing', href: PATH },
]

const plans: { plan: string; annual: string; monthly: string; includes: string; highlight?: boolean }[] = [
  { plan: 'Standard', annual: '$39', monthly: '$49', includes: 'All features except Route Optimization', highlight: true },
  { plan: 'Premium', annual: '$64', monthly: '$79', includes: 'All features, including Route Optimization' },
]

const example: { setup: string; stdAnnual: string; stdMonthly: string; premAnnual: string; premMonthly: string }[] = [
  { setup: '1 admin + 1 mobile worker', stdAnnual: '$39', stdMonthly: '$49', premAnnual: '$64', premMonthly: '$79' },
  { setup: '1 admin + 4 mobile workers', stdAnnual: '$156', stdMonthly: '$196', premAnnual: '$256', premMonthly: '$316' },
  { setup: '1 admin + 1 manager + 8 mobile workers', stdAnnual: '$351', stdMonthly: '$441', premAnnual: '$576', premMonthly: '$711' },
]

const sms: { bundle: string; price: string; perCredit: string }[] = [
  { bundle: '10 credits', price: 'Free, for testing', perCredit: '$0' },
  { bundle: '50 credits', price: '$12', perCredit: '24¢' },
  { bundle: '500 credits', price: '$90', perCredit: '18¢' },
  { bundle: '2,000 credits', price: '$180', perCredit: '9¢' },
]

const faqs = [
  {
    question: 'How much does Synchroteam cost?',
    answer:
      'Synchroteam lists two plans, priced per user login per month in US dollars. Standard is $39 billed annually or $49 paid monthly, and Premium is $64 billed annually or $79 paid monthly. The first administrator login is free when you pay for at least one mobile worker.',
  },
  {
    question: 'What is the difference between Synchroteam Standard and Premium?',
    answer:
      'Route Optimization. Synchroteam’s pricing page says Standard includes all features except Route Optimization, and its feature list marks Route Optimization as the only Premium feature. Everything else, including the offline mobile app, QuickBooks Online sync and the API, is on both plans.',
  },
  {
    question: 'Does Synchroteam charge for office users?',
    answer:
      'Yes, after the first one. Its pricing FAQ says users are Administrators, Managers and Mobile Workers, all priced per user login, and that the first Administrator license is free with one paid mobile worker account. Extra admins and managers are paid logins at the same plan price.',
  },
  {
    question: 'Does Synchroteam have a contract or refunds?',
    answer:
      'Its pricing FAQ calls it a month-to-month agreement you can cancel at any time, but also says all sales are final. Its terms say cancellation takes effect immediately, with no refunds for partial or unused months, and prices can change on 14 days’ notice.',
  },
  {
    question: 'What are Synchroteam’s payment processing fees?',
    answer:
      'Synchroteam’s payments page lists 3.4% + $0.30 per transaction in the USA and 1.9% + 0.25€ in the UK and euro zone, processed by Stripe. It says the payment module has no activation or maintenance charge. Other countries are asked to contact Synchroteam.',
  },
  {
    question: 'Does Synchroteam work with QuickBooks Desktop?',
    answer:
      'Not on the pages we read. Synchroteam lists QuickBooks Online two-way sync on every plan, plus Xero and Sage connectors. QuickBooks Desktop is not mentioned.',
  },
]

const sources = [
  { name: 'Synchroteam pricing (plans, annual and monthly prices, user logins, billing FAQ)', url: 'https://www.synchroteam.com/pricing.php', checked: '2026-11-28' },
  { name: 'Synchroteam feature list (Premium feature, connectors, offline mobile client)', url: 'https://www.synchroteam.com/product-tour-feature-list.php', checked: '2026-11-28' },
  { name: 'Synchroteam payment processing (Stripe rates)', url: 'https://www.synchroteam.com/extension-payment-processing.php', checked: '2026-11-28' },
  { name: 'Synchroteam notifications (SMS credit bundles)', url: 'https://www.synchroteam.com/extension-notifications.php', checked: '2026-11-28' },
  { name: 'Synchroteam Terms and Conditions (last updated June 28, 2018)', url: 'https://www.synchroteam.com/terms-and-conditions.php', checked: '2026-11-28' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function SynchroteamPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/synchroteam"
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
            Synchroteam pricing (2026): <span className="text-orange-400">per-user plans, fees &amp; terms</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Both plans, annual and monthly prices, user rules, text message bundles, card fees and terms, taken
            from Synchroteam&rsquo;s own pricing page, extension pages and terms on November 28, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Synchroteam charges <strong>per user login, per month</strong>, in US dollars.{' '}
            <strong>Standard</strong> is $39 billed annually or $49 paid monthly and includes everything except
            Route Optimization. <strong>Premium</strong> is $64 billed annually or $79 paid monthly and includes
            everything. The first administrator login is free with at least one paid mobile worker, and
            Synchroteam lists no setup, hosting or upgrade fees. Text messages are bought in credit bundles from
            $12, and US card payments cost 3.4% + $0.30.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>Synchroteam plans and prices</h2>
          <p className={SUB}>
            US dollar prices from Synchroteam&rsquo;s pricing page on November 28, 2026, labelled &ldquo;per
            user, per month&rdquo;. The page shows the annual price by default and the monthly price on its toggle.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Billed annually', 'Paid monthly', 'Includes'].map((h) => (
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
                    <td className={TD}>{r.annual} per user / month</td>
                    <td className={TD}>{r.monthly} per user / month</td>
                    <td className={TD}>{r.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Standard is highlighted because it is the lower price and differs from Premium only by Route
            Optimization. Both plans include one free administrator account, QuickBooks Online two-way sync, free
            setup and training, the API and cloud connectors, and one-click data import and export. The page
            also has a euro switch; this page uses the US dollar view.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>How Synchroteam counts users</h2>
          <p>
            Synchroteam&rsquo;s pricing FAQ says to count how many employees you want to equip and multiply by the
            plan price. Users are Administrators, Managers and Mobile Workers, and each is a user login. For mobile
            workers, a license covers access from one device. The first Administrator license is free, but only
            with at least one paid mobile worker account, so the smallest paid account is one mobile worker. Extra
            administrators and managers are paid logins. The pages we read do not list a minimum number of users
            or a separate, lower price for office users.
          </p>
          <p>
            If you add a user mid-cycle, Synchroteam charges the prorated difference straight away: its example is a
            user added 15 days into the cycle, charged for half a month. If you remove licenses, the lower total
            starts at the next billing cycle, so there is no credit for the rest of the current one.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>What a team pays a month</h2>
          <p className={SUB}>
            Pure arithmetic on the published per-user prices, with the first administrator free. Before tax, text
            messages and card fees.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Team', 'Standard annual', 'Standard monthly', 'Premium annual', 'Premium monthly'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {example.map((r) => (
                  <tr key={r.setup} className={ROW}>
                    <td className={TD1}>{r.setup}</td>
                    <td className={TD}>{r.stdAnnual}</td>
                    <td className={TD}>{r.stdMonthly}</td>
                    <td className={TD}>{r.premAnnual}</td>
                    <td className={TD}>{r.premMonthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Billing annually saves $10 per user a month on Standard and $15 on Premium. At the annual rate, one
            Standard user is $468 for 12 months and one Premium user $768; the pages we read do not say whether the
            annual amount is collected in one payment.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={H2}>Text message credits</h2>
          <p className={SUB}>
            From Synchroteam&rsquo;s notifications page, in US dollars. Email notifications are free. Cost per credit
            is the bundle price divided by its credits.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Bundle', 'Price', 'Cost per credit'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sms.map((r) => (
                  <tr key={r.bundle} className={ROW}>
                    <td className={TD1}>{r.bundle}</td>
                    <td className={TD}>{r.price}</td>
                    <td className={TD}>{r.perCredit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            One credit sends one standard text of up to 160 characters, and each further 160 characters uses another
            credit. Texts with some accented or non-Latin characters fit 70 characters per credit, and some countries
            use extra credits.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Payment processing fees</h2>
          <p>
            Synchroteam takes card payments through Stripe and says it charges nothing to activate or maintain the
            payment module. Its payments page lists 3.4% + $0.30 per transaction in the USA and 1.9% + 0.25€ in the
            UK and euro zone, for Visa, Mastercard and American Express. On a $1,000 invoice paid by card in the
            USA, that is $34.30. Other countries are asked to contact Synchroteam, and we found no ACH or bank
            transfer rate on its pages.
          </p>

          <h2>Trial, contract and cancellation</h2>
          <p>
            Synchroteam offers a free 14-day trial with no credit card required. Under section 5.1 of its Terms and
            Conditions, an account with no payment details at the end of the trial is suspended until you add them.
          </p>
          <p>
            Its pricing FAQ says &ldquo;it&rsquo;s a month-to-month agreement that you can cancel at any time&rdquo;
            and that it collects each month upfront, yet the same FAQ and section 5.1 of the terms offer billing
            monthly or annually. Section 6.1 says cancelling before the end of a paid period takes effect immediately
            and you will not be charged again. Section 5.2 says there are no refunds or credits for partial months,
            downgrades or unused months, and the pricing FAQ adds that all sales are final. If you pick annual
            billing, ask how the term and any renewal work, because the terms do not mention auto-renewal.
          </p>
          <p>
            Section 5.2 also lets Synchroteam change prices on 14 days&rsquo; notice, and warns that downgrading may
            cause loss of content, features or capacity. The terms are with Synchroteam Inc. under Florida and US law,
            with courts in Miami-Dade County (section 12), and the page is marked last updated June 28, 2018.
          </p>
          <p>
            On data, section 6.1 says you lose access to all content on cancellation and Synchroteam deletes it in
            its normal course of business, while section 14.2 says data is deleted immediately after termination.
            The pricing page lists one-click data import and export, so export everything before you cancel.
          </p>

          <h2>What else is included</h2>
          <ul>
            <li><strong>Mobile app</strong>: an offline mobile client for iOS and Android, on both plans.</li>
            <li><strong>Accounting</strong>: QuickBooks Online two-way sync on every plan, plus Xero and Sage connectors. QuickBooks Desktop is not mentioned.</li>
            <li><strong>Storage</strong>: listed as unlimited on the feature list.</li>
            <li><strong>Route Optimization</strong>: Premium only. Our <Link href="/guides/route-optimization-software">route optimization guide</Link> covers what to look for.</li>
          </ul>

          <h2>Synchroteam vs other per-user pricing</h2>
          <p>
            Synchroteam prices every login the same way, so cost grows with headcount, not jobs. Tradify also
            charges per user, while Kickserv bundles a set number of users into each plan and ServiceM8 prices by
            jobs with unlimited users. Compare <Link href="/pricing/tradify">Tradify pricing</Link>,{' '}
            <Link href="/pricing/kickserv">Kickserv pricing</Link>,{' '}
            <Link href="/pricing/servicem8">ServiceM8 pricing</Link> and{' '}
            <Link href="/pricing/jobber">Jobber pricing</Link>, and read our guide to{' '}
            <Link href="/guides/field-service-software-contract-terms">field service software contract terms</Link>.
          </p>

          <h2>Which Synchroteam plan should you choose?</h2>
          <ul>
            <li><strong>Standard</strong> if you schedule and dispatch without needing automatic route optimization.</li>
            <li><strong>Premium</strong> if your technicians drive several stops a day and you want routes optimized.</li>
            <li><strong>Annual billing</strong> if you expect to keep the same headcount, since refunds are not offered.</li>
            <li><strong>Monthly billing</strong> if your team size changes often or you are still evaluating.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Synchroteam pricing">
            Synchroteam is simple to price: count every login after the free first admin and multiply by $39 or $64
            billed annually, or $49 or $79 monthly. Budget extra for text message credits and 3.4% + $0.30 card fees,
            and remember there are no refunds, so start monthly if you are unsure.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing/tradify" className="text-orange-600 hover:text-orange-800">Tradify pricing →</Link>
            <Link href="/pricing/kickserv" className="text-orange-600 hover:text-orange-800">Kickserv pricing →</Link>
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare FSM software →</Link>
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
