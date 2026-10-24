import type { Meta, StoryObj } from '@storybook/react-vite'
import { LabMetric } from '../molecules/LabMetric'
import { labs } from '../data'

const meta = {
  title: 'Molecules/Lab metric',
  component: LabMetric,
  parameters: {
    docs: {
      description: {
        component: `
A lab value, its unit, the delta a clinician reads, and a sparkline. Intent is clinical meaning, not the direction of the arrow.

## Import

\`\`\`tsx
import { LabMetric } from '../molecules/LabMetric'
\`\`\`

## Do

- Set intent to good when the change is favorable, such as LDL-C falling.
- Set intent to attention when the change needs a look, such as eGFR falling or A1C rising.
- Set intent to neutral when the value is steady, such as potassium.
- Write the sign in the delta string.

## Don't

- Don't color a lab red only because the number went up.

## Accessibility

The value, unit, and delta are text. Color and the sparkline repeat them. The sparkline is hidden from assistive technology.

## Related

Chip is a fact, not a result. Status is workflow state, not a result.
`,
      },
    },
  },
  args: labs[0],
} satisfies Meta<typeof LabMetric>

export default meta
type Story = StoryObj<typeof meta>

export const Improving: Story = {}
export const Attention: Story = { args: labs[1] }
export const Steady: Story = { args: labs[5] }
