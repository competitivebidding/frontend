import React, {FC, useEffect, useRef, useState} from 'react';
import cls from './ContextMenu.module.scss'
interface ContextMenuProps {
  children: React.ReactNode
  isOpen: boolean,
 onClose: () => void
 x: number,
 y: number
};

export const ContextMenu: FC<ContextMenuProps> = ({x, y, onClose, children, isOpen}) => {
    const [visible, setVisible] = useState(true);
    const contextMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (contextMenuRef.current && !contextMenuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);

        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onClose, isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={cls.context__menu}
             ref={contextMenuRef}
             style={{ top: y, left: x }}>
            {children}
        </div>
    );
};