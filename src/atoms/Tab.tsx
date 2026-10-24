import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Count } from './Count'

export function Tab({
  pressed = false,
  variant = 'pill',
  count,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  pressed?: boolean
  variant?: 'pill' | 'text'
  count?: number
  children: ReactNode
}) {
  return (
    <button {...props} type="button" className={`tab tab-${variant}`} aria-pressed={pressed}>
      {children}
      {count == null ? null : <Count value={count} />}
    </button>
  )
}
