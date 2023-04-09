import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import { Link } from 'react-router-dom'

import './ResetPasswordRight.scss'

const ResetPasswordRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [emailSubmitted, setEmailSubmitted] = useState(false)
  // const [verificationCode, setVerificationCode] = useState("1234");
  const [codeVerified, setCodeVerified] = useState(true)

  let verificationCode = '1234'

  const onSubmit = (data, event) => {
    event.preventDefault()
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
        console.log(data)
        setEmailSubmitted(true)
      }
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="form__title">Recover password</h2>
        <div className="form__descr">
          <p>
            Already have an account?{' '}
            <span>
              <Link to="/SignIn">Log In</Link>
            </span>
          </p>
        </div>
        {!emailSubmitted && (
          <div className={`form__group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">E-mail</label>
            <div className="email__input">
              <input
                type="email"
                id="email"
                name="email"
                required
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
            {errors.email?.type === 'required' && <div className="error-message">Please enter your email address</div>}
            {errors.email?.type === 'pattern' && (
              <div className="error-message">Please enter a valid email address</div>
            )}
          </div>
        )}
        {emailSubmitted && (
          <>
            <div className="success__message">Code sent! Check your email.</div>
            <div className={`form__group ${errors.code || !codeVerified ? 'has-error' : ''}`}>
              <label htmlFor="code">Code</label>
              <div className="code__input">
                <input
                  type="text"
                  id="code"
                  name="code"
                  required
                  {...register('code', {
                    required: true,
                    pattern: /^[0-9]+$/,
                  })}
                />
              </div>
              {errors.code?.type === 'required' && (
                <div className="error-message">Please enter the code sent to your email</div>
              )}

              {/* {errors.code?.type === 'pattern' && (
                <div className="error-message">Please enter only digits</div>
              )} */}

              {!codeVerified && <div className="error-message">Error: Invalid code</div>}
            </div>
          </>
        )}
        <div className="wrap__btn">
          <button type="submit" className="btn__form">
            {emailSubmitted ? 'Verify code' : 'Restore'}
          </button>
        </div>
      </form>
    </>
  )
}

export default ResetPasswordRight
