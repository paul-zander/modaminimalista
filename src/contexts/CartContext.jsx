import { createContext, useState, useEffect, useContext } from "react";
import { ModalContext } from "./ModalContext";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const { setIsVisible } = useContext(ModalContext);

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

  // function checkIfSizeSelected(selectedSize) {
  //   if (!selectedSize) {
  //   }
  // }

  // function addToCartIfNoSizes(product, id) {
  //   if (!product.availableSizes) {
  //     const existingItem = cart.find((item) => item.id === id);
  //     if (existingItem) {
  //       setCart([
  //         ...cart,
  //         { ...existingItem, amount: existingItem.amount + 1 },
  //       ]);
  //     } else {
  //       setCart([...cart, { ...product, amount: product.amount + 1 }]);
  //     }
  //     return true;
  //   }
  //   return false;
  // }

  function addToCartIfNoSizes(product, id) {
    console.log(id);
    if (!product.availableSizes) {
      const existingItem = cart.find((item) => item.id === +id);
      console.log(existingItem);

      if (existingItem) {
        setCart(
          cart.map((item) =>
            item.id === +id
              ? { ...existingItem, amount: existingItem.amount + 1 }
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, amount: 1 }]);
      }

      return true;
    }

    return false;
  }

  function addToCart(product, id, selectedSize) {
    // if (!product.availableSizes) {
    //   setCart([...cart, { ...product, amount: 1 }]);
    //   return;
    // }

    if (addToCartIfNoSizes(product, id)) {
      return;
    }

    if (!selectedSize) {
      setIsVisible(true);
      return;
    }

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

  console.log(cart);

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  // function increaseAmount(id) {
  //   const cartItem = cart.find((item) => item.id === id);
  //   console.log(cartItem);
  //   const size = cartItem.selectedSizes[0];
  //   // console.log(size);

  //   if (!size) {
  //     addToCart(cartItem, id);
  //   } else {
  //     addToCart(cartItem, id, cartItem.selectedSizes[0]);
  //   }
  // }

  function increaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const size = cartItem.selectedSizes && cartItem.selectedSizes[0];

      if (!size) {
        addToCart(cartItem, id);
      } else {
        addToCart(cartItem, id, size);
      }
    } else {
      // Handle the case when cartItem is undefined
      console.error("Invalid cart item");
    }
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
