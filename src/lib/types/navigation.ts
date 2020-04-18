import { ReactNode, SyntheticEvent } from "react"

export interface CTA {
  type: 'external' | 'button' | 'route' | 'link'
  url: string
  href?: string
  children?: ReactNode
  text?: string
  className?: string
  handler?: (e: SyntheticEvent<HTMLButtonElement>) => void
}