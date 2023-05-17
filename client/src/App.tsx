
import "./App.css";
//// METHODS:
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//// COMPONENTS:
import Navbar from "./components/navbar/Navbar";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import Login from "./components/login/login"
import StoreItems from "./components/store-items/StoreItems";
import ItemDetails from "./components/item-details/ItemDetails";
import Menu from './components/menu/menu'
import ProductForm from './components/product-form/product-form'
//// State management:
import { userStore, UserState } from './zustand/UserStore';
import SellerStore from "./assets/seller-store/SellerStore";
import Success from "./components/after-checkout/success";
// import { useStore } from 'zustand';

//// STRIPE
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51N8hjDJKkXA9mV6ak5ut2w6TuNdUKdu9jIaUbFf8ttSFyaOAgLZD7EjFPY7i9ABX5zPEBVUNeluE8z0qiWP75qv400RR6hD0bp');


function App() {

  const { id } = userStore();

  const { loggedIn } = userStore()
  // console.log(loggedIn)

  return (
    <Elements stripe={stripePromise}>
      <Router>
        <Routes>
          <Route path='/login' element={
            <>
              <Navbar />
              <Login />
            </>
          } />

          <Route path={'/'} element={
            <>
              <Navbar />
              <ShoppingCart />
              <Menu />
              <StoreItems />
              <div id="detail">
                {/* <Outlet /> */}
              </div>
            </>
          } />

          <Route path={'/:id'} element={
            <>
              <Navbar />
              <ShoppingCart />
              <ItemDetails />
              <div id="detail">
                {/* <Outlet /> */}
              </div>
            </>
          } />

          <Route path={'/sell'} element={
            <>
              <Navbar />
              <Menu />
              <ProductForm />
            </>
          } />

          <Route path={`/sellers/${id}`} element={
            <>
              <Navbar />
              <Menu />
              <SellerStore />
            </>
          } />

          <Route path={`/checkoutsuccess`} element={
            <>
              <Navbar />
              <Menu />
              <Success />
            </>
          } />

          <Route path={`/checkoutfail`} element={
            <>
              <Navbar />
              <Menu />
              <Success />
            </>
          } />

        </Routes>
      </Router>
    </Elements>
  );
}

export default App;
