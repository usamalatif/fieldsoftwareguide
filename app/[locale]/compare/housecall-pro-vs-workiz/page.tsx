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
 * /compare/housecall-pro-vs-workiz: targets "housecall pro vs workiz" (and the reversed word
 * order). No GSC data for this topic yet.
 *
 * Sources: Housecall Pro plan data from the pricing page copy saved 2026-11-19 (www.housecallpro.com
 * was not refetched) and its help center (offline mode, reports, Voice FAQ, payment fees,
 * financing). Workiz pricing, phone, route planning, mobile, equipment and QuickBooks pages and its
 * Terms of Service v1.9 (last updated 2026-11-02), checked 2026-11-20/21. help.workiz.com returned
 * 403 and is not used. Nothing tested hands-on; no ratings.
 */

const PATH = '/compare/housecall-pro-vs-workiz'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Housecall Pro vs Workiz (2026): Prices, Phone, Plans and Contracts'
const DESCRIPTION =
  'Housecall Pro publishes prices from $59/month; Workiz quotes every plan. Compare trials, contracts, phone add-ons, service plans, offline use and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/housecall-pro-vs-workiz',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Housecall Pro vs Workiz', href: PATH },
]

const rows: { feature: string; hcp: string; workiz: string }[] = [
  { feature: 'Price', hcp: 'Published: Basic $59 (1 user), Essentials $149 (up to 5 users), MAX $299 (up to 8 users) per month billed annually; $79, $189 and $329 month to month', workiz: 'Not published: Standard, Pro and Ultimate all say “Request pricing”' },
  { feature: 'Bigger teams', hcp: 'MAX adds users at $35 a month each, so 10 users is about $369 a month billed annually', workiz: 'No per-user price or user limit stated on the pricing page' },
  { feature: 'Free trial', hcp: '14 days with MAX features, no credit card', workiz: '7 days, no credit card' },
  { feature: 'Contract terms', hcp: 'Says it does not require long-term contracts', workiz: '12-month term that renews for 12 months unless 30 days’ notice; up to 10% annual increase; fees non-refundable' },
  { feature: 'Scheduling and routing', hcp: 'Scheduling and dispatch on every plan; route grouping from Essentials; one-click route optimization on MAX', workiz: 'Drag-and-drop calendar on every plan; route optimization offered, plan not stated; AI scheduling on Pro and Ultimate' },
  { feature: 'Phone', hcp: 'Voice add-on: call tracking from $45 a month, VoIP with call tracking from $65, plus overages', workiz: 'Phone system with recorded, summarized calls; pricing page lists Genius Phone as sold separately, without a price' },
  { feature: 'Online booking', hcp: 'From Basic', workiz: 'Every plan, with optional checkout' },
  { feature: 'Estimates and flat rate', hcp: 'Estimates from Basic; flat-rate pricing from Essentials; sales proposal tool on MAX', workiz: 'Unlimited estimates and deposits on every plan; flat rate and sales proposals on Ultimate' },
  { feature: 'Payment fees', hcp: '2.59% in person, 2.99% online invoice, 3.49% keyed or card on file; ACH 1%', workiz: 'Not published' },
  { feature: 'Financing', hcp: 'Wisetack', workiz: 'Wisetack and Sunbit on every plan' },
  { feature: 'QuickBooks', hcp: 'Plan data lists QuickBooks Online and Desktop on Essentials', workiz: 'QuickBooks Online on every plan; its QuickBooks page says Desktop is supported and data flows one way' },
  { feature: 'Service plans and equipment', hcp: 'Recurring Service Plans on MAX; customer equipment tracking listed on Essentials', workiz: 'Service plans and equipment tracking on Ultimate' },
  { feature: 'Offline', hcp: 'View only: jobs for today and the next 2 days, up to 10 a day; changes, payments and job completion need a connection', workiz: 'Job details and updates offline, synced later' },
  { feature: 'Reporting', hcp: 'Up to 40 standard reports plus custom reports you can save, share and schedule', workiz: 'Built-in reports on every plan; custom reports on Pro and Ultimate' },
]

const faqs = [
  {
    question: 'Is Housecall Pro cheaper than Workiz?',
    answer:
      'We cannot say, because Workiz does not publish prices. Housecall Pro costs $59 a month for one user, $149 for up to five and $299 for up to eight, billed annually. Ask Workiz for a written quote for the same team, including any phone add-on, and compare totals.',
  },
  {
    question: 'Does Housecall Pro or Workiz require a contract?',
    answer:
      'Housecall Pro says it does not require long-term contracts. Workiz’s terms set a 12-month term unless the Sales Order says otherwise, renewing for 12 months unless either side gives 30 days’ written notice, and allow an annual fee increase of up to 10%.',
  },
  {
    question: 'Which has the better phone system?',
    answer:
      'Workiz builds its product around calling: its phone system records, summarizes and makes calls searchable, but the pricing page lists Genius Phone as sold separately without a price. Housecall Pro Voice is an add-on that publishes its price: from $45 a month for call tracking or $65 for VoIP with call tracking, plus overages.',
  },
  {
    question: 'Which works better offline?',
    answer:
      'Workiz says techs can view and update job details offline and that changes sync later. Housecall Pro’s offline mode is view only, for jobs today and the next two days, and needs a connection to make changes, take payment or finish a job.',
  },
  {
    question: 'Do Housecall Pro and Workiz work with QuickBooks Desktop?',
    answer:
      'Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials ($149 a month billed annually). Workiz includes QuickBooks Online sync on every plan, and its QuickBooks page says it also works with Desktop, with data flowing one way from Workiz to QuickBooks.',
  },
  {
    question: 'Which is better for maintenance plans?',
    answer:
      'Both put them on the top plan. Housecall Pro lists Recurring Service Plans on MAX ($299 a month billed annually for up to eight users), and Workiz lists service plans and equipment tracking on Ultimate, which is quote only.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, trial, contracts, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: Voice FAQs (pricing)', url: 'https://help.housecallpro.com/en/articles/6666356-voice-faqs', checked: '2026-11-21' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Housecall Pro help: managing reports', url: 'https://help.housecallpro.com/en/articles/7336458-managing-reports', checked: '2026-11-17' },
  { name: 'Housecall Pro help: payment processing options and fees', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-20' },
  { name: 'Housecall Pro help: consumer financing', url: 'https://help.housecallpro.com/en/articles/3538947-consumer-financing-invoices-estimates', checked: '2026-11-20' },
  { name: 'Workiz pricing plans (features by plan, trial, FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
  { name: 'Workiz Terms of Service v1.9 (last updated November 2, 2026)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-21' },
  { name: 'Workiz phone system', url: 'https://www.workiz.com/features/phone-system/', checked: '2026-11-21' },
  { name: 'Workiz route planning', url: 'https://www.workiz.com/features/route-planning/', checked: '2026-11-21' },
  { name: 'Workiz mobile app (offline)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-21' },
  { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-11-21' },
  { name: 'Workiz consumer financing', url: 'https://www.workiz.com/features/consumer-financing/', checked: '2026-11-20' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-21' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HousecallProVsWorkizPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/housecall-pro-vs-workiz"
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
            Housecall Pro vs Workiz: <span className="text-orange-400">published plans vs a quote, plan by plan</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing, trials, contract terms, phone add-ons, offline use, service plans and QuickBooks,
            from each vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Housecall Pro</strong> publishes its prices ($59, $149 and $299 a month billed
            annually for 1, 5 and 8 users), offers a 14-day trial and says it needs no long-term
            contract. <strong>Workiz</strong> quotes every plan, offers a 7-day trial, and its standard
            terms run 12 months, renewing yearly with up to a 10% annual increase allowed. Workiz is
            stronger offline and is built around calling; Housecall Pro publishes the price of its
            Voice add-on and lists QuickBooks Desktop from Essentials. Both put maintenance plans on
            their top plan. Choose Housecall Pro for price certainty; get a written Workiz quote if
            offline work or built-in calling matters most.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Housecall Pro vs Workiz at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Sources
            and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Housecall Pro</th>
                  <th scope="col" className="p-3.5">Workiz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.hcp}</td>
                    <td className="p-3.5">{r.workiz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: published plans vs request pricing</h2>
          <p>
            Housecall Pro prices by plan and user count. Billed annually, Basic is $59 a month for one
            user, Essentials $149 for up to five and MAX $299 for up to eight; month to month they cost
            $79, $189 and $329. MAX adds users at $35 a month each, so a 10-person team pays about $369 a
            month on annual billing before add-ons. Add-ons such as Voice, payroll and vehicle GPS are
            extra. Every plan detail is in our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> guide.
          </p>
          <p>
            Workiz shows “Request pricing” on all three plans and does not state a per-user price or a
            user limit. It says annual plans save $400 or more, and lists Genius Phone, Genius Answering
            and Genius Marketing as sold separately, without prices.
          </p>

          <h2 id="contracts">Contracts and trials</h2>
          <p>
            Housecall Pro says it does not require long-term contracts, and its 14-day trial includes
            MAX features without a credit card.
          </p>
          <p>
            Workiz’s terms (version 1.9, November 2026) start a 12-month initial term unless your Sales
            Order says otherwise, then renew for 12-month periods unless either side gives written notice
            at least 30 days before the term ends. Workiz may raise fees by up to 10% a year, and fees
            are non-cancelable and non-refundable. Its trial is 7 days without a credit card.
          </p>

          <h2 id="phone">Phone and calls</h2>
          <p>
            Workiz is built around calling. Its phone system records, summarizes and makes every call
            searchable, routes calls by business hours and masks customer and technician numbers. Its
            pricing page FAQ says a phone system comes with all plans, while the plan table lists Genius
            Phone as sold separately, so get the phone features in your quote in writing.
          </p>
          <p>
            Housecall Pro Voice is an add-on with a published price: call tracking from $45 a month, or
            VoIP with call tracking from $65, plus overages. It works in the mobile app. If calls drive
            your business, compare the Voice total with the Workiz quote.
          </p>

          <h2 id="scheduling">Scheduling, routing and offline work</h2>
          <p>
            Both include drag-and-drop scheduling on every plan. Housecall Pro groups jobs into routes
            from Essentials and adds one-click route optimization on MAX. Workiz offers route planning
            but does not say which plan includes it, and adds AI scheduling on Pro and Ultimate.
          </p>
          <p>
            Offline is a real difference. Housecall Pro’s offline mode is view only: jobs for today and
            the next two days, up to 10 a day, and you need a connection to make changes, collect
            payment or finish a job. Workiz says techs can view and update job details offline and that
            changes sync once they reconnect. If your techs work in basements or rural areas, test this
            in both trials.
          </p>

          <h2 id="quotes-payments">Estimates, payments and financing</h2>
          <p>
            Both include estimates on every plan. Housecall Pro includes flat-rate pricing from Essentials
            and a sales proposal tool on MAX; Workiz includes estimate deposits on every plan but puts flat
            rate and sales proposals on Ultimate. Housecall Pro publishes card fees of 2.59% in person,
            2.99% for online invoices and 3.49% for keyed or saved cards, with ACH at 1%; Workiz does not
            publish its rates. Both offer Wisetack financing, and Workiz adds Sunbit. See our{' '}
            <Link href="/guides/field-service-invoicing-software" className={A}>invoicing software guide</Link>.
          </p>

          <h2 id="quickbooks">QuickBooks</h2>
          <p>
            Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials. Workiz includes
            QuickBooks Online sync on every plan; its QuickBooks page says it also works with Desktop and
            that data flows one way, from Workiz to QuickBooks, while its invoicing page calls the sync
            two-way. Ask both vendors to show the sync for your QuickBooks version. Our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> compares more tools.
          </p>

          <h2 id="recurring">Service plans and equipment records</h2>
          <p>
            Both keep maintenance plans for the top tier. Housecall Pro lists Recurring Service Plans on
            MAX and customer equipment tracking on Essentials. Workiz lists service plans and equipment
            tracking, which reads serial number, model and make from a label photo, on Ultimate only.
            Our <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide compares how each tool schedules and bills plan visits.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Small team that wants a known price:</strong> Housecall Pro, with published plans for 1, 5 and 8 users and no long-term contract.</li>
            <li><strong>Techs who often lose signal:</strong> Workiz, which documents offline job updates; Housecall Pro offline is view only.</li>
            <li><strong>Call-heavy business:</strong> compare Housecall Pro Voice’s published price with a Workiz quote that names the phone features.</li>
            <li><strong>QuickBooks Desktop:</strong> both say they support it; Housecall Pro lists it on Essentials.</li>
            <li><strong>Maintenance plans:</strong> Housecall Pro MAX at a published $299, or Workiz Ultimate by quote.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/housecall-pro-alternatives" className={A}>Housecall Pro alternatives</Link>,{' '}
            <Link href="/compare/workiz-alternatives" className={A}>Workiz alternatives</Link> and{' '}
            <Link href="/compare/jobber-vs-workiz" className={A}>Jobber vs Workiz</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Housecall Pro vs Workiz">
            Housecall Pro wins on price transparency, a longer trial and no long-term contract. Workiz
            wins on offline job updates and built-in calling, but its prices are quote only and its
            standard terms renew yearly. Get the Workiz quote and phone features in writing before you
            decide. Our <Link href="/how-we-review" className={A}>review method</Link> explains why we
            show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
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
