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
 * /compare/workiz-alternatives: targets "workiz alternatives" and "workiz competitors".
 * GSC: workiz alternative 1 impression at 55 (site level).
 *
 * Sources: Workiz pricing, phone system, Genius Answering and locksmith pages checked 2026-11-21
 * (help.workiz.com returned 403 earlier and was not retried). New 2026-11-21 checks: Housecall Pro
 * Voice FAQ, ServiceM8 Phone, Service Fusion pricing, FieldPulse Engage, ServiceTitan Phones Pro,
 * Kickserv pricing. Other facts reuse the site's verified pages with their dates;
 * www.housecallpro.com was not refetched. ServiceTitan pricing wording uses its 2026-11-21 page.
 * Nothing tested hands-on. We do not claim why customers leave Workiz.
 */

const PATH = '/compare/workiz-alternatives'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Workiz Alternatives (2026): Phone Systems, Prices and Plans Compared'
const DESCRIPTION =
  'Workiz publishes no prices and puts flat rate and service plans on Ultimate. Compare 7 alternatives on published prices, built-in phone systems and QuickBooks.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'compare/workiz-alternatives',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Compare', href: '/compare' },
  { name: 'Workiz alternatives', href: PATH },
]

type Row = {
  name: string
  price: string
  phone: string
  booking: string
  plans: string
  quickbooks: string
}

const rows: Row[] = [
  {
    name: 'Workiz (for reference)',
    price: 'Not published (“Request pricing”); 7-day trial; annual saves “$400+”',
    phone: 'Phone system with call recording; Genius Phone and Genius Answering listed as sold separately',
    booking: 'Online booking on every plan',
    plans: 'Flat rate, service plans, equipment tracking on Ultimate only',
    quickbooks: 'Online on every plan; its QuickBooks page says Desktop is supported',
  },
  {
    name: 'Housecall Pro',
    price: '$59, $149, $299 per month billed annually (1, 5, 8 users)',
    phone: 'Voice add-on: call tracking from $45 a month, VoIP and call tracking from $65, plus overages',
    booking: 'Online booking from Basic',
    plans: 'Flat rate from Essentials; Recurring Service Plans on MAX',
    quickbooks: 'Online and Desktop listed on Essentials',
  },
  {
    name: 'ServiceM8',
    price: '$0 to $349 per month by jobs; unlimited users from $29',
    phone: 'ServiceM8 Phone add-on: $19, $32 (with AI phone agent) or $119 a month',
    booking: 'Online booking on all plans',
    plans: 'Recurring jobs; quote options on all plans',
    quickbooks: 'Online and Xero; Desktop not listed',
  },
  {
    name: 'Service Fusion',
    price: '$220, $339, $552 per month billed annually; unlimited users',
    phone: 'Integrated voice and text on Plus and Pro; ServiceCall.ai add-on',
    booking: 'Not listed on its pricing page',
    plans: 'Recurring invoicing on Pro, add-on below',
    quickbooks: 'Online and Desktop',
  },
  {
    name: 'Jobber',
    price: 'From $29 per month billed annually (1 user)',
    phone: 'No business phone system documented; AI Receptionist add-on',
    booking: 'Online booking on every plan',
    plans: 'Recurring jobs; no flat-rate price book documented',
    quickbooks: 'Online only (and Xero)',
  },
  {
    name: 'Kickserv',
    price: '$60 (5 users), $119 (10), $199 (20) per month; 30-day trial',
    phone: 'No phone features on its pricing page',
    booking: 'Embeddable contact form',
    plans: 'Not listed on its pricing page',
    quickbooks: 'Online on Start; Desktop $50 a month on Run',
  },
  {
    name: 'FieldPulse',
    price: 'Not published; seat-based',
    phone: 'Engage VoIP and messaging (paid add-on); Operator AI add-on',
    booking: 'Booking portal',
    plans: 'Maintenance agreements on the schedule',
    quickbooks: 'Online and Desktop 2024 or newer',
  },
  {
    name: 'ServiceTitan',
    price: 'Not published (“Get Pricing”)',
    phone: 'Phones Pro subscription, priced by need',
    booking: 'Call booking; online booking via Scheduling Pro add-on',
    plans: 'Customizable memberships',
    quickbooks: 'Online and Desktop, Sage Intacct, Xero',
  },
]

const cols: { key: keyof Omit<Row, 'name'>; label: string }[] = [
  { key: 'price', label: 'Published price' },
  { key: 'phone', label: 'Phone system' },
  { key: 'booking', label: 'Online booking' },
  { key: 'plans', label: 'Flat rate and service plans' },
  { key: 'quickbooks', label: 'QuickBooks' },
]

const faqs = [
  {
    question: 'How much does Workiz cost?',
    answer:
      'Workiz does not publish prices. Its pricing page shows “Request pricing” on the Standard, Pro and Ultimate plans, offers a 7-day free trial with no credit card, and says annual plans save $400 or more.',
  },
  {
    question: 'Does Workiz include a phone system on every plan?',
    answer:
      'Its own pricing page says both. The FAQ says Workiz offers a built-in phone system on all plans, while the plan table lists Genius Phone and Genius Answering as sold separately. Ask Workiz in writing which phone features your quote includes.',
  },
  {
    question: 'Which Workiz alternatives have a built-in phone system?',
    answer:
      'ServiceM8 Phone costs $19, $32 or $119 a month. Housecall Pro Voice starts at $45 a month for call tracking or $65 for VoIP with call tracking, plus overages. Service Fusion includes integrated voice and text on Plus and Pro. FieldPulse Engage and ServiceTitan Phones Pro are add-ons without published prices.',
  },
  {
    question: 'What is the cheapest Workiz alternative with published prices?',
    answer:
      'ServiceM8 starts at $0 for one user and 30 jobs a month and $29 with unlimited users. Jobber Core is $29 a month billed annually for one user, Housecall Pro Basic $59, and Kickserv $60 a month for five users.',
  },
  {
    question: 'Which alternatives include flat-rate pricing below the top plan?',
    answer:
      'Housecall Pro includes flat-rate pricing from Essentials ($149 a month billed annually for five users), and ServiceTitan lists a pricebook in its Core package. Workiz puts flat rate on Ultimate only, and FieldPulse sells its Pricebook as an add-on.',
  },
  {
    question: 'Which alternatives support QuickBooks Desktop?',
    answer:
      'Housecall Pro lists QuickBooks Desktop on Essentials, Service Fusion supports it on every plan, FieldPulse supports Desktop 2024 or newer, Kickserv charges $50 a month for it on Run, and ServiceTitan supports it. Jobber and ServiceM8 list QuickBooks Online but not Desktop.',
  },
]

const sources = [
  { name: 'Workiz pricing plans (features by plan, trial, phone FAQ)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-21' },
  { name: 'Workiz phone system', url: 'https://www.workiz.com/features/phone-system/', checked: '2026-11-21' },
  { name: 'Workiz Genius Answering', url: 'https://www.workiz.com/features/genius-answering/', checked: '2026-11-21' },
  { name: 'Workiz locksmith software', url: 'https://www.workiz.com/industries/locksmiths/', checked: '2026-11-21' },
  { name: 'Workiz QuickBooks integration', url: 'https://www.workiz.com/integrations/quickbooks/', checked: '2026-11-20' },
  { name: 'Workiz vs Jobber page (plans billed annually at purchase)', url: 'https://www.workiz.com/vs/jobber-alternative/', checked: '2026-11-21' },
  { name: 'Housecall Pro pricing (plans, plan data)', url: 'https://www.housecallpro.com/pricing/', checked: '2026-11-19' },
  { name: 'Housecall Pro help: Voice FAQs (pricing)', url: 'https://help.housecallpro.com/en/articles/6666356-voice-faqs', checked: '2026-11-21' },
  { name: 'Housecall Pro help: importing customers', url: 'https://help.housecallpro.com/en/articles/136068-what-are-the-options-for-importing-my-customers-into-housecall-pro', checked: '2026-11-21' },
  { name: 'ServiceM8 pricing', url: 'https://www.servicem8.com/us/pricing', checked: '2026-11-21' },
  { name: 'ServiceM8 Phone', url: 'https://www.servicem8.com/us/phone', checked: '2026-11-21' },
  { name: 'Service Fusion pricing (integrated voice and text, add-ons)', url: 'https://www.servicefusion.com/pricing', checked: '2026-11-21' },
  { name: 'Jobber pricing', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-21' },
  { name: 'Jobber help: AI Receptionist', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-03' },
  { name: 'Jobber help: QuickBooks integration FAQs', url: 'https://help.getjobber.com/en/articles/quickbooks-integration-faqs/', checked: '2026-11-20' },
  { name: 'Kickserv pricing', url: 'https://www.kickserv.com/pricing', checked: '2026-11-21' },
  { name: 'FieldPulse Engage', url: 'https://www.fieldpulse.com/features/engage', checked: '2026-11-21' },
  { name: 'FieldPulse pricing', url: 'https://www.fieldpulse.com/pricing', checked: '2026-11-20' },
  { name: 'ServiceTitan pricing (Core, Demand AI, Field AI, MAX)', url: 'https://www.servicetitan.com/pricing', checked: '2026-11-21' },
  { name: 'ServiceTitan help: Phones Pro', url: 'https://help.servicetitan.com/docs/phones-pro-1', checked: '2026-11-21' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function WorkizAlternativesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="compare/workiz-alternatives"
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
            Workiz alternatives: <span className="text-orange-400">phone systems, prices and plans compared</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Seven alternatives compared on published prices, built-in calling, online booking, flat
            rate and QuickBooks, from each vendor’s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Workiz does not publish prices, and its pricing page lists flat rate, service plans and
            equipment tracking on Ultimate only. If calls are central to your business,{' '}
            <strong>ServiceM8</strong> publishes its phone add-on at $19 to $119 a month and{' '}
            <strong>Housecall Pro</strong> its Voice add-on from $45 a month plus overages, and{' '}
            <strong>Service Fusion</strong> includes integrated voice and text on Plus and Pro. If
            you want published prices with flat rate below the top plan, Housecall Pro includes it
            from Essentials ($149/month billed annually). <strong>Jobber</strong> is the cheapest
            published start at $29/month but documents no business phone system.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="workiz">What Workiz offers, plan by plan</h2>
          <p>
            Workiz sells three plans, Standard, Pro and Ultimate, all marked “Request pricing”, with a
            7-day trial and savings of $400 or more on annual plans. Every plan includes online
            booking, online payments, estimate deposits, consumer financing, a price book, recurring
            jobs and QuickBooks Online sync. Automations are capped at 5, 10 or 30 by plan. Flat rate,
            service plans, equipment tracking, sales proposals, inventory and the open API are on
            Ultimate only. Its phone system records and transcribes calls and tracks lead sources, and
            its locksmith page describes integrations with Angi, Thumbtack and Google Local Services
            Ads.
          </p>
          <p>
            One point to clarify before you buy: the pricing page’s FAQ says Workiz offers a built-in
            phone system on all plans, while its plan table lists Genius Phone, Genius Answering and
            Genius Marketing as sold separately, with no prices. Its QuickBooks pages also describe the
            sync as two-way in one place and one-way in another.
          </p>

          <h2 id="when-to-stay">When Workiz may still be the better fit</h2>
          <p>
            If you run emergency trades such as locksmith, garage door or appliance repair and depend on
            lead marketplaces, call recording and deposits before dispatch, Workiz documents that
            combination in one product. If your quote covers the phone features you need, switching may
            not save much.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Workiz alternatives compared</h2>
          <p className={SUB}>
            Documented capabilities and published prices only, not a hands-on test or a score. Prices
            are USD standard rates. Sources and check dates are at the end of this page.
          </p>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 lg:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3">Software</th>
                  {cols.map((c) => <th key={c.key} scope="col" className="p-3">{c.label}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {rows.map((t) => (
                  <tr key={t.name} className="align-top">
                    <th scope="row" className="p-3 font-semibold text-slate-900 dark:text-white">{t.name}</th>
                    {cols.map((c) => <td key={c.key} className="p-3">{t[c.key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3.5 lg:hidden">
            {rows.map((t) => (
              <article key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{t.name}</h3>
                <dl className="mt-2 space-y-2 text-[14px] leading-[1.55]">
                  {cols.map((c) => (
                    <div key={c.key}>
                      <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">{c.label}</dt>
                      <dd className="text-slate-700 dark:text-slate-300">{t[c.key]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="phone-systems">Phone systems compared</h2>
          <p>
            Built-in calling is a big reason shops choose Workiz, so compare it first:
          </p>
          <ul>
            <li><strong>ServiceM8 Phone:</strong> $19 a month for 500 minutes and unlimited users, $32 with an AI phone agent, or $119 for unlimited minutes. Recordings and transcripts save to the job card, and after-hours calls divert to the on-call team member. It offers a 1-month free trial.</li>
            <li><strong>Housecall Pro Voice:</strong> call tracking from $45 a month and VoIP with call tracking from $65, plus overages, with packages from 500 minutes. It works in the mobile app.</li>
            <li><strong>Service Fusion:</strong> integrated voice and text on Plus ($339 a month billed annually) and Pro, plus a ServiceCall.ai add-on.</li>
            <li><strong>FieldPulse Engage:</strong> VoIP and messaging that saves calls, texts and voicemails to the customer record, as a paid add-on without a published price.</li>
            <li><strong>ServiceTitan Phones Pro:</strong> a separate subscription; ServiceTitan says the price depends on what your business needs.</li>
            <li><strong>Jobber:</strong> no business phone system documented; its AI Receptionist add-on answers calls and texts.</li>
          </ul>

          <h2 id="alternatives">The alternatives</h2>

          <h3>Housecall Pro</h3>
          <p>
            <strong>Best fit:</strong> residential teams that want published prices, flat rate below
            the top plan and an optional phone system. Plans are $59, $149 and $299 a month billed
            annually, with online booking from Basic, flat-rate pricing and QuickBooks Desktop listed on
            Essentials, and a 14-day trial. Its basic data transfer is free.{' '}
            <strong>Limitation:</strong> Voice is an extra cost with overages, Recurring Service Plans
            need MAX, and offline mode is view-only. See{' '}
            <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>ServiceM8</h3>
          <p>
            <strong>Best fit:</strong> small teams that want a published phone add-on and low entry
            price. Plans run from $0 for 30 jobs a month to $349, with unlimited users from $29, online
            booking on all plans and a 14-day trial. <strong>Limitation:</strong> plans are capped by
            jobs a month, and QuickBooks Desktop is not listed.
          </p>

          <h3>Service Fusion</h3>
          <p>
            <strong>Best fit:</strong> growing teams that want calling included and unlimited users.
            Plans are $220, $339 and $552 a month billed annually, with integrated voice and text from
            Plus and QuickBooks Online and Desktop. <strong>Limitation:</strong> the highest published
            entry price here, and online booking is not listed on its pricing page.
          </p>

          <h3>Jobber</h3>
          <p>
            <strong>Best fit:</strong> small crews that mainly need scheduling, quotes and invoicing at
            a low published price, from $29 a month billed annually, with online booking on every plan.{' '}
            <strong>Limitation:</strong> no business phone system documented, QuickBooks Online only,
            and no flat-rate price book documented. See{' '}
            <Link href="/compare/jobber-vs-workiz" className={A}>Jobber vs Workiz</Link>.
          </p>

          <h3>Kickserv</h3>
          <p>
            <strong>Best fit:</strong> budget-conscious teams of 5 to 20 that do not need built-in
            calling. $60 a month covers 5 users and $119 covers 10, with a 30-day trial.{' '}
            <strong>Limitation:</strong> its pricing page lists no phone features or online booking,
            only an embeddable contact form.
          </p>

          <h3>FieldPulse and ServiceTitan</h3>
          <p>
            Both price by quote. <strong>FieldPulse</strong> offers Engage calling and Operator AI as
            add-ons, a booking portal and QuickBooks Desktop 2024 or newer, but no free trial.{' '}
            <strong>ServiceTitan</strong> suits larger shops, with call booking, Phones Pro and
            memberships; its pricing page lists Core, Demand AI, Field AI and MAX packages behind a Get
            Pricing button. See <Link href="/compare/servicetitan-alternatives" className={A}>ServiceTitan alternatives</Link>.
          </p>

          <h2 id="switching-checklist">Before you switch: a checklist</h2>
          <ol>
            <li>List the phone numbers you use and ask the new vendor how porting works; Housecall Pro advises keeping your current carrier until the port completes.</li>
            <li>Confirm which plan includes flat rate, service plans and QuickBooks Desktop.</li>
            <li>Check your Workiz billing term; plans are billed annually at purchase.</li>
            <li>Ask Workiz how to export clients, jobs and call recordings before you cancel.</li>
            <li>Reconnect lead sources such as Angi or Thumbtack in the new tool.</li>
          </ol>
          <p>
            For more tools, see our <Link href="/compare/jobber-alternatives" className={A}>Jobber alternatives</Link>{' '}
            and <Link href="/compare/housecall-pro-alternatives" className={A}>Housecall Pro alternatives</Link>{' '}
            pages, or the <Link href="/pricing" className={A}>field service software pricing</Link> guide.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on Workiz alternatives">
            If calling is the reason you chose Workiz, compare ServiceM8 Phone, Housecall Pro Voice and
            Service Fusion’s included voice, which publish their prices or plans. If you want published
            prices with flat rate below the top plan, Housecall Pro is the closest fit, and Jobber is the
            cheapest start. Our <Link href="/how-we-review" className={A}>review method</Link> explains
            why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/compare" className="text-orange-600 hover:text-orange-800">Compare all FSM software →</Link>
            <Link href="/compare/jobber-vs-workiz" className="text-orange-600 hover:text-orange-800">Jobber vs Workiz →</Link>
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
