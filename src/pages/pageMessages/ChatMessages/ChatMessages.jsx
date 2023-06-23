import * as React from 'react';
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_MESSAGES_BY_ROOM} from "../../../components/server/messages";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {toTime} from "../../../utils/timeHelpers";

export const ChatMessages = ({groupId}) => {
    const {lsValue} = useLocalStorage('user')
    const [groupMessages, setGroupMessages] = useState(null)

    const {data, loading} = useQuery(GET_ALL_MESSAGES_BY_ROOM, {
        variables:
            {
                input: {
                    roomId: groupId,
                    userId: lsValue.id
            }}})

    useEffect(() => {
        if (!loading) {
            setGroupMessages(data.getAllMessagesByRoomId)
        }
    }, [data])

    return (
        <>
            { groupMessages &&
                <div className="chat__messages message">
                    {groupMessages.map(message => (
                        <div key={message.id} className="message__your your">
                            <div className="your__content">
                                {message.content}
                                <div className="chat__time">{toTime(message.createdAt)}</div>
                            </div>
                        </div>
                    ))}
                </div>
        }
        </>
    );
};