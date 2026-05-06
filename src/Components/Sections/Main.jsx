import React, { useContext } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import MainCard from '../utils/MainCard';
import { DownloadCV, CopyEmail } from '../utils/Main/Buttons';
import ProfileImage from '../utils/Main/ProfileImage';
import Hero from '../utils/Main/Hero';
import { motion } from 'framer-motion';
import { scrollContext } from '../../ContextAPI/ScrollContext';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import JobStatus from '../utils/Main/JobStatus';

const ParentBox = motion(MainCard);

const socialLinks = [
    {
        icon: <LinkedInIcon fontSize='small' />,
        href: 'https://www.linkedin.com/in/nofal-hassaan-421354296/',
        label: 'LinkedIn',
        hoverColor: '#0077B5',
    },
    {
        icon: <GitHubIcon fontSize='small' />,
        href: 'https://github.com/Nofal71',
        label: 'GitHub',
        hoverColor: '#ffffff',
    },
    {
        icon: <WhatsAppIcon fontSize='small' />,
        href: 'https://wa.me/qr/I2UDPZUEM4KUG1',
        label: 'WhatsApp',
        hoverColor: '#25D366',
    },
];

const Main = () => {
    const { aboutMe, setActiveTab } = useContext(scrollContext);

    return (
        <ParentBox
            ref={aboutMe}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileInView={() => setActiveTab(0)}
            sx={{ position: 'relative', overflow: 'hidden', minHeight: { md: '480px' } }}
        >
            {/* Background glow orbs */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(230,62,33,0.09) 0%, transparent 65%)',
                    filter: 'blur(50px)',
                    top: '-30%',
                    right: '-15%',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    bottom: '-10%',
                    left: '20%',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            {/* Left — text content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: { xs: '100%', lg: '55%' },
                    p: { xs: 2.5, md: 4, lg: 5 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 2.5,
                }}
            >
                <motion.div
                    initial={{ x: '-60px', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <Hero />
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    initial={{ y: '30px', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1.5,
                            flexDirection: { xs: 'column', sm: 'row' },
                            width: { xs: '100%', sm: 'auto' },
                        }}
                    >
                        <DownloadCV />
                        <CopyEmail />
                    </Box>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ y: '20px', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                >
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {socialLinks.map((s) => (
                            <Tooltip key={s.label} title={s.label}>
                                <IconButton
                                    component='a'
                                    href={s.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    size='small'
                                    sx={{
                                        color: '#555',
                                        border: '1px solid #222',
                                        borderRadius: '8px',
                                        p: '7px',
                                        transition: 'all 0.2s',
                                        '&:hover': {
                                            color: s.hoverColor,
                                            borderColor: s.hoverColor,
                                            background: 'rgba(255,255,255,0.03)',
                                        },
                                    }}
                                >
                                    {s.icon}
                                </IconButton>
                            </Tooltip>
                        ))}
                    </Box>
                </motion.div>
            </Box>

            {/* Right — photo */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: { xs: '100%', lg: '45%' },
                    p: { xs: 2, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-start', md: 'flex-end' },
                    justifyContent: 'center',
                }}
            >
                <motion.div
                    initial={{ y: '-30px', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <JobStatus />
                </motion.div>

                <motion.div
                    initial={{ x: '60px', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <ProfileImage />
                </motion.div>
            </Box>
        </ParentBox>
    );
};

export default Main;
