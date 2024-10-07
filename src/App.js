import React from 'react'
import NavBar from './Components/Header/NavBar'
import ProjectSection from './Components/Sections/ProjectSections'
import SkillSection from './Components/Sections/SkillSection'
import Main from './Components/Sections/Main'

const App = () => {
  return (
    <div className='h-full p-4 w-full bg-black'>
      <NavBar />
      <Main />
      <SkillSection />
      <ProjectSection />
    </div>
  )
}

export default App
