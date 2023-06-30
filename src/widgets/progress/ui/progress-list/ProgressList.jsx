import React, { useState } from "react"

import { ProgressItem } from '../progress-item/ProgressItem';

import "./ProgressList.scss"

import ProgressListData from "./Data/ProgressListData.js"

export const ProgressList = (props) => {

	const getData = ProgressListData.map((list) => {
		return <ProgressItem
			key={list.value}
			styles={list.styles}
			text={list.text}
			value={list.value}
		/>
	})

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={`main__howItWorks ${isOpen ? "open" : ""}`}>
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
			<button className="accordion-btn" onClick={() => setIsOpen(!isOpen)}>Развернуть<span></span></button>

		</div>
	)
}
