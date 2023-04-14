import React from 'react'
import AppHeader from '../../components/appHeader/AppHeader.jsx'
import Questions from './Questions.jsx'

const QuestionsPage = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <Questions/>
    </>
  )
}

export default QuestionsPage
