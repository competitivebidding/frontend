import './leftAuth.scss'
import iconAuth from '@assets/imgAuth/iconAuth.svg'
import rocket from '@assets/imgAuth/rocket.png'
import React from 'react'
import { Link } from 'react-router-dom'

const LeftAuth = () => {
  return (
    <div className="left">
      <div className="left__icon">
        <img src={iconAuth} alt="icon" />
        <div>
          <Link to="/" className="icon__title">
            COMPETITIVE
            <br /> BIDDIN
          </Link>
        </div>
      </div>

      <div className="left__rocket">
        <img src={rocket} alt="" />
        <div className="rocket__title">Competitive Biddin</div>
      </div>

      <div className="rocket__descr">Before you start participating in the auction, complete all tasks.</div>

      <div className="left__footer">Competitive Biddin© 2023. All rights reserved</div>
    </div>
  )
}

export default LeftAuth
