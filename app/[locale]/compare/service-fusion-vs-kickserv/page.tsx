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
 * /compare/service-fusion-vs-kickserv: targets "service fusion vs kickserv". No GSC data for this topic yet.
 *
 * Service Fusion facts reuse /pricing/service-fusion, /compare/jobber-vs-service-fusion and
 * /compare/housecall-pro-vs-service-fusion: pricing page, Subscription Agreement (last modified
 * 2026-03-23), help center (billing, add-ons, payments, QuickBooks Desktop, service agreements),
 * offline mode post (2026-06-22), scheduling, ServiceCall.ai and AI answering pages, all checked
 * 2026-11-24; job costing help and the agreement's Texas law clause from the b20 notes (2026-11-24
 * and 2026-11-26). Kickserv facts reuse /pricing/kickserv, /compare/housecall-pro-vs-kickserv and
 * the b14 research: pricing page, payments page, features, integrations, help center and Terms of
 * Service (last modified 2024-08-21), all checked 2026-11-24, plus the terms' Colorado law clause
 * (2026-11-26). Conflicts, both stated on the page: Service Fusion's pricing page says month to
 * month while its Subscription Agreement renews the ordered term automatically; Kickserv's pricing
 * page shows one price per plan next to "Save 20% with annual subscription" and does not label it
 * as the monthly or the annual rate, so no derived Kickserv monthly or annual figure is given.
 * Deliberately not used: Service Fusion's "3 to 30 technicians" line (from its comparison page
 * about another vendor), Kickserv's free plan, Flex ($19 only in a 2022 blog) and Premium (no
 * current price or limits), add-on price estimates (none published), and any claim either vendor
 * makes about the other. Cost figures are arithmetic on published prices. No new fetches. Nothing
 * tested hands-on.
 */

const PATH = '/compare/service-fusion-vs-kickserv'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Service Fusion vs Kickserv (2026): Unlimited Users vs User Caps'
const DESCRIPTION =
  'Service Fusion lists $220 to $552 a month with unlimited users; Kickserv $60 to $199 for 5, 10 or 20 users. Compare cost by team size, QuickBooks and terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/service-fusion-vs-kickserv',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Service Fusion vs Kickserv', href: PATH },
]

const rows: { feature: string; sf: string; ks: string }[] = [
  { feature: 'What you pay for', sf: 'Features: three plans at a flat price, unlimited users on every plan', ks: 'Team size: three plans capped at 5, 10 or 20 users' },
  { feature: 'Plan prices', sf: 'Starter $220, Plus $339, Pro $552 a month billed annually as one payment at sign-up; $259, $399 and $649 billed monthly', ks: 'Start $60 (5 users), Run $119 (10 users), Scale $199 (20 users) a month' },
  { feature: 'Billing label', sf: 'Annual and monthly prices both published; annual saves 15%', ks: 'One price per plan next to “Save 20% with annual subscription”; the page does not say whether it is the monthly or the annual rate' },
  { feature: 'Above the top plan', sf: 'No user cap; ServiceCall.ai is the one add-on billed per user (price not published)', ks: 'No published price for extra users or teams above 20' },
  { feature: 'Free trial', sf: 'Free demo; no trial mentioned', ks: '30 days on every plan' },
  { feature: 'Contract and renewal', sf: 'Pricing page says month to month, no contract requirements; Subscription Agreement renews the ordered term automatically unless 30 days’ written notice', ks: 'One-month or one-year term that renews automatically; annual cannot switch to monthly before renewal; cancel payment authorization 15 days before billing' },
  { feature: 'Refunds, fee changes and law', sf: 'Fees non-refundable; fees can change on notice; Texas law', ks: 'Fees non-refundable; fees can change with notice, which can come on an invoice; Colorado law' },
  { feature: 'Your data when you leave', sf: 'Exporting your data is a paid professional service; data may be deleted after termination', ks: 'Export in Account and Billing settings; cancelling permanently deletes customer and job records; a free plan keeps data' },
  { feature: 'QuickBooks', sf: 'Online and Desktop on every plan from Starter; Desktop tool is Windows only', ks: 'Online on every plan; Desktop $50 a month or $480 a year extra, listed on Run, works with every version including Mac' },
  { feature: 'Job costing and inventory', sf: 'Job costing and inventory on Plus and Pro; job costing an add-on on Starter (price not published)', ks: 'Time and expense tracking on Start; no job costing or inventory listed' },
  { feature: 'Scheduling, routing and GPS', sf: 'Dispatch grid and GPS map; routing named but route optimization not described; GPS fleet tracking add-on (price not published)', ks: 'Calendar scheduling; recurring jobs (plan not stated); dispatch mapping and GPS check-ins from Run; no route optimization or vehicle GPS listed' },
  { feature: 'Phone and call answering', sf: 'Integrated voice and text on Plus and Pro; ServiceCall.ai add-on; ZyraTalk AI answering (no prices published)', ks: 'No phone system or AI answering; lists the Nexa 24/7 live answering service as a partner, 10% off' },
  { feature: 'Payment fees', sf: '2.90% + $0.30 card; extra 1% card not present; ACH 1% capped at $15; $0.75 daily batch fee; $30 chargeback', ks: '2.9% Tap to Pay; 3.9% card not present; ACH 1% + $0.30, no cap stated; instant payout +1%' },
  { feature: 'Offline', sf: 'Since June 2026: view schedules and jobs; edit notes, photos, tasks and checklists; no new jobs, status changes or payments', ks: 'Changelog mentions offline functionality; scope and date not stated' },
]

const faqs = [
  {
    question: 'Is Kickserv cheaper than Service Fusion?',
    answer:
      'On published prices, yes, for every team size Kickserv publishes. Kickserv’s plans are $60 for 5 users, $119 for 10 and $199 for 20, while Service Fusion’s cheapest plan is $220 a month billed annually ($259 billed monthly) for any number of users. Kickserv does not say whether its shown prices are the monthly or annual rate, and Service Fusion’s Starter includes QuickBooks Desktop, which costs $50 a month extra on Kickserv.',
  },
  {
    question: 'Does Service Fusion or Kickserv charge per user?',
    answer:
      'Neither charges a set fee per user. Service Fusion includes unlimited users on every plan; only its ServiceCall.ai add-on is billed per user, with no price published. Kickserv sells plans capped at 5, 10 or 20 users and publishes no price for extra users or for teams above 20.',
  },
  {
    question: 'Which is better for QuickBooks Desktop?',
    answer:
      'Service Fusion includes QuickBooks Online and Desktop on every plan, but its Desktop tool works only on Windows. Kickserv includes QuickBooks Online from Start and charges $50 a month or $480 a year for Desktop, listed on the Run plan, and says it works with every version including Mac.',
  },
  {
    question: 'Are Service Fusion and Kickserv month to month?',
    answer:
      'Both can be, but both renew automatically. Service Fusion’s pricing page says all plans are month to month with no contract requirements, while its Subscription Agreement renews the term on your order unless you give 30 days’ written notice. Kickserv’s terms offer a one-month or one-year term that renews for the same length, and an annual term cannot switch to monthly before renewal. Fees are non-refundable with both.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer:
      'Kickserv’s help center says cancelling permanently deletes your customer and job records, so export them from Account and Billing settings first or switch to its free plan. Service Fusion’s Subscription Agreement treats exporting your data as a paid professional service and lets it delete data after termination. Ask Service Fusion for the export price before you give notice.',
  },
  {
    question: 'Which has job costing and inventory?',
    answer:
      'Service Fusion includes job costing and inventory management on Plus ($339 a month billed annually) and Pro, and sells job costing as an add-on on Starter. Kickserv lists time and expense tracking and over 20 reports but no job costing or inventory module.',
  },
]

const sources = [
  { name: 'Service Fusion pricing (plans, unlimited users, add-ons, month-to-month FAQ, GPS fleet tracking)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026; renewal, refunds, export, Texas law in section 23)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-26' },
  { name: 'Service Fusion help: subscription and billing overview (30-day notice)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360029403592-Service-Fusion-Subscription-and-Billing-Account-Overview', checked: '2026-11-24' },
  { name: 'Service Fusion help: upgrading and adding add-ons (ServiceCall.ai per user)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/38056443351053-Upgrading-your-Service-Fusion-Subscription-and-Adding-Add-ons', checked: '2026-11-24' },
  { name: 'Service Fusion help: job costing (Plus and Pro, add-on on Starter)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360059357651-Job-Costing', checked: '2026-11-24' },
  { name: 'Service Fusion help: Service Fusion Payments fees', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360058547171-Service-Fusion-Payments-Introduction', checked: '2026-11-24' },
  { name: 'Service Fusion help: QuickBooks Desktop setup (Windows only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001111652-QuickBooks-Desktop-Setup-Instructions', checked: '2026-11-24' },
  { name: 'Service Fusion help: customer service agreement tracking', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001110832-Customer-Service-Agreement-Tracking', checked: '2026-11-24' },
  { name: 'Service Fusion blog: introducing offline mode (June 22, 2026)', url: 'https://www.servicefusion.com/blog/introducing-offline-mode', checked: '2026-11-24' },
  { name: 'Service Fusion scheduling software (dispatch grid, routing, GPS map)', url: 'https://www.servicefusion.com/field-service-scheduling-software', checked: '2026-11-24' },
  { name: 'Service Fusion ServiceCall.ai (call tracking and VoIP)', url: 'https://www.servicefusion.com/servicecall-call-tracker', checked: '2026-11-24' },
  { name: 'Service Fusion AI call answering service (ZyraTalk)', url: 'https://www.servicefusion.com/ai-call-answering-service', checked: '2026-11-24' },
  { name: 'Kickserv pricing (plans, users, annual saving, trial, features by plan)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv features (calendar scheduling, GPS)', url: 'https://www.kickserv.com/features', checked: '2026-11-24' },
  { name: 'Kickserv help: jobs (scheduling, repeat this job)', url: 'https://help.kickserv.com/article/32-jobs', checked: '2026-11-24' },
  { name: 'Kickserv payments integration (Tap to Pay, card not present, instant payout)', url: 'https://www.kickserv.com/integrations/payments', checked: '2026-11-24' },
  { name: 'Kickserv help: ACH payments (1% + $0.30)', url: 'https://help.kickserv.com/article/94-ach-payments', checked: '2026-11-24' },
  { name: 'Kickserv help: connect to QuickBooks Desktop ($50 a month or $480 a year)', url: 'https://help.kickserv.com/article/8-connect-to-quickbooks-desktop', checked: '2026-11-24' },
  { name: 'Kickserv integrations (QuickBooks Desktop every version including Mac, open API)', url: 'https://www.kickserv.com/integrations', checked: '2026-11-24' },
  { name: 'Kickserv partnerships (Nexa 24/7 Answering Service)', url: 'https://www.kickserv.com/partnerships', checked: '2026-11-24' },
  { name: 'Kickserv changelog (offline functionality)', url: 'https://changelog.kickserv.com/', checked: '2026-11-24' },
  { name: 'Kickserv Terms of Service (last modified August 21, 2024; term, renewal, refunds, Colorado law in section 23)', url: 'https://www.kickserv.com/terms', checked: '2026-11-26' },
  { name: 'Kickserv help: how to cancel (free plan, data deletion)', url: 'https://help.kickserv.com/article/61-how-do-i-cancel-my-account', checked: '2026-11-24' },
  { name: 'Kickserv help: settings (data export)', url: 'https://help.kickserv.com/article/38-settings', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function ServiceFusionVsKickservPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/service-fusion-vs-kickserv"
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
            Service Fusion vs Kickserv: <span className="text-orange-400">unlimited users or a set team size</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Cost by team size, QuickBooks, job costing, payments, offline use and contract terms, from each
            vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Service Fusion</strong> charges a flat price with unlimited users: Starter $220, Plus $339
            and Pro $552 a month billed annually, with QuickBooks Online and Desktop on every plan.{' '}
            <strong>Kickserv</strong> sells plans by team size: Start $60 for 5 users, Run $119 for 10 and
            Scale $199 for 20, with QuickBooks Desktop $50 a month extra. On published prices Kickserv costs
            less at every size up to 20 users, though its pricing page does not say whether those prices are
            monthly or annual. Service Fusion adds job costing, inventory and built-in voice from Plus and has
            no user cap. Both renew automatically; Kickserv deletes your records when you cancel, and Service
            Fusion charges for data export.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Service Fusion vs Kickserv at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Both vendors bill
            in US dollars. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Service Fusion</th>
                  <th scope="col" className="p-3.5">Kickserv</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.sf}</td>
                    <td className="p-3.5">{r.ks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: a flat price vs a user cap</h2>
          <p>
            Service Fusion sets the price by plan, not by headcount. Every plan has unlimited users. Billed
            annually, Starter is $220 a month, Plus $339 and Pro $552, charged as one payment at sign-up, so
            Starter means $2,640 upfront. Billed monthly, the same plans are $259, $399 and $649. Add-ons such as
            GPS fleet tracking and the customer web portal on lower plans have no published price, and
            ServiceCall.ai is billed per user. See <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>
          <p>
            Kickserv sets the price by team size. Start covers 5 users for $60 a month, Run 10 users for $119
            and Scale 20 users for $199. The pricing page shows that one price per plan beside &ldquo;Save 20% with
            annual subscription&rdquo; and does not say whether it is the month-to-month rate or the annual rate
            shown per month, so check the total at checkout. Kickserv publishes no price for extra users or for
            teams above 20. Its help center and older pages mention free, Flex and Premium plans that are not on
            the current pricing page, with no current prices. See <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link>.
          </p>

          <h2 id="cost-by-team-size">Cost by team size</h2>
          <p>
            Arithmetic on published prices, per month, using the cheapest plan that covers each team. Service
            Fusion is shown on annual and monthly billing; Kickserv is shown as published, since its page does
            not label the rate. Add-ons and payment fees are not included.
          </p>
          <ul>
            <li><strong>1 to 5 users:</strong> Kickserv Start at $60, against Service Fusion Starter at $220 billed annually ($259 billed monthly).</li>
            <li><strong>6 to 10 users:</strong> Kickserv Run at $119, against the same $220 ($259) Service Fusion Starter.</li>
            <li><strong>11 to 20 users:</strong> Kickserv Scale at $199, against the same $220 ($259).</li>
            <li><strong>More than 20 users:</strong> Kickserv publishes no price; Service Fusion Starter stays $220 ($259) at any headcount.</li>
            <li><strong>5 users who need QuickBooks Desktop:</strong> Kickserv lists Desktop on Run, so $119 + $50 = $169, against $220 ($259) for Service Fusion Starter, which includes it.</li>
            <li><strong>10 users who need job costing and inventory:</strong> Service Fusion Plus at $339 ($399); Kickserv lists neither feature at any price.</li>
          </ul>
          <p>
            The pattern: up to 20 users, Kickserv’s published prices are lower, and the gap narrows as you hire
            because Service Fusion’s price does not move. Service Fusion makes more sense when you need features
            Kickserv does not list, when you expect to pass 20 users, or when the $50 Desktop add-on and a higher
            plan close the gap.
          </p>

          <h2 id="contracts">Contracts, renewal and leaving</h2>
          <p>
            Service Fusion’s pricing page says &ldquo;no contract requirements&rdquo; and that all plans are offered
            month to month. Its Subscription Agreement, last modified March 23, 2026, says the term on your order
            renews automatically for the same length unless either side gives 30 days’ written notice before it
            ends. Fees are non-refundable, can change on notice, and the agreement is governed by Texas law.
            Exporting your data is a paid professional service, and the account’s data may be deleted after
            termination.
          </p>
          <p>
            Kickserv’s Terms of Service, last modified August 21, 2024, give a one-month or one-year term that
            renews for the same length, and an annual term cannot switch to monthly before renewal. Written notice
            takes effect at the end of the term, and you must cancel the payment authorization at least 15 days
            before the next billing date. Fees are non-refundable, can change with notice that may come on an
            invoice, and Colorado law governs. Its help center warns that cancelling permanently deletes customer
            and job records, so export from Account and Billing settings first. Our{' '}
            <Link href="/guides/field-service-software-contract-terms" className={A}>contract terms guide</Link>{' '}
            compares these clauses across vendors.
          </p>

          <h2 id="accounting">QuickBooks Online and Desktop</h2>
          <p>
            Service Fusion includes QuickBooks Online and Desktop sync on every plan from Starter. Its help center
            says the Desktop tool works only on Windows and needs a small program installed on your computer.
            Kickserv includes QuickBooks Online from Start and lists Desktop on Run for $50 a month, or $480 a year.
            Kickserv says its Desktop sync works with every version, including Mac. Whether the $50 also applies on
            Scale is not stated. For other tools, see our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="features">Job costing, scheduling and calls</h2>
          <p>
            Service Fusion includes job costing and inventory management on Plus and Pro, sells job costing as an
            add-on on Starter, and tracks service agreements with member pricing. Kickserv lists time and expense
            tracking and over 20 reports from Start, custom reports from Run, and no job costing, inventory or
            service agreements. See our{' '}
            <Link href="/guides/job-costing-software-for-contractors" className={A}>job costing guide</Link>.
          </p>
          <p>
            For scheduling, Service Fusion shows a dispatch grid with a GPS map and names routing without
            describing route optimization; GPS fleet tracking is an add-on with no published price. Kickserv offers
            calendar scheduling and a &ldquo;Repeat this job&rdquo; option for recurring work (plan not stated), and dispatch mapping and GPS check-ins from Run;
            it lists no route optimization or vehicle GPS. For calls, Service Fusion includes integrated voice and
            text on Plus and Pro and offers ServiceCall.ai and ZyraTalk AI answering without published prices.
            Kickserv has no phone system and points to the Nexa 24/7 live answering service, 10% off for Kickserv
            customers.
          </p>

          <h2 id="payments">Payments and offline use</h2>
          <p>
            Service Fusion Payments, powered by PaySimple, lists 2.90% + $0.30 per card, an extra 1% when the card
            is not present, ACH at 1% capped at $15, a $0.75 batch fee for each day with transactions and a $30
            chargeback. Kickserv’s Stripe payments list 2.9% with Tap to Pay and 3.9% card not present, with no
            fixed per-transaction card fee listed, ACH at 1% + $0.30 with no cap stated, and instant payouts for
            an extra 1%. On a $3,000 invoice paid by ACH, that is $15 with Service Fusion and $30.30 with Kickserv,
            as published.
          </p>
          <p>
            Service Fusion added offline mode in June 2026: you can view schedules and jobs and edit notes, photos,
            tasks and checklists, but not create jobs or estimates, change statuses or take payments. Kickserv’s
            changelog mentions offline functionality without describing its scope or date, so test it in the
            30-day trial.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Up to 20 users who want the lowest published price:</strong> Kickserv.</li>
            <li><strong>More than 20 users, or fast hiring:</strong> Service Fusion, since its price does not rise with headcount.</li>
            <li><strong>QuickBooks Desktop on Windows, included in the plan:</strong> Service Fusion. On a Mac, Kickserv says its Desktop sync works.</li>
            <li><strong>Job costing, inventory or service agreements:</strong> Service Fusion Plus or Pro.</li>
            <li><strong>A free trial before you commit:</strong> Kickserv’s 30 days; Service Fusion offers a demo.</li>
            <li><strong>Large invoices paid by ACH:</strong> Service Fusion, with its $15 cap.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/service-fusion-alternatives" className={A}>Service Fusion alternatives</Link>{' '}
            and <Link href="/compare/kickserv-alternatives" className={A}>Kickserv alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Service Fusion vs Kickserv">
            The deciding number is headcount against features. Kickserv’s published prices are lower for teams of
            up to 20, but it caps users per plan, charges $50 a month for QuickBooks Desktop and lists no job
            costing or inventory. Service Fusion costs $220 a month billed annually for any team size, includes
            Desktop, and adds job costing and inventory from Plus. Confirm Kickserv’s billing rate at checkout and
            read both renewal clauses. Our <Link href="/how-we-review" className={A}>review method</Link> explains
            why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/service-fusion" className="text-orange-600 hover:text-orange-800">Service Fusion pricing →</Link>
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
