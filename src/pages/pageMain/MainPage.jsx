import React from 'react';

import './MainPage.scss';
import User from './User/User.jsx';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import Stats from './Stats/Stats.jsx';
import RoyalAction from './RoyalAction/RoyalAction';
import ProgressList from './ProgressList/ProgressList';
import Mission from './Mission/Mission';

const AuctionsPage = ({ title }) => {
	return (
		<>
			<AppHeader title={title} />
			<div className="">

				<div className={'main'}>

					<RoyalAction />

					<ProgressList />

					<Mission
						value={"100000"}
					/>

					<Stats />

				</div>

				<div className="main-bottom">
					<div className="main-bottom__left">
						<div className="social">
							<div className="social__item">
								<div className="social__item_wrap">
									<img
										src="src/assets/pageMain/inst.svg"
										alt=""
									/>
								</div>
								<a href="#">Instagram</a>
							</div>
							<div className="social__item">
								<div className="social__item_wrap">
									<img
										src="src/assets/pageMain/tg.svg"
										alt=""
									/>
								</div>
								<a href="#">Телеграм</a>
							</div>
							<div className="social__item">
								<div className="social__item_wrap">
									<img
										src="src/assets/pageMain/message.svg"
										alt=""
									/>
								</div>
								<a href="#">Телеграм-бот</a>
							</div>
						</div>
						<div className="chats">
							<div className="chat chat__1">
								<h3 className="chat__title">Чат игроков</h3>
								<img
									src="src/assets/pageMain/main_placeholder-1.png"
									alt=""
								/>
							</div>
							<div className="chat chat__2">
								<h3 className="chat__title">Чат партнёров</h3>
								<img
									src="src/assets/pageMain/main_placeholder-2.png"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="main-bottom__right">
						<div className="last-users">
							<h2 className="last-users__title">Последние регистрации</h2>
							<div className="last-users__top">
								<p className="last-users__top_text">Страна</p>
								<p className="last-users__top_text">E-mail</p>
								<p className="last-users__top_text">Дата</p>
							</div>
							<User />
							<User />
							<User />
							<User />
							<User />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuctionsPage;
