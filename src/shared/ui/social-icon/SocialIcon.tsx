import React from 'react'

import './SocialIcon.scss'

interface Iprops {
  imageSrc: string
  link: string
}

export const SocialIcon = ({ imageSrc, link }: Iprops) => {
  return (
    <div className="social__item">
      <div className="social__item_wrap">
        <img src={imageSrc} alt="img" />
      </div>
      <a href="#">{link}</a>
    </div>
  )
}
