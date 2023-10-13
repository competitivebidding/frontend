import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useMutation } from '@apollo/client'
import Cookies from 'js-cookie'
import { useLocalStorage } from '@/shared/lib/useLocalStorage'
import SIGNUP_MUTATION from '@shared/schemas/auth/signup'
import cls from '../SignInRight.module.scss'


interface ISignUpFields {
  email: string
  username: string
  password: string
  repeatPassword: string
  referrerUserId: number
  isChecked: boolean
}

export const SignUpRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ISignUpFields>({
    mode: "onChange"
  })

  const password = watch('password')
  const repeatPassword = watch('repeatPassword')

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const { setValue } = useLocalStorage('user')

  const [signupMutation, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: (data) => {
      console.log(data)
      setSubmitted(true)
      Cookies.set('accesstoken', data.signup.accessToken)
      Cookies.set('refreshtoken', data.signup.refreshToken)
      const user = JSON.stringify(data.signup.user)
      Cookies.set('user', user)
      setValue(data.signup.user)
      window.location.href = '/'
      reset()
    },
    onError: (error) => {
      console.error(error)
      console.log()
    },
  })
  console.log(errors)

  const onSubmit = (data: ISignUpFields) => {
    signupMutation({
      variables: {
        signUpInput: {
          username: data.username,
          email: data.email,
          password: data.password,
          referrerUserId: Number(data.referrerUserId),
        },
      },
    })
  }

  return (
      <>
        <form className={`${cls.form} ${cls['form__sign']}`} onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className={cls['form__title']}>Sign up</h2>
          <div className={cls['form__descr']}>
            <p>
              Already have an account?
              <span>
              <Link to='/SignIn'>Log In</Link>
            </span>
            </p>
          </div>

          <div className={`${cls['form__group']} ${errors.username ? cls['has-error'] : ''}`}>
            <label htmlFor='username'>UserName</label>
            <div className={cls['username__input']}>
              <input
                  type='text'
                  id='username'
                  {...register('username', {
                    required: true,
                    minLength: 4,
                    maxLength: 16,
                  })}
              />
            </div>
            {errors.username && (
                <div className={cls['error__message']}>{errors.username.message || "Use valid name, please!"}</div>
            )}
          </div>

          <div className={`${cls['form__group']} ${errors.email ? cls['has-error'] : ''}`}>
            <label htmlFor='email'>E-mail</label>
            <div className={cls['email__input']}>
              <input
                  type='email'
                  id='email'
                  required
                  {...register('email', {
                    validate: (value) => validator.isEmail(value) || 'Please enter a valid email address',
                  })}

              />
            </div>
            {errors.email && (
                <div className={cls['error__message']}>{errors.email.message || "Use valid email, please!"}</div>
            )}
          </div>

          <div className={`${cls['form__group']} ${cls['form__password']} ${errors.password ? cls['has-error'] : ''}`}>
            <label htmlFor='password'>Password</label>
            <div className={cls['password__input']}>
              <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id='password'
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Please enter a password',
                    },
                    minLength: {
                      value: 6,
                      message: 'The password must be at least 6 characters long',
                    },
                  })}
              />
              <FontAwesomeIcon
                  icon={isPasswordVisible ? faEyeSlash : faEye}
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className={cls['password__icon']}
              />
            </div>
            {errors.password && (
                <div className={cls['error__message']}>{errors.password.message || "Use valid password, please!"}</div>
            )}
          </div>

          <div className={`${cls['form__group']} ${errors.repeatPassword ? cls['has-error'] : ''}`}>
            <label htmlFor='repeat__password'>Repeat password</label>
            <div className={cls['password__input']}>
              <input
                  type={isRepeatPasswordVisible ? 'text' : 'password'}
                  id='repeat__password'
                  {...register('repeatPassword', {
                    required: true,
                  })}
              />
              <FontAwesomeIcon
                  icon={isRepeatPasswordVisible ? faEyeSlash : faEye}
                  onClick={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}
                  className={cls['password__icon']}
              />
            </div>
            {password !== repeatPassword && (
                <div className={cls['error__message']}>Password should match</div>
            )}
            {errors.repeatPassword && (
                <div className={cls['error__message']}>{errors.repeatPassword.message || "Use valid name, please!"}</div>
            )}
          </div>

          <div className={`${cls['form__group']} ${errors.referrerUserId ? cls['has-error'] : ''}`}>
            <label htmlFor='repeat__password'>Referrer Id</label>
            <div className={cls['password__input']}>
              <input
                  type='number'
                  id='referrerUserId'
                  {...register('referrerUserId', {
                    required: false,
                  })}
              />
            </div>
            {errors.referrerUserId && (
                <div className={cls['error__message']}>{errors.referrerUserId.message || "Use valid id, please!"}</div>
            )}
          </div>

          <label className={cls['checkbox__container']}>
            <input type='checkbox' {...register('isChecked', { required: true })} />
            <span className={cls['checkmark']}></span>I have read and agree with
            <span className={cls['text__blue']}> the terms and conditions of the Competitive Bidding</span>
          </label>

          {errors.isChecked && (
              <div className={cls['error__message']}>{errors.isChecked?.message || "It should be checked!"}</div>
          )}

          <div className={cls['wrap__btn']}>
            <button disabled={password !== repeatPassword} type='submit' className={cls['btn__form']}>
              Sign in
            </button>
          </div>
        </form>

        {error && <div className={cls['error']}>
          {error.message}
        </div>}
      </>
  )
}

