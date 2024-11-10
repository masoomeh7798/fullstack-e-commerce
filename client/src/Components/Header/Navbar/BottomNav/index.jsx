import React, { useState } from 'react'
import { Box, Button, List, ListItem, Stack, Typography } from '@mui/material'
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdWatch } from "react-icons/io";
import { GiHeartNecklace } from "react-icons/gi";
import { GiDoubleNecklace } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiHeartEarrings } from "react-icons/gi";
import { FaRing } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import { FaHorseHead } from "react-icons/fa";
import { IoMdFlower } from "react-icons/io";
import { GiFootprint } from "react-icons/gi";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ButtonBox = { display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-clr)', fontSize: '16px', fontWeight: '500' }

const subMenuBox = { overflow: 'hidden', boxShadow: "1px 1px 3px 1px rgba(0,0,0,0.2)", borderRadius: '0 0 8px 8px', position: 'absolute !important', top: '200%', right: '0', bgcolor: 'white', textAlign: 'start', '& button': { width: '100%', borderRadius: '0', justifyContent: 'start', '&:hover': { bgcolor: 'var(--text-clr)' } }, opacity: 0, visibility: 'hidden', transition: 'all .2s ease-out' }

const listItemStyle = { position: 'relative', '&:hover .sub-menu': { opacity: 1, visibility: 'visible', top: '122% !important' } }


export default function BottomNav() {
    const [isOpenCat, setIsOpenCat] = useState(false);
    const handleOpenCat = () => {
        setIsOpenCat(isOpenCat ? false : true)
    }
    return (
        <> 
        <Stack  height={'60px'} alignItems={'center'} direction={'row'} mt={{ xs: 2, md: 3 }} mx={'auto'} gap={3}  >
            {/* start all category */}
            <Box  display={{ xs: 'none', md: 'inline-block' }} borderRadius={'8px'} sx={{ position: 'relative !important'}}  >
                <Button onClick={handleOpenCat} sx={{ py: '10px', display: 'flex', gap: '16px', bgcolor: 'var(--secondary-clr)', '&:hover': { bgcolor: 'var(--secondary-clr-dark)' }, '& svg': { color: 'var(--text-clr)' } }} startIcon={<IoIosMenu size={24} />} endIcon={<IoIosArrowDown size={22} />}>
                    <Typography fontSize={'16px'} color='var(--text-clr)' noWrap>همه دسته ها</Typography>
                </Button>
                <Box className={`${isOpenCat ? 'isCatOpen' : ''}`} sx={{ border: '1px solid rgba(0,0,0,0.2)', position: 'absolute ', top: '90%', right: '0', bgcolor: 'white', textAlign: 'start', '& button': { width: '100%', justifyContent: 'start', '&:hover': { bgcolor: 'var(--text-clr)' } }, opacity: 0, visibility: 'hidden', transition: 'all .2s ease-out', padding: '8px' }} width={'100%'} zIndex={'3 !important'}>
                    <List sx={{ '& li': { padding: '0' }, '& li a': { lineHeight: '2em' }, '& li:hover button': { bgcolor: 'var(--secondary-clr-light)' }, paddingInlineStart: '0 !important'}} >
                        <ListItem sx={{ position: 'static', '&:hover .allCategory-submenu': { visibility: 'visible', opacity: '1', right: '105.5%' } }}><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><IoMdWatch /><span style={{ marginLeft: '45px' }}>ساعت</span><FaAngleLeft opacity={'.8'} /></Link></Button>
                            <Box className='allCategory-submenu' bgcolor={'white'} boxShadow={'-1px 1px 2px 2px rgba(0,0,0,.2)'} position={'absolute'} top={'-8px'} right={'120%'} width={'fit-content'} zIndex={1} visibility={'hidden'} sx={{ opacity: '0', transition: 'all .2s ease-out' }} >
                                <List sx={{ '& li a': { color: 'var(--primary-clr)', textWrap: 'nowrap' }, padding: ' 16px 24px' }}>
                                    <ListItem>
                                        <Link to='/'>ساعت مردانه</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to='/'>ساعت زنانه</Link>
                                    </ListItem>
                                </List>
                            </Box>
                        </ListItem>
                        <ListItem sx={{ position: 'static' }}><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><GiHeartNecklace /><span>گردنبند</span></Link></Button>

                        </ListItem>
                        <ListItem><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><GiDoubleNecklace /><span>سرویس</span></Link></Button></ListItem>
                        <ListItem><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><GiBigDiamondRing /><span>انگشتر</span></Link></Button></ListItem>
                        <ListItem><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><GiHeartEarrings /><span>گوشواره</span></Link></Button></ListItem>
                        <ListItem><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><FaRing /><span>دستبند</span></Link></Button></ListItem>
                        <ListItem><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><FaGlasses /><span style={{ textWrap: 'nowrap' }}>بند عینک</span></Link></Button></ListItem>
                        <ListItem><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><FaHorseHead /><span style={{ textWrap: 'nowrap' }}>آویز و جاکلیدی</span></Link></Button></ListItem>
                        <ListItem><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><IoMdFlower /><span style={{ textWrap: 'nowrap' }}>گلسر</span></Link></Button></ListItem>
                        <ListItem><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><GiFootprint /><span style={{ textWrap: 'nowrap' }}>پابند</span></Link></Button></ListItem>
                        <ListItem><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><BsFillBox2HeartFill /><span style={{ textWrap: 'nowrap' }}>باکس و جعبه</span></Link></Button></ListItem>

                    </List>
                </Box>
            </Box>
            {/* end all category */}

            <List sx={{ '& li': { padding: '0' },'& > div': { px: '16px' },display:'flex', paddingInlineStart: '0 !important',alignItems:'center',direction:'row' ,justifyContent:'center',gap:{ xs: 1, md: 3 }}}  >
                    <ListItem sx={listItemStyle}><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><IoMdWatch /><span>ساعت</span></Link></Button>
                        <Box className='sub-menu' sx={subMenuBox}>
                            <Button ><Link style={{ textWrap: 'nowrap', color: 'var(--primary-clr)' }} to='/'>ساعت زنانه</Link></Button>
                            <Button ><Link style={{ textWrap: 'nowrap', color: 'var(--primary-clr)' }} to='/'>ساعت مردانه</Link></Button>
                        </Box>
                    </ListItem>

                    <ListItem sx={listItemStyle}><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><GiHeartNecklace /><span>گردنبند</span></Link></Button>
                        <Box className='sub-menu' sx={subMenuBox}>
                            <Button ><Link style={{ textWrap: 'nowrap', color: 'var(--primary-clr)' }} to='/'>گردنبند زنانه</Link></Button>
                            <Button ><Link style={{ textWrap: 'nowrap', color: 'var(--primary-clr)' }} to='/'>گردنبند مردانه</Link></Button>
                        </Box>
                    </ListItem>
                    <ListItem sx={listItemStyle}><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><GiDoubleNecklace /><span>سرویس</span></Link></Button></ListItem>
                    <ListItem sx={listItemStyle}><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><GiBigDiamondRing /><span>انگشتر</span></Link></Button></ListItem>
                    <ListItem sx={listItemStyle}><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><GiHeartEarrings /><span>گوشواره</span></Link></Button></ListItem>
                    <ListItem sx={listItemStyle}><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><FaRing /><span>دستبند</span></Link></Button></ListItem>
                    <ListItem ><Button sx={{ borderRadius: '16px', px: { xs: '8px', md: '16px' }, '&:hover': { backgroundColor: 'var(--secondary-clr-light)' } }} ><Link style={ButtonBox} to='/'><span style={{ textWrap: 'nowrap' }}>سایر دسته بندی ها</span></Link></Button></ListItem>

               
            </List>
        </Stack>
        </>  
    )
}
