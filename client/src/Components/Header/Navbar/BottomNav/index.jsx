import React from 'react'
import { Box, Button, List, ListItem, Stack, Typography } from '@mui/material'
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdWatch } from "react-icons/io";
import { GiHeartNecklace } from "react-icons/gi";
import { GiDoubleNecklace } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiHeartEarrings } from "react-icons/gi";
import { FaRing } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ButtonBox={ display: 'flex', alignItems: 'center',gap:'8px' ,color:'var(--primary-clr)',fontSize:'16px',fontWeight:'500'}


export default function BottomNav() {
    return (
        <Stack  sx={{overflowX:'scroll','::-webkit-scrollbar':{display:'none'}}} alignItems={'center'} direction={'row'} my={{ xs: 2, md: 3 }} mx={'auto'} gap={3}>
            <Box display={{xs:'none',md:'inline-block'}} borderRadius={'8px'} >
                <Button sx={{ py: '8px', display: 'flex', gap: '16px', bgcolor: 'var(--secondary-clr)','&:hover':{bgcolor:'var(--secondary-clr-dark)'}, '& svg': { color: 'var(--text-clr)' } }} startIcon={<IoIosMenu size={24} />} endIcon={<IoIosArrowDown size={22} />}>
                    <Typography fontSize={'16px'} color='var(--text-clr)' noWrap>دسته بندی ها</Typography>
                </Button>
            </Box>
            <List  sx={{'& li':{padding:'0'},paddingInlineStart:'0 !important'}}>
            <Stack sx={{'& > div':{px:'16px'}}}  direction={'row'} alignItems={'center'} justifyContent={'start'} gap={{xs:1,md:3}}>
            <ListItem><Button sx={{borderRadius:'16px',px:{xs:'8px',md:'16px'},'&:hover':{backgroundColor:'var(--secondary-clr-light)'}}} ><Link style={ButtonBox} to='/'><IoMdWatch/><span>ساعت</span></Link></Button></ListItem>
            <ListItem><Button sx={{borderRadius:'16px',px:{xs:'8px',md:'16px'},'&:hover':{backgroundColor:'var(--secondary-clr-light)'}}} ><Link style={ButtonBox} to='/'><GiHeartNecklace/><span>گردنبند</span></Link></Button></ListItem>
            <ListItem><Button sx={{borderRadius:'16px',px:{xs:'8px',md:'16px'},'&:hover':{backgroundColor:'var(--secondary-clr-light)'}}} ><Link style={ButtonBox} to='/'><GiDoubleNecklace/><span>سرویس</span></Link></Button></ListItem>
            <ListItem><Button sx={{borderRadius:'16px',px:{xs:'8px',md:'16px'},'&:hover':{backgroundColor:'var(--secondary-clr-light)'}}} ><Link style={ButtonBox} to='/'><GiBigDiamondRing/><span>انگشتر</span></Link></Button></ListItem>
            <ListItem><Button sx={{borderRadius:'16px',px:{xs:'8px',md:'16px'},'&:hover':{backgroundColor:'var(--secondary-clr-light)'}}} ><Link style={ButtonBox} to='/'><GiHeartEarrings/><span>گوشواره</span></Link></Button></ListItem>
            <ListItem><Button sx={{borderRadius:'16px',px:{xs:'8px',md:'16px'},'&:hover':{backgroundColor:'var(--secondary-clr-light)'}}} ><Link style={ButtonBox} to='/'><FaRing/><span>دستبند</span></Link></Button></ListItem>
            <ListItem><Button sx={{borderRadius:'16px',px:{xs:'8px',md:'16px'},'&:hover':{backgroundColor:'var(--secondary-clr-light)'}}} ><Link style={ButtonBox} to='/'><span style={{textWrap:'nowrap'}}>سایر دسته بندی ها</span></Link></Button></ListItem>

            </Stack>
            </List>
        </Stack>
    )
}
