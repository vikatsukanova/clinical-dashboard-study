import { useState } from 'react'
import { ExpandMark } from '../atoms/ExpandMark'
import { Tab } from '../atoms/Tab'
import { LabMetric } from '../molecules/LabMetric'
import { ecg, echoMetrics, exams, labs, type ExamKey } from '../data'

export function ClinicalResults() {
  const [exam, setExam] = useState<ExamKey>('Cardiac')

  return (
    <aside className="stack clinical" aria-label="Clinical results">
      <section>
        <h3>Exam</h3>
        <div className="panel exam-panel">
          <ExpandMark />
          <div className="wrap">
            {(Object.keys(exams) as ExamKey[]).map((key) => (
              <Tab key={key} pressed={exam === key} onClick={() => setExam(key)}>
                {key}
              </Tab>
            ))}
          </div>
          <ul className="exam-list">
            {exams[exam].map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h3>Labs</h3>
        <div className="labs">
          {labs.map((lab) => (
            <LabMetric key={lab.label} {...lab} />
          ))}
        </div>
      </section>
      <section>
        <h3>ECG</h3>
        <div className="panel">
          <ExpandMark />
          <div className="metric-grid">
            {ecg.map((item) => (
              <p key={item.label} className={item.flag ? 'metric metric-flag' : 'metric'}>
                <strong>{item.value}</strong>
                <span className="fact-label">{item.label}</span>
              </p>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h3>Echo</h3>
        <div className="echo">
          <div className="echo-metrics">
            {echoMetrics.map((metric) => (
              <LabMetric key={metric.label} {...metric} />
            ))}
          </div>
          <div className="panel echo-map">
            <ValveMap />
          </div>
        </div>
        <p className="echo-note">Mild aortic stenosis. Mild mitral regurgitation.</p>
      </section>
      <section>
        <h3>Cath</h3>
        <div className="panel cath-card">
          <ExpandMark />
          <div className="cath-row">
            <span>Revasc</span>
            <CathSketch />
          </div>
          <p className="note">PCI to the LAD in 2019. Last study showed patent grafts and no new obstructive disease.</p>
        </div>
      </section>
    </aside>
  )
}

function ValveMap() {
  return (
    <div className="bullseye">
      <svg viewBox="0 0 100 100" role="img" aria-label="Valve position diagram">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="10" />
        <path d="M50 10 V90 M10 50 H90 M22 22 L78 78 M22 78 L78 22" />
      </svg>
      <span className="bull-lv">LV</span>
      <span className="bull-av">AV</span>
      <span className="bull-la">LA</span>
      <span className="bull-mv">MV</span>
    </div>
  )
}

function CathSketch() {
  return (
    <svg className="cath-sketch" viewBox="0 0 100 60" aria-hidden="true">
      <path d="M60 10 C 70 5, 85 10, 80 30 C 75 50, 60 55, 65 35 C 70 15, 90 20, 85 45 C 80 65, 75 55, 75 40" />
      <path d="M60 10 C 50 15, 30 20, 40 40 C 50 60, 70 50, 65 35" />
      <path d="M40 40 C 35 30, 20 40, 30 55" />
    </svg>
  )
}
