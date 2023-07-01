import React from 'react'
import NewsListItem from '../news-list-item/NewsListItem'
import './NewsList.scss'

export const NewsList = ({ data }) => {
	const listItem = data.items.map((item) => {
		// const listItem = data.map((item) => {
		const { id, ...itemProps } = item
		return <NewsListItem key={id} {...itemProps} />
	})

	return <div className="newsList">{listItem}</div>
}

