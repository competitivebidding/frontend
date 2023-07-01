import React from 'react'
import AppHeader from '../../widgets/header/AppHeader.jsx'
import Messages from '../../entities/messages/Messages.jsx'

const pageMessages = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <Messages />
    </>
  )
}

export default pageMessages