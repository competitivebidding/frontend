import { useMutation, useQuery } from '@apollo/client'
import icon from '@assets/cabinet/icons/card.svg'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GET_USER_PAYMENT, UPDATE_USER_PAYMENT } from '@shared/schemas/user/userProfile'
import { GetUserPaymentDocument } from '@shared/lib/types/__generated-types__/graphql'

interface UserPaymentsInfoProps {
  onOpen: (value: boolean) => void
}

interface IField {
  number?: string
  firstname?: string
  lastname?: string
}

const UserPaymentsInfo = ({ onOpen }: UserPaymentsInfoProps) => {
  const { t } = useTranslation('cabinet')

  const [field, setField] = useState<IField | {}>({})
  const [updateCard] = useMutation(UPDATE_USER_PAYMENT)
  const { data, loading, refetch } = useQuery(GetUserPaymentDocument)

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
              {data?.getUserPayment.number ? '****' + `${data?.getUserPayment.number.slice(-4)}` : 'UserPayment'}
            </p>
            <span className="item-top__content-subtitle">
              {data?.getUserPayment.number ? 'Bank card' : 'Not connected'}
            </span>
          </div>
          <div className="item-top__status info">
            {data?.getUserPayment.firstname + ' ' + data?.getUserPayment.lastname}
          </div>
        </div>
      </div>
      <div className="item-bottom">
        {data?.getUserPayment.number ? (
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
