import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { NEW_MESSAGE } from '@shared/schemas/messages/subscriptions';
import { MessageItem } from '@features/message-item/MessageItem';
import { useLocalStorage } from "@shared/lib/useLocalStorage";
import { IUser } from "@entities/messages/Messages";
import {GET_ALL_MESSAGES_BY_ROOM, REMOVE_MESSAGE} from "@shared/schemas/messages/messages";
import iconLoader from "@assets/Chat/iconLoader.svg"

import scss from './ChatMessages.module.scss';

import { ChatContext } from '@features/chat-context/ChatContext'

interface IChatMessages {
    groupId: number
}

export interface IMessage {
    user: any;
    userId: number
    id: number
    content: string
    createdAt: string
}

export const ChatMessages = ({ groupId }: IChatMessages) => {
    const [groupMessages, setGroupMessages] = useState<IMessage[]>([]);
    const ref = useRef<HTMLDivElement>(null);
    const { lsValue } = useLocalStorage<IUser>('user');

    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });
    const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);

    const [isModalMenuVisible, setIsModalMenuVisible] = useState(false);
    const { data: subData, loading: subLoading } = useSubscription(NEW_MESSAGE, { variables: { roomId: groupId } });

    const { data: messagesData, loading: messagesLoading } = useQuery(GET_ALL_MESSAGES_BY_ROOM, {
        variables: {
            input: {
                roomId: groupId,
                userId: lsValue?.id
            }
        },
    });

    useEffect(() => {
        return setGroupMessages(messagesData?.getAllMessagesByRoomId);
    }, []);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                behavior: 'auto',
            });
        }
    }, [groupMessages]);



    useEffect(() => {
        if (!subLoading) {
            const newMessage = subData?.newMessage;
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
    }, [subData, subLoading]);

    // useEffect(() => {
    //     if (!messagesLoading) {
    //         setGroupMessages(messagesData?.getAllMessagesByRoomId);
    //     }
    // }, [messagesData]);

    console.log(subData)


    const handleContextMenu = (e: React.MouseEvent, messageUserId: number, messageId: number) => {
        e.preventDefault();
        const boundingBox = ref.current?.getBoundingClientRect();

        if (boundingBox && (messageUserId === lsValue?.id)) {
            setContextMenuPosition({
                top: e.clientY,
                left: e.clientX - 150,
            });
        }
        setIsContextMenuVisible(messageUserId === lsValue?.id);
        setSelectedMessageId(messageId);

        const selectedMessage = groupMessages?.find((message: { id: number; }) => message.id === messageId);

        console.log(selectedMessage?.content);

        const handleContextMenuClose = () => {
            setIsContextMenuVisible(false);
        };

        document.addEventListener('click', handleContextMenuClose);
    }

    useEffect(() => {
        const handleClick = (e: any) => {
            if (ref.current && !ref.current.contains(e.target) && isContextMenuVisible) {
                setIsContextMenuVisible(false);
            }
        };

        document.addEventListener('click', handleClick);
        document.addEventListener('contextmenu', handleClick);


        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('contextmenu', handleClick);
        };


    }, [isContextMenuVisible]);

    // if (isContextMenuVisible) {
    //     !setIsModalMenuVisible
    // } else if (isModalMenuVisible) {
    //     !setIsContextMenuVisible
    // }


    return (
        <>
            {messagesLoading ? (
                <div className={scss.chat__loader}>
                    <div className={scss.chat__spinner}>
                        <img src={iconLoader} alt="iconLoader" />
                    </div>
                </div>
            ) : (
                <>
                    {messagesData?.getAllMessagesByRoomId && (
                       <div className={`${scss.chat__messages} ${scss.chat__messages}`} ref={ref}>
                            {groupMessages.map((message) => (
                                <div key={message.id}>
                                    <MessageItem onContextMenu={(e) => handleContextMenu(e, message.user.id, message.id)} message={message} />
                                    
                                </div>
                            ))}
                            {isContextMenuVisible ? (
                                        <ChatContext
                                            isContextMenuVisible={isContextMenuVisible}
                                            setIsContextMenuVisible={setIsContextMenuVisible}
                                            contextMenuPosition={contextMenuPosition}
                                            selectedMessageId={selectedMessageId}
                                            setGroupMessages={setGroupMessages}
                                            groupMessages={groupMessages}
                                            isModalMenuVisible={isModalMenuVisible}
                                            setIsModalMenuVisible={setIsModalMenuVisible}
                                        />
                                    ) : (
                                        isModalMenuVisible && (
                                            <ChatContext
                                                isContextMenuVisible={isModalMenuVisible}
                                                setIsContextMenuVisible={setIsModalMenuVisible}
                                                contextMenuPosition={contextMenuPosition}
                                                selectedMessageId={selectedMessageId}
                                                setGroupMessages={setGroupMessages}
                                                groupMessages={groupMessages}
                                                isModalMenuVisible={isModalMenuVisible}
                                                setIsModalMenuVisible={setIsModalMenuVisible}
                                            />
                                        )
                                    )}
                        </div>
                    )}
                </>
            )}
        </>
    )
}