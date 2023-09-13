import React from 'react'
import AppHeader from '../../widgets/header/AppHeader.js'
import { PartnersStatistic } from '@/entities/partners'
import { UserInfoPartnerProgram } from '@/entities/user/ui/user-info'
import useNoAuth from '@shared/lib/useNoAuth.js'

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
