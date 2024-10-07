import { Box } from '@mui/system';
import React from 'react';

const MainCard = ({ children, sx, ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        backgroundColor: '#161616',
        gap: 2,
        m: { xs: 0, sm: 2 },
        p: 2,
        border: { sm: '1px solid #262626', xs: 'none' },
        color: 'white',
        borderRadius: { sm: '8px', xs: '0px' },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default MainCard;
