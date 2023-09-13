import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import iconSend from '@assets/Chat/iconSend.svg'
import { useMutation } from '@apollo/client'
import { SEND_MESSAGE } from '@shared/schemas/messages/messages'
import scss from './MessageInput.module.scss'

interface IMessageInputProps {
  roomId: number
}

export const MessageInput = ({ roomId }: IMessageInputProps) => {
  const [newMessage, setNewMessage] = useState('')
  const [sendMessage] = useMutation(SEND_MESSAGE)

  const handleSendMessage = () => {
    if (newMessage === '') {
      return
    }

    sendMessage({
      variables: {
        newMessage: {
          content: newMessage,
          roomId: roomId,
        },
      },
    }).then((message) => console.log(message))

    setNewMessage('')
  }
  const handleNewMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
      return
    }
  }

  return (
    <div className={scss.footer}>
      <input
        type="text"
        placeholder="Enter your message"
        value={newMessage}
        onChange={handleNewMessage}
        onKeyUp={handleKeyUp}
      />

      <button onClick={handleSendMessage}>
        <img src={iconSend} alt="iconSend" className={scss.footer__send} />
      </button>
    </div>
  )
}
