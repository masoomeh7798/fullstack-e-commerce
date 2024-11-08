import { Box, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { BiSolidGrid } from "react-icons/bi";
import { BiGridSmall } from "react-icons/bi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductsPart() {
  const [showItem, setShowItem] = useState('');

  const handleShowItem = (e) => {
    setShowItem(e.target.value);
  };

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
            <FormControl sx={{ m: 1, minWidth: 120,maxWidth:120 }} size="small">
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
            <IconButton sx={{ '& svg': { transform: "scale(.8)" } }}><TfiLayoutGrid4Alt /></IconButton>
            <IconButton><BiSolidGrid /></IconButton>
            <IconButton sx={{ '& svg': { transform: "scale(1.6)" } }}><BiGridSmall /></IconButton>
            <IconButton><GiHamburgerMenu /></IconButton>
          </Stack>
          {/* end grid part */}
        </Stack>
        {/* end top select part */}

      </Stack>
      {/* end products part */}

    </Stack>
  )
}
