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
      <svg className="spark" viewBox="0 0 120 36" aria-hidden="true">
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
    const y = 4 + (1 - (value - min) / span) * 22
    return [x, y] as const
  })
  const line = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point[0].toFixed(1)} ${point[1].toFixed(1)}`).join(' ')
  return { line, area: `${line} L ${width} 36 L 0 36 Z` }
}
