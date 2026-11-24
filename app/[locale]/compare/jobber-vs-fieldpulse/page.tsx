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
 * /compare/jobber-vs-fieldpulse: targets "jobber vs fieldpulse". No GSC data for this topic yet.
 *
 * FieldPulse facts: pricing page, Terms of Service, Engage page, comparison page and help center,
 * checked 2026-11-24; asset management and offline mode reuse the 2026-11-11 checks. FieldPulse
 * publishes no prices and no plan names on its pricing page (a blog post names tiers; not used),
 * and its help center documents map-based route scheduling, so we do not call it automatic route
 * optimization. Jobber facts reuse the site's verified pages (pricing 2026-11-21, help center
 * 2026-11-03 to 11-20); getjobber.com was not refetched. FieldPulse's comparison page makes claims
 * about Jobber; none are used. Nothing tested hands-on.
 */

const PATH = '/compare/jobber-vs-fieldpulse'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Jobber vs FieldPulse (2026): Pricing, Contracts and Features'
const DESCRIPTION =
  'Jobber publishes prices from $29/month; FieldPulse quotes by seat on a one-year term. Compare trials, contracts, offline use, equipment and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/jobber-vs-fieldpulse',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber vs FieldPulse', href: PATH },
]

const rows: { feature: string; jobber: string; fp: string }[] = [
  { feature: 'Price', jobber: 'Published: Core $29, Connect $99, Grow $149 per month billed annually for one user; Plus from $399 for 5 users', fp: 'Not published: seat-based, “Get a Custom Quote”' },
  { feature: 'Team pricing', jobber: 'Bands of 1, 5, 10 and 15 users (for example Connect $229 or Grow $299 for 10 users, billed annually); 16+ contact sales', fp: 'Priced by seat; extra seats added mid-term are billed for the year upfront' },
  { feature: 'Free trial', jobber: '14 days of Grow features, no credit card', fp: 'Demo only; no free trial advertised' },
  { feature: 'Contract terms', jobber: 'No-commitment monthly option; cancel any time; annual plans renew unless cancelled 30 days before renewal', fp: 'One-year term that renews automatically; 60 days’ notice before renewal; no cancelling before the term ends; month to month costs up to 50% more' },
  { feature: 'Scheduling and routing', jobber: 'Drag-and-drop schedule; route optimization on Connect and up', fp: 'Visual calendar with live technician map; map-based route scheduling (you set the stop order); multi-day jobs' },
  { feature: 'Phone and answering', jobber: 'No business phone system documented; AI Receptionist add-on ($29 a month, included on Plus)', fp: 'Engage VoIP phone and texting add-on; Operator AI call answering add-on; no prices published' },
  { feature: 'Quotes and price book', jobber: 'Quotes on every plan; optional line items from Grow; automated follow-ups from Connect', fp: 'Good, Better, Best estimate options with add-ons; flat-rate Pricebook is a paid add-on' },
  { feature: 'Payment fees', jobber: '2.9% + 30¢ online, 2.7% + 30¢ Tap to Pay, ACH 1%', fp: 'Not published; FieldPulse Payments has card and ACH fees plus a monthly cost' },
  { feature: 'Financing', jobber: 'Wisetack; flat 3.9% cost to you per financed amount', fp: 'Wisetack or Acorn Finance (one at a time)' },
  { feature: 'QuickBooks', jobber: 'QuickBooks Online and Xero from Connect; no Desktop', fp: 'QuickBooks Online (two-way), Desktop 2024 or newer on Windows (set up by support), and Xero' },
  { feature: 'Agreements and equipment', jobber: 'Recurring jobs with automatic payments; no membership module or equipment records documented', fp: 'Maintenance agreements with recurring billing and renewal reminders; asset records with warranty info, history and barcode scanning' },
  { feature: 'Offline', jobber: 'Timers, notes, checklists and visit completion work offline; no invoicing offline', fp: 'Switches to offline mode; forms, notes and photos editable; no payments offline' },
  { feature: 'Projects and purchasing', jobber: 'Not documented', fp: 'Projects with staged invoices; purchase orders with automatic re-order levels' },
]

const faqs = [
  {
    question: 'Is Jobber cheaper than FieldPulse?',
    answer:
      'We cannot say, because FieldPulse does not publish prices. Jobber starts at $29 a month billed annually for one user and publishes prices up to 15 users. FieldPulse prices by seat and sells its phone system, AI answering, Pricebook and fleet tracking as optional add-ons, so ask for a written quote that lists every seat and add-on.',
  },
  {
    question: 'Does FieldPulse have a free trial?',
    answer:
      'FieldPulse offers a demo and advertises no free trial. Jobber offers a 14-day trial with Grow features and no credit card.',
  },
  {
    question: 'Can I cancel FieldPulse early?',
    answer:
      'FieldPulse’s Terms of Service say the first term is one year unless your order form says otherwise, that it renews automatically for another year unless you give notice at least 60 days before the term ends, and that you may not cancel before the term ends except for an uncured material breach or a business closure. Jobber says you can cancel at any time, and its annual plans renew unless cancelled 30 days before renewal.',
  },
  {
    question: 'Which is better for equipment and maintenance agreements?',
    answer:
      'FieldPulse. It documents asset records with warranty information, maintenance history and barcode scanning, and maintenance agreements with recurring billing and renewal reminders. Jobber runs agreements as recurring jobs with automatic payments and documents no equipment records.',
  },
  {
    question: 'Do Jobber and FieldPulse work with QuickBooks Desktop?',
    answer:
      'FieldPulse does, for QuickBooks Desktop 2024 or newer on Windows through the QuickBooks Web Connector, set up by its support team; Desktop for Mac is not supported. It also syncs two-way with QuickBooks Online. Jobber syncs with QuickBooks Online and Xero only, from Connect.',
  },
  {
    question: 'Which works better offline?',
    answer:
      'Both document offline work. Jobber’s app keeps timers, notes, checklists and visit completion working offline but not invoicing. FieldPulse switches to offline mode automatically and lets technicians edit forms, notes and photos, then syncs when the connection returns; payments need a connection.',
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
  { name: 'FieldPulse pricing (seat-based, custom quote, premium products)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service (term, renewal, notice, seats)', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-24' },
  { name: 'FieldPulse scheduling software', url: 'https://www.fieldpulse.com/features/service-scheduling-software', checked: '2026-11-24' },
  { name: 'FieldPulse help: route optimization (map-based)', url: 'https://help.fieldpulse.com/scheduling-dispatch/dispatch/route-optimization', checked: '2026-11-24' },
  { name: 'FieldPulse Engage (phone, texting, Operator AI)', url: 'https://www.fieldpulse.com/features/engage', checked: '2026-11-24' },
  { name: 'FieldPulse help: estimate options and add-ons', url: 'https://help.fieldpulse.com/estimates-invoices/options/options-add-ons.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: Pricebook add-on', url: 'https://help.fieldpulse.com/add-ons/sales-suite/pricebook-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: FieldPulse Payments', url: 'https://help.fieldpulse.com/payments/getting-started/fieldpulse-payments.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: consumer financing', url: 'https://help.fieldpulse.com/payments/financing/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Online', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-online/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Desktop', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-desktop/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: maintenance agreements', url: 'https://help.fieldpulse.com/jobs/assets/maintenance-agreements-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-11-11' },
  { name: 'FieldPulse help: offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-11-11' },
  { name: 'FieldPulse help: projects', url: 'https://help.fieldpulse.com/jobs/projects/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: purchase orders', url: 'https://help.fieldpulse.com/inventory-materials/purchase-orders/overview.md', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function JobberVsFieldPulsePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/jobber-vs-fieldpulse"
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
            Jobber vs FieldPulse: <span className="text-orange-400">published prices vs a seat-based quote</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing, trials, contract terms, routing, phones, payments, equipment and QuickBooks, from
            each vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Jobber</strong> publishes its prices, from $29/month billed annually for one user,
            offers a 14-day trial and a no-commitment monthly option, and includes route optimization from
            Connect. <strong>FieldPulse</strong> quotes by seat, offers demos rather than a trial, and its
            terms set a one-year term that renews automatically unless you give 60 days’ notice. In
            return, FieldPulse documents more for equipment-heavy and commercial work: asset records with
            barcode scanning, maintenance agreements, projects with staged invoices, purchase orders and
            QuickBooks Desktop. Choose Jobber for price certainty and flexibility; get a FieldPulse quote if
            you need those records.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Jobber vs FieldPulse at a glance</h2>
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
                  <th scope="col" className="p-3.5">FieldPulse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.jobber}</td>
                    <td className="p-3.5">{r.fp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: published bands vs seat-based quotes</h2>
          <p>
            Jobber prices by plan and team band. Billed annually, Core is $29 for one user, Connect $99,
            Grow $149 and Plus $399 for five users; at 10 users, Connect is $229 and Grow $299. Teams of 16
            or more contact sales. Every band is in our{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> guide.
          </p>
          <p>
            FieldPulse says it is seat-based and that pricing is built around what your team needs. It
            names no plans on its pricing page and lists optional premium products without prices: Engage
            (phone and texting), Operator AI, Chat AI, Pricebook, FieldPulse Payments, FieldPulse Financing,
            Fleet Tracking and Custom Forms. Its terms add two seat rules worth knowing: seats added
            mid-term are billed upfront for the full year, and deactivating a user does not reduce the
            number of seats you pay for.
          </p>

          <h2 id="contracts">Trials and contract terms</h2>
          <p>
            Jobber offers three billing options (annual prepaid, a one-year commitment billed monthly, or
            no commitment at a higher monthly rate) and a 14-day trial with Grow features. Its terms say you
            can cancel at any time and that annual plans renew unless cancelled 30 days before renewal.
          </p>
          <p>
            FieldPulse offers demos and advertises no trial. Its Terms of Service say:
          </p>
          <ul>
            <li>The first term is <strong>one year</strong> unless your order form says otherwise, and it <strong>renews automatically</strong> for another year.</li>
            <li>To stop renewal, give notice at least <strong>60 days</strong> before the term ends, by email to its cancellations address.</li>
            <li>You <strong>may not cancel before the term ends</strong>, except for an uncured material breach or a business closure.</li>
            <li>Fees may rise for a renewal term with 60 days’ written notice; no cap is stated.</li>
            <li>Month-to-month plans need 30 days’ notice and cost up to 50% more than the annual rate.</li>
          </ul>

          <h2 id="scheduling">Scheduling, routing and phones</h2>
          <p>
            Jobber has a drag-and-drop schedule and adds route optimization on Connect. FieldPulse has a
            visual calendar, a live map of technician locations, multi-day jobs and an embedded booking
            portal. Its marketing describes finding the most efficient route, but its help center documents
            a map-based method where you click jobs in the order you want and FieldPulse rewrites the start
            times, so test it in the demo. For phones, FieldPulse sells Engage, a VoIP system with calls,
            texts, call recording and routing, plus Operator AI for answering calls; Jobber has no phone
            system and sells an AI Receptionist for $29 a month (included on Plus).
          </p>

          <h2 id="quotes-payments">Quotes, payments and financing</h2>
          <p>
            Both build quotes on every plan. FieldPulse supports Good, Better, Best options with add-ons
            the customer can tick, and sells a flat-rate Pricebook as an add-on; Jobber adds optional line
            items on Grow and automated follow-ups on Connect. Jobber publishes card fees of 2.9% + 30¢
            online and 2.7% + 30¢ with Tap to Pay, with ACH at 1%. FieldPulse Payments takes card and ACH
            payments for US businesses with fees and a monthly cost it does not publish. For financing,
            Jobber uses Wisetack and FieldPulse offers Wisetack or Acorn Finance. See our{' '}
            <Link href="/guides/field-service-quoting-software" className={A}>quoting</Link> and{' '}
            <Link href="/guides/field-service-invoicing-software" className={A}>invoicing</Link> guides.
          </p>

          <h2 id="equipment">Equipment, agreements and projects</h2>
          <p>
            This is FieldPulse’s clearest advantage. It keeps asset records with warranty information,
            maintenance history and barcode scanning, runs maintenance agreements with recurring billing and
            renewal reminders, groups long jobs into projects with staged invoices, and creates purchase
            orders automatically at a re-order level. FieldPulse does not say which plan includes these, so
            confirm them in the quote. Jobber runs agreements as recurring jobs with automatic payments and
            documents no equipment records or projects.
          </p>

          <h2 id="quickbooks">QuickBooks and offline use</h2>
          <p>
            FieldPulse syncs customers, items, estimates, invoices and payments two-way with QuickBooks
            Online, and supports QuickBooks Desktop 2024 or newer on Windows through the Web Connector,
            which its support team sets up; Desktop for Mac is not supported. It also supports Xero. Jobber
            syncs with QuickBooks Online and Xero from Connect and does not support Desktop. Offline, Jobber
            keeps timers, notes, checklists and visit completion working; FieldPulse lets technicians edit
            forms, notes and photos. Jobber does no invoicing offline, and FieldPulse takes no payments
            offline. See our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo operator or small crew:</strong> Jobber, with published prices, a trial and a no-commitment option.</li>
            <li><strong>Equipment, warranties and maintenance agreements:</strong> FieldPulse.</li>
            <li><strong>QuickBooks Desktop:</strong> FieldPulse (Windows, 2024 or newer); Jobber does not support it.</li>
            <li><strong>Commercial or project work with purchase orders:</strong> FieldPulse.</li>
            <li><strong>Unsure about a one-year commitment:</strong> Jobber, or ask FieldPulse for month-to-month terms in writing.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link>,{' '}
            <Link href="/compare/fieldpulse-alternatives" className={A}>FieldPulse alternatives</Link> and{' '}
            <Link href="/compare/housecall-pro-vs-fieldpulse" className={A}>Housecall Pro vs FieldPulse</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Jobber vs FieldPulse">
            Jobber wins on published prices, a free trial and flexible billing. FieldPulse documents more
            for equipment, agreements, projects and QuickBooks Desktop, but it is quote-only and its terms
            lock you in for a year that renews unless you give 60 days’ notice. Our{' '}
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
