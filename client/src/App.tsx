
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import Login from "./components/login/login"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/products')
  }, [])

  return (
    <>
      <Login/>
      {/* <Navbar />
      <ShoppingCart />
      <div id="detail">
        <Outlet />
      </div> */}
    </>
  );
}

export default App;
