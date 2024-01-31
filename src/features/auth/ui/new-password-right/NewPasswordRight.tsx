import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import cls from '../SignInRight.module.scss'
import { useTranslation } from 'react-i18next'
import iconAuth from '@assets/imgAuth/iconAuth.svg'


type INewPasswordForm = {
  password: string
  repeatPassword: string
}

export const NewPasswordRight: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<INewPasswordForm>()

  const password = watch('password')
  const repeatPassword = watch('repeatPassword')

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false)

  const { t } = useTranslation('newPasswordRight')

  const onSubmit = (data: INewPasswordForm) => {
    if (password !== repeatPassword) {
      console.log(data)
    } else {
      console.log(data)
    }
  }

  return (
    <>
      <Link to="/" className={cls.company__icon}>
        <img src={iconAuth} alt="icon" />
        <div>
          <h2 className={cls.company__title}>COMPETITIVE
            <br /> BIDDING</h2>
        </div>
      </Link>

      <form className={cls.form} onSubmit={handleSubmit(onSubmit)} noValidate style={
        window.innerWidth <= 1000
          ? { marginTop: '150px' }
          : {}
      }>
        <h2 className={cls.form__title}>{t('Recover password')}</h2>
        <div className={cls.formDescr}>
          <p>
            {t('Already have an account')}?
            <span>
              <Link to="/SignIn">{t('Log in')}</Link>
            </span>
          </p>
        </div>
        <div className={`${cls.formGroup} ${cls.formPassword} ${errors.password ? cls.hasError : ''}`}>
          <label htmlFor="password">{t('New Password')}</label>
          <div className={cls.passwordInput}>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              required
              {...register('password', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className={cls.passwordIcon}
            />
          </div>
          {errors.password?.type === 'required' && <div className={cls.errorMessage}>{t('Please enter your password')}</div>}
        </div>
        <div className={`${cls.formGroup} ${errors.repeatPassword ? cls.hasError : ''}`}>
          <label htmlFor="repeatPassword">{t('Repeat password')}</label>
          <div className={cls.passwordInput}>
            <input
              type={isRepeatPasswordVisible ? 'text' : 'password'}
              id="repeatPassword"
              required
              {...register('repeatPassword', {
                required: true,
              })}
            />
            <FontAwesomeIcon
              icon={isRepeatPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}
              className={cls.passwordIcon}
            />
          </div>
          {errors.repeatPassword?.type === 'required' && (
            <div className={cls.errorMessage}>{t('Please enter your password')}</div>
          )}
          {password && repeatPassword && password !== repeatPassword && (
            <div className={cls.errorMessage}>{t("Passwords don't match")}</div>
          )}
        </div>
        <div className={cls.wrapBtn}>
          <button type="submit" className={cls.btnForm}>
            {t('Save')}
          </button>
        </div>
      </form>
    </>
  )
}
