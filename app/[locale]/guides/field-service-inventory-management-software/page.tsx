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
 * /guides/field-service-inventory-management-software: targets "field service inventory
 * management software", "truck inventory software for contractors" and "van stock software".
 * No GSC data for this topic yet.
 *
 * Facts come from each vendor's own pricing pages, feature pages and help centers (dates in
 * `sources`). ServiceTitan's inventory help articles are marked stale by ServiceTitan; the page
 * uses only their setup and replenishment steps and does not repeat a stale "no on-hand tracking"
 * line. Jobber and Kickserv document no inventory module on the pages available to us, so they are
 * described as "not documented", not "not offered". No vendor publishes an inventory add-on price.
 * Nothing tested hands-on.
 */

const PATH = '/guides/field-service-inventory-management-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Field Service Inventory Management Software (2026) Compared'
const DESCRIPTION =
  'Which field service tools track truck and warehouse stock, deduct parts used on jobs, reorder automatically and create purchase orders, and on which plan.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/field-service-inventory-management-software',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Field service inventory management software', href: PATH },
]

type Tool = {
  name: string
  plan: string
  locations: string
  deduction: string
  reorder: string
  extras: string
}

const tools: Tool[] = [
  {
    name: 'FieldPulse',
    plan: 'Quote only; plan not stated',
    locations: 'Inventory hubs keep a separate count for each truck, van or warehouse',
    deduction: 'Deducts stock when a material list is completed or an invoice is finalized; count tool',
    reorder: 'Re-order levels per hub create purchase orders automatically',
    extras: 'Serialized inventory, Code-128 barcode scanning, Supplier Chat (US)',
  },
  {
    name: 'Commusoft',
    plan: 'Quote only; plan not stated',
    locations: 'Warehouses and a parts location for each van',
    deduction: 'Parts used are deducted from the van and added to the job invoice',
    reorder: 'Minimum thresholds trigger purchase orders automatically',
    extras: 'Purchasing linked to job costing; barcodes and QR codes for assets',
  },
  {
    name: 'ServiceTitan',
    plan: 'Quote only; needs account configuration; package not stated',
    locations: 'Trucks and warehouses; each technician has one default truck',
    deduction: 'Materials used on invoices feed replenishment',
    reorder: 'Minimum reorder points trigger transfers from the warehouse; purchase orders by vendor',
    extras: 'Not used together with QuickBooks inventory',
  },
  {
    name: 'Workiz',
    plan: 'Ultimate only (quote only)',
    locations: 'Stock across warehouses, offices and service vehicles',
    deduction: 'Assign parts to jobs',
    reorder: 'Low-stock alerts and automated reordering; purchase orders on Ultimate',
    extras: 'Equipment tracking reads serial, model and make from a label photo',
  },
  {
    name: 'Service Fusion',
    plan: 'Included from Plus ($339 billed annually, unlimited users); add-on on Starter',
    locations: 'Not described on its pages',
    deduction: 'Not described',
    reorder: 'Not described',
    extras: 'Job costing included from Plus',
  },
  {
    name: 'FieldEdge',
    plan: 'Warehouse inventory on Elite only (quote only)',
    locations: 'Warehouse inventory requires QuickBooks Desktop Enterprise with Advanced Inventory',
    deduction: 'Not described',
    reorder: '“Replenishment” and “Purchases” listed on every plan, without detail',
    extras: 'QuickBooks Online and Desktop on every plan',
  },
  {
    name: 'ServiceM8',
    plan: 'No stock module listed; parts tools from Free ($0)',
    locations: 'Not listed',
    deduction: 'Scan barcoded items into an invoice (Free)',
    reorder: 'Not listed',
    extras: 'Supplier price list imports (Free); supplier invoices into a job (Starter, $29)',
  },
  {
    name: 'Housecall Pro',
    plan: 'Material tracking; plan not stated',
    locations: 'Not documented',
    deduction: 'Reports show the quantity of each material used on jobs',
    reorder: 'Not documented',
    extras: 'Source, purchase status and vendor fields on material line items; job costing on Basic',
  },
  {
    name: 'Jobber',
    plan: 'No inventory module documented',
    locations: 'Not documented',
    deduction: 'Not documented',
    reorder: 'Not documented',
    extras: 'Job costing on Grow; supplier invoice scanning on Plus',
  },
  {
    name: 'Kickserv',
    plan: 'No inventory feature on its pricing or features pages',
    locations: 'Not documented',
    deduction: 'Not documented',
    reorder: 'Not documented',
    extras: 'Not documented',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'plan', label: 'Plan' },
  { key: 'locations', label: 'Warehouses and trucks' },
  { key: 'deduction', label: 'Parts used on jobs' },
  { key: 'reorder', label: 'Reordering and POs' },
  { key: 'extras', label: 'Other' },
]

const faqs = [
  {
    question: 'What is field service inventory management software?',
    answer:
      'It tracks the parts and materials a service business stocks in its warehouse and on each truck, deducts what technicians use on jobs, and tells you or your supplier when to reorder. In field service tools it is usually tied to invoices and job costing, so parts used show up on the bill and in the job’s profit.',
  },
  {
    question: 'Which field service software tracks truck stock?',
    answer:
      'FieldPulse keeps a separate count for each truck, van or warehouse, Commusoft tracks a parts location for each van, ServiceTitan gives each technician a default truck with replenishment from the warehouse, and Workiz monitors stock across warehouses and service vehicles on its Ultimate plan.',
  },
  {
    question: 'Which tools create purchase orders automatically?',
    answer:
      'FieldPulse creates a purchase order when a hub reaches its re-order level, and Commusoft generates purchase orders when stock falls below a minimum threshold. ServiceTitan builds purchase orders from materials used on invoices and refills trucks by transfer below minimum reorder points. Workiz advertises automated reordering on Ultimate.',
  },
  {
    question: 'Does Jobber or Housecall Pro have inventory management?',
    answer:
      'Neither documents a stock module with locations, reorder points or purchase orders on the pages we checked. Housecall Pro reports the quantity of each material used on jobs and lets you record the source, purchase status and vendor. Jobber offers job costing on Grow and supplier invoice scanning on Plus.',
  },
  {
    question: 'What is the cheapest published plan that includes inventory?',
    answer:
      'Service Fusion Plus, at $339 a month billed annually with unlimited users, lists inventory management and job costing. Service Fusion does not describe how its inventory works on its public pages, so ask for a demo. Workiz, FieldPulse, ServiceTitan, FieldEdge and Commusoft are quote only.',
  },
  {
    question: 'Does inventory sync with QuickBooks?',
    answer:
      'Rarely in a documented way. FieldEdge’s Elite warehouse inventory works only with QuickBooks Desktop Enterprise with Advanced Inventory, and ServiceTitan says its truck replenishment cannot be used at the same time as QuickBooks inventory. FieldPulse syncs purchase orders to QuickBooks but does not say it syncs stock quantities.',
  },
]

const sources = [
  { name: 'FieldPulse help: item list and inventory overview', url: 'https://help.fieldpulse.com/inventory-materials/item-list/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: inventory hubs', url: 'https://help.fieldpulse.com/inventory-materials/item-list/inventory-hubs.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: deducting and counting inventory', url: 'https://help.fieldpulse.com/inventory-materials/item-list/deducting-counting.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: purchase orders', url: 'https://help.fieldpulse.com/inventory-materials/purchase-orders/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: serialized inventory', url: 'https://help.fieldpulse.com/inventory-materials/item-list/serialized-inventory.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: custom barcodes (Code-128)', url: 'https://help.fieldpulse.com/troubleshooting/technical-specs/custom-barcodes.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: Supplier Chat', url: 'https://help.fieldpulse.com/inventory-materials/supplier-chat/supplier-chat.md', checked: '2026-11-24' },
  { name: 'Commusoft inventory management', url: 'https://www.commusoft.com/en-us/features/inventory-management/', checked: '2026-11-24' },
  { name: 'Commusoft asset maintenance (barcodes and QR codes)', url: 'https://www.commusoft.com/en-us/features/asset-maintenance-software/', checked: '2026-11-24' },
  { name: 'ServiceTitan help: set up truck inventory replenishment', url: 'https://help.servicetitan.com/v1/docs/set-up-your-account-for-truck-inventory-replenishment', checked: '2026-11-24' },
  { name: 'ServiceTitan help: replenish items using transfers', url: 'https://help.servicetitan.com/v1/docs/replenish-items-using-transfers', checked: '2026-11-24' },
  { name: 'ServiceTitan help: truck inventory replenishment overview', url: 'https://help.servicetitan.com/docs/truck-inventory-replenishment-overview', checked: '2026-11-24' },
  { name: 'Workiz pricing plans (inventory and purchase orders on Ultimate)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'Workiz inventory management', url: 'https://www.workiz.com/features/inventory-management/', checked: '2026-11-24' },
  { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-11-21' },
  { name: 'Service Fusion pricing (inventory and job costing from Plus)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion help: upgrading and adding add-ons', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/38056443351053-Upgrading-your-Service-Fusion-Subscription-and-Adding-Add-ons', checked: '2026-11-24' },
  { name: 'FieldEdge pricing (warehouse inventory on Elite)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'ServiceM8 pricing (barcode, supplier price lists, supplier invoices)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'Housecall Pro help: material inventory detail tracking', url: 'https://help.housecallpro.com/en/articles/7119757-material-inventory-detail-tracking', checked: '2026-11-24' },
  { name: 'Housecall Pro pricing (job costing on Basic)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Jobber pricing (job costing on Grow; supplier invoice scanning on Plus)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv features', url: 'https://www.kickserv.com/features', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function FieldServiceInventoryManagementPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/field-service-inventory-management-software"
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
            Field service inventory software: <span className="text-orange-400">truck stock, reorders and POs compared</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Which of ten field service tools track warehouse and truck stock, deduct parts used on jobs and
            reorder automatically, and on which plan, from each vendor&rsquo;s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Real inventory management, with stock per truck, automatic deduction and automatic purchase orders,
            is documented by only a few field service tools. <strong>FieldPulse</strong> has the most detailed
            documentation: a separate count for each truck, van or warehouse, deduction when jobs are invoiced,
            and purchase orders created at a re-order level. <strong>Commusoft</strong> and{' '}
            <strong>ServiceTitan</strong> also track vans or trucks and reorder below minimum levels, and{' '}
            <strong>Workiz</strong> puts inventory on Ultimate. All four are quote only. The cheapest published
            plan with inventory is <strong>Service Fusion</strong> Plus at $339 a month billed annually. Jobber,
            Housecall Pro and Kickserv document no stock module.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-it-does">What inventory software should do for a service business</h2>
          <ul>
            <li><strong>Track stock by location</strong>: the warehouse plus each truck or van.</li>
            <li><strong>Deduct parts used on jobs</strong> automatically when the job or invoice is completed.</li>
            <li><strong>Reorder</strong> when stock drops below a minimum, by purchase order to a supplier or transfer from the warehouse.</li>
            <li><strong>Scan barcodes</strong> and track serial numbers for parts you install.</li>
            <li><strong>Feed job costing</strong>, so each job&rsquo;s profit includes the parts it used.</li>
          </ul>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Inventory features compared</h2>
          <p className={SUB}>
            From each vendor&rsquo;s documentation, not a hands-on test. &ldquo;Not documented&rdquo; means we
            found nothing on the vendor&rsquo;s own pages, not that the feature cannot exist. Sources and check
            dates are at the end of this page.
          </p>
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 lg:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13px] leading-[1.5]">
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
          <h2 id="tools">The tools in detail</h2>

          <h3>FieldPulse</h3>
          <p>
            FieldPulse&rsquo;s help center describes inventory hubs that keep a separate count for each truck, van
            or warehouse, with each user tied to one hub for default deduction. Stock is deducted when a material
            list reaches a completed status or an invoice is finalized, and a count tool compares what you have
            with what FieldPulse expects. Setting a re-order level makes FieldPulse create the purchase order
            automatically. It also tracks serialized units, scans Code-128 barcodes you print yourself, and offers
            Supplier Chat for US users. No article names the plan that includes inventory, so confirm it in your
            quote. See <Link href="/pricing/fieldpulse" className={A}>FieldPulse pricing</Link>.
          </p>

          <h3>Commusoft</h3>
          <p>
            Commusoft tracks parts across warehouses and a location for each van. When a technician uses a part,
            it is deducted from the van and added to the job invoice, and minimum thresholds can generate
            purchase orders automatically. Purchasing is linked to job costing. Barcodes and QR codes are
            described for equipment assets rather than parts. Prices and plan placement are not published.
          </p>

          <h3>ServiceTitan</h3>
          <p>
            ServiceTitan sets up trucks and warehouses under inventory settings, gives each technician one
            default truck, and refills trucks by transfer from the warehouse when stock drops below minimum
            reorder points. Materials technicians use on invoices feed a list that purchase orders are built from,
            grouped by vendor. It needs account configuration, and ServiceTitan says truck replenishment and
            QuickBooks inventory cannot be used at the same time. ServiceTitan marks some of these help articles
            as older versions, so check the current workflow in a demo. See{' '}
            <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link>.
          </p>

          <h3>Workiz</h3>
          <p>
            Inventory, purchase orders and equipment tracking are on Workiz Ultimate only. Its inventory page
            describes monitoring stock across warehouses, offices and service vehicles, assigning parts to jobs,
            low-stock alerts and automated reordering. It does not describe barcodes or supplier integrations. See{' '}
            <Link href="/pricing/workiz" className={A}>Workiz pricing</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            Service Fusion lists inventory management and job costing on Plus ($339 a month billed annually) and
            Pro, and as an add-on on Starter that its billing team adds. It is the cheapest published price that
            includes inventory, with unlimited users, but its public pages do not describe how stock locations,
            deduction or reordering work. See <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <h3>FieldEdge</h3>
          <p>
            FieldEdge&rsquo;s warehouse inventory is on Elite only and works only for companies using QuickBooks
            Desktop Enterprise with Advanced Inventory. Its pricing page also lists Replenishment and Purchases on
            every plan without describing them. See <Link href="/pricing/fieldedge" className={A}>FieldEdge pricing</Link>.
          </p>

          <h3>ServiceM8, Housecall Pro, Jobber and Kickserv</h3>
          <p>
            These tools handle materials on jobs rather than stock. <strong>ServiceM8</strong> scans barcoded
            items into invoices and imports supplier price lists on its free plan, and brings supplier invoices
            into a job from Starter. <strong>Housecall Pro</strong> reports the quantity of each material used and
            records its source, purchase status and vendor, which its help center says can show what may need
            replenishing. <strong>Jobber</strong> offers job costing on Grow and supplier invoice scanning on Plus.{' '}
            <strong>Kickserv</strong> lists no inventory feature on its pricing or features pages.
          </p>

          <h2 id="choose">How to choose</h2>
          <ul>
            <li><strong>Several trucks with their own stock</strong>: FieldPulse, Commusoft, ServiceTitan or Workiz Ultimate.</li>
            <li><strong>Automatic purchase orders</strong>: FieldPulse and Commusoft document them most clearly.</li>
            <li><strong>Published price</strong>: Service Fusion Plus, $339 a month billed annually.</li>
            <li><strong>QuickBooks Desktop Enterprise inventory</strong>: FieldEdge Elite is built around it.</li>
            <li><strong>Just parts on invoices</strong>: ServiceM8, Housecall Pro or Jobber may be enough.</li>
          </ul>
          <p>
            For job costing and billing, see our{' '}
            <Link href="/guides/field-service-invoicing-software" className={A}>field service invoicing software</Link>{' '}
            guide, and for prices, the <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            If you stock parts on trucks, shortlist FieldPulse, Commusoft, ServiceTitan and Workiz Ultimate, and
            ask each to show truck counts, automatic deduction and a purchase order in a demo. If you want a
            published price, Service Fusion Plus includes inventory at $339 a month billed annually.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/guides/field-service-invoicing-software" className="text-orange-600 hover:text-orange-800">Field service invoicing software →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/guides" className="text-orange-600 hover:text-orange-800">All guides →</Link>
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
