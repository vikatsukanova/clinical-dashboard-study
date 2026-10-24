import type { Preview } from '@storybook/react-vite'
import '../src/styles/system.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: {
      test: 'error',
    },
    docs: {
      canvas: { sourceState: 'shown' },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Catalog', 'Foundations', 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
      },
    },
  },
}

export default preview
