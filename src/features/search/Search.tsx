import React, { ChangeEvent } from 'react'
import cls from './Search.module.scss'
import { useTranslation } from 'react-i18next'

interface ISearchProps {
  onChange: (value: string) => void
}

const Search = ({ onChange }: ISearchProps) => {
  const { t } = useTranslation('search')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  return <input type="text" placeholder={t('Search') as string} className={cls.search__filter} onChange={handleOnChange} />
}

export default Search
