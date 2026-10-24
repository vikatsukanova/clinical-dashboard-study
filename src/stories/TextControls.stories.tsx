import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '../atoms/Select'
import { TextArea } from '../atoms/TextArea'
import { TextInput } from '../atoms/TextInput'

const meta = {
  title: 'Atoms/Text controls',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: `
Unlabeled controls: text input, select, and textarea.

## Import

\`\`\`tsx
import { TextInput } from '../atoms/TextInput'
import { Select } from '../atoms/Select'
import { TextArea } from '../atoms/TextArea'
\`\`\`

## Do

- Put the control inside a Field so the visible label is connected to it.

## Don't

- Don't render a bare input in the chart. If it must sit outside a field, set an aria-label.

## Accessibility

A field label is the preferred name. An aria-label is the fallback.

## Related

Field supplies the label, the hint, and the error.
`,
      },
    },
  },
  args: { defaultValue: 'Worsening dyspnea', 'aria-label': 'Title' },
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {}

export const SelectControl: Story = {
  render: () => (
    <Select defaultValue="III" aria-label="NYHA class">
      <option>I</option>
      <option>II</option>
      <option>III</option>
      <option>IV</option>
    </Select>
  ),
}

export const Textarea: Story = {
  render: () => <TextArea defaultValue="Symptoms progressed over six weeks." aria-label="Clinical note" />,
}
