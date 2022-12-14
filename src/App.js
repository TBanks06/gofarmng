import "./App.css";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Forgot from "./Pages/Forgotpass/forgot";
import Resetpassword from "./Pages/Resetpassword/resetpassword";
import Order from "./Pages/OrderPage/order";

import Shippingdets from "./Pages/Shippingdets/shippingdets";

import ProductView from "./Pages/Sellers Dashboard/ProductView";
import Carousel from "./Components/Carouseldiv";
import SideBar from "./Components/ShippingComponent/SideBar/SideBar";
import Carouseldiv from "./Components/Carouseldiv";
import ProductUpload from "./Components/ProductUpload";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import Home from './Pages/Homepage'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Forgot" element={<Forgot />} />
          <Route path="Resetpassword" element={<Resetpassword />} />
          <Route path="Order" element={<Order />} />
          <Route path="Shippingdets" element={<Shippingdets />} />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Forgot" element={<Forgot />} />
            <Route path="Resetpassword" element={<Resetpassword />} />
            <Route path="Order" element={<Order />} />
            <Route path="productview" element={<ProductView />} />
            <Route path="carousel" element={<Carouseldiv />} />
            <Route path="sidebar" element={<SideBar />} />
            <Route path="productupload" element={<ProductUpload />} />
            <Route path="productpage" element={<ProductPage />} />
          </Routes>
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
