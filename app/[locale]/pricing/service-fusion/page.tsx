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
 * /pricing/service-fusion: targets "service fusion pricing", "service fusion cost" and "service
 * fusion plans". No GSC data for this topic yet. Alternatives intent stays on
 * /compare/service-fusion-alternatives.
 *
 * Every Service Fusion fact was checked on 2026-11-24 on its own pricing page, Subscription
 * Agreement (last modified 2026-03-23) and help center. Add-on prices are not published, so none
 * are shown. The pricing page says month to month while the Subscription Agreement renews the
 * term automatically; the page states both. Jobber and Housecall Pro figures reuse the site's
 * verified pricing data (dates in `sources`). Per-user and yearly figures are arithmetic on the
 * published prices. Nothing tested hands-on.
 */

const PATH = '/pricing/service-fusion'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Service Fusion Pricing (2026): Plans, Costs & Fees'
const DESCRIPTION =
  'Service Fusion pricing for 2026: Starter $220, Plus $339 and Pro $552 a month billed annually with unlimited users, plus add-ons, payment fees and terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/service-fusion',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Service Fusion Pricing', href: PATH },
]

const plans: { plan: string; annual: string; monthly: string; year: string; users: string; highlight?: boolean }[] = [
  { plan: 'Starter', annual: '$220', monthly: '$259', year: '$2,640 vs $3,108', users: 'Unlimited' },
  { plan: 'Plus', annual: '$339', monthly: '$399', year: '$4,068 vs $4,788', users: 'Unlimited', highlight: true },
  { plan: 'Pro', annual: '$552', monthly: '$649', year: '$6,624 vs $7,788', users: 'Unlimited' },
]

const includes: { plan: string; adds: string; addOns: string }[] = [
  {
    plan: 'Starter',
    adds: 'Customer management, estimates and jobs, scheduling and dispatching, invoicing, integrated payments, QuickBooks integration, project management, reporting, text message alerts',
    addOns: 'Job photo uploads, inventory, job costing, custom documents, eSign, customer web portal, progress billing and recurring invoicing, ServiceCall.ai, GPS fleet tracking',
  },
  {
    plan: 'Plus',
    adds: 'Everything in Starter, plus estimate options, job photo uploads, inventory management, job costing, integrated voice and text',
    addOns: 'Custom documents, eSign, customer web portal, progress billing and recurring invoicing, ServiceCall.ai, GPS fleet tracking',
  },
  {
    plan: 'Pro',
    adds: 'Everything in Plus, plus open API, custom documents, eSign documents, customer web portal, progress billing and recurring invoicing',
    addOns: 'ServiceCall.ai, GPS fleet tracking',
  },
]

/** Annual billing, per month, divided by headcount. Arithmetic on published prices. */
const perUser: { users: string; starter: string; plus: string; pro: string }[] = [
  { users: '3 users', starter: '$73.33', plus: '$113.00', pro: '$184.00' },
  { users: '5 users', starter: '$44.00', plus: '$67.80', pro: '$110.40' },
  { users: '10 users', starter: '$22.00', plus: '$33.90', pro: '$55.20' },
  { users: '15 users', starter: '$14.67', plus: '$22.60', pro: '$36.80' },
  { users: '30 users', starter: '$7.33', plus: '$11.30', pro: '$18.40' },
]

/** Cheapest published plan with QuickBooks sync, billed annually, per month. */
const vsOthers: { users: string; sf: string; jobber: string; hcp: string }[] = [
  { users: '1 user', sf: '$220 (Starter)', jobber: '$99 (Connect)', hcp: '$149 (Essentials)' },
  { users: '5 users', sf: '$220 (Starter)', jobber: '$149 (Connect, 5-user band)', hcp: '$149 (Essentials, up to 5)' },
  { users: '10 users', sf: '$220 (Starter)', jobber: '$229 (Connect, 10-user band)', hcp: '$369 (MAX, 8 users + 2 × $35)' },
  { users: '15 users', sf: '$220 (Starter)', jobber: '$299 (Connect, 15-user band)', hcp: '$544 (MAX, 8 users + 7 × $35)' },
]

const fees: { item: string; rate: string }[] = [
  { item: 'Card payment', rate: '2.90% + $0.30' },
  { item: 'Card not present (keyed in)', rate: 'Extra 1.00%' },
  { item: 'ACH bank payment', rate: '1.00%, maximum $15' },
  { item: 'Batch fee', rate: '$0.75 for each day with transactions' },
  { item: 'Chargeback', rate: '$30.00' },
  { item: 'ACH return', rate: '$5.00' },
  { item: 'PCI non-compliance', rate: '$59.95 a month' },
  { item: 'Optional terminal / mobile terminal', rate: '$7.50 / $1.50 a month' },
]

const faqs = [
  {
    question: 'How much does Service Fusion cost per month?',
    answer:
      'Service Fusion publishes three plans: Starter $220, Plus $339 and Pro $552 a month billed annually, charged as one annual payment at sign-up. On monthly billing the same plans are $259, $399 and $649 a month. Every plan includes unlimited users.',
  },
  {
    question: 'Does Service Fusion charge per user?',
    answer:
      'No. Every plan lists unlimited users at the same flat price. The exception is ServiceCall.ai, which Service Fusion’s help center describes as a per user, per month add-on, with no price published.',
  },
  {
    question: 'Is Service Fusion month to month?',
    answer:
      'Its pricing page says all plans are offered month to month with no contract requirements. Its Subscription Agreement (last modified March 23, 2026) says the term in your order renews automatically for the same length unless either side gives 30 days’ written notice before the term ends. Fees are non-refundable. Check the term on your order before you sign.',
  },
  {
    question: 'Does Service Fusion have a free trial?',
    answer:
      'Its pricing page offers a free demo and does not mention a free trial.',
  },
  {
    question: 'What are Service Fusion’s payment processing fees?',
    answer:
      'Service Fusion Payments, powered by PaySimple, lists 2.90% + $0.30 per card transaction, an extra 1.00% when the card is not present, ACH at 1.00% capped at $15, and a $0.75 batch fee for each day with transactions. Chargebacks cost $30.',
  },
  {
    question: 'Does Service Fusion work with QuickBooks Desktop?',
    answer:
      'Yes. QuickBooks integration is on every plan from Starter, and Service Fusion says it supports QuickBooks Online and Desktop. Its help center says the Desktop tool works only on Windows and needs a small program installed on your computer.',
  },
  {
    question: 'Are there costs on top of the plan price?',
    answer:
      'Possibly. Add-ons such as GPS fleet tracking, ServiceCall.ai and the customer web portal on lower plans have no published prices. The Subscription Agreement adds a $35 charge for each declined electronic payment and treats exporting your data as a paid professional service. Payment processing fees are separate.',
  },
]

const sources = [
  { name: 'Service Fusion pricing (plans, unlimited users, add-ons, month-to-month FAQ)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
  { name: 'Service Fusion help: subscription and billing overview (30-day notice, billing cycles)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360029403592-Service-Fusion-Subscription-and-Billing-Account-Overview', checked: '2026-11-24' },
  { name: 'Service Fusion help: upgrading and adding add-ons', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/38056443351053-Upgrading-your-Service-Fusion-Subscription-and-Adding-Add-ons', checked: '2026-11-24' },
  { name: 'Service Fusion help: Service Fusion Payments fees', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360058547171-Service-Fusion-Payments-Introduction', checked: '2026-11-24' },
  { name: 'Service Fusion Acorn homeowner financing', url: 'https://www.servicefusion.com/acorn-homeowner-financing', checked: '2026-11-24' },
  { name: 'Service Fusion flat rate (Profit Rhino)', url: 'https://www.servicefusion.com/flat-rate', checked: '2026-11-24' },
  { name: 'Service Fusion help: QuickBooks Desktop setup (Windows only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001111652-QuickBooks-Desktop-Setup-Instructions', checked: '2026-11-24' },
  { name: 'Service Fusion help: Open API (Pro only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360035145811-Open-API-Integration-Getting-Started', checked: '2026-11-24' },
  { name: 'Service Fusion vs ServiceTitan page (team size statement about itself)', url: 'https://www.servicefusion.com/comparison/service-fusion-vs-service-titan', checked: '2026-11-24' },
  { name: 'Jobber pricing (plans, team-size bands)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Housecall Pro pricing (plans, users, extra users on MAX)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function ServiceFusionPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/service-fusion"
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
            Service Fusion pricing (2026): <span className="text-orange-400">plans, costs &amp; fees</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every plan, billing option, add-on, payment fee and contract term, taken from Service
            Fusion&rsquo;s own pricing page, Subscription Agreement and help center on November 24, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Service Fusion has three plans, and every plan includes <strong>unlimited users</strong>.
            Billed annually, <strong>Starter</strong> costs $220 a month, <strong>Plus</strong> $339
            and <strong>Pro</strong> $552, charged as one payment at sign-up. Monthly billing costs
            $259, $399 and $649. QuickBooks Online and Desktop sync are on every plan. Add-ons such as
            GPS fleet tracking have no published price, and card payments cost 2.90% + $0.30. The
            pricing page says month to month, but the Subscription Agreement renews your term
            automatically unless you give 30 days&rsquo; notice.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>Service Fusion plans and prices</h2>
          <p className={SUB}>
            Monthly price in USD from Service Fusion&rsquo;s pricing page on November 24, 2026. The
            yearly column is arithmetic: annual billing vs twelve monthly payments.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Billed annually', 'Billed monthly', 'Cost per year', 'Users'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((r) => (
                  <tr key={r.plan} className={r.highlight ? 'bg-orange-50 dark:bg-orange-500/10' : ROW}>
                    <td className={`py-[14px] pl-[22px] pr-4 text-[14.5px] font-bold text-slate-900 dark:text-white ${r.highlight ? 'border-l-[3px] border-orange-500' : ''}`}>
                      {r.plan}
                    </td>
                    <td className={TD}>{r.annual}</td>
                    <td className={TD}>{r.monthly}</td>
                    <td className={TD}>{r.year}</td>
                    <td className={TD}>{r.users}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Plus is highlighted because it is the first plan with job costing, inventory and built-in
            voice and text. Annual billing saves 15%: $468 a year on Starter, $720 on Plus and $1,164
            on Pro.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={H2}>What each plan includes</h2>
          <p className={SUB}>
            From the plan cards on Service Fusion&rsquo;s pricing page. Add-ons are listed without prices.
          </p>
          <div className="grid gap-4">
            {includes.map((p) => (
              <article key={p.plan} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{p.plan}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.55] text-slate-700 dark:text-slate-300">{p.adds}</p>
                <p className="mt-2 text-[14px] leading-[1.55] text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300">Add-ons on this plan:</strong> {p.addOns}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Annual vs monthly billing</h2>
          <p>
            Annual billing is &ldquo;charged as one annual payment at sign-up&rdquo;, so Starter means
            paying $2,640 upfront. Monthly billing has no discount. Service Fusion&rsquo;s help center
            says quarterly and semi-annual cycles also come with discounts, but it does not publish the
            percentages, so ask for them in your quote.
          </p>
          <p>
            Its Subscription Agreement says fees are paid in US dollars, are non-refundable, and are
            debited automatically from your bank account. Upgrades and downgrades do not lead to a
            pro-rated refund, and Service Fusion asks for 30 days&rsquo; notice for any account change.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Cost per user by team size</h2>
          <p className={SUB}>
            Monthly plan price on annual billing divided by headcount. Arithmetic on published prices;
            add-ons and payment fees not included.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Team size', 'Starter', 'Plus', 'Pro'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {perUser.map((r) => (
                  <tr key={r.users} className={ROW}>
                    <td className={TD1}>{r.users}</td>
                    <td className={TD}>{r.starter}</td>
                    <td className={TD}>{r.plus}</td>
                    <td className={TD}>{r.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Service Fusion describes itself as built for teams with 3 to 30 technicians. The flat price
            gets cheaper per person as you hire, which is the main reason to compare it at larger team sizes.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={H2}>Service Fusion vs Jobber and Housecall Pro on price</h2>
          <p className={SUB}>
            Cheapest published plan with QuickBooks sync, billed annually, per month. Features differ
            between these plans, so treat this as a starting point.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Team size', 'Service Fusion', 'Jobber', 'Housecall Pro'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vsOthers.map((r) => (
                  <tr key={r.users} className={ROW}>
                    <td className={TD1}>{r.users}</td>
                    <td className={TD}>{r.sf}</td>
                    <td className={TD}>{r.jobber}</td>
                    <td className={TD}>{r.hcp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Service Fusion Starter includes QuickBooks Online and Desktop. Jobber Connect lists QuickBooks
            Online and Xero, and Housecall Pro lists QuickBooks Online and Desktop on Essentials. Full
            details: <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800 dark:text-orange-400">Jobber pricing</Link> and{' '}
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800 dark:text-orange-400">Housecall Pro pricing</Link>.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Add-ons and extra costs</h2>
          <p>
            Service Fusion lists add-ons on each plan card but publishes no add-on prices. Its help
            center says inventory, job costing, batch assign and schedule, and job photo uploads are
            added by its billing department, and that ServiceCall.ai is billed per user, per month.
            Ask for these prices in writing:
          </p>
          <ul>
            <li><strong>GPS fleet tracking</strong>, an add-on on every plan. The pricing FAQ says it shows trips, distance, idle time and driving behavior.</li>
            <li><strong>ServiceCall.ai</strong>, an add-on on every plan, priced per user.</li>
            <li><strong>Customer web portal, eSign, custom documents and progress billing</strong>, included on Pro and add-ons on Starter and Plus.</li>
            <li><strong>Flat-rate price book</strong> through Profit Rhino, which Service Fusion calls its flat rate partner. No price or plan is stated.</li>
          </ul>
          <p>
            The pricing page lists personalized onboarding and unlimited support by email, phone and live
            chat, and shows no setup fee. It does not say there is none, so confirm onboarding costs too.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Payment processing fees</h2>
          <p className={SUB}>
            Service Fusion Payments, powered by PaySimple. Standard rates from Service Fusion&rsquo;s help
            center on November 24, 2026.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Item', 'Fee'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fees.map((r) => (
                  <tr key={r.item} className={ROW}>
                    <td className={TD1}>{r.item}</td>
                    <td className={TD}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            On a $1,000 invoice, a card payment costs $29.30, a keyed-in card $39.30 and an ACH payment
            $10. ACH is capped at $15, so it costs $15 on any invoice of $1,500 or more.
          </p>
        </section>

        <div className="prose-body mt-12">
          <p>
            For customers who need to spread a large job, Service Fusion offers homeowner financing
            powered by Acorn Finance: $1,000 to $100,000 in most states from more than 30 lenders, with
            2 to 15 year terms and, it says, $0 dealer fees. Availability varies by state and lender.
          </p>

          <h2>Contract, renewal and cancellation</h2>
          <p>
            Service Fusion&rsquo;s pricing page says &ldquo;no contract requirements&rdquo; and that it
            offers all plans on a month-to-month basis. Its Subscription Agreement, last modified March
            23, 2026, reads differently:
          </p>
          <ul>
            <li>The first term is whatever your online order states, and it then renews automatically for periods of the same length.</li>
            <li>Either side can end it with 30 days&rsquo; written notice before the end of the current term.</li>
            <li>Fees are non-refundable, and Service Fusion can change fees upon notice to you.</li>
            <li>No early termination fee is mentioned, but unpaid amounts become due when the agreement ends.</li>
            <li>Exporting your data is a paid professional service, and after termination Service Fusion may deactivate the account and delete its data.</li>
          </ul>
          <p>
            In practice, a monthly order should renew monthly and an annual order yearly. Check the term
            on your order, put the 30-day notice date in your calendar, and export your records before
            you give notice.
          </p>

          <h2>Pros and cons of Service Fusion&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>Published prices with unlimited users on every plan, so hiring does not raise the bill.</li>
            <li>QuickBooks Online and Desktop on the cheapest plan.</li>
            <li>Card, ACH and other payment fees are published in full.</li>
            <li>A monthly option for every plan.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>The $220 entry price is high for one or two people.</li>
            <li>No free trial, only a demo.</li>
            <li>Add-on prices, including GPS and ServiceCall.ai, are not published.</li>
            <li>Annual billing is paid upfront and fees are non-refundable.</li>
            <li>Data export is a paid service, and the agreement renews automatically.</li>
          </ul>

          <h2>Which Service Fusion plan should you choose?</h2>
          <ul>
            <li><strong>Starter</strong> if you need scheduling, invoicing, payments and QuickBooks for a team of three or more.</li>
            <li><strong>Plus</strong> if you want job costing, inventory, photos on jobs, or Service Fusion&rsquo;s built-in voice and text.</li>
            <li><strong>Pro</strong> if you need the API, eSign, a customer portal or recurring invoicing, since buying those as add-ons on lower plans may cost more.</li>
          </ul>
          <p>
            For one or two people, a per-user tool usually costs less: see our{' '}
            <Link href="/compare/service-fusion-alternatives">Service Fusion alternatives</Link>, the{' '}
            <Link href="/pricing">field service software pricing</Link> overview, and{' '}
            <Link href="/by-size">software by business size</Link>. If you run QuickBooks Desktop, our{' '}
            <Link href="/quickbooks">FSM software for QuickBooks</Link> guide shows which plan each tool needs.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Service Fusion pricing">
            Budget $220 a month for Starter, $339 for Plus or $552 for Pro on annual billing, paid upfront,
            with no extra charge per user. Add 2.90% + $0.30 per card payment, ask for every add-on price in
            writing, and check the renewal term on your order, because the agreement renews automatically
            unless you give 30 days&rsquo; notice.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/service-fusion-alternatives" className="text-orange-600 hover:text-orange-800">Service Fusion alternatives →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
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
