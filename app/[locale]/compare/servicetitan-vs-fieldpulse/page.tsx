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
 * /compare/servicetitan-vs-fieldpulse: targets "servicetitan vs fieldpulse". No GSC data for this
 * topic yet.
 *
 * ServiceTitan facts reuse the site's verified pages: pricing (Core, Demand AI, Field AI, MAX;
 * 2026-11-21), Terms of Use (last updated 2026-09-16, read 2026-11-21), help center (2026-11-17 to
 * 11-23) and 10-K (2026-11-19). FieldPulse facts: pricing page, Terms of Service, Engage page and
 * help center checked 2026-11-24; asset management and offline mode from 2026-11-11; its
 * ServiceTitan migration guide from 2026-11-21. Neither publishes prices. Nothing tested hands-on.
 */

const PATH = '/compare/servicetitan-vs-fieldpulse'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTitan vs FieldPulse (2026): Contracts, Offline and Fit'
const DESCRIPTION =
  'Neither ServiceTitan nor FieldPulse publishes prices. Compare packages, contract terms, dispatch, memberships, offline use, phones and QuickBooks side by side.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicetitan-vs-fieldpulse',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceTitan vs FieldPulse', href: PATH },
]

const rows: { feature: string; st: string; fp: string }[] = [
  { feature: 'Price', st: 'Not published: packages Core, Demand AI, Field AI and MAX behind one “Get Pricing” button', fp: 'Not published: seat-based, “Get a Custom Quote”; no plan names on the pricing page' },
  { feature: 'Free trial', st: 'Demo only', fp: 'Demo only; no free trial advertised' },
  { feature: 'Contract terms', st: 'Order Form sets the term; ending early costs all remaining payments; without an Order Form, month to month with 30 days’ notice', fp: 'One-year term that renews automatically; 60 days’ notice before renewal; no cancelling before the term ends' },
  { feature: 'Onboarding', st: 'Implementation consultant; its annual report says onboarding and training fees are generally invoiced separately', fp: 'Says a dedicated implementation manager guides setup; publishes a ServiceTitan migration guide' },
  { feature: 'Dispatch and routing', st: 'Dispatch board with capacity planning and technician route optimization; Dispatch Pro add-on automates assignment', fp: 'Visual calendar with live technician map; map-based route scheduling (you set the stop order); multi-day jobs' },
  { feature: 'Phone system', st: 'Call booking in Core; Phones Pro is a separate subscription', fp: 'Engage VoIP phone and texting add-on; Operator AI call answering add-on' },
  { feature: 'Online booking', st: 'Scheduling Pro add-on', fp: 'Embedded booking portal' },
  { feature: 'Estimates and pricebook', st: 'Good, Better, Best estimates; pricebook in Core', fp: 'Good, Better, Best estimate options; flat-rate Pricebook is a paid add-on' },
  { feature: 'Memberships and equipment', st: 'Customizable memberships in Core; Installed Equipment records', fp: 'Maintenance agreements with recurring billing and renewal reminders; asset records with warranty info, history and barcode scanning' },
  { feature: 'Offline mobile', st: 'Most job work offline (status, time, signatures, notes, photos, estimates); some actions need a connection', fp: 'Switches to offline mode; forms, notes and photos editable; no payments offline' },
  { feature: 'Accounting', st: 'QuickBooks Online and Desktop (Pro, Premier, Enterprise), Sage Intacct and Xero', fp: 'QuickBooks Online (two-way), Desktop 2024 or newer on Windows (set up by support), and Xero' },
  { feature: 'Payroll and commissions', st: 'In Core', fp: 'Not compared here' },
]

const faqs = [
  {
    question: 'Is FieldPulse cheaper than ServiceTitan?',
    answer:
      'We cannot say, because neither publishes prices. ServiceTitan shows four packages behind a Get Pricing button, and its annual report says onboarding and training fees are generally invoiced separately. FieldPulse prices by seat and sells its phone system, AI answering and Pricebook as add-ons. Ask both for a written quote for the same seats, add-ons, onboarding and term.',
  },
  {
    question: 'Can I cancel ServiceTitan or FieldPulse early?',
    answer:
      'Neither lets you leave mid-term without cost. ServiceTitan’s Terms of Use say ending before the Order Form term is over means a fee equal to all remaining payments, unless ServiceTitan materially breaches. FieldPulse’s terms say you may not cancel before the term ends except for an uncured material breach or a business closure, and its one-year term renews automatically unless you give 60 days’ notice.',
  },
  {
    question: 'Can FieldPulse import my ServiceTitan data?',
    answer:
      'FieldPulse publishes a ServiceTitan to FieldPulse migration guide that covers customers and the pricebook, with a map of matching terms, such as a ServiceTitan membership becoming a FieldPulse maintenance agreement. The guide does not cover jobs, invoices or equipment, so ask what else its team can move.',
  },
  {
    question: 'Which is better for memberships?',
    answer:
      'ServiceTitan includes customizable memberships and the pricebook in its Core package. FieldPulse runs maintenance agreements with recurring billing and renewal reminders, but sells its flat-rate Pricebook as an add-on and does not say which plan includes agreements.',
  },
  {
    question: 'Which works better offline?',
    answer:
      'Both document offline work. ServiceTitan’s Field Mobile App handles job status, time, signatures, notes, photos and estimates offline, while purchase orders, financing, contracts, inventory availability and dynamic pricing need a connection. FieldPulse switches to offline mode automatically and lets technicians edit forms, notes and photos; payments need a connection.',
  },
  {
    question: 'Do both work with QuickBooks Desktop?',
    answer:
      'Yes. ServiceTitan integrates with QuickBooks Desktop Pro, Premier and Enterprise as well as Online, Sage Intacct and Xero. FieldPulse supports Desktop 2024 or newer on Windows through the QuickBooks Web Connector, set up by its support team, plus QuickBooks Online and Xero.',
  },
]

const sources = [
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX; Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-21' },
  { name: 'ServiceTitan Form 10-K (onboarding and training fees)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-19' },
  { name: 'ServiceTitan dispatch software (Dispatch Pro add-on, capacity planning)', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-19' },
  { name: 'ServiceTitan help: Scheduling Pro online booking', url: 'https://help.servicetitan.com/docs/set-up-your-online-scheduler-with-scheduling-pro-in-servicetitan-max', checked: '2026-11-17' },
  { name: 'ServiceTitan help: Phones Pro', url: 'https://help.servicetitan.com/docs/phones-pro-1', checked: '2026-11-21' },
  { name: 'ServiceTitan help: estimates (Good, Better, Best)', url: 'https://help.servicetitan.com/docs/build-estimates-and-close-sales', checked: '2026-11-17' },
  { name: 'ServiceTitan help: installed equipment', url: 'https://help.servicetitan.com/docs/track-manage-installed-equipment', checked: '2026-11-23' },
  { name: 'ServiceTitan help: Field Mobile App offline capabilities', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-17' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-21' },
  { name: 'FieldPulse pricing (seat-based, custom quote, premium products)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service (term, renewal, notice, seats)', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-24' },
  { name: 'FieldPulse vs Housecall Pro page (implementation manager statement about itself)', url: 'https://www.fieldpulse.com/comparison/housecall-pro', checked: '2026-11-24' },
  { name: 'FieldPulse help: ServiceTitan to FieldPulse migration guide', url: 'https://help.fieldpulse.com/en/articles/15170775-servicetitan-to-fieldpulse-migration-guide', checked: '2026-11-21' },
  { name: 'FieldPulse scheduling software', url: 'https://www.fieldpulse.com/features/service-scheduling-software', checked: '2026-11-24' },
  { name: 'FieldPulse help: route optimization (map-based)', url: 'https://help.fieldpulse.com/scheduling-dispatch/dispatch/route-optimization', checked: '2026-11-24' },
  { name: 'FieldPulse Engage (phone, texting, Operator AI)', url: 'https://www.fieldpulse.com/features/engage', checked: '2026-11-24' },
  { name: 'FieldPulse help: estimate options and add-ons', url: 'https://help.fieldpulse.com/estimates-invoices/options/options-add-ons.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: Pricebook add-on', url: 'https://help.fieldpulse.com/add-ons/sales-suite/pricebook-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: maintenance agreements', url: 'https://help.fieldpulse.com/jobs/assets/maintenance-agreements-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-11-11' },
  { name: 'FieldPulse help: offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-11-11' },
  { name: 'FieldPulse help: QuickBooks Online', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-online/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Desktop', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-desktop/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: purchase orders', url: 'https://help.fieldpulse.com/inventory-materials/purchase-orders/overview.md', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceTitanVsFieldPulsePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicetitan-vs-fieldpulse"
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
            ServiceTitan vs FieldPulse: <span className="text-orange-400">two quote-only platforms, compared on what they publish</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Packages, contract terms, dispatch, phones, memberships, offline use and QuickBooks, from each
            vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Neither publishes prices or offers a free trial, and neither lets you leave mid-term without
            cost. <strong>ServiceTitan</strong> puts memberships, a pricebook, call booking, payroll and
            commissions in its Core package and documents capacity planning and Sage Intacct support, but
            bills onboarding separately and charges all remaining payments if you leave early.{' '}
            <strong>FieldPulse</strong> prices by seat on a one-year term that renews unless you give 60
            days’ notice, sells its Pricebook and phone system as add-ons, and documents asset records,
            maintenance agreements, offline editing and QuickBooks Desktop. It also publishes a guide for
            moving from ServiceTitan.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceTitan vs FieldPulse at a glance</h2>
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
                  <th scope="col" className="p-3.5">FieldPulse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.st}</td>
                    <td className="p-3.5">{r.fp}</td>
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
            pricebook, reporting, mobile estimates, payroll, commissions and memberships, while Dispatch
            Pro, Scheduling Pro, Fleet Pro and Phones Pro are sold separately. Its annual report says
            onboarding and training fees are generally invoiced separately.
          </p>
          <p>
            FieldPulse says it is seat-based, names no plans on its pricing page, and lists optional premium
            products without prices: Engage, Operator AI, Chat AI, Pricebook, FieldPulse Payments,
            FieldPulse Financing, Fleet Tracking and Custom Forms. Its terms bill seats added mid-term
            upfront for the year, and deactivating a user does not reduce the seats you pay for.
          </p>

          <h2 id="contracts">Contracts and leaving</h2>
          <p>
            ServiceTitan’s Terms of Use say your Order Form sets the term, that ending it early means a
            termination fee equal to all remaining payments (unless ServiceTitan materially breaches), and
            that without an Order Form subscriptions run month to month with 30 days’ notice. It will make
            commercially reasonable efforts to export your data on request, service fees may apply, and it
            keeps data no longer than 60 days after termination.
          </p>
          <p>
            FieldPulse’s Terms of Service set a one-year first term unless your order form says otherwise,
            renew it automatically unless you give notice at least 60 days before it ends, and do not let
            you cancel before the term ends except for an uncured material breach or a business closure. Fees
            may rise at renewal with 60 days’ notice, with no cap stated, and month-to-month plans cost up to
            50% more than the annual rate.
          </p>

          <h2 id="dispatch">Dispatch, booking and phones</h2>
          <p>
            ServiceTitan documents more dispatch depth: a dispatch board with capacity planning and
            technician route optimization, with Dispatch Pro automating assignment. FieldPulse has a visual
            calendar, a live technician map, multi-day jobs and a booking portal, and its help center
            documents map-based route scheduling where you set the stop order. ServiceTitan includes call
            booking in Core and sells Phones Pro separately; FieldPulse sells Engage (calls, texts,
            recording, routing) and Operator AI answering as add-ons. See our{' '}
            <Link href="/guides/hvac-dispatch-software" className={A}>dispatch software guide</Link>.
          </p>

          <h2 id="memberships">Memberships, pricebook and equipment</h2>
          <p>
            ServiceTitan includes customizable memberships and the pricebook in Core, keeps Installed
            Equipment records and supports Good, Better, Best estimates. FieldPulse runs maintenance
            agreements with recurring billing and renewal reminders and keeps asset records with warranty
            information, history and barcode scanning, without naming the plan; its flat-rate Pricebook is
            a paid add-on. See our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide.
          </p>

          <h2 id="offline-accounting">Offline work and accounting</h2>
          <p>
            Both document offline work. ServiceTitan handles job status, time, signatures, notes, photos and
            estimates offline; purchase orders, financing, contracts, inventory availability and dynamic
            pricing need a connection. FieldPulse lets technicians edit forms, notes and photos offline, and
            payments need a connection. ServiceTitan integrates with QuickBooks Online and Desktop, Sage
            Intacct and Xero; FieldPulse with QuickBooks Online, Desktop 2024 or newer on Windows, and Xero.
            See our <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="switching">Moving from ServiceTitan to FieldPulse</h2>
          <p>
            FieldPulse publishes a ServiceTitan migration guide for importing customers and the pricebook,
            with a map of matching terms; a ServiceTitan membership becomes a FieldPulse maintenance
            agreement. It does not cover jobs, invoices or equipment. Before you give notice, check your
            ServiceTitan Order Form end date, since leaving early costs the remaining payments.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Call center, capacity planning or several dispatchers:</strong> ServiceTitan.</li>
            <li><strong>Memberships and a pricebook without add-ons:</strong> ServiceTitan, with both in Core.</li>
            <li><strong>Sage Intacct:</strong> ServiceTitan.</li>
            <li><strong>Commercial or project work with asset records and purchase orders:</strong> FieldPulse, if your quote confirms the features.</li>
            <li><strong>Leaving ServiceTitan at the end of your term:</strong> FieldPulse documents a migration path.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/servicetitan-alternatives" className={A}>ServiceTitan alternatives</Link>,{' '}
            <Link href="/compare/fieldpulse-alternatives" className={A}>FieldPulse alternatives</Link> and{' '}
            <Link href="/compare/fieldpulse-vs-workiz" className={A}>FieldPulse vs Workiz</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: ServiceTitan vs FieldPulse">
            ServiceTitan packs more into its base package and documents more dispatch depth and accounting
            options. FieldPulse documents asset records, agreements and offline editing, sells more as
            add-ons, and publishes a path for moving from ServiceTitan. Both are quote-only and hard to leave
            mid-term, so compare written quotes for the same seats, add-ons and term. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/compare/servicetitan-vs-workiz" className="text-orange-600 hover:text-orange-800">ServiceTitan vs Workiz →</Link>
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
