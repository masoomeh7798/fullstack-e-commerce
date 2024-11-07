import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard';


export default function PopularProducts() {
    const [products, setProducts] = useState([]);

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
            <ProductCard img={e.image} title={e.title} description={e.description} />
        </SwiperSlide>
    ))
    return (
        <Stack width={'100%'} height={'82vh'} my={3}>
            <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} mb={3}>
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
