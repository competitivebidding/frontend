import React from "react";


import "./Mission.scss"

const Mission = (props) => {
	return (
		<div className={'main__mission'}>
			<div className={'mission__title'}>Mission</div>
			<div className={'mission__subtitle'}>
				{props.value}lucky people who won the auction
				<span>{props.value}</span>
			</div>
			<div className={'mission__progressBar'}>
				<span></span>
			</div>
		</div>
	)
}

export default Mission