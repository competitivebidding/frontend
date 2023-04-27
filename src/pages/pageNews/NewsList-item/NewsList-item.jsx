import React from 'react'
import './NewsList-item.scss'

const NewsListItem = ({ images, title, date, text }) => {
	const newDate = new Date(date)
	const ImgItem = () => {
		if (images && typeof images === 'object') {
			const getImages = images.map(image => <img src={image || "/src/pages/pageNews/img/quare.png"} alt={""} />)
			return (
				<div className="listItem__imgbox">
					{getImages}
				</div>
			)
		} else {
			return (
				<div className="listItem__imgbox">
					<img src={images || "/src/pages/pageNews/img/quare.png"} alt={""} />
				</div>
			)
		}
	}

	return (
		<div className="listItem">
			<ImgItem />
			<div className="lsitItem__header">
				<div className="listItem__title">{title}</div>
				<div className="listItem__date">{newDate.toUTCString()}</div>
			</div>
			<div className="listItem__text">{text}</div>
		</div>
	)
}

export default NewsListItem
