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
 * /guides/job-costing-software-for-contractors: targets "job costing software for contractors" and
 * "job costing field service". No GSC data for this topic yet.
 *
 * Scope: which plan unlocks job costing, which costs each tool documents (labor, materials, supplier
 * bills, markup) and how job profit is shown. Stock and purchase order mechanics stay on
 * /guides/field-service-inventory-management-software; quotes on /guides/field-service-quoting-software.
 *
 * Checked: the site's pricing and compare pages (vendor pages checked 2026-11-19 to 2026-11-25) and
 * research notes; new fetches on 2026-11-26: FieldPulse, ServiceM8, Service Fusion and Fergus help
 * articles, Commusoft and Tradify job costing pages. Jobber, Housecall Pro, Workiz and ServiceTitan
 * sites were not refetched; their facts reuse the site's verified pages.
 *
 * Conflicts: ServiceM8's help article calls Job Costing an add-on on "certain plans", while its
 * pricing page lists it on Premium; the pricing page is used. Tradify's job costing page mentions
 * annual plans, its pricing page shows none; annual pricing is not used. Jobber pricing uses the
 * 2026-11-21 check.
 *
 * Not used: FieldEdge (job costing not on its pricing page), the Clyr integration for Service Fusion
 * and ServiceM8 reporting add-ons (search snippets only), Tradify's help center, the contents of
 * Housecall Pro's job costing reports article. Nothing tested hands-on.
 */

const PATH = '/guides/job-costing-software-for-contractors'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Job Costing Software for Contractors: 11 Field Tools Compared'
const DESCRIPTION =
  'Which plan unlocks job costing in 11 field service tools, what each tracks (labor, materials, supplier bills, markup) and how job profit is reported.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/job-costing-software-for-contractors',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Job costing software', href: PATH },
]

type Tool = {
  name: string
  plan: string
  labor: string
  materials: string
  bills: string
  profit: string
}

const tools: Tool[] = [
  {
    name: 'ServiceM8',
    plan: 'Premium: $149 a month, 500 jobs, unlimited users',
    labor: 'Labor items and Check In time, at a weighted average rate; admin time at $20 an hour by default',
    materials: 'Purchase cost per item, synced from your accounting package; markup billing on Premium',
    bills: 'Supplier invoices emailed into a job from Starter ($29)',
    profit: 'Profit per job; quoted costs captured when the quote is sent and compared with actuals',
  },
  {
    name: 'Jobber',
    plan: 'Grow: $149 a month billed annually, 1 user ($199 with no commitment)',
    labor: 'Time and expense tracking from Connect ($99)',
    materials: 'Not documented in our sources',
    bills: 'Receipt capture and supplier invoice scanning on Plus ($399, 5 users)',
    profit: 'Job profit alerts and a custom report builder on Plus',
  },
  {
    name: 'Housecall Pro',
    plan: 'Basic: $59 a month billed annually, 1 user ($79 monthly)',
    labor: 'Needs Time Tracking and Fully Loaded Rates set up',
    materials: 'Materials, miscellaneous expenses, commissions and services',
    bills: 'Not documented in our sources',
    profit: 'Job costing breakdown on the job; a job costing reports article in the help center',
  },
  {
    name: 'Tradify',
    plan: 'Pro: $51 per user a month (costing and bill tracking)',
    labor: 'Timesheets and a live timer on Pro',
    materials: 'Supplier price lists imported as CSV; pricing and markups from Lite ($47)',
    bills: 'Bill tracking on Pro; SmartRead for Bills and purchase orders on Plus ($61)',
    profit: 'Quoted vs actual costs; profit and financial reports; job service reports on Plus',
  },
  {
    name: 'Fergus',
    plan: 'Cost report per job; plan not stated. Professional from $44 a month adds purchase orders',
    labor: 'Timesheets on Essentials (from $31 a month)',
    materials: 'Materials and price books on Essentials; each cost line shows unit cost, total and markup',
    bills: 'Supplier integrations manual on Essentials, automatic on Professional',
    profit: 'Business, staff and financial reporting on Professional',
  },
  {
    name: 'Service Fusion',
    plan: 'Plus: $339 a month billed annually ($399 monthly), unlimited users; add-on on Starter, price not published',
    labor: 'Labor and drive time costed from each employee’s regular rate, adjustable',
    materials: 'Default costs saved on catalog products and services',
    bills: 'Non-billable expenses count as internal costs; purchase orders not covered',
    profit: 'Gross profit margin on jobs; cost visibility set per user',
  },
  {
    name: 'FieldPulse',
    plan: 'Plan not stated; seat-based quote. Web app only',
    labor: 'Timesheets, labor line items or both; or a cost per hour as an estimate',
    materials: 'Material lists, invoices and purchase orders; commissions count as a cost',
    bills: 'Purchase orders feed actual cost',
    profit: 'Total Profit and Profit Margin per job',
  },
  {
    name: 'Commusoft',
    plan: 'Listed in its plans as automated job costing; prices not published',
    labor: 'Digital timesheets',
    materials: 'Every part and purchase order tracked against the job, plus your markup',
    bills: 'Not mentioned',
    profit: 'Profit reports per job, per technician or per service type',
  },
  {
    name: 'ServiceTitan',
    plan: 'Package not stated; Core, Demand AI, Field AI and MAX are quote only',
    labor: 'Estimates calculate costs for time, materials and margins',
    materials: 'Same estimate costing',
    bills: 'Not documented in our sources',
    profit: 'Markets job cost tracking for commercial work',
  },
  {
    name: 'Workiz',
    plan: 'Plan not stated; all plans are Request pricing',
    labor: 'Each technician’s hourly rate factors into job margins',
    materials: 'Not documented in our sources',
    bills: 'Purchase orders on Ultimate only',
    profit: 'Built-in reports on Standard; custom reports on Pro and Ultimate',
  },
  {
    name: 'Kickserv',
    plan: 'No job costing listed',
    labor: 'Time and expense tracking from Start ($60, 5 users)',
    materials: 'Not listed',
    bills: 'Not listed',
    profit: 'Over 20 reports on Start; custom reports on Run ($119, 10 users)',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'plan', label: 'Plan with job costing' },
  { key: 'labor', label: 'Labor cost' },
  { key: 'materials', label: 'Materials and markup' },
  { key: 'bills', label: 'Supplier bills and POs' },
  { key: 'profit', label: 'Profit reporting' },
]

const faqs = [
  {
    question: 'What is job costing in field service software?',
    answer:
      'It records what a job actually cost you, usually labor time, materials and other expenses, and sets that against what you invoiced, so you see the profit or loss on each job. ServiceM8, for example, documents its formula as invoiced amount minus material, labor and admin costs.',
  },
  {
    question: 'Which field service software has job costing on the cheapest plan?',
    answer:
      'Among tools with published prices, Housecall Pro lists job costing on Basic at $59 a month billed annually for one user. Tradify includes costing and bill tracking on Pro at $51 per user a month. Jobber starts it on Grow ($149 a month billed annually for one user), ServiceM8 on Premium ($149 a month, unlimited users, 500 jobs) and Service Fusion on Plus ($339 a month billed annually, unlimited users). Service Fusion Starter can add it, at a price it does not publish.',
  },
  {
    question: 'Can field service software match supplier bills to a job?',
    answer:
      'Several tools document it on specific plans. ServiceM8 imports supplier invoices emailed into a job from Starter, Tradify tracks bills on Pro and reads them with SmartRead for Bills on Plus, Jobber scans supplier invoices and receipts on Plus, and Fergus runs supplier integrations automatically on Professional. FieldPulse and Commusoft count purchase orders as job costs.',
  },
  {
    question: 'How do these tools work out labor cost?',
    answer:
      'Each one differently. Housecall Pro needs time tracking and fully loaded rates, Service Fusion uses each employee’s regular rate, FieldPulse uses timesheets or labor line items or a cost per hour you enter, ServiceM8 uses labor items and Check In time, and Workiz factors in each technician’s hourly rate. Set up pay rates before you trust the profit figure.',
  },
  {
    question: 'Can I compare quoted costs with actual costs?',
    answer:
      'ServiceM8 captures estimated material, labor and admin costs when a quote is sent and compares them with actual costs after the job. Tradify says it tracks predicted costs in quotes against actual costs on the job. Jobber adds job profit alerts on Plus.',
  },
  {
    question: 'Does job costing replace my accounting software?',
    answer:
      'No. ServiceM8 says its job costing figures are estimates and that accurate profit and loss reports belong in your accounting package. Use job costing to price and manage jobs, and keep the books in QuickBooks, Xero or similar.',
  },
]

const sources = [
  { name: 'ServiceM8 pricing (job costing and markup billing on Premium; supplier invoices from Starter)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 help: job costing overview', url: 'https://support.servicem8.com/hc/en-us/articles/209713793-Job-Costing-Overview', checked: '2026-11-26' },
  { name: 'Jobber pricing (time and expense on Connect, job costing on Grow, profit alerts and supplier invoice scanning on Plus)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Housecall Pro pricing (job costing on Basic)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: using job costing', url: 'https://help.housecallpro.com/en/articles/6536636-using-job-costing', checked: '2026-11-23' },
  { name: 'Housecall Pro help: job costing reports', url: 'https://help.housecallpro.com/en/articles/6596631-job-costing-reports', checked: '2026-10-27' },
  { name: 'Tradify pricing (costing and bill tracking on Pro; SmartRead for Bills and purchase orders on Plus)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify job costing software', url: 'https://www.tradifyhq.com/features/job-costing-software', checked: '2026-11-26' },
  { name: 'Fergus US pricing (plans, purchase orders, supplier integrations, reporting)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
  { name: 'Fergus help: cost report', url: 'https://help.fergus.com/en/articles/11511783-cost-report', checked: '2026-11-26' },
  { name: 'Service Fusion pricing (job costing from Plus)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion help: enabling, using and managing job costing', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360059357651-Job-Costing', checked: '2026-11-26' },
  { name: 'FieldPulse help: job costing', url: 'https://help.fieldpulse.com/jobs/jobs-tasks/job-costing.md', checked: '2026-11-26' },
  { name: 'FieldPulse pricing (seat-based quote)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'Commusoft job costing software', url: 'https://www.commusoft.com/en-us/features/job-costing-software/', checked: '2026-11-26' },
  { name: 'Commusoft plans (automated job costing)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-24' },
  { name: 'ServiceTitan handyman software (estimate costs for time, materials and margins)', url: 'https://www.servicetitan.com/industries/handyman-service-software', checked: '2026-11-21' },
  { name: 'ServiceTitan electrical software (job costs for commercial work)', url: 'https://www.servicetitan.com/industries/electrical-software', checked: '2026-10-27' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-24' },
  { name: 'Workiz help: technician labor rates in job costing', url: 'https://help.workiz.com/hc/en-us/articles/27408705930769', checked: '2026-10-27' },
  { name: 'Workiz pricing plans (reports, purchase orders by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function JobCostingSoftwareForContractorsPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/job-costing-software-for-contractors"
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
            Job costing software for contractors: <span className="text-orange-400">which plan shows your profit per job</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Eleven field service tools checked against their pricing pages and help centers in November 2026:
            which plan unlocks job costing, which costs it counts, and how it reports profit.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Job costing is rarely on the entry plan. Among published prices, <strong>Housecall Pro</strong>{' '}
            lists it on Basic ($59 a month billed annually, 1 user), <strong>Tradify</strong> on Pro ($51 per
            user), <strong>Jobber</strong> on Grow ($149, 1 user), <strong>ServiceM8</strong> on Premium ($149,
            unlimited users) and <strong>Service Fusion</strong> on Plus ($339, unlimited users). FieldPulse,
            Commusoft, ServiceTitan and Workiz document job costing but not the plan, and Kickserv lists none.
            Supplier bills are the biggest gap: only ServiceM8, Tradify, Jobber and Fergus document getting
            them into a job.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-it-tracks">What job costing should track</h2>
          <ul>
            <li><strong>Labor</strong>: hours from timesheets or check-ins, times a cost rate that you set up per employee.</li>
            <li><strong>Materials</strong>: the purchase cost of parts used, and the markup you charge on them.</li>
            <li><strong>Supplier bills and purchase orders</strong>: what you actually paid, matched to the job.</li>
            <li><strong>Profit</strong>: revenue minus those costs, per job, and ideally quoted against actual.</li>
          </ul>
          <p>
            Stock levels, truck inventory and reordering are covered in our{' '}
            <Link href="/guides/field-service-inventory-management-software" className={A}>field service inventory management software</Link>{' '}
            guide, and estimates and price books in{' '}
            <Link href="/guides/field-service-quoting-software" className={A}>field service quoting software</Link>.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Job costing compared by vendor and plan</h2>
          <p className={SUB}>
            Documented features and published prices only, not a hands-on test. Prices are per month as each
            vendor lists them; Tradify prints no currency code. Sources and check dates are at the end of this page.
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
          <h2 id="published">Tools that publish the plan and price</h2>

          <h3>ServiceM8</h3>
          <p>
            ServiceM8&rsquo;s pricing page puts job costing, job profitability and markup billing on Premium,
            $149 a month for 500 jobs with unlimited users. Its help center gives the formula: invoiced amount
            minus material, labor and admin costs. Material costs come from each item&rsquo;s purchase cost,
            which can sync from your accounting package. Labor is any item with &ldquo;labor&rdquo; in its name,
            costed against Check In time, and time spent in the job card counts as admin time at $20 an hour by
            default. When you send a quote, ServiceM8 saves the estimated costs so you can compare them with the
            actual job. Supplier invoices can be emailed into a job from Starter ($29). See{' '}
            <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link>.
          </p>

          <h3>Jobber</h3>
          <p>
            Jobber adds time and expense tracking on Connect ($99 a month billed annually, 1 user) and job
            costing on Grow ($149 billed annually, or $199 with no commitment). Plus ($399 for 5 users) adds job
            profit alerts, receipt capture and supplier invoice scanning, and a custom report builder. See{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>Housecall Pro</h3>
          <p>
            Housecall Pro lists job costing on Basic, $59 a month billed annually ($79 monthly) for one user.
            Its help center says job costing covers labor, materials, miscellaneous expenses, commissions and
            services, that you turn on the breakdown in job settings, and that labor costs need Time Tracking and
            Fully Loaded Rates set up first. It also has a help article on job costing reports. See{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>Tradify</h3>
          <p>
            Tradify charges per user. Lite ($47) has pricing and markups, Pro ($51) adds costing and bill
            tracking with timesheets, and Plus ($61) adds SmartRead for Bills, purchase orders, job tasks and job
            service reports. Its job costing page says it tracks predicted costs in quotes against actual costs,
            imports supplier price lists as CSV files and pairs costing with profit reports. See{' '}
            <Link href="/pricing/tradify" className={A}>Tradify pricing</Link>.
          </p>

          <h3>Fergus</h3>
          <p>
            Every Fergus job card has a cost report listing each cost with its type, unit cost, total, markup and
            status; the help article names no plan. Essentials (from $31 a month) includes timesheets, materials
            and price books, with supplier integrations run manually. Professional (from $44 a month) adds
            purchase orders, automatic supplier integrations and business, staff and financial reporting. Fergus
            does not publish a per-user amount. See <Link href="/pricing/fergus" className={A}>Fergus pricing</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            Service Fusion&rsquo;s help center says job costing is included on Plus and Pro and is an add-on on
            Starter. Plus costs $339 a month billed annually or $399 monthly, with unlimited users; the Starter
            add-on price is not published. Costs fill in from the product and service catalog, labor and drive
            time are calculated from each employee&rsquo;s regular rate, and expenses you leave non-billable
            count as internal costs. You choose which users can see costs. See{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <h2 id="quote-only">Quote-only tools</h2>
          <p>
            <strong>FieldPulse</strong>&rsquo;s help center documents the most detailed cost sources: actual
            cost from invoices, material lists and purchase orders, labor from timesheets or labor line items,
            commissions as a cost, and Total Profit and Profit Margin per job. Job costing runs in the web app
            only, and no plan is named. See <Link href="/pricing/fieldpulse" className={A}>FieldPulse pricing</Link>.{' '}
            <strong>Commusoft</strong> tracks labor from digital timesheets and every part and purchase order
            against the job, adds your markup, and reports profit per job, per technician or per service type.
            See <Link href="/pricing/commusoft" className={A}>Commusoft pricing</Link>.
          </p>
          <p>
            <strong>ServiceTitan</strong> says its estimates calculate costs for time, materials and margins and
            markets job cost tracking for commercial work, but does not say which package includes it. See{' '}
            <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link>.{' '}
            <strong>Workiz</strong> factors each technician&rsquo;s hourly rate into job margins, offers custom
            reports on Pro and Ultimate and purchase orders on Ultimate only. See{' '}
            <Link href="/pricing/workiz" className={A}>Workiz pricing</Link>.{' '}
            <strong>Kickserv</strong> lists time and expense tracking and over 20 reports on Start ($60 a month
            for 5 users) but no job costing. See <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link>.
          </p>

          <h2 id="cost-examples">What job costing costs a five-person crew</h2>
          <p>Arithmetic on published monthly prices for the cheapest plan with job costing that fits five users:</p>
          <ul>
            <li><strong>ServiceM8 Premium</strong>: $149, up to 500 jobs a month, unlimited users.</li>
            <li><strong>Housecall Pro Essentials</strong>: $149 billed annually, up to 5 users (Basic covers one user).</li>
            <li><strong>Jobber Grow</strong>, 5-user band: $229 billed annually, $299 with no commitment.</li>
            <li><strong>Tradify Pro</strong>: 5 &times; $51 = $255.</li>
            <li><strong>Service Fusion Plus</strong>: $339 billed annually, $399 monthly, unlimited users.</li>
          </ul>
          <p>
            Head-to-head detail is in{' '}
            <Link href="/compare/jobber-vs-tradify" className={A}>Jobber vs Tradify</Link>,{' '}
            <Link href="/compare/servicem8-vs-tradify" className={A}>ServiceM8 vs Tradify</Link>,{' '}
            <Link href="/compare/jobber-vs-service-fusion" className={A}>Jobber vs Service Fusion</Link> and{' '}
            <Link href="/compare/tradify-vs-fergus" className={A}>Tradify vs Fergus</Link>.
          </p>

          <h2 id="choose">How to choose</h2>
          <ul>
            <li><strong>Solo or small crew on a budget</strong>: Housecall Pro Basic or Tradify Pro are the lowest published entry points.</li>
            <li><strong>Many staff, few jobs</strong>: ServiceM8 Premium and Service Fusion Plus do not charge per user.</li>
            <li><strong>Supplier bills matter</strong>: ServiceM8 from Starter, Tradify Pro and Plus, Jobber Plus or Fergus Professional.</li>
            <li><strong>Quoted vs actual</strong>: ServiceM8 and Tradify document it.</li>
            <li><strong>Before you buy</strong>: ask each vendor to cost one of your past jobs in a demo, with your real pay rates.</li>
          </ul>
          <p>
            How we gather and check these facts is explained on{' '}
            <Link href="/how-we-review" className={A}>how we review</Link>.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            Check the plan before the feature: job costing starts on Basic at Housecall Pro, Pro at Tradify, Grow
            at Jobber, Premium at ServiceM8 and Plus at Service Fusion. Then check whether supplier bills reach
            the job and how labor is costed, because the profit figure is only as good as those inputs.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/guides/field-service-inventory-management-software" className="text-orange-600 hover:text-orange-800">Inventory management software →</Link>
            <Link href="/guides/field-service-quoting-software" className="text-orange-600 hover:text-orange-800">Quoting software →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
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
