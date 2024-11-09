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
import ProductCard from '../../Home/Products/ProductCard';
import './style.css'


export default function RecentlyViewedProducts() {
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
        <SwiperSlide  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} key={index}>
           <ProductCard id={e.id} img={e.image} title={e.title} description={e.description} dynamicWidth={'99.5%'}/>
        </SwiperSlide>
    ))
    return (
        <Stack width={'100%'}  my={2}>
            <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} mb={1.5} >
                <Typography fontSize={'2em'} component={'h3'}>اخيرا ديده ايد</Typography>
            </Stack>
            <Swiper
                slidesPerView={1}
                spaceBetween={'12px'}
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
                className="recent-pr-slider"
            >

                {items}
            </Swiper>

        </Stack>
    )
}
