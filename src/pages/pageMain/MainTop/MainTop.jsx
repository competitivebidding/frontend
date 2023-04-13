import React from "react";

import "./MainTop.scss"

import { RoyalAction } from './RoyalAction/RoyalAction.jsx'
import { ProgressList } from './ProgressList/ProgressList.jsx'
import { Mission } from './Mission/Mission.jsx'
import { Stats } from './Stats/Stats.jsx'

export const MainTop = (props) => {
	return (
		<div className={'main-top'}>

			<RoyalAction />

			<ProgressList />

			<Mission
				value={"100000"}
			/>

			<Stats />

		</div>
	)
}