import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./page/shop/Shop";
import Cart from "./page/cart/Cart";
import Navbar from "./components/Navbar";
import "./App.css";
import { ShopContextProvider } from "./store/shop-context";

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
