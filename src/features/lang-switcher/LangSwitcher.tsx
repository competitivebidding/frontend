import React, { useState } from 'react'
import { DropDown } from '@shared/ui/dropdown/DropDown'
import { useTranslation } from 'react-i18next'

import us from '@assets/cabinet/dropdown/US.svg'
import ru from '@assets/cabinet/dropdown/RU.svg'
import ua from '@assets/cabinet/dropdown/UA.svg'

export interface ILang {
  label: string
  value: string
}

export const langs = [
  { label: ua, value: 'ua' },
  { label: ru, value: 'ru' },
  { label: us, value: 'en' },
]

export const LangSwitcher = () => {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('i18nextLng') || 'en')
  const { t, i18n } = useTranslation()

  const changeLang = async (v: string) => {
    setCurrentLang(v)
    await i18n.changeLanguage(v)
  }

  return (
    <>
      <DropDown data={langs} current={currentLang} onChange={changeLang} withArrow={false} />
    </>
  )
}
