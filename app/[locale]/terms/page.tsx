import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { site } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Terms & Affiliate Disclosure',
  description: `Terms of use and affiliate disclosure for ${site.name}, including how we use affiliate links and the limits of the information we publish.`,
  slug: 'terms',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Terms', href: '/terms' },
]

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <div className="mx-auto max-w-[820px] px-5 py-12 md:px-6">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-4 text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-slate-900 md:text-[34px] dark:text-white">
          Terms &amp; affiliate disclosure
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: July 2026</p>
        <div className="prose-body mt-6">
          <h2>Affiliate disclosure</h2>
          <p>
            Some outbound links on {site.name} are affiliate or partner links. If you click one and
            sign up with a software vendor, we may earn a commission at no additional cost to you.
            These relationships help fund our research. They never affect our rankings, scores, or
            which tools we recommend — our picks are based on features, fit, and public reviews, and
            all pricing is checked against each vendor’s own pricing page.
          </p>

          <h2>No guarantees</h2>
          <p>
            The information on this site is provided for general informational purposes only. Software
            pricing, plans, and features change frequently; we check prices against vendor pages and
            date them, but we cannot guarantee every figure is current at the moment you read it.
            Always confirm pricing and features directly with the vendor before purchasing. We make no
            warranty that any tool will meet your specific requirements.
          </p>

          <h2>Not professional advice</h2>
          <p>
            Nothing on {site.name} is legal, financial, or professional advice. Evaluate any software
            against your own business needs and, where appropriate, consult a qualified professional.
          </p>

          <h2>Trademarks</h2>
          <p>
            Product names, logos, and brands are the property of their respective owners and are used
            for identification and comparison purposes only. Their use does not imply endorsement.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? See our <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </div>
    </>
  )
}
