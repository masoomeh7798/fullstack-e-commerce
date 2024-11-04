import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Stack, Typography } from '@mui/material';
import './style.css'

export default function DiscountBanner() {
  return (
    <>
    <Stack width={'100%'} height={'30vh'} my={2}>
        <Typography variant='h3' fontSize={'1.5em'} fontWeight={400} mb={2}>تخفیفات ویژه</Typography>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        450:{
            slidesPerView:2
        },
        900:{
            slidesPerView:3
        },
      }   
      }
      modules={[Pagination]}
      className="discount-slider"
    >
        
      <SwiperSlide><img src="/discounts/1729520257674_New_Project_19.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/discounts/1729058275936_New_Project_16.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/discounts/1729058263591_New_Project_9.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/discounts/1729058244370_New_Project_18.jpg" alt="" /></SwiperSlide>

    </Swiper>
    </Stack>
  </>
  )
}

