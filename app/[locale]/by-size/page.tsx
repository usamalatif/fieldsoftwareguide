import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { localizePath, isLocale, defaultLocale, type Locale } from '@/lib/i18n/config'

/**
 * Prices verified 2026-10-27 on each vendor's pricing page; Jobber and Housecall Pro rechecked
 * 2026-10-31 after Jobber's introductory offer ended (standard rates unchanged, promo note removed).
 * Jobber prices now vary by plan AND team size (1 / 5 / 10 / 15 users; 16+ is "contact sales";
 * Core is 1 user only); extra users $29/mo each. Figures below are the STANDARD annual-billing
 * rates ("then $X/mo"), not the 12-month introductory offer shown during promotions.
 * Housecall Pro: Basic 1 user, Essentials 5 users, MAX 8 users; $35/mo per extra user is
 * published for MAX only, so 10- and 15-user Housecall Pro figures are MAX + extra users.
 * ServiceTitan (per-technician) and FieldPulse (seat-based) publish no prices; Workiz and
 * Commusoft publish none either.
 */
const MODIFIED = '2026-10-31'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc = (isLocale(locale) ? locale : defaultLocale) as Locale
  return buildMetadata({
    title: 'Field Service Software by Business Size (2026)',
    description:
      'Field service software by business size: published plan prices at 1, 5, 10 and 15 users, user limits, plan features, and when to move to custom-quoted tools.',
    slug: 'by-size',
    locale: loc,
    type: 'article',
    modifiedTime: MODIFIED,
  })
}

const sizes = [
  {
    slug: 'solo-operator',
    name: 'Solo operator',
    range: '1 user',
    desc: 'Keep it cheap and simple: scheduling, quotes, invoices, and payments from one phone. Decide early whether you need QuickBooks sync, because neither entry plan includes it.',
    top: 'Jobber Core ($29/mo billed annually, 1 user) or Housecall Pro Basic ($59/mo, 1 user)',
  },
  {
    slug: 'small-team',
    name: 'Small team',
    range: '2–5 users',
    desc: 'Dispatch, checklists, and accounting sync start to matter. Both published-price tools charge $149/mo billed annually for 5 users on the plan that adds QuickBooks Online.',
    top: 'Jobber Connect or Housecall Pro Essentials ($149/mo for 5 users)',
  },
  {
    slug: 'growing-business',
    name: 'Growing company',
    range: '6–20 users',
    desc: 'Per-user costs now drive the decision, along with job costing, recurring service plans, and inventory. Published plans still work up to 15 users; custom-quoted tools enter the shortlist.',
    top: 'Jobber Grow, Housecall Pro MAX, or a quote from Workiz / FieldPulse',
  },
  {
    slug: 'larger-business',
    name: 'Larger service business',
    range: '20+ users',
    desc: 'Multiple crews or locations, commercial contracts, and deeper reporting. Jobber asks teams of 16 or more to contact sales, and the enterprise platforms are custom-quoted.',
    top: 'ServiceTitan, FieldPulse, or Commusoft (custom quote)',
  },
]

/** Standard annual-billing rates per month, checked 2026-10-31. */
const costRows: { users: string; jobberConnect: string; jobberGrow: string; hcp: string }[] = [
  { users: '1 user', jobberConnect: '$99 (Core $29, no QuickBooks)', jobberGrow: '$149', hcp: '$59 Basic (no QuickBooks); $149 Essentials' },
  { users: '5 users', jobberConnect: '$149', jobberGrow: '$229', hcp: '$149 Essentials' },
  { users: '10 users', jobberConnect: '$229', jobberGrow: '$299', hcp: '$369 (MAX $299 + 2 × $35)' },
  { users: '15 users', jobberConnect: '$299', jobberGrow: '$399', hcp: '$544 (MAX $299 + 7 × $35)' },
  { users: '16+ users', jobberConnect: 'Contact sales', jobberGrow: 'Contact sales', hcp: 'MAX + $35 per extra user' },
]

/** Where each feature starts, from each vendor's pricing page (checked 2026-10-31). */
const gateRows: { feature: string; jobber: string; hcp: string }[] = [
  { feature: 'QuickBooks Online sync', jobber: 'Connect and up', hcp: 'Essentials and up' },
  { feature: 'Checklists', jobber: 'Connect and up', hcp: 'Essentials and up' },
  { feature: 'Job costing', jobber: 'Grow and up', hcp: 'Basic and up' },
  { feature: 'Recurring service plans', jobber: 'Recurring jobs (plan not stated)', hcp: 'MAX' },
  { feature: 'Users included', jobber: 'Core: 1. Connect / Grow: 1, 5, 10 or 15. Plus: 5, 10 or 15', hcp: 'Basic: 1. Essentials: 5. MAX: 8' },
  { feature: 'Extra users', jobber: '$29/mo each', hcp: '$35/mo each (published for MAX)' },
]

const faqs = [
  {
    question: 'What is the best field service software for my business size?',
    answer:
      'Solo operators should start on Jobber Core ($29/month billed annually) or Housecall Pro Basic ($59/month). Teams of up to 5 pay $149/month billed annually on Jobber Connect or Housecall Pro Essentials, the plans that add QuickBooks Online. From about 10 users, compare Jobber Grow and Housecall Pro MAX against quotes from Workiz or FieldPulse; larger operations usually evaluate ServiceTitan.',
  },
  {
    question: 'How much does field service software cost for 10 technicians?',
    answer:
      'With annual billing, Jobber is $229/month for 10 users on Connect or $299/month on Grow. Housecall Pro MAX includes 8 users for $299/month, so 10 users is $369/month with two extra users at $35 each. ServiceTitan, FieldPulse, Workiz, and Commusoft are custom-quoted.',
  },
  {
    question: 'What is the best field service software for a one-person business?',
    answer:
      'Jobber Core is the cheapest published plan at $29/month billed annually ($49 month-to-month) for 1 user, and Housecall Pro Basic is $59/month billed annually for 1 user. Neither includes QuickBooks sync; for that, budget $99/month on Jobber Connect or $149/month on Housecall Pro Essentials.',
  },
  {
    question: 'When should a growing company move to ServiceTitan or another custom-quoted tool?',
    answer:
      'Usually when you pass the published tiers or need features they gate: Jobber asks teams of 16 or more to contact sales, and Housecall Pro charges $35 per user above 8 on MAX. Multi-location reporting, commercial service agreements, and truck inventory are the other common triggers. ServiceTitan prices per technician and FieldPulse prices by seat, both by quote.',
  },
  {
    question: 'Is per-user or per-plan pricing cheaper as a team grows?',
    answer:
      'It depends on the step. At 5 users, Jobber Connect and Housecall Pro Essentials are both $149/month billed annually. At 15 users, Jobber Connect is $299/month while Housecall Pro MAX with 7 extra users is $544/month. Compare the exact plan you need, since job costing and recurring plans sit on different tiers.',
  },
]

export default async function BySizePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc = (isLocale(locale) ? locale : defaultLocale) as Locale
  const L = (p: string) => localizePath(loc, p)

  const crumbs = [
    { name: 'Home', href: L('/') },
    { name: 'By Size', href: L('/by-size') },
  ]

  return (
    <>
      <ArticleJsonLd
        headline="Field Service Software by Business Size (2026)"
        description="Field service software compared by business size, with published plan prices at 1, 5, 10 and 15 users, user limits, and plan features."
        slug="by-size"
        datePublished="2026-07-08"
        dateModified={MODIFIED}
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            FSM software by business size
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            A solo operator and a 60-tech operation need very different tools. Find the right fit for
            your team size.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="October 2026">
          <p>
            The right field service software by business size comes down to how many users you
            pay for and which features each plan unlocks. Solo operators can start on Jobber Core
            ($29/month billed annually, 1 user) or Housecall Pro Basic ($59/month, 1 user). Small
            teams of up to 5 pay $149/month billed annually on Jobber Connect or Housecall Pro
            Essentials, the plans that add QuickBooks Online sync. Growing companies of 6 to 20
            users should price the exact plan they need: Jobber Grow is $299/month for 10 users,
            while Housecall Pro MAX includes 8 users for $299/month plus $35 per extra user. Larger
            service businesses usually move to custom-quoted platforms such as ServiceTitan,
            FieldPulse, or Commusoft for multi-crew reporting and commercial contracts.
          </p>
        </AnswerBlock>

        <div className="mt-10 space-y-4">
          {sizes.map((s) => (
            <div key={s.slug} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">{s.name}</h2>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11.5px] font-bold uppercase tracking-[0.05em] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {s.range}
                </span>
              </div>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-slate-600 dark:text-slate-300">{s.desc}</p>
              <p className="mt-2 text-[13.5px] font-semibold text-orange-600 dark:text-orange-400">Top pick: {s.top}</p>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            What it costs as your team grows
          </h2>
          <p className="mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            Standard monthly price with annual billing, from each vendor&rsquo;s pricing page,
            checked October 31, 2026. Temporary introductory discounts are not used in this table;
            month-to-month billing runs higher.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="tnum w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Team size', 'Jobber Connect', 'Jobber Grow', 'Housecall Pro'].map((h) => (
                    <th key={h} className="px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {costRows.map((r) => (
                  <tr key={r.users} className="border-t border-slate-100 dark:border-slate-800">
                    <td className="py-[14px] pl-[22px] pr-4 text-[14.5px] font-bold text-slate-900 dark:text-white">{r.users}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.jobberConnect}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.jobberGrow}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.hcp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-slate-500 dark:text-slate-400">
            Jobber Core is 1 user only. Jobber also sells each plan month-to-month (Core $49) or
            with a 1-year commitment billed monthly (Core $39). Jobber Plus starts at $399/month
            for 5 users, billed annually. Housecall
            Pro publishes the $35 extra-user price for MAX only. ServiceTitan, FieldPulse, Workiz,
            and Commusoft do not publish prices.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Which plan unlocks what
          </h2>
          <p className="mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">
            The features teams usually outgrow an entry plan for, by the first plan that lists them.
          </p>
          <div className="overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900">
                  {['Feature', 'Jobber', 'Housecall Pro'].map((h) => (
                    <th key={h} className="px-4 py-[14px] text-[12px] font-bold uppercase tracking-[0.06em] text-slate-300 first:pl-[22px]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gateRows.map((r) => (
                  <tr key={r.feature} className="border-t border-slate-100 dark:border-slate-800">
                    <td className="py-[14px] pl-[22px] pr-4 text-[14.5px] font-bold text-slate-900 dark:text-white">{r.feature}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.jobber}</td>
                    <td className="px-4 py-[14px] text-[13.5px] text-slate-600 dark:text-slate-300">{r.hcp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2>Integration requirements by size</h2>
          <p>
            Accounting is the first integration most teams need, and neither entry plan includes
            it: QuickBooks Online starts on Jobber Connect and Housecall Pro Essentials, and
            Jobber syncs with QuickBooks Online only. Housecall Pro also supports QuickBooks
            Desktop; confirm the plan with Housecall Pro. Our{' '}
            <Link href={L('/quickbooks')}>QuickBooks compatibility guide</Link> has the full
            vendor list. Larger companies tend to need more: Housecall Pro lists open API access on
            MAX, and the custom-quoted platforms scope integrations during the sales process.
          </p>

          <h2>When to move past the published-price tools</h2>
          <p>
            Three signals usually mean it is time to get quotes: you are past 15 users (Jobber
            asks teams of 16 or more to contact sales), you pay for many extra users on Housecall
            Pro MAX, or you need commercial service agreements, truck inventory, or multi-location
            reporting. ServiceTitan prices per technician and FieldPulse prices by seat, both by
            quote. Workiz and Commusoft are also quote-based. The{' '}
            <Link href={L('/compare')}>full comparison</Link> covers all six side by side.
          </p>

          <h2>Business size by trade</h2>
          <p>
            Each industry guide includes its own &ldquo;which software should you choose&rdquo;
            table by team size: see{' '}
            <Link href={L('/by-industry/hvac')}>HVAC</Link>,{' '}
            <Link href={L('/by-industry/plumbing')}>plumbing</Link>,{' '}
            <Link href={L('/by-industry/electrical')}>electrical</Link>,{' '}
            <Link href={L('/by-industry/pest-control')}>pest control</Link>, and the{' '}
            <Link href={L('/by-industry')}>other industry guides</Link>. If you are a solo
            operator or small crew, our{' '}
            <Link href={L('/for-small-business')}>field service software for small business</Link>{' '}
            guide goes deeper on what a small team needs on day one, and{' '}
            <Link href={L('/pricing/housecall-pro')}>Housecall Pro pricing</Link> breaks down every
            Housecall Pro plan and fee.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Frequently asked questions
          </h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mt-10 border-t border-slate-200 pt-6 text-[13px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p className="font-semibold text-slate-900 dark:text-white">Sources</p>
          <ul className="mt-2 space-y-1">
            <li><a href="https://www.getjobber.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline">Jobber pricing</a> (checked Oct 31, 2026)</li>
            <li><a href="https://www.housecallpro.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline">Housecall Pro pricing</a> (checked Oct 31, 2026)</li>
            <li><a href="https://www.servicetitan.com/pricing" target="_blank" rel="noopener noreferrer" className="underline">ServiceTitan pricing</a> (checked Oct 27, 2026)</li>
            <li><a href="https://www.fieldpulse.com/pricing" target="_blank" rel="noopener noreferrer" className="underline">FieldPulse pricing</a> (checked Oct 27, 2026)</li>
            <li><a href="https://www.workiz.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline">Workiz pricing</a> (checked Oct 27, 2026)</li>
          </ul>
        </div>
      </div>
    </>
  )
}
