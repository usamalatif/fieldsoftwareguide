/**
 * The GEO centerpiece, ~150-word direct answer, first content on every page.
 * Indigo-50 card, indigo-950 "The direct answer" pill with amber sun glyph.
 */
export function AnswerBlock({
  children,
  lastUpdated,
}: {
  children: React.ReactNode
  lastUpdated?: string
}) {
  return (
    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 md:px-[30px] md:py-7 dark:border-indigo-500/30 dark:bg-indigo-500/10">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-950 px-[11px] py-[5px] dark:bg-indigo-600">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2.2" aria-hidden>
          <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
        <span className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-white">
          The direct answer
        </span>
      </div>
      <div className="text-[17px] leading-[1.72] text-slate-800 md:text-[17.5px] dark:text-slate-200">{children}</div>
      {lastUpdated && (
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Last updated: {lastUpdated}</p>
      )}
    </div>
  )
}
