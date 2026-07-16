import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getAllIndustries, priceShort, isPricePublishable } from '@/lib/industries'
import { getProvider } from '@/lib/providers'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { localizePath, isLocale, defaultLocale, type Locale } from '@/lib/i18n/config'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc = (isLocale(locale) ? locale : defaultLocale) as Locale
  return buildMetadata({
    title: 'Field Service Software by Industry (2026)',
    description:
      'Field service management software compared by industry. The best FSM tools for HVAC, plumbing, oil and gas, telecom, and more with real pricing.',
    slug: 'by-industry',
    locale: loc,
  })
}

export default async function ByIndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc = (isLocale(locale) ? locale : defaultLocale) as Locale
  const L = (p: string) => localizePath(loc, p)
  const industries = getAllIndustries()

  const crumbs = [
    { name: 'Home', href: L('/') },
    { name: 'By Industry', href: L('/by-industry') },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Field service software, by industry
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Every trade has different needs, different software, and different buyers. Pick your
            industry for a focused comparison with real, vendor-published pricing.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-5 py-12 md:px-10">
        <div className="mx-auto max-w-[820px]">
          <AnswerBlock>
            <p>
              The best field service management (FSM) software depends on your industry. HVAC,
              plumbing, and electrical shops lean toward Jobber (from $29/mo billed annually) and
              Housecall Pro (from $59/mo billed annually) for small teams, and ServiceTitan for
              larger commercial operations.
              Specialized fields — oil &amp; gas, refrigeration, telecom — need inspection,
              compliance, and asset-tracking features that general tools handle differently. Below,
              each industry has its own guide comparing the tools that fit it best, with pricing
              checked against each vendor’s own page.
            </p>
          </AnswerBlock>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const top = getProvider(ind.providers[0]?.slug ?? '')
            return (
              <Link
                key={ind.slug}
                href={L(`/by-industry/${ind.slug}`)}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-orange-300 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-xl dark:bg-slate-800">
                    {ind.icon}
                  </span>
                  {!ind.dataVerified && (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.05em] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      Draft
                    </span>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-extrabold tracking-[-0.01em] text-slate-900 group-hover:text-orange-600 dark:text-white">
                  {ind.name}
                </h2>
                <p className="mt-1 text-[13.5px] text-slate-500 dark:text-slate-400">
                  Top pick: {top?.name ?? '—'}
                  {isPricePublishable(ind.priceRange) ? ` · ${priceShort(ind)}/tech/mo` : ''}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
