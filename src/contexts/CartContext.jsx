import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, id) {
    const newItem = { ...product, amount: 1 };
  }

  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };
