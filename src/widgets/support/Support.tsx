import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next'
import validator from 'validator';
import cls from './Support.module.scss';

interface ISupportProps {
  email: string;
  problem: string;
}

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISupportProps>();

  const { t } = useTranslation('support');

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (data: ISupportProps) => {
    if (validator.isEmail(data.email)) {
      setIsFormSubmitted(true);
      console.log('Logged in successfully');
      reset();
    }
  };

  const handleInputChange = () => {
    setIsFormSubmitted(false);
  };

  return (
      <div className={cls['form__support']}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className={cls['form__support--title']}>{t('If you have a problem fill out the form')}</h2>

          <div className={cls['form__support--group']}>
            <div className={cls['form__support--item']}>
              <label htmlFor="email">{t('E-mail')}</label>
              <div className={cls['email__input']}>
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
              {errors.email?.type === 'required' && (
                  <div className={cls['error-message']}>{t('Please enter your email address')}</div>
              )}
              {errors.email?.type === 'pattern' && (
                  <div className={cls['error-message']}>{t('Please enter a valid email address')}</div>
              )}
            </div>

            <div className={cls['form__support--item']}>
              <label htmlFor="problem">{t("What's your problem")}?</label>
              <div className={cls['problem__input']}>
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
              {errors.problem?.type === 'required' && (
                  <div className={cls['error-message']}>{t('Please describe your problem')}</div>
              )}
              {errors.problem?.type === 'minLength' && (
                  <div className={cls['error-message']}>{t('Please enter at least 10 characters')}</div>
              )}
            </div>
            {isFormSubmitted && (
                <div className={cls['success__message--support']}>{t('Thank you, we will get in touch with you shortly')}!</div>
            )}
            <div className={cls['wrap__btn']}>
              <button type="submit" className={cls['btn__form']}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default Support;
