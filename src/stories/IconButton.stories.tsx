import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconButton } from '../atoms/IconButton'

const meta = {
  title: 'Atoms/Icon button',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: `
A round control with no visible text. The label is required.

## Import

\`\`\`tsx
import { IconButton } from '../atoms/IconButton'
\`\`\`

## Do

- Use it for Add diagnosis. The label says what gets added.

## Don't

- Don't use it for an action that has room for a word. That is a Button.

## Accessibility

\`label\` is the accessible name. The icon is decorative.

## Related

Button is the labeled action. Icon is the mark this button draws.
`,
      },
    },
  },
  args: { icon: 'add', label: 'Add diagnosis' },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Add: Story = {}
