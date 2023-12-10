import React, { useEffect } from 'react'
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
import ProductDetails2 from '../customers/components/ProductDetails/ProductDetails2'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios';

const CustomerRouters = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
    const response = await axios.get("https://fakestoreapi.com/products");
    // Assuming `setProducts` is a function that sets the products in your state
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error("Error fetching products:", error);
    // Handle the error, e.g., show a message to the user or set an error state
  }
}

useEffect(()=>{
  fetchProducts();
},[])
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
        <Route path='/product' element={<Product/>}></Route>
        {/* <Route path='/:product/:productId' element={<ProductDetails/>}></Route> */}
        <Route path='/:product/:productId' element={<ProductDetails2/>}></Route>
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
