import * as React from 'react';
import {FC, useEffect, useRef, useState} from 'react';
import {useQuery, useSubscription} from "@apollo/client";
import {GET_ALL_MESSAGES_BY_ROOM} from "shared/schemas/messages/messages";
import {useLocalStorage} from "shared/lib/useLocalStorage";
import {NEW_MESSAGE} from "shared/schemas/messages/subscriptions";
import {toTime} from "shared/utils/timeHelpers";
import './ChatMessages.scss'

interface IChatMessages {
    groupId: number
}

export const ChatMessages:FC<IChatMessages> = ({groupId}) => {
    const {lsValue} = useLocalStorage('user')
    const [groupMessages, setGroupMessages] = useState(null)
    const ref = useRef(null)
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)

    const {data: d, loading: l, error} = useSubscription(
        NEW_MESSAGE,
        {variables: {roomId: groupId}}
    );

    const {data, loading} = useQuery(GET_ALL_MESSAGES_BY_ROOM, {
        variables:
            {
                userMessage: {
                    roomId: groupId,
                }
            }
    })

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                behavior: 'smooth'
            });
            setAutoScrollEnabled(false);
        }
    }, [groupMessages])

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
            </div>
        )
    }

    return (
        <>
            {groupMessages &&
                <div className="chat__messages message" ref={ref}>
                    {groupMessages.map(message => (
                            message.userId === lsValue.id ? <Your message={message} key={message.id}/> :
                                <Answer message={message} key={message.id}/>
                        )
                    )}
                </div>
            }
        </>
    );
};
