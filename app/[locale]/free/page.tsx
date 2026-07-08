import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

export const metadata = buildMetadata({
  title: 'Free Field Service Management Software (2026)',
  description:
    'What free field service management software can actually do — free tiers, free trials, and open-source options — and where the limits are for real field service work.',
  slug: 'free',
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Free', href: '/free' },
]

const faqs = [
  {
    question: 'Is there truly free field service management software?',
    answer:
      'A few tools offer limited free tiers and there are open-source options, but most field-grade FSM software is paid. Free plans usually cap users, jobs, or features. Paid tools like Jobber (from $29/mo billed annually) and Housecall Pro (from $59/mo billed annually) offer free trials instead.',
  },
  {
    question: 'What is the best free FSM software for small business?',
    answer:
      'For a genuinely free start, look at limited free tiers and open-source tools, then plan to upgrade as you grow. Most small field service businesses move to a paid plan quickly once they need scheduling, dispatch, and invoicing together.',
  },
  {
    question: 'Are free trials better than free plans?',
    answer:
      'Often yes. A 14-day free trial of Jobber or Housecall Pro gives you the full product to test on real jobs, whereas permanently free plans are usually stripped down. Trials are the fastest way to see if a tool fits your workflow.',
  },
]

export default function FreePage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />
      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[760px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            Free field service management software
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What you can actually run for free — and the honest limits — for a real field service
            business.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[820px] px-5 py-14 md:px-10">
        <AnswerBlock>
          <p>
            Truly free field service management (FSM) software exists, but it comes with real limits.
            A handful of tools offer permanently free tiers (usually capping users, jobs, or
            features), and there are open-source options for teams with technical resources. For most
            field service businesses, though, the practical “free” path is a free trial of a paid
            tool: Jobber (from $29/month billed annually) and Housecall Pro (from $59/month billed
            annually) both let you test the
            full product on real jobs before paying. If you need scheduling, dispatch, invoicing, and
            a mobile app working together, expect to move to a paid plan fairly quickly — free tiers
            rarely cover all four well.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-10">
          <h2>Your realistic options</h2>
          <p>
            <strong>Free trials (recommended):</strong> the fastest way to evaluate a real tool. Most
            major FSM platforms offer a no-card or short free trial — start with the ones that fit
            your trade in the <Link href="/by-industry">industry guides</Link>.
          </p>
          <p>
            <strong>Free tiers:</strong> good for a solo operator doing a handful of jobs, but you’ll
            outgrow the caps as you add technicians. See the{' '}
            <Link href="/by-size">FSM software by business size</Link> for what matters at each
            stage.
          </p>
          <p>
            <strong>Open-source:</strong> zero license cost, but you host and maintain it yourself.
            Realistic only if you have technical help in-house.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Frequently asked questions
          </h2>
          <FAQSection items={faqs} />
        </section>
      </div>
    </>
  )
}
