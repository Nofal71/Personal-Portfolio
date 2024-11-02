import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { motion } from 'framer-motion'

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
                <motion.div
                    initial={{ overflow: 'hidden', width: '0' }}
                    animate={{ overflow: 'auto', width: 'auto' }}
                    transition={{ delay: 1, duration: 3, ease: 'easeInOut', repeat: 2, repeatType: 'reverse' }}
                >
                    <Typography variant="h4" noWrap fontWeight="bold" component={'div'} sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem' } }}>
                        I'm Nofal Hassaan
                    </Typography>
                </motion.div>

                <Typography color="#C0C0C0" sx={{ mt: 1 }}>
                    As a Frontend Developer I design Dynamic Websites With Great Experience ..!
                </Typography>
            </Box>
        </>
    )
}

export default Hero
