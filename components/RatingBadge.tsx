/** Numeric provider rating, e.g. ★ 4.8 (amber star, tabular figure). */
export function RatingBadge({ score }: { score: number }) {
  return (
    <span className="tnum inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white">
      <span className="text-amber-500">★</span>
      {score.toFixed(1)}
    </span>
  )
}
