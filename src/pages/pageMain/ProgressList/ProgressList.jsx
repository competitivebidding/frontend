import React from "react"

import ListItem from './ListItem/ListItem';

import "./ProgressList.scss"

import ProgressListData from "./Data/ProgressListData.js"

const ProgressList = (props) => {

	const getData = ProgressListData.map((list) => {
		return <ListItem styles={list.styles}
			text={list.text}
			value={list.value}
		/>
	})

	return (
		<div className={'main__howItWorks'}>
			<div className={'howItWorks__title'}>How it works?</div>
			<div className={'howItWorks__subtitle'}>
				In the <u>auction</u> section, various offers in demand on the
				market are put up for auction: gadgets, electronics, jewelry,
				cryptocurrencies, cars, and more.
			</div>
			<div className={'howItWorks__progress'}>
				<ul className={'progress__list'}>
					{getData}
				</ul>
			</div>
		</div>
	)
}

export default ProgressList