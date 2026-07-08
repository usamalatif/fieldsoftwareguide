import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { AuthorBio } from '@/components/AuthorBio'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'How We Review FSM Software — Our Methodology',
  description:
    'How FieldSoftwareGuide reviews and ranks field service management software: our pricing-confidence standard, scoring criteria, and independence policy.',
  slug: 'how-we-review',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'How we review', href: '/how-we-review' },
]

const criteria = [
  { t: 'Pricing (checked, not guessed)', d: 'We take the lowest plan each vendor publishes on its own pricing page and record the date checked. Custom-priced tools are labelled “Custom” — never a made-up number.' },
  { t: 'Fit for the industry', d: 'A tool is judged against what that trade actually needs — maintenance contracts for HVAC, inspections for oil & gas, asset tracking for rentals — not a generic feature checklist.' },
  { t: 'Core features', d: 'Scheduling, dispatch, work orders, mobile app quality, invoicing/payments, and integrations (especially QuickBooks) are weighed for every tool.' },
  { t: 'Public reviews', d: 'We factor in aggregate ratings from G2 and Capterra as a signal of real-world satisfaction, alongside our own hands-on evaluation.' },
  { t: 'Independence', d: 'Rankings are set before any affiliate consideration. Commission never moves a tool up or down. We are not a software vendor.' },
]

export default function HowWeReviewPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[760px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            How we review FSM software
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            The standard behind every ranking on this site — so you know exactly why a tool sits
            where it does.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[820px] px-5 py-14 md:px-6">
        <div className="mb-10">
          <AnswerBlock>
            <p>
              FieldSoftwareGuide ranks field service management software on five things: verified
              pricing, fit for your specific industry, core features (scheduling, dispatch, work
              orders, mobile app, invoicing, integrations), public review ratings from G2 and
              Capterra, and independence. Every price we publish comes from the vendor’s own current
              pricing page and is dated; tools that only quote custom pricing are labelled as such,
              never estimated. Rankings are decided on merit before any affiliate relationship is
              considered, and commission never changes a tool’s position. We are not a software
              vendor, so we have no product to push.
            </p>
          </AnswerBlock>
        </div>

        <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
          What we score
        </h2>
        <ul className="mt-6 space-y-3">
          {criteria.map((c) => (
            <li key={c.t} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="text-[15.5px] font-extrabold text-slate-900 dark:text-white">{c.t}</div>
              <p className="mt-1 text-[14.5px] leading-[1.6] text-slate-600 dark:text-slate-300">{c.d}</p>
            </li>
          ))}
        </ul>

        <div className="prose-body mt-10">
          <h2>When prices change</h2>
          <p>
            Software pricing moves. We re-check vendor pricing pages periodically and update the
            “checked” date on each figure. If you spot something out of date, tell us via the{' '}
            <Link href="/contact">contact page</Link> and we’ll verify and correct it.
          </p>
        </div>

        <AuthorBio />
      </div>
    </>
  )
}
