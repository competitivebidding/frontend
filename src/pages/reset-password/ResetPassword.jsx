import React from 'react'

import LeftAuth from '../authorization/leftAuth.jsx'
import { ResetPasswordRight } from '@/feauters/auth'

const ResetPassword = () => {
  return (
    <>
      <LeftAuth />
      <ResetPasswordRight />
    </>
  )
}

export default ResetPassword
