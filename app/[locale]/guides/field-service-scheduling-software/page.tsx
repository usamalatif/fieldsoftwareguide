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
 * /guides/field-service-scheduling-software: targets "field service scheduling software",
 * "field service scheduling and dispatch software" and "service dispatch software".
 *
 * GSC (2026-08-16 to 2026-11-15, site level, no page on this topic yet): free field service
 * scheduling software 48 impressions; field service scheduling software free 26; service dispatch
 * software pricing 42. HVAC-specific dispatch stays on /guides/hvac-dispatch-software and routing
 * detail on /guides/route-optimization-software; free tools on /free.
 *
 * Sources: each vendor's own pricing pages, feature pages and help centers (dates in `sources`).
 * Jobber and Housecall Pro marketing sites are not refetched; their facts reuse the site's verified
 * pages plus help.housecallpro.com articles read 2026-11-24. "Plan not stated" is used where the
 * vendor names no plan. Nothing tested hands-on.
 */

const PATH = '/guides/field-service-scheduling-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Field Service Scheduling Software (2026): 10 Tools Compared'
const DESCRIPTION =
  'Compare field service scheduling and dispatch software by plan: drag-and-drop boards, online booking, recurring jobs, on-my-way texts and technician GPS.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/field-service-scheduling-software',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Field service scheduling software', href: PATH },
]

type Tool = {
  name: string
  price: string
  board: string
  booking: string
  recurring: string
  notify: string
  location: string
}

const tools: Tool[] = [
  {
    name: 'ServiceM8',
    price: 'Free $0 (1 user, 30 jobs a month); Starter $29 (50 jobs) with unlimited users',
    board: 'Schedule in the app or online; dispatch map with staff proximity and availability',
    booking: 'Clients get a price, pick a time and book, on every plan',
    recurring: 'Jobs that re-create and schedule themselves, on every plan',
    notify: 'Automatic on-my-way SMS with an ETA, client arrival tracking and reminders, on every plan',
    location: 'Live staff locations and ETAs, on every plan',
  },
  {
    name: 'Jobber',
    price: 'Core $29 (1 user) billed annually; Connect $99',
    board: 'Drag-and-drop schedule; Find a Time suggestions on Grow; crew scheduling on Plus',
    booking: 'Online booking and request forms on every plan',
    recurring: 'Recurring jobs with repeating visits (plan not stated)',
    notify: 'Automated client reminders from Connect',
    location: 'GPS tracking listed from Connect; waypoints where a visit is clocked in or completed',
  },
  {
    name: 'Housecall Pro',
    price: 'Basic $59 (1 user) billed annually; Essentials $149 (up to 5 users)',
    board: 'Drag and drop to reschedule or reassign, with color-coded job statuses, on every plan',
    booking: 'Online booking from Basic, from Google or your website',
    recurring: 'Recurring jobs; several appointments in one multi-day job (plans not stated)',
    notify: 'Text and email when a job is scheduled; text when the tech taps On my way',
    location: 'Phone-based employee GPS from Essentials; vehicle GPS $20 per vehicle a month',
  },
  {
    name: 'ServiceTitan',
    price: 'Quote only (Core, Demand AI, Field AI, MAX)',
    board: 'Dispatch board with drag and drop; capacity planning by arrival window (needs configuration)',
    booking: 'Call booking in every package; Scheduling Pro for 24/7 online and SMS booking',
    recurring: 'Recurring service events scheduled up to 12 months ahead by default',
    notify: 'Text or email when the first technician is dispatched; tracking link optional',
    location: 'Technician locations on the dispatch map; Fleet Pro for vehicles',
  },
  {
    name: 'Workiz',
    price: 'Quote only (Standard, Pro, Ultimate); 7-day trial',
    board: 'Drag-and-drop calendar on every plan; Genius Scheduling (AI) on Pro and Ultimate',
    booking: 'Online booking on every plan',
    recurring: 'Recurring jobs on every plan; multi-day jobs on Ultimate',
    notify: 'On My Way texts with live location and ETA (plan not stated)',
    location: 'Team location tracking on every plan',
  },
  {
    name: 'FieldPulse',
    price: 'Quote only, seat-based',
    board: 'Drag-and-drop dispatch on a visual calendar, organized by team, service type or priority',
    booking: 'Embedded booking portal that adds jobs to the schedule',
    recurring: 'Recurring jobs keep a rolling 12 months of visits; multi-day jobs',
    notify: 'Confirmation messages when an appointment is scheduled',
    location: 'Real-time technician locations on a map',
  },
  {
    name: 'FieldEdge',
    price: 'Quote only (Select, Premier, Elite)',
    board: 'Dispatching on Select; Advanced Dispatching on Premier and Elite; boards by team, specialty or area',
    booking: 'Customer portal takes service requests (Elite; call for pricing below)',
    recurring: 'Basic agreements on Select; advanced service agreements on Premier and Elite',
    notify: 'Automated ETA notifications by text, call or email (plan not stated)',
    location: 'Real-time fleet updates; vehicle GPS through the FleetSharp partner',
  },
  {
    name: 'Service Fusion',
    price: 'Starter $220 billed annually, unlimited users',
    board: 'Drag-and-drop dispatch grid with an unscheduled pool; batch assign is an add-on',
    booking: 'Not confirmed; customer web portal on Pro',
    recurring: 'Repeating jobs (plan not stated)',
    notify: 'Text message alerts from Starter',
    location: 'GPS map; GPS fleet tracking is an add-on',
  },
  {
    name: 'Kickserv',
    price: 'Start $60 for 5 users; Run $119 for 10 users',
    board: 'Schedule by date and time or leave jobs unassigned; dispatch mapping on Run and Scale',
    booking: 'Embeddable contact form (no self-booking stated)',
    recurring: 'Repeat a job by date or day of week; several work events on one job',
    notify: 'Automated email and text reminders',
    location: 'GPS check-ins on Run and Scale',
  },
  {
    name: 'Commusoft',
    price: 'Quote only; 12-month licenses',
    board: 'Drag-and-drop scheduling that suggests techs by skills, availability and prior job location',
    booking: 'Not stated',
    recurring: 'Planned maintenance jobs generated automatically when due',
    notify: 'Automated reminders and confirmation links',
    location: 'Real-time vehicle locations (Fleet+)',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'price', label: 'Price' },
  { key: 'board', label: 'Schedule and dispatch board' },
  { key: 'booking', label: 'Online booking' },
  { key: 'recurring', label: 'Recurring and multi-day jobs' },
  { key: 'notify', label: 'Customer notifications' },
  { key: 'location', label: 'Technician location' },
]

const faqs = [
  {
    question: 'What is field service scheduling software?',
    answer:
      'It is the calendar and dispatch board of a field service management tool. It assigns jobs to technicians, moves them when plans change, books customers online, repeats recurring visits, texts customers when a tech is on the way, and shows where your team is.',
  },
  {
    question: 'Is there free field service scheduling software?',
    answer:
      'ServiceM8 has a $0 plan for one user and 30 jobs a month that includes scheduling, online booking, recurring jobs, on-my-way texts and auto routing. Most other tools start with a paid plan or a free trial. Our free field service software guide covers the other options.',
  },
  {
    question: 'Which scheduling software is cheapest for a small team?',
    answer:
      'Among published prices, ServiceM8 starts at $0 for one user and $29 for unlimited users and 50 jobs a month, Jobber at $29 a month billed annually for one user, Kickserv at $60 a month for five users, and Housecall Pro at $59 billed annually for one user. ServiceTitan, Workiz, FieldPulse, FieldEdge and Commusoft are quote only.',
  },
  {
    question: 'Which tools let customers book online?',
    answer:
      'ServiceM8, Jobber, Housecall Pro and Workiz list online booking on every plan, and FieldPulse has an embedded booking portal. ServiceTitan sells 24/7 online booking as Scheduling Pro. FieldEdge’s portal takes service requests rather than live bookings, and Kickserv offers a contact form.',
  },
  {
    question: 'Which tools send on-my-way texts?',
    answer:
      'ServiceM8 sends an automatic on-my-way SMS with an ETA on every plan. Housecall Pro sends a text when the tech taps On my way, Workiz sends On My Way texts with live location, ServiceTitan notifies the customer when the first technician is dispatched, and FieldEdge advertises automated ETA notifications by text, call or email.',
  },
  {
    question: 'What is capacity planning in scheduling software?',
    answer:
      'Capacity planning limits how many jobs can be booked into each arrival window based on available technician hours. ServiceTitan documents it as Adjust Capacity Planning, which needs account configuration. None of the other tools here document a comparable feature.',
  },
]

const sources = [
  { name: 'ServiceM8 pricing (features on every plan)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'Jobber pricing (plans and features)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: day view of the schedule', url: 'https://help.getjobber.com/en/articles/day-view-of-the-schedule-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: create a recurring job', url: 'https://help.getjobber.com/hc/en-us/articles/115009542848-Create-a-Recurring-Job', checked: '2026-11-19' },
  { name: 'Jobber help: GPS waypoint tracking', url: 'https://help.getjobber.com/en/articles/gps-waypoint-tracking/', checked: '2026-11-19' },
  { name: 'Housecall Pro pricing (plans and features)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro dispatching software', url: 'https://www.housecallpro.com/features/dispatching-software/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: customer notifications overview', url: 'https://help.housecallpro.com/en/articles/357613-customer-notifications-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: multi-day job appointments', url: 'https://help.housecallpro.com/en/articles/6930497-multi-day-job-appointments-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: vehicle GPS tracking ($20 per vehicle a month)', url: 'https://help.housecallpro.com/en/articles/6060351-vehicle-gps-tracking-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: create a recurring job', url: 'https://help.housecallpro.com/en/articles/2789168-create-a-recurring-job', checked: '2026-11-23' },
  { name: 'ServiceTitan pricing (packages)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-24' },
  { name: 'ServiceTitan dispatch software', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-19' },
  { name: 'ServiceTitan help: adjustable capacity planning', url: 'https://help.servicetitan.com/how-to/adjustable-capacity-planning-workflow', checked: '2026-11-19' },
  { name: 'ServiceTitan Scheduling Pro', url: 'https://www.servicetitan.com/features/pro/scheduling', checked: '2026-11-19' },
  { name: 'ServiceTitan help: recurring service events', url: 'https://help.servicetitan.com/docs/manage-recurring-service-events', checked: '2026-11-19' },
  { name: 'ServiceTitan help: text and email dispatch notifications', url: 'https://help.servicetitan.com/docs/enable-text-and-email-dispatch-notifications', checked: '2026-11-24' },
  { name: 'Workiz pricing plans', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'Workiz job scheduling', url: 'https://www.workiz.com/features/job-scheduling/', checked: '2026-11-19' },
  { name: 'Workiz for locksmiths (On My Way texts)', url: 'https://www.workiz.com/industries/locksmiths/', checked: '2026-11-21' },
  { name: 'FieldPulse service scheduling software', url: 'https://www.fieldpulse.com/features/service-scheduling-software', checked: '2026-11-24' },
  { name: 'FieldPulse scheduling and dispatching', url: 'https://www.fieldpulse.com/features/scheduling-and-dispatching', checked: '2026-11-19' },
  { name: 'FieldPulse help: recurring jobs', url: 'https://help.fieldpulse.com/jobs/jobs-tasks/recurring-jobs.md', checked: '2026-11-24' },
  { name: 'FieldEdge pricing', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'FieldEdge scheduling and dispatching', url: 'https://fieldedge.com/field-service-software/scheduling-and-dispatching/', checked: '2026-11-24' },
  { name: 'FieldEdge Consumer Management Portal', url: 'https://fieldedge.com/consumer-management-portal/', checked: '2026-11-24' },
  { name: 'Service Fusion pricing', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion scheduling software', url: 'https://www.servicefusion.com/field-service-scheduling-software', checked: '2026-11-24' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv help: jobs', url: 'https://help.kickserv.com/article/32-jobs', checked: '2026-11-24' },
  { name: 'Commusoft job scheduling software', url: 'https://www.commusoft.com/en-us/features/job-scheduling-software/', checked: '2026-11-24' },
  { name: 'Commusoft plans', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function FieldServiceSchedulingSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/field-service-scheduling-software"
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
            Field service scheduling software: <span className="text-orange-400">10 tools compared by plan</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Which plan includes the dispatch board, online booking, recurring jobs, on-my-way texts and
            technician GPS, from each vendor&rsquo;s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Every field service tool here has a drag-and-drop schedule. The differences are which plan
            adds online booking, recurring and multi-day jobs, on-my-way texts and technician GPS.{' '}
            <strong>ServiceM8</strong> puts all of those on its $0 plan for one user and 30 jobs a month.{' '}
            <strong>Jobber</strong> starts at $29 a month billed annually with online booking, and adds
            reminders and GPS on Connect. <strong>Housecall Pro</strong> includes scheduling, dispatch and
            online booking from $59, with phone GPS from Essentials. <strong>ServiceTitan</strong> is the
            only one that documents capacity planning, and it is quote only, like Workiz, FieldPulse,
            FieldEdge and Commusoft.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-it-does">What scheduling software should handle</h2>
          <ul>
            <li><strong>A dispatch board</strong> where you drag jobs between technicians and days, and see who is free.</li>
            <li><strong>Online booking</strong> so customers can book from your website or Google without a phone call.</li>
            <li><strong>Recurring and multi-day jobs</strong> for maintenance visits, cleaning routes and installs that run over several days.</li>
            <li><strong>Customer notifications</strong>: confirmations, reminders and an on-my-way text with an ETA.</li>
            <li><strong>Technician location</strong>, from the phone app or a vehicle tracker, so you can send the closest tech.</li>
          </ul>
          <p>
            Route order is covered in our{' '}
            <Link href="/guides/route-optimization-software" className={A}>route optimization software</Link> guide,
            and HVAC-specific dispatch in{' '}
            <Link href="/guides/hvac-dispatch-software" className={A}>HVAC dispatch software</Link>.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Field service scheduling software compared</h2>
          <p className={SUB}>
            Documented features and published prices only, not a hands-on test or a score. Prices are USD
            standard rates per month. Sources and check dates are at the end of this page.
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
          <h2 id="tools">The tools, from a scheduling point of view</h2>

          <h3>ServiceM8</h3>
          <p>
            ServiceM8 prices by jobs a month rather than users. Its pricing page lists scheduling in the app or
            online, a dispatch map that shows staff proximity and availability, recurring jobs, online booking
            where clients get a price and pick a time, automatic on-my-way texts with an ETA, client arrival
            tracking, reminders and live staff GPS on every plan, including the $0 plan for one user and 30
            jobs. It can also import busy times from staff members&rsquo; personal calendars. Its pricing page
            does not describe multi-day jobs.
          </p>

          <h3>Jobber</h3>
          <p>
            Jobber&rsquo;s schedule lets you drag visits between team members, and online booking and request
            forms are on every plan from Core ($29 a month billed annually for one user). Connect ($99) adds
            automated client reminders, routing and GPS tracking, Grow ($149) adds Find a Time scheduling
            suggestions, and Plus adds crew scheduling. Recurring jobs repeat visits on a set schedule. See{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> for team sizes.
          </p>

          <h3>Housecall Pro</h3>
          <p>
            Scheduling, dispatch and online booking are on every plan from Basic ($59 a month billed annually).
            Its help center says customers get a text and email when a job is scheduled and a text when the
            tech taps On my way; texts do not go to landlines. A job can hold several appointments for
            multi-day work, but on mobile only one on-my-way text can be sent for such a job. Phone-based
            employee GPS starts on Essentials, and vehicle GPS through Force costs $20 per vehicle a month with
            no contract, according to its help center. See{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>ServiceTitan</h3>
          <p>
            ServiceTitan&rsquo;s dispatch board supports drag and drop and shows technician locations. It is
            the only tool here that documents capacity planning, which books against technician hours per
            arrival window and needs account configuration. Call booking is in every package; 24/7 online and
            text booking is Scheduling Pro, and Dispatch Pro recommends assignments by skill, location and
            performance. Customers can be notified when the first technician is dispatched, and a tracking
            link needs a message token and GPS set up on each device. See{' '}
            <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link>.
          </p>

          <h3>Workiz</h3>
          <p>
            Workiz has a drag-and-drop calendar, online booking, recurring jobs and team location tracking on
            every plan. Genius Scheduling, its AI scheduling feature, is on Pro and Ultimate, and multi-day jobs
            are on Ultimate only. Its industry pages describe On My Way texts with the tech&rsquo;s live
            location and ETA. See <Link href="/pricing/workiz" className={A}>Workiz pricing</Link>.
          </p>

          <h3>FieldPulse</h3>
          <p>
            FieldPulse schedules on a visual calendar with drag-and-drop dispatch, an embedded booking portal,
            multi-day jobs, confirmation messages and a live technician map. Its help center says a recurring
            job with no end date keeps the next 12 months of visits generated on a rolling basis. FieldPulse
            does not say which plan includes each feature. See{' '}
            <Link href="/pricing/fieldpulse" className={A}>FieldPulse pricing</Link>.
          </p>

          <h3>FieldEdge</h3>
          <p>
            FieldEdge includes dispatching on Select and Advanced Dispatching on Premier and Elite, with
            boards by team, specialty or service area and caller details filled in when the phone rings. It
            advertises automated ETA notifications by text, call or email. Its customer portal, included on
            Elite, lets customers submit service requests rather than book a time. See{' '}
            <Link href="/pricing/fieldedge" className={A}>FieldEdge pricing</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            Service Fusion has a drag-and-drop dispatch grid with an unscheduled pool and text message alerts
            on every plan, with unlimited users from $220 a month billed annually. Batch assign and schedule is
            an add-on, GPS fleet tracking is an add-on, and online self-booking is not confirmed on its pages.
            See <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <h3>Kickserv</h3>
          <p>
            Kickserv&rsquo;s help center describes scheduling a job by date and time, leaving it unassigned for
            later, repeating it by date or day of week, and adding several work events to one job. Automated
            email and text reminders are on every plan, while dispatch mapping and GPS check-ins start on Run
            ($119 a month for 10 users). For intake it offers an embeddable contact form.
          </p>

          <h3>Commusoft</h3>
          <p>
            Commusoft describes drag-and-drop scheduling that suggests a technician by skills, certifications,
            availability and prior job location, automated reminders with confirmation links, and planned
            maintenance jobs generated when due. Its plans page lists real-time vehicle locations. Prices are
            not published.
          </p>

          <h2 id="choose">How to choose</h2>
          <ul>
            <li><strong>Solo or very small</strong>: ServiceM8&rsquo;s free and $29 plans, or Jobber Core, cover booking and scheduling for the least money.</li>
            <li><strong>Small crews that want reminders and GPS</strong>: Jobber Connect or Housecall Pro Essentials.</li>
            <li><strong>Growing teams with office staff</strong>: Service Fusion&rsquo;s unlimited users, or Kickserv&rsquo;s 10 and 20 user plans.</li>
            <li><strong>High call volume and arrival windows</strong>: ServiceTitan, the only one with documented capacity planning.</li>
            <li><strong>Maintenance-heavy trades</strong>: check which plan holds recurring service agreements; see our{' '}
              <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link> guide.</li>
          </ul>
          <p>
            Compare prices in the <Link href="/pricing" className={A}>field service software pricing</Link> guide,
            and see what you can run for nothing in <Link href="/free" className={A}>free field service software</Link>.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            For the most scheduling features at the lowest price, ServiceM8 includes online booking, recurring
            jobs, on-my-way texts and GPS on its $0 plan. Jobber and Housecall Pro are the published-price
            choices for small crews, and ServiceTitan is the one to look at if you need capacity planning by
            arrival window.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/guides/route-optimization-software" className="text-orange-600 hover:text-orange-800">Route optimization software →</Link>
            <Link href="/guides/hvac-dispatch-software" className="text-orange-600 hover:text-orange-800">HVAC dispatch software →</Link>
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
