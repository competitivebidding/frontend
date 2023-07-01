import React from "react";

import "./MainTop.scss"

import { RoyalAuction } from '../../../royal-auction/RoyalAuction.js'
import { ProgressList } from '../../../progress/ui/progress-list/ProgressList.js'
import { Mission } from '../../../mission/Mission.tsx'
import { StatsList } from '../../../../entities/stats/ui/stats-list/StatsList.jsx'

export const MainTop = () => {
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
