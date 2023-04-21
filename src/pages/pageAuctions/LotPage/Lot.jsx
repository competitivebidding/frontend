import React, { useState } from 'react';

import './lot.scss';

const Lot = () => {

    const [data, setData] = useState({
        img: '/src/pages/pageAuctions/img/quare.png',
        alt: 'img',
        name: 'Apple Watch SE 44mm',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2023-04-11T23:00',
        price: '50',
        places: 12,
        status: 'active',
        id: 1,
    },)

    return (
        <>
            <button className='return--btn'>Auctions</button>
            <div className='lot'>
                <div className='lot__imgbox'>
                    <img src={data.img} alt={data.name} />
                    <div className="deposit">
                        <div className="deposit__price">
                            <div className="price__title">200 ROTO</div>
                            <span>Deposite</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='lot__header'>
                        <div className='lot__header__col__left'>
                            <div className='lot__title'>{data.name}</div>
                            <div className='lot__price'>{data.price + '$'}</div>
                        </div>
                        <div className='lot__header__col__right'>
                            <div className='lot__places'>Free places:</div>
                            <span>{data.places} from 30</span>
                        </div>
                    </div>
                    <div className='lot__discription'>{data.discription}</div>
                    <a href='#' className='lot__more'>Read more</a>
                <button className="card__btn">
                    <span> +++ </span>
                </button>
                </div>
            </div>
        </>
    );
}

export default Lot;
