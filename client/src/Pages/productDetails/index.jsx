import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import {  Stack } from '@mui/material';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useParams } from 'react-router-dom';
import ProductDetailsTop from './ProductDeatilsTop';
import ProductDetailsBottom from './ProductDeatilsbottom'




export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await res.json()
                setProduct(data)

            } catch (error) {
                console.log(error);
            }

        })()

    }, []);

    return (
        <>
            <Stack width={{ lg: '85%', sm: '90%', xs: "95%" }} mx={'auto'} my={2} gap={2}>
                {/* start product details top section */}
              <ProductDetailsTop product={product}/>
                {/* end product details top section */}

                {/* end product details bottom section */}
                <ProductDetailsBottom product={product}/>
                {/* end product details bottom section */}




            </Stack>
        </>
    );
}

