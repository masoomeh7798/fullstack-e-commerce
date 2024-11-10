import { Box, Button, FormControl, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";


export default function Login({ handlePageType }) {
  const [showPass, setShowPass] = useState(false);

  return (
    <Box
      width={{ xs: '95%', xxs: "90%", sm: '70%', md: '45%', lg: '30%', xl: '25%' }}
    >
      <FormControl
        sx={{
          width: '100%'
        }}
      >
        <Stack
          bgcolor={'var(--text-clr)'}
          borderRadius={'8px'}
          boxShadow={' 0 0 4px 2px rgba(0,0,0,.2)'}
          p={'24px 10%'}
          width={'100%'}
          alignItems={'center'}
          gap={2}
        >
          <Typography component={'h2'}
            fontSize={'30px'}
            fontWeight={500}

          >ورود</Typography>
          {/* start text field part */}
          <Stack
            sx={{
              '& input': {
                width: '100%'
              }
            }}
            width={'100%'}
            gap={1}
          >
            <TextField
              sx={{
                p: '14px 0px'
              }}
              slotProps={{
                inputLabel: {
                  sx: {
                    textAlign: 'right',
                    right: 0,
                    left: 'auto',
                    fontSize: '16px'
                  }
                }
              }}
              label="ايميل" variant="standard" />
            <Box
              width={'100%'}
              position={'relative'}
              sx={{
                '& svg': {
                  position: 'absolute',
                  top: '44.5%',
                  left: '2%',
                  opacity: .6,
                  cursor:'pointer'
                }
              }}
            >
              <TextField
                type={showPass ? 'text' : 'password'}
                sx={{
                  p: '14px 0px',
                  pb: 0,
                  width: '100%',
                  verticalAlign: 'center'
                }}
                slotProps={{
                  inputLabel: {
                    sx: {
                      textAlign: 'right',
                      right: 0,
                      left: 'auto',
                      fontSize: '16px'
                    }
                  }
                }}
                label="پسورد" variant="standard" />
              {showPass ? <IoEyeOff onClick={() => setShowPass(false)} /> : <FaEye onClick={() => setShowPass(true)} />}

            </Box>
          </Stack>
          {/* start text field part */}
          <Typography
            alignSelf={'start'}
            fontSize={'13px'}
            fontWeight={500}
            sx={{
              '& a': {
                color: 'var(--secondary-clr)'
              },
              '& a:hover': {
                color: 'var(--third-clr)'
              }
            }}
          >
            <Link to='/'>پسورد يادت رفته؟</Link></Typography>
          <Button
            sx={{
              bgcolor: 'var(--secondary-clr)',
              color: 'var(--text-clr)',
              width: '100%',
              fontSize: '16px',
              fontWeight: 500,
              '&:hover': {
                bgcolor: 'var(--third-clr)',
                color: 'var(--primary-clr)',
              }
            }}
          >ورود</Button>
          <Typography
            alignSelf={'start'}
            fontSize={'14px'}
            fontWeight={500}
          >عضو سايت نيستي؟<span>
              <Button
                onClick={handlePageType}
                disableRipple
                color='secondary'
                sx={{
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'transparent', // Remove bgcolor on hover
                    color: 'var(--third-clr)',
                  },
                  '&:active': {
                    bgcolor: 'transparent'
                  },
                }}

              >ثبت نام</Button></span></Typography>
          {/* start social */}
          <Typography
            fontWeight={500}
            mt={2}
          >ورود با روش ها ديگر</Typography>
          <Button
            sx={{
              width: '100%',
              border: '1px solid rgba(0,0,0,.2)'
            }}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={2}
              sx={{
                '& img': {
                  width: '30px',
                  height: '30px'
                }
              }}>
              <img src="src/assets/klipartz.com.png" alt="" />
              <Typography>ورود با حساب گوگل</Typography>

            </Stack>
          </Button>

          {/* end social */}
        </Stack>
      </FormControl>
    </Box>
  )
}
