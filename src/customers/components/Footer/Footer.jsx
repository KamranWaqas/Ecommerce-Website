import React from 'react'
import { Button, Grid, Typography } from '@mui/material'

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:"black", color:"white",py:3}}>

            <Grid item xs={12} sm={6} md={3}>
                <Typography className=' pt-3' variant='h6' sx={{fontWeight:"bold"}} > Company </Typography>
                <div className='md:flex flex-col'>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > About </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Blogs </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Press </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Jobs </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Partners </Button>
                </div>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pt-3' variant='h6' sx={{fontWeight:"bold"}}> Solutions </Typography>
                <div className='md:flex flex-col'>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Marketing </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Analytics </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Commerce </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Insights </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Support </Button>
                </div>
                

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pt-3' variant='h6' sx={{fontWeight:"bold"}}> Documentation </Typography>
                <div className='md:flex flex-col'>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Guides </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Api Status </Button>
                </div>

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pt-3' variant='h6' sx={{fontWeight:"bold"}}> Legal </Typography>
                <div className='md:flex flex-col'>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Claim </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > Privacy </Button>
                    <Button className='pb-5' variant='h6' sx={{textTransform: 'none', color:'gray', '&:hover': {color: 'white',},}} > 
                    Terms </Button>
                </div>
                
            </Grid>

            <Grid className='pt-10' item xs={12}>
                 <Typography variant='body2' component='p' align='center'>
                    &copy; 2023 My Company. All Rights Reserved.
                 </Typography>
            </Grid>

        </Grid>
    </div>
  )
}

export default Footer
