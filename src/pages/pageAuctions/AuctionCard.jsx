import React, { useState } from 'react';
import './AuctionCard.scss';

const AuctionCard = ({ img, alt, name, date, price, places }) => {

    const [clazz, getClass] = useState('card');
    const [place, addPlace] = useState(places)
    const [timer, setTimer] = useState('off');

    const Timer = () => {

        const t = Date.parse(date) - new Date();
        let years = Math.floor(Date.parse(date) / (1000 * 60 * 60 * 24 * 30 * 12)),
            mounth = Math.floor(Date.parse(date)  / (1000 * 60 * 60 * 24 * 30) % 12),
            days = Math.floor(Date.parse(date)  / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
        console.log(Date.parse)


        if (timer === 'off') {
            return (
                <div className='card__start'>
                    <span>Start in:</span><span>{days}/{mounth}/{years}</span>
                </div>
            )
        }
        if (timer === 'on') {
            return (
                <div className='timer'>
                    <div>Start in:</div>
                    <div className='timer__timeRemaning'>
                        <span>{hours}</span>:
                        <span>{minutes}</span>:
                        <span>{seconds}</span>
                    </div>
                </div>
            )
        }
    }

    const onJoin = () => {
        if (clazz === 'card') {
            getClass(clazz + ' active')
        }
        addPlace(place + 1);
        setTimer('on')
    }


    return (
        <div className={clazz}>
            <div className="card__imgbox">
                <div className="deposit">
                    <div className="deposit__price">
                        <div className='price__title'>200 ROTO</div>
                        <span>Deposite</span>
                    </div>
                </div>
                <img src={img} alt={alt} />
                <div className="click__price">
                    <div className="price__title">20 ROTO</div>
                    <span>Click price</span>
                </div>
            </div>
            <div className='cardContent'>
                <div className="cardHeader">
                    <span className="card__name">{name}</span>
                    <span className="card__price">{price}</span>
                </div>
                <div className="card__places">
                    <span>Vacant places:</span><span>{place} from 30</span>
                </div>
                {Timer()}
                <button className='card__btn'
                    onClick={onJoin}>
                    <span>Join</span>
                </button>
            </div>
        </div>
    );
}

export default AuctionCard;
