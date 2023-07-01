import React from 'react'
import AuctionList from '../auctions-list/AuctionList'
import './AuctionsPageContent.scss'
import { GetAuctionQuery } from '../../../../shared/types/gql/graphql'

interface IAuctionsPageContent {
  data: GetAuctionQuery
}

const AuctionsPageContent = ({ data }: IAuctionsPageContent) => {
    console.log(data)
  return (
    <div>
      {/* <div className="title">Upcoming announcements </div>
      <Slider data={data.filter(card => (card.status == 'wait'))}/> */}
      <div className='title'>Announcement Auctions</div>
        {/*<AuctionSlider data={data.filter(card => (card.status === 'wait'))}/>*/}
        {/*<AuctionSlider data={data}/>*/}
      <div className="title">Active Auctions</div>
      {/*<AuctionList data={data.filter(card => (card.status === 'Open'))} />*/}
        {data && <AuctionList data={data}/>}
    </div>
  )
}

export default AuctionsPageContent;
