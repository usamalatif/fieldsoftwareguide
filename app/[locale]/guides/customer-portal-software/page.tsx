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
 * /guides/customer-portal-software: targets "field service customer portal" and "client portal for
 * contractors". No GSC data for this topic yet.
 *
 * Scope: the portal itself (which plan includes it, what customers can do in it, how they get in).
 * Quote building, invoice fees and online booking live on the quoting, invoicing and scheduling
 * guides, which this page links to.
 *
 * Checked: Housecall Pro help center (two portal articles), FieldPulse help center, Workiz client
 * portal page and Tradify enquiry page read 2026-11-26. Everything else reuses the site's verified
 * pages and research notes: Jobber pricing 2026-11-03 and help 2026-11-20 (getjobber.com not
 * refetched); ServiceTitan help and industry pages 2026-11-19 to 2026-11-23, pricing and 10-K
 * 2026-11-24 (no servicetitan.com fetch); Workiz pricing plans 2026-11-21; FieldEdge, Service Fusion,
 * Kickserv and Commusoft 2026-11-24; ServiceTrade and GorillaDesk 2026-11-25; ServiceM8 2026-11-20 to
 * 2026-11-26.
 *
 * Conflicts: Workiz's portal page names no plan, its pricing page lists the client portal on
 * Standard, so every plan. FieldPulse's portal article shows invoices as PDFs and does not say
 * customers can pay there; stated as not stated. Kickserv's Customer Center article is dated 2023.
 * ServiceTitan is priced by users (10-K), not per technician.
 *
 * Not used: search snippets (Workiz help-center limits, a ServiceM8 marketplace portal add-on and its
 * price, Service Fusion blog wording), review sites, vendor comparison pages. Nothing tested hands-on.
 */

const PATH = '/guides/customer-portal-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Field Service Customer Portal: Which Plans Include One (2026)'
const DESCRIPTION =
  'Which field service tools include a client portal, on which plan, and what customers can do in it: approve quotes, pay invoices, book work and save cards.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/customer-portal-software',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Customer portal software', href: PATH },
]

type Tool = {
  name: string
  plan: string
  quotes: string
  pay: string
  requests: string
  other: string
}

const ND = 'Not documented on our sources'

const tools: Tool[] = [
  {
    name: 'Jobber',
    plan: 'Client hub on every plan, from Core ($29 a month billed annually, 1 user)',
    quotes: 'Approve a quote with a drawn or typed signature; Approve and Pay Deposit button when a deposit is set',
    pay: 'Pay invoices by card online (2.9% + 30¢)',
    requests: 'Online booking and request forms on every plan',
    other: 'Job history and saved cards: not documented on our sources',
  },
  {
    name: 'Housecall Pro',
    plan: 'Help center names no plan; plans start at Basic, $59 a month billed annually (1 user)',
    quotes: 'View all estimates and approve open ones',
    pay: 'View & Pay on the Invoices tab; banner for unpaid invoices',
    requests: 'Book online button; Send a Message to ask for a new, rescheduled or canceled appointment',
    other: 'Upcoming and past appointments; Wallet to add, update or remove saved cards (with My Money); referral link',
  },
  {
    name: 'ServiceTitan',
    plan: 'Quote only (Core, Demand AI, Field AI, MAX); which package includes the portal is not documented',
    quotes: ND,
    pay: 'Pay bills (its gutter page)',
    requests: 'Book appointments and schedule jobs (gutter and locksmith pages)',
    other: 'Track jobs and the tech’s location; Contracts for commercial customers; trade data such as last inspection date or pool chemical readings',
  },
  {
    name: 'Workiz',
    plan: 'Client portal listed on every plan (Standard, Pro, Ultimate); prices not published',
    quotes: 'View and approve estimates and sales proposals',
    pay: 'Pay one at a time or in bulk by card, ACH, Google Pay, Apple Pay or consumer financing',
    requests: 'Make a new booking; manage upcoming appointments',
    other: 'Job and service history, documents, pictures and service plans; you choose what is shared',
  },
  {
    name: 'FieldPulse',
    plan: 'Turned on in Company Settings; no plan or add-on named; prices not published',
    quotes: 'Open, download, print and accept estimates',
    pay: 'Invoices shown as PDFs plus a full payment record; paying in the portal not stated',
    requests: 'Submit Request opens your booking portal',
    other: 'Open jobs, projects with completion percentage, and asset records with history and files',
  },
  {
    name: 'Kickserv',
    plan: 'Customer Center; plan not stated; plans start at Start, $60 a month for 5 users',
    quotes: 'View, download and print estimates',
    pay: 'See open invoices and pay by card through Stripe; Klarna if you enable it',
    requests: 'Request work through a Contact Form button',
    other: '“View all interactions” (features page)',
  },
  {
    name: 'GorillaDesk',
    plan: 'Customer Portal on Pro: $99 a month for the first route, $50 per added route',
    quotes: ND,
    pay: ND,
    requests: 'Online booking is also on Pro; how it links to the portal is not documented',
    other: ND,
  },
  {
    name: 'Service Fusion',
    plan: 'Customer web portal included on Pro ($552 a month billed annually); add-on on Starter and Plus, price not published',
    quotes: ND,
    pay: ND,
    requests: ND,
    other: 'eSign documents sit on the same Pro tier',
  },
  {
    name: 'FieldEdge',
    plan: 'Consumer Management Portal included on Elite; call for pricing on Select and Premier; all plans quote only',
    quotes: ND,
    pay: ND,
    requests: 'Submit requests for service (not live booking)',
    other: ND,
  },
  {
    name: 'Commusoft',
    plan: 'Quote only; plan not stated',
    quotes: ND,
    pay: 'Invoices sent to head office through the portal',
    requests: ND,
    other: 'Job updates sent to site managers',
  },
  {
    name: 'ServiceTrade',
    plan: 'Customer service portal on Commercial Premium; customer portal on Fire Premium; quote only',
    quotes: ND,
    pay: ND,
    requests: ND,
    other: ND,
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'plan', label: 'Plan with the portal' },
  { key: 'quotes', label: 'Quotes and estimates' },
  { key: 'pay', label: 'Invoices and payment' },
  { key: 'requests', label: 'Booking and requests' },
  { key: 'other', label: 'History, cards and more' },
]

const access: { vendor: string; how: string }[] = [
  { vendor: 'Housecall Pro', how: 'Email invite with a magic link, no username or password; the link stays active for 7 days and a new one is sent if it expires. Invites can go out automatically when a job is scheduled, in bulk from the customer list, or one at a time.' },
  { vendor: 'Workiz', how: 'A secure link by text or email; “No downloads or logins required.” You control which documents, jobs, invoices or plans are shared.' },
  { vendor: 'FieldPulse', how: 'A personal portal link from the customer’s profile, with no FieldPulse account needed. You can tick Password Protected for a customer, who then registers an email and password. Tab permissions apply to every customer on the account.' },
  { vendor: 'Jobber, ServiceTitan, Kickserv and the rest', how: 'Login method not documented on our sources. Ask for a demo of the customer’s first visit.' },
]

const faqs = [
  {
    question: 'What is a field service customer portal?',
    answer:
      'It is a web page your customers open from a link or login to deal with you without calling the office. Depending on the tool, they can approve quotes, pay invoices, request or book work, see upcoming and past appointments, and manage a saved card. Jobber calls it the client hub, Kickserv the Customer Center and FieldEdge the Consumer Management Portal.',
  },
  {
    question: 'Which field service software includes a client portal on every plan?',
    answer:
      'Jobber lists its client hub on Core, its entry plan at $29 a month billed annually for one user, and Workiz lists a client portal on Standard, its entry plan, though Workiz does not publish prices. Housecall Pro, FieldPulse and Kickserv document a portal without naming a plan. GorillaDesk, Service Fusion, FieldEdge and ServiceTrade put it on a higher tier.',
  },
  {
    question: 'Can customers pay invoices and save a card in the portal?',
    answer:
      'In several tools, yes. Housecall Pro customers pay from the Invoices tab and use a Wallet tab to add, update or remove cards when you use its payments. Workiz takes cards, ACH, Google Pay, Apple Pay and financing, including bulk payment. Kickserv takes cards through Stripe. Jobber charges 2.9% + 30¢ for cards paid online in the client hub. FieldPulse’s portal article shows invoices as PDFs and does not say customers can pay there.',
  },
  {
    question: 'Do my customers need a password to use the portal?',
    answer:
      'Not with the tools that document it. Housecall Pro sends a magic link that works for 7 days, Workiz sends a secure link that needs no login, and FieldPulse sends a personal link with an optional password you can turn on per customer.',
  },
  {
    question: 'Is a customer portal the same as online booking?',
    answer:
      'No. Online booking lets new or existing customers pick a time; a portal is where an existing customer sees their quotes, invoices and appointments. Many portals link to the booking page, such as Housecall Pro’s Book online button or FieldPulse’s Submit Request tab, while FieldEdge’s portal takes service requests rather than live bookings.',
  },
  {
    question: 'Which tools charge extra for a customer portal?',
    answer:
      'Service Fusion includes its customer web portal on Pro ($552 a month billed annually) and sells it as an add-on on Starter and Plus without a published price. FieldEdge includes its portal on Elite and quotes it on request below that. GorillaDesk puts it on Pro ($99 a month for the first route), and ServiceTrade on its Premium suites.',
  },
]

const sources = [
  { name: 'Jobber pricing (client hub, online booking and request forms on Core; card fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-03' },
  { name: 'Jobber help: quote basics (signature, Approve and Pay Deposit)', url: 'https://help.getjobber.com/en/articles/quote-basics/', checked: '2026-11-20' },
  { name: 'Housecall Pro help: using the Customer Portal', url: 'https://help.housecallpro.com/en/articles/8448657-using-the-customer-portal', checked: '2026-11-26' },
  { name: 'Housecall Pro help: customer guide to the portal', url: 'https://help.housecallpro.com/en/articles/8474580-customer-guide-to-the-portal', checked: '2026-11-26' },
  { name: 'Housecall Pro pricing (plans, online booking from Basic)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro commercial service software (commercial customer portal)', url: 'https://www.housecallpro.com/industries/commercial-service-software/', checked: '2026-11-19' },
  { name: 'ServiceTitan help: customer portal (Contracts for commercial customers)', url: 'https://help.servicetitan.com/docs/customer-portal-overview', checked: '2026-11-19' },
  { name: 'ServiceTitan gutter software (book, track jobs, pay bills)', url: 'https://www.servicetitan.com/industries/gutter-software', checked: '2026-11-23' },
  { name: 'ServiceTitan locksmith software (tech location, schedule jobs)', url: 'https://www.servicetitan.com/industries/locksmith-software', checked: '2026-11-21' },
  { name: 'ServiceTitan septic software (last inspection date in the portal)', url: 'https://www.servicetitan.com/industries/septic-business-software', checked: '2026-11-23' },
  { name: 'ServiceTitan pool service software (chemical readings in the portal)', url: 'https://www.servicetitan.com/industries/pool-service-software', checked: '2026-11-21' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-24' },
  { name: 'ServiceTitan Form 10-K, fiscal year ended January 31, 2026 (pricing based on users)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-24' },
  { name: 'Workiz client portal', url: 'https://www.workiz.com/features/client-portal/', checked: '2026-11-26' },
  { name: 'Workiz pricing plans (client portal on Standard)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
  { name: 'FieldPulse help: customer portal experience overview', url: 'https://help.fieldpulse.com/customers/customer-portal/portal-customer-view', checked: '2026-11-26' },
  { name: 'FieldPulse pricing (seat-based, not published)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv features (customer portal)', url: 'https://www.kickserv.com/features', checked: '2026-11-24' },
  { name: 'Kickserv help: the Customer Center', url: 'https://help.kickserv.com/article/80-the-customer-center', checked: '2026-11-24' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'GorillaDesk pricing (plans and routes)', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-25' },
  { name: 'GorillaDesk help: plans and pricing (Customer Portal on Pro)', url: 'https://intercom.help/gorilladesk/en/articles/431660-plans-pricing', checked: '2026-11-25' },
  { name: 'GorillaDesk help: Pro plan features and benefits', url: 'https://intercom.help/gorilladesk/en/collections/1383598-pro-plan-features-benefits-v3', checked: '2026-11-25' },
  { name: 'Service Fusion pricing (customer web portal on Pro, add-on below)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'FieldEdge pricing (portal included on Elite)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'FieldEdge Consumer Management Portal', url: 'https://fieldedge.com/consumer-management-portal/', checked: '2026-11-24' },
  { name: 'Commusoft customer portal', url: 'https://www.commusoft.com/en-us/features/customer-portal/', checked: '2026-11-24' },
  { name: 'Commusoft plans (US)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-24' },
  { name: 'ServiceTrade pricing (portal on Premium suites)', url: 'https://servicetrade.com/pricing/', checked: '2026-11-25' },
  { name: 'ServiceM8 pricing (online quote acceptance, online booking)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 add-on directory (no client portal described)', url: 'https://www.servicem8.com/addon---ServiceGuru-Customer-Portal?uuid=a9379670-cd84-4256-a4ad-61b6eec417fb', checked: '2026-11-26' },
  { name: 'Tradify customer enquiry software (forms, email, Stripe payments)', url: 'https://www.tradifyhq.com/features/customer-enquiry-software-app', checked: '2026-11-26' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function CustomerPortalSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/customer-portal-software"
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
            Customer portal software: <span className="text-orange-400">what your clients can do, by plan</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Thirteen field service tools checked against their own help centers and pricing pages in November
            2026: who has a client portal, which plan includes it, and what customers can do once they are in.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Jobber</strong> includes its client hub from Core ($29 a month billed annually) and{' '}
            <strong>Workiz</strong> lists a client portal on every plan. <strong>Housecall Pro</strong>,{' '}
            <strong>FieldPulse</strong> and <strong>Kickserv</strong> document a portal without naming a plan.{' '}
            <strong>GorillaDesk</strong> puts it on Pro, <strong>Service Fusion</strong> on Pro (add-on below),{' '}
            <strong>FieldEdge</strong> on Elite and <strong>ServiceTrade</strong> on Premium. The most detailed
            documentation comes from Housecall Pro (estimates, invoice payment, booking, messages and saved
            cards), Workiz (bulk payment, job history and service plans) and FieldPulse (estimates, jobs,
            projects and asset records). We found no built-in portal documented for ServiceM8 or Tradify.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-it-is">What a client portal for contractors does</h2>
          <p>
            A portal gives each customer one place to handle the paperwork of a job without phoning the office.
            The pieces to look for:
          </p>
          <ul>
            <li><strong>Quotes</strong>: view and approve estimates, sometimes with a signature or deposit.</li>
            <li><strong>Invoices and payment</strong>: see what is owed, pay it, and keep a card on file.</li>
            <li><strong>Requests and booking</strong>: ask for new work or a change to an appointment.</li>
            <li><strong>History</strong>: past and upcoming visits, documents, service plans and equipment records.</li>
            <li><strong>Easy access</strong>: a link instead of yet another password.</li>
          </ul>
          <p>
            This page covers the portal itself. For how quotes are built and followed up, see{' '}
            <Link href="/guides/field-service-quoting-software" className={A}>field service quoting software</Link>; for
            payment fees and reminders,{' '}
            <Link href="/guides/field-service-invoicing-software" className={A}>field service invoicing software</Link>;
            and for online booking,{' '}
            <Link href="/guides/field-service-scheduling-software" className={A}>field service scheduling software</Link>.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Field service customer portals compared</h2>
          <p className={SUB}>
            Documented features and published prices only, not a hands-on test. Prices are USD per month.
            &ldquo;Not documented on our sources&rdquo; means we could not confirm it, not that it is missing.
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
          <h2 id="detail">The best-documented portals</h2>

          <h3>Housecall Pro</h3>
          <p>
            Housecall Pro&rsquo;s help center says the Customer Portal lets customers &ldquo;view upcoming and past
            bookings, pay an invoice, and communicate appointment changes.&rdquo; Customers can view all estimates
            and approve open ones, pay invoices with View &amp; Pay, book online, and use a Wallet tab to add,
            update or remove a saved card when you take payments through Housecall Pro. A Send a Message button
            lets them ask for a new, rescheduled or canceled appointment, but it only shows if you have a custom
            SMS number and a registered business, and the Book online button needs the customer&rsquo;s first and
            last name on their profile. Its commercial page also lists a customer portal for commercial customers.
            The help articles do not say which plan includes the portal; plans start at Basic, $59 a month billed
            annually for one user. See <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>Workiz</h3>
          <p>
            Workiz&rsquo;s client portal page says clients can view and approve estimates and sales proposals, pay
            one at a time or in bulk by card, ACH, Google Pay, Apple Pay or consumer financing, see upcoming
            appointments, make a new booking, review job history, and see documents, pictures and service plans.
            You decide which documents, jobs, invoices or plans are shared. Its pricing page lists the client
            portal on Standard, so it is on every plan, but Workiz does not publish prices. See{' '}
            <Link href="/pricing/workiz" className={A}>Workiz pricing</Link>.
          </p>

          <h3>FieldPulse</h3>
          <p>
            FieldPulse&rsquo;s portal has up to eight tabs: Home (contact details, editable if you allow it),
            Submit Request (which opens your booking portal), My Jobs, My Projects with a completion percentage,
            My Estimates (open, download, print and accept), My Invoices (shown as PDFs), My Payments (the full
            payment record) and My Assets, with each asset&rsquo;s update history and files. The article does not
            say customers can pay invoices in the portal. Tab permissions apply to every customer at once, so you
            cannot hide a tab for one customer only. No plan or add-on is named. See{' '}
            <Link href="/pricing/fieldpulse" className={A}>FieldPulse pricing</Link>.
          </p>

          <h3>Jobber</h3>
          <p>
            Jobber lists the client hub on Core, its entry plan at $29 a month billed annually for one user.
            Customers can approve a quote with a drawn or typed signature, and when you add a deposit the quote
            shows an Approve and Pay Deposit button. Cards paid online through an invoice or the client hub cost
            2.9% + 30¢. Online booking and request forms are on every plan. Our sources do not describe job
            history or saved cards in the hub. See <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>Kickserv</h3>
          <p>
            Kickserv&rsquo;s Customer Center help article, dated October 2023, says customers can request work
            through a Contact Form button, view, download and print estimates, see open invoices and pay by card
            through Stripe, with Klarna if you turn it on. Its features page describes a portal where customers
            &ldquo;view all interactions.&rdquo; No plan is stated; Start costs $60 a month for 5 users. See{' '}
            <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link>.
          </p>

          <h3>ServiceTitan</h3>
          <p>
            ServiceTitan&rsquo;s help center says commercial customers see their Contracts in the customer portal,
            and its trade pages add more: customers book appointments, track jobs and pay bills (gutter), see the
            tech&rsquo;s location and schedule jobs (locksmith), see their last inspection date (septic) and check
            pool chemical readings (pool). It does not say which package includes the portal. ServiceTitan is
            quote only, with Core, Demand AI, Field AI and MAX packages, and its 10-K says pricing is generally
            based on the number of users. See <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link>.
          </p>

          <h2 id="tier">Portals on a higher tier</h2>
          <p>
            <strong>GorillaDesk</strong> lists its Customer Portal on Pro, $99 a month for the first route
            against $49 for Basic, so the portal is part of a $50 a month step up per first route that also adds
            online booking, e-signatures and QuickBooks Online sync. See{' '}
            <Link href="/pricing/gorilladesk" className={A}>GorillaDesk pricing</Link>.{' '}
            <strong>Service Fusion</strong> includes its customer web portal on Pro ($552 a month billed annually)
            and sells it as an add-on on Starter and Plus without a published price; Pro costs $213 a month more
            than Plus ($339) and also adds eSign, progress billing and the open API. See{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.{' '}
            <strong>FieldEdge</strong> includes its Consumer Management Portal on Elite and prices it on request
            on Select and Premier; its portal page describes submitting requests for service. See{' '}
            <Link href="/pricing/fieldedge" className={A}>FieldEdge pricing</Link>.{' '}
            <strong>ServiceTrade</strong> lists a customer service portal on Commercial Premium and a customer
            portal on Fire Premium, priced by quote. See{' '}
            <Link href="/pricing/servicetrade" className={A}>ServiceTrade pricing</Link>.{' '}
            <strong>Commusoft</strong>&rsquo;s portal sends job updates to site managers and invoices to head
            office, which suits commercial accounts; it is quote only. See{' '}
            <Link href="/pricing/commusoft" className={A}>Commusoft pricing</Link>.
          </p>

          <h2 id="none">No built-in portal documented</h2>
          <p>
            <strong>ServiceM8</strong> lets customers accept quotes online, choose between quote options and sign
            remotely on every plan, and includes online booking even on its $0 plan, but we found no built-in
            client portal on its pricing page or add-on directory. See{' '}
            <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link>.{' '}
            <strong>Tradify</strong>&rsquo;s enquiry page describes online forms and email to collect leads and
            online payments through Stripe, and mentions no customer portal or client login. See{' '}
            <Link href="/pricing/tradify" className={A}>Tradify pricing</Link>.
          </p>
        </div>

        <section className="mt-12" id="access">
          <h2 className={H2}>How customers get in</h2>
          <p className={SUB}>What each vendor documents about logging in.</p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Software</th>
                  <th scope="col" className="p-3.5">Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {access.map((r) => (
                  <tr key={r.vendor} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.vendor}</th>
                    <td className="p-3.5">{r.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="choose">How to choose</h2>
          <ul>
            <li><strong>Portal on the entry plan</strong>: Jobber Core and every Workiz plan list one.</li>
            <li><strong>Saved cards and self-service payment</strong>: Housecall Pro documents a Wallet tab; Workiz documents bulk payment and several payment methods.</li>
            <li><strong>Equipment and project history</strong>: FieldPulse shows assets and projects; ServiceTitan shows contracts and trade data such as inspection dates.</li>
            <li><strong>Maintenance plans</strong>: Workiz shows service plans in the portal; for how plans are sold and billed, see <Link href="/guides/hvac-maintenance-agreement-software" className={A}>HVAC maintenance agreement software</Link>.</li>
            <li><strong>Commercial accounts</strong>: ServiceTitan, Commusoft, ServiceTrade and Housecall Pro describe portals for commercial customers; see <Link href="/guides/commercial-hvac-software" className={A}>commercial HVAC software</Link>.</li>
          </ul>
          <p>
            Where a vendor names no plan, ask which plan includes the portal and get the answer in writing. In a
            demo, ask to open the portal as a customer would, from the email or text they actually receive. Our
            method is described on <Link href="/how-we-review" className={A}>how we review</Link>.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            If you want a portal without paying for a higher tier, Jobber Core and Workiz list one on their entry
            plans. Housecall Pro, Workiz and FieldPulse document the most of what customers can do. GorillaDesk,
            Service Fusion, FieldEdge and ServiceTrade put the portal on a higher tier, so price it as part of
            that upgrade.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/guides/field-service-quoting-software" className="text-orange-600 hover:text-orange-800">Field service quoting software →</Link>
            <Link href="/guides/field-service-invoicing-software" className="text-orange-600 hover:text-orange-800">Field service invoicing software →</Link>
            <Link href="/guides/field-service-scheduling-software" className="text-orange-600 hover:text-orange-800">Field service scheduling software →</Link>
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
