import { Box, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material'
import React from 'react'
import { CiGift } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { Gi3dGlasses } from 'react-icons/gi';


export default function Footer() {
    return (
        <footer>
            {/* start top footer */}
            <Box width={{ lg: '85%', sm: '90%', xs: "95%" }} mx={'auto'} >
                <Stack flexWrap={'wrap'} width={'100%'} direction={'row'} padding={'20px 0'} sx={{ '& svg': { fontSize: '28px' }, '& p': { fontWeight: 500 } }} borderBottom={'1px solid rgba(0,0,0,.2)'}>
                    <Stack borderBottom={{ xs: '1px solid rgba(0,0,0,.2)', lg: 0 }} width={{ xs: '100%', sm: '50%', lg: '25%' }} direction={'row'} gap={1} justifyContent={'center'} alignItems={'center'} padding={'8px 16px'}>
                        <CiGift /><Typography>هر روز با محصولات جدید</Typography>
                    </Stack>
                    <Stack borderBottom={{ xs: '1px solid rgba(0,0,0,.2)', lg: 0 }} width={{ xs: '100%', sm: '50%', lg: '25%' }} direction={'row'} gap={1} justifyContent={'center'} alignItems={'center'} padding={'8px 16px'} borderRight={{ xs: 0, sm: '1px solid rgba(0,0,0,.2)' }}>
                        <CiDiscount1 /><Typography>تخفیفات شگفت انگیز روزانه</Typography>
                    </Stack>
                    <Stack borderBottom={{ xs: '1px solid rgba(0,0,0,.2)', sm: 0 }} width={{ xs: '100%', sm: '50%', lg: '25%' }} direction={'row'} gap={1} justifyContent={'center'} alignItems={'center'} padding={'8px 16px'} borderRight={{ xs: 0, lg: '1px solid rgba(0,0,0,.2)' }}>
                        <MdOutlineLocalShipping /><Typography>ارسال رایگان برای اولین خرید</Typography>
                    </Stack>
                    <Stack width={{ xs: '100%', sm: '50%', lg: '25%' }} direction={'row'} gap={1} justifyContent={'center'} alignItems={'center'} padding={'8px 16px'} borderRight={{ xs: 0, sm: '1px solid rgba(0,0,0,.2)' }}>
                        <CiBadgeDollar /><Typography>قیمت های مناسب و منصفانه</Typography>
                    </Stack>
                </Stack>
                {/* end top footer */}
                {/* start middle footer */}
                <Stack direction={'row'} sx={{'& > div':{width:'25%',padding:'24px 32px'}}} height={'350px'}>
                    {/* start about us */}
                    <Stack>
                        <Stack>
                        <Typography color='secondary' variant='h3' fontSize={'1.2em'} fontWeight={500} mb={1} >درباره ما</Typography>
                        <Typography textAlign={'justify '}>فروشگاه بدلیجات رنگین مد با بیش از 4 سال سابقه فعالیت در عرصه فروش بدلیجات و اکسسوری زنانه مردانه ساعت اکسسوری مو عرضه کننده با کیفیت ترین و جدیدترین بدلیجات و اکسسوری روز بازار در خدمت شماست.</Typography>
                        </Stack>
                    </Stack>
                    {/* end about us */}
                    {/* start address */}
                    <Stack>
                        <Stack mb={2}>
                        <Typography color='secondary' variant='h3' fontSize={'1.2em'} fontWeight={500} mb={1} >آدرس</Typography>
                            <Typography>مشهد</Typography>
                        </Stack>
                        <Stack>
                        <Typography sx={{textWrap:'nowrap'}} color='secondary' variant='h3' fontSize={'1.2em'} fontWeight={500} mb={1} >تلفن تماس</Typography>
                        <Typography>+989360433860</Typography>
                        </Stack>
                    </Stack>
                    {/* end address */}
                    {/* start questions list */}
                    <Stack>
                    <Typography color='secondary' variant='h3' fontSize={'1.2em'} fontWeight={500} mb={1} >سوالات پر تکرار</Typography>
                    <List>
                            <ListItem><ListItemIcon><Gi3dGlasses/></ListItemIcon><Link to='/'>راهنمای نگهداری بدلیجات</Link></ListItem>
                            <ListItem><ListItemIcon><Gi3dGlasses/></ListItemIcon><Link to='/'>آشنایی با برند ها</Link></ListItem>
                            <ListItem><ListItemIcon><Gi3dGlasses/></ListItemIcon><Link to='/'>همکاری</Link></ListItem>
                            <ListItem><ListItemIcon><Gi3dGlasses/></ListItemIcon><Link to='/'>راهنمای خرید</Link></ListItem>
                            <ListItem><ListItemIcon><Gi3dGlasses/></ListItemIcon><Link to='/'>رهگیری مرسولات پستی</Link></ListItem>
        
                        </List>
                    </Stack>
                    {/* end questions list */}
                    {/* start namade etemad */}
                    <Stack>
                        <Box>
                            <img src="" alt="" />
                        </Box>
                    </Stack>
                    {/* end namade etemad */}
                </Stack>
                {/* end middle footer */}
            </Box>
        </footer>
    )
}
