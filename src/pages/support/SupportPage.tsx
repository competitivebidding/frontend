import React from 'react'
import AppHeader from '@widgets/header/AppHeader.js'
import Support from '@widgets/support/Support.js'

const SupportPage = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <Support />
    </>
  )
}

export default SupportPage
