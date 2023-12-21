import React from 'react'
import './App.css'
import HomeComponent from './component/HomeComponent.jsx'
import QuizComponent from './component/QuizComponent.jsx'
import ResultComponent from './component/ResultComponent'

function App() {
  return (
    <>
      <HomeComponent/>
       <QuizComponent/>
      <ResultComponent/> 
    </>
  )
}

export default App