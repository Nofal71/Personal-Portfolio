import React, { useRef } from 'react';
import { Typography } from '@mui/material';

const SkillCardTwo = ({ index, skill }) => {
  const cardRef = useRef(null);

  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    const offsetLeft = currentTarget.getBoundingClientRect().left;
    const offsetTop = currentTarget.getBoundingClientRect().top;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const THRESHOLD = 30; 
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    cardRef.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  const resetStyles = () => {
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleHover}
      onMouseLeave={resetStyles}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#C0C0C0',
        fontWeight: '900',
        background:
          'linear-gradient(249.05deg, rgba(230, 62, 33, 0.2) 18.59%, rgba(51, 19, 14, 0) 53.25%), #1B1B1B',
        padding: '16px',
        border: '1px solid #262626',
        borderRadius: '8px',
        flexGrow: index % 3 === 2 ? 1 : 0.5,
        flexShrink: 0,
        transition: 'transform 0.05s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      <Typography variant="h5">{skill}</Typography>
    </div>
  );
};

export default SkillCardTwo;
