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
 * /pricing/commusoft: targets "commusoft pricing", "commusoft cost" and "commusoft plans". No GSC
 * data for this topic yet. Alternatives intent stays on /compare/commusoft-alternatives.
 *
 * Commusoft publishes no prices or US tier names (the UK FAQ and a US blog name different tiers),
 * so this page shows neither. Plans page, onboarding page, FAQ and the Standard Customer Terms
 * linked from the US site were checked on 2026-11-24. The plans page says contracted licences
 * renew annually; the terms say the agreement continues after 12 months until 30 days' notice. The
 * page states both. The early-termination clause (12.6) did not come through in full, so it is not
 * quoted. Nothing tested hands-on.
 */

const PATH = '/pricing/commusoft'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Commusoft Pricing (2026): Licenses, Contract Terms & Costs'
const DESCRIPTION =
  'Commusoft does not publish prices. See how its per-license plans work, contracted, rolling and daily licenses, the 12-month term, add-ons and what to ask.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/commusoft',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Commusoft Pricing', href: PATH },
]

const licences: { type: string; how: string; forWho: string }[] = [
  { type: 'Contracted', how: 'Price locked for 12 months; the plans page says it renews annually', forWho: 'Your permanent office staff, managers and technicians' },
  { type: 'Monthly rolling', how: 'Added on top of a contracted plan; add or remove month by month', forWho: 'Seasonal or temporary staff' },
  { type: 'Daily', how: 'Billed monthly by the days used; no storage allowance', forWho: 'Subcontractors' },
]

const addOns: { name: string; what: string }[] = [
  { name: 'Fleet+', what: 'Vehicle tracking with trackers hardwired into your vehicles: locations, route history and driver behavior.' },
  { name: 'Sales+', what: 'Multi-option quotes and financing at the quote stage, according to its quoting page.' },
  { name: 'AI:den+', what: 'Listed as coming soon on the plans page.' },
  { name: 'Analytics+', what: 'Listed as coming soon on the plans page; its analytics page describes it as an add-on with unlimited dashboards.' },
]

const terms: { topic: string; rule: string }[] = [
  { topic: 'Initial term', rule: '12 months from the commencement date' },
  { topic: 'After year one', rule: 'Continues until either side gives at least 30 days’ written notice' },
  { topic: 'Price increases', rule: 'From each anniversary, with at least 30 days’ written notice, capped at 10%' },
  { topic: 'Billing', rule: 'Invoiced monthly in advance, payable within 7 days' },
  { topic: 'Adding users or modules', rule: 'Pro-rated increase; no clause covers reducing users' },
  { topic: 'Your data', rule: 'Remains your property; hand-over help to a new provider is charged at standard rates' },
  { topic: 'Governing law', rule: 'English law, contracting with Commusoft Ltd' },
]

const faqs = [
  {
    question: 'How much does Commusoft cost?',
    answer:
      'Commusoft does not publish prices. It charges per license, per month, and every office worker, manager and technician who uses the software needs a license. Its FAQ says to speak to its team for pricing, so you need a quote for your headcount.',
  },
  {
    question: 'What license types does Commusoft sell?',
    answer:
      'Three: contracted licenses that lock the price for 12 months, monthly rolling licenses added on top for seasonal or temporary staff, and daily licenses billed by the days used for subcontractors.',
  },
  {
    question: 'Is Commusoft a yearly contract?',
    answer:
      'Yes for the first year. The terms linked from its US site set a 12-month initial period, after which the agreement continues until either side gives at least 30 days’ written notice. Its plans page describes contracted licenses as renewing annually, so check the wording on your order.',
  },
  {
    question: 'Is Commusoft right for a small business?',
    answer:
      'Commusoft says it is specifically designed for businesses with 6 or more staff, and shows that message when you choose a team of 1 to 3 on its plans page. Smaller teams usually look at tools with published prices.',
  },
  {
    question: 'Does Commusoft have a free trial?',
    answer:
      'Its plans page says “Start your free trial today” without stating the length or conditions, and most of its pages offer a demo. Ask what the trial includes before you start.',
  },
  {
    question: 'Can Commusoft raise its price?',
    answer:
      'Its terms allow an increase from each anniversary of the start date, with at least 30 days’ written notice, capped at 10%.',
  },
]

const sources = [
  { name: 'Commusoft plans (US): license types, add-ons, 6 or more staff', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-24' },
  { name: 'Commusoft Standard Customer Terms (linked from the US site)', url: 'https://www.commusoft.com/en-us/company/terms-conditions/', checked: '2026-11-24' },
  { name: 'Commusoft FAQs', url: 'https://www.commusoft.com/en-us/faqs/', checked: '2026-11-24' },
  { name: 'Commusoft onboarding and implementation', url: 'https://www.commusoft.com/en-us/onboarding-implementation/', checked: '2026-11-24' },
  { name: 'Commusoft estimating and quoting (Sales+)', url: 'https://www.commusoft.com/en-us/features/estimating-and-quoting-software/', checked: '2026-11-24' },
  { name: 'Commusoft Fleet+ fleet management', url: 'https://www.commusoft.com/en-us/features/fleet-management-software/', checked: '2026-11-24' },
  { name: 'Commusoft analytics (Analytics+)', url: 'https://www.commusoft.com/en-us/features/analytics/', checked: '2026-11-24' },
  { name: 'Commusoft integrations (QuickBooks Online, Xero, Stripe, GoCardless)', url: 'https://www.commusoft.com/en-us/integrations/', checked: '2026-11-24' },
  { name: 'Commusoft vs Jobber blog (per-license, 12-month rolling contract)', url: 'https://www.commusoft.com/en-us/blog/commusoft-vs-jobber-comparison/', checked: '2026-11-24' },
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

export default function CommusoftPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/commusoft"
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
            Commusoft pricing (2026): <span className="text-orange-400">licenses, terms &amp; costs</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How Commusoft charges, what its license types and add-ons are, and what its terms commit you to,
            from its own US pages on November 24, 2026. Commusoft publishes no prices, so we show none.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Commusoft does not publish prices. It charges <strong>per license, per month</strong>, and every
            office worker, manager and technician who uses it needs a license. There are three license types:
            contracted licenses locked for 12 months, monthly rolling licenses for seasonal staff, and daily
            licenses for subcontractors. Fleet+ and Sales+ are add-ons, and Commusoft says it is designed for
            businesses with 6 or more staff. Its terms set a 12-month first term, 30 days&rsquo; notice after
            that, and yearly increases of up to 10%.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>Commusoft license types</h2>
          <p className={SUB}>From Commusoft&rsquo;s US plans page on November 24, 2026. No prices are shown.</p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['License', 'How it works', 'Meant for'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {licences.map((r) => (
                  <tr key={r.type} className={ROW}>
                    <td className={TD1}>{r.type}</td>
                    <td className={TD}>{r.how}</td>
                    <td className={TD}>{r.forWho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            The plans page says there is no limit on the number of users and no limit on customers, jobs or
            invoices. Storage is pooled from contracted and rolling licenses.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>How Commusoft pricing works</h2>
          <p>
            The core product is Commusoft Jobs. The plans page mentions tiered plans but does not name the US
            tiers, and Commusoft&rsquo;s UK page and a US blog post use different tier names, so we do not list
            them. Your quote depends on how many licenses of each type you need, the tier, and any add-ons. A
            Commusoft blog post describes the model as per license, per month on a standard 12-month rolling
            contract.
          </p>
          <p>
            Onboarding is listed as part of the package: a dedicated trainer, tailored sessions, a follow-up about
            eight weeks after the last session, periodic business reviews, and phone and email support in your
            country. Commusoft does not state an onboarding fee, and its onboarding page does not mention data
            migration, so ask about both.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Add-ons</h2>
          <p className={SUB}>Named on Commusoft&rsquo;s plans and feature pages. None has a published price.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {addOns.map((a) => (
              <article key={a.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{a.name}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-slate-600 dark:text-slate-400">{a.what}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            The plans page lists multi-option proposals under Commusoft Jobs, while its quoting page ties
            multi-option quotes to Sales+. Ask which applies to your quote.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={H2}>Contract terms</h2>
          <p className={SUB}>
            From the Standard Customer Terms linked from Commusoft&rsquo;s US site, checked November 24, 2026.
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
            The plans page says contracted licenses renew annually, while the terms describe a rolling agreement
            after the first 12 months. Your order form decides, so read it before you sign.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Payments and accounting</h2>
          <p>
            Commusoft takes cards through Stripe and ACH and recurring billing through GoCardless, and lists
            QuickBooks Online and Xero integrations. Its QuickBooks Online page describes sending customers,
            invoices, payments and supplier records to QuickBooks. QuickBooks Desktop appears on only one US
            landing page and not in its integrations directory, so confirm it if you need it. Commusoft does not
            publish payment processing fees.
          </p>

          <h2>How to get a comparable Commusoft quote</h2>
          <ul>
            <li>Count every office worker, manager and technician, since each needs a license.</li>
            <li>Separate permanent staff, seasonal staff and subcontractors into contracted, rolling and daily licenses.</li>
            <li>Ask which tier you are being quoted and what it includes, and whether multi-option quotes need Sales+.</li>
            <li>Get Fleet+ and any other add-on prices in writing.</li>
            <li>Ask whether onboarding and data migration carry a fee.</li>
            <li>Confirm the renewal wording on your order and the 30-day notice.</li>
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
          <h2>Pros and cons of Commusoft&rsquo;s pricing</h2>
          <p><strong>Pros</strong></p>
          <ul>
            <li>Rolling and daily licenses let you pay for seasonal staff and subcontractors only when you need them.</li>
            <li>No limits on users, customers, jobs or invoices.</li>
            <li>Yearly price increases are capped at 10% in its terms.</li>
            <li>Onboarding with a dedicated trainer is listed as part of the package.</li>
          </ul>
          <p><strong>Cons</strong></p>
          <ul>
            <li>No published prices or US tier names.</li>
            <li>A 12-month first term, and every office user needs a license.</li>
            <li>Designed for businesses with 6 or more staff.</li>
            <li>Terms under English law with a UK company, and QuickBooks Desktop support is unclear.</li>
          </ul>
          <p>
            Compare it with other tools in our <Link href="/compare/commusoft-alternatives">Commusoft alternatives</Link>{' '}
            and the <Link href="/pricing">field service software pricing</Link> overview.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Commusoft pricing">
            Commusoft is quote-only and priced per license, per month, with a license for every office and field
            user. It suits teams of six or more that want flexible licenses for seasonal staff and subcontractors.
            Expect a 12-month first term and yearly increases of up to 10%, and get every add-on price in writing.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/commusoft-alternatives" className="text-orange-600 hover:text-orange-800">Commusoft alternatives →</Link>
            <Link href="/pricing/servicetitan" className="text-orange-600 hover:text-orange-800">ServiceTitan pricing →</Link>
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
