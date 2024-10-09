import React from 'react'
import NavBar from './Components/Header/NavBar'
import ProjectSection from './Components/Sections/ProjectSections'
import SkillSection from './Components/Sections/SkillSection'
import Main from './Components/Sections/Main'
import Footer from './Components/Footer/Footer'
import ScrollContext from './ContextAPI/ScrollContext'
import { Box } from '@mui/system'
import ContactUs from './Components/Sections/ContactUs.tsx'

const App = () => {
  return (
    <Box sx={{ p: { xs: 0, sm: 3 }, m: 0, backgroundColor: 'black' }}>
      <ScrollContext>
        <NavBar />
        <Main />
        <SkillSection />
        <ProjectSection />
        <ContactUs />
        <Footer />
      </ScrollContext>
    </Box>
  )
}

export default App
