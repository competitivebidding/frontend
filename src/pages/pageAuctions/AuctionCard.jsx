import React, { useState } from 'react';
import './AuctionCard.scss';

const AuctionCard = ({ img, alt, name, date, price }) => {

    // let clazz = 'card';
    const [clazz, getClass] = useState('card');


    const onJoin = ()=>{
        if(clazz === 'card'){
            getClass(clazz + ' active')
        }
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
                    <span>Vacant places:</span><span>0 from 30</span>
                </div>
                <div className="card__start">
                    <span>Start in:</span><span>{date}</span>
                </div>
                <button className='card__btn'
                    onClick={onJoin}>
                    <span>Join</span>
                </button>
            </div>
        </div>
    );
}

export default AuctionCard;
