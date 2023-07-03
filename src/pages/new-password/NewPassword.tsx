import React from 'react'

import { NewPasswordRight } from '@/feauters/auth'
import LeftAuth from "@pages/authorization/leftAuth";

const NewPassword = () => {
  return (
    <>
      <LeftAuth />
      <NewPasswordRight />
    </>
  )
}

export default NewPassword
