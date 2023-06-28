import React from "react";

import "./SocialIcon.scss"

export const SocialIcon = (props) => {
	return (
		<div className="social__item">
			<div className="social__item_wrap">
				<img
					src={props.imageSrc}
					alt=""
				/>
			</div>
			<a href="#">{props.link}</a>
		</div>
	)
}
