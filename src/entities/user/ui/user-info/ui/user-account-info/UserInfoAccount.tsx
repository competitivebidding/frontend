import React, { useState } from 'react';

import userImg from '@assets/imgPartnerProgram/logo.svg';
import phone from '@assets/imgPartnerProgram/phone.svg';
import email from '@assets/imgPartnerProgram/sms.svg';
import hat from '@assets/imgPartnerProgram/magic-trick-dynamic-premium.png';
import card from '@assets/imgPartnerProgram/card.svg';

import { TooltipButton } from '@/shared/ui/tooltip-button/TooltipButton';

import './UserInfoAccount.scss';

interface IUserInfoAccountProps {
	id: number
}

export const UserInfoAccount = ({ id }: IUserInfoAccountProps) => {
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
		<article className="block__template">
			<div className="block__item item-info">
				<div className="item-info__user">
					<img
						src={userInfo.mainCard.picture}
						alt=""
						className="item-info__img"
					/>
					<div
						className={`item-info__verify ${userInfo.mainCard.verify ? 'green-mode' : ''
							}`}
					>
						{userInfo.mainCard.verify ? 'Confirmed' : 'Unconfirmed'}
					</div>
					<div className="item-info__id">id: {userInfo.mainCard.id}</div>
				</div>
				<div className="item-info__button">
					<button>Settings</button>
				</div>
			</div>
			<div className="block__item item-partner">
				<img src={hat} alt={'hat'} />
				<div className={'item-partner__content item'}>
					<button className={'item-content__button'}>Status</button>
					<div className={'item-content__text'}>
						<div>
							Partner

							<TooltipButton info="As a member of the affiliate program, you will receive a commission in the form of 20% of the spending of users who have registered using your referral link." />
						</div>
						<p>20% from personally invited</p>
					</div>
				</div>
			</div>

			<div className="block__item item-phone">
				<div className="item-phone__main main-phone">
					<div className="main-phone__img">
						<img
							src={phone}
							alt=""
						/>
					</div>
					<div className="main-phone__info">
						<div className="main-phone__phone-info">
							<div className="main-phone__name">Phone</div>
							<div className="main-phone__phone">
								{userInfo.phoneCard.phoneNumber}
							</div>
						</div>
						<div
							className={`main-phone__status ${userInfo.phoneCard.verify ? 'green-mode' : ''
								}`}
						>
							{userInfo.phoneCard.verify ? 'Confirmed' : 'Uncomfirmed'}
						</div>
					</div>
				</div>
				<div className="item-phone__button">
					<button>Submit</button>
				</div>
			</div>

			<div className="block__item item-email">
				<div className="item-email__upperSection upperSection">
					<div className="upperSection__block-emailImg">
						<img
							src={email}
							alt=""
							className="upperSection__emailImg"
						/>
					</div>



					<div className="upperSection__block-info">

						<div className="upperSection__block-email">
							<div className="upperSection__title">E-mail</div>
							<div className="upperSection__email">viktory.mrs@icloud.com</div>
						</div>

						<div className="upperSection__status">
							Confirmed
						</div>

					</div>



				</div>
				<div className="item-email__bottomSection bottomSection">
					Verification letter has been sent to your email

					<TooltipButton info="A verified email address increases your level of authorization and gives you more opportunities to interact with Competitive Biddin" />
				</div>
			</div>

			<div className="block__item item-card">
				<div className={'item-card__content content'}>
					<div className={'content__img'}>
						<img src={card} alt="card" />
					</div>
					<h3 className={'content__title'}>Withdrawal card</h3>
					<div className={'content__status'}>
						Not set
					</div>
				</div>
				<button className={'item-card__button'}>Connect</button>
			</div>
		</article>
	);
};
