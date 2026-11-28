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
 * /compare/workiz-vs-service-fusion: targets "workiz vs service fusion". No GSC data for this topic yet.
 *
 * Workiz facts reuse /pricing/workiz (pricing page, Genius Answering, Workiz Pay, card readers,
 * financing and QuickBooks pages checked 2026-11-24; Terms of Service v1.9, last updated 2026-11-02,
 * billing, increase, phone usage and chargeback clauses read 2026-11-24, the 12-month term with 30
 * days' notice read 2026-11-21) and the site's Workiz compare pages (phone system, route planning,
 * mobile app and equipment pages checked 2026-11-21; invoicing page 2026-11-20), plus the client
 * portal page from the b21 notes (2026-11-26). Workiz publishes no prices, so none are shown. Service
 * Fusion facts reuse /pricing/service-fusion, /compare/jobber-vs-service-fusion,
 * /compare/housecall-pro-vs-service-fusion and /compare/service-fusion-vs-kickserv: pricing page,
 * Subscription Agreement (last modified 2026-03-23; Texas law clause read 2026-11-26), help center
 * (billing, add-ons, payments, QuickBooks Desktop, Open API, service agreements), offline mode post
 * (2026-06-22), scheduling, ServiceCall.ai, ZyraTalk, Acorn financing and flat rate pages, all
 * checked 2026-11-24. Conflicts, both stated on the page: Workiz's pricing FAQ says a phone system
 * comes with all plans while its plan table lists Genius Phone as sold separately; Workiz's
 * QuickBooks page says data flows one way while its invoicing page calls the sync two-way; Service
 * Fusion's pricing page says month to month while its Subscription Agreement renews the ordered
 * term automatically. Workiz's governing law was not found in the part of its terms we read, so it
 * is not stated. Deliberately not used: help.workiz.com (blocked), Workiz's time-limited discount,
 * Service Fusion's "3 to 30 technicians" line (from its page about another vendor), any add-on price
 * estimate (none published), and any claim either vendor makes about the other. Cost figures are
 * arithmetic on Service Fusion's published prices only. No new fetches. Nothing tested hands-on.
 */

const PATH = '/compare/workiz-vs-service-fusion'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Workiz vs Service Fusion (2026): Quote-Only vs Flat Unlimited Users'
const DESCRIPTION =
  'Service Fusion lists $220, $339 and $552 a month with unlimited users; Workiz shows no prices. Compare renewal terms, phones, QuickBooks Desktop and fees.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/workiz-vs-service-fusion',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Workiz vs Service Fusion', href: PATH },
]

const rows: { feature: string; workiz: string; sf: string }[] = [
  { feature: 'What sets the price', workiz: 'Your Sales Order: Standard, Pro and Ultimate are quoted; no user limit or per-user price on the pricing page', sf: 'The plan alone: unlimited users on every plan; ServiceCall.ai is the one add-on billed per user (price not published)' },
  { feature: 'Published prices', workiz: 'None: every plan shows “Request pricing”; the only figure is that an annual plan can save $400 or more; prices exclude sales tax', sf: 'Starter $220, Plus $339, Pro $552 a month billed annually, charged as one payment at sign-up; $259, $399 and $649 billed monthly' },
  { feature: 'Try before you buy', workiz: '7-day free trial, no credit card; fees become due when the trial ends', sf: 'Free demo; no free trial mentioned on the pricing page' },
  { feature: 'Term and renewal', workiz: 'Term set in the Sales Order; standard term 12 months, renewing for 12 months unless you give 30 days’ notice', sf: 'Pricing page: month to month, no contract requirements. Subscription Agreement: the ordered term renews for the same length unless 30 days’ written notice' },
  { feature: 'Price changes and refunds', workiz: 'Increases of up to 10% a year with at least 30 days’ written notice; fees non-cancelable, payments non-refundable; late amounts 1.5% a month', sf: 'Fees can change upon notice, no cap stated; fees non-refundable; no pro-rated refund on upgrades or downgrades; $35 per declined electronic payment' },
  { feature: 'Your data and governing law', workiz: 'You back up your own content; Workiz, Inc.; governing law not found in the part of the terms we read', sf: 'Data export is a paid professional service; data may be deleted after termination; FSM Technologies, LLC d/b/a Service Fusion; Texas law' },
  { feature: 'Phone and AI answering', workiz: 'Phone system that records, summarizes and searches calls (FAQ says on all plans; plan table lists Genius Phone as sold separately); Genius Answering AI in English and Spanish sold separately; no prices', sf: 'Integrated voice and text on Plus and Pro; ServiceCall.ai call tracking and VoIP add-on; ZyraTalk AI answering that books into the calendar; no prices' },
  { feature: 'Scheduling, routing and GPS', workiz: 'Drag-and-drop calendar, recurring jobs and team location tracking on every plan; route optimization offered, plan not stated; Genius Scheduling on Pro and Ultimate', sf: 'Dispatch grid with a GPS map; routing named but route optimization not described; GPS fleet tracking add-on on every plan (price not published)' },
  { feature: 'Customer portal and texting', workiz: 'Online booking, client portal and 2-way texting on every plan; 5, 10 or 30 automations by plan', sf: 'Text message alerts from Starter; customer web portal included on Pro, add-on on Starter and Plus (price not published)' },
  { feature: 'Maintenance work and stock', workiz: 'Service plans, flat rate, sales proposals, equipment tracking, inventory and purchase orders on Ultimate only', sf: 'Service agreement tracking with member pricing; inventory and job costing on Plus and Pro; recurring invoicing on Pro; flat rate through Profit Rhino; equipment records not documented in our sources' },
  { feature: 'Card and bank fees', workiz: 'Card and ACH rates not published; $25 non-refundable fee per chargeback; Tap to Pay free to set up', sf: '2.90% + $0.30 per card; extra 1% card not present; ACH 1% capped at $15; $0.75 batch fee per day with transactions; $30 chargeback' },
  { feature: 'Customer financing', workiz: 'Wisetack and Sunbit: 0% to 35.9% APR, 3 months to 10 years; business cost not published', sf: 'Acorn Finance: $1,000 to $100,000 in most states, 2 to 15 year terms; says $0 dealer fees' },
  { feature: 'QuickBooks', workiz: 'On every plan; Online and Desktop; QuickBooks page says data flows one way (invoicing page says two-way)', sf: 'Online and Desktop on every plan from Starter; Desktop tool runs on Windows only' },
  { feature: 'Offline and API', workiz: 'View and update job details offline, synced later; open API on Ultimate', sf: 'Since June 2026: view schedules and jobs, edit notes, photos, tasks and checklists; no new jobs, status changes or payments; Open API on Pro' },
]

const faqs = [
  {
    question: 'Is Workiz cheaper than Service Fusion?',
    answer:
      'No one can say from published prices, because Workiz shows “Request pricing” on every plan. Service Fusion starts at $220 a month billed annually ($2,640 paid at sign-up) or $259 billed monthly, with unlimited users. Ask Workiz for a written quote for your headcount and plan, then set it against the Service Fusion plan that has the same features.',
  },
  {
    question: 'Do Workiz or Service Fusion charge per user?',
    answer:
      'Service Fusion does not: every plan lists unlimited users at one price, and only its ServiceCall.ai add-on is billed per user, with no published price. Workiz names no user limit and no per-user price on its pricing page, so ask how users are counted in your quote.',
  },
  {
    question: 'Which has a built-in phone system and AI answering?',
    answer:
      'Both offer calls inside the software. Workiz has a phone system that records, summarizes and searches calls; its FAQ says it comes with all plans, while its plan table lists Genius Phone as sold separately. Its Genius Answering AI works in English and Spanish and is sold separately. Service Fusion includes integrated voice and text on Plus and Pro and sells ServiceCall.ai and ZyraTalk AI answering. Neither vendor publishes these add-on prices.',
  },
  {
    question: 'Is either one month to month?',
    answer:
      'Both renew automatically. Workiz’s standard term was 12 months, renewing for 12 months unless you give 30 days’ notice, with increases capped at 10% a year. Service Fusion’s pricing page says month to month with no contract requirements, but its Subscription Agreement renews the term on your order for the same length unless either side gives 30 days’ written notice. Fees are non-refundable with both.',
  },
  {
    question: 'Which works with QuickBooks Desktop?',
    answer:
      'Both list QuickBooks Online and Desktop on every plan. Service Fusion’s help center says its Desktop tool works only on Windows. Workiz’s QuickBooks page says data flows one way, from Workiz to QuickBooks, while its invoicing page calls the sync two-way, so ask which applies to your setup.',
  },
  {
    question: 'Which suits maintenance agreements and inventory?',
    answer:
      'Workiz puts service plans, flat rate, equipment tracking, inventory and purchase orders on Ultimate only, by quote. Service Fusion tracks service agreements with member pricing, includes inventory and job costing from Plus at $339 a month billed annually, and recurring invoicing on Pro. Service Fusion does not document equipment records in our sources.',
  },
]

const sources = [
  { name: 'Workiz pricing plans (plans, features by plan, add-ons, trial, annual saving, phone FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'Workiz Terms of Service v1.9 (last updated November 2, 2026): billing, increases, refunds, phone usage, chargebacks, backups; 12-month term and notice read 2026-11-21', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-24' },
  { name: 'Workiz Genius Answering (AI agent, English and Spanish)', url: 'https://www.workiz.com/features/genius-answering/', checked: '2026-11-24' },
  { name: 'Workiz phone system', url: 'https://www.workiz.com/features/phone-system/', checked: '2026-11-21' },
  { name: 'Workiz route planning', url: 'https://www.workiz.com/features/route-planning/', checked: '2026-11-21' },
  { name: 'Workiz mobile app (offline)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-21' },
  { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-11-21' },
  { name: 'Workiz client portal', url: 'https://www.workiz.com/features/client-portal/', checked: '2026-11-26' },
  { name: 'Workiz Pay', url: 'https://www.workiz.com/features/workiz-pay/', checked: '2026-11-24' },
  { name: 'Workiz card readers and Tap to Pay', url: 'https://www.workiz.com/features/card-readers/', checked: '2026-11-24' },
  { name: 'Workiz consumer financing (Wisetack, Sunbit)', url: 'https://www.workiz.com/features/consumer-financing/', checked: '2026-11-24' },
  { name: 'Workiz QuickBooks integration (Online and Desktop, one way)', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-24' },
  { name: 'Workiz invoicing (two-way sync wording)', url: 'https://www.workiz.com/features/invoicing/', checked: '2026-11-20' },
  { name: 'Service Fusion pricing (plans, unlimited users, add-ons, demo, month-to-month FAQ, GPS fleet tracking)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026; renewal, refunds, declined payments, export, Texas law in section 23)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-26' },
  { name: 'Service Fusion help: subscription and billing overview (30-day notice)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360029403592-Service-Fusion-Subscription-and-Billing-Account-Overview', checked: '2026-11-24' },
  { name: 'Service Fusion help: upgrading and adding add-ons (ServiceCall.ai per user)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/38056443351053-Upgrading-your-Service-Fusion-Subscription-and-Adding-Add-ons', checked: '2026-11-24' },
  { name: 'Service Fusion help: Service Fusion Payments fees', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360058547171-Service-Fusion-Payments-Introduction', checked: '2026-11-24' },
  { name: 'Service Fusion help: QuickBooks Desktop setup (Windows only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001111652-QuickBooks-Desktop-Setup-Instructions', checked: '2026-11-24' },
  { name: 'Service Fusion help: Open API (Pro only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360035145811-Open-API-Integration-Getting-Started', checked: '2026-11-24' },
  { name: 'Service Fusion help: customer service agreement tracking', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001110832-Customer-Service-Agreement-Tracking', checked: '2026-11-24' },
  { name: 'Service Fusion blog: introducing offline mode (June 22, 2026)', url: 'https://www.servicefusion.com/blog/introducing-offline-mode', checked: '2026-11-24' },
  { name: 'Service Fusion scheduling software (dispatch grid, routing, GPS map)', url: 'https://www.servicefusion.com/field-service-scheduling-software', checked: '2026-11-24' },
  { name: 'Service Fusion ServiceCall.ai (call tracking and VoIP)', url: 'https://www.servicefusion.com/servicecall-call-tracker', checked: '2026-11-24' },
  { name: 'Service Fusion AI call answering service (ZyraTalk)', url: 'https://www.servicefusion.com/ai-call-answering-service', checked: '2026-11-24' },
  { name: 'Service Fusion Acorn homeowner financing', url: 'https://www.servicefusion.com/acorn-homeowner-financing', checked: '2026-11-24' },
  { name: 'Service Fusion flat rate (Profit Rhino)', url: 'https://www.servicefusion.com/flat-rate', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function WorkizVsServiceFusionPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/workiz-vs-service-fusion"
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
            Workiz vs Service Fusion: <span className="text-orange-400">a sales quote or a flat price for the whole crew</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing, renewal clauses, phones, maintenance features, payments, QuickBooks and offline use,
            from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Service Fusion</strong> publishes its prices: Starter $220, Plus $339 and Pro $552 a
            month billed annually (paid upfront), or $259, $399 and $649 monthly, with unlimited users on
            every plan and integrated voice and text from Plus. <strong>Workiz</strong> publishes none: its
            Standard, Pro and Ultimate plans are quoted, and its Genius phone and AI answering add-ons are
            sold separately. Neither is a simple monthly deal. Workiz’s standard term is 12 months, renewing
            unless you give 30 days’ notice, with increases capped at 10% a year; Service Fusion’s agreement
            renews your ordered term automatically, with no cap on fee changes stated. Workiz offers a 7-day
            trial; Service Fusion offers a demo.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Workiz vs Service Fusion at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Service
            Fusion prices are in US dollars. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Workiz</th>
                  <th scope="col" className="p-3.5">Service Fusion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.workiz}</td>
                    <td className="p-3.5">{r.sf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: “Request pricing” against a list price</h2>
          <p>
            Workiz shows “Request pricing” on Standard, Pro and Ultimate. Its pricing page names no user
            limit and no per-user price, says subscription prices exclude sales tax, and gives one figure:
            an annual plan can save $400 or more. Genius Phone, Genius Answering, Genius Marketing and card
            readers are listed as sold separately, also without prices. What each plan includes, and what to
            ask for in a quote, is in our <Link href="/pricing/workiz" className={A}>Workiz pricing</Link>{' '}
            guide.
          </p>
          <p>
            Service Fusion prints its prices and does not charge by headcount. Billed annually, Starter is
            $220 a month, Plus $339 and Pro $552, charged as one payment at sign-up; billed monthly, $259,
            $399 and $649. Add-ons such as GPS fleet tracking, ServiceCall.ai and the customer web portal on
            lower plans have no published price. See{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link> for every plan
            and add-on.
          </p>

          <h2 id="cost-examples">What you can work out before a sales call</h2>
          <p>
            Only Service Fusion’s side can be calculated. Arithmetic on its published prices, before add-ons
            and payment fees:
          </p>
          <ul>
            <li><strong>Starter for a year:</strong> $2,640 paid upfront on annual billing, against $3,108 for twelve monthly payments.</li>
            <li><strong>Plus for a year:</strong> $4,068 upfront, against $4,788 monthly.</li>
            <li><strong>Pro for a year:</strong> $6,624 upfront, against $7,788 monthly.</li>
            <li><strong>Starter per person:</strong> $44.00 a month for 5 users, $22.00 for 10 and $14.67 for 15, on annual billing, because the price does not change as you hire.</li>
          </ul>
          <p>
            For Workiz, any comparable figure has to come from your own written quote. Ask for the monthly
            and annual price of the plan you need, how users are counted, each Genius add-on price and the
            phone per-minute rates, then compare the first-year total with the Service Fusion plan that has
            the same features.
          </p>

          <h2 id="contracts">Both renew automatically: how the terms differ</h2>
          <p>
            Workiz’s Terms of Service (version 1.9, last updated November 2, 2026) make the Sales Order the
            source of your term. When we read them, the standard term was 12 months, renewing for 12 months
            unless you give 30 days’ notice. Workiz may raise fees by up to 10% a year with at least 30 days’
            written notice, fees are non-cancelable and payments non-refundable, and late amounts accrue 1.5%
            a month. The terms say you are responsible for backing up your own content. We did not find
            Workiz’s governing law in the part of the terms we read.
          </p>
          <p>
            Service Fusion’s pricing page says there are no contract requirements and that all plans are
            offered month to month. Its Subscription Agreement, last modified March 23, 2026, says the term on
            your order renews automatically for the same length unless either side gives 30 days’ written
            notice before it ends. Fees are non-refundable, can change upon notice with no cap stated, and a
            declined electronic payment costs $35. Exporting your data is a paid professional service, and
            the agreement is governed by Texas law. So Workiz caps increases but defaults to a yearly term;
            Service Fusion lets you order monthly but sets no cap. Our{' '}
            <Link href="/guides/field-service-software-contract-terms" className={A}>contract terms guide</Link>{' '}
            compares these clauses across vendors.
          </p>

          <h2 id="phones">Phones and AI answering: built in or bought on top</h2>
          <p>
            Both vendors put calls inside the software. Workiz has a phone system that records, summarizes
            and makes calls searchable, and its pricing page lists 2-way texting on every plan. Its FAQ says a
            phone system comes with all plans, while the plan table lists Genius Phone as sold separately, so
            get the phone features in your quote in writing. Genius Answering, an AI agent that answers calls,
            emails and texts 24/7 in English and Spanish, is also sold separately. Workiz’s terms bill some
            call types at different per-minute rates or multipliers and make phone charges non-refundable.
          </p>
          <p>
            Service Fusion includes integrated voice and text on Plus and Pro, so Starter lists text
            alerts but not integrated voice. It sells ServiceCall.ai, a call tracking and VoIP add-on billed
            per user, and offers ZyraTalk AI call answering, which books into the calendar so jobs appear on
            the dispatch board. Neither add-on has a published price. Our{' '}
            <Link href="/guides/ai-answering-service-for-contractors" className={A}>AI answering guide</Link>{' '}
            compares call answering across vendors.
          </p>

          <h2 id="maintenance">Maintenance plans, inventory and equipment</h2>
          <p>
            Workiz keeps its trade features on its top plan: service plans, flat rate, sales proposals,
            equipment tracking, inventory, purchase orders and the open API are listed on Ultimate only.
            Service Fusion spreads them across its price list. Inventory management and job costing start on
            Plus ($339 billed annually), job costing is an add-on on Starter, and recurring invoicing is
            included on Pro and an add-on below it. Its help center describes service agreement tracking with
            member pricing, and it offers a flat-rate price book through its partner Profit Rhino, with no
            price stated. We found no equipment records in Service Fusion’s pages that we used. See our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide.
          </p>

          <h2 id="scheduling">Scheduling, customer portal and offline use</h2>
          <p>
            Workiz includes a drag-and-drop calendar, recurring jobs, online booking, a client portal and team
            location tracking on every plan, adds Genius Scheduling on Pro and Ultimate, and offers route
            optimization without naming the plan. Its client portal lets customers approve estimates, pay,
            see appointments and book. Service Fusion shows a dispatch grid with a GPS map and names routing
            without describing route optimization; GPS fleet tracking is an add-on. Its customer web portal is
            included on Pro and an add-on on Starter and Plus.
          </p>
          <p>
            Offline, Workiz says technicians can view and update job details, with changes synced later.
            Service Fusion launched offline mode on June 22, 2026: you can view schedules and jobs and edit
            notes, photos, tasks and checklists, but not create jobs, change statuses or take payments until
            you reconnect.
          </p>

          <h2 id="payments">Payments, financing and QuickBooks</h2>
          <p>
            Service Fusion Payments, powered by PaySimple, lists 2.90% + $0.30 per card, an extra 1% when the
            card is not present, ACH at 1% capped at $15, a $0.75 batch fee for each day with transactions and
            a $30 chargeback. Workiz does not publish its card or ACH rates; its terms set a non-refundable $25
            fee for each chargeback, and Tap to Pay needs no card reader and is free to set up. For customer
            financing, Workiz offers Wisetack and Sunbit (0% to 35.9% APR, 3 months to 10 years) and Service
            Fusion offers Acorn Finance ($1,000 to $100,000, 2 to 15 year terms, which it says carries $0
            dealer fees).
          </p>
          <p>
            Both list QuickBooks Online and Desktop on every plan. Service Fusion’s Desktop tool works only on
            Windows and needs a small program installed. Workiz’s QuickBooks page says data flows one way, from
            Workiz to QuickBooks, while its invoicing page calls the sync two-way. Our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> covers how other tools handle it.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>You want the price before you talk to anyone:</strong> Service Fusion, the only one of the two with a public price list.</li>
            <li><strong>A growing crew:</strong> Service Fusion, since its plan price stays the same at any headcount.</li>
            <li><strong>You want to try the software first:</strong> Workiz’s 7-day trial; Service Fusion offers a demo.</li>
            <li><strong>A cap on yearly price rises:</strong> Workiz, at 10% a year in its terms; Service Fusion states no cap.</li>
            <li><strong>Inventory and job costing without buying the top plan:</strong> Service Fusion Plus.</li>
            <li><strong>Equipment tracking and service plans in one quoted plan:</strong> Workiz Ultimate.</li>
            <li><strong>Published payment fees and capped ACH:</strong> Service Fusion.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/workiz-alternatives" className={A}>Workiz alternatives</Link>{' '}
            and <Link href="/compare/service-fusion-alternatives" className={A}>Service Fusion alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Workiz vs Service Fusion">
            Service Fusion is the one you can budget from its website: $220 to $552 a month billed annually,
            unlimited users, published payment fees and voice built into Plus and Pro. Workiz asks you to get a
            quote, sells its phone and AI answering add-ons separately and keeps equipment and service plans on
            Ultimate, but lets you trial it for 7 days and caps increases at 10% a year. Both renew
            automatically, so put the 30-day notice date in your calendar either way. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/workiz" className="text-orange-600 hover:text-orange-800">Workiz pricing →</Link>
            <Link href="/pricing/service-fusion" className="text-orange-600 hover:text-orange-800">Service Fusion pricing →</Link>
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
