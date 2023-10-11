import React, { useState } from 'react';
import userImg from '@assets/imgPartnerProgram/logo.svg';
import phone from '@assets/imgPartnerProgram/phone.svg';
import email from '@assets/imgPartnerProgram/sms.svg';
import hat from '@assets/imgPartnerProgram/magic-trick-dynamic-premium.png';
import card from '@assets/imgPartnerProgram/card.svg';
import { TooltipButton } from '@/shared/ui/tooltip-button/TooltipButton';
import cls from './UserInfoAccount.module.scss';

interface IUserInfoAccountProps {
  id: number;
}

const UserInfoAccount = ({ id }: IUserInfoAccountProps) => {
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
      <article className={cls.blockTemplate}>
        <div className={cls.itemInfo}>
          <div className={cls.itemInfoUser}>
            <img src={userInfo.mainCard.picture} alt="" className={cls.itemInfoImg} />
            <div className={`${cls.itemInfoVerify} ${userInfo.mainCard.verify ? cls.greenMode : ''}`}>
              {userInfo.mainCard.verify ? 'Confirmed' : 'Unconfirmed'}
            </div>
            <div className={cls.itemInfoId}>id: {userInfo.mainCard.id}</div>
          </div>
          <div className={cls.itemInfoButton}>
            <button>Settings</button>
          </div>
        </div>
        <div className={cls.itemPartner}>
          <img src={hat} alt={'hat'} />
          <div className={`${cls.itemPartnerContent} ${cls.item}`}>
            <button className={cls.itemContentButton}>Status</button>
            <div className={cls.itemContentText}>
              <div>
                Partner
                <TooltipButton info="As a member of the affiliate program, you will receive a commission in the form of 20% of the spending of users who have registered using your referral link." />
              </div>
              <p>20% from personally invited</p>
            </div>
          </div>
        </div>

        <div className={cls.itemPhone}>
          <div className={cls.itemPhoneMain}>
            <div className={cls.mainPhoneImg}>
              <img src={phone} alt="" />
            </div>
            <div className={cls.mainPhoneInfo}>
              <div className={cls.mainPhonePhoneInfo}>
                <div className={cls.mainPhoneName}>Phone</div>
                <div className={cls.mainPhonePhone}>{userInfo.phoneCard.phoneNumber}</div>
              </div>
              <div className={`${cls.mainPhoneStatus} ${userInfo.phoneCard.verify ? cls.greenMode : ''}`}>
                {userInfo.phoneCard.verify ? 'Confirmed' : 'Uncomfirmed'}
              </div>
            </div>
          </div>
          <div className={cls.itemPhoneButton}>
            <button>Submit</button>
          </div>
        </div>

        <div className={cls.itemEmail}>
          <div className={cls.itemEmailUpperSection}>
            <div className={cls.upperSectionBlockEmailImg}>
              <img src={email} alt="" className={cls.upperSectionEmailImg} />
            </div>
            <div className={cls.upperSectionBlockInfo}>
              <div className={cls.upperSectionBlockEmail}>
                <div className={cls.upperSectionTitle}>E-mail</div>
                <div className={cls.upperSectionEmail}>viktory.mrs@icloud.com</div>
              </div>

              <div className={cls.upperSectionStatus}>Confirmed</div>
            </div>
          </div>
          <div className={cls.itemEmailBottomSection}>
            Verification letter has been sent to your email
            <TooltipButton info="A verified email address increases your level of authorization and gives you more opportunities to interact with Competitive Bidding" />
          </div>
        </div>

        <div className={cls.itemCard}>
          <div className={`${cls.itemCardContent} ${cls.content}`}>
            <div className={cls.contentImg}>
              <img src={card} alt="card" />
            </div>
            <h3 className={cls.contentTitle}>Withdrawal card</h3>
            <div className={cls.contentStatus}>Not set</div>
          </div>
          <button className={cls.itemCardButton}>Connect</button>
        </div>
      </article>
  );
};

export default UserInfoAccount;
