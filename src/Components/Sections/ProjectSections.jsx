import React, { useContext, useState } from 'react'
import MainCard from '../utils/MainCard'
import { projectInfo } from '../../Assets'
import ProjectCard from '../utils/Project/ProjectCard'
import { Box } from '@mui/system'
import { Chip, Typography } from '@mui/material'
import { scrollContext } from '../../ContextAPI/ScrollContext'
import { motion, AnimatePresence } from 'framer-motion'

const FILTERS = ['All', 'App', 'Landing', 'Tool'];

const ProjectSection = () => {
    const { projects, setActiveTab } = useContext(scrollContext)
    const [activeFilter, setActiveFilter] = useState('All')

    const filtered =
        activeFilter === 'All'
            ? projectInfo
            : projectInfo.filter(
                  (p) => p.category?.toLowerCase() === activeFilter.toLowerCase()
              )

    return (
        <motion.div ref={projects} whileInView={() => setActiveTab(1)}>
            <MainCard sx={{ flexDirection: 'column', pb: 10 }}>
                {/* Section header */}
                <Box sx={{ textAlign: 'center', mb: 2, mt: 4 }}>
                    <Typography
                        variant='overline'
                        sx={{
                            color: '#E63E21',
                            letterSpacing: 5,
                            fontWeight: 700,
                            fontSize: '11px',
                        }}
                    >
                        PORTFOLIO
                    </Typography>
                    <Typography
                        variant='h3'
                        fontWeight={900}
                        color='white'
                        sx={{ mt: 1, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
                    >
                        Projects &amp; Work
                    </Typography>
                    <Typography
                        variant='body1'
                        color='#666'
                        sx={{ mt: 1.5, maxWidth: 480, mx: 'auto', lineHeight: 1.8 }}
                    >
                        A selection of things I've built — from full-stack apps to open-source tools.
                    </Typography>
                </Box>

                {/* Filter tabs */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1.2,
                        flexWrap: 'wrap',
                        mb: 6,
                        mt: 2,
                    }}
                >
                    {FILTERS.map((f) => (
                        <motion.div
                            key={f}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Chip
                                label={f}
                                onClick={() => setActiveFilter(f)}
                                sx={{
                                    cursor: 'pointer',
                                    bgcolor:
                                        activeFilter === f
                                            ? 'rgba(230,62,33,0.85)'
                                            : 'rgba(255,255,255,0.04)',
                                    color: activeFilter === f ? 'white' : '#777',
                                    border:
                                        activeFilter === f
                                            ? '1px solid #E63E21'
                                            : '1px solid #2a2a2a',
                                    fontWeight: activeFilter === f ? 700 : 400,
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        bgcolor:
                                            activeFilter === f
                                                ? 'rgba(230,62,33,0.85)'
                                                : 'rgba(255,255,255,0.08)',
                                    },
                                }}
                            />
                        </motion.div>
                    ))}
                </Box>

                {/* Project grid */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: 3,
                        minHeight: 300,
                    }}
                >
                    <AnimatePresence mode='popLayout'>
                        {filtered.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.88 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.88 }}
                                transition={{ duration: 0.28 }}
                            >
                                <ProjectCard projects={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </Box>

                {/* Stats row */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: { xs: 4, sm: 8 },
                        mt: 8,
                        pt: 4,
                        borderTop: '1px solid #1e1e1e',
                        flexWrap: 'wrap',
                    }}
                >
                    {[
                        { value: `${projectInfo.length}`, label: 'Projects Built' },
                        {
                            value: `${projectInfo.filter((p) => p.featured).length}`,
                            label: 'Featured',
                        },
                        {
                            value: `${projectInfo.filter((p) => p.live).length}`,
                            label: 'Live & Deployed',
                        },
                    ].map((stat, i) => (
                        <Box key={i} sx={{ textAlign: 'center' }}>
                            <Typography
                                variant='h4'
                                fontWeight={900}
                                sx={{
                                    background: 'linear-gradient(135deg, #E63E21, #FF6B35)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {stat.value}
                            </Typography>
                            <Typography variant='caption' color='#555' sx={{ letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '10px' }}>
                                {stat.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </MainCard>
        </motion.div>
    )
}

export default ProjectSection
