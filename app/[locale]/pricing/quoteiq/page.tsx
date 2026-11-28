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
 * /pricing/quoteiq: targets "quoteiq pricing", "quoteiq cost" and "quoteiq plans". No GSC data for
 * this topic yet.
 *
 * Every figure was checked on 2026-11-28 on QuoteIQ's own pages: its pricing page (USD by the "$"
 * sign; no currency code or regional pages shown; stamped "Page updated September 15, 2026" with a
 * plan note "as of October 23, 2026"), its help center article "QuoteIQ Pricing Plans 2026", its
 * Terms & Conditions (last updated November 6, 2026; only the first 100,000 of about 118,000
 * characters were read, so the court venue in Section 25 was not read), its Payments Terms of
 * Service (version 2.2, May 23, 2026) and its home page.
 * Conflicts, both stated on the page: the pricing page names Stripe or Whop as the customer financing
 * providers while the help center names Affirm, Klarna and Afterpay; Max includes 20 users for new
 * subscriptions while the help center says Max subscribers from before October 2026 keep 200 users.
 * IQ Credits and the Done For You setup prices come from the help center only (the pricing page did
 * not mention them).
 * Not used: the pricing page countdown offer and promo code, ratings and review counts, QuoteIQ
 * claims about competitors, prices from before October 2026, "lifetime plans" (named only in the
 * Terms refund clause, with no price published), ACH, dispute and payout details (not stated), and
 * third-party price listings. Cost examples are arithmetic on published prices. Nothing tested
 * hands-on.
 */

const PATH = '/pricing/quoteiq'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'QuoteIQ Pricing (2026): Plans, Extra Users, IQ Credits & Fees'
const DESCRIPTION =
  'QuoteIQ pricing for 2026: five plans from $29.99 to $699.99 a month for 1 to 20 users, $25 per extra user, yearly billing, IQ Credits, add-ons and card fees.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/quoteiq',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'QuoteIQ Pricing', href: PATH },
]

const plans: {
  plan: string
  monthly: string
  yearly: string
  users: string
  credits: string
  storage: string
  adds: string
  highlight?: boolean
}[] = [
  {
    plan: 'Essentials',
    monthly: '$29.99',
    yearly: '$299.99',
    users: '1',
    credits: '500',
    storage: '25 GB',
    adds: 'Estimates, invoices, price book, scheduling and calendar, online payments, customer financing, weather, Google Business Profile reviews, AI Virtual Call Team',
  },
  {
    plan: 'Beginner',
    monthly: '$99.99',
    yearly: '$999.99',
    users: '2',
    credits: '1,500',
    storage: '125 GB',
    adds: 'MapMeasure Pro satellite measuring with AI AutoMeasure, QuoteIQ Cam photos, inspection forms, expense tracking, Google Calendar sync, advanced analytics, mass invoicing',
  },
  {
    plan: 'Pro',
    monthly: '$199.99',
    yearly: '$1,999.99',
    users: '4',
    credits: '3,000',
    storage: '250 GB',
    adds: 'QuickBooks Online, job costing, email and text automation, in-app calling and texting, client portal, e-signatures (QuoteIQ Sign), website contact form, chemical tracking',
    highlight: true,
  },
  {
    plan: 'Elite',
    monthly: '$299.99',
    yearly: '$2,999.99',
    users: '10',
    credits: '5,000',
    storage: '500 GB',
    adds: 'InstaQuote and InstaSchedule (customer self-quoting and booking), route optimization, up to 5 pipelines, inventory, mass text and email campaigns, EmployeeHub with GPS tracking',
  },
  {
    plan: 'Max',
    monthly: '$699.99',
    yearly: '$6,999.99',
    users: '20',
    credits: '8,000',
    storage: '1 TB',
    adds: 'AI Website Builder included, crew management, Sales Team Tracker, unlimited pipelines, dedicated account manager',
  },
]

const teamCosts: { team: string; plan: string; math: string; total: string }[] = [
  { team: '1 user', plan: 'Essentials', math: '$29.99', total: '$29.99' },
  { team: '3 users', plan: 'Beginner + 1 extra user', math: '$99.99 + $25', total: '$124.99' },
  { team: '6 users', plan: 'Pro + 2 extra users', math: '$199.99 + (2 × $25)', total: '$249.99' },
  { team: '12 users', plan: 'Elite + 2 extra users', math: '$299.99 + (2 × $25)', total: '$349.99' },
  { team: '20 users', plan: 'Max', math: '$699.99', total: '$699.99' },
]

const addons: { item: string; price: string; source: string }[] = [
  { item: 'Extra user (login)', price: '$25 per additional user per month, up to 100 extra users', source: 'Pricing page and help center' },
  { item: 'IQ Credit top-ups', price: '2,500 for $25, 5,000 for $50, 10,000 for $100, 25,000 for $250', source: 'Help center' },
  { item: 'Extra file storage', price: '+100 GB $9.99/mo, +500 GB $34.99/mo, +2 TB $99.99/mo', source: 'Pricing page and help center' },
  { item: 'AI Website Builder', price: '$34.99/mo below Max; included on Max', source: 'Pricing page and help center' },
  { item: 'Done For You setup (one time, optional)', price: '$299.99 data import, or $999.99 for the Plus package', source: 'Help center' },
  { item: 'Atlas property details', price: '$99 per ZIP code, $299 for five ZIP codes, $997 per state', source: 'Help center' },
]

const faqs = [
  {
    question: 'How much does QuoteIQ cost?',
    answer:
      'QuoteIQ lists five plans billed monthly in US dollars: Essentials $29.99 a month (1 user), Beginner $99.99 (2 users), Pro $199.99 (4 users), Elite $299.99 (10 users) and Max $699.99 (20 users). Extra users cost $25 per additional user per month on any plan.',
  },
  {
    question: 'Does QuoteIQ charge per user?',
    answer:
      'Partly. Each plan includes a set number of users, and only people with logins count. Beyond that, QuoteIQ charges $25 per additional user per month, up to 100 extra users. The plan price itself is a flat monthly price, not a per-user price.',
  },
  {
    question: 'How much is QuoteIQ billed yearly?',
    answer:
      'QuoteIQ’s help center lists yearly prices of $299.99 (Essentials), $999.99 (Beginner), $1,999.99 (Pro), $2,999.99 (Elite) and $6,999.99 (Max), which it describes as 12 months for the price of 10. Its Terms say annual plans are prepaid for the full term and are non-refundable.',
  },
  {
    question: 'What are IQ Credits?',
    answer:
      'IQ Credits are QuoteIQ’s virtual currency for its AI features. Plans include 500 to 8,000 a month, they reset each billing cycle and do not roll over, and top-ups start at 2,500 credits for $25. Its help center lists the AI Virtual Call Team at 125 credits a minute and AI AutoMeasure at 100 credits a measurement.',
  },
  {
    question: 'Does QuoteIQ have a contract or cancellation fee?',
    answer:
      'QuoteIQ says all plans are month to month with no contracts and no cancellation fees. Its Terms say the subscription renews automatically, you must cancel before the renewal date, fees are non-refundable, and your data is kept read-only for 30 days after cancellation and then permanently deleted.',
  },
  {
    question: 'What are QuoteIQ’s card processing fees?',
    answer:
      'QuoteIQ’s Payments Terms list a processing fee of 3.9% plus $0.30 per transaction, deducted before payout, whether the account is processed through Whop (new accounts) or Stripe (legacy accounts). ACH rates, dispute fees and payout timing are not stated.',
  },
]

const sources = [
  { name: 'QuoteIQ pricing (plans, users, add-ons, trial, FAQ)', url: 'https://myquoteiq.com/pricing/', checked: '2026-11-28' },
  { name: 'QuoteIQ help: QuoteIQ Pricing Plans 2026', url: 'https://intercom.help/quoteiq/en/articles/16152075-quoteiq-pricing-plans-2026', checked: '2026-11-28' },
  { name: 'QuoteIQ Terms & Conditions (last updated November 6, 2026)', url: 'https://myquoteiq.com/terms-conditions/', checked: '2026-11-28' },
  { name: 'QuoteIQ Payments Terms of Service (version 2.2)', url: 'https://myquoteiq.com/quoteiq-payments-terms-of-service/', checked: '2026-11-28' },
  { name: 'QuoteIQ home (trades served)', url: 'https://myquoteiq.com/', checked: '2026-11-28' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function QuoteIQPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/quoteiq"
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
            QuoteIQ pricing (2026): <span className="text-orange-400">plans, extra users, IQ Credits &amp; fees</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every plan, yearly price, add-on, payment fee and term, taken from QuoteIQ&rsquo;s own pricing page,
            help center and terms on November 28, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            QuoteIQ has five plans with a set number of users each, billed monthly in US dollars:{' '}
            <strong>Essentials $29.99</strong> (1 user), <strong>Beginner $99.99</strong> (2 users),{' '}
            <strong>Pro $199.99</strong> (4 users), <strong>Elite $299.99</strong> (10 users) and{' '}
            <strong>Max $699.99</strong> (20 users). Extra users cost <strong>$25</strong> per additional user per
            month. Yearly billing is 12 months for the price of 10. Every plan has a 14-day free trial (card
            required) and no contract. AI features run on monthly IQ Credits, and QuoteIQ&rsquo;s payment
            processing costs 3.9% plus $0.30 per transaction.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>QuoteIQ plans and prices</h2>
          <p className={SUB}>
            Monthly prices and users from QuoteIQ&rsquo;s pricing page on November 28, 2026. Yearly prices and IQ
            Credits from its help center. Each plan includes everything in the plan before it.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Monthly', 'Yearly', 'Users', 'IQ Credits / mo', 'Storage', 'Adds'].map((h) => (
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
                    <td className={TD}>{r.monthly}</td>
                    <td className={TD}>{r.yearly}</td>
                    <td className={TD}>{r.users}</td>
                    <td className={TD}>{r.credits}</td>
                    <td className={TD}>{r.storage}</td>
                    <td className={TD}>{r.adds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Pro is highlighted because QuoteIQ labels it &ldquo;Most Popular&rdquo; and it is the first plan with
            QuickBooks Online and job costing. The help center says these prices apply to new subscriptions from
            October 2026 and that existing subscribers keep their price while they stay on the same plan. It also
            says Max subscribers from before October 2026 keep 200 users; new Max subscriptions include 20.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>How users are counted</h2>
          <p>
            Each plan price is a flat monthly price that includes a set number of users, from 1 on Essentials to 20
            on Max. QuoteIQ says only people with logins count as users. Beyond the included users, it charges
            &ldquo;$25 per additional user per month, on any paid plan, up to 100 extra users,&rdquo; billed monthly
            and separately from the plan. That means a growing crew can either add users at $25 each or move up a
            plan, which also unlocks more features and IQ Credits.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Monthly cost by team size</h2>
          <p className={SUB}>
            Arithmetic on QuoteIQ&rsquo;s published plan prices and its $25 extra-user price, before IQ Credit
            top-ups, add-ons or card fees. Not a quote.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Team', 'Plan', 'Math', 'Per month'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {teamCosts.map((r) => (
                  <tr key={r.team} className={ROW}>
                    <td className={TD1}>{r.team}</td>
                    <td className={TD}>{r.plan}</td>
                    <td className={TD}>{r.math}</td>
                    <td className={TD}>{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Each row uses the cheapest plan that holds the team with extra users added; a higher plan may be worth it
            for its features. Three users on Beginner plus one extra user ($124.99) costs less than Pro ($199.99),
            but Pro adds QuickBooks Online, job costing and automation.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Yearly billing</h2>
          <p>
            QuoteIQ&rsquo;s pricing page shows a &ldquo;Save 2 months yearly&rdquo; toggle, and its help center
            says annual billing gives &ldquo;12 months for the price of 10.&rdquo; The help center lists yearly
            prices of $299.99, $999.99, $1,999.99, $2,999.99 and $6,999.99 from Essentials to Max. The pricing
            page FAQ uses Elite as its example: twelve monthly payments of $299.99 come to $3,599.88, against
            $2,999.99 billed yearly. Extra users are billed monthly. QuoteIQ&rsquo;s Terms say annual plans are
            prepaid for their full term and are non-refundable, so test the product on monthly billing first.
          </p>

          <h2>IQ Credits for AI features</h2>
          <p>
            QuoteIQ&rsquo;s help center calls IQ Credits &ldquo;QuoteIQ&rsquo;s virtual currency&rdquo; that
            &ldquo;power every AI feature.&rdquo; Plans include 500, 1,500, 3,000, 5,000 or 8,000 credits a month,
            and &ldquo;credits reset at the start of each billing cycle and do not roll over.&rdquo; Its examples:
            the AI Virtual Call Team uses 125 credits a minute, AI AutoMeasure 100 credits a measurement and a
            Property Lines lookup 50 credits. Top-ups cost $25 for 2,500 credits, so 1,000 credits cost $10 at that
            rate. On that arithmetic, an hour of AI call answering uses 7,500 credits, more than the Elite
            allowance. Trials get 250 credits rather than the plan&rsquo;s monthly allocation. The pricing page
            itself does not mention IQ Credits.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>QuoteIQ add-ons and extra costs</h2>
          <p className={SUB}>
            The pricing page says payment processing fees and optional services are separate from the subscription
            price. No setup fee is listed for the plans themselves.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Item', 'Price', 'Source'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {addons.map((r) => (
                  <tr key={r.item} className={ROW}>
                    <td className={TD1}>{r.item}</td>
                    <td className={TD}>{r.price}</td>
                    <td className={TD}>{r.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Payment processing and customer financing</h2>
          <p>
            QuoteIQ&rsquo;s Payments Terms (version 2.2, May 23, 2026) say Whop, Inc. is the payment processor for
            all new accounts, with Stripe, Inc. serving legacy accounts until they are migrated. Section 05 lists
            &ldquo;a processing fee of 3.9% plus $0.30 per transaction, deducted from each transaction before the
            payout is deposited,&rdquo; and says the same fee applies through Whop and Stripe. On a $300 job paid
            by card, that is $12.00. The terms list ACH as a payment method but give no ACH rate, and they say
            dispute, chargeback and reserve charges may apply without listing amounts. Payout timing is not
            stated. If you add a surcharge for customers, the terms make you responsible for checking it is
            legal for your business.
          </p>
          <p>
            Customer financing is listed on every plan at no extra subscription cost, and QuoteIQ says it is not
            the lender. Its two pages differ on the providers: the pricing page names Stripe or Whop buy now, pay
            later methods, while the help center names Affirm, Klarna and Afterpay and says you receive the full
            amount up front &ldquo;minus standard BNPL processing fees, which vary by account.&rdquo; Ask QuoteIQ
            which providers and fees apply to your account.
          </p>

          <h2>Trial, contract and cancellation</h2>
          <p>
            Every plan has a 14-day free trial, and a credit or debit card is required to start it. The Terms
            (Section 07, Trial Terms) say that if you do not cancel before the trial ends, it converts to a paid
            plan. A trial only unlocks the plan you chose, and the help center says any upgrade or downgrade during
            the trial ends the trial and charges your card at once, with no second trial. After that, upgrades are
            immediate and prorated, downgrades take effect at the end of the billing cycle, and QuoteIQ says there
            are no fees for changing plans.
          </p>
          <p>
            QuoteIQ says all plans are month to month with &ldquo;no contracts and no cancellation fees.&rdquo; Its
            Terms (last updated November 6, 2026) add the detail:
          </p>
          <ul>
            <li><strong>Renewal</strong> (Section 08, Recurring Billing): &ldquo;Your subscription renews automatically at the end of each billing period.&rdquo;</li>
            <li><strong>Cancellation</strong> (Section 09): you must cancel before your renewal date, and you keep access to the end of the paid period.</li>
            <li><strong>Refunds</strong> (Section 09): &ldquo;All fees are earned when paid and are non-refundable,&rdquo; and annual plans are prepaid and non-refundable.</li>
            <li><strong>Price changes</strong> (Sections 05 and 05A): a Price Lock Guarantee keeps your rate while your subscription is uninterrupted; any change to an active subscription price takes effect at the next billing cycle with notice by email or in-app. No advance notice period is stated.</li>
            <li><strong>Data after cancellation</strong> (Section 16): your data is kept for 30 days read-only and then permanently deleted. Data export is available on all plans.</li>
            <li><strong>Disputes</strong> (Section 25): Georgia law, binding individual arbitration through the American Arbitration Association in the county where you live, and a jury and class action waiver, with a 30-day opt-out from when you first accept the Terms.</li>
            <li><strong>Liability</strong> (Section 23): limited to what you paid QuoteIQ in the prior 12 months.</li>
          </ul>
          <p>
            Sales tax is added where the law requires it. Export your customers, jobs and invoices before you
            cancel, because the 30-day read-only window is short.
          </p>

          <h2>Who QuoteIQ is priced for</h2>
          <p>
            QuoteIQ calls itself field service management software for home service contractors and lists trades
            from lawn care, landscaping, irrigation, pressure washing and window cleaning to pest control, HVAC and
            roofing. Its plan features lean toward exterior and route work: satellite measuring on Beginner,
            chemical tracking on Pro, and customer self-quoting, self-booking and route optimization on Elite. See
            how it fits in our{' '}
            <Link href="/by-industry/pressure-washing">pressure washing software guide</Link>,{' '}
            <Link href="/by-industry/window-cleaning">window cleaning software guide</Link>,{' '}
            <Link href="/by-industry/gutter">gutter software guide</Link>,{' '}
            <Link href="/by-industry/landscaping">landscaping software guide</Link>,{' '}
            <Link href="/by-industry/irrigation">irrigation software guide</Link> and{' '}
            <Link href="/by-industry/mosquito-control">mosquito control software guide</Link>. We also cover it for{' '}
            <Link href="/by-industry/carpet-cleaning">carpet cleaning</Link>,{' '}
            <Link href="/by-industry/air-duct-cleaning">air duct cleaning</Link>,{' '}
            <Link href="/by-industry/chimney-sweep">chimney sweeps</Link> and{' '}
            <Link href="/by-industry/fencing">fencing</Link>. Accounting sync is QuickBooks Online on Pro and up; see{' '}
            <Link href="/quickbooks">FSM software that works with QuickBooks</Link>.
          </p>

          <h2>QuoteIQ vs other tools on price</h2>
          <p>
            The main difference is how each tool counts. QuoteIQ bundles a set number of users into each plan and
            charges $25 for each extra login, GorillaDesk charges per route with free office users, and Jobber and
            Housecall Pro charge per plan and user. QuoteIQ also meters its AI features with IQ Credits. Count your
            logins, trucks and expected AI use before you compare. See{' '}
            <Link href="/pricing/gorilladesk">GorillaDesk pricing</Link>,{' '}
            <Link href="/pricing/jobber">Jobber pricing</Link>,{' '}
            <Link href="/pricing/housecall-pro">Housecall Pro pricing</Link> and{' '}
            <Link href="/pricing/workiz">Workiz pricing</Link>, or our{' '}
            <Link href="/compare/gorilladesk-alternatives">GorillaDesk alternatives</Link> roundup. For the features
            behind the Elite plan, see our{' '}
            <Link href="/guides/field-service-quoting-software">quoting software guide</Link> and{' '}
            <Link href="/guides/route-optimization-software">route optimization guide</Link>.
          </p>

          <h2>Which QuoteIQ plan should you choose?</h2>
          <ul>
            <li><strong>Essentials</strong> if you work alone and need estimates, invoices, scheduling and online payments.</li>
            <li><strong>Beginner</strong> if you quote from satellite measurements or want before and after photos and inspection forms.</li>
            <li><strong>Pro</strong> if you need QuickBooks Online, job costing, automated follow-ups or a client portal.</li>
            <li><strong>Elite</strong> if customers should quote and book themselves online, or you need route optimization and inventory.</li>
            <li><strong>Max</strong> if you run up to 20 users with crews and a sales team and want the website builder and an account manager.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on QuoteIQ pricing">
            QuoteIQ publishes clear monthly prices from $29.99 to $699.99, with users bundled into each plan and $25
            for each extra login. Pick the plan by features first (QuickBooks Online on Pro, self-booking and route
            optimization on Elite), then budget for IQ Credit top-ups if you lean on AI calls, plus the 3.9% plus
            $0.30 card fee.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/by-industry/pressure-washing" className="text-orange-600 hover:text-orange-800">Pressure washing software →</Link>
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
