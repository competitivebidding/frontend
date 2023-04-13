import React from 'react'
import AppHeader from '../../components/appHeader/AppHeader.jsx'
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
