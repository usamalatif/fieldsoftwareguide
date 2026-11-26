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
 * /compare/housecall-pro-vs-gorilladesk: targets "housecall pro vs gorilladesk" and
 * "gorilladesk vs housecall pro". No GSC data for this topic yet.
 *
 * Housecall Pro facts reuse the site's verified pages only: /pricing/housecall-pro (pricing page,
 * payment help article and QuickBooks page, 2026-10-24), /compare/housecall-pro-alternatives and
 * /compare/housecall-pro-vs-kickserv (pricing page and plan data 2026-11-19; help center 2026-11-17
 * to 2026-11-24), and /by-industry/pest-control, /mosquito-control and /landscaping (pest page
 * 2026-07-08, material inventory help 2026-11-23, Optimize by Drive Time help 2026-11-21). The HVAC
 * package is mentioned only as our alternatives page and HVAC dispatch guide describe it (HVAC page
 * checked 2026-11-20); its prices are not used. www.housecallpro.com and help.housecallpro.com were
 * not refetched. GorillaDesk facts reuse /pricing/gorilladesk and the b16 research (pricing page,
 * help center, freeze/cancel page, Terms effective March 5, 2020, home page, all 2026-11-25) and the
 * Material Usage add-on from /by-industry/mosquito-control (2026-11-23).
 * Conflicts, stated on the page: QuickBooks Desktop plan (Housecall Pro's October QuickBooks page
 * names no plan; the November plan data lists it on Essentials; newer source used and flagged);
 * GorillaDesk Basic extra routes ($50 then $30 on the pricing page vs $50 per schedule in the help
 * center; pricing page used for arithmetic); GorillaDesk VoIP Basic ($65 "per user" vs $65 with one
 * number). Not used: any GorillaDesk Growth price at five or more routes (ask GorillaDesk),
 * GorillaDesk yearly dollar totals (not published), the Material Usage add-on price and Housecall
 * Pro add-on prices (not published), Housecall Pro HVAC package prices, introductory offers,
 * third-party listings and any vendor's claims about the other. Cost examples are arithmetic on
 * published prices. Nothing tested hands-on.
 */

const PATH = '/compare/housecall-pro-vs-gorilladesk'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Housecall Pro vs GorillaDesk (2026): User Caps vs Per-Route Pricing'
const DESCRIPTION =
  'Housecall Pro caps plans at 1, 5 and 8 users; GorillaDesk bills per route with free office users. Compare team costs, routing, pest tools and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/housecall-pro-vs-gorilladesk',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Housecall Pro vs GorillaDesk', href: PATH },
]

const rows: { feature: string; hcp: string; gd: string }[] = [
  { feature: 'Billing unit', hcp: 'Users, with a cap on each plan: 1 (Basic), up to 5 (Essentials), up to 8 (MAX)', gd: 'Routes (schedules); a technician on their own route needs one, a crew riding together can share one' },
  { feature: 'Published plans', hcp: 'Basic $59, Essentials $149, MAX $299 a month billed annually; $79, $189 and $329 month to month', gd: 'Basic $49, Pro $99, Growth $149 a month for the first route, paid monthly in US dollars' },
  { feature: 'Growing past the plan', hcp: '$35 a month per extra user on MAX only; no extra-user price published for Basic or Essentials', gd: 'Basic: $50 each for routes 2 and 3, $30 from route 4; Pro: $50 per route; Growth: $100 for route 2, $50 each for routes 3 and 4, five or more routes: ask GorillaDesk' },
  { feature: 'Office staff', hcp: 'Plans are sized by users; our sources show no free office or view-only user type', gd: 'Admin, manager, sales and crew users unlimited and free on every plan' },
  { feature: 'Annual billing', hcp: 'Lower monthly rate on every plan (for example $149 instead of $189 on Essentials)', gd: 'One month free, billed up front; yearly totals not published; adding a route on annual goes through Customer Success' },
  { feature: 'Trial and contract', hcp: '14 days with MAX features, no credit card; no long-term contract required', gd: '14 days, no credit card; no setup fees, contracts or annual lock-in; monthly plans cancel at any time' },
  { feature: 'Route optimization', hcp: 'Routes from Essentials; Optimize by Drive Time on MAX, reordering one tech’s day', gd: 'Route optimization on Pro; Drive Time route optimization, Best Available Time and Job Magnet on Growth' },
  { feature: 'Recurring work', hcp: 'Recurring Service Plans on MAX; a paid add-on on some other plans (price not published)', gd: 'Stripe and Square subscription billing on Pro; service plans on Growth' },
  { feature: 'Pest and chemical records', hcp: 'Has a pest control page; material reports show quantities used on jobs; no EPA fields confirmed', gd: 'Calls itself pest control software for 1 to 20+ technicians; Material Usage add-on (paid, price not in our sources) records EPA registration numbers' },
  { feature: 'QuickBooks', hcp: 'Plan data lists QuickBooks Online and Desktop on Essentials; not on Basic', gd: 'QuickBooks Online sync on Pro; Desktop not documented in our sources' },
  { feature: 'GPS', hcp: 'Employee GPS tracking on Essentials; vehicle GPS through Force at $20 per vehicle a month', gd: 'Device tracking on Pro' },
  { feature: 'Phones and texting', hcp: 'Voice add-on: call tracking from $45 a month, VoIP from $65, plus overages', gd: 'VoIP $65, $95 or $275 a month; texting number $5 a month plus prepaid credits' },
  { feature: 'Card and bank fees', hcp: '2.59% in person, 2.99% online invoice, 3.49% keyed, saved or Amex; ACH 1%; instant payout +1%', gd: 'Through Stripe (2.9% + 30¢; 2.7% + 5¢ with its reader) or Square (2.9% + 30¢ online; 2.6% + 15¢ with Square hardware); ACH not documented' },
  { feature: 'Offline app', hcp: 'View only: jobs for today and the next 2 days; changes and payments need a connection', gd: 'Not documented in our sources' },
  { feature: 'Leaving', hcp: 'Admins can export Customers and Jobs lists, sent by email', gd: 'Cancelling loses all account data; Terms allow deletion any time after 30 days; payments already made not refunded; seasonal freeze keeps data' },
]

const faqs = [
  {
    question: 'Is GorillaDesk cheaper than Housecall Pro?',
    answer:
      'Usually, when you have more logins than trucks. A two-person crew sharing one truck plus a dispatcher and a bookkeeper is four users on Housecall Pro, so Essentials at $149 a month billed annually, while GorillaDesk Pro bills one route at $99 because office and crew users are free. With seven technicians on their own routes and three office staff, Housecall Pro MAX plus two extra users is about $369 a month billed annually, against $399 for seven routes on GorillaDesk Pro or $269 on GorillaDesk Basic.',
  },
  {
    question: 'Do office staff count as users on Housecall Pro?',
    answer:
      'Housecall Pro sizes each plan by users (1, 5 or 8) and our sources show no separate free office or view-only user type, so ask Housecall Pro how it counts a dispatcher or bookkeeper. GorillaDesk’s pricing page says admin, manager, sales and crew users are unlimited and free, and only users assigned to a schedule need a paid seat.',
  },
  {
    question: 'What happens when I hire past the user limit on Housecall Pro?',
    answer:
      'On MAX, which includes 8 users, the pricing page lists $35 a month for each extra user. It lists no extra-user price for Basic (1 user) or Essentials (up to 5), so a second user on Basic or a sixth on Essentials may mean moving up a plan; ask Housecall Pro before you hire. On GorillaDesk, a new office hire costs nothing and a new technician on their own route adds one route.',
  },
  {
    question: 'Which has route optimization on a cheaper plan?',
    answer:
      'GorillaDesk puts route optimization on Pro ($99 a month for the first route) and Drive Time route optimization on Growth. Housecall Pro adds routes on Essentials but puts Optimize by Drive Time on MAX ($299 a month billed annually for up to 8 users), where it reorders one technician’s day.',
  },
  {
    question: 'Which is better for pest control?',
    answer:
      'GorillaDesk is built around pest control for companies with 1 to 20+ technicians, and its paid Material Usage add-on records EPA registration numbers on the work order. Housecall Pro is a generalist with a pest control page and material reports that show quantities used, but we found no EPA fields documented. If you file state pesticide-use reports, ask each vendor to show the report in a demo.',
  },
  {
    question: 'Which works with QuickBooks Desktop?',
    answer:
      'Housecall Pro’s plan data lists QuickBooks Online and Desktop on Essentials ($149 a month billed annually); its QuickBooks page confirms Desktop but names no plan, so confirm it. GorillaDesk syncs with QuickBooks Online on Pro, and our sources do not document Desktop.',
  },
  {
    question: 'Can I pause either one for the off-season?',
    answer:
      'GorillaDesk lets you freeze the account for a seasonal break: the app is locked but your data is kept. It does not say whether a frozen account is billed. Housecall Pro documents no freeze option in our sources, but it requires no long-term contract and keeps your data if a trial expires.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, MAX extra users, trial, contracts, add-ons, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro QuickBooks integration (Online and Desktop)', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-10-24' },
  { name: 'Housecall Pro help: payment processing options and fees', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Instapay FAQ', url: 'https://help.housecallpro.com/en/articles/1801050-instapay-faq', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Voice FAQs (pricing)', url: 'https://help.housecallpro.com/en/articles/6666356-voice-faqs', checked: '2026-11-21' },
  { name: 'Housecall Pro help: Optimize by Drive Time (MAX)', url: 'https://help.housecallpro.com/en/articles/14093813-optimize-by-drive-time', checked: '2026-11-24' },
  { name: 'Housecall Pro help: vehicle GPS tracking (Force, $20 per vehicle a month)', url: 'https://help.housecallpro.com/en/articles/6060351-vehicle-gps-tracking-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: material inventory tracking', url: 'https://help.housecallpro.com/en/articles/7119757-material-inventory-detail-tracking', checked: '2026-11-23' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Housecall Pro help: import and export jobs and customers', url: 'https://help.housecallpro.com/en/articles/6797101-how-to-import-export-jobs-and-customers', checked: '2026-11-21' },
  { name: 'Housecall Pro pest control software', url: 'https://www.housecallpro.com/industries/pest-control-software/', checked: '2026-07-08' },
  { name: 'Housecall Pro HVAC software (separate HVAC package)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-11-20' },
  { name: 'GorillaDesk pricing (US plans, routes, users, billing, trial, add-ons)', url: 'https://gorilladesk.com/pricing/', checked: '2026-11-25' },
  { name: 'GorillaDesk help: plans and pricing', url: 'https://intercom.help/gorilladesk/en/articles/431660-plans-pricing', checked: '2026-11-25' },
  { name: 'GorillaDesk help: Pro plan features and benefits', url: 'https://intercom.help/gorilladesk/en/collections/1383598-pro-plan-features-benefits-v3', checked: '2026-11-25' },
  { name: 'GorillaDesk help: features available on the Growth plan', url: 'https://intercom.help/gorilladesk/en/articles/8569025-features-available-on-the-growth-plan', checked: '2026-11-25' },
  { name: 'GorillaDesk help: VoIP plans explained', url: 'https://intercom.help/gorilladesk/en/articles/10304062-voip-plans-explained', checked: '2026-11-25' },
  { name: 'GorillaDesk help: Stripe FAQs', url: 'https://intercom.help/gorilladesk/en/articles/431652-stripe-faqs', checked: '2026-11-25' },
  { name: 'GorillaDesk help: Stripe vs Square', url: 'https://intercom.help/gorilladesk/en/articles/5342695-stripe-vs-square', checked: '2026-11-25' },
  { name: 'GorillaDesk: freeze or cancel your account', url: 'https://gorilladesk.com/not-using', checked: '2026-11-25' },
  { name: 'GorillaDesk Terms', url: 'https://gorilladesk.com/terms/', checked: '2026-11-25' },
  { name: 'GorillaDesk home (pest focus, 1 to 20+ technicians, trade templates)', url: 'https://gorilladesk.com/', checked: '2026-11-25' },
  { name: 'GorillaDesk Material Usage add-on', url: 'https://gorilladesk.com/academy/gorilladesk-training/add-ons/material-usage/', checked: '2026-11-23' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HousecallProVsGorillaDeskPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/housecall-pro-vs-gorilladesk"
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
            Housecall Pro vs GorillaDesk: <span className="text-orange-400">capped user plans or routes with free office seats</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What happens to the bill when you hire, which plan unlocks routing and service plans, and how
            pest records, QuickBooks, fees and cancellation compare, from each vendor’s own pages, checked
            November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Housecall Pro</strong> sells three plans with a user cap on each: Basic at $59 a month
            billed annually for one user, Essentials at $149 for up to five and MAX at $299 for up to eight,
            with $35 per extra user only on MAX. <strong>GorillaDesk</strong> bills by route instead, from
            $49, $99 or $149 a month for the first route, and every office, sales and crew login is free.
            That makes GorillaDesk the cheaper fit when your office or ride-along crews outnumber your trucks,
            and it unlocks route optimization at $99 where Housecall Pro needs MAX. Housecall Pro gets closer
            once most users are technicians on their own routes, and it adds QuickBooks Desktop, ACH at 1% and
            a lower rate for annual billing. Count trucks and logins separately before you compare.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Housecall Pro vs GorillaDesk side by side</h2>
          <p className={SUB}>
            Published prices and documented features only; we did not test either product or score them. US
            prices. Sources and check dates are listed at the end.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Housecall Pro</th>
                  <th scope="col" className="p-3.5">GorillaDesk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.hcp}</td>
                    <td className="p-3.5">{r.gd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="caps">Where the bill changes: user caps vs routes</h2>
          <p>
            Housecall Pro ties each feature tier to a user limit. Basic covers one user, Essentials up to five
            and MAX up to eight. Only MAX lists a price for going over, $35 a month per user, so the sixth
            person on Essentials or the second on Basic has no published price and may push you up a tier.
            Annual billing lowers every plan: $59 instead of $79, $149 instead of $189 and $299 instead of
            $329. Our sources show no free office or view-only user, so ask how a dispatcher or bookkeeper is
            counted. Housecall Pro’s HVAC page also shows a separate, higher-priced HVAC package; this page uses
            the main plan grid. All plans are in our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> guide.
          </p>
          <p>
            GorillaDesk counts routes, not people. One route is one technician running a schedule, and a crew
            in the same truck can share it. Admin, manager, sales and crew users are free on every plan, and
            “only users assigned to a schedule need a paid seat.” The first route is $49 on Basic, $99 on Pro
            and $149 on Growth. More routes cost $50 for routes 2 and 3 and then $30 each on Basic, $50 each on
            Pro, and on Growth $100 for route 2 and $50 each for routes 3 and 4. GorillaDesk does not publish a
            Growth price we can use for five or more routes, so ask for one in writing. Its help center prices
            each added Basic schedule at $50; our arithmetic uses the pricing page. Yearly billing gives one
            month free, paid up front, without published totals. See{' '}
            <Link href="/pricing/gorilladesk" className={A}>GorillaDesk pricing</Link>.
          </p>

          <h2 id="hiring">Four teams, priced as they grow</h2>
          <p>
            Pure arithmetic on published prices, not a quote. Housecall Pro is shown billed annually / month
            to month, GorillaDesk at its monthly price, before phones, texting and card fees.
          </p>
          <ul>
            <li>
              <strong>Owner on the truck plus an office manager (two logins, one route):</strong> Housecall Pro
              Basic covers one user and prices no second user, so Essentials at $149 / $189. GorillaDesk Basic
              is $49, or Pro at $99 with route optimization and QuickBooks Online.
            </li>
            <li>
              <strong>Two technicians sharing a truck plus a dispatcher and a bookkeeper (four logins, one
              route):</strong> Housecall Pro Essentials at $149 / $189. GorillaDesk Pro at $99.
            </li>
            <li>
              <strong>Four technicians on their own routes plus two office staff (six logins):</strong> past
              the Essentials cap, so Housecall Pro MAX at $299 / $329. GorillaDesk Basic at $179 ($49 + 2 × $50
              + $30), Pro at $249 ($99 + 3 × $50) or Growth at $349 ($149 + $100 + 2 × $50).
            </li>
            <li>
              <strong>Seven technicians on their own routes plus three office staff (ten logins):</strong>{' '}
              Housecall Pro MAX plus two users, about $369 billed annually if the $35 rate applies to each.
              GorillaDesk Basic at $269 ($49 + 2 × $50 + 4 × $30) or Pro at $399 ($99 + 6 × $50); Growth at
              seven routes: ask GorillaDesk.
            </li>
          </ul>
          <p>
            The gap is widest for office-heavy teams and shared trucks, where GorillaDesk bills only the route.
            It narrows as every login becomes a technician with a separate route, because Housecall Pro’s MAX
            covers eight users for one price while each GorillaDesk route adds to the bill.
          </p>

          <h2 id="tiers">Which tier unlocks what</h2>
          <p>
            The cost per seat matters less if the feature you need sits on a higher tier. Route optimization is
            on GorillaDesk Pro; Housecall Pro adds routes on Essentials and puts Optimize by Drive Time, which
            reorders one technician’s day using live traffic without moving jobs to other days or technicians,
            on MAX. GorillaDesk adds its own Drive Time route optimization, Best Available Time and Job Magnet on
            Growth. For recurring work, Housecall Pro includes Recurring Service Plans on MAX and lists Service
            Plans as a paid add-on on some other plans, without a price. GorillaDesk offers Stripe and Square
            subscription billing on Pro and service plans on Growth. QuickBooks Online starts on Housecall Pro
            Essentials and GorillaDesk Pro. More on routing in our{' '}
            <Link href="/guides/route-optimization-software" className={A}>route optimization guide</Link>.
          </p>

          <h2 id="pest">Pest control records</h2>
          <p>
            GorillaDesk describes itself as pest control software for companies with 1 to 20+ technicians, not
            a 50+ technician commercial-only system, with templates for mosquito, termite, lawn care, pool and
            other route trades. Its Material Usage add-on, sold separately at a price our sources do not give,
            stores products with EPA registration numbers and records quantity, method, target pests and area
            on the work order. Housecall Pro has a pest control page and a generalist feature set; its help
            center describes material reports that show quantities used on jobs, and we found no EPA fields
            documented. Neither vendor’s pages in our sources document state pesticide-use reports, so ask for
            a demo of the report you file. See our{' '}
            <Link href="/by-industry/pest-control" className={A}>pest control software guide</Link> and{' '}
            <Link href="/by-industry/mosquito-control" className={A}>mosquito control software guide</Link>.
          </p>

          <h2 id="accounting">QuickBooks, GPS and the field app</h2>
          <p>
            Housecall Pro’s pricing-page plan data lists QuickBooks Online and Desktop on Essentials; its
            QuickBooks page, checked earlier, confirms Desktop without naming a plan, so confirm it for your
            tier. GorillaDesk syncs with QuickBooks Online on Pro, and our sources do not document Desktop. See
            our <Link href="/quickbooks" className={A}>QuickBooks guide</Link>. Housecall Pro tracks employee
            GPS from Essentials and sells vehicle GPS through Force at $20 per vehicle a month; GorillaDesk lists
            device tracking on Pro. Offline, Housecall Pro’s app shows jobs for today and the next two days in
            view-only mode, with changes and payments waiting for a connection. Our sources do not describe
            GorillaDesk’s offline behaviour, so test it in the trial where signal drops.
          </p>

          <h2 id="phones">Phones and texting</h2>
          <p>
            Both sell a phone add-on starting at $65 a month for VoIP. Housecall Pro’s Voice is $45 a month for
            call tracking or $65 for VoIP with call tracking, plus overages. GorillaDesk’s VoIP is $65 with one
            number, $95 with two numbers and $10 of call credit, or $275 with two numbers and $25 of credit; its
            plans article calls the $65 plan “per user,” so ask which applies. GorillaDesk AI agent calls cost
            10¢ a call plus 13¢ a minute on local numbers, and texting is a $5 a month number plus prepaid
            credits from $50 for 1,000 outgoing texts.
          </p>

          <h2 id="payments">Payment fees</h2>
          <p>
            Housecall Pro processes payments itself: 2.59% for a card in person, 2.99% when a customer pays an
            online invoice, 3.49% for keyed, saved, American Express and commercial cards, 1% for ACH and an
            extra 1% for instant payouts. GorillaDesk connects to Stripe (2.9% + 30¢, or 2.7% + 5¢ with the
            Stripe reader) or Square (2.9% + 30¢ online, 2.6% + 15¢ with Square hardware), and those articles do
            not cover ACH. On a $1,000 invoice paid online, that is $29.90 with Housecall Pro and $29.30 through
            Stripe or Square. Paid in person, $25.90 with Housecall Pro, $27.05 with the Stripe reader and
            $26.15 with Square hardware. Paid by bank transfer, $10 with Housecall Pro.
          </p>

          <h2 id="terms">Trials, cancelling and your data</h2>
          <p>
            Each offers a 14-day trial without a credit card; Housecall Pro’s includes MAX features. Housecall
            Pro says it requires no long-term contract, and its help center lets Admins export the Customers and
            Jobs lists, sent by email. GorillaDesk advertises no setup fees, contracts or annual lock-in, and
            monthly plans cancel at any time without penalty. Its Terms, under Florida law, say payments already
            made are not refunded and that it may delete your data any time after 30 days from termination, and
            its cancel page says cancelling loses customers, jobs, invoices and payments. A seasonal freeze keeps
            the data; whether a frozen account is billed is not stated. Export before you leave either one.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Office staff or ride-along crews outnumber trucks:</strong> GorillaDesk, which bills only routes.</li>
            <li><strong>Route optimization on a small budget:</strong> GorillaDesk Pro at $99 for one route, against Housecall Pro MAX at $299.</li>
            <li><strong>Pest company that records EPA numbers:</strong> GorillaDesk with its Material Usage add-on.</li>
            <li><strong>Six to eight people who are mostly technicians on separate routes, needing service plans:</strong> Housecall Pro MAX, which covers eight users for one price.</li>
            <li><strong>QuickBooks Desktop, ACH or a lower annual rate:</strong> Housecall Pro.</li>
            <li><strong>Seasonal business that wants to pause:</strong> GorillaDesk’s account freeze.</li>
          </ul>
          <p>
            Comparing other options? See <Link href="/compare/housecall-pro-alternatives" className={A}>Housecall Pro alternatives</Link>{' '}
            and <Link href="/compare/jobber-vs-gorilladesk" className={A}>Jobber vs GorillaDesk</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Housecall Pro vs GorillaDesk">
            Count logins and trucks separately. GorillaDesk bills per route with free office and crew users and
            puts route optimization on its $99 Pro plan, so it suits pest and route businesses with shared
            trucks or a busy office. Housecall Pro caps users per tier, puts routing and service plans on MAX,
            and adds QuickBooks Desktop, ACH at 1% and lower annual rates. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we use only published
            prices.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
            <Link href="/pricing/gorilladesk" className="text-orange-600 hover:text-orange-800">GorillaDesk pricing →</Link>
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
