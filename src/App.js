import React from 'react'
import NavBar from './Components/Header/NavBar'
import ProjectSection from './Components/Sections/ProjectSections'
import SkillSection from './Components/Sections/SkillSection'
import Main from './Components/Sections/Main'
import Footer from './Components/Footer/Footer'
import ScrollContext from './ContextAPI/ScrollContext'

const App = () => {
  return (
    <div className='h-full md:p-4 w-full bg-black'>
      <ScrollContext>
        <NavBar />
        <Main />
        <SkillSection />
        <ProjectSection />
        <Footer />
      </ScrollContext>
    </div>
  )
}

export default App
