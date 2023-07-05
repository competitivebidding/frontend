import React from 'react'

import { SignUpRight } from '@features/auth'
import LeftAuth from "@pages/authorization/leftAuth";

const SignUp = () => {
  return (
    <>
      <LeftAuth />
      <SignUpRight />
    </>
  )
}

export default SignUp
