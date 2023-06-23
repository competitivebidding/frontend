import React from 'react';
import Icon from '../../../assets/cabinet/icons/avatar.svg'

export const GroupSubscribers = ({groupTitle, groupSubs}) => {
    return (
        <div>
            <div className="modalGroup">
                <div className="modalGroup__header">
                    <div className="modalGroup__avatar">
                        <img src={Icon} alt="Group Avatar" />
                    </div>
                    <div className="modalGroup__info">
                        <h2>{groupTitle}</h2>
                        <p>description chat</p>
                    </div>
                </div>
                {groupSubs && <div className="modalGroup__members">
                    <h3>{`${groupSubs.length} subscribers`}</h3>
                    <ul>
                        {groupSubs.map(user => (
                            <li key={user.username}>{user.username}</li>
                        ))}
                    </ul>
                </div>}
                <div className="modalGroup__auctions">
                    <button className="leaveButton">Leave chat</button>
                </div>
            </div>
        </div>
    );
};

