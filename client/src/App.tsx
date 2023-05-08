
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import StoreItems from "./components/store-items/StoreItems";

function App() {

  return (
    <>
      <Navbar />
      <StoreItems />
    </>
  );
}

export default App;
