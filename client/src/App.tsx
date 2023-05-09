
import "./App.css";
//// METHODS:
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { initializeApp } from 'firebase/app'
//// COMPONENTS:
import Navbar from "./components/navbar/Navbar";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import Login from "./components/login/login"
import StoreItems from "./components/store-items/StoreItems";

//Ref: https://youtu.be/rQvOAnNvcNQ
const firebaseConfig = {
  apiKey: "AIzaSyB-S_yjhrbbMBmLHJtI5PdIqHKA1KhKsTE",
  authDomain: "test-ba3ab.firebaseapp.com",
  projectId: "test-ba3ab",
  storageBucket: "test-ba3ab.appspot.com",
  messagingSenderId: "209300872871",
  appId: "1:209300872871:web:bb37dac326ca36a11cc582"
};

const firebaseApp = initializeApp(firebaseConfig);

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
