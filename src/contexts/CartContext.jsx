import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, id) {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...cartItem, amount: cartItem.amount + 1 } : item
        )
      );
    } else {
      setCart([...cart, newItem]);
    }
  }

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };
