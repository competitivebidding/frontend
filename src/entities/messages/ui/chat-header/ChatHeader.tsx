import React from 'react'
import './ChatHeader.scss'
import { useTranslation } from 'react-i18next'

interface IChatHeaderProps {
  onToggleModal: () => void
  title: string
  length: number | null
  toggleActiveSidebar: () => void
  isSidebarOpened: boolean
}

export const ChatHeader = ({ onToggleModal, title, length, toggleActiveSidebar, isSidebarOpened }: IChatHeaderProps) => {
  const { t } = useTranslation('chatHeader')

  return (
    <div className="chat__header" >

      {title && (
        <div className="chat__header-users" onClick={onToggleModal}>
          <p className="chat__header-title">{title}</p>
          <div className="chat__header-subscribers">{length !== undefined ? `${length} ${t('subscribers')}` : t('Loading') + '...'}</div>
        </div>
      )}
      <div className={`chat__header-burger ${isSidebarOpened && 'active'}`} onClick={toggleActiveSidebar}>
        <span></span>
      </div>
    </div>
  )
}
