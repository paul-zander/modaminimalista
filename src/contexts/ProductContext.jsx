import { createContext, useState, useEffect, useRef } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [allClothing, setAllClothing] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      const filteredProducts = data.filter((product) => {
        return (
          product.category === "men's clothing" ||
          product.category === "women's clothing"
        );
      });

      const productsWithSizes = filteredProducts.map((product) =>
        product.id !== 1 // product with id === 1 is a bag
          ? {
              ...product,
              amount: 0,
              availableSizes: { S: "S", M: "M", L: "L", XL: "XL" },
              selectedSizes: [],
            }
          : { ...product, amount: 0 }
      );

      setProducts(productsWithSizes);
      setAllClothing(productsWithSizes);
    }

    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        allClothing,
        setAllClothing,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
export { ProductContext };
