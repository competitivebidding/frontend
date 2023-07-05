import React from 'react'

import { ResetPasswordRight } from '@features/auth'
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
