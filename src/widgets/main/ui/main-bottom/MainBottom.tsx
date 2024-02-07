import React from 'react'

import cls from './MainBottom.module.scss'


import { LastUsersList } from '@entities/user'

export const MainBottom = () => {
  return (
<div>

      <div className={cls["main-bottom__right"]}>
        <LastUsersList />
      </div>
      </div>
  )
}
