import React, {useEffect, useState} from 'react';
import './Messages.scss';

import iconSend from '../../assets/Chat/iconSend.svg';
import iconPlus from '../../assets/Chat/iconPlus.svg';
import { AppModal } from '../../components/appModal/AppModal';
import {useMutation, useQuery, useSubscription} from "@apollo/client";
import {
  CREATE_MY_ROOM,
  GET_ALL_MESSAGES_BY_ROOM,
  GET_ALL_MY_ROOMS,
  GET_ALL_ROOMS, GET_ALL_USERS_BY_ROOM_ID,
  JOIN_ROOM, SEND_MESSAGE
} from "../../components/server/messages";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {NEW_MESSAGE} from "../../components/server/subscriptions";
import {MessageInput} from "./MessageInput/MessageInput";

const Messages = () => {
  const {lsValue} = useLocalStorage('user')

  const [modalNewGroup, setModalNewGroup] = useState(false);
  const [modalGroup, setModalGroup] = useState(false);

  const [groupName, setGroupName] = useState('');
  const [newGroups, setNewGroups] = useState([]);
  const [rotationAngle, setRotationAngle] = useState(0);

  const [activeChat, setActiveChat] = useState(0)

  // const {data: rooms, loading: roomsLoading, refetch} = useQuery(GET_ALL_MY_ROOMS)
  const {data: messages, loading: isMessagesLoading} = useQuery(GET_ALL_MESSAGES_BY_ROOM, {variables: {
    input : {roomId: activeChat.id , userId: 11}
    }})

  const { data, loading: l, error } = useSubscription(
      NEW_MESSAGE,
      { variables: { roomId: 1 }}
  );

  console.log({'data': data, 'loading': l, 'error': error})

  const [createRoom, {}] = useMutation(CREATE_MY_ROOM)

  const toggleNewGroup = () => {
    setModalNewGroup(!modalNewGroup);
    setRotationAngle(angle => angle + 180);
  };
  const [joinRoom, {}] = useMutation(JOIN_ROOM)

  const toggleGroup = () => {
    setModalGroup(!modalGroup);
  };

  const {data: allRooms, loading: allRoomsLoading, refetch} = useQuery(GET_ALL_ROOMS)

  const addNewGroup = () => {
    createRoom({
      variables: {
        input: {
          title: groupName
        }
      }
    }).then(refetch)
    toggleNewGroup();
    setGroupName('');
  };


  const changeGroup = ({title, id}) => {
    setActiveChat({title, id})
    joinRoom({variables: {roomId: Number(id)}}).then(e => console.log(e))
  }

  useEffect(() => {
   if (!allRoomsLoading) {
     setNewGroups(allRooms.getAllRooms)
   }
  }, [allRooms])

  const [groupMessages, setGroupMessages] = useState(null)

  useEffect(() => {
    if (!isMessagesLoading) {
      setGroupMessages(messages.getAllMessagesByRoomId)
    }
  }, [messages]);

  console.log(newGroups)

  const {data: users, loading: isUsersLoading} = useQuery(GET_ALL_USERS_BY_ROOM_ID, {variables: {roomId: 1}})
  const [groupUsers, setGroupUsers ] = useState([])

  useEffect(() => {
    if (!isUsersLoading) {
      setGroupUsers(users.getAllUsersByRoomId)
    }
  }, [])


  return (
    <>
      <div className="chat">
        <div className="chat__sidebar sidebar">
          <div className='chat__sidebar-header'>
            <h2>Group</h2>
            <div className="sidebar__menu">
              <img
                  src={iconPlus}
                  alt="iconGroup"
                  onClick={toggleNewGroup}
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                  className={modalNewGroup ? 'group__rotate' : ''}
              />
            </div>
          </div>
          <div className="sidebar__group">
            <ul >
              {newGroups.map(group => (
                  <li key={group.id} className="sidebar__list" onClick={() => changeGroup({title: group.title, id: group.id})}>{group.title} </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="chat__container">
          <div className="chat__header" onClick={toggleGroup}>
            <h2>{activeChat.title}</h2>
            <div className='chat__subscribers'>222 subscribers</div>
          </div>

          <div className="chat__messages message">
            {groupMessages && groupMessages.map(message => (
                <div key={message.id} className="message__your your">
                  <div className="your__content">
                    {message.content}
                    <div className="chat__time">19:21</div>
                  </div>
                </div>
            ))}

          </div>

          <MessageInput />
        </div>
      </div>

      {modalNewGroup && (
        <AppModal isOpen={modalNewGroup} onClose={toggleNewGroup}>
          <div className="modalNewGroup">
            <div className="modalNewGroup__title">Enter your group name</div>
            <input
              type="text"
              className="modalNewGroup__name"
              value={groupName}
              onChange={e => setGroupName(e.target.value)}
            />
            <button className="modalNewGroup__button" onClick={addNewGroup}>
              Create Group
            </button>
          </div>
        </AppModal>
      )}

{modalGroup && (
  <AppModal isOpen={modalGroup} onClose={toggleGroup}>
    <div className="modalGroup">
      <div className="modalGroup__header">
        <div className="modalGroup__avatar">
          <img src="group_avatar.png" alt="Group Avatar" />
        </div>
        <div className="modalGroup__info">
          <h2>{activeChat.title}</h2>
          <p>description chat</p>
        </div>
      </div>
      {groupUsers && <div className="modalGroup__members">
        <h3>{groupUsers.length}</h3>
        <ul>
          {groupUsers.map(user => (
              <li>{user.username}</li>
          ))}
        </ul>
      </div>}
      <div className="modalGroup__auctions">
        <button className="leaveButton">Leave chat</button>
      </div>
    </div>
  </AppModal>
)}

    </>
  );
};

export default Messages;
