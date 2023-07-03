import React from 'react'

import { ResetPasswordRight } from '@/feauters/auth'
import LeftAuth from "@pages/authorization/leftAuth";

const ResetPassword = () => {
  return (
    <>
      <LeftAuth />
      <ResetPasswordRight />
    </>
  )
}

export default ResetPassword
