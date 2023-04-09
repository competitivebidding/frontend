import React from "react";

import './ListItem.scss'

const ListItem = (props) => {
	return (
		<li className={`item ${props.styles}`}>
			<div className="item__value">{props.value}</div>
			<span className="item__marker">
				{props.text}
			</span>
		</li>
	)
}

export default ListItem
