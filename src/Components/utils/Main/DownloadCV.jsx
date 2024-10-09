import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react'
import { cv } from '../../../Assets';


const DownloadCV = () => {
    return (
        <>
            <Button
                variant="contained"
                component='a'
                href={cv}
                download='MyResume.pdf'
                endIcon={<DownloadIcon />}
                sx={{
                    backgroundColor: '#E63E21',
                    textWrap: 'nowrap',
                    textTransform: 'capitalize'
                }}
                fullWidth
            >
                Download CV
            </Button>
        </>
    )
}

export default DownloadCV
