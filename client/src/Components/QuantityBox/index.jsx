import { IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function QauntityBox() {
    const [dynamicQuantity, setdynamicQuantity] = useState(1);
    return (
        <Stack className='quantityChanger' direction={'row'} alignItems={'center'} gap={2} >
            <IconButton onClick={() => setdynamicQuantity(dynamicQuantity + 1)} sx={{ bgcolor: 'var(--text-clr)', boxShadow: '0 1px rgba(0,0,0,.2)', border: '1px solid rgba(0,0,0,.1)', padding: { xs: '4px', sm: '10px' } }}><FaPlus color='var(--primary-clr)' fontSize={20} /></IconButton>
            <Typography width={'30px'} textAlign={'center'} fontSize={20}>{dynamicQuantity}</Typography>
            <IconButton disabled={dynamicQuantity == 0} onClick={() => setdynamicQuantity(dynamicQuantity - 1)} sx={{ bgcolor: 'var(--text-clr)', boxShadow: '0 1px rgba(0,0,0,.2)', border: '1px solid rgba(0,0,0,.1)', padding: { xs: '4px', sm: '10px' }, "&:disabled": { opacity: .5 } }}><FaMinus color='var(--primary-clr)' fontSize={20} /></IconButton>
        </Stack>
    )
}
