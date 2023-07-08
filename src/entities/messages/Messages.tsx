import React, { useEffect, useState } from 'react'
import './Messages.scss'
import { AppModal } from '@shared/ui/modal/AppModal'
import { useQuery } from '@apollo/client'
import { GET_ALL_USERS_BY_ROOM_ID } from '@shared/schemas/messages/messages'
import { useLocalStorage } from '@shared/lib/useLocalStorage'
import { MessageInput } from '@features/message-input/MessageInput'
import { GroupSubscribers } from '@widgets/group-subscribers/GroupSubscribers'
import { AddNewGroupForm } from '@features/add-new-group-form/AddNewGroupForm'
import { ChatMessages } from '@features/chat-messages/ChatMessages'
import { ChatHeader } from './ui/chat-header/ChatHeader'
import { ChatSidebar } from './ui/chat-sidebar/ChatSidebar'
import { ChatJoin } from '@features/chat-join-button/ChatJoin'
import { GetRoomByIdDocument, GetRoomByIdQuery } from '@shared/lib/types/__generated-types__/graphql'

interface ActiveGroup {
  title: string
  id: number
}

export interface User {
  id: number
  username: string
  firstname: string
  lastname: string
  avatarUrl: string
}

const Messages = () => {
  const { lsValue: lsActiveGroup } = useLocalStorage<ActiveGroup>('activeGroup')
  const { lsValue: lsUser } = useLocalStorage<User>('user')

  const [modalNewGroup, setModalNewGroup] = useState(false)
  const [modalGroup, setModalGroup] = useState(false)
  const [activeGroup, setActiveGroup] = useState<ActiveGroup | undefined>(undefined)
  const [groupUsers, setGroupUsers] = useState<User[] | []>([])
  const { data: currentRoom, loading , refetch} = useQuery(GetRoomByIdDocument, {
    variables: {
      roomId: Number(lsActiveGroup?.id)
    }
  })

  const { data: users, loading: isUsersLoading } = useQuery(GET_ALL_USERS_BY_ROOM_ID, {
    variables: {
      roomId: Number(activeGroup?.id),
    },
  })

  const isJoined = () => {
    return users?.getAllUsersByRoomId.find((user) => user.username === lsUser?.username)
  }

  const handleSelectActiveGroup = ({ title, id }: ActiveGroup) => {
    setActiveGroup({ title, id })
  }

  const isCreator = () => {
    refetch({
      roomId: Number(lsActiveGroup?.id)
    })
    return currentRoom?.getRoomById.ownerId === lsUser?.id
  }

  const toggleNewGroup = () => {
    setModalNewGroup(!modalNewGroup)
  }

  const toggleGroup = () => {
    setModalGroup(!modalGroup)
  }


  // useEffect(() => {
  //   if (!isUsersLoading) {
  //     setGroupUsers(users?.getAllUsersByRoomId)
  //   }
  // }, [users])

  return (
    <>
      <div className='chat'>
        <ChatSidebar
          onToggleNewGroupModal={setModalNewGroup}
          onSelectGroup={handleSelectActiveGroup}
          activeGroupId={(activeGroup && activeGroup.id) as number}
        />
        {activeGroup ? (
          <div className='chat__container'>
            <ChatHeader
              title={activeGroup && activeGroup.title}
              length={(users && users.getAllUsersByRoomId.length) as number}
              onToggleModal={toggleGroup}
            />
            <ChatMessages groupId={activeGroup.id} />
            {isJoined() || isCreator() ? (
              <MessageInput roomId={activeGroup.id} />
            ) : (
              <ChatJoin roomId={activeGroup.id} />
            )}
          </div>
        ) : (
          <div className='empty__container'>
            <div className='chat__empty'> Select a chat to start messaging</div>
          </div>
        )}
      </div>

      {modalNewGroup && (
        <AppModal isOpen={modalNewGroup} onClose={toggleNewGroup}>
          <AddNewGroupForm onClose={setModalNewGroup} />
        </AppModal>
      )}

      {modalGroup && (
        <AppModal isOpen={modalGroup} onClose={toggleGroup}>
          {activeGroup && (
            <GroupSubscribers
              groupTitle={activeGroup.title}
              groupSubs={groupUsers}
              roomId={activeGroup.id}
              onClose={toggleGroup}
            />
          )}
        </AppModal>
      )}
    </>
  )
}

export default Messages
