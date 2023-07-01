import React from 'react'
import AppHeader from '../../widgets/header/AppHeader.jsx'
import Messages from '../../entities/messages/Messages.tsx'

const pageMessages = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <Messages />
    </>
  )
}

export default pageMessages
