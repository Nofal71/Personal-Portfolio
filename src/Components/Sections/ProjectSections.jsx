import React from 'react'
import MainCard from '../utils/MainCard'
import { projectInfo } from '../../Assets'
import ProjectCard from '../utils/Project/ProjectCard'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const ProjectSection = () => {

    return (
        <MainCard sx={{
            flexDirection: 'column'
        }}>
            <Typography variant='h3' my={10} fontWeight={900} align='center' color='white'>Projects & Recent Work</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3
            }}>
                {
                    projectInfo && projectInfo.map((projects, index) => (
                        <ProjectCard projects={projects} key={index} />
                    ))
                }
            </Box>

        </MainCard>
    )
}

export default ProjectSection
