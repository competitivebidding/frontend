import React from 'react'

import cls from './UserInfoPartnerProgram.module.scss'

import UserInfoButtons from '@/widgets/user-info-buttons/UserInfoButtons'
import ForPartners from '@/widgets/for-partners/ForPartners'

import { useQuery } from '@apollo/client'
import { GET_PROFILE_QUERY } from '@/shared/schemas/user/userProfile'
import {UserInfoAccount} from "@entities/user/ui/user-info/ui/user-account-info/UserInfoAccount";
import iconLoader from "@assets/Chat/iconLoader.svg"

export const UserInfoPartnerProgram = () => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const { data, error, loading, refetch } = useQuery(GET_PROFILE_QUERY)

  return (
    <>
      {loading ? (
        <div className='spinner'>
        <img src={iconLoader} alt="Spinner" />
    </div>
      ) : (
        <section className={cls.block}>
          <UserInfoButtons />
          {data?.getProfile && <UserInfoAccount id={data.getProfile.id}/>}
          <ForPartners />
        </section>
      )}
    </>
  )
}
