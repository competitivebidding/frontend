import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import './SignInRight.scss';
import { Link } from 'react-router-dom';

const SignInRight = () => {
  const { register, handleSubmit, formState: { errors, isDirty }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset()
  };

  return (
    <>
      <form className="form form__sign" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="form__title">Sign in</h2>
        <div className="form__descr">
          <p>Already have an account?<span>
            <Link to='/LogIn'>Log In</Link> 
            </span></p>
        </div>

        <div className={`form__group ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required {...register('email', { 
            validate: (value) => validator.isEmail(value) || 'Please enter a valid email address'
          })} />
          {errors.email && <div className="error__message">{errors.email.message}</div>}
        </div>
        <div className={`form__group ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required {...register('password', { 
            validate: {
              minLength: (value) => value.length >= 6 || 'Minimum 6 characters required',
              digit: (value) => /\d/.test(value) || 'At least 1 digit required',
              upperCase: (value) => /[A-Z]+/.test(value) || 'At least 1 uppercase character required'
            }
          })} />
          {errors.password && (
            <div className="error__message">
              {errors.password.type === 'minLength' && 'Minimum 6 characters required'}
              {errors.password.type === 'digit' && 'At least 1 digit required'}
              {errors.password.type === 'upperCase' && 'At least 1 uppercase character required'}
            </div>
          )}
        </div>

        <label className="checkbox__container">
          <input type="checkbox" name="text" {...register('isChecked', { required: true })} />
          <span className="checkmark"></span>
          I have read and agree with <span className='text__blue'>the terms and conditions of the Competitive Bidding</span>
        </label>
        {errors.isChecked && <div className="error__message">You need to accept our terms and conditions </div>}

        <div className="form__group">
          <button type="submit" className="btn" disabled={!isDirty}>Sign in</button>
        </div>
      </form>
    </>
  );
};

export default SignInRight;
