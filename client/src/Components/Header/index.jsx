import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <Box py={1} bgcolor={'var(--secondary-clr)'} align='center'><Typography fontSize={'16px'} color='var(--text-clr)'>"عرضه به روزترين بدليجات برند و استيل ."</Typography>
      </Box>
  )
}
