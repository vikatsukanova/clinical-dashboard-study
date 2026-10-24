import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tab } from '../atoms/Tab'

function Tabs() {
  return (
    <div className="stack-sm">
      <div className="catalog-row">
        <Tab pressed>Cardiac</Tab>
        <Tab>Volume status</Tab>
        <Tab>Other</Tab>
      </div>
      <div className="catalog-row">
        <Tab variant="text" pressed count={4}>Cardiac meds</Tab>
        <Tab variant="text" count={2}>Other meds</Tab>
      </div>
    </div>
  )
}

const meta = {
  title: 'Atoms/Tab',
  component: Tab,
  parameters: {
    docs: {
      description: {
        component: `
One option in a switch. Pill tabs are for the exam. Text tabs are for medication groups.

## Import

\`\`\`tsx
import { Tab } from '../atoms/Tab'
\`\`\`

## Do

- Set \`pressed\` on the selected tab.
- Pass \`count\` on a medication tab.

## Don't

- Don't use a tab to name a diagnosis. That is a Chip.

## Accessibility

The button uses \`aria-pressed\`. The visible label is the name.

## Related

Count is the number inside a text tab. Chip names a fact, not a view.
`,
      },
    },
  },
  args: { children: 'Cardiac', pressed: true },
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const ExamAndMedications: Story = {
  render: () => <Tabs />,
}
