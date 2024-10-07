import React from 'react'
import MainCard from '../utils/MainCard'
import { projectImages } from '../../Assets'
import ProjectCard from '../utils/Project/ProjectCard'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const ProjectSection = () => {

    return (
        <MainCard sx={{
            flexDirection: 'column'
        }}>
            <Typography variant='h4' my={3} align='center' color='white'>Projects & Recent Work</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3
            }}>
                {
                    projectImages && projectImages.map((projects, index) => (
                        <ProjectCard projects={projects} key={index} />
                    ))
                }
            </Box>

        </MainCard>
    )
}

export default ProjectSection
