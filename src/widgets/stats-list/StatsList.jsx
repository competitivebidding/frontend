import React from "react";

import { StatsItem } from "../stats-item/StatsItem";

import "./StatsList.scss"

import StatsData from "./Data/StatsData.js"

export const StatsList = (props) => {

	const getData = StatsData.map((stat) => {
		return <StatsItem
			key={stat.id}
			styles={stat.styles}
			title={stat.title}
			text={stat.text}
			image={stat.image}
		/>
	})

	return (
		<div className="main__stats">
			{getData}
		</div>
	)
}
