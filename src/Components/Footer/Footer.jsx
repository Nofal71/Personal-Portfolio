import React from 'react'
import MainCard from '../utils/MainCard'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
import JobStatus from '../utils/Main/JobStatus'

const Footer = () => {
    return (
        <MainCard sx={{
            background: 'linear-gradient(76.27deg, rgba(230, 62, 33, 0.2) 10.4%, rgba(51, 19, 14, 0) 25.53%), #1B1B1B',
            px: '4rem',
            py: { xs: '2rem', sm: 0 },
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 3,
                width: 1,
            }}>
                <Typography variant='h5' color='#C0C0C0' >Portfolio</Typography>
                <Stack direction={'row'} spacing={3} >
                    <Typography component={'a'} target='_blank' href='https://wa.me/qr/I2UDPZUEM4KUG1' sx={{
                        cursor: 'pointer',
                        ":hover": {
                            color: '#25D366'
                        }
                    }}>WhatsApp</Typography>
                    <Typography component={'a'} target='_blank' href='https://www.linkedin.com/in/nofal-hassaan-421354296/' sx={{
                        cursor: 'pointer',
                        ":hover": {
                            color: '#0077B5'
                        }
                    }}>LinkedIn</Typography>
                </Stack>
                <JobStatus />
            </Box>

        </MainCard>
    )
}

export default Footer

