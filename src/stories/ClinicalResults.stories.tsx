import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClinicalResults } from '../organisms/ClinicalResults'

const meta = {
  title: 'Organisms/Clinical results',
  component: ClinicalResults,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ClinicalResults>

export default meta
type Story = StoryObj<typeof meta>

export const Results: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <ClinicalResults />
    </div>
  ),
}
