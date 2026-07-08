import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Field Service Management Software Guides (2026)',
  description:
    'Plain-English guides to choosing field service management software: what FSM software is, how to choose it, pricing, QuickBooks integration, and free options.',
  slug: 'guides',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
]

const guides = [
  { title: 'FSM software by industry', desc: 'Find the best tool for your trade — HVAC, plumbing, and more.', href: '/by-industry', tag: 'Start here' },
  { title: 'Best FSM software 2026', desc: 'The major platforms compared on rating and published price.', href: '/compare', tag: 'Compare' },
  { title: 'FSM software by business size', desc: 'Solo operator to enterprise — the right fit for your team size.', href: '/by-size', tag: 'By size' },
  { title: 'Free FSM software', desc: 'What you can actually run for free, and where the limits are.', href: '/free', tag: 'Free' },
  { title: 'How we review', desc: 'Our pricing-confidence standard and how rankings are decided.', href: '/how-we-review', tag: 'Methodology' },
  { title: 'HVAC software guide', desc: 'The highest-demand trade guide — real pricing and top picks.', href: '/by-industry/hvac', tag: 'Popular' },
]

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[760px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Field service software guides
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Everything you need to choose the right FSM tool, explained simply — with real pricing
            and sources.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <div className="mb-10 max-w-3xl">
          <AnswerBlock>
            <p>
              These guides explain how to choose field service management (FSM) software — the tools
              that run scheduling, dispatch, work orders, invoicing, and payments for service
              businesses. Start with your industry, since the best tool for HVAC is not the best for
              a rental yard or a telecom crew. From there, compare the major platforms on rating and
              real published pricing, size the choice to your team, and check what free options can
              actually do. Every guide names specific tools and prices, checks figures against each
              vendor’s own pricing page, and stays independent so you can decide quickly.
            </p>
          </AnswerBlock>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-[0_8px_24px_-14px_rgba(249,115,22,.45)] dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-orange-600 dark:text-orange-400">{g.tag}</span>
              <h2 className="mt-1.5 text-lg font-extrabold tracking-[-0.01em] text-slate-900 group-hover:text-orange-600 dark:text-white">{g.title}</h2>
              <p className="mt-1.5 text-sm leading-[1.55] text-slate-500 dark:text-slate-400">{g.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
