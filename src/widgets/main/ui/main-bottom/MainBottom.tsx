import React from 'react'

import cls from './MainBottom.module.scss'

import { Socials } from '../../../socials/Socials'
import { LastUsersList } from '@entities/user'

export const MainBottom = () => {
  return (
    <div className={cls["main-bottom"]}>
      <div className={cls["main-bottom__left"]}>
        <Socials />

        {/*<Chats />*/}
      </div>

      <div className={cls["main-bottom__right"]}>
        <LastUsersList />
      </div>
    </div>
  )
}
