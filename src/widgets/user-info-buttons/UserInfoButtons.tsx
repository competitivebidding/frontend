import React from 'react'
import cls from './UserInfoButtons.module.scss'

const UserInfoButtons = () => {
  return (
    <div className={cls.buttons__block}>
      <a href="#" className={`${cls.buttons__button} ${cls.blue}`}>
        Partner program
      </a>
      <a href="#" className={`${cls.buttons__button} ${cls.gray}`}>
        About program
      </a>
    </div>
  )
}

export default UserInfoButtons
