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
 * /compare/fergus-alternatives: targets "fergus alternatives", "fergus competitors" and "software like
 * fergus". No GSC data for this topic yet. Pricing detail stays on /pricing/fergus; head-to-heads stay
 * on /compare/tradify-vs-fergus and /compare/servicem8-vs-fergus.
 *
 * Fergus facts come from its US pricing page, global pricing page, Terms of Service and help center,
 * checked 2026-11-25 (via /pricing/fergus and b16 research). Alternatives reuse the site's verified
 * pricing and feature pages: ServiceM8, Kickserv, Commusoft and Service Fusion checked 2026-11-24,
 * Tradify 2026-11-25, Jobber pricing 2026-11-21 and Jobber QuickBooks help 2026-11-20 (dates in
 * `sources`). Angle: how each tool bills a crew that mixes full users, timesheet-only staff and
 * subcontractors, plus purchasing and contract terms.
 *
 * Conflicts, stated on the page: (1) Fergus's pricing page says "per month" without saying per user,
 * while its terms say fees are charged "on a per user basis with a plan type base", so no Fergus team
 * total is worked out; (2) Fergus contractor users are $2.50 a day on the US page and $4 on the global
 * page (US used); (3) Fergus's help center calls the entry plan Basic, the US page Essentials;
 * (4) ServiceM8's help center says no contracts while its terms ask for 30 days' notice; (5) Service
 * Fusion's pricing page says month to month while its agreement renews the term automatically;
 * (6) Tradify's terms mention yearly charges while its pricing page shows no annual option.
 *
 * Deliberately not used: Fergus feature rows whose icons mapped differently between the US and global
 * pages (GPS, job phases, tasks, enquiry management, estimating and takeoff); the Australian Fergus Pay
 * rate as a US figure; vendor claims about competitors; review sites, ratings and third-party price
 * estimates. We do not say why customers leave Fergus. Nothing tested hands-on.
 */

const PATH = '/compare/fergus-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Fergus Alternatives (2026): Billing for Crews and Subcontractors'
const DESCRIPTION =
  'Six Fergus alternatives compared on how they bill users, subcontractors and part-time staff, plus purchase orders, accounting, contracts and trials.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/fergus-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Fergus alternatives', href: PATH },
]

type Tool = {
  name: string
  price: string
  model: string
  crew: string
  purchasing: string
  accounting: string
  terms: string
}

const tools: Tool[] = [
  {
    name: 'Fergus (for reference)',
    price: 'Essentials from $31; Professional from $44; Enterprise quote for more than 10 staff',
    model: 'Pricing page says “per month”; terms say per user with a plan type base',
    crew: 'Timesheet users from $26 a month; contractor users $2.50 a day they are scheduled or log time',
    purchasing: 'Professional: purchase orders, automatic supplier integrations (manual on Essentials), hazards and SWMS',
    accounting: 'Xero, QuickBooks and MYOB; QuickBooks edition not stated',
    terms: 'Monthly in arrears; no yearly plans; no lock-in; 14-day trial of Essentials, no card',
  },
  {
    name: 'ServiceM8',
    price: 'Free $0 (1 user, 30 jobs); Starter $29 (50 jobs); Growing $79 (150); Premium $149 (500); Premium Plus $349 (1,500+)',
    model: 'By jobs a month; unlimited users on paid plans',
    crew: 'No separate user types: every paid plan has unlimited users',
    purchasing: 'Supplier invoice import from Starter; job costing and markup billing on Premium',
    accounting: 'QuickBooks Online, Xero and MYOB; Desktop not mentioned',
    terms: 'Help center says no contracts; terms ask for 30 days’ notice; free plan and 14-day trial',
  },
  {
    name: 'Tradify',
    price: 'Lite $47, Pro $51, Plus $61 per user; Custom on request',
    model: 'Per user, stated on the pricing page',
    crew: 'Subcontractor scheduling and timesheets from Pro; how subcontractors are billed is not documented',
    purchasing: 'Purchase orders and SmartRead for Bills on Plus; costing and bill tracking from Pro',
    accounting: 'Xero and QuickBooks; edition not specified',
    terms: 'Cancel any time in the app; no annual option shown; 14-day trial, no card',
  },
  {
    name: 'Jobber',
    price: 'Core $29 (1 user) billed annually, $49 with no commitment; Connect $149 for 5 users billed annually',
    model: 'By plan and team-size band (1, 5, 10, 15 users); extra users $29 each',
    crew: 'No subcontractor or timesheet-only user type documented',
    purchasing: 'Receipt capture and supplier invoice scanning on Plus; purchase orders not documented',
    accounting: 'QuickBooks Online and Xero from Connect; no Desktop',
    terms: 'Annual prepaid, 1-year billed monthly, or no commitment; renews unless set to non-renew; 14-day trial, no card',
  },
  {
    name: 'Kickserv',
    price: 'Start $60 (5 users), Run $119 (10 users), Scale $199 (20 users)',
    model: 'Flat plan price up to a user limit; 20% off with annual',
    crew: 'No subcontractor user type documented',
    purchasing: 'Purchase orders not listed; time and expense tracking from Start',
    accounting: 'QuickBooks Online from Start; Desktop $50 a month or $480 a year',
    terms: 'Written notice, effective at the end of the current term; fees non-refundable; 30-day trial',
  },
  {
    name: 'Commusoft',
    price: 'Not published',
    model: 'Per license per month: contracted, monthly rolling and daily',
    crew: 'Daily licenses for subcontractors, billed by days used; rolling licenses for seasonal staff',
    purchasing: 'Purchase orders generated when van or warehouse stock falls below a minimum',
    accounting: 'QuickBooks Online and Xero',
    terms: '12-month initial term, then 30 days’ written notice; trial length not stated',
  },
  {
    name: 'Service Fusion',
    price: 'Starter $220, Plus $339, Pro $552 billed annually ($259, $399, $649 monthly)',
    model: 'Flat price with unlimited users',
    crew: 'No separate user types: users are unlimited',
    purchasing: 'Inventory and job costing from Plus; purchase orders not documented',
    accounting: 'QuickBooks Online and Desktop on every plan',
    terms: 'Pricing page says month to month; agreement renews the term unless 30 days’ notice; demo only',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price (per month)' },
  { key: 'model', label: 'How it charges' },
  { key: 'crew', label: 'Subcontractors and part-time staff' },
  { key: 'purchasing', label: 'Purchasing and suppliers' },
  { key: 'accounting', label: 'Accounting' },
  { key: 'terms', label: 'Terms and trial' },
]

const faqs = [
  {
    question: 'Which Fergus alternative fits my business?',
    answer:
      'Start with how your crew is made up. If you have many full-time staff, a tool with unlimited users such as ServiceM8 (priced by jobs) or Service Fusion (flat price) avoids paying per person. If you want a plainly stated per-user price, Tradify lists one. If you lean on subcontractors, Commusoft sells daily licenses, which is the closest match to Fergus’s contractor users.',
  },
  {
    question: 'Is there a Fergus alternative that does not charge per user?',
    answer:
      'Yes. ServiceM8 charges by jobs a month and has unlimited users on every paid plan, from $29 for 50 jobs. Service Fusion has unlimited users on every plan, from $220 a month billed annually. Kickserv charges a flat plan price up to a user limit: $60 for 5 users, $119 for 10 and $199 for 20.',
  },
  {
    question: 'Which alternatives handle subcontractors the way Fergus does?',
    answer:
      'Fergus charges contractor users $2.50 a day, only on days they are scheduled or log time. Commusoft is the closest documented match, with daily licenses for subcontractors billed by the days used. Tradify lists subcontractor scheduling from its Pro plan but does not say how subcontractors are billed. ServiceM8 and Service Fusion avoid the question with unlimited users.',
  },
  {
    question: 'Which Fergus alternatives have purchase orders?',
    answer:
      'Tradify lists purchase orders on its Plus plan ($61 per user a month), and Commusoft generates purchase orders when stock falls below a minimum. ServiceM8 imports supplier invoices from Starter, and Jobber scans supplier invoices on Plus, but neither documents purchase orders on the pages we use. On Fergus, purchase orders need Professional.',
  },
  {
    question: 'Do any alternatives offer yearly billing?',
    answer:
      'Fergus has no yearly plans. Jobber offers annual prepaid billing (Core $29 a month instead of $49 with no commitment), Kickserv says you save 20% with an annual subscription, and Service Fusion’s lower prices are billed annually. Commusoft’s terms start with a 12-month period. Tradify’s pricing page shows no annual option.',
  },
  {
    question: 'What should I do before cancelling Fergus?',
    answer:
      'Export your data first. Fergus’s help center says cancellation takes effect at the end of the month you request it, the final invoice comes on the 1st of the next month and the account is then locked. Its terms say no fees are refunded on termination and that Fergus may remove your material, so keep your own copy.',
  },
]

const sources = [
  { name: 'Fergus US pricing (plans, user types, add-ons, FAQ)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
  { name: 'Fergus global pricing (contractor users $4 a day, for comparison only)', url: 'https://fergus.com/pricing/', checked: '2026-11-25' },
  { name: 'Fergus Terms of Service (per user basis, refunds, data)', url: 'https://fergus.com/terms-of-service/', checked: '2026-11-25' },
  { name: 'Fergus help: changing your Fergus plan (monthly in arrears)', url: 'https://help.fergus.com/en/articles/2292283-changing-your-fergus-plan', checked: '2026-11-25' },
  { name: 'Fergus help: cancelling your account', url: 'https://help.fergus.com/en/articles/5068313-cancelling-your-account', checked: '2026-11-25' },
  { name: 'Fergus help: contractors in Fergus', url: 'https://help.fergus.com/en/articles/3617164-contractors-in-fergus', checked: '2026-11-25' },
  { name: 'Fergus help: timesheet user', url: 'https://help.fergus.com/en/articles/11387079-timesheet-user', checked: '2026-11-25' },
  { name: 'Fergus official information (markets, trades, team sizes)', url: 'https://fergus.com/llm-info/', checked: '2026-11-25' },
  { name: 'ServiceM8 pricing (US plans, job limits, features by plan)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 home (sole traders up to 20 staff, trial)', url: 'https://www.servicem8.com/us', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost (no contracts)', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 Terms of Service (30 days’ notice)', url: 'https://www.servicem8.com/us/terms-of-service', checked: '2026-11-24' },
  { name: 'Tradify pricing (per-user plans and features)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify home (trades, trial)', url: 'https://www.tradifyhq.com/', checked: '2026-11-25' },
  { name: 'Tradify product terms (cancellation, refunds)', url: 'https://www.tradifyhq.com/terms', checked: '2026-11-25' },
  { name: 'Jobber pricing (plans, bands, billing options, trial)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Kickserv pricing (plans, users, annual saving, trial)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv help: QuickBooks Desktop', url: 'https://help.kickserv.com/article/8-connect-to-quickbooks-desktop', checked: '2026-11-24' },
  { name: 'Kickserv Terms of Service', url: 'https://www.kickserv.com/terms', checked: '2026-11-24' },
  { name: 'Commusoft plans (license types, 6 or more staff)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-24' },
  { name: 'Commusoft standard customer terms (US site link)', url: 'https://www.commusoft.com/en-us/company/terms-conditions/', checked: '2026-11-24' },
  { name: 'Commusoft inventory management (purchase orders)', url: 'https://www.commusoft.com/en-us/features/inventory-management/', checked: '2026-11-24' },
  { name: 'Commusoft integrations', url: 'https://www.commusoft.com/en-us/integrations/', checked: '2026-11-24' },
  { name: 'Service Fusion pricing (plans, unlimited users, month-to-month FAQ)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function FergusAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/fergus-alternatives"
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
            Fergus alternatives: <span className="text-orange-400">six tools compared on how they bill your crew</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How six field service tools charge for full staff, part-time staff and subcontractors, and how they
            compare with Fergus on purchasing, accounting and terms, from each vendor’s own pages, checked
            November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Fergus lists Essentials from $31 and Professional from $44 a month, bills monthly in arrears with no
            yearly plans, and adds timesheet users from $26 a month and contractor users at $2.50 a day.{' '}
            <strong>ServiceM8</strong> (from $29 for 50 jobs) and <strong>Service Fusion</strong> ($220 billed
            annually) have unlimited users instead. <strong>Tradify</strong> states a per-user price from $47.{' '}
            <strong>Jobber</strong> sells team-size bands from $29 billed annually, <strong>Kickserv</strong> covers
            5 users for $60, and <strong>Commusoft</strong> is quote only, with daily licenses for subcontractors.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="fergus">How Fergus charges, in short</h2>
          <p>
            Fergus’s US pricing page shows Essentials from $31 and Professional from $44 “per month” without saying
            per user, while its Terms of Service say fees are charged “on a per user basis with a plan type base”.
            Its help center says a full user is billed at a flat monthly rate. Two cheaper user types sit beside
            full users: a <strong>timesheet user</strong> (from $26 a month) records hours and breaks in the Fergus
            Go app and can view job cards, and a <strong>contractor user</strong> ($2.50 a day) is charged only on
            days they are scheduled or log time. Fergus’s global pricing page lists contractor users at $4 a day,
            so check the page for your country.
          </p>
          <p>
            Professional adds purchase orders, hazards and SWMS, checklists, forms and reporting, and runs supplier
            integrations automatically rather than manually. Fergus says it serves sole traders through to
            businesses with 30+ staff, with a custom Enterprise plan above 10 staff. Full detail is on{' '}
            <Link href="/pricing/fergus" className={A}>Fergus pricing</Link>.
          </p>

          <h2 id="when">When an alternative may fit better</h2>
          <ul>
            <li><strong>You want a team total up front</strong>: Fergus does not print a per-user amount, so you need a quote for your headcount. ServiceM8, Tradify, Jobber, Kickserv and Service Fusion publish prices you can total yourself.</li>
            <li><strong>Many full-time staff</strong>: tools with unlimited users (ServiceM8, Service Fusion) or user bands (Kickserv, Jobber) do not grow line by line with each hire.</li>
            <li><strong>You want annual billing</strong>: Fergus has no yearly plans. Jobber, Kickserv and Service Fusion show lower prices for annual billing.</li>
            <li><strong>QuickBooks Desktop</strong>: Fergus lists QuickBooks without naming the edition. Service Fusion and Kickserv document Desktop.</li>
          </ul>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Fergus alternatives compared</h2>
          <p className={SUB}>
            Published prices and documented features only, not a hands-on test. Prices are per month in the
            currency each US page shows (Tradify’s page prints “$” with no currency code). Sources and check dates
            are at the end of this page.
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
                {tools.map((t, i) => (
                  <tr key={t.name} className={i === 0 ? 'bg-slate-50 align-top dark:bg-slate-900/60' : 'align-top'}>
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
          <h2 id="alternatives">The alternatives</h2>

          <h3>ServiceM8</h3>
          <p>
            <strong>What differs:</strong> ServiceM8 prices by jobs a month, not people, and every paid plan has
            unlimited users, so office staff, apprentices and subcontractors need no separate user type. Growing
            is $79 for 150 jobs whether 3 or 12 people log in. It connects to QuickBooks Online, Xero and MYOB and
            imports supplier invoices from Starter. <strong>Watch for:</strong> a busy month can push you up a job
            tier, and ServiceM8 says it is built for sole traders up to 20 staff. See{' '}
            <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link> and the{' '}
            <Link href="/compare/servicem8-vs-fergus" className={A}>ServiceM8 vs Fergus</Link> comparison.
          </p>

          <h3>Tradify</h3>
          <p>
            <strong>What differs:</strong> Tradify prints its price per user on the pricing page: Lite $47, Pro
            $51 and Plus $61. As arithmetic on those prices, 4 users on Plus come to $244 a month. Pro adds
            subcontractor scheduling and timesheets, and Plus adds purchase orders and SmartRead for Bills, which
            puts Tradify’s purchasing features on its top published tier, as Fergus does with Professional.{' '}
            <strong>Watch for:</strong> it does not document a cheaper seat for timesheet-only staff or
            subcontractors, and its Stripe card fee is 3.1% + $0.30. See{' '}
            <Link href="/pricing/tradify" className={A}>Tradify pricing</Link> and{' '}
            <Link href="/compare/tradify-vs-fergus" className={A}>Tradify vs Fergus</Link>.
          </p>

          <h3>Jobber</h3>
          <p>
            <strong>What differs:</strong> Jobber sells plans in team-size bands of 1, 5, 10 and 15 users, with
            three billing options: annual prepaid, a 1-year commitment billed monthly, or no commitment. Core is
            $29 a month billed annually or $49 with no commitment, and Connect covers 5 users for $149 billed
            annually with QuickBooks Online and Xero. <strong>Watch for:</strong> no subcontractor user type or
            purchase orders are documented, there is no QuickBooks Desktop, and subscriptions renew automatically.
            See <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>Kickserv</h3>
          <p>
            <strong>What differs:</strong> one flat plan price covers a set number of users: Start $60 for 5, Run
            $119 for 10 and Scale $199 for 20, with 20% off on an annual subscription and a 30-day trial.
            QuickBooks Online is included from Start, and QuickBooks Desktop costs $50 a month or $480 a year.{' '}
            <strong>Watch for:</strong> purchase orders and a subcontractor user type are not listed, and fees are
            non-refundable. See <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link>.
          </p>

          <h3>Commusoft</h3>
          <p>
            <strong>What differs:</strong> Commusoft’s license model is the nearest to Fergus’s user types.
            Contracted licenses cover permanent staff, monthly rolling licenses cover seasonal or temporary staff,
            and daily licenses for subcontractors are billed by the days used. It generates purchase orders when
            van or warehouse stock falls below a minimum. <strong>Watch for:</strong> no published prices, a
            12-month initial term followed by 30 days’ written notice, and a stated focus on businesses with 6 or
            more staff. See <Link href="/pricing/commusoft" className={A}>Commusoft pricing</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>What differs:</strong> a flat price with unlimited users on every plan: Starter $220, Plus
            $339 and Pro $552 a month billed annually, or $259, $399 and $649 billed monthly. QuickBooks Online and
            Desktop are on every plan, and Plus adds inventory and job costing. It may suit teams above the 10-staff
            point where Fergus moves to a custom Enterprise quote. <strong>Watch for:</strong> a higher entry
            price, demo only, and an agreement that renews its term unless either side gives 30 days’ notice. See{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <h2 id="switching">Before you switch from Fergus</h2>
          <ul>
            <li>List every person by role: full users, timesheet-only staff and subcontractors, with the days each subcontractor worked last month. At $2.50 a day, a subcontractor scheduled 10 days costs $25 on Fergus.</li>
            <li>Ask Fergus for your current monthly total, since the per-user amount is not printed, and compare it with each alternative’s published price for the same headcount.</li>
            <li>Export clients, jobs, price books and invoices first: Fergus locks the account at the end of the month you cancel, and its terms say fees are not refunded.</li>
            <li>If you use purchase orders, supplier integrations or SWMS on Professional, confirm the new tool covers each one in a demo.</li>
            <li>Check the new tool’s contract before signing, especially Commusoft’s 12-month term and Service Fusion’s renewal clause.</li>
          </ul>
          <p>
            For trade-specific options, see <Link href="/by-industry/plumbing" className={A}>plumbing software</Link>{' '}
            and <Link href="/by-industry/electrical" className={A}>electrical software</Link>, and for the
            QuickBooks editions each tool supports, the <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            Fergus’s contractor and timesheet user types suit crews that mix full staff with occasional help. If
            most of your people are full time, ServiceM8 or Service Fusion remove per-person pricing. If you want
            a per-user price in print, look at Tradify. If subcontractor day billing is the deciding feature,
            Commusoft’s daily licenses are the closest match, on a 12-month term.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing/fergus" className="text-orange-600 hover:text-orange-800">Fergus pricing →</Link>
            <Link href="/compare/tradify-vs-fergus" className="text-orange-600 hover:text-orange-800">Tradify vs Fergus →</Link>
            <Link href="/compare/servicem8-vs-fergus" className="text-orange-600 hover:text-orange-800">ServiceM8 vs Fergus →</Link>
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
