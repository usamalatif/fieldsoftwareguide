import { notFound } from 'next/navigation'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getIndustryData, getAllIndustrySlugs, isPricePublishable, type Industry } from '@/lib/industries'
import { getProvider } from '@/lib/providers'
import { Breadcrumb } from '@/components/Breadcrumb'
import { IndustryHero } from '@/components/IndustryHero'
import { AnswerBlock } from '@/components/AnswerBlock'
import { IndustryDataCard } from '@/components/IndustryDataCard'
import { ComparisonTable } from '@/components/ComparisonTable'
import { FAQSection } from '@/components/FAQSection'
import { CalloutBox } from '@/components/CalloutBox'
import { AdUnit } from '@/components/AdUnit'
import { AuthorBio } from '@/components/AuthorBio'
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'
import { localizePath, isLocale, defaultLocale, locales, type Locale } from '@/lib/i18n/config'
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries'

type Params = { locale: string; industry: string }

export function generateStaticParams() {
  const slugs = getAllIndustrySlugs()
  return locales.flatMap((locale) => slugs.map((industry) => ({ locale, industry })))
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { locale, industry } = await params
  const ind = getIndustryData(industry)
  if (!ind) return {}
  const loc = (isLocale(locale) ? locale : defaultLocale) as Locale
  return buildMetadata({
    title: `Best Field Service Management Software for ${ind.name} (2026)`,
    description: `The best FSM software for ${ind.name} companies in 2026: real pricing, key features, and top tools compared for ${ind.name} businesses of every size.`,
    slug: `by-industry/${ind.slug}`,
    locale: loc,
    type: 'article',
    modifiedTime: ind.lastUpdated,
    noindex: !ind.dataVerified,
    // Keyword title + template suffix exceeds Bing's 70-char limit; emit as-is.
    brandSuffix: false,
  })
}

const Prose = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-[820px]">{children}</div>
)

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { locale, industry } = await params
  const ind = getIndustryData(industry)
  if (!ind) notFound()
  const loc = (isLocale(locale) ? locale : defaultLocale) as Locale
  const dict = getDictionary(loc)
  const t = dict.industry
  const L = (p: string) => localizePath(loc, p)

  const crumbs = [
    { name: 'Home', href: L('/') },
    { name: 'By Industry', href: L('/by-industry') },
    { name: ind.name, href: L(`/by-industry/${ind.slug}`) },
  ]

  return (
    <>
      <ArticleJsonLd
        headline={`Best Field Service Management Software for ${ind.name} (2026)`}
        description={`Real pricing, key features, and the top FSM software for ${ind.name} companies.`}
        slug={`by-industry/${ind.slug}`}
        datePublished={ind.lastUpdated}
        dateModified={ind.lastUpdated}
        authorName="Usama Latif"
      />
      <FAQJsonLd items={ind.faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
      <BreadcrumbJsonLd items={crumbs} />

      <div className="border-b border-slate-100 bg-slate-50 px-5 py-3.5 md:px-10 dark:border-slate-800 dark:bg-white/5">
        <div className="mx-auto max-w-[1100px]">
          <Breadcrumb items={crumbs} />
        </div>
      </div>

      <IndustryHero industry={ind} dict={dict} />

      <div className="mx-auto max-w-[1100px] px-5 py-12 md:px-10">
        <Prose>
          {!ind.dataVerified && (
            <div className="mb-6">
              <CalloutBox tone="warn" title="Draft — data not yet verified">
                This page uses seed data and is set to <code>noindex</code> until each figure is
                researched and checked against the vendor’s current pricing page.
              </CalloutBox>
            </div>
          )}
          <AnswerBlock lastUpdated={fmtUpdated(ind.lastUpdated)}>
            <p>{ind.answer}</p>
          </AnswerBlock>
        </Prose>

        <AdUnit slot="0000000001" format="leaderboard" note="reserved (no layout shift)" />

        <div className="mx-auto mt-12 max-w-[900px]">
          <IndustryDataCard industry={ind} />
        </div>

        <section className="mx-auto mt-14 max-w-[980px]">
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            {t.bestSoftware(ind.name)}
          </h2>
          <p className="mb-1 mt-2 max-w-[720px] text-[15px] text-slate-500 dark:text-slate-400">
            {t.bestSoftwareSub}
          </p>
          <ComparisonTable refs={ind.providers} industryName={ind.name} />
        </section>

        <section className="mx-auto mt-14 max-w-[820px]">
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            {t.featuresTitle(ind.name)}
          </h2>
          <p className="mb-5 mt-1.5 max-w-[700px] text-[15px] text-slate-500 dark:text-slate-400">
            {t.featuresSub(ind.name)}
          </p>
          <p className="mb-6 text-[15px] leading-[1.7] text-slate-600 dark:text-slate-300">{ind.intro}</p>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {ind.keyFeatures.map((f) => (
              <div key={f} className="flex gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-orange-50 dark:bg-orange-500/15">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <p className="text-[14.5px] leading-[1.5] text-slate-700 dark:text-slate-300">{f}</p>
              </div>
            ))}
          </div>
        </section>

        <AdUnit slot="0000000002" format="rectangle" note="in-content" />

        <section className="mx-auto mt-14 max-w-[820px]">
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            {t.pricingTitle(ind.name)}
          </h2>
          <p className="mb-5 mt-1.5 max-w-[700px] text-[15px] text-slate-500 dark:text-slate-400">
            {t.pricingSub(ind.name)}
          </p>
          <PricingList industry={ind} />
        </section>

        <section className="mx-auto mt-14 max-w-[820px]">
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            {t.faqTitle}
          </h2>
          <p className="mb-5 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400">{t.faqSub(ind.name)}</p>
          <FAQSection items={ind.faqs} />
        </section>

        <Prose>
          <CalloutBox tone="verdict" title={t.bottomLine(ind.name)}>
            For most {ind.name} companies, start with {getProvider(ind.providers[0]?.slug ?? '')?.name ?? 'a top pick'} and
            trial one alternative before committing. Match the tool to your team size and whether you
            need commercial features — the “best” FSM software for {ind.name} depends on how many
            technicians you run and your budget.
          </CalloutBox>
          <AuthorBio />
          <SourcesBlock current={ind} title={t.sources} />
          <RelatedLinks t={t} L={L} />
        </Prose>

        <AdUnit slot="0000000003" format="leaderboard" note="footer" />
      </div>
    </>
  )
}

function PricingList({ industry: ind }: { industry: Industry }) {
  const rows = ind.providers
    .map((r) => ({ ref: r, p: getProvider(r.slug) }))
    .filter((x): x is { ref: (typeof ind.providers)[number]; p: NonNullable<ReturnType<typeof getProvider>> } => !!x.p)

  return (
    <div className="overflow-hidden rounded-[18px] border border-slate-200 dark:border-slate-800">
      <dl className="divide-y divide-slate-100 dark:divide-slate-800">
        {rows.map(({ ref, p }) => (
          <div key={p.slug} className="flex items-baseline justify-between gap-4 px-6 py-4">
            <dt className="text-[15px] font-semibold text-slate-900 dark:text-white">{p.name}</dt>
            <dd className="tnum text-right text-[15px] font-bold text-slate-700 dark:text-slate-200">
              {ref.monthlyFromUsd != null ? (
                <>
                  from ${ref.monthlyFromUsd}
                  <span className="text-[13px] font-medium text-slate-400">/mo</span>
                </>
              ) : (
                <span className="text-slate-500 dark:text-slate-400">Custom / contact sales</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-slate-100 px-6 py-3 text-[12.5px] text-slate-400 dark:border-slate-800">
        Lowest vendor-published plan with annual billing (checked Jul 2026); month-to-month rates
        run higher. {isPricePublishable(ind.priceRange) && ind.priceRange.note
          ? ind.priceRange.note
          : 'Custom-priced tools require a quote; costs scale with technicians and features.'}
      </p>
    </div>
  )
}

function SourcesBlock({ current, title }: { current: Industry; title: string }) {
  if (!current.sources?.length) return null
  return (
    <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
      <p className="text-sm font-semibold text-slate-900 dark:text-white">{title}</p>
      <ul className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
        {current.sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="nofollow noopener" className="hover:text-orange-600">
              {s.name}
            </a>{' '}
            <span className="text-slate-400">· checked {s.checked}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RelatedLinks({ t, L }: { t: Dictionary['industry']; L: (p: string) => string }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
      <Link href={L('/compare')} className="text-orange-600 hover:text-orange-800">{t.keepExploring.compare}</Link>
      <Link href={L('/free')} className="text-orange-600 hover:text-orange-800">{t.keepExploring.free}</Link>
      <Link href={L('/by-industry')} className="text-orange-600 hover:text-orange-800">{t.keepExploring.all}</Link>
    </div>
  )
}

function fmtUpdated(iso: string): string {
  const d = new Date(iso)
  return isNaN(d.getTime()) ? iso : d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}
