import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const navigate=useNavigate();

  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }

  return (
    <div className='pt-8'>

      <div className='lg:grid grid-cols-3 lg:px-16 relative px-4'>
        <div className='grid col-span-2 gap-y-4 border rounded-lg p-2'>
          <h1 className='text-2xl font-extrabold text-gray-800 py-3 pl-1'>Cart Items</h1>
          {[1,1,1,1].map((item)=><CartItem/>)}
        </div>

        <div className=' sticky top-20 h-[100vh] mt-5 lg:mt-0 px-2'>
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
            <Button onClick={handleCheckout} className='w-full mt-5' variant="contained" sx={{px:"2.5rem", py:".7rem",bgcolor:"#9155fd"}}>
                    Checkout
            </Button>
          </div>
          
        </div>
        
      </div>

      
      
    </div>
  )
}

export default Cart
