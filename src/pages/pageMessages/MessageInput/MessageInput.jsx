import React, { useState } from 'react';
import iconSend from "../../../assets/Chat/iconSend.svg";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../../../components/server/messages";
import scss from './MessageInput.module.scss';
import { useEffect } from 'react';

export const MessageInput = ({ roomId }) => {
    const [newMessage, setNewMessage] = useState('')
    const [sendMessage, { data, loading, error }] = useMutation(SEND_MESSAGE)

    console.log('FROM_SEND_MESSAGE', { data, loading, error })

    const handleSendMessage = () => {
        sendMessage({
            variables:
            {
                newMessage: {
                    content: newMessage,
                    roomId: roomId
                }
            }
        }).then(message => console.log(message))
        setNewMessage('')
    }
    const handleNewMessage = (e) => {
        if (e.target.value === '') {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === 13) {
            handleSendMessage();
            return;
        }
        setNewMessage(e.target.value);
    };




    return (
        <div className={`${scss.chat__footer} ${scss.footer}`}>
            <input type="text" placeholder="Enter your message" value={newMessage} onChange={handleNewMessage} onKeyUp={handleNewMessage} />

            <button onClick={handleSendMessage} >
                <img src={iconSend} alt="iconSend" className={scss.footer__send} />
            </button>
        </div>
    );
};

