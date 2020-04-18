import React, { ReactNode } from 'react'

export interface RegionProps {
  id?: string
  className?: string
  media?: {
    align?: 'left' | 'right'
  },
  children: {
    header?: ReactNode
    media?: ReactNode
    content?: ReactNode
  }
}

const defaultProps: RegionProps = {
  children: {},
  media: {
    align: 'right'
  }
}

export default ({ id, className, children, media }: RegionProps = defaultProps) => {
  const classes = ['region', className]
  children.media && classes.push('with-media')
  media && media.align && classes.push(`media-align-${media.align}`)

  return (
    <div id={id} className={classes.join(' ')}>
      {children.header && <header>{children.header}</header>}
      <div className="inner">
        {children.media && <figure>{children.media}</figure>}
        {children.content && <div className="content">{children.content}</div>}
      </div>
    </div>
  )
}