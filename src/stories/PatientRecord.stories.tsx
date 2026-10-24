import type { Meta, StoryObj } from '@storybook/react-vite'
import { PatientRecord } from '../organisms/PatientRecord'

const meta = {
  title: 'Organisms/Patient record',
  component: PatientRecord,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof PatientRecord>

export default meta
type Story = StoryObj<typeof meta>

export const Record: Story = {}
