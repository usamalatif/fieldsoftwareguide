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
 * /compare/housecall-pro-vs-service-fusion: targets "housecall pro vs service fusion". No GSC data
 * for this topic yet.
 *
 * Service Fusion facts: pricing page, Subscription Agreement (last modified 2026-03-23), help center,
 * offline mode blog, scheduling, ServiceCall.ai and AI answering pages, all checked 2026-11-24 (reused
 * from /pricing/service-fusion, /compare/service-fusion-alternatives and the offline, routing and AI
 * answering guides). Housecall Pro facts reuse the site's verified pages: pricing and plan data
 * 2026-11-19 (QuickBooks Online and Desktop listed on Essentials, as on /pricing/service-fusion; the
 * older /pricing/housecall-pro check of 2026-10-24 did not name the Desktop plan), QuickBooks page
 * 2026-10-24, help center 2026-11-17 to 11-24. www.housecallpro.com was not refetched and nothing new
 * was fetched. Vehicle GPS price ($20 per vehicle a month through Force) is from Housecall Pro's help
 * center, checked 2026-11-24. Not used: Housecall Pro introductory offers, and any claim either vendor
 * makes about the other. Team-size totals are arithmetic on published prices. Nothing tested hands-on.
 */

const PATH = '/compare/housecall-pro-vs-service-fusion'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Housecall Pro vs Service Fusion (2026): Per-User vs Unlimited Users'
const DESCRIPTION =
  'Housecall Pro starts at $59/month for one user; Service Fusion is $220/month for unlimited users. Compare cost by team size, terms, offline use and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/housecall-pro-vs-service-fusion',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Housecall Pro vs Service Fusion', href: PATH },
]

const rows: { feature: string; hcp: string; sf: string }[] = [
  { feature: 'Price', hcp: 'Basic $59, Essentials $149, MAX $299 per month billed annually; $79, $189 and $329 month to month', sf: 'Starter $220, Plus $339, Pro $552 per month billed annually as one upfront payment; $259, $399 and $649 billed monthly' },
  { feature: 'Users included', hcp: 'Basic 1, Essentials up to 5, MAX up to 8; $35 a month per extra user on MAX only', sf: 'Unlimited users on every plan' },
  { feature: 'Cheapest plan for 10 users', hcp: '$369 a month (MAX for 8 users plus 2 × $35), billed annually', sf: '$220 a month (Starter), billed annually' },
  { feature: 'Free trial', hcp: '14 days with MAX features, no credit card', sf: 'Free demo; no trial mentioned' },
  { feature: 'Contract and renewal', hcp: 'Says it does not require long-term contracts', sf: 'Pricing page says month to month; Subscription Agreement renews your order’s term automatically unless 30 days’ written notice; fees non-refundable' },
  { feature: 'QuickBooks', hcp: 'Plan data lists QuickBooks Online and Desktop on Essentials; not on Basic', sf: 'QuickBooks Online and Desktop on every plan from Starter; Desktop tool is Windows only' },
  { feature: 'Routing', hcp: 'Routes to group jobs from Essentials; Optimize by Drive Time (live traffic) on MAX', sf: 'Scheduling page names routing but does not describe route optimization' },
  { feature: 'GPS and fleet', hcp: 'Phone-based employee GPS from Essentials; vehicle GPS through Force at $20 per vehicle a month (help center)', sf: 'GPS map on the schedule; GPS fleet tracking add-on on every plan, price not published' },
  { feature: 'Offline', hcp: 'View only: jobs for today and the next 2 days, up to 10 a day', sf: 'View schedules and jobs; edit notes, photos, tasks and checklists; no new jobs, status changes or payments yet' },
  { feature: 'Phone and AI answering', hcp: 'Voice add-on: call tracking from $45 a month, VoIP with call tracking from $65, plus overages; CSR AI add-on, no price', sf: 'Integrated voice and text on Plus and Pro; ServiceCall.ai add-on billed per user, no price; ZyraTalk AI answering, no price' },
  { feature: 'Card and ACH fees', hcp: '2.59% in person, 2.99% online invoice, 3.49% keyed, saved or Amex; ACH 1%', sf: '2.90% + $0.30; extra 1% card not present; ACH 1% capped at $15; $0.75 daily batch fee' },
  { feature: 'Customer financing', hcp: 'Wisetack', sf: 'Acorn Finance' },
  { feature: 'Agreements and equipment', hcp: 'Recurring Service Plans on MAX (paid add-on on some plans, price not published); customer equipment tracking listed on Essentials', sf: 'Service agreement tracking with member pricing; recurring invoicing on Pro, add-on on Starter and Plus; equipment records not documented in the sources we checked' },
  { feature: 'Job costing and inventory', hcp: 'Job costing from Basic; material tracking on jobs (plan not stated)', sf: 'Job costing and inventory management from Plus' },
]

const faqs = [
  {
    question: 'Is Housecall Pro cheaper than Service Fusion?',
    answer:
      'For small teams, yes. Billed annually, Housecall Pro is $59 a month for one user and $149 for up to five, against $220 for Service Fusion Starter. From six users the order flips: Housecall Pro needs MAX at $299 for up to eight users plus $35 for each extra user, while Service Fusion stays at $220 with unlimited users. Plans include different features, so compare the plan you would actually use.',
  },
  {
    question: 'Does Housecall Pro or Service Fusion require a contract?',
    answer:
      'Housecall Pro’s pricing FAQ says it does not require long-term contracts. Service Fusion’s pricing page says all plans are month to month with no contract requirements, but its Subscription Agreement (last modified March 23, 2026) renews the term on your order automatically unless either side gives 30 days’ written notice, and says fees are non-refundable. Check the term on your Service Fusion order.',
  },
  {
    question: 'Which has a free trial?',
    answer:
      'Housecall Pro offers a 14-day trial with MAX features and no credit card. Service Fusion offers a free demo and does not mention a trial.',
  },
  {
    question: 'Do both work with QuickBooks Desktop?',
    answer:
      'Yes. Service Fusion includes QuickBooks Online and Desktop on every plan from Starter; its help center says the Desktop tool works only on Windows and needs a small program installed. Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials ($149 a month billed annually), not on Basic.',
  },
  {
    question: 'Which works better offline?',
    answer:
      'Service Fusion. Its offline mode, launched June 22, 2026, shows schedules and job details and lets technicians edit notes, photos, tasks and checklists; creating jobs, changing job status and taking payments are not available offline yet. Housecall Pro’s offline mode is view only, for jobs today and the next two days, and needs a connection to make changes, collect payment or finish a job.',
  },
  {
    question: 'Which is better for route optimization and fleet tracking?',
    answer:
      'Housecall Pro documents route optimization: Optimize by Drive Time reorders a technician’s day using live traffic, on MAX only. Service Fusion’s scheduling page names routing without describing optimization. Both sell vehicle tracking as an add-on, and neither price appears on the pricing pages we cite.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, extra users, trial, contracts, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro QuickBooks integration (Online and Desktop; QuickBooks not included)', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-10-24' },
  { name: 'Housecall Pro help: payment processing options and fees', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-20' },
  { name: 'Housecall Pro help: consumer financing', url: 'https://help.housecallpro.com/en/articles/3538947-consumer-financing-invoices-estimates', checked: '2026-11-20' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Housecall Pro help: vehicle GPS tracking (Force, $20 per vehicle a month)', url: 'https://help.housecallpro.com/en/articles/6060351-vehicle-gps-tracking-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: Optimize by Drive Time (MAX)', url: 'https://help.housecallpro.com/en/articles/14093813-optimize-by-drive-time', checked: '2026-11-24' },
  { name: 'Housecall Pro help: Voice FAQs (pricing)', url: 'https://help.housecallpro.com/en/articles/6666356-voice-faqs', checked: '2026-11-21' },
  { name: 'Housecall Pro help: service plan renewals', url: 'https://help.housecallpro.com/en/articles/6879916-service-plan-renewals', checked: '2026-11-20' },
  { name: 'Housecall Pro help: material inventory detail tracking', url: 'https://help.housecallpro.com/en/articles/7119757-material-inventory-detail-tracking', checked: '2026-11-24' },
  { name: 'Service Fusion pricing (plans, unlimited users, add-ons, month-to-month FAQ, GPS fleet tracking)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
  { name: 'Service Fusion help: subscription and billing overview (30-day notice)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360029403592-Service-Fusion-Subscription-and-Billing-Account-Overview', checked: '2026-11-24' },
  { name: 'Service Fusion help: upgrading and adding add-ons (ServiceCall.ai per user)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/38056443351053-Upgrading-your-Service-Fusion-Subscription-and-Adding-Add-ons', checked: '2026-11-24' },
  { name: 'Service Fusion help: Service Fusion Payments fees', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360058547171-Service-Fusion-Payments-Introduction', checked: '2026-11-24' },
  { name: 'Service Fusion Acorn homeowner financing', url: 'https://www.servicefusion.com/acorn-homeowner-financing', checked: '2026-11-24' },
  { name: 'Service Fusion help: QuickBooks Desktop setup (Windows only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001111652-QuickBooks-Desktop-Setup-Instructions', checked: '2026-11-24' },
  { name: 'Service Fusion blog: introducing offline mode (June 22, 2026)', url: 'https://www.servicefusion.com/blog/introducing-offline-mode', checked: '2026-11-24' },
  { name: 'Service Fusion scheduling software (routing, GPS map)', url: 'https://www.servicefusion.com/field-service-scheduling-software', checked: '2026-11-24' },
  { name: 'Service Fusion ServiceCall.ai (call tracking and VoIP)', url: 'https://www.servicefusion.com/servicecall-call-tracker', checked: '2026-11-24' },
  { name: 'Service Fusion AI call answering service (ZyraTalk)', url: 'https://www.servicefusion.com/ai-call-answering-service', checked: '2026-11-24' },
  { name: 'Service Fusion help: customer service agreement tracking', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001110832-Customer-Service-Agreement-Tracking', checked: '2026-11-24' },
  { name: 'Service Fusion vs ServiceTitan page (team size statement about itself)', url: 'https://www.servicefusion.com/comparison/service-fusion-vs-service-titan', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HousecallProVsServiceFusionPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/housecall-pro-vs-service-fusion"
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
            Housecall Pro vs Service Fusion: <span className="text-orange-400">user-capped plans vs unlimited users</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Cost by team size, trials, renewal terms, QuickBooks, routing, fleet GPS, offline use, phones and
            payments, from each vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            The deciding factor is headcount. <strong>Housecall Pro</strong> caps users by plan: $59 a month
            for one user, $149 for up to five and $299 for up to eight, billed annually, plus $35 for each
            extra user on MAX. <strong>Service Fusion</strong> charges a flat $220, $339 or $552 a month billed
            annually with unlimited users on every plan. Up to five users, Housecall Pro costs less; from six
            users, Service Fusion Starter does. Housecall Pro adds a 14-day trial, documented route
            optimization on MAX and no long-term contract. Service Fusion adds QuickBooks Desktop from its
            cheapest plan and an offline mode that lets technicians edit notes, photos and checklists, but its
            agreement renews automatically unless you give 30 days’ notice.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Housecall Pro vs Service Fusion at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Sources and
            check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Housecall Pro</th>
                  <th scope="col" className="p-3.5">Service Fusion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.hcp}</td>
                    <td className="p-3.5">{r.sf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: where the two lines cross</h2>
          <p>
            Both vendors publish every plan price, so the comparison is arithmetic. Using the cheapest plan
            that covers the headcount, billed annually, per month:
          </p>
          <ul>
            <li><strong>1 user:</strong> Housecall Pro Basic $59; Service Fusion Starter $220.</li>
            <li><strong>5 users:</strong> Housecall Pro Essentials $149; Service Fusion Starter $220.</li>
            <li><strong>8 users:</strong> Housecall Pro MAX $299; Service Fusion Starter $220.</li>
            <li><strong>10 users:</strong> Housecall Pro MAX $369 (8 users plus 2 × $35); Service Fusion Starter $220.</li>
            <li><strong>15 users:</strong> Housecall Pro MAX $544 (8 users plus 7 × $35); Service Fusion Starter $220.</li>
          </ul>
          <p>
            The plans are not equal, so check what you would give up. Housecall Pro Basic has no QuickBooks
            sync, while Service Fusion Starter includes QuickBooks Online and Desktop. Service Fusion keeps job
            costing, inventory and its built-in voice and text for Plus ($339), which still costs less than
            Housecall Pro MAX at ten users. Housecall Pro lists an extra-user price only for MAX, so ask before
            adding a second user on Basic or a sixth on Essentials. Service Fusion says it is built for teams of
            3 to 30 technicians. Full plan details are in our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> and{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link> guides.
          </p>
          <p>
            Billing works differently too. Service Fusion’s annual price is charged as one payment at sign-up
            (Starter is $2,640 upfront), and annual billing saves 15% over monthly. Housecall Pro’s month-to-month
            rates are $79, $189 and $329.
          </p>

          <h2 id="contracts">Trials, contracts and renewal</h2>
          <p>
            Housecall Pro offers a 14-day trial with MAX features and no credit card, and its pricing FAQ says
            it does not require long-term contracts. Service Fusion offers a free demo rather than a trial. Its
            pricing page says all plans are offered month to month with no contract requirements, but its
            Subscription Agreement, last modified March 23, 2026, says:
          </p>
          <ul>
            <li>The first term is whatever your online order states, and it <strong>renews automatically</strong> for periods of the same length.</li>
            <li>Either side can end it with <strong>30 days’ written notice</strong> before the end of the current term.</li>
            <li>Fees are <strong>non-refundable</strong>, plan changes are not pro-rated, and fees can change on notice.</li>
            <li>A <strong>$35 charge</strong> applies to each declined electronic payment.</li>
            <li>Exporting your data is a <strong>paid professional service</strong>, and account data may be deleted after termination.</li>
          </ul>

          <h2 id="quickbooks">QuickBooks Online and Desktop</h2>
          <p>
            Both support QuickBooks Online and Desktop, at different plan levels. Service Fusion includes both
            on every plan from Starter; its help center says the Desktop tool runs only on Windows and needs a
            small program installed on your computer. Housecall Pro’s plan data lists QuickBooks Online and
            Desktop on Essentials ($149 a month billed annually), so a solo operator on Basic has no sync.
            Housecall Pro’s QuickBooks page notes that QuickBooks itself is a separate subscription. Our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> compares other tools.
          </p>

          <h2 id="routing">Routing, GPS and fleet tracking</h2>
          <p>
            Housecall Pro documents more here. Essentials adds routes to group jobs and phone-based employee GPS,
            and MAX adds Optimize by Drive Time, which reorders one technician’s jobs for the day by live
            traffic; its help center says it does not move jobs to other days or other techs. Vehicle GPS is
            an add-on through Force, which its help center prices at $20 per vehicle a month.
          </p>
          <p>
            Service Fusion shows technicians on a GPS map on the schedule, and its scheduling page names routing
            without describing route optimization. GPS fleet tracking is an add-on on every plan; its pricing
            FAQ says it shows trips, distance, idle time and driving behavior, and no price is published. See
            our <Link href="/guides/route-optimization-software" className={A}>route optimization guide</Link>.
          </p>

          <h2 id="offline">Offline use</h2>
          <p>
            Service Fusion launched offline mode on June 22, 2026 for customers on its updated app. Technicians
            can view schedules, customer information and job details, and add or edit notes, photos, tasks and
            checklists; creating jobs or estimates, changing job status and taking payments are not available
            offline yet. Housecall Pro’s help center says its app downloads jobs for today and the next two days,
            up to 10 a day, for viewing only; making changes, collecting payment and finishing a job need a
            connection. More in our{' '}
            <Link href="/guides/offline-field-service-app" className={A}>offline field service app guide</Link>.
          </p>

          <h2 id="phones-payments">Phones, payments and financing</h2>
          <p>
            Housecall Pro sells Voice as an add-on, with call tracking from $45 a month and VoIP with call
            tracking from $65, plus overages, and lists CSR AI as an add-on without a price. Service Fusion
            includes integrated voice and text on Plus and Pro, sells ServiceCall.ai (call tracking and VoIP)
            per user without a published price, and offers ZyraTalk AI call answering, also unpriced.
          </p>
          <p>
            Both publish card fees. Housecall Pro charges 2.59% in person, 2.99% when the customer pays an
            online invoice and 3.49% for keyed, saved, American Express and commercial cards, with ACH at 1%.
            Service Fusion Payments charges 2.90% + $0.30, an extra 1% when the card is not present, ACH at 1%
            capped at $15, and $0.75 for each day with transactions. On a $1,000 invoice paid online, that is
            $29.90 with Housecall Pro and $29.30 with Service Fusion. For customer financing, Housecall Pro uses
            Wisetack and Service Fusion uses Acorn Finance.
          </p>

          <h2 id="agreements">Service agreements and equipment</h2>
          <p>
            Housecall Pro includes Recurring Service Plans on MAX and lists them as a paid add-on on some other
            plans, at a price it does not publish; its help center describes plans that run until cancelled or
            renew with reminder emails. It lists customer equipment tracking on Essentials. Service Fusion’s
            help center documents service agreement tracking, with agreements applying member pricing, and it
            includes recurring invoicing on Pro (an add-on on Starter and Plus). We found no equipment records
            documented in the Service Fusion sources we checked, so ask for a demo if that matters.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>One to five users:</strong> Housecall Pro, at $59 or $149 a month billed annually.</li>
            <li><strong>Six or more users:</strong> Service Fusion, whose $220 Starter price does not rise as you hire.</li>
            <li><strong>QuickBooks Desktop on the cheapest plan:</strong> Service Fusion (Windows only).</li>
            <li><strong>Technicians who work without signal:</strong> Service Fusion, which allows edits offline.</li>
            <li><strong>Route optimization:</strong> Housecall Pro MAX.</li>
            <li><strong>Trying before you commit:</strong> Housecall Pro, with a trial and no long-term contract.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/housecall-pro-alternatives" className={A}>Housecall Pro alternatives</Link>{' '}
            and <Link href="/compare/service-fusion-alternatives" className={A}>Service Fusion alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Housecall Pro vs Service Fusion">
            Count your users first. Up to five, Housecall Pro costs less, comes with a trial and no long-term
            contract, and documents route optimization on MAX. From six, Service Fusion’s unlimited users cost
            less on published prices and include QuickBooks Desktop and editable offline mode, but check your
            order’s renewal term and the 30-day notice. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
            <Link href="/pricing/service-fusion" className="text-orange-600 hover:text-orange-800">Service Fusion pricing →</Link>
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
