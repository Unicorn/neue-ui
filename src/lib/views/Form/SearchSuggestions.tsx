import React, { FC } from 'react'

interface Props {
  completeOptions?: readonly any[]
  completeKey?: string
  completeVal?: string
  completeHandler?: (val: string) => void
}

const SearchSuggestions: FC<Props> = ({ completeOptions = [], completeKey, completeVal, completeHandler }) => {
  const _renderItem = (a: any, i: number) => completeKey && completeVal && (
    <li key={`complete-${completeKey}-${i}`} onClick={() => completeHandler && completeHandler(a[completeVal])}>
      {a[completeKey]}
    </li>
  )

  return (
    <ul className="suggestions">
      {completeOptions.map(_renderItem)}
    </ul>
  )
}

export default SearchSuggestions