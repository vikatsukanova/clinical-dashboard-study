import type { Meta, StoryObj } from '@storybook/react-vite'
import { Count } from '../atoms/Count'

const meta = {
  title: 'Atoms/Count',
  component: Count,
  parameters: {
    docs: {
      description: {
        component: `
A small number, used to say how many items a tab contains.

## Import

\`\`\`tsx
import { Count } from '../atoms/Count'
\`\`\`

## Do

- Pass the length of the list the tab shows.

## Don't

- Don't use a count as a status. A workflow state is a Status.

## Accessibility

The number is text, so it is read with the tab label.

## Related

Tab places the count after its label.
`,
      },
    },
  },
  args: { value: 4 },
} satisfies Meta<typeof Count>

export default meta
type Story = StoryObj<typeof meta>

export const Medications: Story = {}
