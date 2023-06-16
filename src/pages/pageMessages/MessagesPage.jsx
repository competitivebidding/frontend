import React from 'react'
import AppHeader from '../../components/appHeader/AppHeader.jsx'
import Messages from './Messages.jsx'

const pageMessages = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <Messages />
    </>
  )
}

export default pageMessages
