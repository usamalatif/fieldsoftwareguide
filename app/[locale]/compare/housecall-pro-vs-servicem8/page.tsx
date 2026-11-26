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
 * /compare/housecall-pro-vs-servicem8: targets "housecall pro vs servicem8" and
 * "servicem8 vs housecall pro". No GSC data for this topic yet.
 *
 * Housecall Pro facts reuse the site's verified pages only: /pricing/housecall-pro (pricing page,
 * payment help article and QuickBooks page, 2026-10-24) and /compare/housecall-pro-vs-kickserv,
 * /housecall-pro-vs-gorilladesk and /housecall-pro-alternatives (pricing page and plan data
 * 2026-11-19; help center 2026-11-17 to 2026-11-24). www.housecallpro.com and help.housecallpro.com
 * were not refetched. ServiceM8 facts reuse /pricing/servicem8 and the b14 research notes (US pricing
 * page, phone page, payments page, help center and Terms of Service, all checked 2026-11-24).
 * Conflicts, stated on the page: ServiceM8 card fee (payments page 3.10% + 30c vs help center 3.05% +
 * 30c "current as of September 2024"); ServiceM8 cancellation (help center "cancel at any time" vs
 * terms' 30 days' notice before the end of the payment period); Housecall Pro QuickBooks Desktop plan
 * (October QuickBooks page names no plan, November plan data lists it on Essentials; newer source
 * used and flagged "confirm"); Housecall Pro CSR AI (help articles disagree on cost and booking, so
 * only "add-on without a published price" is used). What counts as a ServiceM8 job is not defined on
 * the pages read. Not used: Housecall Pro add-on prices beyond Voice and vehicle GPS, HVAC package
 * prices, introductory offers and governing law (not in our sources); ServiceM8's unverified per-job
 * billing option, free-plan "bonus jobs" and 3-month Phone trial figure; any vendor's claims about the
 * other. Cost examples are arithmetic on published prices. Nothing tested hands-on.
 */

const PATH = '/compare/housecall-pro-vs-servicem8'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Housecall Pro vs ServiceM8 (2026): User Caps vs Monthly Job Limits'
const DESCRIPTION =
  'Housecall Pro sells plans for 1, 5 or 8 users from $59; ServiceM8 bills by jobs a month with unlimited users and a free plan. Compare costs, fees, QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/housecall-pro-vs-servicem8',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Housecall Pro vs ServiceM8', href: PATH },
]

const rows: { feature: string; hcp: string; sm8: string }[] = [
  { feature: 'What sets the price', hcp: 'Users, capped per plan: 1 (Basic), up to 5 (Essentials), up to 8 (MAX); no job limit stated', sm8: 'Jobs created each month; unlimited users on every paid plan' },
  { feature: 'Cheapest way in', hcp: 'Basic $59 a month billed annually ($79 month to month) for one user; no free plan', sm8: 'Free plan for one user and 30 jobs a month; Starter $29 for 50 jobs' },
  { feature: 'Plans as you grow', hcp: 'Essentials $149, MAX $299 a month billed annually ($189 and $329 month to month); $35 a month per user over 8 on MAX only', sm8: 'Growing $79 (150 jobs), Premium $149 (500 jobs), Premium Plus $349 (1,500+ jobs, then 20¢ a job); says it is built for up to 20 staff' },
  { feature: 'Billing and trial', hcp: 'Annual or month to month; 14-day trial with MAX features, no credit card', sm8: 'Monthly prices only, no annual option listed; 14-day trial plus the permanent free plan' },
  { feature: 'Contract and terms', hcp: 'Says it does not require long-term contracts; governing law not in our sources', sm8: 'Help center: no contracts, cancel at any time. Terms: 30 days’ notice before the end of the payment period; ServiceM8 Pty Ltd, Australian law' },
  { feature: 'Accounting', hcp: 'QuickBooks Online from Essentials; plan data also lists Desktop on Essentials; Xero not documented', sm8: 'QuickBooks Online and Xero on every plan, including Free; MYOB supported; Desktop not mentioned' },
  { feature: 'Routing and GPS', hcp: 'Routes and employee GPS from Essentials; Optimize by Drive Time on MAX; vehicle GPS through Force at $20 per vehicle a month', sm8: 'Auto Routing, live staff GPS and on-my-way texts on every plan, including Free' },
  { feature: 'Recurring work', hcp: 'Recurring Service Plans on MAX; a paid add-on on some other plans (price not published)', sm8: 'Recurring jobs on every plan; auto-pay for recurring jobs from Starter' },
  { feature: 'Job costing and assets', hcp: 'Job costing on Basic; equipment records not documented in our sources', sm8: 'Asset management from Growing; job costing from Premium' },
  { feature: 'Phones and AI answering', hcp: 'Voice add-on: call tracking from $45 a month, VoIP from $65, plus overages; CSR AI listed as an add-on without a price', sm8: 'ServiceM8 Phone: $19 (500 minutes, no AI), $32 (500 minutes plus AI Phone Agent), $119 (unlimited minutes plus AI)' },
  { feature: 'Card fees', hcp: '2.59% in person, 2.99% online invoice, 3.49% keyed, saved or Amex', sm8: '3.10% + 30¢ US domestic (payments page) or 3.05% + 30¢ (help center, as of September 2024); international 4.60% + 30¢; $15 dispute fee' },
  { feature: 'Bank payments, Tap to Pay and payouts', hcp: 'ACH 1%; instant payout +1%; Tap to Pay on Mobile $5 per active device a month', sm8: 'No US bank payment option found; Tap to Pay on iPhone and Android with no extra hardware; next-business-day deposits' },
  { feature: 'Offline', hcp: 'View only: jobs for today and the next 2 days, up to 10 a day; changes and payments need a connection', sm8: 'View and update synced jobs, notes and photos on every plan; no final quotes, invoices or forms until back online' },
  { feature: 'Your data when you leave', hcp: 'Admins can export Customers and Jobs lists, sent by email; data kept if a trial expires', sm8: 'Terms say your data stays your property; no export process or retention period described' },
]

const faqs = [
  {
    question: 'Is ServiceM8 cheaper than Housecall Pro?',
    answer:
      'For most crews, yes, unless the crew does a lot of jobs. Five people doing 140 jobs a month fit ServiceM8 Growing at $79, against Housecall Pro Essentials at $149 a month billed annually. Eight people doing 400 jobs fit ServiceM8 Premium at $149, against Housecall Pro MAX at $299. A four-person crew doing 700 jobs a month flips it: ServiceM8 Premium Plus is $349, against $149 for Housecall Pro Essentials. Run your own headcount and job count through both.',
  },
  {
    question: 'How many users do I get on each plan?',
    answer:
      'Housecall Pro Basic covers 1 user, Essentials up to 5 and MAX up to 8, with $35 a month for each extra user on MAX. It publishes no extra-user price for Basic or Essentials, so ask before you add a sixth person on Essentials. ServiceM8’s free plan is for one user, and every paid plan has unlimited users; its help center says it has no per-user fees.',
  },
  {
    question: 'What happens if I go over my ServiceM8 job limit?',
    answer:
      'Its pricing FAQ says you can keep creating jobs and working as normal for 7 more days. If your billing cycle resets in that time, the count starts again; otherwise you are prompted to upgrade. Only Premium Plus lists a price for extra jobs, 20¢ each. ServiceM8 does not define exactly what counts as a job on the pages we read, and quotes are a job status, so ask whether unconverted quotes count. Housecall Pro states no job limit.',
  },
  {
    question: 'Which works with QuickBooks Desktop, Xero or MYOB?',
    answer:
      'Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials ($149 a month billed annually), not on Basic; its QuickBooks page confirms Desktop but names no plan, so confirm it for your plan. ServiceM8 syncs with QuickBooks Online and Xero on every plan, including Free, and connects to MYOB, but does not mention Desktop. We found no Xero or MYOB sync documented for Housecall Pro.',
  },
  {
    question: 'Which costs less to take card and bank payments?',
    answer:
      'On a $1,000 invoice, Housecall Pro charges $25.90 for a card in person, $29.90 for a card entered on an online invoice and $10 for a bank (ACH) payment. ServiceM8 charges $31.30 for a US card at its payments page rate (3.10% + 30¢), or $30.80 at the help center rate of 3.05% + 30¢, and we found no US bank payment option. That is arithmetic on each vendor’s published rates.',
  },
  {
    question: 'Do Housecall Pro and ServiceM8 work offline?',
    answer:
      'Both in part. Housecall Pro’s app is view only offline: jobs for today and the next 2 days, and changes and payments need a connection. ServiceM8 lets you view and update synced jobs, notes and photos offline on every plan, but final quotes, invoices, forms, emails and texts wait until you reconnect.',
  },
  {
    question: 'Can I cancel either one at any time?',
    answer:
      'Housecall Pro says it does not require long-term contracts; annual billing lowers the monthly rate. ServiceM8’s help center says there is no contract and you can cancel at any time, while its Terms of Service, governed by Australian law, ask for notice at least 30 days before the end of the payment period. Give notice early, and export your records first.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, MAX extra users, trial, contracts, add-ons, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro QuickBooks integration (Online and Desktop)', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-10-24' },
  { name: 'Housecall Pro help: payment processing options and fees', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Instapay FAQ', url: 'https://help.housecallpro.com/en/articles/1801050-instapay-faq', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Voice FAQs (pricing)', url: 'https://help.housecallpro.com/en/articles/6666356-voice-faqs', checked: '2026-11-21' },
  { name: 'Housecall Pro help: CSR AI overview', url: 'https://help.housecallpro.com/en/articles/9740104-csr-ai-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: Optimize by Drive Time (MAX)', url: 'https://help.housecallpro.com/en/articles/14093813-optimize-by-drive-time', checked: '2026-11-24' },
  { name: 'Housecall Pro help: vehicle GPS tracking (Force, $20 per vehicle a month)', url: 'https://help.housecallpro.com/en/articles/6060351-vehicle-gps-tracking-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Housecall Pro help: import and export jobs and customers', url: 'https://help.housecallpro.com/en/articles/6797101-how-to-import-export-jobs-and-customers', checked: '2026-11-21' },
  { name: 'Housecall Pro HVAC software (separate HVAC package)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-11-20' },
  { name: 'ServiceM8 pricing (US plans, job limits, features by plan, over-limit FAQ)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 home (audience up to 20 staff, iOS and Android apps, 14-day trial)', url: 'https://www.servicem8.com/us', checked: '2026-11-24' },
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

export default function HousecallProVsServiceM8Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/housecall-pro-vs-servicem8"
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
            Housecall Pro vs ServiceM8: <span className="text-orange-400">a seat cap or a job cap</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Plan limits, team costs, accounting, payments, phones, offline use and terms, from each
            vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Both vendors put a ceiling on each plan, but on different things. <strong>Housecall Pro</strong>{' '}
            caps users: Basic $59 a month billed annually for 1 user, Essentials $149 for up to 5 and MAX
            $299 for up to 8, with no job limit stated. <strong>ServiceM8</strong> caps jobs: free for one
            user and 30 jobs, then $29 for 50 jobs, $79 for 150 and $149 for 500, with unlimited users on
            every paid plan. ServiceM8 usually costs less for a crew that does fewer, longer jobs, and
            includes accounting sync, routing and GPS on its free plan. Housecall Pro usually costs less
            for a small team with a heavy job count, and adds annual billing, ACH at 1% and QuickBooks
            Desktop on Essentials. Count both your people and your monthly jobs before you choose.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Housecall Pro vs ServiceM8 at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. US prices.
            Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Housecall Pro</th>
                  <th scope="col" className="p-3.5">ServiceM8</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.hcp}</td>
                    <td className="p-3.5">{r.sm8}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: a cap on people or a cap on jobs</h2>
          <p>
            Housecall Pro sells three plans, each sized by users. Billed annually, Basic is $59 a month for
            1 user, Essentials $149 for up to 5 and MAX $299 for up to 8; month to month they are $79, $189
            and $329. MAX lists $35 a month for each user over 8. Housecall Pro publishes no extra-user
            price for Basic or Essentials, so a second person on Basic or a sixth on Essentials may mean
            moving up a plan. It states no limit on jobs. Every rate is in our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> guide.
          </p>
          <p>
            ServiceM8 sells five plans, each sized by jobs created in a month. The free plan covers one
            user and 30 jobs; Starter is $29 for 50 jobs, Growing $79 for 150, Premium $149 for 500 and
            Premium Plus $349 for 1,500 or more, with extra jobs at 20¢ each on that plan only. Every paid
            plan has unlimited users. Go over on another plan and its FAQ gives you 7 more days before you
            are prompted to upgrade. ServiceM8 does not define a job on the pages we read, and quotes are a
            job status, so ask whether quotes that never become work count. It lists monthly prices only.
            See <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link>.
          </p>

          <h2 id="cost-examples">Five teams, priced both ways</h2>
          <p>
            Arithmetic on published prices, using Housecall Pro’s annual rates and the cheapest plan on
            each side that covers the need. Month-to-month Housecall Pro costs more.
          </p>
          <ul>
            <li><strong>One person, 40 jobs a month, no accounting sync:</strong> ServiceM8 Starter at $29, against Housecall Pro Basic at $59.</li>
            <li><strong>One person, 25 jobs a month, needs QuickBooks Online:</strong> ServiceM8 Free at $0, against Housecall Pro Essentials at $149 (Basic has no QuickBooks sync).</li>
            <li><strong>Five people, 140 jobs a month:</strong> ServiceM8 Growing at $79, against Housecall Pro Essentials at $149.</li>
            <li><strong>Ten people, 450 jobs a month:</strong> ServiceM8 Premium at $149, against Housecall Pro MAX plus 2 extra users at about $369, if the $35 rate applies to your billing term.</li>
            <li><strong>Four people, 700 jobs a month:</strong> Housecall Pro Essentials at $149, against ServiceM8 Premium Plus at $349.</li>
          </ul>
          <p>
            Divide your monthly jobs by your headcount. A low number (a few long jobs per person) favours
            ServiceM8, because hiring costs nothing extra. A high number (many short visits per person)
            favours Housecall Pro, because extra jobs cost nothing extra.
          </p>

          <h2 id="contracts">Billing, trials and terms</h2>
          <p>
            Housecall Pro offers annual billing at a lower monthly rate or month to month, and a 14-day
            trial with MAX features and no credit card. Its pricing FAQ says it does not require long-term
            contracts, and it keeps your data if a trial expires. We have not recorded the governing law in
            its terms, so read that clause if it matters to you.
          </p>
          <p>
            ServiceM8 lists no annual option. It has a 14-day trial of its paid features as well as the
            permanent free plan. Its help center says there are no contracts, setup fees or per-user fees
            and you can cancel at any time; its Terms of Service ask for notice at least 30 days before the
            end of the payment period. Those terms come from ServiceM8 Pty Ltd under Australian law, even
            on its US site, and say your data stays your property without describing an export process.
          </p>

          <h2 id="accounting">QuickBooks, Xero and MYOB</h2>
          <p>
            Housecall Pro starts QuickBooks Online sync on Essentials, so a one-person business that wants
            sync pays $149 rather than $59. Its plan data lists QuickBooks Desktop on Essentials too; its
            QuickBooks page confirms Desktop support but names no plan, so confirm it. We found no Xero or
            MYOB sync for Housecall Pro. ServiceM8 includes QuickBooks Online and Xero on every plan, even
            Free, and connects to MYOB, but does not mention Desktop. Our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> lists other tools that support
            Desktop.
          </p>

          <h2 id="field">Routing, recurring work and offline use</h2>
          <p>
            ServiceM8 puts Auto Routing, live staff GPS and on-my-way texts on every plan, and recurring
            jobs on the free plan. Housecall Pro adds routes and employee GPS on Essentials, puts Optimize
            by Drive Time (which reorders one technician’s day) and Recurring Service Plans on MAX, and
            sells vehicle GPS through Force at $20 per vehicle a month. Housecall Pro includes job costing
            on Basic; ServiceM8 adds asset records on Growing and job costing on Premium.
          </p>
          <p>
            Offline, ServiceM8 lets you update synced jobs, notes and photos but not produce final quotes,
            invoices or forms. Housecall Pro is view only: today’s and the next 2 days’ jobs, with changes
            and payments waiting for a connection. If crews work without signal, see our{' '}
            <Link href="/guides/offline-field-service-app" className={A}>offline field service apps</Link>{' '}
            guide.
          </p>

          <h2 id="phones">Phones and AI answering</h2>
          <p>
            Both sell a phone add-on. Housecall Pro’s Voice costs from $45 a month for call tracking or
            $65 for VoIP, plus overages, and it lists CSR AI as an add-on without a published price; its
            help articles disagree on what CSR AI costs and whether it books jobs, so get that in writing.
            ServiceM8 Phone requires a ServiceM8 plan: $19 a month for 500 minutes without AI, $32 with the
            AI Phone Agent and $119 for unlimited minutes with AI. ServiceM8 does not say whether the agent
            books jobs.
          </p>

          <h2 id="payments">Payments and payouts</h2>
          <p>
            Housecall Pro charges 2.59% for cards in person, 2.99% for cards entered on an online invoice,
            3.49% for keyed, saved, American Express and commercial cards, 1% for bank (ACH) payments and
            an extra 1% for instant payouts; Tap to Pay on Mobile is $5 per active device a month.
            ServiceM8 Pay runs on Stripe: its payments page lists 3.10% + 30¢ for US cards and its help
            center 3.05% + 30¢ (as of September 2024), with 4.60% + 30¢ for international cards, a $15
            dispute fee and next-business-day deposits. Tap to Pay works on iPhone and Android with no
            extra hardware. We found no US bank payment option on ServiceM8’s pages, which matters if you
            send large invoices.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo, under 30 jobs a month:</strong> ServiceM8 Free, which also includes QuickBooks Online sync.</li>
            <li><strong>A crew of 5 to 20 on fewer, longer jobs:</strong> ServiceM8, since hiring does not change the price.</li>
            <li><strong>A small team running many short visits:</strong> Housecall Pro, since it states no job limit.</li>
            <li><strong>QuickBooks Desktop, ACH or annual billing:</strong> Housecall Pro.</li>
            <li><strong>Xero or MYOB, or editing jobs offline:</strong> ServiceM8.</li>
            <li><strong>HVAC shops:</strong> Housecall Pro shows a separate, higher-priced HVAC package; see our <Link href="/by-industry/hvac" className={A}>HVAC software guide</Link>.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/housecall-pro-alternatives" className={A}>Housecall Pro alternatives</Link>{' '}
            and <Link href="/compare/servicem8-alternatives" className={A}>ServiceM8 alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Housecall Pro vs ServiceM8">
            Housecall Pro limits how many people can log in and leaves jobs open; ServiceM8 limits how many
            jobs you create and leaves people open. Pick ServiceM8 for a growing crew on fewer jobs, or a
            solo start at $0. Pick Housecall Pro for a small, busy team that wants ACH, annual billing or
            QuickBooks Desktop. Our <Link href="/how-we-review" className={A}>review method</Link> explains
            why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
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
