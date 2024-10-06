import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, useMediaQuery, createTheme } from '@mui/material';
import Logo from '../../Assets/Logo';

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

  const toggleNav = () => {
    isXs && setOpenMenu(!openMenu);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#161616', zIndex: 50, borderRadius: '30px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        {/* LOGO */}
        <div onClick={toggleNav} style={{ cursor: 'pointer' }}>
          <Logo />
        </div>

        {/* Desktop Nav */}
        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', sm: 'flex' } }}>
          <Tabs
            textColor="inherit"
            sx={{ minWidth: '100%' }}
            variant="fullWidth"
          >
            <Tab label="ABOUT" sx={navTabStyle} />
            <Tab label="PORTFOLIO" sx={navTabStyle} />
            <Tab label="CONTACT" sx={navTabStyle} />
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
        }}>
          <Tabs
            sx={{
              width: '100%',
              flexDirection: 'column',
              gap: 3,
              textAlign: 'center',
            }}
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="ABOUT" sx={navTabStyle} onClick={toggleNav} />
            <Tab label="PORTFOLIO" sx={navTabStyle} onClick={toggleNav} />
            <Tab label="CONTACT" sx={navTabStyle} onClick={toggleNav} />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const navTabStyle = {
  '&:hover': { borderBottom: '4px solid #FFA500', color: '#FFA500' },
  borderBottom: '4px solid white'
};

export default NavBar;
