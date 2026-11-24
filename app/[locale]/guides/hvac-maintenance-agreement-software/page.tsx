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
 * /guides/hvac-maintenance-agreement-software: targets "hvac maintenance agreement software",
 * "hvac service contract software", "hvac maintenance scheduling software" and membership intent.
 *
 * GSC (2026-08-16 to 2026-11-15, site level, no page on this topic yet): best hvac maintenance
 * scheduling software 22 impressions at 62.0; hvac service contract software 18 at 95.7; best
 * software for commercial hvac maintenance tracking 7 at 87.7.
 *
 * Scope: selling, billing, scheduling and renewing maintenance agreements and memberships. The
 * dispatch board, routing and capacity live on /guides/hvac-dispatch-software; multi-site PM for
 * commercial accounts on /guides/commercial-hvac-software.
 *
 * Sources: vendor pricing pages and help centers, checked 2026-11-20 (Housecall Pro pricing and
 * HVAC pages from copies saved 2026-11-19; FieldPulse agreements page and FieldEdge, Workiz and
 * Service Fusion pricing checked 2026-11-19). ServiceTitan help docs are dated 2026-10-16 and
 * marked stale by its help center. Housecall Pro calls the feature Service Plans, Membership
 * Plans and Recurring Service Plans in different places; we treat them as one feature but say
 * which page each fact comes from. Nothing tested hands-on.
 */

const PATH = '/guides/hvac-maintenance-agreement-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'HVAC Maintenance Agreement Software: 8 Tools Compared (2026)'
const DESCRIPTION =
  'Compare HVAC maintenance agreement software: which plan includes it, how visits get scheduled, autopay, renewals and member pricing. From vendor docs.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/hvac-maintenance-agreement-software',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'HVAC maintenance agreement software', href: PATH },
]

type Tool = {
  name: string
  plan: string
  visits: string
  billing: string
  renewals: string
  pricing: string
}

const tools: Tool[] = [
  {
    name: 'Housecall Pro',
    plan: 'Recurring Service Plans on MAX ($299/month billed annually); Membership Plans on Essentials in its separate HVAC package; otherwise a paid add-on (price not published)',
    visits: 'Visit months fill in from the plan; you book them from an Unscheduled Visits list',
    billing: 'Card on file charged monthly, quarterly, every 6 months or yearly',
    renewals: 'Runs until cancelled, or renew fixed-term plans with reminder emails 1 to 60 days ahead',
    pricing: 'Plan discount applies automatically to the customer’s jobs',
  },
  {
    name: 'Jobber',
    plan: 'No membership module; recurring jobs plus automatic payments (Connect and up)',
    visits: 'Recurring job visits go straight on the calendar',
    billing: 'Card or ACH charged automatically; a failed payment is tried only once',
    renewals: 'No renewal feature documented',
    pricing: 'No member pricing documented',
  },
  {
    name: 'ServiceTitan',
    plan: 'Quote only; all three packages list customizable memberships',
    visits: 'Recurring service events created up to 12 months ahead; booked from a follow-up screen',
    billing: 'Billing runs charge stored cards; for memberships it tries each stored card until one works',
    renewals: 'Service agreements can auto-renew 90 days before the end date (needs configuration)',
    pricing: 'Member prices in the pricebook, with savings shown to non-members',
  },
  {
    name: 'Workiz',
    plan: 'Service plans on Ultimate only (quote only)',
    visits: 'Says plans schedule visits and create invoices automatically',
    billing: 'Billing frequency set in the plan template',
    renewals: 'Says you can choose automatic renewals',
    pricing: 'Discounts can be set on a plan',
  },
  {
    name: 'FieldPulse',
    plan: 'Maintenance agreements (quote only; plan not published)',
    visits: 'Each visit created ahead of time and placed on the schedule automatically',
    billing: 'Bill on a different cadence from visits, such as monthly for twice-yearly service',
    renewals: 'Renewal reminders by email or text; leave the end date blank to run until cancelled',
    pricing: 'Not documented on the page we read',
  },
  {
    name: 'Commusoft',
    plan: 'Service contracts (quote only)',
    visits: 'Generates contract jobs when due and adds them to the schedule',
    billing: 'Monthly, quarterly, annual or custom cycles, with pro-rated charges',
    renewals: 'Reports on upcoming renewals and contract profitability',
    pricing: 'Not documented on the page we read',
  },
  {
    name: 'FieldEdge',
    plan: 'Basic agreements on Select; Advanced service agreements on Premier and Elite (quote only)',
    visits: 'Not documented in detail',
    billing: 'Says it tracks and bills every agreement',
    renewals: 'Its blog says it automates renewals',
    pricing: 'Not documented',
  },
  {
    name: 'Service Fusion',
    plan: 'Recurring invoicing included on Pro ($552/month billed annually), add-on on Starter and Plus',
    visits: 'Not documented',
    billing: 'Says it auto-bills after the first invoice is paid',
    renewals: 'Homepage shows a dashboard of renewals and cancellations',
    pricing: 'Help center says agreements apply member pricing',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'plan', label: 'Where it is and which plan' },
  { key: 'visits', label: 'How visits reach the schedule' },
  { key: 'billing', label: 'Recurring billing' },
  { key: 'renewals', label: 'Renewals' },
  { key: 'pricing', label: 'Member pricing' },
]

const failed: { vendor: string; what: string }[] = [
  { vendor: 'Jobber', what: '“Automatic payments are only attempted once.” If the charge fails, you collect it yourself.' },
  { vendor: 'ServiceTitan memberships', what: 'With no preferred card set, it tries the primary card, then each other stored card until one succeeds. Membership Renewal Protection updates expired and replaced cards.' },
  { vendor: 'ServiceTitan service agreements', what: 'Charges only the payment method on the agreement. With none set, the invoice is still created but no payment is attempted.' },
  { vendor: 'Housecall Pro', what: 'If a plan lapses and is reactivated, payments due while it was inactive do not process automatically, and you cannot collect some and cancel others.' },
]

const faqs = [
  {
    question: 'What is HVAC maintenance agreement software?',
    answer:
      'It is the part of a field service platform that sells maintenance plans or memberships, charges them on a schedule, creates the tune-up visits, shows which visits are due or overdue, and handles renewals. Most HVAC shops get it as a module inside their field service software rather than as a separate product.',
  },
  {
    question: 'Which Housecall Pro plan includes service plans or memberships?',
    answer:
      'On the main pricing page, Recurring Service Plans are included on MAX ($299/month billed annually for 8 users). Housecall Pro’s separate HVAC package includes Membership Plans from Essentials, and its help center calls them a normally paid add-on. The add-on price is not published.',
  },
  {
    question: 'Does Jobber have maintenance agreements or memberships?',
    answer:
      'Not as a membership module. Jobber runs agreements as recurring jobs, which put repeating visits on the calendar, and charges them through automatic payments on Connect and higher plans. Jobber documents no renewal or member-discount feature, and its own guide suggests setting yourself a reminder before a contract ends.',
  },
  {
    question: 'Can maintenance visits be scheduled automatically?',
    answer:
      'It depends on the tool. Housecall Pro and ServiceTitan memberships create a list of due visits that someone books. FieldPulse, Commusoft and Workiz say agreement visits go straight onto the schedule, and Jobber recurring jobs place visits on the calendar when the job is created.',
  },
  {
    question: 'What happens when a member’s card is declined?',
    answer:
      'Jobber tries an automatic payment once and does not retry. ServiceTitan memberships try each stored card until one succeeds, while its service agreements only charge the method on the agreement. In Housecall Pro, payments missed while a plan was lapsed do not process automatically when it is reactivated.',
  },
  {
    question: 'How should I account for prepaid memberships?',
    answer:
      'ServiceTitan can recognize membership revenue as each included visit is completed (deferred revenue), with account configuration. The other tools here do not document deferred revenue, so agree the approach with your accountant and check how plan invoices sync to QuickBooks.',
  },
  {
    question: 'Is this the same as CMMS software for large facilities?',
    answer:
      'No. Maintenance agreement software helps a contractor sell and deliver maintenance to customers. A CMMS is used by in-house facility teams to maintain their own equipment. Contractors serving multi-site commercial accounts should also look at our commercial HVAC software guide.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (Recurring Service Plans on MAX)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro HVAC software (HVAC package, membership plans)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: HVAC package overview (normally paid add-ons)', url: 'https://help.housecallpro.com/en/articles/15935808-hvac-package-overview', checked: '2026-11-20' },
  { name: 'Housecall Pro help: create service plan templates', url: 'https://help.housecallpro.com/en/articles/2369524-create-service-plan-templates', checked: '2026-11-20' },
  { name: 'Housecall Pro help: how to sell a service plan', url: 'https://help.housecallpro.com/en/articles/2921514-how-to-sell-a-service-plan', checked: '2026-11-20' },
  { name: 'Housecall Pro help: service plans dashboard', url: 'https://help.housecallpro.com/en/articles/2932107-service-plans-dashboard-overview', checked: '2026-11-20' },
  { name: 'Housecall Pro help: service plans FAQs', url: 'https://help.housecallpro.com/en/articles/5485025-service-plans-faqs', checked: '2026-11-20' },
  { name: 'Housecall Pro help: service plan renewals', url: 'https://help.housecallpro.com/en/articles/6879916-service-plan-renewals', checked: '2026-11-20' },
  { name: 'Housecall Pro help: service plan reporting', url: 'https://help.housecallpro.com/en/articles/7068257-service-plan-reporting', checked: '2026-11-20' },
  { name: 'Jobber help: create a recurring job', url: 'https://help.getjobber.com/hc/en-us/articles/115009542848-Create-a-Recurring-Job', checked: '2026-11-19' },
  { name: 'Jobber help: the Connect plan (automatic payments)', url: 'https://help.getjobber.com/hc/en-us/articles/12296620144919-The-Connect-Plan', checked: '2026-11-20' },
  { name: 'Jobber help: automatic payments', url: 'https://help.getjobber.com/hc/en-us/articles/360036931633-Automatic-Payments', checked: '2026-11-20' },
  { name: 'Jobber Academy: HVAC service contracts', url: 'https://www.getjobber.com/academy/hvac/hvac-service-contract/', checked: '2026-11-20' },
  { name: 'ServiceTitan HVAC maintenance agreements', url: 'https://www.servicetitan.com/industries/hvac-software/maintenance-agreements', checked: '2026-11-20' },
  { name: 'ServiceTitan help: basic memberships workflows', url: 'https://help.servicetitan.com/docs/basic-memberships-workflows', checked: '2026-11-20' },
  { name: 'ServiceTitan help: recurring service events', url: 'https://help.servicetitan.com/docs/manage-recurring-service-events', checked: '2026-11-19' },
  { name: 'ServiceTitan help: recurring billing for memberships and service agreements', url: 'https://help.servicetitan.com/docs/process-recurring-billing-for-memberships-and-service-agreements', checked: '2026-11-20' },
  { name: 'ServiceTitan help: membership discounts', url: 'https://help.servicetitan.com/docs/apply-membership-discounts', checked: '2026-11-20' },
  { name: 'ServiceTitan help: auto-renew a service agreement', url: 'https://help.servicetitan.com/docs/auto-renew-a-service-agreement', checked: '2026-11-20' },
  { name: 'ServiceTitan help: follow up on expiring memberships', url: 'https://help.servicetitan.com/docs/follow-up-on-expiring-memberships', checked: '2026-11-20' },
  { name: 'ServiceTitan help: attach equipment to memberships', url: 'https://help.servicetitan.com/docs/attach-equipment-to-memberships-from-the-office', checked: '2026-11-20' },
  { name: 'ServiceTitan help: deferred revenue for membership types', url: 'https://help.servicetitan.com/docs/set-up-deferred-revenue-for-membership-types', checked: '2026-11-20' },
  { name: 'ServiceTitan help: service agreements visits report', url: 'https://help.servicetitan.com/docs/service-agreements-visits-report', checked: '2026-11-20' },
  { name: 'ServiceTitan help: book recurring services with Scheduling Pro', url: 'https://help.servicetitan.com/docs/book-recurring-service-appointments-with-scheduling-pro', checked: '2026-11-20' },
  { name: 'Workiz pricing plans (service plans on Ultimate)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-19' },
  { name: 'Workiz service plans', url: 'https://www.workiz.com/features/service-plans/', checked: '2026-11-20' },
  { name: 'FieldPulse maintenance agreements', url: 'https://www.fieldpulse.com/features/maintenance-agreements', checked: '2026-11-19' },
  { name: 'Commusoft service contract management', url: 'https://www.commusoft.com/en-us/features/service-contract-management-software/', checked: '2026-11-20' },
  { name: 'FieldEdge pricing (agreements by plan)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-19' },
  { name: 'FieldEdge blog: HVAC service agreement programs', url: 'https://fieldedge.com/blog/hvac-service-agreement-programs/', checked: '2026-11-20' },
  { name: 'Service Fusion pricing (recurring invoicing by plan)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-19' },
  { name: 'Service Fusion homepage (service agreements)', url: 'https://www.servicefusion.com/', checked: '2026-11-20' },
  { name: 'Service Fusion blog: service agreements (June 2026)', url: 'https://www.servicefusion.com/blog/service-agreements', checked: '2026-11-20' },
  { name: 'Service Fusion help: customer service agreement tracking (member pricing)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001110832-Customer-Service-Agreement-Tracking', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HvacMaintenanceAgreementSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/hvac-maintenance-agreement-software"
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
            HVAC maintenance agreement software: <span className="text-orange-400">memberships, billing and renewals compared</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Which plan includes agreements, how tune-up visits reach the schedule, what happens when a
            card fails, and how renewals work, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Among tools that publish prices, <strong>Housecall Pro</strong> documents the most
            complete membership feature: plan templates, autopay, member discounts, a due-visit list
            and renewal reminders. Its main pricing page includes it on MAX
            ($299/month billed annually), and its separate HVAC package includes it from Essentials.{' '}
            <strong>Jobber</strong> has no membership module; it runs agreements as recurring jobs
            with automatic payments from Connect. <strong>ServiceTitan</strong> documents the deepest
            program, with member pricing, auto-renewing service agreements and deferred revenue, by
            quote. <strong>FieldPulse</strong>, <strong>Commusoft</strong> and{' '}
            <strong>Workiz</strong> (Ultimate only) say they place agreement visits on the schedule
            automatically.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-it-does">What maintenance agreement software has to do</h2>
          <p>
            A maintenance program is a promise: two tune-ups a year, a discount, priority service.
            Software has to keep that promise without someone tracking it in a spreadsheet:
          </p>
          <ul>
            <li><strong>Sell</strong> the plan on the estimate or invoice the tech is already writing.</li>
            <li><strong>Bill</strong> it on schedule from a stored card, and handle failed charges.</li>
            <li><strong>Create the visits</strong> and get them onto the schedule in the shoulder season.</li>
            <li><strong>Show what is due or overdue</strong>, so no member misses a tune-up.</li>
            <li><strong>Price member work</strong> at the member discount automatically.</li>
            <li><strong>Renew</strong> the plan, or keep it running until the customer cancels.</li>
          </ul>
          <p>
            If you only run a handful of agreements, a template and a recurring job can be enough.
            The software earns its cost once you have enough members that missed visits and failed
            charges start to slip through.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>HVAC maintenance agreement software compared</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Where a
            vendor only describes a feature in marketing copy, the table says “says”. Sources and
            check dates are at the end of this page.
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
          <h2 id="plan-gating">Which plan includes agreements</h2>
          <p>
            This is where budgets go wrong. Housecall Pro’s main pricing page includes Recurring
            Service Plans on MAX ($299/month billed annually for 8 users). Its separate HVAC package,
            priced higher, includes Membership Plans from Essentials, and its help center lists them
            among tools that are “normally paid add-ons”; the add-on price is not published. Workiz
            lists service plans on Ultimate only. FieldEdge offers basic agreements on Select and
            advanced service agreements on Premier and Elite. Service Fusion includes recurring
            invoicing on Pro and sells it as an add-on on Starter and Plus. Jobber’s automatic
            payments start on Connect. ServiceTitan, FieldPulse and Commusoft price by quote. Full
            plan prices are in our <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>

          <h2 id="visits">How agreement visits reach the schedule</h2>
          <p>Vendors use three different models, and the difference matters in peak season:</p>
          <ul>
            <li>
              <strong>A due list you book from.</strong> Housecall Pro fills in the month of each
              included visit and lists them under Unscheduled Visits, which it calls “your reminder to
              schedule actual appointment times”; scheduling one creates a linked job. ServiceTitan
              memberships create recurring service events up to 12 months ahead, booked from its
              Follow Ups screen, and its Scheduling Pro add-on lets members book their own visits online.
            </li>
            <li>
              <strong>Placed on the schedule for you.</strong> FieldPulse says each visit is created
              ahead of time and booked without anyone placing it by hand, into the first open slot or
              the same day each cycle. Commusoft says it generates contract jobs when due and adds them
              to the schedule, and Workiz says plan visits appear on your calendar.
            </li>
            <li>
              <strong>A recurring job.</strong> Jobber puts all the visits of a recurring job on the
              calendar when you create it.
            </li>
          </ul>
          <p>
            Booking capacity, routes and the dispatch board itself are covered in our{' '}
            <Link href="/guides/hvac-dispatch-software" className={A}>HVAC dispatch software</Link> guide.
          </p>

          <h2 id="billing">Recurring billing and failed cards</h2>
          <p>
            Housecall Pro bills a plan to a card on file every month, quarter, six months or year;
            the frequency cannot be changed once a plan is active, and customers who accept a plan
            themselves pay by card through Housecall Pro. ServiceTitan service agreements offer billing
            schedules from per visit to monthly, and the schedule can be changed without recreating
            the agreement. FieldPulse lets you service twice a year and bill monthly. The bigger
            difference is what happens when a charge fails:
          </p>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Tool</th>
                <th scope="col" className="p-3.5">When a recurring charge fails</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {failed.map((f) => (
                <tr key={f.vendor} className="align-top">
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{f.vendor}</th>
                  <td className="p-3.5">{f.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-12">
          <p>
            For prepaid plans, ServiceTitan can recognize membership revenue as each included visit
            is delivered (deferred revenue), with account configuration. Housecall Pro lets you push
            plan invoices to QuickBooks Online manually from the customer’s plan, and FieldPulse says
            agreement invoices and payments sync both ways with QuickBooks Online. See our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> for each tool’s accounting sync.
          </p>

          <h2 id="renewals">Renewals</h2>
          <p>
            ServiceTitan service agreements can auto-renew: a new agreement is created 90 days before
            the end date, though you still activate it and collect any e-signatures, and every service
            agreement needs an end date. For memberships, ServiceTitan lists those expiring soon so
            CSRs can work renewals, and suggests doing HVAC renewals in the off-season. Housecall Pro
            plans either continue until the customer cancels or run for a set term, with renewal
            reminder emails 1, 3, 7, 14, 30 or 60 days ahead that create draft agreements; you can also
            renew a free first-year plan into a paid one. FieldPulse sends renewal reminders by email
            or text. Jobber documents no renewal feature; its own HVAC guide says to set yourself a
            reminder a few months before the contract ends.
          </p>

          <h2 id="member-pricing">Member pricing and perks</h2>
          <p>
            In ServiceTitan, members get a discount on pricebook items, and estimates show members a
            Member Discount section and non-members a Potential Savings section, which doubles as a
            sales prompt. Membership prices apply to services and equipment; material items need
            support to enable. Housecall Pro applies a plan’s discount to the customer’s jobs
            automatically when the plan is added to the job. Jobber does not document member pricing,
            and Service Fusion’s help center says its service agreements apply member pricing.
          </p>

          <h2 id="equipment-commercial">Equipment and commercial agreements</h2>
          <p>
            Tying an agreement to the units it covers keeps service history with the equipment.
            ServiceTitan lets you attach installed equipment to a membership that covers a single
            location, and its service agreements have equipment and locations tabs. FieldPulse links
            agreements to the equipment they cover, and Commusoft sets different service frequencies
            for each asset under one contract and can apply a master contract across sites. For
            multi-site commercial accounts, see our{' '}
            <Link href="/guides/commercial-hvac-software" className={A}>commercial HVAC software</Link>{' '}
            guide, and for refrigerant logs on PM visits, our{' '}
            <Link href="/guides/refrigerant-tracking-software" className={A}>refrigerant tracking software</Link> guide.
          </p>

          <h2 id="which-to-choose">Which tool fits your agreement program?</h2>
          <ul>
            <li>
              <strong>Starting a program, a few dozen members:</strong> Housecall Pro MAX, or Jobber
              Connect if you are happy to run agreements as recurring jobs and handle renewals yourself.
              Compare them in <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>.
            </li>
            <li>
              <strong>Hundreds of members and a CSR team:</strong> ServiceTitan, for member pricing,
              renewal follow-ups and deferred revenue. See{' '}
              <Link href="/compare/housecall-pro-vs-servicetitan" className={A}>Housecall Pro vs ServiceTitan</Link>.
            </li>
            <li>
              <strong>Want visits placed automatically:</strong> ask FieldPulse, Commusoft and Workiz
              (Ultimate) to show it in a demo, since their descriptions come from marketing pages.
            </li>
          </ul>

          <h2 id="demo-checklist">What to test in a trial or demo</h2>
          <ol>
            <li>Sell a plan on an estimate and check that the first visit and first payment are not counted twice.</li>
            <li>Run a declined test card and see whether the tool retries, alerts you, or does nothing.</li>
            <li>Renew a plan, and move a customer from a free first-year plan to a paid one.</li>
            <li>Add a member discount and confirm it lands on the next repair estimate.</li>
            <li>Find every overdue visit from last season in one view.</li>
            <li>Get the plan or add-on that includes agreements in writing, with its price.</li>
          </ol>
          <p>
            For choosing an HVAC platform overall, see our{' '}
            <Link href="/by-industry/hvac" className={A}>HVAC field service management software</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on HVAC maintenance agreement software">
            Check the plan first: agreements sit on Housecall Pro MAX (or its HVAC package from
            Essentials), Workiz Ultimate and FieldEdge’s higher plans, and Jobber covers them only as
            recurring jobs. Then test the details that cost members: how visits get booked, what
            happens to a failed card, and how renewals work. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only
            prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/by-industry/hvac" className="text-orange-600 hover:text-orange-800">HVAC software guide →</Link>
            <Link href="/guides/hvac-dispatch-software" className="text-orange-600 hover:text-orange-800">HVAC dispatch software →</Link>
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
