import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { photo } from '../../../Assets';

const ProfileImage = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '160px', sm: '260px', md: '300px' },
                height: { xs: '160px', sm: '260px', md: '300px' },
                my: { xs: 2, md: 4 },
            }}
        >
            {/* Outer ambient glow */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: '-20px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(230,62,33,0.18) 0%, transparent 65%)',
                    filter: 'blur(16px)',
                    pointerEvents: 'none',
                }}
            />

            {/* Spinning gradient ring */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: '-3px',
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #E63E21 0%, #FF6B35 25%, transparent 45%, transparent 55%, #FF6B35 75%, #E63E21 100%)',
                    animation: 'spinRing 5s linear infinite',
                    '@keyframes spinRing': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                    },
                    zIndex: 2,
                }}
            />

            {/* Ring mask — solid circle in the center to show only the ring edge */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: '3px',
                    borderRadius: '50%',
                    background: '#0d0d0d',
                    zIndex: 3,
                }}
            />

            {/* Pulsing ring */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    border: '1px solid rgba(230,62,33,0.2)',
                    animation: 'pulse 3s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
                        '50%': { opacity: 0.7, transform: 'scale(1.03)' },
                    },
                    zIndex: 1,
                }}
            />

            {/* Avatar */}
            <Avatar
                src={photo}
                alt="Nofal Hassaan"
                sx={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    zIndex: 4,
                    position: 'relative',
                    boxShadow: '0 0 0 2px #0d0d0d',
                }}
            />
        </Box>
    );
};

export default ProfileImage;
