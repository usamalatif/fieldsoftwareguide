import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'About FieldSoftwareGuide',
  description:
    'FieldSoftwareGuide is an independent resource comparing field service management software by industry and business size. We are not a software vendor.',
  slug: 'about',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
]

const checklist = [
  'Every price comes from the vendor’s own current pricing page, with the date we checked it.',
  'Tools that only quote custom pricing are labelled “Custom” — we never invent a number.',
  'We compare software by industry, because HVAC needs differ from plumbing or telecom needs.',
  'Rankings are based on features, fit, and public reviews — not on who pays us.',
  'We are vendor-neutral: affiliate links never change a tool’s ranking.',
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[760px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Field service software research you can actually trust
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            FieldSoftwareGuide helps trades and field service businesses choose the right software.
            We are not a software vendor and we do not sell FSM tools.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[820px] px-5 py-14 md:px-6">
        <div className="mb-10">
          <AnswerBlock>
            <p>
              FieldSoftwareGuide is an independent resource that compares field service management
              (FSM) software by industry and business size. We are not a software vendor and we do
              not sell FSM tools, which is what lets us stay neutral. Our audience is owners and
              operators of field service businesses — HVAC, plumbing, electrical, refrigeration,
              and other trades — who need to pick software without wading through generic top-10
              lists. Everything we publish follows one pricing-confidence standard: every price
              comes from the vendor’s own current pricing page and records the date we checked it,
              and tools that only quote custom pricing are labelled as such rather than guessed. The
              site is run by Usama Latif, who builds software and AI products and evaluates these
              platforms hands-on. Some links are affiliate links and we may earn a commission, but
              that never changes a tool’s ranking. This is general information, not purchasing or
              legal advice.
            </p>
          </AnswerBlock>
        </div>
        <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
          How we research
        </h2>
        <p className="mt-2 text-[15px] text-slate-500 dark:text-slate-400">
          Our pricing-confidence standard — the reason you can rely on these pages.
        </p>
        <ul className="mt-6 space-y-3">
          {checklist.map((c) => (
            <li
              key={c}
              className="flex gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-500/15">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="text-[15px] leading-[1.55] text-slate-700 dark:text-slate-300">{c}</span>
            </li>
          ))}
        </ul>

        <div className="prose-body mt-10">
          <h2>We are independent</h2>
          <p>
            Some links on this site are affiliate links, meaning we may earn a commission if you
            sign up with a tool, at no extra cost to you. Affiliate relationships never determine
            our assessments or rankings. This is general information, not legal or purchasing
            advice; for a specific decision, evaluate the software against your own requirements.
          </p>
          <p>
            Start by <Link href="/by-industry">choosing your industry</Link>, compare tools in the{' '}
            <Link href="/compare">best FSM software guide</Link>, or read{' '}
            <Link href="/how-we-review">how we review</Link>.
          </p>
        </div>
      </div>
    </>
  )
}
