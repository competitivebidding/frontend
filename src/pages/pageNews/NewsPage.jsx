import React from 'react'
import AppHeader from '../../widgets/Header/AppHeader.jsx'
import NewsList from './NewsList/NewsList'

import { useQuery } from '@apollo/client'
import { ALL_NEWS } from '../../shared/schemas/news/news.js'

const NewsPage = ({ title }) => {
	// Эмитация базы данных. Данные будут приходить с бэка
	const { loading, error, data } = useQuery(ALL_NEWS)
	//error, data

	if (loading) {
		return <h2 style={{ "color": "ffffff" }}>Loading...</h2>
	}


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
