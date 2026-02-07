
import React from "react";
import './../styles/App.css';
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import WishList from "./WishList/WishList";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        
        <Product />
        
        <WishList />
        <Cart />

    </div>
  )
}

export default App
