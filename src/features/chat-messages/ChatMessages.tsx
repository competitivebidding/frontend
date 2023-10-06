import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { NEW_MESSAGE } from '@shared/schemas/messages/subscriptions';
import { GetAllMessagesByRoomIdDocument } from '@shared/lib/types/__generated-types__/graphql';
import { MessageItem } from '@features/message-item/MessageItem';
import './ChatMessages.scss';
import { useLocalStorage } from "@shared/lib/useLocalStorage";
import { IUser } from "@entities/messages/Messages";
import { REMOVE_MESSAGE } from "@shared/schemas/messages/messages";

import { ChatContext } from '@features/chat-context/ChatContext'

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
    const [groupMessages, setGroupMessages] = useState<IMessage[] | undefined>(undefined);
    const ref = useRef<HTMLDivElement>(null);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false);
    const { lsValue } = useLocalStorage<IUser>('user');
    const [removeMessage] = useMutation(REMOVE_MESSAGE);
    const [scrollPosition, setScrollPosition] = useState(0);

    const { data: subData, loading: subLoading, error } = useSubscription(NEW_MESSAGE, { variables: { roomId: groupId } });

    const { data: messagesData, loading: messagesLoading, refetch } = useQuery(GetAllMessagesByRoomIdDocument, {
        variables: {
            userMessage: {
                roomId: groupId,
            },
        },
    });

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: scrollPosition,
                behavior: 'auto',
            });
            setAutoScrollEnabled(false);
        }
    }, [groupMessages, scrollPosition]);

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

    useEffect(() => {
        if (ref.current && autoScrollEnabled) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
            });
            setAutoScrollEnabled(false);
        }
    }, [autoScrollEnabled]);

    useEffect(() => {
        if (!messagesLoading) {
            setGroupMessages(messagesData?.getAllMessagesByRoomId);
            setAutoScrollEnabled(true);
        }
    }, [messagesData]);

    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });
    const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);

    const handleContextMenu = (e: React.MouseEvent, messageUserId: number, messageId: number) => {
        e.preventDefault();
        console.log(isContextMenuVisible)
        const boundingBox = ref.current?.getBoundingClientRect();

        if (boundingBox && (messageUserId === lsValue?.id)) {
            setContextMenuPosition({
                top: e.clientY,
                left: e.clientX - 150,
            });
        }
        console.log(messageUserId)
        setIsContextMenuVisible(messageUserId === lsValue?.id);
        setSelectedMessageId(messageId);

        const handleContextMenuClose = () => {
            console.log('handleContextMenuClose')
            setIsContextMenuVisible(false);

            document.removeEventListener('click', handleContextMenuClose);
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
                                    <MessageItem onContextMenu={(e) => handleContextMenu(e, message.userId, message.id)} message={message} />
                                    {isContextMenuVisible && <ChatContext
                                        isContextMenuVisible={isContextMenuVisible}
                                        setIsContextMenuVisible={setIsContextMenuVisible}
                                        contextMenuPosition={contextMenuPosition}
                                        selectedMessageId={selectedMessageId}
                                        setGroupMessages={setGroupMessages}/>
                                    }

                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    )
}