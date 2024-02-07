import React, {lazy} from 'react'
import {PartnersStatistic} from '@/entities/partners'
import useNoAuth from '@shared/lib/useNoAuth.js'

const UserInfoPartnerProgram = lazy(() => import('@/entities/user/ui/user-info/ui/user-info-partner-program/UserInfoPartnerProgram'))

const PartnerPage = () => {
  useNoAuth()

  return (
    <div>
      <UserInfoPartnerProgram />
      <PartnersStatistic />
    </div>
  )
}

export default PartnerPage
