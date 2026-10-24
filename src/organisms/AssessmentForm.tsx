import { useState } from 'react'
import { Button } from '../atoms/Button'
import { ExpandMark } from '../atoms/ExpandMark'
import { Select } from '../atoms/Select'
import { Status } from '../atoms/Status'
import { TextArea } from '../atoms/TextArea'
import { TextInput } from '../atoms/TextInput'
import { Choice } from '../molecules/Choice'
import { Field } from '../molecules/Field'
import { defaultAssessment } from '../data'

export function AssessmentForm({
  onBack,
  onPublish,
}: {
  onBack: () => void
  onPublish: (title: string) => void
}) {
  const [title, setTitle] = useState(defaultAssessment.title)
  const [nyha, setNyha] = useState(defaultAssessment.nyha)
  const [symptoms, setSymptoms] = useState(defaultAssessment.symptoms)
  const [tests, setTests] = useState(defaultAssessment.tests)
  const [medication, setMedication] = useState(defaultAssessment.medication)
  const [note, setNote] = useState(defaultAssessment.note)
  const [titleError, setTitleError] = useState('')
  const [saved, setSaved] = useState(false)

  function publish() {
    if (!title.trim()) {
      setTitleError('Add a title before publishing.')
      return
    }
    const filled = symptoms.map((item) => item.trim()).filter(Boolean)
    if (filled.length === 0) {
      setTitleError('Add at least one symptom.')
      return
    }
    onPublish(`${title.trim()}, NYHA ${nyha}`)
  }

  return (
    <form
      className="panel form"
      onSubmit={(event) => {
        event.preventDefault()
        publish()
      }}
    >
      <ExpandMark />
      <div className="form-head">
        <h2>Assessment</h2>
        <Status tone="progress" />
      </div>
      <Field label="Title" error={titleError}>
        <TextInput value={title} onChange={(event) => { setTitle(event.target.value); setTitleError(''); setSaved(false) }} />
      </Field>
      <Field label="NYHA class">
        <Select value={nyha} onChange={(event) => setNyha(event.target.value)}>
          {['I', 'II', 'III', 'IV'].map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </Select>
      </Field>
      <fieldset className="stack-sm">
        <legend className="field-label">Symptoms</legend>
        {symptoms.map((symptom, index) => (
          <TextInput
            key={index}
            aria-label={`Symptom ${index + 1}`}
            value={symptom}
            onChange={(event) => {
              const next = [...symptoms]
              next[index] = event.target.value
              setSymptoms(next)
              setSaved(false)
            }}
          />
        ))}
        <Button type="button" variant="ghost" onClick={() => setSymptoms([...symptoms, ''])}>
          Add symptom
        </Button>
      </fieldset>
      <fieldset>
        <legend className="field-label">Tests</legend>
        <div className="wrap" style={{ marginTop: 8 }}>
          {tests.map((test) => (
            <Choice
              key={test.id}
              label={test.label}
              checked={test.checked}
              onChange={(checked) => {
                setTests(tests.map((item) => (item.id === test.id ? { ...item, checked } : item)))
                setSaved(false)
              }}
            />
          ))}
        </div>
      </fieldset>
      <Field label="Medication change">
        <TextInput value={medication} onChange={(event) => { setMedication(event.target.value); setSaved(false) }} />
      </Field>
      <Field label="Clinical note" hint="Visible to the care team after publish.">
        <TextArea value={note} onChange={(event) => { setNote(event.target.value); setSaved(false) }} />
      </Field>
      <div className="form-actions">
        {saved ? <span className="saved">Draft saved</span> : null}
        <Button type="button" variant="ghost" onClick={onBack}>Back</Button>
        <Button type="button" variant="secondary" onClick={() => setSaved(true)}>Save draft</Button>
        <Button type="submit" icon="check">Publish</Button>
      </div>
    </form>
  )
}
