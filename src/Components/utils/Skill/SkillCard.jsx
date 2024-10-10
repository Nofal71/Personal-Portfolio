import { LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';

const SkillCard = ({ skill }) => {
    const { ref, inView } = useInView({
        threshold: 0.1, 
    })
    const [skillLevel, setSkillLevel] = useState(0)
    useEffect(() => {
        
        if (inView) {
            setSkillLevel(skill.level)
        } else {
            setSkillLevel(0)
        }
    }, [skill, inView])
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
                transform: 'scale(1.02)',
                cursor: 'pointer'

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
                ref={ref}
                variant="determinate"
                value={skillLevel}
                sx={{
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
