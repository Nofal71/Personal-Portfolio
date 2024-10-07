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
  const contactUs = useContext(scrollContext);

  const scrollToView = () => {
    console.log(contactUs.current); // Ensure this is not null
    contactUs.current?.scrollIntoView({ behavior: 'smooth' });
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
            <Tab label="ABOUT" sx={navTabStyle} />
            <Tab label="PORTFOLIO" sx={navTabStyle} />
            <Tab label="CONTACT" onClick={scrollToView} sx={navTabStyle} />
          </Tabs>
        </Box>

        {/* Mobile Nav */}
        <Box sx={{
          position: 'absolute',
          display: openMenu ? 'block' : 'none',
          zIndex: 200,
          width: '100%',
          inset: 0,
          backgroundColor: '#161616',
          top: 4
        }}>
          <Tabs
            sx={{ width: '100%', flexDirection: 'column', gap: 3, textAlign: 'center' }}
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="ABOUT" sx={navTabStyle} onClick={toggleNav} />
            <Tab label="PORTFOLIO" sx={navTabStyle} onClick={toggleNav} />
            <Tab label="CONTACT" sx={navTabStyle} onClick={() => {
              setOpenMenu(!openMenu)
              scrollToView()
            }} />
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
