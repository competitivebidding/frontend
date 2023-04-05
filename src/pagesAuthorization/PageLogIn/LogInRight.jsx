import React from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import './LoginRight.scss';
import { Link } from 'react-router-dom';

const LogInRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    if (validator.isEmail(data.email)) {
      console.log('Logged in successfully');
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="form__title">Log in</h2>
        <div className="form__descr">
          <p>
            No account?{' '}
            <span>
              <Link to="/SignIn">Create an account</Link>
            </span>
          </p>
        </div>
        <div className={`form__group ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i
            })}
          />
          {errors.email?.type === 'required' && (
            <div className="error-message">Please enter your email address</div>
          )}
          {errors.email?.type === 'pattern' && (
            <div className="error-message">Please enter a valid email address</div>
          )}
        </div>
        <div className={`form__group ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && (
            <div className="error-message">Please enter your password</div>
          )}
        </div>

        <div className="form__group">
          <button type="submit" className="btn">
            Log in
          </button>
        </div>
        <div className="form__group form__forgot">Forgot password?</div>
      </form>
    </>
  );
};

export default LogInRight
