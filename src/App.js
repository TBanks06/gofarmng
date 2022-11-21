
import './App.css';

import Header from "./Components/Header"
import ProductPage from "./Pages/ProductsPage/ProductPage"
import SellersDashboard from './Pages/Sellers Dashboard/SellersDashboard';
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductPage/>
      <SellersDashboard/>
       
      
    </div>
  );
}

export default App;
