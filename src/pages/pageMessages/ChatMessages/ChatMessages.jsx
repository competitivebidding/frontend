import * as React from 'react';
import { useEffect, useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MESSAGES_BY_ROOM } from "../../../components/server/messages";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { toTime } from "../../../utils/timeHelpers";
import './ChatMessages.scss'

export const ChatMessages = ({ groupId }) => {
    const { lsValue } = useLocalStorage('user')
    const [groupMessages, setGroupMessages] = useState(null)
    const ref = useRef(null)
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)

    const { data, loading } = useQuery(GET_ALL_MESSAGES_BY_ROOM, {
        variables:
        {
            input: {
                roomId: groupId,
                userId: lsValue.id
            }
        }
    })

    useEffect(() => {
        if (ref.current && autoScrollEnabled) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                behavior: 'smooth'
            });
            setAutoScrollEnabled(false); // Устанавливаем значение в false после выполнения автоматической прокрутки
        }
    }, [autoScrollEnabled]);

    useEffect(() => {
        if (!loading) {
            setGroupMessages(data.getAllMessagesByRoomId)
            setAutoScrollEnabled(true); 
        }
    }, [data]);

    return (
        <>
            {groupMessages &&
                <div className="chat__messages message" ref={ref}>
                    {groupMessages.map(message => (
                        <div key={message.id} className="message__your">
                            <div className="message__content">
                                {message.content}
                                <div className="message__time">{toTime(message.createdAt)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    );
};
