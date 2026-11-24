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
 * /pricing/fieldpulse: targets "fieldpulse pricing", "fieldpulse cost" and "fieldpulse plans". No
 * GSC data for this topic yet. Alternatives intent stays on /compare/fieldpulse-alternatives.
 *
 * FieldPulse publishes no prices or plan names, so this page shows none: no third-party
 * estimates, per the site's pricing policy. Tier names seen only in a FieldPulse blog post
 * (Essentials, Professional, Enterprise) are not used. Its pricing page, Terms of Service and help
 * center were checked on 2026-11-24. Prices that search results attributed to FieldPulse's internal
 * sales tools are not used. Nothing tested hands-on.
 */

const PATH = '/pricing/fieldpulse'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'FieldPulse Pricing (2026): Seats, Add-ons & Contract Terms'
const DESCRIPTION =
  'FieldPulse does not publish prices. See how its seat-based pricing works, which products cost extra, its 1-year auto-renewing terms and how to compare quotes.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/fieldpulse',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FieldPulse Pricing', href: PATH },
]

const premium: { name: string; what: string }[] = [
  { name: 'Engage', what: 'Built-in phone and texting: calls from the web app, mobile app or a SIP phone, call recording and call routing. FieldPulse says it has line and license-based pricing.' },
  { name: 'Operator AI', what: 'AI phone answering that books jobs from your availability. Described as an Engage add-on; calls are recorded and transcribed.' },
  { name: 'Chat AI', what: 'Listed as a premium product, without further detail on the pricing page.' },
  { name: 'Pricebook', what: 'Flat-rate jobs with labor time, materials and markup, including a Good, Better, Best format.' },
  { name: 'FieldPulse Payments', what: 'Card and ACH payments in the web and mobile apps, for US businesses. A processing fee plus a monthly cost.' },
  { name: 'FieldPulse Financing', what: 'Customer financing through Wisetack or Acorn Finance, one partner at a time.' },
  { name: 'Fleet Tracking', what: 'Fleet monitoring from one dashboard, using hardware FieldPulse supplies.' },
  { name: 'Custom Forms', what: 'Listed as a premium product on the pricing page.' },
]

const terms: { topic: string; rule: string }[] = [
  { topic: 'Initial term', rule: 'One year, unless your order form says otherwise' },
  { topic: 'Renewal', rule: 'Renews automatically for one-year terms' },
  { topic: 'Notice to stop renewal', rule: 'At least 60 days before the term ends, sent to cancellations@fieldpulse.com' },
  { topic: 'Cancelling mid-term', rule: 'Not allowed, except for an uncured material breach or a business closure' },
  { topic: 'Price at renewal', rule: 'May rise with 60 days’ written notice; no cap stated' },
  { topic: 'Month-to-month', rule: 'Priced at a premium of up to 50% over the annual rate; 30 days’ written notice; non-refundable' },
  { topic: 'Extra users', rule: 'Users above your order form are charged for the one-year term upfront' },
  { topic: 'Removing users', rule: 'Billed seats stay the same when users are deactivated or removed' },
  { topic: 'Payment due', rule: 'Within 15 days of the invoice date; renewals invoiced 30 days ahead' },
]

const faqs = [
  {
    question: 'How much does FieldPulse cost?',
    answer:
      'FieldPulse does not publish prices or plan names. Its pricing page says pricing is seat-based and built around what your team needs, and asks you to request a custom quote. Add-ons such as Engage, Operator AI and Fleet Tracking are also priced on request.',
  },
  {
    question: 'Does FieldPulse have a free trial?',
    answer:
      'FieldPulse advertises free demos rather than a free trial on its pricing and comparison pages.',
  },
  {
    question: 'Is FieldPulse a yearly contract?',
    answer:
      'Yes, by default. Its Terms of Service set a one-year initial term unless your order form says otherwise, renewing automatically for one-year terms unless you give notice at least 60 days before the term ends. You cannot cancel mid-term except for an uncured material breach or a business closure.',
  },
  {
    question: 'Can I pay FieldPulse month to month?',
    answer:
      'The Terms of Service allow month-to-month subscriptions with 30 days’ written notice, but they are priced at a premium to the annual rate, capped at 50%, and the fees are non-refundable.',
  },
  {
    question: 'What happens if I add or remove users?',
    answer:
      'Users above the number on your order form are charged for the one-year term upfront. Deactivating or removing users does not reduce the number of billed seats during the term.',
  },
  {
    question: 'What are FieldPulse Payments fees?',
    answer:
      'They are not published. FieldPulse’s help center says there is a processing fee for card and ACH payments plus a monthly cost. Standard funding takes 2 business days for cards and 4 for ACH, with next-day funding on request.',
  },
  {
    question: 'Does FieldPulse work with QuickBooks Desktop?',
    answer:
      'Yes. FieldPulse supports QuickBooks Online and QuickBooks Desktop 2024 or newer on Windows through the QuickBooks Web Connector; Desktop for Mac is not supported, and Desktop setup goes through support. FieldPulse does not state a separate fee.',
  },
]

const sources = [
  { name: 'FieldPulse pricing (seat-based pricing, premium products)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service (term, renewal, notice, seats, month-to-month premium)', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-24' },
  { name: 'FieldPulse Engage and Operator AI', url: 'https://www.fieldpulse.com/features/engage', checked: '2026-11-24' },
  { name: 'FieldPulse help: Operator AI overview', url: 'https://help.fieldpulse.com/add-ons/ai/operator-ai-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: Pricebook overview', url: 'https://help.fieldpulse.com/add-ons/sales-suite/pricebook-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: FieldPulse Payments', url: 'https://help.fieldpulse.com/payments/getting-started/fieldpulse-payments.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: financing overview (Wisetack, Acorn Finance)', url: 'https://help.fieldpulse.com/payments/financing/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Online', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-online/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Desktop', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-desktop/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse vs Housecall Pro page (team size and migration statements about itself)', url: 'https://www.fieldpulse.com/comparison/housecall-pro', checked: '2026-11-24' },
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

export default function FieldPulsePricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/fieldpulse"
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
            FieldPulse pricing (2026): <span className="text-orange-400">seats, add-ons &amp; terms</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How FieldPulse prices, which products cost extra, and what its Terms of Service commit you to,
            from its own pages on November 24, 2026. FieldPulse publishes no prices, so we show none.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            FieldPulse does not publish prices or plan names. Its pricing page says pricing is{' '}
            <strong>seat-based</strong> and built around what your team needs, and offers a custom quote and
            a demo. Eight premium products, including Engage phones, Operator AI, Pricebook and Fleet Tracking,
            are optional and also priced on request. Its Terms of Service set a <strong>one-year term</strong>{' '}
            that renews automatically unless you give 60 days&rsquo; notice, with no cancelling mid-term.
            Month-to-month is allowed at a premium of up to 50%, and card and ACH processing rates are not
            published.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2>How FieldPulse pricing works</h2>
          <p>
            FieldPulse&rsquo;s pricing page says: &ldquo;FieldPulse is seat-based and pricing is built around
            what your team needs.&rdquo; Instead of a price table it offers &ldquo;Get a Custom Quote&rdquo; and
            demo buttons. The page does not list plan names, a starting price, or whether office and field seats
            are priced differently. That means your quote depends on three things: the number of seats, the
            premium products you add, and the billing term.
          </p>
          <p>
            FieldPulse says its office AI assistant, Maverick, is included on all plans. On its Housecall Pro
            comparison page it describes itself as built for teams of 3 to 100 employees and says a dedicated
            implementation manager can guide setup and that its team can help migrate customer records, job
            history, estimates and invoices. It does not say whether implementation carries a fee.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Premium products that cost extra</h2>
          <p className={SUB}>
            FieldPulse calls these optional. None has a published price.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {premium.map((p) => (
              <article key={p.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{p.name}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-slate-600 dark:text-slate-400">{p.what}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            For Fleet Tracking, the Terms of Service say FieldPulse keeps charging the subscription until all
            hardware is returned.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={H2}>Contract and billing terms</h2>
          <p className={SUB}>
            From FieldPulse&rsquo;s Terms of Service, checked November 24, 2026. Your order form can set different terms.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Topic', 'What the terms say'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {terms.map((r) => (
                  <tr key={r.topic} className={ROW}>
                    <td className={TD1}>{r.topic}</td>
                    <td className={TD}>{r.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <p>
            Two of these rules matter most for cost. Seats you add mid-year are charged for the full one-year
            term upfront, and seats you remove keep being billed until the term ends, so size your order for the
            team you expect to have all year. And because there is no mid-term exit, put the 60-day notice date
            in your calendar the day you sign.
          </p>

          <h2>Payments and financing</h2>
          <p>
            FieldPulse Payments is FieldPulse&rsquo;s in-house processor for card and ACH payments, available to
            US businesses after a credit check. Its help center says there is a processing fee for card and ACH
            payments as well as a monthly cost, but publishes neither. Standard funding takes 2 business days
            for cards and 4 for ACH, and next-day funding is available on request. Its terms name Rainforest
            Pay, Inc. as the processor.
          </p>
          <p>
            Customer financing runs through Wisetack or Acorn Finance, and only one can be enabled at a time.
            Customers see the option on estimates and invoices. FieldPulse does not publish what the business
            pays per financed job.
          </p>

          <h2>QuickBooks</h2>
          <p>
            FieldPulse syncs with QuickBooks Online (you need your own Essentials, Plus or Advanced
            subscription) and with QuickBooks Desktop 2024 or newer on Windows through the QuickBooks Web
            Connector. Desktop setup goes through support, and Desktop for Mac is not supported. FieldPulse
            does not name the plan or state a separate fee for either.
          </p>

          <h2>How to get a comparable FieldPulse quote</h2>
          <ul>
            <li>Give the exact number of office and field users, and ask whether the two are priced differently.</li>
            <li>List each premium product you want (Engage, Operator AI, Pricebook, Fleet Tracking) and get each price in writing.</li>
            <li>Ask whether implementation or data migration carries a fee.</li>
            <li>Ask for the FieldPulse Payments card and ACH rates and the monthly cost.</li>
            <li>Get both the annual price and the month-to-month price, so you can see the premium.</li>
            <li>Confirm the term, renewal date and price increase terms on your order form.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Tools with published prices</h2>
          <p className={SUB}>Billed annually, per month, from each vendor&rsquo;s own pricing page.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { tool: 'Jobber', price: 'From $29 for 1 user; no-commitment monthly option', href: '/pricing/jobber' },
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
          <h2>Pros and cons of FieldPulse&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>Seat-based pricing means you pay for the users you have, and premium products are optional.</li>
            <li>The Terms of Service are public and spell out renewal, notice and month-to-month rules.</li>
            <li>QuickBooks Online and Desktop are both supported.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>No published prices, plan names or add-on prices, and no advertised free trial.</li>
            <li>A one-year term with no mid-term exit and 60 days&rsquo; notice before renewal.</li>
            <li>Seats added mid-term are billed upfront, and removed seats are still billed.</li>
            <li>Month-to-month can cost up to 50% more, and payment processing rates are not published.</li>
          </ul>
          <p>
            Compare it with other tools in our <Link href="/compare/fieldpulse-alternatives">FieldPulse alternatives</Link>,{' '}
            <Link href="/compare/jobber-vs-fieldpulse">Jobber vs FieldPulse</Link>,{' '}
            <Link href="/compare/housecall-pro-vs-fieldpulse">Housecall Pro vs FieldPulse</Link> and the{' '}
            <Link href="/pricing">field service software pricing</Link> overview.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on FieldPulse pricing">
            FieldPulse is quote-only and seat-based, with eight optional premium products priced on request. The
            default contract is one year, renews automatically unless you give 60 days&rsquo; notice, and cannot
            be cancelled mid-term, so size your seats carefully and get every add-on and payment rate in writing
            before you sign.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/fieldpulse-alternatives" className="text-orange-600 hover:text-orange-800">FieldPulse alternatives →</Link>
            <Link href="/compare/jobber-vs-fieldpulse" className="text-orange-600 hover:text-orange-800">Jobber vs FieldPulse →</Link>
            <Link href="/pricing/fieldedge" className="text-orange-600 hover:text-orange-800">FieldEdge pricing →</Link>
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
