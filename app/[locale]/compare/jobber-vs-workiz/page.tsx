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
 * /compare/jobber-vs-workiz: targets "jobber vs workiz". No GSC data for this topic yet.
 *
 * Sources: Workiz pricing, phone, automations, route planning, mobile, equipment and QuickBooks
 * pages and its Terms of Service v1.9 (last updated 2026-11-02, read in full on 2026-11-21).
 * Jobber facts reuse the site's verified pages (pricing 2026-11-03 to 2026-11-21, help center
 * 2026-11-19/20); its Terms of Service (last updated 2026-09-22) were read through WebFetch on
 * 2026-11-21 because getjobber.com returns 403 to direct downloads. Jobber's own comparison page
 * makes claims about Workiz prices that are not on Workiz's site; none are used. Nothing tested
 * hands-on.
 */

const PATH = '/compare/jobber-vs-workiz'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Jobber vs Workiz (2026): Pricing, Plans, Phone and Contracts'
const DESCRIPTION =
  'Jobber publishes prices from $29/month; Workiz quotes every plan. Compare trials, contract terms, phone tools, service plans and QuickBooks side by side.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/jobber-vs-workiz',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber vs Workiz', href: PATH },
]

const rows: { feature: string; jobber: string; workiz: string }[] = [
  { feature: 'Price', jobber: 'Published: Core $29, Connect $99, Grow $149 per month billed annually for one user; Plus from $399 for 5 users', workiz: 'Not published: Standard, Pro and Ultimate all say “Request pricing”' },
  { feature: 'Team pricing', jobber: 'Bands of 1, 5, 10 and 15 users (for example Connect $229 or Grow $299 for 10 users, billed annually); 16+ contact sales', workiz: 'No per-user price or user limit stated on the pricing page' },
  { feature: 'Billing options', jobber: 'Annual, 1-year commitment billed monthly, or no commitment ($49 for Core)', workiz: 'Annual plans save “$400+”; its comparison page says plans are billed annually at purchase' },
  { feature: 'Free trial', jobber: '14 days of Grow features, no credit card', workiz: '7 days, no credit card' },
  { feature: 'Contract terms', jobber: 'Cancel any time; annual plans renew unless cancelled 30 days before renewal; fees non-refundable', workiz: '12-month term that renews for 12 months unless 30 days’ notice; up to 10% annual increase; fees non-refundable' },
  { feature: 'Scheduling and routing', jobber: 'Drag-and-drop schedule; route optimization on Connect and up', workiz: 'Drag-and-drop calendar on every plan; route optimization offered, plan not stated; AI scheduling on Pro and Ultimate' },
  { feature: 'Phone and answering', jobber: 'No business phone system documented; AI Receptionist add-on ($29 a month, included on Plus)', workiz: 'Phone system with recorded, summarized calls; pricing page lists Genius Phone and Genius Answering as sold separately' },
  { feature: 'Quotes', jobber: 'Quotes on every plan; optional line items from Grow; automated follow-ups from Connect', workiz: 'Unlimited estimates and deposits on every plan; sales proposals and flat rate on Ultimate' },
  { feature: 'Automations', jobber: 'Automated quote and invoice follow-ups from Connect', workiz: '5, 10 or 30 automations by plan' },
  { feature: 'Payment fees', jobber: '2.9% + 30¢ online, 2.7% + 30¢ Tap to Pay, ACH 1%', workiz: 'Not published' },
  { feature: 'Financing', jobber: 'Wisetack; flat 3.9% cost to you per financed amount', workiz: 'Wisetack and Sunbit on every plan' },
  { feature: 'QuickBooks', jobber: 'QuickBooks Online and Xero from Connect; no Desktop', workiz: 'QuickBooks Online on every plan; its QuickBooks page says Desktop is supported and data flows one way' },
  { feature: 'Service plans and equipment', jobber: 'Recurring jobs with automatic payments; no membership module or equipment records documented', workiz: 'Recurring jobs on every plan; service plans and equipment tracking on Ultimate' },
  { feature: 'Offline', jobber: 'Timers, notes, checklists and visit completion work offline; no invoicing offline', workiz: 'Job details and updates offline, synced later' },
  { feature: 'Reporting and API', jobber: 'Built-in reports from Core; custom reports and API on Plus', workiz: 'Custom reports on Pro and Ultimate; Zapier and open API on Ultimate' },
]

const faqs = [
  {
    question: 'Is Jobber cheaper than Workiz?',
    answer:
      'We cannot say, because Workiz does not publish prices. Jobber starts at $29 a month billed annually for one user and publishes prices up to 15 users. Get a written Workiz quote for your team size, including any phone or answering add-ons, and compare the totals.',
  },
  {
    question: 'Does Jobber or Workiz require a contract?',
    answer:
      'Jobber offers a no-commitment monthly option, and its terms say you can cancel at any time; annual plans renew unless cancelled 30 days before renewal and fees are non-refundable. Workiz’s terms set a 12-month term unless the Sales Order says otherwise, renewing for 12 months unless either side gives 30 days’ written notice, with an annual fee increase of up to 10% allowed.',
  },
  {
    question: 'How long are the free trials?',
    answer:
      'Jobber offers 14 days with Grow features and Workiz offers 7 days. Neither requires a credit card.',
  },
  {
    question: 'Which has a built-in phone system?',
    answer:
      'Workiz has a phone system that records, summarizes and makes calls searchable, though its pricing page lists Genius Phone as sold separately while its FAQ says a built-in phone system comes with all plans. Jobber documents no business phone system; its AI Receptionist add-on answers calls and texts for $29 a month and is included on Plus.',
  },
  {
    question: 'Do Jobber and Workiz work with QuickBooks Desktop?',
    answer:
      'Jobber syncs with QuickBooks Online and Xero only, starting on Connect. Workiz includes QuickBooks Online sync on every plan, and its QuickBooks page says it also integrates with QuickBooks Desktop, with data flowing one way from Workiz to QuickBooks.',
  },
  {
    question: 'Which is better for maintenance agreements and equipment records?',
    answer:
      'Workiz, if you buy Ultimate: service plans and equipment tracking are on that plan only. Jobber has no membership module or documented equipment records; it runs agreements as recurring jobs with automatic payments from Connect.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, bands, billing options, trial, fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber Terms of Service (last updated September 22, 2026)', url: 'https://www.getjobber.com/terms-of-service/', checked: '2026-11-21' },
  { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: AI Receptionist', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-03' },
  { name: 'Jobber help: quote basics', url: 'https://help.getjobber.com/en/articles/quote-basics/', checked: '2026-11-20' },
  { name: 'Jobber help: Wisetack consumer financing', url: 'https://help.getjobber.com/en/articles/jobber-and-wisetack-consumer-financing-integration/', checked: '2026-11-20' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: use the Jobber app offline', url: 'https://help.getjobber.com/en/articles/use-the-jobber-app-offline/', checked: '2026-11-19' },
  { name: 'Workiz pricing plans (features by plan, trial, FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
  { name: 'Workiz Terms of Service v1.9 (last updated November 2, 2026)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-21' },
  { name: 'Workiz vs Jobber page (annual billing)', url: 'https://www.workiz.com/vs/jobber-alternative/', checked: '2026-11-21' },
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

export default function JobberVsWorkizPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/jobber-vs-workiz"
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
            Jobber vs Workiz: <span className="text-orange-400">published prices vs quotes, plan by plan</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing, trials, contract terms, phone tools, quotes, payments, service plans and
            QuickBooks, from each vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Jobber</strong> publishes its prices, from $29/month billed annually for one user,
            offers a no-commitment monthly option and a 14-day trial, and puts route optimization and
            automated follow-ups on Connect. <strong>Workiz</strong> quotes every plan, offers a 7-day
            trial, and its standard terms run 12 months, renewing yearly with up to a 10% annual
            increase allowed. Workiz’s strengths are calling (a phone system with recorded, summarized
            calls) and, on its Ultimate plan, service plans and equipment tracking. Choose Jobber for
            price certainty and flexible billing; ask Workiz for a written quote if built-in calling
            matters most.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Jobber vs Workiz at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Sources
            and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Jobber</th>
                  <th scope="col" className="p-3.5">Workiz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.jobber}</td>
                    <td className="p-3.5">{r.workiz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: published bands vs request pricing</h2>
          <p>
            Jobber prices by plan and team band. Billed annually, Core is $29 for one user (with room for
            one more seat), Connect $99, Grow $149 and Plus $399 for five users; at 10 users, Connect is
            $229 and Grow $299. Extra users cost $29 a month each, and teams of 16 or more contact sales.
            Every band is in our <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> guide.
          </p>
          <p>
            Workiz shows “Request pricing” on all three plans and does not state a per-user price or a
            user limit. It says annual plans save $400 or more, and its terms allow an annual fee increase
            of up to 10% on the Sales Order anniversary unless agreed otherwise in writing. Phone, AI
            answering and marketing add-ons are listed as sold separately, without prices.
          </p>

          <h2 id="contracts">Billing, contracts and trials</h2>
          <p>
            Jobber offers three billing options: annual prepaid, a one-year commitment billed monthly, or
            no commitment at a higher monthly rate. Its terms say you can cancel at any time, that annual
            subscriptions renew unless cancelled at least 30 days before renewal, and that fees are
            non-refundable. Its 14-day trial covers Grow features without a credit card.
          </p>
          <p>
            Workiz’s terms (version 1.9, November 2026) start a 12-month initial term unless your Sales
            Order says otherwise, then renew for 12-month periods unless either side gives written notice
            at least 30 days before the term ends. Fees are non-cancelable and non-refundable. Its trial
            is 7 days without a credit card.
          </p>

          <h2 id="phone">Phone, texting and AI answering</h2>
          <p>
            This is Workiz’s clearest difference. Its phone system records, summarizes and makes every
            call searchable, routes calls by business hours, and tracks numbers from lead to job, and its
            Genius Answering add-on answers calls, texts, emails and web forms around the clock and books
            jobs. One caveat: its pricing page FAQ says a built-in phone system comes with all plans,
            while the plan table lists Genius Phone as sold separately, so get the phone features in your
            quote in writing. Jobber documents no business phone system; its AI Receptionist add-on
            answers calls and texts for $29 a month and is included on Plus.
          </p>

          <h2 id="quotes-payments">Quotes, payments and financing</h2>
          <p>
            Both include quotes or estimates on every plan. Jobber adds automated follow-ups on Connect and
            optional line items on Grow; Workiz includes estimate deposits on every plan but puts sales
            proposals and flat rate on Ultimate, and caps automations at 5, 10 or 30 by plan. Jobber
            publishes card fees of 2.9% + 30¢ online and 2.7% + 30¢ with Tap to Pay, with ACH at 1%; Workiz
            does not publish its rates. Both offer Wisetack financing, and Workiz adds Sunbit. More detail
            is in our <Link href="/guides/field-service-quoting-software" className={A}>quoting</Link> and{' '}
            <Link href="/guides/field-service-invoicing-software" className={A}>invoicing</Link> guides.
          </p>

          <h2 id="quickbooks">QuickBooks and integrations</h2>
          <p>
            Jobber syncs with QuickBooks Online and Xero from Connect and does not support QuickBooks
            Desktop. Workiz includes QuickBooks Online sync on every plan; its QuickBooks page says it also
            integrates with Desktop and that data flows one way, from Workiz to QuickBooks, while its
            invoicing page calls the sync two-way. Jobber offers API access on Plus; Workiz puts Zapier and
            its open API on Ultimate. See our <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="recurring">Recurring work, service plans and equipment</h2>
          <p>
            Both handle recurring jobs. Workiz adds service plans, which schedule visits and create
            invoices automatically, and equipment tracking that reads serial number, model and make from a
            label photo, both on Ultimate only. Jobber runs agreements as recurring jobs with automatic
            payments from Connect and documents no membership module or equipment records. Our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide compares this in depth.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo operator or small crew that wants price certainty:</strong> Jobber, with published prices and a no-commitment option.</li>
            <li><strong>Call-heavy emergency trade:</strong> Workiz, if the written quote includes the phone and answering features you need.</li>
            <li><strong>QuickBooks Desktop:</strong> Workiz says it supports Desktop; Jobber does not.</li>
            <li><strong>Maintenance plans and equipment records:</strong> Workiz Ultimate, or compare other tools in our maintenance agreement guide.</li>
            <li><strong>Crews that need offline invoicing:</strong> neither documents it well; test in the trial.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link>,{' '}
            <Link href="/compare/workiz-alternatives" className={A}>Workiz alternatives</Link> and{' '}
            <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Jobber vs Workiz">
            Jobber wins on price transparency, flexible billing and a longer trial. Workiz wins on built-in
            calling and, on Ultimate, service plans and equipment tracking, but its prices are quote-only
            and its standard terms renew yearly. Get the Workiz quote and phone features in writing before
            you decide. Our <Link href="/how-we-review" className={A}>review method</Link> explains why we
            show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
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
