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
 * /compare/servicem8-alternatives: targets "servicem8 alternatives" and "servicem8 competitors".
 * No GSC data for this topic yet. Pricing detail stays on /pricing/servicem8.
 *
 * ServiceM8 facts were checked on its own pages on 2026-11-24. Alternatives reuse the site's
 * verified pricing and feature pages (dates in `sources`). We do not claim why customers leave
 * ServiceM8; the page frames alternatives by documented differences (job-based pricing, QuickBooks
 * Desktop, team size). Nothing tested hands-on.
 */

const PATH = '/compare/servicem8-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceM8 Alternatives (2026): 6 Tools Compared on Price'
const DESCRIPTION =
  'Compare six ServiceM8 alternatives on published price, per-user vs per-job pricing, QuickBooks Desktop, offline use and team size, from vendor pages.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicem8-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceM8 alternatives', href: PATH },
]

type Tool = {
  name: string
  price: string
  model: string
  quickbooks: string
  offline: string
  trial: string
}

const tools: Tool[] = [
  {
    name: 'ServiceM8 (for reference)',
    price: 'Free $0 (1 user, 30 jobs); Starter $29 (50 jobs); Growing $79 (150 jobs); Premium $149 (500 jobs)',
    model: 'By jobs a month; unlimited users on paid plans',
    quickbooks: 'QuickBooks Online, Xero and MYOB; no Desktop mentioned',
    offline: 'View and update synced jobs, notes and photos on every plan',
    trial: '14 days; free plan; help center says no contract',
  },
  {
    name: 'Jobber',
    price: 'Core $29 (1 user) billed annually, $49 with no commitment; Connect $149 for 5 users',
    model: 'By plan and team size (1, 5, 10, 15 users)',
    quickbooks: 'QuickBooks Online and Xero from Connect; no Desktop listed',
    offline: 'Schedule, timers, notes, checklists and visit completion; no invoices offline',
    trial: '14 days, no credit card',
  },
  {
    name: 'Housecall Pro',
    price: 'Basic $59 (1 user), Essentials $149 (up to 5), MAX $299 (up to 8) billed annually',
    model: 'By plan and user limit; $35 per extra user on MAX',
    quickbooks: 'QuickBooks Online from Essentials; plan data also lists Desktop on Essentials',
    offline: 'View only: today and the next two days',
    trial: '14 days, no credit card',
  },
  {
    name: 'Kickserv',
    price: 'Start $60 (5 users), Run $119 (10 users), Scale $199 (20 users) a month',
    model: 'By plan and user limit; 20% off annual',
    quickbooks: 'QuickBooks Online from Start; Desktop $50 a month extra',
    offline: 'Changelog mentions offline use; scope not stated',
    trial: '30 days',
  },
  {
    name: 'Service Fusion',
    price: 'Starter $220, Plus $339, Pro $552 billed annually',
    model: 'Flat price with unlimited users',
    quickbooks: 'QuickBooks Online and Desktop on every plan',
    offline: 'View jobs and edit notes, photos and checklists; no payments yet',
    trial: 'Demo only',
  },
  {
    name: 'Workiz',
    price: 'Quote only (Standard, Pro, Ultimate)',
    model: 'Not published',
    quickbooks: 'QuickBooks Online and Desktop, one way from Workiz',
    offline: 'Job details can be updated offline; actions not listed',
    trial: '7 days, no credit card',
  },
  {
    name: 'FieldPulse',
    price: 'Quote only',
    model: 'Seat-based; one-year term',
    quickbooks: 'QuickBooks Online, and Desktop 2024 or newer on Windows',
    offline: 'Jobs cached for a week; edit forms, estimates and invoices; no payments',
    trial: 'Demo only',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price (per month)' },
  { key: 'model', label: 'How it charges' },
  { key: 'quickbooks', label: 'QuickBooks' },
  { key: 'offline', label: 'Offline' },
  { key: 'trial', label: 'Trial and terms' },
]

const faqs = [
  {
    question: 'What is the best ServiceM8 alternative?',
    answer:
      'It depends on why ServiceM8 does not fit. If you run many small jobs, a per-user tool such as Jobber or Kickserv may cost less than paying by job. If you need QuickBooks Desktop, Service Fusion and Kickserv list it. If your team is over 20, Service Fusion’s unlimited users or a quote-based tool such as FieldPulse may fit better.',
  },
  {
    question: 'Is there a cheaper alternative to ServiceM8?',
    answer:
      'For a solo operator, ServiceM8’s free plan is hard to beat. For a team, compare by volume: ServiceM8 Growing is $79 for unlimited users and 150 jobs, Kickserv Start is $60 for 5 users with no job limit, and Jobber Core is $29 billed annually for one user.',
  },
  {
    question: 'Which ServiceM8 alternatives support QuickBooks Desktop?',
    answer:
      'Service Fusion lists QuickBooks Online and Desktop on every plan, Kickserv offers Desktop for $50 a month, Housecall Pro’s plan data lists Desktop on Essentials, and Workiz and FieldPulse support Desktop. ServiceM8 and Jobber do not mention Desktop.',
  },
  {
    question: 'Which alternative works best offline?',
    answer:
      'FieldPulse documents the most offline work among these alternatives: jobs cached for a week and editable forms, estimates and invoices, without payments. Jobber covers timers, notes and checklists. Housecall Pro is view only.',
  },
]

const sources = [
  { name: 'ServiceM8 pricing (US plans and job limits)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 home (sole traders up to 20 staff)', url: 'https://www.servicem8.com/us', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost (no contracts)', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 help: offline use', url: 'https://support.servicem8.com/questions/mobile/does-servicem8-work-offline-without-mobile-coverage-or-internet', checked: '2026-11-24' },
  { name: 'ServiceM8 help: connect to QuickBooks Online', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/quickbooks/how-do-i-connect-servicem8-to-quickbooks-online', checked: '2026-11-24' },
  { name: 'Jobber pricing (plans, bands, billing options, trial)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: use the Jobber app offline', url: 'https://help.getjobber.com/en/articles/use-the-jobber-app-offline/', checked: '2026-11-19' },
  { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv help: QuickBooks Desktop', url: 'https://help.kickserv.com/article/8-connect-to-quickbooks-desktop', checked: '2026-11-24' },
  { name: 'Kickserv changelog (offline)', url: 'https://changelog.kickserv.com/', checked: '2026-11-24' },
  { name: 'Service Fusion pricing', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion blog: introducing offline mode', url: 'https://www.servicefusion.com/blog/introducing-offline-mode', checked: '2026-11-24' },
  { name: 'Workiz pricing plans', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-24' },
  { name: 'Workiz mobile app (offline)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-24' },
  { name: 'FieldPulse pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-24' },
  { name: 'FieldPulse help: offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Desktop', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-desktop/overview.md', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceM8AlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicem8-alternatives"
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
            ServiceM8 alternatives: <span className="text-orange-400">six tools compared on price and fit</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How six field service tools compare with ServiceM8 on pricing model, QuickBooks, offline use and
            trials, from each vendor&rsquo;s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            ServiceM8 charges by jobs a month, from a free plan to $349, with unlimited users on paid plans, and
            says it is built for teams of up to 20 staff. <strong>Jobber</strong> (from $29 billed annually) and{' '}
            <strong>Kickserv</strong> ($60 for 5 users) charge by users instead, which can cost less if you run
            many jobs. <strong>Service Fusion</strong> ($220 billed annually) has unlimited users and QuickBooks
            Desktop on every plan. <strong>Housecall Pro</strong> starts at $59, and <strong>Workiz</strong> and{' '}
            <strong>FieldPulse</strong> are quote only.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="when">When to look beyond ServiceM8</h2>
          <ul>
            <li><strong>High job volume</strong>: ServiceM8 prices by jobs, so a busy crew can outgrow Growing (150 jobs) and Premium (500 jobs) quickly.</li>
            <li><strong>QuickBooks Desktop</strong>: ServiceM8 connects to QuickBooks Online, Xero and MYOB, and does not mention Desktop.</li>
            <li><strong>Teams over 20</strong>: ServiceM8 says it is designed for sole traders up to 20 staff.</li>
          </ul>
          <p>
            If none of these applies, ServiceM8&rsquo;s free plan and features on every plan are hard to beat; see{' '}
            <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link>.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>ServiceM8 alternatives compared</h2>
          <p className={SUB}>
            Published prices and documented features only, not a hands-on test. Prices are USD per month. Sources
            and check dates are at the end of this page.
          </p>
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 lg:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3">Software</th>
                  {cols.map((c) => <th key={c.key} scope="col" className="p-3">{c.label}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {tools.map((t, i) => (
                  <tr key={t.name} className={i === 0 ? 'bg-slate-50 align-top dark:bg-slate-900/60' : 'align-top'}>
                    <th scope="row" className="p-3 font-semibold text-slate-900 dark:text-white">{t.name}</th>
                    {cols.map((c) => <td key={c.key} className="p-3">{t[c.key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3.5 lg:hidden">
            {tools.map((t) => (
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

          <h3>Jobber</h3>
          <p>
            <strong>Best fit:</strong> small crews that want to pay by user rather than by job, with a
            no-commitment option. Core is $29 a month billed annually for one user, and Connect covers 5 users for
            $149 with QuickBooks Online, routing and reminders. <strong>Limitation:</strong> no QuickBooks Desktop,
            and no invoicing offline. See <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>Kickserv</h3>
          <p>
            <strong>Best fit:</strong> teams of 5 to 20 that want a low flat price with no job limit: $60 for 5
            users, $119 for 10 and $199 for 20, with a 30-day trial. <strong>Limitation:</strong> QuickBooks Desktop
            is $50 a month extra, and route optimization and inventory are not listed. See{' '}
            <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link>.
          </p>

          <h3>Housecall Pro</h3>
          <p>
            <strong>Best fit:</strong> residential teams up to about 10 that want published prices and a 14-day
            trial. Essentials is $149 billed annually for up to 5 users with QuickBooks.{' '}
            <strong>Limitation:</strong> the app is view only offline. See{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>Best fit:</strong> growing teams, including those above ServiceM8&rsquo;s 20-staff focus, that
            want unlimited users and QuickBooks Desktop: $220 a month billed annually. <strong>Limitation:</strong>{' '}
            a higher entry price, demo only, and an agreement that renews automatically. See{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <h3>Workiz and FieldPulse</h3>
          <p>
            <strong>Workiz</strong> is quote only but offers a 7-day trial, with a phone system, online booking and
            QuickBooks on every plan; service plans and inventory need Ultimate.{' '}
            <strong>FieldPulse</strong> is quote only and seat-based on a one-year term, with strong offline
            documentation and inventory by truck. See <Link href="/pricing/workiz" className={A}>Workiz pricing</Link>{' '}
            and <Link href="/pricing/fieldpulse" className={A}>FieldPulse pricing</Link>.
          </p>

          <h2 id="switching">Switching checklist</h2>
          <ul>
            <li>Count your jobs and users for the last three months, so you can compare per-job and per-user prices fairly.</li>
            <li>Export clients, jobs, invoices and price lists from ServiceM8 before you cancel.</li>
            <li>Check the notice period: ServiceM8&rsquo;s terms ask for 30 days before the end of the payment period.</li>
            <li>Confirm your accounting setup, especially if you are moving to QuickBooks Desktop.</li>
            <li>Test the new app offline and with a real card payment before going live.</li>
          </ul>
          <p>
            For more options by team size, see <Link href="/by-size" className={A}>software by business size</Link>{' '}
            and the <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            Stay with ServiceM8 if its job allowance fits and you use QuickBooks Online or Xero. Look at Jobber or
            Kickserv if you run many jobs with a small team, Service Fusion if you need QuickBooks Desktop and
            unlimited users, and Housecall Pro if you want a published price and a trial.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing/servicem8" className="text-orange-600 hover:text-orange-800">ServiceM8 pricing →</Link>
            <Link href="/compare/kickserv-alternatives" className="text-orange-600 hover:text-orange-800">Kickserv alternatives →</Link>
            <Link href="/compare/jobber-alternatives" className="text-orange-600 hover:text-orange-800">Jobber alternatives →</Link>
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
