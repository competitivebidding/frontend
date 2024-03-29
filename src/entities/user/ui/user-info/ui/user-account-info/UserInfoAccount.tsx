import React, { useState } from 'react';
import userImg from '@assets/imgPartnerProgram/logo.svg';
import phone from '@assets/imgPartnerProgram/phone.svg';
import email from '@assets/imgPartnerProgram/sms.svg';
import hat from '@assets/imgPartnerProgram/magic-trick-dynamic-premium.png';
import card from '@assets/imgPartnerProgram/card.svg';
import { TooltipButton } from '@/shared/ui/tooltip-button/TooltipButton';
import cls from './UserInfoAccount.module.scss';
import { useTranslation } from 'react-i18next'

interface IUserInfoAccountProps {
  id: number;
}

export const UserInfoAccount = ({ id }: IUserInfoAccountProps) => {
  const { t } = useTranslation('partnerPage')

  const [userInfo, setUserInfo] = useState({
    mainCard: {
      picture: userImg,
      verify: false,
      id: id,
    },
    phoneCard: {
      phoneNumber: '+181435113212',
      verify: true,
      condition: false,
    },
    emailCard: {
      emailNumber: '',
      verify: false,
    },
    cardCard: {
      verify: false,
    },
  });

  return (
      <article className={cls['block__template']}>
        <div className={`${cls['block__item']} ${cls['item-info']}`}>
          <div className={cls['item-info__user']}>
            <img src={userInfo.mainCard.picture} alt="" className={cls['item-info__img']} />
            <div className={`${cls['item-info__verify']} ${userInfo.mainCard.verify ? cls['green-mode'] : ''}`}>
              {userInfo.mainCard.verify ?t('Confirmed') : t('Unconfirmed')}
            </div>
            <div className={cls['item-info__id']}>id: {userInfo.mainCard.id}</div>
          </div>
          <div className={cls['item-info__button']}>
            <button>{t('Settings')}</button>
          </div>
        </div>
        <div className={`${cls['block__item']} ${cls['item-partner']}`}>
          <img src={hat} alt={'hat'} />
          <div className={`${cls['item-partner__content']} ${cls['item']}`}>
            <button className={cls['item-content__button']}>{t('Status')}</button>
            <div className={`${cls['item-content__text']}`}>
              <div>
                {t('Partner')}
                <TooltipButton info={t('As a member of the affiliate program, you will receive a commission in the form of 20% of the spending of users who have registered using your referral link.')}/>
              </div>
              <p>{t('20% from personally invited')}</p>
            </div>
          </div>
        </div>

        <div className={`${cls['block__item']} ${cls['item-phone']}`}>
          <div className={`${cls['item-phone__main']} ${cls['main-phone']}`}>
            <div className={cls['main-phone__img']}>
              <img src={phone} alt="" />
            </div>
            <div className={cls['main-phone__info']}>
              <div className={`${cls['main-phone__phone-info']}`}>
                <div className={cls['main-phone__name']}>{t('Phone')}</div>
                <div className={cls['main-phone__phone']}>{userInfo.phoneCard.phoneNumber}</div>
              </div>
              <div className={`${cls['main-phone__status']} ${userInfo.phoneCard.verify ? cls['green-mode'] : ''}`}>
              {userInfo.phoneCard.verify ? t('Confirmed') : t('Unconfirmed')}
              </div>
            </div>
          </div>
          <div className={cls['item-phone__button']}>
            <button>{t('Submit')}</button>
          </div>
        </div>

        <div className={`${cls['block__item']} ${cls['item-email']}`}>
          <div className={`${cls['item-email__upperSection']} ${cls['upperSection']}`}>
            <div className={cls['upperSection__block-emailImg']}>
              <img src={email} alt="" className={cls['upperSection__emailImg']} />
            </div>

            <div className={cls['upperSection__block-info']}>
              <div className={cls['upperSection__block-email']}>
                <div className={cls['upperSection__title']}>{t('E-mail')}</div>
                <div className={cls['upperSection__email']}>viktory.mrs@icloud.com</div>
              </div>

              <div className={cls['upperSection__status']}>{t('Confirmed')}</div>
            </div>
          </div>
          <div className={`${cls['item-email__bottomSection']} ${cls['bottomSection']}`}>
            {t('Verification letter has been sent to your email')}
            <TooltipButton info={t('A verified email address increases your level of authorization and gives you more opportunities to interact with Competitive Biddin')} />
          </div>
        </div>

        <div className={`${cls['block__item']} ${cls['item-card']}`}>
          <div className={`${cls['item-card__content']} ${cls['content']}`}>
            <div className={`${cls['content__img']}`}>
              <img src={card} alt="card" />
            </div>
            <h3 className={`${cls['content__title']}`}>{t('Withdrawal card')}</h3>
            <div className={`${cls['content__status']}`}>{t('Not set')}</div>
          </div>
          <button className={`${cls['item-card__button']}`}>{t('Connect')}</button>
        </div>
      </article>
  );
};
