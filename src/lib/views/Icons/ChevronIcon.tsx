import React, { FC } from 'react'
import { IconProps } from '../../types/icons'

const ChevronIcon: FC<IconProps> = ({ id, className = 'chevron', viewbox = '0 0 100 100' }) => (
  <svg id={id} className={className} version="1.1" viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
    <path d="m47.488 66.051c0.39062 0.39062 0.92188 0.61328 1.4766 0.61328 0.55078 0 1.082-0.22266 1.4727-0.61328l30.207-30.207c0.81641-0.8125 0.81641-2.1328 0-2.9492-0.8125-0.8125-2.1328-0.8125-2.9453 0l-28.742 28.742-28.738-28.73c-0.8125-0.8125-2.1328-0.8125-2.9492 0-0.8125 0.8125-0.8125 2.1328 0 2.9492z" />
  </svg>
)

export default ChevronIcon
