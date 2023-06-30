import React from 'react'
import AppHeader from '../../widgets/header/AppHeader.jsx'
import Support from '../../widgets/support/Support.jsx'

const SupportPage = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <Support />
    </>
  )
}

export default SupportPage
