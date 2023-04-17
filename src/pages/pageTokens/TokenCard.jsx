import React from 'react'
import TokensPage from './TokensPage'

const TokenCard = ({tokens,prize}) => {
   
  return (
        <div className='token'>
          <h1 className='token__header'>{tokens}</h1>
          <h2 className='token__prize'>{prize}</h2>
          <button className='token__button'> Купить </button>
        </div>
  )
}

export default TokenCard