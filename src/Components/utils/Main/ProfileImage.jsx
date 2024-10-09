import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { photo } from '../../../Assets'

const ProfileImage = () => {
    return (
        <>
            <Box
                sx={{
                    border: '2px solid #E63E21',
                    borderRadius: '50%',
                    width: { xs: '100px', sm: '200px' },
                    height: { xs: '100px', sm: '200px' },
                    overflow: 'hidden',
                    my: { xs: 0, md: 3, lg: 4 },
                }}
            >
                <Avatar
                    src={photo}
                    alt="Nofal Hassaan"
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Box>

        </>
    )
}

export default ProfileImage
