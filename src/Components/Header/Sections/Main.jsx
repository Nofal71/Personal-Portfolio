import React from 'react';
import { Box, Typography, Button, IconButton, Avatar, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import profilePhoto from '../../../Assets/Profile-Photo.jpg';

const Main = () => {
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
            }}
        >
            {/* Left Section */}
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{
                    width: { xs: '100%', lg: '50%' },
                    p: { xs: 2, md: 3, lg: 4 },
                    gap: { xs: 3 }
                }}
            >
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

                {/* Buttons */}
                <Box display="flex" gap={2} alignItems={'center'} sx={{ pb: '5', flexDirection: { xs: 'column', sm: 'row' }, width: { xs: '100%', sm: 'auto' } }}>
                    <Button
                        variant="contained"
                        endIcon={<AddIcon />}
                        sx={{
                            backgroundColor: '#E63E21',
                            textWrap: 'nowrap'
                        }}
                        fullWidth
                    >
                        Hire Me
                    </Button>
                    <Button
                        variant="outlined"
                        endIcon={<ContentCopyIcon />}
                        sx={{
                            color: 'white',
                            borderColor: '#262626',
                            backgroundColor: 'black',
                            '&:hover': { backgroundColor: 'transparent' },
                            textWrap: 'nowrap'
                        }}
                        fullWidth

                    >
                        Copy Email
                    </Button>
                </Box>
            </Grid>

            {/* Right Section */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems={{ xs: 'flex-start', md: 'flex-end' }}
                sx={{
                    width: { xs: '100%', lg: '50%' },
                    p: { xs: 2, md: 3, lg: 4 },
                }}
            >
                {/* Job Status */}
                <Box
                    sx={{
                        display: {xs:'none' , sm:'flex'},
                        alignItems: 'center',
                        gap: 1,
                        bgcolor: 'black',
                        p: 1.5,
                        borderRadius: '24px',
                        my: { xs: 2, md: 3, lg: 4 },
                        color: '#C0C0C0',
                    }}
                >
                    <IconButton
                        sx={{
                            backgroundColor: '#E63E21',
                            borderRadius: '50%',
                            p: 1,
                        }}
                    />
                    <Typography variant="body2">AVAILABLE FOR JOB</Typography>
                </Box>

                {/* Profile Image */}
                <Box
                    sx={{
                        border: '2px solid #E63E21',
                        borderRadius: '50%',
                        width: { xs: '100px', sm: '200px' },
                        height: { xs: '100px', sm: '200px' },
                        overflow: 'hidden',
                        my: { xs: 0, md: 3, lg: 4 },
                    }}
                >
                    <Avatar
                        src={profilePhoto}
                        alt="Nofal Hassaan"
                        sx={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Box>
            </Grid>
        </Box>
    );
};

export default Main;
