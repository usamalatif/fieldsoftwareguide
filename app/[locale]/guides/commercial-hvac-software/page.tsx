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
 * /guides/commercial-hvac-software: targets "commercial hvac software", "commercial hvac field
 * service software", "commercial hvac service software".
 *
 * GSC (2026-08-16 to 2026-11-15, site level): commercial hvac field service software 199
 * impressions at 88.3; commercial hvac service software 133 at 87.9; commercial hvac software 47
 * at 89.3.
 *
 * Scope vs /by-industry/hvac: that page picks an HVAC platform for any shop, mostly by price and
 * team size. This page is for contractors serving commercial accounts: multi-site customers, PM
 * agreements, deficiency quotes, purchase orders, portals, progress billing, facility-management
 * platforms and contract terms. It is not about in-house maintenance software (CMMS).
 *
 * Sources: each vendor's own site, pricing page and help center, checked 2026-11-19; ServiceTitan's
 * Form 10-K for contract terms. Only Housecall Pro and Jobber publish prices. Simpro was left out
 * because its site could not be read; FieldEdge because it publishes no commercial-specific page.
 * No estimates, ratings or hands-on claims.
 */

const PATH = '/guides/commercial-hvac-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Commercial HVAC Software (2026): 7 Tools Compared'
const DESCRIPTION =
  'Compare 7 commercial HVAC service tools on multi-site accounts, PM agreements, deficiency quotes, progress billing, ServiceChannel and contract terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/commercial-hvac-software',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Commercial HVAC software', href: PATH },
]

type Tool = {
  name: string
  builtFor: string
  sites: string
  pm: string
  quotes: string
  billing: string
  accounting: string
  price: string
}

const tools: Tool[] = [
  {
    name: 'ServiceTitan',
    builtFor: 'Commercial and residential, with separate commercial solutions',
    sites: 'One customer account with multiple locations, each holding its own jobs, equipment and history; model and serial number scanning',
    pm: 'Service agreements; commercial customers see Contracts in the customer portal',
    quotes: 'Equipment Findings turns problems found on maintenance visits into pull-through work',
    billing: 'Application for Payment and Continuation Sheet (schedule of values) for progress billing; needs account configuration',
    accounting: 'QuickBooks Desktop and Online, Sage Intacct, Xero, CSV export',
    price: 'Quote per technician; 10-K: terms typically 12 to 36 months',
  },
  {
    name: 'BuildOps',
    builtFor: 'Commercial only: “Built for commercial mechanical”',
    sites: 'Accounts link to properties, properties to assets, and each asset carries its service history',
    pm: 'Auto-generates recurring visits from agreements; tracks contract margin and upcoming renewals',
    quotes: 'Turns deficiency findings into quoted work; techs create purchase orders from the field',
    billing: 'Quoted, time and materials, unit price or progress billing',
    accounting: 'Viewpoint Vista, Viewpoint Spectrum, Sage Intacct, NetSuite, QuickBooks',
    price: 'Quote by field and office users; subcontractors need no license; implementation included',
  },
  {
    name: 'ServiceTrade',
    builtFor: 'Commercial only: “not residential contractors”',
    sites: 'Asset service history; multi-brand and multi-region operations on Enterprise',
    pm: 'Planned maintenance, recurring visits and contract work',
    quotes: 'Deficiency capture and online quotes from Select; PO management',
    billing: 'Project tracking for installs and retrofits; progress billing not confirmed on current pages',
    accounting: 'Sage Intacct, QuickBooks, Viewpoint Vista, Acumatica and others',
    price: 'Quote by technician count; office users are free; Select, Premium and Enterprise suites',
  },
  {
    name: 'Commusoft',
    builtFor: 'Commercial HVAC (US site)',
    sites: 'Parent companies with multiple service locations; one master contract applied across sites with their own assets',
    pm: 'Auto-generates recurring work orders and inspection visits; different frequencies per asset; SLA clocks',
    quotes: 'On-site defect logs become repair and replacement quotes; purchase orders to suppliers',
    billing: 'Automated recurring contract billing; multi-stage invoicing for installation projects',
    accounting: 'QuickBooks Online, Sage Accounting, Xero',
    price: 'No US prices published; contracted licenses for 12 months, renewing annually; every office user and tech needs a license',
  },
  {
    name: 'Fieldpoint',
    builtFor: 'Commercial contractors',
    sites: 'Not stated on the pages checked',
    pm: 'Creates work orders automatically from service agreements',
    quotes: 'Purchase orders through to final invoice',
    billing: 'Multi-stage progress billing, including AIA billing',
    accounting: 'NetSuite, Microsoft Dynamics, CMiC, QuickBooks',
    price: 'No pricing page',
  },
  {
    name: 'Housecall Pro',
    builtFor: 'Home service businesses, with a commercial services page',
    sites: 'Multiple addresses per customer; sub-customers to bill a different party or location',
    pm: 'Service agreements with unit history; Recurring Service Plans included on Max',
    quotes: 'Not documented for commercial deficiencies',
    billing: 'Progress billing',
    accounting: 'QuickBooks Online or Desktop',
    price: 'Published: $59, $149, $299 per month billed annually (1, 5, 8 users); no long-term contract',
  },
  {
    name: 'Jobber',
    builtFor: 'Home service businesses',
    sites: 'One client can have multiple properties, each with its own contacts (such as a property manager)',
    pm: 'Recurring jobs with repeating visits',
    quotes: 'Not documented for commercial deficiencies',
    billing: 'Payment schedules and progress invoicing on all plans',
    accounting: 'QuickBooks Online and Xero from Connect',
    price: 'Published: from $29 per month (1 user) billed annually, team bands to 15 users; no-commitment monthly option',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'builtFor', label: 'Built for' },
  { key: 'sites', label: 'Multi-site and assets' },
  { key: 'pm', label: 'PM agreements' },
  { key: 'quotes', label: 'Deficiencies and POs' },
  { key: 'billing', label: 'Project and contract billing' },
  { key: 'accounting', label: 'Accounting' },
  { key: 'price', label: 'Pricing and terms' },
]

const buyers: { who: string; pick: string; why: string }[] = [
  {
    who: 'Residential shop adding a few commercial accounts',
    pick: 'Housecall Pro or Jobber',
    why: 'Published prices and month-to-month options. Both handle multiple service addresses per customer and progress invoicing; Housecall Pro also documents sub-customer billing and a commercial customer portal.',
  },
  {
    who: 'Commercial service and PM contracts, little project work',
    pick: 'ServiceTrade or Commusoft',
    why: 'Both are built around commercial service: ServiceTrade with deficiency capture and quotes from its entry suite, Commusoft with master contracts across sites and SLA clocks. Both are quote only; Commusoft licenses run 12 months.',
  },
  {
    who: 'Service plus installs and retrofits with progress billing',
    pick: 'BuildOps, ServiceTitan or Fieldpoint',
    why: 'Each documents progress billing; Fieldpoint names AIA billing, and ServiceTitan documents applications for payment with a schedule of values. Ask each for the accounting or ERP integration you run.',
  },
  {
    who: 'Work orders arrive through ServiceChannel',
    pick: 'ServiceTitan or BuildOps',
    why: 'ServiceTitan documents a ServiceChannel integration that can pass NTE values to the job; BuildOps says ServiceChannel syncs work orders both ways.',
  },
]

const faqs = [
  {
    question: 'What is the best commercial HVAC software?',
    answer:
      'For contractors whose work is mostly commercial service, the tools built for it are BuildOps, ServiceTrade and Commusoft, with ServiceTitan covering both commercial and residential. Fieldpoint targets commercial contractors with project billing. Housecall Pro and Jobber are residential-first but can handle a few commercial accounts at published prices. None of the commercial-first vendors publishes a price.',
  },
  {
    question: 'How is commercial HVAC software different from residential?',
    answer:
      'Commercial accounts usually mean one customer with many sites and many assets, preventive maintenance agreements that generate visits on a schedule, deficiencies found on PM visits that need quotes, purchase orders, a portal for facility managers, progress billing on installs, and sometimes work orders that arrive through a facility-management platform such as ServiceChannel.',
  },
  {
    question: 'How much does commercial HVAC software cost?',
    answer:
      'ServiceTitan, BuildOps, ServiceTrade and Commusoft price by quote, and Fieldpoint has no pricing page. They price by technicians or users: ServiceTrade counts technicians and keeps office users free, BuildOps counts field and office users, and Commusoft licenses every office user and technician. Housecall Pro and Jobber publish prices, from $59 and $29 per month for one user billed annually.',
  },
  {
    question: 'Which commercial HVAC software integrates with ServiceChannel?',
    answer:
      'ServiceTitan documents a ServiceChannel integration, managed through its WorkConnect product, that can send NTE (not-to-exceed) values from ServiceChannel work orders to the ServiceTitan job. BuildOps says ServiceChannel syncs work orders both ways. We did not find a documented ServiceChannel integration on the other vendors’ pages.',
  },
  {
    question: 'Is commercial HVAC software the same as a CMMS?',
    answer:
      'No. Contractor software runs your own service business: quoting, dispatch, agreements and invoicing for customers’ buildings. A CMMS (computerized maintenance management system) is used by a building owner’s in-house maintenance team to manage its own equipment. If you are the contractor, compare the tools on this page.',
  },
  {
    question: 'How long does it take to implement commercial HVAC software?',
    answer:
      'BuildOps says most businesses are up and running in 8 to 12 weeks and includes implementation with every plan. ServiceTitan’s 10-K says onboarding and training fees are generally invoiced separately. Commusoft’s standard licenses run on a 12-month contract. Ask every vendor for the timeline, the onboarding fee and the contract term in writing.',
  },
]

const sources = [
  { name: 'ServiceTitan commercial contractor software', url: 'https://www.servicetitan.com/market/commercial-contractor-software', checked: '2026-11-19' },
  { name: 'ServiceTitan pricing (per-technician, request pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-19' },
  { name: 'ServiceTitan help: customer record and locations', url: 'https://help.servicetitan.com/docs/how-do-you-separate-locations-under-the-same-billing-profile', checked: '2026-11-19' },
  { name: 'ServiceTitan help: customer portal (Contracts for commercial customers)', url: 'https://help.servicetitan.com/docs/customer-portal-overview', checked: '2026-11-19' },
  { name: 'ServiceTitan help: application for payment and continuation sheet', url: 'https://help.servicetitan.com/docs/complete-application-for-payment-and-continuation-sheet', checked: '2026-11-19' },
  { name: 'ServiceTitan help: accounting integrations', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-19' },
  { name: 'ServiceTitan help: ServiceChannel integration (NTE)', url: 'https://help.servicetitan.com/docs/set-up-servicechannel-integration', checked: '2026-11-19' },
  { name: 'ServiceTitan Form 10-K, fiscal year ended January 31, 2026 (SEC)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-17' },
  { name: 'BuildOps commercial HVAC software', url: 'https://buildops.com/industries/hvac', checked: '2026-11-19' },
  { name: 'BuildOps pricing (users, subcontractors, implementation, accounting)', url: 'https://buildops.com/pricing', checked: '2026-11-19' },
  { name: 'BuildOps integrations (ServiceChannel, 8 to 12 weeks)', url: 'https://buildops.com/platform/integrations', checked: '2026-11-19' },
  { name: 'BuildOps preventative maintenance', url: 'https://buildops.com/features/preventative-maintenance', checked: '2026-11-19' },
  { name: 'BuildOps service management suite (deficiencies to quotes)', url: 'https://buildops.com/platform/service-management-suite', checked: '2026-11-19' },
  { name: 'BuildOps CRM (accounts, properties, assets)', url: 'https://buildops.com/features/customer-relationship-management', checked: '2026-11-19' },
  { name: 'BuildOps invoicing (progress billing)', url: 'https://buildops.com/features/invoicing', checked: '2026-11-19' },
  { name: 'BuildOps purchasing and inventory', url: 'https://buildops.com/features/purchasing-inventory', checked: '2026-11-19' },
  { name: 'ServiceTrade commercial HVAC', url: 'https://servicetrade.com/industries/mechanical-commercial-hvac/', checked: '2026-11-19' },
  { name: 'ServiceTrade pricing (suites and features)', url: 'https://servicetrade.com/pricing/', checked: '2026-11-19' },
  { name: 'Commusoft commercial HVAC software (US)', url: 'https://www.commusoft.com/en-us/industries/hvac-software/', checked: '2026-11-19' },
  { name: 'Commusoft plans (12-month contracted licenses)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-19' },
  { name: 'Commusoft service contract management', url: 'https://www.commusoft.com/en-us/features/service-contract-management-software/', checked: '2026-11-19' },
  { name: 'Commusoft asset maintenance', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-11-19' },
  { name: 'Commusoft inventory and purchase orders', url: 'https://www.commusoft.com/en-us/features/inventory-management/', checked: '2026-11-19' },
  { name: 'Commusoft customer portal', url: 'https://www.commusoft.com/en-us/features/customer-portal/', checked: '2026-11-19' },
  { name: 'Commusoft integrations', url: 'https://www.commusoft.com/en-us/integrations/', checked: '2026-11-19' },
  { name: 'Fieldpoint commercial HVAC software', url: 'https://fieldpoint.net/hvac/', checked: '2026-11-19' },
  { name: 'Fieldpoint service management and contracts', url: 'https://fieldpoint.net/field-service-management-and-contracts/', checked: '2026-11-19' },
  { name: 'Housecall Pro commercial service software', url: 'https://www.housecallpro.com/industries/commercial-service-software/', checked: '2026-11-19' },
  { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: sub-customers (parent/child billing)', url: 'https://help.housecallpro.com/en/articles/910988-set-up-sub-customers-parent-child-billing', checked: '2026-11-19' },
  { name: 'Housecall Pro help: multiple addresses per customer', url: 'https://help.housecallpro.com/en/articles/932653-add-multiple-addresses-to-a-customer', checked: '2026-11-19' },
  { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-19' },
  { name: 'Jobber help: properties', url: 'https://help.getjobber.com/en/articles/properties/', checked: '2026-11-19' },
  { name: 'Jobber help: payment schedules and progress invoicing', url: 'https://help.getjobber.com/en/articles/progress-invoicing/', checked: '2026-11-19' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function CommercialHvacSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/commercial-hvac-software"
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
            Commercial HVAC software: <span className="text-orange-400">7 tools compared for service contractors</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Multi-site accounts, PM agreements, deficiency quotes, progress billing and contract terms,
            from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Commercial HVAC contractors need software that handles one customer with many sites,
            preventive maintenance agreements that schedule themselves, quotes for deficiencies found on
            PM visits, purchase orders and progress billing. <strong>BuildOps</strong>,{' '}
            <strong>ServiceTrade</strong> and <strong>Commusoft</strong> are built for commercial
            service, <strong>ServiceTitan</strong> covers commercial and residential, and{' '}
            <strong>Fieldpoint</strong> targets commercial contractors with AIA billing. All five price
            by quote. <strong>Housecall Pro</strong> and <strong>Jobber</strong> publish prices and can
            carry a few commercial accounts, but document less of the commercial workflow.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="commercial-vs-residential">What commercial HVAC work needs from software</h2>
          <p>
            Residential HVAC software is built around a homeowner, one address and a quick sale.
            Commercial service adds work that those tools often handle only partly. Use this list as
            your checklist:
          </p>
          <ul>
            <li><strong>Multi-site customers:</strong> a parent account with many locations, each with its own equipment, contacts and history.</li>
            <li><strong>PM agreements:</strong> contracts that generate maintenance visits on schedule, often with different frequencies per asset.</li>
            <li><strong>Deficiency to quote:</strong> problems found on a PM visit turned into a priced repair or replacement quote.</li>
            <li><strong>Purchase orders and limits:</strong> customer PO numbers on invoices, and NTE (not-to-exceed) amounts on work orders.</li>
            <li><strong>A portal for facility managers:</strong> service history, reports, quotes and invoices without calling the office.</li>
            <li><strong>Project and contract billing:</strong> progress billing on installs and retrofits, and recurring billing on service contracts.</li>
            <li><strong>Back-office fit:</strong> integration with the accounting or ERP system you run, and with facility-management platforms such as ServiceChannel if your customers dispatch through them.</li>
          </ul>
          <p>
            This page is for contractors. If you run maintenance for your own buildings, you are looking
            for a CMMS, which is a different category.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Commercial HVAC software compared</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score.
            “Not stated” means we did not find it on the vendor’s pages, not that the product lacks it.
            Sources and check dates are at the end of this page.
          </p>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 lg:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[12.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3">Software</th>
                  {cols.map((c) => <th key={c.key} scope="col" className="p-3">{c.label}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {tools.map((t) => (
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
            {tools.map((t) => (
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
          <h2 id="tools">The 7 tools in more detail</h2>

          <h3>ServiceTitan</h3>
          <p>
            ServiceTitan sells separate commercial and residential solutions and calls itself an
            end-to-end platform “for commercial service and construction.” A customer record holds
            multiple locations, each with its own jobs, equipment and history, and technicians can scan
            equipment model and serial numbers. Equipment Findings helps turn problems found on
            maintenance visits into pull-through work. For projects, it documents applications for
            payment with a continuation sheet (schedule of values), which needs account configuration.
            Commercial customers see their contracts in the customer portal. It integrates with
            QuickBooks Desktop and Online, Sage Intacct and Xero. Pricing is a per-technician quote, and
            its 10-K says new customers typically sign 12 to 36 month agreements.
          </p>

          <h3>BuildOps</h3>
          <p>
            BuildOps is built only for commercial work: “Most platforms started in residential and
            stretched to fit.” Accounts link to properties, properties to assets, and every asset keeps
            its service history. It auto-generates recurring visits from agreements, tracks margin on
            each contract, turns deficiency findings into quoted work and lets techs create purchase
            orders in the field. It bills quoted, time and materials, unit price or progress jobs and
            integrates with Viewpoint Vista, Viewpoint Spectrum, Sage Intacct, NetSuite and QuickBooks.
            Pricing is a quote based on field and office users; subcontractors do not need licenses,
            implementation is included, and BuildOps says most businesses are running in 8 to 12 weeks.
          </p>

          <h3>ServiceTrade</h3>
          <p>
            ServiceTrade says it is “built for commercial service teams, not residential contractors.”
            Its entry Select suite already includes equipment history, deficiency capture, online quotes
            and QuickBooks integration; Premium adds a customer service portal, and Enterprise adds
            multi-brand and multi-region operations and recurring contract pricing. It also tracks
            budgets and progress on installs and retrofits and integrates with Sage Intacct, Viewpoint
            Vista and Acumatica among others. We could not confirm progress billing on its current
            pages. Pricing is a quote driven mainly by technician count, and office users are free.
          </p>

          <h3>Commusoft</h3>
          <p>
            Commusoft’s US site presents it as commercial HVAC software. You can manage parent companies
            with multiple service locations and apply one master service contract across sites, each
            with its own assets, while billing and reporting centrally. Contracts auto-generate
            recurring work orders and inspection visits, with different frequencies per asset and SLA
            clocks for priority work. Technicians can turn defect logs into repair quotes, the office
            raises purchase orders to suppliers, and the customer portal sends updates to site managers
            and invoices to head office. It integrates with QuickBooks Online, Sage Accounting and
            Xero. Standard licenses run on a 12-month contract that renews annually, and every office
            user and technician needs one.
          </p>

          <h3>Fieldpoint</h3>
          <p>
            Fieldpoint targets growing commercial contractors and has a commercial HVAC page. It creates
            work orders automatically from service agreements, follows spend from purchase order to final
            invoice and automates multi-stage progress billing, including AIA billing. It integrates with
            NetSuite, Microsoft Dynamics, CMiC and QuickBooks. There is no pricing page.
          </p>

          <h3>Housecall Pro</h3>
          <p>
            Housecall Pro is designed for home service businesses but has a commercial services page
            covering service agreements with unit history, a customer portal for commercial customers
            and progress billing. Customers can have multiple addresses, and sub-customers let you do
            the work at one location and bill another party. Recurring Service Plans are included on
            Max ($299/month billed annually for 8 users). It syncs with QuickBooks Online or Desktop and
            does not require a long-term contract. See{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>Jobber</h3>
          <p>
            Jobber is home-service software at heart. One client can have multiple properties, and you
            can add a contact such as a property manager to many properties at once. It supports
            recurring jobs and offers payment schedules and progress invoicing on all plans. QuickBooks
            Online and Xero sync start on Connect. Prices are published from $29/month for one user
            billed annually, with a no-commitment monthly option; see{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h2 id="servicechannel">ServiceChannel, NTE limits and facility-management platforms</h2>
          <p>
            Some commercial customers send work orders through facility-management platforms such as
            ServiceChannel, and those work orders can carry a not-to-exceed (NTE) amount. Among these
            vendors, only two document a ServiceChannel integration. ServiceTitan’s integration runs through its
            WorkConnect product and can send NTE values from ServiceChannel work orders to the
            ServiceTitan job; work orders already started in ServiceChannel before setup are not synced.
            BuildOps says ServiceChannel syncs work orders both ways. If your customers dispatch this
            way, ask every vendor to show the integration live in the demo.
          </p>

          <h2 id="residential-tools">When a residential-first tool is enough</h2>
          <p>
            If commercial work is a small share of your jobs, Housecall Pro or Jobber may cover it at a
            published price: both handle several service addresses per customer and progress invoicing,
            and Housecall Pro documents sub-customer billing and a commercial customer portal. Move to a
            commercial-first tool when you need master contracts across many sites, deficiency quoting
            from PM visits, purchase orders, NTE-driven work orders or ERP integration. For a general
            HVAC shortlist by team size and price, see our{' '}
            <Link href="/by-industry/hvac" className={A}>HVAC field service management software</Link>{' '}
            guide, and for the two best-known names head to head, see{' '}
            <Link href="/compare/housecall-pro-vs-servicetitan" className={A}>Housecall Pro vs ServiceTitan</Link>.
          </p>

          <h2 id="which-to-choose">Which commercial HVAC software fits your business?</h2>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Your business</th>
                <th scope="col" className="p-3.5">Shortlist</th>
                <th scope="col" className="p-3.5">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {buyers.map((b) => (
                <tr key={b.who} className="align-top">
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{b.who}</th>
                  <td className="p-3.5">{b.pick}</td>
                  <td className="p-3.5">{b.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-12">
          <h2 id="demo-checklist">What to ask in every demo</h2>
          <ol>
            <li>Set up one customer with three sites and different equipment at each; show the history for one unit.</li>
            <li>Create a PM agreement with quarterly and annual tasks on different assets and show the visits it generates.</li>
            <li>Log a deficiency on a PM visit and turn it into a quote the facility manager can approve.</li>
            <li>Show a customer PO number and an NTE amount on the work order and invoice.</li>
            <li>Bill an install by progress, and show what the customer receives.</li>
            <li>Show the integration with your accounting or ERP system, and with ServiceChannel if you use it.</li>
            <li>Put the price basis (technicians or all users), onboarding fee, go-live timeline and contract term in writing.</li>
          </ol>
          <p>
            If your commercial work includes refrigeration, our guide to{' '}
            <Link href="/guides/refrigerant-tracking-software" className={A}>refrigerant tracking software</Link>{' '}
            covers EPA leak repair records.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on commercial HVAC software">
            If commercial service and PM contracts are most of your work, shortlist the tools built for
            it, BuildOps, ServiceTrade and Commusoft, plus ServiceTitan, and add Fieldpoint if you bill
            projects AIA-style. All price by quote, so compare the price basis, onboarding and contract
            term in writing. If commercial is a small share of your jobs, Housecall Pro or Jobber may be
            enough at a published price. Our <Link href="/how-we-review" className={A}>review method</Link>{' '}
            explains why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/by-industry/hvac" className="text-orange-600 hover:text-orange-800">HVAC software guide →</Link>
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
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
