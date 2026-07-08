/** E-E-A-T "Reviewed by" trust block. Charcoal circle, orange initials. */
export function AuthorBio({
  name = 'Usama Latif',
  initials = 'UL',
  credential = 'Software & AI product builder · FSM software researcher',
  bio = 'Usama Latif builds software and AI products and writes about business tools. He researches field service management platforms hands-on and checks every price against the vendor’s own pricing page. FieldSoftwareGuide is independent and is not an FSM software vendor.',
}: {
  name?: string
  initials?: string
  credential?: string
  bio?: string
}) {
  return (
    <aside className="mt-12 flex gap-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-white/5 p-6">
      <span
        aria-hidden
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[22px] font-extrabold text-orange-400"
      >
        {initials}
      </span>
      <div>
        <div className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-slate-400">
          Reviewed by
        </div>
        <div className="mt-0.5 text-lg font-extrabold text-slate-900 dark:text-white">{name}</div>
        <div className="mt-0.5 text-[13.5px] font-semibold text-orange-600 dark:text-orange-400">{credential}</div>
        <p className="mt-2.5 max-w-[660px] text-sm leading-[1.6] text-slate-600 dark:text-slate-300">{bio}</p>
        <a
          href="https://www.usamalatif.com"
          target="_blank"
          rel="noopener"
          className="mt-2 inline-block text-[13.5px] font-semibold text-orange-600 hover:text-orange-800 dark:text-orange-400"
        >
          More about Usama →
        </a>
      </div>
    </aside>
  )
}
