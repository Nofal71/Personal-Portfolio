import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';



const Main = () => {
    return (
        <div className='flex flex-row sm:flex-wrap flex-nowrap bg-[#161616] m-5 border border-[#262626]  text-white rounded-lg'>
            <div className='w-1/2 max-h-full flex flex-col px-16 p-4 '>
                {/* TITLE */}
                <div className='text-3xl py-10'>
                    <h1>Frontend Developer</h1>
                </div>
                {/* Intro */}
                <div className='py-10 pr-28'>
                    <h1 className='text-4xl font-bold text-nowrap'>I'm Nofal Hassaan</h1> <br />
                    <p>As a Frontend Developer I design Dynamic Websites With Great Experience ..!</p>
                </div>
                <div className='flex flex-row flex-1 justify-start items-start pb-20 gap-4'>
                    <Button variant='contain' endIcon={<AddIcon />} sx={{ backgroundColor: '#E63E21' }}>Hire Me</Button>
                    <Button variant='outlined' endIcon={<ContentCopyIcon />} sx={{ color: 'white', borderColor: '#262626' , background:'black' , ":hover":{background:'transparent'} }}>Copy Email</Button>
                </div>
            </div>
        </div>
    )
}

export default Main
