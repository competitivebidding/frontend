import React from "react";

import './Clue.scss'

export const Clue = (props) => {

	return (
		<button
			data-clue={props.info}
			className={'more-info clue'}
		>?</button>
	)
}
