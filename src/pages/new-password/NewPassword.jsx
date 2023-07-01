import React from 'react'

import LeftAuth from '../authorization/leftAuth.tsx'
import { NewPasswordRight } from '@/feauters/auth'

const NewPassword = () => {
  return (
    <>
      <LeftAuth />
      <NewPasswordRight />
    </>
  )
}

export default NewPassword
