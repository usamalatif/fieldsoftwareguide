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
 * /compare/fieldedge-alternatives: targets "fieldedge alternative(s)", "fieldedge competitors"
 * and "software like field edge".
 *
 * GSC (2026-08-16 to 2026-11-15, site level, no FieldEdge page yet): fieldedge alternative 39
 * impressions at 92.2; fieldedge alternatives 17 at 88.6; fieldedge competitors 2; software like
 * field edge 2.
 *
 * Sources: fieldedge.com pricing, Premier and roadmap pages; the Xplor US SaaS terms that
 * fieldedge.com links as its "Service Agreement" (last updated October 2023); ServiceTitan's help
 * article on exporting FieldEdge data; each alternative's own pricing pages and help centers,
 * checked 2026-11-20 (Housecall Pro from the copy saved 2026-11-19; BuildOps and ServiceTrade
 * 2026-11-19). Successware returned 403 and is not covered. Nothing tested hands-on. We do not
 * claim why customers leave FieldEdge.
 */

const PATH = '/compare/fieldedge-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'FieldEdge Alternatives (2026): Prices, Contracts and QuickBooks Fit'
const DESCRIPTION =
  'FieldEdge publishes no prices and its standard terms renew yearly. See how ServiceTitan, Housecall Pro, Jobber, Service Fusion and others compare.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/fieldedge-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'FieldEdge alternatives', href: PATH },
]

type Row = {
  name: string
  price: string
  trial: string
  quickbooks: string
  pricebook: string
  agreements: string
  contract: string
}

const rows: Row[] = [
  {
    name: 'FieldEdge (for reference)',
    price: 'Not published (“Request Pricing”); varies by team size and add-ons',
    trial: 'No free trial',
    quickbooks: 'QuickBooks Online and Desktop on every plan',
    pricebook: 'Price book and flat-rate pricing on every plan',
    agreements: 'Basic on Select; Advanced (multiple agreements per customer) on Premier and Elite',
    contract: 'Published terms renew for 12 months unless notice is given 60 days ahead',
  },
  {
    name: 'ServiceTitan',
    price: 'Not published; per technician',
    trial: 'Demo',
    quickbooks: 'QuickBooks Desktop and Online, Sage Intacct, Xero',
    pricebook: 'Pricebook on every package; Pricebook Pro add-on',
    agreements: 'Memberships and service agreements',
    contract: 'Typically 12 to 36 months, renewing automatically (10-K)',
  },
  {
    name: 'Housecall Pro',
    price: '$59, $149, $299 per month billed annually (1, 5, 8 users); $79 to $329 month to month',
    trial: '14 days',
    quickbooks: 'QuickBooks Online and Desktop listed on Essentials',
    pricebook: 'Price book on Basic; flat-rate pricing from Essentials',
    agreements: 'Recurring Service Plans on MAX',
    contract: 'No long-term contract required',
  },
  {
    name: 'Jobber',
    price: 'From $29 per month billed annually (1 user); $49 with no commitment',
    trial: '14 days',
    quickbooks: 'QuickBooks Online only, from Connect',
    pricebook: 'Products and services list; no flat-rate price book documented',
    agreements: 'Recurring jobs with automatic payments',
    contract: 'No commitment, 1-year or annual billing',
  },
  {
    name: 'Service Fusion',
    price: '$220, $339, $552 per month billed annually; $259, $399, $649 monthly; unlimited users',
    trial: 'Demo',
    quickbooks: 'QuickBooks Online and Desktop',
    pricebook: 'Not stated per plan',
    agreements: 'Recurring invoicing on Pro, add-on below',
    contract: 'Month to month; 15% off with annual billing',
  },
  {
    name: 'FieldPulse',
    price: 'Not published; seat-based',
    trial: 'No free trial; demo',
    quickbooks: 'QuickBooks Online and Desktop (2024 or newer), two-way',
    pricebook: 'Pricebook is a paid add-on',
    agreements: 'Maintenance agreements on the same dispatch board',
    contract: 'Not stated on the pages we read',
  },
  {
    name: 'Workiz',
    price: 'Not published (“Request pricing”)',
    trial: '7 days, no credit card',
    quickbooks: 'QuickBooks Online sync on every plan; its QuickBooks page says Desktop is also supported',
    pricebook: 'Price book on every plan; flat rate on Ultimate only',
    agreements: 'Service plans on Ultimate only',
    contract: 'Annual plans save “$400+”',
  },
]

const cols: { key: keyof Omit<Row, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price' },
  { key: 'trial', label: 'Trial' },
  { key: 'quickbooks', label: 'QuickBooks' },
  { key: 'pricebook', label: 'Price book / flat rate' },
  { key: 'agreements', label: 'Service agreements' },
  { key: 'contract', label: 'Contract' },
]

const faqs = [
  {
    question: 'How much does FieldEdge cost?',
    answer:
      'FieldEdge does not publish prices. Its pricing page shows “Request Pricing” on the Select, Premier and Elite plans and says pricing varies with the number of technicians or employees and the add-ons you choose.',
  },
  {
    question: 'Does FieldEdge have a free trial?',
    answer:
      'No. FieldEdge’s pricing FAQ says it does not offer a free trial and walks new customers through onboarding instead. Housecall Pro and Jobber offer 14-day free trials, and Workiz a 7-day trial.',
  },
  {
    question: 'Can I cancel a FieldEdge contract early?',
    answer:
      'Check your Order Form first, because it sets the initial term and overrides the standard terms. The standard Xplor terms that FieldEdge links renew for 12-month periods unless either side gives written notice at least 60 days before the term ends, and ending early can trigger a fee equal to the monthly fees for the remaining months.',
  },
  {
    question: 'Which FieldEdge alternatives work with QuickBooks Desktop?',
    answer:
      'ServiceTitan, Service Fusion and FieldPulse document QuickBooks Desktop sync, Housecall Pro lists QuickBooks Online and Desktop on its Essentials plan, and Workiz’s QuickBooks page says it supports Desktop. Jobber syncs with QuickBooks Online only.',
  },
  {
    question: 'How do I export my data from FieldEdge?',
    answer:
      'ServiceTitan’s help center lists five FieldEdge exports: Customers, Dispatching, Invoices, Quotes and the Equipment List, each as a spreadsheet. Set the invoice filters to All before exporting, or you only get the last 6 months. Ask both vendors how to move service agreements, the price book and photos, which that list does not cover.',
  },
  {
    question: 'What is the cheapest FieldEdge alternative with published pricing?',
    answer:
      'Jobber Core is $29 a month billed annually for one user, and Housecall Pro Basic is $59. For a larger team, Service Fusion publishes plans with unlimited users from $220 a month billed annually. Check which plan includes flat-rate pricing, QuickBooks Desktop and service agreements before you compare.',
  },
]

const sources = [
  { name: 'FieldEdge pricing (plans, feature table, FAQ)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-20' },
  { name: 'FieldEdge Premier (advanced dispatch, multiple agreements, multi-option quotes)', url: 'https://fieldedge.com/premier/', checked: '2026-11-20' },
  { name: 'FieldEdge future features (Mobile 2.0 offline mode)', url: 'https://fieldedge.com/future-features/', checked: '2026-11-20' },
  { name: 'FieldEdge scheduling and dispatching', url: 'https://fieldedge.com/field-service-software/scheduling-and-dispatching/', checked: '2026-11-20' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement (October 2023)', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-20' },
  { name: 'ServiceTitan help: export your FieldEdge data', url: 'https://help.servicetitan.com/v1/docs/export-your-fieldedge-data', checked: '2026-11-20' },
  { name: 'ServiceTitan pricing', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-20' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-19' },
  { name: 'ServiceTitan help: field mobile app FAQ (offline)', url: 'https://help.servicetitan.com/faq/servicetitan-field-mobile-app-faq', checked: '2026-11-20' },
  { name: 'ServiceTitan 10-K (contract terms)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-19' },
  { name: 'Housecall Pro pricing (plans, trial, contracts, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-19' },
  { name: 'Jobber help: QuickBooks integration FAQs (Online only)', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: offline use', url: 'https://help.getjobber.com/hc/en-us/articles/360037203234-Troubleshooting-Tips-How-to-Help-Us-Help-You', checked: '2026-11-20' },
  { name: 'Service Fusion pricing (plans, QuickBooks, month to month)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-20' },
  { name: 'Service Fusion blog: implementation and data import (June 2026)', url: 'https://www.servicefusion.com/blog/overview-of-implementation', checked: '2026-11-20' },
  { name: 'FieldPulse pricing (seat-based, no trial, add-ons)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-20' },
  { name: 'FieldPulse help: QuickBooks Desktop pre-sync', url: 'https://help.fieldpulse.com/en/articles/8292219-pre-sync-quickbooks-desktop', checked: '2026-11-20' },
  { name: 'FieldPulse help: offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-11-20' },
  { name: 'FieldPulse help: what data can I import', url: 'https://help.fieldpulse.com/en/articles/8851810-what-data-can-i-import-into-fieldpulse', checked: '2026-11-20' },
  { name: 'Workiz pricing plans (features by plan, trial)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-20' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-20' },
  { name: 'Workiz mobile app (offline)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-20' },
  { name: 'BuildOps pricing', url: 'https://buildops.com/pricing', checked: '2026-11-19' },
  { name: 'ServiceTrade pricing', url: 'https://servicetrade.com/pricing/', checked: '2026-11-19' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function FieldEdgeAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/fieldedge-alternatives"
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
            FieldEdge alternatives: <span className="text-orange-400">prices, contracts and QuickBooks fit</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Six alternatives compared with FieldEdge on published pricing, trials, QuickBooks Desktop,
            flat-rate pricing and contract terms, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            FieldEdge does not publish prices or offer a free trial, and its published terms renew
            for 12-month periods. If you want published prices and a trial, start with{' '}
            <strong>Housecall Pro</strong> (from $59/month billed annually, flat-rate pricing from
            Essentials) or <strong>Jobber</strong> (from $29/month, but QuickBooks Online only).{' '}
            <strong>Service Fusion</strong> publishes unlimited-user plans from $220/month with
            QuickBooks Desktop and month-to-month terms. For a larger shop with dispatchers,{' '}
            <strong>ServiceTitan</strong> is the closest match in scope, priced by quote on contracts its
            annual report says typically run 12 to 36 months. Before you switch, check your Order Form’s end date and export
            all your invoices, not just the last 6 months.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="fieldedge">What FieldEdge offers, plan by plan</h2>
          <p>
            FieldEdge, owned by Xplor, positions itself for multi-truck HVAC, plumbing and electrical
            companies. Its three plans, Select, Premier and Elite, all say “Request Pricing”, and its
            FAQ says pricing depends on team size and add-ons. Every plan includes a price book with
            flat-rate pricing, QuickBooks Online and Desktop, integrated payments, texting and
            reminders. The plans differ in:
          </p>
          <ul>
            <li><strong>Dispatching and agreements:</strong> basic on Select; advanced on Premier and Elite, which FieldEdge says adds multiple dispatch-board filters and multiple maintenance agreements per customer.</li>
            <li><strong>Quotes:</strong> single option on Select; multi-option, up to 5 options, on Premier and Elite.</li>
            <li><strong>Mobile licenses:</strong> 2, 4 and 6 included.</li>
            <li><strong>Support:</strong> chat on Select, email or phone on Premier, and a dedicated customer success representative on Elite.</li>
            <li><strong>Add-ons:</strong> Proposal Pro, MarketingEdge and the customer portal are included on Elite and priced on request below it.</li>
          </ul>
          <p>
            FieldEdge’s roadmap lists offline mode for its Mobile 2.0 app as in rolling development,
            and its 2026 app release notes describe offline support being added in stages. You can
            upgrade at any time, but its FAQ says downgrades happen at the end of the contract period.
          </p>

          <h2 id="contract">FieldEdge contract terms to check before you switch</h2>
          <p>
            FieldEdge’s site links its “Service Agreement” to Xplor’s US software terms, last updated
            October 2023. Under those terms:
          </p>
          <ul>
            <li>Your <strong>Order Form</strong> sets the initial term, and it overrides the standard terms where they conflict.</li>
            <li>After the initial term, the agreement <strong>renews for 12 months</strong> at a time unless either side gives written notice at least <strong>60 days</strong> before the term ends.</li>
            <li>Ending early can trigger an <strong>early termination fee</strong> equal to the monthly fees times the months remaining.</li>
            <li>Xplor can raise fees with two months’ notice; if the increase is above CPI, you can terminate without penalty by written notice within 10 days.</li>
            <li>On termination, access ends, and Xplor returns or deletes your personal data on request “to the extent reasonably practical”.</li>
          </ul>
          <p>
            Put your renewal date in the calendar at least 60 days ahead, and export your data before
            access ends.
          </p>

          <h2 id="when-to-stay">When FieldEdge may still be the better fit</h2>
          <p>
            FieldEdge includes flat-rate pricing and QuickBooks Desktop on every plan, which several
            alternatives gate or do not offer. Its Elite plan adds warehouse inventory for shops on
            QuickBooks Desktop Enterprise with Advanced Inventory. If your office depends on QuickBooks
            Desktop and a flat-rate price book, compare carefully before moving.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>FieldEdge alternatives compared</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Prices
            are USD standard rates. Sources and check dates are at the end of this page.
          </p>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 lg:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3">Software</th>
                  {cols.map((c) => <th key={c.key} scope="col" className="p-3">{c.label}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((t) => (
                  <tr key={t.name} className="align-top">
                    <th scope="row" className="p-3 font-semibold text-slate-900 dark:text-white">{t.name}</th>
                    {cols.map((c) => <td key={c.key} className="p-3">{t[c.key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3.5 lg:hidden">
            {rows.map((t) => (
              <article key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{t.name}</h3>
                <dl className="mt-2 space-y-2 text-[14px] leading-[1.55]">
                  {cols.map((c) => (
                    <div key={c.key}>
                      <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">{c.label}</dt>
                      <dd className="text-slate-700 dark:text-slate-300">{t[c.key]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="alternatives">The alternatives</h2>

          <h3>ServiceTitan</h3>
          <p>
            <strong>Best fit:</strong> larger residential and commercial shops with dispatchers and a
            call center. ServiceTitan prices per technician by quote, lists its Pricebook on every
            package, and makes accounting integrations with QuickBooks Desktop and Online, Sage
            Intacct and Xero available to all customers. Its mobile app lets techs take most job
            actions offline, though dynamic pricing does not show offline. It also documents importing
            FieldEdge exports during onboarding.{' '}
            <strong>Limitation:</strong> its annual report says contracts typically run 12 to 36 months
            and renew automatically, so contract terms are not an escape from FieldEdge’s. See{' '}
            <Link href="/compare/servicetitan-vs-jobber" className={A}>ServiceTitan vs Jobber</Link>.
          </p>

          <h3>Housecall Pro</h3>
          <p>
            <strong>Best fit:</strong> small and mid-size residential shops that want published prices
            and no long-term contract. Basic is $59/month billed annually for one user, Essentials $149
            for five and MAX $299 for eight, with a 14-day trial of MAX features. A price book is on
            Basic, flat-rate pricing on Essentials, and its pricing-page plan data lists QuickBooks
            Online and Desktop on Essentials.{' '}
            <strong>Limitation:</strong> Recurring Service Plans need MAX, and its app documents offline
            viewing only. See <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>{' '}
            and <Link href="/compare/housecall-pro-vs-servicetitan" className={A}>Housecall Pro vs ServiceTitan</Link>.
          </p>

          <h3>Jobber</h3>
          <p>
            <strong>Best fit:</strong> smaller crews that want the lowest published entry price. Core
            is $29/month billed annually for one user, with a 14-day trial, and the mobile app keeps
            timers, forms, notes and attachments working offline.{' '}
            <strong>Limitation:</strong> Jobber syncs with QuickBooks Online only, starting on Connect,
            and documents no flat-rate price book, so it is a weak match for a FieldEdge shop on
            QuickBooks Desktop. See <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>Best fit:</strong> growing teams that want unlimited users on a published price and
            QuickBooks Desktop. Plans are $220, $339 and $552 a month billed annually, or $259, $399
            and $649 month to month, and Service Fusion says all plans are available month to month.
            It offers import templates for customers, locations, service agreements, estimates, jobs
            and equipment, and says data extraction services are available.{' '}
            <strong>Limitation:</strong> recurring invoicing for agreements is included only on Pro,
            and offline behavior is not documented on the pages we read.
          </p>

          <h3>FieldPulse</h3>
          <p>
            <strong>Best fit:</strong> teams that need offline mobile work and QuickBooks Desktop. Its
            app switches to offline mode on its own and caches jobs for a week, and it syncs two ways
            with QuickBooks Online or Desktop 2024 and newer.{' '}
            <strong>Limitation:</strong> no published prices or trial, the Pricebook is a paid add-on,
            and offline you cannot create customers or take payments. See our{' '}
            <Link href="/compare/fieldpulse-alternatives" className={A}>FieldPulse alternatives</Link> page.
          </p>

          <h3>Workiz</h3>
          <p>
            <strong>Best fit:</strong> teams that want a short trial and built-in calls. Workiz offers a
            7-day trial with no credit card and lets techs update jobs offline.{' '}
            <strong>Limitation:</strong> prices are not published, and flat rate, service plans and
            equipment tracking are on Ultimate only.
          </p>

          <h3>For commercial work: BuildOps and ServiceTrade</h3>
          <p>
            If most of your work is commercial, BuildOps prices by field and office users and says
            most businesses go live in 8 to 12 weeks, and ServiceTrade prices by technician with
            office users free. Both quote prices on request. See our{' '}
            <Link href="/guides/commercial-hvac-software" className={A}>commercial HVAC software</Link> guide.
          </p>

          <h2 id="quickbooks-desktop">If you rely on QuickBooks Desktop</h2>
          <p>
            FieldEdge includes QuickBooks Online and Desktop on every plan. Among the alternatives,
            ServiceTitan, Service Fusion and FieldPulse document Desktop sync, Housecall Pro lists it
            on Essentials, and Workiz’s QuickBooks page says it supports Desktop. Jobber is QuickBooks
            Online only. Our <Link href="/quickbooks" className={A}>QuickBooks guide</Link> covers each
            tool’s requirements.
          </p>

          <h2 id="migration">Moving your data out of FieldEdge</h2>
          <p>
            We found no FieldEdge-published export guide. ServiceTitan’s help center, which documents
            FieldEdge migrations, lists five exports from FieldEdge’s screens: Customers,
            Dispatching, Invoices and Quotes from their tabs, and the Equipment List from Reports.
            Set every invoice filter to All first, or you only export the last 6 months, and run large
            accounts in one-year batches if a report errors. That list does not cover service
            agreements, the price book, payment history or photos, so ask both vendors how those move.
            FieldPulse, for example, says files and images are generally not imported.
          </p>

          <h2 id="switching-checklist">Before you switch: a checklist</h2>
          <ol>
            <li>Find your Order Form’s term end date and send written notice at least 60 days before it.</li>
            <li>Export customers, dispatching, invoices (filters set to All), quotes and equipment.</li>
            <li>Save copies of service agreements, the price book and photos separately.</li>
            <li>Confirm the new tool’s plan includes flat rate, agreements and the QuickBooks version you use.</li>
            <li>Get the new vendor’s price, contract length and renewal terms in writing.</li>
          </ol>
          <p>
            For HVAC dispatch features by plan, see our{' '}
            <Link href="/guides/hvac-dispatch-software" className={A}>HVAC dispatch software</Link> guide,
            and for list prices across tools, our{' '}
            <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on FieldEdge alternatives">
            Housecall Pro and Jobber are the published-price options with free trials, but only
            Housecall Pro lists QuickBooks Desktop. Service Fusion adds unlimited users and month-to-month
            terms, and ServiceTitan is the closest match for larger shops, on 12- to 36-month contracts.
            Time the switch around your FieldEdge renewal date. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only
            prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/by-industry/hvac" className="text-orange-600 hover:text-orange-800">HVAC software guide →</Link>
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
