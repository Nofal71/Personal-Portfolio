import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { photo } from '../../../Assets'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const ProfileImage = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'inline-block',
                width: { xs: '120px', sm: '220px' },
                height: { xs: '120px', sm: '220px' },
                my: { xs: 0, md: 3, lg: 4 },
            }}
        >
            <MotionBox
                whileHover={{
                    rotate: 360,
                    border: '10px dashed red',
                    transition: { repeat: Infinity, duration: 10, ease: 'linear' }
                }}
                sx={{
                    position: 'absolute',
                    top: '-15px',
                    left: '-15px',
                    width: 'calc(100% + 30px)',
                    height: 'calc(100% + 30px)',
                    border: '5px dashed transparent',
                    borderRadius: '50%',
                    zIndex: 3,
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    border: '2px solid #E63E21',
                    borderRadius: '50%',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <Avatar
                    src={photo}
                    alt="Nofal Hassaan"
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Box>
        </Box>
    )
}

export default ProfileImage
