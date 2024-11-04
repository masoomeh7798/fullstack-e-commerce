import { Box, Stack } from '@mui/material'
import React from 'react'

export default function AsideBanner() {
    return (
        <Stack width='19%' gap={2}>
            <Box overflow={'hidden'} height={'60vh'} borderRadius={'16px'} sx={{ '& img': { width: '100%', height: '100%' } }}><img src="20240606_202132.jpg" alt="" /></Box>
            <Box overflow={'hidden'} height={'60vh'} borderRadius={'16px'} sx={{ '& img': { width: '100%', height: '100%' } }}><img src="20240606_202133.jpg" alt="" /></Box>
        </Stack>
    )
}
