import React from 'react';
import MainCard from '../utils/MainCard';
import { InputLabel, TextField, Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <MainCard sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#121212', padding: { xs: 0, sm: '2rem' }, paddingTop: { xs: '2rem', } }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: 'white' }}
      >
        Get in Touch
      </Typography>
      <MainCard
        sx={{
          width: { xs: "100%", sm: 1 / 2 },
          flexDirection: 'column',
          backgroundColor: '#1e1e1e',
          padding: '2rem',
          borderRadius: '10px',
          color: 'white'
        }}
      >
        <InputLabel sx={{ color: 'white', marginBottom: '0.5rem' }}>Name</InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: 'white' } }}
          sx={{ marginBottom: '1rem', input: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: '#64b5f6' } } }}
        />

        <InputLabel sx={{ color: 'white', marginBottom: '0.5rem' }}>Email</InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: 'white' } }}
          sx={{ marginBottom: '1rem', input: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: '#64b5f6' } } }}
        />

        <InputLabel sx={{ color: 'white', marginBottom: '0.5rem' }}>Your Message</InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          InputLabelProps={{ style: { color: 'white' } }}
          sx={{ input: { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: '#64b5f6' } } }}
        />
      </MainCard>
    </MainCard>
  );
};

export default ContactUs;
