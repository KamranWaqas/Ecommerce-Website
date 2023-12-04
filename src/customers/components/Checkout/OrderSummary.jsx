import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-md border mb-3'>
        <AddressCard/>

      </div>

      <div>

      <div className='lg:grid grid-cols-3 relative'>
        <div className='grid col-span-2 gap-y-4'>
          {[1,1,1,1].map((item)=><CartItem/>)}
        </div>

        <div className='pl-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border rounded-lg p-4'>
            <p className='uppercase font-bold opacity-60 pb-3'>Price Details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>Rs. 4697</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>-Rs. 3419</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
              </div>
              <hr/>
              <div className='flex justify-between pt-3 text-black font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>Rs. 1278</span>
              </div>
            </div>
            <Button className='w-full mt-5' variant="contained" sx={{px:"2.5rem", py:".7rem",bgcolor:"#9155fd"}}>
                    Checkout
            </Button>
          </div>
          
        </div>
        
      </div>

      
      
    </div>
    </div>
  )
}

export default OrderSummary
