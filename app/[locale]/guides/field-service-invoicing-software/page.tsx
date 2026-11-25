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
 * /guides/field-service-invoicing-software: targets "field service invoicing software",
 * "field service billing software" and "field service invoice software".
 *
 * GSC (2026-08-16 to 2026-11-15, site level, no page on this topic yet): field service invoicing
 * software 77 impressions at 94.2; field service billing software 36 at 96.7; field service
 * invoice software 18 at 95.1.
 *
 * Scope: getting paid after the job (invoices, payment fees, reminders, deposits and progress
 * billing, recurring billing, accounting sync). Quotes and estimates live on
 * /guides/field-service-quoting-software.
 *
 * Sources: each vendor's own pricing page, payments pages and help center, checked 2026-11-20
 * (Housecall Pro pricing grid and its embedded plan data from the copy saved 2026-11-19; Jobber
 * fees match /pricing/jobber, checked 2026-11-03 and 2026-11-20). Only published prices and fees.
 * Vendor "get paid faster" figures are labelled as vendor claims. Nothing tested hands-on.
 */

const PATH = '/guides/field-service-invoicing-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Field Service Invoicing Software: Fees, Plans and Features Compared'
const DESCRIPTION =
  'Compare field service invoicing software by plan price, card and ACH fees, payment reminders, progress billing and QuickBooks sync. Checked November 2026.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/field-service-invoicing-software',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Field service invoicing software', href: PATH },
]

type Tool = {
  name: string
  price: string
  fees: string
  reminders: string
  staged: string
  accounting: string
}

const tools: Tool[] = [
  {
    name: 'Housecall Pro',
    price: 'Basic $59 (1 user), Essentials $149 (5 users), MAX $299 (8 users) per month billed annually; $79, $189, $329 month to month',
    fees: '2.59% card present, 2.99% online invoice, 3.49% keyed or card on file; ACH 1%',
    reminders: 'Automated invoice reminders listed on Basic; auto invoicing and batch invoicing documented',
    staged: 'Deposits on estimates and progress invoicing documented (plan not stated)',
    accounting: 'QuickBooks Online sync from Essentials; its plan data also lists QuickBooks Desktop on Essentials',
  },
  {
    name: 'Jobber',
    price: 'Core $29 (1 user) billed annually, $49 with no commitment; Connect from $99',
    fees: '2.9% + 30¢ online card, 2.7% + 30¢ Tap to Pay; ACH 1% (US)',
    reminders: 'Automated invoice follow-ups and automatic payments from Connect',
    staged: 'Deposits and payment schedules on all plans',
    accounting: 'QuickBooks Online and Xero sync from Connect; no Desktop listed',
  },
  {
    name: 'ServiceM8',
    price: 'Free $0 (1 user, 30 jobs a month), Starter $29 (50 jobs), Growing $79 (150 jobs); unlimited users from Starter',
    fees: 'From 3.10% + 30¢ on its payments page; 3.05% + 30¢ US domestic in its help center',
    reminders: 'Automated payment follow-ups on all plans; auto-pay for recurring jobs from Starter',
    staged: 'Progress and deposit invoicing from Starter',
    accounting: 'QuickBooks Online and Xero on all plans',
  },
  {
    name: 'Service Fusion',
    price: 'Starter $220, Plus $339, Pro $552 per month billed annually ($259, $399, $649 monthly); unlimited users',
    fees: 'Card rates “as low as 2.90% + $0.30”',
    reminders: 'Automated payment follow-ups with online payment forms',
    staged: 'Job deposits; progress billing and recurring invoicing included on Pro, add-on on Starter and Plus',
    accounting: 'QuickBooks Online and Desktop on all plans',
  },
  {
    name: 'Kickserv',
    price: 'Start $60 (5 users), Run $119 (10 users), Scale $199 (20 users) per month; 20% off with annual billing',
    fees: '2.9% Tap to Pay, 3.9% card not present; ACH accepted (fee not published)',
    reminders: 'Deposits, progress payments and reminders by text',
    staged: 'Deposits and progress payments',
    accounting: 'QuickBooks Online from Start; QuickBooks Desktop $50 a month extra on Run',
  },
  {
    name: 'ServiceTitan',
    price: 'Quote only, per technician; all three packages list invoicing',
    fees: 'Not published: fees “vary” by method and your agreement',
    reminders: 'Payment links and reminders; automated membership billing and batch invoices',
    staged: 'Deposits; progress billing (AIA) needs account configuration',
    accounting: 'QuickBooks Online and Desktop, Sage Intacct, Xero for all customers',
  },
  {
    name: 'Workiz',
    price: 'Quote only: Standard, Pro and Ultimate say “Request pricing”',
    fees: 'Not published',
    reminders: 'Payment reminder schedules; invoice sends when the job closes',
    staged: 'Estimate deposits on every plan; progressive billing described',
    accounting: 'QuickBooks Online sync on every plan; Desktop also supported',
  },
  {
    name: 'FieldPulse',
    price: 'Quote only, seat-based; FieldPulse Payments is an add-on',
    fees: 'Not published; card or ACH “dual payment options”',
    reminders: 'Automated payment reminders',
    staged: 'Not stated on its invoicing page',
    accounting: 'QuickBooks Online and Desktop, two-way sync',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price' },
  { key: 'fees', label: 'Card and ACH fees' },
  { key: 'reminders', label: 'Reminders and auto-pay' },
  { key: 'staged', label: 'Deposits and progress billing' },
  { key: 'accounting', label: 'Accounting sync' },
]

const fees: { vendor: string; online: string; inPerson: string; other: string }[] = [
  { vendor: 'Housecall Pro', online: '2.99% (customer pays an invoice online)', inPerson: '2.59% (card reader or Tap to Pay; Tap to Pay adds $5 per active device a month)', other: '3.49% keyed, card on file, Amex and commercial cards; ACH 1% (“may vary based on your specific plan”); instant payout +1%' },
  { vendor: 'Jobber', online: '2.9% + 30¢', inPerson: '2.7% + 30¢ (Tap to Pay)', other: 'ACH 1% (US only); instant payouts +1%; same rates shown for every plan' },
  { vendor: 'ServiceM8', online: 'From 3.10% + 30¢ (payments page); 3.05% + 30¢ US domestic (help center, current as of September 2024)', inPerson: 'Same table; Tap to Pay listed', other: 'International cards 4.60% + 30¢; next-business-day deposits' },
  { vendor: 'Service Fusion', online: '“As low as 2.90% + $0.30”', inPerson: 'Card reader through Service Fusion Payments', other: 'Bank transfers accepted; fee not published' },
  { vendor: 'Kickserv', online: '3.9% (card not present)', inPerson: '2.9% (Tap to Pay)', other: 'ACH 1% + $0.30; instant payouts +1%' },
  { vendor: 'ServiceTitan, Workiz, FieldPulse, Commusoft', online: 'Not published', inPerson: 'Not published', other: 'Ask for the full fee schedule in writing before you sign' },
]

const faqs = [
  {
    question: 'What is the cheapest field service invoicing software with online payments?',
    answer:
      'ServiceM8 has a $0 plan for 1 user and 30 jobs a month that includes online card payments and automated payment follow-ups, and its Starter plan is $29/month with unlimited users and 50 jobs. Jobber Core is $29/month billed annually for one user and includes invoices with online payments. Processing fees apply on top of every plan.',
  },
  {
    question: 'Which field service software has the lowest card processing fees?',
    answer:
      'Among vendors that publish fees, in-person rates start at 2.59% with Housecall Pro and 2.7% + 30¢ with Jobber Tap to Pay, and online invoice payments cost 2.99% with Housecall Pro, 2.9% + 30¢ with Jobber and as low as 2.90% + $0.30 with Service Fusion. ACH bank payments cost 1% at Housecall Pro and Jobber. ServiceTitan, Workiz, FieldPulse and Commusoft do not publish their rates.',
  },
  {
    question: 'Which field service billing software works with QuickBooks Desktop?',
    answer:
      'Service Fusion, ServiceTitan, Workiz and FieldPulse say they support QuickBooks Desktop as well as Online. Kickserv lists QuickBooks Desktop for $50 a month extra on its Run plan, and Housecall Pro’s pricing page data lists QuickBooks Online and Desktop on Essentials. Jobber lists QuickBooks Online and Xero, not Desktop.',
  },
  {
    question: 'Can I add a credit card surcharge to invoices?',
    answer:
      'Some tools support it. Housecall Pro caps surcharges at 3%, does not allow them on debit cards or in Connecticut, Maine, Massachusetts, New York or Canada, and charges a 0.50% fee on surcharged transactions. FieldPulse Payments lets you offer separate card and ACH pricing. Check your state’s rules before you turn surcharging on.',
  },
  {
    question: 'What is the difference between batch invoicing, auto invoicing and invoice reminders?',
    answer:
      'Using Housecall Pro’s definitions: batch invoicing sends several invoices at once, to one customer or many; auto invoicing emails one batch of all finished but unpaid jobs since the last invoice; and invoice reminders nudge customers about invoices they already received but have not paid.',
  },
  {
    question: 'Can I bill large jobs in stages?',
    answer:
      'Yes. Jobber offers deposits and payment schedules on all plans, ServiceM8 includes progress invoicing from Starter ($29/month), Housecall Pro documents progress invoicing, and Service Fusion includes progress billing on Pro and sells it as an add-on on Starter and Plus. ServiceTitan supports AIA-style progress billing with account configuration.',
  },
  {
    question: 'How fast do field service payments reach my bank?',
    answer:
      'Published payout times: Housecall Pro card payments in 2 business days and ACH in 1 to 2; Jobber card payments in 2 business days after the first payout, with ACH settling in 4 business days by default; ServiceM8 the next business day. Housecall Pro, Jobber and Kickserv charge an extra 1% for instant payouts.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, invoicing, QuickBooks Online on Essentials, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: payment processing options and fees', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-20' },
  { name: 'Housecall Pro help: ACH payments FAQ', url: 'https://help.housecallpro.com/en/articles/2043865-ach-payments-faq', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Instapay FAQ', url: 'https://help.housecallpro.com/en/articles/1801050-instapay-faq', checked: '2026-11-20' },
  { name: 'Housecall Pro help: credit card surcharging FAQ', url: 'https://help.housecallpro.com/en/articles/14543891-credit-card-surcharging-faq', checked: '2026-11-20' },
  { name: 'Housecall Pro help: batch invoicing', url: 'https://help.housecallpro.com/en/articles/2782323-batch-invoicing-send-invoices-take-payments', checked: '2026-11-20' },
  { name: 'Housecall Pro help: auto invoicing vs invoice reminders', url: 'https://help.housecallpro.com/en/articles/4539516-what-s-the-difference-between-auto-invoicing-and-invoice-reminders', checked: '2026-11-20' },
  { name: 'Housecall Pro invoicing software (progress invoicing, reminders)', url: 'https://www.housecallpro.com/features/invoicing-software/', checked: '2026-11-20' },
  { name: 'Housecall Pro HVAC software (surcharging, progress invoicing)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-11-19' },
  { name: 'Jobber pricing (plans, Connect features, payment fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-20' },
  { name: 'Jobber help: bank payments (ACH)', url: 'https://help.getjobber.com/hc/en-us/articles/1500004781762-Bank-Payments-ACH', checked: '2026-11-20' },
  { name: 'Jobber help: Jobber Payments basics (payouts)', url: 'https://help.getjobber.com/hc/en-us/articles/115009571387-Jobber-Payments-Basics', checked: '2026-11-20' },
  { name: 'Jobber help: automatic payments', url: 'https://help.getjobber.com/hc/en-us/articles/360036931633-Automatic-Payments', checked: '2026-11-20' },
  { name: 'Jobber help: progress invoicing and payment schedules', url: 'https://help.getjobber.com/en/articles/progress-invoicing/', checked: '2026-11-20' },
  { name: 'ServiceM8 pricing (plans, features by minimum plan)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-20' },
  { name: 'ServiceM8 Pay', url: 'https://www.servicem8.com/us/servicem8-pay', checked: '2026-11-20' },
  { name: 'ServiceM8 help: card processing fees and payout speed', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/servicem8-pay-card-processing-fees-payout-speed', checked: '2026-11-20' },
  { name: 'Service Fusion pricing (plans, add-ons, QuickBooks)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-20' },
  { name: 'Service Fusion Payments', url: 'https://www.servicefusion.com/service-fusion-payments', checked: '2026-11-20' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-20' },
  { name: 'Kickserv payments', url: 'https://www.kickserv.com/integrations/payments', checked: '2026-11-20' },
  { name: 'Kickserv help: ACH payments (1% + $0.30)', url: 'https://help.kickserv.com/article/94-ach-payments', checked: '2026-11-24' },
  { name: 'ServiceTitan pricing', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-20' },
  { name: 'ServiceTitan Payments', url: 'https://www.servicetitan.com/features/payments', checked: '2026-11-20' },
  { name: 'ServiceTitan accounting', url: 'https://www.servicetitan.com/features/accounting', checked: '2026-11-20' },
  { name: 'ServiceTitan help: accounting integrations overview', url: 'https://help.servicetitan.com/docs/accounting-integrations-overview', checked: '2026-11-19' },
  { name: 'Workiz pricing plans (features by plan)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-20' },
  { name: 'Workiz invoicing', url: 'https://www.workiz.com/features/invoicing/', checked: '2026-11-20' },
  { name: 'Workiz online payments', url: 'https://www.workiz.com/features/online-payments/', checked: '2026-11-20' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-20' },
  { name: 'FieldPulse estimates and invoices', url: 'https://www.fieldpulse.com/features/estimates-and-invoices', checked: '2026-11-20' },
  { name: 'FieldPulse Payments', url: 'https://www.fieldpulse.com/features/fieldpulse-payments', checked: '2026-11-20' },
  { name: 'FieldPulse QuickBooks partner page', url: 'https://www.fieldpulse.com/company/partners/quickbooks', checked: '2026-11-20' },
  { name: 'FieldPulse help: QuickBooks Desktop pre-sync (2024 or newer)', url: 'https://help.fieldpulse.com/en/articles/8292219-pre-sync-quickbooks-desktop', checked: '2026-11-20' },
  { name: 'Commusoft plans (12-month contracted licenses)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-20' },
  { name: 'Commusoft job costing and invoicing', url: 'https://www.commusoft.com/en-us/features/job-costing-software/', checked: '2026-11-20' },
  { name: 'Commusoft integrations (QuickBooks Online, Xero, Stripe, GoCardless)', url: 'https://www.commusoft.com/en-us/integrations/', checked: '2026-11-20' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function FieldServiceInvoicingSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/field-service-invoicing-software"
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
            Field service invoicing software: <span className="text-orange-400">plans, fees and payment tools compared</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What each tool charges to get you paid, which plan includes reminders, deposits and
            QuickBooks sync, from each vendor’s own pricing pages and help centers, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Every field service tool here sends invoices and takes card payments. The differences are
            the processing fees and which plan unlocks reminders, deposits and accounting sync.{' '}
            <strong>Jobber</strong> (from $29/month billed annually) and <strong>Housecall Pro</strong>{' '}
            (from $59/month) publish both prices and card fees: 2.9% + 30¢ and 2.99% for online card
            payments, and 1% for ACH. <strong>ServiceM8</strong> has the lowest entry price, with a
            $0 plan and a $29 plan priced by jobs per month. <strong>Service Fusion</strong> publishes
            unlimited-user plans from $220/month billed annually with QuickBooks Desktop support.
            ServiceTitan, Workiz and FieldPulse price by quote and do not publish processing fees.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-it-should-do">What field service invoicing software should do</h2>
          <p>
            In field service, the invoice usually gets written in a driveway, not at a desk. The tools
            that save the most time handle these jobs:
          </p>
          <ul>
            <li><strong>Invoice on site</strong> from the job, with the line items already on the work order or quote.</li>
            <li><strong>Take payment on the spot</strong> by card reader or Tap to Pay, or by a pay link sent by text or email.</li>
            <li><strong>Chase unpaid invoices</strong> with automatic reminders, so nobody has to call.</li>
            <li><strong>Collect deposits and bill in stages</strong> on installs and multi-day jobs.</li>
            <li><strong>Bill recurring work</strong>, such as maintenance plans, by charging a card on file.</li>
            <li><strong>Sync to accounting</strong>, with QuickBooks Online and Desktop handled differently by each vendor.</li>
          </ul>
          <p>
            Quotes and estimates are covered separately in our{' '}
            <Link href="/guides/field-service-quoting-software" className={A}>field service quoting software</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Field service invoicing software compared</h2>
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
          <h2 id="processing-fees">Payment processing fees compared</h2>
          <p>
            The subscription is often the smaller cost. Card fees apply to every payment, and the rate
            depends on how the card is taken. A headline “as low as” rate usually means a card
            tapped or dipped in person; a customer paying an emailed invoice, or a card typed in by
            your office, costs more.
          </p>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Vendor</th>
                <th scope="col" className="p-3.5">Card paid online</th>
                <th scope="col" className="p-3.5">Card in person</th>
                <th scope="col" className="p-3.5">Other fees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {fees.map((f) => (
                <tr key={f.vendor} className="align-top">
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{f.vendor}</th>
                  <td className="p-3.5">{f.online}</td>
                  <td className="p-3.5">{f.inPerson}</td>
                  <td className="p-3.5">{f.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-12">
          <h3 id="worked-example">What the fees add up to: a worked example</h3>
          <p>
            Take a shop that bills 40 invoices of $500 a month ($20,000) and has customers pay every
            invoice online by card. Using the published online rates:
          </p>
          <ul>
            <li>Housecall Pro at 2.99%: about $598 a month.</li>
            <li>Jobber at 2.9% + 30¢: $580 plus $12 in per-payment fees, about $592.</li>
            <li>Service Fusion at its lowest advertised 2.90% + $0.30: about $592.</li>
            <li>ServiceM8 at 3.10% + 30¢: $620 plus $12, about $632.</li>
            <li>Kickserv at 3.9% for card-not-present payments: about $780.</li>
          </ul>
          <p>
            If the same $20,000 came in by ACH at Housecall Pro or Jobber, the 1% fee would be about
            $200. This is arithmetic on published rates, not a measured cost; Amex, commercial cards,
            keyed cards and instant payouts cost more where vendors list them. For the full
            subscription side, see our{' '}
            <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>

          <h2 id="tools">The tools, from a billing point of view</h2>

          <h3>Housecall Pro</h3>
          <p>
            Estimates, invoicing, payments and consumer financing are on every plan, and Basic lists
            automated invoice reminders. QuickBooks Online sync starts on Essentials ($149/month billed
            annually for 5 users), and the plan data on its pricing page also lists QuickBooks Desktop
            on Essentials. Its help center separates three billing tools: batch invoicing, auto
            invoicing for finished but unpaid jobs, and reminders for overdue invoices. Progress
            invoicing splits large jobs by amount or percentage. Card fees run from 2.59% in person to
            2.99% for online invoices and 3.49% for keyed cards, saved cards, Amex and commercial cards.
            ACH is 1%, though Housecall Pro says that fee may vary by plan. Plan detail is in our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> guide.
          </p>

          <h3>Jobber</h3>
          <p>
            Core ($29/month billed annually for one user) includes invoices with online payments.
            Connect adds automated quote and invoice follow-ups, automatic payments and QuickBooks
            Online and Xero sync; Jobber lists no QuickBooks Desktop option. Deposits and payment
            schedules are on all plans. Automatic payments work only on recurring jobs, and Jobber
            says it tries a failed automatic payment only once. Card payments pay out in 2 business
            days after the first payout, and ACH settles in 4 business days by default. See{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> for every team size, or{' '}
            <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>{' '}
            for the head-to-head.
          </p>

          <h3>ServiceM8</h3>
          <p>
            ServiceM8 prices by jobs per month rather than users. The Free plan covers one user and
            30 jobs; Starter is $29/month with unlimited users and 50 jobs, and Growing is $79 for 150.
            Online card payments, on-site payments, live invoice statements, automated payment
            follow-ups and QuickBooks Online or Xero sync are on all plans. Progress invoicing and
            auto-pay for recurring jobs start on Starter, and job profitability on Premium ($149).
            Its own pages list US card fees of 3.10% + 30¢ (payments page) and 3.05% + 30¢ (help center,
            current as of September 2024), with next-business-day deposits. We did not find a US
            bank-payment option on its pages.
          </p>

          <h3>Service Fusion and Kickserv</h3>
          <p>
            Service Fusion publishes plans with unlimited users: $220, $339 and $552 a month billed
            annually, or $259, $399 and $649 month to month. Invoicing, integrated payments and
            QuickBooks Online or Desktop sync are on every plan; job costing starts on Plus, and
            progress billing with recurring invoicing is included on Pro or sold as an add-on below
            it. Its payments page advertises card rates as low as 2.90% + $0.30, plus automated
            payment follow-ups, deposits and card on file.
          </p>
          <p>
            Kickserv prices by user bundles: $60 for 5 users, $119 for 10 and $199 for 20 a month,
            with 20% off for annual billing. QuickBooks Online is on Start, and QuickBooks Desktop
            costs $50 a month extra on Run. Its card rate is 2.9% with Tap to Pay and 3.9% when the
            card is not present, and it discounts the subscription 5% for shops that process a set
            minimum each month.
          </p>

          <h3>Quote-only tools: ServiceTitan, Workiz, FieldPulse and Commusoft</h3>
          <p>
            <strong>ServiceTitan</strong> lists invoicing on all three packages and says its payment
            fees vary by method, transaction type and your agreement. ServiceTitan Payments covers
            Tap to Pay and pay by bank in the US, payment links, automated membership billing and
            batch invoices, and its accounting integrations (QuickBooks Online and Desktop, Sage
            Intacct, Xero) are available to all customers.{' '}
            <strong>Workiz</strong> includes unlimited invoices, online payments, estimate deposits,
            consumer financing and Tap to Pay on every plan, with QuickBooks Online sync on every
            plan; its invoicing page calls the QuickBooks sync two-way, while its QuickBooks page says
            data flows one way, from Workiz to QuickBooks, so confirm in the demo.{' '}
            <strong>FieldPulse</strong> sells FieldPulse Payments as an add-on with cards, ACH, Tap to
            Pay for iPhone and next-day funding, and documents two-way sync with QuickBooks Online and Desktop.{' '}
            <strong>Commusoft</strong> handles deposits, consolidated monthly invoices and contract
            billing, takes cards through Stripe and ACH through GoCardless, and sells 12-month
            contracted or monthly rolling licenses. None of the four publishes processing fees.
          </p>

          <h2 id="quickbooks">QuickBooks Online vs Desktop</h2>
          <p>
            If your bookkeeper still runs QuickBooks Desktop, the list narrows. Service Fusion,
            ServiceTitan, Workiz and FieldPulse say they support both Online and Desktop (FieldPulse
            needs QuickBooks Desktop 2024 or newer), Kickserv charges $50 a
            month for Desktop on Run, and Housecall Pro’s pricing-page plan data lists QuickBooks
            Online and Desktop on Essentials (its Desktop guide says only US versions are supported).
            Jobber and ServiceM8 list QuickBooks Online and Xero but not Desktop. Our{' '}
            <Link href="/quickbooks" className={A}>FSM software for QuickBooks</Link> guide covers the
            setup details.
          </p>

          <h2 id="surcharging">Surcharging and passing on card fees</h2>
          <p>
            Some shops add a card surcharge to recover fees. Housecall Pro allows a surcharge of up
            to 3%, never on debit cards, and not in Connecticut, Maine, Massachusetts, New York or
            Canada. Its help center says it keeps a 0.50% fee on surcharged transactions, while its HVAC
            page describes “no-cost surcharging”, so ask how the fee is applied to your account.
            FieldPulse Payments offers dual pricing, a separate card price and ACH price. ACH at 1%
            is the simplest way to cut fees on large tickets where vendors offer it.
          </p>

          <h2 id="recurring-billing">Recurring billing for maintenance plans</h2>
          <p>
            Charging a card on file for maintenance plans is where plans split. Housecall Pro
            includes Recurring Service Plans on MAX ($299/month billed annually). Jobber’s automatic
            payments are for recurring jobs on select plans, starting with Connect. ServiceM8 offers
            auto-pay for recurring jobs from Starter, Service Fusion includes recurring invoicing on
            Pro, Workiz puts service plans on Ultimate, and ServiceTitan automates membership billing.
            For renewals, visits and failed-card handling, see our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link> guide.
          </p>

          <h2 id="vendor-claims">“Get paid faster” claims</h2>
          <p>
            Vendors publish their own speed figures. Housecall Pro says pros using its payments get
            paid 2X faster, based on pros processing at least half their payments with it over the
            past year. ServiceTitan says its payments customers get paid 40% faster, with results it
            calls illustrative. Workiz says its payment window drops by up to 40%. These are the
            vendors’ own numbers, not independent measurements.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on field service invoicing software">
            Compare the fees as closely as the plan price. Jobber and Housecall Pro publish both, with
            online card payments around 2.9% to 3% and ACH at 1%. ServiceM8 is the cheapest way in,
            Service Fusion suits larger teams that want unlimited users and QuickBooks Desktop, and
            quote-only tools should put their fee schedule in writing. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only
            prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
            <Link href="/quickbooks" className="text-orange-600 hover:text-orange-800">QuickBooks compatibility →</Link>
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
