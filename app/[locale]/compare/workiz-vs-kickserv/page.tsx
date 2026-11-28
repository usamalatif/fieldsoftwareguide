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
 * /compare/workiz-vs-kickserv: targets "workiz vs kickserv". No GSC data for this topic yet.
 *
 * Workiz facts reuse /pricing/workiz (pricing page, Genius Answering, Workiz Pay, card readers,
 * financing and QuickBooks pages checked 2026-11-24; Terms of Service v1.9, last updated 2026-11-02,
 * billing clauses read 2026-11-24 and the 12-month term with 30 days' notice read 2026-11-21) and the
 * site's Workiz compare pages (phone system, route planning, mobile app and equipment pages checked
 * 2026-11-21; invoicing page 2026-11-20). Workiz publishes no prices, so none are shown. Conflicts:
 * Workiz's pricing FAQ says a phone system comes with all plans while its plan table lists Genius
 * Phone as sold separately; its QuickBooks page says data flows one way while its invoicing page
 * calls the sync two-way. Both are stated. Workiz's governing law was not found in the part of its
 * terms we read, so it is not stated. Kickserv facts reuse /pricing/kickserv and the b14 research
 * (pricing, payments, features, integrations, help center and Terms of Service last modified
 * 2024-08-21, all checked 2026-11-24; Colorado law clause read 2026-11-26 for the contract-terms
 * guide). Kickserv's pricing page does not label $60/$119/$199 as the monthly or annual rate; the
 * page says so. Not used: Kickserv's free plan limits, Flex (and its 2022 blog price) and Premium;
 * whether Kickserv's $50 Desktop fee also applies on Scale; help.workiz.com (blocked); Workiz's
 * time-limited discount; any vendor's claims about the other. The only cost figures are arithmetic
 * on Kickserv's published prices. No new fetches. Nothing tested hands-on.
 */

const PATH = '/compare/workiz-vs-kickserv'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Workiz vs Kickserv (2026): Quoted Plans vs Set User Tiers'
const DESCRIPTION =
  'Workiz quotes every plan on a 12-month renewing term; Kickserv lists $60 for 5 users, $119 for 10, $199 for 20. Compare phones, QuickBooks, fees and terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/workiz-vs-kickserv',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Workiz vs Kickserv', href: PATH },
]

const rows: { feature: string; workiz: string; ks: string }[] = [
  { feature: 'Published prices', workiz: 'None: Standard, Pro and Ultimate all show “Request pricing”; the only figure is that an annual plan can save $400 or more', ks: 'Start $60, Run $119, Scale $199 a month; “Save 20% with annual subscription”, but the shown price is not labelled as the monthly or the annual rate' },
  { feature: 'Users per plan', workiz: 'No user limit or per-user price on the pricing page', ks: '5 (Start), 10 (Run), 20 (Scale); no price published for extra users or teams above 20' },
  { feature: 'Free trial', workiz: '7 days, no credit card; fees become due when the trial ends', ks: '30 days on every plan' },
  { feature: 'Term and renewal', workiz: 'Set in your Sales Order; standard term 12 months, renewing for 12 months unless you give 30 days’ notice', ks: 'One month or one year, chosen when you open the account; renews for the same length; an annual term cannot switch to monthly before it renews' },
  { feature: 'Price changes and refunds', workiz: 'Increases of up to 10% a year with 30 days’ written notice; fees non-cancelable and non-refundable', ks: 'Fees can change with notice, which can come on an invoice; no cap stated; fees non-refundable' },
  { feature: 'Leaving and your data', workiz: 'You are responsible for backing up your own content; no export process on the pages we read', ks: 'Written notice, effective at the end of the term; cancel the payment authorization 15 days before billing; cancelling deletes customer and job records, so export first or switch to the free plan' },
  { feature: 'Contracting party and law', workiz: 'Workiz, Inc.; governing law not found in the part of the terms we read', ks: 'Norman’s Dojo, Inc., doing business as Kickserv; Colorado law and Colorado federal courts' },
  { feature: 'Phone and call answering', workiz: 'Phone system that records, summarizes and searches calls; Genius Phone and Genius Answering (AI agent in English and Spanish) listed as sold separately, no prices', ks: 'No phone system or AI answering; lists the Nexa 24/7 live answering service as a partner, 10% off for Kickserv customers' },
  { feature: 'Scheduling, routing and GPS', workiz: 'Drag-and-drop calendar, recurring jobs and team location tracking on every plan; route optimization offered, plan not stated; AI scheduling on Pro and Ultimate', ks: 'Calendar scheduling and “Repeat this job” for recurring work; dispatch mapping and GPS check-ins from Run; no route optimization listed' },
  { feature: 'Bookings and reminders', workiz: 'Online booking, client portal and 2-way texting on every plan; 5, 10 or 30 automations by plan', ks: 'Embeddable contact form and automated email and text reminders from Start; customer portal for requests, estimates and invoices' },
  { feature: 'Service plans, equipment and inventory', workiz: 'Service plans, flat rate, equipment tracking, inventory and purchase orders on Ultimate only', ks: 'None listed on the pricing or features pages' },
  { feature: 'Payment fees', workiz: 'Card and ACH rates not published; $25 non-refundable fee per chargeback; Tap to Pay free to set up', ks: '2.9% Tap to Pay, 3.9% card not present; ACH 1% + $0.30; instant payout +1%' },
  { feature: 'QuickBooks', workiz: 'On every plan; QuickBooks page says Online and Desktop, data one way (invoicing page says two-way); no add-on price', ks: 'QuickBooks Online from Start; Desktop $50 a month or $480 a year, listed on Run, every version including Mac' },
  { feature: 'Offline and API', workiz: 'View and update job details offline, synced later; open API on Ultimate', ks: 'Changelog mentions offline functionality, scope not stated; open API, plan not stated' },
]

const faqs = [
  {
    question: 'Is Kickserv cheaper than Workiz?',
    answer:
      'We cannot say, because Workiz publishes no prices. Kickserv lists $60 a month for 5 users, $119 for 10 and $199 for 20, though its page does not say whether that is the monthly or the annual rate. Ask Workiz for a written quote for the same headcount, monthly and annual, with any Genius add-ons you need, and compare totals for the first year.',
  },
  {
    question: 'Which one locks you into a longer contract?',
    answer:
      'Workiz, by default. Its terms set the term in your Sales Order, with a standard 12 months that renews for 12 months unless you give 30 days’ notice. Kickserv lets you pick a one-month or one-year term when you open the account; both renew automatically, and an annual term cannot switch to monthly before renewal. Neither refunds fees.',
  },
  {
    question: 'Which has a phone system and AI answering?',
    answer:
      'Workiz. It has a phone system that records, summarizes and searches calls, and sells Genius Phone and Genius Answering, an AI agent that answers calls, emails and texts in English and Spanish, as separate add-ons with no published price. Its pricing FAQ also says a phone system comes with all plans, so confirm in writing what your quote includes. Kickserv has no phone system and points customers to the Nexa live answering service.',
  },
  {
    question: 'Do Workiz and Kickserv work with QuickBooks Desktop?',
    answer:
      'Both do. Workiz lists QuickBooks on every plan, and its QuickBooks page says it works with Online and Desktop, with data flowing one way to QuickBooks; its invoicing page calls the sync two-way, so ask. Kickserv includes QuickBooks Online from Start and charges $50 a month or $480 a year for Desktop, listed on Run, including Mac versions.',
  },
  {
    question: 'What happens to my data if I leave?',
    answer:
      'Kickserv’s help center says cancelling permanently deletes your customer and job records, so export from Account and Billing settings first or switch to the free plan to keep them. Workiz’s terms say you are responsible for backing up your own content; ask how export works before your renewal date.',
  },
  {
    question: 'Which suits maintenance agreements or equipment records?',
    answer:
      'Workiz, on Ultimate: service plans, flat rate, equipment tracking, inventory and purchase orders are listed on that plan only. Kickserv lists none of these; it handles repeat visits with a “Repeat this job” button on scheduled jobs.',
  },
]

const sources = [
  { name: 'Workiz pricing plans (features by plan, add-ons, trial, annual saving, phone FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'Workiz Terms of Service v1.9 (last updated November 2, 2026): billing, increases, refunds, chargebacks, backups; 12-month term and notice read 2026-11-21', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-24' },
  { name: 'Workiz Genius Answering (AI agent, English and Spanish)', url: 'https://www.workiz.com/features/genius-answering/', checked: '2026-11-24' },
  { name: 'Workiz phone system', url: 'https://www.workiz.com/features/phone-system/', checked: '2026-11-21' },
  { name: 'Workiz route planning', url: 'https://www.workiz.com/features/route-planning/', checked: '2026-11-21' },
  { name: 'Workiz mobile app (offline)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-21' },
  { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-11-21' },
  { name: 'Workiz card readers and Tap to Pay', url: 'https://www.workiz.com/features/card-readers/', checked: '2026-11-24' },
  { name: 'Workiz QuickBooks integration (Online and Desktop, one way)', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-24' },
  { name: 'Workiz invoicing (two-way sync wording)', url: 'https://www.workiz.com/features/invoicing/', checked: '2026-11-20' },
  { name: 'Kickserv pricing (plans, users, annual saving, trial, features by plan)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv features (scheduling, customer portal)', url: 'https://www.kickserv.com/features', checked: '2026-11-24' },
  { name: 'Kickserv help: jobs (repeat this job)', url: 'https://help.kickserv.com/article/32-jobs', checked: '2026-11-24' },
  { name: 'Kickserv help: the Customer Center', url: 'https://help.kickserv.com/article/80-the-customer-center', checked: '2026-11-24' },
  { name: 'Kickserv payments integration (Tap to Pay, card not present, instant payout)', url: 'https://www.kickserv.com/integrations/payments', checked: '2026-11-24' },
  { name: 'Kickserv help: ACH payments (1% + $0.30)', url: 'https://help.kickserv.com/article/94-ach-payments', checked: '2026-11-24' },
  { name: 'Kickserv help: connect to QuickBooks Desktop ($50 a month or $480 a year)', url: 'https://help.kickserv.com/article/8-connect-to-quickbooks-desktop', checked: '2026-11-24' },
  { name: 'Kickserv integrations (QuickBooks versions including Mac, open API)', url: 'https://www.kickserv.com/integrations', checked: '2026-11-24' },
  { name: 'Kickserv partnerships (Nexa 24/7 Answering Service)', url: 'https://www.kickserv.com/partnerships', checked: '2026-11-24' },
  { name: 'Kickserv changelog (offline functionality)', url: 'https://changelog.kickserv.com/', checked: '2026-11-24' },
  { name: 'Kickserv help: how to cancel (free plan, data deletion)', url: 'https://help.kickserv.com/article/61-how-do-i-cancel-my-account', checked: '2026-11-24' },
  { name: 'Kickserv help: settings (data export)', url: 'https://help.kickserv.com/article/38-settings', checked: '2026-11-24' },
  { name: 'Kickserv Terms of Service (last modified August 21, 2024; term, fees, Colorado law in section 23)', url: 'https://www.kickserv.com/terms', checked: '2026-11-26' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function WorkizVsKickservPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/workiz-vs-kickserv"
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
            Workiz vs Kickserv: <span className="text-orange-400">a quote on a yearly term, or a price list by headcount</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing, user limits, terms, phones, scheduling, payments, QuickBooks and leaving, from each
            vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Workiz</strong> publishes no prices: Standard, Pro and Ultimate are quoted, the standard
            term is 12 months renewing for 12 months, and fees can rise up to 10% a year. In return it
            includes a phone system and 2-way texting on every plan, sells AI call answering as an add-on, and
            puts service plans, equipment and inventory on Ultimate. <strong>Kickserv</strong> publishes three
            plans sized by headcount: $60 a month for 5 users, $119 for 10 and $199 for 20, on a monthly or
            annual term you choose, with QuickBooks Desktop at $50 a month extra. It has no phone system or
            route optimization, and cancelling deletes your records. Pick Kickserv for a known price; ask
            Workiz for a quote if calls and maintenance work drive your business.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Workiz vs Kickserv at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Kickserv
            prices are in US dollars. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Workiz</th>
                  <th scope="col" className="p-3.5">Kickserv</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.workiz}</td>
                    <td className="p-3.5">{r.ks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: a sales quote vs three headcount tiers</h2>
          <p>
            Workiz shows “Request pricing” on Standard, Pro and Ultimate and names no user limit or per-user
            price. The one number on its pricing page is that an annual plan can save $400 or more, with no
            monthly or annual price beside it. Genius Phone, Genius Answering, Genius Marketing and card
            readers are sold separately, also without prices. Our{' '}
            <Link href="/pricing/workiz" className={A}>Workiz pricing</Link> guide lists what each plan
            includes and what to ask for in a quote.
          </p>
          <p>
            Kickserv prices by team size. Start is $60 a month for 5 users, Run $119 for 10 and Scale $199 for
            20, which works out to $12.00, $11.90 and $9.95 per included user. The page says you save 20% with
            an annual subscription but does not say whether the listed price is the monthly or the annual
            rate, and it gives no price for a sixth user on Start or for teams above 20. Every plan has a
            30-day trial. See <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link>.
          </p>
          <p>
            The only arithmetic we can do is on Kickserv’s side: Run plus the QuickBooks Desktop add-on is
            $119 + $50 = $169 a month as listed, before the monthly or annual question is settled. Because
            Workiz quotes every plan, any side-by-side total has to come from your own written quote.
          </p>

          <h2 id="contracts">Terms: who sets the term, and what renewal costs</h2>
          <p>
            Workiz’s Terms of Service (version 1.9, last updated November 2, 2026) make your Sales Order the
            source of the term. When we read them, the standard term was 12 months, renewing for another 12
            unless you give 30 days’ notice. Fees are non-cancelable and non-refundable, Workiz may raise them
            by up to 10% a year with at least 30 days’ written notice, and late amounts accrue 1.5% a month.
            Put your renewal date in the calendar the day you sign.
          </p>
          <p>
            Kickserv’s terms (last modified August 21, 2024) let you choose a one-month or one-year term when
            you open the account, and either renews for the same length. An annual term cannot be converted to
            monthly before it renews. Either side can end the agreement by written notice, effective at the end
            of the current term, and you must cancel your payment authorization at least 15 days before the
            next billing date. Fees are non-refundable and can change with notice, which can arrive on an
            invoice, with no cap stated. The contracting party is Norman’s Dojo, Inc., doing business as
            Kickserv, under Colorado law. We did not find Workiz’s governing law in the part of its terms we
            read. Our <Link href="/guides/field-service-software-contract-terms" className={A}>contract terms guide</Link>{' '}
            compares these clauses across vendors.
          </p>

          <h2 id="phones">Phones and call answering</h2>
          <p>
            This is the widest gap. Workiz has a phone system that records, summarizes and makes calls
            searchable, and its pricing page lists 2-way texting on every plan. Its FAQ says a phone system
            comes with all plans, while the plan table lists Genius Phone as sold separately, so get the phone
            features in your quote in writing. Genius Answering is an AI agent that answers calls, emails and
            texts 24/7 in English and Spanish, also sold separately. Workiz’s terms say some call types are
            billed at different per-minute rates or multipliers and that phone charges are non-refundable.
          </p>
          <p>
            Kickserv has no phone system or AI answering. It sends automated email and text reminders from
            Start and lists the Nexa 24/7 live answering service as a partner, with 10% off for Kickserv
            customers. If you want calls inside your field service tool, only Workiz offers that here.
          </p>

          <h2 id="scheduling">Scheduling, routing and recurring work</h2>
          <p>
            Workiz includes a drag-and-drop calendar, recurring jobs, online booking, a client portal and team
            location tracking on every plan, adds AI scheduling on Pro and Ultimate, and offers route
            optimization without saying which plan includes it. Kickserv schedules jobs from a calendar, repeats
            visits with a “Repeat this job” button and adds dispatch mapping and GPS check-ins on Run. It lists
            no route optimization. Its customer portal lets customers request work, view estimates and pay
            invoices.
          </p>
          <p>
            For maintenance work, Workiz Ultimate lists service plans, flat rate, sales proposals, equipment
            tracking, inventory and purchase orders. Kickserv lists none of these on its pricing or features
            pages. Workiz says techs can view and update job details offline, with changes synced later;
            Kickserv’s changelog mentions offline functionality but does not describe it.
          </p>

          <h2 id="payments">Payments and QuickBooks</h2>
          <p>
            Kickserv publishes its rates: 2.9% with Tap to Pay, 3.9% when the card is not present, 1% + $0.30
            for ACH and an extra 1% for instant payouts, the same on every plan. Workiz does not publish its
            card or ACH rates; its terms set a non-refundable $25 fee for each chargeback, and Tap to Pay is
            free to set up. Ask Workiz for the full fee schedule in writing.
          </p>
          <p>
            Both connect to QuickBooks Desktop. Kickserv includes QuickBooks Online from Start and charges $50 a
            month or $480 a year for Desktop, listed on Run, and says it works with every version including
            Mac. Workiz lists QuickBooks on every plan with no add-on price; its QuickBooks page says it works
            with Online and Desktop and that data flows one way, while its invoicing page calls the sync
            two-way. See our <Link href="/quickbooks" className={A}>QuickBooks guide</Link> for other options.
          </p>

          <h2 id="leaving">Leaving: export before you cancel</h2>
          <p>
            Kickserv’s help center warns that cancelling permanently deletes your account information,
            including customer and job records. Export from the Account and Billing settings first, or switch
            to the free plan, which keeps your data. Workiz’s terms say you are responsible for backing up your
            own content. With either vendor, export before you give notice.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>You want a price before you talk to sales:</strong> Kickserv, the only one of the two that publishes prices.</li>
            <li><strong>A team of 5 to 20 on a tight budget:</strong> Kickserv, from $60 a month for 5 users.</li>
            <li><strong>Calls are how you win work:</strong> Workiz, with a phone system and AI answering as an add-on.</li>
            <li><strong>Maintenance agreements, equipment or stock:</strong> Workiz Ultimate, by quote.</li>
            <li><strong>Monthly terms with no yearly lock-in:</strong> Kickserv’s one-month term; Workiz’s standard term is 12 months.</li>
            <li><strong>QuickBooks Desktop at a known cost:</strong> Kickserv at $50 a month; ask Workiz what its quote includes.</li>
            <li><strong>More than 20 users:</strong> Kickserv publishes no price above Scale, so get quotes from both.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/workiz-alternatives" className={A}>Workiz alternatives</Link>{' '}
            and <Link href="/compare/kickserv-alternatives" className={A}>Kickserv alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Workiz vs Kickserv">
            Kickserv is a published price list: $60, $119 or $199 a month for 5, 10 or 20 users, a monthly or
            annual term, and $50 a month for QuickBooks Desktop, but no phones, routing or maintenance tools.
            Workiz is a quote on a standard 12-month renewing term with up to 10% yearly increases, in exchange
            for built-in calling, AI answering as an add-on and maintenance features on Ultimate. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/workiz" className="text-orange-600 hover:text-orange-800">Workiz pricing →</Link>
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
