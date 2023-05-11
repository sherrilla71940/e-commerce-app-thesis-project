import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import StoreItems from "./components/store-items/StoreItems";
import ItemDetails from './components/item-details/ItemDetails.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
