import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import {useMutation, useQuery, useSubscription} from '@apollo/client'
import { NEW_MESSAGE } from '@shared/schemas/messages/subscriptions'
import { GetAllMessagesByRoomIdDocument } from '@shared/lib/types/__generated-types__/graphql'
import { MessageItem } from '@features/message-item/MessageItem'

// import { toTime } from '@shared/utils/timeHelpers'
// import { IUser } from 'src/entities/messages/Messages'
// import apxR from '@assets/Chat/apx-r.svg'
// import apxL from '@assets/Chat/apx-l.svg'
// import { useLocalStorage } from '@shared/lib/useLocalStorage'

import './ChatMessages.scss'
import {useLocalStorage} from "@shared/lib/useLocalStorage";
import {IUser} from "@entities/messages/Messages";
import {REMOVE_MESSAGE} from "@shared/schemas/messages/messages";


interface IChatMessages {
    groupId: number
}

 export interface IMessage {
    userId: number
    id: number
    content: string
    createdAt: string
}

export const ChatMessages = ({ groupId }: IChatMessages) => {
    // const { lsValue } = useLocalStorage<IUser>('user')
    const [groupMessages, setGroupMessages] = useState<IMessage[] | undefined>(undefined)
    const ref = useRef<HTMLDivElement>(null)
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)

    const { data: subData, loading: subLoading, error } = useSubscription(NEW_MESSAGE, { variables: { roomId: groupId } })

    const { data: messagesData, loading: messagesLoading } = useQuery(GetAllMessagesByRoomIdDocument, {
        variables: {
            userMessage: {
                roomId: groupId,
            },
        },
    })

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                behavior: 'smooth',
            })
            setAutoScrollEnabled(false)
        }
    }, [groupMessages])

    useEffect(() => {
        if (!subLoading) {
            const newMessage = subData?.newMessage
            if (newMessage) {
                setGroupMessages((prevMessages) => {
                    if (prevMessages && Array.isArray(prevMessages)) {
                        return [...prevMessages, newMessage]
                    } else {
                        return [newMessage]
                    }
                })
            }
        }
    }, [subData, subLoading])

    useEffect(() => {
        if (ref.current && autoScrollEnabled) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
            })
            setAutoScrollEnabled(false)
        }
    }, [autoScrollEnabled])

    useEffect(() => {
        if (!messagesLoading) {
            setGroupMessages(messagesData?.getAllMessagesByRoomId)
            setAutoScrollEnabled(true)
        }
    }, [messagesData])

    const { lsValue } = useLocalStorage<IUser>('user');
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });
    const [removeMessage] = useMutation(REMOVE_MESSAGE);



    const contextMenuClassName = `context-menu ${isContextMenuVisible ? 'open' : ''}`;

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log(e.clientX)
            setIsContextMenuVisible(true);
            const boundingBox = ref.current?.getBoundingClientRect();
            if (boundingBox) {
                setContextMenuPosition({
                    top: e.clientY,
                    left: e.clientX - 150,
                });
            }

    };

    const handleDeleteClick = (id: number) => {
        console.log('asdsa');
        if (id) {
            removeMessage({ variables: { removeMessageId: id } })
                .then(() => {
                    setIsContextMenuVisible(false);
                })
                .catch((error) => {
                    console.error('Ошибка при удалении сообщения:', error);
                });
        }
    };




    return (
        <>
            {messagesLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {groupMessages && (
                        <div className="chat__messages messages" ref={ref}>
                            {groupMessages.map((message) => (
                                <div key={message.id}>
                                    <MessageItem onContextMenu={handleContextMenu} message={message} />
                                    <div className={contextMenuClassName} style={{ top: contextMenuPosition.top, left: contextMenuPosition.left }}>
                                        <div onClick={() => handleDeleteClick(message.id)}>Удалить</div>
                                        <div>Изменить</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
}


