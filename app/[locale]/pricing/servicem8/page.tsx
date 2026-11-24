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
 * /pricing/servicem8: targets "servicem8 pricing", "servicem8 cost" and "servicem8 plans". No GSC
 * data for this topic yet. Alternatives intent stays on /compare/servicem8-alternatives.
 *
 * Every figure was checked on 2026-11-24 on ServiceM8's US pricing page, phone page, payments page,
 * add-on directory, help center and Terms of Service. ServiceM8's payments page (3.10% + 30c) and
 * help center (3.05% + 30c, "current as of September 2024") disagree; both are stated. Its help
 * center says "cancel at any time" while its terms ask for 30 days' notice; both are stated. What
 * counts as a job is not defined on the pages read, so the page says to confirm it. Per-job figures
 * are arithmetic on published prices. Nothing tested hands-on.
 */

const PATH = '/pricing/servicem8'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'ServiceM8 Pricing (2026): Plans, Job Limits & Fees'
const DESCRIPTION =
  'ServiceM8 pricing for 2026: Free, Starter $29, Growing $79, Premium $149 and Premium Plus $349 a month, priced by jobs with unlimited users, add-ons and fees.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'pricing/servicem8',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'ServiceM8 Pricing', href: PATH },
]

const plans: { plan: string; price: string; jobs: string; users: string; perJob: string; adds: string; highlight?: boolean }[] = [
  { plan: 'Free', price: '$0', jobs: '30', users: '1', perJob: '$0', adds: 'Quotes, invoicing, scheduling, online booking, recurring jobs, deposits, Auto Routing, live staff GPS, offline app, QuickBooks Online and Xero sync, card payments; texts 10¢ each' },
  { plan: 'Starter', price: '$29', jobs: '50', users: 'Unlimited', perJob: '$0.58', adds: 'Progress invoices, supplier invoice import, Office Agent, third-party add-ons, API, auto-pay for recurring jobs', highlight: true },
  { plan: 'Growing', price: '$79', jobs: '150', users: 'Unlimited', perJob: '$0.53', adds: 'Asset management, forms and certificates, proposals, bundles, ServiceM8 Inbox' },
  { plan: 'Premium', price: '$149', jobs: '500', users: 'Unlimited', perJob: '$0.30', adds: 'Job costing and profitability, markup billing, Knowledge' },
  { plan: 'Premium Plus', price: '$349', jobs: '1,500+', users: 'Unlimited', perJob: '$0.23', adds: 'Extra jobs above 1,500 at 20¢ each' },
]

const phone: { plan: string; price: string; detail: string }[] = [
  { plan: 'Connect', price: '$19', detail: '500 call minutes, no AI agent' },
  { plan: 'Connect Plus', price: '$32', detail: '500 call minutes plus the AI Phone Agent' },
  { plan: 'Unlimited', price: '$119', detail: 'Unlimited minutes plus the AI Phone Agent' },
]

const faqs = [
  {
    question: 'How much does ServiceM8 cost?',
    answer:
      'ServiceM8 prices by jobs a month, not users. The US plans are Free ($0, 1 user, 30 jobs), Starter ($29, 50 jobs), Growing ($79, 150 jobs), Premium ($149, 500 jobs) and Premium Plus ($349, 1,500 or more jobs). Every paid plan has unlimited users.',
  },
  {
    question: 'What happens if I go over my ServiceM8 job limit?',
    answer:
      'Its pricing FAQ says you can keep creating jobs and working as normal for another 7 days. If your billing cycle resets in that time the count starts again; otherwise you are prompted to upgrade. Only Premium Plus lists a per-job price above its limit, 20¢ a job.',
  },
  {
    question: 'Is ServiceM8 really free?',
    answer:
      'Yes, for one user and 30 jobs a month. The free plan includes quotes, invoicing, scheduling, online booking, recurring jobs, Auto Routing and the offline app. Text messages cost 10¢ each on the free plan and are included on paid plans.',
  },
  {
    question: 'Does ServiceM8 have a contract?',
    answer:
      'Its help center says there are no contracts, setup fees or per-user fees and that you can cancel at any time. Its Terms of Service, governed by Australian law, ask for notice at least 30 days before the end of the payment period, so give notice early.',
  },
  {
    question: 'What are ServiceM8 Pay card fees?',
    answer:
      'ServiceM8’s payments page lists 3.10% + 30¢ for US domestic cards and 4.60% + 30¢ for international cards, with next-business-day deposits. Its help center lists 3.05% + 30¢ as current as of September 2024, and a $15 dispute fee.',
  },
  {
    question: 'Does ServiceM8 work with QuickBooks Desktop?',
    answer:
      'Not on the pages we read. ServiceM8 connects to QuickBooks Online, Xero and MYOB, and QuickBooks Desktop is not mentioned.',
  },
  {
    question: 'Does ServiceM8 work on Android?',
    answer:
      'Yes. ServiceM8’s home page says it has full-featured iOS and Android apps, and its help center explains Tap to Pay setup on both iPhone and Android.',
  },
]

const sources = [
  { name: 'ServiceM8 pricing (US plans, job limits, features, over-limit FAQ)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-24' },
  { name: 'ServiceM8 home (audience, iOS and Android apps, 14-day trial)', url: 'https://www.servicem8.com/us', checked: '2026-11-24' },
  { name: 'ServiceM8 help: what does ServiceM8 cost', url: 'https://support.servicem8.com/help-center/tips-trick-more/more/what-does-servicem8-cost', checked: '2026-11-24' },
  { name: 'ServiceM8 Phone (plans, minutes, AI Phone Agent)', url: 'https://www.servicem8.com/us/phone', checked: '2026-11-24' },
  { name: 'ServiceM8 add-ons directory', url: 'https://www.servicem8.com/addons', checked: '2026-11-24' },
  { name: 'ServiceM8 help: add-ons overview', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-add-ons/servicem8-add-ons-overview', checked: '2026-11-24' },
  { name: 'ServiceM8 Pay (US rates, next-business-day deposits)', url: 'https://www.servicem8.com/us/servicem8-pay', checked: '2026-11-24' },
  { name: 'ServiceM8 help: card processing fees and payout speed', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/servicem8-pay-card-processing-fees-payout-speed', checked: '2026-11-24' },
  { name: 'ServiceM8 help: getting started with ServiceM8 Pay (Tap to Pay)', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/servicem8-pay/how-to-get-started-with-servicem8-pay', checked: '2026-11-24' },
  { name: 'ServiceM8 help: connect to QuickBooks Online', url: 'https://support.servicem8.com/help-center/servicem8-add-ons/quickbooks/how-do-i-connect-servicem8-to-quickbooks-online', checked: '2026-11-24' },
  { name: 'ServiceM8 help: offline use', url: 'https://support.servicem8.com/questions/mobile/does-servicem8-work-offline-without-mobile-coverage-or-internet', checked: '2026-11-24' },
  { name: 'ServiceM8 Terms of Service', url: 'https://www.servicem8.com/us/terms-of-service', checked: '2026-11-24' },
  { name: 'Jobber pricing (plans, trial, billing options)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Housecall Pro pricing (plans, users)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const TH = 'px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]'
const TD = 'px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300'
const TD1 = 'py-[14px] pl-[22px] pr-4 text-[14px] font-semibold text-slate-900 dark:text-white'
const TABLE_WRAP = 'overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800'
const ROW = 'border-t border-slate-100 dark:border-slate-800'

export default function ServiceM8PricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="pricing/servicem8"
        datePublished={firstPublished}
        dateModified={contentUpdated}
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />

      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            ServiceM8 pricing (2026): <span className="text-orange-400">plans, job limits &amp; fees</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every US plan, job allowance, add-on, payment fee and term, taken from ServiceM8&rsquo;s own pricing
            page, help center and terms on November 24, 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            ServiceM8 prices by <strong>jobs a month</strong>, not by users. The <strong>Free</strong> plan
            covers one user and 30 jobs. Paid plans have unlimited users: <strong>Starter</strong> $29 for 50
            jobs, <strong>Growing</strong> $79 for 150, <strong>Premium</strong> $149 for 500 and{' '}
            <strong>Premium Plus</strong> $349 for 1,500 or more, with extra jobs at 20¢ each on that plan.
            ServiceM8 says there is no contract, setup fee or per-user fee. Card payments cost from 3.10% + 30¢,
            and the phone system with an AI agent is $32 or $119 a month.
          </p>
        </AnswerBlock>

        <section className="mt-12">
          <h2 className={H2}>ServiceM8 plans and prices</h2>
          <p className={SUB}>
            US monthly prices from ServiceM8&rsquo;s pricing page on November 24, 2026. Cost per job is the plan
            price divided by its job allowance.
          </p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Plan', 'Per month', 'Jobs a month', 'Users', 'Cost per job', 'Adds'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((r) => (
                  <tr key={r.plan} className={r.highlight ? 'bg-orange-50 dark:bg-orange-500/10' : ROW}>
                    <td className={`py-[14px] pl-[22px] pr-4 text-[14.5px] font-bold text-slate-900 dark:text-white ${r.highlight ? 'border-l-[3px] border-orange-500' : ''}`}>
                      {r.plan}
                    </td>
                    <td className={TD}>{r.price}</td>
                    <td className={TD}>{r.jobs}</td>
                    <td className={TD}>{r.users}</td>
                    <td className={TD}>{r.perJob}</td>
                    <td className={TD}>{r.adds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Starter is highlighted because it is the cheapest plan with unlimited users. Each plan includes
            everything in the plan before it. ServiceM8 does not list an annual billing option.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>How the job limit works</h2>
          <p>
            Your plan sets how many jobs you can create each month. ServiceM8&rsquo;s FAQ says that if you go over,
            you can keep creating jobs and working as normal for another 7 days. If your billing cycle resets in
            that time, the count starts again; if not, you are prompted to upgrade. Only Premium Plus lists a price
            for extra jobs, 20¢ each. The pages we read do not define exactly what counts as a job, and quotes are
            a job status in ServiceM8, so ask whether quotes that never turn into work use up your allowance.
          </p>
          <p>
            Because users are unlimited on paid plans, ServiceM8 gets cheaper per person as you hire but more
            expensive as your job count grows. A crew of five doing 120 jobs a month fits Growing at $79; the same
            crew doing 200 jobs needs Premium at $149.
          </p>

          <h2>Add-ons and extra costs</h2>
          <ul>
            <li><strong>Office Agent Pro</strong>: $39 a month on paid plans. The standard Office Agent is included from Starter.</li>
            <li><strong>Text messages</strong>: 10¢ each on the free plan, included on paid plans.</li>
            <li><strong>Third-party add-ons</strong>: available from Starter. The only price in its add-on directory is Duplicate Job at $4.99 a month; others bill separately.</li>
            <li><strong>Website and email</strong>: listed with &ldquo;fees apply&rdquo;, without an amount.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>ServiceM8 Phone and AI Phone Agent</h2>
          <p className={SUB}>From ServiceM8&rsquo;s phone page. Requires a ServiceM8 plan.</p>
          <div className={TABLE_WRAP}>
            <table className="tnum w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Phone plan', 'Per month', 'Includes'].map((h) => (
                    <th key={h} className={TH}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {phone.map((r) => (
                  <tr key={r.plan} className={ROW}>
                    <td className={TD1}>{r.plan}</td>
                    <td className={TD}>{r.price}</td>
                    <td className={TD}>{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Extra minutes on the 500-minute plans cost 3¢ each, and extra numbers $5 a month. Our{' '}
            <Link href="/guides/ai-answering-service-for-contractors" className="text-orange-600 hover:text-orange-800 dark:text-orange-400">AI answering guide</Link>{' '}
            compares it with other vendors&rsquo; AI agents.
          </p>
        </section>

        <div className="prose-body mt-12">
          <h2>Payment processing fees</h2>
          <p>
            ServiceM8 Pay runs on Stripe. Its payments page lists 3.10% + 30¢ for US domestic cards and 4.60% +
            30¢ for international cards, with deposits the next business day. Its help center lists 3.05% + 30¢
            for domestic cards, marked current as of September 2024, and a non-refundable $15 dispute fee. On a
            $1,000 invoice paid by a US card, that is $31.30 at the payments page rate. Tap to Pay works on
            iPhone and Android without extra hardware. We found no ACH option for US customers on its pages.
          </p>

          <h2>Trial, contract and cancellation</h2>
          <p>
            ServiceM8 offers a 14-day free trial of its paid features, separate from the permanent free plan.
            Its help center says there are no contracts, setup fees or per-user fees and that you can cancel at
            any time. Its Terms of Service, from ServiceM8 Pty Ltd under Australian law, say either side can end
            the agreement with notice at least 30 days before the end of the payment period, and that your data
            stays your property. They do not describe refunds, price-change notice or a data export process, so
            export your records before you leave.
          </p>

          <h2>Who ServiceM8 is priced for</h2>
          <p>
            ServiceM8 says it is built for trade contractors and service businesses from sole traders up to 20
            staff. It syncs with QuickBooks Online, Xero and MYOB but does not mention QuickBooks Desktop, and the
            mobile app works offline on every plan, without producing final quotes, invoices or forms until you
            reconnect.
          </p>

          <h2>ServiceM8 vs Jobber and Housecall Pro on price</h2>
          <p>
            For one person, ServiceM8&rsquo;s free plan and $29 Starter undercut Jobber Core ($29 a month billed
            annually, $49 with no commitment) and Housecall Pro Basic ($59 billed annually). For a team, the
            comparison depends on jobs, not people: ServiceM8 Growing covers any number of users for $79 and 150
            jobs, while Jobber and Housecall Pro charge by user. See{' '}
            <Link href="/pricing/jobber">Jobber pricing</Link>,{' '}
            <Link href="/pricing/housecall-pro">Housecall Pro pricing</Link> and our{' '}
            <Link href="/compare/servicem8-alternatives">ServiceM8 alternatives</Link>.
          </p>

          <h2>Which ServiceM8 plan should you choose?</h2>
          <ul>
            <li><strong>Free</strong> if you work alone and do fewer than 30 jobs a month.</li>
            <li><strong>Starter</strong> for a small team doing up to 50 jobs, or if you need progress invoices or the API.</li>
            <li><strong>Growing</strong> if you need forms, certificates, asset records or proposals.</li>
            <li><strong>Premium</strong> if you want job costing, or run 150 to 500 jobs a month.</li>
            <li><strong>Premium Plus</strong> above 500 jobs a month.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on ServiceM8 pricing">
            ServiceM8 is the cheapest way to start, with a free plan and unlimited users from $29, but you pay by
            jobs: count your monthly jobs, including quotes, before you pick a plan. Add 3.10% + 30¢ for card
            payments, and $32 or more if you want its phone system and AI agent.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/servicem8-alternatives" className="text-orange-600 hover:text-orange-800">ServiceM8 alternatives →</Link>
            <Link href="/pricing/jobber" className="text-orange-600 hover:text-orange-800">Jobber pricing →</Link>
            <Link href="/pricing/kickserv" className="text-orange-600 hover:text-orange-800">Kickserv pricing →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">All FSM software pricing →</Link>
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
