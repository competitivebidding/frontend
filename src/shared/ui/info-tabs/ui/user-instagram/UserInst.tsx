import React, { useState } from 'react'
import icon from '@assets/cabinet/icons/instagram.svg'
import { useTranslation } from 'react-i18next'

interface UserInstProps {
  field: string | null | undefined
  handleUpdate: (data: { instagram: string | null | undefined }) => void
}

const UserInst = ({ field, handleUpdate }: UserInstProps) => {
  const { t } = useTranslation('cabinetPage')

  const [isEditable, setIsEditable] = useState(false)
  const [value, setValue] = useState(field)

  const changeState = () => {
    setIsEditable(!isEditable)
  }

  const update = (data: string | null | undefined) => {
    handleUpdate({ instagram: data })
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
            <p className="item-top__content-title">{t('instagram')}</p>
            {isEditable ? (
              <input
                autoFocus
                type="text"
                className="item-top__input"
                defaultValue={field as string}
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

export default UserInst
