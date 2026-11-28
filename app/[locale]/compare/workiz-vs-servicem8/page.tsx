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
 * /compare/workiz-vs-servicem8: targets "workiz vs servicem8". No GSC data for this topic yet.
 *
 * Workiz facts reuse /pricing/workiz and the b12 research notes: pricing page, Genius Answering,
 * Workiz Pay, card readers, financing and QuickBooks pages, checked 2026-11-24; Terms of Service
 * v1.9 (last updated 2026-11-02) billing, increase, phone and chargeback clauses read 2026-11-24,
 * and the 12-month term with 30 days' notice read 2026-11-21. Routing, offline, team location
 * tracking and estimate deposits reuse the site's compare pages (Workiz feature pages checked
 * 2026-11-21). help.workiz.com returned 403 and is not used. ServiceM8 facts reuse
 * /pricing/servicem8 and the b14 research notes (pricing, home, phone, payments, help center and
 * Terms of Service, all 2026-11-24). Conflicts: ServiceM8's payments page (3.10% + 30c) and help
 * center (3.05% + 30c, as of September 2024) disagree, and its help center ("cancel at any time")
 * and terms (30 days' notice before the end of the payment period) disagree; both are stated each
 * time. Workiz's governing law and contracting party are not recorded in our sources, so they are
 * not stated. Not used: Workiz's time-limited new-customer discount, its 2019 press-release card
 * rate, its help-center fee snippets, ServiceM8's unverified per-job billing option, free-plan
 * bonus jobs and Phone trial length, and any vendor's claims about the other. No cost example,
 * because Workiz publishes no prices. Nothing tested hands-on.
 */

const PATH = '/compare/workiz-vs-servicem8'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Workiz vs ServiceM8 (2026): Quote-Only Plans vs Per-Job Pricing'
const DESCRIPTION =
  'Workiz is quote-only with a 12-month renewing term; ServiceM8 prices by jobs a month with unlimited users and a free plan. Compare phones, QuickBooks and fees.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/workiz-vs-servicem8',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Workiz vs ServiceM8', href: PATH },
]

const rows: { feature: string; workiz: string; sm8: string }[] = [
  { feature: 'How the price is set', workiz: 'By quote: Standard, Pro and Ultimate all say “Request pricing”; fees are set in your Sales Order', sm8: 'Published: each plan has a monthly job allowance; unlimited users on every paid plan' },
  { feature: 'Entry point', workiz: 'No free plan; Standard price not published', sm8: 'Free plan for one user and 30 jobs; Starter $29 a month for 50 jobs' },
  { feature: 'Higher plans', workiz: 'Pro and Ultimate, prices not published; no user limit or per-user price on the pricing page', sm8: 'Growing $79 (150 jobs), Premium $149 (500 jobs), Premium Plus $349 (1,500+ jobs, then 20¢ a job)' },
  { feature: 'Billing options and trial', workiz: 'Annual plan said to save “$400+”, monthly and annual prices not shown; 7-day trial, no credit card', sm8: 'Monthly prices only; no annual option listed; 14-day trial plus the permanent free plan' },
  { feature: 'Contract and cancellation', workiz: 'Term set in the Sales Order; standard 12 months, renewing for 12 months unless 30 days’ notice; fees non-cancelable and non-refundable', sm8: 'Help center: no contracts, cancel at any time. Terms: notice at least 30 days before the end of the payment period' },
  { feature: 'Price increases', workiz: 'Up to 10% a year, with at least 30 days’ written notice', sm8: 'No price-change notice described in its terms' },
  { feature: 'Phone system', workiz: 'Integrated phone system, call flows and 2-way texting on every plan; Genius Phone sold separately, price not published', sm8: 'ServiceM8 Phone on top of a plan: $19 (500 minutes, no AI), $32 (500 minutes plus AI), $119 (unlimited minutes plus AI)' },
  { feature: 'AI answering', workiz: 'Genius Answering (AI agent Jessica, English and Spanish), sold separately, price not published', sm8: 'AI Phone Agent on the $32 and $119 phone plans; booking ability not stated' },
  { feature: 'Scheduling and routing', workiz: 'Drag-and-drop calendar and team location tracking on every plan; route optimization offered, plan not stated; Genius Scheduling on Pro and Ultimate', sm8: 'Auto Routing, live staff GPS and on-my-way texts on every plan, including Free' },
  { feature: 'Quotes', workiz: 'Unlimited estimates and deposits on every plan; sales proposals and flat rate on Ultimate', sm8: 'Quotes, quote options and follow-ups on every plan; proposals and bundles from Growing' },
  { feature: 'Service plans and equipment', workiz: 'Recurring jobs on every plan; service plans and equipment tracking on Ultimate only', sm8: 'Recurring jobs on every plan; asset management from Growing; job costing on Premium' },
  { feature: 'Accounting', workiz: 'QuickBooks Online and Desktop on every plan; data flows one way, Workiz to QuickBooks', sm8: 'QuickBooks Online and Xero on every plan, including Free; MYOB also supported; Desktop not mentioned' },
  { feature: 'Payments', workiz: 'Card and ACH rates not published; $25 non-refundable fee per chargeback; Wisetack and Sunbit financing', sm8: '3.10% + 30¢ US domestic (payments page) or 3.05% + 30¢ (help center, as of September 2024); international 4.60% + 30¢; $15 dispute fee' },
  { feature: 'Offline and API', workiz: 'Job details and updates offline, synced later; open API on Ultimate', sm8: 'View and update synced jobs, notes and photos on every plan, no final quotes or invoices offline; API from Starter' },
]

const faqs = [
  {
    question: 'Is ServiceM8 cheaper than Workiz?',
    answer:
      'We cannot say, because Workiz publishes no prices. ServiceM8 lists every plan: free for one user and 30 jobs, then $29, $79, $149 and $349 a month by job allowance, with unlimited users on paid plans. Get a written Workiz quote for the plan you need, monthly and annual, and set it against the ServiceM8 plan that covers your monthly job count.',
  },
  {
    question: 'Does Workiz have a free plan like ServiceM8?',
    answer:
      'No. Workiz offers a 7-day free trial with no credit card, and its terms say fees become due when the trial ends. ServiceM8 has a permanent free plan for one user and 30 jobs a month, plus a 14-day trial of its paid features.',
  },
  {
    question: 'Which has the easier contract to leave?',
    answer:
      'ServiceM8, on paper. Its help center says there is no contract and you can cancel at any time, though its Terms of Service ask for notice at least 30 days before the end of the payment period. Workiz’s terms (version 1.9) set the term in your Sales Order, with a standard 12-month term that renews for another 12 months unless you give 30 days’ notice, and payments are non-refundable.',
  },
  {
    question: 'Can Workiz raise its price during my contract?',
    answer:
      'Its Terms of Service allow an annual fee increase of up to 10%, with at least 30 days’ written notice. ServiceM8’s terms do not describe price-change notice, and its prices are monthly, so check its pricing page before each billing period.',
  },
  {
    question: 'Which works with QuickBooks Desktop?',
    answer:
      'Workiz. Its QuickBooks page says it integrates with QuickBooks Online and Desktop, with data flowing one way from Workiz to QuickBooks, and the pricing page lists QuickBooks on every plan. ServiceM8 connects to QuickBooks Online, Xero and MYOB on every plan, but does not mention Desktop.',
  },
  {
    question: 'Which has a phone system with AI answering?',
    answer:
      'Both. Workiz includes an integrated phone system and 2-way texting on every plan, and sells Genius Phone and Genius Answering (its AI agent, Jessica) separately without published prices. ServiceM8 Phone is $19 a month without AI, or $32 and $119 with its AI Phone Agent, on top of a ServiceM8 plan.',
  },
]

const sources = [
  { name: 'Workiz pricing plans (plans, features by plan, add-ons, trial, annual saving, FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'Workiz Terms of Service v1.9 (last updated November 2, 2026): billing, increases, phone usage, chargebacks; 12-month term and notice read 2026-11-21', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-24' },
  { name: 'Workiz Genius Answering (Jessica, English and Spanish)', url: 'https://www.workiz.com/features/genius-answering/', checked: '2026-11-24' },
  { name: 'Workiz phone system', url: 'https://www.workiz.com/features/phone-system/', checked: '2026-11-21' },
  { name: 'Workiz route planning', url: 'https://www.workiz.com/features/route-planning/', checked: '2026-11-21' },
  { name: 'Workiz mobile app (offline)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-21' },
  { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-11-21' },
  { name: 'Workiz Pay', url: 'https://www.workiz.com/features/workiz-pay/', checked: '2026-11-24' },
  { name: 'Workiz consumer financing (Wisetack, Sunbit)', url: 'https://www.workiz.com/features/consumer-financing/', checked: '2026-11-24' },
  { name: 'Workiz QuickBooks integration (Online and Desktop, one-way sync)', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-24' },
  { name: 'ServiceM8 pricing (US plans, job limits, features by plan, over-limit FAQ)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 home (audience, 14-day trial)', url: 'https://www.servicem8.com/us', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost (no contracts or per-user fees)', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 Phone (plans, minutes, AI Phone Agent)', url: 'https://www.servicem8.com/us/phone', checked: '2026-11-24' },
  { name: 'ServiceM8 Pay (US rates, next-business-day deposits)', url: 'https://www.servicem8.com/us/servicem8-pay', checked: '2026-11-24' },
  { name: 'ServiceM8 help: card processing fees and payout speed', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/servicem8-pay-card-processing-fees-payout-speed', checked: '2026-11-24' },
  { name: 'ServiceM8 help: connect to QuickBooks Online', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/quickbooks/how-do-i-connect-servicem8-to-quickbooks-online', checked: '2026-11-24' },
  { name: 'ServiceM8 help: offline use', url: 'https://support.servicem8.com/questions/mobile/does-servicem8-work-offline-without-mobile-coverage-or-internet', checked: '2026-11-24' },
  { name: 'ServiceM8 Terms of Service (termination, data, Australian law)', url: 'https://www.servicem8.com/us/terms-of-service', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function WorkizVsServiceM8Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/workiz-vs-servicem8"
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
            Workiz vs ServiceM8: <span className="text-orange-400">a quote and a term, or a price list by jobs</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing, contract terms, phones, quotes, service plans, accounting, payments and offline use,
            from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Workiz</strong> publishes no prices: Standard, Pro and Ultimate are quote-only, the
            standard term is 12 months and renews unless you give 30 days’ notice, and fees can rise up to
            10% a year. <strong>ServiceM8</strong> publishes monthly prices by jobs a month with unlimited
            users on paid plans: free for one user and 30 jobs, then $29, $79, $149 and $349. Workiz puts a
            phone system and QuickBooks Online and Desktop on every plan, with service plans and equipment
            tracking on Ultimate. ServiceM8 adds Xero and MYOB, published card fees and a phone add-on from
            $19. Pick ServiceM8 to see the price before you talk to sales; get a Workiz quote if you need
            QuickBooks Desktop or its Ultimate trade features.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Workiz vs ServiceM8 at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. US prices.
            Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Workiz</th>
                  <th scope="col" className="p-3.5">ServiceM8</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.workiz}</td>
                    <td className="p-3.5">{r.sm8}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: a sales quote vs a published job ladder</h2>
          <p>
            Workiz lists three plans, Standard, Pro and Ultimate, each with a “Request pricing” button and no
            dollar figure. The pricing page names no user limit or per-user price, and says subscription
            prices exclude sales tax. The only number it gives is that an annual plan can save $400 or more,
            without showing the monthly and annual prices behind that saving. Fees are set in each
            customer’s Sales Order. Our <Link href="/pricing/workiz" className={A}>Workiz pricing</Link> guide
            lists what to ask for in a quote.
          </p>
          <p>
            ServiceM8 prices by jobs created each month and does not charge per user. The free plan covers one
            user and 30 jobs; Starter is $29 for 50 jobs, Growing $79 for 150, Premium $149 for 500 and Premium
            Plus $349 for 1,500 or more, with extra jobs at 20¢ each on that plan only. Over the limit on other
            plans, its FAQ says you can keep working for 7 more days before you are prompted to upgrade. Its
            pages do not define exactly what counts as a job, and quotes are a job status in ServiceM8, so ask
            whether unconverted quotes use your allowance. See{' '}
            <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link>.
          </p>
          <p>
            Because Workiz publishes no figures, we show no cost example here. The fair test is a written
            Workiz quote for the plan your trade needs, set against the ServiceM8 plan that covers your
            monthly job count.
          </p>

          <h2 id="contracts">Trials, contracts and price increases</h2>
          <p>
            Workiz offers a 7-day free trial with no credit card, and its terms say fees become due when the
            trial ends. Its Terms of Service (version 1.9, last updated November 2, 2026) set the term in your
            Sales Order. When we read them, the standard term was 12 months, renewing for another 12 months
            unless you give 30 days’ notice. Billing cycles renew automatically, fees are non-cancelable and
            payments non-refundable, Workiz may raise fees by up to 10% a year with at least 30 days’ written
            notice, and late amounts accrue 1.5% a month.
          </p>
          <p>
            ServiceM8 offers a 14-day trial plus its permanent free plan. Its help center says there are no
            contracts, setup fees or per-user fees and that you can cancel at any time, but its Terms of
            Service say either side can end the agreement with notice at least 30 days before the end of the
            payment period, so give notice early. The terms are from ServiceM8 Pty Ltd, governed by Australian
            law with Australian courts, even on its US site, and say your data stays your property. They
            describe no refund policy, price-change notice or export process. Our{' '}
            <Link href="/guides/field-service-software-contract-terms" className={A}>contract terms guide</Link>{' '}
            explains what to check before you sign either.
          </p>

          <h2 id="phones">Phones and AI answering</h2>
          <p>
            Workiz includes an integrated phone system, call flows, 2-way texting and online booking on every
            plan; its phone page describes recorded, summarized calls. Genius Phone and Genius Answering, whose
            AI agent Jessica answers calls, emails and texts in English and Spanish, are sold separately with no
            published prices. Its terms add that some call types are billed at different per-minute rates, and
            that phone charges are non-cancellable and non-refundable.
          </p>
          <p>
            ServiceM8 Phone sits on top of a ServiceM8 plan: Connect at $19 a month for 500 minutes without AI,
            Connect Plus at $32 with the AI Phone Agent, and Unlimited at $119 with unlimited minutes. Extra
            minutes on the 500-minute plans cost 3¢ each. ServiceM8 does not say whether the AI agent books
            jobs. Our <Link href="/guides/ai-answering-service-for-contractors" className={A}>AI answering guide</Link>{' '}
            compares both with other vendors.
          </p>

          <h2 id="features">Scheduling, quotes and service plans</h2>
          <p>
            Workiz gives every plan a drag-and-drop calendar, recurring jobs, team location tracking and
            unlimited estimates with deposits, with 5, 10 or 30 automations by plan. Genius Scheduling arrives
            on Pro. Service plans, flat rate, sales proposals, equipment tracking, inventory, purchase orders,
            multi-day jobs, franchise management and the open API are on Ultimate only. Route optimization is
            offered, but the pricing page does not say on which plan.
          </p>
          <p>
            ServiceM8 puts quotes with options and follow-ups, recurring jobs, Auto Routing, live staff GPS and
            the offline app on every plan, including Free. Starter adds the API and progress invoices, Growing
            adds asset management, forms, proposals and bundles, and Premium adds job costing.
          </p>

          <h2 id="accounting">Accounting and payments</h2>
          <p>
            Workiz lists QuickBooks on every plan, and its QuickBooks page says it works with QuickBooks Online
            and Desktop, with data flowing one way from Workiz to QuickBooks. ServiceM8 syncs with QuickBooks
            Online and Xero on every plan and also connects to MYOB, but does not mention Desktop. See our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>
          <p>
            Workiz does not publish Workiz Pay card or ACH rates on its website; its terms set a non-refundable
            $25 fee for each chargeback, and customers can finance through Wisetack or Sunbit. ServiceM8 Pay runs
            on Stripe: its payments page lists 3.10% + 30¢ for US domestic cards, its help center lists 3.05% +
            30¢ (current as of September 2024), with 4.60% + 30¢ for international cards, a $15 dispute fee and
            next-business-day deposits. We found no US bank payment option on ServiceM8’s pages.
          </p>

          <h2 id="offline">Offline use and team size</h2>
          <p>
            Workiz says job details and updates work offline and sync later. ServiceM8 lets you view and update
            synced jobs, notes and photos on every plan, but final quotes, invoices and forms wait until you
            reconnect. ServiceM8 says it is built for trade contractors and service businesses from sole traders up to 20 staff. Workiz
            says it is built for field service businesses of every size and puts franchise management on
            Ultimate. See our{' '}
            <Link href="/guides/offline-field-service-app" className={A}>offline field service apps</Link> guide.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>You want a price before any sales call:</strong> ServiceM8, which publishes every plan.</li>
            <li><strong>Solo operator doing fewer than 30 jobs a month:</strong> ServiceM8 Free.</li>
            <li><strong>You want to avoid a yearly commitment:</strong> ServiceM8 lists monthly prices; Workiz’s standard term is 12 months and renews.</li>
            <li><strong>QuickBooks Desktop:</strong> Workiz. <strong>Xero or MYOB:</strong> ServiceM8.</li>
            <li><strong>Service plans, flat rate or franchise tools:</strong> a Workiz Ultimate quote.</li>
            <li><strong>Published card fees:</strong> ServiceM8; ask Workiz for its rates in writing.</li>
            <li><strong>More than 20 staff:</strong> ServiceM8 says it is built for up to 20, so get a Workiz quote and compare wider.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/workiz-alternatives" className={A}>Workiz alternatives</Link>{' '}
            and <Link href="/compare/servicem8-alternatives" className={A}>ServiceM8 alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Workiz vs ServiceM8">
            The difference is how you buy. ServiceM8 shows every price, charges by jobs with unlimited users,
            starts free and bills monthly. Workiz needs a quote, sets a standard 12-month renewing term with up
            to a 10% yearly increase, and in return includes a phone system and QuickBooks Desktop on every
            plan, with service plans and equipment on Ultimate. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/workiz" className="text-orange-600 hover:text-orange-800">Workiz pricing →</Link>
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
