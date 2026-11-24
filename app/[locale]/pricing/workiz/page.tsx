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
 * /pricing/workiz: targets "workiz pricing", "workiz cost" and "workiz plans". No GSC data for this
 * topic yet. Alternatives intent stays on /compare/workiz-alternatives.
 *
 * Workiz publishes no prices ("Request pricing"), so this page shows none: no third-party
 * estimates, per the site's pricing policy. Plans, add-ons, trial, payments, financing and
 * QuickBooks were checked on workiz.com on 2026-11-24; Terms of Service v1.9 (last updated
 * 2026-11-02) clauses on billing, increases, phone usage and chargebacks were read on 2026-11-24,
 * and the 12-month term with 30 days' notice on 2026-11-21 (same version). help.workiz.com returned
 * 403, so help-center fee figures are not used. The time-limited new-customer discount is not
 * mentioned. Nothing tested hands-on.
 */

const PATH = '/pricing/workiz'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Workiz Pricing (2026): Plans, Add-ons & Contract Terms'
const DESCRIPTION =
  'Workiz does not publish prices. Compare Standard, Pro and Ultimate, Genius add-ons, the 7-day trial, renewal terms and payment costs before you get a quote.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/workiz',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Workiz Pricing', href: PATH },
]

const planRows: { feature: string; standard: string; pro: string; ultimate: string }[] = [
  { feature: 'Price', standard: 'Request pricing', pro: 'Request pricing', ultimate: 'Request pricing' },
  { feature: 'Phone system, 2-way texting, online booking', standard: 'Included', pro: 'Included', ultimate: 'Included' },
  { feature: 'Scheduling, jobs, estimates and invoices', standard: 'Included', pro: 'Included', ultimate: 'Included' },
  { feature: 'QuickBooks integration', standard: 'Included', pro: 'Included', ultimate: 'Included' },
  { feature: 'Automations', standard: '5', pro: '10', ultimate: '30' },
  { feature: 'Reports', standard: 'Built-in', pro: 'Custom', ultimate: 'Custom' },
  { feature: 'Genius Leads and Genius Scheduling (AI)', standard: 'No', pro: 'Included', ultimate: 'Included' },
  { feature: 'Service plans, flat rate, sales proposals', standard: 'No', pro: 'No', ultimate: 'Included' },
  { feature: 'Equipment tracking, inventory, purchase orders', standard: 'No', pro: 'No', ultimate: 'Included' },
  { feature: 'Open API and franchise management', standard: 'No', pro: 'No', ultimate: 'Included' },
]

const faqs = [
  {
    question: 'How much does Workiz cost?',
    answer:
      'Workiz does not publish prices. Its pricing page lists Standard, Pro and Ultimate with a Request pricing button on each, and says subscription prices exclude sales tax. The only figure it gives is that an annual plan can save $400 or more.',
  },
  {
    question: 'Does Workiz have a free plan or free trial?',
    answer:
      'There is no free plan on the pricing page. Workiz offers a 7-day free trial with no credit card required. Its Terms of Service say fees become due when the trial ends.',
  },
  {
    question: 'Is Workiz a yearly contract?',
    answer:
      'Your term is set in your Sales Order. When we read Workiz’s Terms of Service (version 1.9), the standard term was 12 months, renewing for 12 months unless you give 30 days’ notice. Billing cycles renew automatically, payments are non-refundable, and Workiz may raise fees by up to 10% a year with 30 days’ written notice.',
  },
  {
    question: 'What Workiz add-ons cost extra?',
    answer:
      'Genius Phone, Genius Answering (the AI answering service Workiz calls Jessica) and Genius Marketing are sold separately, as are card readers. Workiz publishes no add-on prices, and its terms say some call types are billed at different per-minute rates or multipliers.',
  },
  {
    question: 'What are Workiz Pay processing fees?',
    answer:
      'Workiz does not publish current card or ACH rates on its website. Its terms set a non-refundable $25 fee for each chargeback. Tap to Pay needs no card reader and is free to set up, but its processing rate is not published.',
  },
  {
    question: 'Does Workiz work with QuickBooks Desktop?',
    answer:
      'Yes. Workiz’s QuickBooks page says it integrates with QuickBooks Online and Desktop, and the pricing page lists QuickBooks on Standard, so every plan has it. Data flows one way, from Workiz to QuickBooks.',
  },
  {
    question: 'Which Workiz plan do I need for maintenance plans?',
    answer:
      'Ultimate. Service plans, flat rate, sales proposals and equipment tracking are listed only on Ultimate, so ask for an Ultimate quote if you sell maintenance agreements.',
  },
]

const sources = [
  { name: 'Workiz pricing plans (plans, features by plan, add-ons, trial, FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'Workiz Terms of Service v1.9 (last updated November 2, 2026): billing, increases, phone usage, chargebacks; 12-month term and notice read 2026-11-21', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-24' },
  { name: 'Workiz Genius Answering', url: 'https://www.workiz.com/features/genius-answering/', checked: '2026-11-24' },
  { name: 'Workiz Pay', url: 'https://www.workiz.com/features/workiz-pay/', checked: '2026-11-24' },
  { name: 'Workiz card readers and Tap to Pay', url: 'https://www.workiz.com/features/card-readers/', checked: '2026-11-24' },
  { name: 'Workiz consumer financing (Wisetack, Sunbit)', url: 'https://www.workiz.com/features/consumer-financing/', checked: '2026-11-24' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-24' },
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

export default function WorkizPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/workiz"
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
            Workiz pricing (2026): <span className="text-orange-400">plans, add-ons &amp; terms</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What each plan includes, which add-ons cost extra, and what the terms commit you to, from
            Workiz&rsquo;s own pages on November 24, 2026. Workiz publishes no prices, so we show none.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Workiz does not publish prices. Its three plans, <strong>Standard</strong>, <strong>Pro</strong>{' '}
            and <strong>Ultimate</strong>, each show &ldquo;Request pricing&rdquo;, and the only figure on the
            page is that an annual plan can save $400 or more. Every plan includes the phone system, 2-way
            texting, online booking and QuickBooks. Service plans, flat rate and equipment tracking are on
            Ultimate only, and Genius Phone, Genius Answering and Genius Marketing are sold separately. There
            is a 7-day free trial with no credit card. The terms renew automatically and allow up to a 10%
            yearly increase.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>Workiz plans compared</h2>
          <p className={SUB}>
            From Workiz&rsquo;s pricing page on November 24, 2026. Each plan includes everything in the plan
            before it. No plan shows a price or a user limit.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Feature', 'Standard', 'Pro', 'Ultimate'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planRows.map((r) => (
                  <tr key={r.feature} className={ROW}>
                    <td className={TD1}>{r.feature}</td>
                    <td className={TD}>{r.standard}</td>
                    <td className={TD}>{r.pro}</td>
                    <td className={TD}>{r.ultimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Workiz labels Ultimate &ldquo;Most popular&rdquo;. Because so many trade features sit on it, a
            Standard quote may not cover what an HVAC or appliance repair shop needs.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Add-ons and usage charges</h2>
          <p>
            Workiz lists three &ldquo;Genius&rdquo; add-ons as sold separately, with no published prices:
          </p>
          <ul>
            <li><strong>Genius Phone</strong>: calls, emails and texts in one place with AI insights.</li>
            <li><strong>Genius Answering</strong>: answers calls, emails and texts 24/7. Its AI agent, Jessica, works in English and Spanish.</li>
            <li><strong>Genius Marketing</strong>: campaigns built on your business data, plus online reputation.</li>
          </ul>
          <p>
            Card readers are also sold separately. Phone usage has its own rules in the Terms of Service:
            certain call types may be billed at different per-minute rates or multipliers, an account with
            auto-refill is charged automatically when funds run out, Workiz may change its phone plan at any
            time, and phone charges are non-cancellable and non-refundable. Ask for the per-minute rates and
            any included allowance before you switch your business number.
          </p>

          <h2>Annual vs monthly billing</h2>
          <p>
            The pricing FAQ says choosing an annual plan can save $400 or more, without giving the monthly
            and annual prices. Ask your quote to show both, plus the total for the first year, so you can
            check the saving yourself.
          </p>

          <h2>Free trial and onboarding</h2>
          <p>
            Workiz offers a 7-day free trial with no credit card required. Its Terms of Service say the default
            trial is 7 days and that fees become due when the trial ends. No setup or onboarding fee appears
            on the pricing page, but fees are defined in each customer&rsquo;s Sales Order, so confirm it.
          </p>

          <h2>Contract, renewal and price increases</h2>
          <p>Workiz&rsquo;s Terms of Service (version 1.9, last updated November 2, 2026) say:</p>
          <ul>
            <li>Your subscription term is the one in your Sales Order. When we read the terms on November 21, the standard term was 12 months, renewing for 12 months unless you give 30 days&rsquo; notice.</li>
            <li>Billing cycles renew automatically at the start of each renewal term.</li>
            <li>Fees are non-cancelable and payments are non-refundable.</li>
            <li>Workiz may raise fees by up to 10% a year, with at least 30 days&rsquo; written notice.</li>
            <li>Late amounts accrue interest of 1.5% a month.</li>
            <li>You are responsible for backing up your own content.</li>
          </ul>

          <h2>Payments and financing</h2>
          <p>
            Workiz Pay rates are not published on Workiz&rsquo;s website. Tap to Pay needs no card reader and
            is free to set up, and Workiz card readers work only with Workiz Pay. The Terms of Service set a
            non-refundable $25 fee for each chargeback, whatever the outcome. Ask for the full card, ACH and
            payout fee schedule in writing.
          </p>
          <p>
            For customers, Workiz offers financing through Wisetack and Sunbit, with offers from 0% to 35.9%
            APR based on credit and plans from 3 months to 10 years. Workiz does not publish what the business
            pays per financed job.
          </p>

          <h2>QuickBooks</h2>
          <p>
            QuickBooks is listed on Standard, so every plan has it. Workiz&rsquo;s QuickBooks page says it
            integrates with QuickBooks Online and Desktop and that data flows one way, from Workiz to
            QuickBooks, automatically or manually.
          </p>

          <h2>How to get a comparable Workiz quote</h2>
          <ul>
            <li>Ask for Standard, Pro and Ultimate prices side by side, monthly and annual.</li>
            <li>Ask how users are counted and what adding one costs, since the pricing page names no user limit.</li>
            <li>Get each Genius add-on price, the phone per-minute rates and any included allowances.</li>
            <li>Get the Workiz Pay card, ACH and instant payout rates.</li>
            <li>Confirm the term, renewal date and notice period on your Sales Order.</li>
            <li>Ignore any introductory discount when you compare, and budget for the standard price after it ends.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Tools with published prices</h2>
          <p className={SUB}>Billed annually, per month, from each vendor&rsquo;s own pricing page.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { tool: 'Jobber', price: 'From $29 for 1 user; 14-day trial', href: '/pricing/jobber' },
              { tool: 'Housecall Pro', price: 'From $59 for 1 user; 14-day trial', href: '/pricing/housecall-pro' },
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
          <h2>Pros and cons of Workiz&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>A 7-day free trial with no credit card, unlike most quote-only tools.</li>
            <li>The phone system, 2-way texting, online booking and QuickBooks Online and Desktop on every plan.</li>
            <li>Price increases are capped at 10% a year in the terms.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>No published prices, user limits or add-on prices.</li>
            <li>Service plans, flat rate and equipment tracking need Ultimate.</li>
            <li>The terms renew automatically and payments are non-refundable.</li>
            <li>Phone usage and payment processing rates are not published.</li>
          </ul>
          <p>
            Compare it with other tools in our <Link href="/compare/workiz-alternatives">Workiz alternatives</Link>,{' '}
            <Link href="/compare/jobber-vs-workiz">Jobber vs Workiz</Link>,{' '}
            <Link href="/compare/servicetitan-vs-workiz">ServiceTitan vs Workiz</Link> and the{' '}
            <Link href="/pricing">field service software pricing</Link> overview.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Workiz pricing">
            Workiz is quote-only but lets you try it for 7 days without a card. Match the plan to your trade,
            because service plans, flat rate and equipment tracking need Ultimate, and get every Genius add-on,
            phone rate and payment fee in writing. The terms renew automatically and allow up to a 10% yearly
            increase, so check your Sales Order before you sign.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/workiz-alternatives" className="text-orange-600 hover:text-orange-800">Workiz alternatives →</Link>
            <Link href="/compare/jobber-vs-workiz" className="text-orange-600 hover:text-orange-800">Jobber vs Workiz →</Link>
            <Link href="/pricing/servicetitan" className="text-orange-600 hover:text-orange-800">ServiceTitan pricing →</Link>
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
