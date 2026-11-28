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
 * /compare/fieldpulse-vs-tradify: targets "fieldpulse vs tradify". No GSC data for this topic yet.
 *
 * FieldPulse facts reuse /pricing/fieldpulse, the compare pages that cover it and the b10 research
 * notes: pricing page, Engage page and help center checked 2026-11-24, Terms of Service rechecked
 * 2026-11-26 (Flicent Inc., Texas law, 60-day export window), job costing and timesheet help
 * articles checked 2026-11-26, offline mode reusing the 2026-11-11 check. Tradify facts reuse
 * /pricing/tradify and the b16 notes (pricing page, home page, Stripe page and Product-Specific
 * Terms, 2026-11-25), its features page (2026-11-25) and its job costing and Connections pages
 * (2026-11-26). Conflicts, all stated on the page: Tradify's terms mention "yearly charges" and its
 * job costing page mentions annual plans while its pricing page shows monthly prices only; Tradify's
 * pricing page puts subcontractor scheduling on Pro while its Connections page names no plan.
 * Not used: FieldPulse's unconfirmed blog tier names, the unread FieldPulse Customer Success
 * Agreement, Tradify's help center (never fetched), Tradify governing law (in Access Group terms not
 * read), and any vendor's claims about the other. No new URLs fetched. Cost figures are arithmetic
 * on Tradify's published prices only. Nothing tested hands-on.
 */

const PATH = '/compare/fieldpulse-vs-tradify'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'FieldPulse vs Tradify (2026): Custom Quotes vs Per-User Pricing'
const DESCRIPTION =
  'FieldPulse is quote-only on a renewing one-year term; Tradify lists $47 to $61 per user a month with cancel any time. Compare terms, add-ons and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/fieldpulse-vs-tradify',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'FieldPulse vs Tradify', href: PATH },
]

const rows: { feature: string; fp: string; tradify: string }[] = [
  { feature: 'How the price is set', fp: 'By seat, built around what your team needs; “Get a Custom Quote” instead of a price table', tradify: 'A flat price per user per month on every plan, so the bill rises by one seat for each person you add' },
  { feature: 'Published prices', fp: 'Not published; no plan names on the pricing page', tradify: 'Lite $47, Pro $51, Plus $61 per user a month; Custom for large teams on request; Instant Website $12 a month' },
  { feature: 'Adding and removing users', fp: 'Users above your order form are charged for the one-year term upfront; billed seats stay the same when users are removed', tradify: 'Same per-user price at any headcount; no user minimum shown; how users are counted not documented' },
  { feature: 'Trial', fp: 'Demo only; no free trial advertised', tradify: '14 days with all features, no credit card' },
  { feature: 'Term and renewal', fp: 'One year unless your order form says otherwise; renews for one-year terms unless you give notice at least 60 days before the end; fees may rise at renewal with 60 days’ notice, no cap stated', tradify: 'No minimum term, renewal or price-change clause on the terms page; monthly prices only on the pricing page' },
  { feature: 'Cancelling and refunds', fp: 'No cancelling mid-term except for an uncured material breach or a business closure; fees non-refundable; month to month allowed at up to 50% over the annual rate, with 30 days’ notice', tradify: 'Cancel any time through the in-app process; monthly or yearly charges already billed are not refunded' },
  { feature: 'Contracting party, law and data', fp: 'Flicent Inc. (Delaware) doing business as FieldPulse; Texas law, individual arbitration; export your data for 60 days after the subscription ends', tradify: 'Tradify Limited (New Zealand); governing law sits in Access Group terms we did not read; data after cancelling not documented' },
  { feature: 'Accounting', fp: 'QuickBooks Online (two-way); QuickBooks Desktop 2024 or newer on Windows through the Web Connector, set up by support; Xero', tradify: 'Xero and QuickBooks from Lite; invoices, bills and payments sync to QuickBooks; Online or Desktop not specified' },
  { feature: 'Scheduling, maps and offline', fp: 'Visual calendar with live technician map; map-based route scheduling (you set the stop order); multi-day jobs; offline mode for forms, notes and photos, no payments offline', tradify: 'Scheduling with Google Calendar sync; iOS and Android apps with live staff locations on a map; route optimization and offline use not documented' },
  { feature: 'Phone and AI answering', fp: 'Engage VoIP phone and texting add-on; Operator AI call answering add-on; no prices published', tradify: 'Not documented' },
  { feature: 'Estimates and price book', fp: 'Good, Better, Best estimate options with add-ons; flat-rate Pricebook is a paid add-on', tradify: 'Quoting, pricing and markups on Lite; kit bundles on Plus; supplier price lists import as CSV files' },
  { feature: 'Recurring work and agreements', fp: 'Maintenance agreements with recurring billing and renewal reminders; recurring jobs; plan not stated', tradify: 'Recurring jobs from Pro; service reminders on Plus' },
  { feature: 'Job costing, timesheets and purchasing', fp: 'Job costing in the web app; geo-tagged clock-ins; purchase orders with automatic re-order levels; plan not stated', tradify: 'Costing, bill tracking and timesheets from Pro; purchase orders and job service reports on Plus' },
  { feature: 'Payments', fp: 'FieldPulse Payments for card and ACH (US only): fees not published, plus a monthly cost; funding in 2 business days for cards, 4 for ACH; Wisetack or Acorn Finance', tradify: 'Stripe at 3.1% + $0.30 per card charge; first payout 7 days after payment, then 2 days; fee can be passed on; ACH not described' },
]

const faqs = [
  {
    question: 'Is FieldPulse or Tradify cheaper?',
    answer:
      'We cannot say, because FieldPulse publishes no prices. Tradify’s are simple to total: five users on Pro is 5 × $51 = $255 a month, or $3,060 over 12 months. Ask FieldPulse for a one-year quote for the same five seats and any add-ons you need, and compare the yearly totals.',
  },
  {
    question: 'Can I cancel FieldPulse or Tradify at any time?',
    answer:
      'Tradify, yes: its terms let you cancel at any time through the app, but monthly or yearly charges already billed are not refunded. FieldPulse, no: its default term is one year, renewing for another year unless you give notice at least 60 days before the end, and you cannot cancel mid-term except for an uncured material breach or a business closure.',
  },
  {
    question: 'Does FieldPulse or Tradify work with QuickBooks Desktop?',
    answer:
      'FieldPulse supports QuickBooks Desktop 2024 or newer on Windows through the QuickBooks Web Connector, set up by its support team; Desktop for Mac is not supported. It also syncs two-way with QuickBooks Online and connects to Xero. Tradify says it syncs with Xero and QuickBooks but does not say whether that means Online, Desktop or both, so ask before you rely on Desktop.',
  },
  {
    question: 'Which has a phone system or AI call answering?',
    answer:
      'FieldPulse sells Engage, a VoIP phone and texting add-on, and Operator AI, which answers calls and books jobs from your availability. Neither has a published price. Tradify’s pages we read do not document a phone system or AI answering.',
  },
  {
    question: 'Which is better for maintenance agreements and recurring work?',
    answer:
      'FieldPulse documents maintenance agreements that link recurring billing and send renewal reminders, without naming a plan. Tradify puts recurring jobs on Pro and service reminders on Plus, and does not describe an agreement or membership module.',
  },
  {
    question: 'Does either have a free trial?',
    answer:
      'Tradify offers a 14-day free trial with all features and no credit card. FieldPulse offers demos and advertises no free trial.',
  },
]

const sources = [
  { name: 'FieldPulse pricing (seat-based, custom quote, premium products)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service (term, renewal, notice, seats, refunds, Texas law, data export)', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-26' },
  { name: 'FieldPulse vs Housecall Pro page (team size statement about itself)', url: 'https://www.fieldpulse.com/comparison/housecall-pro', checked: '2026-11-24' },
  { name: 'FieldPulse scheduling software (calendar, live map, multi-day jobs)', url: 'https://www.fieldpulse.com/features/service-scheduling-software', checked: '2026-11-24' },
  { name: 'FieldPulse help: route optimization (map-based)', url: 'https://help.fieldpulse.com/scheduling-dispatch/dispatch/route-optimization', checked: '2026-11-24' },
  { name: 'FieldPulse help: recurring jobs', url: 'https://help.fieldpulse.com/jobs/jobs-tasks/recurring-jobs.md', checked: '2026-11-24' },
  { name: 'FieldPulse Engage (phone, texting, Operator AI)', url: 'https://www.fieldpulse.com/features/engage', checked: '2026-11-24' },
  { name: 'FieldPulse help: Operator AI', url: 'https://help.fieldpulse.com/add-ons/ai/operator-ai-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: estimate options and add-ons', url: 'https://help.fieldpulse.com/estimates-invoices/options/options-add-ons.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: Pricebook add-on', url: 'https://help.fieldpulse.com/add-ons/sales-suite/pricebook-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: maintenance agreements', url: 'https://help.fieldpulse.com/jobs/assets/maintenance-agreements-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: job costing', url: 'https://help.fieldpulse.com/jobs/jobs-tasks/job-costing.md', checked: '2026-11-26' },
  { name: 'FieldPulse help: employee timesheets', url: 'https://help.fieldpulse.com/using-fieldpulse/work/employee-timesheets.md', checked: '2026-11-26' },
  { name: 'FieldPulse help: purchase orders', url: 'https://help.fieldpulse.com/inventory-materials/purchase-orders/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: projects', url: 'https://help.fieldpulse.com/jobs/projects/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: FieldPulse Payments', url: 'https://help.fieldpulse.com/payments/getting-started/fieldpulse-payments.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: consumer financing', url: 'https://help.fieldpulse.com/payments/financing/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Online', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-online/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: QuickBooks Desktop', url: 'https://help.fieldpulse.com/integrations/accounting/quickbooks-desktop/overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: integrations index (Xero)', url: 'https://help.fieldpulse.com/_llms/en/home/integrations.txt', checked: '2026-11-24' },
  { name: 'FieldPulse help: offline mode', url: 'https://help.fieldpulse.com/en/articles/4063488-offline-mode', checked: '2026-11-11' },
  { name: 'Tradify pricing (plans, per-user prices, features by plan, Instant Website, trial)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify home (trades served, team sizes, 14-day trial, training and phone support)', url: 'https://www.tradifyhq.com/', checked: '2026-11-25' },
  { name: 'Tradify features (iOS and Android apps, live staff locations)', url: 'https://www.tradifyhq.com/features', checked: '2026-11-25' },
  { name: 'Tradify job costing (supplier price lists, QuickBooks sync, annual plans mention)', url: 'https://www.tradifyhq.com/features/job-costing-software', checked: '2026-11-26' },
  { name: 'Tradify Connections (free subcontractor access)', url: 'https://www.tradifyhq.com/features/connections', checked: '2026-11-26' },
  { name: 'Tradify payments with Stripe (card fees, payouts, surcharging)', url: 'https://www.tradifyhq.com/credit-card-payments-with-stripe', checked: '2026-11-25' },
  { name: 'Tradify Product-Specific Terms of Service (Tradify Limited, cancellation, refunds)', url: 'https://www.tradifyhq.com/terms', checked: '2026-11-25' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function FieldPulseVsTradifyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/fieldpulse-vs-tradify"
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
            FieldPulse vs Tradify: <span className="text-orange-400">a yearly quote or a monthly seat price</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing, contract terms, QuickBooks, phones, agreements, job costing and payments, from each
            vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>FieldPulse</strong> publishes no prices: it is seat-based and quote-only, on a default
            one-year term that renews unless you give 60 days’ notice, with no exit mid-term. It sells its phone
            system, AI answering and flat-rate Pricebook as add-ons, and supports QuickBooks Desktop 2024 or
            newer. <strong>Tradify</strong> lists Lite $47, Pro $51 and Plus $61 per user a month, with a
            14-day trial and cancel any time, though charges already billed are not refunded. Choose FieldPulse
            if you need maintenance agreements, a built-in phone or QuickBooks Desktop and can commit for a
            year; choose Tradify if you want a known price per person and no fixed term.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>FieldPulse vs Tradify at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Tradify’s
            pricing page shows prices in $ with no currency code and a US address, so confirm the currency on
            your quote. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">FieldPulse</th>
                  <th scope="col" className="p-3.5">Tradify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.fp}</td>
                    <td className="p-3.5">{r.tradify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: a custom quote vs a price per person</h2>
          <p>
            FieldPulse’s pricing page says it is seat-based and that pricing is built around what your team
            needs, then offers a custom quote and a demo. It names no plans and no starting price, and does not
            say whether office and field seats cost the same. Eight premium products are optional and priced on
            request: Engage, Operator AI, Chat AI, Pricebook, FieldPulse Payments, FieldPulse Financing, Fleet
            Tracking and Custom Forms. Its office AI assistant, Maverick, is included on all plans. See{' '}
            <Link href="/pricing/fieldpulse" className={A}>FieldPulse pricing</Link> for how to ask for a
            comparable quote.
          </p>
          <p>
            Tradify prints its prices: Lite $47, Pro $51 and Plus $61 per user a month, with each plan including
            everything in the one before, and a Custom plan for large teams on request. The only priced add-on is
            an Instant Website at $12 a month. Its pricing page shows no setup fee and no annual option, although
            its terms mention “yearly charges” and its job costing page says annual plans are available, so ask
            Tradify about annual terms in writing. Full plan details are in our{' '}
            <Link href="/pricing/tradify" className={A}>Tradify pricing</Link> guide.
          </p>

          <h2 id="cost-example">Putting the two side by side</h2>
          <p>
            Only Tradify’s side can be worked out in advance. This is plain arithmetic on its published
            per-user prices, multiplied by 12 so it lines up with FieldPulse’s one-year term:
          </p>
          <ul>
            <li><strong>Three users on Lite:</strong> 3 × $47 = $141 a month, or $1,692 over 12 months.</li>
            <li><strong>Five users on Pro:</strong> 5 × $51 = $255 a month, or $3,060 over 12 months.</li>
            <li><strong>Ten users on Plus:</strong> 10 × $61 = $610 a month, or $7,320 over 12 months.</li>
          </ul>
          <p>
            Ask FieldPulse for the yearly total for the same seats and add-ons, and note that Tradify bills
            monthly with no term, so the 12-month figure is a commitment only if you stay. Card fees and the
            optional website add-on are extra on Tradify.
          </p>

          <h2 id="contracts">Contracts, cancelling and your data</h2>
          <p>
            This is where the two differ most. FieldPulse’s Terms of Service, from Flicent Inc., a Delaware
            corporation doing business as FieldPulse, set a one-year initial term unless your order form says
            otherwise. It renews for one-year terms unless you give notice at least 60 days before the end, sent
            to cancellations@fieldpulse.com, and fees may rise at renewal with 60 days’ written notice, with no
            cap stated. You cannot cancel mid-term except for an uncured material breach or a business closure,
            and fees are non-refundable. Seats added mid-term are billed for the year upfront, and removed seats
            stay billed. Month to month is allowed at a premium of up to 50% over the annual rate. Texas law
            governs, disputes go to individual arbitration, and you can export your data for 60 days after your
            subscription ends.
          </p>
          <p>
            Tradify’s Product-Specific Terms, from Tradify Limited, a New Zealand company, say you may cancel at
            any time through the cancellation process in the app, and that monthly or yearly charges are not
            refunded when you cancel. Tradify may also suspend or end the service at any time. The terms page
            states no minimum term, renewal clause, price-change notice or data export process; governing law
            sits in the Access Group terms it points to, which we did not read. Export your customers, jobs and
            invoices before you cancel. Our{' '}
            <Link href="/guides/field-service-software-contract-terms" className={A}>contract terms guide</Link>{' '}
            compares these clauses across vendors.
          </p>

          <h2 id="accounting">QuickBooks and Xero</h2>
          <p>
            FieldPulse syncs two-way with QuickBooks Online (you need your own Essentials, Plus or Advanced
            subscription) and supports QuickBooks Desktop 2024 or newer on Windows through the QuickBooks Web
            Connector. Desktop setup goes through support, and Desktop for Mac is not supported. Xero is also
            supported. Tradify syncs with Xero and QuickBooks from Lite, and its job costing page says invoices,
            bills and payments created in Tradify sync to QuickBooks, but it does not say whether that means
            Online or Desktop. If you run Desktop, FieldPulse is the documented option; see our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="field-tools">Scheduling, phones and offline use</h2>
          <p>
            FieldPulse schedules on a visual calendar with a live technician map and multi-day jobs. Its route
            tool is map-based: you click jobs in order and it sets the times, rather than sequencing stops for
            you. Its app switches to offline mode for forms, notes and photos, but takes no payments offline. It
            sells Engage, a VoIP phone and texting system with call recording, routing and number porting, and
            Operator AI, which answers calls and books jobs; neither has a published price.
          </p>
          <p>
            Tradify includes scheduling with Google Calendar sync, and its iOS and Android apps show active jobs
            and staff locations on a map. Its pages we read do not document route optimization, offline use, a
            phone system or AI answering, so ask Tradify directly if any of these matter to you.
          </p>

          <h2 id="features">Agreements, estimates, job costing and subcontractors</h2>
          <p>
            FieldPulse documents maintenance agreements whose routines produce occurrences you can schedule as jobs, link recurring billing
            and send renewal reminders, plus recurring jobs, without naming a plan. Its estimates support Good,
            Better, Best options with add-ons, while the flat-rate Pricebook (labor time, materials and markup)
            is a paid add-on. Job costing pulls actual costs from invoices, material lists and purchase orders and
            labor from timesheets, in the web app. Timesheets geo-tag each clock-in, and purchase orders can be
            created automatically at a re-order level. Projects group related work and allow staged invoices.
          </p>
          <p>
            Tradify gates by plan. Lite covers quoting, pricing and markups, invoicing and online payments. Pro
            adds recurring jobs, progress invoicing, costing and bill tracking, timesheets and subcontractor
            scheduling. Plus adds service reminders, job tasks, purchase orders, bulk invoicing, kit bundles and
            job service reports. Its job costing page says you can import supplier price lists as CSV files. Its
            Connections page says subcontractors can use a free version of Tradify to see and accept appointments,
            with no limit on how many, and calls it included in your subscription without naming a plan; the
            pricing page lists subcontractor scheduling on Pro. For agreements in depth, see our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide.
          </p>

          <h2 id="payments">Payments and financing</h2>
          <p>
            FieldPulse Payments handles card and ACH payments for US businesses after a credit check. Its help
            center says there is a processing fee for cards and ACH plus a monthly cost, but publishes neither;
            standard funding takes 2 business days for cards and 4 for ACH. Customer financing runs through
            Wisetack or Acorn Finance, one at a time. Tradify takes cards through Stripe at 3.1% of the invoice
            plus $0.30 per successful charge, with the first payout 7 days after payment and later payouts 2 days
            after, and you can pass the fee to your customer. Tradify does not describe ACH processing or
            customer financing.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>You want a price you can see before talking to sales:</strong> Tradify.</li>
            <li><strong>You do not want a fixed term:</strong> Tradify, remembering that billed charges are not refunded.</li>
            <li><strong>You run QuickBooks Desktop on Windows:</strong> FieldPulse documents Desktop 2024 or newer; Tradify does not say.</li>
            <li><strong>You sell maintenance agreements or need a built-in phone and AI answering:</strong> FieldPulse, as add-ons or features it documents.</li>
            <li><strong>Electricians, plumbers or HVAC techs from sole trader up:</strong> Tradify says it is built for these trades; FieldPulse describes itself as built for teams of 3 to 100 employees.</li>
            <li><strong>Headcount changes during the year:</strong> Tradify’s per-user price flexes; FieldPulse bills added seats for the year and keeps removed seats billed.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/fieldpulse-alternatives" className={A}>FieldPulse alternatives</Link>{' '}
            and <Link href="/compare/tradify-alternatives" className={A}>Tradify alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: FieldPulse vs Tradify">
            The deciding question is commitment. FieldPulse is quote-only and seat-based on a renewing one-year
            term with 60 days’ notice, and in return documents QuickBooks Desktop, maintenance agreements and a
            phone add-on. Tradify publishes $47 to $61 per user a month with no fixed term, but does not refund
            charges already billed. Our <Link href="/how-we-review" className={A}>review method</Link> explains
            why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/fieldpulse" className="text-orange-600 hover:text-orange-800">FieldPulse pricing →</Link>
            <Link href="/pricing/tradify" className="text-orange-600 hover:text-orange-800">Tradify pricing →</Link>
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
