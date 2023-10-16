import React from 'react'

import cls from './Socials.module.scss'

import SocialData from './Data/SocialData'

import { SocialIcon } from '@/shared/ui/social-icon/SocialIcon'

export const Socials = () => {
  const getData = SocialData.map((item) => {
    return <SocialIcon key={item.id} imageSrc={item.imageSrc} link={item.link} />
  })

  return <div className={cls.social}>{getData}</div>
}
