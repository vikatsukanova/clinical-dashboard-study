import { Button } from '../atoms/Button'
import { Chip } from '../atoms/Chip'
import { ExpandMark } from '../atoms/ExpandMark'
import { Icon } from '../atoms/Icon'
import { IconButton } from '../atoms/IconButton'
import { Status } from '../atoms/Status'
import { TimelineItem } from '../molecules/TimelineItem'
import { defaultAssessment, diagnoses, priorAssessments } from '../data'

export function DiagnosisTimeline({
  publishedTitle,
  onStart,
}: {
  publishedTitle: string | null
  onStart: () => void
}) {
  const tests = defaultAssessment.tests.filter((test) => test.checked)
  const [openSymptom, ...otherSymptoms] = defaultAssessment.symptoms

  return (
    <section className="stack timeline-col">
      <div className="diag-head">
        <div>
          <h3>Latest diagnoses</h3>
          <div className="wrap">
            {diagnoses.map((item, index) => (
              <Chip key={item} tone={index === 0 ? 'brand' : 'neutral'}>{item}</Chip>
            ))}
            <IconButton icon="add" label="Add diagnosis" />
          </div>
        </div>
        <Button onClick={onStart}>Start assessment</Button>
      </div>
      <ol className="timeline">
        {publishedTitle ? (
          <TimelineItem state="done" title={publishedTitle} meta="Published just now" trailing={<Status tone="published" />} />
        ) : (
          <TimelineItem
            state="current"
            title={defaultAssessment.title}
            meta="Draft"
            trailing={<Status tone="progress" />}
          >
            <div className="tl-card">
              <ExpandMark />
              <h4>Symptoms</h4>
              <div className="symptom-open">
                <p>{openSymptom}</p>
                <p>{defaultAssessment.note}</p>
              </div>
              {otherSymptoms.map((symptom) => (
                <p className="symptom-row" key={symptom}>
                  {symptom}
                  <Icon name="chevron" />
                </p>
              ))}
              <h4>Recommendations</h4>
              <p className="rec-label">Tests</p>
              <ul>
                {tests.map((test) => (
                  <li key={test.id}>{test.label}</li>
                ))}
              </ul>
              <p className="rec-label">Medications</p>
              <ul>
                <li>{defaultAssessment.medication}</li>
              </ul>
            </div>
          </TimelineItem>
        )}
        {priorAssessments.map((item) => (
          <TimelineItem
            key={item.title}
            state="done"
            title={item.title}
            meta={item.date}
            trailing={<Status tone="published" />}
          />
        ))}
      </ol>
    </section>
  )
}
