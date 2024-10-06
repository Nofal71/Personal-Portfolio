import { LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SkillCard = ({ skill }) => {
    return (
        <Box sx={{
            background: 'linear-gradient(249.05deg, rgba(230, 62, 33, 0.2) 18.59%, rgba(51, 19, 14, 0) 53.25%), #1B1B1B',
            border: '1px solid #262626',
            color: 'white',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'transform 0.3s',
            p: 2,
            width: '100%',
            '&:hover': {
                // transform: 'perspective(800px) scale(1.02) rotateX(30deg) rotateY(15deg)',

            },
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 1, 
            }}>
                <Typography variant='h7' color='white'>
                    {skill.name}
                </Typography>
                <Typography variant='body2' color='white'>
                    {`${skill.level}%`}
                </Typography>
            </Box>
            <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                    width: '100%', 
                    height: '5px', 
                    backgroundColor: 'rgba(51, 19, 14, 0.5)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#FF4500',
                    },
                }}
            />
        </Box>
    );
};

export default SkillCard;
