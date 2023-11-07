import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
export { ProductContext };
