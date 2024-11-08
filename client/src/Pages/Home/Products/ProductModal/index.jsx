import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ProductSlider from '../ProductSlider';
import { Box, Rating, Stack, Typography } from '@mui/material';

import { IoMdCart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import QuantityBox from '../../../../Components/QuantityBox'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './style.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function ProductModal({ handleClose, img, title, description, open }) {


    return (
        <>
            <BootstrapDialog sx={{
                '& .MuiDialog-paper': {

                    padding: ' 0px 2%',
                    maxWidth: { xs: '100%', sm: '80%', md: '70%', lg: '60%' }
                },
                display: { xs: 'none', sm: 'block' },
                '& .MuiDialogContent-root': { padding: '0' }
            }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='heyyyy'
            >
                <DialogTitle position={'static'} borderBottom={'1px solid rgba(0,0,0,.2)'} sx={{ m: 0, p: 2 }} id="customized-dialog-title" >
                    <Typography variant='body2' fontSize={'1.2em'}>{title}</Typography>

                    <Stack direction={'row'} alignItems={'center'} gap={3} >
                        <Typography variant='body2'>برند: ژوپینگ</Typography>
                        <Rating size='small' defaultValue={4} />
                    </Stack>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        left: 24,
                        top: 16,
                        color: 'var(--secondary-clr-dark)',
                        backgroundColor: 'var(--text-clr)',
                        transition: 'all .5s',
                        '&:hover': {
                            color: 'var(--text-clr)',
                            backgroundColor: 'var(--secondary-clr-dark)'
                        }
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Stack direction={'row'} height={'100%'} alignItems={'center'} py={'20px'} >
                    <DialogContent sx={{ height: '100%', width: '100%' }} >
                        <Stack direction={{ xs: 'column', md: 'row' }} height={'fit-content'} gap={{ xs: '20px', md: '3%' }} >
                            {/* start product slider */}
                            <Stack width={{ xs: "100%", md: '38.5%' }}>
                                <ProductSlider />
                            </Stack>
                            {/* end product slider */}

                            {/* start product info */}
                            <Stack width={{ xs: "100%", md: '58.5%' }} gap={2} alignItems={'start '}>
                                <Stack direction={'row'} gap={2} >
                                    <Typography fontSize={{ xs: '16px', lg: '12px', xl: '16px' }} sx={{ textDecoration: 'line-through' }}>150000 تومان</Typography>
                                    <Typography color='secondary' fontSize={{ xs: '18px', lg: '16px', xl: '18px' }}>100000 تومان</Typography>
                                </Stack>
                                <Typography sx={{ width: 'fit-content', borderRadius: "16px" }} bgcolor={'var(--third-clr)'} padding={'2px 8px'} fontSize={'14px'}>در تخفيف</Typography>
                                <Box mb={2}>
                                    <Typography textAlign={'justify'} fontSize={{ xs: '12px', sm: '16px' }}>{description}</Typography>
                                </Box>
                                <Stack direction={{ md: 'row' }} sx={{ width: '100%' }} alignItems={'center'} gap={2} mt={'auto'}>
                                    <QuantityBox />
                                    <Button sx={{ '& svg': { fontSize: "24px !important" }, borderRadius: '24px', bgcolor: "var(--third-clr)", color: 'var(--primary-clr)', padding: '8px 5px 8px 16px ', transition: "all .5s", '&:hover': { bgcolor: "var(--secondary-clr)", color: 'var(--text-clr)' } }} startIcon={<IoMdCart />}><Typography fontSize={{ xs: '12px', xxs: '14px', sm: '16px' }} fontWeight={500} mr={1}> افزودن به سبد خريد</Typography> </Button>
                                </Stack>
                                <Stack direction={'row'} sx={{ width: '100%' }} justifyContent={{ xs: "center", md: 'start' }} alignItems={'center'} gap={2} mt={'20px'}>
                                    <Button sx={{ '& svg': { fontSize: "16px !important" }, borderRadius: '24px', bgcolor: "transparent", color: 'var(--primary-clr)', py: '4px', paddingLeft: '16px !important', transition: "all .5s", border: '1px solid rgba(0,0,0,.1)', '&:hover': { bgcolor: "var(--text-clr)" } }} startIcon={<IoMdHeartEmpty />}><Typography fontSize={'12px'} fontWeight={400} mr={1}>دوستش دارم</Typography> </Button>
                                    <Button sx={{ '& svg': { fontSize: "16px !important" }, borderRadius: '24px', bgcolor: "transparent", color: 'var(--primary-clr)', py: '4px', paddingLeft: '16px !important', transition: "all .5s", border: '1px solid rgba(0,0,0,.1)', '&:hover': { bgcolor: "var(--text-clr)" } }} startIcon={<MdCompareArrows />}><Typography fontSize={'12px'} fontWeight={400} mr={1}>مقايسه</Typography> </Button>
                                </Stack>
                            </Stack>
                            {/* end product info */}
                        </Stack>
                    </DialogContent>
                </Stack>

            </BootstrapDialog >


        </>
    );
}

