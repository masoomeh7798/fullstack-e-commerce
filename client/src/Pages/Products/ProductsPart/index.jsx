import { Box, IconButton, Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { BiSolidGrid } from "react-icons/bi";
import { BiGridSmall } from "react-icons/bi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductCard from '../../Home/Products/ProductCard';


export default function ProductsPart() {
  const [products, setProducts] = useState([]);
  const [showItem, setShowItem] = useState('');
  const [dynamicWidth, setDynamicWidth] = useState('23.5%');
  const [activeGridIndex, setActiveGridIndex] = useState(1);

  const handleShowItem = (e) => {
    setShowItem(e.target.value);
  };
  const handleChangeGrid = (width, index) => {
    setDynamicWidth(width)
    setActiveGridIndex(index)
  };


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

    <ProductCard key={index} img={e.image} title={e.title} description={e.description} dynamicWidth={dynamicWidth} />

  ))

  return (
    <Stack
      width={'79%'}
    >
      {/* start banner */}
      <Box
        sx={{
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'bottom'
          }
        }}
        borderRadius={'16px'}
        height={300}
        width={'100%'}
        overflow={'hidden'}
      >
        <img src="/Leonardo_Phoenix_Create_a_horizontal_image_with_a_luxurious_bl_0.jpg" alt="" />

      </Box>
      {/* end banner */}

      {/* start products part */}
      <Stack>
        {/* start top select part */}
        <Stack
          sx={{}}
          direction={'row'}
          bgcolor={'#F1F1F1'}
          border={'1px solid rgba(0,0,0,.2)'}
          p={'8px 16px'}
          borderRadius={'16px'}
          my={1}
          justifyContent={'space-between'}
        >
          {/* start select part */}
          <Stack>
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">show item</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={showItem}
                label="show item"
                onChange={handleShowItem}
              >
                <MenuItem value="">
                  <em>هيچكدام</em>
                </MenuItem>
                <MenuItem value={10}>ده</MenuItem>
                <MenuItem value={20}>بيست</MenuItem>
                <MenuItem value={30}>سي</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          {/* end select part */}

          {/* start grid part */}
          <Stack
            sx={{
              '& button:hover': {
                bgcolor: 'transparent'
              },
              '& button': {

              },
              '& svg': {
                fontSize: '1.2em',
                opacity: '.7',
                '&:hover': {
                  opacity: 1
                }
              }
            }}
            direction={'row'}
          >
            <IconButton onClick={() => handleChangeGrid('23.5%', 1)} sx={{
              '& svg': {
                transform: "scale(.8)",
                color: activeGridIndex == 1 && 'var(--secondary-clr)',
                opacity: activeGridIndex == 1 && 1

              }
            }}><TfiLayoutGrid4Alt /></IconButton>
            <IconButton sx={{
              '& svg': {
                color: activeGridIndex == 2 && 'var(--secondary-clr)',
                opacity: activeGridIndex == 2 && 1
              }
            }} onClick={() => handleChangeGrid('32%', 2)}><BiSolidGrid /></IconButton>
            <IconButton sx={{
              '& svg': {
                color: activeGridIndex == 3 && 'var(--secondary-clr)',
                opacity: activeGridIndex == 3 && 1
              }
            }} onClick={() => handleChangeGrid('100%', 3)} ><GiHamburgerMenu /></IconButton>
          </Stack>
          {/* end grid part */}
        </Stack>
        {/* end top select part */}

        {/* start display products */}
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'center'}
          width={'100%'}
          gap={'20px'}
        >
          {items}
        </Stack>
        {/* end display products */}

        {/* start pagination part */}
        <Stack
          width={'100%'}
          spacing={2}
          alignItems={'center'}
          justifyContent={'center'}
          my={'32px'}

        >
          <Pagination
            count={10}
            sx={{
              direction: 'ltr'
            }}
            color="secondary"
          />
        </Stack>
        {/* end pagination part */}
      </Stack>
      {/* end products part */}

    </Stack >
  )
}
