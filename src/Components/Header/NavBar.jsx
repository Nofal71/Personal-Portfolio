import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, useMediaQuery, createTheme } from '@mui/material';
import Logo from '../../Assets/Logo';
import { scrollContext } from '../../ContextAPI/ScrollContext';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isXs = useMediaQuery(() => theme.breakpoints.down('tablet'));
  const { contactUs, aboutMe, myProjects } = useContext(scrollContext);
  
  const navItems = [
    { label: 'ABOUT Me', ref: aboutMe },
    { label: 'Projects', ref: myProjects },
    { label: 'CONTACT', ref: contactUs },
  ];

  const scrollToView = (ref) => {
    console.log(ref.current); // Ensure this is not null
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleNav = () => {
    isXs && setOpenMenu(!openMenu);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#161616', zIndex: 50, borderRadius: { sm: '30px' } }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        {/* LOGO */}
        <div onClick={toggleNav} style={{ cursor: 'pointer' }}>
          <Logo />
        </div>

        {/* Desktop Nav */}
        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', sm: 'flex' } }}>
          <Tabs textColor="inherit" sx={{ minWidth: '100%' }} variant="fullWidth">
            {navItems.map((item, index) => (
              <Tab
                key={index}
                label={item.label}
                sx={navTabStyle}
                onClick={() => scrollToView(item.ref)} 
              />
            ))}
          </Tabs>
        </Box>

        {/* Mobile Nav */}
        <Box sx={{
          position: 'absolute',
          display: openMenu ? 'block' : 'none',
          zIndex: 200,
          inset: 0,
          backgroundColor: '#161616',
          top: 4
        }}>
          <Tabs
            sx={{ width: '100%', flexDirection: 'column', gap: 3, textAlign: 'center' }}
            textColor="inherit"
            variant="fullWidth"
          >
            {navItems.map((item, index) => (
              <Tab
                key={index}
                label={item.label}
                sx={navTabStyle}
                onClick={() => {
                  setOpenMenu(!openMenu);
                  scrollToView(item.ref); 
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const navTabStyle = {
  '&:hover': { borderBottom: '4px solid #FFA500', color: '#FFA500' },
  borderBottom: '4px solid white',
};

export default NavBar;
