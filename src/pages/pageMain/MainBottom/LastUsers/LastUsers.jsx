import React from 'react';

import "./LastUsers.scss"

import { LastUsersItem } from './LastUsersItem/LastUsersItem.jsx';

import LastUsersData from './Data/LastUsersData.js';

export const LastUsers = (props) => {

	const getData = LastUsersData.map(user => {
		return <LastUsersItem
			key={user.id}
			country={user.country}
			username={user.username}
			id={user.id}
			date={user.date}
			time={user.time}
		/>
	})

	return (
		<div className="last-users">
			<h2 className="last-users__title">Latest registrations</h2>
			<div className="last-users__top">
				<p className="last-users__top_text">Country</p>
				<p className="last-users__top_text">E-mail</p>
				<p className="last-users__top_text">Date</p>
			</div>

			{getData}

		</div>

	)
}

