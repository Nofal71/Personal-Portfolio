import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
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
        <>
            {/* Animated role label */}
            <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
            >
                <Typography
                    variant='subtitle1'
                    sx={{
                        my: { xs: 0, md: 2 },
                        background: 'linear-gradient(135deg, #E63E21, #FF6B35)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700,
                        letterSpacing: 3,
                        textTransform: 'uppercase',
                        fontSize: { xs: '0.75rem', sm: '0.85rem' },
                    }}
                >
                    {ROLES[roleIndex]}
                </Typography>
            </motion.div>

            {/* Name */}
            <Box sx={{ my: { xs: 1, md: 2 }, pr: { lg: 4 } }}>
                <Typography
                    variant='h2'
                    fontWeight={900}
                    color='white'
                    sx={{
                        fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
                        lineHeight: 1.08,
                    }}
                >
                    I'm Nofal
                </Typography>
                <Typography
                    variant='h2'
                    fontWeight={900}
                    sx={{
                        fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
                        lineHeight: 1.08,
                        background: 'linear-gradient(135deg, #E63E21 20%, #FF6B35 80%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Hassaan
                </Typography>

                <Typography
                    color='#777'
                    sx={{ mt: 2, maxWidth: 380, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}
                >
                    Building fast, beautiful web experiences with React and modern tooling.
                </Typography>
            </Box>

            {/* Stats strip */}
            <Box sx={{ display: 'flex', gap: { xs: 3, sm: 4 }, mt: 1, flexWrap: 'wrap' }}>
                {STATS.map((stat, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Typography
                            variant='h5'
                            fontWeight={900}
                            sx={{
                                background: 'linear-gradient(135deg, #E63E21, #FF6B35)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                lineHeight: 1.1,
                            }}
                        >
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                        </Typography>
                        <Typography
                            variant='caption'
                            color='#555'
                            sx={{ letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '9px' }}
                        >
                            {stat.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default Hero;
