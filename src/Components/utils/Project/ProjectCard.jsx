import { Box } from '@mui/system';
import React from 'react';
import { Tooltip, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';
import { GitHub } from '@mui/icons-material';

const ProjectCard = ({ projects }) => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: 0.3 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#C0C0C0',
                fontWeight: '900',
                gap: '16px',
                padding: '16px',
                border: '1px solid rgba(230, 62, 33, 0.2)',
                borderRadius: '8px',
                background: 'linear-gradient(249.05deg, rgba(230, 62, 33, 0.2) 10.59%, #0A0A0A 10.25%), #0A0A0A',
                transition: 'transform 0.3s ease',
            }}
        >
            <motion.div
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                    overflow: 'hidden',
                    borderRadius: '8px',
                    opacity: 0.65,
                    transition: 'opacity 0.3s ease',
                    width: '100%',
                    maxWidth: '300px',
                    aspectRatio: '16/9'
                }}
            >
                <img
                    src={projects.image}
                    alt="Project"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </motion.div>


            <Box display={'flex'} width={1} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <Tooltip title='View On Github'>
                    <a href={projects?.github} target='_blank' rel="noopener noreferrer">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <GitHub
                                sx={{
                                    backgroundColor: 'rgba(230, 62, 33, 0.2)',
                                    ml: 'auto',
                                    cursor: 'pointer',
                                    color: '#ca3116',
                                }}
                            />
                        </motion.div>
                    </a>
                </Tooltip>
                <Typography flexGrow={1} align='center' variant='h5'>
                    {projects.name}
                </Typography>

                <Tooltip title='View Live'>
                    <a href={projects.live} target='_blank' rel="noopener noreferrer">
                        <motion.div
                            whileHover={{ rotate: 45, scale: 1.1 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <ArrowOutwardIcon
                                sx={{
                                    backgroundColor: 'rgba(230, 62, 33, 0.2)',
                                    ml: 'auto',
                                    cursor: 'pointer',
                                    color: '#ca3116',
                                }}
                            />
                        </motion.div>
                    </a>
                </Tooltip>
            </Box>
        </motion.div>
    );
};

export default ProjectCard;
