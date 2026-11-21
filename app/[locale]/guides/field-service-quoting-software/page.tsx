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
 * /guides/field-service-quoting-software: targets "field service quoting software" and
 * "field service estimating software"; also covers "pest control proposal software".
 *
 * GSC (2026-08-16 to 2026-11-15, site level, no page on this topic yet): field service quoting
 * software 28 impressions at 96.9; pest control proposal software 10 at 84.2.
 *
 * Scope: quotes, estimates and proposals (options, price books, approval, deposits, follow-ups,
 * financing). Invoices and payment fees live on /guides/field-service-invoicing-software.
 *
 * Sources: vendor pricing pages and help centers, checked 2026-11-20 (Housecall Pro pricing grid
 * from the copy saved 2026-11-19; Workiz plan table from the copy saved 2026-11-19). Vendor
 * statistics are labelled as vendor claims. Nothing tested hands-on.
 */

const PATH = '/guides/field-service-quoting-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Field Service Quoting Software: Plans, Prices and Features Compared'
const DESCRIPTION =
  'Which plan unlocks quote options, deposits, e-signature, follow-ups and financing in Jobber, Housecall Pro, ServiceTitan, Workiz and more, from vendor sites.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/field-service-quoting-software',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Field service quoting software', href: PATH },
]

type Tool = {
  name: string
  price: string
  options: string
  approval: string
  followups: string
  financing: string
}

const tools: Tool[] = [
  {
    name: 'Jobber',
    price: 'Core $29 (1 user) billed annually; Connect $99; Grow $149 for 1 user',
    options: 'Quotes on every plan; optional line items and images on quotes from Grow',
    approval: 'Client approves and signs online, or you collect a signature in person; deposit on approval',
    followups: 'Quote reminders on all plans; automated quote follow-ups from Connect',
    financing: 'Wisetack on all plans except Lite; flat 3.9% cost to you per financed amount',
  },
  {
    name: 'Housecall Pro',
    price: 'Basic $59 (1 user), Essentials $149 (5 users), MAX $299 (8 users) per month billed annually',
    options: 'Estimates and price book on Basic; multi-option estimates; flat-rate pricing from Essentials; sales proposal tool on MAX',
    approval: 'E-signature on emailed or texted estimates; a required deposit must be paid before approval',
    followups: 'Pipeline add-on resends estimates on a timer and declines them after the third follow-up',
    financing: 'Wisetack, $500 to $65,000, on every plan',
  },
  {
    name: 'ServiceTitan',
    price: 'Quote only; mobile estimates in Core, AI estimates on Field AI and MAX',
    options: 'Pricebook on every package; good/better/best proposal templates; Pricebook Pro add-on',
    approval: 'Customer signs on the tech’s device; deposits in online estimates are in private preview',
    followups: 'Unsold estimates worked from the Opportunities follow-up screen',
    financing: 'Service Finance integration on online estimates once enabled',
  },
  {
    name: 'Workiz',
    price: 'Quote only: Standard, Pro and Ultimate say “Request pricing”',
    options: 'Unlimited estimates and price book on every plan; flat rate and sales proposals on Ultimate only',
    approval: 'Estimate deposits on every plan',
    followups: 'Automated follow-ups; plans include 5, 10 or 30 automations',
    financing: 'Wisetack and Sunbit on every plan',
  },
  {
    name: 'FieldPulse',
    price: 'Quote only, seat-based; Pricebook and Dynamic Proposals are add-ons',
    options: 'Itemized upgrade options on estimates; good/better/best with the Dynamic Proposals add-on',
    approval: 'E-signature, deposit and financing inside a Dynamic Proposal',
    followups: 'Tracks how many estimates turn into jobs; automated follow-ups not stated on the pages we read',
    financing: 'Inside Dynamic Proposals (provider not named on the pages we read)',
  },
  {
    name: 'Commusoft',
    price: 'Quote only; 12-month contracted or monthly rolling licenses',
    options: 'Good, better, best options and add-ons',
    approval: 'E-signature and online acceptance with an upfront deposit',
    followups: 'Automated follow-up reminders; win/loss sales reports',
    financing: 'Customer financing offered (provider not named)',
  },
  {
    name: 'ServiceM8',
    price: 'Free $0 (1 user, 30 jobs a month), Starter $29 (50 jobs), Growing $79 (150 jobs)',
    options: 'Quote options on all plans; proposals from Growing',
    approval: 'Online acceptance, on-site e-signature and remote signature on all plans',
    followups: 'Automated quote follow-ups on all plans',
    financing: 'Not mentioned on its pricing page',
  },
  {
    name: 'Service Fusion',
    price: 'Starter $220, Plus $339, Pro $552 per month billed annually; unlimited users',
    options: 'One estimate option on Starter, multiple options on Plus and Pro',
    approval: 'E-sign documents and customer web portal included on Pro, add-ons below it',
    followups: 'Not listed on its pricing page',
    financing: 'Not listed per plan',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price' },
  { key: 'options', label: 'Options and price book' },
  { key: 'approval', label: 'Approval and deposits' },
  { key: 'followups', label: 'Follow-ups' },
  { key: 'financing', label: 'Financing on quotes' },
]

const gating: { feature: string; where: string }[] = [
  { feature: 'Multiple options on one quote', where: 'ServiceM8 all plans; Housecall Pro multi-option estimates; Service Fusion Plus and Pro; Jobber optional line items from Grow' },
  { feature: 'Visual sales proposals', where: 'Housecall Pro MAX (or add-on); Workiz Ultimate; ServiceM8 Growing and up; FieldPulse Dynamic Proposals add-on' },
  { feature: 'Flat-rate pricing', where: 'Housecall Pro Essentials and up (Profit Rhino price books $199/month extra); Workiz Ultimate; ServiceTitan Pricebook Pro add-on' },
  { feature: 'Automated quote follow-ups', where: 'Jobber Connect and up; ServiceM8 all plans; Housecall Pro Pipeline add-on; Workiz automations' },
  { feature: 'E-signature from the customer’s phone', where: 'Jobber, Housecall Pro and ServiceM8 on every plan; Service Fusion Pro (add-on below)' },
]

const faqs = [
  {
    question: 'What is the difference between a quote, an estimate and a proposal?',
    answer:
      'Field service tools use the words loosely. Jobber calls them quotes, Housecall Pro and ServiceTitan call them estimates, and a proposal is usually a dressed-up estimate with photos, reviews and several priced options side by side, such as Housecall Pro’s sales proposal tool or FieldPulse Dynamic Proposals.',
  },
  {
    question: 'Which quoting software offers good-better-best options on the cheapest plan?',
    answer:
      'ServiceM8 lists quote options on all plans, including its $0 plan. Housecall Pro documents multi-option estimates without naming a plan, and Workiz says its estimates show three service tiers. Jobber’s optional line items, where customers tick add-ons, need the Grow plan ($149/month billed annually for one user).',
  },
  {
    question: 'Can customers sign a quote and pay a deposit online?',
    answer:
      'Yes, in most tools. Jobber shows an Approve and Pay Deposit button. Housecall Pro requires the deposit to be paid before the customer can approve. ServiceTitan’s online estimate deposits are in private preview for some accounts, and GorillaDesk requires the deposit before a pest customer can sign.',
  },
  {
    question: 'Which field service tools offer financing on quotes?',
    answer:
      'Jobber, Housecall Pro and Workiz offer Wisetack; Workiz also offers Sunbit, and ServiceTitan integrates Service Finance on online estimates. Jobber says financing costs the business a flat 3.9% of each financed amount on quotes from $500 to $65,000 for US residential clients.',
  },
  {
    question: 'How do automated quote follow-ups work?',
    answer:
      'You set a delay and the tool resends the quote or texts the customer. Jobber includes automated follow-ups from Connect, ServiceM8 on all plans, and Housecall Pro through its Pipeline add-on, which moves an estimate through three follow-ups and then marks it declined.',
  },
  {
    question: 'Is there free quoting software for field service?',
    answer:
      'ServiceM8’s Free plan includes quotes, quote options, online acceptance, e-signature and automated follow-ups for one user and up to 30 jobs a month. Most other vendors offer a free trial rather than a free plan; see our guide to free field service software.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, quote features by plan)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-20' },
  { name: 'Jobber help: quote basics (optional line items on Grow, deposits)', url: 'https://help.getjobber.com/en/articles/quote-basics/', checked: '2026-11-20' },
  { name: 'Jobber help: quote approvals (reminders, follow-ups)', url: 'https://help.getjobber.com/en/articles/quote-approvals/', checked: '2026-11-20' },
  { name: 'Jobber help: Wisetack consumer financing', url: 'https://help.getjobber.com/en/articles/jobber-and-wisetack-consumer-financing-integration/', checked: '2026-11-20' },
  { name: 'Jobber help: quotes report (conversion rate)', url: 'https://help.getjobber.com/en/articles/quotes-report/', checked: '2026-11-20' },
  { name: 'Housecall Pro pricing (estimates, price book, flat rate, sales proposal tool)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: create an estimate', url: 'https://help.housecallpro.com/en/articles/1185469-create-an-estimate', checked: '2026-11-20' },
  { name: 'Housecall Pro help: multi-option estimates', url: 'https://help.housecallpro.com/en/articles/2883373-create-multi-option-estimates', checked: '2026-11-20' },
  { name: 'Housecall Pro help: e-signatures on estimates', url: 'https://help.housecallpro.com/en/articles/10040275-e-signatures-on-estimates', checked: '2026-11-20' },
  { name: 'Housecall Pro help: deposits on estimates', url: 'https://help.housecallpro.com/en/articles/12151673-collect-deposits-on-estimates', checked: '2026-11-20' },
  { name: 'Housecall Pro help: job creation from approved estimates', url: 'https://help.housecallpro.com/en/articles/12119814-automate-job-creation-from-approved-estimates', checked: '2026-11-20' },
  { name: 'Housecall Pro help: consumer financing', url: 'https://help.housecallpro.com/en/articles/3538947-consumer-financing-invoices-estimates', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Profit Rhino overview', url: 'https://help.housecallpro.com/en/articles/8754493-profit-rhino-overview', checked: '2026-11-20' },
  { name: 'Housecall Pro help: getting started with Pipeline', url: 'https://help.housecallpro.com/en/articles/6185127-getting-started-with-pipeline', checked: '2026-11-20' },
  { name: 'Housecall Pro help: conversion rate reporting', url: 'https://help.housecallpro.com/en/articles/6499730-conversion-rate-reporting', checked: '2026-11-20' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI and MAX packages; Get Pricing)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan Field Pro (formerly Sales Pro)', url: 'https://www.servicetitan.com/features/pro/field', checked: '2026-11-20' },
  { name: 'ServiceTitan help: proposal templates', url: 'https://help.servicetitan.com/docs/proposal-templates', checked: '2026-11-20' },
  { name: 'ServiceTitan Pricebook Pro', url: 'https://www.servicetitan.com/features/pricebook-pro', checked: '2026-11-20' },
  { name: 'ServiceTitan help: payments in online estimates (private preview)', url: 'https://help.servicetitan.com/docs/collect-payment-in-online-estimates', checked: '2026-11-20' },
  { name: 'ServiceTitan help: loans through online estimates', url: 'https://help.servicetitan.com/docs/offer-loans-through-online-estimates', checked: '2026-11-20' },
  { name: 'ServiceTitan help: estimates and proposals in the mobile app', url: 'https://help.servicetitan.com/docs/estimates-and-proposals-in-servicetitan-max', checked: '2026-11-20' },
  { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-19' },
  { name: 'Workiz estimates', url: 'https://www.workiz.com/features/estimates/', checked: '2026-11-20' },
  { name: 'Workiz consumer financing', url: 'https://www.workiz.com/features/consumer-financing/', checked: '2026-11-20' },
  { name: 'FieldPulse estimates and invoices', url: 'https://www.fieldpulse.com/features/estimates-and-invoices', checked: '2026-11-20' },
  { name: 'FieldPulse help: Dynamic Proposals', url: 'https://help.fieldpulse.com/en/articles/5918607-dynamic-proposal', checked: '2026-11-20' },
  { name: 'Commusoft field sales CRM', url: 'https://www.commusoft.com/en-us/features/field-sales-crm/', checked: '2026-11-20' },
  { name: 'ServiceM8 pricing (features by minimum plan)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-20' },
  { name: 'Service Fusion pricing (estimate options, e-sign, portal by plan)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-20' },
  { name: 'GorillaDesk help: estimates for e-signature (Pro plan, deposits)', url: 'https://intercom.help/gorilladesk/en/articles/8396180-sending-invoices-and-estimates-for-e-signature', checked: '2026-11-20' },
  { name: 'GorillaDesk help: all about estimates (reminders)', url: 'https://intercom.help/gorilladesk/en/articles/1089657-all-about-estimates', checked: '2026-11-20' },
  { name: 'PestPac blog: paperless sales process', url: 'https://www.pestpac.com/blog/streamline-your-business-with-a-paperless-sales-process', checked: '2026-11-20' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function FieldServiceQuotingSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/field-service-quoting-software"
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
            Field service quoting software: <span className="text-orange-400">8 tools compared by plan</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Which plan unlocks quote options, e-signature, deposits, follow-ups and financing, from
            each vendor’s own pricing pages and help centers, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Every tool here builds quotes on a phone and lets customers approve them online. The
            differences are in which plan adds the features that win bigger jobs.{' '}
            <strong>Jobber</strong> (from $29/month billed annually) adds automated quote follow-ups
            on Connect and optional line items on Grow. <strong>Housecall Pro</strong> (from
            $59/month) includes estimates, a price book and Wisetack financing on Basic, flat-rate
            pricing on Essentials and its sales proposal tool on MAX. <strong>ServiceM8</strong>{' '}
            includes quote options, e-signature and follow-ups even on its $0 plan.{' '}
            <strong>ServiceTitan</strong> and <strong>Workiz</strong> price by quote; Workiz puts
            sales proposals and flat rate on its top Ultimate plan.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-it-does">What field service quoting software does</h2>
          <p>
            A field quote has to be built fast, often in front of the customer, and turned into a job
            the moment it is approved. The features that matter:
          </p>
          <ul>
            <li><strong>Price book items</strong> so techs quote consistent prices instead of guessing.</li>
            <li><strong>Options</strong>: good, better and best packages, or optional add-ons the customer can tick.</li>
            <li><strong>Approval from the customer’s phone</strong>, with an e-signature and, for bigger jobs, a deposit.</li>
            <li><strong>Follow-ups</strong> that resend unanswered quotes automatically.</li>
            <li><strong>Financing</strong> offered on the quote, so a replacement does not stall on price.</li>
            <li><strong>Conversion</strong> from approved quote to scheduled job, and then to an invoice.</li>
          </ul>
          <p>
            After the job, billing and payment fees are covered in our{' '}
            <Link href="/guides/field-service-invoicing-software" className={A}>field service invoicing software</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Field service quoting software compared</h2>
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
          <h2 id="plan-gating">Where quoting features hide: plans and add-ons</h2>
          <p>
            Most lists say a tool “has proposals” without the plan. Here is where each feature sits
            according to the vendors’ own pages:
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
          <h2 id="options">Good-better-best vs optional line items</h2>
          <p>
            These are two different features. <strong>Multiple options</strong> means the customer
            picks one complete package: Housecall Pro’s multi-option estimates let the customer approve
            one option by default, and approving one declines the rest. ServiceTitan’s proposal
            templates present prebuilt good, better and best estimates and are available to all its
            customers once enabled. <strong>Optional line items</strong> let the customer keep the
            main job and tick add-ons, which is how Jobber works from its Grow plan. If your techs sell
            replacements, ask in the demo which of the two the tool does, and whether the choice works
            on mobile; Housecall Pro says its multi-option approval settings work on the web only for now.
          </p>

          <h2 id="price-books">Price books and flat-rate pricing</h2>
          <p>
            A price book keeps quotes consistent. Housecall Pro includes one on Basic and adds
            flat-rate pricing with profit margins on Essentials; Profit Rhino’s ready-made HVAC,
            plumbing, drain cleaning and electrical price books cost $199 a month extra. ServiceTitan
            lists its Pricebook on every package and sells Pricebook Pro, a flat-rate content service
            with one-click good, better and best templates, as an add-on. Workiz has a price book on
            every plan but flat rate on Ultimate only, and FieldPulse sells its Pricebook as an add-on.
          </p>

          <h2 id="approval">E-signature and deposits</h2>
          <p>
            Jobber’s client hub lets customers draw or type a signature and shows an Approve and Pay
            Deposit button when you add a deposit. Editing an approved quote removes the customer’s
            signature. Housecall Pro turns e-signatures on by default for accounts
            created since March 1, 2025, lets you set a deposit as an amount or a percentage up to
            100%, and requires it to be paid before the customer can approve. ServiceTitan’s mobile
            app takes a signature on the tech’s device, and its online estimate deposits are in private
            preview. Service Fusion includes e-sign documents on Pro and sells them as an add-on on
            Starter and Plus.
          </p>

          <h2 id="follow-ups">Automated quote follow-ups</h2>
          <p>
            Unanswered quotes are where revenue leaks. Jobber sends quote reminders on all plans and
            adds automated email or text follow-ups on Connect. Housecall Pro’s Pipeline add-on resends
            an estimate after a set number of days, up to a third follow-up, and then declines it.
            ServiceM8 includes automated quote follow-ups on all plans, and Workiz runs follow-ups
            through automations, with 5, 10 or 30 included depending on the plan.
          </p>
          <p>
            If you track win rates, note that vendors calculate them differently. Jobber compares
            quotes sent in a calendar month with quotes converted in that month; Housecall Pro divides
            approved estimates by all estimates, won, lost and open.
          </p>

          <h2 id="financing">Financing on quotes</h2>
          <p>
            Jobber, Housecall Pro and Workiz all use Wisetack; Workiz adds Sunbit, and ServiceTitan
            integrates Service Finance into online estimates. Jobber’s help center says Wisetack costs
            the business a flat 3.9% of each financed amount, on residential quotes from $500 to
            $65,000 in the US, and is on every plan except Lite. Housecall Pro lists the same $500 to
            $65,000 range with terms up to 120 months. Workiz says offers range from 0% to 35.9% APR
            depending on credit.
          </p>

          <h2 id="pest-proposals">Pest control proposals</h2>
          <p>
            Pest control proposals usually carry a service agreement the customer signs. GorillaDesk
            sends estimates for e-signature on its Pro plan, can send up to 6 automated estimate
            reminders, and requires any deposit to be paid before the customer signs. PestPac’s blog
            describes proposals signed while the prospect is still on the phone and uploaded to the
            customer’s account. For the rest of the pest stack, including state reporting, see our{' '}
            <Link href="/by-industry/pest-control" className={A}>pest control software</Link> guide.
          </p>

          <h2 id="vendor-claims">Vendor claims about bigger tickets</h2>
          <p>
            ServiceTitan says technicians using Field Pro, which replaced Sales Pro, saw a 20%
            increase in average ticket year over year, based on technicians who recorded at least once
            a month, and adds that results may vary. Workiz says offering options increases ticket size
            by 11%. These are the vendors’ own figures, not independent measurements.
          </p>

          <h2 id="estimating">When you need a dedicated estimating tool</h2>
          <p>
            The tools above quote service and replacement work from a price book. Commercial
            contractors bidding from drawings, such as electrical feeder schedules or oil and gas
            projects, usually need takeoff and bid software, which is outside this comparison. For
            commercial HVAC service quoting, see our{' '}
            <Link href="/guides/commercial-hvac-software" className={A}>commercial HVAC software</Link> guide.
          </p>

          <h2 id="which-to-choose">Which quoting software fits?</h2>
          <ul>
            <li><strong>Solo or very small:</strong> ServiceM8 (free for 30 jobs a month) or Jobber Core ($29/month billed annually); add Jobber Connect when you want automated follow-ups.</li>
            <li><strong>Selling replacements with options:</strong> Housecall Pro, with flat rate on Essentials and the proposal tool on MAX, or Jobber Grow for optional line items.</li>
            <li><strong>Many techs with a sales process:</strong> ServiceTitan, with proposal templates and Pricebook Pro, by quote.</li>
          </ul>
          <p>
            Compare the two most common choices in{' '}
            <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>, or
            see what free plans include in our{' '}
            <Link href="/free" className={A}>free field service software</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on field service quoting software">
            Every tool here quotes on mobile and takes online approval. Pick on the plan that unlocks
            what you sell with: follow-ups on Jobber Connect, optional line items on Jobber Grow, flat
            rate on Housecall Pro Essentials, proposals on Housecall Pro MAX or Workiz Ultimate.
            ServiceM8 covers the basics for free. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only
            prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
            <Link href="/guides/field-service-invoicing-software" className="text-orange-600 hover:text-orange-800">Invoicing software →</Link>
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
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
