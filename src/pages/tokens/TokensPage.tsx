import React, { useState } from 'react'
import AppHeader from '@widgets/header/AppHeader.js'
import './TokensPage.scss'
import TokenCard from '@entities/token-card/TokenCard.jsx'



const TokensPage = ({ title }) => {
  const data = [{
    tokens: '1 000 ROTO',
    prize: '12 $',
    buttonName: 'Buy',
    id: 1
  },
  {
    tokens: '2 500 ROTO',
    prize: '25 $',
    buttonName: 'Buy',
    id: 2
  },
  {
    tokens: '7 500 ROTO',
    prize: '70 $',
    buttonName: 'Buy',
    id: 3
  }, {
    tokens: '15 000 ROTO',
    prize: '125 $',
    buttonName: 'Buy',
    id: 4
  },
  {
    tokens: '100 ROTO',
    prize: 'Free ROTO',
    buttonName: 'watch advertising',
    id: 5
  }]

  return (
    <>
      <AppHeader title={title} />
      <div className='tokens'>
        {data.map((obj, index) => (<TokenCard tokens={obj.tokens} prize={obj.prize} buttonName={obj.buttonName} id={obj.id} key={index} />))}
      </div>

    </>
  )
}

export default TokensPage
