import React from 'react'
import AppHeader from '../../widgets/Header/AppHeader.jsx'
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
