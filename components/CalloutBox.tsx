const tones = {
  verdict: {
    wrap: 'border-amber-200 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10',
    label: 'text-amber-700 dark:text-amber-300',
  },
  info: {
    wrap: 'border-indigo-200 bg-indigo-50 dark:border-indigo-500/30 dark:bg-indigo-500/10',
    label: 'text-indigo-700 dark:text-indigo-300',
  },
  warn: {
    wrap: 'border-amber-300 bg-amber-50 dark:border-amber-500/40 dark:bg-amber-500/10',
    label: 'text-amber-700 dark:text-amber-300',
  },
} as const

/** "Bottom line" verdict (amber) / "In short" (indigo). */
export function CalloutBox({
  title = 'Bottom line',
  tone = 'verdict',
  children,
}: {
  title?: string
  tone?: keyof typeof tones
  children: React.ReactNode
}) {
  const t = tones[tone]
  return (
    <div className={`my-6 rounded-xl border p-5 md:p-6 ${t.wrap}`}>
      <div className={`mb-1.5 text-[11.5px] font-bold uppercase tracking-[0.08em] ${t.label}`}>
        {title}
      </div>
      <div className="text-[15px] leading-[1.65] text-slate-700 dark:text-slate-200">{children}</div>
    </div>
  )
}
