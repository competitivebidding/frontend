import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_ALL_ROOMS} from "../../../components/server/messages";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import './ChatGroups.scss'

export const ChatGroups = ({onSelectGroup}) => {
    const [groups, setGroups] = useState(null)
    const {setValue} = useLocalStorage('activeGroup')
    const {data, loading} = useQuery(GET_ALL_ROOMS)

    useEffect(() => {
        if (!loading) {
            setGroups(data.getAllRooms)
        }
    }, [data]);

    const handleSetActiveGroup = (group) => {
        onSelectGroup(group)
        setValue(group)
    }

    return (
        <div className="sidebar__group ">
            {groups && <ul>
                {groups.map(group => (
                    <li key={group.id} className="sidebar__list"
                        onClick={() => handleSetActiveGroup({title: group.title, id: group.id})}>
                            <p className="sidebar__list-title">{group.title}</p>
                            </li>
                ))}
            </ul>}
        </div>
    )
};

