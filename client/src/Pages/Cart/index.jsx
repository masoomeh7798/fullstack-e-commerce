import { Box, Button, Rating, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdOutlineClose } from "react-icons/md";
import QuantityBox from '../../Components/QuantityBox'
import { Link } from 'react-router-dom';
import QauntityBox from '../../Components/QuantityBox';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Cart() {
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

  return (
    <Stack
      width={{ lg: '85%', sm: '90%', xs: "95%" }} mx={'auto'}
      my={2}
    >
      <Typography component={'h2'}
        fontSize={{ xs: '24px', md: '32px' }}
        fontWeight={500}
        mb={{md:2}}
      >
        سبد خريد
      </Typography>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        gap={{md:2}}
        justifyContent={{ lg: 'space-between' }}
        alignItems={{ xs: 'center', lg: 'start' }}
        borderRadius={{xs:'8px',md:0}}
        p={'1px'}
      >

        {/* start table */}
        <TableContainer component={Paper}
          sx={{
            '& th': {
              bgcolor: 'var(--secondary-clr) !important'
            },
            width: { xs: '100%', lg: '74%' },
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Table sx={{
            width: '100%',
            '& th,& td': {
              p: { xs: '8px', md: '16px' }
            }
          }}
            aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">محصول</StyledTableCell>
                <StyledTableCell align="center">قيمت واحد</StyledTableCell>
                <StyledTableCell align="center">تعداد</StyledTableCell>
                <StyledTableCell align="center">مجموع قيمت</StyledTableCell>
                <StyledTableCell align="center">حذف</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((e) => (
                <StyledTableRow key={e.id}>
                  <StyledTableCell align="center">
                    <Stack
                      direction={'row'}
                      alignItems={'start'}
                      gap={2}
                    >
                      <Box
                        sx={{
                          '& img': {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }
                        }}
                        width={{ xs: '60px', md: '80px' }}
                        height={{ xs: '65px', md: '80px' }}
                      >
                        <img src={e?.image} alt="" />
                      </Box>
                      <Stack
                        gap={1}
                        width={{ md: '250px', lg: '220px',xl:'300px' }}
                        alignItems={'start'}
                        sx={{
                          '& a': {
                            color: 'var(--primary-clr)',
                            transition: 'all .3s',
                            '&:hover': {
                              color: '#FAAF00'
                            }
                          }
                        }}
                      >
                        <Link to={`/product-details/${e?.id}/${e?.title.replaceAll(' ', '-')}`} target='_blank'>
                          <Typography
                            textAlign={'start'}
                            fontSize={{ xs: '12px', sm: '14px', md: '16px' }}
                          >{e?.title.split(' ').slice(0, 8).join(' ')}...</Typography></Link>
                        <Rating size='small' value={4} readOnly />
                      </Stack>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align="center">{e.price}</StyledTableCell>
                  <StyledTableCell
                    sx={{
                      '& .quantityChanger button': {
                        padding: {md: '8px' }
                      },
                      '& .quantityChanger': {
                        gap: {md: '8px' }
                      }
                    }}
                    align="center"><QuantityBox /></StyledTableCell>
                  <StyledTableCell align="center">{(e.id * e.price).toFixed(2)}</StyledTableCell>
                  <StyledTableCell align="center"><Button
                    sx={{
                      minWidth: '',
                      '& svg': {
                        fontWeight: 500,
                        fontSize: '24px'
                      }
                    }}
                  ><MdOutlineClose /></Button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* start table under md */}
        {products?.map((e) => (
          <Stack
            key={e?.id}
            width={'100%'}
            display={{ md: 'none' }}
            overflow={'hidden'}
            direction={'row'}
            borderBottom={'1px solid rgba(0,0,0,.2)'}
            alignItems={'center'}
            p={'16px'}
            gap={2}
          >
            <Box
              sx={{
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }
              }}
              width={{ xs: '100px', xxs: '150px',sm: '200px' }}
              height={{ xs: '100px', xxs: '150px',sm: '200px' }}
            >
              <img src={e?.image} alt="" />
            </Box>
            <Stack
              width={'100%'}
            >
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                py={1}
                sx={{
                  '& a': {
                    color: 'var(--primary-clr)',
                    transition: 'all .3s',
                    '&:hover': {
                      color: '#FAAF00'
                    }
                  }
                }}    
              >
                <Link to={`/product-details/${e?.id}/${e?.title.replaceAll(' ', '-')}`} target='_blank'>
                  <Typography
                    textAlign={'start'}
                    fontSize={{ xs: '14px', xxs: '16px'}}
                    width={{xs:80,xxs:150,sm:200}}
                  >{e?.title.split(' ').slice(0, 8).join(' ')}...</Typography></Link>
                <Button
                  sx={{
                    minWidth: '',
                    '& svg': {
                      fontWeight: 500,
                      fontSize: '20px !important'
                    }
                  }}
                ><MdOutlineClose /></Button>
              </Stack>
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px dashed rgba(0,0,0,.2)'}
                py={1}
                sx={{
                  '& a': {
                    color: 'var(--primary-clr)',
                    transition: 'all .3s',
                    '&:hover': {
                      color: '#FAAF00'
                    }
                  }
                }}
              >
                <Typography
                  textAlign={'start'}
                  fontSize={{ xs: '12px', sm: '14px', md: '16px' }}
                >قيمت واحد</Typography>
                <Typography>{e?.price}</Typography>
              </Stack>
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px dashed rgba(0,0,0,.2)'}
                py={1}
                sx={{
                  '& a': {
                    color: 'var(--primary-clr)',
                    transition: 'all .3s',
                    '&:hover': {
                      color: '#FAAF00'
                    }
                  },
                  '& .quantityChanger button': {
                    padding: {xs:'2px',xxs:'4px'},
                   '& svg':{
                    fontSize:{xs:'16px',xxs:'20px'}
                   }
                  },
                  '& .quantityChanger': {
                    gap: {xs:'0',xxs:'4px'}
                  }
                }}
              >
                <Typography
                  textAlign={'start'}
                  fontSize={{ xs: '12px', sm: '14px', md: '16px' }}
                >تعداد</Typography>
                <Typography><QauntityBox/></Typography>
              </Stack>
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                py={1}
                sx={{
                  '& a': {
                    color: 'var(--primary-clr)',
                    transition: 'all .3s',
                    '&:hover': {
                      color: '#FAAF00'
                    }
                  }
                }}
              >
                <Typography
                  textAlign={'start'}
                  fontSize={{ xs: '12px', sm: '14px', md: '16px' }}
                >مجموع قيمت</Typography>
                <Typography>{e?.price*e?.id}</Typography>
              </Stack>

            </Stack>
          </Stack>
        ))}
        {/* end table under md */}
        {/* end table */}

        {/* start final price */}
        <Stack
          width={{ xs: '100%',xxs:'80%',sm:'50%',md:'40%', lg: '24%' }}
          height={'fit-content'}
          boxShadow={'0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)'}
          border={'1px solid rgba(0,0,0,.1)'}
          borderRadius={'4px'}
          p={'0 24px'}
          my={{xs:2,md:0}}
        >
          <Typography
            borderBottom={'1px solid rgba(0,0,0,.2)'}
            lineHeight={'48px'}
            fontSize={'20px'}
            fontWeight={500}
          >صورتحساب</Typography>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            mt={1}
          >
            <Typography>مجموع</Typography>
            <Typography color='secondary'>1000 تومان</Typography>
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            mt={1}
          >
            <Typography>ارسال</Typography>
            <Typography >رايگان</Typography>
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            mt={1}
            mb={2}
          >
            <Typography>قيمت نهايي</Typography>
            <Typography color='secondary'>800 تومان</Typography>
          </Stack>
          <Button
            sx={{
              borderRadius: '4px',
              bgcolor: "var(--third-clr)",
              color: 'var(--primary-clr)',
              padding: '8px 5px 8px 16px ',
              mb: '16px',
              transition: "all .5s",
              '&:hover': { bgcolor: "var(--secondary-clr)", color: 'var(--text-clr)' }
            }}

          >
            <Typography fontSize={{ xs: '12px', xxs: '14px', sm: '16px' }} fontWeight={500} mr={1}>پرداخت</Typography> </Button>
        </Stack>
        {/* end final price */}


      </Stack>
    </Stack>
  )
}
