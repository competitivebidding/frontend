import React, { useEffect, useState } from 'react';
import './Messages.scss';
import { AppModal } from '../../shared/ui/modal/AppModal';
import { useQuery, useSubscription } from "@apollo/client";
import { GET_ALL_USERS_BY_ROOM_ID } from "../../shared/schemas/messages/messages";
import { useLocalStorage } from "../../shared/lib/useLocalStorage";
import { NEW_MESSAGE } from "../../shared/schemas/messages/subscriptions";
import { MessageInput } from "../../feauters/message-input/MessageInput";
import { GroupSubscribers } from "../../widgets/group-subscribers/GroupSubscribers";
import { AddNewGroupForm } from "../../feauters/add-new-group-form/AddNewGroupForm";
import { ChatMessages } from "../../feauters/chat-messages/ChatMessages";
import { ChatHeader } from "./ui/chat-header/ChatHeader";
import { ChatSidebar } from "./ui/chat-sidebar/ChatSidebar";
import { ChatJoin } from "../../feauters/chat-join-button/ChatJoin";

const Messages = () => {
  const { lsValue: lsActiveGroup } = useLocalStorage('activeGroup')
  const { lsValue: lsUser } = useLocalStorage('user')

  const [modalNewGroup, setModalNewGroup] = useState(false);
  const [modalGroup, setModalGroup] = useState(false);
  const [activeGroup, setActiveGroup] = useState(lsActiveGroup || null)
  const [groupUsers, setGroupUsers] = useState([])



  const isJoined = () => {
    return groupUsers.find(user => user.username === lsUser.username)
  }

  const handleSelectActiveGroup = ({ title, id }) => {
    setActiveGroup({ title, id })
  }

  const toggleNewGroup = () => {
    setModalNewGroup(!modalNewGroup);
  };

  const toggleGroup = () => {
    setModalGroup(!modalGroup);
  };

  const { data: users, loading: isUsersLoading } = useQuery(GET_ALL_USERS_BY_ROOM_ID, {
    variables: {
      roomId: Number(activeGroup && activeGroup.id)
    }
  })

  useEffect(() => {
    if (!isUsersLoading) {
      setGroupUsers(users.getAllUsersByRoomId)
    }
  }, [users])

  return (
    <>
      <div className="chat">
        <ChatSidebar onToggleNewGroupModal={setModalNewGroup} onSelectGroup={handleSelectActiveGroup} activeGroupId={activeGroup && activeGroup.id} />
        {activeGroup ? <div className="chat__container">
          <ChatHeader title={activeGroup && activeGroup.title} length={groupUsers.length} onToggleModal={toggleGroup} />
          <ChatMessages groupId={activeGroup && activeGroup.id}/>
          {isJoined() ?
            <MessageInput roomId={activeGroup && activeGroup.id} /> :
            <ChatJoin roomId={activeGroup && activeGroup.id} />
          }
        </div> :
          <div className='empty__container'>
            <div className='chat__empty'> Select a chat to start messaging</div>
          </div>}
      </div>

      {modalNewGroup && (
        <AppModal isOpen={modalNewGroup} onClose={toggleNewGroup}>
          <AddNewGroupForm onClose={setModalNewGroup} />
        </AppModal>
      )}

      {modalGroup && (
        <AppModal isOpen={modalGroup} onClose={toggleGroup}>
          <GroupSubscribers groupTitle={activeGroup && activeGroup.title} groupSubs={groupUsers} roomId={activeGroup && activeGroup.id} onClose={toggleGroup} />
        </AppModal>
      )}
    </>
  );
};

export default Messages;
