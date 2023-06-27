import React, { useState } from 'react';
import iconSend from "../../../assets/Chat/iconSend.svg";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../../../shared/schemas/messages/messages";
import scss from './MessageInput.module.scss';
import { useEffect } from 'react';

export const MessageInput = ({ roomId }) => {
    const [newMessage, setNewMessage] = useState('')
    const [sendMessage, { data, loading, error }] = useMutation(SEND_MESSAGE)

    const handleSendMessage = (e) => {
        if (e.target.value === '') {
            return;
        }

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
        setNewMessage(e.target.value);
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            handleSendMessage(e);
            return;
        }
    }




    return (
        <div className={`${scss.chat__footer} ${scss.footer}`}>
            <input type="text" placeholder="Enter your message" value={newMessage} onChange={handleNewMessage} onKeyUp={handleKeyUp} />

            <button onClick={handleSendMessage} >
                <img src={iconSend} alt="iconSend" className={scss.footer__send} />
            </button>
        </div>
    );
};

