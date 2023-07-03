import React from 'react'

import { SignUpRight } from '@/feauters/auth'
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
