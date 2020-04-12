import React, { ReactNode } from 'react'

export interface RegionProps {
  id?: string
  className?: string
  media?: {
    align?: 'left' | 'right'
  },
  children?: {
    header?: ReactNode
    media?: ReactNode
    content?: ReactNode
  }
}

const Region = ({ id, className, children, media }: RegionProps) => {
  return (
    <div id={id} className={`region ${className} ${children.media && 'with-media'} media-align-${media.align}`}>
      {children.header && <header>{children.header}</header>}
      <div className="inner">
        {children.media && <figure>{children.media}</figure>}
        {children.content && <div className="content">{children.content}</div>}
      </div>
    </div>
  )
}

Region.defaultProps = {
  media: {
    align: 'right'
  }
}

export default Region