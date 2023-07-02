import React from 'react'

import LeftAuth from '../authorization/leftAuth.js'
import { SignUpRight } from '@/feauters/auth'

const SignUp = () => {
  return (
    <>
      <LeftAuth />
      <SignUpRight />
    </>
  )
}

export default SignUp
