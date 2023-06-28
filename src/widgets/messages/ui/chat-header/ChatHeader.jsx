import React from 'react';
import './ChatHeader.scss';

export const ChatHeader = ({ onToggleModal, title, length }) => {
    return (
        <div className="chat__header" onClick={onToggleModal}>
            {title && (
                <div className="chat__header-users">
                    <p className='chat__header-title'>{title.length > 20 ? title.substring(0, 20) + '...' : title}</p>
                    <div className='chat__header-subscribers'>
                        {`${length} subscribers`}
                    </div>
                </div>
            )}
        </div>
    );
};

