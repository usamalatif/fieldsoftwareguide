import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Contact FieldSoftwareGuide',
  description: 'How to reach FieldSoftwareGuide about our FSM software research, corrections, pricing updates, or partnerships.',
  slug: 'contact',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <div className="mx-auto max-w-[820px] px-5 py-12 md:px-6">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-4 text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-slate-900 md:text-[34px] dark:text-white">
          Contact us
        </h1>
        <div className="prose-body mt-6">
          <p>
            FieldSoftwareGuide is an independent field service management (FSM) software research
            resource. We welcome corrections, pricing updates, and partnership enquiries.
          </p>
          <p>
            Email:{' '}
            <a href="mailto:usamalatif13001@gmail.com">usamalatif13001@gmail.com</a>
          </p>
          <p>
            Spotted a price that looks out of date? Tell us which tool and plan, with a link to the
            vendor’s pricing page if you have one, and we’ll review it against the pricing-confidence
            standard described on our <Link href="/how-we-review">how we review</Link> page.
          </p>
        </div>
      </div>
    </>
  )
}
