import type { ReactNode } from 'react'

export function TimelineItem({
  state,
  title,
  meta,
  trailing,
  children,
}: {
  state: 'current' | 'done'
  title: string
  meta: string
  trailing?: ReactNode
  children?: ReactNode
}) {
  return (
    <li className={`tl tl-${state}`}>
      <div className="tl-rail" aria-hidden="true">
        <span className="tl-dot" />
        <span className="tl-line" />
      </div>
      <div className="tl-body">
        <div className="tl-head">
          <div>
            <h3>{title}</h3>
            <p>{meta}</p>
          </div>
          {trailing}
        </div>
        {children}
      </div>
    </li>
  )
}
