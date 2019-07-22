import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { ProductContext } from "./contexts";
import { CartContext } from "./contexts";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItemById = itemIndex => {
    //  const itemToRemoveId = itemToRemove.id
    const newCart = [...cart];
    newCart.splice(itemIndex, 1);
    setCart(newCart);
  };

  return (
    <div className="App">
      {/*? why is products and addItem wrapped in object*/}
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItemById }}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
