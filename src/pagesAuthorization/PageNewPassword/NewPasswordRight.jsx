import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import './NewPasswordRight.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const NewPasswordRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password = watch('password');
  const repeatPassword = watch('repeatPassword');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

  const onSubmit = (data) => {
    if (password !== repeatPassword) {
      console.log(data)
    } else {
      console.log(data)
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className="form__title">Recover password</h2>
        <div className="form__descr">
          <p>
            Already have an account?{' '}
            <span>
              <Link to="/SignIn">Log in</Link>
            </span>
          </p>
        </div>
        <div className={`form__group form__password ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password">New Password</label>
          <div className="password__input">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              required
              {...register('password', {
                required: true,
                pattern: /^\S+@\S+$/i
              })}
            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="password__icon"
            />
          </div>
          {errors.password?.type === 'required' && (
            <div className="error-message">Please enter your password</div>
          )}
        </div>
        <div className={`form__group ${errors.repeatPassword ? 'has-error' : ''}`}>
          <label htmlFor="repeat__password">Repeat password</label>
          <div className="password__input">
            <input
              type={isRepeatPasswordVisible ? 'text' : 'password'}
              id="repeat__password"
              name="repeatPassword"
              required
              {...register('repeatPassword', { required: true })}
            />
            <FontAwesomeIcon
              icon={isRepeatPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}
              className="password__icon"
            />
          </div>
          {errors.repeatPassword?.type === 'required' && (
            <div className="error-message">Please enter your password</div>
          )}
          {password && repeatPassword && password !== repeatPassword && (
            <div className="error-message">Passwords don't match</div>
          )}
        </div>
        <div className="wrap__btn">
          <button type="submit" className="btn__form">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPasswordRight
