import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export default function FeaturedCategories() {
    return (

        <Stack direction={'column'} gap={2} my={3} sx={{overflowX:'scroll'}}>
            <Typography fontSize={'1.5em'} fontWeight={400} component={'h3'}>دسته بندی های اصلی</Typography>
            <Stack gap={1} direction={'row'} justifyContent={'space-around'} sx={{ overflowX: 'scroll' ,overflow:'visible'}} >
                <Link style={{overflow:'visible !important'}} to='/'>
                    <Stack sx={{ '&:hover div': { boxShadow: ' 0 3px 6px rgba(0,0,0,.5),0 3px 6px rgba(0,0,0,.5)', transform: 'translateY(-5px)' }, '& div': { transition: 'all .3s' }}} alignItems={'center'} justifyContent={'center'} gap={1}>
                        <Box width='120px' height={'120px'} borderRadius='50%'>
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius:'50%' }} src='20241104_234358.jpg' alt="" />
                        </Box>
                        <Typography fontWeight={500} color='primary'>بدلیجات مردانه</Typography>
                    </Stack>
                </Link>
                <Link to='/'>
                    <Stack sx={{ '&:hover div': { boxShadow: ' 0 3px 6px rgba(0,0,0,.5),0 3px 6px rgba(0,0,0,.5)', transform: 'translateY(-5px)' }, '& div': { transition: 'all .3s' } }} alignItems={'center'} justifyContent={'center'} gap={1}>
                        <Box width='120px' height={'120px'} borderRadius={'50%'} overflow={'hidden'}>
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='20241104_234320.jpg' alt="" />
                        </Box>
                        <Typography fontWeight={500} color='primary'>بدلیجات زنانه</Typography>
                    </Stack>
                </Link>
                <Link to='/'>
                    <Stack sx={{ '&:hover div': { boxShadow: ' 0 3px 6px rgba(0,0,0,.5),0 3px 6px rgba(0,0,0,.5)', transform: 'translateY(-5px)' }, '& div': { transition: 'all .3s' } }} alignItems={'center'} justifyContent={'center'} gap={1}>
                        <Box width='120px' height={'120px'} borderRadius={'50%'} overflow={'hidden'}>
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='20241104_234348.jpg' alt="" />
                        </Box>
                        <Typography fontWeight={500} color='primary'>بدلیجات دخترانه</Typography>
                    </Stack>
                </Link>
                <Link to='/'>
                    <Stack sx={{ '&:hover div': { boxShadow: ' 0 3px 6px rgba(0,0,0,.5),0 3px 6px rgba(0,0,0,.5)', transform: 'translateY(-5px)' }, '& div': { transition: 'all .3s' } }} alignItems={'center'} justifyContent={'center'} gap={1}>
                        <Box width='120px' height={'120px'} borderRadius={'50%'} overflow={'hidden'}>
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='20241104_234212.jpg' alt="" />
                        </Box>
                        <Typography fontWeight={500} color='primary'>اکسسوری مو</Typography>
                    </Stack>
                </Link>
                <Link to='/'>
                    <Stack sx={{ '&:hover div': { boxShadow: ' 0 3px 6px rgba(0,0,0,.5),0 3px 6px rgba(0,0,0,.5)', transform: 'translateY(-5px)' }, '& div': { transition: 'all .3s' } }} alignItems={'center'} justifyContent={'center'} gap={1}>
                        <Box width='120px' height={'120px'} borderRadius={'50%'} overflow={'hidden'}>
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='20241104_234542.jpg' alt="" />
                        </Box>
                        <Typography fontWeight={500} color='primary'>آویز و جاسوییچی</Typography>
                    </Stack>
                </Link>
                <Link to='/'>
                    <Stack sx={{ '&:hover div': { boxShadow: ' 0 3px 6px rgba(0,0,0,.5),0 3px 6px rgba(0,0,0,.5)', transform: 'translateY(-5px)' }, '& div': { transition: 'all .3s' } }} alignItems={'center'} justifyContent={'center'} gap={1}>
                        <Box width='120px' height={'120px'} borderRadius={'50%'} overflow={'hidden'}>
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='20241104_234241.jpg' alt="" />
                        </Box>
                        <Typography fontWeight={500} color='primary'>ساعت</Typography>
                    </Stack>
                </Link>
                <Link to='/'>
                    <Stack sx={{ '&:hover div': { boxShadow: ' 0 3px 6px rgba(0,0,0,.5),0 3px 6px rgba(0,0,0,.5)', transform: 'translateY(-5px)' }, '& div': { transition: 'all .3s' } }} alignItems={'center'} justifyContent={'center'} gap={1}>
                        <Box width='120px' height={'120px'} borderRadius={'50%'} overflow={'hidden'}>
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='20241104_234420.jpg' alt="" />
                        </Box>
                        <Typography fontWeight={500} color='primary'>باکس و جعبه</Typography>
                    </Stack>
                </Link>
            </Stack>


        </Stack>
    )
}
