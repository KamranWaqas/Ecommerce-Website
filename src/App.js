import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customers/components/Cart/Cart.jsx';
import Checkout from './customers/components/Checkout/Checkout.jsx';
import Footer from './customers/components/Footer/Footer.jsx';
import Navigation from './customers/components/Navigation/Navigation.jsx'
import Order from './customers/components/Order/Order.jsx';
import OrderDetails from './customers/components/Order/OrderDetails.jsx';
import Product from './customers/components/Product/Product.jsx';
import ProductDetails from './customers/components/ProductDetails/ProductDetails.jsx';
import HomePage from './customers/pages/HomePage/HomePage.jsx';
import CustomerRouters from './Routers/CustomerRouters.jsx';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        {/* HERE WILL COME ADMIN ROUTES */}
      </Routes>
      
    </div>
  );
}

export default App;
