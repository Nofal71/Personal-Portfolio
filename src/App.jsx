import React from 'react'
import NavBar from './Components/Header/NavBar.jsx'
import ProjectSection from './Components/Sections/ProjectSections.jsx'
import SkillSection from './Components/Sections/SkillSection.jsx'
import Main from './Components/Sections/Main.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ScrollContext from './ContextAPI/ScrollContext.jsx'
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
