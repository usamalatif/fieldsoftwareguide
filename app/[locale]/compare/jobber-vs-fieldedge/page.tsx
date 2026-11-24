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
 * /compare/jobber-vs-fieldedge: targets "jobber vs fieldedge". No GSC data for this topic yet.
 *
 * FieldEdge facts: pricing, feature, scheduling, payments, portal, partners, roadmap and training
 * pages checked 2026-11-24; the Xplor US SaaS terms FieldEdge links as its Service Agreement
 * (October 2023) read 2026-11-20. FieldEdge's help center did not render (JavaScript only), so
 * offline is described only by its roadmap status. No current consumer financing partner is
 * confirmed (only a 2022 blog post), so none is named. Jobber facts reuse the site's verified
 * pages (pricing 2026-11-21, help center 2026-11-03 to 11-20). FieldEdge's comparison page makes
 * claims about Jobber; none are used. Nothing tested hands-on.
 */

const PATH = '/compare/jobber-vs-fieldedge'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Jobber vs FieldEdge (2026): Pricing, Contracts and QuickBooks'
const DESCRIPTION =
  'Jobber publishes prices from $29/month with a trial; FieldEdge quotes every plan on yearly terms. Compare flat rate, agreements, offline use and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/jobber-vs-fieldedge',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber vs FieldEdge', href: PATH },
]

const rows: { feature: string; jobber: string; fe: string }[] = [
  { feature: 'Price', jobber: 'Published: Core $29, Connect $99, Grow $149 per month billed annually for one user; Plus from $399 for 5 users', fe: 'Not published: Select, Premier and Elite all say “Request Pricing”; varies with technicians, employees and add-ons' },
  { feature: 'Users', jobber: 'Bands of 1, 5, 10 and 15 users; 16+ contact sales', fe: '2, 4 or 6 mobile licenses included by plan' },
  { feature: 'Free trial', jobber: '14 days of Grow features, no credit card', fe: 'No free trial; an onboarding specialist on every plan' },
  { feature: 'Contract terms', jobber: 'No-commitment monthly option; cancel any time; annual plans renew unless cancelled 30 days before renewal', fe: 'Annual memberships; published terms renew for 12 months unless 60 days’ notice; ending early costs the remaining monthly fees' },
  { feature: 'Scheduling and routing', jobber: 'Drag-and-drop schedule; route optimization on Connect and up', fe: 'Basic dispatching on Select, advanced on Premier and Elite; map-based route optimization; vehicle GPS through the FleetSharp partner' },
  { feature: 'Phone and answering', jobber: 'No business phone system documented; AI Receptionist add-on ($29 a month, included on Plus)', fe: 'Caller details pop up from phone integration; outbound call recording on Elite; AI answering through partner Free2Grow' },
  { feature: 'Quotes and flat rate', jobber: 'Quotes on every plan; optional line items from Grow; no flat-rate price book documented', fe: 'Flat-rate price book on every plan; single-option quotes on Select, up to 5 options on Premier and Elite' },
  { feature: 'Payment fees', jobber: '2.9% + 30¢ online, 2.7% + 30¢ Tap to Pay, ACH 1%', fe: 'Not published; FieldEdge Payments (Xplor Pay) rates “tailored to your transaction volume”' },
  { feature: 'QuickBooks', jobber: 'QuickBooks Online and Xero from Connect; no Desktop', fe: 'QuickBooks Online and Desktop on every plan' },
  { feature: 'Agreements and equipment', jobber: 'Recurring jobs with automatic payments; no membership module or equipment records documented', fe: 'Basic agreements on Select, multiple per customer on Premier and Elite; equipment records with warranty dates and work history' },
  { feature: 'Offline', jobber: 'Timers, notes, checklists and visit completion work offline; no invoicing offline', fe: 'Offline mode for the Mobile 2.0 app listed as in development on its roadmap' },
  { feature: 'Reporting', jobber: 'Built-in reports from Core; custom reports and API on Plus', fe: 'Dashboards; saved reports none on Select, 10 on Premier, unlimited on Elite' },
]

const faqs = [
  {
    question: 'Is Jobber cheaper than FieldEdge?',
    answer:
      'We cannot say, because FieldEdge does not publish prices. Jobber starts at $29 a month billed annually for one user and publishes prices up to 15 users. FieldEdge says its pricing varies with your number of technicians and employees and the add-ons you choose, so ask for a written quote and compare totals for the same team.',
  },
  {
    question: 'Does FieldEdge have a free trial?',
    answer:
      'No. FieldEdge’s pricing FAQ says it does not offer a free trial and pairs new members with an onboarding team instead. Jobber offers a 14-day trial with Grow features and no credit card.',
  },
  {
    question: 'Does FieldEdge require a contract?',
    answer:
      'Its pricing page describes annual memberships, and downgrades take effect at the end of the contract period. The Xplor terms FieldEdge links as its Service Agreement let your Order Form set the first term, renew for 12 months unless either side gives 60 days’ written notice, and allow an early termination fee equal to the monthly fees for the remaining months. Jobber offers a no-commitment option and says you can cancel at any time.',
  },
  {
    question: 'Which has a flat-rate price book?',
    answer:
      'FieldEdge includes a price book with flat-rate pricing on every plan. Jobber builds quotes from line items and does not document a flat-rate price book.',
  },
  {
    question: 'Do Jobber and FieldEdge work with QuickBooks Desktop?',
    answer:
      'FieldEdge includes QuickBooks Online and Desktop on every plan. Jobber syncs with QuickBooks Online and Xero only, starting on Connect.',
  },
  {
    question: 'Does FieldEdge work offline?',
    answer:
      'FieldEdge’s roadmap lists offline mode for its Mobile 2.0 app as in rolling development, and we found no FieldEdge page describing what works offline today. Ask for a demo of the mobile app without signal. Jobber’s app keeps timers, notes, checklists and visit completion working offline, but not invoicing.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, bands, billing options, trial, fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber Terms of Service (last updated September 22, 2026)', url: 'https://www.getjobber.com/terms-of-service/', checked: '2026-11-21' },
  { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: AI Receptionist', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-03' },
  { name: 'Jobber help: quote basics', url: 'https://help.getjobber.com/en/articles/quote-basics/', checked: '2026-11-20' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: use the Jobber app offline', url: 'https://help.getjobber.com/en/articles/use-the-jobber-app-offline/', checked: '2026-11-19' },
  { name: 'FieldEdge pricing (plans, licenses, trial, annual memberships, feature table)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement (October 2023)', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-20' },
  { name: 'FieldEdge field service software (equipment, routes, dashboards)', url: 'https://fieldedge.com/field-service-software/', checked: '2026-11-24' },
  { name: 'FieldEdge scheduling and dispatching (caller info, fleet updates)', url: 'https://fieldedge.com/field-service-software/scheduling-and-dispatching/', checked: '2026-11-24' },
  { name: 'FieldEdge future features (Mobile 2.0 offline mode)', url: 'https://fieldedge.com/future-features/', checked: '2026-11-24' },
  { name: 'FieldEdge Payments (Xplor Pay)', url: 'https://fieldedge.com/fe-payments/', checked: '2026-11-24' },
  { name: 'FieldEdge partners (FleetSharp, Ruby)', url: 'https://fieldedge.com/partners/', checked: '2026-11-24' },
  { name: 'FieldEdge and Free2Grow AI answering integration', url: 'https://fieldedge.com/news/fieldedge-announces-integration-with-free2grow-to-help-contractors-grow-revenue/', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function JobberVsFieldEdgePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/jobber-vs-fieldedge"
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
            Jobber vs FieldEdge: <span className="text-orange-400">published prices vs a quote-only trade platform</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing, trials, contract terms, flat rate, agreements, offline use and QuickBooks, from each
            vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Jobber</strong> publishes its prices, from $29/month billed annually for one user,
            offers a 14-day trial and a no-commitment option, and documents offline work, but it syncs with
            QuickBooks Online only and has no flat-rate price book or equipment records.{' '}
            <strong>FieldEdge</strong>, built for multi-truck HVAC, plumbing and electrical shops, includes a
            flat-rate price book and QuickBooks Online and Desktop on every plan and keeps equipment records,
            but it is quote-only, has no free trial, sells annual memberships that renew unless you give 60
            days’ notice, and lists offline mode as still in development. Choose Jobber for flexibility and
            a known price; FieldEdge if flat rate and QuickBooks Desktop run your office.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Jobber vs FieldEdge at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Sources and
            check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Jobber</th>
                  <th scope="col" className="p-3.5">FieldEdge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.jobber}</td>
                    <td className="p-3.5">{r.fe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: published bands vs request pricing</h2>
          <p>
            Jobber prices by plan and team band. Billed annually, Core is $29 for one user, Connect $99,
            Grow $149 and Plus $399 for five users; at 10 users, Connect is $229 and Grow $299. See our{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> guide.
          </p>
          <p>
            FieldEdge’s Select, Premier and Elite plans all say Request Pricing, and its FAQ says pricing
            varies with your number of technicians and employees and the add-ons you choose. The plans
            include 2, 4 and 6 mobile licenses. Proposal Pro, MarketingEdge and the customer portal are
            included on Elite and priced on request below it, and onsite training is charged at a daily rate
            plus airfare.
          </p>

          <h2 id="contracts">Trials and contract terms</h2>
          <p>
            Jobber offers a 14-day trial with Grow features, three billing options including no commitment,
            and says you can cancel at any time; annual plans renew unless cancelled 30 days before renewal.
          </p>
          <p>
            FieldEdge offers no free trial and pairs every plan with an onboarding specialist. Its pricing
            page describes annual memberships; you can upgrade any time, but downgrades happen at the end of
            the contract period. The Xplor terms it links as its Service Agreement let your Order Form set
            the first term, renew for 12 months at a time unless either side gives written notice at least
            60 days before the end, allow an early termination fee equal to the monthly fees for the
            remaining months, and let Xplor raise fees with two months’ notice (you can leave within 10 days
            if the rise is above CPI).
          </p>

          <h2 id="pricebook">Flat rate, quotes and agreements</h2>
          <p>
            This is FieldEdge’s clearest advantage for HVAC, plumbing and electrical shops. Every plan
            includes a flat-rate price book; Premier and Elite add multi-option quotes (up to five options)
            and multiple maintenance agreements per customer, and FieldEdge keeps equipment records with
            warranty dates and work history. Jobber builds quotes from line items (optional items on Grow),
            runs agreements as recurring jobs with automatic payments, and documents no flat-rate price book
            or equipment records. See our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide.
          </p>

          <h2 id="dispatch-phone">Dispatch, phones and booking</h2>
          <p>
            Jobber has a drag-and-drop schedule with route optimization from Connect. FieldEdge offers basic
            dispatching on Select and advanced dispatching on Premier and Elite, map-based route
            optimization, and vehicle GPS through its FleetSharp partner. FieldEdge pulls up caller details
            when the phone rings, records outbound calls on Elite, and connects to Free2Grow for AI
            answering; Jobber has no phone system and sells an AI Receptionist for $29 a month (included on
            Plus).
          </p>

          <h2 id="offline-quickbooks">Offline use, payments and QuickBooks</h2>
          <p>
            Jobber’s app keeps timers, notes, checklists and visit completion working offline, but not
            invoicing. FieldEdge’s roadmap lists offline mode for its Mobile 2.0 app as in rolling
            development, and we found no FieldEdge page describing what works offline today. Jobber publishes
            card fees of 2.9% + 30¢ online and ACH at 1%; FieldEdge Payments runs on Xplor Pay with rates
            tailored to your volume and next-day funding. FieldEdge includes QuickBooks Online and Desktop on
            every plan; Jobber supports QuickBooks Online and Xero from Connect, not Desktop. See our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo operator or small crew:</strong> Jobber, with published prices and a no-commitment option.</li>
            <li><strong>Multi-truck HVAC, plumbing or electrical shop on flat rate:</strong> FieldEdge.</li>
            <li><strong>QuickBooks Desktop:</strong> FieldEdge, on every plan; Jobber does not support it.</li>
            <li><strong>Crews often without signal:</strong> Jobber documents offline work today.</li>
            <li><strong>Want to try before you sign:</strong> Jobber; FieldEdge has no free trial.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link>,{' '}
            <Link href="/compare/fieldedge-alternatives" className={A}>FieldEdge alternatives</Link> and{' '}
            <Link href="/compare/servicetitan-vs-fieldedge" className={A}>ServiceTitan vs FieldEdge</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Jobber vs FieldEdge">
            Jobber wins on published prices, a free trial, flexible billing and documented offline work.
            FieldEdge wins on flat rate, maintenance agreements, equipment records and QuickBooks Desktop on
            every plan, but it is quote-only and renews yearly unless you give 60 days’ notice. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
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
