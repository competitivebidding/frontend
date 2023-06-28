import React from "react";

import "./MainTop.scss"

import { RoyalAuction } from '../../../royal-auction/RoyalAuction.jsx'
import { ProgressList } from '../../../progress/ui/progress-list/ProgressList.jsx'
import { Mission } from '../../../mission/Mission.jsx'
import { StatsList } from '../../../stats-list/StatsList.jsx'

export const MainTop = (props) => {
	return (
		<div className={'main-top'}>

			<div className="top__column1">
				<RoyalAuction />

				<Mission
					value={"100 000"}
				/>

				<StatsList />
			</div>

			<div className="top__column2">
				<ProgressList />
			</div>
		</div>
	)
}
