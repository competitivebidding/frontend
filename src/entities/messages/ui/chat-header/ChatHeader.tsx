import React from 'react'
import cls from './ChatHeader.module.scss'
import { useTranslation } from 'react-i18next'

interface IChatHeaderProps {
  onToggleModal: () => void
  title: string
  length: number | null
  toggleActiveSidebar: () => void
  isSidebarOpened: boolean
}

export const ChatHeader = ({ onToggleModal, title, length, toggleActiveSidebar, isSidebarOpened }: IChatHeaderProps) => {
  const { t } = useTranslation('messagesPage')

  return (
    <div className={cls.chat__header} >

      {title && (
        <div className={cls['chat__header-users']} onClick={onToggleModal}>
          <p className={cls['chat__header-title']}>{title}</p>
          <div className={cls['chat__header-subscribers']}>{length !== undefined ? `${length} ${t('subscribers')}` : t('Loading') + '...'}</div>
        </div>
      )}
      <div className={`${cls['chat__header-burger']} ${isSidebarOpened && cls['active']}`} onClick={toggleActiveSidebar}>
        <span></span>
      </div>
    </div>
  )
}
