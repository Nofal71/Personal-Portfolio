import React, { useRef } from 'react';
import { Typography, Box, Stack, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import MainCard from '../utils/MainCard';

const libraries = [
    { name: 'React', color: '#61dafb' },
    { name: 'Material-UI', color: '#0081cb' },
    { name: 'Framer Motion', color: '#ed1e79' },
    { name: 'React Router', color: '#ca4246' },
    { name: 'Redux Toolkit', color: '#764abc' },
    { name: 'React Hook Form', color: 'blue' },
    { name: 'React Query', color: 'green' },
    { name: 'Axios', color: 'gray' },
];

const LibraryCard = ({lib}) => {
    const cardRef = useRef(null);
    const handleHover = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight } = currentTarget;
        const offsetLeft = currentTarget.getBoundingClientRect().left;
        const offsetTop = currentTarget.getBoundingClientRect().top;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;

        const THRESHOLD = 30;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

        cardRef.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    };

    const resetStyles = () => {
        cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <Box
                ref={cardRef}
                onMouseMove={handleHover}
                onMouseLeave={resetStyles}
                sx={{
                    borderRadius: 2,
                    p: 2,
                    cursor:'pointer',
                    textAlign: 'center',
                    backgroundColor: lib.color,
                    color: '#fff',
                    fontWeight: 700,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
                {lib.name}
            </Box>
        </motion.div>
    )
}

const ReactSnap = () => {
    const githubLink = 'https://github.com/Nofal71/SnapReact';
    return (
        <MainCard
            sx={{
                flexDirection: 'column',
                pb: 10,
                backgroundColor: '#1a1a1a',
                borderRadius: 3,
                color: 'white',
                p: 4,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h3" fontWeight={900} align="center" mb={3} color="#e63e21">
                    React Snap
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h6" align="center" mb={4} color="#d6d6d6">
                    A blazing-fast boilerplate to kickstart your React projects with ease and efficiency.
                </Typography>
            </motion.div>

            <Stack spacing={6}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box>
                        <Typography variant="h5" fontWeight={700} mb={2}>
                            Features
                        </Typography>
                        <Typography variant="body1" mb={1}>
                            🚀 Pre-configured state management for seamless data flow.
                        </Typography>
                        <Typography variant="body1" mb={1}>
                            🔐 Authentication setup with login and signup flows.
                        </Typography>
                        <Typography variant="body1" mb={1}>
                            🎨 Feedback components like Snackbars, Alerts, and Confirm Dialogues.
                        </Typography>
                        <Typography variant="body1" mb={1}>
                            🌐 Fully functional routing for intuitive navigation.
                        </Typography>
                        <Typography variant="body1" mb={1}>
                            📦 Clean and modular folder structure for scalability and readability.
                        </Typography>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h5" fontWeight={700} align="center" mb={4}>
                        Libraries Used
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {libraries.map((lib, index) => (
                            <Grid item key={index} xs={6} sm={4} md={2}>
                                <LibraryCard lib={lib} />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>

                <Box textAlign="center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <Button
                                    variant="contained"
                                    startIcon={<GitHubIcon />}
                                    sx={{
                                        backgroundColor: '#e63e21',
                                        color: 'white',
                                        textTransform: 'none',
                                        fontWeight: 700,
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1rem',
                                    }}
                                >
                                    View on GitHub
                                </Button>
                            </motion.div>
                        </a>
                    </motion.div>
                </Box>
            </Stack>
        </MainCard>
    );
};

export default ReactSnap;
