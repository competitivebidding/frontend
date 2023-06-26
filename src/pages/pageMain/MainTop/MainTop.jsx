import React from "react";

import "./MainTop.scss"

import { RoyalAction } from './RoyalAction/RoyalAction.jsx'
import { ProgressList } from './ProgressList/ProgressList.jsx'
import { Mission } from './Mission/Mission.jsx'
import { Stats } from './Stats/Stats.jsx'

export const MainTop = (props) => {
	return (
		<div className={'main-top'}>

			<div className="top__column1">
				<RoyalAction />

				<Mission
					value={"100 000"}
				/>

				<Stats />
			</div>

			<div className="top__column2">
				<ProgressList />
			</div>
		</div>
	)
}
