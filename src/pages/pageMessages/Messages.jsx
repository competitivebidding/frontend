import React, { useState } from 'react';
import './Messages.scss';

import iconSend from '../../assets/Chat/iconSend.svg';
import iconGroup from '../../assets/Chat/iconGroup.svg';
import {AppModal} from "../../components/appModal/AppModal";

const Messages = () => {
  const [modalGroup, setModal] = useState(false)
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState([])

  const toggleGroup = () => {
    setModal(!modalGroup)
  }

  const addGroup = () => {
    setGroups(g => ([...g, groupName]))
    toggleGroup()
    setGroupName('')
  }

  return (
    <>
      <div className="chat" >
        <div className="chat__menu">
          <img src={iconGroup} alt="iconGroup" onClick={toggleGroup} />
        </div>
        <div className="chat__sidebar sidebar">
          <h2>Group</h2>
          <ul className="sidebar__group">
            {groups.map(group => (
              <li className="sidebar__list">{group}</li>
              )) }
          </ul>
        </div>

        <div className="chat__container">
          <div className="chat__header">
            <h2>Group 1</h2>
          </div>

          <div className="chat__messages message">
            <div className="message__your your">
              <div className="your__content">
                Hello!
                <div className="chat__time">19:21</div>
              </div>
            </div>
            <div className="message__answer answer">
              <div className="answer__sender">User2:</div>
              <div className="answer__content">
                Hello, how are you?
                <div className="chat__time">19:21</div>
              </div>
            </div>
          </div>
          <div className="chat__footer">
            <input type="text" placeholder="Enter your message" />
            <img src={iconSend} alt="iconSend" className="footer__send" />
          </div>
        </div>
      </div>


      {modalGroup &&
          <AppModal  isOpen={modalGroup} onClose={toggleGroup}>
        <div className='modalGroup'>
          <div className='modalGroup__title'>Enter your group name</div>
          <input type="text" className='modalGroup__name' value={groupName} onChange={(e) => setGroupName(e.target.value)} />
          <button className='modalGroup__button' onClick={addGroup}>Create Group</button>
        </div>
      </AppModal>
      }
    </>

  );
};

export default Messages;
