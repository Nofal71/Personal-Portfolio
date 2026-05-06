import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';

const SkillCard = ({ skill }) => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    const [level, setLevel] = useState(0);

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => setLevel(skill.level), 150);
            return () => clearTimeout(timer);
        }
    }, [inView, skill.level]);

    return (
        <Box
            ref={ref}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                p: 0,
                width: '100%',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                    sx={{ color: '#ccc', fontWeight: 600, fontSize: '0.88rem', letterSpacing: 0.3 }}
                >
                    {skill.name}
                </Typography>
                <Typography
                    sx={{
                        color: '#E63E21',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        fontFamily: 'monospace',
                    }}
                >
                    {skill.level}%
                </Typography>
            </Box>

            {/* Track */}
            <Box
                sx={{
                    position: 'relative',
                    height: '5px',
                    borderRadius: '999px',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    overflow: 'hidden',
                }}
            >
                {/* Fill */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: `${level}%`,
                        borderRadius: '999px',
                        background: 'linear-gradient(90deg, #E63E21, #FF6B35)',
                        transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: '0 0 8px rgba(230,62,33,0.5)',
                    }}
                />
            </Box>
        </Box>
    );
};

export default SkillCard;
