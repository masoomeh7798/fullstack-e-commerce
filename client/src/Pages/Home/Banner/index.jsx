import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Banner() {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        (async()=>{
            try {
                const res=await fetch('https://fakestoreapi.com/products')
                const data=await res.json()
                setBanners(data)
            } catch (error) {
                console.log(error);
            }
        })()
        
    }, []);
    const items=banners?.map((e,index)=>(
        <SwiperSlide key={index}><img src={e.image} alt="" /></SwiperSlide>
    ))
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
      reverseDirection:true
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation,]}
    className="home-slider"
  >
   {banners && items}
  </Swiper>
  )
}


