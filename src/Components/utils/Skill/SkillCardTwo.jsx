import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const SkillCardTwo = ({ index, skill }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#C0C0C0',
                fontWeight: '900',
                background: 'linear-gradient(249.05deg, rgba(230, 62, 33, 0.2) 18.59%, rgba(51, 19, 14, 0) 53.25%), #1B1B1B',
                padding: '16px',
                border: '1px solid #262626',
                borderRadius: '8px',
                flexGrow: index % 3 === 2 ? 1 : 0.5,
                flexShrink: 0,
            }}
        >
            <Typography variant="h5">{skill}</Typography>
        </motion.div>
    );
};

export default SkillCardTwo;

