import React from 'react'
import AppHeader from '../../widgets/header/AppHeader.jsx'
import './WinnerListPage.scss'
import WinnerListCard from '../../widgets/winner-list-card/WinnerListCard.jsx'

import winner from '@/assets/winner-list/winner.png'
import prize from '@/assets/winner-list/prize.png'

const WinnersListPage = ({ title }) => {
  const data = [
    {
      acc: '@mur.mur',
      cardData: '22/03/2023',
      cardTime: '20:34',
      winnerImg: {winner},
      prizeImg: {prize},
      prizeTitle: 'iPhone 12 Pro Max 256 Gb',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      id: 1,
    },
    {
      acc: '@mur.mur',
      cardData: '22/03/2023',
      cardTime: '20:36',
      winnerImg: {winner},
      prizeImg: {prize},
      prizeTitle: 'iPhone 12 Pro Max 256 Gb',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      id: 2,
    },
    {
      acc: '@mur.mur',
      cardData: '22/03/2023',
      cardTime: '20:35',
      winnerImg: {winner},
      prizeImg: {prize},
      prizeTitle: 'iPhone 12 Pro Max 256 Gb',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      id: 3,
    },
  ]
  return (
    <>
      <AppHeader title={title} />
      <div className="winnerlist_cards">
        {data.map((obj) => (
          <WinnerListCard
            key={obj.id}
            acc={obj.acc}
            cardData={obj.cardData}
            cardTime={obj.cardTime}
            winnerImg={obj.winnerImg}
            prizeImg={obj.prizeImg}
            prizeTitle={obj.prizeTitle}
            text={obj.text}
          />
        ))}
      </div>{' '}
    </>
  )
}

export default WinnersListPage
