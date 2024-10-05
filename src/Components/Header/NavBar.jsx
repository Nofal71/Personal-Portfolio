import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@mui/material';
import Logo from '../../Assets/Logo';

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#161616', zIndex: 50, display: { xs: 'hidden' } }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        {/* LOGO */}
        <Logo />

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Tabs textColor="inherit">
            <Tab label="ABOUT" sx={{ '&:hover': { borderBottom: '4px solid #FFA500' } }} />
            <Tab label="PORTFOLIO" sx={{ '&:hover': { borderBottom: '4px solid #FFA500' } }} />
            <Tab label="CONTACT" sx={{ '&:hover': { borderBottom: '4px solid #FFA500' } }} />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
