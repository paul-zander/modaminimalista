import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [allClothing, setAllClothing] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const filteredProducts = data.filter((product) => {
          return (
            product.category === "men's clothing" ||
            product.category === "women's clothing"
          );
        });

        const productsWithSizes = filteredProducts.map((product) =>
          product.id !== 1
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
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
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
