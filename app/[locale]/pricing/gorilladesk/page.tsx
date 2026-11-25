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
 * /pricing/gorilladesk: targets "gorilladesk pricing" and "gorilladesk cost". No GSC data for this
 * topic yet.
 *
 * Every figure was checked on 2026-11-25 on GorillaDesk's US pricing page (USD, no regional
 * pricing), its help center (plans and pricing, Growth features, Pro features, VoIP plans, Stripe
 * FAQs, Stripe vs Square), its freeze/cancel page and its Terms (effective March 5, 2020).
 * Conflicts, both stated on the page: the pricing page prices Basic routes 2 to 3 at $50 and route 4+
 * at $30 while the help center says $50 per added schedule; the help center lists VoIP Basic at $65
 * "per user" while the VoIP article says $65 a month with one number. Growth pricing beyond four
 * routes came back as "5 routes total $499" in a fetch summary, which does not fit the listed steps
 * and could not be confirmed with a second fetch, so the page shows Growth only up to four routes.
 * Not used: annual dollar prices (not published; the 11-month figure is arithmetic on "one month
 * free"), ACH fees, any GorillaDesk markup on card fees, billing while frozen, third-party price
 * listings. Route totals are arithmetic on published prices. Nothing tested hands-on.
 */

const PATH = '/pricing/gorilladesk'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'GorillaDesk Pricing (2026): Per-Route Plans, Add-ons & Fees'
const DESCRIPTION =
  'GorillaDesk pricing for 2026: Basic $49, Pro $99 and Growth $149 a month for the first route, unlimited free users, extra routes, texts, VoIP and card fees.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/gorilladesk',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'GorillaDesk Pricing', href: PATH },
]

const plans: { plan: string; price: string; extra: string; attach: string; adds: string; highlight?: boolean }[] = [
  {
    plan: 'Basic',
    price: '$49',
    extra: 'Routes 2 to 3: $50 each; route 4 and up: $30 each',
    attach: '20 MB',
    adds: 'Unlimited users, invoices, estimates and work orders, material tracking and reporting, email and SMS automations',
  },
  {
    plan: 'Pro',
    price: '$99',
    extra: '$50 for each added route',
    attach: '50 MB',
    adds: 'Customer Portal, online booking, route optimization, Stripe and Square subscription billing, QuickBooks Online sync, e-signatures, review engine, time clocking, device tracking, Zapier, commissions',
    highlight: true,
  },
  {
    plan: 'Growth',
    price: '$149',
    extra: 'Route 2: $100; routes 3 to 4: $50 each; five or more routes: ask GorillaDesk',
    attach: '100 MB',
    adds: 'Map estimation, Best Available Time and Job Magnet scheduling, Dynamic Estimates, service plans, sales pipelines, Smart Views, custom fields and job statuses, multi-branch',
  },
]

const routeCosts: { routes: string; basic: string; pro: string; growth: string }[] = [
  { routes: '1 route', basic: '$49', pro: '$99', growth: '$149' },
  { routes: '2 routes', basic: '$99', pro: '$149', growth: '$249' },
  { routes: '3 routes', basic: '$149', pro: '$199', growth: '$299' },
  { routes: '4 routes', basic: '$179', pro: '$249', growth: '$349' },
  { routes: '5 routes', basic: '$209', pro: '$299', growth: 'Ask GorillaDesk' },
]

const voip: { plan: string; price: string; detail: string }[] = [
  { plan: 'VoIP Basic', price: '$65', detail: '1 phone number included; for the Basic plan' },
  { plan: 'VoIP Pro', price: '$95', detail: '2 numbers included plus $10 a month of call credit (about 4 hours); Pro and Growth' },
  { plan: 'VoIP Growth', price: '$275', detail: '2 numbers included plus $25 a month of call credit (about 8 hours)' },
]

const faqs = [
  {
    question: 'How much does GorillaDesk cost?',
    answer:
      'GorillaDesk lists three US plans priced per route (one technician’s schedule): Basic $49 a month, Pro $99 and Growth $149 for the first route. Extra routes cost $30 to $100 each depending on the plan, and office users are unlimited and free on every plan.',
  },
  {
    question: 'Does GorillaDesk charge per user?',
    answer:
      'No. Its pricing page says it is priced per route (schedule), not per user. Only users assigned to a schedule need a paid seat; admin, manager, sales and crew users are free. A crew that rides together can share one route.',
  },
  {
    question: 'How much is GorillaDesk billed yearly?',
    answer:
      'GorillaDesk offers yearly billing with one month free, billed up front, but does not publish the yearly dollar amounts. Paying 11 months of the monthly price would be $539 for Basic, $1,089 for Pro and $1,639 for Growth with one route; confirm the exact figure in your quote.',
  },
  {
    question: 'Does GorillaDesk have a contract or setup fee?',
    answer:
      'Its pricing page says there are no setup fees, no contracts and no annual lock-in, and monthly plans can be cancelled at any time without penalty. Its Terms say payments already made are not refunded, and data may be permanently deleted any time after 30 days from termination.',
  },
  {
    question: 'What are GorillaDesk’s card processing fees?',
    answer:
      'GorillaDesk connects to Stripe or Square rather than running its own processor. Its help center lists Stripe at 2.9% + 30¢ per charge (2.7% + 5¢ with the Stripe card reader) and Square at 2.9% + 30¢ online or 2.6% + 15¢ in the field with Square hardware.',
  },
  {
    question: 'Which GorillaDesk plan includes QuickBooks Online and route optimization?',
    answer:
      'Pro. GorillaDesk’s help center lists Sync to QuickBooks Online, route optimization, Customer Portal and online booking among the Pro plan features. Growth adds Best Available Time and Job Magnet scheduling and Drive Time route optimization.',
  },
]

const sources = [
  { name: 'GorillaDesk pricing (US plans, routes, add-ons, trial, FAQ)', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-25' },
  { name: 'GorillaDesk help: plans and pricing', url: 'https://intercom.help/gorilladesk/en/articles/431660-plans-pricing', checked: '2026-11-25' },
  { name: 'GorillaDesk help: features available on the Growth plan', url: 'https://intercom.help/gorilladesk/en/articles/8569025-features-available-on-the-growth-plan', checked: '2026-11-25' },
  { name: 'GorillaDesk help: Pro plan features and benefits', url: 'https://intercom.help/gorilladesk/en/collections/1383598-pro-plan-features-benefits-v3', checked: '2026-11-25' },
  { name: 'GorillaDesk help: VoIP plans explained', url: 'https://intercom.help/gorilladesk/en/articles/10304062-voip-plans-explained', checked: '2026-11-25' },
  { name: 'GorillaDesk help: Stripe FAQs', url: 'https://intercom.help/gorilladesk/en/articles/431652-stripe-faqs', checked: '2026-11-25' },
  { name: 'GorillaDesk help: Stripe vs Square', url: 'https://intercom.help/gorilladesk/en/articles/5342695-stripe-vs-square', checked: '2026-11-25' },
  { name: 'GorillaDesk: freeze or cancel your account', url: 'https://gorilladesk.com/not-using', checked: '2026-11-25' },
  { name: 'GorillaDesk Terms', url: 'https://gorilladesk.com/terms/', checked: '2026-11-25' },
  { name: 'GorillaDesk home (trades served, team size)', url: 'https://gorilladesk.com/', checked: '2026-11-25' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function GorillaDeskPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/gorilladesk"
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
            GorillaDesk pricing (2026): <span className="text-orange-400">per-route plans, add-ons &amp; fees</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every US plan, extra-route price, add-on, payment fee and term, taken from GorillaDesk&rsquo;s own
            pricing page, help center and terms on November 25, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            GorillaDesk prices by <strong>route</strong>, not by user: a route is one technician&rsquo;s
            schedule, and office users are unlimited and free. The first route costs <strong>$49</strong> a month
            on <strong>Basic</strong>, <strong>$99</strong> on <strong>Pro</strong> and <strong>$149</strong> on{' '}
            <strong>Growth</strong>, in US dollars, with each extra route from $30 to $100. There are no setup
            fees or contracts, yearly billing gives one month free, and there is a 14-day free trial. Texts,
            the VoIP phone system ($65 to $275 a month) and Stripe or Square card fees cost extra.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>GorillaDesk plans and prices</h2>
          <p className={SUB}>
            US monthly prices from GorillaDesk&rsquo;s pricing page on November 25, 2026, for the first route.
            Features from its help center.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'First route', 'Each extra route', 'Attachments', 'Adds'].map((h) => (
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
                    <td className={TD}>{r.price}</td>
                    <td className={TD}>{r.extra}</td>
                    <td className={TD}>{r.attach}</td>
                    <td className={TD}>{r.adds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Pro is highlighted because it is the first plan with route optimization, online booking and QuickBooks
            Online sync. Each plan includes everything in the plan before it. GorillaDesk&rsquo;s help center
            article on plans says each added schedule costs $50 on Basic, while its pricing page drops routes 4
            and up to $30; the pricing page is used here.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>How per-route pricing works</h2>
          <p>
            GorillaDesk&rsquo;s pricing page says it is &ldquo;priced per route (schedule), not per user.&rdquo; A
            route is one technician running their own schedule, and a crew that rides together can share one.
            Only users assigned to a schedule need a paid seat; admin, manager, sales and crew users are free on
            every plan. There is no minimum beyond one route.
          </p>
          <p>
            That means your bill follows the number of trucks on the road, not the size of your office. A business
            with two technicians and three office staff pays for two routes.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Monthly cost by number of routes</h2>
          <p className={SUB}>
            Arithmetic on the extra-route prices on GorillaDesk&rsquo;s pricing page, before texts, phone or card
            fees. Not a quote.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Routes', 'Basic', 'Pro', 'Growth'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {routeCosts.map((r) => (
                  <tr key={r.routes} className={ROW}>
                    <td className={TD1}>{r.routes}</td>
                    <td className={TD}>{r.basic}</td>
                    <td className={TD}>{r.pro}</td>
                    <td className={TD}>{r.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Totals are arithmetic on GorillaDesk&rsquo;s listed per-route prices. We could not confirm Growth
            pricing for five or more routes, so ask GorillaDesk for a written figure if you run five trucks or
            more.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Yearly billing</h2>
          <p>
            GorillaDesk offers monthly or yearly billing. Yearly is advertised as &ldquo;one month free&rdquo; and
            its help center says you pay for eleven months, billed up front. It does not publish the yearly totals.
            Eleven months of the one-route price would be $539 on Basic, $1,089 on Pro and $1,639 on Growth. On a
            yearly plan, adding a schedule means contacting Customer Success.
          </p>

          <h2>Add-ons and extra costs</h2>
          <ul>
            <li><strong>Text messaging</strong>: $5 a month for a local number that forwards to your main line, plus credits for outgoing texts: $50 for 1,000, $100 for 2,500 or $200 for 8,000. Credits never expire and incoming texts are free.</li>
            <li><strong>Custom documents</strong>: no additional cost, per the pricing page.</li>
            <li><strong>Data migration and onboarding</strong>: free. GorillaDesk imports contact details, service and billing addresses, notes and starting balances, but not full past service or billing history.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>GorillaDesk VoIP phone plans</h2>
          <p className={SUB}>From GorillaDesk&rsquo;s help center article on VoIP plans, dated March 26, 2026.</p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['VoIP plan', 'Per month', 'Includes'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {voip.map((r) => (
                  <tr key={r.plan} className={ROW}>
                    <td className={TD1}>{r.plan}</td>
                    <td className={TD}>{r.price}</td>
                    <td className={TD}>{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Calls are billed from credit: local numbers 4¢ a minute outgoing and 3¢ incoming, toll-free 4¢ outgoing
            and 7¢ incoming. AI agent calls cost 10¢ a call plus 13¢ a minute (local) or 17¢ (toll-free). Extra
            numbers are $5 a month local or $10 toll-free. The plans article lists VoIP Basic at $65 a month
            &ldquo;per user&rdquo;; the VoIP article lists $65 a month with one number. Ask which applies to your
            team. Our{' '}
            <Link href="/guides/ai-answering-service-for-contractors" className="text-orange-600 hover:text-orange-800 dark:text-orange-400">AI answering guide</Link>{' '}
            compares other vendors&rsquo; phone agents.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Payment processing fees</h2>
          <p>
            GorillaDesk does not run its own card processor; it connects to Stripe or Square. Its help center lists
            Stripe at 2.9% + 30¢ per successful charge and 2.7% + 5¢ in person with the Stripe card reader, paid
            out every 48 hours. It lists Square at 2.9% + 30¢ for card-not-present payments and 2.6% + 15¢ in the
            field with Square hardware. On a $200 treatment paid online by card, that is $6.10. The help articles
            do not mention ACH rates or any GorillaDesk fee on top, and they date from 2025, so check current rates
            with Stripe or Square. Subscription billing through Stripe and Square is a Pro feature.
          </p>

          <h2>Trial, contract and cancellation</h2>
          <p>
            GorillaDesk offers a 14-day free trial with no credit card. Its pricing page says &ldquo;No setup fees,
            no contracts, no annual lock-in,&rdquo; and that monthly plans can be cancelled at any time without
            penalty. Upgrades take effect immediately and downgrades at the end of the billing cycle. You can also
            freeze the account for a seasonal break: the app is locked but your data is kept. GorillaDesk does not
            say on the pages we read whether a frozen account is billed.
          </p>
          <p>
            Its Terms (effective March 5, 2020, under Florida law with courts in Boca Raton) say you cancel inside
            your account and keep access until the end of the paid period, that payments already made and add-ons
            such as SMS packages are not refunded, and that GorillaDesk may permanently delete your account and data
            any time after 30 days from termination. Its cancel page warns that cancelling loses customers, jobs,
            invoices, payments and documents. The Terms do not set a term length, renewal rule or price-change
            notice, so export your records before you cancel.
          </p>

          <h2>Who GorillaDesk is priced for</h2>
          <p>
            GorillaDesk calls itself pest control software and says it is for pest control companies with 1 to 20+
            technicians, not a 50+ technician commercial-only system. It also lists templates for lawn care,
            landscaping, mosquito, termite, cleaning, pool and other trades. See our{' '}
            <Link href="/by-industry/pest-control">pest control software guide</Link> and{' '}
            <Link href="/by-industry/landscaping">landscaping software guide</Link> for how it fits next to
            generalist tools. Accounting sync is QuickBooks Online on Pro; see{' '}
            <Link href="/quickbooks">FSM software that works with QuickBooks</Link>.
          </p>

          <h2>GorillaDesk vs other tools on price</h2>
          <p>
            The main difference is the billing unit. GorillaDesk charges per route with free office users, Jobber
            and Housecall Pro charge per plan and user, and ServiceM8 charges by jobs a month. Compare like for
            like by counting your technicians, office staff and monthly jobs. See{' '}
            <Link href="/pricing/jobber">Jobber pricing</Link>,{' '}
            <Link href="/pricing/housecall-pro">Housecall Pro pricing</Link>,{' '}
            <Link href="/pricing/servicem8">ServiceM8 pricing</Link> and{' '}
            <Link href="/pricing/kickserv">Kickserv pricing</Link>.
          </p>

          <h2>Which GorillaDesk plan should you choose?</h2>
          <ul>
            <li><strong>Basic</strong> if you need scheduling, invoicing, estimates and automated reminders, and route 4 and up is cheapest here at $30.</li>
            <li><strong>Pro</strong> if you want route optimization, online booking, a customer portal, subscription billing or QuickBooks Online sync.</li>
            <li><strong>Growth</strong> if you sell service plans, run sales pipelines, need custom fields or operate more than one branch.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on GorillaDesk pricing">
            GorillaDesk is priced for route-based businesses: you pay per technician&rsquo;s schedule from $49 a
            month, and office users cost nothing. Count your routes, pick Pro if you need route optimization or
            QuickBooks Online, and budget separately for texts, VoIP and Stripe or Square card fees.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/by-industry/pest-control" className="text-orange-600 hover:text-orange-800">Pest control software →</Link>
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
