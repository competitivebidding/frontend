import React from 'react';
import iconPlus from "@assets/Chat/iconPlus.svg";
import {ChatGroups} from "../chat-groups/ChatGroups";

import './ChatSideBar.scss';

interface IChatSidebar {
  onToggleNewGroupModal: (value: (((prevState: boolean) => boolean) | boolean)) => void
  onSelectGroup: ({title, id}: {title: string, id: number}) => void
  activeGroupId: number | unknown
}

export const ChatSidebar = ({onToggleNewGroupModal, onSelectGroup, activeGroupId }: IChatSidebar) => {

    return (
        <div className="chat__sidebar sidebar">
            <div className='sidebar__header'>
                <h2>Groups</h2>
                <div className="sidebar__menu">
                    <button onClick={() => onToggleNewGroupModal}>
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
