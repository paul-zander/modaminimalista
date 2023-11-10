import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.amount,
      0
    );
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    const amount = cart.reduce((acc, cartItem) => acc + cartItem.amount, 0);
    setItemAmount(amount);
  }, [cart]);

  function addToCart(product, id, selectedSize) {
    const existingItem = cart.find(
      (item) => item.id === id && item.selectedSizes.includes(selectedSize)
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id && item.selectedSizes.includes(selectedSize)
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          ...product,
          amount: 1,
          id: `${product.id}-${selectedSize}`,
          selectedSizes: [selectedSize],
        },
      ]);
    }
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function increaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);
    const size = cartItem.selectedSizes[0];
    console.log(size);

    addToCart(cartItem, id, cartItem.selectedSizes[0]);
    console.log(cart);
  }

  function decreaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem.amount > 1) {
      setCart(
        cart.map((item) =>
          item === cartItem ? { ...item, amount: item.amount - 1 } : item
        )
      );
    } else if (cartItem.amount === 1) {
      removeFromCart(cartItem.id);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };
