import React, { useState } from 'react';
import './Messages.scss';

import iconSend from '../../assets/Chat/iconSend.svg';
import iconPlus from '../../assets/Chat/iconPlus.svg';
import { AppModal } from '../../components/appModal/AppModal';

const Messages = () => {
  const [modalNewGroup, setModalNewGroup] = useState(false);
  const [modalGroup, setModalGroup] = useState(false);

  const [groupName, setGroupName] = useState('');
  const [Newgroups, setNewGroups] = useState([]);
  const [rotationAngle, setRotationAngle] = useState(0);

  const toggleNewGroup = () => {
    setModalNewGroup(!modalNewGroup);
    setRotationAngle(angle => angle + 180);
  };

  const toggleGroup = () => {
    setModalGroup(!modalGroup);
  };

  const addNewGroup = () => {
    setNewGroups(g => [...g, groupName]);
    toggleNewGroup();
    setGroupName('');
  };

  return (
    <>
      <div className="chat">
        <div className="chat__sidebar sidebar">
          <h2>Group</h2>
          <ul className="sidebar__group">
            {Newgroups.map(group => (
              <li className="sidebar__list">{group}</li>
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
            <h2>Group 1</h2>
            <div className='chat__subscribers'>222 subscribers</div>
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
