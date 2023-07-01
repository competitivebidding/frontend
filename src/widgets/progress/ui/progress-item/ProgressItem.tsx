import React from "react";

import './ProgressItem.scss'

interface IProgressItemProps {
	styles: string
	value: string
	text: string
}

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

