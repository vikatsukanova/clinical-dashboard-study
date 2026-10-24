import type { Meta, StoryObj } from '@storybook/react-vite'
import { PatientChart } from '../pages/PatientChart'

const meta = {
  title: 'Pages/Patient chart',
  component: PatientChart,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A specific chart. Dashboard and Assessment are the same template with a different work slot. The page owns which one is open, and what happens on publish.

## Import

\`\`\`tsx
import { PatientChart } from '../pages/PatientChart'
\`\`\`

## Do

- Use the page when the screen needs the fictional record and a working assessment flow.
- Switch the work slot between the timeline and the form. Leave the patient and the results in place.

## Don't

- Don't rebuild the grid inside the page. Pass the slots to Chart template.

## Related

Chart template is the layout. The organisms are the sections inside the slots.
`,
      },
    },
  },
} satisfies Meta<typeof PatientChart>

export default meta
type Story = StoryObj<typeof meta>

export const Dashboard: Story = { args: { initial: 'dashboard' } }
export const Assessment: Story = { args: { initial: 'assessment' } }
