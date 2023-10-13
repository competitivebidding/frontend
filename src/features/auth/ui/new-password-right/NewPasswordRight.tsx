import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import cls from '../SignInRight.module.scss'


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

  const onSubmit = (data: INewPasswordForm) => {
    if (password !== repeatPassword) {
      console.log(data)
    } else {
      console.log(data)
    }
  }

  return (

        <form className={cls.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className={cls.formTitle}>Recover password</h2>
          <div className={cls.formDescr}>
            <p>
              Already have an account?
              <span>
              <Link to="/SignIn">Log in</Link>
            </span>
            </p>
          </div>
          <div className={`${cls.formGroup} ${cls.formPassword} ${errors.password ? cls.hasError : ''}`}>
            <label htmlFor="password">New Password</label>
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
            {errors.password?.type === 'required' && <div className={cls.errorMessage}>Please enter your password</div>}
          </div>
          <div className={`${cls.formGroup} ${errors.repeatPassword ? cls.hasError : ''}`}>
            <label htmlFor="repeatPassword">Repeat password</label>
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
                <div className={cls.errorMessage}>Please enter your password</div>
            )}
            {password && repeatPassword && password !== repeatPassword && (
                <div className={cls.errorMessage}>Passwords don't match</div>
            )}
          </div>
          <div className={cls.wrapBtn}>
            <button type="submit" className={cls.btnForm}>
              Save
            </button>
          </div>
        </form>

  )
}
