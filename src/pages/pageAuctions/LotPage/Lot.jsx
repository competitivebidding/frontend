import React, { useEffect , useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_LOT } from "../../../components/server/lot";

import './lot.scss';
import watch from '../img/watch.png'

const Lot = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const [lotData, setLotData] = useState(null)

    const { id } = useParams();


    const { data : datas, loading } = useQuery(GET_LOT, {
        variables: {
            auctionId: Number(id)
        }
    })

    useEffect(() => {
        if (!loading) {
            setLotData(datas.getAuction)
        }
    }, [datas]);

    console.log(lotData)


    const onToggleShowMore = () => {
        setIsShowMore((t) => !t)
    }

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
        {lotData && (
        <>
            <Link to='/auctions'>
                <button className='return--btn'>Auctions</button>
            </Link>
            <div className='page__content'>
                <div className='lot'>
                    <div className='lot__imgbox'>
                        <div className="lot__imgbox-body">
                            <img src={watch} alt={'watch'} />
                            <div className="deposit">
                                <div className="deposit__price">
                                    <div className="price__title">200 ROTO</div>
                                    <span>Deposite</span>
                                </div>
                            </div>
                            <div className='lot__auction'>
                                <div className='lot__auction__names'>
                                    <span>Viktory.mrs</span>
                                </div>
                                <div className='lot__auction__timer'>
                                    <span>00</span> : <span>00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lot__content'>
                        <div className='lot__header'>
                            <div className='lot__header__col__left'>
                                <div className='lot__title'>{lotData.title}</div>
                                <div className='lot__price'>{'$' + data.price}</div>
                            </div>
                            <div className='lot__header__col__right'>
                                <div className='lot__places'>Free places:</div>
                                <span>{data.places} from 30</span>
                            </div>
                        </div>
                        <div className={`lot__description ${isShowMore ? 'shown' : ''}`}>
                            {lotData.description}
                        </div>
                        <a href='#'
                            className='lot__more'
                            onClick={onToggleShowMore}>
                            <span>Read more</span>
                        </a>
                        <div className="lot__footer">
                            <button className="lot__footer-btn" >
                                <span>outbid</span> <span> 20 ROTO</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='clicks__history'>
                    <span>Click history:</span>
                    <div className='clicks__history__users'>
                        <div className='clicks__history__users__item'>
                            <span>@mur.mur</span>
                            <span className='time'>12:43</span>
                        </div>
                        <div className='clicks__history__users__item'>
                            <span>@mur.mur</span>
                            <span className='time'>12:43</span>
                        </div>
                        <div className='clicks__history__users__item'>
                            <span>@mur.mur</span>
                            <span className='time'>12:43</span>
                        </div>
                        <div className='clicks__history__users__item'>
                            <span>@mur.mur</span>
                            <span className='time'>12:43</span>
                        </div>
                        <div className='clicks__history__users__item'>
                            <span>@mur.mur</span>
                            <span className='time'>12:43</span>
                        </div>
                        <div className='clicks__history__users__item'>
                            <span>@mur.mur</span>
                            <span className='time'>12:43</span>
                        </div>
                        <div className='clicks__history__users__item'>
                            <span>@mur.mur</span>
                            <span className='time'>12:43</span>
                        </div>
                        <div className='clicks__history__users__item'>
                            <span>@mur.mur</span>
                            <span className='time'>12:43</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page__footer'>
                <div className='category'>
                    <span>Category:</span>
                    <div className='category__name' >Gadgets</div>
                </div>
                {/*<div className='autoClick'>*/}
                {/*    <span>Autoclick</span>*/}
                {/*</div>*/}
            </div>
        </> )
    }
    </>
    );
}

export default Lot;
