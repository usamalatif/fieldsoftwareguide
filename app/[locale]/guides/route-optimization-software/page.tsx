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
 * /guides/route-optimization-software: targets "route optimization software for field service",
 * "field service route planning software" and "technician route optimization". No GSC data for this
 * topic yet.
 *
 * Classification: "Documented" = the vendor's help center or pricing page says the software
 * calculates the stop order; "Marketing claim" = feature page says routes are optimized but no
 * mechanism is documented; "Manual" = you set the order on a map. Vendor facts come from pricing
 * pages, feature pages and help centers (dates in `sources`). Jobber and Housecall Pro marketing
 * sites are not refetched; their facts reuse the site's verified pages plus help.housecallpro.com
 * read 2026-11-24. Nothing tested hands-on.
 */

const PATH = '/guides/route-optimization-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Route Optimization Software for Field Service (2026)'
const DESCRIPTION =
  'Which field service tools really optimize technician routes, on which plan, and how vehicle GPS is sold. Ten tools checked against their own help centers.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/route-optimization-software',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Route optimization software', href: PATH },
]

type Tool = {
  name: string
  routing: string
  plan: string
  techGps: string
  vehicleGps: string
}

const tools: Tool[] = [
  {
    name: 'ServiceM8',
    routing: 'Documented: Auto Routing optimizes one staff member’s route and schedule for the day',
    plan: 'Every plan, including Free ($0, 1 user, 30 jobs a month)',
    techGps: 'Live staff locations and ETAs on every plan',
    vehicleGps: 'Not mentioned',
  },
  {
    name: 'Jobber',
    routing: 'Documented: reorders anytime visits by driving distance; admins run it on the web app',
    plan: 'Connect ($99, 1 user, billed annually), Grow and Plus',
    techGps: 'GPS tracking from Connect; waypoints at clock-in and visit completion',
    vehicleGps: 'Tracking devices from fleet partners',
  },
  {
    name: 'Housecall Pro',
    routing: 'Documented: Optimize by Drive Time reorders one tech’s day using live traffic',
    plan: 'MAX only ($299 for up to 8 users, billed annually); routes to group jobs from Essentials',
    techGps: 'Phone-based employee GPS from Essentials',
    vehicleGps: 'Add-on through Force: $20 per vehicle a month, no contract',
  },
  {
    name: 'ServiceTitan',
    routing: 'Documented: single-technician route optimization; Dispatch Pro recommends techs and can cap drive time',
    plan: 'Quote only; Dispatch Pro is a Pro product',
    techGps: 'Technician locations on the dispatch map',
    vehicleGps: 'Fleet Pro add-on',
  },
  {
    name: 'Workiz',
    routing: 'Marketing claim: “Automatically generate the best routes”; no help article we could read',
    plan: 'Not stated',
    techGps: 'Team location tracking on every plan',
    vehicleGps: 'Fleet tracking on every plan, with fleet data through Linxup',
  },
  {
    name: 'FieldEdge',
    routing: 'Marketing claim: “Optimize routes with map-based scheduling”',
    plan: 'Not stated',
    techGps: 'Real-time fleet updates on the schedule',
    vehicleGps: 'FleetSharp partner',
  },
  {
    name: 'FieldPulse',
    routing: 'Manual: you click jobs in order on the map and it rewrites start times',
    plan: 'Not stated',
    techGps: 'Real-time technician map; dispatch by who is closest',
    vehicleGps: 'Fleet Tracking add-on, updated every minute',
  },
  {
    name: 'Commusoft',
    routing: 'Marketing claim: suggests appointment times by travel distance and availability',
    plan: 'Not stated',
    techGps: 'Not stated',
    vehicleGps: 'Fleet+ with hardwired trackers; price not stated',
  },
  {
    name: 'Service Fusion',
    routing: 'Not documented: its scheduling page names “routing” without describing optimization',
    plan: 'Not applicable',
    techGps: 'GPS tracking map on the schedule',
    vehicleGps: 'GPS Fleet Tracking add-on on every plan; price not published',
  },
  {
    name: 'Kickserv',
    routing: 'None listed',
    plan: 'Not applicable',
    techGps: 'GPS check-ins and dispatch mapping on Run ($119, 10 users) and Scale',
    vehicleGps: 'Not listed',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'routing', label: 'Route optimization' },
  { key: 'plan', label: 'Plan' },
  { key: 'techGps', label: 'Technician location' },
  { key: 'vehicleGps', label: 'Vehicle GPS' },
]

const faqs = [
  {
    question: 'What is route optimization in field service software?',
    answer:
      'It is a feature that calculates the order of a technician’s stops to cut driving time or distance, then updates the schedule. In the tools we checked, it optimizes one technician’s day at a time; it does not move jobs between technicians or days.',
  },
  {
    question: 'Which field service software has route optimization on the cheapest plan?',
    answer:
      'ServiceM8 lists Auto Routing on every plan, including its $0 plan for one user and 30 jobs a month. Jobber documents route optimization from Connect, $99 a month billed annually for one user. Housecall Pro’s Optimize by Drive Time is on MAX only.',
  },
  {
    question: 'Does route optimization move jobs to another technician?',
    answer:
      'Not in the documented features we found. Housecall Pro says Optimize by Drive Time does not reschedule jobs to other days or change the assigned tech. ServiceTitan sells technician recommendations separately as Dispatch Pro, which suggests assignments by skill, location and performance.',
  },
  {
    question: 'What is the difference between GPS tracking and vehicle GPS?',
    answer:
      'Most tools track technicians through the mobile app on their phone. Vehicle GPS uses a device plugged into or wired into the truck, and is usually a separate add-on or partner product, such as Housecall Pro’s Force tracking at $20 per vehicle a month, ServiceTitan Fleet Pro, FieldPulse Fleet Tracking or FieldEdge’s FleetSharp partner.',
  },
  {
    question: 'Does FieldPulse optimize routes automatically?',
    answer:
      'Its marketing page says it finds the most efficient route, but its help center describes a manual flow: you click jobs on the map in the order you want, set a start time and default durations, and FieldPulse rewrites the start and end times.',
  },
]

const sources = [
  { name: 'ServiceM8 pricing (Auto Routing and GPS on every plan)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber pricing (routing and GPS on Connect; fleet partners)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-19' },
  { name: 'Jobber help: GPS waypoint tracking', url: 'https://help.getjobber.com/en/articles/gps-waypoint-tracking/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: Optimize by Drive Time (MAX)', url: 'https://help.housecallpro.com/en/articles/14093813-optimize-by-drive-time', checked: '2026-11-24' },
  { name: 'Housecall Pro help: vehicle GPS tracking (Force, $20 per vehicle a month)', url: 'https://help.housecallpro.com/en/articles/6060351-vehicle-gps-tracking-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro pricing (routes from Essentials, employee GPS)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'ServiceTitan dispatch software (single-technician route optimization)', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-19' },
  { name: 'ServiceTitan Dispatch Pro', url: 'https://www.servicetitan.com/features/pro/dispatch', checked: '2026-11-19' },
  { name: 'ServiceTitan Fleet Pro', url: 'https://www.servicetitan.com/features/pro/fleet', checked: '2026-11-19' },
  { name: 'Workiz route planning', url: 'https://www.workiz.com/features/route-planning/', checked: '2026-11-24' },
  { name: 'Workiz for HVAC (fleet tracking through Linxup)', url: 'https://www.workiz.com/industries/hvac/', checked: '2026-11-19' },
  { name: 'FieldEdge field service software (route optimization claim)', url: 'https://fieldedge.com/field-service-software/', checked: '2026-11-24' },
  { name: 'FieldEdge partners (FleetSharp)', url: 'https://fieldedge.com/partners/', checked: '2026-11-24' },
  { name: 'FieldPulse help: route optimization (manual map ordering)', url: 'https://help.fieldpulse.com/scheduling-dispatch/dispatch/route-optimization', checked: '2026-11-24' },
  { name: 'FieldPulse service scheduling software (marketing claim)', url: 'https://www.fieldpulse.com/features/service-scheduling-software', checked: '2026-11-24' },
  { name: 'FieldPulse fleet management', url: 'https://www.fieldpulse.com/features/fleet-management', checked: '2026-11-19' },
  { name: 'Commusoft job scheduling software', url: 'https://www.commusoft.com/en-us/features/job-scheduling-software/', checked: '2026-11-24' },
  { name: 'Commusoft Fleet+ fleet management', url: 'https://www.commusoft.com/en-us/features/fleet-management-software/', checked: '2026-11-24' },
  { name: 'Service Fusion scheduling software', url: 'https://www.servicefusion.com/field-service-scheduling-software', checked: '2026-11-24' },
  { name: 'Service Fusion pricing (GPS Fleet Tracking add-on)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function RouteOptimizationSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/route-optimization-software"
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
            Route optimization software: <span className="text-orange-400">which tools really reorder your stops</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Ten field service tools checked against their own help centers and pricing pages in November
            2026: who documents automatic routing, on which plan, and how vehicle GPS is sold.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Four tools document route optimization that reorders a technician&rsquo;s day for them:{' '}
            <strong>ServiceM8</strong> on every plan including its $0 plan, <strong>Jobber</strong> from
            Connect ($99 a month billed annually), <strong>Housecall Pro</strong> on MAX only, and{' '}
            <strong>ServiceTitan</strong> for one technician at a time. Workiz, FieldEdge and Commusoft
            advertise optimized routes without documenting how it works, FieldPulse&rsquo;s help center shows a
            manual map ordering, and Service Fusion and Kickserv do not offer it. Vehicle GPS is almost always
            a separate add-on or partner product.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="how-we-checked">How we sorted the tools</h2>
          <ul>
            <li><strong>Documented</strong>: the help center or pricing page says the software calculates the stop order.</li>
            <li><strong>Marketing claim</strong>: a feature page promises optimized routes, but we found no description of how it works.</li>
            <li><strong>Manual</strong>: you set the order yourself on a map and the tool fills in times.</li>
          </ul>
          <p>
            None of the documented features plan a whole team at once. They reorder one technician&rsquo;s day;
            choosing which tech gets which job is a separate step, covered in our{' '}
            <Link href="/guides/field-service-scheduling-software" className={A}>field service scheduling software</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Route optimization and GPS compared</h2>
          <p className={SUB}>
            Documented features and published prices only, not a hands-on test. Prices are USD per month.
            Sources and check dates are at the end of this page.
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
          <h2 id="documented">The four tools with documented route optimization</h2>

          <h3>ServiceM8</h3>
          <p>
            ServiceM8&rsquo;s pricing page lists Auto Routing, which optimizes a staff member&rsquo;s route and
            schedule for the day, on every plan, including the free plan for one user and 30 jobs a month. The
            same plans include live staff locations and ETAs and a dispatch view of staff proximity. It prices
            by jobs a month, so check the job allowance rather than the user count.
          </p>

          <h3>Jobber</h3>
          <p>
            Jobber&rsquo;s help center lists route optimization on Connect, Grow and Plus. It reorders
            &ldquo;anytime&rdquo; visits by driving distance, runs on the web app rather than the mobile app, and
            only admins can run it. Connect costs $99 a month billed annually for one user. For live vehicle
            tracking, Jobber points to devices from fleet partners. See{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>Housecall Pro</h3>
          <p>
            Housecall Pro&rsquo;s Optimize by Drive Time, which its help center says is only available on MAX,
            reorders a technician&rsquo;s scheduled jobs for the day to minimize driving time using job
            locations and live traffic. It does not move jobs to other days or other techs, skips jobs without
            map coordinates, and keeps the times of jobs it cannot fit. Essentials adds routes to group jobs and
            phone-based GPS. Vehicle GPS, powered by Force, costs $20 per vehicle a month with no contract and
            adds a live location link to the on-my-way text. See{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>ServiceTitan</h3>
          <p>
            ServiceTitan&rsquo;s dispatch page lists a map with route information and single-technician route
            optimization. Dispatch Pro, a Pro product, recommends assignments by technician skill, location and
            performance and can cap drive time between jobs, and Fleet Pro adds real-time vehicle tracking.
            Prices are not published. See <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link>.
          </p>

          <h2 id="claims">Tools that advertise routing without documenting it</h2>
          <p>
            <strong>Workiz</strong>&rsquo;s route planning page says it automatically generates the best routes
            from real-time data and technician availability, but names no plan, and its help center was not
            readable to us. <strong>FieldEdge</strong> says it optimizes routes with map-based scheduling and
            sells vehicle GPS through its FleetSharp partner. <strong>Commusoft</strong> suggests appointment
            times by travel distance and sells Fleet+, which uses trackers hardwired into vehicles. Ask each for
            a demo that reorders a real day of your jobs before you rely on the claim.
          </p>

          <h2 id="manual">Manual or no routing</h2>
          <p>
            <strong>FieldPulse</strong> markets finding the most efficient route, but its help center describes
            clicking jobs on the map in the order you want and letting FieldPulse rewrite the start times. Its
            Fleet Tracking add-on updates vehicle locations every minute. <strong>Service Fusion</strong> names
            routing on its scheduling page and sells GPS fleet tracking as an add-on, but does not describe route
            optimization. <strong>Kickserv</strong> lists dispatch mapping and GPS check-ins on Run and Scale and
            no routing.
          </p>

          <h2 id="choose">How to choose</h2>
          <ul>
            <li><strong>Lowest cost</strong>: ServiceM8 includes Auto Routing on every plan, and Jobber from Connect.</li>
            <li><strong>Traffic-aware routing</strong>: Housecall Pro&rsquo;s Optimize by Drive Time uses live traffic, on MAX.</li>
            <li><strong>Large dispatch teams</strong>: ServiceTitan pairs route optimization with Dispatch Pro recommendations and capacity rules.</li>
            <li><strong>Vehicle tracking</strong>: budget it separately; only Housecall Pro publishes a price ($20 per vehicle a month).</li>
          </ul>
          <p>
            For HVAC-specific routing and GPS by plan, see{' '}
            <Link href="/guides/hvac-dispatch-software" className={A}>HVAC dispatch software</Link>; for full
            plan prices, the <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            If route optimization is the reason you are buying, choose a tool that documents it: ServiceM8 on
            every plan, Jobber from Connect, Housecall Pro on MAX, or ServiceTitan. Treat other routing claims as
            something to test in a demo, and price vehicle GPS separately.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/guides/field-service-scheduling-software" className="text-orange-600 hover:text-orange-800">Field service scheduling software →</Link>
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
