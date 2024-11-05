import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { MdEmail } from "react-icons/md";


export default function NewsLetter() {
    return (
        <Stack height={{xs:'45vh',md:'50vh'}} bgcolor={'var(--primary-clr)'} alignItems={{xs:'center',md:'start'}} position={'relative'} justifyContent={'center'} px={{xs:0,sm:'5%',lg:'9%'}}>
            <Stack color={'var(--text-clr)'} width={{xs:'90%',md:'50%'}}>
                <Typography sx={{ opacity: '.85' }} fontSize={{xs:'1em',sm:'1.2em'}} mb={2}>ارسال رایگان برا ی اولین خرید</Typography>
                <Typography sx={{ opacity: '.95' }} fontSize={{xs:'1.5em',sm:'2em'}} mb={1}>عضویت در خبرنامه رنگین مد</Typography>
                <Typography sx={{ opacity: '.5' }} fontSize={{xs:'.7em',sm:'1em'}} mb={1}>برای دریافت جدیدترین اخبار رنگین مد <br />عضو خبرنامه شوید...</Typography>
                <Box position={'relative'}  bgcolor={'var(--text-clr)'}  padding={{xs:'4px',sm:'10px'}} borderRadius={'8px'} paddingRight={{xs:'8% !important',sm:'5% !important'}} sx={{'& input':{fontSize:{xs:'16px',sm:'24px'}},'& svg':{fontSize:{xs:"20px",sm:'28px'}}}}>
                    <MdEmail style={{position:'absolute',top:'50%',right:'10px',transform:'translateY(-50%)',opacity:.5}} color='var(--secondary-clr)' />
                    <input placeholder='آدرس ایمیل...' type="text" style={{width:'80%',padding:'8px',outline:'none',border:'0',backgroundColor:'transparent',marginRight:'8px'}}/>
                    <Button sx={{position:'absolute',bgcolor:'var(--secondary-clr)',top:'50%',left:'10px',transform:'translateY(-50%)',fontSize:'16px',padding:{xs:'8px 16px',sm:'14px 20px'}}}  color='var(--primary-clr)'>عضویت</Button>
                </Box>
            </Stack>
            <Box display={{xs:'none',md:'inline-block'}} sx={{position: 'absolute',top:'50%',left:'5%',transform:'translateY(-50%)'}} width={{md:'35%'}} height={{md:'70%',lg:'90%'}}>
                   <img className='news-letter-img' style={{ width:'100%',height:'100%' }} src="pngimg.com - jewelry_PNG6796.png" alt="" />
            </Box>
         

        </Stack>
    )
}
