import React from "react";

import "./Chats.scss"

import ChatsData from "./Data/ChatsData.js"

import { ChatsItem } from "./Chat/ChatsItem";

export const Chats = (props) => {

	const getData = ChatsData.map(chat => {
		return <ChatsItem
			key={chat.id}
			styles={chat.styles}
			title={chat.title}
			imageSrc={chat.imageSrc}
		/>
	})

	return (
		<div className="chats">
			{getData}
		</div>
	)
}
