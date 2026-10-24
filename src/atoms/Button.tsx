import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export function Button({
  variant = 'primary',
  icon,
  className = '',
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  icon?: IconName
  children: ReactNode
}) {
  return (
    <button className={`btn btn-${variant} ${className}`.trim()} {...props}>
      {icon ? <Icon name={icon} /> : null}
      {children}
    </button>
  )
}
