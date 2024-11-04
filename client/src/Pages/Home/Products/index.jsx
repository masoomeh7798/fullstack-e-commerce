import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Box, Button, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Products() {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                setBanners(data)
            } catch (error) {
                console.log(error);
            }
        })()

    }, []);
    const items = banners?.map((e, index) => (
        <SwiperSlide style={{display:'flex',alignItems:'center',justifyContent:'center'}} key={index}> 
        <Card sx={{height:'90%',width:'100%'}}>
            <CardActionArea sx={{height:'100%',width:'100%',display:'flex',flexDirection:'column',justifyContent:'start',overflow:'hidden'}}>
                <CardMedia 
                    component="img"
                    image={e.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {e.title}
                    </Typography>
                    <Typography variant="body2" >
                       {e.description.split(' ').slice(0,10).join(' ')}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </SwiperSlide>
    ))
    return (
        <Stack  width={'79%'}>
            {/* start newest products */}
            <Stack width={'100%'} height={'60vh'}>
                <Stack direction='row' alignItems={'center'} justifyContent={'space-between'} my={2}>
                <Typography fontSize={'2em'} component={'h3'}>جدیدترین محصولات</Typography>
                <Button  sx={{borderRadius:'24px',bgcolor:'var(--third-clr)',transition:'all .3s','&:hover':{opacity:.7}}}><Link style={{display:'flex',alignItems:'center',justifyContent:"space-between",gap:'8px'}} to='/'><Typography color='primary' variant='body2'>مشاهده همه محصولات</Typography><FaAngleLeft/></Link></Button>
                </Stack>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                   navigation={true}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween:20,
                        },
                    }}
                    modules={[Navigation]}
                    className="product-slider"
                >

{items}
                </Swiper>

            </Stack>
            {/* end newest products */}
        </Stack>
    )
}




