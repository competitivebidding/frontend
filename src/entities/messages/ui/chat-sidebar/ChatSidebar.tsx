import React from 'react'
import iconPlus from '@assets/Chat/iconPlus.svg'
import { ChatGroups } from '../chat-groups/ChatGroups'

import cls from './ChatSideBar.module.scss'
import {Group} from "@entities/messages/Messages";

import { useTranslation } from 'react-i18next'

interface IChatSidebar {
  onToggleNewGroupModal: React.Dispatch<React.SetStateAction<boolean>>
  onSelectGroup: (group: Group) => void
  activeGroupId: number
    isSidebarOpened: boolean
}

export const ChatSidebar = ({ onToggleNewGroupModal, onSelectGroup, activeGroupId, isSidebarOpened }: IChatSidebar) => {
  const { t } = useTranslation('chatSidebar')

  return (
    <div className={`${cls.chat__sidebar} ${cls.sidebar} ${isSidebarOpened && cls.active}`}>
      <div className={cls.sidebar__header}>
        <h2>{t('Groups')}</h2>
        <div className={cls.sidebar__menu}>
          <button onClick={() => onToggleNewGroupModal((prev) => !prev)}>
            <img src={iconPlus} alt="iconGroup" />
          </button>
        </div>
      </div>
      <ChatGroups onSelectGroup={onSelectGroup} activeItem={activeGroupId} />
    </div>
  )
}
