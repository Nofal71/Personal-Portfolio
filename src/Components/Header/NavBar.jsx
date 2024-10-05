import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@mui/material';
import Logo from '../../Assets/Logo';

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#161616', zIndex: 50, borderRadius: '30px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        {/* LOGO */}
        <Logo />

        <Box sx={{ flexGrow: 1,  justifyContent: 'center', display: { xs: 'none', sm: 'flex' } }}>
          <Tabs
            textColor="inherit"
            sx={{ minWidth: '100%' }}
            variant="fullWidth"
          >
            <Tab
              label="ABOUT"
              sx={{ '&:hover': { borderBottom: '4px solid #FFA500' }, borderBottom: '4px solid white' }}
            />
            <Tab
              label="PORTFOLIO"
              sx={{ '&:hover': { borderBottom: '4px solid #FFA500' }, borderBottom: '4px solid white' }}
            />
            <Tab
              label="CONTACT"
              sx={{ '&:hover': { borderBottom: '4px solid #FFA500' }, borderBottom: '4px solid white' }}
            />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
