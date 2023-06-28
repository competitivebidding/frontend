import React from 'react'
import AppHeader from '../../widgets/header/AppHeader.jsx'
import Questions from '../../widgets/questions/Questions.jsx'

const QuestionsPage = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <Questions/>
    </>
  )
}

export default QuestionsPage
