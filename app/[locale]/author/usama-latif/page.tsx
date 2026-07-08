import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { site } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Usama Latif — Author & FSM Software Researcher',
  description:
    'Usama Latif builds software and AI products and researches field service management software hands-on for FieldSoftwareGuide.',
  slug: 'author/usama-latif',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Usama Latif', href: '/author/usama-latif' },
]

function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Usama Latif',
          url: `${site.url}/author/usama-latif`,
          sameAs: ['https://www.usamalatif.com'],
          jobTitle: 'Software & AI product builder; FSM software researcher',
          worksFor: { '@type': 'Organization', name: site.name, url: site.url },
          description:
            'Usama Latif builds software and AI products and writes about business tools, researching field service management platforms hands-on.',
        }),
      }}
    />
  )
}

export default function AuthorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <PersonJsonLd />
      <div className="mx-auto max-w-[820px] px-5 py-12 md:px-6">
        <Breadcrumb items={crumbs} />
        <div className="mt-6 flex items-center gap-5">
          <span
            aria-hidden
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[26px] font-extrabold text-orange-400"
          >
            UL
          </span>
          <div>
            <h1 className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-slate-900 md:text-[34px] dark:text-white">
              Usama Latif
            </h1>
            <p className="mt-1 text-[14px] font-semibold text-orange-600 dark:text-orange-400">
              Software &amp; AI product builder · FSM software researcher
            </p>
          </div>
        </div>

        <div className="prose-body mt-8">
          <p>
            Usama Latif builds software and AI products and writes about the business tools that
            trades and field service companies use every day. He founded and runs FieldSoftwareGuide
            to cut through generic “top 10” lists with industry-specific comparisons and pricing that
            is actually checked against each vendor’s own page.
          </p>
          <p>
            Because he builds and evaluates software directly, the reviews here lean on genuine
            hands-on experience rather than rewritten marketing copy. Every price is dated, every
            custom-priced tool is labelled as such, and rankings are set on merit — see{' '}
            <Link href="/how-we-review">how we review</Link> for the full method.
          </p>
          <h2>Recent guides</h2>
          <ul>
            <li><Link href="/by-industry/hvac">Best FSM software for HVAC (2026)</Link></li>
            <li><Link href="/compare">Best field service management software 2026</Link></li>
            <li><Link href="/by-industry">FSM software by industry</Link></li>
          </ul>
          <p>
            Reach Usama via the <Link href="/contact">contact page</Link>, or see more of his work
            at{' '}
            <a href="https://www.usamalatif.com" target="_blank" rel="noopener">
              usamalatif.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}
