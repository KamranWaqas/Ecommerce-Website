import { Route, Routes } from 'react-router-dom';
import './App.css';
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
