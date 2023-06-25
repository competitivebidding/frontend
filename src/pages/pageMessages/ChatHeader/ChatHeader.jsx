import React from 'react';
import './ChatHeader.scss';

export const ChatHeader = ({ onToggleModal, title, length }) => {
    return (
        <div className="chat__header" onClick={onToggleModal}>
            {title && (
                <div className="chat__header-users">
                    <p className='chat__header-title'>{title}</p>
                    <div className='chat__header-subscribers'>
                        {`${length} subscribers`}
                    </div>
                </div>
            )}
        </div>
    );
};

