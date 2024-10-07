import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const JobStatus = () => {
  return (
    <>
            <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        gap: 1,
                        bgcolor: 'black',
                        p: 1.5,
                        borderRadius: '24px',
                        my: { xs: 2, md: 3, lg: 4 },
                        color: '#C0C0C0',
                    }}
                >
                    <IconButton
                        sx={{
                            backgroundColor: '#E63E21',
                            borderRadius: '50%',
                            p: 1,
                        }}
                    />
                    <Typography variant="body2">AVAILABLE FOR JOB</Typography>
                </Box>
      
    </>
  )
}

export default JobStatus
