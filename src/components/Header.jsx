import React from 'react'
import { Box, Typography } from '@mui/material'


const Header = ({ title }) => {
    return (
        <Box>
            <Typography fontSize='25px' fontWeight="700" letterSpacing='.5rem' mt={2} color='#65B741' textTransform='uppercase'>
                {title}
            </Typography>
        </Box>
    )
}

export default Header
