import React from 'react'
import iconPlus from '@assets/Chat/iconPlus.svg'
import { ChatGroups } from '../chat-groups/ChatGroups'

import './ChatSideBar.scss'
import {Group} from "@entities/messages/Messages";

interface IChatSidebar {
  onToggleNewGroupModal: React.Dispatch<React.SetStateAction<boolean>>
  onSelectGroup: (group: Group) => void
  activeGroupId: number
    isSidebarOpened: boolean
}

export const ChatSidebar = ({ onToggleNewGroupModal, onSelectGroup, activeGroupId, isSidebarOpened }: IChatSidebar) => {
  return (
    <div className={`chat__sidebar sidebar ${isSidebarOpened && 'active'}`}>
      <div className="sidebar__header">
        <h2>Groups</h2>
        <div className="sidebar__menu">
          <button onClick={() => onToggleNewGroupModal((prev) => !prev)}>
            <img src={iconPlus} alt="iconGroup" />
          </button>
        </div>
      </div>
      <ChatGroups onSelectGroup={onSelectGroup} activeItem={activeGroupId} />
    </div>
  )
}
