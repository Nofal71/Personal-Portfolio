import { Box } from '@mui/system';
import React from 'react';
import { Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ProjectCard = ({ projects }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#C0C0C0',
            fontWeight: '900',
            gap: 2,
            p: 2,
            border: '1px solid rgba(230, 62, 33, 0.2)',
            borderRadius: '8px',
            background: 'linear-gradient(249.05deg, rgba(230, 62, 33, 0.2) 10.59%, #0A0A0A 10.25%), #0A0A0A',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            }
        }}>
            <Box sx={{
                overflow: 'hidden',
                borderRadius: '8px',
                transition: 'transform 0.4s ease-in-out, opacity 0.3s ease',
                opacity: '0.65',
                ':hover': {
                    transform: 'scale(1.01)',
                    opacity: 1,
                }
            }}>
                <img src={projects.image} alt='Project' style={{
                    height: '10rem',
                    objectFit: 'contain',
                    aspectRatio: '6/3',
                }} />
            </Box>
            <Box display={'flex'} width={1} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <Typography flexGrow={1} align='center' variant='h5'>{projects.name}</Typography>
                <a href={projects.live} target='_blank' rel="noopener noreferrer">
                    <ArrowOutwardIcon
                        sx={{
                            backgroundColor: 'rgba(230, 62, 33, 0.2)',
                            ml: 'auto',
                            cursor: 'pointer',
                            color: '#ca3116',
                            transition: 'transform 0.3s ease',
                            ":hover": {
                                transform: 'rotate(45deg) scale(1.05)'
                            }
                        }}
                    />
                </a>
            </Box>
        </Box>
    );
};

export default ProjectCard;
