import React, { useState, Dispatch, SetStateAction } from 'react'
import Icon from '@assets/cabinet/icons/avatar.svg'
import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_MY_ROOMS, GET_ALL_USERS_BY_ROOM_ID, LEAVE_FROM_CHAT } from '@/shared/schemas/messages/messages'
import { AppModal } from '@shared/ui/modal/AppModal'

import scss from './GroupSubscribers.module.scss'
import { IUser } from '@entities/messages/Messages'
import {Group} from '@entities/messages/Messages'
import iconPlus from "@assets/Chat/iconPlus.svg";
import {InviteUserToChat} from "@features/invite-user-to-chat/ui/InviteUserToChat";
import { useTranslation } from 'react-i18next'
import {ConfirmModal} from "@shared/ui/configmModal";

interface IGroupSubscribersProps {
  groupTitle: string
  groupSubs: IUser[]
  roomId: number
  onClose: () => void
  setActiveGroup: Dispatch<SetStateAction<Group | undefined>>
  isOwner: boolean
}

export const GroupSubscribers = ({ groupTitle, groupSubs, roomId, onClose,  setActiveGroup, isOwner}: IGroupSubscribersProps) => {
  const [modalGroupOpen, setModalGroupOpen] = useState(true)
  const [leaveModalOpen, setLeaveModalOpen] = useState(false)
  const [inviteModalIsOpen, setInviteModalIsOpen] = useState(false)
  const { t } = useTranslation('messagesPage')

  const [leaveFromChat] = useMutation(LEAVE_FROM_CHAT, { refetchQueries: [GET_ALL_MY_ROOMS] })
  const { data, refetch } = useQuery(GET_ALL_USERS_BY_ROOM_ID, {
    variables: {
      roomId: Number(roomId),
    },
  })

  const confirm = () => {
    setModalGroupOpen(false)
    setLeaveModalOpen(true)
  }

  const handleConfirmLeaveChat = () => {
    leaveFromChat({
      variables: {
        roomId,
      },
    })
    setActiveGroup(undefined)
    onClose()
  }

  const handleCancelLeaveChat = () => {
    setModalGroupOpen(true)
    setLeaveModalOpen(false)
    onClose()
  }

  const handleCancelInvite = () => {
    setModalGroupOpen(true)
    setInviteModalIsOpen(false)
    onClose()
  }

  const handleInviteModalOpen = () => {
    setModalGroupOpen(false)
    setInviteModalIsOpen(true)
  }

  console.log(isOwner)

  return (
      <>
        {modalGroupOpen && (
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
                {isOwner && <div className={scss.header__invite} onClick={handleInviteModalOpen}>
                  <img src={iconPlus} alt="iconGroup"/>
                </div>}
              </div>
              {groupSubs && (
                  <div className={`${scss.modalGroup__members} ${scss.subscribers}`}>
                    <div className={scss.subscribers__count}>{groupSubs.length} {t('subscribers')}</div>
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
                <button className={`${scss.modalGroup__leave}`} onClick={confirm}>
                  {t('Leave chat')}
                </button>
              </div>
            </div>
        )}
        {leaveModalOpen && (
            <ConfirmModal
                isOpen={leaveModalOpen}
                onClose={setLeaveModalOpen}
                onCancel={handleCancelLeaveChat}
                onConfirm={handleConfirmLeaveChat}
                title={'Do you really want to leave the band'} />
        )}
        {inviteModalIsOpen && (
            <AppModal isOpen={inviteModalIsOpen} onClose={handleCancelInvite}>
              <InviteUserToChat roomId={roomId} onClose={handleCancelInvite} title={'Invite user in group'} actionText={'Invite'} />
            </AppModal>
        )}
      </>
  )
}
