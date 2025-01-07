import React from 'react'
import Home from './modules/home/Home'


const App = () => {
  return (
    <div className='w-[50%] flex flex-col shadow-xl items-center justify-center m-auto p-2 mt-2 bg-white'>
      <h1 className= 'text-4xl text-center mb-2 '>Expense - Tracker </h1>
      <Home/>
      
    </div>
  )
}

export default App
