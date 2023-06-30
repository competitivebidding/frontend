import React from "react";

import './TooltipButton.scss';

export const TooltipButton = (props) => {

	return (
		<button
			data-clue={props.info}
			className={'more-info clue'}
		>?</button>
	)
}
