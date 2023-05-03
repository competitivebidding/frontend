import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import './SignInRight.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useQuery, useMutation } from '@apollo/client'

import SIGNUP_MUTATION from '../../Components/server/signup.js'

const SignInRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm()

  const password = watch('password')
  const repeatPassword = watch('repeatPassword')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)


  const [signupMutation, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: (data) => {
      console.log(data)
      setSubmitted(true)
      // localStorage.setItem('userId', data.data.signup.user.id)
      
      window.location.href = '/LogIn';
      reset()
    },
    onError: (error) => {
      console.error(error)
      console.log()
    },
  })

  const onSubmit = (data) => {
    console.log(data)
    signupMutation({
      variables: {
        signUpInput: {
          username: data.username,
          email: data.email,
          password: data.password,
        },
      },
    })
  }

  return (
    <>
      <form className="form form__sign" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="form__title">Sign up</h2>
        <div className="form__descr">
          <p>
            Already have an account?
            <span>
              <Link to="/LogIn">Log In</Link>
            </span>
          </p>
        </div>

        <div className={`form__group ${errors.username ? 'has-error' : ''}`}>
          <label htmlFor="username">UserName</label>
          <div className="username__input">
            <input
              type="text"
              id="username"
              name="username"
              {...register('username', {
                required: true,
                maxLength: 16,
              })}
            />
          </div>
          {errors.username && errors.username.type === 'required' && (
            <div className="error__message">Please enter your username</div>
          )}
          {errors.username && errors.username.type === 'maxLength' && (
            <div className="error__message">Your username can't exceed 16 characters</div>
          )}
        </div>

        <div className={`form__group ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email">E-mail</label>
          <div className="email__input">
            <input
              type="email"
              id="email"
              name="email"
              required
              {...register('email', {
                validate: (value) => validator.isEmail(value) || 'Please enter a valid email address',
              })}
              
            />
          </div>
          {errors.email && <div className="error__message">{errors.email.message}</div>}
        </div>

        <div className={`form__group form__password ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <div className="password__input">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              {...register('password', {
                required: true,
              })}
            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="password__icon"
            />
          </div>
          {errors.password?.type === 'required' && <div className="error__message">Please enter your password</div>}
        </div>
        <div className={`form__group ${errors.repeatPassword ? 'has-error' : ''}`}>
          <label htmlFor="repeat__password">Repeat password</label>
          <div className="password__input">
            <input
              type={isRepeatPasswordVisible ? 'text' : 'password'}
              id="repeat__password"
              name="repeatPassword"
              {...register('repeatPassword', {
                required: true,
              })}
            />
            <FontAwesomeIcon
              icon={isRepeatPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}
              className="password__icon"
            />
          </div>
          {errors.repeatPassword?.type === 'required' && (
            <div className="error__message">Please enter your password</div>
          )}
          {password && repeatPassword && password !== repeatPassword && (
            <div className="error__message">Passwords don't match</div>
          )}
        </div>

        <label className="checkbox__container">
          <input type="checkbox" name="text" {...register('isChecked', { required: true })} />
          <span className="checkmark"></span>I have read and agree with{' '}
          <span className="text__blue">the terms and conditions of the Competitive Bidding</span>
        </label>
        {errors.isChecked && <div className="error__message">You need to accept our terms and conditions </div>}

        <div className="wrap__btn">
          <button type="submit" className="btn__form">
            Sign in
          </button>
        </div>
      </form>
    </>
  )
}

export default SignInRight
