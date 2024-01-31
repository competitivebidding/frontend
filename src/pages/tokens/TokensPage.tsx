import React from 'react'
import cls from './TokensPage.module.scss'
import TokenCard from '@entities/token-card/TokenCard'
import {useMutation} from "@apollo/client";
import {PAY_OPERATION} from "@shared/schemas/tokens/tokens";

const TokensPage = () => {
  const data = [
    {
      tokens: {
        amount: 1000,
        currency: 'ROTO'
      },
      prize: '12 $',
      buttonName: 'Buy',
      id: 1,
    },
    {
      tokens: {
        amount: 2500,
        currency: 'ROTO'
      },
      prize: '25 $',
      buttonName: 'Buy',
      id: 2,
    },
    {
      tokens: {
        amount: 7500,
        currency: 'ROTO'
      },
      prize: '70 $',
      buttonName: 'Buy',
      id: 3,
    },
    {
      tokens: {
        amount: 15000,
        currency: 'ROTO'
      },
      prize: '125 $',
      buttonName: 'Buy',
      id: 4,
    },
    {
      tokens: {
        amount: 100,
        currency: 'ROTO'
      },
      prize: 'Free ROTO',
      buttonName: 'watch advertising',
      id: 5,
    },
  ]



  return (
    <div className={cls.tokens}>
      {data.map((obj, index) => (
        <TokenCard tokens={obj.tokens} prize={obj.prize} buttonName={obj.buttonName} id={obj.id} key={index} />
      ))}
    </div>
  )
}

export default TokensPage
