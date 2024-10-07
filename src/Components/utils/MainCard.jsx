import { Box } from '@mui/system';
import React from 'react';

const MainCard = ({ children, sx, ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        backgroundColor: '#161616',
        m: 2,
        p: 2,
        border: '1px solid #262626',
        color: 'white',
        borderRadius: '8px',
        ...sx,  
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default MainCard;
