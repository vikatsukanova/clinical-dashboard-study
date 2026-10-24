import type { ReactNode } from 'react'

type ChipTone = 'brand' | 'neutral' | 'success' | 'warning' | 'danger'

export function Chip({ tone = 'neutral', children }: { tone?: ChipTone; children: ReactNode }) {
  return <span className={`chip chip-${tone}`}>{children}</span>
}
