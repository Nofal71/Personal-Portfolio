import React, { useContext, useRef, useState } from 'react';
import MainCard from '../utils/MainCard';
import { InputLabel, TextField, Typography, Button, Snackbar, Alert } from '@mui/material';
import { scrollContext } from '../../ContextAPI/ScrollContext';
import axios from 'axios';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [isSubmitting, setSubmit] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const inputData = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null),
  };

  const saveFormData = async (formData) => {
    await axios.post('https://6781ebbbc51d092c3dcdacc6.mockapi.io/portfolio/formData', formData);
  };


  const handleSave = async () => {
    setSubmit(true);
    try {
      await saveFormData({
        name: inputData.name.current?.value || '',
        email: inputData.email.current?.value || '',
        message: inputData.message.current?.value || '',
      });
      setSubmit(false);
      setOpenSnackbar(true);
      if (inputData.name.current && inputData.email.current && inputData.message.current) {
        inputData.name.current.value = '';
        inputData.email.current.value = '';
        inputData.message.current.value = '';
      }
    } catch (error) {
      setSubmit(false);
      console.log(error, 'Error in submitting data');
    }
  };

  const { contactUs, setActiveTab } = useContext(scrollContext);

  return (
    <motion.div whileInView={() => setActiveTab(2)} ref={contactUs}>
      <MainCard
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#121212',
          padding: { xs: 0, sm: '2rem' },
          paddingTop: { xs: '2rem' },
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white' }}>
          Get in Touch
        </Typography>
        <MainCard
          sx={{
            width: { xs: 0.75, sm: 1 / 2 },
            flexDirection: 'column',
            backgroundColor: '#1e1e1e',
            padding: { sm: '2rem' },
            borderRadius: '10px',
            color: 'white',
            marginBottom: { xs: 3, sm: 0 },
          }}
        >
          <InputLabel sx={{ color: 'white', marginBottom: '0.5rem' }}>Name</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            inputRef={inputData.name}
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{
              marginBottom: '1rem',
              input: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: '#64b5f6' },
              },
            }}
          />

          <InputLabel sx={{ color: 'white', marginBottom: '0.5rem' }}>Email</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            inputRef={inputData.email}
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{
              marginBottom: '1rem',
              input: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: '#64b5f6' },
              },
            }}
          />

          <InputLabel sx={{ color: 'white', marginBottom: '0.5rem' }}>Your Message</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            inputRef={inputData.message}
            sx={{
              color: 'white !important',
              input: { color: '#f5a623 !important' }, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: '#64b5f6' },
              },
            }}
          />

          <Button
            variant="contained"
            sx={{ marginTop: '1rem', textTransform: 'capitalize', backgroundColor: 'rgba(230, 62, 33, 0.2)' }}
            onClick={handleSave}
          >
            {isSubmitting ? 'Submitting.....' : 'Submit'}
          </Button>
        </MainCard>
      </MainCard>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Thank you for getting in touch!
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default ContactUs;
