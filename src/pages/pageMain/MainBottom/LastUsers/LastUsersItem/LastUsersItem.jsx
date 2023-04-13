import React from "react"

import "./LastUsersItem.scss"


export const LastUsersItem = (props) => {
	return (
		<div className="user">
			<div className="user__circle-img">
				{props.country}
			</div>
			<div className="user__info">
				<p className="user__info_name">{props.username}</p>
				<p className="user__info_id">ID: {props.id}</p>
			</div>
			<div className="user__time">
				<time className="user__time_data">{props.date}</time>
				<time className="user__time_time">{props.time}</time>
			</div>
		</div>
	)
}
