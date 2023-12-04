import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customers/pages/HomePage/HomePage'
import Cart from '../customers/components/Cart/Cart'
import Footer from '../customers/components/Footer/Footer'
import Product from '../customers/components/Product/Product'
import Navigation from '../customers/components/Navigation/Navigation'
import ProductDetails from '../customers/components/ProductDetails/ProductDetails'
import Checkout from '../customers/components/Checkout/Checkout'
import Order from '../customers/components/Order/Order'
import OrderDetails from '../customers/components/Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
      <Routes>

        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
        <Route path='/:product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
