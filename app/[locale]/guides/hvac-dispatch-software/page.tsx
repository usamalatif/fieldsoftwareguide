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
 * /guides/hvac-dispatch-software: targets "hvac dispatch software", "best hvac dispatch software",
 * "best hvac scheduling software" and "hvac scheduling and dispatch software". Dispatch and
 * scheduling share one page because the SERP treats them as one intent.
 *
 * GSC (2026-08-16 to 2026-11-15, site level): best hvac dispatch software 155 impressions at 43.0;
 * best hvac scheduling software 238 at 52.7; hvac scheduling software 165 at 73.6; hvac field
 * service dispatch software 116 at 65.1; best hvac scheduling and dispatch software 2025 113 at 35.0.
 *
 * Scope vs /by-industry/hvac: that page picks an HVAC platform overall (price, team size,
 * QuickBooks). This page is only about dispatch and scheduling: which plan includes each dispatch
 * feature, capacity, emergencies, maintenance visits, GPS types and certification matching.
 *
 * Sources: each vendor's own pricing page, feature pages and help center, and EPA's Section 608
 * pages, checked 2026-11-19 (ServiceTitan pricing and offline facts reuse the 2026-11-17 checks).
 * Only Housecall Pro, Jobber and Service Fusion publish prices. No third-party estimates, no
 * ratings, nothing tested hands-on.
 * 2026-11-20: added Housecall Pro's separate HVAC package (its /industries/hvac-software/ page,
 * modified 2026-10-28, rechecked 2026-11-20): Basic $79, Essentials $229 for 1 user / $299 for 5,
 * MAX $649 for 8 (FAQ says $399 for one user; card shows $349). Billing basis not labeled.
 */

const PATH = '/guides/hvac-dispatch-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Best HVAC Dispatch & Scheduling Software (2026): 7 Tools'
const DESCRIPTION =
  'Compare 7 HVAC dispatch and scheduling tools on which plan includes route optimization, GPS, online booking and maintenance visits, with published prices.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/hvac-dispatch-software',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'HVAC dispatch software', href: PATH },
]

type Tool = {
  name: string
  price: string
  dispatch: string
  routing: string
  gps: string
  booking: string
  maintenance: string
}

const tools: Tool[] = [
  {
    name: 'Housecall Pro',
    price: 'Published: Basic $59 (1 user), Essentials $149 (5 users), Max $299 (8 users) per month billed annually; $79, $189, $329 monthly. Its HVAC page shows a separate HVAC package at higher prices',
    dispatch: 'Scheduling and dispatch on every plan; drag and drop to reschedule or reassign; color-coded job statuses',
    routing: 'Routes (group and sequence jobs) from Essentials; one-click route optimization with live traffic on Max',
    gps: 'Phone-based employee GPS from Essentials; vehicle GPS and dashcams are an add-on (price not published)',
    booking: 'Online booking from Basic; CSR AI call and chat answering is an add-on',
    maintenance: 'Recurring Service Plans included on Max; listed as a paid add-on on some other plans (price not published). The HVAC package lists membership plans on Essentials',
  },
  {
    name: 'Jobber',
    price: 'Published: Core $29 (1 user); Connect, Grow and Plus by team band up to 15 users, e.g. Grow $299 for 10 users, billed annually',
    dispatch: 'Drag-and-drop schedule to reassign visits between team members; crew scheduling on Plus',
    routing: 'Route optimization on Connect, Grow and Plus; admins run it on the web app',
    gps: 'GPS waypoints on select plans; live vehicle tracking through fleet partner devices',
    booking: 'Online booking from Core; AI Receptionist add-on $29/month (included on Plus)',
    maintenance: 'Recurring jobs with repeating visits; automatic payments on recurring jobs on select plans',
  },
  {
    name: 'ServiceTitan',
    price: 'Quote only, per technician; Starter, Essentials and The Works all say “Request Pricing”',
    dispatch: 'Drag-and-drop dispatch board; Adjust Capacity Planning books against technician hours per arrival window',
    routing: 'Map with route information and single-technician route optimization; Dispatch Pro add-on assigns techs by skill, location and performance',
    gps: 'Technician locations on the dispatch map; Fleet Pro add-on for real-time vehicle tracking',
    booking: 'Call booking in every package; Scheduling Pro add-on for 24/7 online and SMS booking that follows capacity rules',
    maintenance: 'Recurring service events scheduled automatically, up to 12 months ahead by default; customizable memberships',
  },
  {
    name: 'Workiz',
    price: 'Quote only: Standard, Pro and Ultimate all say “Request pricing”; annual plans save “$400+”',
    dispatch: 'Drag-and-drop calendar on every plan; Genius Scheduling (AI) on Pro and Ultimate',
    routing: 'Route optimization offered; plan not stated on the pricing page',
    gps: 'Fleet tracking and team location tracking on every plan (fleet data through Linxup)',
    booking: 'Online booking with optional checkout on every plan',
    maintenance: 'Recurring jobs on every plan; service plans on Ultimate only',
  },
  {
    name: 'FieldPulse',
    price: 'Quote only, seat-based; no free trial',
    dispatch: 'Drag-and-drop dispatch; organize the schedule by team, service type or job priority',
    routing: 'Dispatch by who is closest using team locations',
    gps: 'Team location view on the scheduling page; Fleet Tracking (vehicle GPS updated every minute) is an add-on',
    booking: 'Booking portal adds jobs straight to the schedule; Operator AI add-on answers after-hours calls and books jobs',
    maintenance: 'Maintenance agreements run on the same dispatch board; visits go to the first open slot or the same day each cycle',
  },
  {
    name: 'FieldEdge',
    price: 'Quote only: Select, Premier and Elite all say “Request Pricing”',
    dispatch: 'Dispatching on Select; Advanced Dispatching on Premier and Elite; dispatch boards by team, specialty or service area',
    routing: 'Assigns techs by skill set, location and workload (plan not stated)',
    gps: 'Real-time fleet updates for trucks and technicians (plan not stated)',
    booking: 'Call booking and scheduling on every plan',
    maintenance: 'Basic Agreements on Select; Advanced Service Agreements on Premier and Elite',
  },
  {
    name: 'Service Fusion',
    price: 'Published: Starter $259, Plus $399, Pro $649 per month, or $220, $339, $552 billed annually; unlimited users',
    dispatch: 'Scheduling and dispatching on every plan',
    routing: 'Not stated on the pricing page',
    gps: 'GPS Fleet Tracking is an add-on on every plan (price not published)',
    booking: 'ServiceCall.ai add-on listed on the pricing page',
    maintenance: 'Progress billing and recurring invoicing: add-on on Starter and Plus, included on Pro',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'price', label: 'Pricing' },
  { key: 'dispatch', label: 'Dispatch and scheduling' },
  { key: 'routing', label: 'Routing and assignment' },
  { key: 'gps', label: 'GPS' },
  { key: 'booking', label: 'Booking and after-hours' },
  { key: 'maintenance', label: 'Maintenance visits' },
]

const gating: { feature: string; where: string }[] = [
  { feature: 'One-click route optimization', where: 'Housecall Pro Max; Jobber Connect and up' },
  { feature: 'Phone GPS for technicians', where: 'Housecall Pro Essentials and up; Jobber waypoints on select plans; Workiz every plan' },
  { feature: 'Vehicle GPS', where: 'Add-on at Housecall Pro, ServiceTitan (Fleet Pro), FieldPulse and Service Fusion; fleet partner devices at Jobber' },
  { feature: 'Automated or AI technician assignment', where: 'ServiceTitan Dispatch Pro add-on; Workiz Genius Scheduling on Pro and Ultimate' },
  { feature: '24/7 online booking', where: 'Included at Housecall Pro, Jobber and Workiz; ServiceTitan through Scheduling Pro' },
  { feature: 'Maintenance agreements', where: 'Housecall Pro Max (or a paid add-on; Essentials in its HVAC package); Workiz Ultimate; FieldEdge Advanced on Premier and Elite' },
]

const buyers: { who: string; pick: string; why: string }[] = [
  {
    who: 'Owner-operator or 2 to 5 techs',
    pick: 'Jobber or Housecall Pro',
    why: 'Published prices and 14-day trials. Jobber Connect adds route optimization at $149/month for 5 users billed annually; Housecall Pro Essentials adds routes and phone GPS at $149 for 5 users.',
  },
  {
    who: '6 to 15 techs selling maintenance agreements',
    pick: 'Housecall Pro Max, Jobber Grow, or a quote from Workiz or FieldPulse',
    why: 'Housecall Pro Max includes route optimization and Recurring Service Plans for 8 users at $299/month plus $35 per extra user. Jobber Grow is $299 for 10 users. Workiz service plans need Ultimate.',
  },
  {
    who: 'Many techs on one plan price',
    pick: 'Service Fusion',
    why: 'Every plan includes unlimited users and scheduling and dispatching, from $220/month billed annually; GPS fleet tracking is an add-on.',
  },
  {
    who: 'Call center, multiple dispatchers or tight capacity in peak season',
    pick: 'ServiceTitan or FieldEdge',
    why: 'ServiceTitan documents capacity planning by arrival window and automated assignment through Dispatch Pro; FieldEdge offers Advanced Dispatching and dispatch boards by specialty. Both are quote only.',
  },
]

const faqs = [
  {
    question: 'What is the best HVAC dispatch software?',
    answer:
      'It depends on team size and how you buy. For small shops, Jobber and Housecall Pro publish prices and include drag-and-drop scheduling; route optimization starts on Jobber Connect and Housecall Pro Max. For larger shops with dedicated dispatchers, ServiceTitan documents capacity planning and an automated assignment add-on (Dispatch Pro), and FieldEdge offers Advanced Dispatching on its Premier and Elite plans. Both are quote only.',
  },
  {
    question: 'How much does HVAC dispatch software cost?',
    answer:
      'Among the tools here, only three publish prices. Jobber starts at $29/month for one user, Housecall Pro at $59/month for one user and $149 for five, and Service Fusion at $220/month with unlimited users, all billed annually. Housecall Pro’s HVAC page also shows a higher-priced HVAC package. ServiceTitan, Workiz, FieldPulse and FieldEdge price by quote.',
  },
  {
    question: 'Which HVAC software has route optimization?',
    answer:
      'Housecall Pro includes one-click route optimization on Max ($299/month billed annually for 8 users). Jobber’s help center lists route optimization on Connect, Grow and Plus. ServiceTitan can optimize a technician’s route for the day, and Workiz offers route optimization without naming the plan.',
  },
  {
    question: 'Can dispatch software match technicians by EPA 608 certification?',
    answer:
      'EPA requires technicians who maintain, service, repair or dispose of equipment that could release refrigerants to be Section 608 certified, with separate certification types by equipment. Dispatch tools match by skill rather than by an EPA field: ServiceTitan Dispatch Pro uses technician skill, and FieldEdge assigns by skill set and organizes boards by specialty. Ask in the demo whether you can tag techs by certification type and filter the board by it.',
  },
  {
    question: 'How do I handle emergency no-heat or no-cool calls?',
    answer:
      'You need three things: after-hours intake (online booking, or an AI answering add-on such as Housecall Pro CSR AI, Jobber Receptionist or FieldPulse Operator AI), a live view of where qualified techs are, and a board that lets you drop a job into today’s schedule and reassign others. Check which plan includes GPS, because it often sits on a higher plan or an add-on.',
  },
  {
    question: 'Do I need separate HVAC scheduling software and dispatch software?',
    answer:
      'No. Every tool on this list does both in one schedule or dispatch board. The difference is in add-ons and plans: capacity planning, automated assignment, route optimization and vehicle GPS are where vendors split features by tier.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, routes, GPS, route optimization, add-ons, trial)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro HVAC software (separate HVAC package and FAQ prices)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-11-20' },
  { name: 'Housecall Pro dispatching software (drag and drop, statuses)', url: 'https://www.housecallpro.com/features/dispatching-software/', checked: '2026-11-19' },
  { name: 'Housecall Pro LLM info page (Service Plans as a paid add-on on some plans)', url: 'https://www.housecallpro.com/llm-info/', checked: '2026-11-19' },
  { name: 'Jobber pricing (plans, team bands, add-ons, fleet partners)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-19' },
  { name: 'Jobber help: route optimization (Connect, Grow and Plus; admins)', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: GPS waypoint tracking (select plans)', url: 'https://help.getjobber.com/en/articles/gps-waypoint-tracking/', checked: '2026-11-19' },
  { name: 'Jobber help: day view of the schedule (drag and drop)', url: 'https://help.getjobber.com/en/articles/day-view-of-the-schedule-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: create a recurring job', url: 'https://help.getjobber.com/hc/en-us/articles/115009542848-Create-a-Recurring-Job', checked: '2026-11-19' },
  { name: 'ServiceTitan pricing (packages, per-technician, request pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-19' },
  { name: 'ServiceTitan dispatch software (dispatch board, Map, capacity planning, Dispatch Pro)', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-19' },
  { name: 'ServiceTitan Dispatch Pro', url: 'https://www.servicetitan.com/features/pro/dispatch', checked: '2026-11-19' },
  { name: 'ServiceTitan Scheduling Pro', url: 'https://www.servicetitan.com/features/pro/scheduling', checked: '2026-11-19' },
  { name: 'ServiceTitan Fleet Pro', url: 'https://www.servicetitan.com/features/pro/fleet', checked: '2026-11-19' },
  { name: 'ServiceTitan help: adjustable capacity planning', url: 'https://help.servicetitan.com/how-to/adjustable-capacity-planning-workflow', checked: '2026-11-19' },
  { name: 'ServiceTitan help: recurring service events', url: 'https://help.servicetitan.com/docs/manage-recurring-service-events', checked: '2026-11-19' },
  { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-19' },
  { name: 'Workiz job scheduling (drag and drop, emergency calls)', url: 'https://www.workiz.com/features/job-scheduling/', checked: '2026-11-19' },
  { name: 'Workiz route planning', url: 'https://www.workiz.com/features/route-planning/', checked: '2026-11-19' },
  { name: 'Workiz HVAC software (Linxup fleet tracking)', url: 'https://www.workiz.com/industries/hvac/', checked: '2026-11-19' },
  { name: 'FieldPulse pricing (seat-based quote, add-ons, no trial)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-19' },
  { name: 'FieldPulse scheduling and dispatching', url: 'https://www.fieldpulse.com/features/scheduling-and-dispatching', checked: '2026-11-19' },
  { name: 'FieldPulse fleet management', url: 'https://www.fieldpulse.com/features/fleet-management', checked: '2026-11-19' },
  { name: 'FieldPulse maintenance agreements', url: 'https://www.fieldpulse.com/features/maintenance-agreements', checked: '2026-11-19' },
  { name: 'FieldPulse booking portal', url: 'https://www.fieldpulse.com/features/booking-portal', checked: '2026-11-19' },
  { name: 'FieldPulse Operator AI', url: 'https://www.fieldpulse.com/features/operator-ai', checked: '2026-11-19' },
  { name: 'FieldEdge pricing (plans and feature table)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-19' },
  { name: 'FieldEdge scheduling and dispatching', url: 'https://fieldedge.com/field-service-software/scheduling-and-dispatching/', checked: '2026-11-19' },
  { name: 'Service Fusion pricing (plans, unlimited users, add-ons, month-to-month)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-19' },
  { name: 'EPA Section 608 technician certification', url: 'https://www.epa.gov/section608/section-608-technician-certification', checked: '2026-11-19' },
  { name: 'EPA Section 608 technician certification requirements (types)', url: 'https://www.epa.gov/section608/section-608-technician-certification-requirements', checked: '2026-11-19' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HvacDispatchSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/hvac-dispatch-software"
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
            HVAC dispatch and scheduling software: <span className="text-orange-400">7 tools compared by plan</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Which plan includes route optimization, GPS, online booking and maintenance visits, from
            each vendor’s own pricing pages and help centers, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Every HVAC dispatch tool here has a drag-and-drop schedule. What separates them is which
            plan or add-on unlocks the rest. For a small shop, <strong>Jobber</strong> (from $29/month
            for one user) and <strong>Housecall Pro</strong> (from $59/month) publish prices; route
            optimization starts on Jobber Connect and Housecall Pro Max. <strong>Service Fusion</strong>{' '}
            publishes plans with unlimited users from $220/month. For larger shops with dedicated
            dispatchers, <strong>ServiceTitan</strong> documents capacity planning and automated
            assignment (Dispatch Pro add-on), and <strong>FieldEdge</strong> offers Advanced
            Dispatching on its higher plans; both price by quote, as do Workiz and FieldPulse.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-hvac-dispatch-needs">What HVAC dispatch software has to handle</h2>
          <p>
            General scheduling tools put a job on a calendar. HVAC dispatch has a few extra jobs to do,
            and they are where tools differ:
          </p>
          <ul>
            <li>
              <strong>Seasonal peaks.</strong> The first heat wave or cold snap floods the phones.
              Capacity planning, booking against the technician hours you actually have in each
              arrival window, keeps you from promising slots you cannot fill.
            </li>
            <li>
              <strong>Emergency no-heat and no-cool calls.</strong> You need to see who is closest and
              qualified, drop the call into today’s schedule and move other visits, often after hours.
            </li>
            <li>
              <strong>Maintenance-agreement visits.</strong> Spring and fall tune-ups should generate
              themselves from the agreement and land in the slower weeks, not be booked by hand.
            </li>
            <li>
              <strong>Certified technicians.</strong> EPA requires technicians who maintain, service,
              repair or dispose of equipment that could release refrigerants to be Section 608
              certified, by equipment type (Type I, II, III or Universal). Dispatchers need to know who
              can take which job.
            </li>
            <li>
              <strong>Two kinds of GPS.</strong> Phone-based technician location and vehicle GPS are
              often separate products, and either can sit on a higher plan or an add-on.
            </li>
          </ul>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>HVAC dispatch software compared</h2>
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
                {tools.map((t) => (
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
          <h2 id="plan-gating">Where dispatch features hide: plans and add-ons</h2>
          <p>
            Most comparison lists say a tool “has GPS” or “has route optimization” without saying
            which plan you need. This is where HVAC budgets go wrong, so here is where each feature
            sits according to the vendors’ own pages:
          </p>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Feature</th>
                <th scope="col" className="p-3.5">Where it sits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {gating.map((g) => (
                <tr key={g.feature} className="align-top">
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{g.feature}</th>
                  <td className="p-3.5">{g.where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-12">
          <h2 id="tools">The 7 tools, from a dispatcher’s point of view</h2>

          <h3>Housecall Pro</h3>
          <p>
            Scheduling, dispatch and online booking are on every plan, and its dispatching page
            describes dragging jobs to reschedule or reassign and color-coded job statuses. Essentials
            ($149/month billed annually, 5 users) adds Routes to group and sequence the day’s jobs and
            phone-based employee GPS with no hardware. Max ($299/month, 8 users, then $35 per extra
            user) adds one-click route optimization using real drive time and live traffic, plus
            Recurring Service Plans for maintenance agreements; Housecall Pro also lists Service Plans
            as a paid add-on on some plans without publishing the price. Vehicle GPS with dashcams and
            CSR AI call answering are add-ons. Full plan detail is in our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> guide.
          </p>
          <p>
            One catch for HVAC buyers: Housecall Pro’s HVAC software page shows a separate HVAC
            package priced above the plans above. It lists Basic at $79/month, Essentials at $229
            for one user or $299 with 5 users, and MAX at $649 with 8 users; for MAX with one user,
            its FAQ says $399 while its plan card shows $349. That package lists membership plans,
            equipment tracking and flat-rate pricing on Essentials, and the page does not say
            whether its prices are billed annually or monthly. Ask Housecall Pro which package your
            quote is based on, and get the included dispatch and maintenance features in writing.
          </p>

          <h3>Jobber</h3>
          <p>
            Jobber’s schedule lets you drag visits between team members, and online booking starts on
            Core ($29/month billed annually for one user). Its help center lists route optimization on
            Connect, Grow and Plus; admins run it on the web app, and it reorders anytime visits by
            driving distance. GPS waypoint tracking, available on select plans, pins where a team member
            clocks in or completes a visit, and live vehicle tracking comes through fleet partner
            devices. Crew scheduling is a Plus feature. Jobber prices by team band, so 10 users on
            Grow cost $299/month billed annually; see{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>ServiceTitan</h3>
          <p>
            ServiceTitan’s drag-and-drop dispatch board and Map are the core of its dispatch tools, and
            Adjust Capacity Planning books jobs against technician capacity in each arrival window (it
            needs account configuration). Dispatch Pro, a paid add-on, recommends assignments based on
            technician skill, location and performance and can cap drive time between jobs. Scheduling
            Pro adds 24/7 online and SMS booking that follows your capacity rules, and Fleet Pro adds
            real-time vehicle tracking. Recurring service events for maintenance visits are scheduled
            automatically up to 12 months ahead by default. ServiceTitan prices per technician by quote;
            see <Link href="/compare/housecall-pro-vs-servicetitan" className={A}>Housecall Pro vs ServiceTitan</Link>{' '}
            for contract and onboarding terms.
          </p>

          <h3>Workiz</h3>
          <p>
            Workiz puts a drag-and-drop calendar, fleet tracking, team location tracking, online booking
            and recurring jobs on every plan, and its scheduling page describes seeing which tech is
            nearby when an emergency call comes in. Genius Scheduling, its AI scheduling feature, is on
            Pro and Ultimate, and service plans are on Ultimate only. All three plans are quote only.
          </p>

          <h3>FieldPulse</h3>
          <p>
            FieldPulse offers drag-and-drop dispatch, lets you organize the schedule by team, service
            type or job priority, and shows team locations so you can send whoever is closest. Its
            maintenance agreements run on the same dispatch board, and each visit can go to the first
            open slot or the same day every cycle. Fleet Tracking (vehicle GPS updated every minute) and
            Operator AI, an after-hours AI dispatcher that can route urgent requests such as a broken
            AC faster, are add-ons. Pricing is a seat-based quote, and there is no free trial.
          </p>

          <h3>FieldEdge</h3>
          <p>
            FieldEdge includes call booking, scheduling and dispatching on all three plans, with
            Advanced Dispatching and Advanced Service Agreements on Premier and Elite. The plans include
            2, 4 and 6 mobile app licenses. Its scheduling page describes assigning techs by skill set,
            location and workload, organizing dispatch boards by team, specialty or service area, and
            real-time fleet updates, without naming the plan. FieldEdge does not publish what separates
            basic from advanced dispatching, so ask for a side-by-side in the demo.
          </p>

          <h3>Service Fusion</h3>
          <p>
            Service Fusion is the only tool here that publishes prices with unlimited users: Starter
            $259, Plus $399 and Pro $649 per month, or $220, $339 and $552 billed annually as one
            payment. Scheduling and dispatching are on every plan, plans are month to month, and GPS
            fleet tracking is an add-on with no published price.
          </p>

          <h2 id="certification">Matching technicians by EPA 608 certification</h2>
          <p>
            EPA says technicians who maintain, service, repair or dispose of equipment that could
            release ozone-depleting refrigerants must be certified, and that since January 1, 2018 this
            also applies to appliances with most substitute refrigerants, including HFCs. Certification
            is by equipment type: Type I for small appliances, Type II for high-pressure equipment,
            Type III for low-pressure equipment, or Universal. The credentials do not expire.
          </p>
          <p>
            None of these vendors documents a built-in EPA 608 field. What they document is skill-based
            assignment: ServiceTitan Dispatch Pro uses technician skill, and FieldEdge assigns by skill
            set and organizes boards by specialty. In a demo, ask whether you can tag each tech with a
            certification type and filter the board by it. If you also track refrigerant use for EPA
            leak repair records, see our guide to{' '}
            <Link href="/guides/refrigerant-tracking-software" className={A}>refrigerant tracking software</Link>.
          </p>

          <h2 id="which-to-choose">Which HVAC dispatch software fits your shop?</h2>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Your shop</th>
                <th scope="col" className="p-3.5">Start with</th>
                <th scope="col" className="p-3.5">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {buyers.map((b) => (
                <tr key={b.who} className="align-top">
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{b.who}</th>
                  <td className="p-3.5">{b.pick}</td>
                  <td className="p-3.5">{b.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-12">
          <h2 id="demo-checklist">What to test in a trial or demo</h2>
          <ol>
            <li>Book an emergency call into a full day and see how fast you can reassign two visits.</li>
            <li>Find the closest qualified tech on the map, and check which plan or add-on that map needs.</li>
            <li>Create a maintenance agreement and confirm the next 12 months of visits appear without manual booking.</li>
            <li>Run route optimization for a real day, and check who in your office is allowed to run it.</li>
            <li>Book a job online after hours and see where it lands on the board.</li>
            <li>Get the plan, add-ons and per-user cost in writing for your actual technician count.</li>
          </ol>
          <p>
            For choosing an HVAC platform overall, including QuickBooks and pricing by team size, see
            our <Link href="/by-industry/hvac" className={A}>HVAC field service management software</Link>{' '}
            guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on HVAC dispatch software">
            Start from your team size and how you want to buy. Jobber and Housecall Pro publish prices
            and cover small HVAC shops, with route optimization on Jobber Connect and Housecall Pro Max.
            Service Fusion publishes unlimited-user plans. ServiceTitan and FieldEdge suit shops with
            dedicated dispatchers that need capacity planning or advanced dispatching, by quote. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only
            prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/by-industry/hvac" className="text-orange-600 hover:text-orange-800">HVAC software guide →</Link>
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
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
