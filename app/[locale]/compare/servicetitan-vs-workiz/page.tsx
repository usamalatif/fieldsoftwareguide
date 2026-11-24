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
 * /compare/servicetitan-vs-workiz: targets "servicetitan vs workiz". No GSC data for this topic yet.
 *
 * Built only from facts the site already verified on vendor pages: ServiceTitan pricing page
 * (Core, Demand AI, Field AI, MAX; checked 2026-11-21), its Terms of Use (last updated
 * 2026-09-16, read in full 2026-11-21), help center articles (2026-11-17 to 11-23) and its 10-K
 * (2026-11-19); Workiz pricing, feature and QuickBooks pages and its Terms of Service v1.9
 * (2026-11-20/21). Neither vendor publishes a price, so none is shown. ServiceTitan's older
 * per-technician package wording is not used. Nothing tested hands-on.
 */

const PATH = '/compare/servicetitan-vs-workiz'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTitan vs Workiz (2026): Plans, Contracts, Phones'
const DESCRIPTION =
  'Neither ServiceTitan nor Workiz publishes prices. Compare packages, contract terms, trials, phone systems, memberships, offline use and QuickBooks side by side.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicetitan-vs-workiz',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceTitan vs Workiz', href: PATH },
]

const rows: { feature: string; st: string; workiz: string }[] = [
  { feature: 'Price', st: 'Not published: packages Core, Demand AI, Field AI and MAX behind one “Get Pricing” button', workiz: 'Not published: Standard, Pro and Ultimate all say “Request pricing”' },
  { feature: 'What Core or Standard includes', st: 'Core: scheduling, dispatching, call booking, invoicing, pricebook, reporting, mobile estimates, payroll, commissions and memberships', workiz: 'Standard: drag-and-drop calendar, recurring jobs, online booking, client portal, QuickBooks Online sync and team location tracking' },
  { feature: 'Free trial', st: 'Demo only', workiz: '7 days, no credit card' },
  { feature: 'Contract terms', st: 'Order Form sets the term; ending early costs all remaining payments; without an Order Form, month to month with 30 days’ notice', workiz: '12-month term that renews for 12 months unless 30 days’ notice; up to 10% annual increase allowed' },
  { feature: 'Onboarding', st: 'Implementation consultant; its annual report says onboarding and training fees are generally invoiced separately', workiz: 'Not published' },
  { feature: 'Dispatch and routing', st: 'Dispatch board with capacity planning and technician route optimization; Dispatch Pro add-on automates assignment', workiz: 'Drag-and-drop calendar on every plan; route optimization offered, plan not stated; AI scheduling on Pro and Ultimate' },
  { feature: 'Phone system', st: 'Call booking in Core; Phones Pro is a separate subscription', workiz: 'Phone system with recorded, summarized calls; pricing page lists Genius Phone and Genius Answering as sold separately' },
  { feature: 'Online booking', st: 'Scheduling Pro add-on', workiz: 'On every plan' },
  { feature: 'Estimates and pricebook', st: 'Good, Better, Best estimates; pricebook in Core', workiz: 'Unlimited estimates on every plan; flat rate and sales proposals on Ultimate' },
  { feature: 'Memberships and equipment', st: 'Customizable memberships in Core; Installed Equipment records', workiz: 'Service plans and equipment tracking on Ultimate only' },
  { feature: 'Offline mobile', st: 'Most job work offline (status, time, signatures, notes, photos, estimates); some actions need a connection', workiz: 'Job details and updates offline, synced later' },
  { feature: 'Accounting', st: 'QuickBooks Online and Desktop (Pro, Premier, Enterprise), Sage Intacct and Xero', workiz: 'QuickBooks Online on every plan; its QuickBooks page says Desktop is supported and data flows one way' },
  { feature: 'Vehicle GPS', st: 'Fleet Pro add-on for live vehicle GPS', workiz: 'Team location and fleet tracking on every plan' },
]

const faqs = [
  {
    question: 'Is ServiceTitan more expensive than Workiz?',
    answer:
      'We cannot say, because neither publishes prices. ServiceTitan shows four packages behind a Get Pricing button, and its annual report says onboarding and training fees are generally invoiced separately. Workiz shows Request pricing on all three plans and lists phone and AI answering add-ons as sold separately. Ask both for a written quote for the same number of users, add-ons and contract length.',
  },
  {
    question: 'Can I cancel ServiceTitan or Workiz early?',
    answer:
      'ServiceTitan’s Terms of Use say your Order Form sets the term and that ending it early means a termination fee equal to all remaining payments, unless ServiceTitan materially breaches. Workiz’s terms set a 12-month term unless the Sales Order says otherwise, renewing for 12 months unless either side gives 30 days’ written notice, and fees are non-refundable.',
  },
  {
    question: 'Does ServiceTitan or Workiz have a free trial?',
    answer:
      'Workiz offers a 7-day free trial with no credit card. ServiceTitan offers demos, not a trial.',
  },
  {
    question: 'Which is better for memberships and maintenance agreements?',
    answer:
      'ServiceTitan includes customizable memberships in its Core package. Workiz puts service plans and equipment tracking on Ultimate only, so check that your quote is for Ultimate if you sell maintenance plans.',
  },
  {
    question: 'Which works better offline?',
    answer:
      'ServiceTitan documents more: its Field Mobile App handles job status, time tracking, signatures, notes, photos and estimates offline and syncs automatically, while purchase orders, financing, contracts, inventory availability and dynamic pricing need a connection. Workiz says job details and updates work offline and sync later.',
  },
  {
    question: 'Do both work with QuickBooks Desktop?',
    answer:
      'ServiceTitan integrates with QuickBooks Desktop Pro, Premier and Enterprise as well as QuickBooks Online, Sage Intacct and Xero. Workiz includes QuickBooks Online sync on every plan, and its QuickBooks page says it also supports Desktop, with data flowing one way from Workiz to QuickBooks.',
  },
]

const sources = [
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX; Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-21' },
  { name: 'ServiceTitan Form 10-K (onboarding and training fees)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-19' },
  { name: 'ServiceTitan dispatch software (Dispatch Pro add-on, capacity planning)', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-19' },
  { name: 'ServiceTitan help: dispatch and track technicians (Fleet Pro)', url: 'https://help.servicetitan.com/docs/dispatch-and-track-your-technicians', checked: '2026-11-17' },
  { name: 'ServiceTitan help: Scheduling Pro online booking', url: 'https://help.servicetitan.com/docs/set-up-your-online-scheduler-with-scheduling-pro-in-servicetitan-max', checked: '2026-11-17' },
  { name: 'ServiceTitan help: Phones Pro', url: 'https://help.servicetitan.com/docs/phones-pro-1', checked: '2026-11-21' },
  { name: 'ServiceTitan help: estimates (Good, Better, Best)', url: 'https://help.servicetitan.com/docs/build-estimates-and-close-sales', checked: '2026-11-17' },
  { name: 'ServiceTitan help: installed equipment', url: 'https://help.servicetitan.com/docs/track-manage-installed-equipment', checked: '2026-11-23' },
  { name: 'ServiceTitan help: Field Mobile App offline capabilities', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-17' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-21' },
  { name: 'Workiz pricing plans (features by plan, trial, phone FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
  { name: 'Workiz Terms of Service v1.9 (last updated November 2, 2026)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-21' },
  { name: 'Workiz phone system', url: 'https://www.workiz.com/features/phone-system/', checked: '2026-11-21' },
  { name: 'Workiz Genius Answering', url: 'https://www.workiz.com/features/genius-answering/', checked: '2026-11-21' },
  { name: 'Workiz route planning', url: 'https://www.workiz.com/features/route-planning/', checked: '2026-11-21' },
  { name: 'Workiz mobile app (offline)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-21' },
  { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-11-21' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-21' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceTitanVsWorkizPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicetitan-vs-workiz"
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
            ServiceTitan vs Workiz: <span className="text-orange-400">two quote-only platforms, compared on what they publish</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Packages, contract terms, trials, phones, memberships, offline use and QuickBooks, from each
            vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Neither publishes prices, so the choice comes down to what each plan includes and the terms
            you sign. <strong>ServiceTitan</strong> puts memberships, a pricebook, call booking, payroll and
            commissions in its Core package, documents the most offline work, and supports QuickBooks
            Desktop, Sage Intacct and Xero, but it is demo-only, bills onboarding separately and charges
            all remaining payments if you leave before the term ends. <strong>Workiz</strong> offers a
            7-day trial, online booking and team tracking on every plan and a phone system built around
            calls, but service plans, flat rate and equipment tracking need its top Ultimate plan, and its
            standard 12-month term renews with up to a 10% yearly increase allowed.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceTitan vs Workiz at a glance</h2>
          <p className={SUB}>
            Documented capabilities only, not a hands-on test or a score. Sources and check dates are at the
            end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">ServiceTitan</th>
                  <th scope="col" className="p-3.5">Workiz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.st}</td>
                    <td className="p-3.5">{r.workiz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: two quotes, different packaging</h2>
          <p>
            ServiceTitan’s pricing page lists four packages, Core, Demand AI, Field AI and MAX, behind one
            Get Pricing button. Core already includes scheduling, dispatching, call booking, invoicing, the
            pricebook, reporting, mobile estimates, payroll, commissions and memberships. Its annual report
            says onboarding and training fees are generally invoiced separately, so ask for them in the
            quote.
          </p>
          <p>
            Workiz shows Request pricing on Standard, Pro and Ultimate and does not state a per-user price.
            It says annual plans save $400 or more, and lists its phone, AI answering and marketing add-ons
            as sold separately. Because so much sits on Ultimate, ask Workiz to quote the plan that holds
            the features you need, not just Standard.
          </p>

          <h2 id="contracts">Contracts, trials and leaving</h2>
          <p>
            ServiceTitan offers demos, not a trial. Its Terms of Use say your Order Form sets the term, that
            ending the agreement early means a termination fee equal to all the remaining payments (unless
            ServiceTitan materially breaches), and that without an Order Form subscriptions run month to
            month and renew unless either side gives at least 30 days’ written notice. On request it will
            make commercially reasonable efforts to export your data, service fees may apply, and it keeps
            data no longer than 60 days after termination.
          </p>
          <p>
            Workiz offers a 7-day trial with no credit card. Its terms (version 1.9, November 2026) start a
            12-month term unless your Sales Order says otherwise, renew for 12-month periods unless either
            side gives written notice at least 30 days before the end, allow a fee increase of up to 10% a
            year, and make fees non-cancelable and non-refundable.
          </p>

          <h2 id="dispatch">Dispatch, routing and booking</h2>
          <p>
            ServiceTitan’s dispatch board includes capacity planning and technician route optimization, and
            its Dispatch Pro add-on automates technician assignment. Online booking comes through the
            Scheduling Pro add-on and live vehicle GPS through Fleet Pro. Workiz includes a drag-and-drop
            calendar, online booking and team location and fleet tracking on every plan, adds AI scheduling
            on Pro and Ultimate, and offers route optimization without saying which plan includes it. Our{' '}
            <Link href="/guides/hvac-dispatch-software" className={A}>dispatch software guide</Link> goes deeper.
          </p>

          <h2 id="phone">Phones and call handling</h2>
          <p>
            Both are built around calls, in different ways. ServiceTitan includes call booking in Core and
            sells Phones Pro as a separate subscription. Workiz’s phone system records, summarizes and
            makes calls searchable and tracks numbers from lead to job; its pricing page FAQ says a phone
            system comes with all plans while the plan table lists Genius Phone and Genius Answering as sold
            separately. Get the phone features in each quote in writing.
          </p>

          <h2 id="memberships">Memberships, pricebook and equipment</h2>
          <p>
            This is ServiceTitan’s clearest advantage for maintenance-heavy shops: customizable memberships
            and the pricebook are in Core, it keeps Installed Equipment records, and its estimates support
            Good, Better, Best options. Workiz has service plans that schedule visits and create invoices,
            equipment tracking that reads serial number, model and make from a label photo, and flat rate and
            sales proposals, but all of these are on Ultimate only. See our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide.
          </p>

          <h2 id="offline-accounting">Offline work and accounting</h2>
          <p>
            ServiceTitan documents most job work offline (status, time, signatures, notes, photos and
            estimates) with automatic sync; purchase orders, financing, contracts, inventory availability and
            dynamic pricing need a connection. Workiz says job details and updates work offline and sync
            later. For accounting, ServiceTitan integrates with QuickBooks Online and Desktop (Pro, Premier,
            Enterprise), Sage Intacct and Xero. Workiz includes QuickBooks Online on every plan, and its
            QuickBooks page says it supports Desktop with data flowing one way. See our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Maintenance memberships at scale:</strong> ServiceTitan, with memberships and a pricebook in Core.</li>
            <li><strong>Want to try before you sign:</strong> Workiz, the only one of the two with a free trial.</li>
            <li><strong>Crews often without signal:</strong> ServiceTitan documents more offline work.</li>
            <li><strong>Smaller call-driven team:</strong> Workiz, if the written quote includes the phone features and the plan you need.</li>
            <li><strong>Sage Intacct or Xero:</strong> ServiceTitan; Workiz documents QuickBooks only.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/servicetitan-alternatives" className={A}>ServiceTitan alternatives</Link>,{' '}
            <Link href="/compare/workiz-alternatives" className={A}>Workiz alternatives</Link> and{' '}
            <Link href="/compare/housecall-pro-vs-servicetitan" className={A}>Housecall Pro vs ServiceTitan</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: ServiceTitan vs Workiz">
            ServiceTitan packs more into its base package (memberships, pricebook, payroll) and documents
            more offline work and accounting options, but it is demo-only and costly to leave early. Workiz
            is easier to try and includes booking and team tracking on every plan, but its maintenance
            features sit on Ultimate. Neither publishes prices, so compare written quotes for the same team,
            add-ons and term. Our <Link href="/how-we-review" className={A}>review method</Link> explains why
            we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/compare/servicetitan-vs-jobber" className="text-orange-600 hover:text-orange-800">ServiceTitan vs Jobber →</Link>
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
