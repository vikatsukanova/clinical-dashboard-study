import { Icon } from './Icon'

export function Status({ tone }: { tone: 'progress' | 'published' }) {
  return (
    <span className={`status status-${tone}`}>
      {tone === 'progress' ? 'In progress' : 'Published'}
      <Icon name={tone === 'progress' ? 'clock' : 'check'} />
    </span>
  )
}
