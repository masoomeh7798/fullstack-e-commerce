import { Box, List, ListItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';

function pricetext(price) {
    return `${price}`;
}


export default function FilterBoxes() {
    const [price, setPrice] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };
    return (
        <Stack
            display={{xs:'none',sm:'flex'}}
            direction={{ xs: 'row', xl: 'column' }}
            width={{ xs: '100%', xl: '19%' }}
        >
            {/* start categories */}
            <Box
                width={{ xs: '33%', xl: '100% !important' }}
                mb={{ xl: 4 }}
            >
                <Typography
                    variant='h6'
                    fontSize={'20px'}
                    fontWeight={500}
                    mb={2}
                >دسته بندي</Typography>
                <List
                    sx={{
                        overflowY: 'scroll',
                        height: '200px',
                        py: '0'
                    }}
                >
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="ساعت" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: '0' },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important"
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>

                </List>
            </Box>
            {/* end categories */}

            {/* start brands */}
            <Box
                width={{ xs: '33%', xl: '100% !important' }}
                mb={{ xl: 4 }}
            >
                <Typography
                    variant='h6'
                    fontSize={'20px'}
                    fontWeight={500}
                    mb={2}
                >برند ها</Typography>
                <List
                    sx={{
                        overflowY: 'scroll',
                        height: '200px',
                        py: '0'
                    }}
                >
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="ساعت" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: '0' },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important",
                                marginLeft: '4px !important'
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>
                    <ListItem
                        sx={{
                            '& svg': { color: 'var(--secondary-clr)' },
                            px: 0,
                            '& label': { marginRight: 0 },
                            '& label span:first-of-type': {
                                padding: "0 !important"
                            }
                        }}

                    ><FormControlLabel control={<Checkbox />} label="گردنبند" />
                    </ListItem>

                </List>
            </Box>
            {/* end brands */}


            {/* start price range */}
            <Box
                width={{ xs: '33%', xl: '100% !important' }}
            >
                <Typography
                    variant='h6'
                    fontSize={'20px'}
                    fontWeight={500}
                    mb={2}
                >محدوده قيمت</Typography>
                <Slider
                    sx={{
                        '&.MuiSlider-colorPrimary': {
                            color: 'var(--secondary-clr) !important'
                        },
                        width: '100%'
                    }}
                    getAriaLabel={() => 'Price range'}
                    value={price}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={pricetext}
                />
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{
                        '& p': {
                            fontSize: '18px',
                            fontWeight: 500
                        }
                    }}
                >
                    <Typography>از: {price[0]} تومان</Typography>
                    <Typography>تا: {price[1]} تومان</Typography>
                </Stack>
            </Box>
            {/* end price range */}
        </Stack>
    )
}
