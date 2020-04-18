import React, { SyntheticEvent, ReactNode } from 'react'
import { ChevronIcon } from '../Icons';
import { CTA } from '../../types/navigation';

export interface CardProps {
  id?: string
  className?: string
  action?: CTA
  children?: ReactNode
  direction?: 'horizontal' | 'vertical'
  media?: {
    align?: 'left' | 'right'
    content?: ReactNode
  },
  handler?: (e: SyntheticEvent<HTMLButtonElement>) => void
}

const defaultProps: CardProps = {
  direction: 'vertical',
  media: {
    align: 'right'
  }
}

const _renderButton = ({ className, cta, handler }): ReactNode => {
  if (!cta) return null

  if (handler)
    return (
      <button className={`cta ${className}`}>
        <span>{cta.text}</span>
        <ChevronIcon />
      </button>
    )

  return (
    <a href={cta.url} className={`cta ${className}`}>
      <span>{cta.text}</span>
      <ChevronIcon />
    </a>
  )
}

export default ({ id, media, handler, className, children, action, direction }: CardProps = defaultProps) => {
  const classes = ['card', className, direction]
  media && classes.push('with-media')
  media && media.align && classes.push(`media-align-${media.align}`)

  return (
    <div id={id} className={classes.join(' ')}>
      {media && <figure>{media}</figure>}
      <div className="details">{children}</div>
      {action && _renderButton({ className: 'primary', cta: action, handler })}
    </div>
  )
}
