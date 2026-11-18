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
 * /guides/refrigerant-tracking-software: buyer's guide to dedicated refrigerant tracking and
 * compliance software ("refrigerant tracking software", "refrigerant compliance management
 * software", "refrigerant management software", "refrigerant leak tracking software").
 *
 * Scope vs /by-industry/refrigeration: that page targets refrigeration SERVICE management (FSM:
 * dispatch, work orders, invoicing) and only summarises refrigerant rules. This page compares
 * the specialist tools that calculate leak rates and produce EPA/CARB records, and links back
 * to the FSM page for the service side.
 *
 * Regulatory statements: eCFR 40 CFR 82.157 and 84.106/84.108 (Title 40 current to 2026-11-13),
 * EPA's January 2026 ER&R leak repair fact sheet, EPA's May 2026 Technology Transitions fact
 * sheet, and Federal Register document 2026-10388 (proposed TRU exemption, not final as of
 * 2026-11-17). Vendor facts: each vendor's own pages, checked 2026-11-17. Only FMHero and
 * Ref LeakLog publish prices; no third-party estimates. Nothing was tested hands-on.
 */

const PATH = '/guides/refrigerant-tracking-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Refrigerant Tracking Software (2026): 7 Tools Compared'
const DESCRIPTION =
  'Compare 7 refrigerant tracking and compliance tools on leak-rate math, cylinder tracking, EPA and CARB reports, mobile use and published pricing.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/refrigerant-tracking-software',
  type: 'article',
  modifiedTime: contentUpdated,
  // 54-char keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Refrigerant tracking software', href: PATH },
]

type Tool = {
  name: string
  builtFor: string
  assets: string
  leaks: string
  reports: string
  mobile: string
  price: string
}

const tools: Tool[] = [
  {
    name: 'Fexa Trakref',
    builtFor: '“Multi-site brands and contractors”',
    assets: 'HVAC/R asset and location records; refrigerant inventory, cylinder moves and recycling, appliance disposals',
    leaks: 'Tracks leak repair deadlines, leak rate exceedances, chronically leaking systems, failed leak verification and ALD calibration',
    reports: 'EPA 608, California CARB and EPA GreenChill reports and exports',
    mobile: 'App with asset tracking, work orders and offline data entry',
    price: 'Not published (“Talk to sales”)',
  },
  {
    name: 'Sphera Refrigerant Compliance Management',
    builtFor: 'Part of Sphera’s environmental accounting software; buyer type not stated',
    assets: 'Tracks refrigerant usage, repairs and disposal',
    leaks: 'Leak rate calculations, automatic alerts, verification testing on repairs, periodic inspection scheduling, automatic leak detection',
    reports: 'Positioned for Clean Air Act Title VI, Toxics Release Inventory, California AB 32 and EU F-Gas',
    mobile: 'Not stated on the product page',
    price: 'Not published (“Request a demo”)',
  },
  {
    name: 'Accruent Sustain (refrigerant management)',
    builtFor: 'Multi-location enterprises; Accruent’s case study is a grocery retailer',
    assets: 'Full system details, gas types and volumes; technician certifications',
    leaks: 'Automated leak calculations, leak rate alerting and follow-up checks, verification workflows',
    reports: 'Configurable to EPA Section 608 tracking and reporting; record retention for EPA and F-Gas',
    mobile: 'Data entry from a mobile device',
    price: 'Not published (“Book a Demo”)',
  },
  {
    name: 'MSA Parasense Refrigerant Tracking & Compliance',
    builtFor: '“Equipment owner or refrigeration contractor”, single site to enterprise',
    assets: 'Equipment by make, model and refrigerant type; “Refrigerant Bank and Bottles” for stored refrigerant',
    leaks: 'Automated leak rate calculator and compliance calendar',
    reports: 'EPA compliance report and CARB XML; EPA 608, CARB and F-Gas named',
    mobile: 'Not stated on the pages we checked',
    price: 'Quote (“Request a Quote”); no user limit or per-user fee',
  },
  {
    name: 'ServiceChannel Refrigerant Tracking',
    builtFor: 'Multi-location businesses using ServiceChannel’s facilities platform',
    assets: 'Rack, circuit and component hierarchy with charge levels; refrigerant types and inventories',
    leaks: 'Automatic leak rate calculation, follow-up verification scheduling, chronic leak fields, AIM Act 15-lb and 50-lb threshold logic',
    reports: 'EPA, AIM Act, GreenChill, state-level and EU F-Gas reporting',
    mobile: 'ServiceChannel Mobile asset-tag scanning and a Provider App for contractors',
    price: 'Not published (demo)',
  },
  {
    name: 'FMHero',
    builtFor: 'Technicians, contractors and facility owners',
    assets: 'Equipment records with nameplate scanning; new and recovered refrigerant and cylinders',
    leaks: 'Real-time leak rate calculations and exceedance warnings; tracks repair deadlines',
    reports: '“Audit-ready compliance reports”; report formats not named',
    mobile: 'Mobile app, free for every technician',
    price: 'Free technician app; HeroPro $15/mo and Team $25 per field user/mo, paid yearly; facility plans by quote',
  },
  {
    name: 'Ref LeakLog',
    builtFor: '“HVAC/R contractors and building owners”',
    assets: 'Refrigerant type and charge per unit, audited full-charge changes, QR tags, spreadsheet import and nameplate reader',
    leaks: 'Annualizing and rolling average methods, flags threshold breaches with a 30-day repair clock, verification tests, 125% chronic-leaker test',
    reports: 'PDF compliance reports; CARB not stated',
    mobile: 'Browser app on phone, tablet and desktop; no separate app',
    price: '$29/mo (1 user), $59/mo (up to 3), $89/mo (up to 8); 14-day free trial',
  },
]

const cols: { key: keyof Omit<Tool, 'name'>; label: string }[] = [
  { key: 'builtFor', label: 'Built for' },
  { key: 'assets', label: 'Equipment and refrigerant inventory' },
  { key: 'leaks', label: 'Leak tracking' },
  { key: 'reports', label: 'Reports' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'price', label: 'Pricing' },
]

const thresholds: { type: string; rate: string }[] = [
  { type: 'Commercial refrigeration', rate: '20%' },
  { type: 'Industrial process refrigeration', rate: '30%' },
  { type: 'Comfort cooling and other appliances (HFC rule also names refrigerated transport)', rate: '10%' },
]

const buyers: { who: string; start: string; why: string }[] = [
  {
    who: 'Small HVAC/R contractor, a few covered units',
    start: 'Ref LeakLog or FMHero',
    why: 'The only two tools here with published prices and self-serve sign-up. Neither documents an integration with dispatch software, so technicians log refrigerant in a second app.',
  },
  {
    who: 'Contractor serving multi-site clients',
    start: 'Fexa Trakref, MSA Parasense or FMHero Team',
    why: 'All three say they serve both contractors and equipment owners, so client and contractor can work in one record. Check whether your clients already use one of them.',
  },
  {
    who: 'Multi-site owner or operator (grocery, retail, restaurants)',
    start: 'Accruent Sustain, ServiceChannel, Fexa Trakref or MSA Parasense',
    why: 'These document leak rate calculation, follow-up verification and enterprise reporting. ServiceChannel’s module fits best if you already run ServiceChannel for facilities work orders.',
  },
  {
    who: 'Enterprise EHS or sustainability team',
    start: 'Sphera, Accruent Sustain or Fexa Trakref',
    why: 'Sphera places refrigerant compliance inside environmental accounting alongside TRI and California AB 32; ask how it handles AIM Act records specifically.',
  },
]

const faqs = [
  {
    question: 'What is refrigerant tracking software?',
    answer:
      'It records how much refrigerant each appliance holds, how much is added or removed at every service, and calculates the leak rate after each addition. Specialist tools then flag appliances above the EPA leak rate threshold, track repair deadlines and verification tests, and produce reports such as EPA Section 608 records or California CARB exports. Field service software runs dispatch and invoicing and usually only logs the amount added.',
  },
  {
    question: 'Which refrigerant systems need leak repair tracking in 2026?',
    answer:
      'Under EPA rules, appliances with 50 or more pounds of an ozone-depleting refrigerant (Section 608, 40 CFR 82.157), and since January 1, 2026, appliances with 15 or more pounds of an HFC or a substitute with a global warming potential above 53 (AIM Act, 40 CFR 84.106). Residential and light commercial air conditioning and heat pumps are excluded from the HFC rule. State rules, such as California’s Refrigerant Management Program, can add requirements.',
  },
  {
    question: 'Do I have to calculate a leak rate every time refrigerant is added?',
    answer:
      'For appliances covered by the HFC rule, yes: 40 CFR 84.106(b) says the owner or operator must calculate the leak rate every time refrigerant is added, except after a retrofit, a new installation or a seasonal variance. The service record must include the leak rate and the method used. This is the calculation specialist software automates.',
  },
  {
    question: 'How long must refrigerant records be kept?',
    answer:
      'At least three years under both Section 608 and the HFC rule. Full-charge records for appliances of 15 pounds or more must be kept until three years after the appliance is retired (40 CFR 84.106(l)). Records can be electronic or paper.',
  },
  {
    question: 'Can ServiceTitan or other field service software track refrigerant?',
    answer:
      'Partly. ServiceTitan documents a custom Refrigerant Tracking form that logs pounds added, recovered, recycled or disposed of per equipment and job, and says the workflow does not guarantee compliance. BuildOps tracks refrigerant type, amount and activity by asset, and Commusoft logs refrigerant type and amount per asset. None of them documents an automatic leak rate calculation across appliances like the specialist tools here.',
  },
  {
    question: 'Is there free refrigerant tracking software?',
    answer:
      'FMHero’s technician mobile app is free, and its web and office users are free on paid plans. Ref LeakLog offers a 14-day free trial. The enterprise tools in this guide do not publish prices.',
  },
  {
    question: 'Does refrigerant tracking software make a business compliant?',
    answer:
      'No software can guarantee compliance. It organises records and calculations; the owner or operator remains responsible for meeting EPA and state rules. ServiceTitan’s own help page says its refrigerant workflow “does not guarantee regulatory compliance”. Check vendor claims against the current regulation text.',
  },
]

const sources = [
  { name: 'eCFR 40 CFR 84.106: HFC leak repair, leak rate calculation, records, chronic leakers (current to 2026-11-13)', url: 'https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-84/subpart-C/section-84.106', checked: '2026-11-17' },
  { name: 'eCFR 40 CFR 84.108: automatic leak detection systems', url: 'https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-84/subpart-C/section-84.108', checked: '2026-11-17' },
  { name: 'eCFR 40 CFR 82.157: Section 608 leak repair for ozone-depleting refrigerants', url: 'https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-F/section-82.157', checked: '2026-11-17' },
  { name: 'EPA Section 608 leak repair requirements', url: 'https://www.epa.gov/section608/stationary-refrigeration-leak-repair-requirements', checked: '2026-11-17' },
  { name: 'EPA ER&R leak repair fact sheet (January 2026)', url: 'https://www.epa.gov/system/files/documents/2026-01/er-r-fact-sheet-leak-repair-2026-01-13_1.pdf', checked: '2026-11-17' },
  { name: 'EPA Technology Transitions final rule fact sheet (May 2026)', url: 'https://www.epa.gov/system/files/documents/2026-05/fact-sheet-san-12166-technology-transitions-frm.pdf', checked: '2026-11-17' },
  { name: 'Federal Register 2026-10388: proposed TRU exemption from HFC leak repair (proposed rule)', url: 'https://www.federalregister.gov/documents/2026/05/26/2026-10388/phasedown-of-hydrofluorocarbons-excluding-road-and-intermodal-container-transport-refrigeration', checked: '2026-11-17' },
  { name: 'California Air Resources Board: Refrigerant Management Program', url: 'https://ww2.arb.ca.gov/our-work/programs/refrigerant-management-program', checked: '2026-11-17' },
  { name: 'Fexa Trakref product page', url: 'https://fexa.io/fexa-trakref/', checked: '2026-11-17' },
  { name: 'Fexa pricing and Trakref features', url: 'https://fexa.io/pricing/', checked: '2026-11-17' },
  { name: 'Fexa: acquisition of Trakref (completed April 3, 2023)', url: 'https://fexa.io/blog/fexas-acquisition-of-trakref/', checked: '2026-11-17' },
  { name: 'Sphera Refrigerant Compliance Management Software', url: 'https://sphera.com/solutions/environment-health-safety-sustainability/environmental-accounting-software/refrigerant-compliance-management-software', checked: '2026-11-17' },
  { name: 'Accruent Sustain refrigerant management', url: 'https://www.accruent.com/products/sustain/refrigerant-management', checked: '2026-11-17' },
  { name: 'MSA Parasense Refrigerant Tracking and Compliance Software', url: 'https://us.msasafety.com/p/ParasenseRefrigerant', checked: '2026-11-17' },
  { name: 'MSA refrigerant tracking and compliance solution (no user limit)', url: 'https://us.msasafety.com/solution/refrigerant-tracking-and-compliance', checked: '2026-11-17' },
  { name: 'MSA blog: Parasense features (asset database, Refrigerant Bank and Bottles, CARB XML)', url: 'https://blog.msasafety.com/refrigerant-tracking-and-compliance-software-an-overview/', checked: '2026-11-17' },
  { name: 'JLL: Corrigo RTC built on MSA Parasense (September 23, 2024)', url: 'https://www.jll.com/en-us/newsroom/jll-corrigo-adds-refrigerant-tracking-and-compliance', checked: '2026-11-17' },
  { name: 'ServiceChannel Refrigerant Tracking', url: 'https://servicechannel.com/products/refrigerant-tracking/', checked: '2026-11-17' },
  { name: 'FMHero features', url: 'https://www.fmhero.com/', checked: '2026-11-17' },
  { name: 'FMHero pricing', url: 'https://www.fmhero.com/pricing/', checked: '2026-11-17' },
  { name: 'Ref LeakLog features, pricing and FAQ', url: 'https://refleaklog.app/', checked: '2026-11-17' },
  { name: 'ServiceTitan help: Refrigerant Tracking for EPA recordkeeping', url: 'https://help.servicetitan.com/construction/docs/set-up-and-use-refrigerant-tracking-for-epa-recordkeeping-1', checked: '2026-11-17' },
  { name: 'BuildOps refrigeration software', url: 'https://buildops.com/industries/refrigeration', checked: '2026-11-17' },
  { name: 'Commusoft refrigeration software (US)', url: 'https://www.commusoft.com/en-us/industries/refrigeration-software/', checked: '2026-11-17' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function RefrigerantTrackingSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/refrigerant-tracking-software"
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
            Refrigerant tracking software: <span className="text-orange-400">7 tools compared for EPA leak rules</span>
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            Leak-rate math, cylinder tracking, EPA and CARB reports, mobile use and pricing for seven
            dedicated refrigerant compliance tools, from each vendor’s own pages and the current EPA
            regulations, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Dedicated refrigerant tracking software calculates an appliance’s leak rate each time
            refrigerant is added, flags units over the EPA threshold, tracks repair deadlines and
            verification tests, and produces audit records. Seven tools document that work:{' '}
            <strong>Fexa Trakref</strong>, <strong>Sphera</strong>, <strong>Accruent Sustain</strong>,{' '}
            <strong>MSA Parasense</strong>, <strong>ServiceChannel</strong>, <strong>FMHero</strong> and{' '}
            <strong>Ref LeakLog</strong>. Only FMHero and Ref LeakLog publish prices; Ref LeakLog
            starts at $29/month. The need grew in 2026: since January 1, EPA’s HFC leak repair rule
            covers appliances with 15 pounds or more of refrigerant, while the 50-pound threshold still
            applies to ozone-depleting refrigerants.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="fsm-vs-refrigerant-software">Field service software vs refrigerant compliance software</h2>
          <p>
            HVAC and refrigeration field service management (FSM) software runs the service business:
            booking the call, dispatching a technician to a down cooler, recording the work and
            invoicing. Some FSM tools also log refrigerant. ServiceTitan documents a custom
            Refrigerant Tracking form for pounds added, recovered, recycled or disposed of per
            equipment and job; BuildOps tracks refrigerant type, amount and activity by asset; and
            Commusoft logs the type and amount used on every asset.
          </p>
          <p>
            Refrigerant compliance software does a different job. It keeps each appliance’s full
            charge, calculates the leak rate from every addition, compares it with the threshold for
            that appliance type, and tracks what has to happen next: repair within 30 days,
            verification tests, inspections, and the chronic-leaker report. None of the FSM tools
            above documents a leak rate calculation across a fleet of appliances, and ServiceTitan’s
            help page says its refrigerant workflow “does not guarantee regulatory compliance.”
          </p>
          <p>
            Many teams run both: FSM software for the service work and a compliance tool as the
            system of record for refrigerant. If you are choosing the FSM side, see our{' '}
            <Link href="/by-industry/refrigeration" className={A}>refrigeration service management software</Link>{' '}
            guide or the <Link href="/by-industry/hvac" className={A}>HVAC software guide</Link>.
          </p>

          <h2 id="epa-rules-2026">What EPA rules require you to record in 2026</h2>
          <p>
            Two federal programs apply, and the refrigerant decides which one. This is general
            information from the regulation text, not legal or compliance advice.
          </p>
          <ul>
            <li>
              <strong>Ozone-depleting refrigerants (such as R-22):</strong> Clean Air Act Section 608
              leak repair rules (40 CFR 82.157) apply to appliances with a full charge of 50 pounds
              or more. Since April 10, 2020 they do not apply to appliances containing only
              substitute refrigerants.
            </li>
            <li>
              <strong>HFCs and substitutes with a global warming potential above 53:</strong> the
              AIM Act Emissions Reduction and Reclamation rule (40 CFR 84.106) has applied since
              January 1, 2026 to appliances with a full charge of 15 pounds or more. It excludes
              appliances that contain only an ozone-depleting refrigerant and the residential and
              light commercial air conditioning and heat pump subsector.
            </li>
          </ul>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <caption className="sr-only">EPA leak rate thresholds that trigger repair</caption>
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Appliance type</th>
                <th scope="col" className="p-3.5">Leak rate that triggers repair</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {thresholds.map((r) => (
                <tr key={r.type} className="align-top">
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{r.type}</th>
                  <td className="p-3.5">{r.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-8">
          <p>
            The thresholds are the same under both programs. Above them, leaks must be repaired within
            30 days, or 120 days if an industrial process shutdown is needed. For HFC appliances, the
            owner or operator must run initial and follow-up verification tests on each repair. The
            parts of the HFC rule that software has to support are:
          </p>
          <ul>
            <li>
              <strong>A leak rate at every addition.</strong> The owner or operator must calculate the
              leak rate every time refrigerant is added, except after a retrofit, a new installation
              or a seasonal variance, using the annualizing or rolling average method.
            </li>
            <li>
              <strong>Full-charge records.</strong> By January 1, 2026, or at installation, owners
              must determine the full charge of every appliance of 15 pounds or more, record how it
              was determined, and keep that record until three years after the appliance is retired.
            </li>
            <li>
              <strong>A record for every service.</strong> Each installation, service, repair or
              disposal needs the appliance and location, date, parts, type of work, technician name,
              amount and type of refrigerant added or removed, full charge, and the leak rate with the
              method used. Technicians must give the owner this documentation when the work is done.
            </li>
            <li>
              <strong>Three-year retention.</strong> Records are kept at least three years, on paper
              or electronically.
            </li>
            <li>
              <strong>Chronic leakers.</strong> Appliances of 15 pounds or more that leak 125% or more
              of their full charge in a calendar year must be reported to EPA by March 1 of the next
              year.
            </li>
            <li>
              <strong>Inspections and leak detection.</strong> After a leak above the threshold,
              commercial and industrial process refrigeration appliances of 500 pounds or more need
              leak inspections every three months until four quarters pass under the threshold.
              Systems of 1,500 pounds or more must install automatic leak detection, audited and
              calibrated annually: new systems from January 1, 2026, and systems installed from 2017
              through 2025 by January 1, 2027.
            </li>
          </ul>
          <p>
            <strong>What changed in 2026.</strong> In May 2026 EPA finalized changes to its
            Technology Transitions rule, which governs the refrigerants allowed in new equipment, and
            proposed exempting road and intermodal transport refrigeration units from the HFC leak
            repair rule. As of November 17, 2026, the Federal Register shows that exemption as a
            proposed rule only, and we found no final amendment to the leak repair section itself.
            States can go further: California’s Refrigerant Management Program covers systems with
            more than 50 pounds of high-GWP refrigerant and has its own reporting through CARB’s R3
            tool.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Refrigerant tracking software compared</h2>
          <p className={SUB}>
            Documented capabilities only, from each vendor’s own pages checked November 17, 2026.
            Not a hands-on test or a ranking. “Not stated” means we did not find it on the vendor’s
            pages, not that the feature is missing.
          </p>

          {/* Desktop table */}
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

          {/* Mobile cards */}
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
          <h2 id="tools">The seven tools in detail</h2>

          <h3 id="fexa-trakref">Fexa Trakref</h3>
          <p>
            <strong>Best fit:</strong> multi-site brands and the contractors who service them. Fexa
            acquired Trakref in 2023 and now sells it as Fexa Trakref, describing it as “built for
            multi-site brands and contractors.” Its compliance center tracks leak repair deadlines,
            leak rate exceedances, chronically leaking systems, failed leak verification and ALD
            calibration, and it exports EPA 608, California CARB and EPA GreenChill reports. It
            covers refrigerant inventory, cylinder moves and recycling, and appliance disposals, and
            its mobile app supports offline data entry. <strong>Integrations:</strong> an API to sync
            with third-party CMMS or facilities systems, plus Fexa’s own CMMS.{' '}
            <strong>Limitation:</strong> no published price.
          </p>

          <h3 id="sphera">Sphera Refrigerant Compliance Management</h3>
          <p>
            <strong>Best fit:</strong> environmental, health and safety (EHS) teams that want
            refrigerant inside wider environmental reporting. Sphera lists the product under its
            environmental accounting software and documents leak rate calculations, automatic
            alerts, verification testing on repairs, scheduled inspections and automatic leak
            detection. It positions the tool for Clean Air Act Title VI, Toxics Release Inventory,
            California AB 32 and EU F-Gas. <strong>Limitation:</strong> the product page does not
            state mobile use, integrations or price, and does not name the AIM Act, so ask how it
            handles the 15-pound HFC records.
          </p>

          <h3 id="accruent-sustain">Accruent Sustain</h3>
          <p>
            <strong>Best fit:</strong> multi-location enterprises; Accruent’s featured customer quote
            comes from a grocery retailer, and it calls Sustain the longest-standing refrigerant
            management application on the market. It captures system details, gas types and
            volumes, technician certifications, and leak rate alerting with follow-up checks, and
            says staff can enter data from a mobile device. <strong>Integrations:</strong> Accruent
            says Sustain can integrate with your CMMS or mobile workforce management system.{' '}
            <strong>Limitation:</strong> no published price, and the page describes Section 608
            configuration without naming the AIM Act HFC rule.
          </p>

          <h3 id="msa-parasense">MSA Parasense</h3>
          <p>
            <strong>Best fit:</strong> equipment owners and refrigeration contractors, from a single
            site to an enterprise rollout. MSA documents an automated leak rate calculator, a
            compliance calendar, an asset database by make, model and refrigerant type, and a
            “Refrigerant Bank and Bottles” feature for stored refrigerant, with EPA compliance and
            CARB XML reports. Pricing is by quote, but MSA says there is “no user limit or cost per
            user fee.” <strong>Integrations:</strong> JLL built its Corrigo refrigerant tracking
            add-on on Parasense. <strong>Limitation:</strong> the pages we checked do not describe a
            mobile app.
          </p>

          <h3 id="servicechannel">ServiceChannel Refrigerant Tracking</h3>
          <p>
            <strong>Best fit:</strong> multi-location businesses already using ServiceChannel to manage
            facilities work orders. The module tracks racks, circuits and components with charge
            levels, calculates leak rates automatically, schedules follow-up verification, and
            generates EPA, AIM Act, GreenChill, state-level and EU F-Gas reporting. Contractors work
            through ServiceChannel’s Provider App, and staff can scan asset tags on mobile.{' '}
            <strong>Limitation:</strong> it is a module of a larger facilities platform with no
            published price, so it is a poor fit as a standalone tool.
          </p>

          <h3 id="fmhero">FMHero</h3>
          <p>
            <strong>Best fit:</strong> technicians and contractors who want to start small. The
            technician app is free and covers nameplate scanning, refrigerant and cylinder tracking,
            and real-time leak rate calculations with exceedance warnings; FMHero also says it tracks
            repair deadlines. HeroPro costs $15/month for a single user, and Team $25 per field user
            per month, both paid yearly; web and office users are free, and facility plans are
            quoted. <strong>Limitation:</strong> FMHero describes “audit-ready compliance reports”
            but does not name the report formats (EPA, AIM Act or CARB), and no integrations are
            named.
          </p>

          <h3 id="ref-leaklog">Ref LeakLog</h3>
          <p>
            <strong>Best fit:</strong> small HVAC/R contractors and building owners focused on the
            federal HFC rule. It builds in both the annualizing and rolling average leak rate
            methods, starts a 30-day repair countdown when a unit crosses its threshold, logs
            verification tests, runs the 125% chronic-leaker test, and produces PDF compliance
            reports. It costs $29/month for one user, $59 for up to three and $89 for up to eight,
            with a 14-day free trial. <strong>Limitation:</strong> it does not integrate with
            dispatch software (its FAQ says technicians log the service event on their phone after
            the call), cylinder tracking and CARB reports are not stated, and it runs in the browser
            rather than as a separate app.
          </p>

          <h2 id="which-to-choose">Which refrigerant tracking software fits your business</h2>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Your situation</th>
                <th scope="col" className="p-3.5">Start with</th>
                <th scope="col" className="p-3.5">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {buyers.map((b) => (
                <tr key={b.who} className="align-top">
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{b.who}</th>
                  <td className="p-3.5">{b.start}</td>
                  <td className="p-3.5">{b.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-12">
          <h2 id="demo-checklist">Questions to ask in a demo</h2>
          <ul>
            <li>
              <strong>Does it cover the 15-pound HFC rule, not only Section 608?</strong> Ask to see an
              appliance with 20 pounds of an HFC blend go through a leak rate calculation and repair
              deadline.
            </li>
            <li>
              <strong>Which leak rate method does it use?</strong> The rule allows the annualizing or
              rolling average method and limits when you can switch.
            </li>
            <li>
              <strong>How is full charge recorded?</strong> The rule requires the method used and any
              revisions, kept until three years after the appliance is retired.
            </li>
            <li>
              <strong>Who enters the data?</strong> If your technicians already use FSM software, ask
              whether the tool integrates or whether they will log each service twice.
            </li>
            <li>
              <strong>Check every deadline against the regulation.</strong> We found vendor material
              that states a repair window different from the 30 days in 40 CFR 84.106(d), so verify
              dates against the eCFR rather than marketing copy.
            </li>
            <li>
              <strong>Get the price in writing.</strong> Five of the seven tools quote only; ask for
              the same number of sites, appliances and users from each.
            </li>
          </ul>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on refrigerant tracking software">
            Small contractors can start with Ref LeakLog ($29/month) or FMHero’s free technician app,
            the only tools here with published prices. Multi-site owners and the contractors who
            serve them should demo Fexa Trakref, MSA Parasense, Accruent Sustain or ServiceChannel,
            and EHS teams can add Sphera. Whatever you choose, confirm it calculates leak rates for
            15-pound HFC appliances under the 2026 rule, and keep your FSM software for dispatch and
            invoicing. Our <Link href="/how-we-review" className={A}>review method</Link> explains
            why we show only prices vendors publish.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/by-industry/refrigeration" className="text-orange-600 hover:text-orange-800">Refrigeration FSM software →</Link>
            <Link href="/by-industry/hvac" className="text-orange-600 hover:text-orange-800">HVAC FSM software →</Link>
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
