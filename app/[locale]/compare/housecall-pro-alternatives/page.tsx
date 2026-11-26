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
 * /compare/housecall-pro-alternatives: targets "housecall pro alternatives" and
 * "housecall pro competitors". No GSC data for this topic yet.
 *
 * Sources: Housecall Pro facts reuse the site's verified pages (pricing page copy saved
 * 2026-11-19; help center articles 2026-11-17 to 2026-11-21); www.housecallpro.com was not
 * refetched. New 2026-11-21 checks: ServiceM8 and Kickserv pricing, Jobber client import,
 * Housecall Pro export help article, ServiceTitan's Housecall Pro export guide. Other vendor
 * facts keep their original check dates. Nothing tested hands-on. We do not claim why
 * customers leave Housecall Pro.
 */

const PATH = '/compare/housecall-pro-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Housecall Pro Alternatives (2026): Prices by Team Size Compared'
const DESCRIPTION =
  'Compare 8 Housecall Pro alternatives on price at 5, 8 and 10 users, route optimization, service plans, offline mode and QuickBooks Desktop. From vendor pages.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/housecall-pro-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Housecall Pro alternatives', href: PATH },
]

type Row = {
  name: string
  price: string
  team: string
  plans: string
  offline: string
  quickbooks: string
}

const rows: Row[] = [
  {
    name: 'Housecall Pro (for reference)',
    price: '$59, $149, $299 per month billed annually (1, 5, 8 users); $35 per extra user on MAX',
    team: '5 users $149 (Essentials); 8 users $299 (MAX); 10 users $369 (MAX plus 2 users)',
    plans: 'Recurring Service Plans and route optimization on MAX',
    offline: 'View only: today and the next 2 days',
    quickbooks: 'Online and Desktop listed on Essentials',
  },
  {
    name: 'Jobber',
    price: 'From $29 per month billed annually (1 user)',
    team: '5 users $149 (Connect) or $229 (Grow); 10 users $229 (Connect) or $299 (Grow)',
    plans: 'Recurring jobs with automatic payments from Connect; route optimization from Connect',
    offline: 'Timers, checklists, notes and attachments sync later',
    quickbooks: 'Online only (and Xero), from Connect',
  },
  {
    name: 'Service Fusion',
    price: '$220, $339, $552 per month billed annually; unlimited users',
    team: '$220 at any team size on Starter',
    plans: 'Recurring invoicing on Pro, add-on below',
    offline: 'Partial offline mode since June 2026: view jobs, edit notes, photos and checklists; no payments',
    quickbooks: 'Online and Desktop',
  },
  {
    name: 'Kickserv',
    price: '$60 (5 users), $119 (10 users), $199 (20 users) per month; 20% off annual',
    team: '5 users $60; 8 or 10 users $119',
    plans: 'No service-agreement module listed on its pricing page',
    offline: 'Its changelog mentions offline functionality; scope not stated',
    quickbooks: 'Online on Start; Desktop $50 a month extra on Run',
  },
  {
    name: 'ServiceM8',
    price: '$0 to $349 per month by jobs per month; unlimited users from $29',
    team: 'Priced by jobs, not users',
    plans: 'Recurring jobs and auto routing on all plans',
    offline: 'App works without internet',
    quickbooks: 'Online and Xero; Desktop not listed',
  },
  {
    name: 'ServiceTitan',
    price: 'Not published (“Get Pricing”); packages Core, Demand AI, Field AI and MAX',
    team: 'Quote only',
    plans: 'Memberships; service agreements that can auto-renew',
    offline: 'Most job work offline',
    quickbooks: 'Online and Desktop, Sage Intacct, Xero',
  },
  {
    name: 'Workiz',
    price: 'Quote only (“Request pricing”)',
    team: 'Quote only',
    plans: 'Service plans on Ultimate only',
    offline: 'Job details and updates sync later',
    quickbooks: 'Online on every plan; its QuickBooks page says Desktop is supported',
  },
  {
    name: 'FieldPulse',
    price: 'Quote only, seat-based',
    team: 'Quote only',
    plans: 'Maintenance agreements placed on the schedule automatically',
    offline: 'Offline mode caches jobs for a week',
    quickbooks: 'Online and Desktop 2024 or newer',
  },
  {
    name: 'FieldEdge',
    price: 'Quote only; no free trial',
    team: 'Quote only',
    plans: 'Basic agreements on Select; advanced on Premier and Elite',
    offline: 'Offline mode for Mobile 2.0 listed as in development',
    quickbooks: 'Online and Desktop on every plan',
  },
]

const cols: { key: keyof Omit<Row, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price' },
  { key: 'team', label: 'Cost by team size (annual)' },
  { key: 'plans', label: 'Service plans and routing' },
  { key: 'offline', label: 'Offline' },
  { key: 'quickbooks', label: 'QuickBooks' },
]

const faqs = [
  {
    question: 'What is the cheapest Housecall Pro alternative?',
    answer:
      'For one user, Jobber Core is $29 a month billed annually, against $59 for Housecall Pro Basic. ServiceM8 has a $0 plan for one user and 30 jobs a month and a $29 plan with unlimited users. For a team of five, Kickserv lists $60 a month for 5 users.',
  },
  {
    question: 'How much does Housecall Pro cost for 10 users, and what do the alternatives charge?',
    answer:
      'Housecall Pro MAX is $299 a month billed annually for 8 users plus $35 per extra user, so about $369 for 10. Jobber’s 10-user bands are $229 on Connect and $299 on Grow billed annually, Kickserv’s Run plan is $119 for 10 users, and Service Fusion starts at $220 with unlimited users.',
  },
  {
    question: 'Which Housecall Pro alternatives work offline?',
    answer:
      'Housecall Pro’s app is view-only offline. ServiceTitan lets techs do most job work offline, FieldPulse caches jobs for a week, Workiz and ServiceM8 say their apps work without a connection, and Jobber keeps timers, checklists, notes and attachments working offline.',
  },
  {
    question: 'Which alternatives support QuickBooks Desktop?',
    answer:
      'ServiceTitan, Service Fusion, FieldPulse (Desktop 2024 or newer) and FieldEdge document QuickBooks Desktop, Workiz’s QuickBooks page says it supports Desktop, and Kickserv charges $50 a month for it on Run. Jobber and ServiceM8 list QuickBooks Online but not Desktop.',
  },
  {
    question: 'How do I export my data from Housecall Pro?',
    answer:
      'Housecall Pro’s help center says only Admins can export the Customers and Jobs lists, and the file is sent by email. ServiceTitan’s migration guide also lists a Housecall Pro Estimates report. Set date ranges to your full history and save service plan details and photos separately, since we found no documented export for them.',
  },
  {
    question: 'Which alternatives include service plans without the top plan?',
    answer:
      'Jobber runs agreements as recurring jobs with automatic payments from its Connect plan. FieldPulse and ServiceTitan include agreements but price by quote. Workiz puts service plans on Ultimate only, and Service Fusion includes recurring invoicing on Pro.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, MAX extra users, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Housecall Pro help: import and export jobs and customers', url: 'https://help.housecallpro.com/en/articles/6797101-how-to-import-export-jobs-and-customers', checked: '2026-11-21' },
  { name: 'Housecall Pro help: payment processing options', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-20' },
  { name: 'Jobber pricing (team bands, trial, fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-03' },
  { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: offline use', url: 'https://help.getjobber.com/hc/en-us/articles/360037203234-Troubleshooting-Tips-How-to-Help-Us-Help-You', checked: '2026-11-20' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: import clients', url: 'https://help.getjobber.com/en/articles/import-clients/', checked: '2026-11-21' },
  { name: 'Service Fusion pricing', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-20' },
  { name: 'Service Fusion Subscription Agreement (auto-renewal, 30 days’ notice)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
  { name: 'Service Fusion blog: implementation and data import', url: 'https://www.servicefusion.com/blog/overview-of-implementation', checked: '2026-11-20' },
  { name: 'Service Fusion blog: introducing offline mode (June 22, 2026)', url: 'https://www.servicefusion.com/blog/introducing-offline-mode', checked: '2026-11-24' },
  { name: 'Housecall Pro help: vehicle GPS tracking (Force, $20 per vehicle a month)', url: 'https://help.housecallpro.com/en/articles/6060351-vehicle-gps-tracking-overview', checked: '2026-11-24' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-21' },
  { name: 'Kickserv changelog (offline)', url: 'https://changelog.kickserv.com/', checked: '2026-11-21' },
  { name: 'ServiceM8 pricing (plans, auto routing, offline, recurring jobs)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-21' },
  { name: 'ServiceM8 help: import materials and clients', url: 'https://support.servicem8.com/hc/en-us/articles/200273634-How-to-import-Materials-and-Clients', checked: '2026-11-21' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI and MAX packages; Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan help: export your Housecall Pro data', url: 'https://help.servicetitan.com/docs/export-your-housecall-pro-data', checked: '2026-11-21' },
  { name: 'ServiceTitan help: field mobile app offline capabilities', url: 'https://help.servicetitan.com/docs/servicetitan-field-mobile-app-offline-capabilities', checked: '2026-11-17' },
  { name: 'ServiceTitan 10-K (contract terms)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-19' },
  { name: 'Workiz pricing plans', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-20' },
  { name: 'Workiz mobile app (offline)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-20' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-20' },
  { name: 'FieldPulse pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-20' },
  { name: 'FieldPulse help: offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-11-20' },
  { name: 'FieldPulse help: QuickBooks Desktop pre-sync', url: 'https://help.fieldpulse.com/en/articles/8292219-pre-sync-quickbooks-desktop', checked: '2026-11-20' },
  { name: 'FieldEdge pricing', url: 'https://fieldedge.com/pricing/', checked: '2026-11-20' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HousecallProAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/housecall-pro-alternatives"
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
            Housecall Pro alternatives: <span className="text-orange-400">8 tools compared by team size</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Price at 5, 8 and 10 users, service plans, route optimization, offline mode and
            QuickBooks Desktop, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Housecall Pro caps users per plan (1, 5 and 8) and puts Recurring Service Plans and route
            optimization on MAX. If you want a cheaper start, <strong>Jobber</strong> is $29/month for
            one user and puts route optimization on Connect. For larger teams on one price,{' '}
            <strong>Service Fusion</strong> has unlimited users from $220/month and{' '}
            <strong>Kickserv</strong> lists 10 users for $119. If your techs work without signal,{' '}
            <strong>ServiceTitan</strong> and <strong>FieldPulse</strong> document more offline work
            than Housecall Pro’s view-only mode, but both price by quote. Prices are billed annually
            unless noted.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="housecall-pro">What Housecall Pro includes, plan by plan</h2>
          <p>
            Housecall Pro publishes three plans: Basic at $59 a month billed annually for one user,
            Essentials at $149 for up to five users, and MAX at $299 for up to eight, with $35 a month
            for each extra user on MAX. Routes and phone GPS start on Essentials, and its plan data
            lists customer equipment tracking and QuickBooks Online and Desktop there. One-click
            route optimization and Recurring Service Plans are on MAX. Its app works offline in view
            mode only, showing jobs for today and the next two days. Some add-ons, such as the sales
            proposal tool, have no published price; vehicle GPS is $20 per vehicle a month through
            Force, according to its help center. Its HVAC page shows a
            separate, higher-priced HVAC package. Full detail is in our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> guide.
          </p>

          <h2 id="when-to-stay">When Housecall Pro may still be the better fit</h2>
          <p>
            Housecall Pro publishes its prices, offers a 14-day trial of MAX features, does not
            require a long-term contract, and charges 2.59% for in-person card payments. For a crew
            of up to five on Essentials, it lists QuickBooks Desktop, flat-rate pricing and equipment
            tracking at $149 a month. If none of the limits above affects you, switching may not save
            much.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Housecall Pro alternatives compared</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Team
            costs are arithmetic on published annual rates. Sources and check dates are at the end.
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
                {rows.map((t) => (
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
            {rows.map((t) => (
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
          <h2 id="alternatives">The alternatives</h2>

          <h3>Jobber</h3>
          <p>
            <strong>Best fit:</strong> small crews that want a lower entry price and route optimization
            below the top plan. Core is $29 a month billed annually for one user, and Jobber prices
            larger teams in bands: 10 users cost $229 on Connect or $299 on Grow. Route optimization
            starts on Connect, and the app keeps timers, checklists, notes and attachments working
            offline. <strong>Limitation:</strong> QuickBooks Online only, and no membership module;
            agreements run as recurring jobs with automatic payments that Jobber tries once. See{' '}
            <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>Best fit:</strong> growing teams that want one price regardless of users. Plans
            are $220, $339 and $552 a month billed annually with unlimited users, month-to-month
            terms, and QuickBooks Online and Desktop. It offers import templates for customers,
            locations, service agreements, estimates, jobs and equipment. Its Subscription Agreement renews the ordered term automatically for the same length unless you give 30 days’ written notice before it ends, so check the term on your order.{' '}
            <strong>Limitation:</strong> at five users it costs more than Housecall Pro Essentials,
            recurring invoicing is included only on Pro, route optimization is not documented on the
            pages we read, and its offline mode, added in June 2026, lets techs view jobs and edit
            notes, photos and checklists but not take payments.
          </p>

          <h3>Kickserv</h3>
          <p>
            <strong>Best fit:</strong> price-sensitive teams of 5 to 20. Kickserv lists $60 a month for
            5 users, $119 for 10 and $199 for 20, with 20% off annual billing and a 30-day trial.
            QuickBooks Online is on Start, and QuickBooks Desktop costs $50 a month on Run.{' '}
            <strong>Limitation:</strong> its pricing page lists dispatch mapping but no route
            optimization or service-agreement module, and its changelog mentions offline use without
            saying what works.
          </p>

          <h3>ServiceM8</h3>
          <p>
            <strong>Best fit:</strong> small teams with modest job counts. Plans are priced by jobs a
            month, from $0 for 30 jobs to $349 for 1,500 or more, with unlimited users from the $29
            Starter plan. Auto routing, recurring jobs and offline use are listed on all plans.{' '}
            <strong>Limitation:</strong> a busy shop moves up plans by job count, QuickBooks Desktop is
            not listed, and its online card rate starts at 3.10% + 30¢.
          </p>

          <h3>ServiceTitan</h3>
          <p>
            <strong>Best fit:</strong> larger shops with dispatchers and a membership program.
            ServiceTitan documents memberships, service agreements that can auto-renew, offline job
            work and QuickBooks Desktop and Online. It also publishes a guide to exporting your
            Housecall Pro data. <strong>Limitation:</strong> it publishes no prices (its pricing page lists Core, Demand AI,
            Field AI and MAX packages behind a Get Pricing button), and its annual report says contracts typically run 12 to 36 months with onboarding fees billed
            separately. See <Link href="/compare/housecall-pro-vs-servicetitan" className={A}>Housecall Pro vs ServiceTitan</Link>.
          </p>

          <h3>Workiz, FieldPulse and FieldEdge</h3>
          <p>
            All three price by quote. <strong>Workiz</strong> offers a 7-day trial and offline job
            updates, but service plans are on Ultimate only. <strong>FieldPulse</strong> caches jobs
            offline for a week, places maintenance-agreement visits on the schedule automatically and
            syncs with QuickBooks Desktop 2024 or newer, but it has no free trial and sells its
            Pricebook as an add-on. <strong>FieldEdge</strong> includes flat-rate pricing and
            QuickBooks Online and Desktop on every plan, but has no free trial and its published terms
            renew yearly. See our <Link href="/compare/fieldpulse-alternatives" className={A}>FieldPulse</Link>{' '}
            and <Link href="/compare/fieldedge-alternatives" className={A}>FieldEdge</Link> alternatives pages.
          </p>

          <h2 id="fees">Payment fees</h2>
          <p>
            Housecall Pro charges 2.59% in person, 2.99% when a customer pays an invoice online and
            3.49% for keyed or saved cards, Amex and commercial cards, with ACH at 1%. Jobber charges
            2.9% + 30¢ online and 2.7% + 30¢ with Tap to Pay, with ACH at 1%. Kickserv charges 2.9% with
            Tap to Pay and 3.9% when the card is not present. ServiceTitan, Workiz, FieldPulse and
            FieldEdge do not publish their rates. The full comparison is in our{' '}
            <Link href="/guides/field-service-invoicing-software" className={A}>invoicing software</Link> guide.
          </p>

          <h2 id="export">Moving your data out of Housecall Pro</h2>
          <p>
            Housecall Pro’s help center says only Admins can export the Customers and Jobs lists, and
            the file arrives by email. ServiceTitan’s migration guide adds an Estimates report, says to
            set the date range from when you started using Housecall Pro, and suggests one-year
            batches if a report fails. We found no documented export for service plans, payment history
            or photos, so save those separately. Check the new tool’s import limits too: Jobber, for
            example, imports clients from CSV files under 2.5 MB.
          </p>

          <h2 id="switching-checklist">Before you switch: a checklist</h2>
          <ol>
            <li>Price your actual team size on each tool, including extra users.</li>
            <li>Check which plan includes service plans, route optimization and QuickBooks Desktop.</li>
            <li>Export Customers and Jobs as an Admin, plus estimates and your price book.</li>
            <li>Save service plan details and photos separately.</li>
            <li>Test offline use in a trial where your techs actually lose signal.</li>
          </ol>
          <p>
            For list prices across tools, see our{' '}
            <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Housecall Pro alternatives">
            Jobber is the cheaper start and puts route optimization below its top plan, Service Fusion
            and Kickserv cost less for bigger teams, and ServiceTitan and FieldPulse go further on
            offline work, by quote. Housecall Pro remains a strong pick for crews of up to five that
            need QuickBooks Desktop and flat rate. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only
            prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
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
