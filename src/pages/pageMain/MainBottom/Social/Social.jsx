import React from "react";

import "./Social.scss"


import SocialData from "./Data/SocialData.js";

import { SocialItem } from "./SocialItem/SocialItem.jsx"

export const Social = (props) => {

	const getData = SocialData.map(item => {
		return <SocialItem
			key={item.id}
			imageSrc={item.imageSrc}
			link={item.link}
		/>
	})

	return (
		<div className="social">
			{getData}
		</div>
	)
}
