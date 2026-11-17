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
 * /compare/housecall-pro-vs-servicetitan: head-to-head for "housecall pro vs servicetitan"
 * (and the reversed word order).
 *
 * Scope vs other pages: /compare ranks six tools by published price and fit; /pricing and
 * /pricing/housecall-pro hold the full price, add-on and fee detail. This page is the
 * two-vendor decision: pricing model, contract and onboarding, dispatch, offline, reporting
 * and buyer scenarios. Fees and full plan detail are linked, not repeated.
 *
 * Sources: Housecall Pro pricing and help center; ServiceTitan pricing, feature pages, help
 * center and Terms of Use; ServiceTitan's Form 10-K for the fiscal year ended January 31, 2026
 * (contract terms, onboarding fees, customer range). All checked 2026-11-17. ServiceTitan
 * publishes no prices, so none are shown: no third-party estimates, no ratings, nothing
 * tested hands-on.
 */

const PATH = '/compare/housecall-pro-vs-servicetitan'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Housecall Pro vs ServiceTitan (2026): Price, Fit & Features'
const DESCRIPTION =
  'Housecall Pro vs ServiceTitan: published vs quote-only pricing, contracts, onboarding, dispatch, offline mobile use and reporting, from vendor documents.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/housecall-pro-vs-servicetitan',
  type: 'article',
  modifiedTime: contentUpdated,
  // 59-char keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Housecall Pro vs ServiceTitan', href: PATH },
]

const quick: { label: string; hcp: string; st: string }[] = [
  { label: 'Pricing model', hcp: 'Published: Basic $59, Essentials $149, Max $299 per month billed annually ($79, $189, $329 monthly)', st: 'Quote only, priced per technician; every package says “Request Pricing”' },
  { label: 'Users per plan', hcp: '1, 5 and 8 users; Max adds users at $35/month each', st: 'Per technician; Terms of Use allow a minimum subscription level' },
  { label: 'Free trial', hcp: '14 days with Max features, no credit card', st: 'No trial; demo only' },
  { label: 'Contract', hcp: 'No long-term contract required', st: '10-K: new customers mostly on annual or multi-year agreements, typically 12 to 36 months' },
  { label: 'Onboarding', hcp: 'Max includes a dedicated onboarding specialist and a 4-week onboarding journey', st: 'Implementation consultant; onboarding and training fees generally invoiced separately (10-K)' },
  { label: 'Dispatch', hcp: 'Scheduling and dispatch on every plan; route grouping on Essentials, one-click route optimization on Max', st: 'Dispatch Board, Optimize Technician Route and Adjust Capacity Planning; Dispatch Pro add-on for automated assignment' },
  { label: 'Online booking', hcp: 'Included from Basic, from Google or your website', st: 'Scheduling Pro add-on' },
  { label: 'GPS', hcp: 'Phone-based employee GPS from Essentials; vehicle GPS is an add-on', st: 'Technician locations on the dispatch map; live vehicle GPS with the Fleet Pro add-on' },
  { label: 'Offline mobile', hcp: 'View-only: jobs for today and the next 2 days, up to 10 per day; no editing, payments or job completion', st: 'Most job work offline (status, time, signatures, notes, photos, estimates); purchase orders, financing, contracts, inventory availability and dynamic pricing need a connection' },
  { label: 'Reporting', hcp: 'Up to 40 out-of-the-box reports plus custom reports you can save, share and schedule', st: 'Dashboards, scorecards and custom reports; custom reports depend on your package; Advanced Reporting in The Works' },
  { label: 'Memberships', hcp: 'Recurring Service Plans listed on Max', st: 'Customizable Memberships in The Works' },
  { label: 'Estimates', hcp: 'Estimates from Basic; side-by-side sales proposal tool on Max', st: 'Mobile Estimates from Essentials; Good, Better, Best proposal types' },
]

const scenarios: { who: string; pick: string; why: string }[] = [
  {
    who: 'Owner-operator or crew of 2 to 5, residential service',
    pick: 'Housecall Pro',
    why: 'Published price ($59 for 1 user or $149 for up to 5, billed annually), a 14-day trial and no long-term contract. ServiceTitan’s per-technician quote and implementation process are built for a heavier rollout.',
  },
  {
    who: '6 to 15 technicians selling maintenance plans',
    pick: 'Housecall Pro Max, or demo both',
    why: 'Max covers 8 users for $299/month billed annually plus $35 per extra user (12 users = $439/month) and lists Recurring Service Plans. Get a written ServiceTitan quote for the same technicians before deciding.',
  },
  {
    who: 'Technicians often work without signal',
    pick: 'ServiceTitan',
    why: 'ServiceTitan documents most job work offline with automatic sync. Housecall Pro’s offline mode is view-only, so technicians cannot finish a job or take payment until they reconnect.',
  },
  {
    who: 'Call center, capacity planning or multiple locations',
    pick: 'ServiceTitan',
    why: 'Call booking is in every package, and it documents capacity planning, technician scorecards and package-based custom reporting. Dispatch Pro and Scheduling Pro add automation as paid add-ons.',
  },
  {
    who: 'Commercial or construction work with progress billing',
    pick: 'ServiceTitan',
    why: 'ServiceTitan documents progress billing applications and project budgets for long-term projects, and its 10-K describes multi-party and progress billing.',
  },
]

const faqs = [
  {
    question: 'Is Housecall Pro cheaper than ServiceTitan?',
    answer:
      'Housecall Pro is the only one of the two with published prices: $59/month for 1 user, $149 for up to 5 and $299 for 8, billed annually. ServiceTitan prices per technician by quote, and its 10-K says onboarding and training fees are generally invoiced separately, so compare written totals for the same number of technicians, add-ons, onboarding and contract length.',
  },
  {
    question: 'Does ServiceTitan have a free trial?',
    answer:
      'No trial is offered on its pricing page; ServiceTitan offers demos. Housecall Pro offers a 14-day free trial with Max features and no credit card.',
  },
  {
    question: 'Does ServiceTitan require a contract?',
    answer:
      'ServiceTitan’s Form 10-K says new customers primarily sign annual or multi-year agreements with terms typically from 12 to 36 months, while some Pro product and legacy customers are month-to-month. Its Terms of Use say fees are non-refundable unless agreed otherwise in writing. Housecall Pro says it does not require long-term contracts.',
  },
  {
    question: 'Which works better offline, Housecall Pro or ServiceTitan?',
    answer:
      'ServiceTitan. Its Field Mobile App handles job status, time tracking, signatures, notes, photos and estimates offline and syncs automatically; purchase orders, financing, contracts, inventory availability and dynamic pricing need a connection. Housecall Pro’s offline mode is view-only and covers jobs for today and the next two days.',
  },
  {
    question: 'Is ServiceTitan only for large companies?',
    answer:
      'ServiceTitan says its customers range from family-owned businesses with a few employees to large enterprises with a national footprint. In practice its per-technician quote, typical 12 to 36 month terms and separate onboarding fees suit businesses ready for a larger rollout, while Housecall Pro’s published plans and no-contract terms are easier for small teams to start on.',
  },
  {
    question: 'Can I switch from Housecall Pro to ServiceTitan later?',
    answer:
      'Yes, but plan the data move. ServiceTitan’s implementation runs through pre-implementation, implementation with an implementation consultant and data quality analysts, and go-live. Export customers, jobs, price book and service plans from Housecall Pro first, and ask ServiceTitan what it imports and what the onboarding fee covers.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, trial, contract FAQ, plan features)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-17' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Housecall Pro help: Max onboarding and support', url: 'https://help.housecallpro.com/en/articles/4936654-max-onboarding-support-overview', checked: '2026-11-17' },
  { name: 'Housecall Pro help: managing reports', url: 'https://help.housecallpro.com/en/articles/7336458-managing-reports', checked: '2026-11-17' },
  { name: 'ServiceTitan pricing (packages, per-technician, request pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-17' },
  { name: 'ServiceTitan dispatch software (Dispatch Pro add-on, capacity planning)', url: 'https://www.servicetitan.com/features/dispatch-software', checked: '2026-11-17' },
  { name: 'ServiceTitan help: dispatch and track technicians (Fleet Pro)', url: 'https://help.servicetitan.com/docs/dispatch-and-track-your-technicians', checked: '2026-11-17' },
  { name: 'ServiceTitan help: Scheduling Pro online booking', url: 'https://help.servicetitan.com/docs/set-up-your-online-scheduler-with-scheduling-pro-in-servicetitan-max', checked: '2026-11-17' },
  { name: 'ServiceTitan help: Field Mobile App offline capabilities', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-17' },
  { name: 'ServiceTitan help: reports and dashboards (custom reports by package)', url: 'https://help.servicetitan.com/docs/measure-performance-and-make-decisions', checked: '2026-11-17' },
  { name: 'ServiceTitan help: estimates (Good, Better, Best)', url: 'https://help.servicetitan.com/docs/build-estimates-and-close-sales', checked: '2026-11-17' },
  { name: 'ServiceTitan help: long-term projects (progress billing)', url: 'https://help.servicetitan.com/docs/long-term-projects', checked: '2026-11-17' },
  { name: 'ServiceTitan help: getting started and implementation', url: 'https://help.servicetitan.com/commercial/docs/getting-started-with-servicetitan-home', checked: '2026-11-17' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-17' },
  { name: 'ServiceTitan Form 10-K, fiscal year ended January 31, 2026 (SEC)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-17' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HousecallProVsServiceTitanPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/housecall-pro-vs-servicetitan"
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
            Housecall Pro vs ServiceTitan <span className="text-orange-400">(2026)</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Published versus quote-only pricing, contracts, onboarding, dispatch, offline use and
            reporting, from each vendor’s own pages and ServiceTitan’s annual report, checked
            November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Housecall Pro</strong> fits small and growing home service teams that want a
            published price, a free trial and no long-term contract: plans start at $59/month for one
            user and reach $299/month for eight, billed annually. <strong>ServiceTitan</strong> fits
            operations ready for a larger rollout: it prices per technician by quote, typically signs
            new customers to 12 to 36 month agreements with separately invoiced onboarding, and
            documents deeper dispatch, capacity planning and offline mobile work. If your technicians
            often lose signal, that last point matters: Housecall Pro’s offline mode is view-only.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="at-a-glance">
          <h2 className={H2}>Housecall Pro vs ServiceTitan at a glance</h2>
          <p className={SUB}>
            Documented capabilities only, not a hands-on test or a score. Prices are USD regular
            rates. Sources and check dates are at the end of this page.
          </p>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 md:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="w-[22%] p-3.5"> </th>
                  <th scope="col" className="p-3.5">Housecall Pro</th>
                  <th scope="col" className="p-3.5">ServiceTitan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {quick.map((r) => (
                  <tr key={r.label} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.label}</th>
                    <td className="p-3.5">{r.hcp}</td>
                    <td className="p-3.5">{r.st}</td>
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
                    <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">Housecall Pro</dt>
                    <dd className="text-slate-700 dark:text-slate-300">{r.hcp}</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">ServiceTitan</dt>
                    <dd className="text-slate-700 dark:text-slate-300">{r.st}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: published plans vs a per-technician quote</h2>
          <p>
            Housecall Pro publishes three plans. Basic is $59/month for one user, Essentials $149 for
            five users and Max $299 for eight users, all billed annually; month-to-month billing costs
            $79, $189 and $329. Max adds users at $35/month each, so a 12-user team on Max pays $439/month
            billed annually before add-ons and payment fees. The 14-day trial includes Max features
            without a credit card, and Housecall Pro says it does not require long-term contracts.
            Add-ons such as voice, payroll and vehicle GPS are listed without prices; see{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> for every plan
            detail and card fee.
          </p>
          <p>
            ServiceTitan publishes no prices. Its pricing page says “Our per-technician pricing is
            designed to fit your business and goals, at any size,” and each of its three packages has a
            “Request Pricing” button:
          </p>
          <ul>
            <li><strong>Starter:</strong> dispatching, scheduling, call booking, invoicing and pricebook.</li>
            <li><strong>Essentials:</strong> adds mobile estimates and payroll management.</li>
            <li>
              <strong>The Works:</strong> adds configurable payroll, advanced reporting, commission
              tracking and customizable memberships.
            </li>
          </ul>
          <p>
            Pro products such as Dispatch Pro, Scheduling Pro, Fleet Pro, Marketing Pro and Contact
            Center Pro are sold on top. ServiceTitan’s annual report adds the terms buyers rarely see on
            comparison sites: new customers primarily sign annual or multi-year agreements with terms
            typically from 12 to 36 months, and fees for professional services such as onboarding and
            training are generally invoiced separately at the start of the contract. Its Terms of Use
            say fees are non-refundable unless agreed otherwise in writing.
          </p>
          <p>
            <strong>To compare fairly,</strong> ask ServiceTitan for a written quote that lists the
            per-technician rate, the package, each Pro add-on, the onboarding fee and the contract
            term, then put it next to Housecall Pro’s published price for the same number of users plus
            the add-ons you would need. Our{' '}
            <Link href="/pricing" className={A}>field service software pricing</Link> guide covers
            payment processing fees, which apply on top of both.
          </p>

          <h2 id="team-size">Which team size each one fits</h2>
          <p>
            Housecall Pro’s published plans top out at eight included users on Max, with extra users at
            $35/month, and it markets to home service pros. ServiceTitan says it serves customers
            “ranging from family-owned businesses with a few employees to large enterprises with a
            national footprint,” and reports about 10,800 Active Customers (those with over $10,000 of
            annualized billings) as of January 31, 2026. Neither vendor sets a hard team-size limit, so
            the practical divide is commercial: published, contract-free plans on one side and a
            quoted, multi-year rollout with onboarding fees on the other. For more on matching software
            to team size, see{' '}
            <Link href="/by-size" className={A}>field service software by business size</Link>.
          </p>

          <h2 id="scheduling-dispatch">Scheduling and dispatch</h2>
          <p>
            Housecall Pro puts scheduling, dispatch and online booking on every plan, adds route grouping and phone-based employee GPS tracking on
            Essentials, and one-click route optimization using live traffic on Max. ServiceTitan’s
            Dispatch Board lets dispatchers reschedule by dragging an appointment, optimize one
            technician’s route for the day, and adjust capacity planning. Automated technician
            assignment (Dispatch Pro), online booking with capacity rules (Scheduling Pro) and live
            vehicle GPS (Fleet Pro) are add-ons. Housecall Pro includes online booking from Basic;
            ServiceTitan charges for it through Scheduling Pro.
          </p>

          <h2 id="offline">Offline mobile use</h2>
          <p>
            This is the clearest functional difference. Housecall Pro’s help center says offline mode
            is view-only: the app downloads jobs for today and the next two days, up to 10 per day, and
            “you will need a connection to make changes, collect payment, or finish a job.”
            ServiceTitan says most core workflows, including job status updates, time tracking,
            signatures, notes, photos and estimates, work offline and sync automatically when the
            connection returns. Purchase orders, customer financing, contracts and inventory
            availability need a connection, payments captured offline are not finalized until the
            device reconnects, and dynamic pricing needs a connection while standard pricebook pricing
            works offline.
          </p>

          <h2 id="reporting">Reporting</h2>
          <p>
            Housecall Pro offers up to 40 out-of-the-box reports and lets you create, filter, share,
            schedule and save custom reports from the dashboard. ServiceTitan provides dashboards,
            technician scorecards and custom reports, but its help center says “the ability to create
            custom reports depends on the ServiceTitan package your company is subscribed to,” and its
            pricing page lists Advanced Reporting in The Works only.
          </p>

          <h2 id="features">Estimates, memberships and other features</h2>
          <ul>
            <li>
              <strong>Estimates:</strong> Housecall Pro includes estimates from Basic and adds a
              side-by-side sales proposal tool on Max. ServiceTitan supports Good, Better, Best
              proposal types, with mobile estimates from its Essentials package.
            </li>
            <li>
              <strong>Memberships:</strong> Housecall Pro lists Recurring Service Plans on Max;
              ServiceTitan lists customizable memberships in The Works.
            </li>
            <li>
              <strong>Pricebook:</strong> Housecall Pro includes a price book from Basic and flat-rate
              pricing from Essentials. ServiceTitan includes a pricebook in every package, with
              Pricebook Pro as an add-on.
            </li>
            <li>
              <strong>Commercial and construction:</strong> ServiceTitan documents progress billing
              applications and project budgets for long-term projects.
            </li>
            <li>
              <strong>QuickBooks:</strong> Housecall Pro syncs with QuickBooks Online from Essentials;
              both vendors document QuickBooks Desktop support. See our{' '}
              <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
            </li>
          </ul>

          <h2 id="onboarding">Onboarding and support</h2>
          <p>
            Housecall Pro’s Max plan includes a dedicated onboarding specialist and a 4-week onboarding
            journey with weekly training calls, after which Max customers move to its Key Accounts
            Success Team. Every Housecall Pro plan includes live phone and chat support, and Max adds
            escalated phone support. ServiceTitan’s
            onboarding runs in stages: pre-implementation, implementation with an implementation
            consultant and data quality analysts, then go-live. It does not publish a standard timeline
            in its help center, and its 10-K says onboarding and training fees are invoiced separately.
          </p>

          <h2 id="limitations">Limitations to weigh</h2>
          <ul>
            <li>
              <strong>Housecall Pro:</strong> offline mode is view-only; route optimization and
              Recurring Service Plans are listed on Max; add-on prices are not published.
            </li>
            <li>
              <strong>ServiceTitan:</strong> no published price or trial; typical 12 to 36 month terms
              and separate onboarding fees; online booking, automated dispatch and fleet GPS are paid
              add-ons; custom reporting depends on the package.
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
            Comparing Housecall Pro with a cheaper option instead? Read{' '}
            <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>,
            or see all six major platforms in our{' '}
            <Link href="/compare" className={A}>field service software comparison</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Housecall Pro vs ServiceTitan">
            Choose Housecall Pro if you want to see the price first, start with a 14-day trial and
            avoid a long-term contract; it covers up to eight users for $299/month billed annually.
            Choose ServiceTitan if you need offline job work, capacity planning or commercial project
            billing and are ready for a quoted, typically 12 to 36 month agreement with separate
            onboarding fees. Our <Link href="/how-we-review" className={A}>review method</Link>{' '}
            explains why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
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
