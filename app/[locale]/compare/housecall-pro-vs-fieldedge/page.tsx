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
 * /compare/housecall-pro-vs-fieldedge: targets "housecall pro vs fieldedge". No GSC data for this
 * topic yet.
 *
 * FieldEdge facts: pricing, feature, scheduling, payments, portal, partners, roadmap and training
 * pages checked 2026-11-24; the Xplor US SaaS terms FieldEdge links as its Service Agreement
 * (October 2023) read 2026-11-20. Offline is described only by FieldEdge's roadmap status, and no
 * current consumer financing partner is named (only a 2022 blog post). Housecall Pro facts reuse
 * the site's verified pages (pricing and plan data 2026-11-19, help center 2026-11-17 to 11-21);
 * www.housecallpro.com was not refetched. FieldEdge's comparison page makes claims about Housecall
 * Pro; none are used. Nothing tested hands-on.
 */

const PATH = '/compare/housecall-pro-vs-fieldedge'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Housecall Pro vs FieldEdge (2026): Pricing, Contracts, Flat Rate'
const DESCRIPTION =
  'Housecall Pro publishes plans from $59/month with no long-term contract; FieldEdge quotes on yearly terms. Compare flat rate, agreements, offline, QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/housecall-pro-vs-fieldedge',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Housecall Pro vs FieldEdge', href: PATH },
]

const rows: { feature: string; hcp: string; fe: string }[] = [
  { feature: 'Price', hcp: 'Published: Basic $59 (1 user), Essentials $149 (up to 5 users), MAX $299 (up to 8 users) per month billed annually; $79, $189 and $329 month to month', fe: 'Not published: Select, Premier and Elite all say “Request Pricing”; varies with technicians, employees and add-ons' },
  { feature: 'Users', hcp: 'MAX adds users at $35 a month each', fe: '2, 4 or 6 mobile licenses included by plan' },
  { feature: 'Free trial', hcp: '14 days with MAX features, no credit card', fe: 'No free trial; an onboarding specialist on every plan' },
  { feature: 'Contract terms', hcp: 'Says it does not require long-term contracts', fe: 'Annual memberships; published terms renew for 12 months unless 60 days’ notice; ending early costs the remaining monthly fees' },
  { feature: 'Scheduling and routing', hcp: 'Scheduling and dispatch on every plan; route grouping from Essentials; one-click route optimization on MAX', fe: 'Basic dispatching on Select, advanced on Premier and Elite; map-based route optimization; vehicle GPS through the FleetSharp partner' },
  { feature: 'Phone', hcp: 'Voice add-on: call tracking from $45 a month, VoIP with call tracking from $65, plus overages', fe: 'Caller details pop up from phone integration; outbound call recording on Elite; AI answering through partner Free2Grow' },
  { feature: 'Estimates and flat rate', hcp: 'Estimates from Basic; flat-rate pricing from Essentials; sales proposal tool on MAX', fe: 'Flat-rate price book on every plan; single-option quotes on Select, up to 5 options on Premier and Elite; Proposal Pro on Elite' },
  { feature: 'Payment fees', hcp: '2.59% in person, 2.99% online invoice, 3.49% keyed or card on file; ACH 1%', fe: 'Not published; FieldEdge Payments (Xplor Pay) rates “tailored to your transaction volume”' },
  { feature: 'QuickBooks', hcp: 'Plan data lists QuickBooks Online and Desktop on Essentials', fe: 'QuickBooks Online and Desktop on every plan' },
  { feature: 'Agreements and equipment', hcp: 'Recurring Service Plans on MAX; customer equipment tracking listed on Essentials', fe: 'Basic agreements on Select, multiple per customer on Premier and Elite; equipment records with warranty dates and work history' },
  { feature: 'Offline', hcp: 'View only: jobs for today and the next 2 days, up to 10 a day', fe: 'Offline mode for the Mobile 2.0 app listed as in development on its roadmap' },
  { feature: 'Online booking', hcp: 'From Basic', fe: 'Service requests through the customer portal (included on Elite, priced on request below)' },
  { feature: 'Reporting', hcp: 'Up to 40 standard reports plus custom reports you can save, share and schedule', fe: 'Dashboards; saved reports none on Select, 10 on Premier, unlimited on Elite' },
]

const faqs = [
  {
    question: 'Is Housecall Pro cheaper than FieldEdge?',
    answer:
      'We cannot say, because FieldEdge does not publish prices. Housecall Pro costs $59 a month for one user, $149 for up to five and $299 for up to eight, billed annually. FieldEdge says pricing varies with your technicians, employees and add-ons, so get a written quote for the same team and compare totals.',
  },
  {
    question: 'Does FieldEdge require a contract?',
    answer:
      'Its pricing page describes annual memberships, and downgrades take effect at the end of the contract period. The Xplor terms FieldEdge links as its Service Agreement renew for 12 months unless either side gives 60 days’ written notice and allow an early termination fee equal to the monthly fees for the remaining months. Housecall Pro says it does not require long-term contracts.',
  },
  {
    question: 'Which is better for flat-rate pricing?',
    answer:
      'FieldEdge includes a flat-rate price book on every plan. Housecall Pro includes flat-rate pricing from Essentials ($149 a month billed annually for up to five users), so its Basic plan does not have it.',
  },
  {
    question: 'Which is better for maintenance agreements?',
    answer:
      'FieldEdge includes basic agreements on Select and multiple agreements per customer on Premier and Elite. Housecall Pro lists Recurring Service Plans on MAX, its top plan, at $299 a month billed annually for up to eight users.',
  },
  {
    question: 'Do both support QuickBooks Desktop?',
    answer:
      'Yes. FieldEdge includes QuickBooks Online and Desktop on every plan, and Housecall Pro’s plan data lists both on Essentials.',
  },
  {
    question: 'Which works offline?',
    answer:
      'Neither documents full offline editing. Housecall Pro’s offline mode is view only, for jobs today and the next two days. FieldEdge’s roadmap lists offline mode for its Mobile 2.0 app as in rolling development, and we found no page describing what works offline today.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, trial, contracts, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: Voice FAQs (pricing)', url: 'https://help.housecallpro.com/en/articles/6666356-voice-faqs', checked: '2026-11-21' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Housecall Pro help: managing reports', url: 'https://help.housecallpro.com/en/articles/7336458-managing-reports', checked: '2026-11-17' },
  { name: 'Housecall Pro help: payment processing options and fees', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-20' },
  { name: 'FieldEdge pricing (plans, licenses, trial, annual memberships, feature table)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement (October 2023)', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-20' },
  { name: 'FieldEdge field service software (equipment, routes, dashboards)', url: 'https://fieldedge.com/field-service-software/', checked: '2026-11-24' },
  { name: 'FieldEdge scheduling and dispatching (caller info, fleet updates)', url: 'https://fieldedge.com/field-service-software/scheduling-and-dispatching/', checked: '2026-11-24' },
  { name: 'FieldEdge future features (Mobile 2.0 offline mode)', url: 'https://fieldedge.com/future-features/', checked: '2026-11-24' },
  { name: 'FieldEdge Payments (Xplor Pay)', url: 'https://fieldedge.com/fe-payments/', checked: '2026-11-24' },
  { name: 'FieldEdge consumer management portal', url: 'https://fieldedge.com/consumer-management-portal/', checked: '2026-11-24' },
  { name: 'FieldEdge partners (FleetSharp)', url: 'https://fieldedge.com/partners/', checked: '2026-11-24' },
  { name: 'FieldEdge and Free2Grow AI answering integration', url: 'https://fieldedge.com/news/fieldedge-announces-integration-with-free2grow-to-help-contractors-grow-revenue/', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HousecallProVsFieldEdgePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/housecall-pro-vs-fieldedge"
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
            Housecall Pro vs FieldEdge: <span className="text-orange-400">published plans vs a quote-only trade platform</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Pricing, trials, contract terms, flat rate, agreements, phones and QuickBooks, from each vendor’s
            own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Housecall Pro</strong> publishes its plans ($59, $149 and $299 a month billed annually
            for 1, 5 and 8 users), offers a 14-day trial, publishes its card fees and says it requires no
            long-term contract. <strong>FieldEdge</strong> quotes every plan, has no free trial and sells
            annual memberships that renew unless you give 60 days’ notice. In return it puts a flat-rate
            price book, maintenance agreements and QuickBooks Online and Desktop on every plan, while
            Housecall Pro gates flat rate to Essentials and service plans to MAX. Neither documents full
            offline editing.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Housecall Pro vs FieldEdge at a glance</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Sources and
            check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">Housecall Pro</th>
                  <th scope="col" className="p-3.5">FieldEdge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.hcp}</td>
                    <td className="p-3.5">{r.fe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Pricing: published plans vs request pricing</h2>
          <p>
            Housecall Pro’s Basic plan is $59 a month for one user, Essentials $149 for up to five and MAX
            $299 for up to eight, billed annually ($79, $189 and $329 month to month), with extra MAX users at
            $35 a month. See our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> guide.
          </p>
          <p>
            FieldEdge’s Select, Premier and Elite plans all say Request Pricing, include 2, 4 and 6 mobile
            licenses, and vary in price with your technicians, employees and add-ons. Proposal Pro,
            MarketingEdge and the customer portal are included on Elite and priced on request below it.
          </p>

          <h2 id="contracts">Trials and contract terms</h2>
          <p>
            Housecall Pro offers a 14-day trial with MAX features and no credit card and says it does not
            require long-term contracts. FieldEdge has no free trial and pairs every plan with an onboarding
            specialist. Its pricing page describes annual memberships (downgrades at the end of the contract
            period), and the Xplor terms it links as its Service Agreement renew for 12 months unless either
            side gives 60 days’ written notice, allow an early termination fee equal to the monthly fees for
            the remaining months, and let Xplor raise fees with two months’ notice.
          </p>

          <h2 id="pricebook">Flat rate, estimates and agreements</h2>
          <p>
            FieldEdge includes a flat-rate price book on every plan, multi-option quotes (up to five) on
            Premier and Elite, basic agreements on Select and multiple agreements per customer on Premier and
            Elite, and keeps equipment records with warranty dates and work history. Housecall Pro includes
            flat-rate pricing and customer equipment tracking from Essentials, a sales proposal tool and
            Recurring Service Plans on MAX. If you sell maintenance plans, compare FieldEdge’s quote with
            Housecall Pro MAX. See our{' '}
            <Link href="/guides/hvac-maintenance-agreement-software" className={A}>maintenance agreement software</Link>{' '}
            guide.
          </p>

          <h2 id="dispatch-phone">Dispatch, phones and booking</h2>
          <p>
            Housecall Pro groups jobs into routes from Essentials and adds one-click route optimization on
            MAX. FieldEdge offers advanced dispatching on Premier and Elite, map-based route optimization and
            vehicle GPS through FleetSharp. Housecall Pro Voice publishes its price (from $45 a month for call
            tracking or $65 for VoIP, plus overages); FieldEdge pulls up caller details from its phone
            integration, records outbound calls on Elite, and connects to Free2Grow for AI answering.
            Housecall Pro includes online booking from Basic; FieldEdge takes service requests through its
            customer portal.
          </p>

          <h2 id="offline-quickbooks">Offline use, payments and QuickBooks</h2>
          <p>
            Housecall Pro’s offline mode is view only, covering jobs for today and the next two days.
            FieldEdge’s roadmap lists offline mode for its Mobile 2.0 app as in rolling development. Housecall
            Pro publishes card fees (2.59% in person, 2.99% online invoice, 3.49% keyed, ACH 1%); FieldEdge
            Payments runs on Xplor Pay with volume-based rates and next-day funding. Both support QuickBooks
            Online and Desktop: FieldEdge on every plan, Housecall Pro from Essentials. See our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Want published prices, a trial and no contract:</strong> Housecall Pro.</li>
            <li><strong>Multi-truck HVAC, plumbing or electrical shop on flat rate:</strong> FieldEdge.</li>
            <li><strong>Several agreements per customer:</strong> FieldEdge Premier or Elite.</li>
            <li><strong>Small residential team up to 8 selling service plans:</strong> Housecall Pro MAX at a published $299 a month billed annually.</li>
            <li><strong>Crews often without signal:</strong> neither; consider tools that document offline editing.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/housecall-pro-alternatives" className={A}>Housecall Pro alternatives</Link>,{' '}
            <Link href="/compare/fieldedge-alternatives" className={A}>FieldEdge alternatives</Link> and{' '}
            <Link href="/compare/jobber-vs-fieldedge" className={A}>Jobber vs FieldEdge</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Housecall Pro vs FieldEdge">
            Housecall Pro wins on published prices and fees, a free trial and no long-term contract.
            FieldEdge wins on flat rate, agreements and QuickBooks Desktop on every plan, but it is
            quote-only and renews yearly unless you give 60 days’ notice. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
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
