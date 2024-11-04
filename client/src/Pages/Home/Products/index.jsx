import React from 'react';

import { Box, Button, Stack } from '@mui/material';

import NewestProducts from './NewestProducts';



export default function Products() {

    return (
        <Stack width={{xs:'100%',lg:'79%'}}>
            {/* start newest products */}
            <NewestProducts/>
            {/* end newest products */}
        </Stack>
    )
}




