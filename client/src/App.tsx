
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import Login from "./components/login/login"
import StoreItems from "./components/store-items/StoreItems";

function App() {
  // const navigate = useNavigate()

  useEffect(() => {
    // navigate('/products')
  }, [])

  return (
      <Router>
        <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/products' element={
          <>
            <Navbar />
            <ShoppingCart />
            <StoreItems/>
            {/* <div id="detail">
              <Outlet />
            </div> */}
          </>
          }/>
        </Routes>
      </Router>

  );
}

export default App;
