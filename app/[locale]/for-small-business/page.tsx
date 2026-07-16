import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { CalloutBox } from '@/components/CalloutBox'
import { AuthorBio } from '@/components/AuthorBio'
import { AdUnit } from '@/components/AdUnit'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'

/**
 * /for-small-business — target "field service software for small business" (880 vol, KD 19),
 * "best field service management software for small business" (480, KD 13),
 * "small business field service management software" (260, KD 34).
 * All pricing verified 2026-07-08 on vendor pricing pages; QuickBooks gating same source.
 */

export const metadata = buildMetadata({
  title: 'Best Field Service Software for Small Business (2026)',
  description:
    'The best field service management software for small businesses in 2026: verified entry pricing from $29 per month, what small teams need, and what to skip.',
  slug: 'for-small-business',
  type: 'article',
  modifiedTime: '2026-07-16',
  // 54-char keyword title; template suffix would exceed Bing's 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'For Small Business', href: '/for-small-business' },
]

const faqs = [
  {
    question: 'What is the best field service software for a small business?',
    answer:
      'For most small service businesses in 2026, Jobber (from $29/month billed annually) or Housecall Pro (from $59/month billed annually) is the right starting point. Both publish transparent pricing, set up in days rather than months, and cover scheduling, dispatch, invoicing, and payments. The right pick between them depends on QuickBooks version and which features you need at the entry price.',
  },
  {
    question: 'How much should a small business pay for FSM software?',
    answer:
      'A solo operator can start at $29/month (Jobber Core, billed annually; $49 month-to-month). A crew of up to 5 costs about $149/month on either Jobber Connect or Housecall Pro Essentials with annual billing. If a vendor will not publish a price and requires a sales call, it is usually built for bigger operations than yours.',
  },
  {
    question: 'Is ServiceTitan worth it for a small business?',
    answer:
      'Usually not at the small end. ServiceTitan is an enterprise platform built for larger commercial and high-volume residential operations, and it is custom-quoted rather than publicly priced. Small teams typically get what they need from Jobber or Housecall Pro at a fraction of the cost, and can migrate later if they outgrow them.',
  },
  {
    question: 'Do small business plans include QuickBooks sync?',
    answer:
      'Not at the cheapest tier. Jobber Core ($29/month annual) and Housecall Pro Basic ($59/month annual) both exclude QuickBooks sync. You need Jobber Connect ($99/month annual, QuickBooks Online only) or Housecall Pro Essentials ($149/month annual, QuickBooks Online and Desktop). See our QuickBooks compatibility guide for the full matrix.',
  },
  {
    question: 'Is there free field service software for small businesses?',
    answer:
      'No major FSM vendor offers a free plan as of July 2026. The only verified free-forever FSM tier is Odoo Field Service (One App Free), and Connecteam is free up to 10 users but has no invoicing. For most small businesses the realistic path is a 14-day no-card trial of Jobber or Housecall Pro, then a $29 to $79 per month single-user plan.',
  },
]

/** Verified 2026-07-08 on each vendor's own pricing page. */
const rows: { tool: string; oneUser: string; fiveUsers: string; bestFor: string; highlight?: boolean }[] = [
  { tool: 'Jobber', oneUser: '$29/mo (Core)', fiveUsers: '$149/mo (Connect)', bestFor: 'Cheapest published entry; website + booking on every plan', highlight: true },
  { tool: 'Housecall Pro', oneUser: '$59/mo (Basic)', fiveUsers: '$149/mo (Essentials)', bestFor: 'Review management at entry price; QuickBooks Desktop support', highlight: true },
  { tool: 'Workiz', oneUser: 'Custom', fiveUsers: 'Custom', bestFor: 'Small-to-midsize teams wanting built-in phone and dispatch' },
  { tool: 'FieldPulse', oneUser: 'Custom', fiveUsers: 'Custom', bestFor: 'Growing multi-crew teams; demo-first sales motion' },
  { tool: 'ServiceTitan', oneUser: 'Custom', fiveUsers: 'Custom', bestFor: 'Larger commercial operations, not small shops' },
  { tool: 'Commusoft', oneUser: 'Custom', fiveUsers: 'Custom', bestFor: 'Built for 6+ staff on contracted licenses' },
]

export default function ForSmallBusinessPage() {
  return (
    <>
      <ArticleJsonLd
        headline="Best Field Service Software for Small Business (2026)"
        description="The best field service management software for small businesses, with verified entry pricing, five-user pricing, and what small teams actually need."
        slug="for-small-business"
        datePublished="2026-07-16"
        dateModified="2026-07-16"
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />

      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Field service software for <span className="text-orange-400">small business</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What a solo operator or small crew should actually buy in 2026, with every price
            verified on the vendor&rsquo;s own page.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="July 2026">
          <p>
            The best field service management software for small businesses in 2026 is{' '}
            <strong>Jobber</strong> (from $29/month billed annually; $49 month-to-month) or{' '}
            <strong>Housecall Pro</strong> (from $59/month billed annually; $79 month-to-month).
            They are the only major FSM vendors that publish pricing, both set up in days, and
            both cover the small-business core: scheduling, dispatch, quotes, invoicing, and
            payments from one mobile app. Pick Jobber to minimize cost or to get a website and
            online booking on every plan; pick Housecall Pro for review management at the entry
            price or if you run QuickBooks Desktop. At 5 users the two converge at $149/month
            billed annually. Enterprise platforms like ServiceTitan are built for bigger
            operations and are custom-quoted, so most small shops should trial the published-price
            tools first: both offer 14 days free with no credit card.
          </p>
        </AnswerBlock>

        <AdUnit slot="0000000001" format="leaderboard" note="reserved (no layout shift)" />

        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Small business pricing, verified
          </h2>
          <p className="mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            Lowest published plan per team size with annual billing, checked on each vendor&rsquo;s
            pricing page July 2026. Month-to-month runs higher.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="tnum w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Tool', '1 user', 'Up to 5 users', 'Best for'].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.tool}
                    className={
                      r.highlight
                        ? 'bg-orange-50 dark:bg-orange-500/10'
                        : 'border-t border-slate-100 dark:border-slate-800'
                    }
                  >
                    <td className={`py-[14px] pl-[22px] pr-4 text-[14.5px] font-bold text-slate-900 dark:text-white ${r.highlight ? 'border-l-[3px] border-orange-500' : ''}`}>
                      {r.tool}
                    </td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.oneUser}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.fiveUsers}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>What a small service business actually needs</h2>
          <p>
            Small teams need five things working on day one: scheduling with drag-and-drop
            dispatch, quotes a customer can approve from their phone, invoicing the moment a job
            closes, card and bank payments in the field, and a mobile app techs will actually use.
            Jobber and Housecall Pro include all five on every plan. What you do not need yet:
            multi-location reporting, custom API integrations, dedicated success managers, and the
            other enterprise features that custom-quoted platforms price in. Buying headroom you
            will not use for two years is the most common small-business software mistake in this
            category.
          </p>

          <h2>The plan-gating traps to check before you buy</h2>
          <p>
            Entry plans are real but thinner than the marketing suggests, and the two published
            vendors gate different things. On <strong>Jobber Core</strong> ($29/month annual) you
            get booking and a website, but no QuickBooks sync (Connect and up) and no two-way SMS
            (Grow and up). On <strong>Housecall Pro Basic</strong> ($59/month annual) you get
            review management and customer texting, but QuickBooks starts on Essentials. If
            accounting sync matters, the honest entry prices are $99/month (Jobber Connect,
            QuickBooks Online only) and $149/month (Housecall Pro Essentials, Online and Desktop).
            The full version-by-version breakdown is in our{' '}
            <Link href="/quickbooks">QuickBooks compatibility guide</Link>.
          </p>

          <h2>When to skip the small-business tools</h2>
          <p>
            If you are already running 10 or more technicians, doing commercial work with complex
            job costing, or managing multiple locations, evaluate the mid-market and enterprise
            tier: Workiz and FieldPulse in the middle, ServiceTitan at the top. All are
            custom-quoted, which is itself a signal: their sales process assumes a bigger buyer.
            Our <Link href="/by-size">guide by business size</Link> covers that transition, and
            the <Link href="/compare">full comparison</Link> rates all six platforms side by side.
            If budget is the constraint, see what is genuinely{' '}
            <Link href="/free">free in FSM software</Link> first; the honest answer is very
            little, but the no-card trials are real.
          </p>
        </div>

        <AdUnit slot="0000000002" format="rectangle" note="in-content" />

        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Frequently asked questions
          </h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line for small service businesses">
            Start with the two vendors that publish prices. Solo and cost-first: Jobber Core at
            $29/month billed annually. Want reviews and texting included at entry, or you run
            QuickBooks Desktop: Housecall Pro. Need accounting sync from day one: budget $99 to
            $149/month, not $29. Run both 14-day trials on real jobs in the same week and the
            decision usually makes itself.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare/jobber-vs-housecall-pro" className="text-orange-600 hover:text-orange-800">Jobber vs Housecall Pro →</Link>
            <Link href="/quickbooks" className="text-orange-600 hover:text-orange-800">QuickBooks compatibility →</Link>
            <Link href="/by-industry" className="text-orange-600 hover:text-orange-800">Browse by industry →</Link>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Sources</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
              {[
                { name: 'Jobber pricing (Core, Connect, trial terms)', url: 'https://www.getjobber.com/pricing/' },
                { name: 'Housecall Pro pricing (Basic, Essentials, trial terms)', url: 'https://www.housecallpro.com/pricing/' },
                { name: 'Workiz pricing (custom quote)', url: 'https://www.workiz.com/pricing-plans/' },
                { name: 'FieldPulse pricing (custom quote, demo-first)', url: 'https://www.fieldpulse.com/pricing' },
                { name: 'ServiceTitan pricing (custom quote)', url: 'https://www.servicetitan.com/pricing' },
                { name: 'Commusoft plans (license model, 6+ staff)', url: 'https://www.commusoft.com/en-us/plans/' },
              ].map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="nofollow noopener" className="hover:text-orange-600">
                    {s.name}
                  </a>{' '}
                  <span className="text-slate-400">· checked 2026-07-08</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <AdUnit slot="0000000003" format="leaderboard" note="footer" />
      </div>
    </>
  )
}
