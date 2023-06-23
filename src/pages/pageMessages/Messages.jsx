import React, {useEffect, useState} from 'react';
import './Messages.scss';
import {AppModal} from '../../components/appModal/AppModal';
import {useQuery, useSubscription} from "@apollo/client";
import {GET_ALL_USERS_BY_ROOM_ID} from "../../components/server/messages";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {NEW_MESSAGE} from "../../components/server/subscriptions";
import {MessageInput} from "./MessageInput/MessageInput";
import {GroupSubscribers} from "./GroupSubscribers/GroupSubscribers";
import {AddNewGroupForm} from "./AddNewGroupForm/AddNewGroupForm";
import {ChatMessages} from "./ChatMessages/ChatMessages";
import {ChatHeader} from "./ChatHeader/ChatHeader";
import {ChatSidebar} from "./ChatSidebar/ChatSidebar";

const Messages = () => {
  const {lsValue: lsActiveGroup} = useLocalStorage('activeGroup')

  const [modalNewGroup, setModalNewGroup] = useState(false);
  const [modalGroup, setModalGroup] = useState(false);
  const [activeGroup, setActiveGroup] = useState(lsActiveGroup || {})
  const [groupUsers, setGroupUsers ] = useState([])

  const handleSelectActiveGroup = ({title, id}) => {
    setActiveGroup({title, id})
  }

  const toggleNewGroup = () => {
    setModalNewGroup(!modalNewGroup);
  };

  const toggleGroup = () => {
    setModalGroup(!modalGroup);
  };

  const {data: users, loading: isUsersLoading} = useQuery(GET_ALL_USERS_BY_ROOM_ID, {
    variables: {
      roomId: Number(activeGroup.id)
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
       <ChatSidebar onToggleNewGroupModal={setModalNewGroup} onSelectGroup={handleSelectActiveGroup} activeGroupId={activeGroup.id} />
        <div className="chat__container">
          <ChatHeader title={activeGroup.title} length={groupUsers.length} onToggleModal={toggleGroup}/>
          <ChatMessages groupId={activeGroup.id}/>
          <MessageInput roomId={activeGroup.id} />
        </div>
      </div>

      {modalNewGroup && (
          <AppModal isOpen={modalNewGroup} onClose={toggleNewGroup}>
            <AddNewGroupForm  onClose={setModalNewGroup}/>
          </AppModal>
      )}

      {modalGroup && (
          <AppModal isOpen={modalGroup} onClose={toggleGroup}>
            <GroupSubscribers groupTitle={activeGroup.title} groupSubs={groupUsers} />
          </AppModal>
      )}
    </>
  );
};

export default Messages;
