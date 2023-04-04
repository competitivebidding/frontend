import React from 'react';

import "./MainPage.scss"

import AppNavBar from '../../appNavBar/AppNavBar.jsx';
import MainSection from "../../MainSection/MainSection.jsx";
import Stats from './stats/Stats.jsx';

const AuctionsPage = () => {
	return (
		<div className={"main"}>
			<div className={"main__royalAction"}>
				<div className={"royalAction__title"}>Royal Auction</div>
				<div className={"royalAction__text"}>
					This is an international online auction that offers the
					opportunity to bid for the right to purchase goods,
					services, crypto-assets, cars, real estate and other
					things, for 15-20% of their market value

				</div>
				<div className={"royalAction__crown"}><img src={"src/assets/pageMain/royalAuction.png"} /></div>

			</div>
			<div className={"main__howItWorks"}>
				<div className={"howItWorks__title"}>How it works?</div>
				<div className={"howItWorks__subtitle"}>In the <u>auction</u> section, various offers in demand on the
					market are put up for auction: gadgets, electronics, jewelry, cryptocurrencies, cars, and more.
				</div>
				<div className={"howItWorks__progress"}>
					<ul className={"progress__list"}>
						<li className={"item active"}>
							Before the start of the auction for each of the proposals, an announcement appears
							with the date and time of the start of the auction and a set of participants is opened
						</li>
						<li className={"item"}>
							A limited number of people can participate in each offer, set individually for each offer.
						</li>
						<li className={"item"}>
							To participate in the auction, you must have on your balance the internal game currency
							ROTO (Royal Token)
						</li>
						<li className={"item"}>In order to reserve a place and confirm participation in the auction,
							players need to freeze the set number of ROTO tokens before the start.
						</li>
						<li className={"item"}>At the end of the timer, bidding begins immediately and participants
							begin to click on the “buy” button
						</li>
						<li className={"item"}>
							Each click costs a predetermined amount of ROTO on each of the offers.
						</li>
						<li className={"item"}>After each click made, the right to purchase an offer passes to the
							last clicked bidder
						</li>
						<li className={"item"}>If no one has called you back within the set time since your click,
							the offer goes to you!
						</li>
					</ul>
				</div>
			</div>

			<div className={"main__mission"}>
				<div className={"mission__title"}>Mission</div>
				<div className={"mission__subtitle"}>
					100,000 lucky people who won the auction
					<span>100 000</span>
				</div>
				<div className={"mission__progressBar"}>
					<progress id={"mission_load"} max="100" value="70" />
				</div>
			</div>

			<div className="main__stats">
				<Stats
					property="big"
					title="Sum winnings"
					text="1 300 300 r."
				/>
				<Stats
					title="Number of participants"
					text="1345"
				/>
				<Stats
					title="Number of participating countries"
					text="7 "
				/>
				<Stats
					title="Auctions daily"
					text="112"
				/>
				<Stats
					// property="image"
					title="Number of winners"
					text="132"
				// image="src\assets\pageMain\trophy-front-premium.png"
				/>
				<Stats
					title="Withdrawn to partners big"
					text="944 567 r."
				/>
				<Stats
					title="Number of partners"
					text="234"
				/>


			</div>
		</div>
	);
}

export default AuctionsPage;