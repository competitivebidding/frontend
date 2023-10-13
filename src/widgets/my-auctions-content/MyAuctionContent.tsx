import React, { useState } from 'react'
import './MyAuctionContent.scss'
import { AuctionList } from '@entities/auction/ui/auctions-list/AuctionList'
import { IAuctionData } from '@pages/my-auctions/MyAuctionsPage'

const MyAuctionContent = () => {
  const [category, changeCategory] = useState('active')

  const onChangeActive = () => {
    changeCategory('active')
  }

  const onChangeAnnounce = () => {
    changeCategory('wait')
  }

  const onChangeInactve = () => {
    changeCategory('end')
  }

  const btnsData = [
    { name: 'active', onClick: onChangeActive, label: 'Active auctions' },
    { name: 'wait', onClick: onChangeAnnounce, label: 'Announcements' },
    { name: 'end', onClick: onChangeInactve, label: 'Inactive auctions' },
  ]

  const btns = btnsData.map(({ name, label, onClick }) => {
    const active = category == name
    const clazz = active ? 'btn-active' : 'btn-inactive'

    return (
      <button className={`myAuction__btn ${clazz}`} type="button" key={name} onClick={onClick}>
        {label}
      </button>
    )
  })

  return (
    <div className="myAuctions__content">
      <div className="myAuctions__btnsgroup">{btns}</div>
      <AuctionList  />
    </div>
  )
}

export default MyAuctionContent
