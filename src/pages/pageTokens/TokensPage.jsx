import React from 'react'
import AppHeader from '../../components/appHeader/AppHeader.jsx'
import './TokensPage.scss'
import TokenCard from './TokenCard.jsx'

const TokensPage = ({ title }) => {
   const data=[{
    tokens:'1 000 ROTO',
    prize:'1 000 ₽'
    },{
      tokens:'2 500 ROTO',
      prize:'1 999 ₽'
      },
      {
        tokens:'7 500 ROTO',
        prize:'5 499 ₽'
        },{
          tokens:'15 000 ROTO',
          prize:'9 999 ₽'
          }]
  return (
    <>
      <AppHeader title={title} />
      <div className='tokens'>
        {data.map((obj)=>(<TokenCard tokens={obj.tokens} prize={obj.prize}/>))  }
      </div>
    </>
  )
}

export default TokensPage
