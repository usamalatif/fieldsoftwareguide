import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { staticRouteLastmod } from '@/lib/routes'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { CalloutBox } from '@/components/CalloutBox'
import { AuthorBio } from '@/components/AuthorBio'
import { AdUnit } from '@/components/AdUnit'
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

/**
 * /free/ — deep page. Target: "field service management software free" (590 vol, KD 5),
 * "free field service management software" (390 vol, KD 5).
 * Every fact verified 2026-07-08 on the vendor's own site. The citable original finding:
 * NONE of the six major FSM vendors offers a free plan; the only real free-forever FSM tier is Odoo's
 * One App Free (unlimited users). Connecteam is free to 10 users but has no invoicing.
 * 2026-10-24: Odoo, Connecteam, Jobber, Housecall Pro and Workiz free/trial terms rechecked.
 * 2026-11-10: ServiceTitan, FieldPulse and Commusoft trial wording corrected. ServiceTitan's
 * pricing page lists demos and no trial. FieldPulse offers a free demo; its pricing FAQ answer
 * on trials could not be read, so current trial terms are unconfirmed. Commusoft's plans page
 * advertises a free trial without stating signup, length or eligibility.
 * 2026-11-19: all rows rechecked; added Zoho FSM and ServiceM8 free plans (the "only Odoo"
 * claim no longer holds), FieldPulse now says it has no free trial, added adjacent free tools
 * (Fieldwire, MaintainX, Square Appointments). Held until after the Dec 9 GSC review.
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
      'Yes, with limits. Zoho FSM is free for up to 20 users and 30 appointments a month, ServiceM8 is free for 1 user and 30 jobs a month, and Odoo is free with unlimited users if Field Service is your only Odoo app. None of the six major platforms (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, Commusoft) has a free plan.',
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
      'Jobber and Housecall Pro offer 14-day trials and Workiz a 7-day trial, all without a credit card. Zoho FSM offers a 15-day no-card trial and ServiceM8 a 14-day trial. ServiceTitan lists demos and no trial, and FieldPulse says it does not offer a free trial. Commusoft advertises a free trial without stated terms.',
  },
  {
    question: 'What is the best free field service software for a small business?',
    answer:
      'A solo operator doing up to 30 jobs a month can run on ServiceM8 Free. A small team with up to 30 appointments a month can use Zoho FSM Free, which includes estimates, dispatch and invoicing. Connecteam is free for up to 10 users but has no invoicing. Busier shops should trial Jobber or Housecall Pro for 14 days.',
  },
  {
    question: 'Is there open-source field service management software?',
    answer:
      'Partly. Odoo Community is open source and free to self-host, but Odoo’s own Field Service app is Enterprise-only — community FSM modules come from third parties (OCA). ERPNext is fully open source and free to self-host, but covers field service only indirectly through assets and maintenance visits. For most teams, Odoo’s cloud One App Free tier is the more practical free path.',
  },
  {
    question: 'Is Zoho FSM free?',
    answer:
      'Zoho FSM has a free plan for up to 20 users with up to 30 appointments a month. Its pricing page lists estimates, work orders, the dispatch console, invoicing and payments, and the mobile app on the free plan. When the trial ends, the account moves to the free plan.',
  },
  {
    question: 'Does ServiceM8 have a free plan?',
    answer:
      'Yes. ServiceM8 Free is $0/month for 1 user and 30 jobs a month, and ServiceM8 says you can create jobs, send quotes and invoices, and manage clients and scheduling on it. The next plan, Starter, is $29/month for unlimited users and 50 jobs a month.',
  },
]

// Facts shared with /llms.txt + /llms-full.txt — edit in content/free-data.ts only.
import { freeRows as rows } from '@/content/free-data'

export default function FreePage() {
  return (
    <>
      <ArticleJsonLd
        headline="Best Free Field Service Management Software (2026)"
        description="Compare genuinely free field service software with limited free plans and vendor trials. See the free tiers that exist and their limits before signing up."
        slug="free"
        // First production deploy 7d7f574 (2026-07-08) shipped this page; lastmod in lib/routes.ts.
        datePublished="2026-07-08"
        dateModified={staticRouteLastmod['/free']}
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Best free field service management software (2026)
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What “free” actually means in FSM software, verified on every vendor’s own site in
            November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Free field service software does exist in 2026, but every free plan has a cap.{' '}
            <strong>Zoho FSM</strong> is free for up to 20 users and 30 appointments a month, with
            estimates, dispatch and invoicing included. <strong>ServiceM8</strong> is free for one
            user and 30 jobs a month. <strong>Odoo</strong> is free with unlimited users as long as
            Field Service is your only Odoo app. <strong>Connecteam</strong> is free for up to 10
            users but has no invoicing, estimates or payments. None of the six major vendors
            (Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse or Commusoft) has a free plan.
            Jobber and Housecall Pro give 14-day trials without a credit card, Workiz gives 7 days,
            ServiceTitan lists demos only, and FieldPulse says it does not offer a free trial. Paid
            entry points: Jobber from $29/month billed annually ($49 month-to-month), Housecall Pro
            from $59/month billed annually ($79 month-to-month).
          </p>
        </AnswerBlock>

        <AdUnit slot="0000000001" format="leaderboard" note="reserved (no layout shift)" />

        {/* Free plans + trials table */}
        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Free plans and trials, verified
          </h2>
          <p className="mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            Every row checked on the vendor’s own pricing page or FAQ on November 19, 2026.
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
            Four free plans pass verification on the vendor’s own site. Each one has a real catch.
          </p>
          <p>
            <strong>Zoho FSM (Free plan).</strong> Free for up to 20 users, capped at 30
            appointments a month. Its pricing page lists requests, estimates, work orders, a
            dispatch console, service reports, invoicing and payments, and the mobile app on the
            free plan. Unused appointments do not carry over to the next month. The catch: 30
            appointments a month is about one a day, so it fits a small or seasonal operation, not
            a busy shop.
          </p>
          <p>
            <strong>ServiceM8 (Free plan).</strong> $0 a month for one user and 30 jobs a month.
            ServiceM8 says you can create jobs, send quotes and invoices, and manage clients and
            scheduling on it, and that accepting card payments earns bonus jobs. The catch: it is
            one user only. Starter, at $29 a month, adds unlimited users and 50 jobs a month.
          </p>
          <p>
            <strong>Odoo (One App Free).</strong> Odoo’s cloud plan makes your first app free
            forever with unlimited users, including the apps it depends on. Field Service is still
            documented as an Odoo 19 app, although Odoo’s marketing site now sends its Field Service
            page to the Planning app. You pay only when you install a second app; paid plans are
            billed per user, so check Odoo’s pricing page for the current rate. The catch: it is an
            ERP module, not a trades-focused product, so expect more setup than Jobber or Housecall
            Pro and no flat-rate pricebooks or trade workflows.
          </p>
          <p>
            <strong>Connecteam (Small Business Plan).</strong> Free for life for up to 10 users,
            covering scheduling, time clock, forms, and team chat. The catch: it is workforce
            management, not full FSM, with <strong>no invoicing, no estimates and no
            payments</strong>, so it pairs with an accounting tool rather than replacing an FSM
            platform.
          </p>
          <p>
            Some tools that used to be free no longer are. Joist says its free plan is no longer
            available and offers a 14-day trial instead, and Workiz’s current pricing page lists no
            free plan.
          </p>

          <h2>Free tools that are close to field service software</h2>
          <p>
            These free plans are built for a neighboring job. They can cover part of the work, but
            none is a full FSM tool for a service business.
          </p>
          <p>
            <strong>Fieldwire Basic</strong> is free for 5 users, 3 projects and 100 sheets. It is
            built for construction teams managing plans and tasks, not for scheduling service
            calls and invoicing customers. <strong>MaintainX Basic</strong> is free forever with
            unlimited work orders, but only 2 active repeating work orders. It is built for
            in-house maintenance teams rather than contractors who bill customers.{' '}
            <strong>Square Appointments Free</strong> is $0 a month per location for solo
            professionals who take bookings and payments. It handles booking and payments only,
            with card fees of 2.6% + 15¢ in person and 3.3% + 30¢ online.
          </p>

          <h2>Best free trials (exact terms, verified)</h2>
          <p>
            For most field service businesses, a trial of a real FSM tool beats a stripped-down free
            tier. The verified terms as of November 2026:
          </p>
          <p>
            <strong>Jobber — 14 days</strong>, full access to the top-tier Grow plan, no credit card
            required. <strong>Housecall Pro — 14 days</strong>, full access to its MAX plan, no
            credit card. <strong>Workiz — 7 days</strong>, all features, no credit card. The other
            three are different. <strong>ServiceTitan</strong>&rsquo;s pricing page offers demos and
            lists no trial. <strong>FieldPulse</strong> says on its pricing page that it does not
            offer a free trial and offers a demo instead. <strong>Commusoft</strong> advertises a
            free trial, but its plans page does not say how to sign up, how long it lasts, or who is
            eligible (it is built for businesses with six or more staff). Among the free-plan tools,{' '}
            <strong>Zoho FSM</strong> gives a 15-day trial without a card (its FAQ says 14 days),
            then moves the account to the free plan, and <strong>ServiceM8</strong> gives a 14-day
            trial. If you want to test software on real jobs this week, Jobber, Housecall Pro, and
            Workiz are the confirmed no-card trials among the major vendors.
          </p>

          <h2>Free field service software for small business: which path fits?</h2>
          <p>
            <strong>You work alone and do up to 30 jobs a month:</strong> ServiceM8 Free covers
            jobs, quotes and invoices for one user. <strong>You are a small team with a light
            schedule:</strong> Zoho FSM Free covers up to 20 users and 30 appointments a month,
            including estimates, dispatch and invoicing.{' '}
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
            The free tiers cap the exact things a growing field service business needs: Zoho FSM
            stops at 30 appointments a month, ServiceM8 at one user and 30 jobs, Connecteam at 10
            users with no invoicing, and Odoo’s free tier ends the moment you need a second app
            (inventory, CRM, accounting). Paid entry plans are genuinely cheap at the
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
            If you truly need $0 software, start with ServiceM8 Free (one user, 30 jobs a month) or
            Zoho FSM Free (up to 20 users, 30 appointments a month). Odoo is free with unlimited users
            if Field Service is your only Odoo app, and Connecteam works for scheduling-only needs up
            to 10 users. If you need trade features such as flat-rate pricing and maintenance
            agreements, none of the six major vendors has a free plan, so use a no-card trial: 14
            days on Jobber or Housecall Pro.
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
                { name: 'Jobber pricing (trial + plans)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-19' },
                { name: 'Housecall Pro pricing (trial + plans)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
                { name: 'Workiz pricing (7-day trial FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-19' },
                { name: 'ServiceTitan pricing (demos; no trial listed)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-19' },
                { name: 'FieldPulse pricing (FAQ: no free trial; demo instead)', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-19' },
                { name: 'Commusoft plans (license model; free trial advertised)', url: 'https://www.commusoft.com/en-us/plans/', checked: '2026-11-19' },
                { name: 'Zoho FSM pricing (free plan: 20 users, 30 appointments/month)', url: 'https://www.zoho.com/fsm/pricing.html', checked: '2026-11-19' },
                { name: 'ServiceM8 pricing (free plan: 1 user, 30 jobs/month)', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-19' },
                { name: 'Odoo pricing (One App Free: any app, unlimited users)', url: 'https://www.odoo.com/pricing', checked: '2026-11-19' },
                { name: 'Odoo 19 Field Service documentation', url: 'https://www.odoo.com/documentation/19.0/applications/services/field_service.html', checked: '2026-11-19' },
                { name: 'Connecteam pricing (free Small Business Plan)', url: 'https://connecteam.com/pricing/', checked: '2026-11-19' },
                { name: 'Joist pricing (free plan no longer available)', url: 'https://www.joist.com/pricing/', checked: '2026-11-19' },
                { name: 'Fieldwire pricing (Basic: 5 users, 3 projects, 100 sheets)', url: 'https://www.fieldwire.com/pricing/', checked: '2026-11-19' },
                { name: 'MaintainX pricing (Basic free forever)', url: 'https://www.getmaintainx.com/pricing', checked: '2026-11-19' },
                { name: 'Square Appointments pricing (Square Free)', url: 'https://squareup.com/us/en/appointments/pricing', checked: '2026-11-19' },
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
