import React from 'react'

import LeftAuth from '../authorization/leftAuth.tsx'
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
