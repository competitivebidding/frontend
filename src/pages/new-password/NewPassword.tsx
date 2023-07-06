import React from 'react'

import { NewPasswordRight } from '@features/auth'
import LeftAuth from '@pages/authorization/leftAuth'

const NewPassword = () => {
  return (
    <>
      <LeftAuth />
      <NewPasswordRight />
    </>
  )
}

export default NewPassword
