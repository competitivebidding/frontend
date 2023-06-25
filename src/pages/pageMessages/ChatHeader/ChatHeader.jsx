import React from 'react';

export const ChatHeader = ({ onToggleModal, title, length }) => {
    return (
        <div className="chat__header" onClick={onToggleModal}>
            {title &&
                <div className="chat__header-users" >
                    <h2>{title}</h2>
                    <div className='chat__subscribers'>
                        {`${length} subscribers`}
                    </div>
                </div>}
        </div>
    );
};

