import React, { ChangeEvent } from 'react'
import cls from './Search.module.scss'

interface ISearchProps {
  onChange: (value: string) => void
}

const Search = ({ onChange }: ISearchProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  return <input type="text" placeholder="Search" className={cls.search__filter} onChange={handleOnChange} />
}

export default Search
