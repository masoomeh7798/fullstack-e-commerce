import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { CiGift } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CiBadgeDollar } from "react-icons/ci";


export default function Footer() {
    return (
        <footer>
            <Box  width= { {lg: '85%', sm: '90%', xs: "95%" }} mx={'auto'} >
                {/* start top footer */}
                <Stack flexWrap={'wrap'} width={'100%'} direction={'row'} padding={'20px 0'} sx={{'& svg':{fontSize:'28px'},'& p':{fontWeight:500}}} borderBottom={'1px solid rgba(0,0,0,.2)'}>
                    <Stack borderBottom={{xs:'1px solid rgba(0,0,0,.2)',lg:0}} width={{xs:'100%',sm:'50%',lg:'25%'}} direction={'row'} gap={1} justifyContent={'center'} alignItems={'center'} padding={'8px 16px'}>
                        <CiGift/><Typography>هر روز با محصولات جدید</Typography>
                    </Stack>
                    <Stack borderBottom={{xs:'1px solid rgba(0,0,0,.2)',lg:0}} width={{xs:'100%',sm:'50%',lg:'25%'}} direction={'row'} gap={1} justifyContent={'center'} alignItems={'center'} padding={'8px 16px'} borderRight={{xs:0,sm:'1px solid rgba(0,0,0,.2)'}}>
                        <CiDiscount1/><Typography>تخفیفات شگفت انگیز روزانه</Typography>
                    </Stack>
                    <Stack borderBottom={{xs:'1px solid rgba(0,0,0,.2)',sm:0}} width={{xs:'100%',sm:'50%',lg:'25%'}} direction={'row'} gap={1} justifyContent={'center'} alignItems={'center'} padding={'8px 16px'} borderRight={{xs:0,lg:'1px solid rgba(0,0,0,.2)'}}>
                        <MdOutlineLocalShipping/><Typography>ارسال رایگان برای اولین خرید</Typography>
                    </Stack>
                    <Stack  width={{xs:'100%',sm:'50%',lg:'25%'}} direction={'row'} gap={1} justifyContent={'center'} alignItems={'center'} padding={'8px 16px'} borderRight={{xs:0,sm:'1px solid rgba(0,0,0,.2)'}}>
                        <CiBadgeDollar/><Typography>قیمت های مناسب و منصفانه</Typography>
                    </Stack>
                </Stack>
                {/* end top footer */}
            </Box>
        </footer>
    )
}
