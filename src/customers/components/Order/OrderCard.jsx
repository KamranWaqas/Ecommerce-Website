import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

    const navigate =useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className=' rounded-md pb-3'>
     
        <Grid container spacing={0} sx={{ justifyContent: "space-between"}} className='p-4 rounded-md shadow-md cursor-pointer hover:shadow-xl'>

            {/* LEFT PART */}
            <Grid item xs={6}>
                <div className='flex'>
                    <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/v/c/n/30-586035-v-mart-original-imagmh7fzah3r2jj.jpeg?q=70" alt="" className='w-[5rem] h-[5rem] object-cover object-top'/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men Slim Mid Rise Black Jeans update</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>

                    </div>
                </div>
            </Grid>

            {/* CENTER PART */}
            <Grid container xs={2}>
                <p>Rs. 2999</p>
            </Grid>

            {/* RIGHT PART */}
            <Grid container xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{widows:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered on March 03
                    </span>
                </p>
                <p className='text-xs'>Your Item Has Been Delivered</p>
                </div>}
                {false && <p>
                    <span>
                        Expected Delivery on March 03
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard
