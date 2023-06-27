import React, { useEffect, useState } from 'react';
import './Messages.scss';
import { AppModal } from '../../components/appModal/AppModal';
import { useQuery, useSubscription } from "@apollo/client";
import { GET_ALL_USERS_BY_ROOM_ID } from "../../components/server/messages";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { NEW_MESSAGE } from "../../components/server/subscriptions";
import { MessageInput } from "./MessageInput/MessageInput";
import { GroupSubscribers } from "./GroupSubscribers/GroupSubscribers";
import { AddNewGroupForm } from "./AddNewGroupForm/AddNewGroupForm";
import { ChatMessages } from "./ChatMessages/ChatMessages";
import { ChatHeader } from "./ChatHeader/ChatHeader";
import { ChatSidebar } from "./ChatSidebar/ChatSidebar";
import { ChatJoin } from "./ChatJoin/ChatJoin";

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