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
 * /compare/servicem8-vs-fergus: targets "servicem8 vs fergus". No GSC data for this topic yet.
 *
 * ServiceM8 facts reuse /pricing/servicem8 and the b14 research notes: US pricing page, home page,
 * phone page, payments page, help center and Terms of Service, all checked 2026-11-24. Fergus facts
 * reuse /pricing/fergus and the b16 research notes: US pricing page, global pricing page, Terms of
 * Service, help center (changing plans, cancelling, contractors, timesheet users), Fergus Pay page and
 * LLM info page, all checked 2026-11-25. Conflicts, all stated on the page: ServiceM8's payments page
 * (3.10% + 30c) vs help center (3.05% + 30c, as of September 2024); ServiceM8's help center ("cancel at
 * any time") vs terms (30 days' notice before the end of the payment period); Fergus's pricing page
 * ("per month", not labelled per user) vs its terms ("on a per user basis with a plan type base");
 * Fergus US card fee 2.95% + $0.30 vs 1.95% + $0.30 stated for Australia; Fergus contractor users
 * $2.50 a day (US page) vs $4 (global page); Fergus plan names Essentials (pricing page) vs Basic (help
 * center). Not used: ServiceM8's unverified per-job billing option and free-plan "bonus jobs"; Fergus
 * feature rows whose icons mapped differently between its US and global pages (GPS tracking, job
 * phases, tasks, enquiry management, estimating and takeoff); either vendor's comparison pages or
 * claims about the other; review sites and third-party estimates. No new URLs fetched. No combined
 * team cost example, because Fergus does not publish a per-user amount; the only arithmetic is on
 * ServiceM8 plan prices and Fergus's per-day contractor rate. Nothing tested hands-on.
 */

const PATH = '/compare/servicem8-vs-fergus'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceM8 vs Fergus (2026): Job Limits vs Seats and Day Rates'
const DESCRIPTION =
  'ServiceM8 bills by jobs a month with unlimited users from $29. Fergus starts at $31 and bills per user, with $2.50 contractor days. Compare crew fit and terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicem8-vs-fergus',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceM8 vs Fergus', href: PATH },
]

const rows: { feature: string; sm8: string; fergus: string }[] = [
  { feature: 'What you pay for', sm8: 'Jobs created each month; unlimited users on every paid plan; help center says no per-user fees', fergus: 'People: terms say fees are charged “on a per user basis with a plan type base”; the pricing page says only “per month”' },
  { feature: 'Entry price', sm8: 'Free plan for one user and 30 jobs; Starter $29 a month for 50 jobs', fergus: 'Essentials from $31 a month (US page); no free plan' },
  { feature: 'Higher tiers', sm8: 'Growing $79 (150 jobs), Premium $149 (500 jobs), Premium Plus $349 (1,500+ jobs, then 20¢ a job)', fergus: 'Professional from $44 a month; Enterprise custom quote for more than 10 staff' },
  { feature: 'Part-time and subcontracted workers', sm8: 'No separate user types documented; anyone can be added on paid plans, but every job they work counts toward the allowance', fergus: 'Timesheet users from $26 a month; contractor users $2.50 a day, charged only on days scheduled or logging time (global page: $4)' },
  { feature: 'Team size the vendor names', sm8: 'Built for sole traders up to 20 staff', fergus: 'Sole traders through to 30+ staff; Enterprise plan above 10 staff' },
  { feature: 'Billing cycle', sm8: 'Monthly prices only; no annual option listed', fergus: 'Monthly, billed in arrears; FAQ says no yearly plans' },
  { feature: 'Trial and setup', sm8: '14-day trial plus the permanent free plan; help center says no setup fees', fergus: '14-day trial of Essentials, no credit card; setup from $0 with a free 1-hour onboarding session' },
  { feature: 'Cancellation', sm8: 'Help center: cancel at any time. Terms: notice at least 30 days before the end of the payment period', fergus: 'Cancel in Settings; takes effect at the end of that month, final invoice on the 1st; no refunds on termination' },
  { feature: 'Contracting entity and data', sm8: 'ServiceM8 Pty Ltd, Australian law; terms say your data stays your property', fergus: 'Fergus Software Limited, New Zealand law (outside Australia and the UK); account locks after cancelling and Fergus may remove your material' },
  { feature: 'Accounting', sm8: 'QuickBooks Online, Xero and MYOB; QuickBooks Online and Xero sync on every plan, including Free', fergus: 'Xero, QuickBooks and MYOB on Essentials and Professional; QuickBooks edition not stated' },
  { feature: 'Card payments', sm8: '3.10% + 30¢ US domestic (payments page) or 3.05% + 30¢ (help center, as of September 2024); next-business-day deposits', fergus: '2.95% + $0.30 (US pricing page); US payout time not stated; 1.95% + $0.30 and 2-day payouts are stated for Australia' },
  { feature: 'Forms, certificates and safety', sm8: 'Forms and certificates from Growing ($79)', fergus: 'Checklists, forms, hazards and SWMS on Professional; certificates add-on $30 (1 to 9 staff) or $80 (10+ staff)' },
  { feature: 'Suppliers and costing', sm8: 'Supplier invoice import from Starter; job costing and markup billing on Premium', fergus: 'Price books on both plans; purchase orders and automatic supplier integrations on Professional (manual on Essentials)' },
  { feature: 'Routing, phone and offline', sm8: 'Auto Routing and live GPS on every plan; ServiceM8 Phone from $19; offline app on every plan', fergus: 'Not documented on the pages we use' },
]

const faqs = [
  {
    question: 'Is ServiceM8 cheaper than Fergus?',
    answer:
      'It depends on your headcount and your job count, and only ServiceM8 publishes enough to work out a full team price. ServiceM8 charges by jobs a month with unlimited users on paid plans: $29 for 50 jobs, $79 for 150, $149 for 500. Fergus lists Essentials from $31 and Professional from $44 a month, and its terms say fees are per user, but it does not publish the per-user amount. Ask Fergus to quote your exact team before comparing.',
  },
  {
    question: 'Does Fergus charge per user?',
    answer:
      'Its Terms of Service say fees are charged “on a per user basis with a plan type base”, and its help center says a full user is billed at a flat monthly rate. The US pricing page itself says only “from $31 per month” and “from $44 per month”. ServiceM8 says it has no per-user fees.',
  },
  {
    question: 'How do subcontractors affect the price of each?',
    answer:
      'Fergus has a contractor user type at $2.50 a day on its US page, charged only on days the person is scheduled or logs time, at most once a day. Contractor users cannot create customer invoices, certificates or sign offs. ServiceM8 adds no charge for extra users on paid plans, but every job a subcontractor works still counts toward your monthly job allowance.',
  },
  {
    question: 'Which works with Xero, QuickBooks or MYOB?',
    answer:
      'Both list all three. ServiceM8 syncs with QuickBooks Online and Xero on every plan, including Free, and also connects to MYOB; it does not mention QuickBooks Desktop. Fergus lists Xero, QuickBooks and MYOB on both plans and does not say which QuickBooks edition.',
  },
  {
    question: 'Can I cancel ServiceM8 or Fergus at any time?',
    answer:
      'Neither has a fixed term. ServiceM8’s help center says you can cancel at any time, but its terms ask for notice at least 30 days before the end of the payment period. Fergus cancellations take effect at the end of the month you ask, with a final invoice on the 1st, no refunds and the account locked afterwards. Export your data first with either.',
  },
  {
    question: 'Do ServiceM8 and Fergus have a free trial?',
    answer:
      'Both offer a 14-day trial. Fergus’s trial is of Essentials and needs no credit card. ServiceM8 also has a permanent free plan for one user and 30 jobs a month, which Fergus does not offer.',
  },
]

const sources = [
  { name: 'ServiceM8 pricing (US plans, job limits, features by plan, over-limit FAQ)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 home (audience, 14-day trial)', url: 'https://www.servicem8.com/us', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost (no contracts, setup or per-user fees)', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 Phone (plans, minutes, AI Phone Agent)', url: 'https://www.servicem8.com/us/phone', checked: '2026-11-24' },
  { name: 'ServiceM8 Pay (US rates, next-business-day deposits)', url: 'https://www.servicem8.com/us/servicem8-pay', checked: '2026-11-24' },
  { name: 'ServiceM8 help: card processing fees and payout speed', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/servicem8-pay-card-processing-fees-payout-speed', checked: '2026-11-24' },
  { name: 'ServiceM8 help: connect to QuickBooks Online', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/quickbooks/how-do-i-connect-servicem8-to-quickbooks-online', checked: '2026-11-24' },
  { name: 'ServiceM8 help: offline use', url: 'https://support.servicem8.com/questions/mobile/does-servicem8-work-offline-without-mobile-coverage-or-internet', checked: '2026-11-24' },
  { name: 'ServiceM8 Terms of Service (termination, data, Australian law)', url: 'https://www.servicem8.com/us/terms-of-service', checked: '2026-11-24' },
  { name: 'Fergus US pricing (plans, add-ons, user types, FAQ)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
  { name: 'Fergus global pricing (non-US contractor rate, for comparison only)', url: 'https://fergus.com/pricing/', checked: '2026-11-25' },
  { name: 'Fergus Terms of Service (per-user fees, termination, refunds, governing law)', url: 'https://fergus.com/terms-of-service/', checked: '2026-11-25' },
  { name: 'Fergus help: changing your Fergus plan (billing in arrears)', url: 'https://help.fergus.com/en/articles/2292283-changing-your-fergus-plan', checked: '2026-11-25' },
  { name: 'Fergus help: cancelling your account', url: 'https://help.fergus.com/en/articles/5068313-cancelling-your-account', checked: '2026-11-25' },
  { name: 'Fergus help: contractors in Fergus', url: 'https://help.fergus.com/en/articles/3617164-contractors-in-fergus', checked: '2026-11-25' },
  { name: 'Fergus help: timesheet user', url: 'https://help.fergus.com/en/articles/11387079-timesheet-user', checked: '2026-11-25' },
  { name: 'Fergus Pay (fees, payouts, Tap to Pay)', url: 'https://fergus.com/features/fergus-pay/', checked: '2026-11-25' },
  { name: 'Fergus official information (team sizes, trades, integrations)', url: 'https://fergus.com/llm-info/', checked: '2026-11-25' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceM8VsFergusPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicem8-vs-fergus"
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
            ServiceM8 vs Fergus: <span className="text-orange-400">count your jobs or count your crew</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How each one bills full-time staff, casual workers and subcontractors, plus accounting, payments,
            trade paperwork and terms, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>ServiceM8</strong> charges by how many jobs you create each month and lets any number of
            people use its paid plans: free for one user and 30 jobs, $29 for 50, $79 for 150 and $149 for 500.{' '}
            <strong>Fergus</strong> charges by who uses it: its US page lists Essentials from $31 and
            Professional from $44 a month, its terms say fees are per user, and it adds cheaper seats for
            timesheet-only staff (from $26 a month) and subcontractors ($2.50 a day they work). ServiceM8 suits
            crews whose headcount is high relative to job count. Fergus suits trade firms that bring in
            subcontractors for some days and want purchase orders, supplier links and safety paperwork. Both
            are month to month.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceM8 vs Fergus at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. ServiceM8
            prices are from its US page; Fergus’s US page prints “$” with no currency code. Sources and check
            dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">ServiceM8</th>
                  <th scope="col" className="p-3.5">Fergus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.sm8}</td>
                    <td className="p-3.5">{r.fergus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Two billing models: a job allowance or a seat count</h2>
          <p>
            ServiceM8 sets the price by jobs created each month. The free plan covers one user and 30 jobs;
            Starter is $29 for 50 jobs, Growing $79 for 150, Premium $149 for 500 and Premium Plus $349 for
            1,500 or more, with extra jobs at 20¢ each on that plan only. Paid plans have unlimited users. If
            you go over on other plans, its FAQ says you can keep working for 7 more days before you are
            prompted to upgrade. ServiceM8’s pages do not define exactly what counts as a job, and quotes are a
            job status, so ask whether quotes that never turn into work use up the allowance. Full details are
            in our <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link> guide.
          </p>
          <p>
            Fergus sets the price by people. Its US pricing page shows Essentials from $31 and Professional
            from $44 “per month” without saying per user, but its Terms of Service say fees are charged “on a
            per user basis with a plan type base”, and its help center says a full user is billed at a flat
            monthly rate whatever their activity. Fergus does not publish the amount for each extra full user,
            so we have not priced a sample team. Its help center calls the entry plan Basic rather than
            Essentials, and its global pricing page shows different prices, so check you are on the US page.
            See <Link href="/pricing/fergus" className={A}>Fergus pricing</Link>.
          </p>

          <h2 id="crew-shape">Which team shape each one rewards</h2>
          <p>
            Because ServiceM8 ignores headcount on paid plans, adding a fifth or tenth person costs nothing
            until your job count moves you up a tier. A crew of eight doing 140 jobs a month stays on Growing
            at $79; the same crew doing 200 jobs needs Premium at $149 (arithmetic on published prices). That
            favours teams that send several people to each job, or run longer jobs, over solo operators doing
            many short visits.
          </p>
          <p>
            Fergus gives a lower price to people who do not need the full product. A{' '}
            <strong>timesheet user</strong>, from $26 a month, tracks hours and breaks in the Fergus Go app and
            can view job cards but cannot upload photos or files. A <strong>contractor user</strong> costs
            $2.50 a day on the US page ($4 on the global page) and is charged only on days they are scheduled
            or log time, once a day at most. So a subcontractor scheduled on 8 days in a month costs 8 × $2.50
            = $20 that month as a contractor user (arithmetic on the published US day rate). Contractor users
            cannot create customer invoices, process supplier invoices, or use certificates and sign offs, and
            switching one to a full user takes effect immediately at the full user rate. That suits builders
            and installers who bring in subcontractors for parts of a project.
          </p>
          <p>
            On size, ServiceM8 says it is built for sole traders up to 20 staff. Fergus says it serves sole
            traders through to businesses with 30 or more staff, and offers a custom Enterprise plan above 10
            staff.
          </p>

          <h2 id="trade-paperwork">Trade paperwork: suppliers, forms and safety</h2>
          <p>
            Fergus puts its project-style tools on Professional: checklists, forms, files and photos, tiered
            pricing, purchase orders, hazards and SWMS (safe work method statements), plus business, staff and
            financial reporting. Both plans include quoting and estimating, price books, job cards, timesheets,
            materials and recurring jobs; supplier integrations run manually on Essentials and automatically on
            Professional. Certificates are an add-on at $30 for 1 to 9 staff or $80 for 10 or more, and Fergus’s
            pricing page does not label the billing period.
          </p>
          <p>
            ServiceM8 includes quotes, invoicing, scheduling, online booking and recurring jobs on every plan.
            Supplier invoice import and progress invoices start on Starter, forms, certificates and asset
            records on Growing, and job costing with markup billing on Premium. Fergus lists plumbers and
            gasfitters, electricians, builders, HVAC and refrigeration, drainage, fire protection and security
            installers among its trades. See our{' '}
            <Link href="/by-industry/plumbing" className={A}>plumbing software</Link> and{' '}
            <Link href="/by-industry/electrical" className={A}>electrical software</Link> guides for more
            options in those trades.
          </p>

          <h2 id="accounting-payments">Accounting and payments</h2>
          <p>
            Both connect to Xero, QuickBooks and MYOB. ServiceM8 syncs with QuickBooks Online and Xero on every
            plan, including Free, and does not mention QuickBooks Desktop. Fergus lists QuickBooks without
            saying which edition, so confirm it if you run Desktop; our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> covers tools that support Desktop.
          </p>
          <p>
            Both payment services run on Stripe and support Tap to Pay. ServiceM8 Pay’s payments page lists
            3.10% + 30¢ for US domestic cards and its help center lists 3.05% + 30¢ (current as of September
            2024), with 4.60% + 30¢ for international cards, a $15 dispute fee and next-business-day deposits.
            Fergus’s US pricing page lists 2.95% + $0.30 per transaction; its Fergus Pay page quotes 1.95% +
            $0.30 and 2-business-day payouts, but states both for Australia, and gives no US payout time.
            Neither documents a US bank (ACH) payment option. On texts, ServiceM8 charges 10¢ each on the free
            plan and includes them on paid plans, while Fergus sells SMS alerts and reminders at $15 for 100.
          </p>

          <h2 id="contracts">Billing, cancellation and data</h2>
          <p>
            Both are monthly with no annual plan listed. Fergus bills in arrears: upgrades take effect and are
            charged from the day you upgrade, and downgrades start on the 1st of the next month. To cancel
            Fergus, go to Settings, Billing, Manage Plans; cancellation takes effect at the end of that month,
            the final invoice comes on the 1st, and the account is then locked. Its terms say no fees are
            refunded on termination, that Fergus may remove your material, and that you are responsible for
            keeping a copy. For customers outside Australia and the UK, the contract is with Fergus Software
            Limited under New Zealand law.
          </p>
          <p>
            ServiceM8’s help center says there are no contracts, setup fees or per-user fees and that you can
            cancel at any time, but its Terms of Service ask for notice at least 30 days before the end of the
            payment period, so give notice early. The terms are from ServiceM8 Pty Ltd under Australian law, say
            your data stays your property, and describe no refund policy or export process. With either, export
            your records before you cancel.
          </p>

          <h2 id="not-documented">What Fergus does not document on the pages we use</h2>
          <p>
            ServiceM8 lists Auto Routing, live staff GPS and an offline app on every plan, and sells ServiceM8
            Phone from $19 a month, with its AI Phone Agent on the $32 and $119 plans. Offline, its help center
            says you can update synced jobs, notes and photos but not produce final quotes, invoices or forms
            until you reconnect. We have no Fergus source for routing, offline use or a phone system (its
            pricing table’s GPS row read differently between its US and global pages, so we left it out). Ask
            Fergus to show these in a demo if they matter to you.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo, fewer than 30 jobs a month:</strong> ServiceM8 Free; Fergus has no free plan.</li>
            <li><strong>Several full-time techs on a modest job count:</strong> ServiceM8, since extra users cost nothing on paid plans.</li>
            <li><strong>Subcontractors who work some days a month:</strong> Fergus, with contractor users billed only on days they work.</li>
            <li><strong>Staff who only need to clock hours:</strong> Fergus timesheet users, from $26 a month.</li>
            <li><strong>Purchase orders, supplier links and safety documents:</strong> Fergus Professional.</li>
            <li><strong>Routing, offline use or a business phone system documented up front:</strong> ServiceM8.</li>
            <li><strong>More than 20 staff:</strong> ServiceM8 says it is built for up to 20; Fergus offers a custom Enterprise plan.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/servicem8-alternatives" className={A}>ServiceM8 alternatives</Link>{' '}
            or compare <Link href="/compare/jobber-vs-servicem8" className={A}>Jobber vs ServiceM8</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: ServiceM8 vs Fergus">
            The deciding question is who you pay for. ServiceM8 counts jobs and lets your whole crew in on
            paid plans, so it suits teams with more people than jobs. Fergus counts users but prices
            timesheet staff and day-rate subcontractors separately, and puts purchase orders and safety
            paperwork on Professional, so it suits trade firms with a changing mix of workers. Get a Fergus
            quote for your exact team. Our <Link href="/how-we-review" className={A}>review method</Link>{' '}
            explains why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/servicem8" className="text-orange-600 hover:text-orange-800">ServiceM8 pricing →</Link>
            <Link href="/pricing/fergus" className="text-orange-600 hover:text-orange-800">Fergus pricing →</Link>
            <Link href="/compare/servicem8-alternatives" className="text-orange-600 hover:text-orange-800">ServiceM8 alternatives →</Link>
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
