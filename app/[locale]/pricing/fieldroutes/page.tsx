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
 * /pricing/fieldroutes: targets "fieldroutes pricing" and "fieldroutes cost". No GSC data for this
 * topic yet.
 *
 * FieldRoutes publishes no subscription prices (Growth and Corporate each have "Request Pricing"),
 * so this page shows none. Checked 2026-11-28 on the US site: pricing page, Terms of Service (last
 * updated June 13, 2025, read in full in two parts), payments page, Right to Your Data page, pest
 * control and lawn care solution pages, and the Marketing Pro page. The only dollar figures are the
 * usage-based charges in Terms section 5.A(ii), stated "as of December 1, 2023" and subject to
 * revision; they are shown as such. Conflict, stated on the page: the pricing page lists Sentricon,
 * the tech mobile app and the customer payment portal on both plans, while the pest control page
 * lists Sentricon System Integration, the FieldRoutes Mobile App and FieldRoutes Payments as
 * add-ons. Deliberately not used: the PCT Top 100 customer claim, review sites and third-party price
 * estimates. The SMS example is pure arithmetic on the published rate. Nothing tested hands-on.
 */

const PATH = '/pricing/fieldroutes'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'FieldRoutes Pricing (2026): Plans, Contract Terms & Usage Fees'
const DESCRIPTION =
  'FieldRoutes does not publish prices. See its Growth and Corporate plans, active-customer pricing, the two-year term, renewal increases and usage fees.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/fieldroutes',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FieldRoutes Pricing', href: PATH },
]

const plans: { plan: string; aimed: string; includes: string }[] = [
  {
    plan: 'Growth',
    aimed: 'Ideal for small businesses',
    includes:
      'Mobile sales, commercial trend reporting, Premium API, route optimization, mobile app for techs, automated communication and reminders, lead management, customer payment portal, real-time data reporting, Sentricon',
  },
  {
    plan: 'Corporate',
    aimed: 'Perfect for scaling',
    includes: 'The same feature list as Growth on the pricing page',
  },
]

const usage: { item: string; rate: string }[] = [
  { item: 'Email', rate: '$0.00' },
  { item: 'Text or SMS', rate: '$0.05 per 160 characters, minimum $0.05 a message; longer messages billed in 160-character increments' },
  { item: 'Printed mail, one-page letter', rate: '$1.13' },
  { item: 'Printed mail, extra pages (up to 5 more)', rate: '$0.10 per page' },
  { item: 'Printed mail, 6 or more pages', rate: '$2.98' },
  { item: 'Voicemail (continental United States)', rate: '$0.06 a message; special rates may apply elsewhere' },
  { item: 'Route optimization', rate: '$0.50 per route optimized per technician' },
  { item: 'Answering machine detection', rate: '$0.01 a message' },
]

const terms: { topic: string; rule: string }[] = [
  { topic: 'Contracting party', rule: 'Field Service Holdings, LLC; a signed Order Form overrides the Terms where they conflict (preamble, section 1)' },
  { topic: 'Initial term', rule: 'Two years from the Effective Date unless the Order Form says otherwise (9.A)' },
  { topic: 'Renewal', rule: 'Renews automatically for one-year periods; notice of non-renewal at least 90 days before the term ends, sent in writing to the legal department (9.A, 13.C)' },
  { topic: 'Price at renewal', rule: 'Increases by the greater of 5% or FieldRoutes’ then current list prices, unless the Order Form says otherwise (9.A)' },
  { topic: 'Other price changes', rule: '30 days’ notice of changes or additional charges; third-party fee increases can be passed on effective immediately (5.A)' },
  { topic: 'Billing', rule: 'Subscription invoiced monthly in advance; usage fees billed semi-monthly; invoices due on receipt; charged to the payment method on file (5.A(i), 5.D)' },
  { topic: 'Refunds', rule: 'Fees are in U.S. Dollars, non-cancelable and non-refundable; a pro-rated refund only if FieldRoutes permanently discontinues the service (5.A, 2.A)' },
  { topic: 'Early termination', rule: 'A termination fee equal to all the remaining payments (9.C)' },
  { topic: 'Late payment', rule: '1.5% a month interest (or the legal maximum), collection costs, and suspension at 30 or more days past due (5.A)' },
  { topic: 'Your data', rule: 'Export in Microsoft SQL Server backup format (.BAK); no obligation to keep data more than 60 days after termination (9.E)' },
  { topic: 'Disputes', rule: 'Delaware law; binding individual arbitration with hearings in Dallas, Texas, and a small claims exception (13.G, 13.H)' },
]

const faqs = [
  {
    question: 'How much does FieldRoutes cost?',
    answer:
      'FieldRoutes does not publish prices. Its pricing page shows two plans, Growth and Corporate, each with a Request Pricing button, and says the monthly subscription is based on the number of active customers. You need a quote to know the cost.',
  },
  {
    question: 'Does FieldRoutes charge per user?',
    answer:
      'Its pricing page says the monthly subscription is based on the number of active customers, not users. It does not say how an active customer is counted or whether there is a minimum, so ask for both in your quote.',
  },
  {
    question: 'Is FieldRoutes a long-term contract?',
    answer:
      'Its Terms of Service set a two-year initial term unless your Order Form says otherwise, then renew automatically for one-year periods. You must give notice of non-renewal at least 90 days before the term ends. Leaving early brings a termination fee equal to all the remaining payments.',
  },
  {
    question: 'Can FieldRoutes raise its price at renewal?',
    answer:
      'Yes. Section 9.A says renewal pricing increases by the greater of 5% or FieldRoutes’ then current list prices, unless your Order Form says otherwise. So 5% is a floor, not a cap.',
  },
  {
    question: 'Are texts and route optimization extra on FieldRoutes?',
    answer:
      'The Terms list usage-based charges as of December 1, 2023, subject to revision: $0.05 per 160 characters of text, $0.06 per voicemail, $1.13 per one-page letter, $0.50 per route optimized per technician and $0.01 per answering machine detection message. Email is $0.00. Usage is billed semi-monthly.',
  },
  {
    question: 'Does FieldRoutes have a free trial?',
    answer:
      'No. Its pricing page says FieldRoutes does not offer a free trial because the software is highly customizable, and offers a demo instead.',
  },
]

const sources = [
  { name: 'FieldRoutes pricing: Growth and Corporate plans', url: 'https://www.fieldroutes.com/company/pricing', checked: '2026-11-28' },
  { name: 'FieldRoutes Terms of Service (last updated June 13, 2025)', url: 'https://www.fieldroutes.com/terms-of-service', checked: '2026-11-28' },
  { name: 'FieldRoutes payments', url: 'https://www.fieldroutes.com/operations-suite/payments', checked: '2026-11-28' },
  { name: 'FieldRoutes right to your data', url: 'https://www.fieldroutes.com/company/right-to-your-data', checked: '2026-11-28' },
  { name: 'FieldRoutes pest control software (add-ons)', url: 'https://www.fieldroutes.com/solutions/pest-control-software', checked: '2026-11-28' },
  { name: 'FieldRoutes lawn care software', url: 'https://www.fieldroutes.com/solutions/lawn-care-software', checked: '2026-11-28' },
  { name: 'FieldRoutes Marketing Pro', url: 'https://www.fieldroutes.com/pro/marketing', checked: '2026-11-28' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function FieldRoutesPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/fieldroutes"
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
            FieldRoutes pricing (2026): <span className="text-orange-400">plans, terms &amp; usage fees</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How FieldRoutes charges, what its two plans include, and what its contract commits you to, from its
            own pages on November 28, 2026. FieldRoutes publishes no subscription prices, so we show none.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            FieldRoutes does not publish prices. Its two plans, <strong>Growth</strong> and{' '}
            <strong>Corporate</strong>, each sit behind &ldquo;Request Pricing&rdquo;, and it says the monthly
            subscription is based on <strong>the number of active customers</strong>. There is no free trial. Its
            Terms of Service set a <strong>two-year initial term</strong> unless your Order Form says otherwise,
            renew automatically for one year at a time with 90 days&rsquo; notice, and raise renewal pricing by the
            greater of 5% or its list prices. Texts, voicemail, printed mail and route optimization carry
            published usage charges on top.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>What each FieldRoutes plan includes</h2>
          <p className={SUB}>
            From FieldRoutes&rsquo; US pricing page on November 28, 2026. Neither plan shows a price.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Aimed at', 'Listed features'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((r) => (
                  <tr key={r.plan} className={ROW}>
                    <td className={TD1}>{r.plan}</td>
                    <td className={TD}>{r.aimed}</td>
                    <td className={TD}>{r.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            The pricing page does not say how Growth and Corporate differ beyond who they are aimed at.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>How FieldRoutes pricing works</h2>
          <p>
            FieldRoutes&rsquo; pricing page says the monthly subscription is based on the number of active
            customers, and that each implementation is tailored to the business. It does not say how an active
            customer is counted, whether there is a minimum, or what the price per customer is. Its Terms of
            Service say fees are set in your Order Form, invoiced monthly in advance, due on receipt and charged to
            the payment method you provide.
          </p>
          <h3>Included or add-on? Two FieldRoutes pages differ</h3>
          <p>
            The pricing page lists Sentricon, the mobile app for techs and the customer payment portal on both
            plans. The pest control solution page lists Sentricon System Integration, the FieldRoutes Mobile App
            and FieldRoutes Payments as add-ons, along with QuickBooks Online Integration, Commercial and
            Multi-Unit Pest Control, WDO Inspection Reporting for California Branch 3, Marketing Pro and Fleet Pro.
            No add-on price is published. Ask which of these your quote includes.
          </p>
          <p>
            FieldRoutes is built mainly for pest control, with a lawn care page listing routing, a drag-and-drop
            scheduler and autopay. See our <Link href="/by-industry/pest-control">pest control software</Link>{' '}
            page for how it sits against generalist tools.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Usage-based charges</h2>
          <p className={SUB}>
            From section 5.A(ii) of FieldRoutes&rsquo; Terms of Service, stated &ldquo;as of December 1,
            2023&rdquo; and subject to revision. Usage is billed semi-monthly, and use above your Order Form limits
            is billed as overages.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Item', 'Rate'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {usage.map((r) => (
                  <tr key={r.item} className={ROW}>
                    <td className={TD1}>{r.item}</td>
                    <td className={TD}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Arithmetic on the published rate: a 200-character reminder text bills as two 160-character increments,
            or $0.10. The Terms say FieldRoutes may communicate different rates, so confirm them in your quote.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={H2}>Contract terms</h2>
          <p className={SUB}>
            From FieldRoutes&rsquo; Terms of Service (last updated June 13, 2025), checked November 28, 2026. Your
            Order Form can change several of these.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[520px] border-collapse text-left">
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
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            For how these clauses compare across vendors, see our{' '}
            <Link href="/guides/field-service-software-contract-terms" className="text-orange-600 hover:text-orange-800">
              field service software contract terms
            </Link>{' '}
            guide.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Onboarding, add-on and payment terms</h2>
          <ul>
            <li>
              Onboarding is billed on a time and materials or per project basis, at your Order Form rates or
              FieldRoutes&rsquo; standard hourly rates, with fixed-fee work charged in advance. No amount is
              published (2.B, 5.A(iii)).
            </li>
            <li>
              Marketing Pro subscription fees are charged separately for each office or location and depend on
              active contacts, direct mail orders and features used. The tier can go up but not down during a term
              and resets at each renewal. Direct mail is billed in arrears and is non-refundable, including
              returned mail.
            </li>
            <li>
              Fleet Pro hardware from Azuga carries shipping fees, and bundled hardware must be returned within 15
              days after the subscription ends or you pay its retail price.
            </li>
            <li>
              Electronic payments need a separate processing agreement, with you registered as a sub-merchant, and
              that provider must handle all electronic payments in the software (2.D). The payments page lists
              AutoPay, batch payments, a customer portal and card updating, but no processing rates.
            </li>
          </ul>

          <h2>Leaving FieldRoutes: your data</h2>
          <p>
            The Terms say FieldRoutes will make commercially reasonable efforts to export your data in Microsoft
            SQL Server backup format (.BAK) and is not obligated to keep it more than 60 days after termination.
            Its Right to Your Data page adds a self-serve CSV export of names, addresses, emails, account balances
            and more at any time, free extraction of payment tokens from FieldRoutes Payments within 10 business
            days of a request, and a promise not to cut off payment processing until you have moved to another
            provider. The same page says add-ons are co-termed to the master agreement&rsquo;s renewal date.
          </p>

          <h2>How to get a comparable FieldRoutes quote</h2>
          <ul>
            <li>Ask how active customers are counted, what the price per band is, and whether there is a minimum.</li>
            <li>Ask for both Growth and Corporate prices and what Corporate adds.</li>
            <li>Ask which of Sentricon, the mobile app, Payments and QuickBooks Online are included or extra.</li>
            <li>Check the initial term on the Order Form and diary the 90-day non-renewal deadline.</li>
            <li>Ask for a renewal cap in the Order Form, since the Terms set 5% as a minimum increase.</li>
            <li>Get usage limits, current usage rates and onboarding hours and rates in writing.</li>
            <li>Ask for card and ACH processing rates before you sign the payment processing agreement.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Compare with other tools</h2>
          <p className={SUB}>From each vendor&rsquo;s own pricing page, as covered on our pricing pages.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { tool: 'GorillaDesk', price: '$49, $99 or $149 a month for the first route, extra routes priced on top', href: '/pricing/gorilladesk' },
              { tool: 'ServiceTitan', price: 'Quote only; four packages, contracts generally based on users', href: '/pricing/servicetitan' },
              { tool: 'Jobber', price: 'From $29 for 1 user; 5, 10 and 15 user bands', href: '/pricing/jobber' },
            ].map((p) => (
              <article key={p.tool} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold">
                  <Link href={p.href} className="text-orange-600 hover:text-orange-800 dark:text-orange-400">{p.tool}</Link>
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-slate-600 dark:text-slate-400">{p.price}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[14px] text-slate-600 dark:text-slate-400">
            Weighing a pest-specific tool? See our{' '}
            <Link href="/compare/gorilladesk-alternatives" className="text-orange-600 hover:text-orange-800">
              GorillaDesk alternatives
            </Link>{' '}
            comparison.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Pros and cons of FieldRoutes&rsquo; pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>Priced by active customers rather than by user.</li>
            <li>Usage rates for texts, voicemail, mail and route optimization are published in its Terms.</li>
            <li>A self-serve CSV export and free payment token extraction on its Right to Your Data page.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>No published subscription or add-on prices, and no free trial.</li>
            <li>A two-year default initial term, automatic renewal and a 90-day notice window.</li>
            <li>Renewal increases of at least 5%, and early termination owes all remaining payments.</li>
            <li>Usage, onboarding, Marketing Pro and payment processing are billed on top.</li>
          </ul>
          <p>
            Compare it with other tools in our <Link href="/compare">field service software comparisons</Link> and
            the <Link href="/pricing">field service software pricing</Link> overview.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on FieldRoutes pricing">
            FieldRoutes is quote-only and priced by active customers, mainly for pest control and lawn care
            companies. Expect a two-year default term, automatic renewals with 90 days&rsquo; notice, renewal
            increases of at least 5% and usage charges on top, and get the term, every add-on and every rate in
            your Order Form.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/by-industry/pest-control" className="text-orange-600 hover:text-orange-800">Pest control software →</Link>
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
