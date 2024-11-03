import { Badge, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header style={{borderBottom:'1px solid rgba(0,0,0,0.2)'}}>

      {/* start top strip */}
      <Box py={1} bgcolor={'var(--secondary-clr)'} align='center'><Typography variant='body1' fontWeight={'500'} fontSize={'16px'} color='var(--text-clr)'>"عرضه به روزترين بدليجات برند و استيل ."</Typography>
      </Box>
      {/* end top strip */}
      {/* strat navbar */}
      <Navbar  />
      {/* end navbar */}
    
     
    </header>
  )
}
