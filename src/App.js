import React from 'react'
import NavBar from './Components/Header/NavBar'
import ProjectSection from './Components/Sections/ProjectSections'
import SkillSection from './Components/Sections/SkillSection'
import Main from './Components/Sections/Main'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='h-full md:p-4 w-full bg-black'>
      <NavBar />
      <Main />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </div>
  )
}

export default App
