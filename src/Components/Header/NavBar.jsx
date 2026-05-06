import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, useMediaQuery, createTheme } from '@mui/material';
import Logo from '../../Assets/Logo';
import { scrollContext } from '../../ContextAPI/ScrollContext';

const theme = createTheme({
  breakpoints: {
    values: { mobile: 0, tablet: 640, laptop: 1024, desktop: 1200 },
  },
});

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isXs = useMediaQuery(() => theme.breakpoints.down('tablet'));
  const { contactUs, aboutMe, projects, activeTab, setActiveTab } = useContext(scrollContext);

  const navItems = [
    { label: 'About', ref: aboutMe },
    { label: 'Projects', ref: projects },
    { label: 'Contact', ref: contactUs },
  ];

  const scrollToView = (ref, index) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(index);
  };

  const toggleNav = () => isXs && setOpenMenu(!openMenu);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(8, 8, 8, 0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        zIndex: 50,
        borderRadius: { sm: '30px' },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        {/* Logo */}
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
                sx={index === activeTab ? activeTabStyle : navTabStyle}
                onClick={() => scrollToView(item.ref, index)}
              />
            ))}
          </Tabs>
        </Box>

        {/* Mobile Nav */}
        <Box
          sx={{
            position: 'absolute',
            display: openMenu ? 'block' : 'none',
            zIndex: 200,
            inset: 0,
            backgroundColor: 'rgba(8,8,8,0.96)',
            backdropFilter: 'blur(24px)',
            top: 4,
          }}
        >
          <Tabs sx={{ width: '100%' }} textColor="inherit" variant="fullWidth">
            {navItems.map((item, index) => (
              <Tab
                key={index}
                label={item.label}
                sx={navTabStyle}
                onClick={() => {
                  setOpenMenu(false);
                  scrollToView(item.ref, index);
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
  color: '#888',
  letterSpacing: '0.05em',
  fontWeight: 500,
  fontSize: '0.82rem',
  textTransform: 'uppercase',
  transition: 'color 0.2s',
  '&:hover': { color: '#fff' },
};

const activeTabStyle = {
  ...navTabStyle,
  color: '#E63E21',
  fontWeight: 700,
  borderBottom: '2px solid #E63E21',
};

export default NavBar;
