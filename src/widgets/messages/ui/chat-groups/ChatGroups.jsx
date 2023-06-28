import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_ALL_ROOMS } from "@/shared/schemas/messages/messages";
import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage";
import { useSubscription } from "@apollo/client";
import { NEW_MESSAGE } from "@/shared/schemas/messages/subscriptions";
import './ChatGroups.scss'

export const ChatGroups = ({ onSelectGroup, activeItem }) => {
    const [groups, setGroups] = useState(null);
    const { setValue } = useLocalStorage('activeGroup');
    const { data, loading } = useQuery(GET_ALL_ROOMS);
    const [lastMessages, setLastMessages] = useState({});

    const { data: newMessageData, loading: newMessageLoading } = useSubscription(
        NEW_MESSAGE,
        { variables: { roomId: activeItem } }
    );

    useEffect(() => {
        if (!loading) {
            setGroups(data.getAllRooms);
        }
    }, [data, loading]);

    useEffect(() => {
        if (!newMessageLoading) {
            const newMessage = newMessageData?.newMessage;
            if (newMessage) {
                setLastMessages((prevMessages) => ({
                    ...prevMessages,
                    [newMessage.roomId]: newMessage.content,
                }));
            }
        }
    }, [newMessageData, newMessageLoading]);

    const handleSetActiveGroup = (group) => {
        onSelectGroup(group);
        setValue(group);
    };

    return (
        <div className="sidebar__group ">
            {groups && (
                <ul>
                    {groups.map((group) => (
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
                                <p>{lastMessages[group.id]}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
