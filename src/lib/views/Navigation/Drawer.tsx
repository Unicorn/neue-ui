import React, { ReactNode, SyntheticEvent } from 'react'

import { UIColor } from "../../types/ui"
import { bgColorClass } from "../../helpers/classHelper"

interface DrawerProps {
  identifier: string
  children?: {
    head?: {
      component: ReactNode
    }
    toggle?: {
      component: ReactNode
      handler?: (e: SyntheticEvent<HTMLButtonElement>) => void
    }
    main?: {
      component: ReactNode
    }
  }
  color?: UIColor
  collapse: boolean
  handler: (identifier: string, collapse: boolean) => void
}

export default ({ identifier, children, color, collapse, handler }: DrawerProps) => {
  let classes = ['drawer', 'navigation', 'section', bgColorClass(color)]

  if (collapse)
    classes.push('collapse')

  const _renderToggle = () => {
    if (!children || !children.toggle) return null

    return (
      <button className="toggle" onClick={() => handler(identifier, !collapse)}>
        {children && children.toggle && children.toggle.component}
      </button>
    )
  }

  return (
    <aside className={classes.join(' ')}>
      <header className="head">
        {children && children.head && children.head.component}
      </header>

      {_renderToggle()}

      <div className="main">
        {children && children.main && children.main.component}
      </div>
    </aside>
  )
}
