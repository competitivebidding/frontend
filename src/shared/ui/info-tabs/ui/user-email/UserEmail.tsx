import React, { useState } from 'react'
import user from '@assets/cabinet/icons/sms.svg'
import { useTranslation } from 'react-i18next'

interface IUserEmailProps {
  field: string | undefined
  handleUpdate: (data: { email: string }) => void
}

const UserEmail = ({ field, handleUpdate }: IUserEmailProps) => {
  const { t } = useTranslation('cabinetPage')

  const [isEditable, setIsEditable] = useState(false)
  const [value, setValue] = useState(field)

  const changeState = () => {
    setIsEditable(!isEditable)
  }

  const update = (data: { email: string }) => {
    handleUpdate(data)
    setIsEditable(false)
  }

  return (
    <div className="cabinet-block user-info__item">
      <div className="item-top">
        <div className="item-top__image">
          <img src={user} alt="" />
        </div>
        <div className="item-top__info">
          <div className="item-top__content">
            <p className="item-top__content-title">E-mail</p>
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
          <div className="item-top__status">{t('notConfirmed')}</div>
        </div>
      </div>
      <div className="item-bottom">
        <>
          {field ? (
            <button
              className="user-info__button"
              onClick={() => console.log('the confirmation letter has been sent to your e-mail')}
            >
              {t('confirm')}
            </button>
          ) : (
            <>
              {isEditable ? (
                <button className="user-info__button" disabled={!value} onClick={() => update({ email: value })}>
                  {t('change')}
                </button>
              ) : (
                <button className="user-info__button" onClick={changeState}>
                  {t('set')}
                </button>
              )}
            </>
          )}
        </>
      </div>
    </div>
  )
}

export default UserEmail
