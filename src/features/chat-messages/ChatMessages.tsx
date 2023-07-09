import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import { GET_ALL_MESSAGES_BY_ROOM } from '@shared/schemas/messages/messages'
import { useLocalStorage } from '@shared/lib/useLocalStorage'
import { NEW_MESSAGE } from '@shared/schemas/messages/subscriptions'
import { toTime } from '@shared/utils/timeHelpers'
import './ChatMessages.scss'
import { GetAllMessagesByRoomIdDocument, MutationSendMessageArgs } from '@shared/lib/types/__generated-types__/graphql'
import { IUser } from 'src/entities/messages/Messages'

interface IChatMessages {
  groupId: number
}

interface IMessage {
  userId: number
  id: number
  content: string
  createdAt: string
}

export const ChatMessages = ({ groupId }: IChatMessages) => {
  const { lsValue } = useLocalStorage<IUser>('user')
  const [groupMessages, setGroupMessages] = useState<IMessage[] | undefined>(undefined)
  const ref = useRef<HTMLDivElement>(null)
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)

  const { data: subData, loading: subLoading, error } = useSubscription(NEW_MESSAGE, { variables: { roomId: groupId } })

  const { data: messagesData, loading: messagesLoading } = useQuery(GetAllMessagesByRoomIdDocument, {
    variables: {
      userMessage: {
        roomId: groupId,
      },
    },
  })

  useEffect(() => {
    console.log()
  }, [])


  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: 'smooth',
      })
      setAutoScrollEnabled(false)
    }
  }, [groupMessages])

  useEffect(() => {
    if (!subLoading) {
      const newMessage = subData?.newMessage
      if (newMessage) {
        setGroupMessages((prevMessages) => {
          if (prevMessages && Array.isArray(prevMessages)) {
            return [...prevMessages, newMessage]
          } else {
            return [newMessage]
          }
        })
      }
    }
  }, [subData, subLoading])

  useEffect(() => {
    if (ref.current && autoScrollEnabled) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
      })
      setAutoScrollEnabled(false)
    }
  }, [autoScrollEnabled])

  useEffect(() => {
    if (!messagesLoading) {
      setGroupMessages(messagesData?.getAllMessagesByRoomId)
      setAutoScrollEnabled(true)
    }
  }, [messagesData])

  const Your = ({ message }: { message: IMessage }) => {
    return (
      <div key={message.id} className="message__your">
        <div className="message__content">
          {message.content}
          <div className="message__time">
            {toTime(message.createdAt)}
          </div>
        </div>
      </div>
    )
  }

  const Answer = ({ message }: { message: IMessage }) => {
    return (
      <div className="message__answer answer">
        <div className="answer__content-answer">
          {/*<div className="answer__sender">{message.username}</div>*/}
          {message.content}
          <div className="answer__time-answer">
            {toTime(message.createdAt)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {groupMessages && (
        <div className="chat__messages message" ref={ref}>
          {groupMessages.map((message) =>
            message.userId === lsValue?.id ? (
              <Your message={message} key={message.id} />
            ) : (
              <Answer message={message} key={message.id} />
            ),
          )}
        </div>
      )}
    </>
  )
}
