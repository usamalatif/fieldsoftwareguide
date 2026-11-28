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
 * /compare/servicem8-vs-kickserv: targets "servicem8 vs kickserv". No GSC data for this topic yet.
 *
 * ServiceM8 facts reuse /pricing/servicem8 and the b14 research notes: US pricing page, home page,
 * phone page, payments page, help center and Terms of Service, all checked 2026-11-24. Kickserv
 * facts reuse /pricing/kickserv, /compare/service-fusion-vs-kickserv and the b14 research: pricing
 * page, features, payments and integrations pages, partnerships page, changelog, help center and
 * Terms of Service (last modified 2024-08-21), all checked 2026-11-24, plus the terms' Colorado law
 * clause (read 2026-11-26). Conflicts, all stated on the page: ServiceM8's payments page (3.10% +
 * 30c) and help center (3.05% + 30c, "current as of September 2024") disagree; ServiceM8's help
 * center ("cancel at any time") and terms (30 days' notice before the end of the payment period)
 * disagree; Kickserv's pricing page shows one price per plan next to "Save 20% with annual
 * subscription" without saying whether it is the monthly or the annual rate, so no derived
 * Kickserv monthly or annual figure is given. What counts as a ServiceM8 job is not defined on the
 * pages read. Deliberately not used: ServiceM8's unverified per-job billing option, free-plan
 * "bonus jobs" and 3-month Phone trial figure; Kickserv's free plan limits, Flex ($19 only in a 2022
 * blog) and Premium (no current price or limits); whether Kickserv's $50 Desktop fee applies on
 * Scale; and any claim either vendor makes about the other. Cost figures are arithmetic on
 * published prices. No new fetches. Nothing tested hands-on.
 */

const PATH = '/compare/servicem8-vs-kickserv'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceM8 vs Kickserv (2026): Per-Job Pricing vs User Caps'
const DESCRIPTION =
  'ServiceM8 prices by jobs a month with unlimited users and a free plan; Kickserv lists $60 to $199 for 5, 10 or 20 users. Compare cost, QuickBooks and fees.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicem8-vs-kickserv',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceM8 vs Kickserv', href: PATH },
]

const rows: { feature: string; sm8: string; ks: string }[] = [
  { feature: 'What you pay for', sm8: 'Jobs a month: each plan has a job allowance; unlimited users on every paid plan', ks: 'Team size: three plans capped at 5, 10 or 20 users; no job limit stated' },
  { feature: 'Plan prices', sm8: 'Free (1 user, 30 jobs); Starter $29 (50 jobs), Growing $79 (150), Premium $149 (500), Premium Plus $349 (1,500+, then 20¢ a job)', ks: 'Start $60 (5 users), Run $119 (10 users), Scale $199 (20 users) a month' },
  { feature: 'Billing label', sm8: 'Monthly prices only; no annual option listed', ks: 'One price per plan next to “Save 20% with annual subscription”; the page does not say whether it is the monthly or the annual rate' },
  { feature: 'Going past the plan', sm8: '7 more days of normal work, then a prompt to upgrade; says it is built for up to 20 staff', ks: 'No published price for extra users or for teams above 20' },
  { feature: 'Free plan and trial', sm8: 'Permanent free plan for one user and 30 jobs; 14-day trial of paid features', ks: '30-day free trial on every plan; free plan mentioned only in help articles, with no limits published' },
  { feature: 'Contract and cancellation', sm8: 'Help center: no contracts, cancel at any time. Terms: notice at least 30 days before the end of the payment period', ks: 'One-month or one-year term that renews automatically; annual cannot switch to monthly before renewal; written notice, effective at the end of the term' },
  { feature: 'Terms, law and data', sm8: 'ServiceM8 Pty Ltd; Australian law and courts; your data stays your property; no export process described', ks: 'Fees non-refundable; Colorado law; cancelling permanently deletes customer and job records, so export first' },
  { feature: 'Accounting', sm8: 'QuickBooks Online and Xero on every plan, including Free; MYOB also supported; QuickBooks Desktop not mentioned', ks: 'QuickBooks Online from Start; QuickBooks Desktop $50 a month or $480 a year extra, listed on Run, every version including Mac' },
  { feature: 'Card fees', sm8: '3.10% + 30¢ US domestic (payments page) or 3.05% + 30¢ (help center, as of September 2024); international 4.60% + 30¢; $15 dispute fee', ks: '2.9% Tap to Pay; 3.9% card not present; same on every plan; no fixed per-transaction fee listed' },
  { feature: 'Bank payments and payouts', sm8: 'No US bank payment option found on its pages; next-business-day deposits', ks: 'ACH 1% + $0.30, can be passed to the customer; instant payout extra 1%, within 30 minutes' },
  { feature: 'Routing and GPS', sm8: 'Auto Routing, live staff GPS and on-my-way texts on every plan, including Free', ks: 'Calendar scheduling; dispatch mapping and GPS check-ins from Run; no route optimization listed' },
  { feature: 'Phone and call answering', sm8: 'ServiceM8 Phone: $19 (500 minutes, no AI), $32 (500 minutes plus AI Phone Agent), $119 (unlimited minutes plus AI)', ks: 'No phone system or AI answering; lists the Nexa 24/7 live answering service as a partner, 10% off' },
  { feature: 'Job costing, assets and reports', sm8: 'Asset management on Growing; job costing on Premium; API from Starter', ks: 'Time and expense tracking and over 20 reports on Start; custom reports from Run; open API; no job costing listed' },
  { feature: 'Offline', sm8: 'View and update synced jobs, notes and photos on every plan; no final quotes, invoices or forms until back online', ks: 'Changelog mentions offline functionality; scope and date not stated' },
]

const faqs = [
  {
    question: 'Is ServiceM8 cheaper than Kickserv?',
    answer:
      'It depends on how many jobs each person does. ServiceM8 charges by jobs with unlimited users, so a 20-person crew doing 100 jobs a month fits Growing at $79, against Kickserv Scale at $199. A five-person crew doing 120 jobs a month needs the same $79 Growing plan, against Kickserv Start at $60. Kickserv does not say whether its shown prices are the monthly or the annual rate, so check both at checkout.',
  },
  {
    question: 'Does ServiceM8 or Kickserv charge per user?',
    answer:
      'Kickserv does not list a fee per user, but each plan has a user cap: 5 users on Start, 10 on Run and 20 on Scale, with no published price above 20. ServiceM8’s help center says there are no per-user fees, and every paid plan has unlimited users; its free plan is for one user.',
  },
  {
    question: 'Which works with QuickBooks Desktop?',
    answer:
      'Kickserv. It includes QuickBooks Online from Start and sells a QuickBooks Desktop sync for $50 a month or $480 a year, listed on the Run plan, and says it works with every version including Mac. ServiceM8 syncs with QuickBooks Online, Xero and MYOB on every plan, including Free, but does not mention QuickBooks Desktop.',
  },
  {
    question: 'Which has lower payment fees?',
    answer:
      'For cards, Kickserv lists 2.9% with Tap to Pay and 3.9% when the card is not present, with no fixed fee listed. ServiceM8 lists 3.10% + 30¢ on its payments page and 3.05% + 30¢ in its help center for US domestic cards. Kickserv also takes ACH bank payments at 1% + $0.30; we found no US bank payment option on ServiceM8’s pages.',
  },
  {
    question: 'Can I cancel ServiceM8 or Kickserv at any time?',
    answer:
      'ServiceM8’s help center says there is no contract and you can cancel at any time, while its Terms of Service ask for notice at least 30 days before the end of the payment period. Kickserv’s terms offer a one-month or one-year term that renews automatically; written notice takes effect at the end of the term, an annual term cannot switch to monthly early, and fees are non-refundable. Cancelling Kickserv deletes your records, so export first.',
  },
  {
    question: 'Which is better for a team of more than 20?',
    answer:
      'Neither publishes a plan for it. Kickserv’s largest published plan, Scale, covers 20 users and it lists no price beyond that. ServiceM8 has no user cap on paid plans but says it is built for businesses up to 20 staff. Larger teams should compare wider.',
  },
]

const sources = [
  { name: 'ServiceM8 pricing (US plans, job limits, features by plan, over-limit FAQ)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 home (audience up to 20 staff, 14-day trial)', url: 'https://www.servicem8.com/us', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost (no contracts or per-user fees)', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 Phone (plans, minutes, AI Phone Agent)', url: 'https://www.servicem8.com/us/phone', checked: '2026-11-24' },
  { name: 'ServiceM8 Pay (US rates, next-business-day deposits)', url: 'https://www.servicem8.com/us/servicem8-pay', checked: '2026-11-24' },
  { name: 'ServiceM8 help: card processing fees and payout speed', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/servicem8-pay-card-processing-fees-payout-speed', checked: '2026-11-24' },
  { name: 'ServiceM8 help: connect to QuickBooks Online', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/quickbooks/how-do-i-connect-servicem8-to-quickbooks-online', checked: '2026-11-24' },
  { name: 'ServiceM8 help: offline use', url: 'https://support.servicem8.com/questions/mobile/does-servicem8-work-offline-without-mobile-coverage-or-internet', checked: '2026-11-24' },
  { name: 'ServiceM8 Terms of Service (termination, data, Australian law)', url: 'https://www.servicem8.com/us/terms-of-service', checked: '2026-11-24' },
  { name: 'Kickserv pricing (plans, users, annual saving, trial, features by plan)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv features (calendar scheduling)', url: 'https://www.kickserv.com/features', checked: '2026-11-24' },
  { name: 'Kickserv payments integration (Tap to Pay, card not present, instant payout)', url: 'https://www.kickserv.com/integrations/payments', checked: '2026-11-24' },
  { name: 'Kickserv help: ACH payments (1% + $0.30)', url: 'https://help.kickserv.com/article/94-ach-payments', checked: '2026-11-24' },
  { name: 'Kickserv help: connect to QuickBooks Desktop ($50 a month or $480 a year)', url: 'https://help.kickserv.com/article/8-connect-to-quickbooks-desktop', checked: '2026-11-24' },
  { name: 'Kickserv integrations (QuickBooks Desktop every version including Mac, open API)', url: 'https://www.kickserv.com/integrations', checked: '2026-11-24' },
  { name: 'Kickserv partnerships (Nexa 24/7 Answering Service)', url: 'https://www.kickserv.com/partnerships', checked: '2026-11-24' },
  { name: 'Kickserv changelog (offline functionality)', url: 'https://changelog.kickserv.com/', checked: '2026-11-24' },
  { name: 'Kickserv Terms of Service (last modified August 21, 2024; term, renewal, refunds, Colorado law in section 23)', url: 'https://www.kickserv.com/terms', checked: '2026-11-26' },
  { name: 'Kickserv help: how to cancel (free plan, data deletion)', url: 'https://help.kickserv.com/article/61-how-do-i-cancel-my-account', checked: '2026-11-24' },
  { name: 'Kickserv help: settings (data export)', url: 'https://help.kickserv.com/article/38-settings', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceM8VsKickservPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicem8-vs-kickserv"
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
            ServiceM8 vs Kickserv: <span className="text-orange-400">pay by jobs or pay by team size</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Cost by crew size and job volume, QuickBooks, payment fees, routing, phones and terms, from each
            vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>ServiceM8</strong> charges by jobs a month with unlimited users on paid plans: free for one
            user and 30 jobs, then $29 for 50 jobs, $79 for 150, $149 for 500 and $349 for 1,500 or more.{' '}
            <strong>Kickserv</strong> charges by team size: $60 for 5 users, $119 for 10 and $199 for 20, with
            no job limit stated, though its page does not say whether those are monthly or annual rates.
            ServiceM8 is usually cheaper for larger crews doing fewer jobs; Kickserv is usually cheaper for
            small teams doing many. Kickserv adds QuickBooks Desktop ($50 a month) and ACH at 1% + $0.30;
            ServiceM8 includes routing, GPS and offline use on every plan.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceM8 vs Kickserv at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. US prices.
            Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">ServiceM8</th>
                  <th scope="col" className="p-3.5">Kickserv</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.sm8}</td>
                    <td className="p-3.5">{r.ks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: job allowances vs user caps</h2>
          <p>
            ServiceM8 sets the price by jobs created each month and does not charge per user. The free plan
            covers one user and 30 jobs; Starter is $29 for 50 jobs, Growing $79 for 150, Premium $149 for 500
            and Premium Plus $349 for 1,500 or more, with extra jobs at 20¢ each on that plan only. If you go
            over on other plans, its FAQ says you can keep working for 7 more days before you are prompted to
            upgrade. Its pages do not define exactly what counts as a job, and quotes are a job status in
            ServiceM8, so ask whether quotes that never turn into work use your allowance. It lists monthly
            prices only. See <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link>.
          </p>
          <p>
            Kickserv sets the price by how many people log in. Start is $60 for 5 users, Run $119 for 10 and
            Scale $199 for 20, and no job limit is stated. The pricing page shows one price per plan next to
            “Save 20% with annual subscription” and does not say whether that price is the month-to-month rate
            or the annual rate, so check the total at checkout before you compare. Kickserv publishes no price
            for extra users or for teams above 20. See{' '}
            <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link>.
          </p>

          <h2 id="cost-examples">What each costs by crew size and job volume</h2>
          <p>
            Arithmetic on published prices, using the cheapest plan that covers each need. Kickserv figures are
            the prices its page shows, which may be the monthly or the annual rate.
          </p>
          <ul>
            <li><strong>Solo, 25 jobs a month, needs QuickBooks Online:</strong> ServiceM8 Free at $0, against Kickserv Start at $60.</li>
            <li><strong>Four people, 45 jobs a month:</strong> ServiceM8 Starter at $29, against Kickserv Start at $60.</li>
            <li><strong>Five people, 120 jobs a month:</strong> Kickserv Start at $60, against ServiceM8 Growing at $79 (Starter stops at 50 jobs).</li>
            <li><strong>Ten people, 400 jobs a month:</strong> Kickserv Run at $119, against ServiceM8 Premium at $149.</li>
            <li><strong>Fifteen people, 600 jobs a month:</strong> Kickserv Scale at $199, against ServiceM8 Premium Plus at $349.</li>
            <li><strong>Twenty people, 100 jobs a month:</strong> ServiceM8 Growing at $79, against Kickserv Scale at $199.</li>
          </ul>
          <p>
            The pattern: ServiceM8’s price follows your job count and Kickserv’s follows your headcount.
            Many short visits per person favour Kickserv; a larger crew on fewer, longer jobs favours
            ServiceM8. If you need QuickBooks Desktop, Kickserv’s figure rises by $50 a month and ServiceM8 does
            not offer it.
          </p>

          <h2 id="accounting">Accounting: QuickBooks Desktop, Online, Xero and MYOB</h2>
          <p>
            This is the clearest feature split. Kickserv includes QuickBooks Online from Start and sells a
            QuickBooks Desktop sync for $50 a month or $480 a year, listed on the Run plan; it says the sync
            works with every version, including Mac. Kickserv does not say whether Scale includes the Desktop
            fee, so ask. ServiceM8 syncs with QuickBooks Online and Xero on every plan, including Free, and also
            connects to MYOB, but does not mention QuickBooks Desktop. If you run Desktop, our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> covers other tools that support it.
          </p>

          <h2 id="payments">Card and bank payment fees</h2>
          <p>
            Kickserv runs payments through Stripe at 2.9% with Tap to Pay and 3.9% when the card is not
            present, the same on every plan, with no fixed per-transaction fee listed. ACH bank payments cost 1%
            + $0.30 and can be passed to the customer, and instant payouts cost an extra 1%. ServiceM8 Pay also
            runs on Stripe. Its payments page lists 3.10% + 30¢ for US domestic cards and its help center lists
            3.05% + 30¢ (current as of September 2024), with 4.60% + 30¢ for international cards, a $15
            dispute fee and next-business-day deposits. We found no US bank payment option on ServiceM8’s
            pages.
          </p>
          <p>
            On a $1,000 invoice, as published: Kickserv $29 with Tap to Pay, $39 for a card paid online and
            $10.30 by ACH; ServiceM8 $31.30 at its payments page rate or $30.80 at its help center rate.
          </p>

          <h2 id="contracts">Trials, contracts and your data</h2>
          <p>
            ServiceM8 has a permanent free plan and a 14-day trial of paid features. Its help center says
            there are no contracts, setup fees or per-user fees and that you can cancel at any time, while its
            Terms of Service ask for notice at least 30 days before the end of the payment period, so give
            notice early. The terms are from ServiceM8 Pty Ltd under Australian law and courts, even on its US
            site; they say your data stays your property but describe no export process.
          </p>
          <p>
            Kickserv offers a 30-day trial on every plan. Its terms (last modified August 21, 2024, Colorado
            law) set a one-month or one-year term that renews automatically for the same length; an annual term
            cannot switch to monthly before renewal. Either side can cancel with written notice, effective at
            the end of the term, and payment authorization must be cancelled at least 15 days before the next
            billing date. Fees are non-refundable. Its help center warns that cancelling permanently deletes
            customer and job records, so export from Account and Billing settings first.
          </p>

          <h2 id="field">Routing, phones and offline use</h2>
          <p>
            ServiceM8 includes Auto Routing, live staff GPS and on-my-way texts on every plan, including Free.
            Kickserv offers calendar scheduling, with dispatch mapping and GPS check-ins from Run, and lists no
            route optimization. See our{' '}
            <Link href="/guides/route-optimization-software" className={A}>route optimization guide</Link>.
          </p>
          <p>
            For phones, ServiceM8 sells ServiceM8 Phone on top of a plan: $19 a month for 500 minutes without
            AI, $32 with its AI Phone Agent and $119 for unlimited minutes. Kickserv has no phone system or AI
            answering; it lists the Nexa 24/7 live answering service as a partner, with 10% off for Kickserv
            customers. Offline, ServiceM8 documents viewing and updating synced jobs, notes and photos, with
            final quotes, invoices and forms waiting until you reconnect. Kickserv’s changelog mentions offline
            functionality without a date or scope. Our{' '}
            <Link href="/guides/offline-field-service-app" className={A}>offline field service apps</Link> guide
            compares more vendors.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo operator doing fewer than 30 jobs a month:</strong> ServiceM8 Free.</li>
            <li><strong>Small team doing many short jobs:</strong> Kickserv, since its price does not rise with job count.</li>
            <li><strong>Crew of 10 to 20 on fewer, longer jobs:</strong> ServiceM8, with unlimited users.</li>
            <li><strong>QuickBooks Desktop:</strong> Kickserv, at $50 a month extra.</li>
            <li><strong>Xero or MYOB, or accounting sync on a free plan:</strong> ServiceM8.</li>
            <li><strong>ACH payments:</strong> Kickserv.</li>
            <li><strong>Routing, GPS and a phone system with AI answering:</strong> ServiceM8.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/servicem8-alternatives" className={A}>ServiceM8 alternatives</Link>{' '}
            and <Link href="/compare/kickserv-alternatives" className={A}>Kickserv alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: ServiceM8 vs Kickserv">
            Count jobs per person. ServiceM8 charges by jobs with unlimited users and includes accounting sync,
            routing and offline use on every plan, so it suits crews doing fewer, longer jobs. Kickserv charges
            by user cap with no stated job limit, adds QuickBooks Desktop and ACH, and suits small teams doing
            many jobs. Confirm whether Kickserv’s shown price is monthly or annual. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/servicem8" className="text-orange-600 hover:text-orange-800">ServiceM8 pricing →</Link>
            <Link href="/pricing/kickserv" className="text-orange-600 hover:text-orange-800">Kickserv pricing →</Link>
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
