import React from 'react';

import './MainPage.scss';

import AppHeader from '../../components/appHeader/AppHeader.jsx';

import { MainTop } from './MainTop/MainTop';

import { MainBottom } from './MainBottom/MainBottom';


const AuctionsPage = ({ title }) => {
	return (
		<>
			<AppHeader title={title} />

			<div>

				<MainTop />

				<MainBottom />

			</div>
		</>
	);
};

export default AuctionsPage;
