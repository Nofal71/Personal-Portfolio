import { Chip, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import SkillCard from '../utils/Skill/SkillCard';
import { motion } from 'framer-motion';

const coreSkills = [
    { name: 'HTML5', level: 100 },
    { name: 'CSS3', level: 88 },
    { name: 'JavaScript', level: 82 },
    { name: 'TypeScript', level: 72 },
    { name: 'React', level: 80 },
    { name: 'Next.js', level: 62 },
    { name: 'Git / GitHub', level: 78 },
];

const libraries = [
    { name: 'Material-UI', color: '#0081cb' },
    { name: 'Framer Motion', color: '#ed1e79' },
    { name: 'Redux Toolkit', color: '#764abc' },
    { name: 'React Router', color: '#ca4246' },
    { name: 'React Query', color: '#e87027' },
    { name: 'Axios', color: '#5a29e4' },
    { name: 'React Hook Form', color: '#ec5990' },
    { name: 'Vite', color: '#646CFF' },
    { name: 'Tailwind CSS', color: '#38BDF8' },
    { name: 'npm / yarn', color: '#CB3837' },
];

const SkillSection = () => {
    return (
        <Box
            sx={{
                mx: { xs: 0, sm: 2 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
            }}
        >
            {/* Left: Core skills with progress bars */}
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: '#161616',
                    p: { xs: 2.5, sm: 3 },
                    border: '1px solid #262626',
                    borderRadius: '8px',
                }}
            >
                <Typography
                    variant='overline'
                    sx={{ color: '#E63E21', letterSpacing: 4, fontWeight: 700, fontSize: '10px' }}
                >
                    PROFICIENCY
                </Typography>
                <Typography variant='h5' color='white' fontWeight={700} mt={0.5} mb={3}>
                    Core Technologies
                </Typography>
                <Stack gap={2}>
                    {coreSkills.map((skill, i) => (
                        <SkillCard skill={skill} key={i} />
                    ))}
                </Stack>
            </Box>

            {/* Right: Libraries & tools as colored chips */}
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: '#161616',
                    p: { xs: 2.5, sm: 3 },
                    border: '1px solid #262626',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant='overline'
                    sx={{ color: '#E63E21', letterSpacing: 4, fontWeight: 700, fontSize: '10px' }}
                >
                    ECOSYSTEM
                </Typography>
                <Typography variant='h5' color='white' fontWeight={700} mt={0.5} mb={3}>
                    Libraries &amp; Tools
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                        alignContent: 'flex-start',
                    }}
                >
                    {libraries.map((lib, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.04 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            <Chip
                                label={lib.name}
                                sx={{
                                    bgcolor: `${lib.color}1a`,
                                    color: lib.color,
                                    border: `1px solid ${lib.color}40`,
                                    fontWeight: 600,
                                    cursor: 'default',
                                    fontSize: '13px',
                                    '& .MuiChip-label': { px: 1.5 },
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        bgcolor: `${lib.color}2e`,
                                        boxShadow: `0 0 14px ${lib.color}2e`,
                                    },
                                }}
                            />
                        </motion.div>
                    ))}
                </Box>

                {/* Soft skills strip */}
                <Box sx={{ mt: 'auto', pt: 3, borderTop: '1px solid #1e1e1e' }}>
                    <Typography
                        variant='overline'
                        sx={{ color: '#555', letterSpacing: 3, fontWeight: 600, fontSize: '9px' }}
                    >
                        STRENGTHS
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                        {[
                            'Clean Code',
                            'Responsive Design',
                            'Problem Solving',
                            'Attention to Detail',
                            'UX Thinking',
                            'Team Collaboration',
                        ].map((s, i) => (
                            <Typography
                                key={i}
                                variant='caption'
                                sx={{
                                    color: '#555',
                                    border: '1px solid #222',
                                    borderRadius: '4px',
                                    px: 1,
                                    py: 0.3,
                                    fontSize: '11px',
                                }}
                            >
                                {s}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SkillSection;
