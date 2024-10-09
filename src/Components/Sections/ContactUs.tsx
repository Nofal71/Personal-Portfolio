import React, { useContext, useRef, useState } from 'react';
import MainCard from '../utils/MainCard';
import { InputLabel, TextField, Typography, Button } from '@mui/material';
import { scrollContext } from '../../ContextAPI/ScrollContext';
import axios from 'axios';

// Correctly define the ref types for inputs and textarea
interface InputDataTypes {
  name: React.RefObject<HTMLInputElement>,
  email: React.RefObject<HTMLInputElement>,
  message: React.RefObject<HTMLTextAreaElement>
}

interface formData {
  name: string,
  email: string,
  message: string
}

const ContactUs = () => {
  const [isSubmitting, setSubmit] = useState<Boolean>(false)
  const inputData: InputDataTypes = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null),
  };

  const saveFormData = async (formData: formData) => {
    await axios.post('http://localhost:3001/data', formData)
  }

  const handleSave = async () => {
    setSubmit(true)
    try {
      await saveFormData({
        name: inputData.name.current?.value || '',
        email: inputData.email.current?.value || '',
        message: inputData.message.current?.value || ''
      })
      setSubmit(false)
    } catch (error) {
      setSubmit(false)
      console.log(error, 'Error in submitting data')
    }

    if (inputData.name.current && inputData.email.current && inputData.message.current) {
      inputData.email.current.value = '';
      inputData.message.current.value = '';
      inputData.name.current.value = '';
    }
  };

  const ContactUs = useContext(scrollContext)

  return (
    <div ref={ContactUs}>
      <MainCard
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#121212',
          padding: { xs: 0, sm: '2rem' },
          paddingTop: { xs: '2rem' }
        }}
      >
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
            inputRef={inputData.name}  
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{
              marginBottom: '1rem',
              input: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: '#64b5f6' }
              }
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
                '&.Mui-focused fieldset': { borderColor: '#64b5f6' }
              }
            }}
          />

          <InputLabel sx={{ color: 'white', marginBottom: '0.5rem' }}>Your Message</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            inputRef={inputData.message}  
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{
              input: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: '#64b5f6' }
              }
            }}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: '1rem', textTransform: 'capitalize' }}
            onClick={handleSave}
          >
            {isSubmitting ? 'Submitting.....' : 'Submit'}
          </Button>
        </MainCard>
      </MainCard>
    </div>
  );
};

export default ContactUs;
