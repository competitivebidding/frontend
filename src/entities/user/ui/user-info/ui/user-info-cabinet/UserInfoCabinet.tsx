import React, { useEffect, useState } from 'react'

import { useMutation, useQuery } from '@apollo/client'
import { UserInfoLoader } from '@/shared/ui/loader/UserInfoLoader'
import UserName from '@/shared/ui/info-tabs/ui/user-name/UserName'
import UserEmail from '@/shared/ui/info-tabs/ui/user-email/UserEmail'
import { UserPhone } from '@/shared/ui/info-tabs/ui/user-phone/UserPhone'
import UserInst from '@/shared/ui/info-tabs/ui/user-instagram/UserInst'
import { PaymentForm } from '@/features/payment-form/PaymentForm'
import UserPaymentsInfo from '@/shared/ui/info-tabs/ui/user-payment-info/UserPaymentsInfo'
import UserCountry from '@/shared/ui/info-tabs/ui/user-country/UserCountry'
import { UserSettings } from '@/shared/ui/info-tabs/ui/user-settings/UserSettings'
import { UserInfoLevel } from '@/shared/ui/info-tabs/ui/user-verification/UserInfoLevel'
import { GET_PROFILE_QUERY, UPDATE_PROFILE } from '@/shared/schemas/user/userProfile'
import './UserInfoCabinet.scss'
import {
  GetProfileDocument,
  GetProfileQuery,
  GetProfileQueryVariables,
} from '@shared/lib/types/__generated-types__/graphql'

export const UserInfoCabinet = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [update] = useMutation(UPDATE_PROFILE)
  const { data, error, loading, refetch } = useQuery(GetProfileDocument)

  const updateProfile = (data: any) => {
    update({
      variables: {
        updateUserInput: { ...data },
      },
    }).then(() => refetch())
  }

  return (
    <>
      {loading && <UserInfoLoader />}
      <>
        <article className="user-info">
          <UserSettings id={data?.getProfile.id} avatarUrl={data?.getProfile.avatarUrl} />
          <UserInfoLevel field={data?.getProfile} />
          <UserName field={data?.getProfile.username} handleUpdate={updateProfile} />
          <UserEmail field={data?.getProfile.email} handleUpdate={updateProfile} />
          <UserPhone field={data?.getProfile.phone} handleUpdate={updateProfile} />
          <UserInst field={data?.getProfile.instagram} handleUpdate={updateProfile} />
          <UserPaymentsInfo onOpen={setModalIsOpen} />
          <UserCountry />
        </article>
        {modalIsOpen && <PaymentForm onClose={setModalIsOpen} />}
      </>
    </>
  )
}
