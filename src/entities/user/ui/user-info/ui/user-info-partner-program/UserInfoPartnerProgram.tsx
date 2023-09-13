import React from 'react'

import './UserInfoPartnerProgram.scss'

import UserInfoButtons from '@/widgets/user-info-buttons/UserInfoButtons'
import { UserInfoAccount } from '../user-account-info/UserInfoAccount'
import ForPartners from '@/widgets/for-partners/ForPartners'

import { useQuery } from '@apollo/client'
import { GET_PROFILE_QUERY } from '@/shared/schemas/user/userProfile'

export const UserInfoPartnerProgram = () => {
  const [userData, setUserData] = React.useState(null)
  const [isLoaded, setIsLoaded] = React.useState(false)

  const { data, error, loading, refetch } = useQuery(GET_PROFILE_QUERY)

  React.useEffect(() => {
    if (!loading && data?.getProfile) {
      setUserData(data.getProfile)
      setIsLoaded(!isLoaded)
    }
  }, [data])

  return (
    <>
      {!isLoaded ? (
        <h2>Loading...</h2>
      ) : (
        <section className="block">
          <UserInfoButtons />
          <UserInfoAccount id={userData?.id} />
          <ForPartners />
        </section>
      )}
    </>
  )
}
