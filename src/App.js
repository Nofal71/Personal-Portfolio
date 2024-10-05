import React from 'react'
import NavBar from './Components/Header/NavBar'
import Main from './Components/Header/Sections/Main'

const App = () => {
  return (
    <div className='h-full p-4 w-full bg-black'>
      <NavBar />
      <Main />
      <Main />
    </div>
  )
}

export default App
