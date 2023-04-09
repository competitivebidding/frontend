import React from "react";

import StatsItem from "./StatsItem/StatsItem";

import "./Stats.scss"

import StatsData from "./Data/StatsData.js"

const Stats = (props) => {

	const getData = StatsData.map((stat) => {
		return <StatsItem styles={stat.styles}
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

export default Stats