import React, {lazy} from 'react';
import cls from './AuctionsInfo.module.scss';
import macbook from '@assets/cabinet/macbook_menu 1.png';
import iphone from '@assets/cabinet/image 51.png';
import { useTranslation } from 'react-i18next'
import {useQuery} from "@apollo/client";
import {GetMyWonAuctionsDocument} from "@shared/lib/types/__generated-types__/graphql";

const  AuctionItemCard = lazy(() => import( '@shared/ui/auction-item-card/AuctionItemCard'))

interface IAuctionsInfoProps {
  amount: number;
  wins: number;
  winsSum: number;
  rotoSpent: number;
  auctions: number;
}

export function AuctionsInfo({ amount, wins, winsSum, rotoSpent, auctions }: IAuctionsInfoProps) {
  const { t } = useTranslation('auctionsPage')

  const {data} = useQuery(GetMyWonAuctionsDocument)

  console.log(data?.getMyWonAuctions)

  return (
      <div className={cls['auctions__info']}>
        <div className={`${cls['cabinet-block']} ${cls.amount}`}>
          <div className={cls['amount__header']}>
            <h3 className={cls['item__text']}>{t('Auctions amount')}</h3>
            <span className={cls['item__count']}>{amount}</span>
          </div>
          <div className={cls['amount__body']}>
            <div className={cls['item__card']}>
              <div className={cls['item__card-title']}>iPhone 12 128Gb</div>
              <div className={cls['item__card-image']}>
                <img src={iphone} alt="macbook" />
              </div>
            </div>
            <div className={cls['item__card']}>
              <div className={cls['item__card-title']}>Apple Watch SE</div>
              <div className={cls['item__card-image']}>
                <img src={macbook} alt="macbook" />
              </div>
            </div>
            <div className={cls['item__card']}>
              <div className={cls['item__card-title']}>Кольцо Cartier</div>
              <div className={cls['item__card-image']}>
                <img src={macbook} alt="macbook" />
              </div>
            </div>
            <div className={cls['item__card']}>
              <div className={cls['item__card-title']}>MacBook Pro 2017 265Gb 8Gb</div>
              <div className={cls['item__card-image']}>
                <img src={macbook} alt="macbook" />
              </div>
            </div>
          </div>
          <div className={cls['amount__footer']}>
            <a href="#" className={cls['item__link']}>
            {t('See everything')}
            </a>
          </div>
        </div>
        <div className={`${cls['cabinet-block']} ${cls.winsCount}`}>
          <div className={cls['winsCount__description']}>
            <p className={cls['item__count']}>5</p>
            <h3 className={cls['item__text']}>{t('Auctions won')}</h3>
            <a href="#" className={cls['item__link']}>
              {t('See everything')}
            </a>
          </div>
          <div className={cls['winsCount__awards']}>
            <AuctionItemCard title={'MacBook Pro 2017 265Gb 8Gb'} image={macbook} />

            <div className={cls['item__card']}>
              <div className={cls['item__card-title']}>MacBook Pro 2017 265Gb 8Gb</div>
              <div className={cls['item__card-image']}>
                <img src={macbook} alt="macbook" />
              </div>
            </div>
            <div className={cls['item__card']}>
              <div className={cls['item__card-title']}>MacBook Pro 2017 265Gb 8Gb</div>
              <div className={cls['item__card-image']}>
                <img src={macbook} alt="macbook" />
              </div>
            </div>
            <div className={cls['item__card']}>
              <div className={cls['item__card-title']}>MacBook Pro 2017 265Gb 8Gb</div>
              <div className={cls['item__card-image']}>
                <img src={macbook} alt="macbook" />
              </div>
            </div>
          </div>
        </div>
        <div className={`${cls['cabinet-block']} ${cls.rotoSpent}`}>
          <div className={cls['rotoSpent__body']}>
            <span className={cls['item__count']}>10</span>
            <h3 className={cls['item__text']}>{t('Spent')} ROTO</h3>
          </div>
        </div>
        <div className={`${cls['cabinet-block']} ${cls.winsSum}`}>
          <div className={cls['winsSum__body']}>
            <span className={cls['item__count']}>400 000 R.</span>
            <h3 className={cls['item__text']}>{t('The amount of winnings')}</h3>
          </div>
        </div>
      </div>
  );
}
