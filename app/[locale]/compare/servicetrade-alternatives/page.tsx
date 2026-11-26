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
 * /compare/servicetrade-alternatives: targets "servicetrade alternatives" and "servicetrade
 * competitors". No GSC data for this topic yet. Pricing detail stays on /pricing/servicetrade.
 *
 * ServiceTrade facts come from its pricing page, request-pricing page and Master Services Agreement
 * (last updated August 10, 2026), checked 2026-11-25, plus its commercial HVAC and fire protection
 * pages as cited on /guides/commercial-hvac-software (2026-11-19) and /by-industry/fire-protection
 * (2026-11-21). Alternatives reuse the site's verified pricing pages (ServiceTitan, Commusoft,
 * FieldPulse, FieldEdge and Service Fusion, checked 2026-11-24; Xplor terms 2026-11-20) and the
 * feature facts already sourced on the commercial HVAC guide, fire protection page and
 * fieldedge-vs-fieldpulse. No new fetches.
 *
 * Conflicts: the commercial HVAC guide (2026-11-19) says ServiceTitan quotes per technician; the
 * newer pricing page (2026-11-24) follows the 10-K ("generally based on the number of users"), so
 * this page says users. Commusoft's plans page says contracted licenses renew annually while its
 * terms continue after 12 months until 30 days' notice; both are stated. Service Fusion's pricing
 * page says month to month while its Subscription Agreement renews the ordered term; both stated.
 *
 * Deliberately not used: BuildOps and Inspect Point as listed alternatives (no /pricing page on this
 * site; they are only pointed to via the fire protection page and commercial HVAC guide),
 * Commusoft's early-termination clause 12.6 (not read in full), third-party prices, ratings and
 * free trial claims for ServiceTrade. We do not say why customers leave ServiceTrade. Nothing
 * tested hands-on.
 */

const PATH = '/compare/servicetrade-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTrade Alternatives (2026): 5 Tools Compared on Contracts'
const DESCRIPTION =
  'Compare five ServiceTrade alternatives for commercial and fire work on pricing basis, renewal, notice period, price caps and early exit, from vendor terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicetrade-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceTrade alternatives', href: PATH },
]

type Tool = {
  name: string
  price: string
  term: string
  increase: string
  exit: string
  fit: string
}

const tools: Tool[] = [
  {
    name: 'ServiceTrade (for reference)',
    price: 'Quote only; mainly by technicians, unlimited office users on Select',
    term: 'First term set by your order; renews for one-year terms unless notice 30 days before the end',
    increase: 'Capped at 7% at renewal (exceptions for discounts and reduced quantities)',
    exit: 'Fees paid in advance, non-cancelable and non-refundable; quantities cannot drop mid-term',
    fit: 'Commercial only; Fire Premium adds digital inspections and the Brycer integration',
  },
  {
    name: 'ServiceTitan',
    price: 'Quote only; 10-K says contracts are generally based on the number of users',
    term: '10-K: typically 12 to 36 months, renewing automatically; month to month with 30 days’ notice if there is no Order Form',
    increase: 'May change fees for features of the service; no cap stated',
    exit: 'Termination fee equal to all remaining payments; fees non-refundable',
    fit: 'Commercial and residential; NFPA 25 and 72 forms, deficiency quotes, AHJ-ready reports',
  },
  {
    name: 'Commusoft',
    price: 'Quote only; every office user and technician needs a license',
    term: '12-month first period, then continues until 30 days’ written notice (plans page says renews annually)',
    increase: 'From each anniversary with 30 days’ notice, capped at 10%',
    exit: 'Early-termination terms not covered here; ask',
    fit: 'Commercial HVAC (US site); master contracts across sites, SLA clocks; building maintenance page mentions fire safety inspections',
  },
  {
    name: 'FieldPulse',
    price: 'Quote only; seat-based',
    term: 'One year unless the order says otherwise; renews yearly unless notice 60 days before the end',
    increase: 'May rise at renewal with 60 days’ notice; no cap stated',
    exit: 'No mid-term cancellation except uncured breach or business closure; removed users stay billed',
    fit: 'Fire and security page (no NFPA standard named); projects with staged invoices and purchase orders',
  },
  {
    name: 'FieldEdge',
    price: 'Quote only; 2, 4 or 6 mobile licenses by plan',
    term: 'Annual memberships; linked Xplor terms renew for 12 months unless notice 60 days before the end',
    increase: 'Two months’ notice; you can leave within 10 days if the rise is above CPI',
    exit: 'Early termination fee equal to the monthly fees for the remaining months',
    fit: 'Multi-truck HVAC, plumbing and electrical; no commercial-specific page',
  },
  {
    name: 'Service Fusion',
    price: 'Starter $220, Plus $339, Pro $552 a month billed annually; unlimited users',
    term: 'Pricing page says month to month; agreement renews the ordered term unless 30 days’ notice',
    increase: 'Can change fees upon notice; no cap stated',
    exit: 'No early termination fee mentioned; fees non-refundable',
    fit: 'Progress billing, recurring invoicing and customer portal on Pro; no commercial or fire page on our sources',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'price', label: 'Price and what is counted' },
  { key: 'term', label: 'Term and renewal' },
  { key: 'increase', label: 'Price increases' },
  { key: 'exit', label: 'Leaving early' },
  { key: 'fit', label: 'Commercial and fire fit' },
]

const faqs = [
  {
    question: 'What are the main ServiceTrade alternatives for commercial work?',
    answer:
      'Among tools with published contract terms on our site, ServiceTitan and Commusoft document the most commercial features: ServiceTitan with multi-location accounts, NFPA 25 and 72 forms and progress billing, Commusoft with master contracts across sites and SLA clocks. FieldPulse has a fire and security page and documents projects and purchase orders. FieldEdge and Service Fusion are general service platforms with QuickBooks Online and Desktop on every plan.',
  },
  {
    question: 'Which ServiceTrade alternative has the shortest commitment?',
    answer:
      'Service Fusion’s pricing page says every plan is offered month to month, though its Subscription Agreement renews whatever term you order unless you give 30 days’ notice. Commusoft starts with 12 months and then runs until 30 days’ written notice. ServiceTitan, FieldPulse and FieldEdge describe yearly or longer terms. ServiceTrade renews for one-year terms with 30 days’ notice.',
  },
  {
    question: 'Do other tools cap price increases like ServiceTrade’s 7%?',
    answer:
      'Commusoft’s terms cap increases at 10% from each anniversary, with 30 days’ notice. FieldEdge’s linked Xplor terms give two months’ notice and let you leave within 10 days if a rise is above CPI. FieldPulse, ServiceTitan and Service Fusion state no cap.',
  },
  {
    question: 'Which alternatives charge by technician like ServiceTrade?',
    answer:
      'ServiceTrade prices mainly by technicians and includes unlimited office users on Select. ServiceTitan’s 10-K says contracts are generally based on users, Commusoft licenses every office user and technician, FieldPulse is seat-based, and FieldEdge plans include 2, 4 or 6 mobile licenses. Service Fusion is the exception, with unlimited users at a flat published price.',
  },
  {
    question: 'Which alternatives handle fire inspections?',
    answer:
      'ServiceTitan names NFPA 25 and NFPA 72 forms, turns deficiencies into quotes and produces AHJ-ready reports. FieldPulse has a fire and security page but names no NFPA standard, and Commusoft’s building maintenance page mentions inspecting fire safety equipment. Fire-specific platforms are covered on our fire protection software page.',
  },
  {
    question: 'Can I leave ServiceTrade before the term ends?',
    answer:
      'Its Master Services Agreement makes fees non-cancelable and non-refundable, and quantities cannot decrease during the term. To stop the yearly renewal you give notice at least 30 days before the term ends. After the agreement ends, your data is available to download for 30 days, then may be deleted.',
  },
]

const sources = [
  { name: 'ServiceTrade pricing: Select, Premium and Enterprise suites', url: 'https://servicetrade.com/pricing/', checked: '2026-11-25' },
  { name: 'ServiceTrade request pricing: pay for your technicians', url: 'https://servicetrade.com/request-pricing/', checked: '2026-11-25' },
  { name: 'ServiceTrade Master Services Agreement (updated August 10, 2026)', url: 'https://servicetrade.com/company/terms/msa-aug2026/', checked: '2026-11-25' },
  { name: 'ServiceTrade commercial HVAC (not residential contractors)', url: 'https://servicetrade.com/industries/mechanical-commercial-hvac/', checked: '2026-11-19' },
  { name: 'ServiceTrade fire protection software', url: 'https://servicetrade.com/industries/fire-protection/', checked: '2026-11-21' },
  { name: 'ServiceTitan pricing (packages, Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-24' },
  { name: 'ServiceTitan Form 10-K, fiscal year ended January 31, 2026 (users, contract length, renewal)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-24' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-24' },
  { name: 'ServiceTitan commercial contractor software', url: 'https://www.servicetitan.com/market/commercial-contractor-software', checked: '2026-11-19' },
  { name: 'ServiceTitan help: customer record and locations', url: 'https://help.servicetitan.com/docs/how-do-you-separate-locations-under-the-same-billing-profile', checked: '2026-11-19' },
  { name: 'ServiceTitan help: application for payment and continuation sheet', url: 'https://help.servicetitan.com/docs/complete-application-for-payment-and-continuation-sheet', checked: '2026-11-19' },
  { name: 'ServiceTitan fire and life safety software', url: 'https://www.servicetitan.com/industries/fire-life-safety-software', checked: '2026-11-21' },
  { name: 'Commusoft plans (US): license types, 6 or more staff', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-24' },
  { name: 'Commusoft Standard Customer Terms (linked from the US site)', url: 'https://www.commusoft.com/en-us/company/terms-conditions/', checked: '2026-11-24' },
  { name: 'Commusoft FAQs (pricing on request)', url: 'https://www.commusoft.com/en-us/faqs/', checked: '2026-11-24' },
  { name: 'Commusoft commercial HVAC software (US)', url: 'https://www.commusoft.com/en-us/industries/hvac-software/', checked: '2026-11-19' },
  { name: 'Commusoft service contract management', url: 'https://www.commusoft.com/en-us/features/service-contract-management-software/', checked: '2026-11-19' },
  { name: 'Commusoft building maintenance software', url: 'https://www.commusoft.com/en-us/industries/building-maintenance-software/', checked: '2026-11-21' },
  { name: 'FieldPulse pricing (seat-based)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service (term, renewal, notice, seats)', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-24' },
  { name: 'FieldPulse fire and security solution', url: 'https://www.fieldpulse.com/solutions/fire-and-security', checked: '2026-11-21' },
  { name: 'FieldPulse help: projects', url: 'https://help.fieldpulse.com/jobs/projects/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: purchase orders', url: 'https://help.fieldpulse.com/inventory-materials/purchase-orders/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Desktop', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-desktop/overview.md', checked: '2026-11-24' },
  { name: 'FieldEdge pricing (plans, licenses, trial, annual memberships)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement (October 2023)', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-20' },
  { name: 'Service Fusion pricing (plans, unlimited users, month-to-month FAQ)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceTradeAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicetrade-alternatives"
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
            ServiceTrade alternatives: <span className="text-orange-400">five tools compared on contract terms</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How five field service tools compare with ServiceTrade on what they count, how long you commit, how
            prices can rise and what leaving early costs, from each vendor&rsquo;s own pages and terms, checked
            November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            ServiceTrade is quote only, priced mainly by technicians, and built for commercial service and fire
            protection contractors. Its agreement renews for one-year terms unless you give 30 days&rsquo;
            notice, and caps renewal increases at 7%. <strong>ServiceTitan</strong> covers commercial and fire
            work but typically signs 12 to 36 months with a fee equal to the remaining payments.{' '}
            <strong>Commusoft</strong> caps increases at 10% and runs on 30 days&rsquo; notice after year one.{' '}
            <strong>FieldPulse</strong> and <strong>FieldEdge</strong> need 60 days&rsquo; notice, and{' '}
            <strong>Service Fusion</strong> publishes prices from $220 a month billed annually with unlimited
            users.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="when">When to look beyond ServiceTrade</h2>
          <ul>
            <li><strong>You want a published price</strong>: every ServiceTrade suite sits behind &ldquo;Request pricing&rdquo;. Of the tools here, only Service Fusion publishes prices.</li>
            <li><strong>You want flexibility on headcount</strong>: ServiceTrade&rsquo;s agreement says quantities cannot decrease during the subscription term.</li>
            <li><strong>You also do residential work</strong>: ServiceTrade says it is not for residential contractors, while ServiceTitan covers both.</li>
          </ul>
          <p>
            If none of these applies, ServiceTrade&rsquo;s 7% renewal cap and unlimited office users on Select
            compare well with the terms below; see{' '}
            <Link href="/pricing/servicetrade" className={A}>ServiceTrade pricing</Link> for its suites, setup fees
            and full contract table.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceTrade alternatives compared</h2>
          <p className={SUB}>
            Published prices, contract terms and documented features only, not a hands-on test. Prices are USD per
            month. Sources and check dates are at the end of this page.
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
                {tools.map((t, i) => (
                  <tr key={t.name} className={i === 0 ? 'bg-slate-50 align-top dark:bg-slate-900/60' : 'align-top'}>
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
          <h2 id="alternatives">The alternatives</h2>

          <h3>ServiceTitan</h3>
          <p>
            <strong>What differs:</strong> it serves commercial and residential trades, with one customer account
            holding multiple locations, applications for payment with a schedule of values for progress billing,
            and a fire page that names NFPA 25 and NFPA 72 forms, deficiency quotes and AHJ-ready reports. Its
            10-K says contracts are generally based on users and typically run 12 to 36 months, renewing
            automatically. <strong>Contract contrast:</strong> where ServiceTrade caps renewal increases at 7%,
            ServiceTitan states no cap, and its Terms of Use charge a termination fee equal to all remaining
            payments. See <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link>.
          </p>

          <h3>Commusoft</h3>
          <p>
            <strong>What differs:</strong> its US site targets commercial HVAC, with one master contract applied
            across a parent company&rsquo;s sites, recurring work orders and SLA clocks, and its building
            maintenance page mentions inspecting fire safety equipment. It has no fire protection page and names
            no NFPA standard. Every office user and technician needs a license, and it says it is designed for
            businesses with 6 or more staff. <strong>Contract contrast:</strong> a 12-month first period, then the
            agreement continues until 30 days&rsquo; written notice, with increases capped at 10% from each
            anniversary. See <Link href="/pricing/commusoft" className={A}>Commusoft pricing</Link>.
          </p>

          <h3>FieldPulse</h3>
          <p>
            <strong>What differs:</strong> a fire and security page with asset records (serial number,
            manufacturer, warranty expiration) and custom forms, though it names no NFPA standard or
            deficiency-to-quote workflow. It documents projects with staged invoices and purchase orders, and
            QuickBooks Online and Desktop 2024 or newer on Windows. <strong>Contract contrast:</strong> seat-based
            and quote only like ServiceTrade, but notice to stop renewal is 60 days rather than 30, increases have
            no stated cap, and deactivated users stay on the bill for the term. See{' '}
            <Link href="/pricing/fieldpulse" className={A}>FieldPulse pricing</Link>.
          </p>

          <h3>FieldEdge</h3>
          <p>
            <strong>What differs:</strong> it positions itself for multi-truck HVAC, plumbing and electrical
            companies and publishes no commercial-specific page. Plans include 2, 4 or 6 mobile app licenses,
            with QuickBooks Online and Desktop and a flat-rate price book on every plan, and it says it offers no
            free trial. <strong>Contract contrast:</strong> annual memberships under Xplor terms that renew for 12
            months unless you give 60 days&rsquo; notice, with an early termination fee equal to the remaining
            monthly fees. Price rises come with two months&rsquo; notice, and you can leave within 10 days if a
            rise is above CPI. See <Link href="/pricing/fieldedge" className={A}>FieldEdge pricing</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>What differs:</strong> the only tool here with published prices: Starter $220, Plus $339 and
            Pro $552 a month billed annually, each with unlimited users. Starter billed annually works out to
            $2,640 a year ($220 &times; 12). QuickBooks Online and Desktop are on every plan, and Pro includes
            progress billing, recurring invoicing and a customer web portal. Our sources show no commercial or fire
            protection page for it. <strong>Contract contrast:</strong> the pricing page says month to month,
            while the Subscription Agreement renews the term you order unless either side gives 30 days&rsquo;
            notice. It can change fees upon notice, with no cap stated. See{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <p>
            For fire-specific inspection platforms and commercial-only tools that are not on this list, see our{' '}
            <Link href="/by-industry/fire-protection" className={A}>fire protection software</Link> page and{' '}
            <Link href="/guides/commercial-hvac-software" className={A}>commercial HVAC software</Link> guide.
          </p>

          <h2 id="switching">Switching checklist</h2>
          <ul>
            <li>Find the end date of your current ServiceTrade term and give notice at least 30 days before it.</li>
            <li>Export your data before the agreement ends: ServiceTrade keeps it available for download for 30 days afterwards.</li>
            <li>Count technicians and office users separately, since ServiceTrade does not charge for office users on Select and most alternatives license them.</li>
            <li>Ask each vendor for the first term, renewal length, notice period, price-increase terms and early exit fee in writing.</li>
            <li>Confirm the inspection forms, compliance portal and accounting edition you need before you sign.</li>
          </ul>
          <p>
            For more options, see <Link href="/compare/servicetitan-alternatives" className={A}>ServiceTitan alternatives</Link>,{' '}
            <Link href="/compare/commusoft-alternatives" className={A}>Commusoft alternatives</Link> and the{' '}
            <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            Stay with ServiceTrade if commercial service or fire inspection is all you do and its 7% renewal cap
            and free office users suit you. Look at ServiceTitan if you also do residential work and can commit
            for longer, Commusoft for multi-site commercial contracts with a 10% cap, FieldPulse or FieldEdge if
            you can plan around 60 days&rsquo; notice, and Service Fusion if you want a published price and
            unlimited users.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing/servicetrade" className="text-orange-600 hover:text-orange-800">ServiceTrade pricing →</Link>
            <Link href="/by-industry/fire-protection" className="text-orange-600 hover:text-orange-800">Fire protection software →</Link>
            <Link href="/guides/commercial-hvac-software" className="text-orange-600 hover:text-orange-800">Commercial HVAC software →</Link>
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
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
