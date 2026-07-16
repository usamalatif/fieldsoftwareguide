import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { localizePath, isLocale, defaultLocale, type Locale } from '@/lib/i18n/config'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc = (isLocale(locale) ? locale : defaultLocale) as Locale
  return buildMetadata({
    title: 'Field Service Software by Business Size (2026)',
    description:
      'The best field service management software for your team size: solo operators, small teams, growing businesses, and enterprise field service operations.',
    slug: 'by-size',
    locale: loc,
  })
}

const sizes = [
  { slug: 'solo-operator', name: 'Solo operator', range: '1 technician', desc: 'One-person shops: keep it cheap and simple. Published entry plans and free trials matter most.', top: 'Jobber (from $29/mo billed annually)' },
  { slug: 'small-team', name: 'Small team', range: '2–10 technicians', desc: 'Scheduling and dispatch start to matter. Housecall Pro and Jobber lead here on published pricing.', top: 'Housecall Pro (from $59/mo billed annually)' },
  { slug: 'growing-business', name: 'Growing business', range: '10–50 technicians', desc: 'You need reporting, roles, and tighter dispatch. Mid-market tools and ServiceTitan enter the picture.', top: 'Workiz / ServiceTitan (custom)' },
  { slug: 'enterprise', name: 'Enterprise', range: '50+ technicians', desc: 'Multi-location, deep reporting, financing, and integrations. Enterprise platforms, all custom-quoted.', top: 'ServiceTitan (custom)' },
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
      <BreadcrumbJsonLd items={crumbs} />
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
        <AnswerBlock>
          <p>
            The best field service management software depends heavily on your team size. Solo
            operators and small teams (1–10 technicians) are usually best served by Jobber (from
            $29/month billed annually) and Housecall Pro (from $59/month billed annually), which
            publish transparent pricing and are
            quick to set up. Growing businesses (10–50 technicians) start to need role-based access,
            reporting, and stronger dispatch, where mid-market tools like Workiz and FieldPulse — and
            increasingly ServiceTitan — fit. Enterprise operations (50+ technicians) typically run
            ServiceTitan or another custom-quoted platform for multi-location control, financing, and
            deep integrations. Match the tool to where your team is now, with a little headroom to
            grow.
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

        <p className="mt-8 text-[15px] text-slate-600 dark:text-slate-300">
          Also browse by your trade in the{' '}
          <Link href={L('/by-industry')} className="font-semibold text-orange-600 dark:text-orange-400">industry guides</Link>, or
          compare every tool in the{' '}
          <Link href={L('/compare')} className="font-semibold text-orange-600 dark:text-orange-400">full comparison</Link>.
        </p>
      </div>
    </>
  )
}
