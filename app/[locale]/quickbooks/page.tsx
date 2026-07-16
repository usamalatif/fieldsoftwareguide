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
 * /quickbooks — target "field service management software quickbooks" (390 vol, KD 21),
 * "field service management software compatible with quickbooks" (170, KD 15),
 * "field service management software for quickbooks" (110, KD 19).
 * Every integration claim verified 2026-07-16 against vendor docs (sources at bottom).
 * Jobber and Housecall Pro plan gating verified 2026-07-08 on their pricing pages.
 * Do not edit the support matrix without re-verifying.
 */

export const metadata = buildMetadata({
  title: 'Field Service Management Software That Works With QuickBooks',
  description:
    'Which FSM tools sync with QuickBooks Online and Desktop, verified July 2026: Jobber, Housecall Pro, ServiceTitan, Workiz, FieldPulse, and Commusoft.',
  slug: 'quickbooks',
  type: 'article',
  modifiedTime: '2026-07-16',
  // 61-char keyword title; the template suffix would push it past Bing's 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'QuickBooks', href: '/quickbooks' },
]

const faqs = [
  {
    question: 'Does Jobber work with QuickBooks Desktop?',
    answer:
      'No. Jobber syncs with QuickBooks Online only, and only from its Connect plan ($99/month billed annually) upward. The $29/month Core plan has no QuickBooks sync at all. If you run QuickBooks Desktop, look at Housecall Pro, ServiceTitan, Workiz, or FieldPulse instead.',
  },
  {
    question: 'What is the cheapest FSM software with QuickBooks sync?',
    answer:
      'For QuickBooks Online, Jobber Connect at $99/month billed annually is the cheapest published plan that includes the sync. For QuickBooks Desktop, Housecall Pro Essentials at $149/month billed annually is the cheapest published option. ServiceTitan, Workiz, and FieldPulse also sync with both but are custom-quoted.',
  },
  {
    question: 'Do the entry plans of Jobber and Housecall Pro include QuickBooks?',
    answer:
      'No, and this catches many buyers. Jobber Core ($29/month annual) and Housecall Pro Basic ($59/month annual) both exclude QuickBooks sync. On both platforms you must step up a tier: Jobber Connect for QuickBooks Online, Housecall Pro Essentials for QuickBooks Online or Desktop.',
  },
  {
    question: 'Which FSM tools support QuickBooks Desktop?',
    answer:
      'Verified as of July 2026: Housecall Pro, ServiceTitan, Workiz, and FieldPulse all document QuickBooks Desktop sync. Jobber supports QuickBooks Online only, and Commusoft lists a QuickBooks Online integration only.',
  },
  {
    question: 'What actually syncs between FSM software and QuickBooks?',
    answer:
      'Typically customers, invoices, and payments flow from the FSM tool into QuickBooks so you never enter them twice. Exact behavior varies: some tools sync products and services or two-way customer edits, others push one way only. Check the vendor help docs for your specific workflow before committing.',
  },
]

/** Verified 2026-07-16 against vendor docs; Jobber/HCP plan gating verified 2026-07-08. */
const matrix: { tool: string; online: string; desktop: string; minPlan: string; highlight?: boolean }[] = [
  { tool: 'Jobber', online: 'Yes', desktop: 'No', minPlan: 'Connect, $99/mo annual' },
  { tool: 'Housecall Pro', online: 'Yes', desktop: 'Yes', minPlan: 'Essentials, $149/mo annual', highlight: true },
  { tool: 'ServiceTitan', online: 'Yes', desktop: 'Yes', minPlan: 'Custom / contact sales' },
  { tool: 'Workiz', online: 'Yes', desktop: 'Yes', minPlan: 'Custom / contact sales' },
  { tool: 'FieldPulse', online: 'Yes', desktop: 'Yes', minPlan: 'Custom / contact sales' },
  { tool: 'Commusoft', online: 'Yes', desktop: 'Not listed', minPlan: 'Custom / contact sales' },
]

export default function QuickBooksPage() {
  return (
    <>
      <ArticleJsonLd
        headline="Field Service Management Software That Works With QuickBooks"
        description="Which FSM tools sync with QuickBooks Online and Desktop, verified July 2026, including the minimum plan each vendor requires for the sync."
        slug="quickbooks"
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
            FSM software that works with <span className="text-orange-400">QuickBooks</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Online vs Desktop support and the minimum plan you actually need, verified on every
            vendor&rsquo;s own documentation in July 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="July 2026">
          <p>
            All six major field service management platforms sync with{' '}
            <strong>QuickBooks Online</strong>, but only four sync with{' '}
            <strong>QuickBooks Desktop</strong>: Housecall Pro, ServiceTitan, Workiz, and
            FieldPulse. Jobber is QuickBooks Online only, and Commusoft lists an Online integration
            only. The bigger catch is plan gating: neither entry plan of the two published-price
            vendors includes the sync. Jobber needs its Connect plan ($99/month billed annually,
            QuickBooks Online only) and Housecall Pro needs Essentials ($149/month billed annually,
            Online and Desktop). So the cheapest published route to QuickBooks Online sync is
            Jobber Connect at $99/month, and the cheapest published route to Desktop sync is
            Housecall Pro Essentials at $149/month. ServiceTitan, Workiz, and FieldPulse support
            both versions but quote pricing per business.
          </p>
        </AnswerBlock>

        <AdUnit slot="0000000001" format="leaderboard" note="reserved (no layout shift)" />

        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            QuickBooks support by FSM tool
          </h2>
          <p className="mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            Verified on each vendor&rsquo;s documentation, July 16, 2026.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="tnum w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Tool', 'QuickBooks Online', 'QuickBooks Desktop', 'Minimum plan for sync'].map((h) => (
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
                {matrix.map((r) => (
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
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.online}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.desktop}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.minPlan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>QuickBooks Online: every major tool supports it</h2>
          <p>
            If you run QuickBooks Online, integration will not narrow your shortlist: Jobber,
            Housecall Pro, ServiceTitan, Workiz, FieldPulse, and Commusoft all document a native
            QuickBooks Online sync. What should narrow it is the plan you need to buy.{' '}
            <strong>Jobber</strong> includes the sync from Connect ($99/month billed annually) and
            up, not on its $29 Core plan. <strong>Housecall Pro</strong> includes it from
            Essentials ($149/month billed annually) and up, not on its $59 Basic plan. The other
            four vendors are custom-quoted, so ask specifically which tier includes accounting
            integrations when you get a quote.
          </p>

          <h2>QuickBooks Desktop: the real dividing line</h2>
          <p>
            Desktop support is where tools drop off the list. Verified against vendor
            documentation: <strong>Housecall Pro</strong> syncs with QuickBooks Desktop from its
            Essentials plan, <strong>ServiceTitan</strong> maintains full QuickBooks Desktop
            documentation alongside Online, <strong>Workiz</strong> documents a QuickBooks Desktop
            connection in its help center, and <strong>FieldPulse</strong> documents a dedicated
            QuickBooks Desktop sync. <strong>Jobber does not support QuickBooks Desktop</strong>{' '}
            in any plan, and <strong>Commusoft</strong> lists only a QuickBooks Online
            integration. If your accountant lives in Desktop and migration is off the table, that
            removes Jobber and Commusoft before you compare anything else.
          </p>

          <h2>How to choose, in practice</h2>
          <p>
            Start from your QuickBooks version, then your team size. QuickBooks Online plus a small
            team: Jobber Connect at $99/month billed annually is the cheapest published path, and
            our <Link href="/compare/jobber-vs-housecall-pro">Jobber vs Housecall Pro comparison</Link>{' '}
            covers the rest of that decision. QuickBooks Desktop plus a small team: Housecall Pro
            Essentials at $149/month billed annually is the cheapest published path. Larger or
            commercial operations on either version: ServiceTitan supports both and is built for
            scale, with Workiz and FieldPulse as mid-market alternatives, all custom-quoted. For
            trade-specific picks, start from your industry in the{' '}
            <Link href="/by-industry">industry guides</Link>.
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
          <CalloutBox tone="verdict" title="Bottom line: FSM software and QuickBooks">
            QuickBooks Online users can pick on features and price, since every major tool syncs
            with it; just budget for the right tier (Jobber Connect $99/month or Housecall Pro
            Essentials $149/month, billed annually). QuickBooks Desktop users have a shorter list:
            Housecall Pro, ServiceTitan, Workiz, or FieldPulse. Confirm the sync tier in writing
            before you sign anything custom-quoted.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/compare/jobber-vs-housecall-pro" className="text-orange-600 hover:text-orange-800">Jobber vs Housecall Pro →</Link>
            <Link href="/by-industry" className="text-orange-600 hover:text-orange-800">Browse by industry →</Link>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Sources</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
              {[
                { name: 'Jobber pricing (Connect plan, QuickBooks Online)', url: 'https://www.getjobber.com/pricing/', checked: '2026-07-08' },
                { name: 'Housecall Pro QuickBooks (Online + Desktop, Essentials plan)', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-07-08' },
                { name: 'ServiceTitan QuickBooks Online docs', url: 'https://help.servicetitan.com/v1/docs/quickbooks-online-1', checked: '2026-07-16' },
                { name: 'ServiceTitan QuickBooks Desktop docs', url: 'https://help.servicetitan.com/docs/quickbooks-desktop-1', checked: '2026-07-16' },
                { name: 'Workiz QuickBooks Online integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-07-16' },
                { name: 'Workiz QuickBooks Desktop help article', url: 'https://help.workiz.com/hc/en-us/articles/33040652195729-Connecting-your-QuickBooks-Desktop-account-to-Workiz', checked: '2026-07-16' },
                { name: 'FieldPulse QuickBooks Online sync docs', url: 'https://help.fieldpulse.com/en/articles/482397-sync-quickbooks-online', checked: '2026-07-16' },
                { name: 'FieldPulse QuickBooks Desktop sync docs', url: 'https://help.fieldpulse.com/en/articles/9307828-sync-quickbooks-desktop', checked: '2026-07-16' },
                { name: 'Commusoft QuickBooks Online integration', url: 'https://www.commusoft.com/en-us/integrations/quickbook-online/', checked: '2026-07-16' },
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
