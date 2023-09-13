import React, {useEffect, useState} from 'react'
import './Messages.scss'
import {AppModal} from '@shared/ui/modal/AppModal'
import {useQuery} from '@apollo/client'
import {GET_ALL_USERS_BY_ROOM_ID} from '@shared/schemas/messages/messages'
import {useLocalStorage} from '@shared/lib/useLocalStorage'
import {MessageInput} from '@features/message-input/MessageInput'
import {GroupSubscribers} from '@widgets/group-subscribers/GroupSubscribers'
import {AddNewGroupForm} from '@features/add-new-group-form/AddNewGroupForm'
import {ChatMessages} from '@features/chat-messages/ChatMessages'
import {ChatHeader} from './ui/chat-header/ChatHeader'
import {ChatSidebar} from './ui/chat-sidebar/ChatSidebar'
import {ChatJoin} from '@features/chat-join-button/ChatJoin'
import {GetRoomByIdDocument} from '@shared/lib/types/__generated-types__/graphql'

export interface Group {
  createdAt: string
  description: null | string
  id: number
  ownerId: number
  title: string
  updatedAt: string
}

export interface IUser {
  id: number
  username: string
  firstname?: string | null
  lastname?: string | null
  avatarUrl?: string | null
}

const Messages = () => {
  const { lsValue: lsActiveGroup } = useLocalStorage<Group>('activeGroup');
  const { lsValue: lsUser } = useLocalStorage<IUser>('user');
  const [isSidebarOpened, setIsSidebarOpened] = useState(true)

  const [modalNewGroup, setModalNewGroup] = useState(false);
  const [modalGroup, setModalGroup] = useState(false);
  const [activeGroup, setActiveGroup] = useState<Group | undefined>(undefined);
  const [groupUsers, setGroupUsers] = useState<IUser[]>([]);
  const { data: currentRoom, loading, refetch } = useQuery(GetRoomByIdDocument, {
    variables: {
      roomId: Number(lsActiveGroup?.id)
    },
  });

  const { data: users, loading: isUsersLoading } = useQuery(GET_ALL_USERS_BY_ROOM_ID, {
    variables: {
      roomId: Number(activeGroup?.id)
    },
    skip: !activeGroup?.id
  });

  const isJoined = () => {
    return users?.getAllUsersByRoomId.find((user) => user.username === lsUser?.username);
  };

  const handleSelectActiveGroup = (group: Group) => {
    setActiveGroup(group);
    toggleActiveSidebar()
  };

  const isCreator = () => {
    refetch({
      roomId: Number(lsActiveGroup?.id),
    });
    return currentRoom?.getRoomById.ownerId === lsUser?.id;
  };

  const toggleNewGroup = () => {
    setModalNewGroup(!modalNewGroup);
  };

  const toggleGroup = () => {
    setModalGroup(!modalGroup);
  };

  const toggleActiveSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened)
  }

  useEffect(() => {
    if (!isUsersLoading && activeGroup?.id) {
      const transformedUsers = users?.getAllUsersByRoomId.map((user, index) => ({
        id: parseInt(`${user.username}_${index}`),
        username: user.username,
        firstname: user.firstname || '',
        lastname: user.lastname || '',
        avatarUrl: user.avatarUrl || '',
      })) || [];

      setGroupUsers(transformedUsers);
    }
  }, [users, activeGroup?.id]);


  return (
      <>
        <div className='chat'>
          <ChatSidebar
              onToggleNewGroupModal={setModalNewGroup}
              onSelectGroup={handleSelectActiveGroup}
              activeGroupId={(activeGroup && activeGroup.id) as number}
              isSidebarOpened={isSidebarOpened}
          />
          {activeGroup ? (
              <div className='chat__container'>
                {<ChatHeader
                    title={ activeGroup.title}
                    length={(users?.getAllUsersByRoomId.length) as number}
                    onToggleModal={toggleGroup}
                    isSidebarOpened={isSidebarOpened}
                    toggleActiveSidebar={toggleActiveSidebar}
                />}
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
                      setActiveGroup={setActiveGroup}
                   isOwner={activeGroup.ownerId === lsUser?.id}
                  />
              )}
            </AppModal>
        )}

      </>
  )
}


export default Messages;
