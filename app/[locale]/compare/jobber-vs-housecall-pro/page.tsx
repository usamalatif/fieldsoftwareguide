import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { CalloutBox } from '@/components/CalloutBox'
import { AuthorBio } from '@/components/AuthorBio'
import { AdUnit } from '@/components/AdUnit'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { getProvider } from '@/lib/providers'

/**
 * /compare/jobber-vs-housecall-pro — target "jobber vs housecall pro" (480 vol, KD 17).
 * Every figure verified 2026-07-08 on the vendors' own sites. Jobber prices were read
 * from the live pricing configurator (Jobber now sells team-size bands: Just me / 2-5 /
 * 6-10 / 11-15 / 16+). Housecall Pro from its pricing page. Fees from each vendor's
 * published rates. Do not edit numbers without re-verifying.
 */

export const metadata = buildMetadata({
  title: 'Jobber vs Housecall Pro — Honest 2026 Comparison',
  description:
    'Jobber vs Housecall Pro with verified July 2026 pricing on both billing bases, payment fees, QuickBooks support, and the real feature differences.',
  slug: 'compare/jobber-vs-housecall-pro',
  type: 'article',
  modifiedTime: '2026-07-08',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Jobber vs Housecall Pro', href: '/compare/jobber-vs-housecall-pro' },
]

const faqs = [
  {
    question: 'Which is cheaper — Jobber or Housecall Pro?',
    answer:
      'For one user, Jobber: Core is $29/month billed annually ($49 month-to-month) vs Housecall Pro Basic at $59/month billed annually ($79 month-to-month). At 5 users they converge: Jobber Connect (5 users) and Housecall Pro Essentials (up to 5) are both $149/month billed annually. Compare at your exact team size — Jobber now prices by team-size band.',
    },
  {
    question: 'Which is better for a solo tradesperson?',
    answer:
      'Jobber Core at $29/month (annual billing) is the cheapest real entry, and it includes online booking and a website builder. The catches: Core has no QuickBooks sync (that starts on Connect) and no two-way SMS (Grow and up). Housecall Pro Basic at $59/month includes review management and customer communication, but QuickBooks starts on Essentials.',
  },
  {
    question: 'Do Jobber and Housecall Pro integrate with QuickBooks?',
    answer:
      'Both — with one real difference. Jobber syncs with QuickBooks Online only, from the Connect plan up. Housecall Pro syncs with both QuickBooks Online and Desktop, from the Essentials plan up. If you run QuickBooks Desktop, Housecall Pro is the only one of the two that supports it.',
  },
  {
    question: 'Do Jobber and Housecall Pro offer free trials?',
    answer:
      'Yes — both give 14 days with no credit card required. Jobber’s trial runs on its Grow plan and Housecall Pro’s on its MAX plan, so in both cases you trial near-top-tier features, not the entry plan you may end up buying.',
  },
  {
    question: 'What are the payment processing fees?',
    answer:
      'Jobber charges a flat 2.9% + 30¢ per card payment (2.7% + 30¢ Tap to Pay) and 1% for ACH. Housecall Pro charges 2.59% card-present, 2.99% for online invoice payments, 3.49% for keyed/saved cards and Amex, and 1% ACH — plus $5/device/month for Tap to Pay. Both offer instant payouts for an extra 1%.',
  },
]

/** Quick side-by-side — every cell verified 2026-07-08 on the vendor's own site. */
const quick: { label: string; jobber: string; hcp: string }[] = [
  { label: 'Entry price (1 user, annual billing)', jobber: '$29/mo (Core)', hcp: '$59/mo (Basic)' },
  { label: 'Entry price (month-to-month)', jobber: '$49/mo', hcp: '$79/mo' },
  { label: '5-user price (annual billing)', jobber: '$149/mo (Connect, 5 users)', hcp: '$149/mo (Essentials, up to 5)' },
  { label: 'Top published plan (annual)', jobber: '$529/mo (Plus, 15 users)', hcp: '$299/mo (MAX, 8 users; +$35/extra user)' },
  { label: 'Card processing', jobber: '2.9% + 30¢ flat', hcp: '2.59% in person · 2.99% online · 3.49% keyed/Amex' },
  { label: 'ACH / bank payment', jobber: '1%', hcp: '1%' },
  { label: 'QuickBooks', jobber: 'Online only (Connect plan +)', hcp: 'Online AND Desktop (Essentials +)' },
  { label: 'Review management', jobber: 'Add-on ($79/mo Marketing Suite) or Plus', hcp: 'Included on Basic' },
  { label: 'Two-way SMS', jobber: 'Grow and Plus only', hcp: 'Customer communication incl. from Basic' },
  { label: 'Online booking', jobber: 'All plans (incl. Core)', hcp: 'All plans + Reserve with Google' },
  { label: 'Website builder', jobber: 'Included on every plan', hcp: 'Paid add-on (Websites)' },
  { label: 'Consumer financing', jobber: 'Wisetack (3.9% contractor cost)', hcp: 'Wisetack (from 3.9%)' },
  { label: 'Offline mode (mobile)', jobber: 'Not documented', hcp: 'Documented (view-only)' },
  { label: 'Free trial', jobber: '14 days, Grow plan, no card', hcp: '14 days, MAX plan, no card' },
]

export default function JobberVsHousecallProPage() {
  const jobber = getProvider('jobber')!
  const hcp = getProvider('housecall-pro')!
  return (
    <>
      <ArticleJsonLd
        headline="Jobber vs Housecall Pro — Honest 2026 Comparison"
        description="Verified pricing on both billing bases, payment fees, QuickBooks support, and the real feature differences between Jobber and Housecall Pro."
        slug="compare/jobber-vs-housecall-pro"
        datePublished="2026-07-08"
        dateModified="2026-07-08"
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />

      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Jobber vs Housecall Pro <span className="text-orange-400">(2026)</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every price and feature below was verified on the vendors’ own sites on July 8, 2026 —
            including Jobber’s new team-size-band pricing.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="July 2026">
          <p>
            <strong>For solo operators and price-sensitive small teams, Jobber wins</strong> — Core
            is $29/month billed annually ($49 month-to-month) vs Housecall Pro Basic at $59/$79, and
            Jobber includes online booking and a website builder on every plan.{' '}
            <strong>For teams that live in QuickBooks Desktop, want review management cheap, or
            need a bigger phone-and-office stack, Housecall Pro wins</strong> — it is the only one
            of the two with QuickBooks Desktop sync, it bundles review management into its $59
            Basic plan (Jobber charges $79/month extra below Plus), and it offers payroll, VoIP,
            and human call-answering add-ons Jobber doesn’t have. At 5 users the prices converge:
            $149/month annual on both (Jobber Connect vs Housecall Pro Essentials). Both run
            14-day full-feature trials with no credit card — trial both on real jobs before
            deciding.
          </p>
        </AnswerBlock>

        <AdUnit slot="0000000001" format="leaderboard" note="reserved (no layout shift)" />

        {/* Quick comparison table */}
        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Quick comparison
          </h2>
          <p className="mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            Verified on getjobber.com and housecallpro.com, July 8, 2026.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="tnum w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['', 'Jobber', 'Housecall Pro'].map((h, i) => (
                    <th key={i} className="px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quick.map((r) => (
                  <tr key={r.label} className="border-t border-slate-100 dark:border-slate-800">
                    <td className="py-[13px] pl-[22px] pr-4 text-[13.5px] font-bold text-slate-900 dark:text-white">{r.label}</td>
                    <td className="px-4 py-[13px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.jobber}</td>
                    <td className="px-4 py-[13px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.hcp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Pricing compared (all tiers, both billing bases)</h2>
          <p>
            <strong>Jobber</strong> now sells plans by team size (Just me / 2–5 / 6–10 / 11–15 /
            16+), with three billing bases. Annual-prepaid rates: Core $29/month (1 user only),
            Connect $99–$299/month (1–15 users), Grow $149–$399/month, Plus $399–$529/month (5–15
            users; not sold for 1 user). Month-to-month runs higher — Core $49, Connect $139–$399,
            Grow $199–$499, Plus $499–$699. There is a middle option: a 12-month commitment billed
            monthly (e.g. Core $39). Extra users are $29/month each, and 16+ teams are quoted by
            sales. Add-ons: Marketing Suite $79/month, AI Receptionist $29/month, Pipeline
            $49/month — all included free on Plus.
          </p>
          <p>
            <strong>Housecall Pro</strong> keeps three flat plans: Basic $59/month annual ($79
            month-to-month, 1 user), Essentials $149/month annual ($189 month-to-month, up to 5
            users), and MAX $299/month annual ($329 month-to-month, up to 8 users, extra users
            $35/month). MAX bundles the Sales Proposal Tool and Recurring Service Plans; other
            add-ons (Payroll, Voice, HCP Assist, Profit Rhino, Websites, vehicle GPS) are priced by
            quote. No long-term contracts required.
          </p>
          <p>
            The practical read: Jobber is cheaper at 1 user ($29 vs $59 annual), the two tie at 5
            users ($149 both), and at 8–10 users Housecall Pro MAX ($299, 8 users) undercuts Jobber
            Grow at 10 users ($299) only if you don’t need Jobber’s Plus-tier extras — while heavy
            add-on users should price Jobber Plus ($399–$529 annual), which includes the marketing
            stack Housecall Pro sells separately.
          </p>

          <h2>Payment processing fees</h2>
          <p>
            <strong>Jobber:</strong> flat 2.9% + 30¢ on cards (2.7% + 30¢ Tap to Pay), 1% ACH, and
            instant payouts for +1% — explicitly including weekends and holidays.{' '}
            <strong>Housecall Pro:</strong> 2.59% card-present, 2.99% for online invoice payments,
            3.49% for keyed/saved-card and all Amex, 1% ACH, Klarna/PayPal pay-later at 4.99%, free
            mobile check deposit, and Instapay at +1% (~30 minutes). Tap to Pay costs an extra
            $5/device/month on Housecall Pro. The headline “as low as 2.59%” is card-present only —
            for emailed invoices paid online, Housecall Pro is 2.99% flat vs Jobber’s 2.9% + 30¢, so
            which is cheaper depends on your average ticket (Jobber wins above roughly a $330
            invoice; Housecall Pro below it).
          </p>

          <h2>Features compared</h2>
          <p>
            <strong>Scheduling &amp; dispatch:</strong> both cover drag-and-drop scheduling and
            dispatch on every plan. Jobber adds routing and GPS tracking from Connect; Housecall Pro
            includes phone-based employee GPS from Essentials, with vehicle GPS/dashcams as a paid
            add-on.
          </p>
          <p>
            <strong>Estimates &amp; quotes:</strong> Jobber quotes support optional add-ons and
            markups in the quote itself (upsell line items are Grow/Plus), with automated follow-ups
            and client-hub approval. Housecall Pro’s good-better-best tiered proposals live in its
            Sales Proposal Tool — free on MAX, an add-on below it.
          </p>
          <p>
            <strong>Invoicing &amp; payments:</strong> both offer Wisetack consumer financing at a
            3.9% contractor cost and instant payouts at +1%. Jobber includes progress invoicing on
            all plans and automatic payments from Connect. Housecall Pro adds BNPL (Klarna/PayPal),
            free mobile check deposit, and tips.
          </p>
          <p>
            <strong>QuickBooks:</strong> the cleanest difference in the whole comparison. Jobber
            syncs with QuickBooks Online only, from Connect up. Housecall Pro syncs with QuickBooks
            Online <em>and</em> Desktop, from Essentials up.
          </p>
          <p>
            <strong>Customer communication &amp; reviews:</strong> Housecall Pro includes review
            management (Google + Facebook dashboard) and customer communication in its $59 Basic
            plan. On Jobber, two-way SMS requires Grow or Plus, and review management requires the
            $79/month Marketing Suite or the Plus plan — the clearest Housecall Pro value win at the
            entry level.
          </p>
          <p>
            <strong>Online booking:</strong> both include consumer-facing online booking on their
            cheapest plans (the old “Housecall Pro owns booking” framing is outdated). Housecall
            Pro’s remaining edge is Reserve with Google — booking directly from Google surfaces.
          </p>
          <p>
            <strong>Mobile app:</strong> Housecall Pro documents offline viewing (schedule and job
            details, no editing) and shows 4.5-star App Store and Google Play ratings on its site.
            Jobber doesn’t document an offline mode and publishes no app-store ratings on its site.
          </p>

          <h2>What one has that the other doesn’t</h2>
          <p>
            <strong>Only Jobber:</strong> AI Receptionist add-on ($29/month, 24/7 AI call and text
            answering), a website builder included on every plan, a custom automation builder
            (Grow/Plus), referral campaigns, and weekend/holiday instant payouts.
          </p>
          <p>
            <strong>Only Housecall Pro:</strong> QuickBooks Desktop sync, native Payroll, a VoIP
            phone system (Voice), human call answering (HCP Assist), a human bookkeeping service
            (Accounting), Profit Rhino flat-rate price books, Reserve with Google, BNPL options,
            vehicle GPS/dashcam add-on, and commissions + customer equipment tracking from
            Essentials.
          </p>
        </div>

        <AdUnit slot="0000000002" format="rectangle" note="in-content" />

        <div className="prose-body mt-10">
          <h2>Choose Jobber if…</h2>
          <p>
            You’re a solo operator or small crew optimizing cost ($29/month annual is the cheapest
            real entry in this comparison), you want a website and online booking included from day
            one, you like a flat, predictable card fee, or you want the marketing stack bundled at
            the top tier (Plus includes what Housecall Pro sells piecemeal).
          </p>
          <h2>Choose Housecall Pro if…</h2>
          <p>
            You run QuickBooks Desktop (Housecall Pro is the only one of the two that syncs with
            it), you want review management and customer texting included at the entry price, you
            take lots of in-person card payments (2.59% beats Jobber’s 2.9% + 30¢), or you want to
            grow into payroll, VoIP, and call answering inside one vendor.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Frequently asked questions
          </h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto mt-4 max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Jobber vs Housecall Pro">
            Solo and cost-first: Jobber ($29/month annual). QuickBooks Desktop, entry-level review
            management, or an office stack (payroll/VoIP/call answering): Housecall Pro. At 5 users
            the price is identical ($149/month annual) — so at that size, pick on QuickBooks flavor
            and which extras you’d otherwise pay for. Both offer 14-day, no-card trials on
            near-top-tier plans; running both for a week on live jobs is the highest-confidence way
            to decide.
          </CalloutBox>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={jobber.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex h-11 items-center rounded-[10px] bg-orange-500 px-5 text-sm font-bold text-white hover:bg-orange-600"
            >
              Visit Jobber →
            </a>
            <a
              href={hcp.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex h-11 items-center rounded-[10px] border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 hover:border-orange-300 dark:bg-slate-900 dark:text-slate-200"
            >
              Visit Housecall Pro →
            </a>
          </div>
          <p className="mt-3 text-[12.5px] text-slate-400">
            Some links are affiliate links — this never affects our analysis. Prices verified July
            8, 2026; Jobber’s banded pricing varies by team size, so confirm at your exact size.
          </p>

          <AuthorBio />

          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">All FSM software compared →</Link>
            <Link href="/free" className="text-orange-600 hover:text-orange-800">Free FSM software →</Link>
            <Link href="/by-industry" className="text-orange-600 hover:text-orange-800">Browse by industry →</Link>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Sources</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
              {[
                { name: 'Jobber pricing (team-size configurator)', url: 'https://www.getjobber.com/pricing/' },
                { name: 'Jobber quotes', url: 'https://www.getjobber.com/features/quotes/' },
                { name: 'Jobber online booking', url: 'https://www.getjobber.com/features/online-booking/' },
                { name: 'Jobber consumer financing (Wisetack)', url: 'https://www.getjobber.com/features/consumer-financing/' },
                { name: 'Jobber Marketing Suite', url: 'https://www.getjobber.com/features/marketing-suite/' },
                { name: 'Housecall Pro pricing', url: 'https://www.housecallpro.com/pricing/' },
                { name: 'Housecall Pro payment processing rates', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options' },
                { name: 'Housecall Pro QuickBooks (Online + Desktop)', url: 'https://www.housecallpro.com/quickbooks/' },
                { name: 'Housecall Pro Sales Proposal Tool', url: 'https://www.housecallpro.com/features/sales-proposal-tool/' },
                { name: 'Housecall Pro review management', url: 'https://www.housecallpro.com/features/review-management/' },
                { name: 'Housecall Pro online booking (Reserve with Google)', url: 'https://www.housecallpro.com/features/online-booking/' },
                { name: 'Housecall Pro mobile app (offline, ratings)', url: 'https://www.housecallpro.com/features/mobile-app/' },
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
