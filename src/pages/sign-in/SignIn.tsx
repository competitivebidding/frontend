import React from 'react'

import LeftAuth from '../authorization/leftAuth.js'
import { SignInRight } from '@/feauters/auth'

const SignIn = () => {
  return (
    <>
      <LeftAuth />
      <SignInRight />
    </>
  )
}

export default SignIn
