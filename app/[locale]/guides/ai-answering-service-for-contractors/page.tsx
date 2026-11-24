import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { AnswerBlock } from '@/components/AnswerBlock'
import { FAQSection } from '@/components/FAQSection'
import { CalloutBox } from '@/components/CalloutBox'
import { AuthorBio } from '@/components/AuthorBio'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { articleDates } from '@/content/articles'

/**
 * /guides/ai-answering-service-for-contractors: targets "ai answering service for contractors",
 * "ai receptionist for home services" and "ai phone answering for hvac/plumbing". No GSC data for
 * this topic yet. Scope: AI phone answering sold by or integrated with FSM vendors; standalone AI
 * answering companies are out of scope (vendor-only sourcing).
 *
 * Facts come from each vendor's own pricing pages, product pages and help centers (dates in
 * `sources`). Jobber facts reuse the site's verified pages (Jobber's two help articles disagree on
 * the monthly allowance; both are stated). Housecall Pro's help articles disagree on whether CSR AI
 * books jobs yet and whether it is free; the page says to confirm. A ServiceTitan per-call rate seen
 * only in a search snippet is not used. Commusoft's AI agents were announced on its UK blog only.
 * Nothing tested hands-on.
 */

const PATH = '/guides/ai-answering-service-for-contractors'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'AI Answering Service for Contractors: FSM Tools Compared (2026)'
const DESCRIPTION =
  'AI phone answering inside field service software: what Jobber, ServiceTitan, Workiz, ServiceM8 and others offer, whether it books jobs, and what it costs.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/ai-answering-service-for-contractors',
  type: 'article',
  modifiedTime: contentUpdated,
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'AI answering service for contractors', href: PATH },
]

type Tool = {
  name: string
  product: string
  booking: string
  languages: string
  price: string
}

const tools: Tool[] = [
  {
    name: 'ServiceM8',
    product: 'AI Phone Agent inside ServiceM8 Phone',
    booking: 'Not described',
    languages: 'Not stated',
    price: '$32 a month with 500 minutes (3¢ a minute after) or $119 with unlimited minutes; not on the $19 phone plan',
  },
  {
    name: 'Jobber',
    product: 'AI Receptionist: answers calls and texts 24/7',
    booking: 'Not stated on the pages we use',
    languages: 'Not stated on the pages we use',
    price: '$29 a month add-on, included on Plus; then $0.79 per extra conversation (allowance stated as 30 or 100 a month)',
  },
  {
    name: 'ServiceTitan',
    product: 'AI Virtual Agent: calls and texts, overflow and after hours',
    booking: 'Books, confirms and reschedules; Adaptive Capacity recommended',
    languages: 'Switches to Spanish automatically',
    price: 'Billed per call, every call counted; rate not published',
  },
  {
    name: 'Workiz',
    product: 'Genius Answering (AI agent “Jessica”): calls, texts, emails and web forms',
    booking: 'Books jobs',
    languages: 'English and Spanish',
    price: 'Sold separately; price not published',
  },
  {
    name: 'FieldPulse',
    product: 'Operator AI: after-hours, declined and overflow calls',
    booking: 'Syncs appointments to the FieldPulse calendar; routes urgent calls',
    languages: 'Not stated',
    price: 'Add-on; price not published',
  },
  {
    name: 'Housecall Pro',
    product: 'CSR AI: answers and summarizes calls; website chat',
    booking: 'Help articles disagree on whether booking is live',
    languages: 'Spanish listed as coming soon',
    price: 'Listed as an add-on without a price; one help article says AI Team is included free',
  },
  {
    name: 'Service Fusion',
    product: 'ZyraTalk AI call answering, from the same EverPro group',
    booking: 'Books into the calendar; jobs appear on the dispatch board',
    languages: 'Not stated',
    price: 'Not published',
  },
  {
    name: 'FieldEdge',
    product: 'No built-in AI; Free2Grow partner integration (announced September 15, 2026)',
    booking: 'Free2Grow books appointments into FieldEdge',
    languages: 'Not stated',
    price: 'Not published',
  },
  {
    name: 'Commusoft',
    product: 'AI phone agents for service bookings, out-of-hours leads and feedback, announced on its UK blog',
    booking: 'Its boiler service agent books service appointments',
    languages: 'Not stated',
    price: 'Not published; US availability not stated',
  },
  {
    name: 'Kickserv',
    product: 'None; lists the Nexa 24/7 live answering service as a partner',
    booking: 'Not applicable',
    languages: 'Nexa says its receptionists are bilingual',
    price: 'Nexa offers Kickserv customers 10% off',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'product', label: 'AI answering product' },
  { key: 'booking', label: 'Books jobs' },
  { key: 'languages', label: 'Languages' },
  { key: 'price', label: 'Price' },
]

const faqs = [
  {
    question: 'What is an AI answering service for contractors?',
    answer:
      'It is an AI voice agent that picks up calls your office misses, after hours, on weekends or when every line is busy. The versions built into field service software can look up the customer, ask about the job, and in some cases book it straight onto your schedule.',
  },
  {
    question: 'Which field service software publishes a price for AI answering?',
    answer:
      'Only two of the ten we checked. Jobber’s AI Receptionist is a $29 a month add-on, included on Plus, with $0.79 per extra conversation. ServiceM8’s AI Phone Agent comes with its $32 phone plan (500 minutes) or $119 plan (unlimited minutes). ServiceTitan bills per call without publishing the rate, and the others do not publish prices.',
  },
  {
    question: 'Can an AI receptionist book jobs into my schedule?',
    answer:
      'ServiceTitan’s AI Virtual Agent books, confirms and reschedules, using Adaptive Capacity. Workiz says Genius Answering books jobs, FieldPulse says Operator AI syncs appointments to its calendar, and Service Fusion’s ZyraTalk and FieldEdge’s Free2Grow partner both book into the schedule. Housecall Pro’s help articles disagree on whether CSR AI booking is live yet.',
  },
  {
    question: 'Does AI answering work in Spanish?',
    answer:
      'ServiceTitan’s AI Virtual Agent switches to Spanish automatically, and Workiz says Jessica works in English and Spanish. Housecall Pro lists Spanish for CSR AI as coming soon. The other vendors do not state languages on the pages we read.',
  },
  {
    question: 'Is a live answering service better than AI?',
    answer:
      'It depends on call volume and how much judgment calls need. Several vendors list live receptionist partners instead of, or as well as, AI: FieldEdge and FieldPulse list Ruby, Kickserv lists Nexa, and Housecall Pro sells its own HCP Assist human answering.',
  },
]

const sources = [
  { name: 'ServiceM8 Phone (plans and AI Phone Agent)', url: 'https://www.servicem8.com/us/phone', checked: '2026-11-24' },
  { name: 'Jobber pricing (AI Receptionist add-on, included on Plus)', url: 'https://www.getjobber.com/pricing/', checked: '2026-11-03' },
  { name: 'Jobber help: Receptionist powered by Jobber AI', url: 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/', checked: '2026-11-07' },
  { name: 'Jobber help: add-on features', url: 'https://help.getjobber.com/en/articles/add-on-features-to-your-jobber-plan-subscription/', checked: '2026-11-03' },
  { name: 'ServiceTitan AI Virtual Agent', url: 'https://www.servicetitan.com/features/pro/virtual-agent', checked: '2026-11-24' },
  { name: 'ServiceTitan help: AI voice agent FAQ (usage billing, Spanish)', url: 'https://help.servicetitan.com/docs/ai-voice-agent-for-basic-phones-and-phones-pro-faq', checked: '2026-11-24' },
  { name: 'ServiceTitan Contact Center Pro', url: 'https://www.servicetitan.com/features/pro/contact-center', checked: '2026-11-24' },
  { name: 'Workiz Genius Answering', url: 'https://www.workiz.com/features/genius-answering/', checked: '2026-11-24' },
  { name: 'Workiz pricing plans (Genius add-ons sold separately)', url: 'https://www.workiz.com/pricing-plans/', checked: '2026-11-24' },
  { name: 'FieldPulse Operator AI', url: 'https://www.fieldpulse.com/features/operator-ai', checked: '2026-11-24' },
  { name: 'FieldPulse help: Operator AI overview', url: 'https://help.fieldpulse.com/add-ons/ai/operator-ai-overview.md', checked: '2026-11-24' },
  { name: 'FieldPulse help: integrations index (Ruby Receptionist)', url: 'https://help.fieldpulse.com/_llms/en/home/integrations.txt', checked: '2026-11-24' },
  { name: 'Housecall Pro help: CSR AI overview', url: 'https://help.housecallpro.com/en/articles/9740104-csr-ai-overview', checked: '2026-11-24' },
  { name: 'Housecall Pro help: AI Team overview', url: 'https://help.housecallpro.com/en/articles/9311875-ai-team-overview', checked: '2026-11-24' },
  { name: 'Service Fusion AI call answering service (ZyraTalk)', url: 'https://www.servicefusion.com/ai-call-answering-service', checked: '2026-11-24' },
  { name: 'Service Fusion ServiceCall.ai (call tracking and VoIP)', url: 'https://www.servicefusion.com/servicecall-call-tracker', checked: '2026-11-24' },
  { name: 'FieldEdge and Free2Grow integration announcement', url: 'https://fieldedge.com/news/fieldedge-announces-integration-with-free2grow-to-help-contractors-grow-revenue/', checked: '2026-11-24' },
  { name: 'FieldEdge partners (Ruby)', url: 'https://fieldedge.com/partners/', checked: '2026-11-24' },
  { name: 'Commusoft UK blog: Connect preview 2026 (AI phone agents)', url: 'https://www.commusoft.com/en-gb/blog/connect-preview-2026-overview/', checked: '2026-11-24' },
  { name: 'Kickserv partnerships (Nexa 24/7 Answering Service)', url: 'https://www.kickserv.com/partnerships', checked: '2026-11-24' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function AiAnsweringServicePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/ai-answering-service-for-contractors"
        datePublished={firstPublished}
        dateModified={contentUpdated}
        authorName="Usama Latif"
      />
      <BreadcrumbJsonLd items={crumbs} />
      <FAQJsonLd items={faqs} />

      <section className="hero-band">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-4 max-w-[860px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white md:text-[46px]">
            AI answering for contractors: <span className="text-orange-400">what field service tools offer</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            The AI phone agents sold by ten field service software vendors, whether they book jobs, which
            languages they speak and what they cost, from each vendor&rsquo;s own pages, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Most field service platforms now sell an AI agent that answers missed and after-hours calls, but
            only two publish a price. <strong>Jobber</strong>&rsquo;s AI Receptionist is a $29 a month add-on,
            included on Plus. <strong>ServiceM8</strong>&rsquo;s AI Phone Agent comes with its $32 phone plan
            (500 minutes) or $119 plan (unlimited minutes). <strong>ServiceTitan</strong>&rsquo;s AI Virtual Agent
            books and reschedules jobs, speaks Spanish and is billed per call. Workiz, FieldPulse, Housecall Pro
            and Service Fusion sell AI answering without published prices, FieldEdge works through a partner,
            and Kickserv lists a live answering service instead.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="why">Why built-in AI answering matters</h2>
          <p>
            A missed call is often a missed job, and most service calls come in while technicians are on site or
            after the office closes. An AI agent inside your field service software can see your customers and
            your schedule, so it can greet a returning customer, recognize a membership, and in the better
            versions put the job straight on the calendar instead of leaving a voicemail.
          </p>
          <p>Before you buy, check five things:</p>
          <ul>
            <li>Whether it books into your schedule, or only takes a message.</li>
            <li>How it handles emergencies and when it hands off to a person.</li>
            <li>Which languages it speaks.</li>
            <li>How it is billed: flat fee, per conversation, per minute or per call.</li>
            <li>Whether it needs the vendor&rsquo;s own phone system.</li>
          </ul>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>AI answering in field service software compared</h2>
          <p className={SUB}>
            From each vendor&rsquo;s documentation, not a hands-on test. Prices are USD per month where
            published. Sources and check dates are at the end of this page.
          </p>
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 lg:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3">Software</th>
                  {cols.map((c) => <th key={c.key} scope="col" className="p-3">{c.label}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {tools.map((t) => (
                  <tr key={t.name} className="align-top">
                    <th scope="row" className="p-3 font-semibold text-slate-900 dark:text-white">{t.name}</th>
                    {cols.map((c) => <td key={c.key} className="p-3">{t[c.key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3.5 lg:hidden">
            {tools.map((t) => (
              <article key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">{t.name}</h3>
                <dl className="mt-2 space-y-2 text-[14px] leading-[1.55]">
                  {cols.map((c) => (
                    <div key={c.key}>
                      <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-slate-400">{c.label}</dt>
                      <dd className="text-slate-700 dark:text-slate-300">{t[c.key]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <div className="prose-body mt-12">
          <h2 id="tools">The products in detail</h2>

          <h3>Jobber AI Receptionist</h3>
          <p>
            Jobber&rsquo;s AI Receptionist answers calls and texts around the clock. It is a $29 a month add-on on
            Core, Connect and Grow and is included on Plus with unlimited use. Jobber&rsquo;s Receptionist help
            article says the add-on covers 30 conversations per billing cycle, then $0.79 per conversation or a
            pause at the limit, while its general add-ons article says 100 a month, so confirm the allowance in
            your account. Add-ons are not available during the free trial. See{' '}
            <Link href="/pricing/jobber" className={A}>Jobber pricing</Link>.
          </p>

          <h3>ServiceM8 AI Phone Agent</h3>
          <p>
            ServiceM8 Phone has three plans: Connect at $19 a month with 500 minutes and no AI agent, Connect
            Plus at $32 with 500 minutes and the AI Phone Agent, and Unlimited at $119 with unlimited minutes and
            the AI agent. Extra minutes cost 3¢ each on the 500-minute plans. It needs a ServiceM8 subscription.
            ServiceM8 does not describe whether the AI agent books jobs.
          </p>

          <h3>ServiceTitan AI Virtual Agent</h3>
          <p>
            ServiceTitan&rsquo;s AI Virtual Agent handles inbound calls and texts, overflow and after hours. It
            books new jobs, confirms and reschedules appointments, recognizes memberships and hands off to a live
            agent, and ServiceTitan recommends setting up Adaptive Capacity for booking. It switches to Spanish
            automatically. Billing is based on usage, and every call is billed whatever the outcome; the rate is
            not published. It works alongside your phone platform or as part of Contact Center Pro. Its FAQ still
            names the older Essentials and The Works packages as a requirement, so confirm eligibility under
            the current packages. See <Link href="/pricing/servicetitan" className={A}>ServiceTitan pricing</Link>.
          </p>

          <h3>Workiz Genius Answering</h3>
          <p>
            Workiz&rsquo;s Genius Answering, voiced by an AI agent it calls Jessica, answers calls, texts, emails
            and web forms 24/7 in English and Spanish. It is sold separately from the Standard, Pro and Ultimate
            plans, with no published price, and Workiz&rsquo;s terms say some call types are billed at different
            per-minute rates. See <Link href="/pricing/workiz" className={A}>Workiz pricing</Link>.
          </p>

          <h3>FieldPulse Operator AI</h3>
          <p>
            Operator AI answers after-hours, declined and overflow calls, syncs appointments to the FieldPulse
            calendar, routes urgent requests such as a burst pipe faster, and alerts technicians by text or
            email. FieldPulse describes it as an add-on to its Engage phone system, with no published price, and
            its terms say Operator AI calls are recorded and transcribed. FieldPulse also lists Ruby live
            receptionists as a partner. See <Link href="/pricing/fieldpulse" className={A}>FieldPulse pricing</Link>.
          </p>

          <h3>Housecall Pro CSR AI</h3>
          <p>
            Housecall Pro&rsquo;s CSR AI answers and summarizes customer calls and tracks website chats. Its help
            articles disagree on two points: one describes booking as a permission you can turn on while also
            listing booking as coming soon, and one says the AI Team is included free while the pricing page lists
            CSR AI as an add-on without a price. Spanish and text answering are listed as coming. Housecall Pro
            also sells HCP Assist, its own human answering service. Ask for the current price and booking status
            in writing. See <Link href="/pricing/housecall-pro" className={A}>Housecall Pro pricing</Link>.
          </p>

          <h3>Service Fusion and ZyraTalk</h3>
          <p>
            Service Fusion&rsquo;s AI call answering page describes ZyraTalk, from the same EverPro group, which
            answers calls 24/7, books into your calendar so jobs show on the dispatch board, escalates urgent
            calls, and can make follow-up calls. No price is published. ServiceCall.ai, a separate Service Fusion
            add-on, is a call tracking and VoIP system rather than an AI answering agent. See{' '}
            <Link href="/pricing/service-fusion" className={A}>Service Fusion pricing</Link>.
          </p>

          <h3>FieldEdge, Commusoft and Kickserv</h3>
          <p>
            FieldEdge has no AI answering of its own; it announced an integration with Free2Grow, an AI answering
            platform that books appointments directly into FieldEdge, on September 15, 2026, and lists Ruby as a
            live receptionist partner. Commusoft announced AI phone agents for service bookings, out-of-hours
            leads and customer feedback on its UK blog, without US availability or pricing. Kickserv offers no AI
            answering and lists the Nexa 24/7 live answering service, with 10% off for Kickserv customers.
          </p>

          <h2 id="choose">How to choose</h2>
          <ul>
            <li><strong>You want a known monthly cost</strong>: Jobber ($29 add-on) or ServiceM8 ($32 or $119 phone plan) publish prices.</li>
            <li><strong>You want jobs booked against real capacity</strong>: ServiceTitan&rsquo;s AI Virtual Agent with Adaptive Capacity.</li>
            <li><strong>Spanish-speaking customers</strong>: ServiceTitan and Workiz state Spanish support today.</li>
            <li><strong>You prefer people</strong>: Ruby (FieldEdge, FieldPulse), Nexa (Kickserv) or HCP Assist (Housecall Pro).</li>
          </ul>
          <p>
            For how booked jobs land on the board, see our{' '}
            <Link href="/guides/field-service-scheduling-software" className={A}>field service scheduling software</Link>{' '}
            guide, and for HVAC call handling, <Link href="/guides/hvac-dispatch-software" className={A}>HVAC dispatch software</Link>.
          </p>
        </div>

        <section className="mt-12">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line">
            Jobber and ServiceM8 are the only two that publish AI answering prices, and ServiceTitan documents the
            most capable booking agent. For everyone else, get the price, the billing unit and a test call that
            books a real job before you sign up.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/guides/field-service-scheduling-software" className="text-orange-600 hover:text-orange-800">Field service scheduling software →</Link>
            <Link href="/guides/hvac-dispatch-software" className="text-orange-600 hover:text-orange-800">HVAC dispatch software →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
            <Link href="/guides" className="text-orange-600 hover:text-orange-800">All guides →</Link>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Sources</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
              {sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="nofollow noopener" className="hover:text-orange-600">
                    {s.name}
                  </a>{' '}
                  <span className="text-slate-400">· checked {s.checked}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
