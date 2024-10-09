import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Hero = () => {
    return (
        <>
            {/* Title */}
            <Typography variant="h4" color="#C0C0C0" sx={{
                my: { xs: 0, md: 3, lg: 4 }, fontSize: {
                    xs: '1rem',
                    sm: '1.5rem',
                },
            }}>
                Frontend Developer
            </Typography>

            {/* Intro */}
            <Box sx={{ my: { xs: 0, md: 3, lg: 4 }, pr: { lg: 7 } }}>
                <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }}>
                    I'm Nofal Hassaan
                </Typography>
                <Typography color="#C0C0C0" sx={{ mt: 1 }}>
                    As a Frontend Developer I design Dynamic Websites With Great Experience ..!
                </Typography>
            </Box>
        </>
    )
}

export default Hero
