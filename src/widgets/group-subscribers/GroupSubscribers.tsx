import React, { FC } from 'react'
import Icon from '@assets/cabinet/icons/avatar.svg'
import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_MY_ROOMS, GET_ALL_USERS_BY_ROOM_ID, LEAVE_FROM_CHAT } from '@/shared/schemas/messages/messages'

import scss from './GroupSubscribers.module.scss'
import { IUser } from '@entities/messages/Messages'

interface IGroupSubscribersProps {
  groupTitle: string
  groupSubs: IUser[]
  roomId: number
  onClose: () => void
}

export const GroupSubscribers = ({ groupTitle, groupSubs, roomId, onClose }: IGroupSubscribersProps) => {
  const [leaveFromChat] = useMutation(LEAVE_FROM_CHAT, { refetchQueries: [GET_ALL_MY_ROOMS] })
  const { data, refetch } = useQuery(GET_ALL_USERS_BY_ROOM_ID, {
    variables: {
      roomId: Number(roomId),
    },
  })

  const handleLeaveChat = () => {
    leaveFromChat({
      variables: {
        roomId,
      },
    })
    onClose()
  }

   console.log (groupSubs.length)

  return (
    <>
      <div className={scss.modalGroup}>
        <div className={`${scss.header} ${scss.modalGroup__header}`}>
          <div className={scss.header__avatarGroup}>
            <img src={Icon} alt="Group Avatar" />
          </div>
          <div className={scss.header__info}>
            <p className={scss['header__name--group']}>
              {groupTitle.length > 20 ? groupTitle.substring(0, 20) + '...' : groupTitle}
            </p>
            <input type="text" className={scss.header__description} placeholder="Description" />
          </div>
        </div>
        {groupSubs && (
          <div className={`${scss.modalGroup__members} ${scss.subscribers}`}>
            <div className={scss.subscribers__count}>{groupSubs.length} subscribers</div>
            <ul>
              {groupSubs.map((user) => (
                <li key={user.username} className={scss.subscribers__member}>
                  <img src={Icon} alt="Group Avatar" className={scss.subscribers__avatar} />
                  {user.username}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={scss.modalGroup__button}>
          <button className={`${scss.modalGroup__leave}`} onClick={handleLeaveChat}>
            Leave chat
          </button>
        </div>
      </div>
    </>
  )
}
