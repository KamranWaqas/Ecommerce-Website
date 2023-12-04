import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={5}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:45,height:45,bgcolor:"#9155fd"}}>R</Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Raam</p>
                    <p className='opacity-70'>April 5, 2013</p>
                </div>

            </div>
            <Rating readOnly precision={.5} value={4.5} name="half-rating"></Rating>
            <p>nice product! i love this shirt</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
