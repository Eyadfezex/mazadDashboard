import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'

const AuctionFees = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const fs = '20px'

    return (
        <Box>
            <Header title='Auction fees' />
            <Box sx={{
                position: 'absolute',
                left: '25rem',
                top: '12rem',
                display: 'flex',
                gap: '5rem'
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: '1rem'
                }}>
                    <Typography
                        padding='30px 60px'
                        sx={{ background: colors.primary[700], borderRadius: '8px', fontSize: fs }}
                    >
                        رسوم مزاد السيارات
                    </Typography>
                    <Typography
                        padding='30px 60px'
                        sx={{ background: colors.primary[700], borderRadius: '8px', fontSize: fs }}
                    >
                        0
                    </Typography>

                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: '1rem'
                }}>
                    <Typography
                        padding='30px 60px'
                        sx={{ background: colors.primary[700], borderRadius: '8px', fontSize: fs }}
                    >
                        رسوم المزاد العادي
                    </Typography>
                    <Typography
                        padding='30px 60px'
                        sx={{ background: colors.primary[700], borderRadius: '8px', fontSize: fs }}
                    >
                        0
                    </Typography>

                </Box>

            </Box>
        </Box>
    )
}

export default AuctionFees;