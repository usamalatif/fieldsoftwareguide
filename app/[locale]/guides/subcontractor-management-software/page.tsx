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
 * /guides/subcontractor-management-software: targets "subcontractor management software" and
 * "subcontractor scheduling software". No GSC data for this topic yet.
 *
 * Angle: how field service tools let a contractor schedule, restrict and pay subcontractors, and
 * whether a subcontractor needs a paid seat. Billing a whole Fergus-style crew stays on
 * /compare/fergus-alternatives; this page links to it rather than repeating it.
 *
 * Checked: Fergus, Tradify, ServiceTrade and GorillaDesk facts reuse the site's verified pages
 * (checked 2026-11-25); ServiceM8, Commusoft, Kickserv, Workiz and Service Fusion pricing facts
 * reuse pages checked 2026-11-24. New on 2026-11-26 (one fetch each): Workiz sub-contractors
 * feature page and pricing page, ServiceM8 help on subcontracting through Network, Kickserv blog on
 * pricing visibility, Tradify Connections page, Commusoft help on license types.
 *
 * Conflicts: Fergus contractor users are $2.50 a day on the US page and $4 on the global page (US
 * used, global noted). Tradify's pricing page lists subcontractor scheduling on Pro, while its
 * Connections page says Connections are included in the subscription without naming a plan (both
 * stated). Kickserv's blog post carries a 2009 byline but newer page content, so no plan placement
 * is claimed for its pricing-visibility setting.
 *
 * Deliberately not used: search snippets and third-party summaries (including Workiz help articles,
 * which we do not fetch), a Workiz first-months discount, any Fergus per-user plan amount (not
 * published), a Commusoft daily rate (not published). Jobber, Housecall Pro, ServiceTitan and
 * FieldPulse document no subcontractor feature in our sources and sit outside the table.
 * Nothing tested hands-on.
 */

const PATH = '/guides/subcontractor-management-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Subcontractor Management Software for Field Service (2026)'
const DESCRIPTION =
  'How nine field service tools charge for, schedule and restrict subcontractors: day-rate seats, free connections, unlimited users and what subs can see.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/subcontractor-management-software',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Subcontractor management software', href: PATH },
]

type Tool = {
  name: string
  href: string
  seat: string
  access: string
  sending: string
  timePay: string
}

const tools: Tool[] = [
  {
    name: 'Fergus',
    href: '/pricing/fergus',
    seat: 'Contractor user: $2.50 a day on the US page ($4 on the global page), charged only on days they are scheduled or log time, at most once a day',
    access: 'Cannot use certificates, sign offs, customer invoices or supplier invoices',
    sending: 'Scheduled in your account; each scheduled day is a billed day',
    timePay: 'Contractors log time in Fergus; timesheet-only users from $26 a month. Paying subs not documented',
  },
  {
    name: 'Commusoft',
    href: '/pricing/commusoft',
    seat: 'Daily license for subcontractors, billed monthly in arrears by days used; rate not published; no commitment',
    access: 'No feature limits listed; no share of pooled storage',
    sending: 'Booking an appointment for them triggers a day’s charge; browsing the schedule while logged in does not',
    timePay: 'Not documented',
  },
  {
    name: 'Tradify',
    href: '/pricing/tradify',
    seat: 'Connections are free and unlimited; subs can use a free version of Tradify. Subcontractor scheduling is listed on Pro ($51 per user a month)',
    access: 'See their appointments, your contact details and their own profile; accept or decline invitations',
    sending: 'Automated appointment invitations from your schedule',
    timePay: 'Timesheets and bill tracking on Pro for your users; sub time and pay not documented',
  },
  {
    name: 'ServiceM8',
    href: '/pricing/servicem8',
    seat: 'Two routes: send work to the sub’s own ServiceM8 account through Network, or add them as staff. Paid plans have unlimited users (Starter $29, 50 jobs)',
    access: 'Help center: a contractor should not see billing or pricing; restrict staff with security roles',
    sending: 'Network Request, which the sub converts to a job and books in their own account',
    timePay: 'Help center suggests deciding whether the sub invoices your business; timesheets not documented',
  },
  {
    name: 'Workiz',
    href: '/pricing/workiz',
    seat: '“Subcontractors management” on Standard, Pro and Ultimate; feature page says “no extra cost”. Plan prices not published',
    access: '“Limited access to your dashboard”; roles and permissions management on Pro and Ultimate only',
    sending: 'Messages through the mobile app',
    timePay: 'Not documented on pages we could read',
  },
  {
    name: 'ServiceTrade',
    href: '/pricing/servicetrade',
    seat: 'Subcontract work management on Commercial Premium; subcontracting to other vendors on Fire Premium. Priced mainly by technicians, no prices published',
    access: 'Not documented',
    sending: 'Not documented beyond the plan line',
    timePay: 'Service timecards on Premium',
  },
  {
    name: 'GorillaDesk',
    href: '/pricing/gorilladesk',
    seat: 'Priced per route, not per user: only users assigned to a schedule need a paid seat; crew users are free. Basic $49 for one route',
    access: 'Not documented for subcontractors',
    sending: 'A crew riding together can share one route',
    timePay: 'Time clocking and commissions on Pro ($99 for one route)',
  },
  {
    name: 'Kickserv',
    href: '/pricing/kickserv',
    seat: 'No subcontractor user type documented; plans include set users: Start $60 (5), Run $119 (10), Scale $199 (20)',
    access: 'Estimate and job pricing visibility set per employee in Custom Permissions; Kickserv names subcontractors as the use case',
    sending: 'Not documented',
    timePay: 'Time and expense tracking from Start',
  },
  {
    name: 'Service Fusion',
    href: '/pricing/service-fusion',
    seat: 'Unlimited users on every plan (Starter $220 a month billed annually); no subcontractor feature documented',
    access: 'Not documented',
    sending: 'Not documented',
    timePay: 'Not documented',
  },
]

const cols: { key: keyof Omit<Tool, 'name' | 'href'>; label: string }[] = [
  { key: 'seat', label: 'Seat and cost for a sub' },
  { key: 'access', label: 'What a sub can see or do' },
  { key: 'sending', label: 'Sending work' },
  { key: 'timePay', label: 'Time and pay' },
]

const faqs = [
  {
    question: 'Do subcontractors need a paid seat in field service software?',
    answer:
      'It depends on the tool. Fergus charges contractor users $2.50 a day on its US page, and Commusoft sells daily licenses for subcontractors. Tradify Connections are free and unlimited, Workiz says subcontractor management comes at no extra cost, ServiceM8 paid plans have unlimited users, and GorillaDesk only charges for users assigned to a schedule.',
  },
  {
    question: 'What does a subcontractor seat cost?',
    answer:
      'Only Fergus publishes an amount: $2.50 per contractor user a day on its US pricing page, charged only on days they are scheduled or log time. A contractor scheduled on 12 days in a month would cost 12 × $2.50 = $30. Commusoft bills daily licenses by days used but does not publish the rate.',
  },
  {
    question: 'Can I hide prices from subcontractors?',
    answer:
      'Several tools document limits. ServiceM8’s help center says a contractor should not see billing or pricing and suggests security roles for subs added as staff. Kickserv sets estimate and job pricing visibility per employee. Fergus contractors cannot create customer invoices, and Workiz gives subs limited dashboard access, with roles and permissions on Pro and Ultimate.',
  },
  {
    question: 'How do I send jobs to a subcontractor who does not use my software?',
    answer:
      'Tradify sends automated appointment invitations to Connections, who can use a free version of Tradify to accept or decline. ServiceM8 Network sends a request to the sub’s own ServiceM8 account, where they convert it to a job and book it. Both need the sub to sign up to the same product.',
  },
  {
    question: 'Does field service software pay subcontractors?',
    answer:
      'None of the tools we checked documents paying subcontractors directly. ServiceM8’s help center says to agree whether the sub invoices your business, since your business is the client in their account. For time, Fergus contractors log time, Tradify Pro has timesheets, ServiceTrade Premium has service timecards and Kickserv has time and expense tracking.',
  },
  {
    question: 'Do Jobber, Housecall Pro and ServiceTitan have subcontractor features?',
    answer:
      'Not in the sources we checked. Jobber prices by user bands and documents no subcontractor or timesheet-only user type. We found no Housecall Pro, ServiceTitan or FieldPulse documentation on subcontractors, so ask each in a demo how a sub would be added and billed.',
  },
]

const sources = [
  { name: 'Fergus US pricing (contractor users $2.50 a day, timesheet users)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
  { name: 'Fergus global pricing (contractor users $4 a day, for comparison only)', url: 'https://fergus.com/pricing/', checked: '2026-11-25' },
  { name: 'Fergus help: contractors in Fergus', url: 'https://help.fergus.com/en/articles/3617164-contractors-in-fergus', checked: '2026-11-25' },
  { name: 'Fergus help: timesheet user', url: 'https://help.fergus.com/en/articles/11387079-timesheet-user', checked: '2026-11-25' },
  { name: 'Commusoft plans (US): contracted, rolling and daily licenses', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-24' },
  { name: 'Commusoft help: understanding license types (daily licenses)', url: 'https://help.commusoft.com/en/articles/543376-understanding-license-types', checked: '2026-11-26' },
  { name: 'Tradify pricing (subcontractor scheduling and timesheets on Pro)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify Connections (free subcontractor invitations)', url: 'https://www.tradifyhq.com/features/connections', checked: '2026-11-26' },
  { name: 'ServiceM8 pricing (US plans, unlimited users on paid plans)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 help: best practices for subcontracting jobs with ServiceM8 Network', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-network/best-practices-for-using-servicem8-network-to-subcontract-jobs.md', checked: '2026-11-26' },
  { name: 'Workiz sub-contractors feature page', url: 'https://www.workiz.com/features/sub-contractors/', checked: '2026-11-26' },
  { name: 'Workiz pricing (subcontractors management on every plan, roles and permissions on Pro and Ultimate)', url: 'https://www.workiz.com/pricing/', checked: '2026-11-26' },
  { name: 'ServiceTrade pricing: Select, Premium and Enterprise suites', url: 'https://servicetrade.com/pricing/', checked: '2026-11-25' },
  { name: 'ServiceTrade request pricing: pay for your technicians', url: 'https://servicetrade.com/request-pricing/', checked: '2026-11-25' },
  { name: 'GorillaDesk pricing (per route, free crew users)', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-25' },
  { name: 'Kickserv pricing (plans and user limits)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv blog: control job pricing visibility', url: 'https://www.kickserv.com/blog/control-job-pricing-visibility-with-kickserv', checked: '2026-11-26' },
  { name: 'Service Fusion pricing (plans, unlimited users)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Jobber pricing (plans and user bands)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function SubcontractorManagementSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/subcontractor-management-software"
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
            Subcontractor management software: <span className="text-orange-400">seats, access and scheduling</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Nine field service tools checked against their own pricing pages and help centers in November 2026:
            whether a subcontractor needs a paid seat, what they can see, and how you send them work.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Six tools document a way to work with subcontractors. <strong>Fergus</strong> charges contractor
            users $2.50 a day, only on days they are scheduled or log time, and <strong>Commusoft</strong> sells
            daily licenses billed by days used. <strong>Tradify</strong> sends free, unlimited Connection
            invitations, <strong>ServiceM8</strong> sends Network requests to a sub&rsquo;s own account,{' '}
            <strong>Workiz</strong> includes subcontractor management on every plan, and{' '}
            <strong>ServiceTrade</strong> lists subcontract work management on Premium. GorillaDesk and Kickserv
            have no subcontractor feature but limit cost or pricing visibility in other ways. None documents
            paying subcontractors.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-to-check">What to check before you add subcontractors</h2>
          <ul>
            <li><strong>Seat cost</strong>: a day rate, a free connection, an unlimited-user plan or a full paid seat.</li>
            <li><strong>Access</strong>: whether a sub sees your prices, your customers or only their own appointments.</li>
            <li><strong>Sending work</strong>: scheduled inside your account, or sent to the sub&rsquo;s own account.</li>
            <li><strong>Time and pay</strong>: whether hours are logged in your system and how the sub bills you.</li>
          </ul>
          <p>
            If you are choosing on how a whole crew of full, timesheet-only and contract staff is billed, see{' '}
            <Link href="/compare/fergus-alternatives" className={A}>Fergus alternatives</Link>. For assigning
            your own technicians, see{' '}
            <Link href="/guides/field-service-scheduling-software" className={A}>field service scheduling software</Link>.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Subcontractor features compared</h2>
          <p className={SUB}>
            Documented features and published prices only, not a hands-on test. Prices are per month as each
            vendor lists them. Sources and check dates are at the end of this page.
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
          <h2 id="seats">Do subcontractors need a paid seat?</h2>
          <p>
            The tools split into four billing patterns.
          </p>
          <h3>Pay by the day: Fergus and Commusoft</h3>
          <p>
            Fergus&rsquo;s US pricing page lists contractor users at $2.50 per user a day; its global page lists
            $4. Its help center says the contractor user type is billed only for days they are scheduled or log
            time, at most once a day, while a full user is billed at a flat monthly rate regardless of activity.
            As pure arithmetic on the US rate, a contractor scheduled on 12 days in a month costs 12 &times; $2.50
            = $30. Fergus does not publish a per-user amount for full users, so we cannot compare that against a
            full seat. See <Link href="/pricing/fergus" className={A}>Fergus pricing</Link>.
          </p>
          <p>
            Commusoft&rsquo;s help center describes daily licenses as &ldquo;useful for occasional users, such as
            subcontractors.&rdquo; A day is charged when an appointment is booked for that user, when they action
            one in the mobile app, or when they log in on a PC or mobile device; browsing the schedule while
            already logged in does not count. Charges are billed for the previous month in arrears, there is no
            commitment, and a daily license cannot be converted to a monthly or contracted one. Commusoft
            publishes no rate. See <Link href="/pricing/commusoft" className={A}>Commusoft pricing</Link>.
          </p>
          <h3>Free connections: Tradify and Workiz</h3>
          <p>
            Tradify&rsquo;s Connections page says Connections are free with your subscription, there is no limit
            on how many you can have, and subcontractors can use a free version of Tradify. Its pricing page lists
            subcontractor scheduling on Pro, at $51 per user a month, so confirm which plan you need. Workiz&rsquo;s
            pricing page lists &ldquo;Subcontractors management&rdquo; on Standard, Pro and Ultimate, and its
            feature page says it comes at no extra cost; Workiz publishes no plan prices. See{' '}
            <Link href="/pricing/tradify" className={A}>Tradify pricing</Link> and{' '}
            <Link href="/pricing/workiz" className={A}>Workiz pricing</Link>.
          </p>
          <h3>Unlimited or schedule-based users: ServiceM8, GorillaDesk, Service Fusion</h3>
          <p>
            ServiceM8 prices by jobs a month with unlimited users from Starter ($29 for 50 jobs), so adding a sub
            as staff does not add a seat fee. GorillaDesk prices per route: only users assigned to a schedule need
            a paid seat, crew users are free, and a crew riding together can share one route. Service Fusion
            includes unlimited users on every plan but documents no subcontractor feature in our sources. See{' '}
            <Link href="/pricing/servicem8" className={A}>ServiceM8</Link>,{' '}
            <Link href="/pricing/gorilladesk" className={A}>GorillaDesk</Link> and{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion</Link> pricing.
          </p>
          <h3>Seat caps and quotes: Kickserv and ServiceTrade</h3>
          <p>
            Kickserv documents no subcontractor user type, and each plan includes a set number of users (5 on
            Start, 10 on Run, 20 on Scale). ServiceTrade lists subcontract work management on Commercial Premium and
            subcontracting to other vendors on Fire Premium, and says pricing is based mainly on the number of
            technicians; it publishes no prices. See{' '}
            <Link href="/pricing/kickserv" className={A}>Kickserv</Link> and{' '}
            <Link href="/pricing/servicetrade" className={A}>ServiceTrade</Link> pricing.
          </p>

          <h2 id="access">What subcontractors can see or do</h2>
          <ul>
            <li><strong>Fergus</strong>: contractor users cannot use certificates, sign offs, create customer invoices or process supplier invoices.</li>
            <li><strong>Tradify</strong>: Connections can view a scheduled appointment&rsquo;s details, your contact details and their own profile, and accept or decline invitations.</li>
            <li><strong>ServiceM8</strong>: its help center says a contractor should not see billing or pricing information; subs added as staff can be restricted with security roles.</li>
            <li><strong>Kickserv</strong>: estimate and job pricing visibility is set per employee under Manage Users and Custom Permissions.</li>
            <li><strong>Workiz</strong>: subs get limited access to your dashboard; roles and permissions management is on Pro and Ultimate, not Standard.</li>
          </ul>
          <p>
            Commusoft lists no feature limits for daily licenses, and ServiceTrade, GorillaDesk and Service Fusion
            do not describe subcontractor access. Ask for a demo logged in as a sub before you rely on it.
          </p>

          <h2 id="sending">Sending work to subcontractors</h2>
          <p>
            There are two models. In Fergus, Commusoft, Workiz, Kickserv and ServiceM8&rsquo;s staff option, the
            sub works inside your account and you schedule them like any technician. In Tradify and
            ServiceM8 Network, the sub has their own login to the same product. Tradify sends automated appointment
            invitations that the sub accepts or declines. ServiceM8 sends a Network Request that the sub converts
            to a job in their own account, where it is up to them to book the time; its help center suggests the
            staff option instead when you need to control appointment times or want the sub to present as your
            business, and asks subs to post updates in job notes so they stay in the job diary.
          </p>

          <h2 id="pay">Paying subcontractors and tracking their time</h2>
          <p>
            None of the nine tools documents paying a subcontractor from inside the software. ServiceM8&rsquo;s
            help center notes that your business becomes the client in the sub&rsquo;s account and asks whether
            the sub will invoice you while you invoice your customer separately. For hours, Fergus contractors log
            time (and timesheet-only users start at $26 a month), Tradify Pro includes timesheets and bill
            tracking, ServiceTrade Premium has service timecards, GorillaDesk Pro has time clocking and
            commissions, and Kickserv has time and expense tracking from Start. These are documented for your
            users; whether they suit subs depends on the seat type above.
          </p>

          <h2 id="not-documented">Tools with nothing documented</h2>
          <p>
            Jobber prices by plan and user bands and documents no subcontractor or timesheet-only user type in our
            sources. We found no subcontractor documentation for Housecall Pro, ServiceTitan or FieldPulse. That
            does not mean a sub cannot be added as a regular user; ask how that user is billed. See{' '}
            <Link href="/pricing/jobber" className={A}>Jobber</Link>,{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro</Link>,{' '}
            <Link href="/pricing/servicetitan" className={A}>ServiceTitan</Link> and{' '}
            <Link href="/pricing/fieldpulse" className={A}>FieldPulse</Link> pricing.
          </p>

          <h2 id="choose">How to choose</h2>
          <ul>
            <li><strong>Occasional subs you schedule yourself</strong>: Fergus&rsquo;s day rate or Commusoft&rsquo;s daily licenses.</li>
            <li><strong>Subs who should accept or decline jobs</strong>: Tradify Connections or ServiceM8 Network.</li>
            <li><strong>Many subs, no per-person fee</strong>: ServiceM8&rsquo;s unlimited users or Workiz&rsquo;s included subcontractor management.</li>
            <li><strong>Commercial work handed to other vendors</strong>: ServiceTrade Premium.</li>
          </ul>
          <p>
            For a head-to-head on the two tools with the clearest subcontractor features, see{' '}
            <Link href="/compare/tradify-vs-fergus" className={A}>Tradify vs Fergus</Link>. How we check vendor
            claims is explained in <Link href="/how-we-review" className={A}>how we review</Link>.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            Decide first whether subs work inside your account or their own. Inside, Fergus and Commusoft charge
            only for days used, and ServiceM8 and Workiz add no seat fee. Their own account, Tradify Connections
            and ServiceM8 Network send them the job. Plan to handle subcontractor pay outside the software.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/fergus-alternatives" className="text-orange-600 hover:text-orange-800">Fergus alternatives →</Link>
            <Link href="/compare/tradify-vs-fergus" className="text-orange-600 hover:text-orange-800">Tradify vs Fergus →</Link>
            <Link href="/guides/field-service-scheduling-software" className="text-orange-600 hover:text-orange-800">Field service scheduling software →</Link>
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
