import React from 'react';

export const ChatHeader = ({onToggleModal, title, length}) => {
    const isUserJoined = false
    return (
        <div className="chat__header" >
            {title &&
                <div className="chat__header-users" >
                <h2>{title}</h2>
                <div className='chat__subscribers'
                     onClick={onToggleModal}>
                    {`${length} subscribers`}
                </div>
            </div>}
            {isUserJoined && <div className='chat__header-join'>
                <button>12313123</button>
            </div>}
        </div>
    );
};

