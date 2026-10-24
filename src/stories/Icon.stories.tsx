import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon, type IconName } from '../atoms/Icon'

const names: IconName[] = [
  'back', 'add', 'check', 'clock', 'chevron', 'expand',
  'person', 'people', 'home', 'diet', 'alcohol', 'activity', 'smoking', 'timeline', 'clinical',
]

function Icons() {
  return (
    <div className="catalog-row">
      {names.map((name) => <Icon key={name} name={name} />)}
    </div>
  )
}

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: `
A single mark. Icons do not carry meaning on their own.

## Import

\`\`\`tsx
import { Icon } from '../atoms/Icon'
\`\`\`

## Do

- Use an icon next to a visible label: a back mark, a check on Publish, a clock on In progress.
- Pick the name from the set. Do not paste a new SVG into a component.

## Don't

- Don't use an icon as the only name of a control. That is an Icon button, and it needs a label.

## Accessibility

The icon is hidden from assistive technology. The adjacent text is the name.

## Related

Icon button is the round control. Status and Button place an icon beside their label.
`,
      },
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Set: Story = {
  args: { name: 'check' },
  render: () => <Icons />,
}
