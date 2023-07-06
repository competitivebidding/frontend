import React from 'react'
import './NewsListItem.scss'

interface IWesListItem {
  images: string[]
  title: string
  date: string
  text: string
}

const NewsListItem = ({ images, title, date, text }: IWesListItem) => {
  const newDate = new Date(date)
  const ImgItem = () => {
    if (images && typeof images === 'object') {
      const getImages = images.map((image) => (
        <img src={image || '/src/pages/page-news/temporary-auctions-img/quare.png'} alt={''} />
      ))
      return <div className="listItem__imgbox">{getImages}</div>
    } else {
      return (
        <div className="listItem__imgbox">
          <img src={images || '/src/pages/page-news/temporary-auctions-img/quare.png'} alt={''} />
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
