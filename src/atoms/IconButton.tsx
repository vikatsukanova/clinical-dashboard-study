import type { ButtonHTMLAttributes } from 'react'
import { Icon, type IconName } from './Icon'

export function IconButton({
  icon,
  label,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { icon: IconName; label: string }) {
  return (
    <button {...props} type="button" className="icon-btn" aria-label={label}>
      <Icon name={icon} />
    </button>
  )
}
