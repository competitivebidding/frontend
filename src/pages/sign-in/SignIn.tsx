import React from 'react'

import { SignInRight } from '@features/auth'
import LeftAuth from "@pages/authorization/leftAuth";

const SignIn = () => {
  return (
    <>
      <LeftAuth />
      <SignInRight />
    </>
  )
}

export default SignIn
