import React, { useContext } from 'react'
import MainCard from '../utils/MainCard'
import { projectInfo } from '../../Assets'
import ProjectCard from '../utils/Project/ProjectCard'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { scrollContext } from '../../ContextAPI/ScrollContext'
import { motion } from 'framer-motion'

const ProjectSection = () => {

    const { projects, setActiveTab } = useContext(scrollContext)
    return (
        <motion.div
            ref={projects}
            whileInView={() => setActiveTab(1)}
        >
            <MainCard sx={{
                flexDirection: 'column',
                pb: 10
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
        </motion.div>

    )
}

export default ProjectSection
