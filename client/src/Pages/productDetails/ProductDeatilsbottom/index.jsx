import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Comments from './Comments';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProductDeatilsBottom({ product }) {
    const [activeTab, setactiveTab] = useState(1);
    return (
        <Box
            boxShadow={'0 0 10px 2px rgba(0,0,0,.2)'}
            my={'10px'}
            borderRadius={2}
        >
            <Stack>
                {/* start tab part */}
                <Stack
                    sx={{
                        '& button': {
                            borderRadius: '24px',
                            fontWeight: 600
                        }
                    }}
                    direction={'row'}
                    justifyContent={'start'}
                    p={'20px 0'}
                    mx={'24px'}
                    gap={2}
                    borderBottom={'1px solid rgba(0,0,0,.2)'}
                >
                    <Button
                        sx={{
                            color: activeTab == 1 ? 'var(--text-clr) !important' : 'black',
                            bgcolor: activeTab == 1 ? 'var(--secondary-clr) !important' : '#F1F1F1'
                        }}
                        onClick={() => setactiveTab(1)} variant='outlined'>توضيحات</Button>
                    <Button
                        sx={{
                            color: activeTab == 2 ? 'var(--text-clr) !important' : 'black',
                            bgcolor: activeTab == 2 ? 'var(--secondary-clr) !important' : '#F1F1F1'
                        }}
                        onClick={() => setactiveTab(2)} variant='outlined'>مشخصات فني</Button>
                    <Button
                        sx={{
                            color: activeTab == 3 ? 'var(--text-clr) !important' : 'black',
                            bgcolor: activeTab == 3 ? 'var(--secondary-clr) !important' : '#F1F1F1'
                        }}
                        onClick={() => setactiveTab(3)} variant='outlined'>نظرات</Button>
                </Stack>
                {/* end tab part */}

                {/* start details part */}
                <Stack
                    p={'20px 24px'}
                >
                    {activeTab == 1 &&
                        <Typography
                            textAlign={'justify'}
                        >{product?.description}</Typography>
                    }

                    {activeTab == 2 &&
                        <TableContainer component={Paper}
                            sx={{
                                width: {xs:'100%',sm:'90%',md:'85%',xl:'60%'},
                                alignSelf: 'center',
                                '& th,& td':{
                                    padding:{
                                        xs:'4px',
                                        sm:'16px'
                                    },
                                    fontSize:{
                                        xs:'12px',
                                        sm:'16px'
                                    }
                                }
                            }}
                        >
                            <Table  aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Dessert (100g serving)</TableCell>
                                        <TableCell align="center">Calories</TableCell>
                                        <TableCell align="center">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="center">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center">{row.calories}</TableCell>
                                            <TableCell align="center">{row.fat}</TableCell>
                                            <TableCell align="center">{row.carbs}</TableCell>
                                            <TableCell align="center">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                    {activeTab == 3 && <Comments />}

                </Stack>
                {/* end details part */}
            </Stack>


        </Box>
    )
}
