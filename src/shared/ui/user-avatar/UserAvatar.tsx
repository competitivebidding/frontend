import React from 'react'
import cls from './UserAvatar.module.scss'
import avatar from '@assets/cabinet/icons/avatar.svg'

interface IUserAvatarProps {
  avatarUrl?: string | null
  onClick?: () => void
  className?: string
  width?: number
  height?: number
}

export const UserAvatar = ({ avatarUrl, onClick, className = '', width = 78, height = 78 }: IUserAvatarProps) => {
  return (
    <img
      src={avatarUrl ? avatarUrl : avatar}
      alt="avatar"
      width={width}
      height={height}
      className={`${cls.avatar} ${className}`}
      onClick={onClick}
    />
  )
}
