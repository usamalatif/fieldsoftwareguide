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
 * /compare/jobber-vs-kickserv: targets "jobber vs kickserv". No GSC data for this topic yet.
 *
 * Kickserv facts: pricing page, payments page, features, integrations, help center (QuickBooks
 * Desktop, ACH, online payment fees, cancellation, settings export) and Terms of Service (last
 * modified 2024-08-21), all checked 2026-11-24 for /pricing/kickserv; changelog (offline) and
 * partnerships (Nexa) also checked 2026-11-24. Kickserv's pricing page does not label whether
 * $60/$119/$199 is the monthly or annual rate, so no derived monthly or annual Kickserv figure is
 * given. Jobber facts reuse the site's verified pages (pricing and terms 2026-11-21, help center
 * 2026-11-03 to 11-20); getjobber.com was not refetched. Not used: Kickserv's free plan, Flex and
 * Premium (no current price or limits), its 2022 blog's $19 Flex price, and any vendor claims
 * about the other vendor. Cost figures are arithmetic on published prices only. No new fetches.
 * Nothing tested hands-on.
 */

const PATH = '/compare/jobber-vs-kickserv'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Jobber vs Kickserv (2026): Team Pricing, QuickBooks and Fees'
const DESCRIPTION =
  'Kickserv lists $60 for 5 users and $119 for 10; Jobber Connect is $149 and $229 billed annually. Compare billing, QuickBooks Desktop, fees and cancellation.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/jobber-vs-kickserv',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber vs Kickserv', href: PATH },
]

const rows: { feature: string; jobber: string; ks: string }[] = [
  { feature: 'How pricing works', jobber: 'Plan price for one user, then bands of 5, 10 and 15 users on Connect, Grow and Plus; extra seats listed at $29 a month', ks: 'Three team-size plans: Start (5 users), Run (10 users), Scale (20 users)' },
  { feature: 'Smallest team', jobber: 'Core $29 a month billed annually ($49 with no commitment) for one user, plus at most one extra seat', ks: 'Start at $60 a month covers up to 5 users; no smaller plan on the pricing page' },
  { feature: 'Cost at 5 users', jobber: 'Connect $149, Grow $229, Plus $399 a month billed annually ($199, $299, $499 with no commitment)', ks: 'Start $60 a month' },
  { feature: 'Cost at 10 users', jobber: 'Connect $229, Grow $299, Plus $449 a month billed annually ($299, $399, $599 with no commitment)', ks: 'Run $119 a month' },
  { feature: 'Above the top band', jobber: '16 or more users: contact sales', ks: 'Scale $199 for 20 users; no published price for extra users or teams above 20' },
  { feature: 'Billing basis', jobber: 'Annual prepaid (full year billed upfront), 1-year commitment billed monthly, or no commitment', ks: 'Monthly or annual term; one price shown per plan next to “Save 20% with annual subscription”, not labelled as the monthly or annual rate' },
  { feature: 'Free trial', jobber: '14 days with Grow features, no credit card', ks: '30 days on every plan' },
  { feature: 'QuickBooks', jobber: 'QuickBooks Online and Xero from Connect; no Desktop', ks: 'QuickBooks Online on every plan; Desktop $50 a month or $480 a year extra, listed on Run' },
  { feature: 'Card fees', jobber: '2.9% + 30¢ online, 2.7% + 30¢ Tap to Pay', ks: '3.9% card not present, 2.9% Tap to Pay; no fixed per-transaction fee listed' },
  { feature: 'ACH and instant payout', jobber: 'ACH 1% (US); instant payout +1%', ks: 'ACH 1% + $0.30; instant payout +1%' },
  { feature: 'Scheduling and routing', jobber: 'Drag-and-drop schedule; route optimization and GPS tracking from Connect', ks: 'Calendar scheduling and recurring jobs; dispatch mapping and GPS check-ins from Run; no route optimization listed' },
  { feature: 'Call answering', jobber: 'AI Receptionist add-on, $29 a month (included on Plus)', ks: 'No AI answering; lists the Nexa 24/7 live answering service as a partner, 10% off' },
  { feature: 'Offline', jobber: 'Timers, notes, checklists and visit completion work offline; no invoicing offline', ks: 'Changelog mentions offline functionality; scope not stated' },
  { feature: 'Cancellation and your data', jobber: 'Cancel any time; annual plans renew unless cancelled 30 days before renewal; annual prepaid is non-refundable', ks: 'Written notice, effective at term end; fees non-refundable; cancelling permanently deletes customer and job records' },
]

const faqs = [
  {
    question: 'Is Kickserv cheaper than Jobber?',
    answer:
      'For teams of 5 to 20 on published prices, yes. Kickserv lists $60 a month for 5 users and $119 for 10. Jobber Connect, its lowest plan with team bands, is $149 for 5 users and $229 for 10 billed annually. For one person, Jobber Core at $29 billed annually costs less than Kickserv’s smallest plan. The plans include different features, so compare what you need, not only the price.',
  },
  {
    question: 'Is Kickserv’s price monthly or annual?',
    answer:
      'Kickserv’s pricing page does not say. It shows one price per plan ($60, $119, $199) next to “Save 20% with annual subscription” without labelling which billing option that price is, so confirm the total at checkout. Jobber labels its prices: $149 for 5 users on Connect is the annual prepaid rate, billed for the full year upfront, and the no-commitment rate is $199.',
  },
  {
    question: 'Which works with QuickBooks Desktop?',
    answer:
      'Kickserv, as a paid add-on: QuickBooks Desktop sync costs $50 a month or $480 a year, listed on the Run plan, and Kickserv says it works with every version including Mac. QuickBooks Online is included from Start. Jobber syncs with QuickBooks Online and Xero from Connect and does not support Desktop.',
  },
  {
    question: 'Which has lower payment fees?',
    answer:
      'It depends on how customers pay. On a $1,000 invoice, a card paid online costs $29.30 with Jobber and $39 with Kickserv. Tap to Pay costs $27.30 with Jobber and $29 with Kickserv. ACH costs $10 with Jobber and $10.30 with Kickserv. Both charge an extra 1% for instant payouts.',
  },
  {
    question: 'What happens to my data if I cancel Kickserv?',
    answer:
      'Kickserv’s help center says cancelling permanently deletes your account information, including customer and job records. Export your data from the Account and Billing settings first, or switch to the free plan, which the help center says keeps your data. Jobber’s pages we checked do not say what happens to data after cancellation, so ask before you leave.',
  },
  {
    question: 'Does Kickserv have route optimization like Jobber?',
    answer:
      'Kickserv does not list route optimization. It offers dispatch mapping and GPS check-ins from Run. Jobber documents route optimization and GPS tracking from Connect.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, bands, billing options, trial, fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber Terms of Service (last updated September 22, 2026)', url: 'https://www.getjobber.com/terms-of-service/', checked: '2026-11-21' },
  { name: 'Jobber help: Manage Team (extra seats, Core one-seat limit)', url: 'https://help.getjobber.com/en/articles/manage-teamhow-to-add-manage-and-deactivate-team-members/', checked: '2026-11-03' },
  { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: AI Receptionist', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-03' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: use the Jobber app offline', url: 'https://help.getjobber.com/en/articles/use-the-jobber-app-offline/', checked: '2026-11-19' },
  { name: 'Kickserv pricing (plans, users, annual saving, trial)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv features (scheduling, GPS)', url: 'https://www.kickserv.com/features', checked: '2026-11-24' },
  { name: 'Kickserv help: jobs (scheduling, recurring jobs)', url: 'https://help.kickserv.com/article/32-jobs', checked: '2026-11-24' },
  { name: 'Kickserv payments integration (Tap to Pay, card not present, instant payout)', url: 'https://www.kickserv.com/integrations/payments', checked: '2026-11-24' },
  { name: 'Kickserv help: ACH payments (1% + $0.30)', url: 'https://help.kickserv.com/article/94-ach-payments', checked: '2026-11-24' },
  { name: 'Kickserv help: online payment fees (passing fees to customers)', url: 'https://help.kickserv.com/article/92-online-payment-fees', checked: '2026-11-24' },
  { name: 'Kickserv help: connect to QuickBooks Desktop ($50 a month or $480 a year)', url: 'https://help.kickserv.com/article/8-connect-to-quickbooks-desktop', checked: '2026-11-24' },
  { name: 'Kickserv integrations (QuickBooks Online and Desktop)', url: 'https://www.kickserv.com/integrations', checked: '2026-11-24' },
  { name: 'Kickserv partnerships (Nexa answering service)', url: 'https://www.kickserv.com/partnerships', checked: '2026-11-24' },
  { name: 'Kickserv changelog (offline functionality)', url: 'https://changelog.kickserv.com/', checked: '2026-11-24' },
  { name: 'Kickserv help: how to cancel (free plan, data deletion)', url: 'https://help.kickserv.com/article/61-how-do-i-cancel-my-account', checked: '2026-11-24' },
  { name: 'Kickserv help: settings (data export)', url: 'https://help.kickserv.com/article/38-settings', checked: '2026-11-24' },
  { name: 'Kickserv Terms of Service (last modified August 21, 2024)', url: 'https://www.kickserv.com/terms', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function JobberVsKickservPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/jobber-vs-kickserv"
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
            Jobber vs Kickserv: <span className="text-orange-400">user bands vs team-size plans</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Team pricing at 5 and 10 users, billing, QuickBooks Desktop, payment fees, routing and what
            happens to your data when you cancel, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Kickserv</strong> costs less for a small team on published prices: $60 a month for 5
            users and $119 for 10, against $149 and $229 for <strong>Jobber</strong> Connect billed
            annually. Kickserv also sells QuickBooks Desktop sync ($50 a month), which Jobber does not
            offer. Jobber documents more: route optimization, an AI Receptionist and a defined offline
            mode, and its card fee online is lower (2.9% + 30¢ vs 3.9%). Two cautions for Kickserv: its
            pricing page does not say whether the listed price is the monthly or annual rate, and
            cancelling deletes your records, so export first.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Jobber vs Kickserv at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Sources and
            check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Jobber</th>
                  <th scope="col" className="p-3.5">Kickserv</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.jobber}</td>
                    <td className="p-3.5">{r.ks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: per-user bands vs team-size plans</h2>
          <p>
            The two vendors price teams differently. Jobber starts each plan at one user and sells Connect,
            Grow and Plus in bands of 5, 10 and 15 users, with extra seats listed at $29 a month; Core is a
            one-user plan that allows one extra seat. Teams of 16 or more contact sales. Kickserv sells three
            plans sized by team: Start for 5 users, Run for 10 and Scale for 20. It publishes no price for
            extra users or for teams larger than 20.
          </p>
          <p>Using published prices only:</p>
          <ul>
            <li><strong>1 or 2 users:</strong> Jobber Core is $29 a month billed annually for one user. Kickserv’s smallest plan is Start at $60 for up to 5 users.</li>
            <li><strong>5 users:</strong> Kickserv Start $60. Jobber Connect $149 billed annually or $199 with no commitment; Grow $229 or $299.</li>
            <li><strong>10 users:</strong> Kickserv Run $119, or $169 with the QuickBooks Desktop add-on. Jobber Connect $229 billed annually or $299 with no commitment; Grow $299 or $399.</li>
            <li><strong>20 users:</strong> Kickserv Scale $199. Jobber does not publish a price above 15 users.</li>
          </ul>
          <p>
            These plans are not like for like. Kickserv Start does not include dispatch mapping or GPS
            check-ins (those start on Run), and neither Kickserv plan lists route optimization, which Jobber
            includes from Connect. Every Jobber band is in our{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> guide, and Kickserv’s plans,
            add-ons and terms are in our <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link>{' '}
            guide.
          </p>

          <h2 id="billing">Billing basis: what the price actually means</h2>
          <p>
            Jobber labels every price. Its lowest rates are annual prepaid, which bills the full year at the
            start, so Connect for 5 users at $149 a month is a $1,788 payment upfront. A 1-year commitment
            billed monthly sits in the middle, and no commitment is the highest rate. Annual prepaid is
            non-refundable if you cancel during the year.
          </p>
          <p>
            Kickserv’s pricing page shows one price per plan beside “Save 20% with annual subscription” and
            does not say whether $60, $119 and $199 are the month-to-month rates or the annual rates shown
            per month. We do not guess which. Its terms add that an annual term cannot be switched to monthly
            before it renews, so confirm the billing option and total at checkout. Kickserv’s trial is 30
            days on every plan; Jobber’s is 14 days with Grow features and no credit card.
          </p>

          <h2 id="quickbooks">QuickBooks: Desktop is the deciding line</h2>
          <p>
            If your books are in QuickBooks Desktop, this settles it. Kickserv includes QuickBooks Online
            from Start and sells a Desktop sync for $50 a month or $480 a year, listed on Run; Kickserv says
            it works with every version, including Mac. Jobber syncs with QuickBooks Online and Xero from
            Connect and does not support Desktop. See our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="payments">Payment fees</h2>
          <p>
            Both publish their rates, and both show the same rates on every plan. Jobber charges 2.9% + 30¢
            for cards paid online, 2.7% + 30¢ for Tap to Pay and 1% for ACH in the US. Kickserv, which
            processes through Stripe, charges 3.9% when the card is not present, 2.9% with Tap to Pay and
            1% + $0.30 for ACH; it lists no fixed per-transaction card fee. Both add 1% for instant payouts.
            On a $1,000 invoice paid online by card, that is $29.30 with Jobber and $39 with Kickserv, so a
            business paid mostly through online invoices may give back part of Kickserv’s lower subscription
            in fees. Kickserv lets you pass card fees to customers, up to 4% or as a flat fee from $1. See our{' '}
            <Link href="/guides/field-service-invoicing-software" className={A}>invoicing software guide</Link>.
          </p>

          <h2 id="scheduling">Scheduling, routing, answering and offline</h2>
          <p>
            Jobber has a drag-and-drop schedule and adds route optimization and GPS tracking on Connect.
            Kickserv’s help center describes scheduling jobs by date and time and repeating them, with
            dispatch mapping and GPS check-ins from Run, and it lists no route optimization (see our{' '}
            <Link href="/guides/route-optimization-software" className={A}>route optimization guide</Link>).
            For calls, Jobber sells an AI Receptionist for $29 a month (included on Plus), while Kickserv
            offers no AI answering and lists the Nexa 24/7 live answering service as a partner with 10% off.
            Offline, Jobber’s help center says timers, notes, checklists and visit completion work without a
            connection, but not invoicing; Kickserv’s changelog mentions offline functionality without
            saying what it covers.
          </p>

          <h2 id="cancellation">Cancellation and your data</h2>
          <p>Kickserv’s terms and help center say:</p>
          <ul>
            <li>Terms are one month or one year and <strong>renew automatically</strong> for the same length.</li>
            <li>Either side can cancel with <strong>written notice</strong>, effective at the end of the current term; payment authorization must be cancelled at least 15 days before the next billing date.</li>
            <li>Fees are <strong>non-refundable</strong>.</li>
            <li>Cancelling <strong>permanently deletes</strong> your account information, including customer and job records. Export from Account and Billing settings first, or switch to the free plan to keep your data.</li>
          </ul>
          <p>
            Jobber says you can cancel at any time and that annual plans renew unless cancelled 30 days
            before renewal. A 1-year commitment billed monthly keeps billing until the term ends. The Jobber
            pages we checked do not say how long data is kept after cancelling, so export what you need
            before you leave either tool.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo operator:</strong> Jobber Core, at $29 a month billed annually, costs less than Kickserv’s 5-user Start.</li>
            <li><strong>Team of 3 to 20 on a tight budget:</strong> Kickserv, at $60 for 5 users, $119 for 10 or $199 for 20.</li>
            <li><strong>QuickBooks Desktop:</strong> Kickserv, with the $50 a month add-on; Jobber does not support it.</li>
            <li><strong>Route optimization, AI call answering or a documented offline mode:</strong> Jobber.</li>
            <li><strong>Mostly online card payments:</strong> Jobber’s 2.9% + 30¢ is lower than Kickserv’s 3.9%.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link> and{' '}
            <Link href="/compare/kickserv-alternatives" className={A}>Kickserv alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Jobber vs Kickserv">
            Kickserv is the lower subscription for teams of 5 to 20 and the one to pick for QuickBooks
            Desktop. Jobber costs more per team but documents route optimization, AI answering and offline
            work, charges less for online card payments and labels its billing clearly. With Kickserv,
            confirm whether the price is monthly or annual and export your data before you cancel. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
            <Link href="/pricing/kickserv" className="text-orange-600 hover:text-orange-800">Kickserv pricing →</Link>
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
