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
 * /compare/jobber-alternatives: targets "jobber alternatives", "jobber competitors" and "apps like
 * jobber". No GSC data for this topic yet.
 *
 * Sources: Jobber facts reuse the site's verified pages (pricing 2026-11-03 to 2026-11-21, help
 * center 2026-11-19/20) plus new 2026-11-21 checks of its client export and account closure
 * articles. New 2026-11-21 checks: GorillaDesk and Kickserv pricing, FieldPulse's Jobber migration
 * guide, Housecall Pro's import help, ServiceM8 import help, Workiz's Jobber comparison page.
 * ServiceTitan wording uses its 2026-11-21 pricing page (Core, Demand AI, Field AI, MAX).
 * www.housecallpro.com was not refetched. Nothing tested hands-on. We do not claim why customers
 * leave Jobber.
 */

const PATH = '/compare/jobber-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Jobber Alternatives (2026): Prices, QuickBooks and Team Size Fit'
const DESCRIPTION =
  'Jobber syncs with QuickBooks Online only and prices by user band. Compare Housecall Pro, ServiceM8, GorillaDesk, Service Fusion and more on published prices.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/jobber-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber alternatives', href: PATH },
]

type Row = {
  name: string
  price: string
  basis: string
  trial: string
  quickbooks: string
  importHelp: string
}

const rows: Row[] = [
  {
    name: 'Jobber (for reference)',
    price: 'From $29 per month billed annually (1 user); up to $529 for 15 users on Plus',
    basis: 'Plan and team-size band',
    trial: '14 days of Grow features',
    quickbooks: 'Online only (and Xero), from Connect',
    importHelp: 'Client export as CSV or vCard on select plans, 1,500 rows per file',
  },
  {
    name: 'Housecall Pro',
    price: '$59, $149, $299 per month billed annually (1, 5, 8 users)',
    basis: 'Plan with included users',
    trial: '14 days of MAX features',
    quickbooks: 'Online and Desktop listed on Essentials',
    importHelp: 'Basic transfer free; MAX gets its data import team',
  },
  {
    name: 'ServiceM8',
    price: '$0 (30 jobs a month), $29, $79, $149, $349 per month',
    basis: 'Jobs per month; unlimited users from $29',
    trial: '14 days',
    quickbooks: 'Online and Xero; Desktop not listed',
    importHelp: 'CSV bulk import, or import from your accounting software',
  },
  {
    name: 'GorillaDesk',
    price: '$49, $99, $149 per month for the first route',
    basis: 'Per route; unlimited users on every plan',
    trial: '14 days, no credit card',
    quickbooks: 'Online, on Pro',
    importHelp: 'Free import help; not complete past service or billing history',
  },
  {
    name: 'Kickserv',
    price: '$60 (5 users), $119 (10), $199 (20) per month; 20% off annual',
    basis: 'User bundles',
    trial: '30 days',
    quickbooks: 'Online on Start; Desktop $50 a month on Run',
    importHelp: 'CSV or Gmail upload; customers from QuickBooks',
  },
  {
    name: 'Service Fusion',
    price: '$220, $339, $552 per month billed annually',
    basis: 'Plan; unlimited users',
    trial: 'Demo',
    quickbooks: 'Online and Desktop',
    importHelp: 'Import templates and data extraction services',
  },
  {
    name: 'FieldPulse',
    price: 'Not published; seat-based',
    basis: 'Seats',
    trial: 'No free trial; demo',
    quickbooks: 'Online and Desktop 2024 or newer',
    importHelp: 'Jobber migration guide: clients and items by template',
  },
  {
    name: 'Workiz',
    price: 'Not published (“Request pricing”)',
    basis: 'Plan; billed annually',
    trial: '7 days',
    quickbooks: 'Online on every plan; its QuickBooks page says Desktop is supported',
    importHelp: 'Says it moves clients, jobs and history for you',
  },
  {
    name: 'ServiceTitan',
    price: 'Not published (“Get Pricing”)',
    basis: 'Packages Core, Demand AI, Field AI, MAX',
    trial: 'Demo',
    quickbooks: 'Online and Desktop, Sage Intacct, Xero',
    importHelp: 'No Jobber import guide found',
  },
]

const cols: { key: keyof Omit<Row, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price' },
  { key: 'basis', label: 'Priced by' },
  { key: 'trial', label: 'Trial' },
  { key: 'quickbooks', label: 'QuickBooks' },
  { key: 'importHelp', label: 'Moving from Jobber' },
]

const faqs = [
  {
    question: 'What is the cheapest Jobber alternative with published pricing?',
    answer:
      'ServiceM8 has a $0 plan for one user and 30 jobs a month and a $29 plan with unlimited users. GorillaDesk starts at $49 a month for the first route with unlimited users, Housecall Pro at $59 billed annually for one user, and Kickserv at $60 a month for 5 users. Jobber Core itself is $29 billed annually.',
  },
  {
    question: 'Which Jobber alternatives work with QuickBooks Desktop?',
    answer:
      'Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials, Service Fusion supports both on every plan, FieldPulse supports Desktop 2024 or newer, Kickserv charges $50 a month for Desktop on Run, and ServiceTitan supports Desktop. Workiz’s QuickBooks page says it supports Desktop. Jobber syncs with QuickBooks Online only.',
  },
  {
    question: 'How do I export my client list from Jobber?',
    answer:
      'Jobber’s help center says admins can export the client list as a CSV or vCard file, that client export is available on select plans, and that a CSV export holds up to 1,500 rows per file, with larger lists sent as several files. Reports can also be exported as CSV.',
  },
  {
    question: 'What happens to my data if I close my Jobber account?',
    answer:
      'Jobber says an account must be cancelled before it can be permanently closed, and that after closure any information in it is no longer retrievable. Export your clients and the reports you need first.',
  },
  {
    question: 'Will a new tool import my Jobber jobs and invoices?',
    answer:
      'It varies. Housecall Pro says its MAX data import team can handle customers, job history, equipment and the price book. FieldPulse imports clients and items from templates. GorillaDesk helps import for free but says complete past service and billing history cannot be imported. Workiz says it moves clients, jobs and history for you.',
  },
  {
    question: 'What should a team of more than 15 users use instead of Jobber?',
    answer:
      'Jobber publishes prices up to 15 users. Service Fusion and GorillaDesk include unlimited users, Kickserv’s Scale plan covers 20 users for $199 a month, and ServiceTitan, FieldPulse and Workiz price larger teams by quote.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, bands, trial, renewal)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: QuickBooks integration FAQs (Online only)', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: export client information', url: 'https://help.getjobber.com/en/articles/export-client-information/', checked: '2026-11-21' },
  { name: 'Jobber help: permanently close an account', url: 'https://help.getjobber.com/en/articles/how-do-i-permanently-close-my-account/', checked: '2026-11-21' },
  { name: 'Jobber help: automatic payments', url: 'https://help.getjobber.com/hc/en-us/articles/360036931633-Automatic-Payments', checked: '2026-11-20' },
  { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: importing customers (data import team, free basic transfer)', url: 'https://help.housecallpro.com/en/articles/136068-what-are-the-options-for-importing-my-customers-into-housecall-pro', checked: '2026-11-21' },
  { name: 'ServiceM8 pricing', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-21' },
  { name: 'ServiceM8 help: import materials and clients', url: 'https://support.servicem8.com/hc/en-us/articles/200273634-How-to-import-Materials-and-Clients', checked: '2026-11-21' },
  { name: 'GorillaDesk pricing (per route, unlimited users, import help)', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-21' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-21' },
  { name: 'Kickserv help: customers and contacts (import)', url: 'https://help.kickserv.com/article/36-customers-and-contacts', checked: '2026-11-21' },
  { name: 'Service Fusion pricing', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-20' },
  { name: 'Service Fusion Subscription Agreement (auto-renewal, 30 days’ notice)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
  { name: 'Service Fusion blog: implementation and data import', url: 'https://www.servicefusion.com/blog/overview-of-implementation', checked: '2026-11-20' },
  { name: 'FieldPulse pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-20' },
  { name: 'FieldPulse help: migrating from Jobber', url: 'https://help.fieldpulse.com/getting-started/migrating/jobber', checked: '2026-11-21' },
  { name: 'FieldPulse help: QuickBooks Desktop pre-sync', url: 'https://help.fieldpulse.com/en/articles/8292219-pre-sync-quickbooks-desktop', checked: '2026-11-20' },
  { name: 'Workiz pricing plans', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-20' },
  { name: 'Workiz vs Jobber page (switching help, annual billing)', url: 'https://www.workiz.com/vs/jobber-alternative/', checked: '2026-11-21' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-20' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-21' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function JobberAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/jobber-alternatives"
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
            Jobber alternatives: <span className="text-orange-400">8 tools compared on price and fit</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Published prices, how each tool charges (by user, job or route), QuickBooks support and
            how to move your Jobber data, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Jobber is hard to beat on entry price, so most alternatives win on something specific. If
            you need QuickBooks Desktop, <strong>Housecall Pro</strong> lists it on Essentials ($149/month
            billed annually for five users) and <strong>Service Fusion</strong> on every plan. For
            route-based recurring work, <strong>GorillaDesk</strong> charges per route with unlimited
            users. <strong>ServiceM8</strong> charges by jobs per month, from $0 for 30 jobs, and{' '}
            <strong>Kickserv</strong> lists 10 users for $119 a month. FieldPulse, Workiz and
            ServiceTitan price by quote. Export your Jobber clients before you cancel: Jobber says data
            in a closed account is no longer retrievable.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="jobber">What Jobber costs and where plans gate features</h2>
          <p>
            Jobber’s Core plan is $29 a month billed annually for one user. Connect, Grow and Plus are
            priced by team band up to 15 users, from $99 for one user on Connect to $529 for 15 on Plus,
            billed annually, and teams of 16 or more contact sales. QuickBooks Online and Xero sync,
            route optimization and automated follow-ups start on Connect; Jobber does not sync with
            QuickBooks Desktop. Agreements run as recurring jobs, and Jobber says it tries a failed
            automatic payment only once. Annual billing is non-refundable, and subscriptions renew
            automatically unless set to non-renew. Every band is in our{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> guide.
          </p>

          <h2 id="when-to-stay">When Jobber may still be the better fit</h2>
          <p>
            For a solo operator or a small crew on QuickBooks Online, Jobber’s $29 entry price, 14-day
            trial of Grow features and offline timers and checklists are a strong combination. If none
            of the gaps above affects you, switching may cost more than it saves.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Jobber alternatives compared</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Prices
            are USD standard rates. Sources and check dates are at the end of this page.
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

        <div className="prose-body mt-12">
          <h2 id="alternatives">The alternatives</h2>

          <h3>Housecall Pro</h3>
          <p>
            <strong>Best fit:</strong> small residential teams that need QuickBooks Desktop or flat-rate
            pricing. Basic is $59 a month billed annually, Essentials $149 for five users and MAX $299
            for eight, with a 14-day trial and no long-term contract. Its plan data lists QuickBooks
            Online and Desktop and customer equipment tracking on Essentials. It says its basic
            transfer option is free, and MAX customers can have its data import team move customers,
            job history, equipment and the price book. <strong>Limitation:</strong> one user on Basic,
            offline viewing only, and Recurring Service Plans on MAX. See{' '}
            <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>.
          </p>

          <h3>ServiceM8</h3>
          <p>
            <strong>Best fit:</strong> small teams with a modest number of jobs. ServiceM8 charges by
            jobs a month: $0 for 30 jobs and one user, then $29, $79, $149 and $349 with unlimited users.
            Quote options, e-signature and automated follow-ups are on all plans.{' '}
            <strong>Limitation:</strong> a busy shop moves up plans by job count, and it lists QuickBooks
            Online and Xero but not Desktop.
          </p>

          <h3>GorillaDesk</h3>
          <p>
            <strong>Best fit:</strong> route-based recurring work such as pest, lawn, pool and cleaning.
            Plans are $49, $99 and $149 a month for the first route with unlimited users, month to month
            with no setup fees and a 14-day trial. Pro adds real-time route planning, automated
            subscription billing and QuickBooks Online sync. GorillaDesk says its team imports your data
            at no charge. <strong>Limitation:</strong> each extra route adds to the bill, QuickBooks
            Desktop is not listed, and it says complete past service and billing history cannot be imported.
          </p>

          <h3>Kickserv</h3>
          <p>
            <strong>Best fit:</strong> price-sensitive teams of 5 to 20. Kickserv lists $60 a month for 5
            users, $119 for 10 and $199 for 20, with 20% off annual billing and a 30-day trial. QuickBooks
            Online is on Start, and Desktop costs $50 a month on Run. <strong>Limitation:</strong> its
            pricing page does not list recurring service agreements, and its import guide dates from 2023.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>Best fit:</strong> growing teams that want unlimited users and QuickBooks Desktop.
            Plans are $220, $339 and $552 a month billed annually, month to month, with import templates
            and data extraction services. Its Subscription Agreement renews the ordered term automatically for the same length unless you give 30 days’ written notice before it ends, so check the term on your order. <strong>Limitation:</strong> the entry price is far above
            Jobber Core, and recurring invoicing is included only on Pro.
          </p>

          <h3>FieldPulse, Workiz and ServiceTitan</h3>
          <p>
            All three price by quote. <strong>FieldPulse</strong> publishes a Jobber migration guide:
            export your clients and Products & Services, import them from templates, and recreate settings;
            it supports QuickBooks Desktop 2024 or newer but has no free trial.{' '}
            <strong>Workiz</strong> says it moves your clients, jobs and history for you and offers a 7-day
            trial, but bills plans annually and puts service plans and flat rate on Ultimate.{' '}
            <strong>ServiceTitan</strong> suits much larger shops; its pricing page lists Core, Demand AI,
            Field AI and MAX packages behind a Get Pricing button, and we found no guide for importing from
            Jobber. See <Link href="/compare/servicetitan-vs-jobber" className={A}>ServiceTitan vs Jobber</Link>.
          </p>

          <h2 id="pricing-models">Four ways these tools charge</h2>
          <ul>
            <li><strong>By plan and team band:</strong> Jobber and Housecall Pro. Watch the user caps on each plan.</li>
            <li><strong>By jobs a month:</strong> ServiceM8. Cheap for low volume, rising with job count.</li>
            <li><strong>By route:</strong> GorillaDesk, with unlimited office and crew users.</li>
            <li><strong>Flat with unlimited users:</strong> Service Fusion; Kickserv sells bundles of 5, 10 and 20 users.</li>
          </ul>

          <h2 id="export">How to export your data from Jobber</h2>
          <p>
            Jobber’s help center says admins can export the client list as CSV or vCard, on select plans,
            with up to 1,500 rows per CSV file. Reports can be exported as CSV and arrive by email. An
            account must be cancelled before it can be closed, and after closure its data is no longer
            retrievable, so export before you close. On the import side, FieldPulse imports clients and
            items from templates and tells QuickBooks users not to import customers or items twice, and
            ServiceM8 can pull clients from your accounting software.
          </p>

          <h2 id="switching-checklist">Before you switch: a checklist</h2>
          <ol>
            <li>Check your Jobber billing term; annual payments are non-refundable.</li>
            <li>Export clients and the reports you need before cancelling.</li>
            <li>Decide whether QuickBooks or the new tool is the source of customer records.</li>
            <li>Price your team size, job volume or route count on each option.</li>
            <li>Confirm which plan includes QuickBooks Desktop, recurring billing and route planning.</li>
          </ol>
          <p>
            For accounting details, see our <Link href="/quickbooks" className={A}>QuickBooks guide</Link>,
            and for free plans, our <Link href="/free" className={A}>free field service software</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Jobber alternatives">
            Pick by the gap you need to close: Housecall Pro or Service Fusion for QuickBooks Desktop,
            GorillaDesk for route-based recurring work, ServiceM8 or Kickserv for a lower bill at your job
            count or team size. Export your clients before you cancel. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
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
