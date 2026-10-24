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
 * /pricing/housecall-pro — Week 1 article. Target "housecall pro pricing" / "housecall pro
 * price" (1,300 US/mo, Serpstat KD 14), plus "housecall pro cost", "how much is housecall
 * pro", "housecall pro plans". Keep "jobber vs housecall pro" intent on its own URL.
 *
 * Every figure verified 2026-10-24 on Housecall Pro's own pages: pricing (plans, users,
 * features, add-ons, FAQ), the help-center payment processing article, and the QuickBooks
 * page. Annual totals and savings are arithmetic on those figures. The pricing page does
 * not name the plan required for QuickBooks Desktop, does not price add-ons, and lists an
 * extra-user price only for MAX; the article says so rather than guessing.
 * Jobber figures for the short comparison: Core standard annual rate checked 2026-10-22;
 * Jobber QuickBooks gating from the July 2026 research (see /quickbooks).
 */

// Dates live in content/articles.ts (shared with the sitemap). firstPublished stays
// undefined until the article is actually live.
const { firstPublished, contentUpdated } = articleDates['/pricing/housecall-pro']

export const metadata = buildMetadata({
  title: 'Housecall Pro Pricing (2026): Plans, Costs & Features',
  description:
    'Housecall Pro pricing for 2026: Basic $59, Essentials $149, and MAX $299 per month billed annually, with user limits, add-ons, payment fees, and QuickBooks.',
  slug: 'pricing/housecall-pro',
  type: 'article',
  modifiedTime: contentUpdated,
  // 52-char keyword title; the template suffix would push it past Bing's 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Housecall Pro Pricing', href: '/pricing/housecall-pro' },
]

const plans: { plan: string; annual: string; monthly: string; users: string; adds: string; highlight?: boolean }[] = [
  { plan: 'Basic', annual: '$59/mo', monthly: '$79/mo', users: '1', adds: 'Scheduling, dispatch, estimates, invoicing, payments, price book, online booking, review management' },
  { plan: 'Essentials', annual: '$149/mo', monthly: '$189/mo', users: 'Up to 5', adds: 'Adds routes, flat-rate pricing, checklist automations, employee GPS tracking, commissions, QuickBooks Online sync', highlight: true },
  { plan: 'MAX', annual: '$299/mo', monthly: '$329/mo', users: 'Up to 8 (+$35/mo per extra user)', adds: 'Adds sales proposal tool, Recurring Service Plans, route optimization, open API, dedicated onboarding' },
]

const fees: { method: string; rate: string }[] = [
  { method: 'Card in person (card reader or Tap to Pay)', rate: '2.59%' },
  { method: 'Card entered by the customer on an online invoice', rate: '2.99%' },
  { method: 'PayPal or Venmo via invoice', rate: '2.99%' },
  { method: 'Card keyed in, scanned in the app, or saved on file', rate: '3.49%' },
  { method: 'American Express and commercial cards (any method)', rate: '3.49%' },
  { method: 'ACH / bank transfer', rate: '1%' },
  { method: 'PayPal Pay Later or Klarna', rate: '4.99%' },
  { method: 'Instapay (instant payout)', rate: '+1%' },
  { method: 'Tap to Pay on Mobile', rate: '$5 per active device per month' },
]

const faqs = [
  {
    question: 'How much does Housecall Pro cost per month?',
    answer:
      'With annual billing, Housecall Pro costs $59/month for Basic (1 user), $149/month for Essentials (up to 5 users), and $299/month for MAX (up to 8 users). Month-to-month, the same plans are $79, $189, and $329. Prices were checked on Housecall Pro’s pricing page on October 24, 2026 and exclude sales tax.',
  },
  {
    question: 'Does Housecall Pro have a free plan or free trial?',
    answer:
      'There is no free plan. Housecall Pro offers a 14-day free trial with full access to its MAX plan, and its pricing page says your data is kept if the trial expires so you can resume later by adding billing details.',
  },
  {
    question: 'What percentage does Housecall Pro take on payments?',
    answer:
      'Card payments start at 2.59% in person. Cards entered by the customer on an online invoice are 2.99%, and keyed-in, saved, American Express, and commercial cards are 3.49%. Bank (ACH) payments are 1%. Instant payouts add 1%.',
  },
  {
    question: 'How much does Housecall Pro charge for extra users?',
    answer:
      'The pricing page lists $35/month per additional user on the MAX plan, which includes 8 users. It does not list an extra-user price for Basic (1 user) or Essentials (up to 5 users), so ask Housecall Pro before adding users on those plans.',
  },
  {
    question: 'Does Housecall Pro require a contract?',
    answer:
      'No. Housecall Pro’s pricing FAQ says it does not require long-term contracts and that cancelling is simple. You can still choose annual billing, which costs less per month than month-to-month.',
  },
  {
    question: 'Which Housecall Pro plan includes QuickBooks?',
    answer:
      'QuickBooks Online sync is listed on Essentials ($149/month billed annually) and therefore MAX, not on Basic. Housecall Pro’s QuickBooks page says it also integrates with QuickBooks Desktop but does not name the plan required, so confirm Desktop support for your plan with Housecall Pro.',
  },
  {
    question: 'Is Housecall Pro cheaper than Jobber?',
    answer:
      'Not for one user. Jobber Core starts at $29/month billed annually versus $59/month for Housecall Pro Basic. The difference narrows as your team grows and as you add features such as QuickBooks sync, which neither entry plan includes. Compare both at your exact team size.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, features, add-ons, FAQ)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
  { name: 'Housecall Pro payment processing options (help center)', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-10-24' },
  { name: 'Housecall Pro QuickBooks integration', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-10-24' },
  { name: 'Jobber pricing (Core standard annual rate; QuickBooks Online-only gating checked 2026-07-08)', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-22' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'

export default function HousecallProPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline="Housecall Pro Pricing (2026): Plans, Costs & Features"
        description="Housecall Pro's 2026 plans and prices on annual and monthly billing, user limits, add-ons, payment processing fees, and QuickBooks support, from Housecall Pro's own pages."
        slug="pricing/housecall-pro"
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
            Housecall Pro pricing (2026): <span className="text-orange-400">plans, costs &amp; features</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every plan, user limit, and fee, taken from Housecall Pro&rsquo;s own pricing page and
            help center on October 24, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="October 2026">
          <p>
            Housecall Pro has three plans. <strong>Basic</strong> costs $59/month billed annually
            or $79 month-to-month for one user. <strong>Essentials</strong> costs $149/month billed
            annually or $189 month-to-month for up to 5 users. <strong>MAX</strong> costs
            $299/month billed annually or $329 month-to-month for up to 8 users, plus $35/month for
            each extra user. There is no free plan, but there is a 14-day free trial of MAX, and
            Housecall Pro does not require a long-term contract. The plan you need usually comes
            down to two things: team size and accounting. QuickBooks Online sync starts on
            Essentials, so a one-person business that needs QuickBooks pays $149, not $59. On top
            of the subscription, card payments cost from 2.59% in person and 1% by bank transfer.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>Housecall Pro plans and prices</h2>
          <p className={SUB}>
            Prices in USD, excluding sales tax, from Housecall Pro&rsquo;s pricing page on October
            24, 2026. Housecall Pro also shows short introductory offers on each plan; the prices
            below are the regular rates.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="tnum w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Billed annually', 'Month-to-month', 'Users included', 'What it adds'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((r) => (
                  <tr
                    key={r.plan}
                    className={r.highlight ? 'bg-orange-50 dark:bg-orange-500/10' : 'border-t border-slate-100 dark:border-slate-800'}
                  >
                    <td className={`py-[14px] pl-[22px] pr-4 text-[14.5px] font-bold text-slate-900 dark:text-white ${r.highlight ? 'border-l-[3px] border-orange-500' : ''}`}>
                      {r.plan}
                    </td>
                    <td className={TD}>{r.annual}</td>
                    <td className={TD}>{r.monthly}</td>
                    <td className={TD}>{r.users}</td>
                    <td className={TD}>{r.adds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>What each Housecall Pro plan includes</h2>
          <p>
            <strong>Basic ($59/month billed annually, 1 user)</strong> covers the core of running
            jobs: online booking, scheduling and dispatch, estimates and invoicing, payments and
            consumer financing, a price book, job costing, and review management.
          </p>
          <p>
            <strong>Essentials ($149/month billed annually, up to 5 users)</strong> adds routes,
            flat-rate pricing, checklist automations, photo reports and annotations, employee GPS
            tracking, commissions, and QuickBooks Online sync. For most small teams this is the
            plan where accounting stops being manual.
          </p>
          <p>
            <strong>MAX ($299/month billed annually, up to 8 users)</strong> adds a sales proposal
            tool (which Housecall Pro values at $40/month), Recurring Service Plans, route
            optimization, open API access, a dedicated onboarding specialist, and escalated phone
            support. If you sell maintenance memberships, note that Recurring Service Plans are a
            MAX feature.
          </p>
          <p>
            <strong>Every plan</strong> includes live phone and chat support, the iOS and Android
            mobile app (in English and Spanish), offline viewing in the app, and access to business
            and consumer financing.
          </p>

          <h2>Annual vs monthly billing: what you save</h2>
          <p>
            Annual billing lowers the monthly rate on every plan. Over a year, that works out to:
          </p>
          <ul>
            <li><strong>Basic:</strong> $708 a year billed annually vs $948 month-to-month, a $240 difference.</li>
            <li><strong>Essentials:</strong> $1,788 a year billed annually vs $2,268 month-to-month, a $480 difference.</li>
            <li><strong>MAX:</strong> $3,588 a year billed annually vs $3,948 month-to-month, a $360 difference.</li>
          </ul>
          <p>
            Because there is no long-term contract requirement, month-to-month is a reasonable way
            to test the software on real jobs after the trial before committing to annual billing.
          </p>

          <h2>What Housecall Pro costs by team size</h2>
          <p>
            <strong>Solo operator:</strong> Basic at $59/month billed annually, or Essentials at
            $149 if you need QuickBooks sync or flat-rate pricing. <strong>Two to five
            people:</strong> Essentials at $149/month covers up to five users. <strong>Six to eight
            people:</strong> MAX at $299/month covers up to eight. <strong>Nine or more:</strong>{' '}
            MAX plus $35/month for each user over eight; a ten-person team would be about $369/month
            if that rate applies to your billing term. The pricing page lists an extra-user price
            only for MAX, so if you need two users on Basic or six on Essentials, ask Housecall Pro
            what that costs before you sign up.
          </p>

          <h2>Add-ons and extra costs</h2>
          <p>
            Housecall Pro lists these add-ons on its pricing page without prices: CSR AI, Sales
            Proposal Tool, Pipeline, Payroll, Accounting, Business Coaching, Voice, Campaigns,
            vehicle GPS and dashcams, Tap to Pay, and Websites. Because no add-on prices are
            published there, get a written quote for any add-on you plan to use. The Sales Proposal
            Tool is already included on MAX. QuickBooks itself is a separate subscription: Housecall
            Pro&rsquo;s QuickBooks page notes that QuickBooks is not included in a Housecall Pro
            subscription.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Payment processing fees</h2>
          <p className={SUB}>
            From Housecall Pro&rsquo;s help center, checked October 24, 2026. Mobile check deposit
            is free; consumer financing starts at 3.9%.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Payment method', 'Fee'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fees.map((r) => (
                  <tr key={r.method} className="border-t border-slate-100 dark:border-slate-800">
                    <td className={`py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white`}>{r.method}</td>
                    <td className={TD}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[14.5px] leading-[1.7] text-slate-600 dark:text-slate-300">
            Where the customer pays matters as much as the plan. On a $1,000 invoice, a card tapped
            on site costs $25.90, the same card entered on an online invoice costs $29.90, and a
            saved card or American Express costs $34.90. A bank payment costs $10.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Housecall Pro and QuickBooks</h2>
          <p>
            QuickBooks Online sync is listed as an Essentials feature, so it is included on
            Essentials and MAX but not on Basic. Housecall Pro&rsquo;s QuickBooks page says it
            integrates with both QuickBooks Online and QuickBooks Desktop, and that invoices,
            customers, line items, and payments push into QuickBooks automatically. That page does
            not name the plan required for Desktop, so if you run QuickBooks Desktop, confirm it
            with Housecall Pro for the plan you are buying. To see how other field service tools
            handle QuickBooks Online and Desktop, read our{' '}
            <Link href="/quickbooks">FSM software for QuickBooks</Link> guide.
          </p>

          <h2>Pros and cons of Housecall Pro&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>All three plans have published prices, unlike quote-only tools such as ServiceTitan.</li>
            <li>No long-term contract is required, and the 14-day trial covers every MAX feature.</li>
            <li>Essentials covers up to five users for one price, which is good value for a small crew.</li>
            <li>Review management and online booking are included from Basic.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>QuickBooks sync is not on Basic, so accounting-minded solo operators pay $149, not $59.</li>
            <li>Recurring Service Plans and route optimization are MAX-only.</li>
            <li>Add-on prices are not published on the pricing page.</li>
            <li>Keyed-in, saved, and American Express card payments cost 3.49%.</li>
          </ul>

          <h2>Housecall Pro vs Jobber on price</h2>
          <p>
            For a single user, Jobber is cheaper to start: its Core plan is $29/month billed
            annually, against $59 for Housecall Pro Basic. Neither entry plan includes QuickBooks
            sync, and Jobber syncs with QuickBooks Online only, while Housecall Pro also lists
            Desktop support. The full side-by-side, including fees and features, is in our{' '}
            <Link href="/compare/jobber-vs-housecall-pro">Jobber vs Housecall Pro</Link>{' '}
            comparison, and the{' '}
            <Link href="/compare">full FSM software comparison</Link> covers the other major
            platforms.
          </p>

          <h2>Is Housecall Pro worth the price?</h2>
          <p>
            It fits best when you run a small home-service team, want published prices instead of a
            sales quote, and can use what Essentials includes. A solo operator who only needs
            scheduling and invoicing may pay less elsewhere; a larger operation that needs more
            than eight users or enterprise reporting should also compare quote-based platforms. For
            trade-specific picks, see our guides to{' '}
            <Link href="/by-industry/hvac">HVAC field service management software</Link> and{' '}
            <Link href="/by-industry/plumbing">plumbing software</Link>, or start with{' '}
            <Link href="/for-small-business">field service software for small business</Link>.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Housecall Pro pricing">
            Budget $59/month for one user on Basic, $149 for up to five users or any team that
            needs QuickBooks Online sync, and $299 for up to eight users or Recurring Service
            Plans, all billed annually. Add payment fees from 2.59% for cards in person and 1% for
            bank payments, and get add-on prices in writing before you commit.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/jobber-vs-housecall-pro" className="text-orange-600 hover:text-orange-800">Jobber vs Housecall Pro →</Link>
            <Link href="/quickbooks" className="text-orange-600 hover:text-orange-800">QuickBooks compatibility →</Link>
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
