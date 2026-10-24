import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../atoms/Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
One action. Primary moves the chart forward, secondary saves a draft, and ghost leaves the flow.

## Import

\`\`\`tsx
import { Button } from '../atoms/Button'
\`\`\`

## Do

- Use one primary button in a region. It is the next step, such as Start assessment or Publish.
- Use secondary for Save draft and ghost for Back.
- Pass \`icon\` when the action has a mark, such as the check on Publish. The word stays the name.

## Don't

- Don't put two primary buttons next to each other.
- Don't use a button to name a diagnosis or a workflow state. That is a Chip or a Status.

## Accessibility

The visible label is the accessible name. These buttons always include text.

## Related

Chip names a fact. Status names whether an assessment is in progress or published.
`,
      },
    },
  },
  args: { children: 'Start assessment', variant: 'primary' },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: 'secondary', children: 'Save draft' } }
export const Ghost: Story = { args: { variant: 'ghost', children: 'Back' } }
export const Disabled: Story = { args: { disabled: true } }
export const WithIcon: Story = { args: { icon: 'check', children: 'Publish' } }
