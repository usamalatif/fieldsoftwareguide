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
 * /pricing/fieldedge: targets "fieldedge pricing", "fieldedge cost" and "how much does fieldedge
 * cost". No GSC data for this topic yet. Alternatives intent stays on /compare/fieldedge-alternatives.
 *
 * FieldEdge publishes no prices ("Request Pricing"), so this page shows none: no third-party
 * estimates, per the site's pricing policy. Plan contents, licenses, trial, memberships, training
 * and payments were checked on fieldedge.com on 2026-11-24; contract terms come from the Xplor US
 * SaaS terms FieldEdge links as its Service Agreement (checked 2026-11-20). Published-price
 * comparisons reuse the site's verified pricing data (dates in `sources`). Nothing tested hands-on.
 */

const PATH = '/pricing/fieldedge'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'FieldEdge Pricing (2026): Plans, Contract Terms & Costs'
const DESCRIPTION =
  'FieldEdge does not publish prices. See what Select, Premier and Elite include, mobile licenses, annual terms, extra costs and how to get a comparable quote.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/fieldedge',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FieldEdge Pricing', href: PATH },
]

const planRows: { feature: string; select: string; premier: string; elite: string }[] = [
  { feature: 'Price', select: 'Request Pricing', premier: 'Request Pricing', elite: 'Request Pricing' },
  { feature: 'Mobile app licenses included', select: '2', premier: '4', elite: '6' },
  { feature: 'Flat-rate price book', select: 'Included', premier: 'Included', elite: 'Included' },
  { feature: 'QuickBooks Online and Desktop', select: 'Included', premier: 'Included', elite: 'Included' },
  { feature: 'Integrated payments and SMS texting', select: 'Included', premier: 'Included', elite: 'Included' },
  { feature: 'Dispatching and service agreements', select: 'Basic', premier: 'Advanced', elite: 'Advanced' },
  { feature: 'Quotes', select: 'Single option', premier: 'Multiple options', elite: 'Multiple options' },
  { feature: 'Saved reports', select: 'None', premier: '10', elite: 'Unlimited' },
  { feature: 'Performance, commission and prospect tracking', select: 'No', premier: 'Included', elite: 'Included' },
  { feature: 'Outbound call recording', select: 'No', premier: 'No', elite: 'Included' },
  { feature: 'Proposal Pro and Consumer Management Portal', select: 'Call for pricing', premier: 'Call for pricing', elite: 'Included' },
  { feature: 'MarketingEdge with 2-way texting', select: 'No', premier: 'No', elite: 'Included' },
  { feature: 'Support', select: 'Chat', premier: 'Email or phone', elite: 'Dedicated customer success rep' },
]

/** Published entry prices elsewhere, billed annually, per month (site-verified data). */
const published: { tool: string; price: string; note: string; href: string }[] = [
  { tool: 'Jobber', price: 'From $29 (1 user); Connect $99 with QuickBooks Online', note: '14-day trial; no-commitment monthly option', href: '/pricing/jobber' },
  { tool: 'Housecall Pro', price: 'From $59 (1 user); Essentials $149 for up to 5 users', note: '14-day trial; flat-rate pricing from Essentials', href: '/pricing/housecall-pro' },
  { tool: 'Service Fusion', price: '$220 Starter, unlimited users', note: 'QuickBooks Online and Desktop on every plan; demo only', href: '/pricing/service-fusion' },
]

const faqs = [
  {
    question: 'How much does FieldEdge cost?',
    answer:
      'FieldEdge does not publish prices. Each of its three plans, Select, Premier and Elite, has a Request Pricing button, and its FAQ says pricing can vary with your number of technicians, employees and add-ons. You need a quote to know the cost.',
  },
  {
    question: 'Does FieldEdge have a free trial?',
    answer:
      'No. FieldEdge’s pricing page says it does not offer a free trial and pairs new members with an onboarding team instead.',
  },
  {
    question: 'Is FieldEdge a yearly contract?',
    answer:
      'Its pricing page refers to annual Select, Premier and Elite memberships. The Xplor terms FieldEdge links as its Service Agreement renew for 12 months at a time unless either side gives written notice at least 60 days before the term ends, and allow an early termination fee equal to the monthly fees for the remaining months.',
  },
  {
    question: 'How many users does each FieldEdge plan include?',
    answer:
      'FieldEdge lists mobile app licenses rather than users: 2 on Select, 4 on Premier and 6 on Elite. It does not publish the price of extra licenses.',
  },
  {
    question: 'What are FieldEdge’s payment processing fees?',
    answer:
      'They are not published. FieldEdge Payments runs on Xplor Pay, and FieldEdge says rates are tailored to your transaction volume, with funding as soon as the next business day. Ask for the full rate sheet in your quote.',
  },
  {
    question: 'Does FieldEdge work with QuickBooks Desktop?',
    answer:
      'Yes. FieldEdge lists QuickBooks Online and Desktop on every plan. Its warehouse inventory on Elite works only with QuickBooks Desktop Enterprise with Advanced Inventory.',
  },
  {
    question: 'Does FieldEdge charge for onboarding or training?',
    answer:
      'Every plan includes an onboarding specialist, and FieldEdge shows no onboarding fee, though it does not say there is none. Onsite training is charged at a daily rate plus airfare with a two-day minimum, while its live Power Hour sessions are free.',
  },
]

const sources = [
  { name: 'FieldEdge pricing (plans, licenses, trial, annual memberships, feature table, FAQ)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement (October 2023)', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-20' },
  { name: 'FieldEdge Payments (Xplor Pay)', url: 'https://fieldedge.com/fe-payments/', checked: '2026-11-24' },
  { name: 'FieldEdge member training (onsite daily rate, Power Hour)', url: 'https://fieldedge.com/member-training/', checked: '2026-11-24' },
  { name: 'FieldEdge partners (Coolfront flat rate, FleetSharp, Ruby)', url: 'https://fieldedge.com/partners/', checked: '2026-11-24' },
  { name: 'FieldEdge future features (Mobile 2.0 offline mode)', url: 'https://fieldedge.com/future-features/', checked: '2026-11-24' },
  { name: 'FieldEdge Consumer Management Portal', url: 'https://fieldedge.com/consumer-management-portal/', checked: '2026-11-24' },
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

export default function FieldEdgePricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/fieldedge"
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
            FieldEdge pricing (2026): <span className="text-orange-400">plans, terms &amp; costs</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What each plan includes, what the contract says, and which costs to ask about, from
            FieldEdge&rsquo;s own pages on November 24, 2026. FieldEdge publishes no prices, so we show none.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            FieldEdge does not publish prices. Its three plans, <strong>Select</strong>,{' '}
            <strong>Premier</strong> and <strong>Elite</strong>, each show only &ldquo;Request
            Pricing&rdquo;, and its FAQ says the price varies with your technicians, employees and add-ons.
            The plans include 2, 4 and 6 mobile app licenses. Every plan has a flat-rate price book,
            QuickBooks Online and Desktop, and an onboarding specialist. There is no free trial, memberships
            are annual, and the linked Service Agreement renews for 12 months unless you give 60 days&rsquo;
            notice. Payment processing rates are not published either.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>FieldEdge plans compared</h2>
          <p className={SUB}>
            From FieldEdge&rsquo;s pricing page on November 24, 2026. No plan shows a price.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Feature', 'Select', 'Premier', 'Elite'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planRows.map((r) => (
                  <tr key={r.feature} className={ROW}>
                    <td className={TD1}>{r.feature}</td>
                    <td className={TD}>{r.select}</td>
                    <td className={TD}>{r.premier}</td>
                    <td className={TD}>{r.elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Elite also includes warehouse inventory, but only with QuickBooks Desktop Enterprise with
            Advanced Inventory, and FieldEdge Academy, which is call for pricing on lower plans.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>What decides your FieldEdge price</h2>
          <p>
            FieldEdge&rsquo;s FAQ names three inputs: the number of technicians, the number of employees,
            and any add-ons. The plan you pick sets the starting point and how many mobile licenses come with
            it. Because a two-technician shop on Select and a twelve-technician shop on Elite get very
            different quotes, no single figure would be honest, which is why we do not print one.
          </p>
          <p>Items that can raise the total:</p>
          <ul>
            <li><strong>Extra mobile licenses</strong> beyond the 2, 4 or 6 included. No per-license price is published.</li>
            <li><strong>Proposal Pro, the Consumer Management Portal and Academy</strong>, which are call for pricing below Elite.</li>
            <li><strong>Onsite training</strong>, charged at a daily rate plus airfare with a two-day minimum. The live FieldEdge Power Hour is free.</li>
            <li><strong>Partner products</strong> such as FleetSharp GPS tracking and Ruby live receptionists, which FieldEdge lists as partners and which are billed separately.</li>
            <li><strong>Payment processing</strong> through FieldEdge Payments, powered by Xplor Pay, with rates &ldquo;tailored to your transaction volume&rdquo;.</li>
          </ul>

          <h2>Trial, onboarding and training</h2>
          <p>
            FieldEdge says it does not offer a free trial. Instead, every plan includes an onboarding
            specialist, and its FAQ says the onboarding team transfers your business data and trains your
            staff. The pricing page shows no onboarding fee but does not say there is none, so ask. Training
            options beyond onboarding are for members only: regional workshops, virtual in-house training,
            the free Power Hour, and paid onsite sessions.
          </p>

          <h2>Contract, renewal and cancellation</h2>
          <p>
            FieldEdge&rsquo;s pricing page refers to &ldquo;annual Select, Premier, and Elite
            memberships&rdquo;. You can upgrade at any time, but a downgrade takes effect at the end of the
            contract period. The Xplor US SaaS terms that FieldEdge links as its Service Agreement add:
          </p>
          <ul>
            <li>Your Order Form sets the first term, which then renews for 12 months at a time.</li>
            <li>To stop renewal, either side must give written notice at least 60 days before the term ends.</li>
            <li>Ending early can cost an early termination fee equal to the monthly fees for the remaining months.</li>
            <li>Xplor can raise fees with two months&rsquo; notice, and you can leave within 10 days if the rise is above CPI.</li>
          </ul>
          <p>
            Read the Order Form you are given, because it can set terms that differ from the general
            agreement, and put the 60-day notice date in your calendar on the day you sign.
          </p>

          <h2>Payment processing</h2>
          <p>
            FieldEdge Payments is powered by Xplor Pay. FieldEdge publishes no card or ACH rates; it says
            rates depend on your transaction volume, promises detailed breakdowns of every fee, and offers
            funding as soon as the next business day. Payments sync with QuickBooks, and you can split
            payments on one invoice. Ask for the full rate sheet, including any monthly, chargeback and
            card-not-present fees, before you compare totals.
          </p>

          <h2>How to get a comparable FieldEdge quote</h2>
          <ul>
            <li>Give the exact number of technicians and office staff, and ask how many mobile licenses you need beyond those included.</li>
            <li>Ask for the price of each plan, not just the one recommended, so you can see the step from Select to Premier to Elite.</li>
            <li>List every add-on you want (Proposal Pro, the portal, Academy) and get each price in writing.</li>
            <li>Ask whether onboarding or data migration carries a fee.</li>
            <li>Get the full Xplor Pay rate sheet.</li>
            <li>Confirm the first term on the Order Form, the renewal length, the 60-day notice and the early termination fee.</li>
            <li>Ask what the mobile app can do offline today. FieldEdge&rsquo;s roadmap lists offline mode for its Mobile 2.0 app as in development.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Tools with published prices</h2>
          <p className={SUB}>
            If you want a number before a sales call, these list prices on their own sites. Billed annually,
            per month.
          </p>
          <div className="grid gap-4">
            {published.map((p) => (
              <article key={p.tool} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">
                  <Link href={p.href} className="text-orange-600 hover:text-orange-800 dark:text-orange-400">{p.tool}</Link>
                </h3>
                <p className="mt-1.5 text-[14.5px] font-semibold text-slate-800 dark:text-slate-200">{p.price}</p>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-slate-600 dark:text-slate-400">{p.note}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Pros and cons of FieldEdge&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>Flat-rate price book and QuickBooks Online and Desktop on every plan, including Select.</li>
            <li>An onboarding specialist on every plan who moves your data and trains staff.</li>
            <li>The feature split between plans is published, so you know what each tier adds.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>No published prices and no free trial, so you need a sales call to learn the cost.</li>
            <li>Annual memberships that renew for 12 months unless you give 60 days&rsquo; notice, with an early termination fee.</li>
            <li>Payment processing rates and extra license prices are not published.</li>
            <li>The customer portal and Proposal Pro cost extra below Elite.</li>
          </ul>

          <h2>Which FieldEdge plan fits?</h2>
          <ul>
            <li><strong>Select</strong> if you have one or two technicians in the field and need flat rate and QuickBooks.</li>
            <li><strong>Premier</strong> if you sell with multi-option quotes, run more than one agreement per customer, or pay commissions.</li>
            <li><strong>Elite</strong> if you want the customer portal, Proposal Pro, call recording and marketing included rather than priced separately.</li>
          </ul>
          <p>
            To weigh FieldEdge against other tools, see our{' '}
            <Link href="/compare/fieldedge-alternatives">FieldEdge alternatives</Link>,{' '}
            <Link href="/compare/jobber-vs-fieldedge">Jobber vs FieldEdge</Link>,{' '}
            <Link href="/compare/housecall-pro-vs-fieldedge">Housecall Pro vs FieldEdge</Link> and the{' '}
            <Link href="/pricing">field service software pricing</Link> overview.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on FieldEdge pricing">
            FieldEdge is quote-only, has no free trial, and sells annual memberships that renew for 12 months
            unless you give 60 days&rsquo; notice. In return, every plan includes flat rate, QuickBooks Online
            and Desktop, and an onboarding specialist. Get every plan, add-on and payment rate in writing, and
            compare the yearly total with tools that publish their prices.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/fieldedge-alternatives" className="text-orange-600 hover:text-orange-800">FieldEdge alternatives →</Link>
            <Link href="/compare/jobber-vs-fieldedge" className="text-orange-600 hover:text-orange-800">Jobber vs FieldEdge →</Link>
            <Link href="/pricing/service-fusion" className="text-orange-600 hover:text-orange-800">Service Fusion pricing →</Link>
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
