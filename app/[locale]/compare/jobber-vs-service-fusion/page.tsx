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
 * /compare/jobber-vs-service-fusion: targets "jobber vs service fusion". No GSC data for this topic yet.
 *
 * Service Fusion facts: pricing page, Subscription Agreement (last modified 2026-03-23), help center
 * (billing, add-ons, payments fees, QuickBooks Desktop, service agreement tracking), offline mode
 * launch post (2026-06-22), scheduling, AI call answering and ServiceCall.ai pages, all checked
 * 2026-11-24 on the site's pricing, alternatives and guide pages; the homepage reuses the
 * 2026-11-20 check. Jobber facts reuse the site's verified pages (pricing and terms
 * 2026-11-21, help center 2026-11-03 to 11-21); getjobber.com was not refetched. Nothing new fetched.
 * Not used: Service Fusion's comparison-page claims about other vendors, any add-on price estimates
 * (none are published), and older pages that called Service Fusion's offline mode undocumented.
 * Cost-by-team-size figures are arithmetic on published prices. Nothing tested hands-on.
 */

const PATH = '/compare/jobber-vs-service-fusion'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Jobber vs Service Fusion (2026): User Bands vs Unlimited Users'
const DESCRIPTION =
  'Jobber starts at $29/month for one user; Service Fusion at $220 with unlimited users. Compare cost by team size, terms, QuickBooks Desktop, GPS and offline.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/jobber-vs-service-fusion',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber vs Service Fusion', href: PATH },
]

const rows: { feature: string; jobber: string; sf: string }[] = [
  { feature: 'Price', jobber: 'Core $29, Connect $99, Grow $149 per month billed annually for one user; Plus from $399 for 5 users', sf: 'Starter $220, Plus $339, Pro $552 per month billed annually, charged as one payment at sign-up' },
  { feature: 'Users', jobber: 'Priced by user band: 1, 5, 10 and 15 users; 16+ contact sales; extra seats $29/month', sf: 'Unlimited users on every plan; ServiceCall.ai is billed per user (price not published)' },
  { feature: 'Monthly billing', jobber: 'No-commitment option: Core $49, Connect $139, Grow $199 for one user', sf: '$259, $399 and $649 a month; annual billing saves 15%' },
  { feature: 'Free trial', jobber: '14 days of Grow features, no credit card', sf: 'Free demo; no trial mentioned' },
  { feature: 'Contract and renewal', jobber: 'Cancel any time on no commitment; annual plans renew unless cancelled 30 days before renewal; annual prepaid is non-refundable', sf: 'Pricing page says month to month, no contract requirements; Subscription Agreement renews the ordered term automatically unless 30 days’ written notice; fees non-refundable' },
  { feature: 'QuickBooks', jobber: 'QuickBooks Online and Xero from Connect; no Desktop', sf: 'QuickBooks Online and Desktop from Starter; Desktop tool is Windows only' },
  { feature: 'Routing and GPS', jobber: 'Route optimization from Connect; GPS waypoints on select plans; vehicle tracking through fleet partner devices', sf: 'Route optimization not documented; GPS map on the schedule; GPS Fleet Tracking add-on on every plan (price not published)' },
  { feature: 'Offline', jobber: 'Timers, notes with photos, checklists and visit completion; no invoicing offline; Tap to Pay needs a connection', sf: 'View schedules and job details; edit notes, photos, tasks and checklists; no new jobs, status changes or payments yet' },
  { feature: 'Phone and answering', jobber: 'No business phone system documented; AI Receptionist $29/month add-on, included on Plus', sf: 'Integrated voice and text from Plus; ServiceCall.ai call tracking and VoIP add-on; ZyraTalk AI answering (price not published)' },
  { feature: 'Agreements and equipment', jobber: 'Recurring jobs with automatic payments from Connect; no member pricing or equipment records documented', sf: 'Service agreement tracking with member pricing; recurring invoicing on Pro, add-on on Starter and Plus; equipment records not documented in our sources' },
  { feature: 'Job costing and inventory', jobber: 'Job costing on Grow; no inventory module documented', sf: 'Job costing and inventory from Plus' },
  { feature: 'Payment fees', jobber: '2.9% + 30¢ online, 2.7% + 30¢ Tap to Pay, ACH 1%', sf: '2.90% + $0.30 card, 1% extra when keyed in, ACH 1% capped at $15, $0.75 daily batch fee' },
  { feature: 'Data export', jobber: 'Client export as CSV or vCard on select plans; data not retrievable after closure', sf: 'Exporting your content is a paid professional service; data may be deleted after termination' },
]

const faqs = [
  {
    question: 'Is Jobber cheaper than Service Fusion?',
    answer:
      'For small teams, yes. Billed annually, Jobber Core is $29 a month and Connect, the first plan with QuickBooks sync, is $99 for one user, against $220 for Service Fusion Starter. At 10 users the gap closes: Jobber Connect is $229 and Grow $299 for the 10-user band, while Service Fusion Starter stays at $220 and Plus at $339 because every plan has unlimited users. Features differ between these plans, so compare the plan you actually need.',
  },
  {
    question: 'Does Service Fusion charge per user?',
    answer:
      'No. Every Service Fusion plan lists unlimited users at one price. Its help center says the ServiceCall.ai add-on is billed per user, per month, without a published price. Jobber prices by user band (1, 5, 10 and 15 users) and asks teams of 16 or more to contact sales.',
  },
  {
    question: 'Which one works with QuickBooks Desktop?',
    answer:
      'Service Fusion. It supports QuickBooks Online and Desktop from Starter, and its help center says the Desktop tool runs only on Windows and needs a small program installed. Jobber syncs with QuickBooks Online and Xero from Connect and does not list Desktop.',
  },
  {
    question: 'Is Service Fusion month to month like Jobber?',
    answer:
      'Its pricing page says all plans are month to month with no contract requirements. Its Subscription Agreement (last modified March 23, 2026) says the term in your order renews automatically for the same length unless either side gives 30 days’ written notice, and that fees are non-refundable. Jobber offers a no-commitment monthly option you can cancel any time; its annual plans renew unless cancelled 30 days before renewal.',
  },
  {
    question: 'Which has better GPS and routing?',
    answer:
      'Jobber documents route optimization from Connect, which reorders anytime visits by driving distance, and points to fleet partner devices for vehicle tracking. Service Fusion shows technicians on a GPS map and sells GPS Fleet Tracking as an add-on on every plan, with trips, distance, idle time and driving behavior, but it does not describe route optimization and publishes no GPS price.',
  },
  {
    question: 'Do Jobber and Service Fusion work offline?',
    answer:
      'Both partly. Jobber’s app keeps timers, notes, checklists and visit completion working offline but does not create invoices offline. Service Fusion launched offline mode on June 22, 2026: technicians can view schedules and job details and edit notes, photos, tasks and checklists, but cannot create jobs, change job status or take payments offline yet.',
  },
]

const sources = [
  { name: 'Jobber pricing (plans, bands, billing options, trial, fees, renewal)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber Terms of Service (last updated September 22, 2026)', url: 'https://www.getjobber.com/terms-of-service/', checked: '2026-11-21' },
  { name: 'Jobber help: Manage Team (extra seats)', url: 'https://help.getjobber.com/en/articles/manage-teamhow-to-add-manage-and-deactivate-team-members/', checked: '2026-11-03' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Jobber help: route optimization', url: 'https://help.getjobber.com/en/articles/route-optimization-new-schedule/', checked: '2026-11-19' },
  { name: 'Jobber help: GPS waypoint tracking', url: 'https://help.getjobber.com/en/articles/gps-waypoint-tracking/', checked: '2026-11-19' },
  { name: 'Jobber help: use the Jobber app offline (updated November 17, 2026)', url: 'https://help.getjobber.com/en/articles/use-the-jobber-app-offline/', checked: '2026-11-19' },
  { name: 'Jobber help: AI Receptionist', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-03' },
  { name: 'Jobber help: create a recurring job', url: 'https://help.getjobber.com/hc/en-us/articles/115009542848-Create-a-Recurring-Job', checked: '2026-11-19' },
  { name: 'Jobber help: automatic payments', url: 'https://help.getjobber.com/hc/en-us/articles/360036931633-Automatic-Payments', checked: '2026-11-20' },
  { name: 'Jobber help: Wisetack consumer financing', url: 'https://help.getjobber.com/en/articles/jobber-and-wisetack-consumer-financing-integration/', checked: '2026-11-20' },
  { name: 'Jobber help: export client information', url: 'https://help.getjobber.com/en/articles/export-client-information/', checked: '2026-11-21' },
  { name: 'Jobber help: permanently close an account', url: 'https://help.getjobber.com/en/articles/how-do-i-permanently-close-my-account/', checked: '2026-11-21' },
  { name: 'Service Fusion pricing (plans, unlimited users, add-ons, month-to-month FAQ, GPS)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-24' },
  { name: 'Service Fusion Subscription Agreement (last modified March 23, 2026)', url: 'https://www.servicefusion.com/subscription-agreement', checked: '2026-11-24' },
  { name: 'Service Fusion help: subscription and billing overview (30-day notice)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360029403592-Service-Fusion-Subscription-and-Billing-Account-Overview', checked: '2026-11-24' },
  { name: 'Service Fusion help: upgrading and adding add-ons (ServiceCall.ai per user)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/38056443351053-Upgrading-your-Service-Fusion-Subscription-and-Adding-Add-ons', checked: '2026-11-24' },
  { name: 'Service Fusion help: Service Fusion Payments fees', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360058547171-Service-Fusion-Payments-Introduction', checked: '2026-11-24' },
  { name: 'Service Fusion Acorn homeowner financing', url: 'https://www.servicefusion.com/acorn-homeowner-financing', checked: '2026-11-24' },
  { name: 'Service Fusion help: QuickBooks Desktop setup (Windows only)', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001111652-QuickBooks-Desktop-Setup-Instructions', checked: '2026-11-24' },
  { name: 'Service Fusion scheduling software (routing, GPS map)', url: 'https://www.servicefusion.com/field-service-scheduling-software', checked: '2026-11-24' },
  { name: 'Service Fusion blog: introducing offline mode (June 22, 2026)', url: 'https://www.servicefusion.com/blog/introducing-offline-mode', checked: '2026-11-24' },
  { name: 'Service Fusion AI call answering service (ZyraTalk)', url: 'https://www.servicefusion.com/ai-call-answering-service', checked: '2026-11-24' },
  { name: 'Service Fusion ServiceCall.ai (call tracking and VoIP)', url: 'https://www.servicefusion.com/servicecall-call-tracker', checked: '2026-11-24' },
  { name: 'Service Fusion help: customer service agreement tracking', url: 'https://servicefusion.zendesk.com/hc/en-us/articles/360001110832-Customer-Service-Agreement-Tracking', checked: '2026-11-24' },
  { name: 'Service Fusion homepage (service agreements)', url: 'https://www.servicefusion.com/', checked: '2026-11-20' },
  { name: 'Service Fusion vs ServiceTitan page (team size statement about itself)', url: 'https://www.servicefusion.com/comparison/service-fusion-vs-service-titan', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function JobberVsServiceFusionPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/jobber-vs-service-fusion"
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
            Jobber vs Service Fusion: <span className="text-orange-400">user bands vs unlimited users</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Cost by team size, contract terms, QuickBooks Desktop, GPS, offline use, phones and agreements,
            from each vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Both publish their prices, but they charge in opposite ways. <strong>Jobber</strong> prices by
            user band, from $29/month billed annually for one user, with a 14-day trial and a no-commitment
            monthly option. <strong>Service Fusion</strong> charges a flat $220, $339 or $552 a month billed
            annually with unlimited users on every plan, and offers a demo rather than a trial. For one to
            five people Jobber costs less; around 10 users the prices meet, and above 15 users Jobber asks you
            to contact sales while Service Fusion’s price does not change. Service Fusion also supports
            QuickBooks Desktop from Starter, which Jobber does not. Jobber documents route optimization;
            Service Fusion does not.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Jobber vs Service Fusion at a glance</h2>
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
                  <th scope="col" className="p-3.5">Service Fusion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.jobber}</td>
                    <td className="p-3.5">{r.sf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="cost-by-team-size">Cost by team size: where the prices cross</h2>
          <p>
            Jobber sells Connect, Grow and Plus in bands of 1, 5, 10 and 15 users, and Core for one user plus
            at most one extra seat. Service Fusion sells every plan with unlimited users. Using each
            vendor’s published annual-billing prices per month:
          </p>
          <ul>
            <li><strong>1 user:</strong> Jobber Core $29, Connect $99 or Grow $149; Service Fusion Starter $220.</li>
            <li><strong>5 users:</strong> Jobber Connect $149 or Grow $229; Service Fusion Starter $220 or Plus $339.</li>
            <li><strong>10 users:</strong> Jobber Connect $229, Grow $299 or Plus $449; Service Fusion Starter $220 or Plus $339.</li>
            <li><strong>15 users:</strong> Jobber Connect $299, Grow $399 or Plus $529; Service Fusion Starter $220 or Plus $339.</li>
            <li><strong>16 or more:</strong> Jobber asks you to contact sales; Service Fusion’s price stays the same.</li>
          </ul>
          <p>
            The plans are not equivalent. QuickBooks sync starts on Jobber Connect but on every Service Fusion
            plan; job costing starts on Jobber Grow and Service Fusion Plus, and Service Fusion Plus also adds
            inventory and built-in voice and text. Service Fusion says it is built for teams of 3 to 30
            technicians, and its annual price is charged as one payment at sign-up, so Starter means $2,640
            upfront. Every band and add-on is in our{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link> and{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link> guides.
          </p>

          <h2 id="contracts">Trials, contracts and renewal</h2>
          <p>
            Jobber offers a 14-day trial with Grow features and no credit card, and three billing options:
            annual prepaid, a one-year commitment billed monthly, or no commitment at a higher monthly rate.
            You can cancel a no-commitment plan at any time. Annual plans renew unless cancelled 30 days before
            renewal, and annual prepaid payments are non-refundable.
          </p>
          <p>
            Service Fusion offers a free demo and mentions no trial. Its pricing page says all plans are
            offered month to month with no contract requirements. Its Subscription Agreement, last modified
            March 23, 2026, adds:
          </p>
          <ul>
            <li>The first term is whatever your online order states, and it <strong>renews automatically</strong> for periods of the same length.</li>
            <li>Either side can end it with <strong>30 days’ written notice</strong> before the current term ends.</li>
            <li>Fees are <strong>non-refundable</strong>, plan changes are not pro-rated, and fees can change on notice.</li>
            <li>Exporting your content is a <strong>paid professional service</strong>, and data may be deleted after termination.</li>
          </ul>
          <p>
            Jobber’s help center says admins can export the client list as CSV or vCard on select plans, and
            that information is no longer retrievable after an account is permanently closed. With either
            tool, export before you cancel.
          </p>

          <h2 id="quickbooks">QuickBooks Online vs Desktop</h2>
          <p>
            This is the clearest feature split. Service Fusion supports QuickBooks Online and Desktop on every
            plan from Starter; its help center says the Desktop tool works only on Windows and needs a small
            program installed on your computer. Jobber syncs with QuickBooks Online and Xero from Connect and
            does not support Desktop. If your bookkeeper runs Desktop, Jobber is out. See our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="routing-gps">Routing, GPS and fleet tracking</h2>
          <p>
            Jobber’s help center lists route optimization on Connect, Grow and Plus: admins run it on the web
            app, and it reorders anytime visits by driving distance. GPS waypoint tracking on select plans pins
            where a team member clocks in or completes a visit, and live vehicle tracking comes through fleet
            partner devices. Service Fusion has a drag-and-drop dispatch grid and a GPS map on the schedule,
            and sells GPS Fleet Tracking as an add-on on every plan, which its pricing FAQ says shows trips,
            distance, idle time and driving behavior. It names routing on its scheduling page but does not
            describe route optimization, and it publishes no GPS price. More in our{' '}
            <Link href="/guides/route-optimization-software" className={A}>route optimization guide</Link>.
          </p>

          <h2 id="offline">Offline use</h2>
          <p>
            Jobber’s offline article, updated November 17, 2026, says the app saves the day’s schedule and
            lets technicians run timers, add notes with photos, fill out checklists and mark visits complete;
            it does not create invoices offline, and Tap to Pay needs a connection. Service Fusion launched
            offline mode on June 22, 2026: technicians can view schedules, customer information and job
            details, and edit notes, photos, tasks and checklists. Creating jobs or estimates, changing job
            status and taking payments are not available offline yet. See our{' '}
            <Link href="/guides/offline-field-service-app" className={A}>offline field service app guide</Link>.
          </p>

          <h2 id="phones">Phones and call answering</h2>
          <p>
            Jobber documents no business phone system. Its AI Receptionist is a $29 a month add-on, included
            on Plus. Service Fusion includes integrated voice and text from Plus, sells ServiceCall.ai (call
            tracking and VoIP) as a per-user add-on, and describes ZyraTalk AI call answering, which books into
            the calendar so jobs appear on the dispatch board. Neither ServiceCall.ai nor ZyraTalk has a
            published price.
          </p>

          <h2 id="agreements">Agreements, payments and financing</h2>
          <p>
            Jobber runs maintenance work as recurring jobs with automatic payments from Connect and documents
            no member pricing or equipment records. Service Fusion’s help center describes customer service
            agreement tracking, and recurring invoicing is included on Pro and an add-on on Starter and Plus.
            Its help center says agreements apply member pricing, and Service Fusion says it auto-bills after
            the first invoice is paid. Neither
            vendor documents equipment records in the sources we used.
          </p>
          <p>
            On payments, Jobber charges 2.9% + 30¢ online, 2.7% + 30¢ with Tap to Pay and 1% for ACH. Service
            Fusion Payments lists 2.90% + $0.30 per card, 1% more when the card is keyed in, ACH at 1% capped
            at $15, and a $0.75 batch fee for each day with transactions. For customer financing, Jobber uses
            Wisetack and Service Fusion uses Acorn Finance.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Solo operator or crew of up to five:</strong> Jobber, with lower published prices, a trial and a no-commitment option.</li>
            <li><strong>Ten or more users, or growing fast:</strong> Service Fusion, whose price does not rise with headcount.</li>
            <li><strong>QuickBooks Desktop:</strong> Service Fusion (Windows); Jobber does not support it.</li>
            <li><strong>Route optimization:</strong> Jobber, from Connect; Service Fusion does not document it.</li>
            <li><strong>Built-in phone system:</strong> Service Fusion Plus includes voice and text; Jobber sells only an AI Receptionist.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link>,{' '}
            <Link href="/compare/service-fusion-alternatives" className={A}>Service Fusion alternatives</Link> and{' '}
            <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Jobber vs Service Fusion">
            Jobber is cheaper for small teams, has a free trial and documents route optimization. Service
            Fusion’s unlimited users win as headcount grows, and it supports QuickBooks Desktop from Starter,
            but it offers no trial and its agreement renews your term unless you give 30 days’ notice. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
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
