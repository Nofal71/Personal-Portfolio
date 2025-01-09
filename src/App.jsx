import React from 'react'
import NavBar from './Components/Header/NavBar.jsx'
import ProjectSection from './Components/Sections/ProjectSections.jsx'
import SkillSection from './Components/Sections/SkillSection.jsx'
import Main from './Components/Sections/Main.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Box } from '@mui/system'
import ContactUs from './Components/Sections/ContactUs.jsx'
import ReactSnap from './Components/Sections/ReactSnap.jsx'

const App = () => {
  return (
    <Box sx={{ p: { xs: 0, sm: 3 }, m: 0, backgroundColor: 'black' }}>
      <NavBar />
      <Main />
      <SkillSection />
      <ProjectSection />
      <ReactSnap />
      <ContactUs />
      <Footer />
    </Box>
  )
}

export default App
