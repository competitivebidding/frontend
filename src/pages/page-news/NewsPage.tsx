import React from 'react'
import AppHeader from '@widgets/header/AppHeader.js'
import { NewsList } from '@entities/news/ui/news-list/NewsList'

import { useQuery } from '@apollo/client'
import { ALL_NEWS } from '@shared/schemas/news/news.js'
import iconLoader from "@assets/Chat/iconLoader.svg"

const NewsPage = () => {
  // Эмитация базы данных. Данные будут приходить с бэка
  const { loading, error, data } = useQuery(ALL_NEWS)
  //error, data

  console.log(data)
  if (loading) {
    return (
      <div className='spinner'>
        <img src={iconLoader} alt="Spinner" />
      </div>
    )
  }

  if (error) {
    return <h2>Error while getting data...</h2>
  }

  return (
    <div>
      {data &&
        <NewsList data={data.news} />
      }
    </div>
  )
}

export default NewsPage
