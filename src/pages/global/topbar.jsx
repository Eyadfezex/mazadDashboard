import React from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display='flex' justifyContent='space-between' p={1.5} backgroundColor={colors.primary[700]} borderRadius='10px' m={1}>
            {/* {Search bar} */}
            < Box display='flex'
                backgroundColor={colors.primary[400]}
                borderRadius='3px'
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />

                <IconButton type='button' sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box >
            {/* {ICONS} */}
            < Box display='flex' >
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
                <IconButton><NotificationsIcon /></IconButton>
            </Box >
        </Box >
    )
}

export default Topbar
