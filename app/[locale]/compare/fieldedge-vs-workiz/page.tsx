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
 * /compare/fieldedge-vs-workiz: targets "fieldedge vs workiz" (and the reversed word order). No GSC
 * data for this topic yet.
 *
 * FieldEdge facts reuse /pricing/fieldedge and the b11 research notes: pricing page (plans, mobile
 * licenses, trial, annual memberships, feature table), payments, partners, Consumer Management
 * Portal, feature, scheduling and roadmap pages, all checked 2026-11-24. Contract terms come from the
 * Xplor US SaaS terms FieldEdge links as its Service Agreement (first read 2026-11-20; renewal 2.2,
 * increases 2.3, early termination 13.4, data 10.1.9 and Delaware law 15.19 confirmed 2026-11-26).
 * Workiz facts reuse /pricing/workiz, /compare/jobber-vs-workiz and the b12/b20/b21 notes: pricing,
 * phone, mobile, equipment, Workiz Pay and QuickBooks pages (2026-11-21 to 2026-11-24) and Terms of
 * Service v1.9 (last updated 2026-11-02; 12-month term and 30 days' notice read 2026-11-21; refunds,
 * 10% cap and data section read 2026-11-24/26). Neither vendor publishes a price, so none is shown and
 * there is no cost example.
 *
 * Conflicts: the Xplor PDF footer says "Version 1.2 May 2023" while the site labels it October 2023,
 * so no date is named in visible text. Workiz's pricing FAQ says a phone system comes with all plans
 * while its plan table lists Genius Phone as sold separately; both are stated. Not used: Workiz's
 * early-termination section and governing law (not in the part of its terms we read), help.workiz.com
 * fee snippets (403), Workiz's time-limited new-customer discount, FieldEdge's help center (JS-only),
 * its 2022 GreenSky blog post, and both vendors' pages comparing themselves with other tools. Nothing
 * tested hands-on.
 */

const PATH = '/compare/fieldedge-vs-workiz'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'FieldEdge vs Workiz (2026): Renewal Notice, Price Caps and Plans'
const DESCRIPTION =
  'Both are quote-only. FieldEdge needs 60 days’ renewal notice and offers a CPI exit; Workiz needs 30 days and caps rises at 10%. Compare plans and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/fieldedge-vs-workiz',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'FieldEdge vs Workiz', href: PATH },
]

const rows: { feature: string; fe: string; workiz: string }[] = [
  { feature: 'Price', fe: 'Not published: Select, Premier and Elite each say “Request Pricing”', workiz: 'Not published: Standard, Pro and Ultimate each say “Request pricing”; prices exclude sales tax' },
  { feature: 'What the quote is based on', fe: 'Technicians, employees and add-ons; plans include 2, 4 or 6 mobile app licenses', workiz: 'No user limit or per-user price stated; annual plan said to save $400 or more' },
  { feature: 'Free trial', fe: 'None; an onboarding specialist on every plan instead', workiz: '7 days, no credit card; fees due when the trial ends' },
  { feature: 'Term and renewal', fe: 'Annual memberships; Order Form sets the first term, then 12-month renewals unless written notice 60 days before the end', workiz: 'Sales Order sets the term; standard 12 months, renewing for 12 months unless 30 days’ notice' },
  { feature: 'Price increases', fe: 'Two months’ notice, no cap; if a rise is above CPI, you can end the agreement without penalty by giving notice within 10 days', workiz: 'Up to 10% a year, with at least 30 days’ written notice' },
  { feature: 'Leaving early and refunds', fe: 'Early termination fee equal to the monthly fees for the months remaining', workiz: 'Fees non-cancelable, payments non-refundable; early-exit clause not in the part of the terms we read' },
  { feature: 'Phone and call handling', fe: 'Call management, caller pop-up and tracking numbers (plan not stated); outbound call recording on Elite; Ruby and Free2Grow answering partners', workiz: 'Phone system with call recording and 2-way texting on every plan; Genius Phone and Genius Answering listed as sold separately' },
  { feature: 'Online booking', fe: 'Service requests through the Consumer Management Portal (on Elite, call for pricing below)', workiz: 'Online booking on every plan' },
  { feature: 'Flat rate and quotes', fe: 'Flat-rate price book on every plan; single-option quotes on Select, multiple options on Premier and Elite', workiz: 'Unlimited estimates on every plan; flat rate and sales proposals on Ultimate only' },
  { feature: 'Service plans and equipment', fe: 'Basic agreements on Select, advanced on Premier and Elite; equipment history and warranty dates (plan not stated)', workiz: 'Service plans and equipment tracking on Ultimate only' },
  { feature: 'Offline mobile', fe: 'Offline mode for the Mobile 2.0 app listed as in rolling development', workiz: 'Job details and updates work offline and sync later' },
  { feature: 'QuickBooks', fe: 'QuickBooks Online and Desktop on every plan', workiz: 'QuickBooks on every plan; its QuickBooks page names Online and Desktop, with data flowing one way to QuickBooks' },
  { feature: 'Payments', fe: 'FieldEdge Payments (Xplor Pay); rates not published, tailored to volume; funding as soon as the next business day', workiz: 'Workiz Pay; rates not published; $25 non-refundable fee per chargeback' },
  { feature: 'Your data', fe: 'Xplor returns or deletes personal data on request “to the extent reasonably practical”', workiz: 'You are responsible for backing up your own content' },
]

const faqs = [
  {
    question: 'Is FieldEdge more expensive than Workiz?',
    answer:
      'There is no way to tell from their websites, because neither publishes a price. FieldEdge says its price depends on technicians, employees and add-ons; Workiz says only that an annual plan can save $400 or more. Ask both for a written first-year total for the same team, plan level, add-ons and term.',
  },
  {
    question: 'How much notice do I need to give to stop a renewal?',
    answer:
      'For FieldEdge, the Xplor terms it links ask for written notice at least 60 days before the term ends, or the agreement renews for another 12 months. For Workiz, the standard term in its Terms of Service v1.9 renews for 12 months unless you give 30 days’ notice. Your own Order Form or Sales Order can set different terms, so check it.',
  },
  {
    question: 'Can FieldEdge or Workiz raise my price mid-contract?',
    answer:
      'Both allow increases with notice. Workiz caps them at 10% a year with at least 30 days’ written notice. FieldEdge’s Xplor terms set no cap and ask for two months’ notice, but if an increase is above CPI you can end the agreement without penalty by giving notice within 10 days.',
  },
  {
    question: 'Which includes flat rate and service plans on the entry plan?',
    answer:
      'FieldEdge. Its Select plan includes a flat-rate price book and basic service agreements. Workiz lists service plans, flat rate and sales proposals only on Ultimate, so a Standard or Pro quote will not include them.',
  },
  {
    question: 'Do both work with QuickBooks Desktop?',
    answer:
      'Yes, on their own pages. FieldEdge lists QuickBooks Online and Desktop on every plan. Workiz lists QuickBooks on every plan, and its QuickBooks page says it supports Online and Desktop, with data flowing one way from Workiz to QuickBooks.',
  },
  {
    question: 'Can I try FieldEdge or Workiz before signing?',
    answer:
      'Workiz offers a 7-day free trial with no credit card, and fees become due when it ends. FieldEdge says it does not offer a free trial and pairs new members with an onboarding team instead.',
  },
]

const sources = [
  { name: 'FieldEdge pricing (plans, mobile licenses, trial, annual memberships, feature table, FAQ)', url: 'https://fieldedge.com/pricing/', checked: '2026-11-24' },
  { name: 'Xplor US SaaS terms, linked as FieldEdge’s Service Agreement (renewal, increases, early termination, data, Delaware law)', url: 'https://www.xplortechnologies.com/wp-content/uploads/sites/13/2024/05/231026-Xplor-US-SaaS-Terms-Online-v1-2.pdf', checked: '2026-11-26' },
  { name: 'FieldEdge field service software (tracking numbers, equipment history)', url: 'https://fieldedge.com/field-service-software/', checked: '2026-11-24' },
  { name: 'FieldEdge scheduling and dispatching (call management, caller info, fleet updates)', url: 'https://fieldedge.com/field-service-software/scheduling-and-dispatching/', checked: '2026-11-24' },
  { name: 'FieldEdge partners (Ruby, FleetSharp)', url: 'https://fieldedge.com/partners/', checked: '2026-11-24' },
  { name: 'FieldEdge Free2Grow integration announcement', url: 'https://fieldedge.com/news/fieldedge-announces-integration-with-free2grow-to-help-contractors-grow-revenue/', checked: '2026-11-24' },
  { name: 'FieldEdge Consumer Management Portal', url: 'https://fieldedge.com/consumer-management-portal/', checked: '2026-11-24' },
  { name: 'FieldEdge Payments (Xplor Pay)', url: 'https://fieldedge.com/fe-payments/', checked: '2026-11-24' },
  { name: 'FieldEdge future features (Mobile 2.0 offline mode)', url: 'https://fieldedge.com/future-features/', checked: '2026-11-24' },
  { name: 'Workiz pricing plans (plans, features by plan, add-ons, trial, FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'Workiz Terms of Service v1.9 (12-month term and 30 days’ notice read 2026-11-21; refunds, 10% cap, chargebacks, backups)', url: 'https://www.workiz.com/terms-and-conditions/', checked: '2026-11-24' },
  { name: 'Workiz phone system', url: 'https://www.workiz.com/features/phone-system/', checked: '2026-11-21' },
  { name: 'Workiz Genius Answering (Jessica, English and Spanish)', url: 'https://www.workiz.com/features/genius-answering/', checked: '2026-11-24' },
  { name: 'Workiz mobile app (offline)', url: 'https://www.workiz.com/features/mobile-app/', checked: '2026-11-21' },
  { name: 'Workiz equipment tracking', url: 'https://www.workiz.com/features/equipment-tracking/', checked: '2026-11-21' },
  { name: 'Workiz Pay', url: 'https://www.workiz.com/features/workiz-pay/', checked: '2026-11-24' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function FieldEdgeVsWorkizPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/fieldedge-vs-workiz"
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
            FieldEdge vs Workiz: <span className="text-orange-400">two yearly contracts with different exit rules</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Renewal notice, price-rise limits, plan contents, phones, flat rate and QuickBooks Desktop,
            from each vendor’s own pages and terms, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Neither vendor publishes a price, and both sell a 12-month term that renews on its own. The
            fine print is where they part. <strong>FieldEdge</strong>’s linked Xplor terms need 60 days’
            written notice to stop a renewal and set no cap on increases, but let you leave without
            penalty if a rise is above CPI. <strong>Workiz</strong> needs 30 days’ notice and caps
            increases at 10% a year. On features, FieldEdge puts flat rate, service agreements and
            QuickBooks Online and Desktop on its entry plan, while Workiz puts a phone system and online
            booking on every plan but keeps flat rate and service plans for Ultimate.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>FieldEdge vs Workiz at a glance</h2>
          <p className={SUB}>
            Documented capabilities only, not a hands-on test or a score. Neither vendor publishes
            prices. Sources and check dates are at the end of this page.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3.5">Feature</th>
                  <th scope="col" className="p-3.5">FieldEdge</th>
                  <th scope="col" className="p-3.5">Workiz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.fe}</td>
                    <td className="p-3.5">{r.workiz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="contracts">Renewal notice and price rises</h2>
          <p>
            Both vendors set your term in a signed order: an Order Form for FieldEdge, a Sales Order for
            Workiz. The defaults behind those orders are what differ.
          </p>
          <p>
            FieldEdge’s pricing page refers to annual Select, Premier and Elite memberships, and it links
            Xplor’s US SaaS terms as its Service Agreement. Under those terms, after the first term the
            agreement renews for 12 months at a time unless either side gives written notice at least 60
            days before the term ends. Xplor can raise fees with two months’ notice. There is no cap, but
            if an increase is above CPI you can end the agreement without penalty, as long as you give
            notice within 10 days. Ending early otherwise can cost an early termination fee equal to the
            monthly fees for the months left. The terms are governed by Delaware law.
          </p>
          <p>
            Workiz’s Terms of Service (version 1.9, last updated November 2, 2026) had a standard term of
            12 months when we read them, renewing for 12 months unless you give 30 days’ notice. Billing
            cycles renew automatically, fees are non-cancelable and payments non-refundable. Workiz may
            raise fees by up to 10% a year, with at least 30 days’ written notice. We did not read the
            section of its terms on early termination, so ask what leaving mid-term would cost.
          </p>
          <p>
            In practice, a FieldEdge customer has to decide about two months before each renewal date, a
            Workiz customer about one month before. Put the date in your calendar on the day you sign. Our{' '}
            <Link href="/guides/field-service-software-contract-terms" className={A}>contract terms guide</Link>{' '}
            lines these clauses up across more vendors.
          </p>

          <h2 id="plans">Plan names and what each includes</h2>
          <p>
            FieldEdge’s three plans are <strong>Select</strong>, <strong>Premier</strong> and{' '}
            <strong>Elite</strong>, with 2, 4 and 6 mobile app licenses. Every plan includes a flat-rate
            price book, QuickBooks Online and Desktop, integrated payments, SMS texting and an onboarding
            specialist. Premier and Elite add advanced dispatching and agreements, quotes with multiple
            options, saved reports and commission tracking. Elite adds outbound call recording, the
            Consumer Management Portal, Proposal Pro and MarketingEdge with 2-way texting. See{' '}
            <Link href="/pricing/fieldedge" className={A}>FieldEdge pricing</Link> for the full plan table.
          </p>
          <p>
            Workiz’s plans are <strong>Standard</strong>, <strong>Pro</strong> and{' '}
            <strong>Ultimate</strong>, and the pricing page names no user limit. Every plan has the phone
            system, call flows, 2-way texting and online booking; Standard adds QuickBooks and 5
            automations. Pro adds 10 automations, custom reports and the Genius Leads and Genius Scheduling
            AI tools. Ultimate adds service plans, flat rate, sales proposals, inventory, equipment
            tracking, purchase orders and an open API. See{' '}
            <Link href="/pricing/workiz" className={A}>Workiz pricing</Link> for the plan breakdown.
          </p>
          <p>
            The practical result: a shop that sells maintenance agreements and prices by flat rate can
            start on FieldEdge Select, but needs Workiz Ultimate to get the same two features. Ask for
            quotes at the plan level that covers what you actually use.
          </p>

          <h2 id="phones">Phones and call handling</h2>
          <p>
            Workiz builds calling into the product. Its phone system records and summarizes calls, and the
            pricing FAQ mentions call tracking, recording and masking. The plan table, however, lists
            Genius Phone, Genius Answering (an AI agent called Jessica, in English and Spanish) and Genius
            Marketing as sold separately, with no prices, so get the phone features you need written into
            the quote. Its terms also say some call types are billed at different per-minute rates and
            that phone charges are non-refundable.
          </p>
          <p>
            FieldEdge describes centralized call management, caller details that fill in automatically and
            tracking numbers by territory, without naming a plan, and lists outbound call recording on
            Elite only. For answering, it relies on partners: Ruby for live receptionists and Free2Grow,
            announced in September 2026, for AI answering that books into FieldEdge. No partner prices are
            published.
          </p>

          <h2 id="field">Offline work, GPS and online booking</h2>
          <p>
            Workiz says job details and updates work offline and sync later, and lists online booking on
            every plan. FieldEdge’s roadmap lists offline mode for its Mobile 2.0 app as in rolling
            development, so ask what works without signal today. FieldEdge shows real-time fleet updates
            on its scheduling page and lists FleetSharp as a GPS tracking partner; customers can send
            service requests through its Consumer Management Portal, which is included on Elite and call
            for pricing on the other plans.
          </p>

          <h2 id="accounting">QuickBooks Desktop and payments</h2>
          <p>
            Both list QuickBooks Desktop. FieldEdge includes QuickBooks Online and Desktop on every plan,
            and its payments sync to QuickBooks. Workiz lists QuickBooks on Standard, so on every plan, and
            its integration page says it supports Online and Desktop with data flowing one way, from Workiz
            to QuickBooks. Neither publishes card or ACH rates: FieldEdge Payments runs on Xplor Pay with
            rates tailored to your volume, and Workiz Pay charges a non-refundable $25 per chargeback. Our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link> covers other tools.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>HVAC or plumbing shop selling agreements and flat rate on a smaller plan:</strong> FieldEdge, which includes both on Select.</li>
            <li><strong>Call-heavy business that wants phones and online booking in the core product:</strong> Workiz, if the quote includes the Genius add-ons you need.</li>
            <li><strong>Want a firm ceiling on price rises:</strong> Workiz, with its 10% yearly cap; FieldEdge instead gives a 10-day exit if a rise is above CPI.</li>
            <li><strong>Want a shorter notice window:</strong> Workiz (30 days) over FieldEdge (60 days).</li>
            <li><strong>Want published prices or no yearly term:</strong> compare <Link href="/compare/fieldedge-alternatives" className={A}>FieldEdge alternatives</Link> and <Link href="/compare/workiz-alternatives" className={A}>Workiz alternatives</Link>.</li>
          </ul>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: FieldEdge vs Workiz">
            Both are quote-only and renew for 12 months at a time, so the contract is the first thing to
            compare. FieldEdge needs 60 days’ notice and has no increase cap but a CPI exit; Workiz needs
            30 days’ notice and caps rises at 10%. FieldEdge puts flat rate, agreements and QuickBooks
            Desktop on every plan, while Workiz leads on built-in phones and online booking but saves flat
            rate and service plans for Ultimate. Our <Link href="/how-we-review" className={A}>review method</Link>{' '}
            explains why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/fieldedge" className="text-orange-600 hover:text-orange-800">FieldEdge pricing →</Link>
            <Link href="/pricing/workiz" className="text-orange-600 hover:text-orange-800">Workiz pricing →</Link>
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
