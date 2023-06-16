import React from 'react';
import './Messages.scss';

import iconSend from '../../assets/Chat/iconSend.svg'

const Messages = () => {
  return (
    <>
      <div className="chat">
        <div className="chat__sidebar sidebar">
          <h2>Group</h2>
          <ul className="sidebar__group">
            <li className="sidebar__list">Group 1</li>
            <li className="sidebar__list">Group 2</li>
            <li className="sidebar__list">Group 3</li>
          </ul>
        </div>
        <div className="chat__container">
          <div className="chat__header">
            <h2>Group 1</h2>
          </div>

          <div className="chat__messages message">

            <div className="message__your your">
              <div className="your__content" >Hello!
                <div className='chat__time'>19:21 </div>

              </div>
            </div>

            <div className="message__answer answer">
              <div className="answer__sender">User2:</div>
              <div className="answer__content">Hello, how are you?
                <div className='chat__time'>19:21 </div>
              </div>
            </div>
          </div>
          <div className="chat__footer">
            <input type="text" placeholder="Enter your message" />
            <img src={iconSend} alt="iconSend" className='footer__send' />
          </div>

        </div>
      </div>
    </>
  );
};

export default Messages;
