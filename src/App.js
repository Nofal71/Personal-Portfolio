import React from 'react'
import NavBar from './Components/Header/NavBar'
import SkillSection from './Components/Header/Sections/SkillSection'
import Main from './Components/Header/Sections/Main'

const App = () => {
  return (
    <div className='h-full p-4 w-full bg-black'>
      <NavBar />
      <Main />
      <SkillSection />
    </div>
  )
}

export default App
