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
 * /guides/field-service-software-contract-terms: targets "field service software contract", "field
 * service software auto renewal" and "field service software cancellation". No GSC data for this
 * topic yet. Per-vendor detail stays on each /pricing page; the commercial-only contract comparison
 * stays on /compare/servicetrade-alternatives.
 *
 * Most facts reuse the site's verified pricing and compare pages (dates in `sources`): Housecall Pro
 * 2026-10-24, Jobber 2026-11-03 to 2026-11-21, Xplor terms for FieldEdge first read 2026-11-20,
 * ServiceTitan, ServiceM8, Kickserv, Commusoft, FieldPulse, Service Fusion and Workiz 2026-11-24,
 * ServiceTrade, Tradify and Fergus 2026-11-25. New fetches on 2026-11-26 filled governing law, refunds
 * and data on exit from the vendors' own terms: FieldPulse Terms of Service, Workiz Terms v1.9,
 * Service Fusion Subscription Agreement, Kickserv Terms, the Xplor US SaaS terms PDF and Commusoft's
 * Standard Customer Terms.
 *
 * Conflicts, all stated on the page: Service Fusion's pricing page says month to month while its
 * Subscription Agreement renews the ordered term; ServiceM8's help center says "cancel at any time"
 * while its terms ask for 30 days' notice; Commusoft's plans page says contracted licenses renew
 * annually while its terms roll on after 12 months until 30 days' notice; FieldPulse's marketing does
 * not mention it, but its terms send disputes to individual arbitration. The Xplor PDF labels itself
 * "Version 1.2 May 2023"; the site's other pages call it the October 2023 terms (the file is dated
 * October 2023), so this page names neither date in visible text.
 *
 * Deliberately not used or not stated: Jobber's, ServiceTitan's, Housecall Pro's and Tradify's
 * governing law (not in our sources; their sites are not refetched, and Tradify's law sits in Access
 * Group terms we did not read); Workiz's governing law and data clauses past the part of its terms we
 * could read; any search snippet, review site or third-party summary of contract terms; reasons
 * customers leave any vendor. This page summarizes published terms and is not legal advice. Nothing
 * tested hands-on.
 */

const PATH = '/guides/field-service-software-contract-terms'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Field Service Software Contracts: Auto-Renewal and Cancellation (2026)'
const DESCRIPTION =
  'Term length, auto-renewal, notice to cancel, price increase caps, refunds, data on exit and governing law for 13 field service tools, from their own terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/field-service-software-contract-terms',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Field service software contracts', href: PATH },
]

type Tool = {
  name: string
  href: string
  term: string
  notice: string
  increase: string
  refunds: string
  data: string
  law: string
}

const yearly: Tool[] = [
  {
    name: 'ServiceTitan',
    href: '/pricing/servicetitan',
    term: '10-K: new customers typically sign 12 to 36 months, renewing automatically; month to month if there is no Order Form',
    notice: '30 days’ written notice of nonrenewal without an Order Form; ending early costs all remaining payments',
    increase: 'May change fees for features of the service; no cap stated',
    refunds: 'All fees paid are non-refundable',
    data: 'Export on request, fees may apply; not kept more than 60 days after termination',
    law: 'Not in our sources',
  },
  {
    name: 'FieldPulse',
    href: '/pricing/fieldpulse',
    term: 'One year unless the order form says otherwise; renews for one-year terms',
    notice: '60 days before the term ends, to cancellations@fieldpulse.com; no mid-term exit except uncured breach or business closure',
    increase: 'At renewal with 60 days’ written notice; no cap stated',
    refunds: 'Fees non-refundable and non-cancelable',
    data: 'Export for 60 days after the subscription ends; deleted within 90 days if you do not ask sooner',
    law: 'Texas law, Dallas County; binding individual arbitration (Flicent Inc., doing business as FieldPulse)',
  },
  {
    name: 'FieldEdge (Xplor terms)',
    href: '/pricing/fieldedge',
    term: 'Order Form sets the first term, then renews for 12 months at a time',
    notice: '60 days before the term ends; early termination fee equal to the remaining months’ fees',
    increase: 'Two months’ notice; you can leave within 10 days if the rise is above CPI',
    refunds: 'No refund clause found in the terms we read',
    data: 'Personal data returned or deleted on request “to the extent reasonably practical”',
    law: 'Delaware law and courts',
  },
  {
    name: 'ServiceTrade',
    href: '/pricing/servicetrade',
    term: 'Order sets the first term; renews automatically for one-year terms',
    notice: '30 days before the term ends',
    increase: 'At renewal, capped at 7% (exceptions for discounts and reduced quantities)',
    refunds: 'Paid in advance; non-cancelable and non-refundable; quantities cannot drop mid-term',
    data: 'Download for 30 days after the agreement ends, then may be deleted',
    law: 'North Carolina law, Wake County courts (ServiceTrade, Inc.)',
  },
  {
    name: 'Commusoft',
    href: '/pricing/commusoft',
    term: '12 months, then continues (plans page says contracted licenses renew annually)',
    notice: '30 days’ written notice after the first 12 months',
    increase: 'From each anniversary with 30 days’ notice, capped at 10%',
    refunds: 'No refund clause found',
    data: 'Stays your property; hand-over help to a new provider charged at standard rates',
    law: 'English law, courts of England and Wales (Commusoft Ltd)',
  },
  {
    name: 'Workiz',
    href: '/pricing/workiz',
    term: 'Set by your Sales Order; standard 12 months renewing for 12 months when read on November 21',
    notice: '30 days',
    increase: 'Up to 10% a year with 30 days’ written notice',
    refunds: 'Fees non-cancelable; payments non-refundable',
    data: 'You back up your own content; not a storage or archiving product',
    law: 'Not found in the part of the terms we could read (Workiz, Inc.)',
  },
]

const monthly: Tool[] = [
  {
    name: 'Service Fusion',
    href: '/pricing/service-fusion',
    term: 'Pricing page: month to month, no contract. Agreement: the ordered term renews automatically for the same length',
    notice: '30 days’ written notice before the term ends',
    increase: 'Can change fees upon notice; no cap stated',
    refunds: 'Fees non-refundable; no pro-rated refund on upgrades or downgrades',
    data: 'Export is a paid professional service; account and data may be deleted after termination',
    law: 'Texas law, federal courts in Dallas County (FSM Technologies, LLC)',
  },
  {
    name: 'Jobber',
    href: '/pricing/jobber',
    term: 'Annual prepaid, monthly with a 1-year commitment, or monthly with no commitment; all renew automatically',
    notice: 'Cancel 30 days before renewal; a 1-year commitment keeps billing to the end of the term',
    increase: 'Not documented in our sources',
    refunds: 'Annual prepaid is non-refundable',
    data: 'After an account is permanently closed, its data is no longer retrievable',
    law: 'Not in our sources',
  },
  {
    name: 'Housecall Pro',
    href: '/pricing/housecall-pro',
    term: 'Says it does not require long-term contracts; annual or month-to-month billing',
    notice: 'Not documented in our sources',
    increase: 'Not documented in our sources',
    refunds: 'Not documented in our sources',
    data: 'Admins can export Customers and Jobs lists, sent by email',
    law: 'Not in our sources',
  },
  {
    name: 'Kickserv',
    href: '/pricing/kickserv',
    term: 'One month or one year, renewing for the same length; annual cannot switch to monthly before renewal',
    notice: 'Written notice, effective at the end of the term; cancel payment authorization 15 days before billing',
    increase: 'Can change fees with notice, which may come on an invoice',
    refunds: 'Fees non-refundable',
    data: 'Cancelling permanently deletes customer and job records; export first or switch to the free plan',
    law: 'Colorado law, federal courts of Colorado (Norman’s Dojo, Inc.)',
  },
  {
    name: 'ServiceM8',
    href: '/pricing/servicem8',
    term: 'Help center: no contracts, cancel at any time',
    notice: 'Terms: at least 30 days before the end of the payment period',
    increase: 'No price-change notice clause',
    refunds: 'No refund clause',
    data: 'Stays your property; no export process described',
    law: 'Australian law (ServiceM8 Pty Ltd)',
  },
  {
    name: 'Fergus',
    href: '/pricing/fergus',
    term: 'No fixed term; billed monthly in arrears',
    notice: 'Cancel in Settings; takes effect at the end of that month',
    increase: 'Advance notice; no amount stated',
    refunds: 'No fees refunded on termination',
    data: 'Account locks; Fergus may remove all your material, so keep your own copy',
    law: 'New Zealand law for customers outside Australia and the UK (Fergus Software Limited)',
  },
  {
    name: 'Tradify',
    href: '/pricing/tradify',
    term: 'No minimum term stated; cancel at any time in the app',
    notice: 'No notice period stated',
    increase: 'Not stated',
    refunds: 'Monthly or yearly charges not refunded on cancellation',
    data: 'Not stated',
    law: 'Not in our sources; Tradify Limited is a New Zealand company',
  },
]

const cols: { key: keyof Omit<Tool, 'name' | 'href'>; label: string }[] = [
  { key: 'term', label: 'Term and renewal' },
  { key: 'notice', label: 'Notice to cancel' },
  { key: 'increase', label: 'Price increases' },
  { key: 'refunds', label: 'Refunds' },
  { key: 'data', label: 'Your data on exit' },
  { key: 'law', label: 'Governing law' },
]

const faqs = [
  {
    question: 'Do field service software contracts auto-renew?',
    answer:
      'Most do. ServiceTitan, FieldPulse, FieldEdge’s Xplor terms, ServiceTrade, Workiz, Kickserv, Jobber and Service Fusion all renew automatically unless you give notice. Commusoft rolls on after its first 12 months until either side gives 30 days’ notice. Fergus has no fixed term, and Tradify lets you cancel at any time in the app.',
  },
  {
    question: 'How much notice do I need to give to cancel?',
    answer:
      'It ranges from none to 60 days. FieldPulse and FieldEdge’s Xplor terms need 60 days before the term ends. ServiceTrade, Commusoft (after year one), Workiz, Service Fusion, Jobber and ServiceM8’s terms ask for 30 days. Kickserv needs written notice and the payment authorization cancelled 15 days before billing. Fergus ends at the end of the month you cancel.',
  },
  {
    question: 'Can I get a refund if I cancel field service software?',
    answer:
      'Rarely. ServiceTitan, FieldPulse, ServiceTrade, Workiz, Service Fusion, Kickserv, Fergus and Tradify all say fees are non-refundable, and Jobber’s annual prepaid billing is non-refundable. ServiceM8 and Commusoft have no refund clause, which is not the same as a promise to refund.',
  },
  {
    question: 'Which field service software caps price increases?',
    answer:
      'ServiceTrade caps renewal increases at 7%, and Commusoft and Workiz at 10% a year. FieldEdge’s Xplor terms set no cap but let you leave within 10 days if a rise is above CPI. FieldPulse, ServiceTitan, Service Fusion and Kickserv can raise fees with notice and state no cap.',
  },
  {
    question: 'Can I leave a field service software contract early?',
    answer:
      'Usually not without paying. ServiceTitan charges a termination fee equal to all remaining payments, FieldEdge’s Xplor terms an early termination fee equal to the remaining months’ fees, and FieldPulse allows no mid-term exit except for an uncured material breach or a business closure. Jobber’s 1-year commitment keeps billing until the term ends.',
  },
  {
    question: 'What happens to my data when I cancel?',
    answer:
      'Windows are short. FieldPulse allows export for 60 days, ServiceTrade 30 days, and ServiceTitan keeps data no more than 60 days. Kickserv deletes records when you cancel, a closed Jobber account cannot be recovered, Fergus locks the account, and Service Fusion charges for export as a professional service. Export before you give notice.',
  },
]

const sources = [
  { name: 'ServiceTitan Form 10-K, fiscal year ended January 31, 2026 (contract length, renewal)', url: 'https://www.sec.gov/Archives/edgar/data/1638826/000163882626000028/ttan-20260131.htm', checked: '2026-11-24' },
  { name: 'ServiceTitan Terms of Use (last updated September 16, 2026)', url: 'https://www.servicetitan.com/legal/terms-of-use', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service (term, renewal, notice, increases, month-to-month premium)', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-24' },
  { name: 'FieldPulse Terms of Service (refunds 8.21 and 10.1, data export 24.8, arbitration 28, Texas law 30.1)', url: 'https://www.fieldpulse.com/terms-of-service', checked: '2026-11-26' },
  { name: 'FieldEdge pricing (annual memberships)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement (renewal 2.2, increases 2.3, early termination 13.4, data 10.1.9, Delaware law 15.19)', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-26' },
  { name: 'ServiceTrade Master Services Agreement (updated August 10, 2026)', url: 'https://servicetrade.com/company/terms/msa-aug2026/', checked: '2026-11-25' },
  { name: 'Commusoft plans (US): contracted licenses renew annually', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-24' },
  { name: 'Commusoft Standard Customer Terms (term 3, increases 4.8, hand-over 12.7.3, data 13.5, English law 25)', url: 'https://www.commusoft.com/en-us/company/terms-conditions/', checked: '2026-11-26' },
  { name: 'Workiz Terms of Service v1.9 (12-month term and 30 days’ notice, read 2026-11-21)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-24' },
  { name: 'Workiz Terms of Service v1.9 (refunds 13.1 and 13.5, increases 13.2, data section 4)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-26' },
  { name: 'Service Fusion pricing (month-to-month FAQ)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026; Texas law section 23)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-26' },
  { name: 'Jobber pricing (billing options, renewal, annual prepaid non-refundable)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber Terms of Service (last updated September 22, 2026)', url: 'https://www.getjobber.com/terms-of-service/', checked: '2026-11-21' },
  { name: 'Jobber help: permanently close an account', url: 'https://help.getjobber.com/en/articles/how-do-i-permanently-close-my-account/', checked: '2026-11-21' },
  { name: 'Housecall Pro pricing (no long-term contracts FAQ)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
  { name: 'Housecall Pro help: import and export jobs and customers', url: 'https://help.housecallpro.com/en/articles/6797101-how-to-import-export-jobs-and-customers', checked: '2026-11-21' },
  { name: 'Kickserv Terms of Service (last modified August 21, 2024; Colorado law section 23)', url: 'https://www.kickserv.com/terms', checked: '2026-11-26' },
  { name: 'Kickserv help: how to cancel (free plan, data deletion)', url: 'https://help.kickserv.com/article/61-how-do-i-cancel-my-account', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost (no contracts, cancel at any time)', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 Terms of Service (notice, data, Australian law)', url: 'https://www.servicem8.com/us/terms-of-service', checked: '2026-11-24' },
  { name: 'Fergus US pricing (no lock-in contracts)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
  { name: 'Fergus Terms of Service (refunds, material, New Zealand law)', url: 'https://fergus.com/terms-of-service/', checked: '2026-11-25' },
  { name: 'Fergus help: cancelling your account', url: 'https://help.fergus.com/en/articles/5068313-cancelling-your-account', checked: '2026-11-25' },
  { name: 'Tradify Product-Specific Terms of Service (sections 5.1.2 and 5.1.3)', url: 'https://www.tradifyhq.com/terms', checked: '2026-11-25' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

function TermsTable({ tools }: { tools: Tool[] }) {
  return (
    <>
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
    </>
  )
}

export default function FieldServiceSoftwareContractTermsPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/field-service-software-contract-terms"
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
            Field service software contracts: <span className="text-orange-400">renewal, cancellation and the fine print</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Thirteen field service tools compared on what their own terms say about term length, auto-renewal,
            notice to cancel, price increases, refunds, your data and governing law, checked in November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Most field service software contracts <strong>renew automatically</strong> and{' '}
            <strong>do not refund fees</strong>. The longest notice periods are 60 days, at{' '}
            <strong>FieldPulse</strong> and in the Xplor terms <strong>FieldEdge</strong> links; ServiceTrade,
            Commusoft, Workiz, Service Fusion and Jobber ask for 30. Leaving <strong>ServiceTitan</strong> early
            costs all remaining payments. Only ServiceTrade (7%), Commusoft and Workiz (10%) cap yearly price
            increases, and FieldEdge&rsquo;s terms let you leave after a rise above CPI. Fergus has no fixed term,
            Tradify lets you cancel at any time in the app, and Housecall Pro says it requires no long-term
            contract. This page summarizes published terms; it is not legal advice.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="how-we-checked">How we read the terms</h2>
          <p>
            Every row comes from the vendor&rsquo;s own terms of service, subscription agreement, pricing page,
            help center or annual report, with the check date in the sources at the end. Where a vendor&rsquo;s
            pricing page and its terms disagree, we show both. &ldquo;Not in our sources&rdquo; means we did not
            read that clause, not that it is missing. Your order form or sales order usually sets the actual term
            and can override the standard terms, so read it before you sign. See{' '}
            <Link href="/how-we-review" className={A}>how we review</Link> for our method.
          </p>
        </div>

        <section className="mt-12" id="yearly">
          <h2 className={H2}>Tools sold on yearly or longer terms</h2>
          <p className={SUB}>
            Standard published terms, not a negotiated contract and not a hands-on test. Click a name for its full
            pricing page.
          </p>
          <TermsTable tools={yearly} />
        </section>

        <section className="mt-12" id="monthly">
          <h2 className={H2}>Tools with a month-to-month option or no fixed term</h2>
          <p className={SUB}>
            &ldquo;Month to month&rdquo; on a pricing page does not always mean no renewal clause; Service Fusion
            and Kickserv still renew the term you pick automatically.
          </p>
          <TermsTable tools={monthly} />
        </section>

        <div className="prose-body mt-12">
          <h2 id="term">Term length and auto-renewal</h2>
          <p>
            ServiceTitan&rsquo;s 10-K says new-customer contracts typically run 12 to 36 months and renew
            automatically unless cancelled in advance. FieldPulse defaults to one year renewing for one-year terms,
            FieldEdge&rsquo;s linked Xplor terms renew for 12 months at a time after the first term on your Order
            Form, and ServiceTrade renews for one-year terms. Commusoft sets a 12-month first period, then the
            agreement continues until either side gives notice; its plans page describes contracted licenses as
            renewing annually, so check the wording on your order. Workiz&rsquo;s standard term was 12 months
            renewing for 12 months when we read its terms on November 21.
          </p>
          <p>
            <strong>Service Fusion</strong> is the case to read twice: its pricing page says all plans are offered
            month to month with no contract requirements, while its Subscription Agreement says the term in your
            order renews automatically for the same length unless either side gives 30 days&rsquo; written notice.
            Jobber sells each plan three ways (annual prepaid, monthly with a one-year commitment, or monthly with no
            commitment), and all three renew automatically unless set to non-renew.
          </p>

          <h2 id="cancel">Notice periods and how to cancel</h2>
          <ul>
            <li><strong>FieldPulse</strong>: notice at least 60 days before the term ends, sent to cancellations@fieldpulse.com. No mid-term cancellation except for an uncured material breach or a business closure.</li>
            <li><strong>FieldEdge</strong>: written notice at least 60 days before the term ends; ending early can cost a fee equal to the monthly fees for the remaining months.</li>
            <li><strong>ServiceTitan</strong>: the term is in your Order Form; without one, 30 days&rsquo; written notice of nonrenewal. Ending early costs a termination fee equal to all remaining payments.</li>
            <li><strong>ServiceTrade, Commusoft, Workiz and Service Fusion</strong>: 30 days before the term ends (Commusoft: 30 days&rsquo; written notice at any time after the first 12 months).</li>
            <li><strong>Jobber</strong>: cancel 30 days before renewal; a one-year commitment keeps billing monthly until the term ends.</li>
            <li><strong>Kickserv</strong>: written notice, effective at the end of the current month or year, and cancel the payment authorization at least 15 days before the next billing date.</li>
            <li><strong>ServiceM8</strong>: its help center says you can cancel at any time, but its Terms of Service ask for notice at least 30 days before the end of the payment period. Give notice early.</li>
            <li><strong>Fergus</strong>: Settings, Billing, Manage Plans, Cancel Subscription; it takes effect at the end of that month and the final invoice comes on the 1st.</li>
            <li><strong>Tradify</strong>: cancel at any time through the cancellation process in the app.</li>
          </ul>

          <h2 id="increases">Price increase caps</h2>
          <p>
            Three tools cap increases in their standard terms: <strong>ServiceTrade</strong> at 7% at renewal (with
            exceptions for promotional or discounted pricing and reduced quantities), and <strong>Commusoft</strong>{' '}
            and <strong>Workiz</strong> at 10% a year, each with 30 days&rsquo; written notice.{' '}
            <strong>FieldEdge</strong>&rsquo;s Xplor terms set no cap but require two months&rsquo; notice and let
            you terminate without penalty within 10 days if the rise is above CPI. FieldPulse can raise fees for a
            renewal term with 60 days&rsquo; notice, and its month-to-month premium can be up to 50% over the annual
            rate. ServiceTitan, Service Fusion, Kickserv and Fergus can change fees with notice and state no cap.
          </p>

          <h2 id="refunds">Refunds</h2>
          <p>
            Expect none. ServiceTitan, FieldPulse, ServiceTrade, Workiz, Service Fusion and Kickserv call fees
            non-refundable, Fergus refunds no fees on termination, Tradify does not refund monthly or yearly charges
            when you cancel, and Jobber&rsquo;s annual prepaid billing is non-refundable. ServiceM8&rsquo;s terms and
            Commusoft&rsquo;s terms have no refund clause, and we found none in the Xplor terms FieldEdge links.
            Housecall Pro&rsquo;s refund terms are not in our sources.
          </p>

          <h2 id="data">What happens to your data</h2>
          <p>
            This is where cancelling goes wrong most easily, because several tools delete or lock records soon after
            the account ends:
          </p>
          <ul>
            <li><strong>FieldPulse</strong>: you can export customer data for 60 days after the subscription ends; without a request, it is deleted within 90 days.</li>
            <li><strong>ServiceTrade</strong>: available to download for 30 days after the agreement ends, then may be permanently deleted.</li>
            <li><strong>ServiceTitan</strong>: export on request, service fees may apply, and it does not have to keep data more than 60 days after termination.</li>
            <li><strong>Kickserv</strong>: cancelling permanently deletes customer and job records; export from Account and Billing or switch to the free plan.</li>
            <li><strong>Jobber</strong>: once an account is permanently closed, its data is no longer retrievable.</li>
            <li><strong>Service Fusion</strong>: exporting your data is a paid professional service, and the account and its data may be deleted after termination.</li>
            <li><strong>Fergus</strong>: the account locks at the end of the month, and Fergus may remove all your material.</li>
            <li><strong>Commusoft and ServiceM8</strong>: your data stays your property; Commusoft charges standard rates for hand-over help, and ServiceM8 describes no export process.</li>
            <li><strong>Workiz</strong>: its terms say you are responsible for backing up your own content.</li>
          </ul>

          <h2 id="law">Governing law and who you contract with</h2>
          <p>
            Several tools that sell in the US put their contract under another jurisdiction.{' '}
            <strong>Commusoft</strong> contracts under English law with the courts of England and Wales.{' '}
            <strong>ServiceM8</strong>&rsquo;s US terms are from ServiceM8 Pty Ltd under Australian law.{' '}
            <strong>Fergus</strong> contracts with Fergus Software Limited under New Zealand law for customers
            outside Australia and the UK, and <strong>Tradify</strong> Limited is incorporated in New Zealand. Among
            US vendors, FieldPulse and Service Fusion use Texas law with Dallas County venues, and FieldPulse adds
            binding individual arbitration and a jury waiver; ServiceTrade uses North Carolina, Kickserv Colorado,
            and FieldEdge&rsquo;s Xplor terms Delaware. If a dispute is likely to matter to you, ask a lawyer what
            that means where you operate.
          </p>

          <h2 id="checklist">What to ask before you sign</h2>
          <ol>
            <li>What is the first term on my order form, and does it renew automatically? For how long?</li>
            <li>What is the exact date my notice is due, who do I send it to, and in what form?</li>
            <li>Can I leave mid-term, and what is the early termination fee?</li>
            <li>How much can the price rise at renewal, how much notice do I get, and can I leave if I do not accept it?</li>
            <li>Can I reduce users or seats mid-term, or only add them?</li>
            <li>Is anything refundable, including annual prepayments, add-ons and onboarding?</li>
            <li>How long can I export my data after cancelling, in what format, and is there a fee?</li>
            <li>Which company am I contracting with, which law applies, and is there an arbitration clause?</li>
            <li>Does the order form override any of the standard terms on the website? Get every answer in writing.</li>
          </ol>
          <p>
            For contract terms on commercial-focused tools side by side, see{' '}
            <Link href="/compare/servicetrade-alternatives" className={A}>ServiceTrade alternatives</Link>. For plan
            prices, see the <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="info" title="Not legal advice">
            This guide summarizes each vendor&rsquo;s published standard terms as we read them in November 2026.
            Terms change, and your signed order form can differ. For advice on a specific contract, talk to a lawyer.
          </CalloutBox>
          <CalloutBox tone="verdict" title="Bottom line">
            Assume the contract renews and fees are not refunded. Before you sign, write down the notice date, the
            price increase rule and the data export window, and export your records before you give notice. If a
            short commitment matters most, look at Fergus (no fixed term), Tradify (cancel any time in the app),
            Housecall Pro (no long-term contract required) and Jobber&rsquo;s no-commitment monthly option.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/servicetrade-alternatives" className="text-orange-600 hover:text-orange-800">ServiceTrade alternatives →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
            <Link href="/how-we-review" className="text-orange-600 hover:text-orange-800">How we review →</Link>
            <Link href="/guides" className="text-orange-600 hover:text-orange-800">All guides →</Link>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Sources</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
              {sources.map((s) => (
                <li key={s.url + s.checked}>
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
