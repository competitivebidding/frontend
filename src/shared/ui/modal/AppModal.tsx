import React, { ReactNode } from 'react'
import cls from './AppModal.module.scss'
import { createPortal } from 'react-dom'

interface IAppModalProps {
  children: ReactNode
  title?: string
  onClose: (isOpen: boolean) => void
  isOpen?: boolean
}

export const AppModal = ({ children, title, onClose, isOpen = false }: IAppModalProps) => {
  return createPortal(
    <div className={`${cls.modal} ${isOpen ? cls.opened : ''}`}>
      <div className={cls.overlay} onClick={() => onClose(false)}></div>
      <div className={cls.modalWindow}>
        {title && <div className={cls.modalWindow__title}>{title}</div>}
        <div className={cls.modalWindow__body}>{children}</div>
      </div>
    </div>,
    document.body,
  )
}
