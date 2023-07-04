import { useMutation, useQuery } from '@apollo/client'
import icon from '@assets/cabinet/icons/card.svg'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GET_USER_PAYMENT, UPDATE_USER_PAYMENT } from '@shared/schemas/user/userProfile'

interface UserPaymentsInfoProps {
  onOpen: (value: boolean) => void
}

const UserPaymentsInfo = ({ onOpen }: UserPaymentsInfoProps) => {
  const { t } = useTranslation('cabinet')

  const [field, setField] = useState<{ number?: string; firstname?: string; lastname?: string }>({})
  const [updateCard] = useMutation(UPDATE_USER_PAYMENT)
  const {
    data: { getUserPayment },
    loading,
    refetch,
  } = useQuery(GET_USER_PAYMENT)

  useEffect(() => {
    if (!loading && getUserPayment) {
      setField(getUserPayment)
    }
  }, [getUserPayment])

  const unlink = () => {
    updateCard({
      variables: {
        input: {
          number: '',
          firstname: '',
          lastname: '',
          cvv: '',
          month: '',
          year: '',
        },
      },
    }).then(() => refetch())
  }

  return (
    <div className="cabinet-block user-info__item">
      <div className="item-top">
        <div className="item-top__image">
          <img src={icon} alt="" />
        </div>
        <div className="item-top__info">
          <div className="item-top__content">
            <p className="item-top__content-title">
              {field && field.number ? '****' + `${field.number.slice(-4)}` : 'UserPayment'}
            </p>
            <span className="item-top__content-subtitle">{field && field.number ? 'Bank card' : 'Not connected'}</span>
          </div>
          <div className="item-top__status info">{field && field.firstname + ' ' + field.lastname}</div>
        </div>
      </div>
      <div className="item-bottom">
        {field && field.number ? (
          <button className="user-info__button" onClick={() => unlink()}>
            {t('unlink')}
          </button>
        ) : (
          <button className="user-info__button" onClick={() => onOpen(true)}>
            {t('connect')}
          </button>
        )}
      </div>
    </div>
  )
}

export default UserPaymentsInfo
