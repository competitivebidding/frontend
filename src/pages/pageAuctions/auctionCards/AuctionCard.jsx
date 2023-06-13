import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './AuctionCard.scss'
import AuctionCardTimer from './AuctionCardTimer'

const AuctionCard = ({ img, id, alt, title, date, bids, places, changeStatus, startedAt, }) => {

  const [clazz, setClass] = useState('card');
  const [place, setPlace] = useState(places);
  const [timer, setTimer] = useState(false);
  const [join, setJoin] = useState(false);

  const onJoin = () => {
    setJoin(!join)
    setClass(clazz === 'card' ? clazz + ' active' : 'card')
    setTimer(!timer)
    setPlace(place + 1)
    // changeStatus(id, 'wait')
  }


  // const auctionDate = new Intl.DateTimeFormat('ru', {
  //   day: 'numeric',
  //   month: 'numeric',
  //   year: 'numeric',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(Date.parse(date))

  const formattedDate = new Date(startedAt).toLocaleString();



  const StartDate = () => {
    if (!timer) {
      return (
        <div className="card__start">
          <span>Start in:</span>
          <span>{formattedDate}</span>
        </div>
      )
    } else {
      return null
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
          <span className="card__price">{'$' + 1}</span>
        </div>
        <div className="card__places">
          <span>Vacant places:</span>
          <span>{place} from 30</span>
        </div>
        <StartDate />
        <AuctionCardTimer date={date} timer={timer} changeStatus={changeStatus} id={id} />
        <Link to={`/Lot/${id}`} >
          <button className="card__btn" onClick={onJoin}>
            <span> Read More </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AuctionCard;
