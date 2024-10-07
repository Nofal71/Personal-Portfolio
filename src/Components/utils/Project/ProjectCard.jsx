import { Box } from '@mui/system'
import React from 'react'
import { Typography } from '@mui/material'

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
            border: '1px solid #FF4500',
            borderRadius: '8px',
        }}>
            <img src={projects.image} alt='Project' style={{
                height: '10rem',
                objectFit: 'cover'
            }} />
            <Typography variant='h5'>{projects.name}</Typography>
        </Box>
    )
}

export default ProjectCard
