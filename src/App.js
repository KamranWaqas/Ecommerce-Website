import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouters from './Routers/CustomerRouters.jsx';
import ScrollToTop from './customers/components/ScrollToTop.jsx';

function App() {
  return (
    <div className="">

      <ScrollToTop/>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        {/* HERE WILL COME ADMIN ROUTES */}
      </Routes>
      
    </div>
  );
}

export default App;
