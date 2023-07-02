import React from 'react'
import AppHeader from '../../widgets/header/AppHeader.js'
import Questions from '../../widgets/questions/Questions.js'

const QuestionsPage = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <Questions/>
    </>
  )
}

export default QuestionsPage
