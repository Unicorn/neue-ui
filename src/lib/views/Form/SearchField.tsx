import React, { FC, SyntheticEvent, ReactNode } from 'react'
import { trim } from 'lodash'

import SearchSuggestions from './SearchSuggestions'

interface Props {
  icon?: ReactNode
  name: string
  text: string
  children?: ReactNode
  placeholder?: string
  completeOptions?: readonly any[]
  completeKey?: string
  completeVal?: string
  completeHandler?: (val: string) => void
  handler: (e: SyntheticEvent<HTMLInputElement | HTMLButtonElement>) => void
}

const _defaultIcon = () => (
  <svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="m50.551 81.867c16.812 0 30.551-13.734 30.551-30.551 0-16.812-13.734-30.551-30.551-30.551-16.922 0-30.551 13.734-30.551 30.551s13.734 30.551 30.551 30.551zm-14.398-42.086c-0.76953-0.76953-0.76953-2.0898 0-2.9688 0.76953-0.76953 2.0898-0.76953 2.9688 0l11.43 11.539 11.539-11.539c0.76953-0.76953 2.0898-0.76953 2.9688 0 0.76953 0.76953 0.76953 2.0898 0 2.9688l-11.543 11.426 11.539 11.539c0.76953 0.76953 0.76953 2.0898 0 2.9688-0.44141 0.44141-0.87891 0.55078-1.4297 0.55078s-1.0977-0.21875-1.4297-0.55078l-11.645-11.539-11.539 11.539c-0.44141 0.44141-0.87891 0.55078-1.4297 0.55078s-1.0977-0.21875-1.4297-0.55078c-0.76953-0.76953-0.76953-2.0898 0-2.9688l11.539-11.539z" />
  </svg>
)

const Search: FC<Props> = ({ name, children, text, placeholder, handler, icon, ...complete }) => (
  <div className="search field">
    {trim(text) && <button name="clear" className="clear" value="" onClick={handler}>{icon || _defaultIcon()}</button>}

    <input
      name={name}
      type="text"
      placeholder={placeholder || 'Search...'}
      onChange={handler}
      value={trim(text)}
    />

    {text && <SearchSuggestions {...complete} />}

    {children}
  </div>
)

export default Search