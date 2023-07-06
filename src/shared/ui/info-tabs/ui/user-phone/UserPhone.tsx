import * as React from 'react'
import icon from '@assets/cabinet/icons/call.svg'
import { useTranslation } from 'react-i18next'

interface IUserPhoneProps {
  field: any
  handleUpdate: any
}

export const UserPhone = ({ field, handleUpdate }: IUserPhoneProps) => {
  const { t } = useTranslation('cabinet')

  const [isEditable, setIsEditable] = React.useState(false)
  const [value, setValue] = React.useState(field)

  const changeState = () => {
    setIsEditable(!isEditable)
  }

  const update = (data: string) => {
    handleUpdate({ phone: data })
    setIsEditable(false)
  }

  return (
    <div className="cabinet-block user-info__item">
      <div className="item-top">
        <div className="item-top__image">
          <img src={icon} alt="" />
        </div>
        <div className="item-top__info">
          <div className="item-top__content">
            <p className="item-top__content-title">{t('phone')}</p>
            {isEditable ? (
              <input
                autoFocus
                type="text"
                className="item-top__input"
                defaultValue={field}
                onChange={(e) => setValue(e.target.value)}
              />
            ) : (
              <span className="item-top__content-subtitle">{field}</span>
            )}
          </div>
          <div className="item-top__status confirmed">{t('confirmed')}</div>
        </div>
      </div>
      <div className="item-bottom">
        {isEditable ? (
          <button className="user-info__button" disabled={!value} onClick={() => update(value)}>
            {t('change')}
          </button>
        ) : (
          <button className="user-info__button" onClick={changeState}>
            {t('set')}
          </button>
        )}
      </div>
    </div>
  )
}
