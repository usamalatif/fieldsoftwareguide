/** Wrench glyph + wordmark. `field` / `software` (orange) / `guide`. Dark-mode aware. */
export function Logo({ size = 32, fontSize = 18 }: { size?: number; fontSize?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="flex shrink-0 items-center justify-center rounded-[9px] bg-slate-900 dark:bg-slate-800"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <svg width={size * 0.56} height={size * 0.56} viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth={2}>
          <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4l-5 5a1.5 1.5 0 0 0 2 2l5-5a5 5 0 0 0 6.4-6.4l-2.8 2.8-2-2 2.8-2.8Z" />
        </svg>
      </span>
      <span
        className="font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white"
        style={{ fontSize }}
      >
        field<span className="text-orange-600 dark:text-orange-400">software</span>guide
      </span>
    </span>
  )
}
