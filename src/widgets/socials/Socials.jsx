import React from "react";

import "./Socials.scss"


import SocialData from "./Data/SocialData.js";

import { SocialIcon } from "@/shared/ui/social-icon/SocialIcon"

export const Socials = (props) => {

	const getData = SocialData.map(item => {
		return <SocialIcon
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
