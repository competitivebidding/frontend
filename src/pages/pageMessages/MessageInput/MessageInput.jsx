import React, { useState } from 'react';
import iconSend from "../../../assets/Chat/iconSend.svg";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../../../components/server/messages";
import scss from './MessageInput.module.scss';

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

    return (
    <div className={`${scss.chat__footer} ${scss.footer}`}>
            <input type="text" placeholder="Enter your message" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
            <button onClick={handleSendMessage}>
                <img src={iconSend} alt="iconSend" className={scss.footer__send} />
            </button>
        </div>
    );
};

