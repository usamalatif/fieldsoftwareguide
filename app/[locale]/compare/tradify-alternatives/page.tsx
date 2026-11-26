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
 * /compare/tradify-alternatives: targets "tradify alternatives" and "tradify competitors".
 * No GSC data for this topic yet. Pricing detail stays on /pricing/tradify; head-to-heads stay on
 * /compare/jobber-vs-tradify, /compare/servicem8-vs-tradify and /compare/tradify-vs-fergus.
 *
 * Tradify facts come from its own pricing page, home page, Stripe payments page and Product-Specific
 * Terms, all checked 2026-11-25 (via /pricing/tradify and the batch 17 notes). Alternatives reuse the
 * site's verified pricing pages: ServiceM8, Kickserv and Service Fusion checked 2026-11-24, Fergus
 * 2026-11-25, Jobber 2026-11-21 (newest date used where site pages differ). No new fetches.
 *
 * Conflicts, all stated on the page: Tradify's terms mention "yearly charges" while its pricing page
 * shows only monthly prices; Tradify prints $ with no currency code; Fergus's pricing page says
 * "per month" while its terms say per user, so no Fergus team total is given; ServiceM8's help center
 * says cancel any time while its terms ask for 30 days' notice, and its card rate is 3.10% on the
 * payments page vs 3.05% in the help center; Service Fusion's pricing page says month to month while
 * its Subscription Agreement renews automatically; Kickserv does not label whether its listed prices
 * are the monthly or annual rate.
 *
 * Deliberately not used: why customers leave Tradify, any vendor's claims about competitors, review
 * sites, third-party estimates, Housecall Pro, Workiz and FieldPulse (their documented differences
 * matter less to a per-user Tradify shopper), Tradify help center pages (403 earlier, not retried),
 * Tradify governing law, and offline or routing comparisons (not documented for Tradify). Team costs
 * are pure arithmetic on published prices. Nothing tested hands-on.
 */

const PATH = '/compare/tradify-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Tradify Alternatives (2026): 5 Tools Compared on Per-User Cost'
const DESCRIPTION =
  'Compare five Tradify alternatives on billing basis, five-user cost, card fees, trials and cancellation terms, from each vendor’s own pages.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/tradify-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Tradify alternatives', href: PATH },
]

type Tool = {
  name: string
  model: string
  five: string
  accounting: string
  cards: string
  terms: string
}

const tools: Tool[] = [
  {
    name: 'Tradify (for reference)',
    model: 'Per user: Lite $47, Pro $51, Plus $61 a month; Custom on request; no currency code printed',
    five: 'Lite $235, Pro $255, Plus $305 (5 × per-user price)',
    accounting: 'Xero and QuickBooks; Online or Desktop not stated',
    cards: '3.1% + $0.30 (Stripe)',
    terms: '14-day trial, no card; cancel any time in the app; charges not refunded; Tradify Limited (New Zealand)',
  },
  {
    name: 'ServiceM8',
    model: 'By jobs a month: Free (1 user, 30 jobs), $29 (50), $79 (150), $149 (500), $349 (1,500+); unlimited users on paid plans',
    five: '$29 to $349 depending on jobs, not users',
    accounting: 'QuickBooks Online, Xero and MYOB; Desktop not mentioned',
    cards: '3.10% + 30¢ (help center says 3.05% + 30¢)',
    terms: '14-day trial and free plan; help center says no contract; terms ask 30 days’ notice; Australian law',
  },
  {
    name: 'Fergus',
    model: 'Essentials from $31, Professional from $44 a month; terms say per user on a plan base; timesheet users from $26, contractors $2.50 a day',
    five: 'Not published as a total',
    accounting: 'Xero, MYOB and QuickBooks',
    cards: '2.95% + $0.30 (US page)',
    terms: '14-day trial, no card; no lock-in, monthly in arrears; no refunds on termination; Fergus Software Limited (New Zealand)',
  },
  {
    name: 'Jobber',
    model: 'By plan and user band (1, 5, 10, 15 users); Core $29 billed annually for 1 user',
    five: 'Connect $149, Grow $229 billed annually ($199, $299 with no commitment)',
    accounting: 'QuickBooks Online and Xero from Connect; no Desktop',
    cards: '2.9% + 30¢ online; ACH 1%',
    terms: '14-day trial, no card; annual prepaid, 1-year commitment or no commitment; renews unless cancelled 30 days before',
  },
  {
    name: 'Kickserv',
    model: 'By plan with users included: Start $60 (5), Run $119 (10), Scale $199 (20)',
    five: '$60 (Start)',
    accounting: 'QuickBooks Online from Start; Desktop $50 a month extra',
    cards: '2.9% Tap to Pay, 3.9% card not present; ACH 1% + $0.30',
    terms: '30-day trial; written notice, ends at term end; fees non-refundable; cancelling deletes records',
  },
  {
    name: 'Service Fusion',
    model: 'Flat price, unlimited users: Starter $220, Plus $339, Pro $552 billed annually ($259, $399, $649 monthly)',
    five: '$220 billed annually, $259 monthly (Starter)',
    accounting: 'QuickBooks Online and Desktop on every plan',
    cards: '2.90% + $0.30',
    terms: 'Demo only; pricing page says month to month; agreement renews unless 30 days’ notice; fees non-refundable',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'model', label: 'How it charges (per month)' },
  { key: 'five', label: 'Five people' },
  { key: 'accounting', label: 'Accounting' },
  { key: 'cards', label: 'Card fees' },
  { key: 'terms', label: 'Trial and terms' },
]

const teams: { team: string; tradify: string; sm8: string; jobber: string; kickserv: string; sf: string }[] = [
  { team: '1 person', tradify: '$47 (Lite)', sm8: '$0 up to 30 jobs, $29 up to 50', jobber: '$29 annual, $49 no commitment (Core)', kickserv: '$60 (Start, 5 users)', sf: '$220 annual, $259 monthly' },
  { team: '5 people', tradify: '$255 (Pro)', sm8: '$79 up to 150 jobs, $149 up to 500', jobber: '$229 annual, $299 no commitment (Grow)', kickserv: '$60 (Start)', sf: '$220 annual, $259 monthly' },
  { team: '10 people', tradify: '$510 (Pro)', sm8: 'Same as above: priced by jobs', jobber: '$299 annual, $399 no commitment (Grow)', kickserv: '$119 (Run)', sf: '$220 annual, $259 monthly' },
]

const faqs = [
  {
    question: 'What is a good alternative to Tradify?',
    answer:
      'It depends on what you want to change. To stop paying for every user, look at ServiceM8 (priced by jobs, unlimited users on paid plans), Kickserv (users included in each plan) or Service Fusion (unlimited users). If much of your team only logs hours or works as subcontractors, Fergus has cheaper timesheet and contractor seats. Jobber suits teams that want user bands and an annual billing option.',
  },
  {
    question: 'Is there a cheaper alternative to Tradify for a team?',
    answer:
      'On published prices, often yes once you pass two or three people. Five users on Tradify Pro cost 5 × $51 = $255 a month. Kickserv Start is $60 for 5 users, ServiceM8 Growing is $79 for unlimited users and 150 jobs, Service Fusion Starter is $220 billed annually for unlimited users, and Jobber Grow is $229 billed annually for 5 users. Plan features differ, so compare what each plan includes.',
  },
  {
    question: 'Which Tradify alternatives do not charge per user?',
    answer:
      'ServiceM8 charges by jobs a month and gives unlimited users on paid plans. Service Fusion has unlimited users on every plan. Kickserv and Jobber include a set number of users in each plan or band. Fergus’s terms say it charges per user on a plan base, but with cheaper timesheet and contractor user types.',
  },
  {
    question: 'Which alternatives support QuickBooks Desktop?',
    answer:
      'Service Fusion lists QuickBooks Online and Desktop on every plan, and Kickserv offers Desktop for $50 a month. Jobber connects to QuickBooks Online only, and ServiceM8 does not mention Desktop. Tradify and Fergus say they sync with QuickBooks without saying which version, so ask them if you run Desktop.',
  },
  {
    question: 'Do any of these alternatives refund charges when you cancel?',
    answer:
      'None of the pages we read promises a refund. Tradify’s terms say monthly or yearly charges are not refunded. Fergus, Kickserv and Service Fusion say fees are not refunded, and Jobber’s annual prepaid option is non-refundable. ServiceM8’s terms ask for 30 days’ notice and do not describe refunds. Check notice periods before you switch.',
  },
  {
    question: 'Is Tradify priced in US dollars?',
    answer:
      'Tradify’s pricing page shows prices with a $ sign, a US footer address and no currency code, so confirm the currency on your quote. The ServiceM8, Fergus, Jobber, Kickserv and Service Fusion prices on this page come from the vendor pricing pages listed in the sources.',
  },
]

const sources = [
  { name: 'Tradify pricing (plans, per-user prices, Instant Website add-on, trial)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify home (audience, 14-day trial, Xero and QuickBooks)', url: 'https://www.tradifyhq.com/', checked: '2026-11-25' },
  { name: 'Tradify payments with Stripe (card fees, payouts)', url: 'https://www.tradifyhq.com/credit-card-payments-with-stripe', checked: '2026-11-25' },
  { name: 'Tradify Product-Specific Terms of Service (Tradify Limited, cancellation, refunds)', url: 'https://www.tradifyhq.com/terms', checked: '2026-11-25' },
  { name: 'ServiceM8 pricing (US plans, job limits)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost (no contracts)', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 Terms of Service (notice, Australian law)', url: 'https://www.servicem8.com/us/terms-of-service', checked: '2026-11-24' },
  { name: 'ServiceM8 Pay (US card rates)', url: 'https://www.servicem8.com/us/servicem8-pay', checked: '2026-11-24' },
  { name: 'ServiceM8 help: card processing fees and payout speed', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/servicem8-pay-card-processing-fees-payout-speed', checked: '2026-11-24' },
  { name: 'ServiceM8 help: connect to QuickBooks Online', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/quickbooks/how-do-i-connect-servicem8-to-quickbooks-online', checked: '2026-11-24' },
  { name: 'Fergus US pricing (plans, user types, card fee, trial)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
  { name: 'Fergus Terms of Service (per user basis, no refunds)', url: 'https://fergus.com/terms-of-service/', checked: '2026-11-25' },
  { name: 'Fergus help: changing your Fergus plan (monthly in arrears)', url: 'https://help.fergus.com/en/articles/2292283-changing-your-fergus-plan', checked: '2026-11-25' },
  { name: 'Fergus help: contractors in Fergus', url: 'https://help.fergus.com/en/articles/3617164-contractors-in-fergus', checked: '2026-11-25' },
  { name: 'Fergus official information (markets, trades, integrations)', url: 'https://fergus.com/llm-info/', checked: '2026-11-25' },
  { name: 'Jobber pricing (plans, bands, billing options, trial, renewal, fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: QuickBooks integration FAQs (Online only)', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Kickserv pricing (plans, users, annual saving, trial)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv help: connect to QuickBooks Desktop', url: 'https://help.kickserv.com/article/8-connect-to-quickbooks-desktop', checked: '2026-11-24' },
  { name: 'Kickserv payments integration (Tap to Pay, card not present)', url: 'https://www.kickserv.com/integrations/payments', checked: '2026-11-24' },
  { name: 'Kickserv help: ACH payments', url: 'https://help.kickserv.com/article/94-ach-payments', checked: '2026-11-24' },
  { name: 'Kickserv Terms of Service', url: 'https://www.kickserv.com/terms', checked: '2026-11-24' },
  { name: 'Kickserv help: how to cancel (data deletion)', url: 'https://help.kickserv.com/article/61-how-do-i-cancel-my-account', checked: '2026-11-24' },
  { name: 'Service Fusion pricing (plans, unlimited users, month to month)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (renewal, fees)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
  { name: 'Service Fusion help: Service Fusion Payments fees', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360058547171-Service-Fusion-Payments-Introduction', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'

export default function TradifyAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/tradify-alternatives"
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
            Tradify alternatives: <span className="text-orange-400">five tools compared on how they charge</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            How five field service tools compare with Tradify&rsquo;s per-user pricing on team cost, accounting,
            card fees and cancellation terms, from each vendor&rsquo;s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Tradify charges <strong>per user</strong>: $47, $51 or $61 a month for each person, so five users on
            Pro cost $255. <strong>ServiceM8</strong> charges by jobs instead, with unlimited users on paid plans
            from $29. <strong>Kickserv</strong> includes 5 users for $60, and <strong>Service Fusion</strong> has
            unlimited users from $220 billed annually. <strong>Jobber</strong> sells user bands, such as Grow at
            $229 billed annually for five. <strong>Fergus</strong> also charges per user but adds timesheet seats
            from $26 and contractor seats at $2.50 a day. Tradify lets you cancel at any time but does not refund
            charges already billed.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="when">When to look beyond Tradify</h2>
          <ul>
            <li><strong>A growing headcount</strong>: every Tradify user costs the same, so ten users on Pro is 10 &times; $51 = $510 a month.</li>
            <li><strong>Staff who only log hours</strong>: Tradify&rsquo;s pricing page does not say whether any user type is cheaper or free.</li>
            <li><strong>QuickBooks Desktop</strong>: Tradify says it syncs with Xero and QuickBooks without naming Online or Desktop.</li>
            <li><strong>Annual billing or currency</strong>: the pricing page shows monthly prices only and prints no currency code, while the terms mention &ldquo;monthly or yearly charges&rdquo;.</li>
          </ul>
          <p>
            If none of these applies, Tradify&rsquo;s features from Lite, including Xero and QuickBooks sync, and its
            free phone support may suit you; see <Link href="/pricing/tradify" className={A}>Tradify pricing</Link>.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Tradify alternatives compared</h2>
          <p className={SUB}>
            Published prices and documented terms only, not a hands-on test. Prices are per month as printed on
            each vendor&rsquo;s pricing page; Tradify prints $ with no currency code. Five-person totals are
            arithmetic. Sources and check dates are at the end of this page.
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

        <section className="mt-12" id="team-cost">
          <h2 className={H2}>What a team pays: worked examples</h2>
          <p className={SUB}>
            Monthly cost by team size, as plain arithmetic on published prices. Plans are matched by headcount,
            not by features, and exclude add-ons and card fees. Fergus is left out because it does not publish a
            per-user amount.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="tnum w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Team', 'Tradify', 'ServiceM8', 'Jobber', 'Kickserv', 'Service Fusion'].map((h) => (
                    <th key={h} scope="col" className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {teams.map((r) => (
                  <tr key={r.team} className="border-t border-slate-100 align-top dark:border-slate-800">
                    <th scope="row" className="py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white">{r.team}</th>
                    <td className={TD}>{r.tradify}</td>
                    <td className={TD}>{r.sm8}</td>
                    <td className={TD}>{r.jobber}</td>
                    <td className={TD}>{r.kickserv}</td>
                    <td className={TD}>{r.sf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Service Fusion&rsquo;s flat price passes Tradify&rsquo;s per-user total at five users on Lite
            (5 &times; $47 = $235 against $220 billed annually) and at six users on monthly billing
            (6 &times; $47 = $282 against $259). Kickserv does not label whether its listed prices are the monthly
            or annual rate.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2 id="alternatives">The alternatives</h2>

          <h3>ServiceM8</h3>
          <p>
            <strong>What differs:</strong> ServiceM8 prices by jobs a month, not by people, with a free plan for one
            user and 30 jobs and unlimited users on every paid plan, from $29 for 50 jobs to $349 for 1,500 or more.
            A crew of five doing up to 150 jobs pays $79. <strong>Watch for:</strong> a busy solo operator past 50
            jobs can pay more than Tradify Lite, its terms ask for 30 days&rsquo; notice before the end of the
            payment period, and QuickBooks Desktop is not mentioned. See{' '}
            <Link href="/pricing/servicem8" className={A}>ServiceM8 pricing</Link> and{' '}
            <Link href="/compare/servicem8-vs-tradify" className={A}>ServiceM8 vs Tradify</Link>.
          </p>

          <h3>Fergus</h3>
          <p>
            <strong>What differs:</strong> Fergus also charges per user, but its US page lists timesheet users from
            $26 a month and contractor users at $2.50 for each day they are scheduled or log time. Essentials starts
            from $31 and Professional from $44 a month, with no setup fee and monthly billing in arrears.{' '}
            <strong>Watch for:</strong> the pricing page does not label its prices per user, phone support is on
            Professional only, and fees are not refunded on termination. Like Tradify, it contracts through a New
            Zealand company. See <Link href="/pricing/fergus" className={A}>Fergus pricing</Link> and{' '}
            <Link href="/compare/tradify-vs-fergus" className={A}>Tradify vs Fergus</Link>.
          </p>

          <h3>Jobber</h3>
          <p>
            <strong>What differs:</strong> Jobber prices each plan by user band (1, 5, 10 or 15 users), so the cost
            per person falls as the team grows: Grow is $229 billed annually for 5 users and $299 for 10, against
            $255 and $510 on Tradify Pro. It offers annual prepaid, a 1-year commitment or no commitment, and ACH at
            1%. <strong>Watch for:</strong> on no-commitment rates five users on Grow cost $299, accounting sync
            starts on Connect, Desktop is not supported, and plans renew unless cancelled 30 days before renewal.
            See <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> and{' '}
            <Link href="/compare/jobber-vs-tradify" className={A}>Jobber vs Tradify</Link>.
          </p>

          <h3>Kickserv</h3>
          <p>
            <strong>What differs:</strong> Kickserv includes users in each plan: $60 for 5, $119 for 10 and $199 for
            20, with QuickBooks Online from Start, QuickBooks Desktop for $50 a month and a 30-day trial.{' '}
            <strong>Watch for:</strong> dispatch mapping and GPS check-ins start on Run, cancelling needs written
            notice and permanently deletes your records, and fees are non-refundable. See{' '}
            <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link>.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>What differs:</strong> every Service Fusion plan has unlimited users at one flat price, from
            $220 a month billed annually ($259 monthly), with QuickBooks Online and Desktop on every plan.{' '}
            <strong>Watch for:</strong> a higher entry price than Tradify for small crews, demo only, and a
            Subscription Agreement that renews your term unless you give 30 days&rsquo; notice, although the pricing
            page says month to month. See <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <h2 id="switching">Switching checklist</h2>
          <ul>
            <li>Count users by role (office, field, hours only, subcontractors) and your jobs a month, so per-user, per-job and flat prices compare fairly.</li>
            <li>Export customers, jobs, quotes and invoices from Tradify before you cancel; its terms page does not say what happens to your data.</li>
            <li>Time the switch to your billing date: Tradify does not refund monthly or yearly charges already billed.</li>
            <li>Confirm the currency and whether annual billing is available on your Tradify account.</li>
            <li>Check which QuickBooks version the new tool supports, and the notice period in its terms.</li>
          </ul>
          <p>
            For more options by team size, see <Link href="/by-size" className={A}>software by business size</Link>{' '}
            and the <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            Stay with Tradify if you are a small crew that wants accounting sync from the first plan at a simple
            per-user price. Look at ServiceM8 if you have more people than jobs, Kickserv or Service Fusion if
            headcount is driving your bill, Fergus if many users only log hours or subcontract, and Jobber if you
            want user bands with an annual option.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/pricing/tradify" className="text-orange-600 hover:text-orange-800">Tradify pricing →</Link>
            <Link href="/compare/servicem8-vs-fergus" className="text-orange-600 hover:text-orange-800">ServiceM8 vs Fergus →</Link>
            <Link href="/compare/servicem8-alternatives" className="text-orange-600 hover:text-orange-800">ServiceM8 alternatives →</Link>
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
