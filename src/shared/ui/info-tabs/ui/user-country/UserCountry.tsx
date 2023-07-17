import React, { useState, useEffect } from 'react'
import { DropDown } from '@/shared/ui/dropdown/DropDown'

import icon from '@assets/cabinet/icons/global-search.svg'
import { useMutation, useQuery } from '@apollo/client'
import { GET_USER_ADDRESS, UPDATE_USER_ADDRESS } from '@/shared/schemas/user/userProfile'
import { useTranslation } from 'react-i18next'
import { TooltipButton } from '@/shared/ui/tooltip-button/TooltipButton'

// import US from '@assets/cabinet/dropdown/US.svg'
// import RU from '@assets/cabinet/dropdown/RU.svg'
// import UA from '@assets/cabinet/dropdown/UA.svg'
import ua from '@assets/cabinet/dropdown/UA.svg'
import ru from '@assets/cabinet/dropdown/RU.svg'
import us from '@assets/cabinet/dropdown/US.svg'
import { ILang } from '@features/lang-switcher/LangSwitcher'
interface LangOptions extends ILang {}

const langs: LangOptions[] = [
  { label: ua, value: 'ua' },
  { label: ru, value: 'ru' },
  { label: us, value: 'en' },
]

const UserCountry = () => {
  const { t } = useTranslation('cabinet')

  const [country, setCountry] = useState<string | null | undefined>('')
  const { data, loading, refetch } = useQuery(GET_USER_ADDRESS)
  const [update] = useMutation(UPDATE_USER_ADDRESS)

  const updateAddress = (value: string) => {
    setCountry(value)
    update({
      variables: {
        input: {
          country: value,
        },
      },
    })
  }

  useEffect(() => {
    if (!loading) {
      setCountry(data?.getUserAddress.country)
    }
  }, [data, loading])

  return (
    <div className="cabinet-block user-info__item">
      <div className="item-top">
        <div className="item-top__image">
          <img src={icon} alt="" />
        </div>
        <div className="item-top__info">
          <div className="item-top__content">
            <p className="item-top__content-title">{t('country')}</p>
            <span className="item-top__content-subtitle">{country && country}</span>
          </div>
          <div>
            <DropDown data={langs} current={country as string} onChange={updateAddress} />
          </div>
        </div>
      </div>
      <div className="item-bottom">
        <div className="item-bottom__content">
          <p>{t('theCountryWasSetAutomatically')}</p>
          <TooltipButton
            style={{ width: '16px' }}
            info="theCountryWasSetAutomatically theCountryWasSetAutomatically theCountryWasSetAutomatically"
          />
        </div>
      </div>
    </div>
  )
}

export default UserCountry
