import { useState, type ReactNode } from 'react'
import { Icon, type IconName } from '../atoms/Icon'

type Pane = 'patient' | 'timeline' | 'clinical'

const panes: { id: Pane; label: string; icon: IconName }[] = [
  { id: 'patient', label: 'Patient', icon: 'person' },
  { id: 'timeline', label: 'Timeline', icon: 'timeline' },
  { id: 'clinical', label: 'Clinical', icon: 'clinical' },
]

export function ChartTemplate({
  patient,
  work,
  clinical,
}: {
  patient: ReactNode
  work: ReactNode
  clinical: ReactNode
}) {
  const [pane, setPane] = useState<Pane>('timeline')

  return (
    <div className="chart" data-pane={pane}>
      <div className="workspace">
        {patient}
        <div className="main">
          <div className="work">{work}</div>
          {clinical}
        </div>
      </div>
      <nav className="chart-nav" aria-label="Chart sections">
        {panes.map((item) => (
          <button
            key={item.id}
            type="button"
            className="chart-tab"
            aria-pressed={pane === item.id}
            onClick={() => setPane(item.id)}
          >
            <Icon name={item.icon} />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
