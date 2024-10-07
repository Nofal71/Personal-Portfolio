import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import SkillCard from '../utils/Skill/SkillCard';

const SkillSection = () => {
    const skills = [
        { name: 'HTML5', level: 100 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'TypeScript', level: 70 },
        { name: 'React', level: 75 },
        { name: 'Next.js', level: 60 },
        { name: 'Git/GitHub', level: 75 },
    ];

    const frontendSoftSkills = [
        'Attention to Detail',
        'User Experience',
        'Clean Code Practices',
        'Responsiveness',
        'Problem-Solving',
        'Critical Thinking',
    ];


    return (
        <Box
            display={'flex'}
            gap={2}
            sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                mx: { xs: 0, sm: 2 }
            }}>

            {/* Left Section  */}

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#161616',
                p: 2,
                width: { xs: 1, sm: 1 / 2 },
                border: '1px solid #262626',
                color: 'white',
                borderRadius: '8px',
            }}>
                <Typography variant='h4' color='white' sx={{ mt: 4, mb: 4, mx: 2, textAlign: 'center' }}>
                    Technical Skills:
                </Typography>

                <Stack justifyContent={'center'} alignItems={'center'}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        gap: 2,
                    }}>
                        {skills.map((skill, index) => (
                            <SkillCard skill={skill} key={index} />
                        ))}
                    </Box>
                </Stack>
            </Box>

            {/* Right Section  */}

            <Box sx={{
                width: { xs: 1, sm: 1 / 2 },
                display: { sm: 'flex', xs: 'none' },
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 2
            }} >
                {frontendSoftSkills.map((e, i) => (
                    <Box key={i} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#C0C0C0',
                        fontWeight: '900',
                        background: 'linear-gradient(249.05deg, rgba(230, 62, 33, 0.2) 18.59%, rgba(51, 19, 14, 0) 53.25%), #1B1B1B',
                        p: 2,
                        border: '1px solid #262626',
                        borderRadius: '8px',
                        flexGrow: { sm: i % 3 === 2 ? 1 : 0.5, xs: 1 }
                    }}>
                        <Typography variant='h5'>{e}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SkillSection;
