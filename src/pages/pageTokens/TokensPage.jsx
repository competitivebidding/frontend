import React, { useState } from 'react'
import AppHeader from '../../components/appHeader/AppHeader.jsx'
import './TokensPage.scss'
import TokenCard from './TokenCard.jsx'



const TokensPage = ({ title }) => {
   const data=[{
    tokens:'1 000 ROTO',
    prize:'12 $',
    id:1},
      {
      tokens:'2 500 ROTO',
      prize:'25 $',
      id:2
      },
      {
        tokens:'7 500 ROTO',
        prize:'70 $',
        id:3
        },{
          tokens:'15 000 ROTO',
          prize:'125 $',
          id:4
          }]

  return (
    <>
      <AppHeader title={title} />
      <div className='tokens'>
        {data.map((obj,index)=>(<TokenCard tokens={obj.tokens} prize={obj.prize} key={index} />))  }
      </div>
     
    </>
  )
}

export default TokensPage
