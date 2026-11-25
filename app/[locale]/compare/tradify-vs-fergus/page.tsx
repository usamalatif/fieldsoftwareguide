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
 * /compare/tradify-vs-fergus: targets "tradify vs fergus". No GSC data for this topic yet.
 *
 * Tradify facts reuse /pricing/tradify and the b16 Tradify research notes: pricing page, home page,
 * Stripe payments page and Product-Specific Terms, all checked 2026-11-25. Tradify's help center
 * returned 403 and was not refetched, so pro-rating, billing dates and annual billing details are left
 * out. Fergus facts reuse /pricing/fergus and the b16 Fergus research notes: US and global pricing
 * pages, Terms of Service, Fergus Pay page, LLM info page and four help center articles, all checked
 * 2026-11-25. Conflicts, stated on the page: Fergus's US pricing page says "per month" without saying
 * per user while its terms say "per user basis with a plan type base"; contractor users are $2.50 a day
 * on the US page and $4 on the global page; the US card fee is 2.95% + $0.30 while 1.95% + $0.30 is
 * stated for Australia; the help center calls the entry plan Basic, not Essentials. Tradify's terms
 * mention "yearly charges" while its pricing page shows no annual option. Both vendors contract through
 * a New Zealand company; Tradify's governing law sits in Access Group terms we did not read, so it is
 * not stated. Not used: either vendor's pages comparing itself with competitors, Fergus feature rows
 * whose icons mapped differently between its US and global pages (GPS tracking, job phases, tasks,
 * enquiry management, estimating and takeoff), search snippets of Tradify's help center, review sites
 * and third-party estimates. No side-by-side team cost because Fergus's per-user amount is not
 * labelled; card fee examples are arithmetic on published rates. Nothing tested hands-on.
 */

const PATH = '/compare/tradify-vs-fergus'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Tradify vs Fergus (2026): Flat Seats vs Mixed User Types'
const DESCRIPTION =
  'Tradify charges $47 to $61 per user a month; Fergus starts from $31 with timesheet and contractor users. Compare card fees, support and cancellation terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/tradify-vs-fergus',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Tradify vs Fergus', href: PATH },
]

const rows: { feature: string; tradify: string; fergus: string }[] = [
  { feature: 'How you pay', tradify: 'A flat price per user per month on every listed plan', fergus: 'Pricing page shows “from” prices “per month” without saying per user; its terms charge “on a per user basis with a plan type base”' },
  { feature: 'Listed plans', tradify: 'Lite $47, Pro $51, Plus $61 per user a month; Custom on request for large teams', fergus: 'US page: Essentials from $31, Professional from $44 a month; Enterprise custom for more than 10 staff (help center calls the entry plan Basic)' },
  { feature: 'Staff who only log time', tradify: 'Timesheets included from Pro; no cheaper user type documented', fergus: 'Timesheet users from $26 a month: hours and breaks in the Fergus Go app, view job cards, no photo or file uploads' },
  { feature: 'Subcontractors', tradify: 'Subcontractor scheduling included from Pro; how subcontractors are billed is not documented', fergus: 'Contractor users $2.50 a day, only on days scheduled or logging time (global page: $4); no certificates, sign offs or invoicing' },
  { feature: 'Billing cycle and annual plans', tradify: 'Pricing page shows no annual option; terms refer to “monthly or yearly charges”', fergus: 'Monthly, billed in arrears; pricing FAQ says no yearly plans' },
  { feature: 'Free trial', tradify: '14 days with all features, no credit card required', fergus: '14 days of the Essentials plan, no credit card required' },
  { feature: 'Setup, training and support', tradify: 'Free one-on-one training and phone support (home page); no setup fee listed', fergus: 'Setup from $0 with a free 1-hour onboarding; Essentials gets email and chat support only, Professional adds phone' },
  { feature: 'Card payment fees', tradify: 'Stripe: 3.1% + $0.30 per successful charge; first payout 7 days after payment, then 2 days', fergus: 'US page: 2.95% + $0.30 per transaction; Fergus Pay runs on Stripe (1.95% + $0.30 is stated for Australia); US payout time not published' },
  { feature: 'Accounting sync', tradify: 'Xero and QuickBooks from Lite; Online or Desktop not specified', fergus: 'Xero, QuickBooks and MYOB from Essentials' },
  { feature: 'Paid add-ons', tradify: 'Instant Website $12 a month; SmartTools on Plus only', fergus: 'Certificates $30 (1 to 9 staff) or $80 (10+ staff); SMS $15 for 100 texts' },
  { feature: 'Purchase orders and costing', tradify: 'Costing and bill tracking from Pro; purchase orders on Plus', fergus: 'Purchase orders and business, staff and financial reporting on Professional' },
  { feature: 'Cancellation and refunds', tradify: 'Cancel any time through the in-app process; monthly or yearly charges are not refunded', fergus: 'Cancel in Settings; takes effect at the end of that month, final invoice on the 1st; no refunds of fees on termination' },
  { feature: 'Data after you cancel', tradify: 'Not documented on the terms page we read', fergus: 'Account locked; Fergus may remove all your material, and keeping a copy is your responsibility' },
  { feature: 'Contracting company', tradify: 'Tradify Limited, incorporated in New Zealand; governing law not documented in our sources', fergus: 'Fergus Software Limited in New Zealand, under New Zealand law, for customers outside Australia and the UK' },
]

const faqs = [
  {
    question: 'Is Fergus cheaper than Tradify?',
    answer:
      'Fergus’s US entry price is lower: Essentials from $31 a month and Professional from $44, against Tradify’s Lite at $47 and Pro at $51 per user. But Fergus’s pricing page does not say whether its “from” price is per user, while its terms say fees are per user on a plan base, so ask Fergus for a quote for your exact team before you compare totals.',
  },
  {
    question: 'Are Tradify and Fergus both priced per user?',
    answer:
      'Tradify’s pricing page lists every plan per user per month. Fergus’s pricing page says “per month” only, but its Terms of Service say fees are charged “on a per user basis with a plan type base”, and its help center says a full user is billed at a flat monthly rate.',
  },
  {
    question: 'How do Tradify and Fergus charge for subcontractors?',
    answer:
      'Fergus has a contractor user type at $2.50 a day on its US page, charged only on days the person is scheduled or logs time, at most once a day. Tradify includes subcontractor scheduling from Pro but does not document a separate price for subcontractors, so ask how it counts them.',
  },
  {
    question: 'Which has lower card fees?',
    answer:
      'Fergus’s US pricing page lists 2.95% + $0.30 per transaction; Tradify’s Stripe page lists 3.1% + $0.30. On a $1,000 card payment that is $29.80 with Fergus and $31.30 with Tradify. Both let you choose to pass the fee on to your customer.',
  },
  {
    question: 'Can I cancel Tradify or Fergus at any time?',
    answer:
      'Yes, but neither refunds what you have already been billed. Tradify’s terms let you cancel at any time through the app and say monthly or yearly charges are not refunded. Fergus cancels at the end of the month you ask, sends a final invoice on the 1st, locks the account, and its terms say no fees are refunded on termination.',
  },
  {
    question: 'Which works with MYOB or QuickBooks?',
    answer:
      'Both sync with Xero and QuickBooks. Fergus also lists MYOB. Neither vendor’s pages we read say whether QuickBooks means Online, Desktop or both, so confirm before you switch if you run QuickBooks Desktop.',
  },
]

const sources = [
  { name: 'Tradify pricing (plans, per-user prices, Instant Website add-on, trial)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify home (trades served, 14-day trial, training and phone support)', url: 'https://www.tradifyhq.com/', checked: '2026-11-25' },
  { name: 'Tradify payments with Stripe (card fees, payouts, surcharging)', url: 'https://www.tradifyhq.com/credit-card-payments-with-stripe', checked: '2026-11-25' },
  { name: 'Tradify Product-Specific Terms of Service (Tradify Limited, cancellation, refunds)', url: 'https://www.tradifyhq.com/terms', checked: '2026-11-25' },
  { name: 'Fergus US pricing (plans, add-ons, user types, card fee, FAQ)', url: 'https://fergus.com/us/pricing/', checked: '2026-11-25' },
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

export default function TradifyVsFergusPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/tradify-vs-fergus"
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
            Tradify vs Fergus: <span className="text-orange-400">flat seats or cheaper user types</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Plans, how each bills office staff, timesheet-only staff and subcontractors, card fees, support and
            cancellation terms, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Tradify</strong> charges the same flat price for every user: $47 on Lite, $51 on Pro or $61
            on Plus per user a month, with a Custom plan on request. <strong>Fergus</strong> lists Essentials
            from $31 and Professional from $44 a month on its US page, charges per user on a plan base under its
            terms, and adds cheaper seats: timesheet users from $26 a month and contractor users at $2.50 a day
            they work. Fergus is monthly only with no setup fee; Tradify says it offers free phone support, while Fergus keeps phone support for Professional.
            Neither refunds charges already billed when you cancel, and both contract through a New Zealand
            company. If much of your team only logs hours or works as subcontractors, price Fergus first.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Tradify vs Fergus at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Neither pricing
            page prints a currency code: Tradify’s shows a US address and Fergus’s figures are from its US page.
            Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Tradify</th>
                  <th scope="col" className="p-3.5">Fergus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.tradify}</td>
                    <td className="p-3.5">{r.fergus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Plans: three flat tiers vs two tiers and a custom plan</h2>
          <p>
            Tradify publishes three per-user prices. Lite at $47 covers jobs, scheduling with Google Calendar
            sync, quoting, invoicing, online payments and Xero or QuickBooks sync. Pro at $51 adds custom
            branding, recurring jobs, progress invoicing, costing and bill tracking, timesheets and
            subcontractor scheduling. Plus at $61 adds purchase orders, service reminders, bulk invoicing, kit
            bundles and the SmartTools. A Custom plan for large teams is priced on request. Every plan is in our{' '}
            <Link href="/pricing/tradify" className={A}>Tradify pricing</Link> guide.
          </p>
          <p>
            Fergus’s US page lists Essentials from $31 a month, with quoting, price books, job cards,
            timesheets, recurring jobs, invoicing and Xero, QuickBooks and MYOB, and Professional from $44 a
            month, which adds checklists, forms, purchase orders, safety documents, automatic supplier
            integrations and reporting. Businesses with more than 10 staff are asked to contact Fergus for an
            Enterprise plan. Its help center calls the entry plan Basic, and its global pricing page shows
            different prices, so check you are on the page for your country. See{' '}
            <Link href="/pricing/fergus" className={A}>Fergus pricing</Link>.
          </p>

          <h2 id="users">How each bills office staff, timesheet staff and subcontractors</h2>
          <p>
            This is the main difference. Tradify’s pricing page lists one price per user for each plan and does
            not describe a cheaper seat for staff who only clock hours, so a five-person team on Pro is 5 × $51
            = $255 a month by simple arithmetic. Tradify includes subcontractor scheduling from Pro but does not
            say how subcontractors are counted, so ask before you add them.
          </p>
          <p>
            Fergus’s pricing page does not label its “from” prices per user, but its terms say fees are charged
            “on a per user basis with a plan type base” and its help center says a full user is billed at a flat
            monthly rate. Because the per-user amount is not spelled out, we have not worked out a Fergus team
            total. What Fergus does publish is two cheaper seat types. A timesheet user, from $26 a month, tracks
            hours and breaks in the Fergus Go app and can view job cards but not upload photos or files. A
            contractor user costs $2.50 a day on the US page ($4 on the global page), charged only on days the
            person is scheduled or logs time, at most once a day, and cannot use certificates, sign offs or
            invoicing.
          </p>

          <h2 id="payments">Card fees and payouts</h2>
          <p>
            Both process cards through Stripe. Tradify lists 3.1% of the invoice plus $0.30 per successful
            charge, with the first payout 7 days after payment and later payouts 2 days after. Fergus’s US
            pricing page lists 2.95% + $0.30 per transaction; its Fergus Pay page quotes 1.95% + $0.30 and
            2-business-day payouts, but both are stated for Australia, and it gives no US payout time. On a
            $1,000 card payment that is $31.30 with Tradify and $29.80 with Fergus at the US rate. Both let you
            pass the fee on, and Fergus Pay supports Tap to Pay in its app. Neither page describes ACH.
          </p>

          <h2 id="support">Trial, setup and support</h2>
          <p>
            Both offer a 14-day free trial with no credit card. Tradify’s trial includes all features; Fergus’s
            pricing FAQ says its trial is of Essentials. Tradify says it offers free one-on-one training and
            phone support. Fergus lists setup from $0 with a free 1-hour onboarding session, but Essentials comes
            with email and chat support only; phone support starts on Professional. Fergus also sells
            certificates ($30 or $80 by team size) and SMS at $15 for 100 texts; Tradify sells an Instant Website
            for $12 a month.
          </p>

          <h2 id="contracts">Cancellation, refunds and contracting company</h2>
          <p>
            Tradify’s Product-Specific Terms name Tradify Limited, incorporated in New Zealand, as the
            contracting party. Section 5.1.2 lets you cancel at any time through the in-app process, and section
            5.1.3 says monthly or yearly charges are not refunded when you cancel. The pricing page shows no
            annual option, though the terms mention yearly charges. The terms page does not state a minimum
            term, price-change notice or what happens to your data, and it points to Access Group terms for the
            rest, which we did not read, so we do not state Tradify’s governing law.
          </p>
          <p>
            Fergus’s Terms of Service say that, outside Australia and the UK, you contract with Fergus Software
            Limited in New Zealand, under New Zealand law. There is no fixed term and no annual plan; billing is
            monthly in arrears. You cancel in Settings, Billing, Manage Plans; cancellation takes effect at the
            end of that month, the final invoice arrives on the 1st of the next month and the account is locked.
            The terms say no fees are refunded on termination, that Fergus may remove your material, and that
            keeping a copy is your responsibility. Export your records first with either vendor.
          </p>

          <h2 id="fit">Trades and team size</h2>
          <p>
            Tradify describes itself as built for electricians, plumbers, gas engineers, HVAC techs and property
            maintenance, from sole traders to larger teams. Fergus names plumbers and gasfitters, electricians,
            builders, HVAC and refrigeration, drainage, fire protection and security installers, from sole
            traders to 30 or more staff, across Australia, New Zealand, the UK, Ireland, the US and Canada. For
            US-focused options in those trades, see our{' '}
            <Link href="/by-industry/plumbing" className={A}>plumbing software</Link> and{' '}
            <Link href="/by-industry/electrical" className={A}>electrical software</Link> guides. If you run
            QuickBooks Desktop, check our <Link href="/quickbooks" className={A}>QuickBooks guide</Link>, since
            neither vendor says which QuickBooks it supports.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Many staff who only log hours:</strong> Fergus, with timesheet users from $26 a month.</li>
            <li><strong>Subcontractors who work a few days a month:</strong> Fergus, with contractor users billed $2.50 a day they work.</li>
            <li><strong>A small all-office or all-field team that wants one simple price:</strong> Tradify, at a flat $47 to $61 per user.</li>
            <li><strong>Phone support on the entry plan:</strong> Tradify says it offers free phone support; Fergus adds phone support on Professional.</li>
            <li><strong>MYOB:</strong> Fergus lists it; the Tradify pages we read name only Xero and QuickBooks.</li>
            <li><strong>Purchase orders:</strong> Tradify puts them on Plus ($61 per user) and Fergus on Professional (from $44), so compare those two plans.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/servicem8-alternatives" className={A}>ServiceM8 alternatives</Link>{' '}
            and <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Tradify vs Fergus">
            Count who on your team needs a full seat. Tradify charges the same $47 to $61 per user for everyone
            and says it offers free phone support. Fergus starts lower in the US, bills monthly in arrears, and offers
            timesheet and contractor seats for staff who only log time, but get a quote because its pricing page
            does not label the per-user amount. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/tradify" className="text-orange-600 hover:text-orange-800">Tradify pricing →</Link>
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
