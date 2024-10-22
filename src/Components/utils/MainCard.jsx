import { Box } from '@mui/system';
import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

const MotionBox = motion(Box);

const MainCard = forwardRef(({ children, sx, ...props }, ref) => {
  return (
    <MotionBox
      ref={ref} 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        gap: 2,
        m: { xs: 0, sm: 2 },
        p: 2,
        border: { sm: '1px solid #262626', xs: 'none' },
        backgroundColor: '#161616',
        color: 'white',
        borderRadius: { sm: '8px', xs: '0px' },
        ...sx,
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
});

MainCard.displayName = 'MainCard';

export default MainCard;
