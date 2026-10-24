import { useState } from 'react'
import { AssessmentForm } from '../organisms/AssessmentForm'
import { ClinicalResults } from '../organisms/ClinicalResults'
import { DiagnosisTimeline } from '../organisms/DiagnosisTimeline'
import { PatientRecord } from '../organisms/PatientRecord'
import { ChartTemplate } from '../templates/ChartTemplate'

type View = 'dashboard' | 'assessment'

export function PatientChart({ initial = 'dashboard' }: { initial?: View }) {
  const [view, setView] = useState<View>(initial)
  const [publishedTitle, setPublishedTitle] = useState<string | null>(null)

  return (
    <ChartTemplate
      patient={<PatientRecord />}
      work={
        view === 'dashboard' ? (
          <DiagnosisTimeline
            publishedTitle={publishedTitle}
            onStart={() => setView('assessment')}
          />
        ) : (
          <AssessmentForm
            onBack={() => setView('dashboard')}
            onPublish={(title) => {
              setPublishedTitle(title)
              setView('dashboard')
            }}
          />
        )
      }
      clinical={<ClinicalResults />}
    />
  )
}
