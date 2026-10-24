import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../atoms/Button'
import { ExpandMark } from '../atoms/ExpandMark'
import { Status } from '../atoms/Status'
import { TimelineItem } from '../molecules/TimelineItem'

function Timeline() {
  return (
    <ol className="timeline" style={{ width: 520 }}>
      <TimelineItem state="current" title="Worsening dyspnea, NYHA class III" meta="Draft" trailing={<Status tone="progress" />}>
        <div className="tl-card">
          <ExpandMark />
          <p>Symptoms, tests, and medication changes are still in draft.</p>
          <div className="form-actions" style={{ marginTop: 12 }}>
            <Button>Start assessment</Button>
          </div>
        </div>
      </TimelineItem>
      <TimelineItem state="done" title="Cardiac catheterization — patent grafts" meta="Friday, June 4, 2021" trailing={<Status tone="published" />} />
    </ol>
  )
}

const meta = {
  title: 'Molecules/Timeline item',
  component: Timeline,
  parameters: {
    docs: {
      description: {
        component: `
One assessment on the history rail. Current is the open draft. Done is a published note.

## Import

\`\`\`tsx
import { TimelineItem } from '../molecules/TimelineItem'
\`\`\`

## Do

- Use current for the draft and done for a published note.
- Put Status in the trailing slot, and the next action inside the current card.

## Don't

- Don't place Start assessment outside the open draft.

## Accessibility

The title is a heading. The rail is decorative.

## Related

Status names the state. Button is the action inside the current card.
`,
      },
    },
  },
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const AssessmentHistory: Story = {}
