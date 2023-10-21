import React, {useEffect, useRef, useState} from 'react'
import {useMutation, useQuery, useSubscription} from '@apollo/client'
import cls from './ChatGroups.module.scss'
import {useLocalStorage} from '@shared/lib/useLocalStorage'
import {
  GetAllMyRoomsDocument,
  NewMessageDocument,
  RemoveMyRoomDocument
} from '@shared/lib/types/__generated-types__/graphql'
import {Group, IUser} from "@entities/messages/Messages";
import {ContextMenu} from "@shared/ui/contextMenu";

interface IChatGroupsProps {
  onSelectGroup: (group: Group) => void
  activeItem: number
}

interface IContextMenu {
  isOpen: boolean
  x: number;
  y: number;
  group: Group
}

export const ChatGroups = ({ onSelectGroup, activeItem }: IChatGroupsProps) => {
  const { setValue } = useLocalStorage('activeGroup')
  const [contextMenu, setContextMenu] = useState<IContextMenu | null>(null);

  const {lsValue} = useLocalStorage<IUser>('user')

  const { data: groupsData, loading: groupsLoading } = useQuery(GetAllMyRoomsDocument)
  const { data: newMessageData, loading: newMessageLoading } = useSubscription(NewMessageDocument, {
    variables: { roomId: activeItem, content: '' },
  })

  const [removeRoom, {loading}] = useMutation(RemoveMyRoomDocument, {refetchQueries: [GetAllMyRoomsDocument]})

  const handleSetActiveGroup = (group: Group) => {
    onSelectGroup(group)
    setValue(group)
  }

  const handleContextMenu = (event: React.MouseEvent, group: Group) => {
    event.preventDefault();
    setContextMenu({isOpen: true, x: event.clientX, y: event.clientY, group });
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

  const handleDeleteGroup = () => {
    if (contextMenu) {
      removeRoom({variables: {roomId: contextMenu?.group.id}}).then(() => closeContextMenu())
    }
  }

  return (
    <div className={cls.sidebar__group}>
      {!groupsLoading && (
        <ul>
          {groupsData?.getAllMyRooms.map((group: Group ) => (
            <li
              key={group.id}
              className={`${cls.sidebar__list} ${activeItem === group.id ? cls.active : ''}`}
              onClick={() => handleSetActiveGroup(group)}
              onContextMenu={(e) => handleContextMenu(e, group)}
            >
              <div className={cls['sidebar__list-title']}>
                {group.title}
              </div>
            </li>
          ))}
        </ul>
      )}
      {contextMenu && (
          <ContextMenu isOpen={contextMenu.isOpen} onClose={closeContextMenu} x={contextMenu.x} y={contextMenu.y}>
            <button>Leave group</button>
            {lsValue && contextMenu
                && lsValue.id === contextMenu.group.ownerId
                && <button disabled={loading} onClick={handleDeleteGroup}>Delete group</button>}
          </ContextMenu>
      )}
    </div>
  )
}
