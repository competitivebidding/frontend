import React from 'react';

import "./MainBottom.scss"

import { Socials } from '../../../socials/Socials'
import { LastUsersList } from '../../../last-users-list/LastUsersList';

export const MainBottom = (props) => {
	return (
		<div className="main-bottom">

			<div className="main-bottom__left">

				<Socials />

				{/*<Chats />*/}

			</div>

			<div className="main-bottom__right">

				<LastUsersList />

			</div>

		</div>
	)
}
