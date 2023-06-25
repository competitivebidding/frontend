import React from 'react';
import Icon from '../../../assets/cabinet/icons/avatar.svg'
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS_BY_ROOM_ID, LEAVE_FROM_CHAT} from "../../../components/server/messages";

export const GroupSubscribers = ({ groupTitle, groupSubs, roomId, onClose }) => {
    const [leaveFromChat] = useMutation(LEAVE_FROM_CHAT);
    const { data, refetch } = useQuery(GET_ALL_USERS_BY_ROOM_ID, {
        variables: {
            roomId: Number(roomId)
        }
    })

    const handleLeaveChat = () => {
        leaveFromChat({
            variables: {
                roomId
            }
        }).then(refetch)
        onClose();
    };

    return (
        <div>
            <div className="modalGroup">
                <div className="modalGroup__header">
                    <div className="modalGroup__avatarGroup">
                        <img src={Icon} alt="Group Avatar" />
                    </div>
                    <div className="modalGroup__info info">
                        <div className='info__name'>{groupTitle}</div>
                        <input
                            type="text"
                            className="modalNewGroup__name"

                            placeholder='Description'

                        />
                    </div>
                </div>
                {groupSubs && <div className="modalGroup__members">
                    <div className='modalGroup__subscribers'> {groupSubs.length} subscribers</div>

                    <ul>
                        {groupSubs.map(user => (
                            <li key={user.username} className='modalGroup__member'>
                                <img src={Icon} alt="Group Avatar" className="modalGroup__avatar" />
                                {user.username}</li>
                        ))}
                    </ul>
                </div>}
                <div className="modalGroup__button">
                    <button className="leaveButton" onClick={handleLeaveChat}>Leave chat</button>
                </div>
            </div>
        </div>
    );
};

// onClick={() => { handleLeaveChat(); toggleGroup(); }}