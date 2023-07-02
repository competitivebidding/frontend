import React from "react";

import "./SocialIcon.scss"

interface Iprops {
	props: {
		imageSrc: string;
		link: string;
	}
}

export const SocialIcon = ({props}: Iprops) => {
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
