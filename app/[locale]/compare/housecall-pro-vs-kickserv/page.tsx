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
 * /compare/housecall-pro-vs-kickserv: targets "housecall pro vs kickserv". No GSC data for this topic yet.
 *
 * Kickserv facts come from /pricing/kickserv and the batch 14 research, all checked on Kickserv's own
 * pages on 2026-11-24 (pricing, payments, help center, Terms of Service last modified 2024-08-21). The
 * pricing page does not label whether $60/$119/$199 is the monthly or the annual rate; the page says so.
 * Kickserv's free plan, Flex ($19 only in a 2022 blog) and Premium have no current published price and
 * are not priced here. Housecall Pro facts reuse the site's verified pages (pricing page and plan data
 * 2026-11-19, help center 2026-11-17 to 11-24, QuickBooks page 2026-10-24); www.housecallpro.com was not
 * refetched. Not used: Housecall Pro's vehicle GPS price (our pricing page does not state one), HCP
 * Assist, and any introductory offers. Team-size totals are arithmetic on published prices. Nothing
 * tested hands-on.
 */

const PATH = '/compare/housecall-pro-vs-kickserv'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Housecall Pro vs Kickserv (2026): Team Pricing, Fees and QuickBooks'
const DESCRIPTION =
  'Housecall Pro caps plans at 1, 5 and 8 users; Kickserv sells 5, 10 and 20 users from $60 a month. Compare cost by team size, fees, QuickBooks and terms.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/housecall-pro-vs-kickserv',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Housecall Pro vs Kickserv', href: PATH },
]

const rows: { feature: string; hcp: string; ks: string }[] = [
  { feature: 'Price', hcp: 'Basic $59, Essentials $149, MAX $299 per month billed annually; $79, $189 and $329 month to month', ks: 'Start $60, Run $119, Scale $199 a month; “Save 20% with annual subscription”, but the page does not say whether the shown price is the monthly or the annual rate' },
  { feature: 'Users per plan', hcp: '1 (Basic), up to 5 (Essentials), up to 8 (MAX); $35 a month per extra user on MAX only', ks: '5 (Start), 10 (Run), 20 (Scale); no extra-user price or plan above 20 users published' },
  { feature: 'Cost for 5 users', hcp: '$149 (Essentials, billed annually)', ks: '$60 (Start)' },
  { feature: 'Cost for 10 users', hcp: 'About $369 (MAX plus 2 users at $35), billed annually', ks: '$119 (Run)' },
  { feature: 'Cost for 20 users', hcp: 'About $719 (MAX plus 12 users at $35), if that rate applies', ks: '$199 (Scale)' },
  { feature: 'Free trial', hcp: '14 days with MAX features, no credit card', ks: '30 days on every plan' },
  { feature: 'Contract and cancellation', hcp: 'Says it does not require long-term contracts', ks: 'Monthly or annual term that renews automatically; annual cannot switch to monthly before renewal; written notice takes effect at the end of the term; fees non-refundable' },
  { feature: 'Your data when you leave', hcp: 'Admins can export Customers and Jobs lists (sent by email); data is kept if the trial expires', ks: 'Cancelling permanently deletes customer and job records; export in Account and Billing settings first, or switch to the free plan to keep data' },
  { feature: 'Routing', hcp: 'Routes from Essentials; Optimize by Drive Time on MAX', ks: 'Dispatch mapping and GPS check-ins from Run; no route optimization listed' },
  { feature: 'Service plans and recurring work', hcp: 'Recurring Service Plans on MAX', ks: '“Repeat this job” for recurring jobs; no memberships or service agreements listed' },
  { feature: 'Phone and AI answering', hcp: 'Voice add-on from $45 a month (call tracking) or $65 (VoIP), plus overages; CSR AI listed as an add-on without a price', ks: 'No phone system or AI answering; lists the Nexa 24/7 live answering service as a partner, 10% off for Kickserv customers' },
  { feature: 'Payment fees', hcp: '2.59% in person, 2.99% online invoice, 3.49% keyed, card on file or Amex; ACH 1%; instant payout +1%', ks: '2.9% Tap to Pay, 3.9% card not present; ACH 1% + $0.30; instant payout +1%' },
  { feature: 'QuickBooks', hcp: 'Plan data lists QuickBooks Online and Desktop on Essentials; not on Basic', ks: 'QuickBooks Online from Start; Desktop $50 a month or $480 a year, listed on Run, including Mac' },
  { feature: 'Offline', hcp: 'View only: jobs for today and the next 2 days, up to 10 a day; changes, payments and job completion need a connection', ks: 'Changelog mentions offline functionality; scope and date not stated' },
]

const faqs = [
  {
    question: 'Is Kickserv cheaper than Housecall Pro?',
    answer:
      'For teams of two or more, yes, on published prices. Kickserv lists $60 a month for 5 users, $119 for 10 and $199 for 20. Housecall Pro is $149 a month billed annually for up to 5 users and $299 for up to 8, plus $35 per extra user on MAX. For one user, Housecall Pro Basic at $59 billed annually is about the same as Kickserv Start at $60, which covers 5 users.',
  },
  {
    question: 'Is Kickserv’s $60 a month the monthly or the annual price?',
    answer:
      'Kickserv’s pricing page does not say. It shows $60, $119 and $199 a month next to “Save 20% with annual subscription” without labelling which billing option the price belongs to. Check the total at checkout before you compare it with Housecall Pro’s annual or month-to-month rates.',
  },
  {
    question: 'Which is better for QuickBooks Desktop?',
    answer:
      'Both list it. Housecall Pro’s pricing-page plan data lists QuickBooks Online and Desktop on Essentials ($149 a month billed annually), though its QuickBooks page does not name the plan, so confirm it. Kickserv includes QuickBooks Online from Start and charges $50 a month or $480 a year for Desktop, listed on Run, and says it works with every version including Mac.',
  },
  {
    question: 'Does Kickserv have AI call answering like Housecall Pro?',
    answer:
      'No. Kickserv lists no phone system or AI answering and points customers to the Nexa 24/7 live answering service, with 10% off. Housecall Pro sells a Voice add-on from $45 a month and lists CSR AI as an add-on without a published price; its help articles disagree on whether CSR AI is free and whether booking is live, so ask in writing.',
  },
  {
    question: 'What happens to my data if I cancel Kickserv?',
    answer:
      'Kickserv’s help center says cancelling permanently deletes your account information, including customer and job records. Export from the Account and Billing settings first, or switch to the free plan to keep your records. Its terms make cancellation effective at the end of the current monthly or annual term.',
  },
  {
    question: 'Which has route optimization?',
    answer:
      'Housecall Pro, on MAX only, through Optimize by Drive Time; Essentials adds route grouping. Kickserv lists dispatch mapping and GPS check-ins from Run but no route optimization.',
  },
]

const sources = [
  { name: 'Housecall Pro pricing (plans, users, MAX extra users, trial, contracts, add-ons, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro QuickBooks integration (Online and Desktop)', url: 'https://www.housecallpro.com/quickbooks/', checked: '2026-10-24' },
  { name: 'Housecall Pro help: payment processing options and fees', url: 'https://help.housecallpro.com/en/articles/2046930-housecall-pro-payment-processing-options', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Instapay FAQ', url: 'https://help.housecallpro.com/en/articles/1801050-instapay-faq', checked: '2026-11-20' },
  { name: 'Housecall Pro help: Voice FAQs (pricing)', url: 'https://help.housecallpro.com/en/articles/6666356-voice-faqs', checked: '2026-11-21' },
  { name: 'Housecall Pro help: CSR AI overview', url: 'https://help.housecallpro.com/en/articles/9740104-csr-ai-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: AI Team overview', url: 'https://help.housecallpro.com/en/articles/9311875-ai-team-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: Optimize by Drive Time (MAX)', url: 'https://help.housecallpro.com/en/articles/14093813-optimize-by-drive-time', checked: '2026-11-24' },
  { name: 'Housecall Pro help: offline mode on mobile', url: 'https://help.housecallpro.com/en/articles/17032352-offline-mode-on-mobile', checked: '2026-11-17' },
  { name: 'Housecall Pro help: import and export jobs and customers', url: 'https://help.housecallpro.com/en/articles/6797101-how-to-import-export-jobs-and-customers', checked: '2026-11-21' },
  { name: 'Kickserv pricing (plans, users, annual saving, trial, features)', url: 'https://www.kickserv.com/pricing', checked: '2026-11-24' },
  { name: 'Kickserv payments integration (Tap to Pay, card not present, instant payout)', url: 'https://www.kickserv.com/integrations/payments', checked: '2026-11-24' },
  { name: 'Kickserv help: ACH payments (1% + $0.30)', url: 'https://help.kickserv.com/article/94-ach-payments', checked: '2026-11-24' },
  { name: 'Kickserv help: connect to QuickBooks Desktop ($50 a month or $480 a year)', url: 'https://help.kickserv.com/article/8-connect-to-quickbooks-desktop', checked: '2026-11-24' },
  { name: 'Kickserv integrations (QuickBooks Desktop, every version including Mac)', url: 'https://www.kickserv.com/integrations', checked: '2026-11-24' },
  { name: 'Kickserv Terms of Service (last modified August 21, 2024)', url: 'https://www.kickserv.com/terms', checked: '2026-11-24' },
  { name: 'Kickserv help: how to cancel (free plan, data deletion)', url: 'https://help.kickserv.com/article/61-how-do-i-cancel-my-account', checked: '2026-11-24' },
  { name: 'Kickserv help: settings (data export)', url: 'https://help.kickserv.com/article/38-settings', checked: '2026-11-24' },
  { name: 'Kickserv help: jobs (repeat this job)', url: 'https://help.kickserv.com/article/32-jobs', checked: '2026-11-24' },
  { name: 'Kickserv partnerships (Nexa 24/7 Answering Service)', url: 'https://www.kickserv.com/partnerships', checked: '2026-11-24' },
  { name: 'Kickserv changelog (offline functionality)', url: 'https://changelog.kickserv.com/', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function HousecallProVsKickservPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/housecall-pro-vs-kickserv"
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
            Housecall Pro vs Kickserv: <span className="text-orange-400">feature tiers vs team-size plans</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Price by team size, trials, terms, data on cancellation, routing, phones, payment fees and
            QuickBooks, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            <strong>Kickserv</strong> costs less for almost any team: $60 a month for 5 users, $119 for 10
            and $199 for 20, though its pricing page does not say whether those are monthly or annual rates.{' '}
            <strong>Housecall Pro</strong> charges $149 a month billed annually for up to 5 users and $299 for
            up to 8, plus $35 per extra user on MAX. What the extra money buys is documented: route
            optimization and Recurring Service Plans on MAX, a Voice phone add-on and CSR AI. Kickserv lists
            none of those, charges $50 a month for QuickBooks Desktop, and deletes your records if you cancel,
            so export first.
          </p>
        </AnswerBlock>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Housecall Pro vs Kickserv at a glance</h2>
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
                  <th scope="col" className="p-3.5">Kickserv</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((r) => (
                  <tr key={r.feature} className="align-top">
                    <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.feature}</th>
                    <td className="p-3.5">{r.hcp}</td>
                    <td className="p-3.5">{r.ks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="pricing">Two pricing models: feature tiers vs user bundles</h2>
          <p>
            Housecall Pro ties users to feature tiers. Basic is $59 a month billed annually ($79 month to
            month) for one user, Essentials $149 ($189) for up to five, and MAX $299 ($329) for up to eight.
            Only MAX lists an extra-user price, $35 a month, so a second user on Basic or a sixth on
            Essentials has no published price. Every plan is in our{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link> guide.
          </p>
          <p>
            Kickserv sells user bundles: Start covers 5 users for $60 a month, Run 10 users for $119 and Scale
            20 users for $199. Its pricing page adds “Save 20% with annual subscription” but does not label
            whether the price it shows is the month-to-month rate or the annual rate, so the figures below
            compare Kickserv’s listed price with Housecall Pro’s billed-annually price. Kickserv publishes no
            price for extra users or teams above 20. Details are in our{' '}
            <Link href="/pricing/kickserv" className={A}>Kickserv pricing</Link> guide.
          </p>
          <ul>
            <li><strong>1 user:</strong> Housecall Pro Basic $59; Kickserv Start $60 (5 users included).</li>
            <li><strong>5 users:</strong> Housecall Pro Essentials $149; Kickserv Start $60.</li>
            <li><strong>10 users:</strong> Housecall Pro MAX plus two users, about $369; Kickserv Run $119.</li>
            <li><strong>20 users:</strong> Housecall Pro MAX plus 12 users, about $719 if the $35 rate applies to each; Kickserv Scale $199.</li>
          </ul>
          <p>
            Kickserv also runs Kickserv Kickback, an ongoing 5% discount on monthly fees if you process a
            monthly minimum in online payments ($1,000 on Start, $2,000 on Run, $3,000 on Scale).
          </p>

          <h2 id="terms">Trials, terms and your data</h2>
          <p>
            Housecall Pro offers a 14-day trial with MAX features and no credit card, says it does not require
            long-term contracts, and keeps your data if the trial expires. Its help center says Admins can
            export the Customers and Jobs lists, with the file sent by email. Kickserv offers a 30-day trial on
            every plan. Its Terms of Service set a monthly or annual term that renews automatically, do not
            allow an annual term to switch to monthly before renewal, and make written cancellation effective
            at the end of the current term, with payment authorization cancelled at least 15 days before the
            next billing date. Fees are non-refundable. Its help center warns that cancelling permanently
            deletes customer and job records, so export from Account and Billing settings, or switch to the
            free plan to keep your data.
          </p>

          <h2 id="routing">Routing and recurring work</h2>
          <p>
            Housecall Pro adds routes on Essentials and Optimize by Drive Time on MAX, and puts Recurring
            Service Plans on MAX. Kickserv lists dispatch mapping and GPS check-ins from Run, with no route
            optimization, and handles repeat visits with a “Repeat this job” button rather than a membership
            module. See our{' '}
            <Link href="/guides/route-optimization-software" className={A}>route optimization guide</Link>.
          </p>

          <h2 id="phones-ai">Phones and AI answering</h2>
          <p>
            Housecall Pro sells Voice from $45 a month for call tracking or $65 for VoIP with call tracking,
            plus overages, and lists CSR AI, which answers and summarizes calls, as an add-on without a price.
            Its help articles disagree on whether the AI Team is free and whether CSR AI booking is live, so
            get both in writing. Kickserv has no phone system or AI answering; it lists the Nexa 24/7 live
            answering service as a partner, with 10% off for Kickserv customers. Compare options in our{' '}
            <Link href="/guides/ai-answering-service-for-contractors" className={A}>AI answering guide</Link>.
          </p>

          <h2 id="payments">Payment fees</h2>
          <p>
            Housecall Pro charges 2.59% for cards in person, 2.99% when a customer pays an invoice online and
            3.49% for keyed, saved, American Express and commercial cards, with ACH at 1%. Kickserv charges
            2.9% with Tap to Pay and 3.9% for card-not-present payments, the same on every plan, with ACH at
            1% + $0.30. Both add 1% for instant payouts. On a $1,000 invoice paid online, that is $29.90 with
            Housecall Pro and $39 with Kickserv; by ACH, $10 and $10.30.
          </p>

          <h2 id="quickbooks">QuickBooks and offline use</h2>
          <p>
            Housecall Pro’s pricing-page plan data lists QuickBooks Online and Desktop on Essentials, not
            Basic; its QuickBooks page confirms Desktop support but does not name the plan, so confirm it for
            your plan. Kickserv includes QuickBooks Online from Start and charges $50 a month or $480 a year to
            sync with Desktop, listed on Run, and says it works with every version including Mac. Offline,
            Housecall Pro’s app is view only for today and the next two days; Kickserv’s changelog mentions
            offline functionality without saying what works. See our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>.
          </p>

          <h2 id="which-to-choose">Which should you choose?</h2>
          <ul>
            <li><strong>Team of 2 to 20 on a tight budget:</strong> Kickserv, at $60 for 5, $119 for 10 or $199 for 20.</li>
            <li><strong>Route optimization or maintenance memberships:</strong> Housecall Pro MAX.</li>
            <li><strong>Phone system or AI call answering in the same tool:</strong> Housecall Pro.</li>
            <li><strong>QuickBooks Desktop on a Mac:</strong> Kickserv says its Desktop sync works on Mac, for $50 a month.</li>
            <li><strong>Want to try before committing:</strong> Kickserv’s trial is 30 days; Housecall Pro’s is 14 days with no long-term contract after.</li>
          </ul>
          <p>
            Looking wider? See <Link href="/compare/housecall-pro-alternatives" className={A}>Housecall Pro alternatives</Link>{' '}
            and <Link href="/compare/kickserv-alternatives" className={A}>Kickserv alternatives</Link>.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line: Housecall Pro vs Kickserv">
            Kickserv is the low-cost pick for teams of 5 to 20 that need scheduling, invoicing and QuickBooks
            but not routing or AI answering; confirm whether its price is monthly or annual and export your
            data before you ever cancel. Housecall Pro costs more per user but documents route optimization,
            service plans, phones and AI on published tiers with no long-term contract. Our{' '}
            <Link href="/how-we-review" className={A}>review method</Link> explains why we show only prices
            vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/pricing/housecall-pro" className="text-orange-600 hover:text-orange-800">Housecall Pro pricing →</Link>
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
