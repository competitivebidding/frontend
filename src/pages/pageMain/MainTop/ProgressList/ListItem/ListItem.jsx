import React from "react";

import './ListItem.scss'

export const ListItem = ({styles, value, text}) => {
	return (
		<li className={`listItem-item ${styles}`}>
			<div className="item__value">{value}</div>
			<span className="item__marker">
				{text}
			</span>
		</li>
	)
}

