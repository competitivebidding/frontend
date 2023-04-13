import React from "react";

import "./ChatsItem.scss"


export const ChatsItem = (props) => {
	return (
		<div className={`chat ${props.chat__1 || ""}`}>
			<h3 className="chat__title">{props.title}</h3>
			<img
				src={props.imageSrc} //"src/assets/pageMain/main_placeholder-1.png"
				alt=""
			/>
		</div>
	)
}