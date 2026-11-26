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
 * /guides/contractor-time-tracking-software: targets "contractor time tracking software" and
 * "field service timesheet app". No GSC data for this topic yet.
 *
 * Covers clock in and out, job timers, timesheet edits and approval, GPS on time entries, payroll
 * export, and timesheet-only user types. Vendor facts reuse the site's verified pricing, compare and
 * guide pages (dates in `sources`) plus six new reads on 2026-11-26: Housecall Pro help (time
 * tracking overview, updated July 9, 2026; payroll from time tracking, updated August 6, 2026),
 * ServiceM8 help (automated time tracking; editing timesheets), FieldPulse help (employee timesheets)
 * and GorillaDesk help (time clocking, updated May 18, 2025). Live technician GPS and dispatch maps are
 * covered by /guides/field-service-scheduling-software and are linked, not repeated.
 *
 * Conflicts: older site pages describe ServiceTitan packages as Starter, Essentials and The Works; the
 * newest pricing page (2026-11-24) lists Core, Demand AI, Field AI and MAX with payroll in Core, so Core
 * is used. Jobber's help center says GPS waypoints are on "select plans" while its pricing page lists
 * GPS tracking from Connect; both are stated.
 *
 * Deliberately not used: Workiz time tracking (only its help center documents it, which we do not
 * fetch, and search snippets are not facts); Service Fusion time tracking (no vendor page found);
 * third-party time-clock vendors' claims about these tools; Housecall Pro Payroll prices (not
 * published). No tool here documents a formal timesheet approval step, so none is claimed.
 * Nothing tested hands-on.
 */

const PATH = '/guides/contractor-time-tracking-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Contractor Time Tracking Software: Field Service Timesheets (2026)'
const DESCRIPTION =
  'Clock in, job timers, GPS on time entries, payroll export and timesheet-only users in 10 field service tools, checked against their own help centers.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/contractor-time-tracking-software',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Contractor time tracking software', href: PATH },
]

type Tool = {
  name: string
  href: string
  clock: string
  edits: string
  gps: string
  payroll: string
  seats: string
}

const tools: Tool[] = [
  {
    name: 'Fergus',
    href: '/pricing/fergus',
    clock: 'Timesheets on Essentials (from $31 a month); hours and breaks logged in the Fergus Go app',
    edits: 'Not documented',
    gps: 'Not documented',
    payroll: 'Not documented; Xero, QuickBooks and MYOB are on Essentials, but timesheet sync is not described',
    seats: 'Timesheet users from $26 a month: log hours and breaks, view job cards, cannot upload photos or files',
  },
  {
    name: 'Jobber',
    href: '/pricing/jobber',
    clock: 'Time and expense tracking from Connect ($99, 1 user, billed annually); automatic location-based time tracking on Grow ($149)',
    edits: 'Not documented in the pages we used',
    gps: 'GPS waypoints pin where a team member clocks in (help center: select plans)',
    payroll: 'Gusto integration from Connect; QuickBooks Online and Xero sync from Connect',
    seats: 'No timesheet-only user type documented; extra users $29 a month each',
  },
  {
    name: 'Housecall Pro',
    href: '/pricing/housecall-pro',
    clock: 'Clock in and out in the mobile app only; optional travel and on-job time per job, kept separate from clocked-in totals',
    edits: 'Managers view and edit time cards; no approval step described',
    gps: 'Clock-in and clock-out locations on the time card when location is turned on',
    payroll: 'Payroll add-on, price not published; Sync Hours to Payroll on Payroll Advanced and Advanced Plus',
    seats: 'No timesheet-only user type documented; MAX extra users $35 a month',
  },
  {
    name: 'ServiceM8',
    href: '/pricing/servicem8',
    clock: 'Clock On and Off for shifts, Check In and Out for job time; automated tracking suggests clock-off times',
    edits: 'Admins edit shift times in the Team Timesheet; no approval step described',
    gps: 'Automated tracking uses GPS location, the time of day and scheduled jobs',
    payroll: 'Help center has an article on sending clock on and off times to Xero, MYOB or QuickBooks as timesheets',
    seats: 'Unlimited users on paid plans from $29 a month (priced by jobs); Free is 1 user',
  },
  {
    name: 'Tradify',
    href: '/pricing/tradify',
    clock: 'Timesheets on Pro ($51 per user a month)',
    edits: 'Not documented',
    gps: 'Not documented',
    payroll: 'Not documented',
    seats: 'No timesheet-only user type documented; every user pays the plan price',
  },
  {
    name: 'GorillaDesk',
    href: '/pricing/gorilladesk',
    clock: 'Time Clocking on Pro ($99 a month, first route): a timer or manual start and end times on the desktop app',
    edits: 'Edit Time permission; users edit only their current week; no approval step described',
    gps: 'Not mentioned in the time clocking article',
    payroll: 'Hourly rate per user shown in the Time Clocking report; no payroll integration mentioned',
    seats: 'Priced per route; admin, manager, sales and crew users are free',
  },
  {
    name: 'Kickserv',
    href: '/pricing/kickserv',
    clock: 'Time tracking on Start ($60, 5 users); Clock In button in the technician app',
    edits: 'Not documented',
    gps: 'GPS check-ins on Run ($119, 10 users); link to time entries not described',
    payroll: 'Not documented; QuickBooks Online on Start',
    seats: 'Users included in each plan: 5, 10 or 20',
  },
  {
    name: 'FieldPulse',
    href: '/pricing/fieldpulse',
    clock: 'General timesheet (start, end, unpaid breaks and lunch) plus an optional job tracking timesheet',
    edits: 'Admins and managers review and modify entries in Team Timesheets; no approval step described',
    gps: 'Geo-tags every clock-in and clock-out made in the mobile app',
    payroll: 'Export button on weekly and monthly totals; timesheets sync one way to QuickBooks Online (opt-in) and QuickBooks Desktop',
    seats: 'No prices published',
  },
  {
    name: 'ServiceTitan',
    href: '/pricing/servicetitan',
    clock: 'Time tracking in the Field Mobile App, which also works offline',
    edits: 'Not documented in the pages we used',
    gps: 'Not documented in the pages we used',
    payroll: 'Configurable payroll and commission tracking in Core',
    seats: 'Quote only, priced by users; packages Core, Demand AI, Field AI and MAX',
  },
  {
    name: 'Commusoft',
    href: '/pricing/commusoft',
    clock: 'Timesheets in the mobile app',
    edits: 'Not documented',
    gps: 'Not documented for time entries; geofencing updates job status',
    payroll: 'Not documented',
    seats: 'No prices published',
  },
]

const cols: { key: keyof Omit<Tool, 'name' | 'href'>; label: string }[] = [
  { key: 'clock', label: 'Clock in, job time and plan' },
  { key: 'edits', label: 'Edits and approval' },
  { key: 'gps', label: 'GPS on time entries' },
  { key: 'payroll', label: 'Payroll and export' },
  { key: 'seats', label: 'Timesheet-only users' },
]

const faqs = [
  {
    question: 'What is contractor time tracking software?',
    answer:
      'It records when field staff start and end their day, take breaks and work on each job, then turns those entries into timesheets for payroll and job costing. In field service tools it usually lives in the technician app, next to the schedule and the job card, rather than in a separate time clock.',
  },
  {
    question: 'Which field service app has a cheaper user type for staff who only log time?',
    answer:
      'Fergus is the only tool we checked with a priced timesheet-only seat: timesheet users from $26 a month, who log hours and breaks in the Fergus Go app and can view job cards but cannot upload photos or files. GorillaDesk prices per route and makes crew users free, ServiceM8 gives unlimited users on paid plans, and Kickserv includes 5, 10 or 20 users in each plan.',
  },
  {
    question: 'Do field service apps record GPS location when technicians clock in?',
    answer:
      'Several do. FieldPulse geo-tags every clock-in and clock-out made in its mobile app, Housecall Pro shows clock-in and clock-out locations on the time card, Jobber’s GPS waypoints pin where a team member clocks in, and ServiceM8’s automated tracking uses GPS to suggest clock-off times. Each needs location access turned on in the app.',
  },
  {
    question: 'Can I run payroll from field service timesheets?',
    answer:
      'Some tools run payroll themselves: ServiceTitan includes configurable payroll in Core, and Housecall Pro sells a Payroll add-on with a Sync Hours to Payroll button, at a price it does not publish. Others pass hours to payroll or accounting software: Jobber lists a Gusto integration from Connect, and FieldPulse syncs timesheets one way to QuickBooks.',
  },
  {
    question: 'What is the difference between shift time and job time?',
    answer:
      'Shift time is the hours worked in a day, used for payroll. Job time is the time spent on each job, used for billing and job costing. ServiceM8 separates Clock On and Off from Check In and Out, FieldPulse can split a general timesheet from a job tracking timesheet, and Housecall Pro keeps time on jobs separate from total clocked-in time.',
  },
  {
    question: 'Do these tools have a timesheet approval step?',
    answer:
      'None of the vendor pages we read describes a formal approve or reject workflow. Housecall Pro, FieldPulse, ServiceM8 and GorillaDesk let managers or permitted users review and edit entries before payroll. If you need sign-off, ask for it in a demo.',
  },
]

const sources = [
  { name: 'Fergus US pricing (Essentials, timesheets, timesheet users from $26)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
  { name: 'Fergus help: timesheet user', url: 'https://help.fergus.com/en/articles/11387079-timesheet-user', checked: '2026-11-25' },
  { name: 'Jobber pricing (bands, time and expense tracking from Connect; Gusto from Connect and location-based time tracking on Grow read 2026-11-03)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: GPS waypoint tracking (select plans)', url: 'https://help.getjobber.com/en/articles/gps-waypoint-tracking/', checked: '2026-11-19' },
  { name: 'Jobber help: Manage Team (extra seats)', url: 'https://help.getjobber.com/en/articles/manage-teamhow-to-add-manage-and-deactivate-team-members/', checked: '2026-11-03' },
  { name: 'Housecall Pro help: time tracking overview (updated July 9, 2026)', url: 'https://help.housecallpro.com/en/articles/2795146-time-tracking-overview', checked: '2026-11-26' },
  { name: 'Housecall Pro help: how to run payroll using time tracking (updated August 6, 2026)', url: 'https://help.housecallpro.com/en/articles/8594391-how-to-run-payroll-using-time-tracking', checked: '2026-11-26' },
  { name: 'Housecall Pro pricing (plans, users, MAX extra users, Payroll add-on)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'ServiceM8 help: automated time tracking', url: 'https://support.servicem8.com/help-center/app/more-on-the-app/how-to-use-automated-time-tracking', checked: '2026-11-26' },
  { name: 'ServiceM8 help: editing timesheets (shift time and job time)', url: 'https://support.servicem8.com/questions/general/edit-timesheets.md', checked: '2026-11-26' },
  { name: 'ServiceM8 pricing (plans, unlimited users on paid plans)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'Tradify pricing (timesheets on Pro, per-user prices)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'GorillaDesk help: time clocking (updated May 18, 2025)', url: 'https://intercom.help/gorilladesk/en/articles/8869964-track-employees-time-in-and-out-with-time-clocking', checked: '2026-11-26' },
  { name: 'GorillaDesk pricing (per route, free users)', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-25' },
  { name: 'Kickserv pricing (time tracking on Start, GPS check-ins on Run)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv help: mobile app for technicians (Clock In)', url: 'https://help.kickserv.com/article/65-the-mobile-app-for-technicians', checked: '2026-11-24' },
  { name: 'FieldPulse help: employee timesheets', url: 'https://help.fieldpulse.com/using-fieldpulse/work/employee-timesheets.md', checked: '2026-11-26' },
  { name: 'FieldPulse help: QuickBooks Online (timesheets one way, opt-in)', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-online/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Desktop (timesheets push one way)', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-desktop/overview.md', checked: '2026-11-24' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX; payroll in Core)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-24' },
  { name: 'ServiceTitan help: Field Mobile App offline capabilities (time tracking)', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-24' },
  { name: 'Commusoft mobile workforce management (timesheets, geofencing)', url: 'https://www.commusoft.com/en-us/features/mobile-workforce-management-software/', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ContractorTimeTrackingSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/contractor-time-tracking-software"
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
            Contractor time tracking software: <span className="text-orange-400">timesheets in field service apps</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Ten field service tools checked against their own help centers and pricing pages in November
            2026: how techs clock in, what managers can edit, where GPS is recorded, how hours reach
            payroll, and what a timesheet-only user costs.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Most field service tools include a time clock, but on different plans: <strong>Fergus</strong>{' '}
            from Essentials, <strong>Jobber</strong> from Connect ($99 a month billed annually),{' '}
            <strong>Tradify</strong> on Pro, <strong>GorillaDesk</strong> on Pro and <strong>Kickserv</strong>{' '}
            from Start. <strong>FieldPulse</strong>, <strong>Housecall Pro</strong> and Jobber record GPS at
            clock-in, and <strong>ServiceM8</strong> uses GPS to suggest clock-off times. Only Fergus sells a
            cheaper timesheet-only user, from $26 a month. <strong>ServiceTitan</strong> includes payroll in
            Core, and Housecall Pro sells Payroll as an add-on without a published price.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-to-check">What to check in a field service timesheet app</h2>
          <ul>
            <li><strong>Shift time and job time</strong>: hours worked for payroll versus time on each job for billing and job costing. Some tools track both separately.</li>
            <li><strong>Edits and approval</strong>: who can change an entry, and whether there is a sign-off step before payroll.</li>
            <li><strong>GPS on entries</strong>: whether a clock-in records where the person was.</li>
            <li><strong>Payroll</strong>: built-in payroll, a payroll integration, an accounting sync or a plain export.</li>
            <li><strong>Seat cost</strong>: whether staff who only log hours pay a full user price.</li>
          </ul>
          <p>
            This guide covers time entries only. For live technician maps, dispatch and on-my-way texts, see
            our <Link href="/guides/field-service-scheduling-software" className={A}>field service scheduling software</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Time tracking compared by vendor and plan</h2>
          <p className={SUB}>
            Documented features and published prices only, not a hands-on test. Prices are per month as each
            vendor lists them; Tradify prints no currency code. Sources and check dates are at the end of this page.
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
                    <th scope="row" className="p-3 font-semibold text-slate-900 dark:text-white">
                      <Link href={t.href} className="hover:text-orange-600">{t.name}</Link>
                    </th>
                    {cols.map((c) => <td key={c.key} className="p-3">{t[c.key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3.5 lg:hidden">
            {tools.map((t) => (
              <article key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">
                  <Link href={t.href} className="hover:text-orange-600">{t.name}</Link>
                </h3>
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
          <h2 id="clock-in">Clock in and out, and job timers</h2>
          <p>
            <strong>ServiceM8</strong> keeps two clocks: staff Clock On and Off for their shift, for payroll,
            and Check In and Out of each job for billable time. Its automated time tracking uses GPS location,
            the time of day and scheduled jobs, and suggests Clock Off times to roll back to if someone forgets.
            Location has to be set to Always in the app. See <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link>.
          </p>
          <p>
            <strong>Housecall Pro</strong> says employees can only clock in and out in its mobile app. A
            separate setting lets everyone on a job track travel time and time on the job, and that time does
            not count toward total clocked-in time. <strong>FieldPulse</strong> works the same way with a
            general timesheet for the day (start, end, unpaid breaks and lunch) and an optional job tracking
            timesheet for time on a specific job or task.
          </p>
          <p>
            <strong>Jobber</strong> lists time and expense tracking from Connect, $99 a month billed annually
            for one user, and automatic location-based time tracking on Grow, $149. <strong>GorillaDesk</strong>&rsquo;s
            Time Clocking, on Pro, runs a timer that keeps going if you close the browser, or takes manual start
            and end times; its help article describes the desktop app and does not mention mobile.{' '}
            <strong>Kickserv</strong> lists time tracking on Start and a Clock In button in its technician app.
            <strong> Tradify</strong> lists timesheets on Pro, and <strong>Commusoft</strong> lists timesheets in
            its mobile app.
          </p>

          <h2 id="approval">Timesheet edits and approval</h2>
          <p>
            None of the vendor pages we read describes a formal approve or reject step. What they document is
            who can edit. Housecall Pro managers can view time cards and clock-in locations and edit times.
            FieldPulse admins and managers review hours in Team Timesheets and can modify entries. ServiceM8
            admins edit shift times in the Team Timesheet report, and job time from the job card.
            GorillaDesk uses an Edit Time permission: users can change only their own time for the current week,
            and only admins or users with both report access and edit permission can change older entries. If
            your payroll process needs sign-off, ask each vendor to show it in a demo.
          </p>

          <h2 id="gps">GPS stamps on time entries</h2>
          <p>
            FieldPulse geo-tags every clock-in and clock-out a team member makes for themselves in the mobile
            app. Housecall Pro shows clock-in and clock-out locations in the time card window when location is
            turned on in both the app and the phone. Jobber&rsquo;s GPS waypoints pin where a team member clocks
            in or completes a visit; its help center says &ldquo;select plans&rdquo;, while its pricing page lists
            GPS tracking from Connect. Kickserv lists GPS check-ins on Run, $119 a month for 10 users, without
            saying whether they attach to time entries. GorillaDesk&rsquo;s time clocking article does not
            mention location.
          </p>

          <h2 id="payroll">Payroll export and integration</h2>
          <ul>
            <li><strong>Payroll built in</strong>: ServiceTitan lists configurable payroll and commission tracking in Core. Its prices are quote only and based on users. See <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link>.</li>
            <li><strong>Payroll add-on</strong>: Housecall Pro lists Payroll as an add-on without a price. Its help center describes a Sync Hours to Payroll button on Payroll Advanced and Advanced Plus. See <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.</li>
            <li><strong>Payroll integration</strong>: Jobber lists a Gusto integration from Connect, alongside QuickBooks Online and Xero sync. See <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.</li>
            <li><strong>Accounting sync</strong>: FieldPulse sends timesheets one way to QuickBooks Online (opt-in, and each entry needs a job) and pushes them to QuickBooks Desktop. ServiceM8&rsquo;s help center links an article on sending clock on and off times to Xero, MYOB or QuickBooks as timesheets.</li>
            <li><strong>Report or export</strong>: FieldPulse has an Export button on its weekly and monthly totals. GorillaDesk shows each user&rsquo;s hourly rate in its Time Clocking report.</li>
          </ul>

          <h2 id="seats">Timesheet-only users and what they cost</h2>
          <p>
            <strong>Fergus</strong> is the only tool here that sells a cheaper seat for people who only log
            time. A timesheet user, from $26 a month, tracks hours and breaks in the Fergus Go app and can view
            job cards, but cannot upload photos or files. Fergus does not publish a per-user amount for full
            users, so ask for a quote for your mix. See <Link href="/pricing/fergus" className={A}>Fergus pricing</Link>{' '}
            and our <Link href="/compare/fergus-alternatives" className={A}>Fergus alternatives</Link> comparison.
          </p>
          <p>
            Other tools avoid the question by how they price. <strong>GorillaDesk</strong> charges per route and
            makes admin, manager, sales and crew users free. <strong>ServiceM8</strong> charges by jobs a month
            with unlimited users on paid plans. <strong>Kickserv</strong> includes 5, 10 or 20 users in each
            plan. <strong>Jobber</strong> sells team-size bands and $29 a month for each extra user, and{' '}
            <strong>Tradify</strong> charges per user, with no cheaper user type documented for either.
          </p>
          <p>
            Fergus lists timesheet users &ldquo;from $26 a month&rdquo; but does not say whether that is per
            timesheet user, so ask for a quote for your crew size. Pure arithmetic on published prices: five
            users on Tradify Pro cost 5 &times; $51 = $255 a month. On Jobber, Connect for five users is $149 a
            month billed annually.
          </p>

          <h2 id="not-covered">Tools we could not document</h2>
          <p>
            We could not confirm time tracking details for <strong>Workiz</strong> or{' '}
            <strong>Service Fusion</strong> from vendor pages we can read, so they are not in the table. Ask
            either for a demo of clock-in, editing and payroll export. See{' '}
            <Link href="/pricing/workiz" className={A}>Workiz pricing</Link> and{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <h2 id="choose">How to choose</h2>
          <ul>
            <li><strong>Many staff who only clock hours</strong>: Fergus timesheet users from $26 a month, or GorillaDesk with free crew users.</li>
            <li><strong>Proof of where a tech clocked in</strong>: FieldPulse, Housecall Pro or Jobber.</li>
            <li><strong>Separate payroll hours from billable job time</strong>: ServiceM8, FieldPulse or Housecall Pro.</li>
            <li><strong>Payroll inside the same tool</strong>: ServiceTitan Core, or Housecall Pro&rsquo;s Payroll add-on.</li>
          </ul>
          <p>
            Compare full plan prices in the <Link href="/pricing" className={A}>field service software pricing</Link>{' '}
            guide, and read <Link href="/how-we-review" className={A}>how we review</Link> for our method.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            If time tracking drives the choice, decide first whether you need GPS proof at clock-in, payroll in
            the same tool, or cheap seats for staff who only log hours. FieldPulse, Housecall Pro and Jobber
            document GPS at clock-in; ServiceTitan and Housecall Pro run payroll; Fergus sells timesheet users
            from $26 a month. No tool we checked documents a formal approval step, so test that in a demo.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/guides/field-service-scheduling-software" className="text-orange-600 hover:text-orange-800">Field service scheduling software →</Link>
            <Link href="/compare/fergus-alternatives" className="text-orange-600 hover:text-orange-800">Fergus alternatives →</Link>
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
