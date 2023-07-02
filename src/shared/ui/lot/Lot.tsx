import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_LOT } from '../../schemas/auctions/lot';

import './lot.scss';
import watch from '@assets/temporary-auctions-img/watch.png';
import { CREATE_MY_BID, GET_BIDS_BY_AUCTION_ID } from '../../schemas/auctions/auctions';

interface IAuctionData {
    title: string;
    description: string;
}

interface IBid {
    id: string;
    user: {
        username: string;
    };
    createdAt: string;
}

const Lot = () => {
    const [isShowMore, setIsShowMore] = useState(false);
    const [lotData, setLotData] = useState<IAuctionData | null>(null);

    const { id } = useParams();

    const onToggleShowMore = () => {
        setIsShowMore((prevState) => !prevState);
    };

    const { data: datas, loading } = useQuery(GET_LOT, {
        variables: {
            auctionId: Number(id),
        },
    });

    const [createBid, { data: bidData }] = useMutation(CREATE_MY_BID);

    const toDate = (date: string) => {
        return new Date(date).toLocaleString();
    };

    const handleCreateBid = () => {
        createBid({
            variables: {
                input: { auctionId: Number(id), bitPrice: 20 },
            },
        }).then((result) => console.log(result));
    };

    const [data, setData] = useState({
        img: '/src/pages/auctions/temporary-auctions-img/quare.png',
        alt: 'img',
        name: 'Apple Watch SE 44mm',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2023-04-11T23:00',
        price: '50',
        places: 12,
        status: 'active',
        id: 1,
    });

    useEffect(() => {
        if (!loading) {
            setLotData(datas.getAuction);
        }
    }, [datas]);

    console.log(lotData);

    const { data: auctionBids } = useQuery(GET_BIDS_BY_AUCTION_ID, { variables: { auctionId: Number(id) } });
    console.log(auctionBids);

    return (
        <>
            {lotData && (
                <>
                    <Link to="/auctions">
                        <button className="return--btn">Auctions</button>
                    </Link>
                    <div className="page__content">
                        <div className="lot">
                            <div className="lot__imgbox">
                                <div className="lot__imgbox-body">
                                    <img src={watch} alt="watch" />
                                    <div className="deposit">
                                        <div className="deposit__price">
                                            <div className="price__title">200 ROTO</div>
                                            <span>Deposit</span>
                                        </div>
                                    </div>
                                    <div className="lot__auction">
                                        <div className="lot__auction__names">
                                            <span>Viktory.mrs</span>
                                        </div>
                                        <div className="lot__auction__timer">
                                            <span>00</span> : <span>00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lot__content">
                                <div className="lot__header">
                                    <div className="lot__header__col__left">
                                        <div className="lot__title">{lotData.title}</div>
                                        <div className="lot__price">{'$' + data.price}</div>
                                    </div>
                                    <div className="lot__header__col__right">
                                        <div className="lot__places">Free places:</div>
                                        <span>
                                            {data.places} from 30
                                        </span>
                                    </div>
                                </div>
                                <div className={`lot__description ${isShowMore ? 'shown' : ''}`}>{lotData.description}</div>
                                <a href="#" className="lot__more" onClick={onToggleShowMore}>
                                    <span>Read more</span>
                                </a>
                                <div className="lot__footer">
                                    <button className="lot__footer-btn" onClick={handleCreateBid}>
                                        <span>outbid</span> <span> 20 ROTO</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="clicks__history">
                            <span>Click history:</span>
                            <div className="clicks__history__users">
                                {auctionBids &&
                                    auctionBids.getBidsByAuctionId.map((bid: IBid) => (
                                        <div key={bid.id} className="clicks__history__users__item">
                                            <span>{bid.user.username}</span>
                                            <span className="time">{toDate(bid.createdAt)}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="page__footer">
                        <div className="category">
                            <span>Category:</span>
                            <div className="category__name">Gadgets</div>
                        </div>
                        {/*<div className='autoClick'>*/}
                        {/*    <span>Autoclick</span>*/}
                        {/*</div>*/}
                    </div>
                </>
            )}
        </>
    );
};

export default Lot;
