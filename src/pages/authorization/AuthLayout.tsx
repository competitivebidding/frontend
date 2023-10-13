import cls from './AuthLayout.module.scss'
import iconAuth from '@assets/imgAuth/iconAuth.svg'
import rocket from '@assets/imgAuth/rocket.png'
import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className={cls.auth}>
        <div className={cls.left}>
            <div className={cls.left__icon}>
                <img src={iconAuth} alt="icon" />
                <div>
                    <Link to="/" className={cls.icon__title}>
                        COMPETITIVE
                        <br /> BIDDIN
                    </Link>
                </div>
            </div>

            <div className={cls.left__rocket}>
                <img src={rocket} alt="" />
                <div className={cls.rocket__title}>Competitive Biddin</div>
            </div>

            <div className={cls.rocket__descr}>Before you start participating in the auction, complete all tasks.</div>

            <div className={cls.left__footer}>Competitive Biddin© 2023. All rights reserved</div>
        </div>
        <div className={cls.form__wrapper}>
            <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout
