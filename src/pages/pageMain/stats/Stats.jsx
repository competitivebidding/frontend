import React from "react";

import StatsItem from "./StatsItem/StatsItem";

const Stats = (props) => {
	return (
		<div className="main__stats">
			<StatsItem
				property="big"
				title="Sum winnings"
				text="1 300 300 r."
			/>
			<StatsItem
				title="Number of participants"
				text="1345"
			/>
			<StatsItem
				title="Number of participating countries"
				text="7 "
			/>
			<StatsItem
				title="Auctions daily"
				text="112"
			/>
			<StatsItem
				// property="image"
				title="Number of winners"
				text="132"
			// image="src\assets\pageMain\trophy-front-premium.png"
			/>
			<StatsItem
				title="Withdrawn to partners big"
				text="944 567 r."
			/>
			<StatsItem
				title="Number of partners"
				text="234"
			/>
		</div>
	)
}

export default Stats