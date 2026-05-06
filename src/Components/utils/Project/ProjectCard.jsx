import { Box } from '@mui/system';
import React from 'react';
import { Chip, Typography, Tooltip } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';
import { GitHub } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

const ProjectPlaceholder = ({ name, color }) => (
    <Box
        sx={{
            width: '100%',
            aspectRatio: '16/9',
            background: `linear-gradient(135deg, ${color}22 0%, ${color}08 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: `1px solid ${color}33`,
        }}
    >
        <Box
            sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                border: `2px solid ${color}55`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1.5,
                background: `${color}15`,
            }}
        >
            <GitHub sx={{ color: color, fontSize: 28 }} />
        </Box>
        <Typography variant='body2' color={color} fontWeight={700} align='center' px={2}>
            {name}
        </Typography>
        <Typography variant='caption' color='#555' mt={0.5}>
            Open Source
        </Typography>
    </Box>
);

const ProjectCard = ({ projects }) => {
    const hasImage = !!projects.image;

    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -8, boxShadow: `0 20px 48px rgba(0,0,0,0.6)` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '320px',
                borderRadius: '12px',
                border: '1px solid #262626',
                background: 'linear-gradient(180deg, #1c1c1c 0%, #141414 100%)',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'default',
            }}
        >
            {/* Featured badge */}
            {projects.featured && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 10,
                        bgcolor: 'rgba(230, 62, 33, 0.92)',
                        borderRadius: '20px',
                        px: 1.2,
                        py: 0.3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.4,
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    <StarIcon sx={{ color: 'white', fontSize: '12px' }} />
                    <Typography variant='caption' color='white' fontWeight={700} fontSize='11px'>
                        Featured
                    </Typography>
                </Box>
            )}

            {/* Image or placeholder */}
            <Box sx={{ overflow: 'hidden', borderBottom: '1px solid #222' }}>
                {hasImage ? (
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.45 }}
                        style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}
                    >
                        <img
                            src={projects.image}
                            alt={projects.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </motion.div>
                ) : (
                    <ProjectPlaceholder name={projects.name} color={projects.color || '#E63E21'} />
                )}
            </Box>

            {/* Content area */}
            <Box
                sx={{
                    p: 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 1.2,
                }}
            >
                {/* Category label */}
                <Typography
                    variant='caption'
                    sx={{
                        color: projects.color || '#E63E21',
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                        fontSize: '10px',
                    }}
                >
                    {projects.category}
                </Typography>

                {/* Project name */}
                <Typography variant='h6' fontWeight={800} color='white' lineHeight={1.2}>
                    {projects.name}
                </Typography>

                {/* Description */}
                <Typography
                    variant='body2'
                    color='#888'
                    sx={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: 1.65,
                        fontSize: '13px',
                    }}
                >
                    {projects.description}
                </Typography>

                {/* Tech tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7, mt: 0.5 }}>
                    {projects.tech?.map((t, i) => (
                        <Chip
                            key={i}
                            label={t}
                            size='small'
                            sx={{
                                bgcolor: 'rgba(255,255,255,0.04)',
                                color: '#aaa',
                                border: '1px solid #2e2e2e',
                                fontSize: '11px',
                                height: '20px',
                                '& .MuiChip-label': { px: 1 },
                            }}
                        />
                    ))}
                </Box>

                {/* Action buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mt: 'auto',
                        pt: 1.5,
                        borderTop: '1px solid #222',
                    }}
                >
                    {projects.github && (
                        <Tooltip title='View on GitHub'>
                            <a
                                href={projects.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ textDecoration: 'none' }}
                            >
                                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.6,
                                            px: 1.5,
                                            py: 0.7,
                                            borderRadius: '8px',
                                            bgcolor: 'rgba(255,255,255,0.04)',
                                            border: '1px solid #2e2e2e',
                                            cursor: 'pointer',
                                            transition: 'border-color 0.2s',
                                            '&:hover': { borderColor: '#555' },
                                        }}
                                    >
                                        <GitHub sx={{ color: '#bbb', fontSize: '15px' }} />
                                        <Typography variant='caption' color='#bbb' fontWeight={600}>
                                            Code
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </a>
                        </Tooltip>
                    )}

                    {projects.live && (
                        <Tooltip title='View Live Demo'>
                            <a
                                href={projects.live}
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ textDecoration: 'none' }}
                            >
                                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.2 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.6,
                                            px: 1.5,
                                            py: 0.7,
                                            borderRadius: '8px',
                                            bgcolor: 'rgba(230, 62, 33, 0.12)',
                                            border: '1px solid rgba(230, 62, 33, 0.28)',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s',
                                            '&:hover': { bgcolor: 'rgba(230, 62, 33, 0.22)' },
                                        }}
                                    >
                                        <ArrowOutwardIcon sx={{ color: '#E63E21', fontSize: '15px' }} />
                                        <Typography variant='caption' color='#E63E21' fontWeight={600}>
                                            Live
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </a>
                        </Tooltip>
                    )}
                </Box>
            </Box>
        </motion.div>
    );
};

export default ProjectCard;
