import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import validator from 'validator'
import '../../pages/support/Support.scss'

interface ISupportProps {
  email: string
  problem: string
}

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISupportProps>()

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const onSubmit = (data: ISupportProps) => {
    if (validator.isEmail(data.email)) {
      setIsFormSubmitted(true)
      console.log('Logged in successfully')
      reset()
    }
  }

  const handleInputChange = () => {
    setIsFormSubmitted(false)
  }

  return (
    <>
      <form className="form__support" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="form__support--title">If you have a problem fill out the form</h2>

        <div className='form__support--group'>
          <div className='form__support--item'  >
            <label htmlFor="email">E-mail</label>
            <div className="email__input">
              <input
                type="email"
                id="email"
                required
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                onChange={handleInputChange}
              />
            </div>
            {errors.email?.type === 'required' && <div className="error-message">Please enter your email address</div>}
            {errors.email?.type === 'pattern' && <div className="error-message">Please enter a valid email address</div>}
          </div>

          <div className='form__support--item'>
            <label htmlFor="problem">What's your problem?</label>
            <div className="problem__input">
              <textarea
                id="problem"
                required
                minLength={10}
                {...register('problem', {
                  required: true,
                  minLength: 10,
                })}
                onChange={handleInputChange}
              ></textarea>
            </div>
            {errors.problem?.type === 'required' && <div className="error-message">Please describe your problem</div>}
            {errors.problem?.type === 'minLength' && <div className="error-message">Please enter at least 10 characters</div>}
          </div>
          {isFormSubmitted && <div className="success__message--support">Thank you, we will get in touch with you shortly!</div>}
          <div className="wrap__btn">
            <button type="submit" className="btn__form">
              Send
            </button>
          </div>
        </div>

      </form>
    </>
  )
}

export default Support;
