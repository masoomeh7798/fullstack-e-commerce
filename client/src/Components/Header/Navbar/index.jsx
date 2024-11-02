import React from 'react'
import TopNav from './TopNav'
import { Box } from '@mui/material'
import BottomNav from './BottomNav'

export default function Navbar() {
    return (
        <nav >
            <Box sx={{'& button:hover':{opacity:.85},'& button':{transition:'all .3s ease-out'}}} width={{ lg: '85%', sm: '90%', xs: "95%" }} mx={'auto'} >
                {/* start top navbar */}
                <TopNav />
                {/* end top navbar */}
                {/* start bottom navbar */}
                <BottomNav/>
                {/* end bottom navbar */}
            </Box>
        </nav>
    )
}
