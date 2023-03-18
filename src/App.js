import React from "react";
import './App.css';
//Context
import PruductsContextProvider from "./context/PruductsContextProvider";
import CartContextProvider from "./context/CartContextProvider";
//Components
import Store from "./components/Store";
import ProductDitails from "./components/ProductDitails";
import { Route,Routes,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShopCart from "./components/ShopCart";


const App=()=>{
 return(
  <PruductsContextProvider>
    <CartContextProvider>
      <Navbar/>
        <Routes>
          <Route path="/products/:id" element={<ProductDitails/>}/>
          <Route path="/products" element={<Store/>}/>
          <Route path="/cart" element={<ShopCart/>}/>
          <Route path="/*" element={<Navigate to="/products"/>}/>
        </Routes>
    </CartContextProvider>
    
  </PruductsContextProvider>
 )
}
export default App;