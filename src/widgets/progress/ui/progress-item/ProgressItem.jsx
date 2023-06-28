import React from "react";

import './ProgressItem.scss'

export const ProgressItem = ({ styles, value, text }) => {
	return (
		<li className={`listItem-item ${styles}`}>
			<div className="item__value">{value}</div>
			<span className="item__marker">
				{text}
			</span>
		</li>
	)
}

