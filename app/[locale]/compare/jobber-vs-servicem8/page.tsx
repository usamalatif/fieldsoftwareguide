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
 * /compare/jobber-vs-servicem8: targets "jobber vs servicem8". No GSC data for this topic yet.
 *
 * ServiceM8 facts reuse /pricing/servicem8 and the b14 research notes: US pricing page, phone page,
 * payments page, help center and Terms of Service, all checked 2026-11-24. Its payments page
 * (3.10% + 30c) and help center (3.05% + 30c, "current as of September 2024") disagree, and its help
 * center ("cancel at any time") and terms (30 days' notice before the end of the payment period)
 * disagree; both are stated each time. What counts as a job is not defined on the pages read. Jobber
 * facts reuse the site's verified pages (pricing 2026-11-03 to 2026-11-21, Terms of Service read
 * 2026-11-21, help center 2026-11-03 to 2026-11-20); getjobber.com was not refetched. Jobber's
 * governing law is not recorded in our sources, so it is not stated. Not used: ServiceM8's
 * unverified per-job billing option and free-plan "bonus jobs", its 3-month Phone trial figure, and
 * any vendor's claims about the other. Cost examples are arithmetic on published prices. Nothing
 * tested hands-on.
 */

const PATH = '/compare/jobber-vs-servicem8'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Jobber vs ServiceM8 (2026): Per-User vs Per-Job Pricing'
const DESCRIPTION =
  'Jobber prices by user band from $29/month; ServiceM8 by jobs a month with unlimited users from $29. Compare costs, accounting, phones, fees and terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/jobber-vs-servicem8',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber vs ServiceM8', href: PATH },
]

const rows: { feature: string; jobber: string; sm8: string }[] = [
  { feature: 'What you pay for', jobber: 'Users: plan price set by team band (1, 5, 10 or 15 users); no job limit stated', sm8: 'Jobs a month: each plan has a job allowance; unlimited users on every paid plan' },
  { feature: 'Entry price', jobber: 'Core $29 a month billed annually for one user ($49 with no commitment); no free plan', sm8: 'Free plan for one user and 30 jobs; Starter $29 a month for 50 jobs' },
  { feature: 'Team pricing', jobber: 'Connect $149, Grow $229 for 5 users; Connect $229, Grow $299 for 10 users (billed annually); extra users $29 each; 16+ contact sales', sm8: 'Growing $79 (150 jobs), Premium $149 (500 jobs), Premium Plus $349 (1,500+ jobs, then 20¢ a job); says it is built for up to 20 staff' },
  { feature: 'Billing options and trial', jobber: 'Annual prepaid, 1-year commitment billed monthly, or no commitment; 14-day trial of Grow, no credit card', sm8: 'Monthly prices only; no annual option listed; 14-day trial plus the permanent free plan' },
  { feature: 'Contract and cancellation', jobber: 'Cancel any time on no-commitment billing; annual prepaid is non-refundable; plans renew unless cancelled 30 days before renewal', sm8: 'Help center: no contracts, cancel at any time. Terms: notice at least 30 days before the end of the payment period' },
  { feature: 'Terms and governing law', jobber: 'Terms of Service last updated September 22, 2026; governing law not recorded in our sources', sm8: 'ServiceM8 Pty Ltd; Australian law and courts govern, including on the US terms page; your data stays your property' },
  { feature: 'Accounting', jobber: 'QuickBooks Online and Xero from Connect ($99 for one user, billed annually); no QuickBooks Desktop', sm8: 'QuickBooks Online and Xero on every plan, including Free; MYOB also supported; Desktop not mentioned' },
  { feature: 'Routing and GPS', jobber: 'Route optimization and GPS tracking from Connect; routing runs on the web app, admins only', sm8: 'Auto Routing, live staff GPS and on-my-way texts on every plan, including Free' },
  { feature: 'Phone and AI answering', jobber: 'No business phone system documented; AI Receptionist add-on $29 a month, included on Plus', sm8: 'ServiceM8 Phone: $19 (500 minutes, no AI), $32 (500 minutes plus AI Phone Agent), $119 (unlimited minutes plus AI)' },
  { feature: 'Card fees', jobber: '2.9% + 30¢ online; 2.7% + 30¢ Tap to Pay; instant payout +1%', sm8: '3.10% + 30¢ US domestic (payments page) or 3.05% + 30¢ (help center, as of September 2024); international 4.60% + 30¢; $15 dispute fee' },
  { feature: 'Bank payments and payouts', jobber: 'ACH 1% (US only); cards pay out in 2 business days after the first payout', sm8: 'No US bank payment option found on its pages; next-business-day deposits' },
  { feature: 'Quotes and texting', jobber: 'Quotes on every plan; follow-ups from Connect; optional line items and two-way texting from Grow', sm8: 'Quotes, quote options and follow-ups on every plan; texts 10¢ each on Free, included on paid plans' },
  { feature: 'Job costing, assets and API', jobber: 'Job costing on Grow; API on Plus; no equipment records documented', sm8: 'Asset management on Growing; job costing on Premium; API from Starter' },
  { feature: 'Offline', jobber: 'Day’s schedule, timers, notes with photos, checklists and visit completion; no invoicing offline', sm8: 'View and update synced jobs, notes and photos on every plan; no final quotes, invoices or forms until back online' },
]

const faqs = [
  {
    question: 'Is ServiceM8 cheaper than Jobber?',
    answer:
      'It depends on your job count more than your headcount. ServiceM8 charges by jobs a month with unlimited users on paid plans, so a crew of five doing 120 jobs a month fits Growing at $79, while Jobber’s 5-user Connect band is $149 a month billed annually. A three-person crew doing 600 jobs a month needs ServiceM8 Premium Plus at $349, against $149 for the same Jobber band. Work out both from your own numbers.',
  },
  {
    question: 'Does ServiceM8 charge per user like Jobber?',
    answer:
      'No. ServiceM8’s help center says there are no per-user fees, and every paid plan has unlimited users; the free plan is for one user. Jobber prices each plan by team band (1, 5, 10 or 15 users) and lists extra users at $29 a month.',
  },
  {
    question: 'Which works with QuickBooks, Xero or MYOB?',
    answer:
      'Both sync with QuickBooks Online and Xero. ServiceM8 includes the sync on every plan, including Free, and also connects to MYOB. Jobber starts the sync on Connect and does not list MYOB. Neither lists QuickBooks Desktop.',
  },
  {
    question: 'Which has a phone system and AI call answering?',
    answer:
      'ServiceM8 sells ServiceM8 Phone, a business phone system from $19 a month, with its AI Phone Agent on the $32 and $119 plans. Jobber documents no phone system; its AI Receptionist answers calls and texts as a $29 a month add-on and is included on Plus. Check the minutes or conversations each option includes.',
  },
  {
    question: 'Can I cancel Jobber or ServiceM8 at any time?',
    answer:
      'Jobber’s no-commitment monthly option can be cancelled at any time, but annual prepaid billing is non-refundable and a 1-year commitment keeps billing until the term ends. ServiceM8’s help center says there is no contract and you can cancel at any time, while its Terms of Service, governed by Australian law, ask for notice at least 30 days before the end of the payment period. Give notice early with either.',
  },
  {
    question: 'Do Jobber and ServiceM8 work offline?',
    answer:
      'Both document partial offline use. Jobber keeps the day’s schedule, timers, notes with photos, checklists and visit completion working, but not invoicing. ServiceM8 lets you view and update synced jobs, notes and photos on every plan, but final quotes, invoices, forms, emails and texts wait until you reconnect.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, bands, billing options, trial, add-ons, fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber Terms of Service (last updated September 22, 2026)', url: 'https://www.getjobber.com/terms-of-service/', checked: '2026-11-21' },
  { name: 'Jobber help: Manage Team (extra seats)', url: 'https://help.getjobber.com/en/articles/manage-teamhow-to-add-manage-and-deactivate-team-members/', checked: '2026-11-03' },
  { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: AI Receptionist', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-03' },
  { name: 'Jobber help: add-on features', url: 'https://help.getjobber.com/en/articles/add-on-features-to-your-jobber-plan-subscription/', checked: '2026-11-03' },
  { name: 'Jobber help: quote basics', url: 'https://help.getjobber.com/en/articles/quote-basics/', checked: '2026-11-20' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: Jobber Payments payout window', url: 'https://help.getjobber.com/en/articles/jobber-payments-payout-window/', checked: '2026-11-03' },
  { name: 'Jobber help: bank payments (ACH)', url: 'https://help.getjobber.com/hc/en-us/articles/1500004781762-Bank-Payments-ACH', checked: '2026-11-03' },
  { name: 'Jobber help: Tap to Pay', url: 'https://help.getjobber.com/hc/en-us/articles/34647042014615-Tap-to-Pay', checked: '2026-11-03' },
  { name: 'Jobber help: use the Jobber app offline', url: 'https://help.getjobber.com/en/articles/use-the-jobber-app-offline/', checked: '2026-11-19' },
  { name: 'ServiceM8 pricing (US plans, job limits, features by plan, over-limit FAQ)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 home (audience, 14-day trial)', url: 'https://www.servicem8.com/us', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost (no contracts or per-user fees)', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 Phone (plans, minutes, AI Phone Agent)', url: 'https://www.servicem8.com/us/phone', checked: '2026-11-24' },
  { name: 'ServiceM8 Pay (US rates, next-business-day deposits)', url: 'https://www.servicem8.com/us/servicem8-pay', checked: '2026-11-24' },
  { name: 'ServiceM8 help: card processing fees and payout speed', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/servicem8-pay-card-processing-fees-payout-speed', checked: '2026-11-24' },
  { name: 'ServiceM8 help: getting started with ServiceM8 Pay (Tap to Pay)', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/how-to-get-started-with-servicem8-pay', checked: '2026-11-24' },
  { name: 'ServiceM8 help: connect to QuickBooks Online', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/quickbooks/how-do-i-connect-servicem8-to-quickbooks-online', checked: '2026-11-24' },
  { name: 'ServiceM8 help: offline use', url: 'https://support.servicem8.com/questions/mobile/does-servicem8-work-offline-without-mobile-coverage-or-internet', checked: '2026-11-24' },
  { name: 'ServiceM8 Terms of Service (termination, data, Australian law)', url: 'https://www.servicem8.com/us/terms-of-service', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function JobberVsServiceM8Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/jobber-vs-servicem8"
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
            Jobber vs ServiceM8: <span className="text-orange-400">pay per user or pay per job</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing models, accounting, routing, phones, payments, offline use and terms, from each
            vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Jobber</strong> charges by team size: $29 a month billed annually for one user on Core,
            then bands of 5, 10 and 15 users, with no job limit stated. <strong>ServiceM8</strong> charges by
            jobs a month with unlimited users on paid plans: free for one user and 30 jobs, $29 for 50 jobs,
            $79 for 150 and $149 for 500. ServiceM8 is usually cheaper for larger crews doing fewer jobs, and
            includes QuickBooks Online, Xero, routing and offline use on every plan. Jobber is usually cheaper
            for small teams doing many jobs, offers annual billing and ACH at 1%. ServiceM8’s terms are governed by Australian law, even for
            US customers. Count your monthly jobs before you choose.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Jobber vs ServiceM8 at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. US prices.
            Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Jobber</th>
                  <th scope="col" className="p-3.5">ServiceM8</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.jobber}</td>
                    <td className="p-3.5">{r.sm8}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: user bands vs job allowances</h2>
          <p>
            Jobber sets the price by plan and team band. Billed annually, Core is $29 for one user (with one
            extra seat at most), Connect $99, Grow $149 and Plus $399 for five users. At 5 users Connect is
            $149 and Grow $229; at 10 users, $229 and $299; at 15 users, $299 and $399. Extra users are listed
            at $29 a month, and teams of 16 or more contact sales. No-commitment monthly billing costs more,
            for example $49 for Core. Every band is in our{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> guide.
          </p>
          <p>
            ServiceM8 sets the price by jobs created each month and does not charge per user. The free plan
            covers one user and 30 jobs; Starter is $29 for 50 jobs, Growing $79 for 150, Premium $149 for 500
            and Premium Plus $349 for 1,500 or more, with extra jobs at 20¢ each on that plan only. If you go
            over on other plans, its FAQ says you can keep working for 7 more days before you are prompted to
            upgrade. Its pages do not define exactly what counts as a job, and quotes are a job status in
            ServiceM8, so ask whether unconverted quotes use your allowance. ServiceM8 lists monthly prices
            only. See <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link>.
          </p>

          <h2 id="cost-examples">What each model costs for real teams</h2>
          <p>
            Arithmetic on published prices, using Jobber’s annual-prepaid rates and the cheapest plan that
            covers each need:
          </p>
          <ul>
            <li><strong>Solo, 25 jobs a month, needs QuickBooks Online:</strong> ServiceM8 Free at $0, against Jobber Connect at $99 (Core has no accounting sync).</li>
            <li><strong>Solo, 80 jobs a month, no accounting sync:</strong> Jobber Core at $29, against ServiceM8 Growing at $79 (Starter stops at 50 jobs).</li>
            <li><strong>Five people, 120 jobs a month, needs QuickBooks Online:</strong> ServiceM8 Growing at $79, against the Jobber Connect 5-user band at $149.</li>
            <li><strong>Ten people, 400 jobs a month, needs job costing:</strong> ServiceM8 Premium at $149, against the Jobber Grow 10-user band at $299.</li>
            <li><strong>Three people, 600 jobs a month, needs QuickBooks Online:</strong> Jobber Connect 5-user band at $149, against ServiceM8 Premium Plus at $349.</li>
          </ul>
          <p>
            The pattern: ServiceM8 gets cheaper per person as you hire, and Jobber gets cheaper per job as
            volume grows. High-volume, short visits favour Jobber; larger crews on fewer, longer jobs favour
            ServiceM8.
          </p>

          <h2 id="contracts">Trials, contracts and governing law</h2>
          <p>
            Both offer a 14-day trial; ServiceM8 also has a permanent free plan. Jobber sells each plan three
            ways: annual prepaid (paid upfront and non-refundable), a one-year commitment billed monthly, or
            no commitment at a higher rate that you can cancel at any time. All renew automatically unless
            cancelled 30 days before renewal.
          </p>
          <p>
            ServiceM8’s help center says there are no contracts, setup fees or per-user fees and that you can
            cancel at any time. Its Terms of Service say either side can end the agreement with notice at least
            30 days before the end of the payment period, so give notice early. The terms are from ServiceM8
            Pty Ltd, governed by Australian law with Australian courts, even on its US site. They say your data
            stays your property but describe no refund policy, price-change notice or data export process, so
            export your records before you leave. We did not record the governing law in Jobber’s terms (last
            updated September 22, 2026); read that clause before you sign if it matters to you.
          </p>

          <h2 id="accounting">Accounting: QuickBooks, Xero and MYOB</h2>
          <p>
            ServiceM8 syncs with QuickBooks Online and Xero on every plan, including Free, and also connects to
            MYOB. Jobber syncs with QuickBooks Online and Xero from Connect, $99 a month billed annually for one
            user, and does not list MYOB. Neither lists QuickBooks Desktop. If you need Desktop, our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> covers tools that support it.
          </p>

          <h2 id="phones">Routing, phones and AI answering</h2>
          <p>
            ServiceM8 includes Auto Routing, live staff GPS and automatic on-my-way texts on every plan.
            Jobber adds route optimization and GPS tracking on Connect; its routing reorders anytime visits by
            driving distance, runs in the web app and is for admins only. See our{' '}
            <Link href="/guides/route-optimization-software" className={A}>route optimization guide</Link>.
          </p>
          <p>
            For phones, ServiceM8 sells ServiceM8 Phone on top of a ServiceM8 plan: Connect at $19 a month for
            500 minutes without AI, Connect Plus at $32 with the AI Phone Agent, and Unlimited at $119 with
            unlimited minutes. Extra minutes cost 3¢ each on the 500-minute plans. ServiceM8 does not say
            whether the AI agent books jobs. Jobber documents no phone system; its AI Receptionist answers calls and
            texts for $29 a month, included on Plus. Jobber’s Receptionist article says 30 conversations per
            billing cycle, then $0.79 each, while its add-ons article says 100 a month. Our{' '}
            <Link href="/guides/ai-answering-service-for-contractors" className={A}>AI answering guide</Link>{' '}
            compares both with other vendors.
          </p>

          <h2 id="payments">Payments and payouts</h2>
          <p>
            Jobber publishes 2.9% + 30¢ for cards paid online, 2.7% + 30¢ for Tap to Pay, 1% for US bank (ACH)
            payments and an extra 1% for instant payouts; after the first payout, card payments arrive on a
            2-business-day schedule. ServiceM8 Pay runs on Stripe. Its payments page lists 3.10% + 30¢ for US
            domestic cards and its help center lists 3.05% + 30¢ (current as of September 2024), with 4.60% +
            30¢ for international cards, a $15 dispute fee and next-business-day deposits. ServiceM8 supports
            Tap to Pay on iPhone and Android. We found no US bank payment option on ServiceM8’s pages, so ACH
            is a clear Jobber advantage for large invoices.
          </p>

          <h2 id="features">Quotes, job costing and offline use</h2>
          <p>
            ServiceM8 includes quotes with options and automated follow-ups on every plan, asset management
            from Growing, job costing from Premium and API access from Starter. Jobber includes quotes on every
            plan, follow-ups from Connect, optional line items, two-way texting and job costing from Grow, and
            API access on Plus; it documents no equipment records. Offline, Jobber keeps the day’s schedule,
            timers, notes, checklists and visit completion working but not invoicing. ServiceM8 lets you update
            synced jobs, notes and photos on every plan, but final quotes, invoices and forms wait until you
            reconnect. See our{' '}
            <Link href="/guides/offline-field-service-app" className={A}>offline field service apps</Link> guide.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo operator doing fewer than 30 jobs a month:</strong> ServiceM8 Free.</li>
            <li><strong>Small team doing many short jobs:</strong> Jobber, since its price does not rise with job count.</li>
            <li><strong>Crew of five to 20 on fewer, longer jobs:</strong> ServiceM8, with unlimited users.</li>
            <li><strong>MYOB, or accounting sync on the cheapest plan:</strong> ServiceM8.</li>
            <li><strong>ACH payments or annual billing:</strong> Jobber.</li>
            <li><strong>A business phone system with AI answering:</strong> ServiceM8 Phone; Jobber offers AI answering without a phone system.</li>
            <li><strong>More than 20 staff:</strong> Jobber’s bands go to 15 users before contact sales, and ServiceM8 says it is built for up to 20 staff, so compare wider.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link>{' '}
            and <Link href="/compare/servicem8-alternatives" className={A}>ServiceM8 alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Jobber vs ServiceM8">
            The deciding number is jobs per person. ServiceM8 charges by jobs with unlimited users and
            includes accounting sync, routing and offline use on every plan, so it suits crews doing fewer,
            longer jobs. Jobber charges by user band with no stated job limit, adds ACH at 1% and annual
            billing, and suits small teams doing many jobs. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
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
