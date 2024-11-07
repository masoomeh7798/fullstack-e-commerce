import React from 'react'
import {  useState } from 'react';
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


export default function ProductCard({img,title,description}) {
    const [rating, setRating] = useState(3);
    const [open, setOpen] =useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
    <Card sx={{ height: '90%', width: '100%', position: 'relative', '&:hover .screen-heart': { visibility: 'visible', opacity: '1', right: '10px' } }}>
    <CardActionArea sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', overflow: 'hidden', alignItems: 'start' }}>
        <Box width={'100%'} height={'48%'} overflow={'hidden'}>
            <CardMedia sx={{ '&:hover': { transform: 'scale(1.1)' }, transition: ' all .5s ease-in-out' }}
                component="img"
                image={img}
                alt="green iguana"
            />
        </Box>
        <CardContent sx={{ width: '100%' }}>
            <Box height={'90px'} >
                <Typography fontSize={'1.5em'} gutterBottom variant="h5" component="div">
                    {title.split(' ').slice(0, 2).join(' ')}
                </Typography>
                <Typography variant="body2" >
                    {description.split(' ').slice(0, 5).join(' ')}...
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
        <IconButton onClick={handleClickOpen}><BsArrowsFullscreen /></IconButton>
    </Stack>
</Card>
{open && <ProductModal img={img} title={title} description={description} handleClose={handleClose} open={open}/>}
</>
  )
}
