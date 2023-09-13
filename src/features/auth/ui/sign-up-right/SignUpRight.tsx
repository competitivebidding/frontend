import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import validator from 'validator'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useMutation } from '@apollo/client'
import Cookies from 'js-cookie'

import { useLocalStorage } from '@/shared/lib/useLocalStorage'

import './SignUpRight.scss'
import SIGNUP_MUTATION from '@shared/schemas/auth/signup'

// import {
//   $password,
//   $repeatPassword,
//   $email,
//   $username,
//   $referrerId,
//   $phone,
//   passwordChanged,
//   repeatPasswordChanged,
//   emailChanged,
//   referrerIdChanged,
//   usernameChanged,

// } from './model'


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
      <form className='form form__sign' onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className='form__title'>Sign up</h2>
        <div className='form__descr'>
          <p>
            Already have an account?
            <span>
              <Link to='/SignIn'>Log In</Link>
            </span>
          </p>
        </div>

        <div className={`form__group ${errors.username ? 'has-error' : ''}`}>
          <label htmlFor='username'>UserName</label>
          <div className='username__input'>
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
            <div className='error__message'>{errors.username.message || "Use valid name, please!"}</div>
          )}
        </div>

        <div className={`form__group ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor='email'>E-mail</label>
          <div className='email__input'>
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
            <div className='error__message'>{errors.email.message || "Use valid email, please!"}</div>
          )}
        </div>

        <div className={`form__group form__password ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor='password'>Password</label>
          <div className='password__input'>
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
              className='password__icon'
            />
          </div>
          {errors.password && (
            <div className='error__message'>{errors.password.message || "Use valid password, please!"}</div>
          )}
        </div>
        <div className={`form__group ${errors.repeatPassword ? 'has-error' : ''}`}>
          <label htmlFor='repeat__password'>Repeat password</label>
          <div className='password__input'>
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
              className='password__icon'
            />
          </div>
          {password !== repeatPassword && (
            <div className='error__message'>Password should match</div>
          )}
          {errors.repeatPassword && (
            <div className='error__message'>{errors.repeatPassword.message || "Use valid name, please!"}</div>
          )}
        </div>

        <div className={`form__group ${errors.referrerUserId ? 'has-error' : ''}`}>
          <label htmlFor='repeat__password'>Referrer Id</label>
          <div className='password__input'>
            <input
              type='number'
              id='referrerUserId'
              {...register('referrerUserId', {
                
                required: false,
              })}
            />
          </div>
          {errors.referrerUserId && (
            <div className='error__message'>{errors.referrerUserId.message || "Use valid id, please!"}</div>
          )}
        </div>

        <label className='checkbox__container'>
          <input type='checkbox' {...register('isChecked', { required: true })} />
          <span className='checkmark'></span>I have read and agree with
          <span className='text__blue'>the terms and conditions of the Competitive Bidding</span>
        </label>
        {errors.isChecked && (
          <div className='error__message'>{errors.isChecked?.message || "It should be checked!"}</div>
        )}

        <div className='wrap__btn'>
          <button type='submit' className='btn__form'>
            Sign in
          </button>
        </div>
      </form>
    </>
  )
}
