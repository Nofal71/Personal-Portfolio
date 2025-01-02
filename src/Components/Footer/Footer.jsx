import React from 'react';
import MainCard from '../utils/MainCard';
import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';
import JobStatus from '../utils/Main/JobStatus';

const Footer = () => {

    const footerLinks = [
        { text: 'Whatsapp', Color: '#25D366', navigateTo: 'https://wa.me/qr/I2UDPZUEM4KUG1' },
        { text: 'LinkedIn', Color: '#0077B5', navigateTo: 'https://www.linkedin.com/in/nofal-hassaan-421354296/' },
        { text: 'GitHub', Color: '#3D3D3D', navigateTo: 'https://github.com/Nofal71' },
    ]

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
                <Typography variant='h5' color='#C0C0C0'>Portfolio</Typography>
                <Stack direction={'row'} spacing={3}>
                    {
                        footerLinks.map((link, index) => (
                            <Typography key={index} component={'a'} target='_blank' href={link.navigateTo} sx={{
                                cursor: 'pointer',
                                textDecoration: 'none',
                                color: 'white',
                                ":hover": {
                                    color: link.Color,
                                }
                            }}>{link.text}</Typography>
                        ))
                    }
                </Stack>
                <JobStatus />
            </Box>
        </MainCard>
    );
};

export default Footer;
