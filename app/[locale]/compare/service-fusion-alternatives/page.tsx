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
 * /compare/service-fusion-alternatives: targets "service fusion alternatives" and "service fusion
 * competitors". No GSC data for this topic yet.
 *
 * Service Fusion facts: pricing page, Subscription Agreement (last modified 2026-03-23), feature
 * pages, offline mode launch post (2026-06-22) and help center (payments fees, QuickBooks Desktop,
 * service agreements, API), checked 2026-11-24. Its pricing page says month to month and "no
 * contract requirements" while the Subscription Agreement renews the term automatically; the page
 * states both. Add-on prices are not published, so none are shown. Its comparison pages' claims
 * about other vendors are not used. Alternatives reuse the site's verified pages (2026-11-19 to
 * 11-24). Nothing tested hands-on. We do not claim why customers leave Service Fusion.
 */

const PATH = '/compare/service-fusion-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Service Fusion Alternatives (2026): Prices, Terms and Offline'
const DESCRIPTION =
  'Service Fusion lists unlimited users from $220/month billed annually. Compare 8 alternatives on price per team size, contract terms, offline use and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/service-fusion-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Service Fusion alternatives', href: PATH },
]

type Row = {
  name: string
  price: string
  contract: string
  offline: string
  agreements: string
  quickbooks: string
}

const rows: Row[] = [
  {
    name: 'Service Fusion (for reference)',
    price: '$220, $339, $552 per month billed annually ($259, $399, $649 monthly); unlimited users',
    contract: 'Pricing page says month to month; agreement renews for the same term unless 30 days’ notice; demo, no trial',
    offline: 'View schedules and job details, edit notes, photos and checklists; no new jobs, status changes or payments',
    agreements: 'Agreements apply member pricing; recurring invoicing on Pro, add-on below',
    quickbooks: 'Online and Desktop (Windows) from Starter',
  },
  {
    name: 'Housecall Pro',
    price: '$59, $149, $299 per month billed annually (1, 5, 8 users); $35 per extra MAX user',
    contract: 'No long-term contract required; 14-day trial',
    offline: 'View only: jobs for today and the next 2 days',
    agreements: 'Recurring Service Plans on MAX',
    quickbooks: 'Online and Desktop listed on Essentials',
  },
  {
    name: 'Jobber',
    price: 'From $29 per month billed annually (1 user); 15 users up to $529 on Plus',
    contract: 'No-commitment, 1-year or annual billing; 14-day trial',
    offline: 'Timers, notes, checklists and visit completion; no invoicing offline',
    agreements: 'Recurring jobs with automatic payments',
    quickbooks: 'Online and Xero; no Desktop',
  },
  {
    name: 'ServiceM8',
    price: '$0 to $349 per month by jobs; unlimited users from $29',
    contract: '14-day trial',
    offline: 'Not compared here',
    agreements: 'Recurring jobs',
    quickbooks: 'Online and Xero; Desktop not listed',
  },
  {
    name: 'Kickserv',
    price: '$60 (5 users), $119 (10), $199 (20) per month',
    contract: '30-day trial',
    offline: 'Not compared here',
    agreements: 'Not listed on its pricing page',
    quickbooks: 'Online on Start; Desktop $50 a month on Run',
  },
  {
    name: 'FieldEdge',
    price: 'Not published (“Request Pricing”)',
    contract: 'No free trial; annual memberships; published terms renew yearly with 60 days’ notice',
    offline: 'Offline mode for its new mobile app listed as in development',
    agreements: 'Basic on Select; multiple per customer on Premier and Elite',
    quickbooks: 'Online and Desktop on every plan',
  },
  {
    name: 'FieldPulse',
    price: 'Not published; seat-based',
    contract: 'Demo only; one-year term that renews automatically; 60 days’ notice',
    offline: 'Forms, notes and photos editable offline; no payments offline',
    agreements: 'Maintenance agreements with recurring billing',
    quickbooks: 'Online, Desktop 2024 or newer (Windows), Xero',
  },
  {
    name: 'ServiceTitan',
    price: 'Not published (“Get Pricing”)',
    contract: 'Demo only; Order Form sets the term; leaving early costs all remaining payments',
    offline: 'Most job work offline, including estimates',
    agreements: 'Customizable memberships in Core',
    quickbooks: 'Online and Desktop, Sage Intacct, Xero',
  },
  {
    name: 'Workiz',
    price: 'Not published (“Request pricing”)',
    contract: '7-day trial; 12-month term renewing yearly with 30 days’ notice',
    offline: 'Job details and updates offline',
    agreements: 'Service plans on Ultimate only',
    quickbooks: 'Online on every plan; its QuickBooks page says Desktop is supported',
  },
]

const cols: { key: keyof Omit<Row, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price' },
  { key: 'contract', label: 'Contract and trial' },
  { key: 'offline', label: 'Offline (documented)' },
  { key: 'agreements', label: 'Agreements' },
  { key: 'quickbooks', label: 'QuickBooks' },
]

const bySize: { size: string; options: string; note: string }[] = [
  {
    size: 'Solo operator',
    options: 'Jobber Core ($29/mo) or Housecall Pro Basic ($59/mo)',
    note: 'Both billed annually for one user. Service Fusion Starter ($220/mo) covers unlimited users, so it pays off only as the team grows.',
  },
  {
    size: '2 to 5 users',
    options: 'Kickserv ($60/mo for 5), Jobber Connect for 5 users or Housecall Pro Essentials ($149/mo)',
    note: 'All below Service Fusion Starter. Housecall Pro Essentials includes QuickBooks Desktop and flat-rate pricing.',
  },
  {
    size: '6 to 15 users',
    options: 'Housecall Pro MAX ($299 for 8 plus $35 per user), Jobber (10 or 15 user bands), Kickserv ($119 for 10, $199 for 20)',
    note: 'At this size Service Fusion’s unlimited users start to compete. Compare totals for your exact headcount.',
  },
  {
    size: 'Larger or contract-heavy',
    options: 'FieldEdge, ServiceTitan or FieldPulse (all by quote)',
    note: 'All three document agreements more fully than Service Fusion, but all sell on yearly or Order Form terms.',
  },
]

const faqs = [
  {
    question: 'How much does Service Fusion cost?',
    answer:
      'Service Fusion publishes three plans with unlimited users: Starter $220, Plus $339 and Pro $552 a month billed annually as one payment, or $259, $399 and $649 a month on monthly billing. Add-ons such as GPS fleet tracking and ServiceCall.ai are listed without prices.',
  },
  {
    question: 'Is Service Fusion month to month?',
    answer:
      'Its pricing page says all plans are offered month to month with no contract requirements. Its Subscription Agreement (last modified March 23, 2026) says the initial term is set in your online order and renews automatically for periods equal to that term unless either side gives 30 days’ written notice before it ends, and that fees are non-refundable. Check the term on your own order.',
  },
  {
    question: 'What is the cheapest Service Fusion alternative?',
    answer:
      'For small teams, Jobber Core is $29 a month billed annually for one user, Kickserv is $60 a month for five users, and ServiceM8 starts at $0 for one user and 30 jobs a month. Service Fusion’s unlimited users make it more competitive as headcount grows, so compare totals for your team size.',
  },
  {
    question: 'Does Service Fusion work offline?',
    answer:
      'Yes, partly. Its offline mode, launched in June 2026, shows schedules and job details and lets technicians edit notes, photos, tasks and checklists. Creating jobs or estimates, changing job status and taking payments are not available offline yet.',
  },
  {
    question: 'Which Service Fusion alternatives support QuickBooks Desktop?',
    answer:
      'FieldEdge includes it on every plan, Housecall Pro lists it on Essentials, ServiceTitan supports it, FieldPulse supports Desktop 2024 or newer on Windows, Kickserv charges $50 a month for it on Run, and Workiz’s QuickBooks page says it supports Desktop. Jobber and ServiceM8 do not list Desktop.',
  },
  {
    question: 'How do I get my data out of Service Fusion?',
    answer:
      'Its Subscription Agreement treats exporting your content as a paid professional service and says it may delete account data after termination, with no retrieval window stated. Ask for the export and its cost in writing before you give notice.',
  },
]

const sources = [
  { name: 'Service Fusion pricing (plans, add-ons, month-to-month FAQ)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
  { name: 'Service Fusion help: subscription and billing overview (30-day notice)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360029403592-Service-Fusion-Subscription-and-Billing-Account-Overview', checked: '2026-11-24' },
  { name: 'Service Fusion help: add-ons', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/38056443351053-Upgrading-your-Service-Fusion-Subscription-and-Adding-Add-ons', checked: '2026-11-24' },
  { name: 'Service Fusion blog: introducing offline mode (June 22, 2026)', url: 'https://www.servicefusion.com/blog/introducing-offline-mode', checked: '2026-11-24' },
  { name: 'Service Fusion help: payments fees', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360058547171-Service-Fusion-Payments-Introduction', checked: '2026-11-24' },
  { name: 'Service Fusion Acorn homeowner financing', url: 'https://www.servicefusion.com/acorn-homeowner-financing', checked: '2026-11-24' },
  { name: 'Service Fusion flat rate (Profit Rhino)', url: 'https://www.servicefusion.com/flat-rate', checked: '2026-11-24' },
  { name: 'Service Fusion help: customer service agreement tracking', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001110832-Customer-Service-Agreement-Tracking', checked: '2026-11-24' },
  { name: 'Service Fusion help: QuickBooks Desktop setup (Windows only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001111652-QuickBooks-Desktop-Setup-Instructions', checked: '2026-11-24' },
  { name: 'Service Fusion help: Open API (Pro only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360035145811-Open-API-Integration-Getting-Started', checked: '2026-11-24' },
  { name: 'Service Fusion company information (EverCommerce)', url: 'https://www.servicefusion.com/llm-info', checked: '2026-11-24' },
  { name: 'Service Fusion vs ServiceTitan page (team size statement about itself)', url: 'https://www.servicefusion.com/comparison/service-fusion-vs-service-titan', checked: '2026-11-24' },
  { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Jobber pricing (plans, bands, billing options, trial)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: use the Jobber app offline', url: 'https://help.getjobber.com/en/articles/use-the-jobber-app-offline/', checked: '2026-11-19' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'ServiceM8 pricing', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-21' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-21' },
  { name: 'FieldEdge pricing', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'FieldEdge future features (Mobile 2.0 offline mode)', url: 'https://fieldedge.com/future-features/', checked: '2026-11-24' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-20' },
  { name: 'FieldPulse pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-24' },
  { name: 'FieldPulse help: offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-11-11' },
  { name: 'FieldPulse help: QuickBooks Desktop', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-desktop/overview.md', checked: '2026-11-24' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-21' },
  { name: 'ServiceTitan help: Field Mobile App offline capabilities', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-17' },
  { name: 'Workiz pricing plans', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
  { name: 'Workiz Terms of Service v1.9 (last updated November 2, 2026)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-21' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-21' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceFusionAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/service-fusion-alternatives"
        datePublished={firstPublished}
        dateModified={contentUpdated}
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />

      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[860px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Service Fusion alternatives: <span className="text-orange-400">prices by team size, terms and offline</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Eight alternatives compared with Service Fusion on published pricing, contract terms, offline
            use, agreements and QuickBooks, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Service Fusion lists unlimited users from $220 a month billed annually, so the best alternative
            depends on team size. For one to five users, <strong>Jobber</strong> (from $29),{' '}
            <strong>Kickserv</strong> ($60 for five) and <strong>Housecall Pro</strong> (from $59) cost less
            and offer free trials. For maintenance agreements, <strong>FieldEdge</strong>,{' '}
            <strong>ServiceTitan</strong> and <strong>FieldPulse</strong> document more, by quote and on
            yearly terms. Service Fusion’s pricing page says month to month, but its Subscription Agreement
            renews your term automatically unless you give 30 days’ notice, so check your order before
            switching.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="service-fusion">What Service Fusion offers and how it sells</h2>
          <p>
            Service Fusion, part of EverCommerce, says it is built for teams of 3 to 30 technicians. Its three
            plans include unlimited users. Starter ($220 a month billed annually) covers scheduling and
            dispatch, estimates, invoicing, integrated payments, QuickBooks, project management and
            reporting. Plus ($339) adds estimate options, job photos, inventory, job costing and integrated
            voice and text. Pro ($552) adds the open API, eSign and custom documents, the customer web portal
            and progress billing with recurring invoicing. GPS fleet tracking and ServiceCall.ai are add-ons
            on every plan, without published prices, and it offers a free demo rather than a trial.
          </p>
          <p>
            It publishes its payment fees: 2.90% + 30¢ per card transaction (1% more when the card is not
            present), ACH at 1% capped at $15, and a 75¢ batch fee for each day with transactions. Consumer
            financing comes through Acorn Finance, and flat-rate pricing through its partner Profit Rhino.
          </p>

          <h2 id="contract">Service Fusion terms to check before you switch</h2>
          <p>
            Its pricing page says all plans are offered month to month with no contract requirements, and
            that annual billing saves 15%. Its Subscription Agreement, last modified March 23, 2026, says:
          </p>
          <ul>
            <li>The initial term is set in your online order and <strong>renews automatically</strong> for periods equal to that term.</li>
            <li>Either side can end it with <strong>30 days’ written notice</strong> before the end of the current term.</li>
            <li>Fees are <strong>non-refundable</strong>, plan changes are not pro-rated, and fees can change on notice.</li>
            <li>Exporting your content is a <strong>paid professional service</strong>, and account data may be deleted after termination.</li>
          </ul>

          <h2 id="when-to-stay">When Service Fusion may still be the better fit</h2>
          <p>
            For a team of roughly 10 or more, unlimited users at a published price is hard to match:
            Housecall Pro MAX costs $299 for eight users plus $35 for each extra user, and Jobber stops
            publishing prices above 15 users. Service Fusion also includes QuickBooks Online and Desktop from
            Starter and publishes its payment fees. If those matter most, compare totals before leaving.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Service Fusion alternatives compared</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Prices are
            USD standard rates. Sources and check dates are at the end of this page.
          </p>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 lg:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3">Software</th>
                  {cols.map((c) => <th key={c.key} scope="col" className="p-3">{c.label}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((t) => (
                  <tr key={t.name} className="align-top">
                    <th scope="row" className="p-3 font-semibold text-slate-900 dark:text-white">{t.name}</th>
                    {cols.map((c) => <td key={c.key} className="p-3">{t[c.key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3.5 lg:hidden">
            {rows.map((t) => (
              <article key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{t.name}</h3>
                <dl className="mt-2 space-y-2 text-[14px] leading-[1.55]">
                  {cols.map((c) => (
                    <div key={c.key}>
                      <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">{c.label}</dt>
                      <dd className="text-slate-700 dark:text-slate-300">{t[c.key]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12" id="by-size">
          <h2 className={H2}>Alternatives by team size</h2>
          <p className={SUB}>Published prices billed annually unless noted.</p>
          <div className="grid gap-3.5 md:grid-cols-2">
            {bySize.map((b) => (
              <article key={b.size} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{b.size}</h3>
                <p className="mt-1.5 text-[14.5px] font-semibold text-slate-800 dark:text-slate-200">{b.options}</p>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-slate-600 dark:text-slate-400">{b.note}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="alternatives">The alternatives</h2>

          <h3>Housecall Pro</h3>
          <p>
            <strong>Best fit:</strong> residential teams up to about 10 users that want a published price, a
            14-day trial and no long-term contract. Its plan data lists QuickBooks Online and Desktop and
            flat-rate pricing on Essentials, and Recurring Service Plans on MAX. <strong>Limitation:</strong>{' '}
            offline mode is view only. See <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>Jobber</h3>
          <p>
            <strong>Best fit:</strong> small crews that want the lowest published entry price, from $29 a
            month billed annually, with a no-commitment option and documented offline work.{' '}
            <strong>Limitation:</strong> QuickBooks Online and Xero only, and no flat-rate price book or
            equipment records documented. See <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>ServiceM8 and Kickserv</h3>
          <p>
            <strong>ServiceM8</strong> prices by jobs a month, from $0 for 30 jobs to $349, with unlimited users
            from $29 and a 14-day trial, but does not list QuickBooks Desktop. <strong>Kickserv</strong> costs
            $60 a month for 5 users, $119 for 10 and $199 for 20, with a 30-day trial, and charges $50 a month
            for QuickBooks Desktop on its Run plan.
          </p>

          <h3>FieldEdge</h3>
          <p>
            <strong>Best fit:</strong> multi-truck HVAC, plumbing and electrical companies that want a flat-rate
            price book, agreements and QuickBooks Online and Desktop on every plan. <strong>Limitation:</strong>{' '}
            no published prices or free trial, annual memberships that renew unless you give 60 days’ notice,
            and offline mode for its new mobile app still in development. See{' '}
            <Link href="/compare/fieldedge-alternatives" className={A}>FieldEdge alternatives</Link>.
          </p>

          <h3>FieldPulse</h3>
          <p>
            <strong>Best fit:</strong> teams that want asset records, maintenance agreements with recurring
            billing, offline editing and QuickBooks Desktop 2024 or newer. <strong>Limitation:</strong> no
            published prices or trial, and a one-year term that renews automatically with no cancelling
            mid-term. See <Link href="/compare/fieldpulse-alternatives" className={A}>FieldPulse alternatives</Link>.
          </p>

          <h3>ServiceTitan and Workiz</h3>
          <p>
            <strong>ServiceTitan</strong> suits larger shops that sell memberships, with memberships and a
            pricebook in Core and most job work available offline, but it is demo only and charges all
            remaining payments if you leave early. <strong>Workiz</strong> offers a 7-day trial and a phone
            system, but quotes every plan and puts service plans on Ultimate only. See{' '}
            <Link href="/compare/servicetitan-vs-workiz" className={A}>ServiceTitan vs Workiz</Link>.
          </p>

          <h2 id="switching-checklist">Before you switch: a checklist</h2>
          <ol>
            <li>Check the term on your Service Fusion order and give 30 days’ written notice before it ends.</li>
            <li>Ask in writing what a data export costs and what it includes (customers, jobs, invoices, agreements, equipment).</li>
            <li>List your agreements, member pricing and recurring invoices so the new tool can hold them.</li>
            <li>Confirm the new tool supports your QuickBooks version (Online or Desktop).</li>
            <li>Get the new vendor’s price for your exact headcount, contract length and renewal terms in writing.</li>
          </ol>
          <p>
            For list prices across tools, see our{' '}
            <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Service Fusion alternatives">
            For small teams, Jobber, Kickserv and Housecall Pro cost less and offer trials. For maintenance
            agreements, FieldEdge, ServiceTitan and FieldPulse document more, by quote. For teams of about 10
            or more, Service Fusion’s unlimited users are hard to beat on published price. Check your order’s
            renewal term before you switch. Our <Link href="/how-we-review" className={A}>review method</Link>{' '}
            explains why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
            <Link href="/quickbooks" className="text-orange-600 hover:text-orange-800">QuickBooks compatibility →</Link>
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
