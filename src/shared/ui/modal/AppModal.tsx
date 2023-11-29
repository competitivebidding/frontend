import React, { ReactNode, useEffect } from 'react';
import cls from './AppModal.module.scss';
import { createPortal } from 'react-dom';
import {Portal} from "@shared/ui/portal";

interface IAppModalProps {
  children: ReactNode;
  title?: string;
  onClose: (isOpen: boolean) => void;
  isOpen?: boolean;
  paddingWindow?: string; 
}

export const AppModal = ({
  children,
  title,
  onClose,
  isOpen = false,
  paddingWindow = '32px',
}: IAppModalProps) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return <Portal container={document.body}>
    <div className={`${cls.modal} ${isOpen ? cls.opened : ''}`}>
      <div className={cls.overlay} onClick={() => onClose(false)}></div>
      <div className={cls.modalWindow} style={{ padding: paddingWindow }}>
        {title && <div className={cls.modalWindow__title}>{title}</div>}
        {children}
      </div>
    </div>
  </Portal>
};
