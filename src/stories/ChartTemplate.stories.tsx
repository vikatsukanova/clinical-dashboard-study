import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { ClinicalResults } from '../organisms/ClinicalResults'
import { DiagnosisTimeline } from '../organisms/DiagnosisTimeline'
import { PatientRecord } from '../organisms/PatientRecord'
import { ChartTemplate } from '../templates/ChartTemplate'

const meta = {
  title: 'Templates/Chart',
  component: ChartTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The chart layout. It places three slots and owns the responsive grid. It does not know which patient is open or whether the work slot is a timeline or a form.

## Import

\`\`\`tsx
import { ChartTemplate } from '../templates/ChartTemplate'
\`\`\`

## Do

- Pass the patient record, the work region, and the clinical results into the three slots.
- Let the template switch sections on a small screen. The page decides what the work slot renders.

## Don't

- Don't put publish rules or a specific patient inside the template.
- Don't drop the chart structure and position organisms yourself. The width queries live here.

## Accessibility

On a wide screen the reading order is patient, work, then results. On a small screen the bottom bar shows one section. The hidden sections are not in the tab order. The selected bar button uses aria-pressed.

## Related

Patient record, Diagnosis timeline, Assessment form, and Clinical results are the organisms that fill the slots. Dashboard and Assessment are the pages.
`,
      },
    },
  },
} satisfies Meta<typeof ChartTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Layout: Story = {
  args: {
    patient: <PatientRecord />,
    work: <DiagnosisTimeline publishedTitle={null} onStart={fn()} />,
    clinical: <ClinicalResults />,
  },
}
