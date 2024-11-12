import React from 'react'
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Button, IconButton, Rating, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from '../ProductModal';
import './style.css'
import { Link } from 'react-router-dom';


export default function ProductCard({ img, discount, finalPrice, price, name, description, brand, rating, variants, dynamicWidth, id }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>

            <Card sx={{ height: `${dynamicWidth == '100% !important' ? '240px' : '450px'}`, width: `${dynamicWidth ? dynamicWidth : '250px'}`, position: 'relative', '&:hover .screen-heart': { visibility: 'visible', opacity: '1', right: '10px' }, '&:hover': { boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)' } }}>
                <Box className={`${dynamicWidth == '100% !important' && 'card-product-full'}`} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', overflow: 'hidden', alignItems: 'start' }}>
                    <Box width={'100%'} height={`${dynamicWidth == '100% !important' ? '100%' : '48%'}`} overflow={'hidden'}>
                        <CardMedia sx={{ '&:hover': { transform: 'scale(1.1)' }, transition: ' all .5s ease-in-out' ,cursor:'pointer'}}
                            component="img"
                            image={import.meta.env.VITE_BASE_URL + `${img[0]}`}
                            height={'100%'}
                            alt={name}

                        />
                    </Box>
                    <CardContent className='card-content' sx={{ width: '100%' }}>
                        <Box height={'90px'} width={'100%'}>
                            <Typography fontSize={'1.5em'} gutterBottom variant="h5" component="div">
                                {name?.split(' ').slice(0, 3).join(' ')}
                            </Typography>
                            <Typography variant="body2" >
                                {description.split(' ').slice(0, 5).join(' ')}...
                            </Typography>
                        </Box>
                          <Rating
                            readOnly
                            value={rating}
                            precision={0.5}
                            
                            sx={{direction:'ltr'}}
                        />  
                       
                        
                        <Stack width={'100%'} direction={'row'} justifyContent={'start'} alignItems={'center'} gap={2}>
                            <Typography fontSize={{ xs: '16px', lg: '12px', xl: '14px' }} sx={{ textDecoration: 'line-through' }}>{price} تومان</Typography>
                            <Typography color='secondary' fontSize={{ xs: '18px', lg: '16px', xl: '16px' }}>{finalPrice} تومان</Typography>
                        </Stack>
                        <Stack mt={'16px'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Link to={`/product-details/${id}/${name?.replaceAll(' ', '-')}`} target='_blank'><Button sx={{ bgcolor: 'var(--third-clr)', px: '16px' }} >افزودن به سبد خرید</Button></Link>
                        </Stack>
                    </CardContent>
                </Box>

                <Typography sx={{ position: 'absolute', backgroundColor: 'var(--secondary-clr)', color: 'var(--text-clr)', borderRadius: '4px', top: '10px', left: '10px', padding: '4px 8px' }} variant='body2' >{discount}%</Typography>
                <Stack className='screen-heart' sx={{ position: 'absolute', top: '10px', right: '0px', '& button:hover': { bgcolor: 'var(--secondary-clr)', color: 'var(--text-clr)' }, '& button': { bgcolor: 'var(--text-clr)', transition: 'all .3s' }, visibility: 'hidden', opacity: '0', transition: ' all .5s ease-in-out' }} gap={1}>
                    <IconButton><FaRegHeart /></IconButton>
                    <IconButton sx={{ display: { xs: 'none', sm: 'inline-flex' } }} onClick={handleClickOpen}><BsArrowsFullscreen /></IconButton>
                </Stack>
            </Card>

            {open && <ProductModal
                name={name}
                description={description}
                variants={variants}
                brand={brand}
                rating={rating}
                price={price}
                finalPrice={finalPrice}
                discount={discount}
                img={img}
                handleClose={handleClose}
                open={open} />}
        </>
    )
}
