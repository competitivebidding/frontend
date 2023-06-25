import * as React from 'react';
import { useEffect, useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MESSAGES_BY_ROOM } from "../../../components/server/messages";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useSubscription } from "@apollo/client";
import { NEW_MESSAGE } from "../../../components/server/subscriptions";
import { toTime } from "../../../utils/timeHelpers";
import './ChatMessages.scss'

export const ChatMessages = ({ groupId }) => {
    const { lsValue } = useLocalStorage('user')
    const [groupMessages, setGroupMessages] = useState(null)
    const ref = useRef(null)
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)

    const { data: d, loading: l, error } = useSubscription(
        NEW_MESSAGE,
        { variables: { roomId: groupId } }
    );

    console.log('FROM_SUBSCRIPTION', { d, l, error })


    const { data, loading } = useQuery(GET_ALL_MESSAGES_BY_ROOM, {
        variables:
        {
            userMessage: {
                roomId: groupId,
            }
        }
    })

    useEffect(() => {
        if (!l) {
            const newMessage = d?.newMessage;
            if (newMessage) {
                setGroupMessages((prevMessages) => {
                    if (prevMessages && Array.isArray(prevMessages)) {
                        return [...prevMessages, newMessage];
                    } else {
                        return [newMessage];
                    }
                });
            }
        }
    }, [d, l]);

    useEffect(() => {
        if (ref.current && autoScrollEnabled) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                behavior: 'smooth'
            });
            setAutoScrollEnabled(false);
        }
    }, [autoScrollEnabled]);

    useEffect(() => {
        if (!loading) {
            setGroupMessages(data.getAllMessagesByRoomId)
            setAutoScrollEnabled(true);
        }
    }, [data]);

    const Your = ({message}) => {
        return (
            <div key={message.id} className="message__your">
                <div className="message__content">
                    {message.content}
                    <div className="message__time">{toTime(message.createdAt)}</div>
                </div>
            </div>)
    }

    const Answer = ({message}) => { 
        return (
        <div className="message__answer answer">
            <div className="answer__content-answer">
                <div className='answer__sender'>{message.username}</div>
                {message.content}
                <div className="answer__time-answer">{toTime(message.createdAt)}</div>
            </div>
        </div>)
    }

    return (
        <>
            {groupMessages &&
                <div className="chat__messages message" ref={ref}>
                    {groupMessages.map(message => {
                        return message.userId === lsValue.id ? <Your message = {message} key={message.id}/> : <Answer message = {message} key={message.id} />
                    }
                    )}
                </div>
            }
        </>
    );
};
