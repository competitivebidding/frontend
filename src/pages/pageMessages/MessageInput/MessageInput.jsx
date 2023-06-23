import React, {useState} from 'react';
import iconSend from "../../../assets/Chat/iconSend.svg";
import {useMutation} from "@apollo/client";
import {SEND_MESSAGE} from "../../../components/server/messages";

 export const MessageInput = () => {
     const [newMessage, setNewMessage] = useState('')

     const [sendMessage, {}] = useMutation(SEND_MESSAGE)

     const handleSendMessage = () => {
         sendMessage({variables: {newMessage: {
                     content: newMessage,
                     roomId: 1
                 }}})
     }

    return (
        <div className="chat__footer">
            <input type="text" placeholder="Enter your message" onChange={(e) => setNewMessage(e.target.value)}/>
            <button onClick={handleSendMessage}>
                <img src={iconSend} alt="iconSend" className="footer__send" />
            </button>
        </div>
    );
};

