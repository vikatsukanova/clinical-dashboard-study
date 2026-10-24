import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '../atoms/Select'
import { TextArea } from '../atoms/TextArea'
import { TextInput } from '../atoms/TextInput'
import { Field } from '../molecules/Field'

function Fields() {
  return (
    <div className="stack-sm">
      <Field label="Title">
        <TextInput defaultValue="Worsening dyspnea, NYHA class III" />
      </Field>
      <Field label="NYHA class">
        <Select defaultValue="III">
          <option>I</option>
          <option>II</option>
          <option>III</option>
          <option>IV</option>
        </Select>
      </Field>
      <Field label="Clinical note" hint="Visible to the care team after publish.">
        <TextArea defaultValue="Symptoms progressed over six weeks." />
      </Field>
      <Field label="Title" error="Add a title before publishing.">
        <TextInput defaultValue="" />
      </Field>
    </div>
  )
}

const meta = {
  title: 'Molecules/Field',
  component: Fields,
  parameters: {
    docs: {
      description: {
        component: `
Label, control, and either a hint or an error. The error replaces the hint.

## Import

\`\`\`tsx
import { Field } from '../molecules/Field'
import { TextInput } from '../atoms/TextInput'
\`\`\`

## Do

- Put one control inside the field: TextInput, Select, or TextArea.
- Use a hint for what happens after publish. Use an error when the field blocks publishing.

## Don't

- Don't pass a hint and an error together.
- Don't leave a control unlabeled. If it sits outside a field, give it an aria-label.

## Accessibility

The label is tied to the control. The error is inside the field, so it is read with the label.

## Related

Text controls are the unlabeled inputs. Choice is the control for a set of tests.
`,
      },
    },
  },
} satisfies Meta<typeof Fields>

export default meta
type Story = StoryObj<typeof meta>

export const TextSelectAndError: Story = {}
