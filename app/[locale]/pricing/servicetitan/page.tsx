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
 * /pricing/servicetitan: targets "servicetitan pricing", "servicetitan cost" and "how much does
 * servicetitan cost". No GSC data for this topic yet. Alternatives intent stays on
 * /compare/servicetitan-alternatives.
 *
 * ServiceTitan publishes no prices ("Get Pricing"), so this page shows none: no third-party
 * estimates, per the site's pricing policy. Packages, Pro products, payments, financing and the
 * Terms of Use (last updated 2026-09-16) were checked on servicetitan.com on 2026-11-24; contract
 * length, user-based pricing and separately invoiced onboarding come from its Form 10-K for the
 * year ended 2026-01-31. The 10-K says contracts are "generally based on the number of users", so
 * this page does not say "per technician". Limited-time demo gifts are not mentioned. Nothing
 * tested hands-on.
 */

const PATH = '/pricing/servicetitan'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTitan Pricing (2026): Packages, Contracts & Costs'
const DESCRIPTION =
  'ServiceTitan does not publish prices. See its Core, Demand AI, Field AI and MAX packages, 12 to 36 month contracts, extra costs and how to get a fair quote.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/servicetitan',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'ServiceTitan Pricing', href: PATH },
]

const packages: { name: string; price: string; includes: string }[] = [
  {
    name: 'Core',
    price: 'Get Pricing',
    includes: 'Scheduling, dispatching, call booking, invoicing, pricebook, reporting and mobile estimates, plus configurable payroll, commission tracking and customizable memberships.',
  },
  {
    name: 'Demand AI',
    price: 'Get Pricing',
    includes: 'Core plus demand automation: AI targeting and spend allocation, campaign automation, online scheduling, voice and SMS agents, and smart dispatching.',
  },
  {
    name: 'Field AI',
    price: 'Get Pricing',
    includes: 'Core plus field automations: AI sales coaching, equipment intelligence, AI estimates and presentations, multi-modal job assistance and AI job prep.',
  },
  {
    name: 'MAX',
    price: 'Get Pricing',
    includes: 'Everything above plus office automation: AI payments collections, AP approvals and advanced business owner analytics.',
  },
]

const tenK: { point: string; detail: string }[] = [
  { point: 'What sets the price', detail: '“Pricing for these subscriptions are driven by the features included in the package.”' },
  { point: 'Unit of pricing', detail: 'Customer contracts are “generally based on the number of users”, and customers often add users as they hire.' },
  { point: 'Contract length', detail: 'New-customer contracts typically run 12 to 36 months.' },
  { point: 'Renewal', detail: 'Monthly, annual and multi-year contracts renew automatically unless cancelled in advance.' },
  { point: 'Billing', detail: 'Generally billed monthly, in advance.' },
  { point: 'Onboarding and training', detail: 'Professional services, principally onboarding and training, are generally invoiced separately.' },
  { point: 'Usage-based charges', detail: 'Some Pro product revenue is billed monthly in arrears based on consumption; payments and financing revenue is earned per transaction.' },
]

const faqs = [
  {
    question: 'How much does ServiceTitan cost?',
    answer:
      'ServiceTitan does not publish prices. Its pricing page lists four packages, Core, Demand AI, Field AI and MAX, behind a Get Pricing button. Its annual report says pricing depends on the features in the package and that contracts are generally based on the number of users, so you need a quote for your team.',
  },
  {
    question: 'Does ServiceTitan charge per technician?',
    answer:
      'ServiceTitan’s own pricing page does not say. Its Form 10-K says customer contracts are “generally based on the number of users”, and its demo form asks how many technicians you have. Ask your sales rep exactly which users are counted.',
  },
  {
    question: 'How long is a ServiceTitan contract?',
    answer:
      'ServiceTitan’s 10-K says new-customer contracts typically run 12 to 36 months and renew automatically unless cancelled in advance. The exact term is set in your Order Form. Without an Order Form, its Terms of Use make subscriptions month to month with 30 days’ written notice of nonrenewal.',
  },
  {
    question: 'Can I cancel ServiceTitan early?',
    answer:
      'ServiceTitan’s Terms of Use say that if a subscription ends early you will owe a termination fee equal to all the remaining payments. Fees already paid are non-refundable.',
  },
  {
    question: 'Does ServiceTitan have a free trial?',
    answer:
      'No free trial is offered on its pricing, demo or Pro pages. ServiceTitan offers a personalized demo and an interactive demo.',
  },
  {
    question: 'Is onboarding included in the ServiceTitan price?',
    answer:
      'Not necessarily. ServiceTitan’s 10-K says fees for professional services, principally onboarding and training, are generally invoiced separately. No amount is published, so ask for it in your quote.',
  },
  {
    question: 'What are ServiceTitan’s payment processing fees?',
    answer:
      'They are not published. ServiceTitan says processing fees vary by payment method and transaction type, and directs questions to its fintech sales team. Customer financing has no additional fees beyond the dealer cost on each funded loan, which is also not published.',
  },
]

const sources = [
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX; Get Pricing; Pro products)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-24' },
  { name: 'ServiceTitan Form 10-K, fiscal year ended January 31, 2026 (pricing basis, contract length, onboarding fees)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-24' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-24' },
  { name: 'ServiceTitan Pro products', url: 'https://www.servicetitan.com/features/pro', checked: '2026-11-24' },
  { name: 'ServiceTitan Payments', url: 'https://www.servicetitan.com/features/payments', checked: '2026-11-24' },
  { name: 'ServiceTitan customer financing', url: 'https://www.servicetitan.com/features/customer-financing', checked: '2026-11-24' },
  { name: 'ServiceTitan demo', url: 'https://www.servicetitan.com/demo', checked: '2026-11-24' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-24' },
  { name: 'Jobber pricing (plans, trial, billing options)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Housecall Pro pricing (plans, users)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Service Fusion pricing (plans, unlimited users)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function ServiceTitanPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/servicetitan"
        datePublished={firstPublished}
        dateModified={contentUpdated}
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />

      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            ServiceTitan pricing (2026): <span className="text-orange-400">packages, contracts &amp; costs</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What each package includes, how ServiceTitan says it prices, and what the contract commits you
            to, from its own pages and annual report on November 24, 2026. ServiceTitan publishes no prices,
            so we show none.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            ServiceTitan does not publish prices. Its pricing page lists four packages, <strong>Core</strong>,{' '}
            <strong>Demand AI</strong>, <strong>Field AI</strong> and <strong>MAX</strong>, each behind
            &ldquo;Get Pricing&rdquo;. Its annual report says the price depends on the package&rsquo;s
            features and that contracts are generally based on the number of users. New-customer contracts
            typically run 12 to 36 months and renew automatically, onboarding and training are generally
            invoiced separately, and ending early costs all the remaining payments. There is no free trial,
            and payment processing rates are not published.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>ServiceTitan packages</h2>
          <p className={SUB}>
            From ServiceTitan&rsquo;s pricing page on November 24, 2026. It says all packages are available
            for in-home residential customers, with MAX pilots launching for other business types.
          </p>
          <div className="grid gap-4">
            {packages.map((p) => (
              <article key={p.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{p.name}</h3>
                  <span className="text-[13px] font-semibold text-slate-500 dark:text-slate-400">Price: {p.price}</span>
                </div>
                <p className="mt-1.5 text-[14.5px] leading-[1.55] text-slate-700 dark:text-slate-300">{p.includes}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Pro products</h2>
          <p>
            Under &ldquo;Get more with Pro&rdquo;, the pricing page lists AI Virtual Agent, Marketing Pro,
            Contact Center Pro, Pricebook Pro, Fleet Pro, Scheduling Pro, Dispatch Pro and Field Pro (formerly
            Sales Pro), with a link to &ldquo;Upgrade to Pro Products&rdquo;. ServiceTitan does not say which
            packages include them or what they cost, and its 10-K says some Pro product revenue is billed
            monthly in arrears based on consumption. If you need any of them, ask whether it is in the package
            you are quoted or priced on top, and whether it is billed by usage.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>How ServiceTitan says it prices</h2>
          <p className={SUB}>
            From ServiceTitan&rsquo;s Form 10-K for the year ended January 31, 2026.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Topic', 'What the 10-K says'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tenK.map((r) => (
                  <tr key={r.point} className={ROW}>
                    <td className={TD1}>{r.point}</td>
                    <td className={TD}>{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            The 10-K counts about 10,800 Active Customers, which it defines as customers with more than
            $10,000 of annualized billings. That definition is a billing threshold, not a minimum price.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Contract, renewal and cancellation</h2>
          <p>
            ServiceTitan&rsquo;s Terms of Use (last updated September 16, 2026) apply together with your Order
            Form, which sets the term and is not public. The parts that matter for cost:
          </p>
          <ul>
            <li>The term is the one in your Order Form; the 10-K says 12 to 36 months is typical for new customers, renewing automatically.</li>
            <li>Without an Order Form, subscriptions are month to month and renew unless you give at least 30 days&rsquo; written notice of nonrenewal.</li>
            <li>If the subscription ends early, you owe a termination fee equal to all the remaining payments.</li>
            <li>All fees paid are non-refundable, and ServiceTitan may change fees for features of the service.</li>
            <li>Monthly billing is based on the number of subscriptions at the start of the period.</li>
            <li>ServiceTitan does not have to keep your data for more than 60 days after termination, and fees may apply to retrieve it.</li>
          </ul>
          <p>
            Read the Order Form line by line: the term, the number of users, any minimum subscription level,
            and the renewal date. Export your data before the term ends if you plan to leave.
          </p>

          <h2>Costs on top of the subscription</h2>
          <ul>
            <li><strong>Onboarding and training</strong>, which the 10-K says are generally invoiced separately.</li>
            <li><strong>Pro products</strong> not included in your package, some billed by usage.</li>
            <li><strong>Payment processing</strong> through ServiceTitan Payments. ServiceTitan says fees vary by payment method and transaction type and publishes no rates.</li>
            <li><strong>Customer financing</strong>, which has no additional fees beyond the dealer cost on each funded loan your customer accepts. That cost is not published.</li>
            <li><strong>Extra users</strong> as you hire, since contracts are generally based on the number of users.</li>
          </ul>
          <p>
            ServiceTitan&rsquo;s help center lists QuickBooks Desktop (Pro, Premier or Enterprise), QuickBooks
            Online, Sage Intacct, Xero and a general CSV export as available to all customers, and states no
            separate price for them.
          </p>

          <h2>Who ServiceTitan is priced for</h2>
          <p>
            Its pricing page targets residential and commercial trade contractors &ldquo;with four trucks in a
            single shop, to thousands across multiple locations&rdquo;. There is no small-business or starter
            package. For a team of one to three people, a tool with published prices and a trial is usually
            easier to budget for.
          </p>

          <h2>How to get a comparable ServiceTitan quote</h2>
          <ul>
            <li>Ask for the price of each package you are considering, not only the one recommended.</li>
            <li>Ask which users are counted (technicians, office staff, managers) and the price of adding one.</li>
            <li>List every Pro product you want and ask whether each is included, flat priced or usage billed.</li>
            <li>Get the onboarding and training fee in writing.</li>
            <li>Ask for the ServiceTitan Payments rate sheet and the dealer cost on financed jobs.</li>
            <li>Confirm the term length, renewal date, notice period and price increase terms on the Order Form.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Tools with published prices</h2>
          <p className={SUB}>Billed annually, per month, from each vendor&rsquo;s own pricing page.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { tool: 'Jobber', price: 'From $29 for 1 user; 5, 10 and 15 user bands', href: '/pricing/jobber' },
              { tool: 'Housecall Pro', price: 'From $59 for 1 user; MAX $299 for up to 8', href: '/pricing/housecall-pro' },
              { tool: 'Service Fusion', price: 'From $220 with unlimited users', href: '/pricing/service-fusion' },
            ].map((p) => (
              <article key={p.tool} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold">
                  <Link href={p.href} className="text-orange-600 hover:text-orange-800 dark:text-orange-400">{p.tool}</Link>
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-slate-600 dark:text-slate-400">{p.price}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Pros and cons of ServiceTitan&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>Core already includes the pricebook, memberships, payroll and commission tracking.</li>
            <li>Accounting integrations, including QuickBooks Desktop and Sage Intacct, are listed as available to all customers.</li>
            <li>Packages are built around features, so you can match the quote to what you use.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>No published prices and no free trial.</li>
            <li>Typical contracts of 12 to 36 months, with a termination fee equal to all remaining payments.</li>
            <li>Onboarding is generally invoiced separately, and Pro products may add usage-based charges.</li>
            <li>Payment processing rates are not published.</li>
          </ul>
          <p>
            Compare it with other tools in our{' '}
            <Link href="/compare/servicetitan-alternatives">ServiceTitan alternatives</Link>,{' '}
            <Link href="/compare/servicetitan-vs-jobber">ServiceTitan vs Jobber</Link>,{' '}
            <Link href="/compare/housecall-pro-vs-servicetitan">Housecall Pro vs ServiceTitan</Link> and the{' '}
            <Link href="/pricing">field service software pricing</Link> overview.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on ServiceTitan pricing">
            ServiceTitan is quote-only, sells packages priced by features and number of users, and typically
            signs new customers for 12 to 36 months with automatic renewal. Budget separately for onboarding,
            any Pro products and payment processing, and read the Order Form closely, because leaving early
            costs all the remaining payments.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/servicetitan-alternatives" className="text-orange-600 hover:text-orange-800">ServiceTitan alternatives →</Link>
            <Link href="/compare/servicetitan-vs-jobber" className="text-orange-600 hover:text-orange-800">ServiceTitan vs Jobber →</Link>
            <Link href="/pricing/workiz" className="text-orange-600 hover:text-orange-800">Workiz pricing →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">All FSM software pricing →</Link>
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
