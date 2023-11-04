import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_LOT } from '../../schemas/auctions/lot';
import cls from './lot.module.scss';  // Импортируем CSS-модули
import watch from '@assets/temporary-auctions-img/watch.png';
import { CREATE_MY_BID, GET_BIDS_BY_AUCTION_ID } from '../../schemas/auctions/auctions';
import { useTranslation } from 'react-i18next'

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
  const { id } = useParams();
  const { t } = useTranslation('auctionsPage')

  const onToggleShowMore = () => {
    setIsShowMore((prevState) => !prevState);
  }

  const { data: datas, loading } = useQuery(GET_LOT, { variables: { auctionId: Number(id) } });
  const { data: auctionBids } = useQuery(GET_BIDS_BY_AUCTION_ID, { variables: { auctionId: Number(id) } });

  const [createBid, { data: bidData }] = useMutation(CREATE_MY_BID);

  const toDate = (date: string) => {
    return new Date(date).toLocaleString();
  }

  const handleCreateBid = () => {
    createBid({
      variables: {
        input: { auctionId: Number(id), bitPrice: 20 },
      },
    }).then((result) => console.log(result));
  }

  return (
      <>
        { (
            <>
              <Link to="/auctions">
                <button className={cls['return--btn']}>Auctions</button>
              </Link>
              <div className={cls['page__content']}>
                <div className={cls['lot']}>
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
                        <div className={cls['lot__title']}>{datas?.getAuction.title}</div>
                        <div className={cls['lot__price']}>{'$' + datas?.getAuction.startingPrice}</div>
                      </div>
                      <div className={cls['lot__header__col__right']}>
                        <div className={cls['lot__places']}>{t('Free places')}:</div>
                        {datas && datas.getAuction.bids && <span>{30 - datas?.getAuction.bids?.length} {t('from')} 30</span>}
                      </div>
                    </div>
                    <div className={`${cls['lot__description']} ${isShowMore ? cls['shown'] : ''}`}>{datas?.getAuction.description}</div>
                    <a href="#" className={cls['lot__more']} onClick={onToggleShowMore}>
                      <span>{t('Read more')}</span>
                    </a>
                    <div className={cls['lot__footer']}>
                      <button className={cls['lot__footer-btn']} onClick={handleCreateBid}>
                        <span>{t('Outbid')}</span> <span> 20 ROTO</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={cls['clicks__history']}>
                  <span>{t('Click history')}:</span>
                  <div className={cls['clicks__history__users']}>
                    {auctionBids &&
                        auctionBids.getBidsByAuctionId.map((bid) => (
                            <div key={bid.id} className={cls['clicks__history__users__item']}>
                              <span>{bid.user?.username}</span>
                              <span className={cls['time']}>{toDate(bid.createdAt)}</span>
                            </div>
                        ))}
                  </div>
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
