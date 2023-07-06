import React from 'react'
import './AuctionsInfo.scss'

import macbook from '@assets/cabinet/macbook_menu 1.png'
import iphone from '@assets/cabinet/image 51.png'
import AuctionItemCard from '../../../../../../shared/ui/auction-item-card/AuctionItemCard'

interface IAuctionsInfoProps {
  amount: number
  wins: number
  winsSum: number
  rotoSpent: number
  auctions: number
}

export function AuctionsInfo({ amount, wins, winsSum, rotoSpent, auctions }: IAuctionsInfoProps) {
  return (
    <div className="auctions__info">
      <div className="cabinet-block amount">
        <div className="amount__header">
          <h3 className="item__text">Auctions amount</h3>
          <span className="item__count">{amount}</span>
        </div>
        <div className="amount__body">
          <div className="item__card">
            <div className="item__card-title">iPhone 12 128Gb</div>
            <div className="item__card-image">
              <img src={iphone} alt="macbook" />
            </div>
          </div>
          <div className="item__card">
            <div className="item__card-title">Apple Watch SE</div>
            <div className="item__card-image">
              <img src={macbook} alt="macbook" />
            </div>
          </div>
          <div className="item__card">
            <div className="item__card-title">Кольцо Cartier</div>
            <div className="item__card-image">
              <img src={macbook} alt="macbook" />
            </div>
          </div>
          <div className="item__card">
            <div className="item__card-title">MacBook Pro 2017 265Gb 8Gb</div>
            <div className="item__card-image">
              <img src={macbook} alt="macbook" />
            </div>
          </div>
        </div>
        <div className="amount__footer">
          <a href="#" className="item__link">
            See everything{' '}
          </a>
        </div>
      </div>
      <div className="cabinet-block winsCount">
        <div className="winsCount__description">
          <p className="item__count">5</p>
          <h3 className="item__text">Auctions won</h3>
          <a href="#" className="item__link">
            See everything{' '}
          </a>
        </div>
        <div className="winsCount__awards">
          <AuctionItemCard title={'MacBook Pro 2017 265Gb 8Gb'} image={macbook} />

          <div className="item__card">
            <div className="item__card-title">MacBook Pro 2017 265Gb 8Gb</div>
            <div className="item__card-image">
              <img src={macbook} alt="macbook" />
            </div>
          </div>
          <div className="item__card">
            <div className="item__card-title">MacBook Pro 2017 265Gb 8Gb</div>
            <div className="item__card-image">
              <img src={macbook} alt="macbook" />
            </div>
          </div>
          <div className="item__card">
            <div className="item__card-title">MacBook Pro 2017 265Gb 8Gb</div>
            <div className="item__card-image">
              <img src={macbook} alt="macbook" />
            </div>
          </div>
        </div>
      </div>
      <div className="cabinet-block rotoSpent">
        <div className="rotoSpent__body">
          <span className="item__count">10</span>
          <h3 className="item__text">Spent ROTO</h3>
        </div>
      </div>
      <div className="cabinet-block winsSum">
        <div className="winsSum__body">
          <span className="item__count">400 000 р.</span>
          <h3 className="item__text">The amount of winnings</h3>
        </div>
      </div>
    </div>
  )
}
