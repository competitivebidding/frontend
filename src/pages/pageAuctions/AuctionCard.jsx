import React, { useState } from 'react'
import AuctionCardTimer from './AuctionCardTimer'
import './AuctionCard.scss'

const AuctionCard = ({ img, id, alt, name, date, price, places, changeStatus }) => {
  const [clazz, getClass] = useState('card')
  const [place, addPlace] = useState(places)
  const [timer, setTimer] = useState(false)
  const [join, addJoin] = useState('Join')

  const onJoin = () => {
    if (places < 30) {
      if (clazz === 'card') {
        getClass(clazz + ' active')
        addPlace(place + 1)
        setTimer(true)
        addJoin('You Join')
        changeStatus(id, 'wait')
      }
    }
  }

  return (
    <div className={clazz}>
      <div className="card__imgbox">
        <div className="deposit">
          <div className="deposit__price">
            <div className="price__title">200 ROTO</div>
            <span>Deposite</span>
          </div>
        </div>
        <img src={img} alt={alt} />
        <div className="click__price">
          <div className="price__title">20 ROTO</div>
          <span>Click price</span>
        </div>
      </div>
      <div className="cardContent">
        <div className="cardHeader">
          <span className="card__name">{name}</span>
          <span className="card__price">{'$' + price}</span>
        </div>
        <div className="card__places">
          <span>Vacant places:</span>
          <span>{place} from 30</span>
        </div>
        <AuctionCardTimer date={date} timer={timer} changeStatus={changeStatus} id={id} />
        <button className="card__btn" onClick={onJoin}>
          <span>{join}</span>
        </button>
      </div>
    </div>
  )
}

export default AuctionCard
