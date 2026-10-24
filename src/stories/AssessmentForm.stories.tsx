import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { AssessmentForm } from '../organisms/AssessmentForm'

const meta = {
  title: 'Organisms/Assessment form',
  component: AssessmentForm,
  args: { onBack: fn(), onPublish: fn() },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof AssessmentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
  render: (args) => (
    <div style={{ width: 480 }}>
      <AssessmentForm {...args} />
    </div>
  ),
}
