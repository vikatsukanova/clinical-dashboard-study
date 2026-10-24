import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Choice } from '../molecules/Choice'

function Choices() {
  const [tests, setTests] = useState([
    { id: 'bnp', label: 'Repeat NT-proBNP', checked: true },
    { id: 'echo', label: 'Transthoracic echo', checked: true },
    { id: 'cbc', label: 'CBC and electrolytes', checked: false },
  ])

  return (
    <div className="wrap">
      {tests.map((test) => (
        <Choice
          key={test.id}
          label={test.label}
          checked={test.checked}
          onChange={(checked) => setTests(tests.map((item) => (item.id === test.id ? { ...item, checked } : item)))}
        />
      ))}
    </div>
  )
}

const meta = {
  title: 'Molecules/Choice',
  component: Choices,
  parameters: {
    docs: {
      description: {
        component: 'A checkbox and its label, used for tests the clinician orders. The parent owns the checked state.',
      },
    },
  },
} satisfies Meta<typeof Choices>

export default meta
type Story = StoryObj<typeof meta>

export const Tests: Story = {}
