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
 * /compare/housecall-pro-vs-tradify: targets "housecall pro vs tradify" and "tradify vs housecall
 * pro". No GSC data for this topic yet.
 *
 * Housecall Pro facts reuse the site's verified pages only: /pricing/housecall-pro (pricing page,
 * payment help article and QuickBooks page, 2026-10-24), /compare/housecall-pro-alternatives,
 * /compare/housecall-pro-vs-kickserv and /compare/housecall-pro-vs-gorilladesk (pricing page and plan
 * data 2026-11-19; help center 2026-11-17 to 2026-11-24; HVAC page 2026-11-20; pest control page
 * 2026-07-08). www.housecallpro.com and help.housecallpro.com were not refetched. Tradify facts reuse
 * /pricing/tradify, /compare/servicem8-vs-tradify and the b16 research notes: pricing page, home page,
 * features page, Stripe payments page and Product-Specific Terms, all checked 2026-11-25.
 * Conflicts, stated on the page: Housecall Pro's QuickBooks page names no plan for Desktop while the
 * newer plan data lists it on Essentials (newer used, flagged "confirm"); Tradify's terms mention
 * "monthly or yearly charges" while its pricing page shows monthly prices only. Tradify prints prices
 * in $ with no currency code; stated once. Not used: Housecall Pro add-on prices it does not publish,
 * HVAC package prices, introductory offers and refund terms (none in our sources, so "not
 * documented"); Tradify help center (403 earlier, not refetched), governing law (in Access Group
 * terms we did not read), how Tradify counts users; any vendor's claims about the other. Feature
 * names differ, so rows compare named features, not equivalence. Cost examples are arithmetic on
 * published prices. No new URLs fetched. Nothing tested hands-on.
 */

const PATH = '/compare/housecall-pro-vs-tradify'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Housecall Pro vs Tradify (2026): User-Capped Plans vs Per-Seat Price'
const DESCRIPTION =
  'Housecall Pro caps plans at 1, 5 and 8 users; Tradify charges $47 to $61 per user. Compare cost by team size, trade focus, add-ons and refund terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/housecall-pro-vs-tradify',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Housecall Pro vs Tradify', href: PATH },
]

const rows: { feature: string; hcp: string; tradify: string }[] = [
  { feature: 'How the price is set', hcp: 'One price per plan, with a user cap: 1 (Basic), up to 5 (Essentials), up to 8 (MAX)', tradify: 'A price per user per month; the bill rises by one seat for every person you add' },
  { feature: 'Published prices', hcp: 'Basic $59, Essentials $149, MAX $299 a month billed annually; $79, $189 and $329 month to month', tradify: 'Lite $47, Pro $51, Plus $61 per user a month; Custom for large teams on request' },
  { feature: 'Hiring past the plan', hcp: '$35 a month per user over 8 on MAX; no extra-user price published for Basic or Essentials', tradify: 'Same per-user price at any headcount; no user minimum or cap shown' },
  { feature: 'Billing terms and trial', hcp: 'Annual billing lowers the monthly rate on every plan; 14-day trial with MAX features, no credit card', tradify: 'Monthly prices only on the pricing page; 14-day trial with all features, no credit card' },
  { feature: 'Contract, cancellation and refunds', hcp: 'Says it does not require long-term contracts; refund terms not documented in our sources; data kept if a trial expires', tradify: 'Cancel any time in the app; monthly or yearly charges already billed are not refunded; Tradify Limited (New Zealand) is the contracting party' },
  { feature: 'Trade focus', hcp: 'Separate, higher-priced HVAC package; a pest control page; price book on Basic and flat-rate pricing from Essentials', tradify: 'Says it is built for electricians, plumbers, gas engineers, HVAC techs and property maintenance, from sole traders to larger teams' },
  { feature: 'Accounting', hcp: 'QuickBooks Online from Essentials; plan data lists Desktop on Essentials too; not on Basic', tradify: 'Xero and QuickBooks from Lite; Online or Desktop not specified' },
  { feature: 'Job costing and pricing tools', hcp: 'Job costing and price book on Basic; flat-rate pricing and commissions on Essentials', tradify: 'Pricing and markups on Lite; costing, bill tracking and timesheets from Pro; kit bundles on Plus' },
  { feature: 'Recurring work', hcp: 'Recurring Service Plans on MAX; a paid add-on on some other plans, price not published', tradify: 'Recurring jobs from Pro; service reminders on Plus' },
  { feature: 'Project billing, purchasing and subcontractors', hcp: 'Sales proposal tool on MAX; purchase orders and subcontractor scheduling not documented in our sources', tradify: 'Progress invoicing and subcontractor scheduling from Pro; purchase orders and bulk invoicing on Plus' },
  { feature: 'Maps, GPS and offline', hcp: 'Routes and employee GPS from Essentials; Optimize by Drive Time on MAX; app offline is view only (today and the next 2 days)', tradify: 'iOS and Android apps with live staff locations on a map; route optimization and offline use not documented' },
  { feature: 'Priced add-ons', hcp: 'Vehicle GPS through Force $20 per vehicle a month; Voice from $45 (call tracking) or $65 (VoIP) plus overages; Tap to Pay on Mobile $5 per active device a month; other add-ons unpriced', tradify: 'Instant Website $12 a month; SmartTools only on Plus; free one-on-one training and phone support' },
  { feature: 'Card and bank fees', hcp: '2.59% in person, 2.99% online invoice, 3.49% keyed, saved or Amex; ACH 1%; instant payout +1%', tradify: 'Stripe 3.1% + $0.30 per card charge; first payout 7 days after payment, then 2 days; fee can be passed on; ACH not described' },
]

const faqs = [
  {
    question: 'Is Tradify cheaper than Housecall Pro?',
    answer:
      'For one to three users, on published prices, yes. Tradify Lite is $47 a user, so $47, $94 or $141 a month, while Housecall Pro is $59 for one user on Basic and $149 billed annually for up to five on Essentials. From four users the cap works in Housecall Pro’s favour: four users on Lite is $188 against $149, five on Pro is $255 against $149, and ten on Lite is $470 against about $369 on MAX. Compare the plans that include the features you need, not just the cheapest ones.',
  },
  {
    question: 'What happens to the bill when I hire on each?',
    answer:
      'On Tradify each new person adds one seat at your plan’s price ($47, $51 or $61). On Housecall Pro the bill stays flat until you pass a plan’s cap, then jumps: a second user on Basic or a sixth on Essentials has no published per-user price, so you may need the next plan, and past eight users on MAX each extra user is $35 a month. Ask Housecall Pro what a second or sixth seat costs before you hire.',
  },
  {
    question: 'Which is better for electricians, plumbers or HVAC?',
    answer:
      'Tradify names electricians, plumbers, gas engineers, HVAC techs and property maintenance as its audience, and lists progress invoicing, purchase orders, kit bundles and subcontractor scheduling, which suit install and project work. Housecall Pro lists a price book and job costing on Basic, flat-rate pricing on Essentials and Recurring Service Plans on MAX, which suit repair and maintenance work, and sells a separate, higher-priced HVAC package. Match the plan features to how you quote and bill.',
  },
  {
    question: 'Can I get a refund if I cancel?',
    answer:
      'Tradify’s terms let you cancel at any time through the app but say monthly or yearly charges are not refunded when you cancel. Housecall Pro says it does not require long-term contracts; the sources we rely on do not record its refund terms, so ask before you choose annual billing, which is the lower monthly rate.',
  },
  {
    question: 'What add-ons cost extra?',
    answer:
      'Housecall Pro’s help center prices vehicle GPS through Force at $20 per vehicle a month and Voice from $45 a month for call tracking or $65 for VoIP, plus overages; Tap to Pay on Mobile is $5 per active device a month. Its pricing page lists other add-ons, such as CSR AI, Payroll and Websites, without prices. Tradify lists one priced add-on, an Instant Website at $12 a month, and keeps its SmartTools on Plus.',
  },
  {
    question: 'Which includes QuickBooks on the cheapest plan?',
    answer:
      'Tradify lists Xero and QuickBooks sync on Lite, its entry plan, but does not say whether that covers QuickBooks Online, Desktop or both. Housecall Pro starts QuickBooks Online sync on Essentials ($149 a month billed annually), not Basic; its plan data lists Desktop on Essentials too, while its QuickBooks page names no plan, so confirm it.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, MAX extra users, monthly rates, trial, contracts, add-ons, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro QuickBooks integration (Online and Desktop)', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-10-24' },
  { name: 'Housecall Pro help: payment processing options and fees (including Tap to Pay on Mobile)', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Instapay FAQ', url: 'https://help.housecallpro.com/en/articles/1801050-instapay-faq', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Voice FAQs (pricing)', url: 'https://help.housecallpro.com/en/articles/6666356-voice-faqs', checked: '2026-11-21' },
  { name: 'Housecall Pro help: vehicle GPS tracking (Force, $20 per vehicle a month)', url: 'https://help.housecallpro.com/en/articles/6060351-vehicle-gps-tracking-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: Optimize by Drive Time (MAX)', url: 'https://help.housecallpro.com/en/articles/14093813-optimize-by-drive-time', checked: '2026-11-24' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Housecall Pro help: import and export jobs and customers', url: 'https://help.housecallpro.com/en/articles/6797101-how-to-import-export-jobs-and-customers', checked: '2026-11-21' },
  { name: 'Housecall Pro HVAC software (separate HVAC package)', url: 'https://www.housecallpro.com/industries/hvac-software/', checked: '2026-11-20' },
  { name: 'Housecall Pro pest control software', url: 'https://www.housecallpro.com/industries/pest-control-software/', checked: '2026-07-08' },
  { name: 'Tradify pricing (plans, per-user prices, features by plan, Instant Website add-on, trial)', url: 'https://www.tradifyhq.com/pricing', checked: '2026-11-25' },
  { name: 'Tradify home (trades served, team sizes, 14-day trial, training and phone support)', url: 'https://www.tradifyhq.com/', checked: '2026-11-25' },
  { name: 'Tradify features (iOS and Android apps, staff locations on a map)', url: 'https://www.tradifyhq.com/features', checked: '2026-11-25' },
  { name: 'Tradify payments with Stripe (card fees, payouts, passing on fees)', url: 'https://www.tradifyhq.com/credit-card-payments-with-stripe', checked: '2026-11-25' },
  { name: 'Tradify Product-Specific Terms of Service (Tradify Limited, cancellation, refunds)', url: 'https://www.tradifyhq.com/terms', checked: '2026-11-25' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HousecallProVsTradifyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/housecall-pro-vs-tradify"
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
            Housecall Pro vs Tradify: <span className="text-orange-400">plans capped by headcount or a price for every seat</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Where each one gets cheaper as your crew grows, which trades each plan is built around, what
            add-ons cost and what happens to your money when you cancel, from each vendor’s own pages,
            checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Housecall Pro</strong> sells three plans, each with a user cap: Basic at $59 a month billed
            annually for one user, Essentials at $149 for up to five and MAX at $299 for up to eight, plus $35
            per extra user on MAX only. <strong>Tradify</strong> charges the same price for every user: Lite $47,
            Pro $51 and Plus $61 a month. On published prices Tradify Lite is cheaper for one to three users and
            includes Xero and QuickBooks sync on its entry plan; from four users Housecall Pro Essentials costs
            less, and at ten users MAX is about $369 against $470 on Tradify Lite. Tradify’s higher plans add
            progress invoicing, purchase orders and subcontractor scheduling for install trades, while Housecall
            Pro adds ACH at 1%, flat-rate pricing and a lower rate for annual billing. Tradify does not refund
            charges already billed when you cancel; Housecall Pro’s refund terms are not in our sources.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Housecall Pro and Tradify compared row by row</h2>
          <p className={SUB}>
            Published prices and documented features only, not a hands-on test or a rating. Plan features
            are named as each vendor names them and are not always equivalent. Sources and check dates are
            listed at the end.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Housecall Pro</th>
                  <th scope="col" className="p-3.5">Tradify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.hcp}</td>
                    <td className="p-3.5">{r.tradify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Two pricing models: user caps and per-seat billing</h2>
          <p>
            Housecall Pro charges one price per plan and limits how many people it covers. Billed annually,
            Basic is $59 for one user, Essentials $149 for up to five and MAX $299 for up to eight;
            month to month, the same plans are $79, $189 and $329. Its pricing page lists $35 a month for each
            user over eight on MAX, but no extra-user price for Basic or Essentials, so a second person on
            Basic or a sixth on Essentials may mean moving up a plan. Every plan and fee is in our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> guide.
          </p>
          <p>
            Tradify charges per user per month, with no cap and no bundle: Lite $47, Pro $51 and Plus $61, plus
            a Custom plan for large teams priced on request. Its pricing page prints these in $ with no
            currency code and a US address in the footer, shows monthly prices only and does not say whether
            office and field users cost the same. Its terms, however, mention “monthly or yearly charges”, so
            ask about annual billing in writing. See{' '}
            <Link href="/pricing/tradify" className={A}>Tradify pricing</Link>.
          </p>

          <h2 id="team-size">Cost by team size: plain arithmetic</h2>
          <p>
            These figures multiply or add the published prices and nothing else. Housecall Pro figures use its
            annual-billing rates; Tradify shows only monthly prices. They exclude tax, card fees and add-ons.
          </p>
          <ul>
            <li><strong>One person, no accounting sync:</strong> Tradify Lite $47 against Housecall Pro Basic $59.</li>
            <li><strong>One person who needs QuickBooks:</strong> Tradify Lite $47 against Housecall Pro Essentials $149, since Basic has no QuickBooks sync.</li>
            <li><strong>Three people:</strong> Tradify Lite $141, Pro $153 or Plus $183, against Housecall Pro Essentials $149.</li>
            <li><strong>Five people:</strong> Tradify Lite $235, Pro $255 or Plus $305, against Housecall Pro Essentials $149.</li>
            <li><strong>Six people:</strong> Tradify Lite $282 or Pro $306, against Housecall Pro MAX $299, since Essentials stops at five and no sixth-seat price is published.</li>
            <li><strong>Eight people:</strong> Tradify Lite $376, Pro $408 or Plus $488, against Housecall Pro MAX $299.</li>
            <li><strong>Ten people:</strong> Tradify Lite $470, Pro $510 or Plus $610, against Housecall Pro MAX plus two extra users, $299 + $70 = $369, if the $35 rate applies to your billing term.</li>
          </ul>
          <p>
            The crossover sits at four users: three on Tradify Lite ($141) is less than Essentials ($149), and
            four ($188) is more. On Housecall Pro’s month-to-month rates the crossover moves up: four users on
            Lite ($188) is $1 less than Essentials at $189, and seven on Lite ($329) equals MAX at $329.
            Features differ by plan, so price the plans you would actually buy: recurring jobs start on
            Tradify Pro, while Recurring Service Plans sit on Housecall Pro MAX or come as an add-on at a price
            it does not publish.
          </p>

          <h2 id="trades">Which trades each one is built around</h2>
          <p>
            Tradify describes itself as job management software for electricians, plumbers, gas engineers, HVAC
            techs, property maintenance services and other trades, from sole traders to larger teams. Its
            plan ladder leans toward install and project work: pricing and markups on Lite, then progress
            invoicing, costing, bill tracking, timesheets and subcontractor scheduling on Pro, and purchase
            orders, kit bundles, bulk invoicing and job service reports on Plus.
          </p>
          <p>
            Housecall Pro’s plan ladder leans toward repair and maintenance visits: a price book and job costing
            on Basic, flat-rate pricing, checklist automations and commissions on Essentials, and a sales
            proposal tool and Recurring Service Plans on MAX. It also sells a separate, higher-priced HVAC
            package and has a pest control page. Our sources do not document purchase orders or subcontractor
            scheduling on Housecall Pro. For trade-by-trade picks, see our{' '}
            <Link href="/by-industry/hvac" className={A}>HVAC</Link> and{' '}
            <Link href="/by-industry/electrical" className={A}>electrical</Link> software pages.
          </p>

          <h2 id="add-ons">Add-ons and what they cost</h2>
          <p>
            Housecall Pro prices some add-ons in its help center: vehicle GPS through Force at $20 per vehicle a
            month, and Voice from $45 a month for call tracking or $65 for VoIP, plus overages. Tap to Pay on
            Mobile is $5 per active device a month. Its pricing page lists more add-ons without prices,
            including CSR AI, Pipeline, Payroll, Accounting, Business Coaching, Campaigns and Websites, so get
            those quoted in writing. Recurring Service Plans are a paid add-on on some plans below MAX.
          </p>
          <p>
            Tradify lists one priced add-on, an Instant Website at $12 a month on any plan. Its SmartTools
            (SmartRead for Bills and SmartWrite) come only with Plus, with no separate price, and it says
            one-on-one training and phone support are free. The pages we read do not document a phone system,
            AI call answering or vehicle tracking add-on for Tradify.
          </p>

          <h2 id="accounting">QuickBooks and Xero</h2>
          <p>
            Tradify lists Xero and QuickBooks sync on Lite, its cheapest plan, without saying whether that means
            QuickBooks Online, Desktop or both. Housecall Pro starts QuickBooks Online sync on Essentials; its
            plan data lists Desktop there too, while its QuickBooks page confirms Desktop support but names no
            plan, so confirm it for your plan. Our sources do not document a Xero sync for Housecall Pro. Our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> covers how other tools handle Online
            and Desktop.
          </p>

          <h2 id="refunds">Cancelling, refunds and your data</h2>
          <p>
            Both offer a 14-day trial without a credit card: Tradify with all features, Housecall Pro with MAX
            features. Tradify’s Product-Specific Terms, from Tradify Limited (incorporated in New Zealand),
            say in section 5.1.2 that you may cancel at any time through the app, and in section 5.1.3 that
            monthly or yearly charges are not refunded when you cancel. They also let Tradify suspend or end
            the service at any time (section 5.1.1) and do not say what happens to your data afterwards.
          </p>
          <p>
            Housecall Pro’s pricing FAQ says it does not require long-term contracts and that your data is
            kept if a trial expires. The sources we rely on do not record its refund terms, which matters if you
            take the cheaper annual rate, so ask before you pay a year ahead. Its help center says Admins can
            export the Customers and Jobs lists, with the file sent by email.
          </p>

          <h2 id="payments">Card fees and payouts</h2>
          <p>
            Housecall Pro charges 2.59% for cards in person, 2.99% when a customer pays an online invoice and
            3.49% for keyed, saved, American Express and commercial cards, with bank (ACH) payments at 1% and
            instant payouts at an extra 1%. Tradify runs card payments through Stripe at 3.1% + $0.30, pays out
            7 days after the first payment and 2 days after later ones, lets you pass the fee on to your
            customer and does not describe ACH. On a $1,000 invoice paid by card online, that is $29.90 with
            Housecall Pro and $31.30 with Tradify; by bank transfer through Housecall Pro, $10.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>One to three people who want accounting sync on the entry plan:</strong> Tradify Lite.</li>
            <li><strong>Four or five people:</strong> Housecall Pro Essentials, at $149 for the whole crew billed annually.</li>
            <li><strong>Six to eight people:</strong> Housecall Pro MAX at $299, unless six people on Tradify Lite ($282) covers what you need.</li>
            <li><strong>Install or project work with progress billing, purchase orders or subcontractors:</strong> Tradify Pro or Plus.</li>
            <li><strong>Maintenance agreements, flat-rate pricing or ACH payments:</strong> Housecall Pro.</li>
            <li><strong>A team that grows and shrinks often:</strong> Tradify, where cost follows headcount one seat at a time.</li>
          </ul>
          <p>
            Comparing more tools? See{' '}
            <Link href="/compare/housecall-pro-alternatives" className={A}>Housecall Pro alternatives</Link>{' '}
            and <Link href="/compare/tradify-alternatives" className={A}>Tradify alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Housecall Pro vs Tradify">
            Count heads first. Tradify’s flat per-seat price wins for crews of up to three and puts accounting
            sync on its cheapest plan; Housecall Pro’s capped plans win from four users, where five people on
            Essentials cost $149 a month billed annually. Then check trade fit and terms: Tradify suits install
            and project work and does not refund billed charges, while Housecall Pro suits maintenance and
            flat-rate work. Our <Link href="/how-we-review" className={A}>review method</Link> explains why we
            show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
            <Link href="/pricing/tradify" className="text-orange-600 hover:text-orange-800">Tradify pricing →</Link>
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
