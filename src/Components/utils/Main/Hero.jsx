import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ROLES = ['Frontend Developer', 'React Engineer', 'UI Specialist', 'Web Builder'];

const STATS = [
    { value: 6, label: 'Projects', suffix: '+' },
    { value: 2, label: 'Years Exp', suffix: '+' },
    { value: 10, label: 'Technologies', suffix: '+' },
];

const AnimatedCounter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 30));
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, 40);
        return () => clearInterval(timer);
    }, [target]);

    return <span>{count}{suffix}</span>;
};

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 2800);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {/* Animated role badge */}
            <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '20px',
                        border: '1px solid rgba(230,62,33,0.3)',
                        background: 'rgba(230,62,33,0.08)',
                        width: 'fit-content',
                    }}
                >
                    <Box
                        sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: '#E63E21',
                            boxShadow: '0 0 8px #E63E21',
                            animation: 'dotPulse 2s ease-in-out infinite',
                            '@keyframes dotPulse': {
                                '0%, 100%': { opacity: 1 },
                                '50%': { opacity: 0.4 },
                            },
                        }}
                    />
                    <Typography
                        variant='caption'
                        sx={{
                            color: '#E63E21',
                            fontWeight: 700,
                            letterSpacing: 1.5,
                            textTransform: 'uppercase',
                            fontSize: '10px',
                        }}
                    >
                        {ROLES[roleIndex]}
                    </Typography>
                </Box>
            </motion.div>

            {/* Name */}
            <Box>
                <Typography
                    variant='h1'
                    fontWeight={900}
                    color='white'
                    sx={{
                        fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.2rem' },
                        lineHeight: 1.05,
                        letterSpacing: '-0.02em',
                    }}
                >
                    I'm Nofal
                </Typography>
                <Typography
                    variant='h1'
                    fontWeight={900}
                    sx={{
                        fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.2rem' },
                        lineHeight: 1.05,
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(135deg, #E63E21 20%, #FF6B35 80%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Hassaan
                </Typography>
            </Box>

            {/* Bio */}
            <Typography
                color='#666'
                sx={{
                    maxWidth: 360,
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                }}
            >
                Building fast, beautiful web experiences with React and modern tooling.
                Open to full-time and freelance opportunities.
            </Typography>

            {/* Stats strip */}
            <Box
                sx={{
                    display: 'flex',
                    gap: { xs: 3, sm: 4 },
                    pt: 1,
                    mt: 0.5,
                    borderTop: '1px solid #1a1a1a',
                }}
            >
                {STATS.map((stat, i) => (
                    <Box key={i}>
                        <Typography
                            variant='h5'
                            fontWeight={900}
                            sx={{
                                background: 'linear-gradient(135deg, #E63E21, #FF6B35)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: 1.1,
                                fontSize: { xs: '1.3rem', sm: '1.6rem' },
                            }}
                        >
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                        </Typography>
                        <Typography
                            variant='caption'
                            color='#444'
                            sx={{ letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '9px' }}
                        >
                            {stat.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Hero;
