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
 * /compare/jobber-vs-fergus: targets "jobber vs fergus". No GSC data for this topic yet.
 *
 * Fergus facts reuse /pricing/fergus and the b16 Fergus research notes: US and global pricing pages,
 * Terms of Service, Fergus Pay page, LLM info page and four help center articles, all checked
 * 2026-11-25. Conflicts, stated on the page: the US pricing page says "per month" without saying per
 * user while its terms say "per user basis with a plan type base"; contractor users are $2.50 a day on
 * the US page and $4 on the global page; the US card fee is 2.95% + $0.30 while 1.95% + $0.30 is stated
 * for Australia; the help center calls the entry plan Basic, not Essentials. Jobber facts reuse the
 * site's verified pages (/pricing/jobber checked 2026-11-03; /compare/jobber-vs-servicem8,
 * /compare/jobber-vs-tradify and /compare/fergus-alternatives: pricing 2026-11-21, Terms of Service
 * 2026-11-21, help center 2026-11-03 to 2026-11-20); getjobber.com was not refetched. Jobber's governing
 * law is not recorded in our sources, so it is not stated. Not used: either vendor's pages comparing
 * itself with competitors, Fergus feature rows whose icons mapped differently between its US and global
 * pages (GPS tracking, job phases, tasks, enquiry management, estimating and takeoff), Jobber's ended
 * introductory offer, review sites and third-party estimates. No Fergus team total because Fergus
 * publishes no per-user amount; Jobber band figures and card fee examples are arithmetic on published
 * prices. No new URLs fetched. Nothing tested hands-on.
 */

const PATH = '/compare/jobber-vs-fergus'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Jobber vs Fergus (2026): Annual Bands vs Monthly in Arrears'
const DESCRIPTION =
  'Jobber sells user bands from $29/month with annual billing; Fergus bills monthly in arrears from $31, with timesheet and contractor users. Compare fees.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/jobber-vs-fergus',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber vs Fergus', href: PATH },
]

const rows: { feature: string; jobber: string; fergus: string }[] = [
  { feature: 'What you pay for', jobber: 'Plan plus team band (1, 5, 10 or 15 users); extra users $29 a month each; 16+ contact sales', fergus: 'Pricing page shows “from” prices “per month” without saying per user; its terms charge “on a per user basis with a plan type base”' },
  { feature: 'Entry prices', jobber: 'Core $29, Connect $99, Grow $149 a month for one user billed annually ($49, $139, $199 with no commitment)', fergus: 'US page: Essentials from $31, Professional from $44 a month; Enterprise custom for more than 10 staff (help center calls the entry plan Basic)' },
  { feature: 'Team prices', jobber: '5 users: Connect $149, Grow $229, Plus $399; 10 users: $229, $299, $449; 15 users: $299, $399, $529 (billed annually)', fergus: 'No per-user amount published, so no team total can be worked out; ask for a quote for your headcount' },
  { feature: 'Staff who only log time', jobber: 'No separate timesheet-only user type documented; every user is a seat', fergus: 'Timesheet users from $26 a month: hours and breaks in the Fergus Go app, view job cards, no photo or file uploads' },
  { feature: 'Subcontractors', jobber: 'No subcontractor user type documented', fergus: 'Contractor users $2.50 a day, only on days scheduled or logging time (global page: $4); no certificates, sign offs or invoicing' },
  { feature: 'Billing options', jobber: 'Annual prepaid, 1-year commitment billed monthly, or no commitment; “save up to 25% with annual billing”', fergus: 'Monthly only, billed in arrears; pricing FAQ says no yearly plans' },
  { feature: 'Trial and setup', jobber: '14 days of Grow, no credit card; no free plan; add-ons not available in the trial', fergus: '14 days of Essentials, no credit card; setup from $0 with a free 1-hour onboarding' },
  { feature: 'Cancellation and refunds', jobber: 'Cancel any time on no commitment; 1-year commitment bills to term end; annual prepaid non-refundable; all renew automatically unless set to non-renew', fergus: 'No lock-in; cancel in Settings, effective at the end of that month, final invoice on the 1st; no fees refunded on termination' },
  { feature: 'Support', jobber: 'Premium Support on Plus', fergus: 'Essentials: email and chat only; Professional adds phone' },
  { feature: 'Accounting sync', jobber: 'QuickBooks Online and Xero from Connect; no QuickBooks Desktop listed', fergus: 'Xero, QuickBooks and MYOB from Essentials; Online or Desktop not specified' },
  { feature: 'Purchasing and supplier bills', jobber: 'Receipt capture and supplier invoice scanning on Plus; purchase orders not documented', fergus: 'Purchase orders on Professional; supplier integrations run manually on Essentials, automatically on Professional' },
  { feature: 'Forms, checklists and safety', jobber: 'Checklists from Connect', fergus: 'Checklists, forms, hazards and SWMS on Professional; certificates $30 (1 to 9 staff) or $80 (10+ staff)' },
  { feature: 'Job costing and reporting', jobber: 'Time and expense tracking from Connect; job costing on Grow; custom report builder on Plus', fergus: 'Business, staff and financial reporting on Professional' },
  { feature: 'Card fees and bank payments', jobber: '2.9% + 30¢ online, 2.7% + 30¢ Tap to Pay, ACH 1% (US only), instant payout +1%', fergus: 'US page: 2.95% + $0.30 per transaction; Stripe, Tap to Pay in Fergus Go; ACH and US payout time not published' },
]

const faqs = [
  {
    question: 'Is Fergus cheaper than Jobber?',
    answer:
      'For one user the listed entry prices are close: Jobber Core is $29 a month billed annually ($49 with no commitment), and Fergus Essentials is from $31 a month. But Fergus’s pricing page does not say whether that price is per user, while its terms say fees are per user on top of a plan base, so a team total needs a quote. Jobber publishes band prices you can total yourself, such as Grow at $229 a month for 5 users billed annually.',
  },
  {
    question: 'Does Fergus have annual billing like Jobber?',
    answer:
      'No. Fergus’s pricing FAQ says it has no yearly plans, and its help center says it bills monthly in arrears. Jobber sells every plan three ways: annual prepaid (the lowest rate, paid upfront and non-refundable), a 1-year commitment billed monthly, or no commitment at the highest rate.',
  },
  {
    question: 'Which is better for subcontractors and timesheet-only staff?',
    answer:
      'Fergus documents two cheaper user types: timesheet users from $26 a month and contractor users at $2.50 a day, charged only on days they are scheduled or log time. The Jobber pages we rely on document no cheaper user type; extra users are $29 a month each on top of a band.',
  },
  {
    question: 'Which works with QuickBooks, Xero or MYOB?',
    answer:
      'Fergus lists Xero, QuickBooks and MYOB on Essentials, its entry plan. Jobber starts QuickBooks Online and Xero sync on Connect ($99 a month billed annually for one user), does not list MYOB, and does not list QuickBooks Desktop. Fergus’s pages do not say whether its QuickBooks sync covers Online or Desktop.',
  },
  {
    question: 'Which has lower card fees?',
    answer:
      'Jobber lists 2.9% + 30¢ for cards paid online and 2.7% + 30¢ for Tap to Pay; Fergus’s US pricing page lists 2.95% + $0.30 per transaction. On a $1,000 card payment that is $29.30 with Jobber online and $29.80 with Fergus. Jobber also offers US bank (ACH) payments at 1%; Fergus’s pages do not describe ACH.',
  },
  {
    question: 'Can I cancel Jobber or Fergus at any time?',
    answer:
      'Fergus has no lock-in: cancellation takes effect at the end of the month you ask, the final invoice comes on the 1st, the account is then locked, and its terms say no fees are refunded. Jobber’s no-commitment option can be cancelled at any time, a 1-year commitment keeps billing until the term ends, annual prepaid is non-refundable, and all Jobber plans renew automatically unless set to non-renew.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, bands, billing options, trial, feature table, add-ons, fees)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber Terms of Service (last updated September 22, 2026)', url: 'https://www.getjobber.com/terms-of-service/', checked: '2026-11-21' },
  { name: 'Jobber help: Manage Team (extra seats, Core one-seat limit)', url: 'https://help.getjobber.com/en/articles/manage-teamhow-to-add-manage-and-deactivate-team-members/', checked: '2026-11-03' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: Jobber Payments payout window', url: 'https://help.getjobber.com/en/articles/jobber-payments-payout-window/', checked: '2026-11-03' },
  { name: 'Jobber help: bank payments (ACH)', url: 'https://help.getjobber.com/hc/en-us/articles/1500004781762-Bank-Payments-ACH', checked: '2026-11-03' },
  { name: 'Jobber help: Tap to Pay', url: 'https://help.getjobber.com/hc/en-us/articles/34647042014615-Tap-to-Pay', checked: '2026-11-03' },
  { name: 'Fergus US pricing (plans, user types, add-ons, support, card fee, FAQ)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
  { name: 'Fergus global pricing (non-US prices, for comparison only)', url: 'https://fergus.com/pricing/', checked: '2026-11-25' },
  { name: 'Fergus Terms of Service (per-user fees, refunds, data, governing law)', url: 'https://fergus.com/terms-of-service/', checked: '2026-11-25' },
  { name: 'Fergus help: changing your Fergus plan (billing in arrears)', url: 'https://help.fergus.com/en/articles/2292283-changing-your-fergus-plan', checked: '2026-11-25' },
  { name: 'Fergus help: cancelling your account', url: 'https://help.fergus.com/en/articles/5068313-cancelling-your-account', checked: '2026-11-25' },
  { name: 'Fergus help: contractors in Fergus', url: 'https://help.fergus.com/en/articles/3617164-contractors-in-fergus', checked: '2026-11-25' },
  { name: 'Fergus help: timesheet user', url: 'https://help.fergus.com/en/articles/11387079-timesheet-user', checked: '2026-11-25' },
  { name: 'Fergus Pay (Stripe, Australian rate and payouts, Tap to Pay)', url: 'https://fergus.com/features/fergus-pay/', checked: '2026-11-25' },
  { name: 'Fergus official information (markets, trades, team sizes, integrations)', url: 'https://fergus.com/llm-info/', checked: '2026-11-25' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function JobberVsFergusPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/jobber-vs-fergus"
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
            Jobber vs Fergus: <span className="text-orange-400">annual team bands or monthly user types</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Billing, user types, accounting, purchasing, payments and terms, from each vendor’s own pages,
            checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Jobber</strong> sells plans in team bands of 1, 5, 10 and 15 users, with a lower rate if you
            pay annually: Core is $29 a month billed annually for one user and Grow is $229 for 5 users.{' '}
            <strong>Fergus</strong> is monthly only, billed in arrears with no yearly plans: Essentials from $31
            and Professional from $44 a month on its US page, with timesheet users from $26 a month and
            contractor users at $2.50 a day. Fergus does not publish a per-user amount, so get a quote for your
            team. Choose Jobber for published team prices, annual billing and ACH at 1%. Choose Fergus for
            subcontractor day rates, MYOB, purchase orders and safety forms on Professional.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Jobber vs Fergus at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. US prices.
            Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Jobber</th>
                  <th scope="col" className="p-3.5">Fergus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.jobber}</td>
                    <td className="p-3.5">{r.fergus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: team bands vs a plan base plus users</h2>
          <p>
            Jobber sets the price by plan and team band. Billed annually, Core is $29 for one user (with one
            extra seat at most), Connect $99 and Grow $149 for one user, and Plus $399 for five users. At 5
            users Connect is $149 and Grow $229; at 10 users, $229 and $299; at 15 users, $299 and $399. Extra
            users are listed at $29 a month, and teams of 16 or more contact sales. Because the price steps up
            by band, a 5-user Grow band at $229 costs less than one Grow user plus four extra seats ($149 + 4 ×
            $29 = $265). Every band is in our <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>{' '}
            guide.
          </p>
          <p>
            Fergus’s US pricing page shows Essentials from $31 and Professional from $44 “per month”, printed in
            “$” with no currency code. The page does not say per user, but Fergus’s Terms of Service say fees are
            charged “on a per user basis with a plan type base”, and its help center says a full user is billed
            at a flat monthly rate. Since the per-user amount is not published, we do not total a Fergus team
            here: ask Fergus to quote your exact mix of full, timesheet and contractor users. Its global pricing
            page shows different prices, so make sure you are on the US page. See{' '}
            <Link href="/pricing/fergus" className={A}>Fergus pricing</Link>.
          </p>

          <h2 id="billing">Annual billing vs monthly in arrears</h2>
          <p>
            This is the clearest structural difference. Jobber sells each plan three ways: annual prepaid at the
            lowest rate (Core $29, paid upfront for the year, so $348, and non-refundable), a 1-year commitment
            billed monthly (Core $39) that keeps billing until the term ends, or no commitment (Core $49) that
            you can cancel at any time. Jobber’s pricing page says you save up to 25% with annual billing, and
            all three options renew automatically unless set to non-renew.
          </p>
          <p>
            Fergus has no yearly plans and no lock-in contract. Its help center says it bills monthly in arrears:
            upgrades take effect immediately and are charged from that day, downgrades start on the 1st of the
            next month, and removed users stay active and billed until the end of the period. Cancellation takes
            effect at the end of the month you ask, the final invoice arrives on the 1st of the next month, and
            the account is then locked. Fergus’s terms say no fees are refunded on termination and that Fergus
            may remove your material, so export your records first. For customers outside Australia and the UK,
            the contract is with Fergus Software Limited under New Zealand law. We did not record the governing
            law in Jobber’s terms (last updated September 22, 2026).
          </p>

          <h2 id="user-types">Timesheet and contractor users</h2>
          <p>
            Fergus prices people by what they do. A <strong>timesheet user</strong> (from $26 a month) tracks
            hours and breaks in the Fergus Go app and can view job cards, but cannot upload photos or files. A{' '}
            <strong>contractor user</strong> costs $2.50 a day on the US page ($4 on the global page), charged
            only on days they are scheduled or log time and at most once a day; contractors cannot use
            certificates, sign offs or invoicing. As arithmetic on that one published rate, a contractor
            scheduled on 10 days in a month costs $25. Switching a contractor to a full user takes effect
            immediately at the full user rate.
          </p>
          <p>
            The Jobber pages we rely on document no cheaper user type and no subcontractor seat. Everyone is a
            user within a band or a $29 extra seat. If you use subcontractors for a few days a month, Fergus’s
            day rate is the line to price carefully; if your team is mostly full-time office and field staff,
            Jobber’s bands are easier to budget.
          </p>

          <h2 id="purchasing">Purchasing, safety forms and accounting</h2>
          <p>
            Fergus’s Professional plan adds purchase orders, tiered pricing, checklists, forms, files and photos,
            hazards and SWMS, and business, staff and financial reporting. Supplier integrations run manually on
            Essentials and automatically on Professional, and certificates cost $30 (1 to 9 staff) or $80 (10 or
            more staff). Fergus’s comparison table uses icons, so confirm any single feature in a demo. Jobber
            documents no purchase orders; it adds receipt capture and supplier invoice scanning on Plus,
            checklists and time and expense tracking from Connect, job costing on Grow and a custom report builder
            on Plus. Our{' '}
            <Link href="/guides/field-service-inventory-management-software" className={A}>inventory management guide</Link>{' '}
            covers purchasing tools in more depth.
          </p>
          <p>
            For accounting, Fergus lists Xero, QuickBooks and MYOB on Essentials. Jobber syncs QuickBooks Online
            and Xero from Connect ($99 a month billed annually for one user), does not list MYOB and does not list
            QuickBooks Desktop. Fergus’s pages do not say whether its QuickBooks sync covers Online or Desktop; if
            you run Desktop, see our <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="payments">Payments and support</h2>
          <p>
            Jobber publishes 2.9% + 30¢ for cards paid online, 2.7% + 30¢ for Tap to Pay, 1% for US bank (ACH)
            payments and an extra 1% for instant payouts, with card payments arriving on a 2-business-day
            schedule after the first payout. Fergus’s US pricing page lists 2.95% + $0.30 per card transaction.
            Fergus Pay runs on Stripe with no setup or monthly fee and supports Tap to Pay in the Fergus Go app;
            its 1.95% + $0.30 rate and 2-business-day payouts are stated for Australia, and it gives no US payout
            time and does not describe ACH. On a $1,000 card payment that is $29.30 with Jobber online and $29.80
            with Fergus.
          </p>
          <p>
            Support differs by plan. Fergus Essentials gets email and chat support only, and Professional adds
            phone support, with a free 1-hour onboarding on both. Jobber lists Premium Support on Plus.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>You want a team price you can total yourself:</strong> Jobber, which publishes every band to 15 users.</li>
            <li><strong>You want to pay annually for a lower rate:</strong> Jobber; Fergus has no yearly plans.</li>
            <li><strong>You use subcontractors a few days a month:</strong> Fergus, with contractor users at $2.50 a day.</li>
            <li><strong>Some staff only clock hours:</strong> Fergus timesheet users from $26 a month.</li>
            <li><strong>You need purchase orders, SWMS or MYOB:</strong> Fergus, with purchase orders and SWMS on Professional.</li>
            <li><strong>You want ACH bank payments:</strong> Jobber, at 1% in the US.</li>
            <li><strong>You want month-to-month with no commitment:</strong> both offer it; Jobber’s no-commitment rate is its highest.</li>
          </ul>
          <p>
            Fergus says it serves trade businesses from sole traders to 30 or more staff, including plumbers,
            electricians, builders and HVAC firms. See our{' '}
            <Link href="/by-industry/plumbing" className={A}>plumbing software guide</Link>. Looking wider? See{' '}
            <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link>,{' '}
            <Link href="/compare/fergus-alternatives" className={A}>Fergus alternatives</Link> and{' '}
            <Link href="/compare/jobber-vs-tradify" className={A}>Jobber vs Tradify</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Jobber vs Fergus">
            The deciding question is how you pay for people. Jobber publishes team bands with an annual
            discount and ACH at 1%, so you can total the cost before you call anyone. Fergus is monthly in
            arrears with no yearly plans, and its timesheet and contractor users suit crews with part-time or
            subcontracted workers, but you need a quote for the full team. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
            <Link href="/pricing/fergus" className="text-orange-600 hover:text-orange-800">Fergus pricing →</Link>
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
