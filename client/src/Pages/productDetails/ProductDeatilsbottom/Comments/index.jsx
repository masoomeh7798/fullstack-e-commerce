import { Box, Button, Rating, Stack, TextField, Typography } from '@mui/material'
import React from 'react'


export default function Comments() {
  return (
    <>
      {/* start view comments */}
      <Stack
        gap={2}
        width={{
          xs: '100%', md: '85%', xl: '60%'
        }}
      >
        <Typography variant='h3'
          fontSize={{xs:'18px',sm:'24px'}}
          fontWeight={500}
        >نظرات</Typography>
        <Stack
          direction={'row'}
          boxShadow={'0px 1px 2px 1px rgba(0,0,0,.2)'}
          borderRadius={'8px'}
          p={{xs:'12px',xxs:'16px',sm:'24px'}}
          gap={{xs:1.5,sm:3}}
        >
          {/* start user info */}
          <Stack
            alignItems={'center'}
            gap={1}
          >
            <Box
              sx={{
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }
              }}
              width={{xs:'50px',sm:'100px'}}
              height={{xs:'50px',sm:'100px'}}
              borderRadius={'50%'}
              overflow={'hidden'}
            >
              <img src="/20241104_234358.jpg" alt="" />
            </Box>
            <Typography variant='body2'
            fontSize={{xs:'12px',sm:'16px'}}
              fontWeight={500}
            >نام خريدار</Typography>
          </Stack>
          {/* end user info */}

          {/* start user comment */}
          <Stack
            width={'100%'}
            gap={2}
          >
            <Stack
              direction={{xs:'column',xxs:'row'}}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'100%'}
              gap={1}
            >
              <Typography
                variant='body1'
                fontSize={{xs:'12px',sm:'14px'}}
                lineHeight={'14px'}
              >1403/08/28</Typography>
              <Rating size='small' value={4} readOnly />
            </Stack>
            <Stack>
              <Typography
               fontSize={{xs:'12px',sm:'16px'}}
                textAlign={'justify'}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore quis quas eligendi id sed, cum deleniti quasi saepe voluptatum!</Typography>
            </Stack>
          </Stack>
          {/* end user comment */}
        </Stack>
      </Stack>
      {/* end view comments */}

      {/* start create comment */}
      <Stack
        gap={2}
        width={{
          xs: '100%', sm: '90%', md: '85%', xl: '60%'
        }}
        mt={6}
      >
        <Typography variant='h3'
          fontSize={{xs:'18px',sm:'24px'}}
          fontWeight={500}
        >نظر شما:</Typography>
        <Stack
          borderRadius={'8px'}
          gap={1}
        >
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
          >
            <input placeholder='نام كاربر:'
              style={{
                width: '40%',
                borderRadius: '8px',
                padding: '8px 16px',
                outline: 'none',
                border: '1px solid rgba(0,0,0,.2)'
              }}
            ></input>
            <Rating
              sx={{
                display:{xs:'none',sm:'inline-flex'}
              }}
              size={'medium'}
            />
            <Rating
              sx={{
                display:{sm:'none'}
              }}
              size={'small'}
            />
          </Stack>
          <textarea defaultValue='نظر خود را بنويسيد...'
            style={{
              width: '100%',
              maxWidth: '100%',
              height: '150px',
              maxHeight: '150px',
              padding: '8px 16px',
              borderRadius: '8px',
              outline: 'none',
              boxShadow: '0',
              border: '1px solid rgba(0,0,0,.2)',
              color: 'rgba(0,0,0,.5)'
            }} >
          </textarea>
          <Button variant='contained'
            sx={{
              bgcolor: 'var(--secondary-clr)',
              width: 'fit-content',
              borderRadius: '8px',
              padding: { xs: '4px 12px', sm: '8px 24px' },
              fontSize: '16px'
            }}
            color='info'

          >
            ارسال
          </Button>
        </Stack>
      </Stack>
      {/* end create comment */}
    </>
  )
}
