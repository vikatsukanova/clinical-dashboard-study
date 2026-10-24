import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from '../atoms/Chip'

const meta = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: `
A named fact: a diagnosis, a risk, or a medication. Not a workflow state.

## Import

\`\`\`tsx
import { Chip } from '../atoms/Chip'
\`\`\`

## Do

- Use brand for the current diagnoses.
- Use neutral for a medication or a risk that is not the main diagnosis.
- Use success, warning, or danger only when the word itself carries that meaning.

## Don't

- Don't use a chip for In progress or Published. Use Status.
- Don't color a chip from a lab direction. Lab color lives on Lab metric.

## Accessibility

The chip text is the name. Color repeats the meaning. It is not the only signal.

## Related

Status is workflow state. Lab metric is a result.
`,
      },
    },
  },
  args: { children: 'CAD', tone: 'brand' },
  argTypes: {
    tone: { control: 'select', options: ['brand', 'neutral', 'success', 'warning', 'danger'] },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Brand: Story = {}
export const Neutral: Story = { args: { tone: 'neutral', children: 'Former smoker' } }
export const Success: Story = { args: { tone: 'success', children: 'Improving' } }
export const Warning: Story = { args: { tone: 'warning', children: 'Review' } }
export const Danger: Story = { args: { tone: 'danger', children: 'High' } }
