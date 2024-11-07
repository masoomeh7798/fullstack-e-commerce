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
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
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


            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <DialogTitle borderBottom={'1px solid rgba(0,0,0,.2)'} sx={{ m: 0, p: 2 }} id="customized-dialog-title" >
                    <Typography variant='body2' fontSize={'1.5em'}>{title}</Typography>

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
                <Stack direction={'row'} height={'100%'} alignItems={'center'}  >
                    <DialogContent  >

                        <Stack direction={'row'} height={'fit-content'} gap={'3%'} >
                            {/* start product slider */}
                            <Stack width={'38.5%'}>
                                <ProductSlider />
                            </Stack>
                            {/* end product slider */}

                            {/* start product info */}
                            <Stack width={'58.5%'} gap={2} alignItems={'start '}>
                                <Stack direction={'row'} gap={2} >
                                    <Typography fontSize={{ xs: '16px', lg: '12px', xl: '16px' }} sx={{ textDecoration: 'line-through' }}>150000 تومان</Typography>
                                    <Typography color='secondary' fontSize={{ xs: '18px', lg: '16px', xl: '18px' }}>100000 تومان</Typography>
                                </Stack>
                                <Typography sx={{ width: 'fit-content', borderRadius: "16px" }} bgcolor={'var(--third-clr)'} padding={'2px 8px'} fontSize={'14px'}>در تخفيف</Typography>
                                <Box height={'150px'}>
                                    <Typography textAlign={'justify'}>{description}</Typography>
                                </Box>
                                <Stack direction={'row'} alignItems={'center'} gap={2} mb={4}>
                                    <Stack direction={'row'} alignItems={'center'} gap={2}>
                                        <IconButton sx={{ bgcolor: 'var(--text-clr)', boxShadow: '0 1px rgba(0,0,0,.2)', border: '1px solid rgba(0,0,0,.1)', padding: '10px' }}><FaMinus color='var(--primary-clr)' fontSize={20} /></IconButton>
                                        <Typography fontSize={20}>0</Typography>
                                        <IconButton sx={{ bgcolor: 'var(--text-clr)', boxShadow: '0 1px rgba(0,0,0,.2)', border: '1px solid rgba(0,0,0,.1)', padding: '10px' }}><FaPlus color='var(--primary-clr)' fontSize={20} /></IconButton>

                                    </Stack>
                                    <Button sx={{ '& svg': { fontSize: "24px !important" }, borderRadius: '24px', bgcolor: "var(--third-clr)", color: 'var(--primary-clr)', padding: '8px 5px 8px 16px ', transition: "all .5s", '&:hover': { bgcolor: "var(--secondary-clr)", color: 'var(--text-clr)' } }} startIcon={<IoMdCart />}><Typography fontSize={'16px'} fontWeight={500} mr={1}> افزودن به سبد خريد</Typography> </Button>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
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

