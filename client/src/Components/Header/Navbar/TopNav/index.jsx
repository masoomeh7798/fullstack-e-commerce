import React from 'react'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button, Stack, Typography } from '@mui/material';
import { HiOutlineMenu } from "react-icons/hi";



export default function TopNav() {
  return (
    <Stack alignItems={'center'} direction={'row'} my={{ xs: 2, md: 3 }} gap={1}>
        <Stack flex={1} display={{xs:'inline-block',sm:'none'}}>
        <IconButton>
            <HiOutlineMenu color='var(--primary-clr)' opacity={'.7'}/>
        </IconButton>
        </Stack>

    {/* start logo section */}
    <Stack flex={1} alignItems={'center'} gap={{ xs: 1, md: 2 }} direction={'row'} >
      <Box width={{ md: '45px', xs: "35px" }} height={{ md: '45px', xs: "35px" }}>
        <img width={'100%'} height={'100%'} src='logoland3 (1).png' />
      </Box>
      <Typography noWrap color='var(--primary-clr)' fontSize={{ xs: "24px", md: '32px' }} fontWeight={'600'} component={'h1'}>رنگين مد</Typography>
    </Stack>
    {/* end logo section */}
    {/* strat search bar */}
    <Stack display={{ xs: 'none', sm: 'flex' }} bgcolor={'var(--text-clr)'} justifyContent={'space-between'} px={1} flex={2} alignItems={'center'} direction={'row'} border={'1px solid rgba(0,0,0,0.2)'} borderRadius={2}>
      <InputBase sx={{ flexGrow: 1, mr: 3, color: 'rgba(0,0,0,.7)' }}
        placeholder="محصولي كه ميخواي اينجا پيدا كن..."
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton sx={{ p: '10px' }} type="button" aria-label="search">
        <SearchIcon fontSize='medium' color='var(--primary-clr)' />
      </IconButton>
    </Stack>
    {/* end search bar */}
    {/* start user and cart part */}
    <Stack flex={1} justifyContent={'end'} gap={{ xs: 1, sm: 4 }} alignItems={'center'} direction={'row'}>
      <Button sx={{ borderRadius: 2, px: 2, py: 1, bgcolor: 'var(--secondary-clr)', display: { xs: 'none', sm: 'inline-block' },'&:hover':{bgcolor:'var(--secondary-clr-dark)'} }}>
        <Typography fontSize={{ xs: '12px', sm: "16px" }} noWrap color='var(--text-clr)' component={'p'}>ورود/ ثبت نام</Typography>
      </Button>
      <Box>
        <IconButton sx={{ bgcolor: "var(--text-clr)",'&:hover':{bgcolor:'var(--secondary-clr-light)'}, width: {xs:'40px',sm:'50px'}, height: {xs:'40px',sm:"50px"}, p: 0 }}>
          <Badge badgeContent={1} max={9} color='secondary'>
            <ShoppingCartIcon sx={{ width: {xs:'1.2em',sm:'1.5em'}, height: {xs:'1.2em',sm:'1.5em'} }} color='var(--text-clr)' />
          </Badge>
        </IconButton>
      </Box>
    </Stack>
    {/* end user and cart part */}
  </Stack>
  )
}
