import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_LOT } from '../../schemas/auctions/lot';
import cls from './lot.module.scss';
import watch from '@assets/temporary-auctions-img/watch.png';
import { CREATE_MY_BID, GET_BIDS_BY_AUCTION_ID } from '../../schemas/auctions/auctions';
import { useTranslation } from 'react-i18next'
import {GET_PROFILE_QUERY} from "@shared/schemas/user/userProfile";
import {Skeleton} from "@shared/ui/skeleton/ui/Skeleton";

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

const MAX_BID_PLACES = 30
const BID_PRICE = 200

const Lot = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { id } = useParams();
  const { t } = useTranslation('auctionsPage')

  const onToggleShowMore = () => {
    setIsShowMore((prevState) => !prevState);
  }

  const { data: lotData, loading } = useQuery(GET_LOT, { variables: { auctionId: Number(id) }, pollInterval: 0, partialRefetch: true, canonizeResults: true, refetchWritePolicy: 'merge', nextFetchPolicy: 'cache-first' });
  // const { data: auctionBids } = useQuery(GET_BIDS_BY_AUCTION_ID, { variables: { auctionId: Number(id), skip: 10 },  });
  const {data: userData} = useQuery(GET_PROFILE_QUERY)
  const [createBid, { data: bidData }] = useMutation(CREATE_MY_BID, {refetchQueries: [GET_PROFILE_QUERY, GET_LOT]});

  const toDate = (date: string) => {
    return new Date(date).toLocaleString();
  }

  const handleCreateBid = () => {
    createBid({
      variables: {
        input: { auctionId: Number(id), bitPrice: BID_PRICE },
      },
    });
  }

  const isBidActive = () => {
    return (userData?.getProfile && userData?.getProfile.balance < BID_PRICE || lotData?.getAuction.bids?.length === MAX_BID_PLACES);
  }

  return (
      <>
        { (
            <>
              <Link to="/auctions">
                <button className={cls['return--btn']}>Auctions</button>
              </Link>
              <div className={cls['page__content']}>
                <div className={cls['lot_wrapper']}>
                  <div className={cls['lot']}>
                    {loading ? <Skeleton width={'100%'} height={380}/> :  <>
                      <div className={cls['lot__imgbox']}>
                        <div className={cls['lot__imgbox-body']}>
                          <img src={watch} alt="watch" />
                          <div className={cls['deposit']}>
                            <div className={cls['deposit__price']}>
                              <div className={cls['price__title']}>200 ROTO</div>
                              <span>Deposit</span>
                            </div>
                          </div>
                          <div className={cls['lot__auction']}>
                            <div className={cls['lot__auction__names']}>
                              <span>Viktory.mrs</span>
                            </div>
                            <div className={cls['lot__auction__timer']}>
                              <span>00</span> : <span>00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={cls['lot__content']}>
                        <div className={cls['lot__header']}>
                          <div className={cls['lot__header__col__left']}>
                            <div className={cls['lot__title']}>{lotData?.getAuction.title}</div>
                            <div className={cls['lot__price']}>{'$' + lotData?.getAuction.startingPrice}</div>
                          </div>
                          {/* <div className={cls['lot__header__col__right']}>
                            <div className={cls['lot__places']}>{t('Free places')}:</div>
                            {lotData && lotData.getAuction.bids && <span>{30 - lotData?.getAuction.bids?.length} {t('from')} 30</span>}
                          </div> */}
                        </div>
                        <div className={`${cls['lot__description']} ${isShowMore ? cls['shown'] : ''}`}>{lotData?.getAuction.description}</div>
                        <button className={cls['lot__more']} onClick={onToggleShowMore}>
                          {t('Read more')}
                        </button>
                        <div className={cls['lot__footer']}>
                          {userData?.getProfile && userData?.getProfile.balance < BID_PRICE && <>
                            <p className={cls['lot__footer-pennilessness']}>Ваш баланс меньше текущей ставки</p></>}
                          <button className={cls['lot__footer-btn']}
                                  onClick={handleCreateBid}
                                  disabled={isBidActive()}

                          >
                            <span>{t('Outbid')}</span> <span> 200 ROTO</span>
                          </button>
                        </div>
                      </div>
                    </>
                    }
                  </div>
                </div>
                <div className={cls['clicks__history']}>
                  {
                    loading ? <Skeleton width={'100%'} height={380}/> : <>
                      <span>{t('Click history')}:</span>
                      <ul className={cls['clicks__history__bids']}>
                        {lotData &&
                            lotData.getAuction.bids?.map((bid) => (
                                <li key={bid.id} className={cls['clicks__history__bids__item']}>
                                  <div className={cls['user']}>
                                    <p className={cls['name']}>{bid.user?.username}</p>
                                  </div>
                                  <div className={cls['bids__info']}>
                                    <span className={cls['price']}>{bid.bitPrice} {'ROTO'}</span>
                                    <span className={cls['date']}>{toDate(bid.createdAt)}</span>
                                  </div>
                                </li>
                            )).reverse()}
                      </ul>
                    </>
                  }

                </div>
              </div>
              <div className={cls['page__footer']}>
                <div className={cls['category']}>
                  <span>{t('Category')}:</span>
                  <div className={cls['category__name']}>{t('Gadgets')}</div>
                </div>
              </div>
            </>
        )}
      </>
  )
}

export default Lot;
