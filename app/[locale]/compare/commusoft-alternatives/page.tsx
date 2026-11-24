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
 * /compare/commusoft-alternatives: targets "commusoft alternatives" and "commusoft competitors".
 * No GSC data for this topic yet.
 *
 * Commusoft facts come from its US site (commusoft.com/en-us), checked 2026-11-24: plans page,
 * standard customer terms linked from the US site, feature, integrations, onboarding and FAQ pages.
 * Not used: tier names (US and UK pages disagree), QuickBooks Desktop (only one US landing page
 * claims it; the integrations directory lists Online only), the Analytics+ add-on (marked both
 * "add-on" and "coming soon"), the early-termination clause 12.6 (wording not captured cleanly),
 * Commusoft's self-reported rating and its claims about other vendors. Alternatives reuse the
 * site's verified pages (2026-11-17 to 11-21). Nothing tested hands-on. We do not claim why
 * customers leave Commusoft.
 */

const PATH = '/compare/commusoft-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Commusoft Alternatives (2026): Prices, Contracts and Maintenance'
const DESCRIPTION =
  'Commusoft publishes no prices and its terms start with a 12-month period. Compare 7 alternatives on price, contracts, maintenance plans, assets and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/commusoft-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Commusoft alternatives', href: PATH },
]

type Row = {
  name: string
  price: string
  contract: string
  maintenance: string
  assets: string
  accounting: string
}

const rows: Row[] = [
  {
    name: 'Commusoft (for reference)',
    price: 'Not published; a licence for every office user and technician; says it is designed for 6 or more staff',
    contract: '12-month initial period, then 30 days’ written notice; free trial advertised, length not stated',
    maintenance: 'PPM schedules that generate jobs when due; SLA clocks; contract billing',
    assets: 'Asset history with barcode or QR code lookup',
    accounting: 'QuickBooks Online and Xero listed',
  },
  {
    name: 'ServiceTitan',
    price: 'Not published (“Get Pricing”); packages Core, Demand AI, Field AI, MAX',
    contract: 'Order Form sets the term; leaving early costs all remaining payments; demo only',
    maintenance: 'Customizable memberships in Core',
    assets: 'Installed Equipment records',
    accounting: 'QuickBooks Online and Desktop, Sage Intacct, Xero',
  },
  {
    name: 'FieldEdge',
    price: 'Not published (“Request Pricing”); no free trial',
    contract: 'Published terms renew yearly with 60 days’ notice',
    maintenance: 'Basic agreements on Select; multiple agreements per customer on Premier and Elite',
    assets: 'Equipment list (exportable)',
    accounting: 'QuickBooks Online and Desktop on every plan',
  },
  {
    name: 'FieldPulse',
    price: 'Not published; seat-based',
    contract: 'One-year term that renews automatically; 60 days’ notice; demo only',
    maintenance: 'Maintenance agreements on the dispatch board',
    assets: 'Asset Management with warranty info, maintenance history and barcode scanning',
    accounting: 'QuickBooks Online and Desktop 2024 or newer',
  },
  {
    name: 'Service Fusion',
    price: '$220, $339, $552 per month billed annually; unlimited users',
    contract: 'Month to month; 15% off annual',
    maintenance: 'Recurring invoicing on Pro, add-on below',
    assets: 'Not compared here',
    accounting: 'QuickBooks Online and Desktop',
  },
  {
    name: 'Housecall Pro',
    price: '$59, $149, $299 per month billed annually (1, 5, 8 users)',
    contract: 'No long-term contract required; 14-day trial',
    maintenance: 'Recurring Service Plans on MAX',
    assets: 'Customer equipment tracking listed on Essentials',
    accounting: 'QuickBooks Online and Desktop listed on Essentials',
  },
  {
    name: 'Jobber',
    price: 'From $29 per month billed annually (1 user); 15 users up to $529 on Plus',
    contract: 'No-commitment, 1-year or annual billing; 14-day trial',
    maintenance: 'Recurring jobs with automatic payments',
    assets: 'No built-in equipment records documented',
    accounting: 'QuickBooks Online and Xero; no Desktop',
  },
  {
    name: 'Workiz',
    price: 'Not published (“Request pricing”); 7-day trial',
    contract: '12-month term renewing yearly with 30 days’ notice; up to 10% yearly increase',
    maintenance: 'Service plans on Ultimate only',
    assets: 'Equipment tracking on Ultimate only',
    accounting: 'QuickBooks Online on every plan; its QuickBooks page says Desktop is supported',
  },
]

const cols: { key: keyof Omit<Row, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price' },
  { key: 'contract', label: 'Contract and trial' },
  { key: 'maintenance', label: 'Maintenance contracts' },
  { key: 'assets', label: 'Asset records' },
  { key: 'accounting', label: 'Accounting' },
]

const faqs = [
  {
    question: 'How much does Commusoft cost?',
    answer:
      'Commusoft does not publish prices in any currency. Its plans page says every office user, manager and technician needs a licence, offers contracted licences on a 12-month price lock plus monthly rolling and daily licences, and its FAQ says to speak to its team for pricing.',
  },
  {
    question: 'What are Commusoft’s contract terms?',
    answer:
      'The standard customer terms linked from its US site start with a 12-month initial period, after which the agreement continues until either side gives at least 30 days’ written notice. Its plans page says contracted licences renew annually, so check your own order. The terms allow a yearly fee increase of up to 10% with 30 days’ notice, invoice monthly in advance with payment due in 7 days, and are with Commusoft Ltd under English law.',
  },
  {
    question: 'Is Commusoft right for a small team?',
    answer:
      'Commusoft says it is designed for businesses with 6 or more staff. For a solo operator or a crew of up to five, Jobber (from $29 a month billed annually) and Housecall Pro (from $59) publish prices and offer 14-day trials.',
  },
  {
    question: 'Which Commusoft alternatives handle planned maintenance contracts?',
    answer:
      'ServiceTitan includes customizable memberships in Core, FieldEdge supports multiple agreements per customer on Premier and Elite, FieldPulse runs maintenance agreements on its dispatch board, and Housecall Pro lists Recurring Service Plans on MAX. Workiz puts service plans on Ultimate only, and Jobber runs agreements as recurring jobs.',
  },
  {
    question: 'Does Commusoft work with QuickBooks Desktop?',
    answer:
      'Its integrations directory lists QuickBooks Online and Xero, and its QuickBooks Online page describes sending customers, invoices, payments and supplier records to QuickBooks. Only one US landing page mentions Desktop, so confirm it in writing. FieldEdge, ServiceTitan, FieldPulse, Service Fusion and Housecall Pro (Essentials) document QuickBooks Desktop.',
  },
  {
    question: 'Who owns my data if I leave Commusoft?',
    answer:
      'Commusoft’s terms say customer data remains your exclusive property and that it may, at its discretion, help with a hand-over to a third party at its standard rates. The terms do not state an export format or a deletion timeline, so ask for both before you give notice.',
  },
]

const sources = [
  { name: 'Commusoft plans (licence types, 6+ staff, free trial CTA)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-24' },
  { name: 'Commusoft standard customer terms (US site link)', url: 'https://www.commusoft.com/en-us/company/terms-conditions/', checked: '2026-11-24' },
  { name: 'Commusoft FAQs (pricing, US team, offline)', url: 'https://www.commusoft.com/en-us/faqs/', checked: '2026-11-24' },
  { name: 'Commusoft onboarding and implementation', url: 'https://www.commusoft.com/en-us/onboarding-implementation/', checked: '2026-11-24' },
  { name: 'Commusoft industries (US)', url: 'https://www.commusoft.com/en-us/industries/', checked: '2026-11-24' },
  { name: 'Commusoft job scheduling', url: 'https://www.commusoft.com/en-us/features/job-scheduling-software/', checked: '2026-11-24' },
  { name: 'Commusoft service contract management (PPM)', url: 'https://www.commusoft.com/en-us/features/service-contract-management-software/', checked: '2026-11-24' },
  { name: 'Commusoft asset maintenance (barcode, QR)', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-11-24' },
  { name: 'Commusoft mobile workforce app (offline, Fleet+)', url: 'https://www.commusoft.com/en-us/features/mobile-workforce-management-software/', checked: '2026-11-24' },
  { name: 'Commusoft estimating and quoting (Sales+)', url: 'https://www.commusoft.com/en-us/features/estimating-and-quoting-software/', checked: '2026-11-24' },
  { name: 'Commusoft customer portal', url: 'https://www.commusoft.com/en-us/features/customer-portal/', checked: '2026-11-24' },
  { name: 'Commusoft inventory management', url: 'https://www.commusoft.com/en-us/features/inventory-management/', checked: '2026-11-24' },
  { name: 'Commusoft integrations', url: 'https://www.commusoft.com/en-us/integrations/', checked: '2026-11-24' },
  { name: 'Commusoft QuickBooks Online integration', url: 'https://www.commusoft.com/en-us/integrations/quickbook-online/', checked: '2026-11-24' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-21' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-21' },
  { name: 'ServiceTitan help: installed equipment', url: 'https://help.servicetitan.com/docs/track-manage-installed-equipment', checked: '2026-11-23' },
  { name: 'FieldEdge pricing (plans, feature table, FAQ)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-20' },
  { name: 'FieldEdge Premier (multiple agreements)', url: 'https://fieldedge.com/premier/', checked: '2026-11-20' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-20' },
  { name: 'ServiceTitan help: export your FieldEdge data (equipment list)', url: 'https://help.servicetitan.com/v1/docs/export-your-fieldedge-data', checked: '2026-11-20' },
  { name: 'FieldPulse pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service (term, renewal, notice)', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-24' },
  { name: 'FieldPulse asset management', url: 'https://www.fieldpulse.com/features/asset-management', checked: '2026-11-11' },
  { name: 'FieldPulse help: QuickBooks Desktop pre-sync', url: 'https://help.fieldpulse.com/en/articles/8292219-pre-sync-quickbooks-desktop', checked: '2026-11-20' },
  { name: 'FieldPulse help: ServiceTitan to FieldPulse migration guide (maintenance agreements)', url: 'https://help.fieldpulse.com/en/articles/15170775-servicetitan-to-fieldpulse-migration-guide', checked: '2026-11-21' },
  { name: 'Service Fusion pricing', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-20' },
  { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Jobber pricing (plans, bands, billing options, trial)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Workiz pricing plans (features by plan, trial)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
  { name: 'Workiz Terms of Service v1.9 (last updated November 2, 2026)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-21' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-21' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function CommusoftAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/commusoft-alternatives"
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
            Commusoft alternatives: <span className="text-orange-400">prices, contracts and maintenance fit</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Seven alternatives compared with Commusoft on published pricing, contract terms, planned
            maintenance, asset records and accounting, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Commusoft publishes no prices, licenses every office user and technician, says it is designed
            for teams of 6 or more, and its standard terms start with a 12-month period. The closest
            matches for planned maintenance and asset records are <strong>ServiceTitan</strong>,{' '}
            <strong>FieldEdge</strong> and <strong>FieldPulse</strong>, all quote-only. If you want
            published prices, <strong>Service Fusion</strong> lists unlimited users from $220 a month
            billed annually on month-to-month terms, and <strong>Housecall Pro</strong> starts at $59 with
            Recurring Service Plans on its $299 MAX plan. <strong>Jobber</strong> (from $29) suits smaller
            crews but has no equipment records. Check your Commusoft notice period before you switch.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="commusoft">What Commusoft offers and how it sells</h2>
          <p>
            Commusoft is a UK-founded platform with a US team in Chicago. Its US site lists ten industries,
            led by generator installers, HVAC, building maintenance, plumbing and electrical, and a pop-up
            on its plans page says it is designed for businesses with 6 or more staff. Its core product,
            Commusoft Jobs, covers drag-and-drop dispatching with suggested technicians, PPM schedules
            that create jobs automatically when they fall due, SLA clocks, asset histories with barcode or
            QR lookup, an offline mobile app, a customer portal, inventory across warehouses and vans with
            automatic purchase orders, and job costing. Vehicle tracking is a separate product, Fleet+,
            and its quoting page ties multi-option quotes to Sales+. A trainer and onboarding sessions are
            listed as included; no onboarding fee is stated either way.
          </p>
          <p>
            Pricing is per licence. Every office user, manager and technician needs one, there is no stated
            user limit, and you can mix contracted licences (price locked for 12 months), monthly rolling
            licences for seasonal staff and daily licences for subcontractors. No prices are published.
          </p>

          <h2 id="contract">Commusoft contract terms to check before you switch</h2>
          <p>The standard customer terms linked from its US site say:</p>
          <ul>
            <li>The agreement is with <strong>Commusoft Ltd</strong> and governed by <strong>English law</strong>.</li>
            <li>It starts with a <strong>12-month initial period</strong>, then continues until either side gives at least <strong>30 days’ written notice</strong>, which cannot end before the first 12 months are over. Its plans page says contracted licences renew annually, so check what your own order says.</li>
            <li>Fees can rise once a year by up to <strong>10%</strong> with 30 days’ notice. Adding users or modules increases the fee pro rata; the terms say nothing about reducing users.</li>
            <li>Invoices go out <strong>monthly in advance</strong> and are due within 7 days.</li>
            <li>Your data stays <strong>your property</strong>, and Commusoft may help with a hand-over to another provider at its standard rates. No export format or deletion timeline is stated.</li>
          </ul>

          <h2 id="when-to-stay">When Commusoft may still be the better fit</h2>
          <p>
            Commusoft documents PPM job generation, SLA clocks, multi-asset sites with barcodes and
            van-level stock with automatic purchase orders in one product, and offers daily licences for
            subcontractors, which few alternatives here do. If you run maintenance contracts across many
            commercial sites, compare carefully before you leave.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Commusoft alternatives compared</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Prices are
            USD standard rates. Sources and check dates are at the end of this page.
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
            <strong>Best fit:</strong> larger residential HVAC, plumbing and electrical shops that sell
            memberships. Core includes memberships, a pricebook, dispatching, payroll and commissions, it
            keeps Installed Equipment records, and it integrates with QuickBooks Online and Desktop, Sage
            Intacct and Xero. <strong>Limitation:</strong> demo only, no published prices, and its Terms of
            Use charge all remaining payments if you leave before the term ends. See{' '}
            <Link href="/compare/servicetitan-alternatives" className={A}>ServiceTitan alternatives</Link>.
          </p>

          <h3>FieldEdge</h3>
          <p>
            <strong>Best fit:</strong> HVAC, plumbing and electrical shops that want agreements, flat rate
            and QuickBooks Online and Desktop on every plan, with multiple agreements per customer on
            Premier and Elite. <strong>Limitation:</strong> no published prices or free trial, and its
            published terms renew for 12 months unless you give 60 days’ notice. See{' '}
            <Link href="/compare/fieldedge-alternatives" className={A}>FieldEdge alternatives</Link>.
          </p>

          <h3>FieldPulse</h3>
          <p>
            <strong>Best fit:</strong> commercial and residential teams that want asset records with
            warranty information, maintenance history and barcode scanning, maintenance agreements on the
            dispatch board, offline mobile work and QuickBooks Desktop 2024 or newer.{' '}
            <strong>Limitation:</strong> no published prices or free trial, and its terms renew yearly
            unless you give 60 days’ notice. See{' '}
            <Link href="/compare/fieldpulse-alternatives" className={A}>FieldPulse alternatives</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>Best fit:</strong> teams of 6 or more that want one published price with unlimited
            users. Plans are $220, $339 and $552 a month billed annually, month to month is available, and
            it supports QuickBooks Online and Desktop. <strong>Limitation:</strong> recurring invoicing
            for agreements is included only on Pro, and we have not compared its asset features.
          </p>

          <h3>Housecall Pro</h3>
          <p>
            <strong>Best fit:</strong> residential teams up to about 10 users that want published prices,
            a 14-day trial and no long-term contract. Its plan data lists customer equipment tracking and
            QuickBooks Online and Desktop on Essentials ($149 a month billed annually for five users), and
            Recurring Service Plans on MAX ($299 for eight users). <strong>Limitation:</strong> offline
            mode is view only, and it does not document PPM-style contract scheduling across multi-asset
            sites. See <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>Jobber</h3>
          <p>
            <strong>Best fit:</strong> smaller crews, including those below Commusoft’s 6-staff mark.
            Plans start at $29 a month billed annually for one user, with a no-commitment option and a
            14-day trial. <strong>Limitation:</strong> QuickBooks Online and Xero only, and no membership
            module or equipment records documented. See{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>Workiz</h3>
          <p>
            <strong>Best fit:</strong> call-driven residential teams that want a phone system and a 7-day
            trial. <strong>Limitation:</strong> no published prices, service plans and equipment tracking
            are on Ultimate only, and its standard terms run 12 months, renewing yearly with up to a 10%
            yearly increase allowed. See{' '}
            <Link href="/compare/workiz-alternatives" className={A}>Workiz alternatives</Link>.
          </p>

          <h2 id="switching-checklist">Before you switch: a checklist</h2>
          <ol>
            <li>Find your start date and confirm whether your order renews annually or runs on 30 days’ notice after the first 12 months.</li>
            <li>Ask Commusoft in writing how it will export customers, sites, assets, contracts and job history, and what any hand-over help costs.</li>
            <li>List your PPM contracts, SLA clocks and multi-asset sites, and check the new tool can hold them.</li>
            <li>Confirm the new tool supports your accounting package (QuickBooks Online, Desktop or Xero).</li>
            <li>Get the new vendor’s price, contract length and renewal terms in writing.</li>
          </ol>
          <p>
            For list prices across tools, see our{' '}
            <Link href="/pricing" className={A}>field service software pricing</Link> guide, and for
            maintenance contracts, our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Commusoft alternatives">
            ServiceTitan, FieldEdge and FieldPulse are the closest matches for maintenance contracts and
            asset records, all by quote. Service Fusion is the published-price option for larger teams,
            and Housecall Pro and Jobber suit smaller crews. Time any switch to your Commusoft notice
            period. Our <Link href="/how-we-review" className={A}>review method</Link> explains why we show
            only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
            <Link href="/quickbooks" className="text-orange-600 hover:text-orange-800">QuickBooks compatibility →</Link>
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
