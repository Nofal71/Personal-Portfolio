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
                }}
            >
                {/* Title */}
                <Typography variant="h4" color="#C0C0C0" sx={{ my: { xs: 2, md: 3, lg: 4 } }}>
                    Frontend Developer
                </Typography>

                {/* Intro */}
                <Box sx={{ my: { xs: 2, md: 3, lg: 4 }, pr: { lg: 7 } }}>
                    <Typography variant="h4" fontWeight="bold">
                        I'm Nofal Hassaan
                    </Typography>
                    <Typography color="#C0C0C0" sx={{ mt: 1 }}>
                        As a Frontend Developer I design Dynamic Websites <br /> With Great Experience ..!
                    </Typography>
                </Box>

                {/* Buttons */}
                <Box display="flex" gap={2} sx={{ pb: 5 }}>
                    <Button
                        variant="contained"
                        endIcon={<AddIcon />}
                        sx={{
                            backgroundColor: '#E63E21',
                        }}
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
                        }}
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
                alignItems={{ xs: 'flex-start', lg: 'flex-end' }}
                sx={{
                    width: { xs: '100%', lg: '50%' },
                    p: { xs: 2, md: 3, lg: 4 },
                }}
            >
                {/* Job Status */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        bgcolor: 'black',
                        p: 1.5,
                        borderRadius: '0 24px 24px 0',
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
                        width: '200px',
                        height: '200px',
                        overflow: 'hidden',
                        my: { xs: 2, md: 3, lg: 4 },
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
