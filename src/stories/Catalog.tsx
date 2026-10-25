import type { ReactNode } from 'react'
import { Button } from '../atoms/Button'
import { Chip } from '../atoms/Chip'
import { Count } from '../atoms/Count'
import { Icon } from '../atoms/Icon'
import { IconButton } from '../atoms/IconButton'
import { Select } from '../atoms/Select'
import { Status } from '../atoms/Status'
import { Tab } from '../atoms/Tab'
import { TextInput } from '../atoms/TextInput'
import { labs } from '../data'
import { Choice } from '../molecules/Choice'
import { Field } from '../molecules/Field'
import { LabMetric } from '../molecules/LabMetric'
import { TimelineItem } from '../molecules/TimelineItem'
import { AssessmentForm } from '../organisms/AssessmentForm'
import { ClinicalResults } from '../organisms/ClinicalResults'
import { DiagnosisTimeline } from '../organisms/DiagnosisTimeline'
import { PatientRecord } from '../organisms/PatientRecord'
import { PatientChart } from '../pages/PatientChart'
import { ChartTemplate } from '../templates/ChartTemplate'

const noop = () => {}

type Entry = {
  name: string
  description: string
  href: string
  scale?: 'record' | 'panel' | 'chart'
  preview: ReactNode
}

const groups: { title: string; entries: Entry[] }[] = [
  {
    title: 'Atoms',
    entries: [
      {
        name: 'Icon',
        description: 'A mark beside a label. Hidden from assistive technology.',
        href: '?path=/docs/atoms-icon--docs',
        preview: (
          <div className="catalog-row">
            <Icon name="back" />
            <Icon name="person" />
            <Icon name="home" />
            <Icon name="activity" />
            <Icon name="check" />
          </div>
        ),
      },
      {
        name: 'Icon button',
        description: 'A round control. The label is the accessible name.',
        href: '?path=/docs/atoms-icon-button--docs',
        preview: <IconButton icon="add" label="Add diagnosis" />,
      },
      {
        name: 'Count',
        description: 'How many items a tab contains.',
        href: '?path=/docs/atoms-count--docs',
        preview: (
          <div className="catalog-row">
            <Count value={4} />
            <Count value={2} />
          </div>
        ),
      },
      {
        name: 'Tab',
        description: 'Pill tabs switch the exam. Text tabs switch medications.',
        href: '?path=/docs/atoms-tab--docs',
        preview: (
          <div className="catalog-row">
            <Tab pressed>Cardiac</Tab>
            <Tab>Other</Tab>
            <Tab variant="text" pressed count={4}>Cardiac meds</Tab>
          </div>
        ),
      },
      {
        name: 'Button',
        description: 'One action. Primary moves forward, secondary saves, ghost leaves.',
        href: '?path=/docs/atoms-button--docs',
        preview: (
          <div className="catalog-row">
            <Button icon="check">Publish</Button>
            <Button variant="secondary">Save draft</Button>
            <Button variant="ghost">Back</Button>
          </div>
        ),
      },
      {
        name: 'Chip',
        description: 'A diagnosis, a risk, or a medication. Not a workflow state.',
        href: '?path=/docs/atoms-chip--docs',
        preview: (
          <div className="catalog-row">
            <Chip tone="brand">CAD</Chip>
            <Chip>Former smoker</Chip>
            <Chip tone="success">Improving</Chip>
          </div>
        ),
      },
      {
        name: 'Status',
        description: 'In progress or published. The component writes the label.',
        href: '?path=/docs/atoms-status--docs',
        preview: (
          <div className="catalog-row">
            <Status tone="progress" />
            <Status tone="published" />
          </div>
        ),
      },
      {
        name: 'Text controls',
        description: 'Text input, select, and textarea. Always pair them with a label.',
        href: '?path=/docs/atoms-text-controls--docs',
        preview: (
          <div className="catalog-controls">
            <TextInput defaultValue="Worsening dyspnea" aria-label="Title" />
            <Select defaultValue="III" aria-label="NYHA class">
              <option>III</option>
            </Select>
          </div>
        ),
      },
    ],
  },
  {
    title: 'Molecules',
    entries: [
      {
        name: 'Field',
        description: 'A label, one control, and either a hint or an error.',
        href: '?path=/docs/molecules-field--docs',
        preview: (
          <div className="catalog-controls">
            <Field label="Title" error="Add a title before publishing.">
              <TextInput defaultValue="" aria-label="Title" />
            </Field>
          </div>
        ),
      },
      {
        name: 'Choice',
        description: 'A test the clinician can order.',
        href: '?path=/docs/molecules-choice--docs',
        preview: (
          <div className="catalog-row">
            <Choice label="Repeat NT-proBNP" checked onChange={noop} />
            <Choice label="CBC" checked={false} onChange={noop} />
          </div>
        ),
      },
      {
        name: 'Lab metric',
        description: 'Value, unit, delta, and sparkline. Color is clinical meaning.',
        href: '?path=/docs/molecules-lab-metric--docs',
        preview: <LabMetric {...labs[0]} />,
      },
      {
        name: 'Timeline item',
        description: 'One assessment on the history rail.',
        href: '?path=/docs/molecules-timeline-item--docs',
        scale: 'panel',
        preview: (
          <ol className="timeline">
            <TimelineItem
              state="current"
              title="Worsening dyspnea, NYHA class III"
              meta="Draft"
              trailing={<Status tone="progress" />}
            />
          </ol>
        ),
      },
    ],
  },
  {
    title: 'Organisms',
    entries: [
      {
        name: 'Patient record',
        description: 'Identity, demographics, risks, medications, and allergies.',
        href: '?path=/docs/organisms-patient-record--docs',
        scale: 'record',
        preview: <PatientRecord />,
      },
      {
        name: 'Diagnosis timeline',
        description: 'Current draft and the published assessments.',
        href: '?path=/docs/organisms-diagnosis-timeline--docs',
        scale: 'panel',
        preview: <DiagnosisTimeline publishedTitle={null} onStart={noop} />,
      },
      {
        name: 'Assessment form',
        description: 'Symptoms, tests, medication change, and the note.',
        href: '?path=/docs/organisms-assessment-form--docs',
        scale: 'panel',
        preview: <AssessmentForm onBack={noop} onPublish={noop} />,
      },
      {
        name: 'Clinical results',
        description: 'Exam, labs, ECG, echo, and cath.',
        href: '?path=/docs/organisms-clinical-results--docs',
        scale: 'panel',
        preview: <ClinicalResults />,
      },
    ],
  },
  {
    title: 'Templates',
    entries: [
      {
        name: 'Chart',
        description: 'Three columns on a wide screen. One section at a time below that.',
        href: '?path=/docs/templates-chart--docs',
        scale: 'chart',
        preview: (
          <ChartTemplate
            patient={<PatientRecord />}
            work={<DiagnosisTimeline publishedTitle={null} onStart={noop} />}
            clinical={<ClinicalResults />}
          />
        ),
      },
    ],
  },
  {
    title: 'Pages',
    entries: [
      {
        name: 'Dashboard',
        description: 'The chart with the timeline in the work slot.',
        href: '?path=/story/pages-patient-chart--dashboard',
        scale: 'chart',
        preview: <PatientChart initial="dashboard" />,
      },
      {
        name: 'Assessment',
        description: 'The same chart with the form in the work slot.',
        href: '?path=/story/pages-patient-chart--assessment',
        scale: 'chart',
        preview: <PatientChart initial="assessment" />,
      },
    ],
  },
]

function Card({ entry }: { entry: Entry }) {
  return (
    <article className="catalog-card">
      <div className="catalog-preview" inert>
        <div className="catalog-stage" data-scale={entry.scale ?? 'none'}>
          {entry.preview}
        </div>
      </div>
      <h3>
        <a href={entry.href} target="_parent">
          {entry.name}
        </a>
      </h3>
      <p>{entry.description}</p>
    </article>
  )
}

export function Catalog() {
  return (
    <div className="catalog">
      <header className="catalog-intro">
        <h1>Catalog</h1>
        <p>Every component, grouped by atomic level. Open a card for its docs.</p>
      </header>
      {groups.map((group) => (
        <section key={group.title} className="catalog-section">
          <h2>{group.title}</h2>
          <div className="catalog-grid">
            {group.entries.map((entry) => (
              <Card key={entry.name} entry={entry} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
