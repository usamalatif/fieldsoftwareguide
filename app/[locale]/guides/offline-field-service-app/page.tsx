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
 * /guides/offline-field-service-app: targets "offline field service app", "field service app that
 * works offline" and "field service software offline mode". No GSC data for this topic yet.
 *
 * Facts come from each vendor's own offline help articles, feature pages and roadmap (dates in
 * `sources`). Jobber and Housecall Pro marketing sites are not refetched; their facts reuse the
 * site's verified pages (Jobber's offline article updated 2026-11-17, read 2026-11-19; Housecall
 * Pro's offline article read 2026-11-17). FieldEdge's offline mode is described only as a roadmap
 * item. Nothing tested hands-on; offline behavior can change with app versions.
 */

const PATH = '/guides/offline-field-service-app'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Offline Field Service Apps (2026): What Works Without Signal'
const DESCRIPTION =
  'What ten field service apps let technicians do with no signal: view jobs, edit notes and forms, create estimates, take payments. From vendor help centers.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/offline-field-service-app',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Offline field service apps', href: PATH },
]

type Tool = {
  name: string
  view: string
  edit: string
  paperwork: string
  payments: string
  limits: string
}

const tools: Tool[] = [
  {
    name: 'ServiceTitan',
    view: 'Jobs and cached equipment history',
    edit: 'Job status, time, notes, photos, findings, forms and on-device signatures',
    paperwork: 'Estimates, including creating items; invoice materials and equipment edits',
    payments: 'Keyed card, check, ACH and cash held and processed on reconnect; card swipe and Tap to Pay need a connection',
    limits: 'Purchase orders, inventory availability, financing and contracts need a connection',
  },
  {
    name: 'FieldPulse',
    view: 'Jobs and projects cached for one week; switches to offline mode by itself',
    edit: 'Notes, photos, status, timesheets; up to 600 cached forms plus unlimited new drafts',
    paperwork: 'Preview, sign and update cached estimates and invoices',
    payments: 'Not available offline',
    limits: 'No new jobs or customers until back online',
  },
  {
    name: 'Commusoft',
    view: 'Site and asset histories and job details',
    edit: 'Work forms and new data recorded in dead zones',
    paperwork: 'Not stated',
    payments: 'Not stated',
    limits: 'Calls its app offline-first; syncs automatically on reconnect',
  },
  {
    name: 'Jobber',
    view: 'The day’s schedule',
    edit: 'Timers, notes with photos or videos, checklists (from Connect), mark visits complete',
    paperwork: 'Does not offer to create an invoice offline',
    payments: 'Tap to Pay needs a connection',
    limits: 'Creating quotes or jobs offline is not documented',
  },
  {
    name: 'ServiceM8',
    view: 'Jobs already synced to the device, on every plan including Free',
    edit: 'Update jobs and save notes and photos',
    paperwork: 'Cannot produce final PDF quotes, invoices or forms',
    payments: 'Not stated',
    limits: 'No emails or texts until back in range',
  },
  {
    name: 'Service Fusion',
    view: 'Schedules, customer information and job details',
    edit: 'Job notes, photos, tasks and checklists',
    paperwork: 'View estimates and invoices only',
    payments: 'Not available yet',
    limits: 'No new jobs or estimates or job status changes yet; listed as a planned “fast follow”',
  },
  {
    name: 'Workiz',
    view: 'Job details',
    edit: 'Update information; changes sync when the connection returns',
    paperwork: 'Not stated',
    payments: 'Not stated',
    limits: 'No list of offline actions on the pages we could read',
  },
  {
    name: 'Kickserv',
    view: 'Changelog says “Offline functionality”',
    edit: 'Not stated',
    paperwork: 'Not stated',
    payments: 'Not stated',
    limits: 'Scope and date not stated',
  },
  {
    name: 'Housecall Pro',
    view: 'View only: jobs for today and the next two days, up to 10 a day',
    edit: 'Needs a connection',
    paperwork: 'Needs a connection',
    payments: 'Needs a connection',
    limits: 'A connection is needed to make changes, collect payment or finish a job',
  },
  {
    name: 'FieldEdge',
    view: 'Roadmap only',
    edit: 'Roadmap only',
    paperwork: 'Roadmap only',
    payments: 'Roadmap only',
    limits: 'Offline mode for the Mobile 2.0 app is listed as in development; current offline features not documented',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'view', label: 'View offline' },
  { key: 'edit', label: 'Edit offline' },
  { key: 'paperwork', label: 'Estimates and invoices' },
  { key: 'payments', label: 'Payments' },
  { key: 'limits', label: 'Limits' },
]

const faqs = [
  {
    question: 'Which field service app works best offline?',
    answer:
      'ServiceTitan documents the most: technicians can update job status, notes, photos, forms, signatures and estimates offline, and keyed-in card, check, ACH and cash payments are held until the device reconnects. FieldPulse is close behind for paperwork but takes no payments offline. Among published-price tools, ServiceM8 includes offline use on every plan, including its free plan.',
  },
  {
    question: 'Does Housecall Pro work offline?',
    answer:
      'Only for viewing. Its help center says the app downloads jobs for today and the next two days, up to 10 a day, and that you need a connection to make changes, collect payment or finish a job.',
  },
  {
    question: 'Does Jobber work offline?',
    answer:
      'Partly. Jobber’s offline article says the app saves the day’s schedule and lets technicians run timers, add notes with photos or videos, fill out checklists and mark visits complete. It does not offer to create an invoice offline, and Tap to Pay needs a connection.',
  },
  {
    question: 'Can I take card payments without signal?',
    answer:
      'Only ServiceTitan documents it: keyed-in card, check, ACH and cash payments are held on a Deferred Payments screen and processed when the device reconnects. Card swipe and Tap to Pay still need a connection. FieldPulse and Service Fusion say payments are not available offline.',
  },
  {
    question: 'Does FieldEdge have an offline mode?',
    answer:
      'FieldEdge’s roadmap lists offline mode for its Mobile 2.0 app as in development. We found no FieldEdge page describing what works offline today, so ask for a demo in airplane mode.',
  },
  {
    question: 'How do offline apps sync?',
    answer:
      'Every vendor here that documents offline use says changes save on the device and sync automatically when the connection returns. Service Fusion says changes sync in as fast as five seconds.',
  },
]

const sources = [
  { name: 'ServiceTitan help: Field Mobile App offline capabilities (updated November 20, 2026)', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-24' },
  { name: 'FieldPulse help: offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-11-24' },
  { name: 'Commusoft mobile workforce management (online or offline)', url: 'https://www.commusoft.com/en-us/features/mobile-workforce-management-software/', checked: '2026-11-24' },
  { name: 'Commusoft FAQs (offline-first app)', url: 'https://www.commusoft.com/en-us/faqs/', checked: '2026-11-24' },
  { name: 'Jobber help: use the Jobber app offline (updated November 17, 2026)', url: 'https://help.getjobber.com/en/articles/use-the-jobber-app-offline/', checked: '2026-11-19' },
  { name: 'ServiceM8 help: does ServiceM8 work offline', url: 'https://support.servicem8.com/questions/mobile/does-servicem8-work-offline-without-mobile-coverage-or-internet', checked: '2026-11-24' },
  { name: 'ServiceM8 pricing (offline access on every plan)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion blog: introducing offline mode (June 22, 2026)', url: 'https://www.servicefusion.com/blog/introducing-offline-mode', checked: '2026-11-24' },
  { name: 'Workiz mobile app', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-24' },
  { name: 'Kickserv changelog', url: 'https://changelog.kickserv.com/', checked: '2026-11-24' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'FieldEdge future features (Mobile 2.0 offline mode)', url: 'https://fieldedge.com/future-features/', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function OfflineFieldServiceAppPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/offline-field-service-app"
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
            Offline field service apps: <span className="text-orange-400">what works without signal</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What ten field service apps let a technician do in a basement, a rural job site or a dead zone,
            from each vendor&rsquo;s own help center, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Offline support ranges from full job work to view only. <strong>ServiceTitan</strong> documents the
            most: job status, notes, photos, forms, signatures and estimates work offline, and keyed-in card,
            check, ACH and cash payments are held until the device reconnects. <strong>FieldPulse</strong> lets
            technicians edit jobs, forms, estimates and invoices offline but takes no payments.{' '}
            <strong>Jobber</strong> and <strong>ServiceM8</strong> cover notes, photos and job updates but not
            final invoices, and <strong>Service Fusion</strong> added a partial offline mode in June 2026.{' '}
            <strong>Housecall Pro</strong> is view only, and FieldEdge lists offline mode on its roadmap.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="why">Why offline mode matters</h2>
          <p>
            Technicians lose signal in basements, crawl spaces, mechanical rooms, rural properties and new
            builds. Without offline support, they either wait to finish paperwork or write it on paper and
            re-enter it later. The questions that matter are whether a tech can update the job, capture photos
            and signatures, build an estimate or invoice, and take payment, and whether it all syncs without
            anyone pressing a button.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>What each app does offline</h2>
          <p className={SUB}>
            From each vendor&rsquo;s documentation, not a hands-on test. Sources and check dates are at the end
            of this page.
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
                {tools.map((t) => (
                  <tr key={t.name} className="align-top">
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
          <h2 id="tools">The apps in detail</h2>

          <h3>ServiceTitan</h3>
          <p>
            Its offline article, updated November 20, 2026, says changes save on the device and sync with no
            manual step. Job status, time tracking, notes, photos, findings, forms and on-device signatures
            work offline, as do estimates, including creating items. Keyed-in card, check, ACH, mobile check
            and cash payments are held on a Deferred Payments screen until the device reconnects. Card swipe,
            Tap to Pay, purchase orders, inventory availability, customer financing and contracts need a
            connection, and some invoice details such as tasks and tax zones do too. See{' '}
            <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link>.
          </p>

          <h3>FieldPulse</h3>
          <p>
            The app switches to offline mode by itself when it loses signal and caches jobs and projects for
            one week. Technicians can add notes, photos and status changes, clock in and out, edit up to 600
            cached forms and create unlimited new draft forms, and preview, sign and update cached estimates
            and invoices. New jobs, new customers and payments wait until the device is back online. See{' '}
            <Link href="/pricing/fieldpulse" className={A}>FieldPulse pricing</Link>.
          </p>

          <h3>Commusoft</h3>
          <p>
            Commusoft calls its app offline-first and says technicians can access site and asset histories,
            job details and work forms and record new data in dead zones, with automatic sync on reconnect.
            It does not say whether payments or invoices work offline.
          </p>

          <h3>Jobber</h3>
          <p>
            Jobber&rsquo;s offline article, updated November 17, 2026, says the app saves the day&rsquo;s schedule
            and lets technicians run timers, create notes with photos or videos, fill out checklists and mark
            visits complete. Checklists start on Connect. It does not offer to create an invoice offline, and
            Tap to Pay needs a connection. See <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>ServiceM8</h3>
          <p>
            ServiceM8 lists offline use on all five plans, including the free plan. Its help center says that
            for jobs already synced to the device you can view details, update jobs and save notes and photos,
            but you cannot produce final PDF quotes, invoices or forms, or send emails or texts, until you are
            back in range.
          </p>

          <h3>Service Fusion</h3>
          <p>
            Service Fusion launched offline mode on June 22, 2026 for all customers on its updated app. Offline,
            technicians can view schedules, customer information and job details, and add and edit notes,
            photos, tasks and checklists. Creating jobs or estimates, updating job status and taking payments
            are not available yet; Service Fusion calls them a planned fast follow. See{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <h3>Workiz and Kickserv</h3>
          <p>
            Workiz says technicians can access job details and update information with limited or no
            connectivity, and that changes sync once the connection returns, without listing which actions work.
            Kickserv&rsquo;s changelog mentions offline functionality without describing its scope or date. Test
            both in airplane mode before you buy.
          </p>

          <h3>Housecall Pro</h3>
          <p>
            Housecall Pro&rsquo;s help center says the app downloads jobs for today and the next two days, up to
            10 a day, for viewing, and that you need a connection to make changes, collect payment or finish a
            job. See <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>FieldEdge</h3>
          <p>
            FieldEdge&rsquo;s roadmap lists offline mode for its Mobile 2.0 app as in development, alongside
            forms, equipment and invoice work in other stages. We found no FieldEdge page that describes what
            the app does offline today. See <Link href="/pricing/fieldedge" className={A}>FieldEdge pricing</Link>.
          </p>

          <h2 id="test">How to test offline mode in a demo</h2>
          <ul>
            <li>Open the day&rsquo;s jobs, then switch the phone to airplane mode.</li>
            <li>Change a job status, add a note and two photos, and fill in a form or checklist.</li>
            <li>Build an estimate and an invoice from the price book, and collect a signature.</li>
            <li>Try to take a payment, and see what the app says.</li>
            <li>Turn airplane mode off and check that everything appears in the office without a manual sync.</li>
          </ul>
          <p>
            For trades that work in remote sites, also see our{' '}
            <Link href="/by-industry/oil-gas" className={A}>oil and gas</Link> and{' '}
            <Link href="/by-industry/telecom" className={A}>telecom</Link> guides, and compare plan prices in the{' '}
            <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            If your technicians regularly lose signal, ServiceTitan and FieldPulse document the fullest offline
            work, and ServiceTitan is the only one that holds payments for later processing. ServiceM8 and Jobber
            cover job updates at published prices. Housecall Pro is view only offline, and FieldEdge&rsquo;s
            offline mode is still on its roadmap.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/guides/field-service-scheduling-software" className="text-orange-600 hover:text-orange-800">Field service scheduling software →</Link>
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
            <Link href="/guides" className="text-orange-600 hover:text-orange-800">All guides →</Link>
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
