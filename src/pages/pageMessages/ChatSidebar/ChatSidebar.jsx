import React from 'react';
import iconPlus from "../../../assets/Chat/iconPlus.svg";
import {ChatGroups} from "../ChatGroups/ChatGroups";

import './ChatSideBar.scss';

export const ChatSidebar = ({onToggleNewGroupModal, onSelectGroup, activeGroupId }) => {

    return (
        <div className="chat__sidebar sidebar">
            <div className='sidebar__header'>
                <h2>Groups</h2>
                <div className="sidebar__menu">
                    <button onClick={onToggleNewGroupModal}>
                        <img
                            src={iconPlus}
                            alt="iconGroup"
                        />
                    </button>
                </div>
            </div>
            <ChatGroups onSelectGroup={onSelectGroup} activeItem={activeGroupId} />
        </div>
    );
};
