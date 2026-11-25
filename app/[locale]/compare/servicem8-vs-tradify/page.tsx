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
 * /compare/servicem8-vs-tradify: targets "servicem8 vs tradify". No GSC data for this topic yet.
 *
 * ServiceM8 facts reuse /pricing/servicem8 and the b14 research notes: US pricing page, home page,
 * phone page, payments page, help center and Terms of Service, all checked 2026-11-24. Tradify facts
 * reuse /pricing/tradify and the b16 research notes: pricing page, home page, Stripe payments page
 * and Product-Specific Terms, all checked 2026-11-25, plus one new fetch of tradifyhq.com/features
 * on 2026-11-25 (iOS and Android apps, live staff locations on a map, job costing, timesheets;
 * offline use, phone system, MYOB and API not mentioned).
 *
 * Conflicts, each stated where used: ServiceM8's payments page (3.10% + 30c) vs its help center
 * (3.05% + 30c, as of September 2024); ServiceM8's help center ("cancel at any time") vs its terms
 * (30 days' notice before the end of the payment period); Tradify's terms mention "yearly charges"
 * while its pricing page shows no annual option. Tradify's pricing page prints "$" with no currency
 * code; said once, nothing converted.
 *
 * Not used: Tradify's help center (403 in b16, never fetched), so no pro-rating, billing-date or
 * annual-billing detail; Tradify's governing law (in Access Group terms not read); ServiceM8's
 * unverified per-job billing option, free-plan bonus jobs and Phone trial lengths; either vendor's
 * comparison pages or claims about the other. Cost examples are arithmetic on published prices.
 * Nothing tested hands-on.
 */

const PATH = '/compare/servicem8-vs-tradify'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceM8 vs Tradify (2026): Per-Job vs Per-User Pricing'
const DESCRIPTION =
  'ServiceM8 prices by jobs a month with a free plan and unlimited users; Tradify charges $47 to $61 per user. Compare team costs, fees and refund terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicem8-vs-tradify',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceM8 vs Tradify', href: PATH },
]

const rows: { feature: string; sm8: string; tradify: string }[] = [
  { feature: 'What you pay for', sm8: 'Jobs a month: each plan has a job allowance; unlimited users on every paid plan; no per-user fees', tradify: 'Users: every listed plan is a price per user per month; no job allowance shown on the pricing page' },
  { feature: 'Free plan and entry price', sm8: 'Free plan for one user and 30 jobs; Starter $29 a month for 50 jobs', tradify: 'No permanent free plan on the pricing page; Lite $47 per user a month. Terms say a free version may be available for evaluation' },
  { feature: 'Plan ladder', sm8: 'Growing $79 (150 jobs), Premium $149 (500 jobs), Premium Plus $349 (1,500+ jobs, then 20¢ a job)', tradify: 'Pro $51 and Plus $61 per user a month; Custom for large teams, price on request' },
  { feature: 'Going over a limit', sm8: 'Keep working for 7 more days, then prompted to upgrade unless the cycle resets', tradify: 'No limit on the pricing page; terms say use may be subject to limits such as monthly transaction volumes' },
  { feature: 'Currency and billing', sm8: 'US page in USD; monthly prices only, no annual option listed', tradify: 'Prices shown in $ with no currency code; no annual option on the pricing page, though the terms mention yearly charges' },
  { feature: 'Free trial', sm8: '14-day trial of paid features, separate from the free plan', tradify: '14-day trial with all features; no credit card required' },
  { feature: 'Cancellation', sm8: 'Help center: no contracts, cancel at any time. Terms: notice at least 30 days before the end of the payment period', tradify: 'Cancel at any time through the cancellation process in the app (terms, section 5.1.2)' },
  { feature: 'Refunds', sm8: 'No refund clause in the terms we read', tradify: 'Monthly or yearly charges are not refunded when you cancel (section 5.1.3)' },
  { feature: 'Contracting company and law', sm8: 'ServiceM8 Pty Ltd; Australian law and courts, including on the US terms page', tradify: 'Tradify Limited, incorporated in New Zealand; governing law sits in Access Group terms we did not read' },
  { feature: 'Accounting', sm8: 'QuickBooks Online and Xero on every plan, including Free; MYOB also supported; Desktop not mentioned', tradify: 'Xero and QuickBooks sync from Lite; Online vs Desktop not specified; MYOB not mentioned' },
  { feature: 'Card fees and payouts', sm8: '3.10% + 30¢ US domestic (payments page) or 3.05% + 30¢ (help center, as of September 2024); international 4.60% + 30¢; next-business-day deposits', tradify: 'Stripe at 3.1% + $0.30 per card charge; first payout 7 days after payment, then 2 days; fee can be passed to the customer' },
  { feature: 'Phone and AI answering', sm8: 'ServiceM8 Phone: $19 (500 minutes, no AI), $32 (500 minutes plus AI Phone Agent), $119 (unlimited minutes plus AI)', tradify: 'Not documented' },
  { feature: 'Mobile, maps and offline', sm8: 'iOS and Android apps; Auto Routing and live staff GPS on every plan; offline updates to synced jobs, no final quotes or invoices offline', tradify: 'iOS and Android apps; live staff locations on a map; route optimization and offline use not documented' },
  { feature: 'Recurring work, costing and API', sm8: 'Recurring jobs on Free; asset management on Growing; job costing on Premium; API from Starter', tradify: 'Recurring jobs, progress invoicing, costing and timesheets on Pro; purchase orders and service reminders on Plus; API not documented' },
]

const faqs = [
  {
    question: 'Is ServiceM8 cheaper than Tradify?',
    answer:
      'It depends on people and jobs together. ServiceM8 Growing is $79 for 150 jobs with unlimited users, while two Tradify Lite users already cost $94. Between 151 and 500 jobs, ServiceM8 Premium ($149) beats Tradify Lite from four users ($188). A solo user doing 51 to 150 jobs a month pays less on Tradify Lite ($47) than on ServiceM8 Growing ($79). Above 500 jobs a month ServiceM8 costs $349, which is more than Tradify Lite for up to seven users. This is arithmetic on published prices.',
  },
  {
    question: 'Does Tradify have a free plan like ServiceM8?',
    answer:
      'Not on its pricing page. ServiceM8 has a permanent free plan for one user and 30 jobs a month. Tradify offers a 14-day trial with no credit card, and its terms say a free version may be available for evaluation and that free accounts unused for more than 90 days may be closed without notice.',
  },
  {
    question: 'Can I cancel ServiceM8 or Tradify at any time?',
    answer:
      'Both say you can, with conditions. ServiceM8’s help center says there is no contract and you can cancel at any time, but its Terms of Service ask for notice at least 30 days before the end of the payment period. Tradify’s terms let you cancel at any time in the app but say monthly or yearly charges are not refunded.',
  },
  {
    question: 'Do I get a refund if I cancel?',
    answer:
      'Tradify’s terms say monthly or yearly charges are not refunded when you cancel. ServiceM8’s terms do not describe a refund policy. With both, cancel close to the end of a billing period and export your records first.',
  },
  {
    question: 'Which has lower card fees?',
    answer:
      'They are close. Tradify lists 3.1% + $0.30 per card charge through Stripe. ServiceM8 lists 3.10% + 30¢ on its payments page and 3.05% + 30¢ in its help center (as of September 2024). ServiceM8 pays out the next business day; Tradify’s first payout is 7 days after payment, then 2 days.',
  },
  {
    question: 'Which works with QuickBooks, Xero or MYOB?',
    answer:
      'Both sync with Xero and QuickBooks. ServiceM8 names QuickBooks Online, includes the sync on every plan including Free, and also supports MYOB. Tradify includes Xero and QuickBooks from Lite but does not say whether that is QuickBooks Online or Desktop, and does not mention MYOB on the pages we read.',
  },
]

const sources = [
  { name: 'ServiceM8 pricing (US plans, job limits, features by plan, over-limit FAQ)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 home (audience, iOS and Android apps, 14-day trial)', url: 'https://www.servicem8.com/us', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost (no contracts or per-user fees)', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 Phone (plans, minutes, AI Phone Agent)', url: 'https://www.servicem8.com/us/phone', checked: '2026-11-24' },
  { name: 'ServiceM8 Pay (US rates, next-business-day deposits)', url: 'https://www.servicem8.com/us/servicem8-pay', checked: '2026-11-24' },
  { name: 'ServiceM8 help: card processing fees and payout speed', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/servicem8-pay-card-processing-fees-payout-speed', checked: '2026-11-24' },
  { name: 'ServiceM8 help: connect to QuickBooks Online', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/quickbooks/how-do-i-connect-servicem8-to-quickbooks-online', checked: '2026-11-24' },
  { name: 'ServiceM8 help: offline use', url: 'https://support.servicem8.com/questions/mobile/does-servicem8-work-offline-without-mobile-coverage-or-internet', checked: '2026-11-24' },
  { name: 'ServiceM8 Terms of Service (termination, Australian law)', url: 'https://www.servicem8.com/us/terms-of-service', checked: '2026-11-24' },
  { name: 'Tradify pricing (per-user plans, Custom plan, trial)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify home (audience, 14-day trial, no credit card)', url: 'https://www.tradifyhq.com/', checked: '2026-11-25' },
  { name: 'Tradify features (iOS and Android apps, staff locations, costing, timesheets)', url: 'https://www.tradifyhq.com/features', checked: '2026-11-25' },
  { name: 'Tradify payments with Stripe (card fees, payouts, surcharging)', url: 'https://www.tradifyhq.com/credit-card-payments-with-stripe', checked: '2026-11-25' },
  { name: 'Tradify Product-Specific Terms of Service (cancellation, refunds, free version)', url: 'https://www.tradifyhq.com/terms', checked: '2026-11-25' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceM8VsTradifyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicem8-vs-tradify"
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
            ServiceM8 vs Tradify: <span className="text-orange-400">pay by the job or by the person</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing models, team costs, cancellation and refund terms, card fees and features, from each
            vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>ServiceM8</strong> charges by jobs a month and gives unlimited users on paid plans: free for
            one user and 30 jobs, then $29 for 50 jobs, $79 for 150, $149 for 500 and $349 for 1,500 or more.{' '}
            <strong>Tradify</strong> charges per user: Lite $47, Pro $51 and Plus $61 a month for each person,
            with no free plan on its pricing page. On published prices, ServiceM8 is cheaper for two or more people doing
            up to 150 jobs a month and for four or more doing up to 500; Tradify is cheaper for a solo operator
            past 50 jobs and for small crews with high job counts. Tradify lets you cancel at any time but does not
            refund charges already billed; ServiceM8’s terms ask for 30 days’ notice before the end of the
            payment period. Count both your people and your monthly jobs before you choose.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceM8 vs Tradify at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. ServiceM8 prices
            are from its US page; Tradify’s pricing page prints prices in $ with no currency code, so confirm
            the currency on your quote. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">ServiceM8</th>
                  <th scope="col" className="p-3.5">Tradify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.sm8}</td>
                    <td className="p-3.5">{r.tradify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: job allowances vs per-user seats</h2>
          <p>
            ServiceM8 sets the price by the jobs you create each month and says it charges no per-user fees.
            The free plan covers one user and 30 jobs. Starter is $29 for 50 jobs, Growing $79 for 150, Premium
            $149 for 500 and Premium Plus $349 for 1,500 or more, with extra jobs at 20¢ each on that plan only.
            If you go over on other plans, its FAQ says you can keep working for 7 more days before you are
            prompted to upgrade. Its pages do not define exactly what counts as a job, and quotes are a job
            status in ServiceM8, so ask whether quotes that never turn into work use your allowance. See{' '}
            <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link>.
          </p>
          <p>
            Tradify sets the price by headcount. Lite is $47, Pro $51 and Plus $61 per user a month, and a
            Custom plan for large teams is priced on request. Its pricing page shows no job limit, though its
            terms say use may be subject to limits such as monthly transaction volumes. The page does not say
            whether office and field staff are counted the same way, so ask before you add admin or part-time
            accounts. See <Link href="/pricing/tradify" className={A}>Tradify pricing</Link>.
          </p>

          <h2 id="cost-examples">What each model costs for real teams</h2>
          <p>
            Arithmetic on published monthly prices, using the cheapest plan on each side that covers the need,
            before card fees and add-ons. Tradify totals are the per-user price times headcount:
          </p>
          <ul>
            <li><strong>Solo, 25 jobs a month:</strong> ServiceM8 Free at $0, against Tradify Lite at $47.</li>
            <li><strong>Solo, 100 jobs a month:</strong> Tradify Lite at $47, against ServiceM8 Growing at $79 (Starter stops at 50 jobs).</li>
            <li><strong>Three people, 120 jobs a month:</strong> ServiceM8 Growing at $79, against Tradify Lite at 3 × $47 = $141.</li>
            <li><strong>Five people, 400 jobs a month, needs job costing:</strong> ServiceM8 Premium at $149, against Tradify Pro at 5 × $51 = $255.</li>
            <li><strong>Two people, 600 jobs a month:</strong> Tradify Lite at 2 × $47 = $94, against ServiceM8 Premium Plus at $349.</li>
          </ul>
          <p>
            The pattern: ServiceM8 costs the same however many people you add, so it pulls ahead from the second
            user up to 150 jobs a month, and from the fourth user (against Lite) up to 500. Tradify costs the same however many jobs you run,
            so it wins for a solo operator with more than 50 jobs a month and for small crews running more than
            500. Plan features differ too, so check that the plan you price includes what you need.
          </p>

          <h2 id="contracts">Trials, cancellation and refunds</h2>
          <p>
            Both offer a 14-day trial; Tradify says no credit card is required, and ServiceM8 also has its
            permanent free plan. Neither pricing page shows an annual billing option, although Tradify’s terms
            refer to “monthly or yearly charges”.
          </p>
          <p>
            ServiceM8’s help center says there are no contracts, setup fees or per-user fees and that you can
            cancel at any time. Its Terms of Service say either side can end the agreement with notice at least
            30 days before the end of the payment period, so give notice early. The terms, from ServiceM8 Pty
            Ltd under Australian law, say your data stays your property but describe no refund policy or data
            export process.
          </p>
          <p>
            Tradify’s Product-Specific Terms, from Tradify Limited (incorporated in New Zealand), say you can
            cancel at any time through the cancellation process in the app, and that monthly or yearly charges
            are not refunded when you cancel. Tradify may also suspend or end the service at any time, and free
            accounts unused for more than 90 days may be closed without notice. Its governing law sits in Access
            Group terms we did not read, and its help center articles on billing were not available to us. With
            either vendor, cancel near the end of a billing period and export your customers, jobs and invoices
            first.
          </p>

          <h2 id="payments">Card fees and payouts</h2>
          <p>
            Both run card payments on Stripe at almost the same rate. Tradify lists 3.1% of the invoice plus
            $0.30 per successful charge and lets you pass the fee on to your customer; the first payout arrives
            7 days after payment, later payouts 2 days after. ServiceM8 lists 3.10% + 30¢ for US domestic cards
            on its payments page and 3.05% + 30¢ in its help center (current as of September 2024), 4.60% + 30¢
            for international cards and a $15 dispute fee, with deposits the next business day. Neither
            documents ACH processing for US customers on the pages we read.
          </p>

          <h2 id="accounting">Accounting: QuickBooks, Xero and MYOB</h2>
          <p>
            ServiceM8 syncs with QuickBooks Online and Xero on every plan, including Free, and also connects to
            MYOB; QuickBooks Desktop is not mentioned. Tradify includes Xero and QuickBooks sync from Lite, but
            its pages do not say whether that means QuickBooks Online or Desktop, and do not mention MYOB. If you
            run Desktop, confirm with Tradify and see our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="features">Field features: maps, phones and offline</h2>
          <p>
            ServiceM8 includes Auto Routing, live staff GPS and offline updates to synced jobs on every plan,
            though final quotes, invoices and forms wait until you reconnect. It also sells ServiceM8 Phone on
            top of a plan: $19 a month for 500 minutes without AI, $32 with the AI Phone Agent and $119 for
            unlimited minutes. Tradify has iOS and Android apps and shows active jobs and staff locations on a
            map; its features page does not describe route optimization, offline use or a phone system. Our{' '}
            <Link href="/guides/offline-field-service-app" className={A}>offline field service apps</Link> guide
            covers what to check if your crews work without signal.
          </p>
          <p>
            For back-office work, ServiceM8 adds asset management on Growing, job costing on Premium and API
            access from Starter. Tradify adds recurring jobs, progress invoicing, costing and timesheets on Pro,
            and purchase orders, service reminders and bulk invoicing on Plus; an API is not documented.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo operator doing fewer than 30 jobs a month:</strong> ServiceM8 Free.</li>
            <li><strong>Solo operator doing 51 to 150 jobs a month:</strong> Tradify Lite, at $47 against $79.</li>
            <li><strong>Crew of two or more doing up to 150 jobs a month, or four or more doing up to 500:</strong> ServiceM8, with unlimited users.</li>
            <li><strong>Small crew running more than 500 short jobs a month:</strong> Tradify, since its price does not rise with job count.</li>
            <li><strong>MYOB, or accounting sync on a free plan:</strong> ServiceM8.</li>
            <li><strong>A business phone system with AI answering:</strong> ServiceM8 Phone; Tradify documents none.</li>
            <li><strong>Purchase orders and service reminders priced per person:</strong> Tradify Plus lists both; check ServiceM8’s plan table for its equivalents. Electrical contractors can also see our <Link href="/by-industry/electrical" className={A}>electrical software</Link> page.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/servicem8-alternatives" className={A}>ServiceM8 alternatives</Link>{' '}
            and <Link href="/compare/jobber-vs-servicem8" className={A}>Jobber vs ServiceM8</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: ServiceM8 vs Tradify">
            Count people and jobs. ServiceM8 charges by jobs with unlimited users and a free plan, so it suits
            crews of two or more on modest job counts. Tradify charges $47 to $61 per person with no job
            limit shown, so it suits solo operators past 50 jobs and small, high-volume crews. Tradify does not
            refund charges already billed, and ServiceM8’s terms ask for 30 days’ notice. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/servicem8" className="text-orange-600 hover:text-orange-800">ServiceM8 pricing →</Link>
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
