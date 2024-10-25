import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import MainCard from '../utils/MainCard';
import JobStatus from '../utils/Main/JobStatus';
import DownloadCV from '../utils/Main/DownloadCV';
import { CopyEmail } from '../utils/Main/Buttons';
import ProfileImage from '../utils/Main/ProfileImage';
import Hero from '../utils/Main/Hero';
import { motion } from 'framer-motion';
import { scrollContext } from '../../ContextAPI/ScrollContext';

const ParentBox = motion(MainCard);


const Main = () => {
    const { aboutMe, setActiveTab } = useContext(scrollContext)
    return (
        <ParentBox
            ref={aboutMe}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileInView={() => setActiveTab(0)}
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
                <motion.div
                    initial={{ x: '-400%' }}
                    animate={{ x: '0' }}
                    transition={{ duration: 1 }}
                >
                    <Hero />
                </motion.div>
                <motion.div
                    initial={{ y: '400%' }}
                    animate={{ y: '0' }}
                    transition={{ duration: 1 }}
                >
                    <Box display="flex" gap={2} alignItems={'center'} sx={{ pb: '5', flexDirection: { xs: 'column', sm: 'row' }, width: { xs: '100%', sm: 'auto' } }}>
                        <DownloadCV />
                        <CopyEmail />
                    </Box>
                </motion.div>
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
                <motion.div
                    initial={{ y: '-400%' }}
                    animate={{ y: '0' }}
                    transition={{ duration: 0.5 }}
                >
                    <JobStatus />
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ x: '400%' }}
                    animate={{ x: '0' }}
                    transition={{ duration: 1 }}
                >
                    <ProfileImage />
                </motion.div>

            </Grid>
        </ParentBox>
    );
};

export default Main;
