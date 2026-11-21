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
 * /guides/open-source-field-service-software: targets "open source field service management
 * software", "open source field service software" and close variants.
 *
 * GSC (2026-08-16 to 2026-11-15, site level, no page on this topic yet): open source field service
 * management software 66 impressions at 67.1; open source field service software 29 at 66.7; open
 * source field service management 10 at 67.5. "Freeware" queries belong to /free.
 *
 * Scope: software whose license is open source (source code, self-hosting, modification). Free
 * plans of commercial tools live on /free and are not repeated here.
 *
 * Sources: license files, manifests, READMEs and release pages in each project's official
 * repository, the projects' own docs and pricing pages, Odoo's editions page and opensource.org,
 * checked 2026-11-20. Odoo's Field Service conclusion rests on its editions table (Planning, Studio
 * and mobile apps marked Enterprise) and on the LGPL Community repository having no Field Service
 * or Planning module; Odoo publishes no single sentence saying so. Nothing installed or tested.
 */

const PATH = '/guides/open-source-field-service-software'
// firstPublished stays unset until the first production publish, then never changes.
const { firstPublished, contentUpdated } = articleDates[PATH]

const TITLE = 'Open Source Field Service Software: 6 Options Checked (2026)'
const DESCRIPTION =
  'Odoo’s own Field Service is not in its open source edition. See which open source FSM options exist: OCA Field Service, Dolibarr, ERPNext, Axelor and more.'

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  slug: 'guides/open-source-field-service-software',
  type: 'article',
  modifiedTime: contentUpdated,
  // Keyword title; the template suffix would push it past the 70-char limit.
  brandSuffix: false,
})

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Open source field service software', href: PATH },
]

type Option = {
  name: string
  license: string
  features: string
  mobile: string
  hosting: string
  maturity: string
}

const options: Option[] = [
  {
    name: 'Odoo Community + OCA Field Service',
    license: 'LGPL-3 (Odoo Community) plus AGPL-3 (OCA modules)',
    features: 'Field service orders, calendar and timeline, routes, recurring orders, agreements, invoicing link, customer portal, signatures, equipment, skills, vehicles',
    mobile: 'No native app: Odoo’s Android and iOS apps are Enterprise only',
    hosting: 'Self-host or a partner; Odoo’s own hosting is Enterprise only',
    maturity: '34 modules for Odoo 19; none on the Odoo 20 branch yet',
  },
  {
    name: 'Dolibarr (Interventions)',
    license: 'GPL-3.0',
    features: 'Intervention sheets for service and maintenance orders, recurring interventions, signatures, billed status; tickets and agenda modules',
    mobile: 'DoliDroid, a GPL-3.0 Android client',
    hosting: 'Self-host, or partners such as DoliCloud from €14 per user a month',
    maturity: 'Release 24.0.3 on November 11, 2026',
  },
  {
    name: 'ERPNext',
    license: 'GPL-3.0',
    features: 'Maintenance visits (scheduled, unscheduled, breakdown) and maintenance schedules linked to item serial numbers',
    mobile: 'Not checked',
    hosting: 'Self-host free, or Frappe Cloud sites from $5 a month',
    maturity: 'Release v16.60.0 on November 17, 2026',
  },
  {
    name: 'Axelor Open Suite',
    license: 'AGPL-3.0 (commercial plans also sold)',
    features: 'Intervention module, maintenance contracts, recurring visits from contracts, skill-based assignment',
    mobile: 'Axelor Open Mobile (AGPL-3.0) with an Intervention module',
    hosting: 'Self-host allowed; Pro plan €35 per user a month from 10 users, hosting quoted separately',
    maturity: 'Release v9.2.1 on November 13, 2026',
  },
  {
    name: 'Crewtavo',
    license: 'AGPL-3.0',
    features: 'Requests, quotes, scheduling, crews in the field, invoicing and a client portal',
    mobile: 'Installable web app for Android and iPhone that works offline',
    hosting: 'Self-host with Docker and Node.js 20 or newer',
    maturity: 'Created October 2026; v0.5.4 on November 19, 2026',
  },
  {
    name: 'OpenFieldService',
    license: 'MIT',
    features: 'Technician dispatch, scheduling, invoicing from completed jobs; maintenance plans and customer portals not included',
    mobile: 'Saves the day’s schedule on the device for read-only offline use',
    hosting: 'Runs locally with SQLite',
    maturity: 'Created April 2026; no tagged releases',
  },
]

const cols: { key: keyof Omit<Option, 'name'>; label: string }[] = [
  { key: 'license', label: 'License' },
  { key: 'features', label: 'Field service features documented' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'hosting', label: 'Hosting' },
  { key: 'maturity', label: 'Activity' },
]

const stacks: { project: string; needs: string }[] = [
  { project: 'Odoo Community 19', needs: 'Python 3.10 or later and PostgreSQL 13 or above' },
  { project: 'Dolibarr', needs: 'A web server with PHP and MySQL 5.7.7+, MariaDB 10.3+ or PostgreSQL 9.1+; about 150 MB on disk' },
  { project: 'ERPNext v16', needs: 'macOS or Debian/Ubuntu, MariaDB 11.8, Python 3.14, Node.js 24 and Redis 6+' },
  { project: 'Crewtavo', needs: 'Docker and Node.js 20 or newer' },
  { project: 'OpenFieldService', needs: 'pnpm and SQLite, per its quickstart' },
]

const faqs = [
  {
    question: 'Is Odoo Field Service open source?',
    answer:
      'No. Odoo Community is open source under LGPL-3, but Odoo’s editions page marks Planning, where Field Service now lives in Odoo 20, as Enterprise only, and the Community source repository contains no Field Service or Planning module. The open source route on Odoo is Community plus the OCA field service modules, which are AGPL-3.',
  },
  {
    question: 'Is there completely free open source field service software?',
    answer:
      'The licenses of OCA Field Service, Dolibarr, ERPNext, Axelor Open Suite, Crewtavo and OpenFieldService cost nothing. Hosting, setup, backups and upgrades still cost time or money. If you want a free plan with no server to run, see our guide to free field service software instead.',
  },
  {
    question: 'What is the difference between open source and a free plan?',
    answer:
      'Open source means the license lets you get the source code, modify it and redistribute it, as defined by the Open Source Initiative. A free plan is a commercial product the vendor lets you use at no charge, usually with limits on users or jobs, and you cannot see or change its code.',
  },
  {
    question: 'Do open source field service tools have a technician mobile app?',
    answer:
      'Some do. Dolibarr has DoliDroid for Android, Axelor has Axelor Open Mobile with an Intervention module, and Crewtavo installs as a web app on Android and iPhone. Odoo’s native Android and iOS apps are Enterprise only, and we did not check an official ERPNext mobile app.',
  },
  {
    question: 'What does the AGPL license mean if I customize the software?',
    answer:
      'AGPL-3 adds a network clause: if you modify the program and let people use your modified version over a network, you must offer those users the source code of your version. It applies to the OCA modules, Axelor and Crewtavo. This is a plain summary, not legal advice.',
  },
  {
    question: 'Is there open source pest control software?',
    answer:
      'OpenFieldService, an MIT-licensed project created in 2026, names pest control among the businesses it is built for. It is young and has no tagged releases yet. The general options on this page can also be set up for pest routes, but none documents state pesticide reporting.',
  },
]

const sources = [
  { name: 'Open Source Initiative: the Open Source Definition', url: 'https://opensource.org/osd', checked: '2026-11-20' },
  { name: 'Odoo editions (Community vs Enterprise feature table)', url: 'https://www.odoo.com/page/editions', checked: '2026-11-20' },
  { name: 'Odoo 20 docs: Field Service in the Planning app', url: 'https://www.odoo.com/documentation/20.0/applications/services/planning/field_service.html', checked: '2026-11-20' },
  { name: 'Odoo Community license (LGPLv3)', url: 'https://github.com/odoo/odoo/blob/20.0/LICENSE', checked: '2026-11-20' },
  { name: 'Odoo Community addons (19.0)', url: 'https://github.com/odoo/odoo/tree/19.0/addons', checked: '2026-11-20' },
  { name: 'Odoo docs: install from source (Enterprise is a separate add-on repository)', url: 'https://www.odoo.com/documentation/19.0/administration/on_premise/source.html', checked: '2026-11-20' },
  { name: 'Odoo docs: Field Service worksheets need Studio', url: 'https://www.odoo.com/documentation/19.0/applications/services/field_service/worksheets.html', checked: '2026-11-20' },
  { name: 'Odoo pricing', url: 'https://www.odoo.com/pricing', checked: '2026-11-20' },
  { name: 'OCA Field Service repository (README, AGPL-3.0)', url: 'https://github.com/OCA/field-service/blob/19.0/README.md', checked: '2026-11-20' },
  { name: 'OCA Field Service 20.0 branch (no modules yet)', url: 'https://github.com/OCA/field-service/blob/20.0/README.md', checked: '2026-11-20' },
  { name: 'OCA Field Service license (AGPL-3, section 13)', url: 'https://github.com/OCA/field-service/blob/19.0/LICENSE', checked: '2026-11-20' },
  { name: 'Dolibarr', url: 'https://www.dolibarr.org/', checked: '2026-11-20' },
  { name: 'Dolibarr wiki: Interventions module', url: 'https://wiki.dolibarr.org/index.php/Module_Interventions', checked: '2026-11-20' },
  { name: 'Dolibarr wiki: prerequisites', url: 'https://wiki.dolibarr.org/index.php/Prerequisites', checked: '2026-11-20' },
  { name: 'Dolibarr releases (GitHub)', url: 'https://github.com/Dolibarr/dolibarr', checked: '2026-11-20' },
  { name: 'DoliDroid (GPL-3.0 Android client)', url: 'https://github.com/DoliCloud/DoliDroid', checked: '2026-11-20' },
  { name: 'DoliCloud pricing', url: 'https://www.dolicloud.com/en-faq-pricing.php', checked: '2026-11-20' },
  { name: 'ERPNext docs: maintenance visit', url: 'https://docs.frappe.io/erpnext/maintenance-visit', checked: '2026-11-20' },
  { name: 'ERPNext docs: maintenance schedule', url: 'https://docs.frappe.io/erpnext/maintenance-schedule', checked: '2026-11-20' },
  { name: 'ERPNext pricing (self-host, Frappe Cloud, no paywalled features)', url: 'https://frappe.io/erpnext/pricing', checked: '2026-11-20' },
  { name: 'Frappe docs: installation requirements', url: 'https://docs.frappe.io/framework/user/en/installation', checked: '2026-11-20' },
  { name: 'ERPNext repository (GPL-3.0, releases)', url: 'https://github.com/frappe/erpnext', checked: '2026-11-20' },
  { name: 'Axelor field service management', url: 'https://axelor.com/field-service-management/', checked: '2026-11-20' },
  { name: 'Axelor pricing', url: 'https://axelor.com/pricing/', checked: '2026-11-20' },
  { name: 'Axelor Open Suite repository (AGPLv3, releases)', url: 'https://github.com/axelor/axelor-open-suite', checked: '2026-11-20' },
  { name: 'Axelor Open Mobile repository', url: 'https://github.com/axelor/axelor-mobile', checked: '2026-11-20' },
  { name: 'Crewtavo repository (AGPL-3.0)', url: 'https://github.com/jviars/crewtavo', checked: '2026-11-20' },
  { name: 'OpenFieldService repository (MIT)', url: 'https://github.com/clawnify/OpenFieldService', checked: '2026-11-20' },
]

const H2 = 'text-[26px] font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white'
const SUB = 'mb-4 mt-1.5 text-[15px] text-slate-500 dark:text-slate-400'
const A = 'font-semibold text-orange-600 hover:underline dark:text-orange-400'

export default function OpenSourceFieldServiceSoftwarePage() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        slug="guides/open-source-field-service-software"
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
            Open source field service software: <span className="text-orange-400">6 options checked against their licenses</span>
          </h1>
          <p className="mt-5 max-w-[660px] text-[17px] leading-[1.6] text-slate-300 md:text-[19px]">
            What each project actually covers for field service, what self-hosting needs, and where
            costs remain, from license files, official docs and repositories, checked November 2026.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-5 py-14 md:px-10">
        <AnswerBlock lastUpdated="November 2026">
          <p>
            Genuinely open source field service software exists, but it is mostly ERP modules rather
            than tools built like Jobber or Housecall Pro. The most complete option is{' '}
            <strong>Odoo Community with the OCA Field Service modules</strong> (LGPL-3 and AGPL-3).
            Odoo’s own Field Service app is not in its open source edition. <strong>Dolibarr</strong>{' '}
            (GPL-3.0) has a simple Interventions module and an Android app, <strong>ERPNext</strong>{' '}
            (GPL-3.0) handles maintenance visits and schedules, and <strong>Axelor Open Suite</strong>{' '}
            (AGPL-3.0) has an intervention module with an open source mobile app. Newer projects such
            as Crewtavo and OpenFieldService are built for service businesses but are months old.
            The license is free; hosting, setup and upgrades are not.
          </p>
        </AnswerBlock>

        <div className="prose-body mt-12">
          <h2 id="what-open-source-means">What “open source” means here</h2>
          <p>
            The Open Source Initiative’s definition requires that a program include its source code,
            allow modifications and derived works, and not restrict use in a business. That is
            different from a free plan. Many field service vendors offer a free tier of a commercial
            product, with limits and no access to the code; those are covered in our{' '}
            <Link href="/free" className={A}>free field service software</Link> guide. This page only
            covers software whose license is open source, which you can host yourself and change.
          </p>
        </div>

        <section className="mt-12" id="comparison">
          <h2 className={H2}>Open source field service software compared</h2>
          <p className={SUB}>
            From license files, official docs and repositories, not a hands-on test. We did not install
            any of these. Sources and check dates are at the end of this page.
          </p>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-[18px] border border-slate-200 lg:block dark:border-slate-800">
            <table className="w-full border-collapse text-left text-[13px] leading-[1.5]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="p-3">Option</th>
                  {cols.map((c) => <th key={c.key} scope="col" className="p-3">{c.label}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                {options.map((t) => (
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
            {options.map((t) => (
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
          <h2 id="odoo">Odoo: why its Field Service is not open source</h2>
          <p>
            Odoo comes in two editions, which Odoo itself describes as “Odoo Community (open-source)
            and Odoo Enterprise (licensed)”. Community is published under LGPL-3 and includes
            invoicing, CRM, inventory, maintenance and project apps. In Odoo 20, Field Service is a
            feature you switch on inside the Planning app, and Odoo’s editions table marks Planning
            as Enterprise only, along with Studio (which Field Service worksheets require), the Android
            and iOS apps and Odoo’s hosting. The Community source repository has no Field Service or
            Planning module. Odoo’s old Field Service app page now redirects to Planning.
          </p>
          <p>
            Odoo Enterprise is a paid license per user; its Custom plan is the one that allows
            on-premise hosting. If you are fine with a licensed product, compare it with the
            field service tools in our <Link href="/pricing" className={A}>pricing</Link> guide, since it
            is no longer an open source choice.
          </p>

          <h2 id="oca">Odoo Community + OCA Field Service</h2>
          <p>
            The Odoo Community Association maintains a field service repository under AGPL-3. Its core
            module, described as the base of the Field Service application in Odoo, manages locations,
            workers and orders, and depends only on Community and OCA modules. The Odoo 19 branch lists
            34 modules, including calendar and timeline views, daily routes, recurring orders,
            agreements, invoicing, a customer portal, signature capture, equipment and warranty,
            stock, vehicles, timesheets and skills. Two cautions: the Odoo 20 branch has no modules
            yet, so this route means staying on Odoo 19 for now, and there is no native mobile app,
            because Odoo’s apps are Enterprise only.
          </p>

          <h2 id="dolibarr">Dolibarr Interventions</h2>
          <p>
            Dolibarr is a GPL-3.0 ERP and CRM whose Interventions module, bundled with every install,
            is “a form for service / maintenance orders”. Interventions move from draft to validated to
            done, can be converted into recurring interventions, can be signed, and can be marked
            billed. The core module does not document a dispatch board or route planning. DoliDroid is a
            GPL-3.0 Android client for a hosted Dolibarr; we found no iOS app. Dolibarr’s wiki lists
            hosting partners, and DoliCloud’s prices start at €14 per user a month with a 30-day trial.
          </p>

          <h2 id="erpnext">ERPNext</h2>
          <p>
            ERPNext (GPL-3.0) records maintenance visits as scheduled, unscheduled or breakdown visits
            against an item and serial number, and maintenance schedules create calendar events for
            each visit, weekly to yearly. Frappe says ERPNext has no features behind a paywall and that
            you can self-host it and “pay us absolutely nothing”. Frappe Cloud hosting starts at $5 a
            month for a site, and Frappe works through partners for implementation. Core ERPNext docs
            do not describe a dispatch board; Beveren FSM, a separate AGPL-3.0 app for ERPNext,
            adds a visual dispatch board and a request-to-invoice workflow, though it is a small project.
          </p>

          <h2 id="axelor">Axelor Open Suite</h2>
          <p>
            Axelor publishes its suite under AGPL-3.0, and the open source repository includes an
            Intervention module. Axelor’s field service page describes requests, scheduling, jobs,
            maintenance contracts, invoicing, technician workload views, skill-based assignment and
            recurring visits generated from contracts. Axelor Open Mobile, also AGPL-3.0, lists an
            Intervention module. Axelor also sells commercial plans, Pro at €35 per user a month from
            10 users, with hosting, integration and custom development quoted separately.
          </p>

          <h2 id="newer-projects">Newer projects built for service businesses</h2>
          <p>
            <strong>Crewtavo</strong> (AGPL-3.0) describes itself as free, open source field service
            software covering requests, quotes, scheduling, crews in the field, invoicing and a client
            portal, with a field app that works offline. It was created in October 2026 and released
            v0.5.4 on November 19. <strong>OpenFieldService</strong> (MIT) covers technician dispatch,
            scheduling and invoicing, saves the day’s schedule for read-only offline use, and says
            maintenance plans and customer portals are not included. It was created in April 2026 and
            has no tagged releases. Both are young, small projects, so plan for that if you depend on them.
          </p>

          <h2 id="self-hosting">What self-hosting needs</h2>
          <p>
            The license is free, but someone has to run the server. Frappe’s own comparison lists the
            self-hosted route as installed from a Linux shell, with backups that are manual and no
            hosting support, and both Frappe and Axelor say hosting and implementation are separate
            costs. Each project documents its stack:
          </p>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[18px] border border-slate-200 dark:border-slate-800">
          <table className="w-full border-collapse text-left text-[13.5px] leading-[1.5]">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th scope="col" className="p-3.5">Project</th>
                <th scope="col" className="p-3.5">Documented requirements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-300">
              {stacks.map((s) => (
                <tr key={s.project} className="align-top">
                  <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">{s.project}</th>
                  <td className="p-3.5">{s.needs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-body mt-12">
          <h2 id="licenses">Licenses in plain terms</h2>
          <ul>
            <li><strong>GPL-3.0</strong> (Dolibarr, ERPNext): use and modify freely; if you distribute the software, you share the source under the same license.</li>
            <li><strong>AGPL-3.0</strong> (OCA modules, Axelor, Crewtavo): like GPL, plus a network clause. If you modify it and let others use your version over the web, you must offer them your source code.</li>
            <li><strong>LGPL-3.0</strong> (Odoo Community core): a weaker copyleft that is easier to combine with other code.</li>
            <li><strong>MIT</strong> (OpenFieldService): very permissive; keep the copyright notice.</li>
          </ul>
          <p>This is a plain-language summary, not legal advice.</p>

          <h2 id="commercial-instead">When a commercial tool is the better call</h2>
          <p>
            If nobody on your team can run a Linux server, apply updates and restore backups, a
            hosted commercial tool will usually cost less time. Jobber starts at $29/month billed
            annually and Housecall Pro at $59/month, both with 14-day trials; see{' '}
            <Link href="/compare/jobber-vs-housecall-pro" className={A}>Jobber vs Housecall Pro</Link>{' '}
            or our <Link href="/for-small-business" className={A}>field service software for small business</Link>{' '}
            guide. If accounting sync is the deciding factor, check our{' '}
            <Link href="/quickbooks" className={A}>QuickBooks guide</Link>; the ERP options above include
            their own accounting instead.
          </p>
        </div>

        <section className="mt-12" id="faq">
          <h2 className={H2}>Frequently asked questions</h2>
          <FAQSection items={faqs} />
        </section>

        <div className="mx-auto max-w-[820px]">
          <CalloutBox tone="verdict" title="Bottom line on open source field service software">
            For a fully open stack, Odoo Community with OCA Field Service is the most complete option,
            on Odoo 19 for now. Dolibarr and ERPNext are simpler GPL choices, and Axelor pairs AGPL code
            with an open mobile app. Budget for hosting and setup, and treat the newest projects as
            early. Our <Link href="/how-we-review" className={A}>review method</Link> explains how we
            check claims against official sources.
          </CalloutBox>
          <AuthorBio />
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-sm font-semibold dark:border-slate-800">
            <Link href="/free" className="text-orange-600 hover:text-orange-800">Free FSM software →</Link>
            <Link href="/for-small-business" className="text-orange-600 hover:text-orange-800">Small business picks →</Link>
            <Link href="/pricing" className="text-orange-600 hover:text-orange-800">FSM software pricing →</Link>
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
