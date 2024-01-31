import React, { FC } from 'react'
import { useMutation } from '@apollo/client'
import { GET_ALL_USERS_BY_ROOM_ID } from '@shared/schemas/messages/messages'
import './ChatJoin.scss'
import { JoinToRoomDocument } from '@shared/lib/types/__generated-types__/graphql'
import { useTranslation } from 'react-i18next'

interface IChatJoinProps {
  roomId: number
}
export const ChatJoin = ({ roomId }: IChatJoinProps) => {
  const [joinRoom] = useMutation(JoinToRoomDocument, { refetchQueries: [GET_ALL_USERS_BY_ROOM_ID] })
  const { t } = useTranslation('chatJoin')

  const joinGroup = () => {
    joinRoom({ variables: { roomId } })
  }

  return (
    <>
      <button className="join__room" onClick={joinGroup}>
        {t('Join to Room')}
      </button>
    </>
  )
}
