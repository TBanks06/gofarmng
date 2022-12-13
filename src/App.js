
import './App.css';

import Header from "./Components/Header"
import ProductPage from "./Pages/ProductsPage/ProductPage"
import SellersDashboard from './Pages/Sellers Dashboard/SellersDashboard';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Forgot from './Pages/Forgotpass/forgot';
import Resetpassword from './Pages/Resetpassword/resetpassword'
import Order from './Pages/OrderPage/order';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductPage/>
      <SellersDashboard/>
       
      
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="SignUp" element={<SignUp/>}/>
    <Route path='Forgot' element={<Forgot/>}/>
    <Route path='Resetpassword' element={<Resetpassword/>}/>
    <Route path='Order' element={<Order/>}/>
      </Routes>
    </BrowserRouter>
    </div>






  

  );
}

export default App;
