
import "./App.css";
//// METHODS:
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginFunction } from "./firebaseAuth/auth";
//// COMPONENTS:
import Navbar from "./components/navbar/Navbar";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import Login from "./components/login/login"
import StoreItems from "./components/store-items/StoreItems";

function App() {
 
  useEffect(() => {
    // navigate('/products')
  }, [])

  return (
      <Router>
        <Routes>
        <Route path='/login' element={
          <>
          <Navbar/>
          <Login />
          </>
          } />
        
        <Route path='/' element={
          <>
            <Navbar />
            <ShoppingCart />
            <StoreItems/>
            {/* <div id="detail">
              <Outlet />
            </div> */}
          </>
          }/>
        
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
