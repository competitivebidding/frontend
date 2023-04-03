import React from "react";

import "./Stats.scss"

const Stats = (props) => {
	return (
		<div className="stats__item">
			<div className="stats_title">{props.title}</div>
			<div className="stats__content">{props.text}</div>
			<div className="stats__image">
				<img src={props.image || ""} alt="" />
			</div>
		</div>
	)
}


export default Stats