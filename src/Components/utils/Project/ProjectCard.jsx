import { Box } from '@mui/system';
import React from 'react';
import { Chip, Typography, Tooltip } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';
import { GitHub } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

const ProjectCard = ({ projects, index }) => {
    const hasImage = !!projects.image;
    const accent = projects.color || '#E63E21';

    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: (index % 3) * 0.08 }}
            viewport={{ once: true }}
        >
            <Box
                sx={{
                    width: { xs: '92vw', sm: '360px' },
                    maxWidth: '360px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid #1e1e1e',
                    borderTop: `3px solid ${accent}`,
                    background: 'linear-gradient(160deg, #161616 0%, #111 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'default',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                    '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: `0 32px 80px rgba(0,0,0,0.7), 0 0 40px ${accent}18`,
                        borderColor: `${accent}50`,
                        borderTopColor: accent,
                    },
                    '&:hover .card-img': {
                        transform: 'scale(1.06)',
                    },
                }}
            >
                {/* Image area */}
                <Box sx={{ position: 'relative', height: '200px', overflow: 'hidden', bgcolor: '#0d0d0d' }}>
                    {hasImage ? (
                        <Box
                            component='img'
                            src={projects.image}
                            alt={projects.name}
                            className='card-img'
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top center',
                                display: 'block',
                                transition: 'transform 0.5s ease',
                            }}
                        />
                    ) : (
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                background: `linear-gradient(135deg, ${accent}14 0%, ${accent}05 100%)`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1.5,
                            }}
                        >
                            <GitHub sx={{ color: accent, fontSize: 44, opacity: 0.5 }} />
                            <Typography
                                variant='body2'
                                color={accent}
                                fontWeight={700}
                                align='center'
                                px={3}
                                sx={{ opacity: 0.8 }}
                            >
                                {projects.name}
                            </Typography>
                        </Box>
                    )}

                    {/* Index label */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 10,
                            left: 12,
                            bgcolor: 'rgba(0,0,0,0.72)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '6px',
                            px: 1,
                            py: 0.3,
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#666',
                                fontFamily: 'monospace',
                                fontSize: '11px',
                                fontWeight: 700,
                            }}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </Typography>
                    </Box>

                    {/* Featured badge */}
                    {projects.featured && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 10,
                                right: 12,
                                bgcolor: 'rgba(230,62,33,0.9)',
                                backdropFilter: 'blur(6px)',
                                borderRadius: '20px',
                                px: 1.2,
                                py: 0.3,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.4,
                            }}
                        >
                            <StarIcon sx={{ color: 'white', fontSize: '11px' }} />
                            <Typography
                                sx={{ color: 'white', fontWeight: 700, fontSize: '10px', letterSpacing: 0.5 }}
                            >
                                Featured
                            </Typography>
                        </Box>
                    )}

                    {/* Bottom gradient fade */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '60px',
                            background: 'linear-gradient(to top, #161616, transparent)',
                            pointerEvents: 'none',
                        }}
                    />
                </Box>

                {/* Content */}
                <Box
                    sx={{
                        p: 2.5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.2,
                        flexGrow: 1,
                    }}
                >
                    {/* Category */}
                    <Typography
                        sx={{
                            color: accent,
                            fontWeight: 700,
                            letterSpacing: 2.5,
                            textTransform: 'uppercase',
                            fontSize: '10px',
                        }}
                    >
                        {projects.category}
                    </Typography>

                    {/* Name */}
                    <Typography
                        variant='h6'
                        fontWeight={800}
                        color='white'
                        lineHeight={1.2}
                        sx={{ fontSize: '1.05rem' }}
                    >
                        {projects.name}
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            color: '#666',
                            fontSize: '13px',
                            lineHeight: 1.7,
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {projects.description}
                    </Typography>

                    {/* Tech chips */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mt: 0.3 }}>
                        {projects.tech?.map((t, i) => (
                            <Chip
                                key={i}
                                label={t}
                                size='small'
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.04)',
                                    color: '#666',
                                    border: '1px solid #1e1e1e',
                                    fontSize: '10px',
                                    height: '20px',
                                    '& .MuiChip-label': { px: 0.9 },
                                }}
                            />
                        ))}
                    </Box>

                    {/* Divider */}
                    <Box sx={{ height: '1px', bgcolor: '#1a1a1a', mt: 0.5 }} />

                    {/* Action links */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {projects.github && (
                            <Tooltip title='View Source Code'>
                                <a
                                    href={projects.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.6,
                                            px: 1.4,
                                            py: 0.65,
                                            borderRadius: '8px',
                                            bgcolor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid #222',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            '&:hover': {
                                                bgcolor: 'rgba(255,255,255,0.07)',
                                                borderColor: '#444',
                                            },
                                        }}
                                    >
                                        <GitHub sx={{ color: '#999', fontSize: '14px' }} />
                                        <Typography sx={{ color: '#999', fontSize: '12px', fontWeight: 600 }}>
                                            Code
                                        </Typography>
                                    </Box>
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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.6,
                                            px: 1.4,
                                            py: 0.65,
                                            borderRadius: '8px',
                                            bgcolor: `${accent}14`,
                                            border: `1px solid ${accent}32`,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            '&:hover': { bgcolor: `${accent}22` },
                                        }}
                                    >
                                        <ArrowOutwardIcon sx={{ color: accent, fontSize: '14px' }} />
                                        <Typography
                                            sx={{ color: accent, fontSize: '12px', fontWeight: 600 }}
                                        >
                                            Live Demo
                                        </Typography>
                                    </Box>
                                </a>
                            </Tooltip>
                        )}
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

export default ProjectCard;
