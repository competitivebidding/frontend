import React from 'react'

import cls from './SocialIcon.module.scss'

interface Iprops {
  imageSrc: string
  link: string
}

export const SocialIcon = ({ imageSrc, link }: Iprops) => {
  return (
    <div className={cls.social__item}>
      <div className={cls.social__item_wrap}>
        <img src={imageSrc} alt="img" />
      </div>
      <a href="#">{link}</a>
    </div>
  )
}
