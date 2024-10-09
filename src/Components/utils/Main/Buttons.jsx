import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import React, { useState } from 'react'
import { cv } from '../../../Assets';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const DownloadCV = () => {

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

export const CopyEmail = () => {
    const [isCopied, setCopied] = useState(false);
    return (
        <>
            <Button
                onClick={() => {
                    const textArea = document.createElement('textarea');
                    textArea.value = 'hafiznofal76@gmail.com';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    setCopied(true)
                    setTimeout(() => setCopied(false), 5000)
                }}
                variant="contained"
                endIcon={!isCopied ? <ContentCopyIcon /> : <CheckIcon />}
                sx={{
                    color: 'white',
                    borderColor: '#262626',
                    backgroundColor: 'black',
                    '&:hover': { backgroundColor: 'transparent' },
                    textWrap: 'nowrap',
                    fontSize: '.8rem'
                }}
                fullWidth

            >
                Copy Email
            </Button>
        </>
    )
}

