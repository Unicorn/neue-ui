import React, { ReactNode } from 'react'

export interface HighlightProps {
  children?: {
    actions?: ReactNode
    content?: ReactNode
  }
}

const Highlight = ({ children }) => {
  return (
    <div className={`highlight ${children.actions && 'with-actions'}`}>
      {children.actions && <div className="actions">{children.actions}</div>}
      {children.content && <div className="content">{children.content}</div>}
    </div>
  )
}

export default Highlight