import { Badge, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'


export default function Header() {
  return (
    <header>

      {/* start top strip */}
      <Box py={1} bgcolor={'var(--secondary-clr)'} align='center'><Typography variant='body1' fontWeight={'500'} fontSize={'16px'} color='var(--text-clr)'>"عرضه به روزترين بدليجات برند و استيل ."</Typography>
      </Box>
      {/* end top strip */}
      {/* strat navbar */}
      <Navbar />
      {/* end navbar */}

    </header>
  )
}
