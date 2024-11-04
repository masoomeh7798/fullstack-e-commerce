import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Box, Button, IconButton, Rating, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";


export default function NewestProducts() {
    const [products, setProducts] = useState([]);
    const [rating, setRating] = useState(3);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                console.log(error);
            }
        })()

    }, []);
    const items = products?.map((e, index) => (
        <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} key={index}>
            <Card sx={{ height: '90%', width: '100%', position: 'relative', '&:hover .screen-heart': { visibility: 'visible', opacity: '1', right: '10px' } }}>
                <CardActionArea sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', overflow: 'hidden', alignItems: 'start' }}>
                    <Box width={'100%'} height={'48%'} overflow={'hidden'}>
                        <CardMedia sx={{ '&:hover': { transform: 'scale(1.1)' }, transition: ' all .5s ease-in-out' }}
                            component="img"
                            image={e.image}
                            alt="green iguana"
                        />
                    </Box>
                    <CardContent sx={{ width: '100%' }}>
                        <Box height={'90px'} >
                            <Typography fontSize={'1.5em'} gutterBottom variant="h5" component="div">
                                {e.title.split(' ').slice(0, 2).join(' ')}
                            </Typography>
                            <Typography variant="body2" >
                                {e.description.split(' ').slice(0, 5).join(' ')}...
                            </Typography>
                        </Box>
                        <Rating
                            readOnly
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography fontSize={{xs:'16px',lg:'12px',xl:'16px'}} sx={{ textDecoration: 'line-through' }}>150000 تومان</Typography>
                            <Typography color='secondary' fontSize={{xs:'18px',lg:'16px',xl:'18px'}}>100000 تومان</Typography>
                        </Stack>
                        <Stack mt={'8px'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Button sx={{ bgcolor: 'var(--third-clr)', px: '16px' }}>افزودن به سبد خرید</Button>
                        </Stack>
                    </CardContent>
                </CardActionArea>

                <Typography sx={{ position: 'absolute', backgroundColor: 'var(--secondary-clr)', color: 'var(--text-clr)', borderRadius: '4px', top: '10px', left: '10px', padding: '4px 8px' }} variant='body2' >25%</Typography>
                <Stack className='screen-heart' sx={{ position: 'absolute', top: '10px', right: '0px', '& button:hover': { bgcolor: 'var(--secondary-clr)', color: 'var(--text-clr)' }, '& button': { bgcolor: 'var(--text-clr)', transition: 'all .3s' }, visibility: 'hidden', opacity: '0', transition: ' all .5s ease-in-out' }} gap={1}>
                    <IconButton><FaRegHeart /></IconButton>
                    <IconButton><BsArrowsFullscreen /></IconButton>
                </Stack>

            </Card>
        </SwiperSlide>
    ))
    return (
        <Stack width={'100%'} height={'82vh'}>
            <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} my={2}>
                <Typography fontSize={'2em'} component={'h3'}>جدیدترین محصولات</Typography>
                <Button sx={{ borderRadius: '24px', bgcolor: 'var(--third-clr)', transition: 'all .3s', '&:hover': { opacity: .7 } }}><Link style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", gap: '8px' }} to='/'><Typography color='primary' variant='body2'>مشاهده همه محصولات</Typography><FaAngleLeft /></Link></Button>
            </Stack>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                breakpoints={{
                    350: {
                        slidesPerView: 1.5,
                        spaceBetween: 5,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    770: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1500: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="product-slider"
            >

                {items}
            </Swiper>

        </Stack>
    )
}
