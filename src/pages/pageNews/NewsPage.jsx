import React from 'react'
import AppHeader from '../../components/appHeader/AppHeader.jsx'
import NewsList from './NewsList/NewsList'

import { useQuery } from '@apollo/client'
import { ALL_NEWS } from '../../components/server/news.js'

const NewsPage = ({ title }) => {
	// Эмитация базы данных. Данные будут приходить с бэка
	const { loading, error, data } = useQuery(ALL_NEWS)
	//error, data

	if (loading) {
		return <h2 style={{ "color": "ffffff" }}>Loading...</h2>
	}


	// const _data = [
	// 	{
	// 		images: [
	// 			'/src/pages/pageNews/img/quare.png',
	// 			'/src/pages/pageNews/img/quare.png'
	// 		],
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi labore provident, corrupti neque doloribus facere voluptates dolores aperiam consequatur architecto, dolor voluptatem! Necessitatibus, dolor aliquam enim eius eos nulla.',
	// 		id: 1,
	// 	},
	// 	{
	// 		images: '/src/pages/pageNews/img/quare.png',
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi labore provident, corrupti neque doloribus facere voluptates dolores aperiam consequatur architecto, dolor voluptatem! Necessitatibus, dolor aliquam enim eius eos nulla.',
	// 		id: 2,
	// 	},
	// 	{
	// 		images: '/src/pages/pageNews/img/quare.png',
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi labore provident, corrupti neque doloribus facere voluptates dolores aperiam consequatur architecto, dolor voluptatem! Necessitatibus, dolor aliquam enim eius eos nulla.',
	// 		id: 3,
	// 	},
	// 	{
	// 		images: [
	// 			'/src/pages/pageNews/img/quare.png',
	// 			'/src/pages/pageNews/img/quare.png'
	// 		],
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi labore provident, corrupti neque doloribus facere voluptates dolores aperiam consequatur architecto, dolor voluptatem! Necessitatibus, dolor aliquam enim eius eos nulla.',
	// 		id: 4,
	// 	},
	// 	{
	// 		images: '/src/pages/pageNews/img/quare.png',
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	// 		id: 5,
	// 	},
	// 	{
	// 		images: [
	// 			'/src/pages/pageNews/img/quare.png',
	// 			'/src/pages/pageNews/img/quare.png'
	// 		],
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	// 		id: 10,
	// 	},
	// 	{
	// 		images: '/src/pages/pageNews/img/quare.png',
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	// 		id: 11,
	// 	},
	// 	{
	// 		images: '/src/pages/pageNews/img/quare.png',
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	// 		id: 6,
	// 	},
	// 	{
	// 		images: [
	// 			'/src/pages/pageNews/img/quare.png',
	// 			'/src/pages/pageNews/img/quare.png'
	// 		],
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	// 		id: 7,
	// 	},
	// 	{
	// 		images: '/src/pages/pageNews/img/quare.png',
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	// 		id: 8,
	// 	},
	// 	{
	// 		images: '/src/pages/pageNews/img/quare.png',
	// 		date: '16/02/2023   22:32',
	// 		alt: 'News Image',
	// 		title: 'Lorem ipsum',
	// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
	// 		id: 9,
	// 	},
	// ]

	if (error) {
		return <h2>Error while getting data...</h2>
	}

	return (
		<>
			<AppHeader title={title} />
			<div>
				<NewsList data={data.news} />
				{/* <NewsList data={_data} /> */}

			</div>
		</>
	)
}

export default NewsPage;
