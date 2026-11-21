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
 * /compare/servicetitan-vs-jobber: head-to-head for "servicetitan vs jobber" (and the reversed
 * word order). No GSC impressions yet; built because both vendors already have verified data on
 * the site and the SERP is mostly directories and the two vendors' own comparison pages.
 *
 * Scope vs other pages: /compare ranks six tools; /pricing/jobber holds every Jobber price, add-on
 * and fee; /compare/housecall-pro-vs-servicetitan is the Housecall Pro decision. This page is the
 * Jobber vs ServiceTitan decision: team-size pricing and billing options against a quoted,
 * multi-year contract, plus dispatch, offline, reporting and buyer scenarios.
 *
 * Sources: Jobber pricing page (plans, team-size bands, billing options, trial, FAQ) and help
 * center, checked 2026-11-19. ServiceTitan pricing, help center, Terms of Use and Form 10-K,
 * checked 2026-11-17 for /compare/housecall-pro-vs-servicetitan. ServiceTitan publishes no prices,
 * so none are shown: no third-party estimates, no ratings, nothing tested hands-on.
 */

const PATH = '/compare/servicetitan-vs-jobber'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceTitan vs Jobber (2026): Pricing, Contracts & Fit'
const DESCRIPTION =
  'ServiceTitan vs Jobber: quote-only vs published team pricing, contract terms, dispatch, offline mobile use and reporting, from each vendor’s own documents.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/servicetitan-vs-jobber',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'ServiceTitan vs Jobber', href: PATH },
]

const quick: { label: string; st: string; jb: string }[] = [
  { label: 'Pricing model', st: 'Quote only; every package uses one “Get Pricing” button', jb: 'Published: Core $29, Connect $99, Grow $149 per month for 1 user, Plus $399 for 5 users, billed annually' },
  { label: 'Team-size pricing', st: 'Not published; Terms of Use allow a minimum subscription level', jb: 'Published bands for 1, 5, 10 and 15 users; 16+ users through sales; extra users $29/month' },
  { label: 'Billing and contract', st: '10-K: new customers mostly on annual or multi-year agreements, typically 12 to 36 months', jb: 'Three options: no commitment (cancel anytime), 1-year commitment billed monthly, or annual prepaid (non-refundable)' },
  { label: 'Free trial', st: 'No trial; demo only', jb: '14 days on the Grow plan, no credit card' },
  { label: 'Onboarding', st: 'Implementation consultant; onboarding and training fees generally invoiced separately (10-K)', jb: 'Dedicated onboarding and Premium Support included on Plus' },
  { label: 'Scheduling and dispatch', st: 'Dispatch Board, Optimize Technician Route and Adjust Capacity Planning; Dispatch Pro add-on for automated assignment', jb: 'Drag-and-drop schedule; route optimization listed on Connect, Grow and Plus in the help center' },
  { label: 'Online booking', st: 'Scheduling Pro add-on', jb: 'Online booking from Core' },
  { label: 'GPS', st: 'Technician locations on the dispatch map; live vehicle GPS with the Fleet Pro add-on', jb: 'GPS waypoints (on select plans) pin where team members clock in or complete visits; live tracking through fleet partner devices' },
  { label: 'Offline mobile', st: 'Most job work offline (status, time, signatures, notes, photos, estimates); purchase orders, financing, contracts, inventory availability and dynamic pricing need a connection', jb: 'Day’s schedule (view), timers, notes with photos, checklists and visit completion offline; no invoicing offline; Tap to Pay needs a connection' },
  { label: 'Reporting', st: 'Dashboards, scorecards and custom reports; custom reports depend on your package; advanced business owner analytics on MAX', jb: 'Built-in reporting from Core; Custom Report Builder on Plus only' },
  { label: 'Progress billing', st: 'Progress billing applications and project budgets for long-term projects', jb: 'Payment schedules and progress invoicing on all plans' },
  { label: 'QuickBooks', st: 'QuickBooks Online and Desktop', jb: 'QuickBooks Online (and Xero) from Connect; no Desktop' },
]

const teamCost: { users: string; core: string; connect: string; grow: string; plus: string }[] = [
  { users: '1 user', core: '$29', connect: '$99', grow: '$149', plus: 'Not offered' },
  { users: '5 users', core: 'Not available', connect: '$149', grow: '$229', plus: '$399' },
  { users: '10 users', core: 'Not available', connect: '$229', grow: '$299', plus: '$449' },
  { users: '15 users', core: 'Not available', connect: '$299', grow: '$399', plus: '$529' },
]

const scenarios: { who: string; pick: string; why: string }[] = [
  {
    who: 'Solo operator or crew of 2 to 5',
    pick: 'Jobber',
    why: 'Published prices from $29/month for one user, a 14-day trial and a no-commitment monthly option. ServiceTitan’s custom quote, typical 12 to 36 month terms and separate onboarding fees are built for a larger rollout.',
  },
  {
    who: '6 to 15 users who want to know the price before a sales call',
    pick: 'Jobber, then get a ServiceTitan quote to compare',
    why: 'Jobber publishes band prices up to 15 users: Grow is $299/month for 10 users and $399 for 15, billed annually. Ask ServiceTitan for a written quote for the same technicians before deciding.',
  },
  {
    who: 'Technicians often work without signal',
    pick: 'Depends on the task; check both',
    why: 'Both apps now work offline for core job tasks. ServiceTitan documents estimates and signatures offline; Jobber documents timers, notes, checklists and visit completion, but no invoicing or Tap to Pay offline.',
  },
  {
    who: 'Call center, capacity planning or several dispatchers',
    pick: 'ServiceTitan',
    why: 'Call booking is in every ServiceTitan package, and it documents capacity planning and technician scorecards. Dispatch Pro and Scheduling Pro add automation as paid add-ons.',
  },
  {
    who: 'QuickBooks Desktop user',
    pick: 'ServiceTitan',
    why: 'ServiceTitan documents QuickBooks Desktop and Online integrations. Jobber syncs with QuickBooks Online only, from Connect.',
  },
]

const faqs = [
  {
    question: 'Is Jobber cheaper than ServiceTitan?',
    answer:
      'Jobber is the only one of the two with published prices: $29/month for one user on Core, and $229 to $399/month for 5 to 15 users on Grow, billed annually. ServiceTitan prices by quote, and its 10-K says onboarding and training fees are generally invoiced separately. Compare written totals for the same number of users, add-ons, onboarding and contract length.',
  },
  {
    question: 'Does ServiceTitan or Jobber require a contract?',
    answer:
      'ServiceTitan’s Form 10-K says new customers primarily sign annual or multi-year agreements with terms typically from 12 to 36 months. Jobber offers no-commitment monthly billing that you can cancel anytime, a 1-year commitment billed monthly, or annual prepaid billing that is non-refundable once paid.',
  },
  {
    question: 'Does ServiceTitan have a free trial like Jobber?',
    answer:
      'No trial is offered on ServiceTitan’s pricing page; it offers demos. Jobber offers a 14-day free trial of the Grow plan with no credit card required.',
  },
  {
    question: 'Which works better offline, ServiceTitan or Jobber?',
    answer:
      'Both document offline work. ServiceTitan’s Field Mobile App handles job status, time tracking, signatures, notes, photos and estimates offline. Jobber’s app shows the day’s schedule, runs timers, saves notes with photos, fills checklists and completes visits offline, but does not create invoices offline and needs a connection for Tap to Pay.',
  },
  {
    question: 'When should a Jobber customer move to ServiceTitan?',
    answer:
      'Usually when the team needs call-center booking, capacity planning, package-level reporting or QuickBooks Desktop, and is ready for a quoted, typically multi-year agreement. Jobber publishes prices only up to 15 users; above that, both vendors price through sales, so get both quotes in writing.',
  },
  {
    question: 'Does Jobber or ServiceTitan support progress billing?',
    answer:
      'Both do. Jobber offers payment schedules and progress invoicing on all plans. ServiceTitan documents progress billing applications and project budgets for long-term projects.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, team-size bands, billing options, trial, add-ons, FAQ)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-19' },
  { name: 'Jobber help: use the Jobber app offline (updated November 17, 2026)', url: 'https://help.getjobber.com/en/articles/use-the-jobber-app-offline/', checked: '2026-11-19' },
  { name: 'Jobber help: Tap to Pay (needs an internet connection)', url: 'https://help.getjobber.com/en/articles/tap-to-pay/', checked: '2026-11-19' },
  { name: 'Jobber help: route optimization (plan availability)', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: GPS waypoint tracking (select plans)', url: 'https://help.getjobber.com/en/articles/gps-waypoint-tracking/', checked: '2026-11-19' },
  { name: 'Jobber scheduling software (drag-and-drop calendar)', url: 'https://www.getjobber.com/features/scheduling/', checked: '2026-11-19' },
  { name: 'Jobber help: Custom Report Builder (Plus plan)', url: 'https://help.getjobber.com/en/articles/create-a-custom-report-with-jobber-ai/', checked: '2026-11-19' },
  { name: 'Jobber help: payment schedules and progress invoicing (all plans)', url: 'https://help.getjobber.com/en/articles/progress-invoicing/', checked: '2026-11-19' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI and MAX packages; Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan dispatch software (Dispatch Pro add-on, capacity planning)', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-17' },
  { name: 'ServiceTitan help: dispatch and track technicians (Fleet Pro)', url: 'https://help.servicetitan.com/docs/dispatch-and-track-your-technicians', checked: '2026-11-17' },
  { name: 'ServiceTitan help: Scheduling Pro online booking', url: 'https://help.servicetitan.com/docs/set-up-your-online-scheduler-with-scheduling-pro-in-servicetitan-max', checked: '2026-11-17' },
  { name: 'ServiceTitan help: Field Mobile App offline capabilities', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-17' },
  { name: 'ServiceTitan help: reports and dashboards (custom reports by package)', url: 'https://help.servicetitan.com/docs/measure-performance-and-make-decisions', checked: '2026-11-17' },
  { name: 'ServiceTitan help: long-term projects (progress billing)', url: 'https://help.servicetitan.com/docs/long-term-projects', checked: '2026-11-17' },
  { name: 'ServiceTitan help: getting started and implementation', url: 'https://help.servicetitan.com/commercial/docs/getting-started-with-servicetitan-home', checked: '2026-11-17' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-17' },
  { name: 'ServiceTitan Form 10-K, fiscal year ended January 31, 2026 (SEC)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-17' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceTitanVsJobberPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/servicetitan-vs-jobber"
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
            ServiceTitan vs Jobber <span className="text-orange-400">(2026)</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Quote-only versus published team pricing, contracts, dispatch, offline use and reporting,
            from each vendor’s own pages and ServiceTitan’s annual report, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Jobber</strong> fits small and growing service teams that want to see the price
            first: plans start at $29/month for one user, published team bands run up to 15 users,
            and you can pay month to month with no commitment. <strong>ServiceTitan</strong> fits
            operations ready for a larger rollout: it prices by quote, typically signs
            new customers to 12 to 36 month agreements with separately invoiced onboarding, and
            documents call booking, capacity planning and QuickBooks Desktop support. Both apps
            handle core job work offline.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="at-a-glance">
          <h2 className={H2}>ServiceTitan vs Jobber at a glance</h2>
          <p className={SUB}>
            Documented capabilities only, not a hands-on test or a score. Prices are USD standard
            rates. Sources and check dates are at the end of this page.
          </p>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 md:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="w-[22%] p-3.5"> </th>
                  <th scope="col" className="p-3.5">ServiceTitan</th>
                  <th scope="col" className="p-3.5">Jobber</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {quick.map((r) => (
                  <tr key={r.label} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.label}</th>
                    <td className="p-3.5">{r.st}</td>
                    <td className="p-3.5">{r.jb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3.5 md:hidden">
            {quick.map((r) => (
              <article key={r.label} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[16px] font-bold text-slate-900 dark:text-white">{r.label}</h3>
                <dl className="mt-2 space-y-2 text-[14px] leading-[1.55]">
                  <div>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">ServiceTitan</dt>
                    <dd className="text-slate-700 dark:text-slate-300">{r.st}</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">Jobber</dt>
                    <dd className="text-slate-700 dark:text-slate-300">{r.jb}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: a custom quote vs published team bands</h2>
          <p>
            ServiceTitan publishes no prices. Its pricing page says “Our pricing is built to drive
            ROI for your individual business” and shows one “Get Pricing” button for four packages:
          </p>
          <ul>
            <li>
              <strong>Core:</strong> scheduling, dispatching, call booking, invoicing, pricebook,
              reporting, mobile estimates, configurable payroll, commission tracking and customizable
              memberships.
            </li>
            <li>
              <strong>Demand AI:</strong> Core plus demand automation: AI targeting and spend
              allocation, campaign automation, online scheduling, voice and SMS agents and smart
              dispatching.
            </li>
            <li>
              <strong>Field AI:</strong> Core plus field automations: AI sales coaching, equipment
              intelligence, AI estimates and presentations, multi-modal job assistance and AI job prep.
            </li>
            <li>
              <strong>MAX:</strong> all of the above plus office automation: AI payments collections,
              AP approvals and advanced business owner analytics.
            </li>
          </ul>
          <p>
            The page says all packages are available to in-home residential customers, while MAX
            pilots are launching for other business types. Pro products such as Dispatch Pro, Scheduling Pro and Fleet Pro are sold on top.
          </p>
          <p>
            Jobber publishes four plans and prices them by team size. Billed annually, a single user
            pays $29/month on Core, $99 on Connect or $149 on Grow; Plus starts at $399/month for five
            users. Core allows one extra seat at most, so a team needs Connect or higher. Here is what
            Jobber’s published bands cost per month on annual billing:
          </p>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Team</th>
                <th scope="col" className="p-3.5">Core</th>
                <th scope="col" className="p-3.5">Connect</th>
                <th scope="col" className="p-3.5">Grow</th>
                <th scope="col" className="p-3.5">Plus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {teamCost.map((r) => (
                <tr key={r.users}>
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.users}</th>
                  <td className="p-3.5">{r.core}</td>
                  <td className="p-3.5">{r.connect}</td>
                  <td className="p-3.5">{r.grow}</td>
                  <td className="p-3.5">{r.plus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-6">
          <p>
            Teams of 16 or more go through Jobber’s sales team, so above 15 users neither vendor has a
            public price. Our{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> guide covers the monthly
            rates, add-ons and payment fees.
          </p>
          <p>
            <strong>To compare fairly,</strong> ask ServiceTitan for a written quote that lists the
            rate and how it is counted, the package, each Pro add-on, the onboarding fee and the contract
            term. Put it next to the Jobber band for the same number of users plus the add-ons you
            would need, such as Jobber’s $99/month Marketing Suite, which is included on Plus.
          </p>

          <h2 id="contracts">Contracts, billing and trials</h2>
          <p>
            This is where the two differ most. ServiceTitan’s annual report says new customers
            primarily sign annual or multi-year agreements with terms typically from 12 to 36 months,
            while some Pro product and legacy customers are month to month. Fees for professional
            services such as onboarding and training are generally invoiced separately at the start of
            the contract, and its Terms of Use say fees are non-refundable unless agreed otherwise in
            writing. There is no free trial; you book a demo.
          </p>
          <p>
            Jobber gives you three billing options for the same plan. With no commitment you can cancel
            anytime and the subscription ends after the current billing period. A 1-year commitment
            billed monthly costs less, but billing continues until the 12 months end. Annual prepaid is
            the cheapest rate, billed upfront and non-refundable. All Jobber subscriptions renew
            automatically unless set to non-renew. The 14-day trial gives full access to the Grow plan
            without a credit card.
          </p>

          <h2 id="team-size">Which team size each one fits</h2>
          <p>
            ServiceTitan says its customers range “from family-owned businesses with a few employees to
            large enterprises with a national footprint,” and reports about 10,800 Active Customers
            (those with over $10,000 of annualized billings) as of January 31, 2026. Jobber publishes
            prices from one user to 15 users. Neither sets a hard limit, so the practical divide is how
            you want to buy: a published plan you can start and stop, or a quoted rollout with an
            implementation team. For more on sizing, see{' '}
            <Link href="/by-size" className={A}>field service software by business size</Link>.
          </p>

          <h2 id="scheduling-dispatch">Scheduling and dispatch</h2>
          <p>
            ServiceTitan’s Dispatch Board lets dispatchers reschedule by dragging an appointment,
            optimize one technician’s route for the day and adjust capacity planning, and call booking
            is in every package. Automated technician assignment (Dispatch Pro), online booking with
            capacity rules (Scheduling Pro) and live vehicle GPS (Fleet Pro) are paid add-ons.
          </p>
          <p>
            Jobber uses a drag-and-drop calendar for all crews and includes online booking from Core.
            Its help center lists route optimization on Connect, Grow and Plus; it reorders anytime
            visits by actual driving distance, runs on the web app rather than the mobile app, and only
            admins can run it. On select plans, Jobber’s GPS waypoint tracking pins where team members
            are when they clock in or complete a visit; for live vehicle tracking, its pricing page
            points to tracking devices from fleet partners. Confirm which plan includes waypoints
            before you buy.
          </p>

          <h2 id="offline">Offline mobile use</h2>
          <p>
            Both apps now cover core field work without signal. ServiceTitan says job status updates,
            time tracking, signatures, notes, photos and estimates work offline and sync automatically;
            purchase orders, customer financing, contracts, inventory availability and dynamic pricing
            need a connection, and payments captured offline are not finalized until the device
            reconnects.
          </p>
          <p>
            Jobber’s offline article, updated November 17, 2026, says the app saves the day’s schedule
            to view offline and lets technicians run timers, create notes with photos or videos, fill
            out checklists and mark visits complete. While offline it does not offer to create an
            invoice, and Tap to Pay needs an internet connection. If technicians quote and get
            signatures in basements or rural sites, check those steps in both trials or demos.
          </p>

          <h2 id="reporting">Reporting</h2>
          <p>
            ServiceTitan provides dashboards, technician scorecards and custom reports, but its help
            center says the ability to create custom reports depends on the package, and its pricing
            page lists reporting in Core and advanced business owner analytics on MAX only. Jobber includes built-in reporting from Core
            and limits its Custom Report Builder to Plus, where only admins can create custom reports.
          </p>

          <h2 id="features">Quotes, memberships, billing and accounting</h2>
          <ul>
            <li>
              <strong>Quotes:</strong> ServiceTitan supports Good, Better, Best proposal types, with
              mobile estimates in its Core package. Jobber adds optional line items and quote
              customization on Grow.
            </li>
            <li>
              <strong>Memberships and recurring work:</strong> ServiceTitan lists customizable
              memberships in its Core package. Jobber supports recurring jobs.
            </li>
            <li>
              <strong>Job costing:</strong> Jobber adds job costing on Grow.
            </li>
            <li>
              <strong>Progress billing:</strong> Jobber offers payment schedules and progress invoicing
              on all plans. ServiceTitan documents progress billing applications and project budgets
              for long-term projects.
            </li>
            <li>
              <strong>QuickBooks:</strong> ServiceTitan documents both QuickBooks Online and Desktop.
              Jobber syncs with QuickBooks Online and Xero from Connect and does not support Desktop.
              See our <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
            </li>
          </ul>

          <h2 id="onboarding">Onboarding and support</h2>
          <p>
            ServiceTitan’s onboarding runs in stages: pre-implementation, implementation with an
            implementation consultant and data quality analysts, then go-live. Its 10-K says onboarding
            and training fees are generally invoiced separately. Jobber lists unlimited live chat, phone
            and email support, and its Plus plan includes dedicated onboarding and Premium Support.
          </p>

          <h2 id="limitations">Limitations to weigh</h2>
          <ul>
            <li>
              <strong>ServiceTitan:</strong> no published price or trial; typical 12 to 36 month terms
              and separate onboarding fees; online booking, automated dispatch and fleet GPS are paid
              add-ons; custom reporting depends on the package.
            </li>
            <li>
              <strong>Jobber:</strong> no QuickBooks Desktop; custom reports only on Plus; no invoicing
              or Tap to Pay offline; published prices stop at 15 users; annual prepaid billing is
              non-refundable.
            </li>
          </ul>

          <h2 id="which-to-choose">Which should you choose?</h2>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Your situation</th>
                <th scope="col" className="p-3.5">Lean toward</th>
                <th scope="col" className="p-3.5">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {scenarios.map((s) => (
                <tr key={s.who} className="align-top">
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{s.who}</th>
                  <td className="p-3.5">{s.pick}</td>
                  <td className="p-3.5">{s.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-8">
          <p>
            Also weighing Housecall Pro? Read{' '}
            <Link href="/compare/housecall-pro-vs-servicetitan" className={A}>Housecall Pro vs ServiceTitan</Link>{' '}
            and <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>,
            or see all six major platforms in our{' '}
            <Link href="/compare" className={A}>field service software comparison</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on ServiceTitan vs Jobber">
            Choose Jobber if you want a published price, a 14-day trial and the option to pay month to
            month; it covers up to 15 users at published band prices. Choose ServiceTitan if you need
            call-center booking, capacity planning, package-level reporting or QuickBooks Desktop and
            are ready for a quoted, typically 12 to 36 month agreement with separate onboarding fees.
            Our <Link href="/how-we-review" className={A}>review method</Link> explains why we show
            only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
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
