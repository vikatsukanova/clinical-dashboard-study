import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { DiagnosisTimeline } from '../organisms/DiagnosisTimeline'

const meta = {
  title: 'Organisms/Diagnosis timeline',
  component: DiagnosisTimeline,
  args: { publishedTitle: null, onStart: fn() },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof DiagnosisTimeline>

export default meta
type Story = StoryObj<typeof meta>

export const Draft: Story = { render: (args) => <div style={{ width: 420 }}><DiagnosisTimeline {...args} /></div> }
export const Published: Story = { args: { publishedTitle: 'Worsening dyspnea, NYHA III' } }
