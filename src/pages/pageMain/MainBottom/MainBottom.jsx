import React from 'react';

import "./MainBottom.scss"

import { Social } from '../Social/Social'
import { Chats } from '../Chats/Chats';
import { LastUsers } from '../LastUsers/LastUsers';

export const MainBottom = (props) => {
	return (
		<div className="main-bottom">

			<div className="main-bottom__left">

				<Social />

				<Chats />

			</div>

			<div className="main-bottom__right">

				<LastUsers />

			</div>

		</div>
	)
}