
import "./App.css";
//// METHODS:
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
//// COMPONENTS:
import Navbar from "./components/navbar/Navbar";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import Login from "./components/login/login"
import StoreItems from "./components/store-items/StoreItems";
import ItemDetails from "./components/item-details/ItemDetails";
import Menu from './components/user-menu/UserMenu'
//// State management:
import { userStore, UserState } from './zustand/UserStore';
import { useStore } from 'zustand';

function App() {
 
const { loggedIn } = userStore()
console.log(loggedIn)

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
        
        <Route path={'/'} element={
          <>
            <Navbar />
            <ShoppingCart />
            <Menu/>
            <StoreItems/>
            <div id="detail">
              {/* <Outlet /> */}
            </div>
          </>
          }/>
        
         <Route path={'/:id'} element={
          <>
            <Navbar />
            <ShoppingCart />
            <ItemDetails/>
            <div id="detail">
              {/* <Outlet /> */}
            </div>
          </>
          }/>

        </Routes>
      </Router>

  );
}

export default App;
