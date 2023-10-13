import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import { useMutation } from '@apollo/client';

import cls from '../SignInRight.module.scss'

import { useLocalStorage } from '@/shared/lib/useLocalStorage';
import SIGNIN_MUTATION from '@shared/schemas/auth/signin';

interface ISignInFields {
  email: string;
  password: string;
}

export const SignInRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFields>();

  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

  const { setValue } = useLocalStorage('user');

  const [signin, { error }] = useMutation(SIGNIN_MUTATION);

  const handleSignIn = (data: ISignInFields) => {
    signin({
      variables: {
        signInInput: {
          email: data.email,
          password: data.password,
        },
      },
    })
        .then((response) => {
          console.log('Logged in successfully', response.data);
          Cookies.set('accesstoken', response.data?.signin.accessToken as string);
          Cookies.set('refreshtoken', response.data?.signin.refreshToken as string);
          const user = JSON.stringify(response.data?.signin.user);
          Cookies.set('user', user);
          setValue(response.data?.signin.user);
          window.location.href = '/';
        })
        .catch((error) => {
          console.error('SignIn failed', error);
        });
  };

  return (
      <>
        <form className={cls.form} onSubmit={handleSubmit(handleSignIn)} noValidate>
          <h2 className={cls.form__title}>Log in</h2>
          <div className={cls.form__descr}>
            <p>
              No account?
              <span>
              <Link to="/SignUp">Create an account</Link>
            </span>
            </p>
          </div>
          <div className={`${cls.form__group}  ${errors.email ? cls['has-error'] : ''}`}>
            <label htmlFor="email">E-mail</label>
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
            {errors.email?.type === 'required' && <div className={cls['error-message']}>Please enter your email address</div>}
            {errors.email?.type === 'pattern' && <div className={cls['error-message']}>Please enter a valid email address</div>}
          </div>
          <div className={`${cls.form__group} ${errors.password ? cls['has-error'] : ''}`}>
            <label htmlFor="password">Password</label>
            <div className={cls['password__input']}>
              <input
                  type={isRepeatPasswordVisible ? 'text' : 'password'}
                  id="password"
                  required
                  {...register('password', { required: true })}
              />
              <FontAwesomeIcon
                  icon={isRepeatPasswordVisible ? faEyeSlash : faEye}
                  onClick={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}
                  className={cls['password__icon']}
              />
            </div>
            {errors.password?.type === 'required' && <div className={cls['error-message']}>Please enter your password</div>}
          </div>

          <div className={cls['wrap__btn']}>
            <button type="submit" className={cls['btn__form']}>
              Log in
            </button>
          </div>
          <div className={cls['form__group']}>
            <Link to="/ResetPassword" className={cls['form__forgot']}>
              Forgot password?
            </Link>
          </div>
        </form>
        {error && <div className={cls['error']}>
          {`${error.message} Логин или пароль указан не верно`}
        </div>}
      </>
  );
};
