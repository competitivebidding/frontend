import React from 'react'
import AppHeader from '../../widgets/Header/AppHeader.jsx'
import Support from './Support.jsx'

const SupportPage = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <Support />
    </>
  )
}

export default SupportPage
