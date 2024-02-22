import React from 'react'
import { Box, } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
const CitiesCountries = () => {
    const columns1 = [{ field: 'EnterCountry', width: '150' }];
    // const columns2 = [{ field: 'الدولة' },
    // { field: 'أدخل اسم المنطقة' }];
    // const columns3 = [{ field: 'الدولة' },
    // { field: 'المنطقة' },
    // { field: 'أدخل اسم المدينة' }];

    const rows1 = [{ id: '1', EnterCountry: 'Eyad' }]
    // const rows2 = [undefined]
    // const rows3 = [undefined]

    return (
        <Box sx={{ height: 400, width: '30%' }}>
            <DataGrid rows={rows1} columns={columns1} />
            {/* <DataGrid rows={rows1} columns={columns1} /> */}
            {/* <DataGrid rows={rows1} columns={columns3} /> */}
        </Box>
    )
}

export default CitiesCountries
