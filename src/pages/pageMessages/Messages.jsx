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
  GET_ALL_ROOMS,
  JOIN_ROOM
} from "../../components/server/messages";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {NEW_MESSAGE} from "../../components/server/subscriptions";

const Messages = () => {
  const {lsValue} = useLocalStorage('user')

  const [modalNewGroup, setModalNewGroup] = useState(false);
  const [modalGroup, setModalGroup] = useState(false);

  const [groupName, setGroupName] = useState('');
  const [newGroups, setNewGroups] = useState([]);
  const [rotationAngle, setRotationAngle] = useState(0);

  const [activeChat, setActiveChat] = useState(0)

  const {data: rooms, loading, refetch} = useQuery(GET_ALL_MY_ROOMS)
  const {data: messages, loading: isMessagesLoading} = useQuery(GET_ALL_MESSAGES_BY_ROOM, {variables: {
    input : {roomId: activeChat.id , userId: lsValue.id}
    }})

  const { data, loading: l, error } = useSubscription(
      NEW_MESSAGE,
      { variables: { room: 2 } }
  );

  // console.log({'data': data, 'loading': l, 'error': error})

  const [createRoom, {}] = useMutation(CREATE_MY_ROOM)

  const toggleNewGroup = () => {
    setModalNewGroup(!modalNewGroup);
    setRotationAngle(angle => angle + 180);
  };

  const toggleGroup = () => {
    setModalGroup(!modalGroup);
  };

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

  const {data: allRooms, loading: ll} = useQuery(GET_ALL_ROOMS)


  const [joinRoom, {}] = useMutation(JOIN_ROOM)

  const changeGroup = ({title, id}) => {
    setActiveChat({title, id})
  }

  useEffect(() => {
   if (!ll) {
     setNewGroups(allRooms.getAllRooms)
   }
  }, [rooms])

  const [groupMessages, setGroupMessages] = useState(null)

  useEffect(() => {
    if (!isMessagesLoading) {
      setGroupMessages(messages.getAllMessagesByRoomId)
    }
  }, [messages]);

  console.log(groupMessages)
  return (
    <>
      <div className="chat">
        <div className="chat__sidebar sidebar">
          <h2>Group</h2>
          <ul className="sidebar__group">
            {newGroups.map(group => (
              <li key={group.id} className="sidebar__list" onClick={() => changeGroup({title: group.title, id: group.id})}>{group.title} </li>
            ))}
          </ul>
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

          <div className="chat__footer">
            <input type="text" placeholder="Enter your message" />
            <img src={iconSend} alt="iconSend" className="footer__send" />
          </div>
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
          <h2>Name chat</h2>
          <p>description chat</p>
        </div>
      </div>
      <div className="modalGroup__members">
        <h3>33 members</h3>
        <ul>
          <li>Oleg Ivanov</li>
          <li>Oleg Ivanov</li>
          <li>Oleg Ivanov</li>
          <li>Oleg Ivanov</li>
          <li>Oleg Ivanov</li>
        </ul>
      </div>
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
