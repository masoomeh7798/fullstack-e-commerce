import React, { useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom';
import './style.css'


const ButtonBox = { justifyContent: 'start', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-clr)', fontSize: '16px', fontWeight: '500', width: '100%', '&:hover': { bgcolor: 'transparent' } }

const subMenuBox = { overflow: 'hidden', boxShadow: "1px 1px 3px 1px rgba(0,0,0,0.2)", borderRadius: ' 8px 0  0 8px', position: 'absolute', top: '0 !important', right: '105.5%', bgcolor: 'white', textAlign: 'start', '& a': { width: '100%', borderRadius: '0', justifyContent: 'start',p:'8px 16px', '&:hover': { bgcolor: 'var(--secondary-clr-light)' } }, opacity: 0, visibility: 'hidden', transition: 'all .2s ease-out' }

const listItemStyle = {}
export default function BottomNav() {
    // all category btn
    const [isOpenCat, setIsOpenCat] = useState(false);
    const handleOpenCat = () => {
        setIsOpenCat(isOpenCat ? false : true)
    }

    // get all categories
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(import.meta.env.VITE_BASE_API + 'category')
                const data = await res.json()
                setCategories(data?.data?.categories)

            } catch (error) {
                console.log(error);
            }
        })()

    }, []);



    const catItemsInAllcats = categories?.map((e) => {
        if (!e.subCategory) {
            const subCats = categories?.filter(subCat => subCat?.subCategory?._id == e?._id)?.map(subCat =>  (
                            <Button
                                key={subCat?._id}
                                sx={{ textWrap: 'nowrap', color: 'var(--primary-clr)' }}
                                href={`/products/${subCat?._id}/${subCat?.title.replaceAll(' ', '-')}`}
                                disableRipple
                                target='_blank'
                                className='sub-menu'>{subCat?.title}
                            </Button>
                        )
                )
   
                return (
                <>
                    <ListItem key={e?._id} sx={{
                        borderRadius: '16px',
                        px: { xs: '8px', md: '16px' },
                        '&:hover': { backgroundColor: 'var(--secondary-clr-light)' },
                        position: 'relative',
                        '&:hover .sub-menu': { opacity: 1, visibility: 'visible', top: '122%' }
                    }}>
                        <Button href={`/products/${e?._id}/${e?.title.replaceAll(' ', '-')}`}
                            disableRipple
                            target='_blank' sx={ButtonBox}>
                            {e?.title == "ساعت" ? <IoMdWatch /> :
                                e?.title == "گردنبند" ? <GiHeartNecklace /> :
                                    e?.title == "سرويس" ? <GiDoubleNecklace /> :
                                        e?.title == "انگشتر" ? <GiBigDiamondRing /> :
                                            e?.title == "گوشواره" ? <GiHeartEarrings /> :
                                                e?.title == "دستبند" ? <FaRing /> :
                                                    e?.title == "بند عينك" ? <FaGlasses /> :
                                                        e?.title == "آويز و جاكليدي" ? <FaHorseHead /> :
                                                            e?.title == "گلسر" ? <IoMdFlower /> :
                                                                e?.title == "پابند" ? <GiFootprint /> :
                                                                    e?.title == "باكس و جعبه" ? <BsFillBox2HeartFill /> :
                                                                        null}
                            <span>{e?.title}</span>
                        </Button>
                        <Box className='sub-menu' sx={subMenuBox}>
                            {subCats}
                        </Box>

                    </ListItem>

                </>
            )
        }
    })

    return (
        <Stack sx={{ overflowX: 'scroll', '::-webkit-scrollbar': { display: 'none' }, overflow: 'visible' }} alignItems={'start'} direction={'row'} mt={{ xs: 2, md: 3 }} mx={'auto'} gap={3}>

            {/* start all category */}
            <Box display={{ xs: 'none', md: 'inline-block' }}  borderRadius={'8px'} sx={{ position: 'relative' }} zIndex={'10'}>
                <Button onClick={handleOpenCat} sx={{ py: '12px', display: 'flex', gap: '16px', bgcolor: 'var(--secondary-clr)', '&:hover': { bgcolor: 'var(--secondary-clr-dark)' }, '& svg': { color: 'var(--text-clr)' } }} startIcon={<IoIosMenu size={24} />} endIcon={<IoIosArrowDown size={22} />}>
                    <Typography fontSize={'16px'} color='var(--text-clr)' noWrap>همه دسته ها</Typography>
                </Button>
                <Box className={`${isOpenCat ? 'isCatOpen' : ''}`} sx={{ border: '1px solid rgba(0,0,0,0.2)', position: 'absolute', top: '180%', right: '0', bgcolor: 'white', textAlign: 'start', '& button': { width: '100%', justifyContent: 'start', '&:hover': { bgcolor: 'var(--text-clr)' } }, opacity: 0, visibility: 'hidden', transition: 'all .2s ease-out', padding: '8px' }} width={'100%'}>
                    <List sx={{ '& li': { padding: '0' }, '& li a': { lineHeight: '2em' }, '& li:hover button': { bgcolor: 'var(--secondary-clr-light)' }, paddingInlineStart: '0 !important',overflow:'visible' }}>
                        {catItemsInAllcats}
                    </List>
                </Box>
            </Box>
            {/* start all category */}

            <List sx={{ '& li': { padding: '0' }, paddingInlineStart: '0 !important' }}>
                <Stack sx={{ '& > div': { px: '16px' } }} direction={'row'} alignItems={'center'} justifyContent={'start'} gap={{ xs: 1, md: 3 }}>
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

                </Stack>
            </List>
        </Stack>
    )
}