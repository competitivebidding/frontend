import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";

import { useSubscription } from "@apollo/client";
import './ChatGroups.scss'


import { NEW_MESSAGE } from '@shared/schemas/messages/subscriptions'
import { GET_ALL_MY_ROOMS } from '@shared/schemas/messages/messages'
import { useLocalStorage } from '@shared/lib/useLocalStorage'
import { GetAllMyRoomsDocument } from '@shared/lib/types/__generated-types__/graphql'

interface Group {
    title: string
    id: number
}

interface IChatGroupsProps {
    onSelectGroup: (group: Group) => void
    activeItem: number
}

export const ChatGroups = ({ onSelectGroup, activeItem }: IChatGroupsProps) => {
    const { setValue } = useLocalStorage('activeGroup');
    const { data: groupsData, loading: groupsLoading } = useQuery(GetAllMyRoomsDocument);
    const [lastMessages, setLastMessages] = useState({});
    const { data: newMessageData, loading: newMessageLoading } = useSubscription(
        NEW_MESSAGE,
      {variables: { newMessage: {roomId: activeItem, content: '' } }}
    );

    // useEffect(() => {
    //     if (!newMessageLoading) {
    //         const newMessage = data?.newMessage;
    //         if (newMessage) {
    //             setLastMessages((prevMessages) => ({
    //                 ...prevMessages,
    //                 [newMessage.roomId]: newMessage.content,
    //             }));
    //         }
    //     }
    // }, [data, loading]);

    const handleSetActiveGroup = (group: { title: string, id: number }) => {
        onSelectGroup(group);
        setValue(group);
    };

    return (
        <div className="sidebar__group ">
            {!groupsLoading && (
                <ul>
                    {groupsData?.getAllMyRooms.map((group: Group) => (
                        <li
                            key={group.id}
                            className={`sidebar__list ${activeItem === group.id ? 'active' : ''
                                }`}
                            onClick={() =>
                                handleSetActiveGroup({ title: group.title, id: group.id })
                            }
                        >
                            <div className="sidebar__list-title">
                                {group.title}
                                {/*<p>{lastMessages[group.id]}</p>*/}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
