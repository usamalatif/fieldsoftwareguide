import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { CalloutBox } from '@/components/CalloutBox'
import { AuthorBio } from '@/components/AuthorBio'
import { AdUnit } from '@/components/AdUnit'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

/**
 * /free/ — deep page. Target: "field service management software free" (590 vol, KD 5),
 * "free field service management software" (390 vol, KD 5).
 * Every fact verified 2026-07-08 on the vendor's own site. The citable original finding:
 * NONE of the six major FSM vendors offers a free plan; FieldPulse and ServiceTitan
 * offer no self-serve trial at all; the only real free-forever FSM tier is Odoo's
 * One App Free (unlimited users). Connecteam is free to 10 users but has no invoicing.
 * 2026-10-24: Odoo, Connecteam, Jobber, Housecall Pro and Workiz free/trial terms rechecked.
 */

export const metadata = buildMetadata({
  title: 'Best Free Field Service Management Software (2026)',
  description:
    'Compare genuinely free field service software with limited free plans and vendor trials. See the free tiers that exist and their limits before signing up.',
  slug: 'free',
  // 50-char keyword title + suffix would hit 71 chars (Bing limit 70); emit as-is.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Free', href: '/free' },
]

const faqs = [
  {
    question: 'Is there truly free field service management software?',
    answer:
      'Not from the major vendors: as of July 2026, none of the six leading FSM platforms (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) offers a free plan. The only verified free-forever FSM tier is Odoo Field Service (One App Free, unlimited users). Connecteam is free for up to 10 users but has no invoicing or estimates.',
  },
  {
    question: 'Is Jobber free?',
    answer:
      'No. Jobber has no free plan. It offers a 14-day free trial with full access to its Grow plan, no credit card required. Paid plans start at $29/month (Core, 1 user, billed annually) or $49/month month-to-month.',
  },
  {
    question: 'Does Housecall Pro have a free plan?',
    answer:
      'No. Housecall Pro has no free plan. It offers a 14-day free trial with full access to its MAX plan, no credit card required. Paid plans start at $59/month (Basic, 1 user, billed annually) or $79/month month-to-month.',
  },
  {
    question: 'Which FSM tools have free trials — and which don’t?',
    answer:
      'Jobber and Housecall Pro offer 14-day trials and Workiz a 7-day trial, all without a credit card. ServiceTitan and FieldPulse offer no self-serve trial at all — demo only (FieldPulse’s own pricing FAQ says so explicitly) — and Commusoft uses a sales-call motion with no self-serve trial.',
  },
  {
    question: 'What is the best free field service software for a small business?',
    answer:
      'It depends on what you need to do for free. Connecteam is free for up to 10 users but covers scheduling and time tracking, not invoicing. Odoo One App Free gives you Field Service with unlimited users until you add a second Odoo app. If you need quotes, invoices, and payments, a 14-day no-card trial of Jobber or Housecall Pro is the practical free start.',
  },
  {
    question: 'Is there open-source field service management software?',
    answer:
      'Partly. Odoo Community is open source and free to self-host, but Odoo’s own Field Service app is Enterprise-only — community FSM modules come from third parties (OCA). ERPNext is fully open source and free to self-host, but covers field service only indirectly through assets and maintenance visits. For most teams, Odoo’s cloud One App Free tier is the more practical free path.',
  },
]

// Facts shared with /llms.txt + /llms-full.txt — edit in content/free-data.ts only.
import { freeRows as rows } from '@/content/free-data'

export default function FreePage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Best free field service management software (2026)
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What “free” actually means in FSM software — verified on every vendor’s own site, July
            2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="October 2026">
          <p>
            Here is the honest state of free FSM software in 2026: <strong>none of the six major
            vendors — Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, or Commusoft — offers
            a free plan.</strong> The only verified free-forever FSM tier is{' '}
            <strong>Odoo Field Service</strong> (its “One App Free” cloud plan: free with unlimited
            users until you add a second Odoo app). <strong>Connecteam</strong> is free for life for
            up to 10 users, but it covers scheduling and time tracking only — no invoicing,
            estimates, or payments. For everyone else, “free” means a trial: Jobber and Housecall
            Pro give 14 days (no credit card), Workiz 7 days, while ServiceTitan and FieldPulse
            offer no trial at all — demo only. Paid entry points: Jobber from $29/month billed
            annually ($49 month-to-month), Housecall Pro from $59/month billed annually ($79
            month-to-month).
          </p>
        </AnswerBlock>

        <AdUnit slot="0000000001" format="leaderboard" note="reserved (no layout shift)" />

        {/* Free plans + trials table */}
        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Free plans and trials, verified
          </h2>
          <p className="mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            Checked on each vendor’s own pricing page July 8, 2026; Odoo, Connecteam, Jobber,
            Housecall Pro, and Workiz rechecked October 24, 2026.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="tnum w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Tool', 'Free plan?', 'Free trial', 'Paid starts at'].map((h) => (
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
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.freePlan}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.trial}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.paidFrom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Is there genuinely free FSM software?</h2>
          <p>
            Two options pass verification, each with a real catch:
          </p>
          <p>
            <strong>Odoo Field Service (One App Free)</strong> — Odoo’s cloud plan makes your first
            app free forever with unlimited users, and Field Service qualifies. It covers
            scheduling, tasks, worksheets, and invoicing hooks, and you pay only when you add a
            second Odoo app; paid plans are billed per user, so check Odoo’s pricing page for the current
            rate and billing terms. The catch: it’s an ERP module, not a trades-focused product — expect more
            setup than Jobber or Housecall Pro and no flat-rate pricebooks or trade workflows.
          </p>
          <p>
            <strong>Connecteam (Small Business Plan)</strong> — free for life for up to 10 users,
            covering scheduling, time clock, forms, and team chat. The catch: it’s workforce
            management, not full FSM — <strong>no invoicing, no estimates, no payments</strong> — so
            it pairs with an accounting tool rather than replacing an FSM platform.
          </p>
          <p>
            Everything else marketed as “free field service software” failed verification on the
            vendor’s own site: Workiz’s old free Lite plan is gone from its current pricing page,
            ZenMaid starts at $19/month (capped at 40 appointments), and Fieldd starts at $199/month.
          </p>

          <h2>Best free trials (exact terms, verified)</h2>
          <p>
            For most field service businesses, a trial of a real FSM tool beats a stripped-down free
            tier. The verified terms as of July 2026:
          </p>
          <p>
            <strong>Jobber — 14 days</strong>, full access to the top-tier Grow plan, no credit card
            required. <strong>Housecall Pro — 14 days</strong>, full access to its MAX plan, no
            credit card. <strong>Workiz — 7 days</strong>, all features, no credit card. And the
            honest flip side: <strong>ServiceTitan and FieldPulse offer no self-serve trial at
            all</strong> — both are demo-first (FieldPulse’s own pricing FAQ states it plainly), and
            Commusoft runs a scheduled sales call. If you want to test software on real jobs this
            week, that narrows the field to Jobber, Housecall Pro, and Workiz.
          </p>

          <h2>Free field service software for small business: which path fits?</h2>
          <p>
            <strong>You only need scheduling and time tracking for up to 10 people:</strong>{' '}
            Connecteam’s free Small Business Plan covers that, but you will still need a separate
            tool for invoices and estimates. <strong>You will put up with ERP-style setup to pay
            nothing:</strong> Odoo’s One App Free gives you Field Service with unlimited users until
            you add a second app. <strong>You need quotes, invoices, and payments now:</strong> use
            a 14-day trial of Jobber or Housecall Pro on real jobs, then compare the cheapest paid
            plans in our{' '}
            <Link href="/for-small-business">field service software for small business</Link>{' '}
            guide. To see how all six major platforms differ beyond price, use the{' '}
            <Link href="/compare">full FSM software comparison</Link>.
          </p>

          <h2>Free vs paid — what you give up</h2>
          <p>
            The free tiers cap the exact things a growing field service business needs: Connecteam
            stops at 10 users and has no invoicing; Odoo’s free tier ends the moment you need a
            second app (inventory, CRM, accounting). Paid entry plans are genuinely cheap at the
            solo end — Jobber Core is $29/month billed annually — and bring scheduling, dispatch,
            quoting, invoicing, and payments in one place. QuickBooks sync costs more: it starts on
            Jobber Connect and Housecall Pro Essentials (see our{' '}
            <Link href="/quickbooks">QuickBooks compatibility guide</Link>). The realistic path for
            most: run a 14-day trial on real jobs, start on a $29–$79/month single-user plan, and
            revisit as you add techs. See the{' '}
            <Link href="/by-size">FSM software by business size</Link> guide for what matters at
            each stage, or your trade’s guide in <Link href="/by-industry">FSM by industry</Link>.
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
          <CalloutBox tone="verdict" title="Bottom line on free FSM software">
            If you truly need $0 software, Odoo Field Service (One App Free) is the only unlimited
            free FSM tier that survives verification — and Connecteam works for scheduling-only
            needs up to 10 users. If you need real trades features, skip the search for a free plan
            (none of the six major vendors has one) and use the no-card trials: 14 days on Jobber or
            Housecall Pro tells you more than a month on a crippled free tier.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/by-industry" className="text-orange-600 hover:text-orange-800">Browse by industry →</Link>
            <Link href="/by-size" className="text-orange-600 hover:text-orange-800">Browse by team size →</Link>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Sources</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
              {[
                { name: 'Jobber pricing (trial + plans)', url: 'https://www.getjobber.com/pricing/', checked: '2026-10-24' },
                { name: 'Housecall Pro pricing (trial + plans)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-10-24' },
                { name: 'Workiz pricing (7-day trial FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-10-24' },
                { name: 'ServiceTitan pricing (demo only)', url: 'https://www.servicetitan.com/pricing', checked: '2026-07-08' },
                { name: 'FieldPulse pricing (no-trial FAQ)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-07-08' },
                { name: 'Commusoft plans (license model)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-07-08' },
                { name: 'Odoo Field Service (One App Free)', url: 'https://www.odoo.com/app/field-service', checked: '2026-07-08' },
                { name: 'Odoo pricing', url: 'https://www.odoo.com/pricing', checked: '2026-10-24' },
                { name: 'Connecteam pricing (free Small Business Plan)', url: 'https://connecteam.com/pricing/', checked: '2026-10-24' },
              ].map((s) => (
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

        <AdUnit slot="0000000003" format="leaderboard" note="footer" />
      </div>
    </>
  )
}
