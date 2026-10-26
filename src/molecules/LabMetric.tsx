import { ExpandMark } from '../atoms/ExpandMark'
import type { LabIntent } from '../data'

export function LabMetric({
  label,
  value,
  unit,
  delta,
  intent,
  series,
}: {
  label: string
  value: string
  unit: string
  delta: string
  intent: LabIntent
  series: number[]
}) {
  const { line, area } = sparkPath(series)
  return (
    <article className={`lab lab-${intent}`}>
      <ExpandMark />
      <p className="lab-value">
        {value}
        <small>{unit}</small>
        {delta ? <span className="lab-delta">{delta}</span> : null}
      </p>
      <span className="lab-label">{label}</span>
      <svg className="spark" viewBox="0 0 120 36" preserveAspectRatio="none" aria-hidden="true">
        <path d={area} className="spark-area" />
        <path d={line} className="spark-line" />
      </svg>
    </article>
  )
}

function sparkPath(values: number[]) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = max - min || 1
  const width = 120
  const step = width / (values.length - 1)
  const points = values.map((value, index) => {
    const x = index * step
    const y = 8 + (1 - (value - min) / span) * 16
    return [x, y] as const
  })
  const line = smooth(points)
  return { line, area: `${line} L ${width} 36 L 0 36 Z` }
}

function smooth(points: readonly (readonly [number, number])[]) {
  const fmt = (n: number) => n.toFixed(1)
  let path = `M ${fmt(points[0][0])} ${fmt(points[0][1])}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    path += ` C ${fmt(c1x)} ${fmt(c1y)}, ${fmt(c2x)} ${fmt(c2y)}, ${fmt(p2[0])} ${fmt(p2[1])}`
  }
  return path
}
