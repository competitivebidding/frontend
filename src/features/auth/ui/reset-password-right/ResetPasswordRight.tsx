import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import { Link } from 'react-router-dom'
import cls from '../SignInRight.module.scss'
import { useTranslation } from 'react-i18next'
import iconAuth from '@assets/imgAuth/iconAuth.svg'

interface IResetPasswordFields {
  email: string
  code: string
}

export const ResetPasswordRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPasswordFields>()

  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [codeVerified, setCodeVerified] = useState(true)
  const { t } = useTranslation('authPage')

  let verificationCode = '1234'

  const onSubmit = (data: IResetPasswordFields) => {
    if (emailSubmitted) {
      if (data.code === verificationCode) {
        console.log('Code verified!')
        setCodeVerified(true)
        window.location.href = '/NewPassword'
      } else {
        console.log('Invalid code')
        setCodeVerified(false)
      }
    } else {
      if (validator.isEmail(data.email)) {
        setEmailSubmitted(true)
      }
    }
  }

  return (
    <>
          <Link to="/" className={cls.company__icon}>
        <img src={iconAuth} alt="icon" />
        <div>
          <h2 className={cls.company__title}>COMPETITIVE
            <br/> BIDDING</h2>
        </div>
      </Link>

      <form className={cls.form} onSubmit={handleSubmit(onSubmit)} noValidate style={
        window.innerWidth <= 1000
          ? { marginTop: '150px' }
          : {} 
      }>
        <h2 className={cls.form__title}>{t('Recover password')}</h2>
        <div className={cls.form__descr}>
          <p>
            {t('Already have an account')}?{' '}
            <span>
            <Link to="/SignIn">{t('Log In')}</Link>
          </span>
          </p>
        </div>
        {!emailSubmitted && (
            <div className={`${cls.form__group} ${errors.email ? cls['has-error'] : ''}`}>
              <label htmlFor="email">{t('E-mail')}</label>
              <div className={cls.email__input}>
                <input
                    type="email"
                    id="email"
                    required
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                />
              </div>
              {errors.email?.type === 'required' && <div className={cls['error-message']}>{t('Please enter a valid email address')}</div>}
              {errors.email?.type === 'pattern' && (
                  <div className={cls['error-message']}>{t('Please enter a valid email address')}</div>
              )}
            </div>
        )}
        {emailSubmitted && (
            <>
              <div className={cls['success__message']}>{t('Code sent! Check your email')}.</div>
              <div className={`${cls.form__group} ${errors.code || !codeVerified ? cls['has-error'] : ''}`}>
                <label htmlFor="code">{t('Code')}</label>
                <div className={cls.code__input}>
                  <input
                      type="text"
                      id="code"
                      required
                      {...register('code', {
                        required: true,
                        pattern: /^[0-9]+$/,
                      })}
                  />
                </div>
                {errors.code?.type === 'required' && (
                    <div className={cls['error-message']}>{t('Please enter the code sent to your email')}</div>
                )}
                {!codeVerified && <div className={cls['error-message']}>{t('Error: Invalid code')}</div>}
              </div>
            </>
        )}
        <div className={cls['wrap__btn']}>
          <button type="submit" className={cls['btn__form']}>
            {emailSubmitted ? t('Verify code') : t('Restore')}
          </button>
        </div>
      </form>
      </>
  )
}
