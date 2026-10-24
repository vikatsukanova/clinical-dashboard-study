import type { Meta, StoryObj } from '@storybook/react-vite'
import { Status } from '../atoms/Status'

const meta = {
  title: 'Atoms/Status',
  component: Status,
  parameters: {
    docs: {
      description: {
        component: `
Where an assessment is. The component writes the label: In progress or Published.

## Import

\`\`\`tsx
import { Status } from '../atoms/Status'
\`\`\`

## Do

- Use progress on a draft and published on a signed note.
- Place it in the trailing slot of a timeline item.

## Don't

- Don't pass a custom label. The tone chooses the words.
- Don't use Status on a diagnosis. That is a Chip.

## Accessibility

The words are the state. The icon and the color repeat them. The icon is hidden from assistive technology.

## Related

Chip names a fact. The Publish button is what moves a draft to published.
`,
      },
    },
  },
  args: { tone: 'progress' },
} satisfies Meta<typeof Status>

export default meta
type Story = StoryObj<typeof meta>

export const InProgress: Story = {}
export const Published: Story = { args: { tone: 'published' } }
